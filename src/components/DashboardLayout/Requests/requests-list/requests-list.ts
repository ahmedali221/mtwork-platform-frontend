import { ChangeDetectorRef, Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { HrService } from '../../../../services/hr-service';
import { LeaveRequest, OrderStatus, ChangeStatusRequest } from '../../../../models/hr-models';
import { NewRequestDialogComponent } from '../new-request-dialog/new-request-dialog';
import { LeaveRequestDialogComponent } from '../../HR/leave-request-dialog/leave-request-dialog';
import { AuthorizationService } from '../../../../services/authorization.service';
import { FeatureKey } from '../../../../models/feature-keys.enum';

@Component({
  selector: 'app-requests-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatMenuModule, MatCheckboxModule, TranslocoModule],
  templateUrl: './requests-list.html',
  styleUrls: ['./requests-list.css']
})
export class RequestsListComponent implements OnInit {
  private hrService = inject(HrService);
  private dialog    = inject(MatDialog);
  protected auth    = inject(AuthorizationService);
  private cdr       = inject(ChangeDetectorRef);
  private transloco = inject(TranslocoService);

  readonly OrderStatus = OrderStatus;
  readonly FeatureKey  = FeatureKey;

  // ── State ────────────────────────────────────────────────────
  requests = signal<LeaveRequest[]>([]);
  loading  = signal(true);
  error    = signal<string | null>(null);

  searchQuery   = signal('');
  statusFilter  = signal<OrderStatus | ''>('');
  sortOrder     = signal<'newest' | 'oldest'>('newest');
  view          = signal<'table' | 'cards'>('table');
  isFullscreen  = signal(false);
  selectedIds   = signal<Set<number>>(new Set());

  // Pagination
  currentPage   = signal(1);
  pageSize      = 10;

  // ── Derived ──────────────────────────────────────────────────
  filtered = computed(() => {
    const q      = this.searchQuery().toLowerCase();
    const status = this.statusFilter();
    const order  = this.sortOrder();

    const list = this.requests().filter(r => {
      const matchSearch =
        !q ||
        (r.employeeName  ?? '').toLowerCase().includes(q) ||
        (r.leaveTypeName ?? '').toLowerCase().includes(q) ||
        (r.orderTypeName ?? '').toLowerCase().includes(q) ||
        this.formatKey(r.id).toLowerCase().includes(q);
      const matchStatus = !status || r.orderStatus === status;
      return matchSearch && matchStatus;
    });

    // Sort by created date (fallback to startDate). Invalid dates sink to bottom.
    const ts = (r: LeaveRequest): number => {
      const d = new Date(r.createdAt || r.startDate || 0).getTime();
      return Number.isNaN(d) ? 0 : d;
    };
    return [...list].sort((a, b) =>
      order === 'newest' ? ts(b) - ts(a) : ts(a) - ts(b)
    );
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  paginated = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  pageNumbers = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: Math.min(total, 6) }, (_, i) => i + 1);
  });

  allOnPageSelected = computed(() => {
    const page = this.paginated();
    if (!page.length) return false;
    return page.every(r => this.selectedIds().has(r.id));
  });

  // ── Lifecycle ────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading.set(true);
    this.error.set(null);
    this.hrService.getAllLeaveRequests().subscribe({
      next:  reqs => { this.requests.set(reqs); this.loading.set(false); this.cdr.detectChanges(); },
      error: ()   => { this.error.set(this.transloco.translate('requests.errors.load')); this.loading.set(false); this.cdr.detectChanges(); }
    });
  }

  // ── Filters / Toolbar ────────────────────────────────────────
  onSearch(q: string): void {
    this.searchQuery.set(q);
    this.currentPage.set(1);
  }

  setStatusFilter(status: OrderStatus | ''): void {
    this.statusFilter.set(status);
    this.currentPage.set(1);
  }

  setSortOrder(order: 'newest' | 'oldest'): void {
    this.sortOrder.set(order);
  }

  setView(view: 'table' | 'cards'): void {
    this.view.set(view);
  }

  toggleFullscreen(): void {
    this.isFullscreen.update(v => !v);
  }

  sortLabel(): string {
    return this.sortOrder() === 'newest'
      ? this.transloco.translate('requests.sort.newest')
      : this.transloco.translate('requests.sort.oldest');
  }

  statusLabel(): string {
    const s = this.statusFilter();
    if (!s) return this.transloco.translate('requests.filter.allStatuses');
    return this.getStatusLabel(s as OrderStatus);
  }

  // ── Selection ────────────────────────────────────────────────
  toggleSelectAll(): void {
    const page = this.paginated();
    const current = new Set(this.selectedIds());
    if (this.allOnPageSelected()) {
      page.forEach(r => current.delete(r.id));
    } else {
      page.forEach(r => current.add(r.id));
    }
    this.selectedIds.set(current);
  }

  toggleRow(id: number): void {
    const s = new Set(this.selectedIds());
    s.has(id) ? s.delete(id) : s.add(id);
    this.selectedIds.set(s);
  }

  isSelected(id: number): boolean {
    return this.selectedIds().has(id);
  }

  // ── Pagination ───────────────────────────────────────────────
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  // ── Actions ──────────────────────────────────────────────────

  openNewRequest(): void {
    // Defensive gate — UI button is already wrapped, but guard the action
    // in case it's invoked via keyboard / programmatic trigger.
    if (!this.auth.canCreateLeave()) return;

    const ref = this.dialog.open(NewRequestDialogComponent, {
      width: '540px',
      panelClass: 'request-dialog-panel',
      disableClose: false,
    });
    ref.afterClosed().subscribe(result => {
      if (result?.refresh) this.loadRequests();
    });
  }

  viewDetails(req: LeaveRequest): void {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: '500px',
      panelClass: 'leave-request-dialog-panel',
      data: { mode: 'view', requestId: req.id },
    });
    ref.afterClosed().subscribe(result => {
      if (result?.refresh) this.loadRequests();
    });
  }

  approveRequest(req: LeaveRequest): void {
    if (!this.auth.canAccessFeature(FeatureKey.ApproveLeave)) return;
    this.hrService.changeOrderStatus({ orderId: req.id, statusId: OrderStatus.Approved }).subscribe({
      next:  () => this.loadRequests(),
      error: () => {}
    });
  }

  denyRequest(req: LeaveRequest): void {
    if (!this.auth.canAccessFeature(FeatureKey.ApproveLeave)) return;
    this.hrService.changeOrderStatus({ orderId: req.id, statusId: OrderStatus.Rejected }).subscribe({
      next:  () => this.loadRequests(),
      error: () => {}
    });
  }

  // ── Helpers ──────────────────────────────────────────────────
  formatKey(id: number): string {
    return `MDPO-${id}`;
  }

  formatDate(dateStr: string | undefined): string {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '—';
    const day   = d.getDate();
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const year  = d.getFullYear();
    const ord   = this.ordinal(day);
    return `${month} ${day}${ord} ${year}`;
  }

  private ordinal(n: number): string {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  getInitials(name?: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  getAvatarClass(name?: string): string {
    if (!name) return 'avatar--default';
    const colors = ['avatar--yellow', 'avatar--blue', 'avatar--green', 'avatar--orange', 'avatar--purple'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
    return colors[hash % colors.length];
  }

  getStatusClass(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.Approved: return 'status--approved';
      case OrderStatus.Rejected: return 'status--rejected';
      case OrderStatus.Canceled: return 'status--canceled';
      default:                   return 'status--pending';
    }
  }

  getStatusLabel(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.Approved: return this.transloco.translate('requests.filter.approved');
      case OrderStatus.Rejected: return this.transloco.translate('requests.filter.rejected');
      case OrderStatus.Canceled: return this.transloco.translate('requests.filter.canceled');
      default:                   return this.transloco.translate('requests.filter.pending');
    }
  }

  getTypeClass(type: string): string {
    const t = (type ?? '').toLowerCase();
    if (t.includes('business') || t.includes('trip')) return 'type--business-trip';
    if (t.includes('overtime'))                        return 'type--overtime';
    if (t.includes('leave'))                           return 'type--leave';
    return 'type--default';
  }

  stopPropagation(e: MouseEvent): void {
    e.stopPropagation();
  }
}
