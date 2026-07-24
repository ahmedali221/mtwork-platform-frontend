import {
  takeUntilDestroyed
} from "./chunk-HHJMLLJ5.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-RILOBYFO.js";
import {
  CommonModule,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/form-input-component/form-input-component.ts
function FormInputComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function FormInputComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.label + "-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorText, " ");
  }
}
var _FormInputComponent = class _FormInputComponent {
  constructor() {
    this.label = "";
    this.placeholder = "";
    this.type = "text";
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
  // Getter to safely cast to FormControl for template usage
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
      required: `${this.label} is required`,
      email: "Please enter a valid email address",
      minlength: `Minimum length is ${this.errors["minlength"]?.requiredLength}`,
      maxlength: `Maximum length is ${this.errors["maxlength"]?.requiredLength}`,
      pattern: `Invalid format for ${this.label}`
    };
    return defaults[key] || `${this.label} is invalid`;
  }
};
_FormInputComponent.\u0275fac = function FormInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormInputComponent)();
};
_FormInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormInputComponent, selectors: [["app-form-input-component"]], inputs: { label: "label", placeholder: "placeholder", type: "type", control: "control", errorMessages: "errorMessages" }, decls: 6, vars: 12, consts: [[1, "form-group"], [3, "for"], ["class", "required-label", 4, "ngIf"], [3, "id", "type", "formControl", "placeholder"], ["class", "error-message text-danger", "role", "alert", 3, "id", 4, "ngIf"], [1, "required-label"], ["role", "alert", 1, "error-message", "text-danger", 3, "id"]], template: function FormInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
    \u0275\u0275text(2);
    \u0275\u0275template(3, FormInputComponent_span_3_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 3);
    \u0275\u0275template(5, FormInputComponent_div_5_Template, 2, 2, "div", 4);
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
    \u0275\u0275property("id", ctx.label)("type", ctx.type)("formControl", ctx.formControl)("placeholder", ctx.placeholder);
    \u0275\u0275attribute("aria-invalid", ctx.invalid)("aria-describedby", ctx.invalid ? ctx.label + "-error" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.invalid);
  }
}, dependencies: [CommonModule, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], styles: ["\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.required-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: rgba(252, 190, 4, 0.4);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--brand-grays-500);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 1px var(--landing-navbar-primary);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\ninput.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px var(--functional-danger-500);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=form-input-component.css.map */"], changeDetection: 0 });
var FormInputComponent = _FormInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInputComponent, [{
    type: Component,
    args: [{ selector: "app-form-input-component", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule], template: `<div class="form-group">
  <label [for]="label">
    {{ label }}
    <span *ngIf="required" class="required-label">Required</span>
  </label>

  <input
    [id]="label"
    [type]="type"
    [formControl]="formControl"
    [placeholder]="placeholder"
    [class.is-invalid]="invalid"
    [attr.aria-invalid]="invalid"
    [attr.aria-describedby]="invalid ? label + '-error' : null"
  />

  <div
    *ngIf="invalid"
    [id]="label + '-error'"
    class="error-message text-danger"
    role="alert">
    {{ errorText }}
  </div>
</div>`, styles: ["/* src/features/auth/CreateAccount/form-input-component/form-input-component.css */\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.required-label {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: rgba(252, 190, 4, 0.4);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\ninput {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--brand-grays-500);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\ninput:focus {\n  box-shadow: inset 0 0 0 1px var(--landing-navbar-primary);\n}\ninput::placeholder {\n  color: var(--brand-neutral-400);\n}\ninput.is-invalid {\n  box-shadow: inset 0 0 0 1px var(--functional-danger-500);\n}\n.error-message {\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=form-input-component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], type: [{
    type: Input
  }], control: [{
    type: Input
  }], errorMessages: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormInputComponent, { className: "FormInputComponent", filePath: "src/features/auth/createaccount/form-input-component/form-input-component.ts", lineNumber: 17 });
})();

export {
  FormInputComponent
};
//# sourceMappingURL=chunk-E7HIOBBH.js.map
