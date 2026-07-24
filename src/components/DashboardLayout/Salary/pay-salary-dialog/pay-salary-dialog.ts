import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { SalaryService } from '../../../../services/salary-service';
import { HrService } from '../../../../services/hr-service';
import { HRListDto } from '../../../../models/hr-models';
import { PaymentType } from '../../../../models/salary-withdraw-models';

@Component({
  selector: 'app-pay-salary-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, TranslocoModule],
  templateUrl: './pay-salary-dialog.html',
  styleUrl: './pay-salary-dialog.css'
})
export class PaySalaryDialogComponent implements OnInit {
  private dialogRef    = inject(MatDialogRef<PaySalaryDialogComponent>);
  private salaryService = inject(SalaryService);
  private hrService    = inject(HrService);
  private fb           = inject(FormBuilder);

  employees: HRListDto[] = [];
  employeesLoading = false;

  readonly paymentTypeOptions: Array<{ value: PaymentType; labelKey: string }> = [
    { value: 'salary',           labelKey: 'salary.paymentTypes.salary' },
    { value: 'firstPatch',       labelKey: 'salary.paymentTypes.firstPatch' },
    { value: 'lastPatch',        labelKey: 'salary.paymentTypes.lastPatch' },
    { value: 'task',             labelKey: 'salary.paymentTypes.task' },
    { value: 'stage',            labelKey: 'salary.paymentTypes.stage' }
  ];

  form = this.fb.nonNullable.group({
    contractId:  [0, [Validators.required, Validators.min(1)]],
    paymentType: ['' as PaymentType, Validators.required],
    amount:      [null as number | null],
    currency:    ['SAR', Validators.required],
    description: ['']
  });

  isSubmitting = false;
  submitError  = '';

  ngOnInit(): void {
    this.employeesLoading = true;
    this.hrService.getHRList().subscribe({
      next:  ({ result }) => {
        // Only employees with an active contract can be paid — drop HR rows
        // where contractId is missing/invalid so they can't be selected.
        this.employees = result.filter(e => Number.isFinite(e.contractId) && e.contractId > 0);
        this.employeesLoading = false;
      },
      error: () => { this.employeesLoading = false; }
    });

    // Clear the form-level error as soon as the user edits any field,
    // so a stale "invalid employee" banner disappears once the field is fixed.
    this.form.valueChanges.subscribe(() => {
      if (this.submitError) this.submitError = '';
    });
  }

  close(): void { this.dialogRef.close(); }

  fieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  onSubmit(): void {
    // Reset any stale form-level error from a previous attempt before re-validating.
    this.submitError = '';
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { contractId, paymentType, amount, currency, description } = this.form.getRawValue();

    // Defensive guard: contractId must be a finite positive number before hitting the API.
    const contractIdNum = Number(contractId);
    if (!Number.isFinite(contractIdNum) || contractIdNum <= 0) {
      this.form.get('contractId')?.markAsTouched();
      this.submitError = 'salary.errors.invalidEmployee';
      return;
    }

    // Resolve the employeeId from the selected HR record.
    const selectedEmployee = this.employees.find(e => e.contractId === contractIdNum);
    const employeeId = selectedEmployee?.employeeId ?? '';
    if (!employeeId) {
      this.submitError = 'salary.errors.invalidEmployee';
      return;
    }

    this.isSubmitting = true;
    this.submitError  = '';
    this.salaryService.paySalary({
      contractId:  contractIdNum,
      employeeId,
      amount:      amount ?? 0,
      currency:    currency || 'SAR',
      paymentType,
      description: description || undefined,
    }).subscribe({
      next:  () => this.dialogRef.close({ refresh: true }),
      error: () => { this.isSubmitting = false; this.submitError = 'salary.errors.paySalary'; }
    });
  }
}
