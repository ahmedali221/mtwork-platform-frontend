import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { HrService } from '../../../../services/hr-service';
import { LookupService, LookupItem } from '../../../../services/lookup.service';
import {
  BusinessTripDto,
  OrderRequestDto,
  OrderTypeId,
  OverTimeDto,
  ServiceCertificateRequestDto,
} from '../../../../models/hr-models';

type RequestCategory = 'leave' | 'overtime' | 'trip' | 'course' | 'certificate' | 'other';

@Component({
  selector:    'app-new-request-dialog',
  standalone:  true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    TranslocoModule
  ],
  templateUrl: './new-request-dialog.html',
  styleUrl:    './new-request-dialog.css'
})
export class NewRequestDialogComponent implements OnInit {
  private dialogRef     = inject(MatDialogRef<NewRequestDialogComponent>);
  private hrService     = inject(HrService);
  private lookupService = inject(LookupService);
  private fb            = inject(FormBuilder);

  // ── Lookup-driven dropdown sources (replaces hardcoded arrays) ──
  orderTypes        = signal<LookupItem[]>([]);
  leaveTypes        = signal<LookupItem[]>([]);
  orderTypesLoading = signal(true);
  leaveTypesLoading = signal(false);
  orderTypesError   = signal(false);
  leaveTypesError   = signal(false);

  form = this.fb.nonNullable.group({
    orderTypeId:    [null as number | null, Validators.required],
    leaveTypeId:    [null as number | null],
    startDate:      [''],
    endDate:        [''],
    overtimeDate:   [''],
    overtimeHours:  [null as number | null, [Validators.min(1), Validators.max(24)]],
    destination:    [''],
    courseName:     [''],
    certificateType:[''],
    reason:         [''],
  });

  isSubmitting = signal(false);
  submitError  = signal('');

  // ── Derived: category from selected OrderType id ────────────────
  // NOTE: Reactive-form `.value` is NOT a signal — `computed()` would
  // only ever evaluate once. We use a writable signal updated inside
  // onOrderTypeChange() so the template + onSubmit stay in sync.
  category = signal<RequestCategory | null>(null);

  private resolveCategory(id: number | null | undefined): RequestCategory | null {
    if (id == null) return null;
    switch (id) {
      case OrderTypeId.Leave:              return 'leave';
      case OrderTypeId.Overtime:           return 'overtime';
      case OrderTypeId.BusinessTrip:       return 'trip';
      case OrderTypeId.Course:             return 'course';
      case OrderTypeId.ServiceCertificate: return 'certificate';
      case OrderTypeId.Other:              return 'other';
      default:                             return 'other';
    }
  }

  ngOnInit(): void {
    this.loadOrderTypes();
  }

  private loadOrderTypes(): void {
    this.orderTypesLoading.set(true);
    this.orderTypesError.set(false);
    // Reactive-forms rule: never use [disabled] binding on a FormControl.
    // Toggle disabled state programmatically instead.
    this.form.controls.orderTypeId.disable({ emitEvent: false });
    this.lookupService.getOrderTypes().subscribe({
      next: items => {
        this.orderTypes.set(items);
        this.orderTypesError.set(items.length === 0);
        this.orderTypesLoading.set(false);
        if (items.length > 0) {
          this.form.controls.orderTypeId.enable({ emitEvent: false });
        }
      },
      error: () => {
        this.orderTypesError.set(true);
        this.orderTypesLoading.set(false);
        // Leave the control disabled when load fails.
      },
    });
  }

  private loadLeaveTypes(): void {
    if (this.leaveTypes().length > 0) {
      this.form.controls.leaveTypeId.enable({ emitEvent: false });
      return;
    }
    this.leaveTypesLoading.set(true);
    this.leaveTypesError.set(false);
    this.form.controls.leaveTypeId.disable({ emitEvent: false });
    this.lookupService.getLeaveTypes().subscribe({
      next: items => {
        this.leaveTypes.set(items);
        this.leaveTypesError.set(items.length === 0);
        this.leaveTypesLoading.set(false);
        if (items.length > 0) {
          this.form.controls.leaveTypeId.enable({ emitEvent: false });
        }
      },
      error: () => {
        this.leaveTypesError.set(true);
        this.leaveTypesLoading.set(false);
      },
    });
  }

  onOrderTypeChange(value: number): void {
    this.form.patchValue({
      orderTypeId:     value,
      leaveTypeId:     null,
      startDate:       '',
      endDate:         '',
      overtimeDate:    '',
      overtimeHours:   null,
      destination:     '',
      courseName:      '',
      certificateType: '',
      reason:          '',
    });

    // Recompute category from the new order-type id and push it into
    // the signal so the template + onSubmit see the update.
    const cat = this.resolveCategory(value);
    this.category.set(cat);

    // Clear any submit-error left over from a previous attempt.
    if (this.submitError()) this.submitError.set('');

    // LeaveType is required only when category is 'leave'
    const leaveCtrl = this.form.controls.leaveTypeId;
    if (cat === 'leave') {
      leaveCtrl.setValidators([Validators.required]);
      this.loadLeaveTypes();
    } else {
      leaveCtrl.clearValidators();
    }
    leaveCtrl.updateValueAndValidity({ emitEvent: false });
  }

  fieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  close(): void { this.dialogRef.close(); }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.isSubmitting()) return;

    // Visible feedback when the form blocks submit (was previously silent).
    if (this.form.invalid) {
      const orderInvalid = this.form.controls.orderTypeId.invalid;
      const leaveInvalid = this.form.controls.leaveTypeId.invalid;
      if (orderInvalid)      this.submitError.set('requests.errors.selectType');
      else if (leaveInvalid) this.submitError.set('requests.errors.selectLeaveType');
      else                   this.submitError.set('requests.errors.fillRequired');
      return;
    }

    const cat = this.category();
    if (!cat) return;

    const v = this.form.getRawValue();
    const orderTypeId = v.orderTypeId!;

    const rawStart = cat === 'overtime' ? v.overtimeDate : v.startDate;
    const rawEnd   = cat === 'overtime' ? v.overtimeDate : v.endDate;
    const startDate = rawStart ? new Date(rawStart).toISOString() : new Date().toISOString();
    const endDate   = rawEnd   ? new Date(rawEnd).toISOString()   : startDate;

    const base: OrderRequestDto = {
      orderTypeId,
      startDate,
      endDate,
      requestComments: v.reason?.trim() || undefined,
    };

    this.isSubmitting.set(true);
    this.submitError.set('');

    let request$: Observable<void>;

    switch (cat) {
      case 'leave': {
        const leavePayload = { ...base, leaveTypeId: v.leaveTypeId ?? undefined };
        request$ = this.hrService.createLeaveRequest(leavePayload);
        break;
      }

      case 'overtime': {
        const otPayload: OverTimeDto = {
          ...base,
          // Capture single overtime entry as one OverTimeDay; the rich
          // multi-day editor is not yet implemented in this dialog.
          overTimeDays: v.overtimeDate
            ? [{
                overTimeDate: new Date(v.overtimeDate).toISOString(),
                totalHours:   v.overtimeHours ?? undefined,
              }]
            : undefined,
        };
        request$ = this.hrService.createOverTime(otPayload);
        break;
      }

      case 'trip': {
        const tripPayload: BusinessTripDto = {
          ...base,
          // Destination has no dedicated backend field; preserved in
          // requestTitle for now (rich expense editor is a follow-up).
          requestTitle: v.destination?.trim() || undefined,
        };
        request$ = this.hrService.createBusinessTrip(tripPayload);
        break;
      }

      case 'course': {
        const coursePayload = { ...base, requestTitle: v.courseName?.trim() || undefined };
        request$ = this.hrService.createCourse(coursePayload);
        break;
      }

      case 'certificate': {
        const certPayload: ServiceCertificateRequestDto = {
          ...base,
          serviceCertificate: v.certificateType ? { name: v.certificateType } : undefined,
        };
        request$ = this.hrService.createServiceCertificate(certPayload);
        break;
      }

      case 'other':
      default:
        request$ = this.hrService.createOther(base);
        break;
    }

    request$.subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialogRef.close({ refresh: true });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        const msg = err?.error?.message ?? err?.message ?? 'requests.errors.submit';
        this.submitError.set(msg);
      },
    });
  }
}
