import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions, Chart, registerables } from 'chart.js';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MeetingsService } from '../../../services/meetings';
import { ProjectService } from '../../../services/project-service';
import { ContractService } from '../../../services/contract-service';
import { ReportService } from '../../../services/report.service';
import { Meeting } from '../../../models/meeting.model';
import { Project, ProjectStatus } from '../../../models/project';
import { Contract } from '../../../models/contract-models';

Chart.register(...registerables);

// ── Status buckets ───────────────────────────────────────────────────────
const COMPLETED_STATUSES:   ProjectStatus[] = ['done', 'completed'];
const IN_PROGRESS_STATUSES: ProjectStatus[] = ['in-progress', 'pending'];

// ── CSS variable helper ──────────────────────────────────────────────────
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ── Local interfaces ─────────────────────────────────────────────────────
interface MeetingCard {
  id:     number;
  title:  string;
  date:   string;
  status: 'past' | 'now' | 'upcoming';
  link:   string;
}

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslocoModule,
    BaseChartDirective,
  ],
  templateUrl: './report-list.html',
  styleUrls: ['./report-list.css'],
})
export class ReportListComponent implements OnInit {
  private meetingsService = inject(MeetingsService);
  private projectService  = inject(ProjectService);
  private contractService = inject(ContractService);
  private reportService   = inject(ReportService);

  // ── Section 1: Meetings ──────────────────────────────────────────────
  meetingsLoading = signal(true);
  meetingsError   = signal<string | null>(null);
  meetings        = signal<MeetingCard[]>([]);

  // ── Section 2: Projects ──────────────────────────────────────────────
  projectsLoading  = signal(true);
  projectsError    = signal<string | null>(null);
  donutCenterLabel = signal('0%');

  // Chart data — reassigned after API load so ng2-charts re-renders
  projectStatusData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [], borderWidth: 0, hoverOffset: 4 }],
  };
  projectStatusOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
  };

  projectsByManagerData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: '', borderRadius: 4, barThickness: 14 }],
  };
  projectsByManagerOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false }, ticks: { color: '', font: { size: 11 } } },
      y: { grid: { display: false }, border: { display: false }, ticks: { color: '', font: { size: 12 } } },
    },
  };

  // ── Section 3: Contracts ─────────────────────────────────────────────
  contractsLoading = signal(true);
  contractsError   = signal<string | null>(null);
  contracts        = signal<Contract[]>([]);
  downloading      = signal<Record<string, boolean>>({});

  // ── Lifecycle ────────────────────────────────────────────────────────
  ngOnInit(): void {
    // Meetings + projects load together (both needed for the analytics section)
    forkJoin({
      meetings: this.meetingsService.getMeetings().pipe(catchError(() => of([]))),
      projects: this.projectService.getProjects().pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ meetings, projects }) => {
        this.processMeetings(meetings as Meeting[]);
        this.processProjects(projects as Project[]);
      },
      error: () => {
        this.meetingsError.set('reports.errors.meetings');
        this.projectsError.set('reports.errors.projects');
        this.meetingsLoading.set(false);
        this.projectsLoading.set(false);
      },
    });

    // Contracts load independently — its own loading/error state
    this.contractService.getContracts(1, 100).subscribe({
      next: res => {
        this.contracts.set(res.data);
        this.contractsLoading.set(false);
      },
      error: () => {
        this.contractsError.set('reports.errors.contracts');
        this.contractsLoading.set(false);
      },
    });
  }

  // ── Private helpers ──────────────────────────────────────────────────

  private processMeetings(raw: Meeting[]): void {
    this.meetings.set(
      raw.slice(0, 4).map(m => ({
        id:     m.id,
        title:  m.title || 'Meeting',
        date:   m.startTime
                  ? new Date(m.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : '',
        status: this.getMeetingStatus(m),
        link:   m.meetingLink || '',
      }))
    );
    this.meetingsLoading.set(false);
  }

  private processProjects(projects: Project[]): void {
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;
    const managerMap = new Map<string, number>();

    for (const p of projects) {
      if (COMPLETED_STATUSES.includes(p.status))        completed++;
      else if (IN_PROGRESS_STATUSES.includes(p.status)) inProgress++;
      else                                               notStarted++;

      const mgr = p.managerId ?? 'Unassigned';
      managerMap.set(mgr, (managerMap.get(mgr) ?? 0) + 1);
    }

    const total = projects.length || 1;
    this.donutCenterLabel.set(`${Math.round((completed / total) * 100)}%`);

    // Read CSS variables once for chart.js color strings
    const successColor = getCSSVar('--functional-success-500');
    const warningColor = getCSSVar('--functional-warning-500');
    const neutralColor = getCSSVar('--ui-border');
    const barColor     = getCSSVar('--brand-tertiary-500');
    const tickMuted    = getCSSVar('--ui-text-muted');
    const tickMain     = getCSSVar('--ui-text-main');

    // Doughnut
    this.projectStatusData = {
      labels: [],
      datasets: [{
        data: [completed, inProgress, notStarted],
        backgroundColor: [successColor, warningColor, neutralColor],
        borderWidth: 0,
        hoverOffset: 4,
      }],
    };

    // Horizontal bar — top 6 managers sorted descending
    const entries = [...managerMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    this.projectsByManagerData = {
      labels: entries.map(([id]) => id.length > 14 ? id.slice(0, 14) + '…' : id),
      datasets: [{
        data: entries.map(([, count]) => count),
        backgroundColor: barColor,
        borderRadius: 4,
        barThickness: 14,
      }],
    };

    this.projectsByManagerOptions = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickMuted, font: { size: 11 } },
        },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickMain, font: { size: 12 } },
        },
      },
    };

    this.projectsLoading.set(false);
  }

  private getMeetingStatus(m: Meeting): 'past' | 'now' | 'upcoming' {
    const now   = new Date();
    const start = m.startTime ? new Date(m.startTime) : null;
    const end   = m.endTime   ? new Date(m.endTime)   : null;
    if (!start) return 'upcoming';
    if (end && now >= start && now <= end) return 'now';
    if (now > (end ?? start)) return 'past';
    return 'upcoming';
  }

  // ── PDF download ─────────────────────────────────────────────────────

  downloadPdf(contractId: string): void {
    const numId = Number(contractId);
    this.downloading.update(d => ({ ...d, [contractId]: true }));

    this.reportService.generatePdf(numId).subscribe({
      next: blob => {
        this.reportService.downloadBlob(blob, `contract-${numId}.pdf`);
        this.downloading.update(d => ({ ...d, [contractId]: false }));
      },
      error: () => {
        this.downloading.update(d => ({ ...d, [contractId]: false }));
      },
    });
  }

  isDownloading(contractId: string): boolean {
    return !!this.downloading()[contractId];
  }
}
