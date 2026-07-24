import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LeaveRequest, LeaveRequestDetail, OrderStatus, OrderRequestDto, ChangeStatusRequest } from '../../../../models/hr-models';
import { HrService } from '../../../../services/hr-service';
import { LookupService, LookupItem } from '../../../../services/lookup.service';
import { AuthService } from '../../../../services/auth';

export interface LeaveRequestDialogData {
  mode: 'create' | 'view';
  requestId?: number;
  contractId?: number;   // required for create mode — used as OrderRequest.ContractId FK
}

@Component({
  selector: 'app-leave-request-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    TranslocoModule
  ],
  templateUrl: './leave-request-dialog.html',
  styleUrl: './leave-request-dialog.css'
})
export class LeaveRequestDialogComponent implements OnInit {
  data      = inject<LeaveRequestDialogData>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<LeaveRequestDialogComponent>);
  private hrService     = inject(HrService);
  private lookupService = inject(LookupService);
  private authService   = inject(AuthService);
  private fb            = inject(FormBuilder);
  private snack         = inject(MatSnackBar);
  private transloco     = inject(TranslocoService);

  readonly OrderStatus = OrderStatus;

  leaveTypes: LookupItem[] = [];
  leaveTypesLoading = true;

  // View mode — detail fetched from GetOther
  detail        = signal<LeaveRequestDetail | null>(null);
  detailLoading = signal(false);
  detailError   = signal(false);

  form = this.fb.nonNullable.group(
    {
      leaveTypeId:  [0, [Validators.required, Validators.min(1)]],
      startDate:    ['', Validators.required],
      endDate:      ['', Validators.required],
      requestTitle: [''],
      reason:       ['']
    },
    { validators: endAfterStart }
  );

  isSubmitting = false;
  isActioning  = false;
  submitError  = '';

  get isCreate(): boolean { return this.data.mode === 'create'; }

  get isPending(): boolean {
    return this.detail()?.orderStatus === OrderStatus.Pending;
  }

  ngOnInit(): void {
    if (this.isCreate) {
      this.lookupService.getLeaveTypes().subscribe({
        next:  types => { this.leaveTypes = types; this.leaveTypesLoading = false; },
        error: ()    => { this.leaveTypesLoading = false; }
      });
    } else if (this.data.requestId) {
      this.detailLoading.set(true);
      this.hrService.getLeaveRequestDetail(this.data.requestId).subscribe({
        next:  d  => { this.detail.set(d); this.detailLoading.set(false); },
        error: () => { this.detailError.set(true); this.detailLoading.set(false); }
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  // ── Create ────────────────────────────────────────────────

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { leaveTypeId, startDate, endDate, requestTitle, reason } = this.form.getRawValue();
    this.isSubmitting = true;
    this.submitError  = '';

    const start     = new Date(startDate);
    const end       = new Date(endDate);
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const payload: OrderRequestDto = {
      leaveTypeId:          Number(leaveTypeId),
      startDate:            start.toISOString(),
      endDate:              end.toISOString(),
      totalDays,
      requestTitle:         requestTitle || undefined,
      requestComments:      reason || undefined,
      requestingEmployeeId: this.authService.getCurrentUser().userId ?? undefined,
      contractId:           this.data.contractId,
    };

    this.hrService.createLeaveRequest(payload)
      .subscribe({
        next: () => this.dialogRef.close({ refresh: true }),
        error: () => {
          this.isSubmitting = false;
          this.submitError  = 'hr.errors.submitRequest';
          this.snack.open(
            this.transloco.translate('hr.errors.submitRequest'),
            '',
            { duration: 4000, panelClass: 'snack-error' }
          );
        }
      });
  }

  // ── Approve / Reject ──────────────────────────────────────

  approve(): void { this.changeStatus(OrderStatus.Approved); }
  reject():  void { this.changeStatus(OrderStatus.Rejected); }

  private changeStatus(orderStatus: OrderStatus): void {
    const d = this.detail();
    if (!d) return;
    this.isActioning = true;
    const payload: ChangeStatusRequest = { orderId: d.id, statusId: orderStatus };
    this.hrService.changeOrderStatus(payload).subscribe({
      next:  () => this.dialogRef.close({ refresh: true }),
      error: () => { this.isActioning = false; }
    });
  }

  // ── Helpers ───────────────────────────────────────────────

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

  fieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
}

// ── Cross-field validator: endDate >= startDate ────────────
function endAfterStart(group: AbstractControl): { endBeforeStart: true } | null {
  const start = group.get('startDate')?.value as string;
  const end   = group.get('endDate')?.value as string;
  if (start && end && end < start) {
    return { endBeforeStart: true };
  }
  return null;
}
