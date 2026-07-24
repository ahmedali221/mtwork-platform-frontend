import {
  takeUntilDestroyed
} from "./chunk-HHJMLLJ5.js";
import {
  FormControlDirective,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/form-select-component/form-select-component.ts
function FormSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function FormSelectComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r1.name);
  }
}
function FormSelectComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.label + "-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorText, " ");
  }
}
var _FormSelectComponent = class _FormSelectComponent {
  constructor() {
    this.label = "";
    this.placeholder = "Select\u2026";
    this.options = [];
    this.errorMessages = {};
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.touched = false;
    this.errors = null;
  }
  ngOnInit() {
    if (!this.control)
      return;
    this.control.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.errors = this.control.errors;
      this.touched = this.control.touched;
      this.cdr.markForCheck();
    });
  }
  get formControl() {
    return this.control;
  }
  get required() {
    const ctrl = this.control;
    if (!ctrl)
      return false;
    return !!ctrl.validator?.(ctrl)?.required;
  }
  get invalid() {
    return !!this.errors && this.touched;
  }
  get errorText() {
    if (!this.errors)
      return "";
    const key = Object.keys(this.errors)[0];
    if (this.errorMessages[key])
      return this.errorMessages[key];
    const defaults = {
      required: `${this.label} is required`
    };
    return defaults[key] || `${this.label} is invalid`;
  }
};
_FormSelectComponent.\u0275fac = function FormSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormSelectComponent)();
};
_FormSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSelectComponent, selectors: [["app-form-select-component"]], inputs: { label: "label", placeholder: "placeholder", control: "control", options: "options", errorMessages: "errorMessages" }, decls: 9, vars: 14, consts: [[1, "form-group"], [3, "for"], ["class", "required-label", 4, "ngIf"], [3, "id", "formControl"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "error-message text-danger", "role", "alert", 3, "id", 4, "ngIf"], [1, "required-label"], [3, "ngValue"], ["role", "alert", 1, "error-message", "text-danger", 3, "id"]], template: function FormSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
    \u0275\u0275text(2);
    \u0275\u0275template(3, FormSelectComponent_span_3_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 3)(5, "option", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FormSelectComponent_option_7_Template, 2, 2, "option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FormSelectComponent_div_8_Template, 2, 2, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.required);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx.invalid);
    \u0275\u0275property("id", ctx.label)("formControl", ctx.formControl);
    \u0275\u0275attribute("aria-label", ctx.label)("aria-invalid", ctx.invalid)("aria-describedby", ctx.invalid ? ctx.label + "-error" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.placeholder);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.options);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.invalid);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, FormControlDirective], styles: ["\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.required-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: rgba(252, 190, 4, 0.4);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--brand-grays-500);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\nselect[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 1px var(--landing-navbar-primary);\n}\nselect.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px var(--functional-danger-500);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=form-select-component.css.map */"], changeDetection: 0 });
var FormSelectComponent = _FormSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSelectComponent, [{
    type: Component,
    args: [{ selector: "app-form-select-component", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule], template: `<div class="form-group">
  <label [for]="label">
    {{ label }}
    <span *ngIf="required" class="required-label">Required</span>
  </label>

  <select
    [id]="label"
    [formControl]="formControl"
    [class.is-invalid]="invalid"
    [attr.aria-label]="label"
    [attr.aria-invalid]="invalid"
    [attr.aria-describedby]="invalid ? label + '-error' : null"
  >
    <option [ngValue]="null" disabled>{{ placeholder }}</option>
    <option *ngFor="let opt of options" [ngValue]="opt.id">{{ opt.name }}</option>
  </select>

  <div
    *ngIf="invalid"
    [id]="label + '-error'"
    class="error-message text-danger"
    role="alert">
    {{ errorText }}
  </div>
</div>
`, styles: ["/* src/features/auth/CreateAccount/form-select-component/form-select-component.css */\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.required-label {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: rgba(252, 190, 4, 0.4);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\nselect {\n  width: 100%;\n  height: 40px;\n  padding: 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--brand-grays-500);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\nselect:focus {\n  box-shadow: inset 0 0 0 1px var(--landing-navbar-primary);\n}\nselect.is-invalid {\n  box-shadow: inset 0 0 0 1px var(--functional-danger-500);\n}\n.error-message {\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=form-select-component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], control: [{
    type: Input
  }], options: [{
    type: Input
  }], errorMessages: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSelectComponent, { className: "FormSelectComponent", filePath: "src/features/auth/createaccount/form-select-component/form-select-component.ts", lineNumber: 18 });
})();

export {
  FormSelectComponent
};
//# sourceMappingURL=chunk-CKTFAXGQ.js.map
