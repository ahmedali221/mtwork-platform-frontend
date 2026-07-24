// ============================================================
// Payment & Subscription DTOs
// ============================================================

import { CompanyBalance } from './salary-withdraw-models';

// GET /Salary/GetCompanyBalance?companyId=
// Verified live response (2026-06-30): { success, data: { companyId, currentBalance, companyName } }.
// `data` is a CompanyBalance object — the numeric balance is `data.currentBalance`.
// No `currency` field is returned (do not infer one). `message` may be absent.
export interface CompanyBalanceResponse {
  success: boolean;
  message?: string;
  data: CompanyBalance | null;
}

// POST /Payment/create-checkout-session
export interface CheckoutSessionRequest {
  amount: number;
  description?: string;
  companyId: number;
  paymentType?: string;
}

export interface CheckoutSessionResponse {
  success: boolean;
  message: string;
  data: {
    url: string;
    sessionId: string;
  };
}

// GET /Payment/verify-session?sessionId=
export interface VerifySessionResponse {
  success: boolean;
  message: string;
  data: {
    status: 'paid' | 'unpaid' | 'no_payment_required';
    amountTotal: number;
    currency: string;
    paymentType: string;
  };
}

// GET /CompanySubscription/GetAmounts
export interface SubscriptionAmount {
  id: number;
  type: 'monthly' | 'yearly';
  amount: number;
  currency: string;
  description?: string;
}

export interface SubscriptionAmountsResponse {
  success: boolean;
  message: string;
  data: SubscriptionAmount[];
}

// GET /CompanySubscription/GetActive?companyId=
export interface ActiveSubscription {
  id: number;
  companyId: number;
  type: 'monthly' | 'yearly';
  status: 'active' | 'expired' | 'cancelled';
  startDate: string;
  endDate: string;
  amount: number;
}

export interface ActiveSubscriptionResponse {
  success: boolean;
  message: string;
  data: ActiveSubscription | null;
}

// POST /CompanySubscription/Create
export interface CreateSubscriptionRequest {
  companyId: number;
  type: 'monthly' | 'yearly';
}

export interface CreateSubscriptionResponse {
  success: boolean;
  message: string;
  data: ActiveSubscription;
}
