import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatDialog }      from '@angular/material/dialog';
import { MatSnackBar }    from '@angular/material/snack-bar';
import { MatIconModule }  from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

import { ContractDetailsDialogeComponent, DialogCloseResult }
  from './../contract-details-dialoge/contract-details-dialoge';
import { ContractService }    from '../../../../services/contract-service';
import { LookupService }      from '../../../../services/lookup.service';
import {
  Contract,
  ContractFilters,
  ContractStatus,
  PaginationInfo,
  ApiResponse,
} from '../../../../models/contract-models';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslocoModule, MatIconModule],
  templateUrl: './contract-list.html',
  styleUrl: './contract-list.css',
})
export class ContractListComponent implements OnInit {

  // ── State (Teams/Meetings pattern + reportMode) ───────────────────
  /**
   * `originalContracts` — the raw page from the API.
   * `filteredContracts` — what the template renders. Recomputed by
   * `applyFilters()` from the active tab + client-side filters.
   */
  originalContracts: Contract[] = [];
  filteredContracts: Contract[] = [];

  paginationInfo: PaginationInfo = {
    currentPage:  1,
    itemsPerPage: 10,
    totalItems:   0,
    totalPages:   0,
  };

  isLoading       = signal(false);
  isDeleting      = signal(false);
  hasError        = signal(false);
  activeMenuId    = signal<string | null>(null);
  deleteConfirmId = signal<string | null>(null);

  // ── View toggle (table | cards) — Teams/Meetings pattern ──────────
  viewMode: 'table' | 'cards' = 'table';
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
  }

  // ── Report mode (NOT mixed with viewMode) ─────────────────────────
  // When true, the page is read-only: no filters, no expand, no actions.
  reportMode = false;
  toggleReport(): void {
    this.reportMode = !this.reportMode;
    if (this.reportMode) {
      this.expandedRowId = null;
      this.activeMenuId.set(null);
      this.deleteConfirmId.set(null);
    }
  }

  // ── Expandable rows ───────────────────────────────────────────────
  expandedRowId: string | null = null;
  toggleExpand(id: string): void {
    if (this.reportMode) return;
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }

  // ── Filters ───────────────────────────────────────────────────────
  selectedTab        = 'All';
  countryFilter      = '';
  contractTypeFilter = '';
  workStatusFilter   = '';
  searchQuery        = '';

  countries: { value: string; name: string }[] = [{ value: '', name: 'All' }];

  readonly contractTypes: { value: string; labelKey: string }[] = [
    { value: '',                   labelKey: 'contracts.filters.all' },
    { value: 'EmployeeContract',   labelKey: 'contracts.types.employeeContract' },
    { value: 'FixedPayContract',   labelKey: 'contracts.types.fixedPayContract' },
    { value: 'PerTaskContract',    labelKey: 'contracts.types.perTaskContract' },
    { value: 'PerProjectContract', labelKey: 'contracts.types.perProjectContract' },
  ];

  readonly workStatuses: { value: string; labelKey: string }[] = [
    { value: '',           labelKey: 'contracts.filters.all' },
    { value: 'Initiated',  labelKey: 'contracts.status.initiated' },
    { value: 'Reviewed',   labelKey: 'contracts.status.reviewed' },
    { value: 'Approved',   labelKey: 'contracts.status.approved' },
    { value: 'Canceled',   labelKey: 'contracts.status.canceled' },
  ];

  readonly avatarColors = [
    'color-1', 'color-2', 'color-3',
    'color-4', 'color-5', 'color-6',
  ];

  // ── DI ────────────────────────────────────────────────────────────
  private contractService = inject(ContractService);
  private lookupService   = inject(LookupService);
  private dialog          = inject(MatDialog);
  private snackBar        = inject(MatSnackBar);
  private router          = inject(Router);
  private cdr             = inject(ChangeDetectorRef);

  // ── Lifecycle ─────────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadContracts();
    this.loadLookups();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.activeMenuId.set(null);
    this.deleteConfirmId.set(null);
  }

  // ── Data loading ──────────────────────────────────────────────────
  loadLookups(): void {
    this.lookupService.getCountries().subscribe({
      next: items => {
        this.countries = [
          { value: '', name: 'All' },
          ...items.map(c => ({ value: c.name, name: c.name })),
        ];
      },
      error: () => { /* non-critical: country filter unavailable */ },
    });
  }

  loadContracts(): void {
    this.isLoading.set(true);
    this.hasError.set(false);

    // Tab filter is applied client-side via `applyFilters` — NOT sent to the API.
    const filters: ContractFilters = {
      country:      this.countryFilter      || undefined,
      contractType: this.contractTypeFilter || undefined,
      status:       this.workStatusFilter   || undefined,
      search:       this.searchQuery        || undefined,
    };

    this.contractService
      .getContracts(this.paginationInfo.currentPage, this.paginationInfo.itemsPerPage, filters)
      .subscribe({
        next: (response: ApiResponse<Contract>) => {
          this.originalContracts = response.data;
          this.paginationInfo    = response.pagination;
          this.applyFilters();
          this.isLoading.set(false);
          this.cdr.markForCheck();
        },
        error: () => {
          this.isLoading.set(false);
          this.hasError.set(true);
          this.cdr.markForCheck();
        },
      });
  }

  // ── Filtering (client-side tab + recompute filteredContracts) ─────
  // Status mapping: "Draft" tab -> backend ContractStatusEnum.Initiated (id 1).
  // Type mapping:   "Employees" tab -> contractType === 'EmployeeContract'.
  //                 "Contractors" tab -> all OTHER contract types.
  applyFilters(): void {
    switch (this.selectedTab) {
      case 'Employees':
        this.filteredContracts = this.originalContracts.filter(c => c.contractType === 'EmployeeContract');
        break;
      case 'Contractors':
        this.filteredContracts = this.originalContracts.filter(
          c => !!c.contractType && c.contractType !== 'EmployeeContract',
        );
        break;
      case 'Draft':
        this.filteredContracts = this.originalContracts.filter(c => c.statusId === ContractStatus.Initiated);
        break;
      case 'All':
      default:
        this.filteredContracts = [...this.originalContracts];
    }
  }

  selectTab(tab: string): void {
    this.selectedTab   = tab;
    this.expandedRowId = null;
    // Tab filter is client-side — no API call.
    this.applyFilters();
    this.cdr.markForCheck();
  }

  /** Server-side filter change (search/dropdowns) — re-fetch the first page. */
  onServerFilterChange(): void {
    this.paginationInfo.currentPage = 1;
    this.loadContracts();
  }

  hasActiveFilters(): boolean {
    return (
      !!this.countryFilter      ||
      !!this.contractTypeFilter ||
      !!this.workStatusFilter   ||
      !!this.searchQuery        ||
      this.selectedTab !== 'All'
    );
  }

  clearAllFilters(): void {
    this.countryFilter      = '';
    this.contractTypeFilter = '';
    this.workStatusFilter   = '';
    this.searchQuery        = '';
    this.selectedTab        = 'All';
    this.paginationInfo.currentPage = 1;
    this.loadContracts();
  }

  // ── Pagination ────────────────────────────────────────────────────
  onPageChange(newPage: number): void {
    this.paginationInfo.currentPage = newPage;
    this.loadContracts();
  }

  onItemsPerPageChange(event: Event): void {
    const el = event.target as HTMLSelectElement;
    this.paginationInfo.itemsPerPage = parseInt(el.value, 10);
    this.paginationInfo.currentPage  = 1;
    this.loadContracts();
  }

  // ── Selection ─────────────────────────────────────────────────────
  onSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.originalContracts = this.originalContracts.map(c => ({ ...c, isSelected: checked }));
    this.applyFilters();
  }

  onContractSelected(contract: Contract): void {
    const idx = this.originalContracts.findIndex(c => c.workId === contract.workId);
    if (idx !== -1) this.originalContracts[idx] = contract;
  }

  // ── Detail dialog ─────────────────────────────────────────────────
  openContractDetails(contract: Contract): void {
    if (this.reportMode) return;
    const ref = this.dialog.open<
      ContractDetailsDialogeComponent,
      Contract,
      DialogCloseResult
    >(ContractDetailsDialogeComponent, {
      data: contract,
      width: '500px',
      height: '100vh',
      position: { right: '0', top: '0' },
      panelClass: 'meeting-details-right-panel',
    });

    ref.afterClosed().subscribe((result: DialogCloseResult | undefined) => {
      if (result === 'deleted' || result === 'status-changed') {
        this.loadContracts();
      }
    });
  }

  // ── Context menu ──────────────────────────────────────────────────
  toggleMenu(contractId: string, event: MouseEvent): void {
    event.stopPropagation();
    const opening = this.activeMenuId() !== contractId;
    this.activeMenuId.set(opening ? contractId : null);
    this.deleteConfirmId.set(null);
  }

  closeMenu(): void {
    this.activeMenuId.set(null);
    this.deleteConfirmId.set(null);
  }

  // ── Edit ──────────────────────────────────────────────────────────
  editContract(contract: Contract, event: MouseEvent): void {
    event.stopPropagation();
    this.closeMenu();

    // Keys must match the contractType strings returned by the service
    // (mapped from backend ContractTypeEnum: FixedPayContract, PerTaskContract, etc.)
    const routeMap: Record<string, string> = {
      EmployeeContract:   '/dashboard/CreateEmployeeContract',
      FixedPayContract:   '/dashboard/CreateFixedSalaryContract',
      PerTaskContract:    '/dashboard/CreatePaytaskContact',
      PerProjectContract: '/dashboard/CreateMileStoneContract',
    };

    const route = routeMap[contract.contractType] ?? '/dashboard/CreateFixedSalaryContract';
    this.router.navigate([route], { queryParams: { id: contract.id, mode: 'edit' } });
  }

  // ── Delete ────────────────────────────────────────────────────────
  requestQuickDelete(contractId: string, event: MouseEvent): void {
    event.stopPropagation();
    this.deleteConfirmId.set(contractId);
  }

  cancelQuickDelete(event: MouseEvent): void {
    event.stopPropagation();
    this.deleteConfirmId.set(null);
  }

  confirmQuickDelete(contract: Contract, event: MouseEvent): void {
    event.stopPropagation();
    if (this.isDeleting()) return;
    this.isDeleting.set(true);

    this.contractService.deleteContract(contract.id).subscribe({
      next: () => {
        this.isDeleting.set(false);
        this.closeMenu();
        this.snackBar.open('Contract deleted.', 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.loadContracts();
      },
      error: (err) => {
        this.isDeleting.set(false);
        const msg = err?.error?.message ?? 'Failed to delete contract.';
        this.snackBar.open(msg, 'OK', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snack-warn'],
        });
      },
    });
  }

  // ── Download PDF ──────────────────────────────────────────────────
  quickDownloadPdf(contract: Contract, event: MouseEvent): void {
    event.stopPropagation();
    this.closeMenu();

    this.contractService.downloadPdf(contract.id).subscribe({
      next: (blob) => {
        const url  = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href     = url;
        link.download = `contract-${contract.workId || contract.id}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'Failed to download PDF.';
        this.snackBar.open(msg, 'OK', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snack-warn'],
        });
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────
  getInitials(fullName: string): string {
    if (!fullName) return '?';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }

  getAvatarColorClass(fullName: string): string {
    if (!fullName) return this.avatarColors[0];
    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return this.avatarColors[Math.abs(hash) % this.avatarColors.length];
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.paginationInfo.totalPages }, (_, i) => i + 1);
  }
}
