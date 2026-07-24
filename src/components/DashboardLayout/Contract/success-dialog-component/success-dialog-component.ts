import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './success-dialog-component.html',
  styleUrls: ['./success-dialog-component.css']
})
export class SuccessDialogComponent {

  private dialogRef = inject(MatDialogRef<SuccessDialogComponent>);
  private router    = inject(Router);
  data              = inject<{ contractType: string }>(MAT_DIALOG_DATA);

  closeDialog(): void {
    this.dialogRef.close();
  }

  goToDashboard(): void {
    const userType = localStorage.getItem('userType');
    const route = userType === '1' ? '/dashboard/employee'
                : userType === '2' ? '/dashboard/contractor'
                : '/dashboard/business';
    this.dialogRef.close();
    this.router.navigate([route]);
  }
}
