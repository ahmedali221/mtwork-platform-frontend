import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';
import { WithdrawService } from '../../../services/withdraw-service';
import { WithdrawEntry, WithdrawStatus } from '../../../models/salary-withdraw-models';
import { WithdrawRequestDialogComponent } from '../../../components/DashboardLayout/Salary/withdraw-request-dialog/withdraw-request-dialog';
import { AuthService } from '../../../services/auth';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-withdrawals-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    TranslocoModule,
  ],
  templateUrl: './withdrawals-page.html',
  styleUrl: './withdrawals-page.css',
})
export class WithdrawalsPageComponent implements OnInit {
  private withdrawService = inject(WithdrawService);
  private dialog          = inject(MatDialog);
  private authService     = inject(AuthService);
  private tokenService    = inject(TokenService);

  // ── State ────────────────────────────────────────────────────
  entries    = signal<WithdrawEntry[]>([]);
  // Employee balance from EmployeeWithdrawHistoryDto.currentBalance.
  // null = unknown (admin view, or load failed); used to gate the
  // dialog amount validator.
  balance    = signal<number | null>(null);
  loading    = signal(true);
  error      = signal<string | null>(null);

  searchQuery  = signal('');
  statusFilter = signal<WithdrawStatus | ''>('');

  currentPage      = signal(1);
  readonly pageSize = 10;

  // ── Identity ─────────────────────────────────────────────────
  // Show admin/business view for UserType=3 (Business) OR Admin JWT role.
  // Admin is a role claim, not a UserType — it has no UserTypeId value.
  readonly isBusiness: boolean =
    (this.authService.getUserTypeId() ?? 0) === 3 ||
    this.tokenService.getUserRole() === 'Admin';
  // Backend EmployeeId is a string GUID (ApplicationUser.Id). No numeric coercion.
  private readonly userId: string = this.tokenService.getUserId() ?? localStorage.getItem('userId') ?? '';

  // ── Derived ──────────────────────────────────────────────────
  filtered = computed(() => {
    const q      = this.searchQuery().toLowerCase();
    const status = this.statusFilter();
    return this.entries().filter(e => {
      const matchSearch = !q ||
        String(e.id).includes(q) ||
        (e.reason        ?? '').toLowerCase().includes(q) ||
        (e.employeeName  ?? '').toLowerCase().includes(q);
      const matchStatus = !status || e.status === status;
      return matchSearch && matchStatus;
    });
  });

  totalPages  = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));
  paginated   = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });
  pageNumbers = computed(() => Array.from({ length: Math.min(this.totalPages(), 6) }, (_, i) => i + 1));

  // ── Summary stats ─────────────────────────────────────────────
  totalAmount  = computed(() => this.entries().reduce((s, e) => s + e.amount, 0));
  pendingCount = computed(() => this.entries().filter(e => e.status === 'pending').length);
  approvedSum  = computed(() =>
    this.entries().filter(e => e.status === 'approved').reduce((s, e) => s + e.amount, 0)
  );

  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit(): void { this.loadHistory(); }

  loadHistory(): void {
    this.loading.set(true);
    this.error.set(null);
    if (!this.isBusiness && !this.userId) {
      this.entries.set([]);
      this.balance.set(null);
      this.loading.set(false);
      this.error.set('withdrawals.errors.notAuthenticated');
      return;
    }
    if (this.isBusiness) {
      // Admin/Business view: no per-user balance available from this endpoint.
      this.balance.set(null);
      this.withdrawService.getAdminRequests().subscribe({
        next:  data => { this.entries.set(data); this.loading.set(false); },
        error: ()   => { this.error.set('withdrawals.errors.load'); this.loading.set(false); },
      });
    } else {
      this.withdrawService.getEmployeeHistory(this.userId).subscribe({
        next: ({ balance, entries }) => {
          this.balance.set(balance);
          this.entries.set(entries);
          this.loading.set(false);
        },
        error: () => { this.error.set('withdrawals.errors.load'); this.loading.set(false); },
      });
    }
  }

  processWithdrawal(entry: WithdrawEntry, status: WithdrawStatus): void {
    this.withdrawService.processRequest(entry.id, { status }).subscribe({
      next: () => this.loadHistory()
    });
  }

  openWithdrawDialog(): void {
    const ref = this.dialog.open(WithdrawRequestDialogComponent, {
      width: '480px',
      maxWidth: '480px',
      disableClose: false,
      autoFocus: 'first-tabbable',
      // Strips Material's default container chrome and applies the
      // refined card styling defined in styles.css. Backdrop class
      // applies the softer semi-transparent dark overlay.
      panelClass: 'wd-dialog-panel',
      backdropClass: 'wd-dialog-backdrop',
      // Pass current balance so the dialog can validate amount client-side.
      data: { balance: this.balance() },
    });
    ref.afterClosed().subscribe(result => { if (result?.refresh) this.loadHistory(); });
  }

  // ── Pagination ────────────────────────────────────────────────
  goToPage(p: number): void {
    if (p >= 1 && p <= this.totalPages()) this.currentPage.set(p);
  }

  onFilterChange(): void { this.currentPage.set(1); }

  // ── Helpers ───────────────────────────────────────────────────
  formatKey(id: number): string { return `WD-${String(id).padStart(5, '0')}`; }

  getInitials(name?: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }

  statusClass(status: WithdrawStatus): string {
    return { pending: 'badge--warning', approved: 'badge--success', rejected: 'badge--danger' }[status] ?? '';
  }

  statusIcon(status: WithdrawStatus): string {
    return { pending: 'schedule', approved: 'check_circle', rejected: 'cancel' }[status] ?? 'help';
  }
}
