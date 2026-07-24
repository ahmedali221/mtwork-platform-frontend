import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import "./chunk-APK5HPN3.js";
import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  TitleCasePipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Injectable,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-MQLQGMUZ.js";

// src/services/subscription.service.ts
var _SubscriptionService = class _SubscriptionService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /** GET /api/CompanySubscription/GetAmounts */
  getAmounts() {
    return this.apiService.get("CompanySubscription/GetAmounts").pipe(map((res) => Array.isArray(res) ? res : res?.data ?? res?.result ?? []), catchError((err) => throwError(() => err)));
  }
  /**
   * POST /api/CompanySubscription/Create
   * Deducts from company balance and activates subscription.
   */
  create(payload) {
    return this.apiService.post("CompanySubscription/Create", payload).pipe(map((res) => res?.data ?? res), catchError((err) => throwError(() => err)));
  }
  /** GET /api/CompanySubscription/GetActive?companyId= */
  getActive(companyId) {
    return this.apiService.get("CompanySubscription/GetActive", { companyId }).pipe(map((res) => res?.data ?? res ?? null), catchError((err) => throwError(() => err)));
  }
};
_SubscriptionService.\u0275fac = function SubscriptionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionService)();
};
_SubscriptionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscriptionService, factory: _SubscriptionService.\u0275fac, providedIn: "root" });
var SubscriptionService = _SubscriptionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/components/DashboardLayout/Payments/subscription-pricing/subscription-pricing.ts
function SubscriptionPricingComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "mat-spinner", 9);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "payments.subscriptionPricing.loadingAriaLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "payments.subscriptionPricing.loading"));
  }
}
function SubscriptionPricingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.errorMessage()));
  }
}
function SubscriptionPricingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.successMessage()));
  }
}
function SubscriptionPricingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon", 10);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "payments.subscriptionPricing.activePlanLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, ctx_r0.activeType()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u2014 ", \u0275\u0275pipeBind1(10, 8, "payments.subscriptionPricing.renews"), " ", \u0275\u0275pipeBind2(11, 10, ctx_r0.activeSubscription().endDate, "mediumDate"), " ");
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "payments.subscription.currentPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "payments.subscription.currentPlan"), " ");
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "mat-icon", 26);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, feature_r3));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "payments.subscriptionPricing.processing"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 10);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "payments.subscription.active"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "payments.subscriptionPricing.subscribeMonthly"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 14);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275conditionalCreate(2, SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_2_Template, 4, 6, "div", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "mat-icon");
    \u0275\u0275text(6, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20)(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ul", 23);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275repeaterCreate(22, SubscriptionPricingComponent_Conditional_12_Conditional_1_For_23_Template, 6, 3, "li", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 25);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_12_Conditional_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subscribe("monthly"));
    });
    \u0275\u0275conditionalCreate(27, SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_27_Template, 4, 3)(28, SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_28_Template, 5, 3)(29, SubscriptionPricingComponent_Conditional_12_Conditional_1_Conditional_29_Template, 3, 3, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pricing-card--active", ctx_r0.isCurrentPlan("monthly"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 14, "payments.subscriptionPricing.monthlyPlanAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isCurrentPlan("monthly") ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "payments.subscription.monthly"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "payments.subscriptionPricing.monthlyDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 20, ctx_r0.monthlyPlan().amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, "payments.subscriptionPricing.perMonth"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 25, "payments.subscriptionPricing.monthlyPlanAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.planFeatureKeys);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("subscribe-btn--active", ctx_r0.isCurrentPlan("monthly"));
    \u0275\u0275property("disabled", ctx_r0.isCurrentPlan("monthly") || ctx_r0.submittingType() !== null);
    \u0275\u0275attribute("aria-label", ctx_r0.isCurrentPlan("monthly") ? \u0275\u0275pipeBind1(25, 27, "payments.subscriptionPricing.monthlyActiveAriaLabel") : \u0275\u0275pipeBind1(26, 29, "payments.subscriptionPricing.subscribeMonthlyAriaLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.submittingType() === "monthly" ? 27 : ctx_r0.isCurrentPlan("monthly") ? 28 : 29);
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, "payments.subscriptionPricing.save"), " ", ctx_r0.yearlyDiscount(ctx_r0.monthlyPlan().amount, ctx_r0.yearlyPlan().amount), "% ");
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "payments.subscription.currentPlan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "payments.subscription.currentPlan"), " ");
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, "payments.subscriptionPricing.equivTo"), " $", \u0275\u0275pipeBind2(3, 5, ctx_r0.yearlyPlan().amount / 12, "1.0-0"), "", \u0275\u0275pipeBind1(4, 8, "payments.subscriptionPricing.perMonth"), " ");
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "mat-icon", 26);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, feature_r5));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "payments.subscriptionPricing.processing"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 10);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "payments.subscription.active"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "payments.subscriptionPricing.subscribeYearly"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275conditionalCreate(3, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_3_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_4_Template, 4, 6, "div", 15);
    \u0275\u0275elementStart(5, "div", 16)(6, "div", 30)(7, "mat-icon");
    \u0275\u0275text(8, "date_range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h2", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "span", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 22);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_22_Template, 5, 10, "p", 31);
    \u0275\u0275elementStart(23, "ul", 23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275repeaterCreate(25, SubscriptionPricingComponent_Conditional_12_Conditional_2_For_26_Template, 6, 3, "li", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(27, "li", 32)(28, "mat-icon", 33);
    \u0275\u0275text(29, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 34);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_12_Conditional_2_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subscribe("yearly"));
    });
    \u0275\u0275conditionalCreate(36, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_36_Template, 4, 3)(37, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_37_Template, 5, 3)(38, SubscriptionPricingComponent_Conditional_12_Conditional_2_Conditional_38_Template, 3, 3, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pricing-card--active", ctx_r0.isCurrentPlan("yearly"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 17, "payments.subscriptionPricing.yearlyPlanAriaLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.monthlyPlan() && ctx_r0.yearlyPlan() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isCurrentPlan("yearly") ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "payments.subscription.yearly"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "payments.subscriptionPricing.yearlyDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 23, ctx_r0.yearlyPlan().amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "payments.subscriptionPricing.perYear"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.monthlyPlan() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 28, "payments.subscriptionPricing.yearlyPlanAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.planFeatureKeys);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 30, "payments.subscriptionPricing.twoMonthsFree"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("subscribe-btn--active", ctx_r0.isCurrentPlan("yearly"));
    \u0275\u0275property("disabled", ctx_r0.isCurrentPlan("yearly") || ctx_r0.submittingType() !== null);
    \u0275\u0275attribute("aria-label", ctx_r0.isCurrentPlan("yearly") ? \u0275\u0275pipeBind1(34, 32, "payments.subscriptionPricing.yearlyActiveAriaLabel") : \u0275\u0275pipeBind1(35, 34, "payments.subscriptionPricing.subscribeYearlyAriaLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.submittingType() === "yearly" ? 36 : ctx_r0.isCurrentPlan("yearly") ? 37 : 38);
  }
}
function SubscriptionPricingComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 10);
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "payments.subscriptionPricing.noPlans"));
  }
}
function SubscriptionPricingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, SubscriptionPricingComponent_Conditional_12_Conditional_1_Template, 30, 31, "article", 11);
    \u0275\u0275conditionalCreate(2, SubscriptionPricingComponent_Conditional_12_Conditional_2_Template, 39, 36, "article", 12);
    \u0275\u0275conditionalCreate(3, SubscriptionPricingComponent_Conditional_12_Conditional_3_Template, 6, 3, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.monthlyPlan() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.yearlyPlan() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.amounts().length === 0 ? 3 : -1);
  }
}
var _SubscriptionPricingComponent = class _SubscriptionPricingComponent {
  constructor() {
    this.subscriptionService = inject(SubscriptionService);
    this.tokenService = inject(TokenService);
    this.companyId = signal(null, ...ngDevMode ? [{ debugName: "companyId" }] : []);
    this.amounts = signal([], ...ngDevMode ? [{ debugName: "amounts" }] : []);
    this.activeSubscription = signal(null, ...ngDevMode ? [{ debugName: "activeSubscription" }] : []);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.submittingType = signal(null, ...ngDevMode ? [{ debugName: "submittingType" }] : []);
    this.successMessage = signal(null, ...ngDevMode ? [{ debugName: "successMessage" }] : []);
    this.planFeatureKeys = [
      "payments.subscription.features.contracts",
      "payments.subscription.features.hr",
      "payments.subscription.features.salary",
      "payments.subscription.features.teamProject",
      "payments.subscription.features.attendance",
      "payments.subscription.features.support"
    ];
    this.monthlyPlan = computed(() => this.amounts().find((a) => a.type === "monthly") ?? null, ...ngDevMode ? [{ debugName: "monthlyPlan" }] : []);
    this.yearlyPlan = computed(() => this.amounts().find((a) => a.type === "yearly") ?? null, ...ngDevMode ? [{ debugName: "yearlyPlan" }] : []);
    this.activeType = computed(() => this.activeSubscription()?.type ?? null, ...ngDevMode ? [{ debugName: "activeType" }] : []);
    this.isActive = computed(() => this.activeSubscription()?.status === "active", ...ngDevMode ? [{ debugName: "isActive" }] : []);
  }
  ngOnInit() {
    const id = Number(this.tokenService.getCompanyId() ?? 0) || null;
    this.companyId.set(id);
    if (!id) {
      this.errorMessage.set("payments.errors.companyNotFound");
      this.isLoading.set(false);
      return;
    }
    forkJoin({
      amounts: this.subscriptionService.getAmounts(),
      active: this.subscriptionService.getActive(id)
    }).subscribe({
      next: ({ amounts, active }) => {
        this.amounts.set(amounts);
        this.activeSubscription.set(active);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? "payments.errors.subscriptionLoad");
        this.isLoading.set(false);
      }
    });
  }
  subscribe(type) {
    const companyId = this.companyId();
    if (!companyId)
      return;
    this.submittingType.set(type);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.subscriptionService.create({ companyId, type }).subscribe({
      next: (dto) => {
        this.activeSubscription.set(dto);
        this.successMessage.set("payments.subscription.success");
        this.submittingType.set(null);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? "payments.errors.subscribe");
        this.submittingType.set(null);
      }
    });
  }
  isCurrentPlan(type) {
    return this.isActive() && this.activeType() === type;
  }
  yearlyDiscount(monthly, yearly) {
    return Math.round((monthly * 12 - yearly) / (monthly * 12) * 100);
  }
};
_SubscriptionPricingComponent.\u0275fac = function SubscriptionPricingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionPricingComponent)();
};
_SubscriptionPricingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPricingComponent, selectors: [["app-subscription-pricing"]], decls: 13, vars: 11, consts: [["aria-labelledby", "pricing-title", 1, "page-container", "pricing-page"], [1, "page-header"], ["id", "pricing-title", 1, "page-title"], [1, "page-subtitle"], ["role", "status", 1, "loading-state"], ["role", "alert", 1, "error-banner"], ["role", "status", "aria-live", "polite", 1, "success-banner"], ["role", "status", 1, "active-badge"], ["role", "list", 1, "pricing-grid"], ["diameter", "48"], ["aria-hidden", "true"], ["role", "listitem", 1, "card", "pricing-card", 3, "pricing-card--active"], ["role", "listitem", 1, "card", "pricing-card", "pricing-card--featured", 3, "pricing-card--active"], ["role", "status", 1, "empty-state"], ["role", "listitem", 1, "card", "pricing-card"], [1, "current-badge"], [1, "plan-header"], ["aria-hidden", "true", 1, "plan-icon", "plan-icon--monthly"], [1, "plan-name"], [1, "plan-description"], [1, "plan-price"], [1, "plan-price__amount"], [1, "plan-price__period"], [1, "feature-list"], [1, "feature-item"], ["type", "button", 1, "subscribe-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "feature-icon"], ["diameter", "18", "aria-hidden", "true"], ["role", "listitem", 1, "card", "pricing-card", "pricing-card--featured"], [1, "savings-badge"], ["aria-hidden", "true", 1, "plan-icon", "plan-icon--yearly"], [1, "plan-price__equiv"], [1, "feature-item", "feature-item--bonus"], ["aria-hidden", "true", 1, "feature-icon", "feature-icon--bonus"], ["type", "button", 1, "subscribe-btn", "subscribe-btn--featured", 3, "click", "disabled"]], template: function SubscriptionPricingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SubscriptionPricingComponent_Conditional_8_Template, 6, 6, "div", 4);
    \u0275\u0275conditionalCreate(9, SubscriptionPricingComponent_Conditional_9_Template, 6, 3, "div", 5);
    \u0275\u0275conditionalCreate(10, SubscriptionPricingComponent_Conditional_10_Template, 6, 3, "div", 6);
    \u0275\u0275conditionalCreate(11, SubscriptionPricingComponent_Conditional_11_Template, 12, 13, "div", 7);
    \u0275\u0275conditionalCreate(12, SubscriptionPricingComponent_Conditional_12_Template, 4, 3, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "payments.subscription.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "payments.subscriptionPricing.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading() && ctx.errorMessage() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.successMessage() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading() && ctx.isActive() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading() && !ctx.errorMessage() ? 12 : -1);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  DecimalPipe,
  TitleCasePipe,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.pricing-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-block-end: var(--spacing-large-xxl);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-small-xs) 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  color: var(--brand-neutral-600);\n}\n.error-banner[_ngcontent-%COMP%], \n.success-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  border-radius: var(--radius-8);\n  font-size: var(--text-base);\n  margin-block-end: var(--spacing-medium-xl);\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  border: var(--border-width-thin) solid var(--functional-danger-200);\n  color: var(--functional-danger-700);\n}\n.success-banner[_ngcontent-%COMP%] {\n  background: var(--background-bg-light-success);\n  border: var(--border-width-thin) solid var(--functional-success-300);\n  color: var(--functional-success-700);\n}\n.active-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--background-bg-light-success);\n  border: var(--border-width-thin) solid var(--functional-success-300);\n  border-radius: var(--radius-full);\n  font-size: var(--text-base);\n  color: var(--functional-success-800);\n  margin-block-end: var(--spacing-large-xxl);\n}\n.active-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--functional-success-600);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-large-xxl);\n  align-items: start;\n}\n@media (max-width: 640px) {\n  .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pricing-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: var(--spacing-large-xxl);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n  transition: box-shadow 0.2s ease;\n}\n.pricing-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--elevation-2);\n}\n.pricing-card--featured[_ngcontent-%COMP%] {\n  border-color: var(--brand-primary-400);\n  box-shadow: var(--elevation-2);\n}\n.pricing-card--active[_ngcontent-%COMP%] {\n  border-color: var(--functional-success-400);\n  background: var(--background-bg-light-success);\n}\n.savings-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: -14px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-500);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-bold);\n  padding: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.current-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: var(--spacing-medium-md);\n  inset-inline-end: var(--spacing-medium-md);\n  background: var(--functional-success-500);\n  color: var(--brand-neutral-500);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-bold);\n  padding: var(--spacing-small-xxxs) var(--spacing-small-xs);\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n}\n.plan-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-12);\n  margin-block-end: var(--spacing-small-xs);\n}\n.plan-icon--monthly[_ngcontent-%COMP%] {\n  background: var(--background-bg-light-secondary);\n  color: var(--brand-secondary-700);\n}\n.plan-icon--yearly[_ngcontent-%COMP%] {\n  background: var(--background-bg-light-primary);\n  color: var(--brand-primary-700);\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.plan-description[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing-small-xxxs);\n}\n.plan-price__amount[_ngcontent-%COMP%] {\n  font-size: var(--text-6xl);\n  font-weight: var(--h1-font-weight-bold);\n  color: var(--brand-neutral-900);\n  line-height: 1;\n}\n.plan-price__period[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-500);\n}\n.plan-price__equiv[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--brand-neutral-600);\n  margin: 0;\n  margin-block-start: calc(-1 * var(--spacing-medium-md));\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-md);\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-base);\n  color: var(--brand-neutral-700);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--functional-success-600);\n  flex-shrink: 0;\n}\n.feature-item--bonus[_ngcontent-%COMP%] {\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--brand-primary-700);\n}\n.feature-icon--bonus[_ngcontent-%COMP%] {\n  color: var(--brand-accent-600);\n}\n.subscribe-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xs);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-medium-xl);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s ease;\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-800);\n  margin-block-start: auto;\n}\n.subscribe-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-neutral-200);\n}\n.subscribe-btn--featured[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-500);\n}\n.subscribe-btn--featured[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n}\n.subscribe-btn--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n  color: var(--brand-neutral-500);\n  cursor: default;\n}\n.subscribe-btn[_ngcontent-%COMP%]:disabled:not(.subscribe-btn--active) {\n  background: var(--brand-neutral-200);\n  color: var(--brand-neutral-500);\n  cursor: not-allowed;\n}\n.subscribe-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  color: var(--brand-neutral-600);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--brand-neutral-400);\n}\n@media (max-width: 480px) {\n  .pricing-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-medium-xl);\n  }\n}\n/*# sourceMappingURL=subscription-pricing.css.map */"] });
var SubscriptionPricingComponent = _SubscriptionPricingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionPricingComponent, [{
    type: Component,
    args: [{ selector: "app-subscription-pricing", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<section class="page-container pricing-page" aria-labelledby="pricing-title">

  <!-- Header -->
  <div class="page-header">
    <h1 id="pricing-title" class="page-title">{{ 'payments.subscription.title' | transloco }}</h1>
    <p class="page-subtitle">{{ 'payments.subscriptionPricing.subtitle' | transloco }}</p>
  </div>

  <!-- Loading -->
  @if (isLoading()) {
    <div class="loading-state" role="status" [attr.aria-label]="'payments.subscriptionPricing.loadingAriaLabel' | transloco">
      <mat-spinner diameter="48"></mat-spinner>
      <p>{{ 'payments.subscriptionPricing.loading' | transloco }}</p>
    </div>
  }

  <!-- Error -->
  @if (!isLoading() && errorMessage()) {
    <div class="error-banner" role="alert">
      <mat-icon aria-hidden="true">error_outline</mat-icon>
      <span>{{ errorMessage() | transloco }}</span>
    </div>
  }

  <!-- Success -->
  @if (successMessage()) {
    <div class="success-banner" role="status" aria-live="polite">
      <mat-icon aria-hidden="true">check_circle</mat-icon>
      <span>{{ successMessage() | transloco }}</span>
    </div>
  }

  <!-- Active subscription badge -->
  @if (!isLoading() && isActive()) {
    <div class="active-badge" role="status">
      <mat-icon aria-hidden="true">verified</mat-icon>
      <span>
        {{ 'payments.subscriptionPricing.activePlanLabel' | transloco }}
        <strong>{{ activeType() | titlecase }}</strong>
        &mdash; {{ 'payments.subscriptionPricing.renews' | transloco }} {{ activeSubscription()!.endDate | date: 'mediumDate' }}
      </span>
    </div>
  }

  <!-- Pricing cards -->
  @if (!isLoading() && !errorMessage()) {
    <div class="pricing-grid" role="list">

      <!-- Monthly -->
      @if (monthlyPlan()) {
        <article
          class="card pricing-card"
          [class.pricing-card--active]="isCurrentPlan('monthly')"
          role="listitem"
          [attr.aria-label]="'payments.subscriptionPricing.monthlyPlanAriaLabel' | transloco"
        >
          @if (isCurrentPlan('monthly')) {
            <div class="current-badge" [attr.aria-label]="'payments.subscription.currentPlan' | transloco">
              {{ 'payments.subscription.currentPlan' | transloco }}
            </div>
          }

          <div class="plan-header">
            <div class="plan-icon plan-icon--monthly" aria-hidden="true">
              <mat-icon>calendar_today</mat-icon>
            </div>
            <h2 class="plan-name">{{ 'payments.subscription.monthly' | transloco }}</h2>
            <p class="plan-description">{{ 'payments.subscriptionPricing.monthlyDescription' | transloco }}</p>
          </div>

          <div class="plan-price">
            <span class="plan-price__amount">\${{ monthlyPlan()!.amount | number: '1.0-0' }}</span>
            <span class="plan-price__period">{{ 'payments.subscriptionPricing.perMonth' | transloco }}</span>
          </div>

          <ul class="feature-list" [attr.aria-label]="'payments.subscriptionPricing.monthlyPlanAriaLabel' | transloco">
            @for (feature of planFeatureKeys; track feature) {
              <li class="feature-item">
                <mat-icon class="feature-icon" aria-hidden="true">check</mat-icon>
                <span>{{ feature | transloco }}</span>
              </li>
            }
          </ul>

          <button
            class="subscribe-btn"
            [class.subscribe-btn--active]="isCurrentPlan('monthly')"
            [disabled]="isCurrentPlan('monthly') || submittingType() !== null"
            (click)="subscribe('monthly')"
            [attr.aria-label]="isCurrentPlan('monthly') ? ('payments.subscriptionPricing.monthlyActiveAriaLabel' | transloco) : ('payments.subscriptionPricing.subscribeMonthlyAriaLabel' | transloco)"
            type="button"
          >
            @if (submittingType() === 'monthly') {
              <mat-spinner diameter="18" aria-hidden="true"></mat-spinner>
              <span>{{ 'payments.subscriptionPricing.processing' | transloco }}</span>
            } @else if (isCurrentPlan('monthly')) {
              <mat-icon aria-hidden="true">check_circle</mat-icon>
              <span>{{ 'payments.subscription.active' | transloco }}</span>
            } @else {
              <span>{{ 'payments.subscriptionPricing.subscribeMonthly' | transloco }}</span>
            }
          </button>
        </article>
      }

      <!-- Yearly -->
      @if (yearlyPlan()) {
        <article
          class="card pricing-card pricing-card--featured"
          [class.pricing-card--active]="isCurrentPlan('yearly')"
          role="listitem"
          [attr.aria-label]="'payments.subscriptionPricing.yearlyPlanAriaLabel' | transloco"
        >
          <div class="savings-badge">
            @if (monthlyPlan() && yearlyPlan()) {
              {{ 'payments.subscriptionPricing.save' | transloco }} {{ yearlyDiscount(monthlyPlan()!.amount, yearlyPlan()!.amount) }}%
            }
          </div>

          @if (isCurrentPlan('yearly')) {
            <div class="current-badge" [attr.aria-label]="'payments.subscription.currentPlan' | transloco">
              {{ 'payments.subscription.currentPlan' | transloco }}
            </div>
          }

          <div class="plan-header">
            <div class="plan-icon plan-icon--yearly" aria-hidden="true">
              <mat-icon>date_range</mat-icon>
            </div>
            <h2 class="plan-name">{{ 'payments.subscription.yearly' | transloco }}</h2>
            <p class="plan-description">{{ 'payments.subscriptionPricing.yearlyDescription' | transloco }}</p>
          </div>

          <div class="plan-price">
            <span class="plan-price__amount">\${{ yearlyPlan()!.amount | number: '1.0-0' }}</span>
            <span class="plan-price__period">{{ 'payments.subscriptionPricing.perYear' | transloco }}</span>
          </div>

          @if (monthlyPlan()) {
            <p class="plan-price__equiv">
              {{ 'payments.subscriptionPricing.equivTo' | transloco }} \${{ (yearlyPlan()!.amount / 12) | number: '1.0-0' }}{{ 'payments.subscriptionPricing.perMonth' | transloco }}
            </p>
          }

          <ul class="feature-list" [attr.aria-label]="'payments.subscriptionPricing.yearlyPlanAriaLabel' | transloco">
            @for (feature of planFeatureKeys; track feature) {
              <li class="feature-item">
                <mat-icon class="feature-icon" aria-hidden="true">check</mat-icon>
                <span>{{ feature | transloco }}</span>
              </li>
            }
            <li class="feature-item feature-item--bonus">
              <mat-icon class="feature-icon feature-icon--bonus" aria-hidden="true">star</mat-icon>
              <span>{{ 'payments.subscriptionPricing.twoMonthsFree' | transloco }}</span>
            </li>
          </ul>

          <button
            class="subscribe-btn subscribe-btn--featured"
            [class.subscribe-btn--active]="isCurrentPlan('yearly')"
            [disabled]="isCurrentPlan('yearly') || submittingType() !== null"
            (click)="subscribe('yearly')"
            [attr.aria-label]="isCurrentPlan('yearly') ? ('payments.subscriptionPricing.yearlyActiveAriaLabel' | transloco) : ('payments.subscriptionPricing.subscribeYearlyAriaLabel' | transloco)"
            type="button"
          >
            @if (submittingType() === 'yearly') {
              <mat-spinner diameter="18" aria-hidden="true"></mat-spinner>
              <span>{{ 'payments.subscriptionPricing.processing' | transloco }}</span>
            } @else if (isCurrentPlan('yearly')) {
              <mat-icon aria-hidden="true">check_circle</mat-icon>
              <span>{{ 'payments.subscription.active' | transloco }}</span>
            } @else {
              <span>{{ 'payments.subscriptionPricing.subscribeYearly' | transloco }}</span>
            }
          </button>
        </article>
      }

      <!-- Empty state -->
      @if (amounts().length === 0) {
        <div class="empty-state" role="status">
          <mat-icon aria-hidden="true">info_outline</mat-icon>
          <p>{{ 'payments.subscriptionPricing.noPlans' | transloco }}</p>
        </div>
      }

    </div>
  }

</section>
`, styles: ["/* src/components/DashboardLayout/Payments/subscription-pricing/subscription-pricing.css */\n.pricing-page {\n  max-width: 900px;\n}\n.page-header {\n  margin-block-end: var(--spacing-large-xxl);\n}\n.page-title {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-small-xs) 0;\n}\n.page-subtitle {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  color: var(--brand-neutral-600);\n}\n.error-banner,\n.success-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  border-radius: var(--radius-8);\n  font-size: var(--text-base);\n  margin-block-end: var(--spacing-medium-xl);\n}\n.error-banner {\n  background: var(--functional-danger-50);\n  border: var(--border-width-thin) solid var(--functional-danger-200);\n  color: var(--functional-danger-700);\n}\n.success-banner {\n  background: var(--background-bg-light-success);\n  border: var(--border-width-thin) solid var(--functional-success-300);\n  color: var(--functional-success-700);\n}\n.active-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--background-bg-light-success);\n  border: var(--border-width-thin) solid var(--functional-success-300);\n  border-radius: var(--radius-full);\n  font-size: var(--text-base);\n  color: var(--functional-success-800);\n  margin-block-end: var(--spacing-large-xxl);\n}\n.active-badge mat-icon {\n  color: var(--functional-success-600);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pricing-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-large-xxl);\n  align-items: start;\n}\n@media (max-width: 640px) {\n  .pricing-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pricing-card {\n  position: relative;\n  padding: var(--spacing-large-xxl);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n  transition: box-shadow 0.2s ease;\n}\n.pricing-card:hover {\n  box-shadow: var(--elevation-2);\n}\n.pricing-card--featured {\n  border-color: var(--brand-primary-400);\n  box-shadow: var(--elevation-2);\n}\n.pricing-card--active {\n  border-color: var(--functional-success-400);\n  background: var(--background-bg-light-success);\n}\n.savings-badge {\n  position: absolute;\n  inset-block-start: -14px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-500);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-bold);\n  padding: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.current-badge {\n  position: absolute;\n  inset-block-start: var(--spacing-medium-md);\n  inset-inline-end: var(--spacing-medium-md);\n  background: var(--functional-success-500);\n  color: var(--brand-neutral-500);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-bold);\n  padding: var(--spacing-small-xxxs) var(--spacing-small-xs);\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.plan-header {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n}\n.plan-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-12);\n  margin-block-end: var(--spacing-small-xs);\n}\n.plan-icon--monthly {\n  background: var(--background-bg-light-secondary);\n  color: var(--brand-secondary-700);\n}\n.plan-icon--yearly {\n  background: var(--background-bg-light-primary);\n  color: var(--brand-primary-700);\n}\n.plan-name {\n  font-size: var(--text-3xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.plan-description {\n  font-size: var(--text-base);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.plan-price {\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing-small-xxxs);\n}\n.plan-price__amount {\n  font-size: var(--text-6xl);\n  font-weight: var(--h1-font-weight-bold);\n  color: var(--brand-neutral-900);\n  line-height: 1;\n}\n.plan-price__period {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-500);\n}\n.plan-price__equiv {\n  font-size: var(--text-sm);\n  color: var(--brand-neutral-600);\n  margin: 0;\n  margin-block-start: calc(-1 * var(--spacing-medium-md));\n}\n.feature-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-md);\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-base);\n  color: var(--brand-neutral-700);\n}\n.feature-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--functional-success-600);\n  flex-shrink: 0;\n}\n.feature-item--bonus {\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--brand-primary-700);\n}\n.feature-icon--bonus {\n  color: var(--brand-accent-600);\n}\n.subscribe-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xs);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-medium-xl);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s ease;\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-800);\n  margin-block-start: auto;\n}\n.subscribe-btn:hover:not(:disabled) {\n  background: var(--brand-neutral-200);\n}\n.subscribe-btn--featured {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-500);\n}\n.subscribe-btn--featured:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n}\n.subscribe-btn--active {\n  background: var(--functional-success-500);\n  color: var(--brand-neutral-500);\n  cursor: default;\n}\n.subscribe-btn:disabled:not(.subscribe-btn--active) {\n  background: var(--brand-neutral-200);\n  color: var(--brand-neutral-500);\n  cursor: not-allowed;\n}\n.subscribe-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.empty-state {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  color: var(--brand-neutral-600);\n  text-align: center;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--brand-neutral-400);\n}\n@media (max-width: 480px) {\n  .pricing-card {\n    padding: var(--spacing-medium-xl);\n  }\n}\n/*# sourceMappingURL=subscription-pricing.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPricingComponent, { className: "SubscriptionPricingComponent", filePath: "src/components/dashboardlayout/payments/subscription-pricing/subscription-pricing.ts", lineNumber: 31 });
})();
export {
  SubscriptionPricingComponent
};
//# sourceMappingURL=chunk-SDYNHHDY.js.map
