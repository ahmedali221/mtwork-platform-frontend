import { Component, Inject, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { WithdrawService } from '../../../../services/withdraw-service';
import { TokenService } from '../../../../services/token.service';

interface WithdrawDialogData {
  /** Current employee balance from EmployeeWithdrawHistoryDto.currentBalance.
   *  null = unknown (no client-side amount validation can be enforced). */
  balance: number | null;
}

@Component({
  selector: 'app-withdraw-request-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, TranslocoModule],
  templateUrl: './withdraw-request-dialog.html',
  styleUrl: './withdraw-request-dialog.css'
})
export class WithdrawRequestDialogComponent {
  private dialogRef       = inject(MatDialogRef<WithdrawRequestDialogComponent>);
  private withdrawService = inject(WithdrawService);
  private tokenService    = inject(TokenService);
  private fb              = inject(FormBuilder);

  // Backend CreateWithdrawRequestDto requires EmployeeId, FullName, IBAN, Amount
  // (WithdrawRequestDto.cs:26-42). EmployeeId comes from the JWT; FullName + IBAN
  // are user-entered.
  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    iban:     ['', [Validators.required, Validators.maxLength(50)]],
    amount:   [null as number | null, [Validators.required, Validators.min(0.01)]],
  });

  readonly balance: number | null;
  readonly hasBalance = computed(() => this.balance !== null);

  isSubmitting = false;
  submitError  = '';
  /** True when client-side amount > balance check fails. */
  insufficientBalance = signal(false);

  constructor(@Inject(MAT_DIALOG_DATA) data: WithdrawDialogData | null) {
    this.balance = data?.balance ?? null;
  }

  close(): void { this.dialogRef.close(); }

  fieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  /** Inline check used by template + onSubmit. Skipped if balance is unknown. */
  isAmountOverBalance(): boolean {
    const amount = this.form.controls.amount.value;
    return this.balance !== null && amount != null && amount > this.balance;
  }

  /** Reset insufficient-balance flag when the user edits the amount. */
  onAmountInput(): void {
    if (this.insufficientBalance()) this.insufficientBalance.set(false);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    // Client-side guard: block submit when amount exceeds known balance.
    // Backend currently masks this as a generic 500 (no AppException catch),
    // so we surface a friendly message before the request is sent.
    if (this.isAmountOverBalance()) {
      this.insufficientBalance.set(true);
      this.submitError = '';
      return;
    }

    // EmployeeId comes from the JWT (uid claim), never user input —
    // satisfies backend CreateWithdrawRequestDto.EmployeeId [Required].
    const employeeId = this.tokenService.getUserId();
    if (!employeeId) {
      this.submitError = 'salary.errors.notAuthenticated';
      return;
    }

    const { fullName, iban, amount } = this.form.getRawValue();

    // Payload matches backend CreateWithdrawRequestDto exactly (4 [Required] fields).
    const payload = {
      employeeId,
      fullName: fullName.trim(),
      iban:     iban.trim(),
      amount:   amount!,
    };

    this.isSubmitting = true;
    this.submitError  = '';
    this.insufficientBalance.set(false);

    this.withdrawService.submitRequest(payload).subscribe({
      next:  () => this.dialogRef.close({ refresh: true }),
      error: (err) => {
        this.isSubmitting = false;

        // Backend returns 500 for unhandled business-rule failures
        // (e.g., insufficient balance — see WithdrawController.cs:24-44,
        // no `catch (AppException)` block). Surface a clear message
        // instead of leaking "Internal server error" to the user.
        if (err?.status === 500) {
          this.submitError = 'salary.errors.insufficientBalance';
          return;
        }

        // Validation / business errors (400) usually carry a translated
        // message in the response body — prefer it.
        this.submitError = err?.error?.message ?? 'salary.errors.submitWithdrawal';
      }
    });
  }
}
