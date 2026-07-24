import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MeetingsService } from '../../../services/meetings';
import { HrService } from '../../../services/hr-service';
import { ContractService } from '../../../services/contract-service';
import { SalaryService } from '../../../services/salary-service';
import { EmployeeSalary } from '../../../models/salary-withdraw-models';
import { OrderStatus } from '../../../models/hr-models';
import { TokenService } from '../../../services/token.service';
import { LanguageService } from '../../../services/language.service';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/** Per-widget load status — distinguishes loaded-empty from failed (ER-1). */
type WidgetStatus = 'loading' | 'ok' | 'error';

/** Wrap a source so a failure is observable as `{ ok: false }` rather than
 *  collapsing into an empty array (indistinguishable from no data). */
interface LoadResult<T> { ok: boolean; data: T; }

interface MeetingCard {
  title: string;
  /** Localized date+time of the meeting start, or '' when unavailable. */
  when: string;
  status: 'past' | 'now' | 'upcoming';
}

interface KpiCard {
  icon: string;
  label: string;
  value: number | string;
  iconBg: string;
}

interface RequestItem {
  type: string;
  date: string;
  status: 'approved' | 'rejected' | 'pending' | 'canceled';
}

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule],
  templateUrl: './employee-dashboard.html',
  styleUrls: ['./employee-dashboard.css']
})
export class EmployeeDashboardComponent implements OnInit {
  private meetingsService = inject(MeetingsService);
  private hrService       = inject(HrService);
  private contractService = inject(ContractService);
  private salaryService   = inject(SalaryService);
  private tokenService    = inject(TokenService);
  private languageService = inject(LanguageService);

  /** Active UI locale for Intl date/time formatting — respects the language toggle. */
  private get locale(): string {
    return this.languageService.currentLang();
  }

  // EmployeeId is a string GUID (ApplicationUser.Id) — never coerce to number.
  private readonly userId: string = this.tokenService.getUserId() ?? localStorage.getItem('userId') ?? '';

  isLoading = signal(true);

  /* ── Per-widget load status (ER-1) ───────────────────── */
  meetingsStatus = signal<WidgetStatus>('loading');
  requestsStatus = signal<WidgetStatus>('loading');

  kpiStats: KpiCard[] = [
    { icon: 'description',  label: 'dashboard.kpi.activeContracts',  value: 0,    iconBg: 'var(--brand-primary-50)' },
    { icon: 'payments',     label: 'dashboard.kpi.lastSalary',       value: '—', iconBg: 'var(--functional-success-50)' },
    // Audit DEFECT-2: no attendance API is integrated, so a real rate cannot be
    // computed. Show a neutral no-data indicator instead of a fabricated "0%".
    { icon: 'how_to_reg',   label: 'dashboard.kpi.attendanceRate',   value: '—', iconBg: 'var(--brand-secondary-50)' },
    { icon: 'request_page', label: 'dashboard.kpi.pendingRequests',  value: 0,    iconBg: 'var(--functional-warning-50)' },
  ];

  // E-1: no mock fallback — populated only from the API.
  meetings: MeetingCard[] = [];

  // E-2: no mock fallback — populated only from the API.
  recentRequests: RequestItem[] = [];

  ngOnInit(): void {
    this.loadDashboardData();
  }

  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons (ER-2). */
  reload(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);
    this.meetingsStatus.set('loading');
    this.requestsStatus.set('loading');

    // Wrap each source so a failure is distinguishable from an empty result
    // (ER-1). `ok:false` = the call errored; `ok:true` + empty = no data.
    const wrap = <T>(src: Observable<T>, fallback: T): Observable<LoadResult<T>> =>
      src.pipe(
        map((data: T) => ({ ok: true, data } as LoadResult<T>)),
        catchError(() => of({ ok: false, data: fallback } as LoadResult<T>)),
      );

    forkJoin({
      meetings:  wrap<any>(this.meetingsService.getMeetings(), []),
      requests:  wrap<any>(this.hrService.getLeaveRequests(), []),
      contracts: wrap<any>(this.contractService.getContracts(1, 10), { data: [], pagination: { totalItems: 0 } }),
      salary:    this.userId
        ? wrap<EmployeeSalary | null>(this.salaryService.getEmployeeSalary(this.userId), null)
        : of({ ok: true, data: null } as LoadResult<EmployeeSalary | null>),
    }).subscribe(({ meetings, requests, contracts, salary }) => {

      // ── Meetings (E-1: API-only, no mock) ──────────────
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
        }));
        this.meetingsStatus.set('ok');
      }

      // ── Recent requests (E-2: API-only, no mock) ───────
      if (!requests.ok) {
        this.recentRequests = [];
        this.requestsStatus.set('error');
      } else {
        const reqList = requests.data ?? [];
        this.recentRequests = reqList.slice(0, 4).map((r: any) => ({
          // EC-2 (frozen): map from the real LeaveRequest fields.
          type: r.orderTypeName || r.leaveTypeName || '',
          date: r.createdAt ? new Date(r.createdAt).toLocaleDateString(this.locale, { month: 'short', day: 'numeric', year: 'numeric' }) : '',
          // EC-3 (frozen): explicit OrderStatus mapping.
          status: this.mapOrderStatus(r.orderStatus)
        }));
        this.kpiStats[3].value = reqList.filter((r: any) => r.orderStatus === OrderStatus.Pending).length;
        this.requestsStatus.set('ok');
      }

      // Active contracts count (E1/EC-1 unchanged — not in E2-A scope)
      if (contracts.ok && contracts.data?.pagination?.totalItems != null) {
        this.kpiStats[0].value = contracts.data.pagination.totalItems;
      }

      // Salary info (calculation unchanged — not in E2-A scope). Currency is
      // shown ONLY when the backend provides it — never inferred. When the
      // contract omits `currency`, display the real amount alone (no guessed
      // symbol), per the "never infer business values" rule.
      if (salary.ok && salary.data?.salary) {
        const amount = salary.data.salary;
        this.kpiStats[1].value = salary.data.currency
          ? `${salary.data.currency} ${amount}`
          : `${amount}`;
      }

      this.isLoading.set(false);
    });
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

  /** EC-3: explicit OrderStatus → UI status (Canceled is its own state, not pending). */
  private mapOrderStatus(orderStatus: number): RequestItem['status'] {
    switch (orderStatus) {
      case OrderStatus.Approved: return 'approved';
      case OrderStatus.Rejected: return 'rejected';
      case OrderStatus.Canceled: return 'canceled';
      default:                   return 'pending';
    }
  }

  getRequestClass(status: string): string {
    if (status === 'approved') return 'emp-request__status--approved';
    if (status === 'rejected') return 'emp-request__status--rejected';
    if (status === 'canceled') return 'emp-request__status--canceled';
    return 'emp-request__status--pending';
  }

  /** Returns an i18n key — bind with transloco pipe in template. */
  getRequestLabel(status: string): string {
    if (status === 'approved') return 'requests.status.approved';
    if (status === 'rejected') return 'requests.status.rejected';
    if (status === 'canceled') return 'requests.status.canceled';
    return 'requests.status.pending';
  }
}
