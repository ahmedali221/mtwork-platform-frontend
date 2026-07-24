import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import { PaymentService } from '../../../../services/payment.service';
import { TokenService } from '../../../../services/token.service';

@Component({
  selector: 'app-balance-recharge',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './balance-recharge.html',
  styleUrl: './balance-recharge.css',
})
export class BalanceRechargeComponent implements OnInit {
  private readonly paymentService = inject(PaymentService);
  private readonly tokenService   = inject(TokenService);
  private readonly transloco      = inject(TranslocoService);

  companyId = signal<number | null>(null);
  currentBalance = signal<number | null>(null);
  amount = signal<number>(0);

  isLoadingBalance = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal<string | null>(null);
  balanceError = signal<string | null>(null);

  readonly presetAmounts = [50, 100, 250, 500, 1000];

  ngOnInit(): void {
    const rawId = this.tokenService.getCompanyId();
    const id = rawId !== null ? Number(rawId) : null;
    this.companyId.set(id);
    if (id) {
      this.loadBalance(id);
    }
  }

  private loadBalance(companyId: number): void {
    this.isLoadingBalance.set(true);
    this.balanceError.set(null);
    this.paymentService.getCompanyBalance(companyId).subscribe({
      next: (res) => {
        // Verified contract: res.data is a CompanyBalance object; the number lives at
        // data.currentBalance. Bind that field only — no inference, no fake 0 fallback.
        this.currentBalance.set(res.data?.currentBalance ?? null);
        this.isLoadingBalance.set(false);
      },
      error: (err) => {
        this.balanceError.set(err?.error?.message ?? this.transloco.translate('payments.balanceRecharge.errors.loadBalance'));
        this.isLoadingBalance.set(false);
      },
    });
  }

  selectPreset(value: number): void {
    this.amount.set(value);
    this.errorMessage.set(null);
  }

  onAmountInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.amount.set(Number(input.value));
    this.errorMessage.set(null);
  }

  get isValidAmount(): boolean {
    return this.amount() > 0;
  }

  submit(): void {
    if (!this.isValidAmount) {
      this.errorMessage.set('payments.errors.invalidAmount');
      return;
    }
    const companyId = this.companyId();
    if (!companyId) {
      this.errorMessage.set('payments.errors.companyNotFound');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    this.paymentService
      .createCheckoutSession({ amount: this.amount(), companyId, description: this.transloco.translate('payments.balanceRecharge.title'), paymentType: 'balance_recharge' })
      .subscribe({
        next: (res) => {
          if (res.success && res.data?.url) {
            window.location.href = res.data.url;
          } else {
            this.errorMessage.set(res.message ?? this.transloco.translate('payments.balanceRecharge.errors.noSession'));
            this.isSubmitting.set(false);
          }
        },
        error: (err) => {
          this.errorMessage.set(err?.error?.message ?? this.transloco.translate('payments.balanceRecharge.errors.sessionFailed'));
          this.isSubmitting.set(false);
        },
      });
  }
}
