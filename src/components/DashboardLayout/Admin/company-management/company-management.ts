import {
  Component, inject, signal, computed,
  ChangeDetectionStrategy, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { CompanyService, CompanyDto } from '../../../../services/company.service';

@Component({
  selector: 'app-company-management',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule, MatIconModule],
  templateUrl: './company-management.html',
  styleUrls: ['./company-management.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyManagementComponent implements OnInit {
  private readonly companyService = inject(CompanyService);

  companies   = signal<CompanyDto[]>([]);
  isLoading   = signal(true);
  errorKey    = signal('');
  searchQuery = signal('');

  /** Inline confirmation state */
  pendingAction = signal<{ id: number; type: 'suspend' | 'delete' } | null>(null);
  actionLoading = signal(false);
  actionErrorKey = signal('');

  filteredCompanies = computed<CompanyDto[]>(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.companies();
    return this.companies().filter(c =>
      (c.name?.toLowerCase().includes(q)) ||
      (c.email?.toLowerCase().includes(q))
    );
  });

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.errorKey.set('');
    this.companyService.getAll().subscribe({
      next: (list) => {
        this.companies.set(list ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set('admin.companies.errors.load');
        this.isLoading.set(false);
      },
    });
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  confirmAction(id: number, type: 'suspend' | 'delete'): void {
    this.pendingAction.set({ id, type });
    this.actionErrorKey.set('');
  }

  cancelAction(): void {
    this.pendingAction.set(null);
    this.actionErrorKey.set('');
  }

  executeAction(): void {
    const action = this.pendingAction();
    if (!action) return;

    this.actionLoading.set(true);
    this.actionErrorKey.set('');

    const call$ = action.type === 'suspend'
      ? this.companyService.suspend(action.id)
      : this.companyService.delete(action.id);

    call$.subscribe({
      next: () => {
        this.companies.update(list => list.filter(c => c.id !== action.id));
        this.pendingAction.set(null);
        this.actionLoading.set(false);
      },
      error: () => {
        const key = action.type === 'suspend'
          ? 'admin.companies.errors.suspend'
          : 'admin.companies.errors.delete';
        this.actionErrorKey.set(key);
        this.actionLoading.set(false);
      },
    });
  }
}
