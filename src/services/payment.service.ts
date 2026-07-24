import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  CheckoutSessionRequest,
  CheckoutSessionResponse,
  VerifySessionResponse,
  SubscriptionAmountsResponse,
  ActiveSubscriptionResponse,
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  CompanyBalanceResponse,
} from '../models/payment.models';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly api = inject(ApiService);

  // POST /Payment/create-session
  // Verified live route (2026-06-30): GET → 405 (exists, POST-only); the old
  // 'create-checkout-session' returned 404 (PAY-07). Payload matches CreatePaymentSessionDto
  // (required: companyId, amount, paymentType) — unchanged.
  createCheckoutSession(
    payload: CheckoutSessionRequest
  ): Observable<CheckoutSessionResponse> {
    return this.api.post<CheckoutSessionRequest, CheckoutSessionResponse>(
      'Payment/create-session',
      payload
    );
  }

  // GET /Payment/verify-session?sessionId=
  verifySession(sessionId: string): Observable<VerifySessionResponse> {
    return this.api.get<VerifySessionResponse>('Payment/verify-session', {
      sessionId,
    });
  }

  // GET /CompanySubscription/GetAmounts
  getSubscriptionAmounts(): Observable<SubscriptionAmountsResponse> {
    return this.api.get<SubscriptionAmountsResponse>(
      'CompanySubscription/GetAmounts'
    );
  }

  // GET /CompanySubscription/GetActive?companyId=
  getActiveSubscription(
    companyId: number
  ): Observable<ActiveSubscriptionResponse> {
    return this.api.get<ActiveSubscriptionResponse>(
      'CompanySubscription/GetActive',
      { companyId }
    );
  }

  // POST /CompanySubscription/Create
  createSubscription(
    payload: CreateSubscriptionRequest
  ): Observable<CreateSubscriptionResponse> {
    return this.api.post<CreateSubscriptionRequest, CreateSubscriptionResponse>(
      'CompanySubscription/Create',
      payload
    );
  }

  // GET /Salary/GetCompanyBalance?companyId=
  // Verified live contract (2026-06-30): data is a CompanyBalance object
  // ({ companyId, currentBalance, companyName }), NOT a number. No currency field is returned.
  getCompanyBalance(companyId: number): Observable<CompanyBalanceResponse> {
    return this.api.get<CompanyBalanceResponse>(
      'Salary/GetCompanyBalance',
      { companyId }
    );
  }
}
