import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { UserService } from '../../../../services/user.service';
import { CompanyEmployeeDetailDto, CompanyEmployeeDto } from '../../../../models/employee-directory-models';

export interface EmployeeDetailDialogData {
  employeeId: string;
  /** List-row data shown immediately while the full detail call is in flight. */
  fallback: CompanyEmployeeDto;
}

@Component({
  selector: 'app-employee-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, TranslocoModule],
  templateUrl: './employee-detail-dialog.html',
  styleUrl: './employee-detail-dialog.css'
})
export class EmployeeDetailDialogComponent implements OnInit {
  data      = inject<EmployeeDetailDialogData>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<EmployeeDetailDialogComponent>);
  private userService = inject(UserService);

  readonly loading = signal(true);
  readonly error   = signal(false);
  readonly detail  = signal<CompanyEmployeeDetailDto | null>(null);

  ngOnInit(): void {
    this.userService.getEmployeeById(this.data.employeeId).subscribe({
      next: (res) => {
        this.detail.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  fullName(): string {
    const d = this.detail() ?? this.data.fallback;
    return [d.firstName, d.lastName].filter(Boolean).join(' ') || d.favoriteName || d.email;
  }

  getInitials(): string {
    const name = this.fullName();
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0]?.substring(0, 2).toUpperCase() ?? '?';
  }

  location(): string {
    const d = this.detail() ?? this.data.fallback;
    return [d.userAddress?.cityName, d.userAddress?.countryName].filter(Boolean).join(', ');
  }

  close(): void {
    this.dialogRef.close();
  }
}
