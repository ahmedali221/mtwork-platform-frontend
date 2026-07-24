import {
  PaymentService
} from "./chunk-M7B7WOJU.js";
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
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DecimalPipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Payments/payment-return/payment-return.ts
function PaymentReturnComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "payments.paymentReturn.verifyingAriaLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "payments.paymentReturn.verifyingTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "payments.paymentReturn.verifyingSubtitle"));
  }
}
function PaymentReturnComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.currency(), " ", \u0275\u0275pipeBind2(2, 2, ctx_r0.paidAmount(), "1.2-2"), " ");
  }
}
function PaymentReturnComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 7)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PaymentReturnComponent_Conditional_2_Conditional_7_Template, 3, 5, "p", 8);
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementStart(14, "mat-icon", 11);
    \u0275\u0275text(15, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 12);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementStart(20, "mat-icon", 11);
    \u0275\u0275text(21, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "payments.paymentReturn.successTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.paidAmount() !== null ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "payments.paymentReturn.successSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 11, "payments.paymentReturn.rechargeAgainAriaLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "payments.paymentReturn.rechargeAgain"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 15, "payments.paymentReturn.goToDashboardAriaLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "payments.paymentReturn.goToDashboard"), " ");
  }
}
function PaymentReturnComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13)(2, "mat-icon");
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "a", 10);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "mat-icon", 11);
    \u0275\u0275text(14, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 12);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "payments.paymentReturn.failedTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage() ?? \u0275\u0275pipeBind1(9, 8, "payments.paymentReturn.failedFallback"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 10, "payments.paymentReturn.tryAgainAriaLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "payments.paymentReturn.tryAgain"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 14, "payments.paymentReturn.goToDashboardAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "payments.paymentReturn.goToDashboard"), " ");
  }
}
function PaymentReturnComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13)(2, "mat-icon");
    \u0275\u0275text(3, "link_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "a", 10);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "mat-icon", 11);
    \u0275\u0275text(14, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "payments.paymentReturn.noSessionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "payments.paymentReturn.noSessionSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 8, "payments.paymentReturn.rechargeBalanceAriaLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "payments.paymentReturn.rechargeBalance"), " ");
  }
}
var _PaymentReturnComponent = class _PaymentReturnComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.paymentService = inject(PaymentService);
    this.transloco = inject(TranslocoService);
    this.state = signal("loading", ...ngDevMode ? [{ debugName: "state" }] : []);
    this.paidAmount = signal(null, ...ngDevMode ? [{ debugName: "paidAmount" }] : []);
    this.currency = signal("USD", ...ngDevMode ? [{ debugName: "currency" }] : []);
    this.errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  }
  ngOnInit() {
    const sessionId = this.route.snapshot.queryParamMap.get("sessionId") ?? this.route.snapshot.queryParamMap.get("session_id");
    if (!sessionId) {
      this.state.set("no-session");
      return;
    }
    this.verifySession(sessionId);
  }
  verifySession(sessionId) {
    this.state.set("loading");
    this.paymentService.verifySession(sessionId).subscribe({
      next: (res) => {
        if (res.success && res.data?.status === "paid") {
          this.paidAmount.set(res.data.amountTotal);
          this.currency.set(res.data.currency?.toUpperCase() ?? "USD");
          this.state.set("success");
        } else {
          this.errorMessage.set(res.message ?? this.transloco.translate("payments.paymentReturn.errors.notCompleted"));
          this.state.set("failed");
        }
      },
      error: (err) => {
        if (err?.status === 404) {
          this.errorMessage.set(err?.error?.message ?? this.transloco.translate("payments.paymentReturn.errors.sessionNotFound"));
        } else {
          this.errorMessage.set(err?.error?.message ?? this.transloco.translate("payments.paymentReturn.errors.verifyFailed"));
        }
        this.state.set("failed");
      }
    });
  }
};
_PaymentReturnComponent.\u0275fac = function PaymentReturnComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentReturnComponent)();
};
_PaymentReturnComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentReturnComponent, selectors: [["app-payment-return"]], decls: 5, vars: 4, consts: [["aria-live", "polite", "aria-atomic", "true", 1, "page-container", "return-page"], ["role", "status", 1, "card", "state-card", "state-card--loading"], ["role", "status", 1, "card", "state-card", "state-card--success"], ["role", "alert", 1, "card", "state-card", "state-card--failed"], ["diameter", "56"], [1, "state-card__title"], [1, "state-card__subtitle"], ["aria-hidden", "true", 1, "state-icon", "state-icon--success"], [1, "state-card__amount"], [1, "state-actions"], ["routerLink", "/dashboard/payments", 1, "btn", "btn--primary"], ["aria-hidden", "true"], ["routerLink", "/dashboard", 1, "btn", "btn--secondary"], ["aria-hidden", "true", 1, "state-icon", "state-icon--failed"]], template: function PaymentReturnComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275conditionalCreate(1, PaymentReturnComponent_Conditional_1_Template, 9, 9, "div", 1);
    \u0275\u0275conditionalCreate(2, PaymentReturnComponent_Conditional_2_Template, 24, 19, "div", 2);
    \u0275\u0275conditionalCreate(3, PaymentReturnComponent_Conditional_3_Template, 21, 18, "div", 3);
    \u0275\u0275conditionalCreate(4, PaymentReturnComponent_Conditional_4_Template, 17, 12, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state() === "loading" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state() === "success" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state() === "failed" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state() === "no-session" ? 4 : -1);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  DecimalPipe,
  TranslocoPipe
], styles: ["\n\n.return-page[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n}\n.state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n  padding: var(--spacing-large-huge);\n}\n.state-card--loading[_ngcontent-%COMP%] {\n  gap: var(--spacing-medium-xl);\n}\n.state-card--success[_ngcontent-%COMP%] {\n  gap: var(--spacing-medium-lg);\n  border-top: 4px solid var(--functional-success-500);\n}\n.state-card--failed[_ngcontent-%COMP%] {\n  gap: var(--spacing-medium-lg);\n  border-top: 4px solid var(--functional-danger-500);\n}\n.state-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-full);\n}\n.state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.state-icon--success[_ngcontent-%COMP%] {\n  background: var(--background-bg-light-success);\n  color: var(--functional-success-600);\n}\n.state-icon--failed[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.state-card__title[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.state-card__amount[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--functional-success-700);\n  margin: 0;\n}\n.state-card__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n  line-height: var(--line-height-7);\n}\n.state-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-medium-md);\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-block-start: var(--spacing-medium-lg);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-xl);\n  border-radius: var(--radius-8);\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-decoration: none;\n  transition: background 0.15s ease;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-800);\n}\n.btn--secondary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-200);\n}\n@media (max-width: 480px) {\n  .state-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-large-xxl);\n  }\n  .state-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=payment-return.css.map */"] });
var PaymentReturnComponent = _PaymentReturnComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentReturnComponent, [{
    type: Component,
    args: [{ selector: "app-payment-return", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<section class="page-container return-page" aria-live="polite" aria-atomic="true">

  <!-- Loading state -->
  @if (state() === 'loading') {
    <div class="card state-card state-card--loading" role="status">
      <mat-spinner diameter="56" [attr.aria-label]="'payments.paymentReturn.verifyingAriaLabel' | transloco"></mat-spinner>
      <h2 class="state-card__title">{{ 'payments.paymentReturn.verifyingTitle' | transloco }}</h2>
      <p class="state-card__subtitle">{{ 'payments.paymentReturn.verifyingSubtitle' | transloco }}</p>
    </div>
  }

  <!-- Success state -->
  @if (state() === 'success') {
    <div class="card state-card state-card--success" role="status">
      <div class="state-icon state-icon--success" aria-hidden="true">
        <mat-icon>check_circle</mat-icon>
      </div>
      <h2 class="state-card__title">{{ 'payments.paymentReturn.successTitle' | transloco }}</h2>
      @if (paidAmount() !== null) {
        <p class="state-card__amount">
          {{ currency() }} {{ paidAmount()! | number: '1.2-2' }}
        </p>
      }
      <p class="state-card__subtitle">
        {{ 'payments.paymentReturn.successSubtitle' | transloco }}
      </p>
      <div class="state-actions">
        <a
          routerLink="/dashboard/payments"
          class="btn btn--primary"
          [attr.aria-label]="'payments.paymentReturn.rechargeAgainAriaLabel' | transloco"
        >
          <mat-icon aria-hidden="true">add_circle</mat-icon>
          {{ 'payments.paymentReturn.rechargeAgain' | transloco }}
        </a>
        <a
          routerLink="/dashboard"
          class="btn btn--secondary"
          [attr.aria-label]="'payments.paymentReturn.goToDashboardAriaLabel' | transloco"
        >
          <mat-icon aria-hidden="true">dashboard</mat-icon>
          {{ 'payments.paymentReturn.goToDashboard' | transloco }}
        </a>
      </div>
    </div>
  }

  <!-- Failed state -->
  @if (state() === 'failed') {
    <div class="card state-card state-card--failed" role="alert">
      <div class="state-icon state-icon--failed" aria-hidden="true">
        <mat-icon>cancel</mat-icon>
      </div>
      <h2 class="state-card__title">{{ 'payments.paymentReturn.failedTitle' | transloco }}</h2>
      <p class="state-card__subtitle">
        {{ errorMessage() ?? ('payments.paymentReturn.failedFallback' | transloco) }}
      </p>
      <div class="state-actions">
        <a
          routerLink="/dashboard/payments"
          class="btn btn--primary"
          [attr.aria-label]="'payments.paymentReturn.tryAgainAriaLabel' | transloco"
        >
          <mat-icon aria-hidden="true">refresh</mat-icon>
          {{ 'payments.paymentReturn.tryAgain' | transloco }}
        </a>
        <a
          routerLink="/dashboard"
          class="btn btn--secondary"
          [attr.aria-label]="'payments.paymentReturn.goToDashboardAriaLabel' | transloco"
        >
          {{ 'payments.paymentReturn.goToDashboard' | transloco }}
        </a>
      </div>
    </div>
  }

  <!-- No session state -->
  @if (state() === 'no-session') {
    <div class="card state-card state-card--failed" role="alert">
      <div class="state-icon state-icon--failed" aria-hidden="true">
        <mat-icon>link_off</mat-icon>
      </div>
      <h2 class="state-card__title">{{ 'payments.paymentReturn.noSessionTitle' | transloco }}</h2>
      <p class="state-card__subtitle">
        {{ 'payments.paymentReturn.noSessionSubtitle' | transloco }}
      </p>
      <div class="state-actions">
        <a
          routerLink="/dashboard/payments"
          class="btn btn--primary"
          [attr.aria-label]="'payments.paymentReturn.rechargeBalanceAriaLabel' | transloco"
        >
          <mat-icon aria-hidden="true">account_balance_wallet</mat-icon>
          {{ 'payments.paymentReturn.rechargeBalance' | transloco }}
        </a>
      </div>
    </div>
  }

</section>
`, styles: ["/* src/components/DashboardLayout/Payments/payment-return/payment-return.css */\n.return-page {\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n}\n.state-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n  padding: var(--spacing-large-huge);\n}\n.state-card--loading {\n  gap: var(--spacing-medium-xl);\n}\n.state-card--success {\n  gap: var(--spacing-medium-lg);\n  border-top: 4px solid var(--functional-success-500);\n}\n.state-card--failed {\n  gap: var(--spacing-medium-lg);\n  border-top: 4px solid var(--functional-danger-500);\n}\n.state-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-full);\n}\n.state-icon mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n.state-icon--success {\n  background: var(--background-bg-light-success);\n  color: var(--functional-success-600);\n}\n.state-icon--failed {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.state-card__title {\n  font-size: var(--text-3xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.state-card__amount {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--functional-success-700);\n  margin: 0;\n}\n.state-card__subtitle {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n  line-height: var(--line-height-7);\n}\n.state-actions {\n  display: flex;\n  gap: var(--spacing-medium-md);\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-block-start: var(--spacing-medium-lg);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-xl);\n  border-radius: var(--radius-8);\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-decoration: none;\n  transition: background 0.15s ease;\n  cursor: pointer;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn--primary {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary:hover {\n  opacity: 0.88;\n}\n.btn--secondary {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-800);\n}\n.btn--secondary:hover {\n  background: var(--brand-neutral-200);\n}\n@media (max-width: 480px) {\n  .state-card {\n    padding: var(--spacing-large-xxl);\n  }\n  .state-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .btn {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=payment-return.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentReturnComponent, { className: "PaymentReturnComponent", filePath: "src/components/dashboardlayout/payments/payment-return/payment-return.ts", lineNumber: 27 });
})();
export {
  PaymentReturnComponent
};
//# sourceMappingURL=chunk-VXSF2GB3.js.map
