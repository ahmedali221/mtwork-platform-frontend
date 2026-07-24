import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { UserService } from '../../../../services/user.service';
import { CompanyEmployeeDto } from '../../../../models/employee-directory-models';
import { UserTypeId } from '../../../../models/user.model';
import { EmployeeDetailDialogComponent } from '../employee-detail-dialog/employee-detail-dialog';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './employees-list.html',
  styleUrl: './employees-list.css'
})
export class EmployeesListComponent implements OnInit {
  private userService = inject(UserService);
  private dialog      = inject(MatDialog);
  private cdr         = inject(ChangeDetectorRef);

  readonly UserTypeId = UserTypeId;

  original: CompanyEmployeeDto[] = [];
  filtered: CompanyEmployeeDto[] = [];
  loading  = false;
  error    = false;

  viewMode: 'table' | 'cards' = 'table';
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
  }

  search = '';

  expandedRowId: string | null = null;
  toggleExpand(id: string): void {
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error   = false;
    this.userService.getAllCompanyEmployees().subscribe({
      next: (list) => {
        this.original = list ?? [];
        this.loading  = false;
        this.applyFilter();
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.error   = true;
        this.cdr.detectChanges();
      }
    });
  }

  applyFilter(): void {
    const q = (this.search || '').trim().toLowerCase();
    this.filtered = !q ? this.original : this.original.filter(e =>
      this.fullName(e).toLowerCase().includes(q) ||
      (e.email ?? '').toLowerCase().includes(q) ||
      (e.jobTitleName ?? '').toLowerCase().includes(q) ||
      (e.position ?? '').toLowerCase().includes(q)
    );
  }

  clearFilter(): void {
    this.search = '';
    this.applyFilter();
  }

  fullName(e: CompanyEmployeeDto): string {
    return [e.firstName, e.lastName].filter(Boolean).join(' ') || e.favoriteName || e.email;
  }

  getInitials(e: CompanyEmployeeDto): string {
    const name = this.fullName(e);
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0]?.substring(0, 2).toUpperCase() ?? '?';
  }

  location(e: CompanyEmployeeDto): string {
    return [e.userAddress?.cityName, e.userAddress?.countryName].filter(Boolean).join(', ');
  }

  userTypeKey(userType: UserTypeId): string {
    switch (userType) {
      case UserTypeId.Contractor: return 'employees.userTypes.contractor';
      case UserTypeId.Business:   return 'employees.userTypes.business';
      default:                    return 'employees.userTypes.employee';
    }
  }

  openProfile(e: CompanyEmployeeDto): void {
    this.dialog.open(EmployeeDetailDialogComponent, {
      width: '480px',
      panelClass: 'custom-dialog-container',
      data: { employeeId: e.id, fallback: e }
    });
  }
}
