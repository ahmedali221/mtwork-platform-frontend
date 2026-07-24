import {
  WithdrawService
} from "./chunk-VXEZP5JU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
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
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Inject,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Salary/withdraw-request-dialog/withdraw-request-dialog.ts
function WithdrawRequestDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "salary.form.availableBalance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, ctx_r0.balance, "1.2-2"));
  }
}
function WithdrawRequestDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "salary.form.fullName"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function WithdrawRequestDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "salary.form.iban"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function WithdrawRequestDialogComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "salary.form.amount"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function WithdrawRequestDialogComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "salary.errors.insufficientBalance"), " ");
  }
}
function WithdrawRequestDialogComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.submitError));
  }
}
function WithdrawRequestDialogComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var _WithdrawRequestDialogComponent = class _WithdrawRequestDialogComponent {
  constructor(data) {
    this.dialogRef = inject(MatDialogRef);
    this.withdrawService = inject(WithdrawService);
    this.tokenService = inject(TokenService);
    this.fb = inject(FormBuilder);
    this.form = this.fb.nonNullable.group({
      fullName: ["", [Validators.required, Validators.maxLength(100)]],
      iban: ["", [Validators.required, Validators.maxLength(50)]],
      amount: [null, [Validators.required, Validators.min(0.01)]]
    });
    this.hasBalance = computed(() => this.balance !== null, ...ngDevMode ? [{ debugName: "hasBalance" }] : []);
    this.isSubmitting = false;
    this.submitError = "";
    this.insufficientBalance = signal(false, ...ngDevMode ? [{ debugName: "insufficientBalance" }] : []);
    this.balance = data?.balance ?? null;
  }
  close() {
    this.dialogRef.close();
  }
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  /** Inline check used by template + onSubmit. Skipped if balance is unknown. */
  isAmountOverBalance() {
    const amount = this.form.controls.amount.value;
    return this.balance !== null && amount != null && amount > this.balance;
  }
  /** Reset insufficient-balance flag when the user edits the amount. */
  onAmountInput() {
    if (this.insufficientBalance())
      this.insufficientBalance.set(false);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.isAmountOverBalance()) {
      this.insufficientBalance.set(true);
      this.submitError = "";
      return;
    }
    const employeeId = this.tokenService.getUserId();
    if (!employeeId) {
      this.submitError = "salary.errors.notAuthenticated";
      return;
    }
    const { fullName, iban, amount } = this.form.getRawValue();
    const payload = {
      employeeId,
      fullName: fullName.trim(),
      iban: iban.trim(),
      amount
    };
    this.isSubmitting = true;
    this.submitError = "";
    this.insufficientBalance.set(false);
    this.withdrawService.submitRequest(payload).subscribe({
      next: () => this.dialogRef.close({ refresh: true }),
      error: (err) => {
        this.isSubmitting = false;
        if (err?.status === 500) {
          this.submitError = "salary.errors.insufficientBalance";
          return;
        }
        this.submitError = err?.error?.message ?? "salary.errors.submitWithdrawal";
      }
    });
  }
};
_WithdrawRequestDialogComponent.\u0275fac = function WithdrawRequestDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WithdrawRequestDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_WithdrawRequestDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WithdrawRequestDialogComponent, selectors: [["app-withdraw-request-dialog"]], decls: 51, vars: 59, consts: [[1, "wd-dialog"], [1, "wd-dialog__header"], [1, "wd-dialog__title"], ["type", "button", 1, "wd-dialog__close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "aria-hidden", "true"], ["d", "M2 2l14 14M16 2L2 16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["novalidate", "", 1, "wd-dialog__body", 3, "ngSubmit", "formGroup"], ["role", "status", 1, "wd-balance"], [1, "wd-field"], ["for", "wd-fullName", 1, "wd-field__label"], ["aria-hidden", "true", 1, "wd-field__required"], ["id", "wd-fullName", "type", "text", "formControlName", "fullName", "maxlength", "100", 1, "wd-field__input", 3, "placeholder"], ["role", "alert", 1, "wd-field__error"], ["for", "wd-iban", 1, "wd-field__label"], ["id", "wd-iban", "type", "text", "formControlName", "iban", "maxlength", "50", 1, "wd-field__input", 3, "placeholder"], ["for", "wd-amount", 1, "wd-field__label"], ["id", "wd-amount", "type", "number", "formControlName", "amount", "min", "0.01", "step", "0.01", 1, "wd-field__input", 3, "input", "placeholder"], ["role", "alert", 1, "wd-form-error"], [1, "wd-dialog__footer"], ["type", "button", 1, "wd-btn", "wd-btn--ghost", 3, "click"], ["type", "submit", 1, "wd-btn", "wd-btn--primary", 3, "disabled"], ["aria-hidden", "true", 1, "wd-spinner"], [1, "wd-balance__label"], [1, "wd-balance__value"]], template: function WithdrawRequestDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function WithdrawRequestDialogComponent_Template_button_click_5_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 4);
    \u0275\u0275element(8, "path", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 6);
    \u0275\u0275listener("ngSubmit", function WithdrawRequestDialogComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275conditionalCreate(10, WithdrawRequestDialogComponent_Conditional_10_Template, 7, 7, "div", 7);
    \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 11);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275conditionalCreate(19, WithdrawRequestDialogComponent_Conditional_19_Template, 4, 6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8)(21, "label", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementStart(24, "span", 10);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 14);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275conditionalCreate(28, WithdrawRequestDialogComponent_Conditional_28_Template, 4, 6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 8)(30, "label", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementStart(33, "span", 10);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 16);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275listener("input", function WithdrawRequestDialogComponent_Template_input_input_35_listener() {
      return ctx.onAmountInput();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, WithdrawRequestDialogComponent_Conditional_37_Template, 4, 6, "span", 12);
    \u0275\u0275conditionalCreate(38, WithdrawRequestDialogComponent_Conditional_38_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, WithdrawRequestDialogComponent_Conditional_39_Template, 3, 3, "p", 17);
    \u0275\u0275elementStart(40, "div", 18)(41, "button", 19);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275listener("click", function WithdrawRequestDialogComponent_Template_button_click_41_listener() {
      return ctx.close();
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 20);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275conditionalCreate(47, WithdrawRequestDialogComponent_Conditional_47_Template, 1, 0, "span", 21);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 33, "salary.dialog.withdrawTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 35, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.hasBalance() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("wd-field--error", ctx.fieldInvalid("fullName"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 37, "salary.form.fullName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 39, "salary.form.fullName"));
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx.fieldInvalid("fullName"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("fullName") ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("wd-field--error", ctx.fieldInvalid("iban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 41, "salary.form.iban"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 43, "salary.form.iban"));
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx.fieldInvalid("iban"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("iban") ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("wd-field--error", ctx.fieldInvalid("amount") || ctx.insufficientBalance());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 45, "salary.form.amount"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 47, "salary.form.amount"));
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx.fieldInvalid("amount") || ctx.insufficientBalance());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("amount") ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.insufficientBalance() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.submitError ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 49, "hr.actions.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 51, "hr.actions.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 53, "salary.actions.requestWithdrawal"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isSubmitting ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? \u0275\u0275pipeBind1(49, 55, "common.loading") : \u0275\u0275pipeBind1(50, 57, "salary.actions.requestWithdrawal"), " ");
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, FormGroupDirective, FormControlName, MatDialogModule, TranslocoModule, DecimalPipe, TranslocoPipe], styles: ["\n\n.wd-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  font-family: inherit;\n}\n.wd-dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 22px 24px 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.wd-dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.3;\n  letter-spacing: -0.2px;\n  color: var(--brand-neutral-950);\n}\n.wd-dialog__close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background-color .15s ease, color .15s ease;\n  flex-shrink: 0;\n}\n.wd-dialog__close[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.wd-dialog__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.wd-dialog__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px 24px 24px;\n}\n.wd-balance[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  border: 1px solid var(--brand-primary-100);\n}\n.wd-balance__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--brand-neutral-700);\n  letter-spacing: .1px;\n}\n.wd-balance__value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--brand-primary-700, var(--brand-primary-600));\n  font-variant-numeric: tabular-nums;\n}\n.wd-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.wd-field__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-800);\n  line-height: 1.4;\n}\n.wd-field__required[_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n  margin-inline-start: 2px;\n}\n.wd-field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding: 0 12px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--brand-neutral-900);\n  background: var(--brand-neutral-50);\n  font-family: inherit;\n  transition:\n    border-color .15s ease,\n    box-shadow .15s ease,\n    background-color .15s ease;\n}\n.wd-field__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.wd-field__input[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: var(--brand-neutral-300);\n}\n.wd-field__input[_ngcontent-%COMP%]:focus, \n.wd-field__input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n  background: var(--ui-surface);\n}\n.wd-field--error[_ngcontent-%COMP%]   .wd-field__input[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-500);\n  background: var(--functional-danger-50);\n}\n.wd-field--error[_ngcontent-%COMP%]   .wd-field__input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px var(--functional-danger-100);\n}\n.wd-field__error[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--functional-danger-600);\n  line-height: 1.4;\n}\n.wd-form-error[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-100);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n  line-height: 1.45;\n}\n.wd-dialog__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.wd-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  height: 42px;\n  padding: 0 20px;\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background-color .15s ease,\n    color .15s ease,\n    border-color .15s ease,\n    box-shadow .15s ease,\n    transform .12s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.wd-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.wd-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: .55;\n}\n.wd-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--brand-neutral-800);\n  border: 1px solid var(--brand-neutral-200);\n}\n.wd-btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-neutral-100);\n  border-color: var(--brand-neutral-300);\n}\n.wd-btn--primary[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: 1px solid var(--brand-primary-500);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.wd-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  border-color: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n}\n.wd-btn--primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.wd-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-0, #fff) 40%, transparent);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-full);\n  animation: _ngcontent-%COMP%_wd-spin .7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_wd-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .wd-dialog__header[_ngcontent-%COMP%] {\n    padding: 16px 16px 8px;\n  }\n  .wd-dialog__body[_ngcontent-%COMP%] {\n    padding: 8px 16px 16px;\n  }\n  .wd-dialog__footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .wd-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=withdraw-request-dialog.css.map */"] });
var WithdrawRequestDialogComponent = _WithdrawRequestDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WithdrawRequestDialogComponent, [{
    type: Component,
    args: [{ selector: "app-withdraw-request-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, MatDialogModule, TranslocoModule], template: `<div class="wd-dialog">

  <!-- Header -->
  <div class="wd-dialog__header">
    <h2 class="wd-dialog__title">{{ 'salary.dialog.withdrawTitle' | transloco }}</h2>
    <button type="button" class="wd-dialog__close" (click)="close()"
            [attr.aria-label]="'common.close' | transloco">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Form -->
  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="wd-dialog__body" novalidate>

    <!-- Balance banner \u2014 above the form, only when known -->
    @if (hasBalance()) {
      <div class="wd-balance" role="status">
        <span class="wd-balance__label">{{ 'salary.form.availableBalance' | transloco }}</span>
        <span class="wd-balance__value">{{ balance | number:'1.2-2' }}</span>
      </div>
    }

    <!-- Full Name -->
    <div class="wd-field" [class.wd-field--error]="fieldInvalid('fullName')">
      <label for="wd-fullName" class="wd-field__label">
        {{ 'salary.form.fullName' | transloco }}
        <span class="wd-field__required" aria-hidden="true">*</span>
      </label>
      <input id="wd-fullName" type="text" formControlName="fullName" class="wd-field__input"
             maxlength="100"
             [placeholder]="'salary.form.fullName' | transloco"
             [attr.aria-required]="true"
             [attr.aria-invalid]="fieldInvalid('fullName')">
      @if (fieldInvalid('fullName')) {
        <span class="wd-field__error" role="alert">
          {{ 'salary.form.fullName' | transloco }} {{ 'common.isRequired' | transloco }}
        </span>
      }
    </div>

    <!-- IBAN -->
    <div class="wd-field" [class.wd-field--error]="fieldInvalid('iban')">
      <label for="wd-iban" class="wd-field__label">
        {{ 'salary.form.iban' | transloco }}
        <span class="wd-field__required" aria-hidden="true">*</span>
      </label>
      <input id="wd-iban" type="text" formControlName="iban" class="wd-field__input"
             maxlength="50"
             [placeholder]="'salary.form.iban' | transloco"
             [attr.aria-required]="true"
             [attr.aria-invalid]="fieldInvalid('iban')">
      @if (fieldInvalid('iban')) {
        <span class="wd-field__error" role="alert">
          {{ 'salary.form.iban' | transloco }} {{ 'common.isRequired' | transloco }}
        </span>
      }
    </div>

    <!-- Amount -->
    <div class="wd-field" [class.wd-field--error]="fieldInvalid('amount') || insufficientBalance()">
      <label for="wd-amount" class="wd-field__label">
        {{ 'salary.form.amount' | transloco }}
        <span class="wd-field__required" aria-hidden="true">*</span>
      </label>
      <input id="wd-amount" type="number" formControlName="amount" class="wd-field__input"
             min="0.01" step="0.01"
             (input)="onAmountInput()"
             [placeholder]="'salary.form.amount' | transloco"
             [attr.aria-required]="true"
             [attr.aria-invalid]="fieldInvalid('amount') || insufficientBalance()">
      @if (fieldInvalid('amount')) {
        <span class="wd-field__error" role="alert">
          {{ 'salary.form.amount' | transloco }} {{ 'common.isRequired' | transloco }}
        </span>
      }
      @if (insufficientBalance()) {
        <span class="wd-field__error" role="alert">
          {{ 'salary.errors.insufficientBalance' | transloco }}
        </span>
      }
    </div>

    <!-- Form-level submit error (e.g. backend 500 \u2192 "Insufficient balance") -->
    @if (submitError) {
      <p class="wd-form-error" role="alert">{{ submitError | transloco }}</p>
    }

    <!-- Footer -->
    <div class="wd-dialog__footer">
      <button type="button" class="wd-btn wd-btn--ghost" (click)="close()"
              [attr.aria-label]="'hr.actions.cancel' | transloco">
        {{ 'hr.actions.cancel' | transloco }}
      </button>
      <button type="submit" class="wd-btn wd-btn--primary" [disabled]="isSubmitting"
              [attr.aria-label]="'salary.actions.requestWithdrawal' | transloco">
        @if (isSubmitting) {
          <span class="wd-spinner" aria-hidden="true"></span>
        }
        {{ isSubmitting ? ('common.loading' | transloco) : ('salary.actions.requestWithdrawal' | transloco) }}
      </button>
    </div>

  </form>

</div>
`, styles: ["/* src/components/DashboardLayout/Salary/withdraw-request-dialog/withdraw-request-dialog.css */\n.wd-dialog {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  font-family: inherit;\n}\n.wd-dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 22px 24px 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.wd-dialog__title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.3;\n  letter-spacing: -0.2px;\n  color: var(--brand-neutral-950);\n}\n.wd-dialog__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background-color .15s ease, color .15s ease;\n  flex-shrink: 0;\n}\n.wd-dialog__close:hover {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.wd-dialog__close:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.wd-dialog__body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px 24px 24px;\n}\n.wd-balance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  border: 1px solid var(--brand-primary-100);\n}\n.wd-balance__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--brand-neutral-700);\n  letter-spacing: .1px;\n}\n.wd-balance__value {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--brand-primary-700, var(--brand-primary-600));\n  font-variant-numeric: tabular-nums;\n}\n.wd-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.wd-field__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-800);\n  line-height: 1.4;\n}\n.wd-field__required {\n  color: var(--functional-danger-500);\n  margin-inline-start: 2px;\n}\n.wd-field__input {\n  width: 100%;\n  height: 42px;\n  padding: 0 12px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--brand-neutral-900);\n  background: var(--brand-neutral-50);\n  font-family: inherit;\n  transition:\n    border-color .15s ease,\n    box-shadow .15s ease,\n    background-color .15s ease;\n}\n.wd-field__input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.wd-field__input:hover:not(:disabled):not(:focus) {\n  border-color: var(--brand-neutral-300);\n}\n.wd-field__input:focus,\n.wd-field__input:focus-visible {\n  outline: none;\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n  background: var(--ui-surface);\n}\n.wd-field--error .wd-field__input {\n  border-color: var(--functional-danger-500);\n  background: var(--functional-danger-50);\n}\n.wd-field--error .wd-field__input:focus {\n  box-shadow: 0 0 0 3px var(--functional-danger-100);\n}\n.wd-field__error {\n  margin-top: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--functional-danger-600);\n  line-height: 1.4;\n}\n.wd-form-error {\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-100);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n  line-height: 1.45;\n}\n.wd-dialog__footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.wd-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  height: 42px;\n  padding: 0 20px;\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition:\n    background-color .15s ease,\n    color .15s ease,\n    border-color .15s ease,\n    box-shadow .15s ease,\n    transform .12s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.wd-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.wd-btn:disabled {\n  cursor: not-allowed;\n  opacity: .55;\n}\n.wd-btn--ghost {\n  background: transparent;\n  color: var(--brand-neutral-800);\n  border: 1px solid var(--brand-neutral-200);\n}\n.wd-btn--ghost:hover:not(:disabled) {\n  background: var(--brand-neutral-100);\n  border-color: var(--brand-neutral-300);\n}\n.wd-btn--primary {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: 1px solid var(--brand-primary-500);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.wd-btn--primary:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  border-color: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n}\n.wd-btn--primary:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.wd-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-0, #fff) 40%, transparent);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-full);\n  animation: wd-spin .7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes wd-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .wd-dialog__header {\n    padding: 16px 16px 8px;\n  }\n  .wd-dialog__body {\n    padding: 8px 16px 16px;\n  }\n  .wd-dialog__footer {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .wd-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=withdraw-request-dialog.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WithdrawRequestDialogComponent, { className: "WithdrawRequestDialogComponent", filePath: "src/components/dashboardlayout/salary/withdraw-request-dialog/withdraw-request-dialog.ts", lineNumber: 22 });
})();

// src/features/withdraw/withdrawals-page/withdrawals-page.ts
var _forTrack0 = ($index, $item) => $item.id;
function WithdrawalsPageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "mat-icon");
    \u0275\u0275text(3, "savings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "withdrawals.stats.availableBalance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, ctx_r0.balance(), "1.2-2"));
  }
}
function WithdrawalsPageComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.loading"));
  }
}
function WithdrawalsPageComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_71_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadHistory());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r0.error()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "common.retry"));
  }
}
function WithdrawalsPageComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon", 28);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 30);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_72_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openWithdrawDialog());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "withdrawals.emptyTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "withdrawals.emptyDesc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "withdrawals.requestBtn"), " ");
  }
}
function WithdrawalsPageComponent_Conditional_73_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "salary.table.requestedBy"));
  }
}
function WithdrawalsPageComponent_Conditional_73_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.actions"));
  }
}
function WithdrawalsPageComponent_Conditional_73_For_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(entry_r4.employeeName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.employeeName ?? "\u2014");
  }
}
function WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const entry_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.processWithdrawal(entry_r4, "approved"));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const entry_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.processWithdrawal(entry_r4, "rejected"));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "salary.actions.approve"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 4, "salary.actions.reject"));
  }
}
function WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Conditional_1_Template, 9, 6, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r4.status === "pending" ? 1 : -1);
  }
}
function WithdrawalsPageComponent_Conditional_73_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, WithdrawalsPageComponent_Conditional_73_For_24_Conditional_3_Template, 6, 2, "td");
    \u0275\u0275elementStart(4, "td", 38);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span")(11, "mat-icon", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, WithdrawalsPageComponent_Conditional_73_For_24_Conditional_18_Template, 2, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatKey(entry_r4.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isBusiness ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 11, entry_r4.amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r4.reason || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-badge ", ctx_r0.statusClass(entry_r4.status)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusIcon(entry_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "salary.withdrawStatus." + entry_r4.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 16, entry_r4.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isBusiness ? 18 : -1);
  }
}
function WithdrawalsPageComponent_Conditional_73_Conditional_25_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_73_Conditional_25_For_7_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(p_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r0.currentPage());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "withdrawals.pagination.page") + " " + p_r8)("aria-current", p_r8 === ctx_r0.currentPage() ? "page" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r8, " ");
  }
}
function WithdrawalsPageComponent_Conditional_73_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_73_Conditional_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, WithdrawalsPageComponent_Conditional_73_Conditional_25_For_7_Template, 3, 7, "button", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Conditional_73_Conditional_25_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "withdrawals.pagination.nav"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "withdrawals.pagination.previous"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 9, "withdrawals.pagination.next"));
  }
}
function WithdrawalsPageComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 33);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr")(5, "th", 34);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, WithdrawalsPageComponent_Conditional_73_Conditional_8_Template, 3, 3, "th", 34);
    \u0275\u0275elementStart(9, "th", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 34);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, WithdrawalsPageComponent_Conditional_73_Conditional_21_Template, 3, 3, "th", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, WithdrawalsPageComponent_Conditional_73_For_24_Template, 19, 19, "tr", 35, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, WithdrawalsPageComponent_Conditional_73_Conditional_25_Template, 12, 11, "div", 36);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 10, "withdrawals.title")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "withdrawals.table.id"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isBusiness ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "withdrawals.table.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 16, "withdrawals.table.reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "withdrawals.table.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 20, "withdrawals.table.date"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isBusiness ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.paginated());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages() > 1 ? 25 : -1);
  }
}
var _WithdrawalsPageComponent = class _WithdrawalsPageComponent {
  constructor() {
    this.withdrawService = inject(WithdrawService);
    this.dialog = inject(MatDialog);
    this.authService = inject(AuthService);
    this.tokenService = inject(TokenService);
    this.entries = signal([], ...ngDevMode ? [{ debugName: "entries" }] : []);
    this.balance = signal(null, ...ngDevMode ? [{ debugName: "balance" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
    this.currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
    this.pageSize = 10;
    this.isBusiness = (this.authService.getUserTypeId() ?? 0) === 3 || this.tokenService.getUserRole() === "Admin";
    this.userId = this.tokenService.getUserId() ?? localStorage.getItem("userId") ?? "";
    this.filtered = computed(() => {
      const q = this.searchQuery().toLowerCase();
      const status = this.statusFilter();
      return this.entries().filter((e) => {
        const matchSearch = !q || String(e.id).includes(q) || (e.reason ?? "").toLowerCase().includes(q) || (e.employeeName ?? "").toLowerCase().includes(q);
        const matchStatus = !status || e.status === status;
        return matchSearch && matchStatus;
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
    this.paginated = computed(() => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.filtered().slice(start, start + this.pageSize);
    }, ...ngDevMode ? [{ debugName: "paginated" }] : []);
    this.pageNumbers = computed(() => Array.from({ length: Math.min(this.totalPages(), 6) }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : []);
    this.totalAmount = computed(() => this.entries().reduce((s, e) => s + e.amount, 0), ...ngDevMode ? [{ debugName: "totalAmount" }] : []);
    this.pendingCount = computed(() => this.entries().filter((e) => e.status === "pending").length, ...ngDevMode ? [{ debugName: "pendingCount" }] : []);
    this.approvedSum = computed(() => this.entries().filter((e) => e.status === "approved").reduce((s, e) => s + e.amount, 0), ...ngDevMode ? [{ debugName: "approvedSum" }] : []);
  }
  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit() {
    this.loadHistory();
  }
  loadHistory() {
    this.loading.set(true);
    this.error.set(null);
    if (!this.isBusiness && !this.userId) {
      this.entries.set([]);
      this.balance.set(null);
      this.loading.set(false);
      this.error.set("withdrawals.errors.notAuthenticated");
      return;
    }
    if (this.isBusiness) {
      this.balance.set(null);
      this.withdrawService.getAdminRequests().subscribe({
        next: (data) => {
          this.entries.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.error.set("withdrawals.errors.load");
          this.loading.set(false);
        }
      });
    } else {
      this.withdrawService.getEmployeeHistory(this.userId).subscribe({
        next: ({ balance, entries }) => {
          this.balance.set(balance);
          this.entries.set(entries);
          this.loading.set(false);
        },
        error: () => {
          this.error.set("withdrawals.errors.load");
          this.loading.set(false);
        }
      });
    }
  }
  processWithdrawal(entry, status) {
    this.withdrawService.processRequest(entry.id, { status }).subscribe({
      next: () => this.loadHistory()
    });
  }
  openWithdrawDialog() {
    const ref = this.dialog.open(WithdrawRequestDialogComponent, {
      width: "480px",
      maxWidth: "480px",
      disableClose: false,
      autoFocus: "first-tabbable",
      // Strips Material's default container chrome and applies the
      // refined card styling defined in styles.css. Backdrop class
      // applies the softer semi-transparent dark overlay.
      panelClass: "wd-dialog-panel",
      backdropClass: "wd-dialog-backdrop",
      // Pass current balance so the dialog can validate amount client-side.
      data: { balance: this.balance() }
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.refresh)
        this.loadHistory();
    });
  }
  // ── Pagination ────────────────────────────────────────────────
  goToPage(p) {
    if (p >= 1 && p <= this.totalPages())
      this.currentPage.set(p);
  }
  onFilterChange() {
    this.currentPage.set(1);
  }
  // ── Helpers ───────────────────────────────────────────────────
  formatKey(id) {
    return `WD-${String(id).padStart(5, "0")}`;
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
  statusClass(status) {
    return { pending: "badge--warning", approved: "badge--success", rejected: "badge--danger" }[status] ?? "";
  }
  statusIcon(status) {
    return { pending: "schedule", approved: "check_circle", rejected: "cancel" }[status] ?? "help";
  }
};
_WithdrawalsPageComponent.\u0275fac = function WithdrawalsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WithdrawalsPageComponent)();
};
_WithdrawalsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WithdrawalsPageComponent, selectors: [["app-withdrawals-page"]], decls: 74, vars: 58, consts: [[1, "withdrawals-page"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary", 3, "click", "aria-label"], [1, "summary-cards"], [1, "summary-card"], [1, "summary-icon", "summary-icon--total"], [1, "summary-info"], [1, "summary-label"], [1, "summary-value"], [1, "summary-icon", "summary-icon--pending"], [1, "summary-icon", "summary-icon--approved"], [1, "filter-bar"], [1, "search-wrapper"], [1, "search-icon"], ["type", "text", 1, "search-input", 3, "ngModelChange", "placeholder", "ngModel", "aria-label"], [1, "filter-select", 3, "ngModelChange", "ngModel", "aria-label"], ["value", ""], ["value", "pending"], ["value", "approved"], ["value", "rejected"], [1, "loading-state"], [1, "error-state"], [1, "empty-state"], ["diameter", "40"], [1, "btn-secondary", 3, "click"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "btn-primary", 3, "click"], [1, "table-wrapper"], ["role", "table", 1, "data-table", 3, "aria-label"], ["scope", "col"], [1, "table-row"], ["role", "navigation", 1, "pagination"], [1, "td-key"], [1, "td-amount"], [1, "td-reason"], [1, "badge-icon"], [1, "td-date"], [1, "employee-cell"], [1, "employee-avatar"], [1, "employee-name"], [1, "action-btns"], [1, "icon-btn", "approve-btn", 3, "click"], [1, "icon-btn", "reject-btn", 3, "click"], [1, "page-btn", 3, "click", "disabled"], [1, "page-btn", 3, "active"], [1, "page-btn", 3, "click"]], template: function WithdrawalsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function WithdrawalsPageComponent_Template_button_click_9_listener() {
      return ctx.openWithdrawDialog();
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 6);
    \u0275\u0275conditionalCreate(16, WithdrawalsPageComponent_Conditional_16_Template, 11, 7, "div", 7);
    \u0275\u0275elementStart(17, "div", 7)(18, "div", 8)(19, "mat-icon");
    \u0275\u0275text(20, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "span", 10);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 7)(29, "div", 12)(30, "mat-icon");
    \u0275\u0275text(31, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "span", 10);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 11);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 7)(39, "div", 13)(40, "mat-icon");
    \u0275\u0275text(41, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 9)(43, "span", 10);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 11);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 14)(50, "div", 15)(51, "mat-icon", 16);
    \u0275\u0275text(52, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 17);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275listener("ngModelChange", function WithdrawalsPageComponent_Template_input_ngModelChange_53_listener($event) {
      ctx.searchQuery.set($event);
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "select", 18);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275listener("ngModelChange", function WithdrawalsPageComponent_Template_select_ngModelChange_56_listener($event) {
      ctx.statusFilter.set($event);
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(58, "option", 19);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 20);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 21);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 22);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(70, WithdrawalsPageComponent_Conditional_70_Template, 5, 3, "div", 23)(71, WithdrawalsPageComponent_Conditional_71_Template, 9, 6, "div", 24)(72, WithdrawalsPageComponent_Conditional_72_Template, 12, 9, "div", 25)(73, WithdrawalsPageComponent_Conditional_73_Template, 26, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 24, "withdrawals.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 26, "withdrawals.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(10, 28, "withdrawals.requestBtn")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "withdrawals.requestBtn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.isBusiness && ctx.balance() !== null ? 16 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "withdrawals.stats.totalRequested"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 34, ctx.totalAmount(), "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 37, "withdrawals.stats.pending"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.pendingCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 39, "withdrawals.stats.totalApproved"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 41, ctx.approvedSum(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(54, 44, "withdrawals.searchPlaceholder")));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 46, "withdrawals.searchPlaceholder"))("ngModel", ctx.searchQuery());
    \u0275\u0275advance(3);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(57, 48, "withdrawals.filterByStatus")));
    \u0275\u0275property("ngModel", ctx.statusFilter());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 50, "common.all"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 52, "salary.withdrawStatus.pending"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 54, "salary.withdrawStatus.approved"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 56, "salary.withdrawStatus.rejected"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 70 : ctx.error() ? 71 : ctx.entries().length === 0 ? 72 : 73);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatDialogModule,
  TranslocoModule,
  DecimalPipe,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.withdrawals-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1100px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-block-end: 28px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: var(--radius-md, 8px);\n  border: none;\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-600);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-block-end: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  padding: 20px 22px;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  transition: box-shadow .18s ease, transform .15s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(15, 23, 42, .08), 0 2px 4px rgba(15, 23, 42, .04);\n  transform: translateY(-1px);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-md, 8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.summary-icon--total[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n}\n.summary-icon--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-500);\n}\n.summary-icon--approved[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin-block-end: 4px;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-block-end: 20px;\n  flex-wrap: wrap;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ui-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px 10px 38px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 140px;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 12px;\n  text-align: center;\n  color: var(--ui-text-muted);\n}\n.error-state[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: var(--ui-text-muted);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.empty-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  overflow-x: auto;\n  background: var(--ui-surface);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: start;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle, var(--ui-surface));\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.table-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-block-end: none;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover, rgba(0,0,0,.03));\n}\n.td-key[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-primary-500);\n  font-family: monospace;\n}\n.td-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.td-reason[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  max-width: 200px;\n}\n.td-date[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-500);\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-block-start: 20px;\n  padding-block-end: 8px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 8px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-hover);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  border-color: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  font-weight: 600;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .withdrawals-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=withdrawals-page.css.map */"] });
var WithdrawalsPageComponent = _WithdrawalsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WithdrawalsPageComponent, [{
    type: Component,
    args: [{ selector: "app-withdrawals-page", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      TranslocoModule
    ], template: `<div class="withdrawals-page">

  <!-- \u2500\u2500 Header \u2500\u2500 -->
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">{{ 'withdrawals.title' | transloco }}</h1>
      <p class="page-subtitle">{{ 'withdrawals.subtitle' | transloco }}</p>
    </div>
    <button class="btn-primary" (click)="openWithdrawDialog()" aria-label="{{ 'withdrawals.requestBtn' | transloco }}">
      <mat-icon>add</mat-icon>
      {{ 'withdrawals.requestBtn' | transloco }}
    </button>
  </div>

  <!-- \u2500\u2500 Summary cards \u2500\u2500 -->
  <div class="summary-cards">
    @if (!isBusiness && balance() !== null) {
      <div class="summary-card">
        <div class="summary-icon summary-icon--approved">
          <mat-icon>savings</mat-icon>
        </div>
        <div class="summary-info">
          <span class="summary-label">{{ 'withdrawals.stats.availableBalance' | transloco }}</span>
          <span class="summary-value">{{ balance() | number:'1.2-2' }}</span>
        </div>
      </div>
    }
    <div class="summary-card">
      <div class="summary-icon summary-icon--total">
        <mat-icon>account_balance_wallet</mat-icon>
      </div>
      <div class="summary-info">
        <span class="summary-label">{{ 'withdrawals.stats.totalRequested' | transloco }}</span>
        <span class="summary-value">{{ totalAmount() | number:'1.2-2' }}</span>
      </div>
    </div>
    <div class="summary-card">
      <div class="summary-icon summary-icon--pending">
        <mat-icon>schedule</mat-icon>
      </div>
      <div class="summary-info">
        <span class="summary-label">{{ 'withdrawals.stats.pending' | transloco }}</span>
        <span class="summary-value">{{ pendingCount() }}</span>
      </div>
    </div>
    <div class="summary-card">
      <div class="summary-icon summary-icon--approved">
        <mat-icon>check_circle</mat-icon>
      </div>
      <div class="summary-info">
        <span class="summary-label">{{ 'withdrawals.stats.totalApproved' | transloco }}</span>
        <span class="summary-value">{{ approvedSum() | number:'1.2-2' }}</span>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Filters \u2500\u2500 -->
  <div class="filter-bar">
    <div class="search-wrapper">
      <mat-icon class="search-icon">search</mat-icon>
      <input
        class="search-input"
        type="text"
        [placeholder]="'withdrawals.searchPlaceholder' | transloco"
        [ngModel]="searchQuery()"
        (ngModelChange)="searchQuery.set($event); onFilterChange()"
        aria-label="{{ 'withdrawals.searchPlaceholder' | transloco }}"
      />
    </div>
    <select
      class="filter-select"
      [ngModel]="statusFilter()"
      (ngModelChange)="statusFilter.set($event); onFilterChange()"
      aria-label="{{ 'withdrawals.filterByStatus' | transloco }}"
    >
      <option value="">{{ 'common.all' | transloco }}</option>
      <option value="pending">{{ 'salary.withdrawStatus.pending' | transloco }}</option>
      <option value="approved">{{ 'salary.withdrawStatus.approved' | transloco }}</option>
      <option value="rejected">{{ 'salary.withdrawStatus.rejected' | transloco }}</option>
    </select>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500 -->
  @if (loading()) {
    <div class="loading-state">
      <mat-spinner diameter="40"></mat-spinner>
      <p>{{ 'common.loading' | transloco }}</p>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500 -->
  @else if (error()) {
    <div class="error-state">
      <mat-icon>error_outline</mat-icon>
      <p>{{ error()! | transloco }}</p>
      <button class="btn-secondary" (click)="loadHistory()">{{ 'common.retry' | transloco }}</button>
    </div>
  }

  <!-- \u2500\u2500 Empty \u2500\u2500 -->
  @else if (entries().length === 0) {
    <div class="empty-state">
      <mat-icon class="empty-icon">account_balance_wallet</mat-icon>
      <p class="empty-title">{{ 'withdrawals.emptyTitle' | transloco }}</p>
      <p class="empty-desc">{{ 'withdrawals.emptyDesc' | transloco }}</p>
      <button class="btn-primary" (click)="openWithdrawDialog()">
        {{ 'withdrawals.requestBtn' | transloco }}
      </button>
    </div>
  }

  <!-- \u2500\u2500 Table \u2500\u2500 -->
  @else {
    <div class="table-wrapper">
      <table class="data-table" role="table" aria-label="{{ 'withdrawals.title' | transloco }}">
        <thead>
          <tr>
            <th scope="col">{{ 'withdrawals.table.id' | transloco }}</th>
            @if (isBusiness) {
              <th scope="col">{{ 'salary.table.requestedBy' | transloco }}</th>
            }
            <th scope="col">{{ 'withdrawals.table.amount' | transloco }}</th>
            <th scope="col">{{ 'withdrawals.table.reason' | transloco }}</th>
            <th scope="col">{{ 'withdrawals.table.status' | transloco }}</th>
            <th scope="col">{{ 'withdrawals.table.date' | transloco }}</th>
            @if (isBusiness) {
              <th scope="col">{{ 'common.actions' | transloco }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (entry of paginated(); track entry.id) {
            <tr class="table-row">
              <td class="td-key">{{ formatKey(entry.id) }}</td>
              @if (isBusiness) {
                <td>
                  <div class="employee-cell">
                    <span class="employee-avatar">{{ getInitials(entry.employeeName) }}</span>
                    <span class="employee-name">{{ entry.employeeName ?? '\u2014' }}</span>
                  </div>
                </td>
              }
              <td class="td-amount">{{ entry.amount | number:'1.2-2' }}</td>
              <td class="td-reason">{{ entry.reason || '\u2014' }}</td>
              <td>
                <span class="status-badge {{ statusClass(entry.status) }}">
                  <mat-icon class="badge-icon">{{ statusIcon(entry.status) }}</mat-icon>
                  {{ ('salary.withdrawStatus.' + entry.status) | transloco }}
                </span>
              </td>
              <td class="td-date">{{ entry.createdAt | date:'mediumDate' }}</td>
              @if (isBusiness) {
                <td>
                  @if (entry.status === 'pending') {
                    <div class="action-btns">
                      <button class="icon-btn approve-btn"
                              (click)="processWithdrawal(entry, 'approved')"
                              [attr.aria-label]="'salary.actions.approve' | transloco">
                        <mat-icon>check</mat-icon>
                      </button>
                      <button class="icon-btn reject-btn"
                              (click)="processWithdrawal(entry, 'rejected')"
                              [attr.aria-label]="'salary.actions.reject' | transloco">
                        <mat-icon>close</mat-icon>
                      </button>
                    </div>
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- \u2500\u2500 Pagination \u2500\u2500 -->
    @if (totalPages() > 1) {
      <div class="pagination" role="navigation" [attr.aria-label]="'withdrawals.pagination.nav' | transloco">
        <button class="page-btn" (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1" [attr.aria-label]="'withdrawals.pagination.previous' | transloco">
          <mat-icon>chevron_left</mat-icon>
        </button>
        @for (p of pageNumbers(); track p) {
          <button class="page-btn" [class.active]="p === currentPage()" (click)="goToPage(p)" [attr.aria-label]="('withdrawals.pagination.page' | transloco) + ' ' + p" [attr.aria-current]="p === currentPage() ? 'page' : null">
            {{ p }}
          </button>
        }
        <button class="page-btn" (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" [attr.aria-label]="'withdrawals.pagination.next' | transloco">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
    }
  }

</div>
`, styles: ["/* src/features/withdraw/withdrawals-page/withdrawals-page.css */\n.withdrawals-page {\n  padding: 24px;\n  max-width: 1100px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-block-end: 28px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: var(--radius-md, 8px);\n  border: none;\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.btn-primary:hover {\n  background: var(--brand-primary-600);\n}\n.btn-secondary {\n  padding: 8px 18px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-secondary:hover {\n  background: var(--ui-bg-hover);\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-block-end: 24px;\n}\n.summary-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  padding: 20px 22px;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  transition: box-shadow .18s ease, transform .15s ease;\n}\n.summary-card:hover {\n  box-shadow: 0 6px 18px rgba(15, 23, 42, .08), 0 2px 4px rgba(15, 23, 42, .04);\n  transform: translateY(-1px);\n}\n.summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-md, 8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.summary-icon--total {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n}\n.summary-icon--pending {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-500);\n}\n.summary-icon--approved {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.summary-label {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin-block-end: 4px;\n}\n.summary-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.filter-bar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-block-end: 20px;\n  flex-wrap: wrap;\n}\n.search-wrapper {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-icon {\n  position: absolute;\n  inset-inline-start: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ui-text-muted);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 12px 10px 38px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.search-input:focus {\n  border-color: var(--brand-primary-500);\n}\n.filter-select {\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 140px;\n}\n.filter-select:focus {\n  border-color: var(--brand-primary-500);\n}\n.loading-state,\n.error-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 12px;\n  text-align: center;\n  color: var(--ui-text-muted);\n}\n.error-state {\n  color: var(--functional-danger-600);\n}\n.empty-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: var(--ui-text-muted);\n}\n.empty-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.empty-desc {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.table-wrapper {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  overflow-x: auto;\n  background: var(--ui-surface);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table thead th {\n  padding: 12px 16px;\n  text-align: start;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle, var(--ui-surface));\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.table-row td {\n  padding: 14px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.table-row:last-child td {\n  border-block-end: none;\n}\n.table-row:hover {\n  background: var(--ui-bg-hover, rgba(0,0,0,.03));\n}\n.td-key {\n  font-weight: 600;\n  color: var(--brand-primary-500);\n  font-family: monospace;\n}\n.td-amount {\n  font-weight: 700;\n}\n.td-reason {\n  color: var(--ui-text-muted);\n  max-width: 200px;\n}\n.td-date {\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge--warning {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-500);\n}\n.badge--success {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.badge--danger {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-block-start: 20px;\n  padding-block-end: 8px;\n}\n.page-btn {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 8px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.page-btn:hover:not(:disabled) {\n  background: var(--ui-bg-hover);\n}\n.page-btn.active {\n  background: var(--brand-primary-500);\n  border-color: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  font-weight: 600;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .withdrawals-page {\n    padding: 16px;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary {\n    justify-content: center;\n  }\n  .summary-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=withdrawals-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WithdrawalsPageComponent, { className: "WithdrawalsPageComponent", filePath: "src/features/withdraw/withdrawals-page/withdrawals-page.ts", lineNumber: 30 });
})();
export {
  WithdrawalsPageComponent
};
//# sourceMappingURL=chunk-5BCZD4E4.js.map
