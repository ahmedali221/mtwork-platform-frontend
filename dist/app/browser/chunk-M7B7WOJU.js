import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/payment.service.ts
var _PaymentService = class _PaymentService {
  constructor() {
    this.api = inject(ApiService);
  }
  // POST /Payment/create-session
  // Verified live route (2026-06-30): GET → 405 (exists, POST-only); the old
  // 'create-checkout-session' returned 404 (PAY-07). Payload matches CreatePaymentSessionDto
  // (required: companyId, amount, paymentType) — unchanged.
  createCheckoutSession(payload) {
    return this.api.post("Payment/create-session", payload);
  }
  // GET /Payment/verify-session?sessionId=
  verifySession(sessionId) {
    return this.api.get("Payment/verify-session", {
      sessionId
    });
  }
  // GET /CompanySubscription/GetAmounts
  getSubscriptionAmounts() {
    return this.api.get("CompanySubscription/GetAmounts");
  }
  // GET /CompanySubscription/GetActive?companyId=
  getActiveSubscription(companyId) {
    return this.api.get("CompanySubscription/GetActive", { companyId });
  }
  // POST /CompanySubscription/Create
  createSubscription(payload) {
    return this.api.post("CompanySubscription/Create", payload);
  }
  // GET /Salary/GetCompanyBalance?companyId=
  // Verified live contract (2026-06-30): data is a CompanyBalance object
  // ({ companyId, currentBalance, companyName }), NOT a number. No currency field is returned.
  getCompanyBalance(companyId) {
    return this.api.get("Salary/GetCompanyBalance", { companyId });
  }
};
_PaymentService.\u0275fac = function PaymentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentService)();
};
_PaymentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
var PaymentService = _PaymentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PaymentService
};
//# sourceMappingURL=chunk-M7B7WOJU.js.map
