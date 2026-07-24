import {
  SalaryService
} from "./chunk-SZEG5LON.js";
import {
  HrService
} from "./chunk-MVEYIQO5.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
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
  DecimalPipe,
  NgClass
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
  inject,
  setClassMetadata,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Salary/pay-salary-dialog/pay-salary-dialog.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.contractId;
function PaySalaryDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.loading"));
  }
}
function PaySalaryDialogComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", emp_r1.contractId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emp_r1.employeeName);
  }
}
function PaySalaryDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 11)(1, "option", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PaySalaryDialogComponent_Conditional_17_For_5_Template, 2, 2, "option", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx_r1.fieldInvalid("contractId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "salary.form.employee"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.employees);
  }
}
function PaySalaryDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "salary.form.employee"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function PaySalaryDialogComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r3.labelKey));
  }
}
function PaySalaryDialogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "salary.form.paymentType"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function PaySalaryDialogComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.submitError));
  }
}
function PaySalaryDialogComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var _PaySalaryDialogComponent = class _PaySalaryDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.salaryService = inject(SalaryService);
    this.hrService = inject(HrService);
    this.fb = inject(FormBuilder);
    this.employees = [];
    this.employeesLoading = false;
    this.paymentTypeOptions = [
      { value: "salary", labelKey: "salary.paymentTypes.salary" },
      { value: "firstPatch", labelKey: "salary.paymentTypes.firstPatch" },
      { value: "lastPatch", labelKey: "salary.paymentTypes.lastPatch" },
      { value: "task", labelKey: "salary.paymentTypes.task" },
      { value: "stage", labelKey: "salary.paymentTypes.stage" }
    ];
    this.form = this.fb.nonNullable.group({
      contractId: [0, [Validators.required, Validators.min(1)]],
      paymentType: ["", Validators.required],
      amount: [null],
      currency: ["SAR", Validators.required],
      description: [""]
    });
    this.isSubmitting = false;
    this.submitError = "";
  }
  ngOnInit() {
    this.employeesLoading = true;
    this.hrService.getHRList().subscribe({
      next: ({ result }) => {
        this.employees = result.filter((e) => Number.isFinite(e.contractId) && e.contractId > 0);
        this.employeesLoading = false;
      },
      error: () => {
        this.employeesLoading = false;
      }
    });
    this.form.valueChanges.subscribe(() => {
      if (this.submitError)
        this.submitError = "";
    });
  }
  close() {
    this.dialogRef.close();
  }
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  onSubmit() {
    this.submitError = "";
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { contractId, paymentType, amount, currency, description } = this.form.getRawValue();
    const contractIdNum = Number(contractId);
    if (!Number.isFinite(contractIdNum) || contractIdNum <= 0) {
      this.form.get("contractId")?.markAsTouched();
      this.submitError = "salary.errors.invalidEmployee";
      return;
    }
    const selectedEmployee = this.employees.find((e) => e.contractId === contractIdNum);
    const employeeId = selectedEmployee?.employeeId ?? "";
    if (!employeeId) {
      this.submitError = "salary.errors.invalidEmployee";
      return;
    }
    this.isSubmitting = true;
    this.submitError = "";
    this.salaryService.paySalary({
      contractId: contractIdNum,
      employeeId,
      amount: amount ?? 0,
      currency: currency || "SAR",
      paymentType,
      description: description || void 0
    }).subscribe({
      next: () => this.dialogRef.close({ refresh: true }),
      error: () => {
        this.isSubmitting = false;
        this.submitError = "salary.errors.paySalary";
      }
    });
  }
};
_PaySalaryDialogComponent.\u0275fac = function PaySalaryDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaySalaryDialogComponent)();
};
_PaySalaryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaySalaryDialogComponent, selectors: [["app-pay-salary-dialog"]], decls: 51, vars: 51, consts: [[1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["d", "M2 2l14 14M16 2L2 16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["novalidate", "", 1, "dialog-body", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "contractId", 1, "field-label"], ["aria-hidden", "true", 1, "required"], [1, "loading-row"], ["id", "contractId", "formControlName", "contractId", 1, "field-select"], ["role", "alert", 1, "field-error"], ["for", "paymentType", 1, "field-label"], ["id", "paymentType", "formControlName", "paymentType", 1, "field-select"], ["value", "", "disabled", ""], [3, "value"], ["for", "amount", 1, "field-label"], ["id", "amount", "type", "number", "formControlName", "amount", "min", "0", "step", "0.01", 1, "field-input", 3, "placeholder"], ["role", "alert", 1, "form-level-error"], [1, "dialog-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "spinner"], ["disabled", "", 3, "ngValue"], [3, "ngValue"]], template: function PaySalaryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function PaySalaryDialogComponent_Template_button_click_5_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 4);
    \u0275\u0275element(8, "path", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 6);
    \u0275\u0275listener("ngSubmit", function PaySalaryDialogComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, PaySalaryDialogComponent_Conditional_16_Template, 3, 3, "div", 10)(17, PaySalaryDialogComponent_Conditional_17_Template, 6, 6, "select", 11);
    \u0275\u0275conditionalCreate(18, PaySalaryDialogComponent_Conditional_18_Template, 4, 6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7)(20, "label", 13);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementStart(23, "span", 9);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 14)(26, "option", 15);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, PaySalaryDialogComponent_For_30_Template, 3, 4, "option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, PaySalaryDialogComponent_Conditional_31_Template, 4, 6, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 7)(33, "label", 17);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, PaySalaryDialogComponent_Conditional_39_Template, 3, 3, "p", 19);
    \u0275\u0275elementStart(40, "div", 20)(41, "button", 21);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275listener("click", function PaySalaryDialogComponent_Template_button_click_41_listener() {
      return ctx.close();
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 22);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275conditionalCreate(47, PaySalaryDialogComponent_Conditional_47_Template, 1, 0, "span", 23);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 25, "salary.dialog.paySalaryTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 27, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx.fieldInvalid("contractId"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 29, "salary.form.employee"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.employeesLoading ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("contractId") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx.fieldInvalid("paymentType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 31, "salary.form.paymentType"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx.fieldInvalid("paymentType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 33, "salary.form.paymentType"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.paymentTypeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("paymentType") ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 35, "salary.form.amountOptional"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 37, "salary.form.amountOptional"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 39, "salary.form.amountOptional"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.submitError ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 41, "hr.actions.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 43, "hr.actions.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 45, "salary.actions.paySalary"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isSubmitting ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? \u0275\u0275pipeBind1(49, 47, "common.loading") : \u0275\u0275pipeBind1(50, 49, "salary.actions.paySalary"), " ");
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatDialogModule, TranslocoModule, TranslocoPipe], styles: [`

.dialog-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: var(--radius-12);
  overflow: hidden;
}
.dialog-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-medium-lg) var(--spacing-medium-xl) var(--spacing-medium-md);
  border-bottom: 1px solid var(--ui-border);
  flex-shrink: 0;
}
.dialog-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  letter-spacing: -0.2px;
}
.close-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--radius-8);
  background: none;
  color: var(--ui-text-muted);
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
  flex-shrink: 0;
}
.close-btn[_ngcontent-%COMP%]:hover {
  background-color: var(--ui-bg-subtle);
  color: var(--ui-text-main);
}
.dialog-body[_ngcontent-%COMP%] {
  padding: var(--spacing-medium-lg) var(--spacing-medium-xl) var(--spacing-medium-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium-lg);
}
.form-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small-xxs);
}
.field-label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-main);
}
.required[_ngcontent-%COMP%] {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.field-select[_ngcontent-%COMP%], 
.field-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-size: 14px;
  color: var(--ui-text-main);
  background-color: var(--ui-bg-surface);
  transition: border-color 0.15s, box-shadow 0.15s;
  font-family: inherit;
}
.field-select[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: inset-inline-end 12px center;
  padding-inline-end: 32px;
  cursor: pointer;
}
.field-select[_ngcontent-%COMP%]:focus, 
.field-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-500);
  box-shadow: 0 0 0 3px var(--brand-primary-100);
}
.field-select[_ngcontent-%COMP%]::placeholder, 
.field-input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
.form-field.has-error[_ngcontent-%COMP%]   .field-select[_ngcontent-%COMP%], 
.form-field.has-error[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {
  border-color: var(--functional-danger-500);
}
.form-field.has-error[_ngcontent-%COMP%]   .field-select[_ngcontent-%COMP%]:focus, 
.form-field.has-error[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-danger-500);
  box-shadow: 0 0 0 3px var(--functional-danger-50);
}
.field-error[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--functional-danger-600);
  margin-block-start: var(--spacing-small-xxxs);
}
.form-level-error[_ngcontent-%COMP%] {
  margin: 0;
  padding: var(--spacing-small-xs) var(--spacing-medium-md);
  border-radius: var(--radius-8);
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
  font-size: 13px;
  border: 1px solid var(--functional-danger-200);
}
.loading-row[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  padding: 10px 0;
}
.dialog-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-small-xs);
  padding-top: var(--spacing-small-xxxs);
}
.btn-secondary[_ngcontent-%COMP%] {
  padding: 10px 18px;
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--ui-text-main);
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: var(--ui-bg-subtle);
  border-color: var(--ui-border-secondary);
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-small-xs);
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-8);
  background-color: var(--brand-neutral-950);
  color: var(--ui-bg-surface);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s, background-color 0.15s;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  opacity: 0.88;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: var(--ui-border-secondary);
  color: var(--ui-text-muted);
  opacity: 1;
  cursor: not-allowed;
}
.spinner[_ngcontent-%COMP%] {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid color-mix(in srgb, var(--ui-bg-surface) 35%, transparent);
  border-top-color: var(--ui-bg-surface);
  border-radius: var(--radius-full);
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 520px) {
  .dialog-container[_ngcontent-%COMP%] {
    width: 100%;
  }
  .dialog-footer[_ngcontent-%COMP%] {
    flex-direction: column-reverse;
    align-items: stretch;
  }
  .btn-primary[_ngcontent-%COMP%], 
   .btn-secondary[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
/*# sourceMappingURL=pay-salary-dialog.css.map */`] });
var PaySalaryDialogComponent = _PaySalaryDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaySalaryDialogComponent, [{
    type: Component,
    args: [{ selector: "app-pay-salary-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, MatDialogModule, TranslocoModule], template: `<div class="dialog-container">

  <!-- Header -->
  <div class="dialog-header">
    <h2 class="dialog-title">{{ 'salary.dialog.paySalaryTitle' | transloco }}</h2>
    <button class="close-btn" (click)="close()"
            [attr.aria-label]="'common.close' | transloco">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Form -->
  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="dialog-body" novalidate>

    <!-- Employee select -->
    <div class="form-field" [class.has-error]="fieldInvalid('contractId')">
      <label for="contractId" class="field-label">
        {{ 'salary.form.employee' | transloco }}
        <span class="required" aria-hidden="true">*</span>
      </label>
      @if (employeesLoading) {
        <div class="loading-row">{{ 'common.loading' | transloco }}</div>
      } @else {
        <select id="contractId" formControlName="contractId" class="field-select"
                [attr.aria-required]="true"
                [attr.aria-invalid]="fieldInvalid('contractId')">
          <option [ngValue]="0" disabled>{{ 'salary.form.employee' | transloco }}</option>
          @for (emp of employees; track emp.contractId) {
            <option [ngValue]="emp.contractId">{{ emp.employeeName }}</option>
          }
        </select>
      }
      @if (fieldInvalid('contractId')) {
        <span class="field-error" role="alert">
          {{ 'salary.form.employee' | transloco }} {{ 'common.isRequired' | transloco }}
        </span>
      }
    </div>

    <!-- Payment Type -->
    <div class="form-field" [class.has-error]="fieldInvalid('paymentType')">
      <label for="paymentType" class="field-label">
        {{ 'salary.form.paymentType' | transloco }}
        <span class="required" aria-hidden="true">*</span>
      </label>
      <select id="paymentType" formControlName="paymentType" class="field-select"
              [attr.aria-required]="true"
              [attr.aria-invalid]="fieldInvalid('paymentType')">
        <option value="" disabled>{{ 'salary.form.paymentType' | transloco }}</option>
        @for (opt of paymentTypeOptions; track opt.value) {
          <option [value]="opt.value">{{ opt.labelKey | transloco }}</option>
        }
      </select>
      @if (fieldInvalid('paymentType')) {
        <span class="field-error" role="alert">
          {{ 'salary.form.paymentType' | transloco }} {{ 'common.isRequired' | transloco }}
        </span>
      }
    </div>

    <!-- Amount (optional) -->
    <div class="form-field">
      <label for="amount" class="field-label">
        {{ 'salary.form.amountOptional' | transloco }}
      </label>
      <input id="amount" type="number" formControlName="amount" class="field-input"
             min="0" step="0.01"
             [placeholder]="'salary.form.amountOptional' | transloco"
             [attr.aria-label]="'salary.form.amountOptional' | transloco">
    </div>

    <!-- Submit error -->
    @if (submitError) {
      <p class="form-level-error" role="alert">{{ submitError | transloco }}</p>
    }

    <!-- Footer -->
    <div class="dialog-footer">
      <button type="button" class="btn-secondary" (click)="close()"
              [attr.aria-label]="'hr.actions.cancel' | transloco">
        {{ 'hr.actions.cancel' | transloco }}
      </button>
      <button type="submit" class="btn-primary" [disabled]="isSubmitting"
              [attr.aria-label]="'salary.actions.paySalary' | transloco">
        @if (isSubmitting) {
          <span class="spinner" aria-hidden="true"></span>
        }
        {{ isSubmitting ? ('common.loading' | transloco) : ('salary.actions.paySalary' | transloco) }}
      </button>
    </div>

  </form>

</div>
`, styles: [`/* src/components/DashboardLayout/Salary/pay-salary-dialog/pay-salary-dialog.css */
.dialog-container {
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: var(--radius-12);
  overflow: hidden;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-medium-lg) var(--spacing-medium-xl) var(--spacing-medium-md);
  border-bottom: 1px solid var(--ui-border);
  flex-shrink: 0;
}
.dialog-title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  letter-spacing: -0.2px;
}
.close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--radius-8);
  background: none;
  color: var(--ui-text-muted);
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
  flex-shrink: 0;
}
.close-btn:hover {
  background-color: var(--ui-bg-subtle);
  color: var(--ui-text-main);
}
.dialog-body {
  padding: var(--spacing-medium-lg) var(--spacing-medium-xl) var(--spacing-medium-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium-lg);
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small-xxs);
}
.field-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-main);
}
.required {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.field-select,
.field-input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-size: 14px;
  color: var(--ui-text-main);
  background-color: var(--ui-bg-surface);
  transition: border-color 0.15s, box-shadow 0.15s;
  font-family: inherit;
}
.field-select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: inset-inline-end 12px center;
  padding-inline-end: 32px;
  cursor: pointer;
}
.field-select:focus,
.field-input:focus {
  outline: none;
  border-color: var(--brand-primary-500);
  box-shadow: 0 0 0 3px var(--brand-primary-100);
}
.field-select::placeholder,
.field-input::placeholder {
  color: var(--ui-text-muted);
}
.form-field.has-error .field-select,
.form-field.has-error .field-input {
  border-color: var(--functional-danger-500);
}
.form-field.has-error .field-select:focus,
.form-field.has-error .field-input:focus {
  border-color: var(--functional-danger-500);
  box-shadow: 0 0 0 3px var(--functional-danger-50);
}
.field-error {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--functional-danger-600);
  margin-block-start: var(--spacing-small-xxxs);
}
.form-level-error {
  margin: 0;
  padding: var(--spacing-small-xs) var(--spacing-medium-md);
  border-radius: var(--radius-8);
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
  font-size: 13px;
  border: 1px solid var(--functional-danger-200);
}
.loading-row {
  font-size: 13px;
  color: var(--ui-text-muted);
  padding: 10px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-small-xs);
  padding-top: var(--spacing-small-xxxs);
}
.btn-secondary {
  padding: 10px 18px;
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--ui-text-main);
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
}
.btn-secondary:hover {
  background-color: var(--ui-bg-subtle);
  border-color: var(--ui-border-secondary);
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-small-xs);
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-8);
  background-color: var(--brand-neutral-950);
  color: var(--ui-bg-surface);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s, background-color 0.15s;
}
.btn-primary:hover:not(:disabled) {
  opacity: 0.88;
}
.btn-primary:disabled {
  background-color: var(--ui-border-secondary);
  color: var(--ui-text-muted);
  opacity: 1;
  cursor: not-allowed;
}
.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid color-mix(in srgb, var(--ui-bg-surface) 35%, transparent);
  border-top-color: var(--ui-bg-surface);
  border-radius: var(--radius-full);
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 520px) {
  .dialog-container {
    width: 100%;
  }
  .dialog-footer {
    flex-direction: column-reverse;
    align-items: stretch;
  }
  .btn-primary,
  .btn-secondary {
    justify-content: center;
  }
}
/*# sourceMappingURL=pay-salary-dialog.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaySalaryDialogComponent, { className: "PaySalaryDialogComponent", filePath: "src/components/dashboardlayout/salary/pay-salary-dialog/pay-salary-dialog.ts", lineNumber: 18 });
})();

// src/components/DashboardLayout/Salary/salary-page/salary-page.ts
var _forTrack02 = ($index, $item) => $item.id;
function SalaryPageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function SalaryPageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPaySalaryDialog());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "salary.actions.paySalary"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "salary.actions.paySalary"), " ");
  }
}
function SalaryPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.historyEntries.length);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "common.loading"), " ");
  }
}
function SalaryPageComponent_Conditional_14_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function SalaryPageComponent_Conditional_14_Conditional_0_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadCompanyBalance());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "salary.errors.loadBalance"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "common.retry"), " ");
  }
}
function SalaryPageComponent_Conditional_14_Conditional_0_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.companyBalance.currency);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SalaryPageComponent_Conditional_14_Conditional_0_Conditional_2_Conditional_8_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "salary.balance.currentBalance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, ctx_r1.companyBalance.currentBalance, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.companyBalance.currency ? 8 : -1);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalaryPageComponent_Conditional_14_Conditional_0_Conditional_0_Template, 4, 3, "div", 10)(1, SalaryPageComponent_Conditional_14_Conditional_0_Conditional_1_Template, 7, 9, "div", 11)(2, SalaryPageComponent_Conditional_14_Conditional_0_Conditional_2_Template, 9, 8, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.balanceLoading ? 0 : ctx_r1.balanceError ? 1 : ctx_r1.companyBalance ? 2 : -1);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "common.loading"), " ");
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadEmployeeSalary());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "salary.errors.loadSalary"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "common.retry"), " ");
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "salary.employeeSalary.contractType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.employeeSalary.contractType);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "salary.employeeSalary.currency"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.employeeSalary.currency);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Conditional_13_Template, 6, 4, "div", 23);
    \u0275\u0275conditionalCreate(14, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Conditional_14_Template, 6, 4, "div", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "salary.employeeSalary.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "salary.table.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.employeeSalary.salary, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.employeeSalary.contractType ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.employeeSalary.currency ? 14 : -1);
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "salary.emptyState.noSalary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "salary.emptyState.noSalaryDesc"));
  }
}
function SalaryPageComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_0_Template, 4, 3, "div", 10)(1, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_1_Template, 7, 9, "div", 11)(2, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_2_Template, 15, 12, "div", 12)(3, SalaryPageComponent_Conditional_14_Conditional_1_Conditional_3_Template, 7, 6, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.salaryLoading ? 0 : ctx_r1.salaryError ? 1 : ctx_r1.employeeSalary ? 2 : 3);
  }
}
function SalaryPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalaryPageComponent_Conditional_14_Conditional_0_Template, 3, 1);
    \u0275\u0275conditionalCreate(1, SalaryPageComponent_Conditional_14_Conditional_1_Template, 4, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isBusiness ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isBusiness ? 1 : -1);
  }
}
function SalaryPageComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "common.loading"), " ");
  }
}
function SalaryPageComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function SalaryPageComponent_Conditional_15_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadHistory());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "salary.errors.loadHistory"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "common.retry"), " ");
  }
}
function SalaryPageComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "salary.emptyState.noHistory"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "salary.emptyState.noHistoryDesc"));
  }
}
function SalaryPageComponent_Conditional_15_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "salary.table.employee"));
  }
}
function SalaryPageComponent_Conditional_15_Conditional_3_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(entry_r6.employeeName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.employeeName);
  }
}
function SalaryPageComponent_Conditional_15_Conditional_3_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, SalaryPageComponent_Conditional_15_Conditional_3_For_19_Conditional_1_Template, 6, 2, "td");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 28);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 30);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBusiness && entry_r6.employeeName ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, ctx_r1.getPaymentTypeKey(entry_r6.paymentType)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, entry_r6.amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getPaymentStatusClass(entry_r6.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, ctx_r1.getPaymentStatusKey(entry_r6.paymentStatus)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 13, entry_r6.paidAt || entry_r6.createdAt, "mediumDate"), " ");
  }
}
function SalaryPageComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, SalaryPageComponent_Conditional_15_Conditional_3_Conditional_4_Template, 3, 3, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, SalaryPageComponent_Conditional_15_Conditional_3_For_19_Template, 15, 16, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isBusiness ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "salary.table.paymentType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "salary.table.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "salary.table.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "salary.table.date"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.historyEntries);
  }
}
function SalaryPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalaryPageComponent_Conditional_15_Conditional_0_Template, 4, 3, "div", 10)(1, SalaryPageComponent_Conditional_15_Conditional_1_Template, 7, 9, "div", 11)(2, SalaryPageComponent_Conditional_15_Conditional_2_Template, 7, 6, "div", 19)(3, SalaryPageComponent_Conditional_15_Conditional_3_Template, 20, 13, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.historyLoading ? 0 : ctx_r1.historyError ? 1 : !ctx_r1.historyEntries.length ? 2 : 3);
  }
}
var _SalaryPageComponent = class _SalaryPageComponent {
  constructor() {
    this.salaryService = inject(SalaryService);
    this.dialog = inject(MatDialog);
    this.cdr = inject(ChangeDetectorRef);
    this.activeTab = "overview";
    this.authService = inject(AuthService);
    this.tokenService = inject(TokenService);
    this.userTypeId = this.authService.getUserTypeId() ?? 0;
    this.companyId = Number(this.tokenService.getCompanyId() ?? 0);
    this.userId = this.tokenService.getUserId() ?? localStorage.getItem("userId") ?? "";
    this.companyBalance = null;
    this.balanceLoading = true;
    this.balanceError = false;
    this.employeeSalary = null;
    this.salaryLoading = true;
    this.salaryError = false;
    this.historyEntries = [];
    this.historyLoading = false;
    this.historyError = false;
    this.historyLoaded = false;
  }
  get isBusiness() {
    return this.userTypeId === 3;
  }
  // ── Lifecycle ───────────────────────────────────────────────
  ngOnInit() {
    if (this.isBusiness) {
      this.loadCompanyBalance();
    } else {
      this.loadEmployeeSalary();
    }
  }
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "history" && !this.historyLoaded)
      this.loadHistory();
  }
  // ── Data loaders ────────────────────────────────────────────
  loadCompanyBalance() {
    if (!this.companyId) {
      this.balanceLoading = false;
      this.cdr.detectChanges();
      return;
    }
    this.balanceLoading = true;
    this.balanceError = false;
    this.salaryService.getCompanyBalance(this.companyId).subscribe({
      next: (bal) => {
        this.companyBalance = bal;
        this.balanceLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.balanceLoading = false;
        this.balanceError = true;
        this.cdr.detectChanges();
      }
    });
  }
  loadEmployeeSalary() {
    if (!this.userId) {
      this.salaryLoading = false;
      this.cdr.detectChanges();
      return;
    }
    this.salaryLoading = true;
    this.salaryError = false;
    this.salaryService.getEmployeeSalary(this.userId).subscribe({
      next: (sal) => {
        this.employeeSalary = sal;
        this.salaryLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.salaryLoading = false;
        this.salaryError = true;
        this.cdr.detectChanges();
      }
    });
  }
  loadHistory() {
    this.historyLoading = true;
    this.historyError = false;
    const obs$ = this.isBusiness ? this.salaryService.getCompanyPaymentHistory(this.companyId) : this.salaryService.getEmployeeSalaryHistory(this.userId);
    obs$.subscribe({
      next: (entries) => {
        this.historyEntries = entries;
        this.historyLoading = false;
        this.historyLoaded = true;
        this.cdr.detectChanges();
      },
      error: () => {
        this.historyLoading = false;
        this.historyError = true;
        this.cdr.detectChanges();
      }
    });
  }
  // ── Dialog actions ───────────────────────────────────────────
  openPaySalaryDialog() {
    const ref = this.dialog.open(PaySalaryDialogComponent, { width: "480px", data: {} });
    ref.afterClosed().subscribe((res) => {
      if (res?.refresh) {
        this.loadCompanyBalance();
        if (this.historyLoaded)
          this.loadHistory();
      }
    });
  }
  // ── Helpers ──────────────────────────────────────────────────
  getPaymentStatusClass(status) {
    return status === "paid" ? "status-paid" : "status-pending-payment";
  }
  getPaymentStatusKey(status) {
    return status === "paid" ? "salary.status.paid" : "salary.status.pending";
  }
  getPaymentTypeKey(type) {
    const map = {
      salary: "salary.paymentTypes.salary",
      firstPatch: "salary.paymentTypes.firstPatch",
      lastPatch: "salary.paymentTypes.lastPatch",
      task: "salary.paymentTypes.task",
      stage: "salary.paymentTypes.stage",
      balance_recharge: "salary.paymentTypes.balance_recharge",
      subscription: "salary.paymentTypes.subscription",
      registration: "salary.paymentTypes.registration"
    };
    return map[type] ?? type;
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
};
_SalaryPageComponent.\u0275fac = function SalaryPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SalaryPageComponent)();
};
_SalaryPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalaryPageComponent, selectors: [["app-salary-page"]], decls: 16, vars: 19, consts: [[1, "page-container", "salary-page"], [1, "page-header"], [1, "page-title"], [1, "action-btn"], ["role", "tablist", 1, "tabs-container"], ["role", "tab", 1, "tab-item", 3, "click"], [1, "tab-badge"], [1, "action-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["d", "M8 1v14M1 8h14", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["role", "status", 1, "loading-spinner"], ["role", "alert", 1, "error-state"], [1, "overview-grid"], ["aria-hidden", "true", 1, "spinner-lg"], [1, "retry-btn", 3, "click"], [1, "card", "balance-card"], [1, "balance-label"], [1, "balance-amount"], [1, "balance-currency"], [1, "empty-state"], [1, "card", "salary-card"], [1, "salary-card-label"], [1, "salary-info-rows"], [1, "salary-info-row"], [1, "info-label"], [1, "info-value"], [1, "table-container"], [1, "salary-table"], [1, "amount-cell"], [1, "status-badge", 3, "ngClass"], [1, "date-cell"], [1, "employee-cell"], [1, "avatar-badge"], [1, "employee-name"]], template: function SalaryPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SalaryPageComponent_Conditional_5_Template, 6, 6, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
    \u0275\u0275listener("click", function SalaryPageComponent_Template_button_click_7_listener() {
      return ctx.switchTab("overview");
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function SalaryPageComponent_Template_button_click_10_listener() {
      return ctx.switchTab("history");
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275conditionalCreate(13, SalaryPageComponent_Conditional_13_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, SalaryPageComponent_Conditional_14_Template, 2, 2);
    \u0275\u0275conditionalCreate(15, SalaryPageComponent_Conditional_15_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "salary.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isBusiness && ctx.activeTab === "overview" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeTab === "overview");
    \u0275\u0275attribute("aria-selected", ctx.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "salary.tabs.overview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeTab === "history");
    \u0275\u0275attribute("aria-selected", ctx.activeTab === "history");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "salary.tabs.history"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.historyEntries.length ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab === "overview" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab === "history" ? 15 : -1);
  }
}, dependencies: [CommonModule, NgClass, TranslocoModule, DecimalPipe, DatePipe, TranslocoPipe], styles: ['\n\n.salary-page[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-medium-xl);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 10px 20px;\n  background-color: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.tab-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 10px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  white-space: nowrap;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: var(--brand-neutral-400);\n}\n.tab-item.active[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-900);\n  font-weight: 600;\n}\n.tab-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  inset-inline-start: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--brand-primary-500);\n  border-radius: 1px;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background-color: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  border-radius: var(--radius-full);\n  font-size: 11px;\n  font-weight: 600;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 24px;\n  font-size: 14px;\n  color: var(--brand-neutral-400);\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--brand-neutral-200);\n  border-top-color: var(--brand-primary-500);\n  border-radius: var(--radius-full);\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  background: none;\n  font-size: 13px;\n  color: var(--brand-neutral-800);\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-50);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  background-color: var(--brand-neutral-50);\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--brand-neutral-400);\n  margin: 0;\n  max-width: 360px;\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.balance-card[_ngcontent-%COMP%], \n.salary-card[_ngcontent-%COMP%] {\n  padding: var(--spacing-medium-xl);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n}\n.balance-label[_ngcontent-%COMP%], \n.salary-card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-400);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--brand-neutral-900);\n  line-height: 1.1;\n}\n.balance-currency[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--brand-neutral-400);\n}\n.salary-info-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 8px;\n}\n.salary-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.info-label[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-900);\n  font-weight: 600;\n}\n.salary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: var(--ui-bg-surface);\n}\n.salary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.salary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n}\n.salary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background-color: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.salary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--brand-neutral-100);\n  transition: background-color 0.15s;\n}\n.salary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.salary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-50);\n}\n.salary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-800);\n  vertical-align: middle;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  white-space: nowrap;\n}\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  background-color: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--brand-neutral-900);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-pending[_ngcontent-%COMP%], \n.status-pending-payment[_ngcontent-%COMP%] {\n  background-color: var(--functional-warning-50);\n  color: var(--functional-warning-600);\n}\n.status-approved[_ngcontent-%COMP%], \n.status-paid[_ngcontent-%COMP%] {\n  background-color: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: none;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  color: var(--brand-neutral-400);\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.approve-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.reject-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-500);\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-medium-lg);\n  }\n  .tabs-container[_ngcontent-%COMP%] {\n    gap: var(--spacing-medium-lg);\n    overflow-x: auto;\n  }\n  .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=salary-page.css.map */'] });
var SalaryPageComponent = _SalaryPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalaryPageComponent, [{
    type: Component,
    args: [{ selector: "app-salary-page", standalone: true, imports: [CommonModule, TranslocoModule], template: `<div class="page-container salary-page">

  <!-- \u2500\u2500 Page Header \u2500\u2500 -->
  <div class="page-header">
    <h1 class="page-title">{{ 'salary.title' | transloco }}</h1>

    @if (isBusiness && activeTab === 'overview') {
      <button class="action-btn" (click)="openPaySalaryDialog()"
              [attr.aria-label]="'salary.actions.paySalary' | transloco">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        {{ 'salary.actions.paySalary' | transloco }}
      </button>
    }

  </div>

  <!-- \u2500\u2500 Tabs \u2500\u2500 -->
  <div class="tabs-container" role="tablist">
    <button class="tab-item" role="tab"
            [class.active]="activeTab === 'overview'"
            [attr.aria-selected]="activeTab === 'overview'"
            (click)="switchTab('overview')">
      {{ 'salary.tabs.overview' | transloco }}
    </button>
    <button class="tab-item" role="tab"
            [class.active]="activeTab === 'history'"
            [attr.aria-selected]="activeTab === 'history'"
            (click)="switchTab('history')">
      {{ 'salary.tabs.history' | transloco }}
      @if (historyEntries.length) {
        <span class="tab-badge">{{ historyEntries.length }}</span>
      }
    </button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       OVERVIEW TAB
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'overview') {

    <!-- Business: Company Balance -->
    @if (isBusiness) {
      @if (balanceLoading) {
        <div class="loading-spinner" role="status">
          <span class="spinner-lg" aria-hidden="true"></span>
          {{ 'common.loading' | transloco }}
        </div>
      } @else if (balanceError) {
        <div class="error-state" role="alert">
          {{ 'salary.errors.loadBalance' | transloco }}
          <button class="retry-btn" (click)="loadCompanyBalance()"
                  [attr.aria-label]="'common.retry' | transloco">
            {{ 'common.retry' | transloco }}
          </button>
        </div>
      } @else if (companyBalance) {
        <div class="overview-grid">
          <div class="card balance-card">
            <span class="balance-label">{{ 'salary.balance.currentBalance' | transloco }}</span>
            <span class="balance-amount">{{ companyBalance.currentBalance | number:'1.2-2' }}</span>
            @if (companyBalance.currency) {
              <span class="balance-currency">{{ companyBalance.currency }}</span>
            }
          </div>
        </div>
      }
    }

    <!-- Employee/Contractor: Salary Card -->
    @if (!isBusiness) {
      @if (salaryLoading) {
        <div class="loading-spinner" role="status">
          <span class="spinner-lg" aria-hidden="true"></span>
          {{ 'common.loading' | transloco }}
        </div>
      } @else if (salaryError) {
        <div class="error-state" role="alert">
          {{ 'salary.errors.loadSalary' | transloco }}
          <button class="retry-btn" (click)="loadEmployeeSalary()"
                  [attr.aria-label]="'common.retry' | transloco">
            {{ 'common.retry' | transloco }}
          </button>
        </div>
      } @else if (employeeSalary) {
        <div class="overview-grid">
          <div class="card salary-card">
            <span class="salary-card-label">{{ 'salary.employeeSalary.title' | transloco }}</span>
            <div class="salary-info-rows">
              <div class="salary-info-row">
                <span class="info-label">{{ 'salary.table.amount' | transloco }}</span>
                <span class="info-value">{{ employeeSalary.salary | number:'1.2-2' }}</span>
              </div>
              @if (employeeSalary.contractType) {
                <div class="salary-info-row">
                  <span class="info-label">{{ 'salary.employeeSalary.contractType' | transloco }}</span>
                  <span class="info-value">{{ employeeSalary.contractType }}</span>
                </div>
              }
              @if (employeeSalary.currency) {
                <div class="salary-info-row">
                  <span class="info-label">{{ 'salary.employeeSalary.currency' | transloco }}</span>
                  <span class="info-value">{{ employeeSalary.currency }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      } @else {
        <div class="empty-state">
          <h2>{{ 'salary.emptyState.noSalary' | transloco }}</h2>
          <p>{{ 'salary.emptyState.noSalaryDesc' | transloco }}</p>
        </div>
      }
    }

  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       HISTORY TAB
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'history') {

    @if (historyLoading) {
      <div class="loading-spinner" role="status">
        <span class="spinner-lg" aria-hidden="true"></span>
        {{ 'common.loading' | transloco }}
      </div>
    } @else if (historyError) {
      <div class="error-state" role="alert">
        {{ 'salary.errors.loadHistory' | transloco }}
        <button class="retry-btn" (click)="loadHistory()"
                [attr.aria-label]="'common.retry' | transloco">
          {{ 'common.retry' | transloco }}
        </button>
      </div>
    } @else if (!historyEntries.length) {
      <div class="empty-state">
        <h2>{{ 'salary.emptyState.noHistory' | transloco }}</h2>
        <p>{{ 'salary.emptyState.noHistoryDesc' | transloco }}</p>
      </div>
    } @else {
      <div class="table-container">
        <table class="salary-table">
          <thead>
            <tr>
              @if (isBusiness) {
                <th>{{ 'salary.table.employee' | transloco }}</th>
              }
              <th>{{ 'salary.table.paymentType' | transloco }}</th>
              <th>{{ 'salary.table.amount' | transloco }}</th>
              <th>{{ 'salary.table.status' | transloco }}</th>
              <th>{{ 'salary.table.date' | transloco }}</th>
            </tr>
          </thead>
          <tbody>
            @for (entry of historyEntries; track entry.id) {
              <tr>
                @if (isBusiness && entry.employeeName) {
                  <td>
                    <div class="employee-cell">
                      <span class="avatar-badge">{{ getInitials(entry.employeeName) }}</span>
                      <span class="employee-name">{{ entry.employeeName }}</span>
                    </div>
                  </td>
                }
                <td>{{ getPaymentTypeKey(entry.paymentType) | transloco }}</td>
                <td class="amount-cell">{{ entry.amount | number:'1.2-2' }}</td>
                <td>
                  <span class="status-badge" [ngClass]="getPaymentStatusClass(entry.paymentStatus)">
                    {{ getPaymentStatusKey(entry.paymentStatus) | transloco }}
                  </span>
                </td>
                <td class="date-cell">
                  {{ (entry.paidAt || entry.createdAt) | date:'mediumDate' }}
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

  }


</div>
`, styles: ['/* src/components/DashboardLayout/Salary/salary-page/salary-page.css */\n.salary-page {\n  gap: 0;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-medium-xl);\n}\n.page-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 10px 20px;\n  background-color: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.action-btn:hover {\n  opacity: 0.88;\n}\n.tabs-container {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.tab-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 10px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  white-space: nowrap;\n}\n.tab-item:hover {\n  color: var(--brand-neutral-400);\n}\n.tab-item.active {\n  color: var(--brand-neutral-900);\n  font-weight: 600;\n}\n.tab-item.active::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  inset-inline-start: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--brand-primary-500);\n  border-radius: 1px;\n}\n.tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background-color: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  border-radius: var(--radius-full);\n  font-size: 11px;\n  font-weight: 600;\n}\n.loading-spinner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 24px;\n  font-size: 14px;\n  color: var(--brand-neutral-400);\n}\n.spinner-lg {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--brand-neutral-200);\n  border-top-color: var(--brand-primary-500);\n  border-radius: var(--radius-full);\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n}\n.retry-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  background: none;\n  font-size: 13px;\n  color: var(--brand-neutral-800);\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.retry-btn:hover {\n  background-color: var(--brand-neutral-50);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  background-color: var(--brand-neutral-50);\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n}\n.empty-state h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n  margin: 0;\n}\n.empty-state p {\n  font-size: 14px;\n  color: var(--brand-neutral-400);\n  margin: 0;\n  max-width: 360px;\n}\n.overview-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.balance-card,\n.salary-card {\n  padding: var(--spacing-medium-xl);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n}\n.balance-label,\n.salary-card-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-400);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.balance-amount {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--brand-neutral-900);\n  line-height: 1.1;\n}\n.balance-currency {\n  font-size: 13px;\n  color: var(--brand-neutral-400);\n}\n.salary-info-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 8px;\n}\n.salary-info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n}\n.info-label {\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.info-value {\n  color: var(--brand-neutral-900);\n  font-weight: 600;\n}\n.salary-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: var(--ui-bg-surface);\n}\n.salary-table th,\n.salary-table td {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n}\n.salary-table th {\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background-color: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n.salary-table tbody tr {\n  border-bottom: 1px solid var(--brand-neutral-100);\n  transition: background-color 0.15s;\n}\n.salary-table tbody tr:last-child {\n  border-bottom: none;\n}\n.salary-table tbody tr:hover {\n  background-color: var(--brand-neutral-50);\n}\n.salary-table td {\n  color: var(--brand-neutral-800);\n  vertical-align: middle;\n}\n.amount-cell {\n  font-weight: 600;\n  color: var(--brand-neutral-900);\n}\n.date-cell {\n  color: var(--brand-neutral-400);\n  white-space: nowrap;\n}\n.reason-cell {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  background-color: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.employee-name {\n  font-weight: 500;\n  color: var(--brand-neutral-900);\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-pending,\n.status-pending-payment {\n  background-color: var(--functional-warning-50);\n  color: var(--functional-warning-600);\n}\n.status-approved,\n.status-paid {\n  background-color: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.status-rejected {\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.action-btns {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: none;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  color: var(--brand-neutral-400);\n}\n.icon-btn:hover {\n  background-color: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.approve-btn:hover {\n  background-color: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.reject-btn:hover {\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-500);\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-medium-lg);\n  }\n  .tabs-container {\n    gap: var(--spacing-medium-lg);\n    overflow-x: auto;\n  }\n  .overview-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=salary-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalaryPageComponent, { className: "SalaryPageComponent", filePath: "src/components/dashboardlayout/salary/salary-page/salary-page.ts", lineNumber: 24 });
})();
export {
  SalaryPageComponent
};
//# sourceMappingURL=chunk-TMFBLQ2Z.js.map
