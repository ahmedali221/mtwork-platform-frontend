import {
  PaymentService
} from "./chunk-M7B7WOJU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  FormsModule
} from "./chunk-RILOBYFO.js";
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
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Payments/balance-recharge/balance-recharge.ts
function BalanceRechargeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "payments.balanceRecharge.loading"));
  }
}
function BalanceRechargeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.balanceError());
  }
}
function BalanceRechargeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BalanceRechargeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, ctx_r0.currentBalance(), "1.2-2"));
  }
}
function BalanceRechargeComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BalanceRechargeComponent_For_28_Template_button_click_0_listener() {
      const preset_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectPreset(preset_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("preset-btn--active", ctx_r0.amount() === preset_r3);
    \u0275\u0275attribute("aria-pressed", ctx_r0.amount() === preset_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", preset_r3, " ");
  }
}
function BalanceRechargeComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 7);
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
function BalanceRechargeComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "payments.balanceRecharge.chargedLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 4, ctx_r0.amount(), "1.2-2"));
  }
}
function BalanceRechargeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 29);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "payments.balanceRecharge.redirecting"));
  }
}
function BalanceRechargeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 7);
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "payments.balanceRecharge.paySecurely"));
  }
}
var _BalanceRechargeComponent = class _BalanceRechargeComponent {
  constructor() {
    this.paymentService = inject(PaymentService);
    this.tokenService = inject(TokenService);
    this.transloco = inject(TranslocoService);
    this.companyId = signal(null, ...ngDevMode ? [{ debugName: "companyId" }] : []);
    this.currentBalance = signal(null, ...ngDevMode ? [{ debugName: "currentBalance" }] : []);
    this.amount = signal(0, ...ngDevMode ? [{ debugName: "amount" }] : []);
    this.isLoadingBalance = signal(false, ...ngDevMode ? [{ debugName: "isLoadingBalance" }] : []);
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.balanceError = signal(null, ...ngDevMode ? [{ debugName: "balanceError" }] : []);
    this.presetAmounts = [50, 100, 250, 500, 1e3];
  }
  ngOnInit() {
    const rawId = this.tokenService.getCompanyId();
    const id = rawId !== null ? Number(rawId) : null;
    this.companyId.set(id);
    if (id) {
      this.loadBalance(id);
    }
  }
  loadBalance(companyId) {
    this.isLoadingBalance.set(true);
    this.balanceError.set(null);
    this.paymentService.getCompanyBalance(companyId).subscribe({
      next: (res) => {
        this.currentBalance.set(res.data?.currentBalance ?? null);
        this.isLoadingBalance.set(false);
      },
      error: (err) => {
        this.balanceError.set(err?.error?.message ?? this.transloco.translate("payments.balanceRecharge.errors.loadBalance"));
        this.isLoadingBalance.set(false);
      }
    });
  }
  selectPreset(value) {
    this.amount.set(value);
    this.errorMessage.set(null);
  }
  onAmountInput(event) {
    const input = event.target;
    this.amount.set(Number(input.value));
    this.errorMessage.set(null);
  }
  get isValidAmount() {
    return this.amount() > 0;
  }
  submit() {
    if (!this.isValidAmount) {
      this.errorMessage.set("payments.errors.invalidAmount");
      return;
    }
    const companyId = this.companyId();
    if (!companyId) {
      this.errorMessage.set("payments.errors.companyNotFound");
      return;
    }
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    this.paymentService.createCheckoutSession({ amount: this.amount(), companyId, description: this.transloco.translate("payments.balanceRecharge.title"), paymentType: "balance_recharge" }).subscribe({
      next: (res) => {
        if (res.success && res.data?.url) {
          window.location.href = res.data.url;
        } else {
          this.errorMessage.set(res.message ?? this.transloco.translate("payments.balanceRecharge.errors.noSession"));
          this.isSubmitting.set(false);
        }
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? this.transloco.translate("payments.balanceRecharge.errors.sessionFailed"));
        this.isSubmitting.set(false);
      }
    });
  }
};
_BalanceRechargeComponent.\u0275fac = function BalanceRechargeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BalanceRechargeComponent)();
};
_BalanceRechargeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BalanceRechargeComponent, selectors: [["app-balance-recharge"]], decls: 49, vars: 33, consts: [["aria-labelledby", "recharge-title", 1, "page-container", "recharge-page"], [1, "page-header"], ["id", "recharge-title", 1, "page-title"], [1, "page-subtitle"], [1, "recharge-layout"], ["role", "status", "aria-live", "polite", 1, "card", "balance-card"], [1, "balance-card__icon"], ["aria-hidden", "true"], [1, "balance-card__info"], [1, "balance-card__label"], [1, "balance-card__value", "skeleton"], [1, "balance-card__error"], [1, "balance-card__value"], [1, "card", "recharge-card"], [1, "recharge-card__title"], ["role", "group", 1, "preset-grid"], ["type", "button", 1, "preset-btn", 3, "preset-btn--active"], [1, "amount-field"], ["for", "custom-amount", 1, "amount-field__label"], [1, "amount-field__wrapper"], ["aria-hidden", "true", 1, "amount-field__currency"], ["id", "custom-amount", "type", "number", "min", "1", "step", "1", "placeholder", "0.00", 1, "amount-field__input", 3, "input", "value"], ["role", "alert", "aria-live", "assertive", 1, "error-banner"], [1, "summary-row"], ["type", "button", 1, "recharge-btn", 3, "click", "disabled"], [1, "security-note"], ["type", "button", 1, "preset-btn", 3, "click"], [1, "summary-row__label"], [1, "summary-row__value"], ["diameter", "20", "aria-hidden", "true"]], template: function BalanceRechargeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "mat-icon", 7);
    \u0275\u0275text(12, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, BalanceRechargeComponent_Conditional_17_Template, 3, 3, "span", 10)(18, BalanceRechargeComponent_Conditional_18_Template, 2, 1, "span", 11)(19, BalanceRechargeComponent_Conditional_19_Template, 2, 0, "span", 12)(20, BalanceRechargeComponent_Conditional_20_Template, 3, 4, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "h2", 14);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275repeaterCreate(27, BalanceRechargeComponent_For_28_Template, 2, 4, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "label", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19)(34, "span", 20);
    \u0275\u0275text(35, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 21);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275listener("input", function BalanceRechargeComponent_Template_input_input_36_listener($event) {
      return ctx.onAmountInput($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(38, BalanceRechargeComponent_Conditional_38_Template, 6, 3, "div", 22);
    \u0275\u0275conditionalCreate(39, BalanceRechargeComponent_Conditional_39_Template, 7, 7, "div", 23);
    \u0275\u0275elementStart(40, "button", 24);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275listener("click", function BalanceRechargeComponent_Template_button_click_40_listener() {
      return ctx.submit();
    });
    \u0275\u0275conditionalCreate(42, BalanceRechargeComponent_Conditional_42_Template, 4, 3)(43, BalanceRechargeComponent_Conditional_43_Template, 5, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 25)(45, "mat-icon", 7);
    \u0275\u0275text(46, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "payments.balanceRecharge.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 17, "payments.balanceRecharge.subtitle"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "payments.balanceRecharge.currentBalance"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoadingBalance() ? 17 : ctx.balanceError() ? 18 : ctx.currentBalance() === null ? 19 : 20);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "payments.balanceRecharge.chooseAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 23, "payments.balanceRecharge.presetLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.presetAmounts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 25, "payments.balanceRecharge.customLabel"));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.amount() || "");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(37, 27, "payments.balanceRecharge.customAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isValidAmount ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.isValidAmount || ctx.isSubmitting());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(41, 29, "payments.balanceRecharge.submitAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isSubmitting() ? 42 : 43);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 31, "payments.balanceRecharge.securityNote"), " ");
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  RouterModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  DecimalPipe,
  TranslocoPipe
], styles: ["\n\n.recharge-page[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-block-end: var(--spacing-large-xxl);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-small-xs) 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.recharge-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-large-xxl);\n}\n.balance-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-medium-xl);\n  background: var(--brand-primary-50);\n  border-color: var(--brand-primary-200);\n}\n.balance-card__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: var(--brand-primary-500);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-500);\n  flex-shrink: 0;\n}\n.balance-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.balance-card__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--brand-primary-800);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.balance-card__value[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-700);\n}\n.balance-card__value.skeleton[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-size: var(--text-lg);\n}\n.balance-card__error[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  color: var(--functional-danger-600);\n}\n.recharge-card[_ngcontent-%COMP%] {\n  padding: var(--spacing-large-xxl);\n}\n.recharge-card__title[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-semi-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-medium-xl) 0;\n}\n.preset-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: var(--spacing-medium-md);\n  margin-block-end: var(--spacing-medium-xl);\n}\n@media (max-width: 600px) {\n  .preset-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.preset-btn[_ngcontent-%COMP%] {\n  padding: var(--spacing-medium-md) var(--spacing-small-xs);\n  border: var(--border-width-thin) solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-neutral-800);\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-medium);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.preset-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-primary-400);\n  color: var(--brand-primary-600);\n  background: var(--background-bg-light-primary);\n}\n.preset-btn--active[_ngcontent-%COMP%] {\n  border-color: var(--brand-primary-500);\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n}\n.preset-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.amount-field[_ngcontent-%COMP%] {\n  margin-block-end: var(--spacing-medium-xl);\n}\n.amount-field__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-medium);\n  color: var(--brand-neutral-700);\n  margin-block-end: var(--spacing-small-xs);\n}\n.amount-field__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: var(--border-width-thin) solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  overflow: hidden;\n  background: var(--ui-bg-surface);\n}\n.amount-field__wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--brand-primary-500);\n  box-shadow: var(--primary-dropshadow);\n}\n.amount-field__currency[_ngcontent-%COMP%] {\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  border-inline-end: var(--border-width-thin) solid var(--brand-neutral-200);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.amount-field__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-900);\n  background: transparent;\n  min-width: 0;\n}\n.amount-field__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--functional-danger-50);\n  border: var(--border-width-thin) solid var(--functional-danger-200);\n  border-radius: var(--radius-8);\n  color: var(--functional-danger-700);\n  font-size: var(--text-base);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--background-bg-light-neutral);\n  border-radius: var(--radius-8);\n  margin-block-end: var(--spacing-medium-xl);\n}\n.summary-row__label[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  color: var(--brand-neutral-600);\n}\n.summary-row__value[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: var(--body-font-weight-bold);\n  color: var(--brand-primary-700);\n}\n.recharge-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xs);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-medium-xl);\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s ease;\n  margin-block-end: var(--spacing-medium-lg);\n}\n.recharge-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n}\n.recharge-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--ui-border-secondary);\n  color: var(--ui-text-muted);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.recharge-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.security-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.security-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--functional-success-600);\n}\n@media (max-width: 480px) {\n  .recharge-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-medium-xl);\n  }\n}\n/*# sourceMappingURL=balance-recharge.css.map */"] });
var BalanceRechargeComponent = _BalanceRechargeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BalanceRechargeComponent, [{
    type: Component,
    args: [{ selector: "app-balance-recharge", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<section class="page-container recharge-page" aria-labelledby="recharge-title">

  <!-- Page header -->
  <div class="page-header">
    <h1 id="recharge-title" class="page-title">{{ 'payments.balanceRecharge.title' | transloco }}</h1>
    <p class="page-subtitle">{{ 'payments.balanceRecharge.subtitle' | transloco }}</p>
  </div>

  <div class="recharge-layout">

    <!-- Current balance card -->
    <div class="card balance-card" role="status" aria-live="polite">
      <div class="balance-card__icon">
        <mat-icon aria-hidden="true">account_balance_wallet</mat-icon>
      </div>
      <div class="balance-card__info">
        <span class="balance-card__label">{{ 'payments.balanceRecharge.currentBalance' | transloco }}</span>

        @if (isLoadingBalance()) {
          <span class="balance-card__value skeleton">{{ 'payments.balanceRecharge.loading' | transloco }}</span>
        } @else if (balanceError()) {
          <span class="balance-card__error">{{ balanceError() }}</span>
        } @else if (currentBalance() === null) {
          <span class="balance-card__value">\u2014</span>
        } @else {
          <span class="balance-card__value">\${{ currentBalance() | number: '1.2-2' }}</span>
        }
      </div>
    </div>

    <!-- Recharge form -->
    <div class="card recharge-card">
      <h2 class="recharge-card__title">{{ 'payments.balanceRecharge.chooseAmount' | transloco }}</h2>

      <!-- Preset amounts -->
      <div class="preset-grid" role="group" [attr.aria-label]="'payments.balanceRecharge.presetLabel' | transloco">
        @for (preset of presetAmounts; track preset) {
          <button
            class="preset-btn"
            [class.preset-btn--active]="amount() === preset"
            (click)="selectPreset(preset)"
            [attr.aria-pressed]="amount() === preset"
            type="button"
          >
            \${{ preset }}
          </button>
        }
      </div>

      <!-- Custom amount input -->
      <div class="amount-field">
        <label for="custom-amount" class="amount-field__label">{{ 'payments.balanceRecharge.customLabel' | transloco }}</label>
        <div class="amount-field__wrapper">
          <span class="amount-field__currency" aria-hidden="true">$</span>
          <input
            id="custom-amount"
            type="number"
            class="amount-field__input"
            [value]="amount() || ''"
            (input)="onAmountInput($event)"
            min="1"
            step="1"
            placeholder="0.00"
            [attr.aria-label]="'payments.balanceRecharge.customAriaLabel' | transloco"
          />
        </div>
      </div>

      <!-- Error message -->
      @if (errorMessage()) {
        <div class="error-banner" role="alert" aria-live="assertive">
          <mat-icon aria-hidden="true">error_outline</mat-icon>
          <span>{{ errorMessage() | transloco }}</span>
        </div>
      }

      <!-- Summary -->
      @if (isValidAmount) {
        <div class="summary-row">
          <span class="summary-row__label">{{ 'payments.balanceRecharge.chargedLabel' | transloco }}</span>
          <span class="summary-row__value">\${{ amount() | number: '1.2-2' }}</span>
        </div>
      }

      <!-- Submit -->
      <button
        class="recharge-btn"
        type="button"
        (click)="submit()"
        [disabled]="!isValidAmount || isSubmitting()"
        [attr.aria-label]="'payments.balanceRecharge.submitAriaLabel' | transloco"
      >
        @if (isSubmitting()) {
          <mat-spinner diameter="20" aria-hidden="true"></mat-spinner>
          <span>{{ 'payments.balanceRecharge.redirecting' | transloco }}</span>
        } @else {
          <mat-icon aria-hidden="true">lock</mat-icon>
          <span>{{ 'payments.balanceRecharge.paySecurely' | transloco }}</span>
        }
      </button>

      <p class="security-note">
        <mat-icon aria-hidden="true">shield</mat-icon>
        {{ 'payments.balanceRecharge.securityNote' | transloco }}
      </p>
    </div>

  </div>
</section>
`, styles: ["/* src/components/DashboardLayout/Payments/balance-recharge/balance-recharge.css */\n.recharge-page {\n  max-width: 720px;\n}\n.page-header {\n  margin-block-end: var(--spacing-large-xxl);\n}\n.page-title {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-small-xs) 0;\n}\n.page-subtitle {\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-600);\n  margin: 0;\n}\n.recharge-layout {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-large-xxl);\n}\n.balance-card {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-medium-xl);\n  background: var(--brand-primary-50);\n  border-color: var(--brand-primary-200);\n}\n.balance-card__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: var(--brand-primary-500);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-500);\n  flex-shrink: 0;\n}\n.balance-card__info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.balance-card__label {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--brand-primary-800);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.balance-card__value {\n  font-size: var(--text-4xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-700);\n}\n.balance-card__value.skeleton {\n  color: var(--brand-neutral-400);\n  font-size: var(--text-lg);\n}\n.balance-card__error {\n  font-size: var(--text-base);\n  color: var(--functional-danger-600);\n}\n.recharge-card {\n  padding: var(--spacing-large-xxl);\n}\n.recharge-card__title {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-semi-bold);\n  color: var(--brand-neutral-900);\n  margin: 0 0 var(--spacing-medium-xl) 0;\n}\n.preset-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: var(--spacing-medium-md);\n  margin-block-end: var(--spacing-medium-xl);\n}\n@media (max-width: 600px) {\n  .preset-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.preset-btn {\n  padding: var(--spacing-medium-md) var(--spacing-small-xs);\n  border: var(--border-width-thin) solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-neutral-800);\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-medium);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.preset-btn:hover {\n  border-color: var(--brand-primary-400);\n  color: var(--brand-primary-600);\n  background: var(--background-bg-light-primary);\n}\n.preset-btn--active {\n  border-color: var(--brand-primary-500);\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n}\n.preset-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.amount-field {\n  margin-block-end: var(--spacing-medium-xl);\n}\n.amount-field__label {\n  display: block;\n  font-size: var(--text-base);\n  font-weight: var(--body-font-weight-medium);\n  color: var(--brand-neutral-700);\n  margin-block-end: var(--spacing-small-xs);\n}\n.amount-field__wrapper {\n  display: flex;\n  align-items: center;\n  border: var(--border-width-thin) solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  overflow: hidden;\n  background: var(--ui-bg-surface);\n}\n.amount-field__wrapper:focus-within {\n  border-color: var(--brand-primary-500);\n  box-shadow: var(--primary-dropshadow);\n}\n.amount-field__currency {\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  border-inline-end: var(--border-width-thin) solid var(--brand-neutral-200);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.amount-field__input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  font-size: var(--text-lg);\n  color: var(--brand-neutral-900);\n  background: transparent;\n  min-width: 0;\n}\n.amount-field__input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--functional-danger-50);\n  border: var(--border-width-thin) solid var(--functional-danger-200);\n  border-radius: var(--radius-8);\n  color: var(--functional-danger-700);\n  font-size: var(--text-base);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-medium-md) var(--spacing-medium-lg);\n  background: var(--background-bg-light-neutral);\n  border-radius: var(--radius-8);\n  margin-block-end: var(--spacing-medium-xl);\n}\n.summary-row__label {\n  font-size: var(--text-base);\n  color: var(--brand-neutral-600);\n}\n.summary-row__value {\n  font-size: var(--text-2xl);\n  font-weight: var(--body-font-weight-bold);\n  color: var(--brand-primary-700);\n}\n.recharge-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xs);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-medium-xl);\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--text-lg);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s ease;\n  margin-block-end: var(--spacing-medium-lg);\n}\n.recharge-btn:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n}\n.recharge-btn:disabled {\n  background: var(--ui-border-secondary);\n  color: var(--ui-text-muted);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.recharge-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.security-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.security-note mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--functional-success-600);\n}\n@media (max-width: 480px) {\n  .recharge-card {\n    padding: var(--spacing-medium-xl);\n  }\n}\n/*# sourceMappingURL=balance-recharge.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BalanceRechargeComponent, { className: "BalanceRechargeComponent", filePath: "src/components/dashboardlayout/payments/balance-recharge/balance-recharge.ts", lineNumber: 29 });
})();
export {
  BalanceRechargeComponent
};
//# sourceMappingURL=chunk-T5V7TOY2.js.map
