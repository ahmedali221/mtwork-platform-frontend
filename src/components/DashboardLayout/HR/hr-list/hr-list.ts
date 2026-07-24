import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { HrService } from '../../../../services/hr-service';
import { HRListDto, LeaveRequest, OrderStatus, ChangeStatusRequest } from '../../../../models/hr-models';
import { LeaveRequestDialogComponent } from '../leave-request-dialog/leave-request-dialog';
import { AuthorizationService } from '../../../../services/authorization.service';
import { FeatureKey } from '../../../../models/feature-keys.enum';

type HrTab = 'employees' | 'requests';

interface HrFilters {
  search:     string;
  status:     string;     // OrderStatus as string ('' = all). Numeric coerced in applyFilters.
  department: string;     // No `department` field on backend — uses jobTitle as proxy.
}

@Component({
  selector: 'app-hr-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './hr-list.html',
  styleUrl: './hr-list.css'
})
export class HrListComponent implements OnInit {
  private hrService = inject(HrService);
  private dialog    = inject(MatDialog);
  private snack     = inject(MatSnackBar);
  private transloco = inject(TranslocoService);
  protected auth    = inject(AuthorizationService);
  private cdr       = inject(ChangeDetectorRef);

  readonly OrderStatus = OrderStatus;
  readonly FeatureKey  = FeatureKey;

  readonly isEmployee = signal(false);

  activeTab: HrTab = 'employees';
  pendingDeleteId = signal<number | null>(null);

  // ── State (Teams/Meetings pattern) ──────────────────────────────────
  // Employees tab — original/filtered split.
  originalEmployees: HRListDto[] = [];
  filteredEmployees: HRListDto[] = [];
  employeesTotal     = 0;
  employeesLoading   = false;
  employeesError     = false;

  // Leave-requests tab — original/filtered split.
  originalRequests: LeaveRequest[] = [];
  filteredRequests: LeaveRequest[] = [];
  requestsLoading  = false;
  requestsError    = false;

  // ── View toggle (table | cards) — same shape as Teams/Meetings ─────
  viewMode: 'table' | 'cards' = 'table';
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
  }

  // ── Filters ─────────────────────────────────────────────────────────
  filters: HrFilters = { search: '', status: '', department: '' };

  readonly statusOptions: Array<{ value: string; labelKey: string }> = [
    { value: '',                            labelKey: 'common.all' },
    { value: String(OrderStatus.Pending),   labelKey: 'hr.status.pending' },
    { value: String(OrderStatus.Approved),  labelKey: 'hr.status.approved' },
    { value: String(OrderStatus.Rejected),  labelKey: 'hr.status.rejected' },
    { value: String(OrderStatus.Canceled),  labelKey: 'hr.status.canceled' }
  ];

  /**
   * Department dropdown options.
   * The HRListDto has no `department` field — we surface distinct `jobTitle`
   * values as the closest existing-data proxy (per project rule:
   * no new data, no API change).
   */
  get departmentOptions(): string[] {
    return [...new Set(
      this.originalEmployees
        .map(e => e.jobTitle)
        .filter((t): t is string => !!t),
    )].sort();
  }

  // ── Expandable rows (HR + Contracts) ───────────────────────────────
  expandedRowId: number | null = null;
  toggleExpand(id: number): void {
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }

  // ── Lifecycle ───────────────────────────────────────────────────────
  ngOnInit(): void {
    this.isEmployee.set(this.auth.canAccessFeature(FeatureKey.CreateLeave));
    this.loadEmployees();
    this.loadLeaveRequests();
  }

  switchTab(tab: HrTab): void {
    this.activeTab = tab;
    // Per-tab UX expectations: reset filters that don't apply to the other tab.
    this.filters = { search: '', status: '', department: '' };
    this.expandedRowId = null;
    this.applyFilters();
  }

  // ── Data loading ────────────────────────────────────────────────────
  loadEmployees(): void {
    this.employeesLoading = true;
    this.employeesError   = false;
    this.hrService.getHRList().subscribe({
      next: ({ total, result }) => {
        this.originalEmployees = result;
        this.employeesTotal    = total;
        this.employeesLoading  = false;
        this.applyFilters();
        this.cdr.detectChanges();
      },
      error: () => {
        this.employeesLoading = false;
        this.employeesError   = true;
        this.cdr.detectChanges();
      }
    });
  }

  loadLeaveRequests(): void {
    this.requestsLoading = true;
    this.requestsError   = false;
    this.hrService.getAllLeaveRequests().subscribe({
      next: requests => {
        this.originalRequests = requests;
        this.requestsLoading  = false;
        this.applyFilters();
        this.cdr.detectChanges();
      },
      error: () => {
        this.requestsLoading = false;
        this.requestsError   = true;
        this.cdr.detectChanges();
      }
    });
  }

  // ── Filtering (single applyFilters for both tabs) ───────────────────
  applyFilters(): void {
    const q   = (this.filters.search     || '').trim().toLowerCase();
    const dep = (this.filters.department || '').toLowerCase();
    const s   = this.filters.status;

    this.filteredEmployees = this.originalEmployees.filter(e => {
      const matchesSearch = !q ||
        (e.employeeName  ?? '').toLowerCase().includes(q) ||
        String(e.id ?? '').toLowerCase().includes(q) ||
        (e.employeeId    ?? '').toLowerCase().includes(q) ||
        (e.jobTitle      ?? '').toLowerCase().includes(q) ||
        (e.contractTitle ?? '').toLowerCase().includes(q);
      const matchesDept = !dep || (e.jobTitle ?? '').toLowerCase() === dep;
      return matchesSearch && matchesDept;
    });

    this.filteredRequests = this.originalRequests.filter(r => {
      const matchesSearch = !q ||
        (r.employeeName  ?? '').toLowerCase().includes(q) ||
        (r.leaveTypeName ?? '').toLowerCase().includes(q) ||
        (r.orderTypeName ?? '').toLowerCase().includes(q) ||
        String(r.id ?? '').toLowerCase().includes(q);
      const matchesStatus = s === '' || r.orderStatus === Number(s);
      return matchesSearch && matchesStatus;
    });
  }

  // ── Helpers ─────────────────────────────────────────────────────────
  getStatusClass(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.Approved: return 'status-approved';
      case OrderStatus.Rejected: return 'status-rejected';
      case OrderStatus.Canceled: return 'status-canceled';
      default:                   return 'status-pending';
    }
  }

  getStatusKey(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.Approved: return 'hr.status.approved';
      case OrderStatus.Rejected: return 'hr.status.rejected';
      case OrderStatus.Canceled: return 'hr.status.canceled';
      default:                   return 'hr.status.pending';
    }
  }

  getRequestTypeClass(type: string): string {
    if (!type) return '';
    const t = type.toLowerCase();
    if (t.includes('leave'))    return 'type-leave';
    if (t.includes('overtime')) return 'type-overtime';
    if (t.includes('business')) return 'type-business-trip';
    return '';
  }

  openActionsMenu(request: LeaveRequest, event: MouseEvent): void {
    event.stopPropagation();
    this.openRequestDetails(request);
  }

  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }

  hasActiveFilters(): boolean {
    return !!(this.filters.search || this.filters.status || this.filters.department);
  }

  clearFilters(): void {
    this.filters = { search: '', status: '', department: '' };
    this.applyFilters();
  }

  // ── Dialog actions (unchanged) ──────────────────────────────────────
  openNewRequestDialog(): void {
    if (!this.auth.canCreateLeave()) {
      this.snack.open(
        this.transloco.translate(this.auth.reasonFor(FeatureKey.CreateLeave)),
        '', { duration: 4000, panelClass: 'snack-warning' }
      );
      return;
    }
    this.openLeaveDialog(undefined);
  }

  openNewRequestForEmployee(emp: HRListDto): void {
    if (!this.auth.canCreateLeave(emp)) {
      this.snack.open(
        this.transloco.translate(this.auth.reasonFor(FeatureKey.CreateLeave, emp)),
      );
      return;
    }
    this.openLeaveDialog(emp.contractId);
  }

  private openLeaveDialog(contractId: number | undefined): void {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: '480px',
      data: { mode: 'create', contractId }
    });
    ref.afterClosed().subscribe((result?: { refresh: boolean }) => {
      if (result?.refresh) {
        this.loadLeaveRequests();
        this.snack.open(
          this.transloco.translate('hr.toasts.requestSubmitted'),
          '', { duration: 3000, panelClass: 'snack-success' }
        );
      }
    });
  }

  openRequestDetails(request: LeaveRequest): void {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: '480px',
      data: { mode: 'view', requestId: request.id }
    });
    ref.afterClosed().subscribe((result?: { refresh: boolean }) => {
      if (result?.refresh) this.loadLeaveRequests();
    });
  }

  approveRequest(request: LeaveRequest): void {
    const payload: ChangeStatusRequest = { orderId: request.id, statusId: OrderStatus.Approved };
    this.hrService.changeOrderStatus(payload).subscribe({ next: () => this.loadLeaveRequests() });
  }

  rejectRequest(request: LeaveRequest): void {
    const payload: ChangeStatusRequest = { orderId: request.id, statusId: OrderStatus.Rejected };
    this.hrService.changeOrderStatus(payload).subscribe({ next: () => this.loadLeaveRequests() });
  }

  requestDelete(id: number): void  { this.pendingDeleteId.set(id); }
  cancelDelete():          void  { this.pendingDeleteId.set(null); }

  deleteRequest(request: LeaveRequest): void {
    this.hrService.deleteLeaveRequest(request.id).subscribe({
      next: () => {
        this.pendingDeleteId.set(null);
        this.loadLeaveRequests();
      }
    });
  }
}
