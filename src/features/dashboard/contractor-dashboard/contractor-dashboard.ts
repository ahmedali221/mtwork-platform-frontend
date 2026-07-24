import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { ProjectService } from '../../../services/project-service';
import { MeetingsService } from '../../../services/meetings';
import { TeamsService } from '../../../services/teams';
import { WithdrawService } from '../../../services/withdraw-service';
import { LanguageService } from '../../../services/language.service';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/** Per-widget load status — distinguishes loaded-empty from failed. */
type WidgetStatus = 'loading' | 'ok' | 'error';

/** Wrap a source so a failure is observable as `{ ok: false }` rather than
 *  collapsing into an empty array (indistinguishable from no data). */
interface LoadResult<T> { ok: boolean; data: T; }

interface KpiCard {
  icon: string;
  label: string;
  value: number | string;
  iconBg: string;
}

interface MeetingCard {
  title: string;
  /** Localized date+time of the meeting start, or '' when unavailable. */
  when: string;
  status: 'past' | 'now' | 'upcoming';
  link?: string;
}

interface WithdrawalItem {
  amount: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

@Component({
  selector: 'app-contractor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule],
  templateUrl: './contractor-dashboard.html',
  styleUrls: ['./contractor-dashboard.css']
})
export class ContractorDashboardComponent implements OnInit {
  private projectService = inject(ProjectService);
  private meetingsService = inject(MeetingsService);
  private teamsService = inject(TeamsService);
  private withdrawService = inject(WithdrawService);
  private languageService = inject(LanguageService);

  /** Active UI locale for Intl date/time formatting — respects the language toggle. */
  private get locale(): string {
    return this.languageService.currentLang();
  }

  // Backend EmployeeId is a string GUID (ApplicationUser.Id). No numeric coercion.
  private readonly userId: string = localStorage.getItem('userId') ?? '';

  isLoading = signal(true);

  /* ── Per-widget load status (error/empty/loaded) ─────── */
  meetingsStatus = signal<WidgetStatus>('loading');
  // Projects drive the (now removed) project charts; status gates their empty/error UI.
  projectsStatus = signal<WidgetStatus>('loading');

  kpiStats: KpiCard[] = [
    { icon: 'description',             label: 'dashboard.kpi.activeContracts',    value: 0, iconBg: 'var(--brand-primary-50)' },
    { icon: 'folder_open',             label: 'dashboard.kpi.totalProjects',      value: 0, iconBg: 'var(--brand-secondary-50)' },
    { icon: 'groups',                  label: 'dashboard.kpi.teams',              value: 0, iconBg: 'var(--functional-success-50)' },
    { icon: 'account_balance_wallet',  label: 'dashboard.kpi.pendingWithdrawals', value: 0, iconBg: 'var(--functional-warning-50)' },
  ];

  // No mock fallback — populated only from Meeting/GetAll.
  meetings: MeetingCard[] = [];

  // Withdrawals widget data (unchanged from prior phase — not in C1-A scope).
  recentWithdrawals: WithdrawalItem[] = [];

  ngOnInit(): void {
    this.loadDashboardData();
  }

  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons. */
  reload(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);
    this.meetingsStatus.set('loading');
    this.projectsStatus.set('loading');

    // Wrap each source so a failure is distinguishable from an empty result.
    const wrap = <T>(src: Observable<T>, fallback: T): Observable<LoadResult<T>> =>
      src.pipe(
        map((data: T) => ({ ok: true, data } as LoadResult<T>)),
        catchError(() => of({ ok: false, data: fallback } as LoadResult<T>)),
      );

    forkJoin({
      projects:    wrap<any>(this.projectService.getProjects(), []),
      meetings:    wrap<any>(this.meetingsService.getMeetings(), []),
      teams:       wrap<any>(this.teamsService.getTeams(), []),
      withdrawals: this.userId
        ? wrap<any>(this.withdrawService.getEmployeeHistory(this.userId).pipe(map(({ entries }) => entries)), [])
        : of({ ok: true, data: [] } as LoadResult<any>),
    }).subscribe(({ projects, meetings, teams, withdrawals }) => {

      // ── Projects KPI (Total only — real count). Active/status charts
      //    are backend-blocked → handled as empty/error UI, no fake data. ──
      this.projectsStatus.set(projects.ok ? 'ok' : 'error');
      const projectList = projects.ok ? (projects.data ?? []) : [];
      if (projectList.length) {
        this.kpiStats[1].value = projectList.length;
      }

      // Teams KPI (real count)
      if (teams.ok && teams.data?.length) {
        this.kpiStats[2].value = teams.data.length;
      }

      // ── Meetings (API-only, no mock) ──────────────────
      if (!meetings.ok) {
        this.meetings = [];
        this.meetingsStatus.set('error');
      } else {
        this.meetings = (meetings.data ?? []).slice(0, 3).map((m: any) => ({
          // Title left empty when absent — template renders a localized fallback.
          title: m.title || '',
          // Real start time only, formatted in the active locale. No timezone label
          // is invented: the API returns no zone, so we show date + time as-is.
          when: m.startTime
            ? new Date(m.startTime).toLocaleString(this.locale, {
                month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit',
              })
            : '',
          status: this.getMeetingStatus(m),
          link: m.meetingLink,
        }));
        this.meetingsStatus.set('ok');
      }

      // ── Withdrawals (UNCHANGED — not in C1-A scope) ────
      const wList = withdrawals.ok ? (withdrawals.data ?? []) : [];
      if (wList.length) {
        this.kpiStats[3].value = wList.filter((w: any) => w.status === 'pending').length;
        this.recentWithdrawals = wList.slice(0, 4).map((w: any) => ({
          amount: this.formatAmount(w.amount),
          status: w.status as 'pending' | 'approved' | 'rejected',
          date: w.createdAt
            ? new Date(w.createdAt).toLocaleDateString(this.locale, { month: 'short', day: 'numeric', year: 'numeric' })
            : '',
        }));
      }

      this.isLoading.set(false);
    });
  }

  /** Localized number formatting for withdrawal amounts. The WithdrawEntry
   *  backend contract carries NO currency field, so no currency symbol is
   *  inferred — the real amount is shown as a plain localized number, per the
   *  "never infer business values" rule. */
  private formatAmount(amount: number): string {
    return new Intl.NumberFormat(this.locale, {
      maximumFractionDigits: 2,
    }).format(amount ?? 0);
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

  getWithdrawalClass(status: string): string {
    if (status === 'approved') return 'ct-withdrawal__status--approved';
    if (status === 'rejected') return 'ct-withdrawal__status--rejected';
    return 'ct-withdrawal__status--pending';
  }

  getWithdrawalLabel(status: 'pending' | 'approved' | 'rejected'): string {
    const map: Record<string, string> = {
      approved: 'salary.withdrawStatus.approved',
      rejected: 'salary.withdrawStatus.rejected',
      pending:  'salary.withdrawStatus.pending',
    };
    return map[status] ?? 'salary.withdrawStatus.pending';
  }
}
