/**
 * SubscriptionService — wraps /api/CompanySubscription endpoints.
 *
 * DTOs aligned with API doc §1.8 and §1.17:
 *   POST /CompanySubscription/Create  →  { companyId, type: 'monthly'|'yearly' }
 *   GET  /CompanySubscription/GetAmounts
 *   GET  /CompanySubscription/GetActive?companyId=
 *
 * NOTE: payment.service.ts previously duplicated these methods.
 * This service is the single source of truth for subscription API calls.
 */
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

export type SubscriptionType   = 'monthly' | 'yearly';
export type SubscriptionStatus = 'active'  | 'expired' | 'cancelled';

/** GET /CompanySubscription/GetAmounts — one item per plan */
export interface SubscriptionAmountDto {
  id:           number;
  type:         SubscriptionType;
  amount:       number;
  currency:     string;
  description?: string;
}

/**
 * POST /CompanySubscription/Create
 * API doc §1.8: body is { companyId, type } — NOT subscriptionAmountId.
 */
export interface CreateSubscriptionRequest {
  companyId: number;
  type:      SubscriptionType;
}

/** GET /CompanySubscription/GetActive?companyId= */
export interface ActiveSubscriptionDto {
  id:        number;
  companyId: number;
  type:      SubscriptionType;
  status:    SubscriptionStatus;
  startDate: string;
  endDate:   string;
  amount:    number;
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private readonly apiService = inject(ApiService);

  /** GET /api/CompanySubscription/GetAmounts */
  getAmounts(): Observable<SubscriptionAmountDto[]> {
    return this.apiService.get<any>('CompanySubscription/GetAmounts').pipe(
      map(res => Array.isArray(res) ? res : (res?.data ?? res?.result ?? [])),
      catchError(err => throwError(() => err))
    );
  }

  /**
   * POST /api/CompanySubscription/Create
   * Deducts from company balance and activates subscription.
   */
  create(payload: CreateSubscriptionRequest): Observable<ActiveSubscriptionDto> {
    return this.apiService.post<CreateSubscriptionRequest, any>('CompanySubscription/Create', payload).pipe(
      map(res => res?.data ?? res),
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/CompanySubscription/GetActive?companyId= */
  getActive(companyId: number): Observable<ActiveSubscriptionDto | null> {
    return this.apiService.get<any>('CompanySubscription/GetActive', { companyId }).pipe(
      map(res => res?.data ?? res ?? null),
      catchError(err => throwError(() => err))
    );
  }
}
