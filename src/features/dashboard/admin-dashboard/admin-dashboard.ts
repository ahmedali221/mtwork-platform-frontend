import {
  Component, OnInit, inject, signal, computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CompanyService, CompanyDto } from '../../../services/company.service';
import { UserService } from '../../../services/user.service';
import { WithdrawService } from '../../../services/withdraw-service';
import { ContractService } from '../../../services/contract-service';
import { WithdrawEntry } from '../../../models/salary-withdraw-models';

/** KPI card backed strictly by a live endpoint — no defaults shown to the user. */
interface AdminKpi {
  id:    'companies' | 'users' | 'pendingWithdrawals' | 'contracts';
  icon:  string;
  label: string;
  value: number | null;   // null until the API resolves; never a placeholder number
}

interface QuickAction {
  icon:  string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDashboardComponent implements OnInit {
  private readonly companyService  = inject(CompanyService);
  private readonly userService     = inject(UserService);
  private readonly withdrawService = inject(WithdrawService);
  private readonly contractService = inject(ContractService);

  readonly isLoading = signal(true);
  readonly loadError = signal(false);

  /** KPI values — all start null (loading), filled only from real responses. */
  readonly kpis = signal<AdminKpi[]>([
    { id: 'companies',          icon: 'domain',                   label: 'admin.dashboard.kpi.totalCompanies',     value: null },
    { id: 'users',              icon: 'people',                   label: 'admin.dashboard.kpi.totalUsers',         value: null },
    { id: 'pendingWithdrawals', icon: 'account_balance_wallet',   label: 'admin.dashboard.kpi.pendingWithdrawals', value: null },
    { id: 'contracts',          icon: 'description',              label: 'admin.dashboard.kpi.totalContracts',     value: null },
  ]);

  /** Up to 5 most-recent companies (from Company/GetAll). */
  readonly recentCompanies = signal<CompanyDto[]>([]);

  /** Pending withdrawal requests (from Withdraw/GetAdminRequests). */
  readonly pendingWithdrawals = signal<WithdrawEntry[]>([]);
  readonly pendingWithdrawalsPreview = computed(() => this.pendingWithdrawals().slice(0, 5));

  readonly quickActions: QuickAction[] = [
    { icon: 'people',   label: 'admin.dashboard.quickActions.users',       route: '/dashboard/users' },
    { icon: 'domain',   label: 'admin.dashboard.quickActions.companies',   route: '/dashboard/companies' },
    { icon: 'settings', label: 'admin.dashboard.quickActions.settings',    route: '/dashboard/settings' },
    { icon: 'security', label: 'admin.dashboard.quickActions.permissions', route: '/dashboard/permissions' },
  ];

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.loadError.set(false);

    forkJoin({
      companies:    this.companyService.getAll().pipe(catchError(() => of<CompanyDto[]>([]))),
      users:        this.userService.getAll().pipe(catchError(() => of([]))),
      withdrawals:  this.withdrawService.getAdminRequests().pipe(catchError(() => of<WithdrawEntry[]>([]))),
      contracts:    this.contractService.getContracts(1, 1).pipe(
        catchError(() => of({ data: [], pagination: { totalItems: 0 } } as any)),
      ),
    }).subscribe({
      next: ({ companies, users, withdrawals, contracts }) => {
        const companyList = companies ?? [];
        const userList    = users ?? [];
        const pending     = (withdrawals ?? []).filter(w => w.status === 'pending');

        // ── KPI binding — every value sourced from a real response ──
        this.kpis.update(list => list.map(k => {
          switch (k.id) {
            case 'companies':          return { ...k, value: companyList.length };
            case 'users':              return { ...k, value: userList.length };
            case 'pendingWithdrawals': return { ...k, value: pending.length };
            case 'contracts':          return { ...k, value: contracts?.pagination?.totalItems ?? 0 };
            default:                   return k;
          }
        }));

        // ── Recent Companies — last 5 by id (newest first) ──
        this.recentCompanies.set(
          [...companyList]
            .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
            .slice(0, 5)
        );

        // ── Pending Withdrawals ──
        this.pendingWithdrawals.set(pending);

        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set(true);
        this.isLoading.set(false);
      },
    });
  }

  /** Retry handler for the page-level error state. */
  retry(): void {
    this.load();
  }

  /** Initials fallback for a company logo cell. */
  companyInitials(name?: string): string {
    if (!name) return '–';
    return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }
}
