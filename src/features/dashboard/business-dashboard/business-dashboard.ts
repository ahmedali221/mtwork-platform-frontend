import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions, Chart, registerables } from 'chart.js';
import { MeetingsService } from '../../../services/meetings';
import { ProjectService } from '../../../services/project-service';
import { AttendanceService } from '../../../services/attendance';
import { TeamsService } from '../../../services/teams';
import { HrService } from '../../../services/hr-service';
import { ContractService } from '../../../services/contract-service';
import { LanguageService } from '../../../services/language.service';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

Chart.register(...registerables);

/** Per-widget load status — lets the UI tell "loaded empty" from "failed". */
type WidgetStatus = 'loading' | 'ok' | 'error';

/** Wrap a source so a failure is observable as `{ ok: false }` rather than
 *  collapsing into an empty array (which is indistinguishable from no data). */
interface LoadResult<T> { ok: boolean; data: T; }

interface KpiCard {
  /** Stable identifier for value binding — never match on the display label. */
  id: 'totalProjects' | 'activeProjects' | 'employees' | 'contracts' | 'attendanceRate';
  icon: string;
  label: string;
  value: number | string;
  change: number;
  up: boolean;
}

interface MeetingCard {
  icon: string;
  title: string;
  date: string;
  time: string;
  status: 'past' | 'now' | 'upcoming';
  link?: string;
}

interface TaskItem {
  name: string;
  project: string;
  projectColor: string;
  assigneeAvatar: string;
  status: 'done' | 'in-progress' | 'not-started';
}

interface AttendanceItem {
  name: string;
  role: string;
  avatar: string;
  time: string;
}

@Component({
  selector: 'app-business-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, BaseChartDirective, TranslocoModule],
  templateUrl: './business-dashboard.html',
  styleUrls: ['./business-dashboard.css']
})
export class BusinessDashboardComponent implements OnInit, OnDestroy {
  private meetingsService  = inject(MeetingsService);
  private projectService   = inject(ProjectService);
  private attendanceService = inject(AttendanceService);
  private teamsService     = inject(TeamsService);
  private hrService        = inject(HrService);
  private contractService  = inject(ContractService);
  readonly lang            = inject(LanguageService);

  isLoading = signal(true);
  currentSlide = signal(3);
  private slideTimer: ReturnType<typeof setInterval> | null = null;

  /** C-3: real completed % shown in the project-status donut centre. */
  projectCompletedPercent = 0;

  /* ── KPI Stats ─────────────────────────────────────── */
  kpiStats: KpiCard[] = [
    { id: 'totalProjects',  icon: 'folder',      label: 'dashboard.kpi.totalProjects',  value: 0,    change: 20, up: true  },
    { id: 'activeProjects', icon: 'folder_open', label: 'dashboard.kpi.activeProjects', value: 0,    change: 20, up: false },
    { id: 'employees',      icon: 'badge',       label: 'dashboard.kpi.employees',      value: 0,    change: 20, up: true  },
    { id: 'contracts',      icon: 'description', label: 'dashboard.kpi.totalContracts', value: 0,    change: 20, up: false },
    { id: 'attendanceRate', icon: 'groups',      label: 'dashboard.kpi.attendanceRate', value: '0%', change: 20, up: true  },
  ];

  /** Lookup a KPI card by its stable id (never by display label). */
  private setKpi(id: KpiCard['id'], value: number | string): void {
    const card = this.kpiStats.find(k => k.id === id);
    if (card) card.value = value;
  }

  /* ── Per-widget load status (ER-1 / ER-2) ────────────── */
  meetingsStatus = signal<WidgetStatus>('loading');
  tasksStatus    = signal<WidgetStatus>('loading');
  attendanceStatus = signal<WidgetStatus>('loading');
  /** Drives both the project donut and projects-by-manager charts. */
  chartsStatus   = signal<WidgetStatus>('loading');

  /* ── Meetings ───────────────────────────────────────── */
  // M-1: no fallback mock records — starts empty, filled only from the API.
  meetings: MeetingCard[] = [];

  /* ── Tasks Overview ─────────────────────────────────── */
  // No Task API is integrated in this phase — list is empty and shows the
  // empty state (E-2). Real data wiring is deferred to a later phase.
  taskItems: TaskItem[] = [];

  /* ── Attendance ─────────────────────────────────────── */
  // No Attendance API is integrated in this phase — list is empty and shows
  // the empty state (E-3). Real data wiring is deferred to a later phase.
  attendanceItems: AttendanceItem[] = [];

  /* ── Chart Month Labels ─────────────────────────────── */
  private months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];

  /* ── Project Status Donut ───────────────────────────── */
  projectStatusData: ChartData<'doughnut'> = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [{ data: [77, 15, 8], backgroundColor: ['#36c220', '#fcbe04', '#e6e6e6'], borderWidth: 0, hoverOffset: 4 }]
  };
  projectStatusOptions: ChartOptions<'doughnut'> = {
    responsive: true, maintainAspectRatio: false,
    cutout: '72%',
    plugins: { legend: { display: false }, tooltip: { enabled: true } }
  };

  /* ── Projects by Manager Bar ─────────────────────────── */
  projectsByManagerData: ChartData<'bar'> = {
    labels: ['Salem Ali', 'Salem Ali', 'Salem Ali', 'Salem Ali', 'Salem Ali'],
    datasets: [
      { data: [85, 60, 45, 35, 25], backgroundColor: '#f87748', borderRadius: 12, barThickness: 32 },
    ]
  };
  projectsByManagerOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 } } },
      y: { grid: { display: false }, border: { display: false }, ticks: { color: '#201b13', font: { size: 12 } } }
    }
  };

  /* ── Task Status Donut ───────────────────────────────── */
  taskStatusData: ChartData<'doughnut'> = {
    labels: ['Completed', 'Not Started', 'In Progress'],
    datasets: [{ data: [11, 24, 26], backgroundColor: ['#36c220', '#e6e6e6', '#2e358f'], borderWidth: 0, hoverOffset: 4 }]
  };
  taskStatusOptions: ChartOptions<'doughnut'> = {
    responsive: true, maintainAspectRatio: false,
    cutout: '72%',
    plugins: { legend: { display: false }, tooltip: { enabled: true } }
  };

  /* ── Tasks by Priority Stacked Bar ───────────────────── */
  tasksByPriorityData: ChartData<'bar'> = {
    labels: this.months,
    datasets: [
      { label: 'High',   data: [400, 500, 600, 550, 480, 520], backgroundColor: '#f03d3d', stack: 'a', borderRadius: 0 },
      { label: 'Medium', data: [300, 350, 400, 380, 320, 360], backgroundColor: '#f87748', stack: 'a', borderRadius: 0 },
      { label: 'Low',    data: [200, 250, 300, 280, 220, 260], backgroundColor: '#e6e6e6', stack: 'a', borderRadius: 4 },
    ]
  };
  tasksByPriorityOptions: ChartOptions<'bar'> = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', align: 'end', labels: { boxWidth: 10, font: { size: 11 }, color: '#999999' } } },
    scales: {
      x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 } } },
      y: { stacked: true, grid: { color: '#f2f2f2' }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 }, callback: v => `${Number(v)/1000}k` } }
    }
  };

  /* ── Tasks Timeline Area Chart ───────────────────────── */
  tasksTimelineData: ChartData<'line'> = {
    labels: this.months,
    datasets: [{
      data: [300000, 450000, 280000, 620000, 500000, 750000],
      fill: true,
      borderColor: '#36c220',
      backgroundColor: 'rgba(54, 194, 32, 0.15)',
      tension: 0.45,
      pointRadius: 0,
      pointHoverRadius: 6,
      borderWidth: 2,
    }]
  };
  tasksTimelineOptions: ChartOptions<'line'> = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 } } },
      y: { grid: { color: '#f2f2f2' }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 }, callback: v => `${Number(v)/1000}k` } }
    }
  };

  /* ── Team Size Bar ───────────────────────────────────── */
  teamSizeData: ChartData<'bar'> = {
    labels: ['TickPro Team', 'TickPro Team', 'TickPro Team', 'TickPro Team', 'TickPro Team'],
    datasets: [{ data: [2, 5, 3, 4, 3], backgroundColor: '#2e358f', borderRadius: 11, barThickness: 32 }]
  };
  teamSizeOptions: ChartOptions<'bar'> = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false }, ticks: { color: '#999999', font: { size: 10 } } },
      y: { grid: { color: '#f2f2f2' }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 } } }
    }
  };

  /* ── Tasks per Team Stacked Bar ──────────────────────── */
  tasksPerTeamData: ChartData<'bar'> = {
    labels: this.months,
    datasets: [
      { label: 'Completed',   data: [300, 400, 500, 450, 380, 420], backgroundColor: '#36c220', stack: 'b', borderRadius: 0 },
      { label: 'Not Started', data: [200, 250, 300, 280, 220, 260], backgroundColor: '#e6e6e6', stack: 'b', borderRadius: 0 },
      { label: 'In Progress', data: [150, 200, 250, 230, 180, 200], backgroundColor: '#2e358f', stack: 'b', borderRadius: 6 },
    ]
  };
  tasksPerTeamOptions: ChartOptions<'bar'> = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 } } },
      y: { stacked: true, grid: { color: '#f2f2f2' }, border: { display: false }, ticks: { color: '#999999', font: { size: 11 }, callback: v => `${Number(v)/1000}k` } }
    }
  };

  /* ── Lifecycle ───────────────────────────────────────── */
  ngOnInit(): void {
    this.loadDashboardData();
    this.startBannerSlider();
  }

  ngOnDestroy(): void {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  private startBannerSlider(): void {
    this.slideTimer = setInterval(() => {
      this.currentSlide.update(s => (s + 1) % 5);
    }, 4000);
  }

  setSlide(index: number): void {
    this.currentSlide.set(index);
  }

  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons. */
  reload(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);

    // Reset statuses to loading at the start of every (re)load.
    this.meetingsStatus.set('loading');
    this.chartsStatus.set('loading');
    // Tasks & Attendance have no API integrated this phase → loaded-empty, never error.
    this.tasksStatus.set('ok');
    this.attendanceStatus.set('ok');

    // Wrap each source so a failure is distinguishable from an empty result
    // (ER-2). `ok: false` means the call errored; `ok: true` with empty data
    // means it succeeded but returned nothing.
    const wrap = <T>(src: Observable<T>, fallback: T): Observable<LoadResult<T>> =>
      src.pipe(
        map((data: T) => ({ ok: true, data } as LoadResult<T>)),
        catchError(() => of({ ok: false, data: fallback } as LoadResult<T>)),
      );

    forkJoin({
      meetings:  wrap<any>(this.meetingsService.getMeetings(), []),
      projects:  wrap<any>(this.projectService.getProjects(), []),
      hrList:    wrap<any>(this.hrService.getHRList(), { total: 0, result: [] }),
      contracts: wrap<any>(this.contractService.getContracts(1, 1), { data: [], pagination: { totalItems: 0 } }),
    }).subscribe(({ meetings, projects, hrList, contracts }) => {

      // ── Meetings (M-1: API-only, no mock) ─────────────────
      if (!meetings.ok) {
        this.meetings = [];
        this.meetingsStatus.set('error');
      } else {
        this.meetings = (meetings.data ?? []).slice(0, 4).map((m: any) => ({
          icon: 'video_call',
          title: m.title || 'Meeting',
          date: m.startTime ? new Date(m.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
          time: 'IST',
          status: this.getMeetingStatus(m),
          link: m.meetingLink
        }));
        this.meetingsStatus.set('ok');
      }

      // ── Charts status: errored only if projects failed to load ──
      this.chartsStatus.set(projects.ok ? 'ok' : 'error');

      const projectList = projects.ok ? (projects.data ?? []) : [];

      // ── KPI Stats from real data ──────────────────────────
      // C-1: bind by stable id, never by display label.
      // K-2: active count uses the same normalized status as the donut.
      if (projectList.length) {
        const active = projectList.filter((p: any) => this.normalizeProjectStatus(p.status) === 'in-progress').length;
        this.setKpi('totalProjects', projectList.length);
        this.setKpi('activeProjects', active);
      }

      // Employees count from HR
      if (hrList.ok && hrList.data?.total != null) {
        this.setKpi('employees', hrList.data.total);
      }

      // Contracts count
      if (contracts.ok && contracts.data?.pagination?.totalItems != null) {
        this.setKpi('contracts', contracts.data.pagination.totalItems);
      }

      // ── Chart data from projects ──────────────────────────
      if (projectList.length) {
        const projects = projectList;
        // K-2: single normalized status bucket reused everywhere.
        const done       = projects.filter((p: any) => this.normalizeProjectStatus(p.status) === 'completed').length;
        const inProgress = projects.filter((p: any) => this.normalizeProjectStatus(p.status) === 'in-progress').length;
        // K-3: guard against negative remainder when statuses don't bucket cleanly.
        const notStarted = Math.max(0, projects.length - done - inProgress);
        const total      = projects.length || 1;
        // C-3: bind the donut centre to the real completed percentage.
        this.projectCompletedPercent = Math.round(done / total * 100);
        this.projectStatusData = {
          labels: ['Completed', 'In Progress', 'Not Started'],
          datasets: [{
            data: [
              Math.round(done / total * 100),
              Math.round(inProgress / total * 100),
              Math.round(notStarted / total * 100)
            ],
            backgroundColor: [
              getComputedStyle(document.documentElement).getPropertyValue('--functional-success-500').trim() || '#36c220',
              getComputedStyle(document.documentElement).getPropertyValue('--brand-accent-500').trim() || '#fcbe04',
              getComputedStyle(document.documentElement).getPropertyValue('--brand-neutral-200').trim() || '#e6e6e6',
            ],
            borderWidth: 0, hoverOffset: 4
          }]
        };

        // Projects by manager
        const managerMap: Record<string, number> = {};
        projects.forEach((p: any) => {
          const mgr = p.managerName || p.managerId || 'Unknown';
          managerMap[mgr] = (managerMap[mgr] || 0) + 1;
        });
        const managers = Object.keys(managerMap).slice(0, 5);
        this.projectsByManagerData = {
          labels: managers,
          datasets: [{ data: managers.map(m => managerMap[m]), backgroundColor: '#f87748', borderRadius: 12, barThickness: 32 }]
        };
      }

      this.isLoading.set(false);
    });
  }

  /**
   * K-2: Normalize the assorted project-status shapes (string vocab + numeric
   * ids) into three canonical buckets so the Active KPI and the donut agree.
   * Anything unrecognised falls through to 'not-started'.
   */
  private normalizeProjectStatus(status: unknown): 'completed' | 'in-progress' | 'not-started' {
    const s = String(status ?? '').toLowerCase().trim();
    if (s === 'completed' || s === 'done' || s === '3') return 'completed';
    if (s === 'in-progress' || s === 'inprogress' || s === 'active' || s === '1' || s === '2') return 'in-progress';
    return 'not-started';
  }

  private getMeetingStatus(m: any): 'past' | 'now' | 'upcoming' {
    const now = new Date();
    const start = m.startTime ? new Date(m.startTime) : null;
    const end   = m.endTime   ? new Date(m.endTime)   : null;
    if (!start) return 'upcoming';
    if (end && now >= start && now <= end) return 'now';
    if (now > (end ?? start)) return 'past';
    return 'upcoming';
  }

  getInitials(name: string): string {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }

  getStatusLabel(s: TaskItem['status']): string {
    return s === 'done' ? 'Done' : s === 'in-progress' ? 'In Progress' : 'Not Started';
  }
}
