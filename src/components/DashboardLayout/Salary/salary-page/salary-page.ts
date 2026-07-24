import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { SalaryService } from '../../../../services/salary-service';
import { AuthService } from '../../../../services/auth';
import { TokenService } from '../../../../services/token.service';
import {
  CompanyBalance,
  EmployeeSalary,
  SalaryHistoryEntry
} from '../../../../models/salary-withdraw-models';
import { PaySalaryDialogComponent } from '../pay-salary-dialog/pay-salary-dialog';

type SalaryTab = 'overview' | 'history';

@Component({
  selector: 'app-salary-page',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './salary-page.html',
  styleUrl: './salary-page.css'
})
export class SalaryPageComponent implements OnInit {
  private salaryService = inject(SalaryService);
  private dialog        = inject(MatDialog);
  private cdr           = inject(ChangeDetectorRef);

  activeTab: SalaryTab = 'overview';

  private authService  = inject(AuthService);
  private tokenService = inject(TokenService);

  // ── Identity from services ───────────────────────────────────
  readonly userTypeId = this.authService.getUserTypeId() ?? 0;
  readonly companyId  = Number(this.tokenService.getCompanyId() ?? 0);
  // EmployeeId is a string GUID (ApplicationUser.Id) — never coerce to number.
  readonly userId: string = this.tokenService.getUserId() ?? localStorage.getItem('userId') ?? '';

  get isBusiness(): boolean { return this.userTypeId === 3; }

  // ── Overview state ──────────────────────────────────────────
  // Initial value `true` so the spinner is the FIRST painted element.
  // Prevents an empty-state frame between component creation and ngOnInit
  // that causes layout reflow and the perceived "styling not applied" flash.
  companyBalance: CompanyBalance | null = null;
  balanceLoading  = true;
  balanceError    = false;

  employeeSalary: EmployeeSalary | null = null;
  salaryLoading   = true;
  salaryError     = false;

  // ── History state ───────────────────────────────────────────
  historyEntries: SalaryHistoryEntry[] = [];
  historyLoading  = false;
  historyError    = false;
  private historyLoaded = false;

  // ── Lifecycle ───────────────────────────────────────────────

  ngOnInit(): void {
    if (this.isBusiness) {
      this.loadCompanyBalance();
    } else {
      this.loadEmployeeSalary();
    }
  }

  switchTab(tab: SalaryTab): void {
    this.activeTab = tab;
    if (tab === 'history' && !this.historyLoaded) this.loadHistory();
  }

  // ── Data loaders ────────────────────────────────────────────

  loadCompanyBalance(): void {
    // Safety: if companyId is missing, clear the spinner so the page
    // doesn't sit on a forever-loading state (loading defaults to true now).
    if (!this.companyId) { this.balanceLoading = false; this.cdr.detectChanges(); return; }
    this.balanceLoading = true;
    this.balanceError   = false;
    this.salaryService.getCompanyBalance(this.companyId).subscribe({
      next:  bal => { this.companyBalance = bal;   this.balanceLoading = false; this.cdr.detectChanges(); },
      error: ()  => { this.balanceLoading = false; this.balanceError   = true;  this.cdr.detectChanges(); }
    });
  }

  loadEmployeeSalary(): void {
    // Safety: if userId is missing, clear the spinner so the page
    // doesn't sit on a forever-loading state (loading defaults to true now).
    if (!this.userId) { this.salaryLoading = false; this.cdr.detectChanges(); return; }
    this.salaryLoading = true;
    this.salaryError   = false;
    this.salaryService.getEmployeeSalary(this.userId).subscribe({
      next:  sal => { this.employeeSalary = sal;  this.salaryLoading = false; this.cdr.detectChanges(); },
      error: ()  => { this.salaryLoading  = false; this.salaryError   = true;  this.cdr.detectChanges(); }
    });
  }

  loadHistory(): void {
    this.historyLoading = true;
    this.historyError   = false;
    const obs$ = this.isBusiness
      ? this.salaryService.getCompanyPaymentHistory(this.companyId)
      : this.salaryService.getEmployeeSalaryHistory(this.userId);
    obs$.subscribe({
      next:  entries => { this.historyEntries = entries; this.historyLoading = false; this.historyLoaded = true; this.cdr.detectChanges(); },
      error: ()      => { this.historyLoading = false;   this.historyError   = true; this.cdr.detectChanges(); }
    });
  }

  // ── Dialog actions ───────────────────────────────────────────

  openPaySalaryDialog(): void {
    const ref = this.dialog.open(PaySalaryDialogComponent, { width: '480px', data: {} });
    ref.afterClosed().subscribe((res?: { refresh: boolean }) => {
      if (res?.refresh) {
        this.loadCompanyBalance();
        if (this.historyLoaded) this.loadHistory();
      }
    });
  }

  // ── Helpers ──────────────────────────────────────────────────

  getPaymentStatusClass(status: string): string {
    return status === 'paid' ? 'status-paid' : 'status-pending-payment';
  }

  getPaymentStatusKey(status: string): string {
    return status === 'paid' ? 'salary.status.paid' : 'salary.status.pending';
  }

  getPaymentTypeKey(type: string): string {
    const map: Record<string, string> = {
      salary:           'salary.paymentTypes.salary',
      firstPatch:       'salary.paymentTypes.firstPatch',
      lastPatch:        'salary.paymentTypes.lastPatch',
      task:             'salary.paymentTypes.task',
      stage:            'salary.paymentTypes.stage',
      balance_recharge: 'salary.paymentTypes.balance_recharge',
      subscription:     'salary.paymentTypes.subscription',
      registration:     'salary.paymentTypes.registration'
    };
    return map[type] ?? type;
  }

  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
}
