import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import { PaymentService } from '../../../../services/payment.service';

type VerifyState = 'loading' | 'success' | 'failed' | 'no-session';

@Component({
  selector: 'app-payment-return',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './payment-return.html',
  styleUrl: './payment-return.css',
})
export class PaymentReturnComponent implements OnInit {
  private readonly route          = inject(ActivatedRoute);
  private readonly paymentService = inject(PaymentService);
  private readonly transloco      = inject(TranslocoService);

  state = signal<VerifyState>('loading');
  paidAmount = signal<number | null>(null);
  currency = signal<string>('USD');
  errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    // Accept both 'sessionId' (our backend) and 'session_id' (Stripe standard fallback)
    const sessionId =
      this.route.snapshot.queryParamMap.get('sessionId') ??
      this.route.snapshot.queryParamMap.get('session_id');
    if (!sessionId) {
      this.state.set('no-session');
      return;
    }
    this.verifySession(sessionId);
  }

  private verifySession(sessionId: string): void {
    this.state.set('loading');
    this.paymentService.verifySession(sessionId).subscribe({
      next: (res) => {
        if (res.success && res.data?.status === 'paid') {
          this.paidAmount.set(res.data.amountTotal);
          this.currency.set(res.data.currency?.toUpperCase() ?? 'USD');
          this.state.set('success');
        } else {
          this.errorMessage.set(res.message ?? this.transloco.translate('payments.paymentReturn.errors.notCompleted'));
          this.state.set('failed');
        }
      },
      error: (err) => {
        // Graceful 404: surface a clear message instead of a generic failure.
        if (err?.status === 404) {
          this.errorMessage.set(
            err?.error?.message ??
            this.transloco.translate('payments.paymentReturn.errors.sessionNotFound')
          );
        } else {
          this.errorMessage.set(
            err?.error?.message ?? this.transloco.translate('payments.paymentReturn.errors.verifyFailed')
          );
        }
        this.state.set('failed');
      },
    });
  }
}
