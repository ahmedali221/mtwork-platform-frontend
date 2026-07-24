import {
  FormSelectComponent
} from "./chunk-CKTFAXGQ.js";
import {
  FormTextareaComponent
} from "./chunk-FKEPKOWL.js";
import {
  FormInputComponent
} from "./chunk-E7HIOBBH.js";
import {
  takeUntilDestroyed
} from "./chunk-HHJMLLJ5.js";
import {
  CustomValidators
} from "./chunk-UGR5L4VL.js";
import {
  StepperComponent
} from "./chunk-SZNOGPMV.js";
import {
  CreateAccountFormService
} from "./chunk-FMT3FVVH.js";
import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  FormBuilder,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  __objRest,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/basic-info-component/basic-info-component.ts
function BasicInfoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 45)(2, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 47);
    \u0275\u0275element(4, "circle", 48)(5, "line", 49)(6, "line", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8, "Opps! Something went wrong");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 52);
    \u0275\u0275listener("click", function BasicInfoComponent_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 53);
    \u0275\u0275element(11, "path", 54);
    \u0275\u0275elementEnd()()();
  }
}
var _BasicInfoComponent = class _BasicInfoComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.formService = inject(CreateAccountFormService);
    this.lookupService = inject(LookupService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.countries = [];
    this.cities = [];
    this.steps = ["Basic Information", "Education & Qualifications", "Address", "Attachments"];
    this.isSubmitting = false;
    this.submitError = false;
  }
  ngOnInit() {
    const existing = this.formService.getStepData("basic-info");
    if (existing && !Number.isFinite(existing.country)) {
      existing.country = null;
    }
    this.form = this.fb.group({
      firstName: [existing?.firstName ?? "", [Validators.required, Validators.minLength(2)]],
      lastName: [existing?.lastName ?? "", [Validators.required, Validators.minLength(2)]],
      country: [existing?.country ?? null, Validators.required],
      city: [existing?.city ?? null],
      addFavorite: [existing?.addFavorite ?? false],
      favoriteName: [existing?.favoriteName ?? ""],
      // Was optional in the UI but is backend-required (see comment below).
      passportNumber: [existing?.passportNumber ?? "", Validators.required],
      username: [existing?.username ?? "", [Validators.required, Validators.minLength(2)]],
      email: [existing?.email ?? "", [Validators.required, CustomValidators.emailFormat()]],
      password: [existing?.password ?? "", [Validators.required, CustomValidators.passwordStrength()]],
      // Backend-required for Auth/register (undocumented in swagger's
      // `required` list — see memory: register-missing-required-fields).
      phoneNumber: [existing?.phoneNumber ?? "", [Validators.required, Validators.pattern(/^[0-9+\-\s()]{6,20}$/)]],
      dateOfBirth: [existing?.dateOfBirth ?? "", Validators.required],
      taxDecoration: [existing?.taxDecoration ?? "", Validators.required],
      linkedInUrl: [existing?.linkedInUrl ?? ""],
      address: [existing?.address ?? ""]
    });
    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.lookupService.getCountries().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((countries) => {
      this.countries = countries;
      this.cdr.markForCheck();
    });
    this.form.controls["country"].valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((countryId) => {
      this.cities = [];
      this.form.controls["city"].setValue(null, { emitEvent: false });
      if (countryId != null) {
        this.lookupService.getCitiesByCountry(countryId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((cities) => {
          this.cities = cities;
          this.cdr.markForCheck();
        });
      }
      this.cdr.markForCheck();
    });
    if (existing?.country != null) {
      this.lookupService.getCitiesByCountry(existing.country).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((cities) => {
        this.cities = cities;
        this.cdr.markForCheck();
      });
    }
  }
  /* ---------- getters (optional) ---------- */
  get f() {
    return this.form.controls;
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  /** Add Favorite Name toggle (Figma 3:123227) — UI state only. */
  toggleFavorite() {
    const ctrl = this.form.controls["addFavorite"];
    ctrl.setValue(!ctrl.value);
    this.cdr.markForCheck();
  }
  next() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitError = true;
      this.cdr.markForCheck();
      return;
    }
    this.isSubmitting = true;
    this.submitError = false;
    this.cdr.markForCheck();
    const _a = this.form.value, { confirmPassword } = _a, data = __objRest(_a, ["confirmPassword"]);
    this.formService.updateStepData("basic-info", { basicInfo: data });
    this.router.navigate(["../edu-qual"], { relativeTo: this.route }).then(() => {
      this.isSubmitting = false;
      this.cdr.markForCheck();
    }).catch(() => {
      this.isSubmitting = false;
      this.submitError = true;
      this.cdr.markForCheck();
    });
  }
  dismissError() {
    this.submitError = false;
    this.cdr.markForCheck();
  }
  // Add method to handle Google sign up
  signUpWithGoogle() {
  }
};
_BasicInfoComponent.\u0275fac = function BasicInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BasicInfoComponent)();
};
_BasicInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicInfoComponent, selectors: [["app-basic-info-component"]], decls: 64, vars: 29, consts: [[1, "ca-body"], [3, "steps", "current"], ["role", "alert", 1, "ca-error-banner"], [1, "ca-card-wrap"], [1, "ca-card"], ["src", "assets/images/createaccount/logo-incard.svg", "alt", "MTWork", 1, "ca-card__logo"], ["type", "button", 1, "ca-back", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "ca-card__title"], [1, "ca-card__subtitle"], ["novalidate", "", 1, "ca-form", 3, "ngSubmit", "formGroup"], [1, "ca-form__row"], ["label", "First Name", "placeholder", "Your First Name...", 3, "control"], ["label", "Last Name", "placeholder", "Your Last Name...", 3, "control"], ["label", "Country", "placeholder", "Select your Country\u2026", 3, "control", "options"], ["label", "City", "placeholder", "Select your City\u2026", 3, "control", "options"], [1, "ca-toggle-row"], ["type", "button", "role", "switch", "aria-label", "Add Favorite Name", 1, "ca-toggle", 3, "click"], [1, "ca-toggle__knob"], [1, "ca-toggle-row__label"], ["label", "Favorite name", "placeholder", "Your Favorite name...", 3, "control"], ["label", "Passport Number", "placeholder", "Your Passport Number...", 3, "control"], ["label", "Phone Number", "placeholder", "Your Phone Number...", 3, "control"], ["type", "date", "label", "Date of Birth", "placeholder", "", 3, "control"], ["label", "User name", "placeholder", "Your User name...", 3, "control"], ["type", "email", "label", "Email", "placeholder", "Your Email...", 3, "control"], ["type", "password", "label", "Password", "placeholder", "Your Password...", 3, "control"], [1, "ca-form__row", "ca-form__row--gap12"], ["label", "Tax Decoration", "placeholder", "Your Tax Decoration...", 3, "control"], ["label", "LinkedIn URL", "placeholder", "Your LinkedIn URL...", 3, "control"], ["label", "Address", "placeholder", "Your Address...", 3, "control", "rows"], ["type", "submit", 1, "ca-btn", "ca-btn--primary", 3, "disabled"], ["type", "button", 1, "ca-btn", "ca-btn--google", 3, "click"], ["src", "assets/images/google.png", "alt", "", "aria-hidden", "true", "width", "18", "height", "18"], ["routerLink", "/login", "aria-label", "Already have an account? Log in", 1, "ca-card__login"], [1, "ca-card__login-text"], [1, "ca-card__login-link"], ["width", "18", "height", "18", "viewBox", "0 0 13.5 13.5", "fill", "currentColor", "aria-hidden", "true", 1, "ca-card__login-icon"], ["d", "M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"], [1, "ca-card__terms"], ["href", "/terms", 1, "ca-link"], ["href", "/talent-terms", 1, "ca-link"], ["href", "/privacy", 1, "ca-link"], [1, "ca-error-banner__left"], ["aria-hidden", "true", 1, "ca-error-banner__badge"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#f03d3d", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "13"], ["x1", "12", "y1", "16.5", "x2", "12", "y2", "16.5"], [1, "ca-error-banner__text"], ["type", "button", "aria-label", "Dismiss", 1, "ca-error-banner__close", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "#f03d3d", "aria-hidden", "true"], ["d", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.54 12.12a1 1 0 0 1-1.42 1.42L12 13.41l-2.12 2.13a1 1 0 0 1-1.42-1.42L10.59 12 8.46 9.88a1 1 0 1 1 1.42-1.42L12 10.59l2.12-2.13a1 1 0 0 1 1.42 1.42L13.41 12z"]], template: function BasicInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-stepper-component", 1);
    \u0275\u0275conditionalCreate(2, BasicInfoComponent_Conditional_2_Template, 12, 0, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function BasicInfoComponent_Template_button_click_6_listener() {
      return ctx.goBack();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 7);
    \u0275\u0275element(9, "line", 8)(10, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "h1", 10);
    \u0275\u0275text(13, "Create Contractor acccount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 11);
    \u0275\u0275text(15, "Sign up using the form, or the Google account you use at work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "form", 12);
    \u0275\u0275listener("ngSubmit", function BasicInfoComponent_Template_form_ngSubmit_16_listener() {
      return ctx.next();
    });
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275element(18, "app-form-input-component", 14)(19, "app-form-input-component", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275element(21, "app-form-select-component", 16)(22, "app-form-select-component", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18)(24, "button", 19);
    \u0275\u0275listener("click", function BasicInfoComponent_Template_button_click_24_listener() {
      return ctx.toggleFavorite();
    });
    \u0275\u0275element(25, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27, "Add Favorite Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275element(29, "app-form-input-component", 22)(30, "app-form-input-component", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 13);
    \u0275\u0275element(32, "app-form-input-component", 24)(33, "app-form-input-component", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "app-form-input-component", 26)(35, "app-form-input-component", 27)(36, "app-form-input-component", 28);
    \u0275\u0275elementStart(37, "div", 29);
    \u0275\u0275element(38, "app-form-input-component", 30)(39, "app-form-input-component", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "app-form-textarea-component", 32);
    \u0275\u0275elementStart(41, "button", 33);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 34);
    \u0275\u0275listener("click", function BasicInfoComponent_Template_button_click_43_listener() {
      return ctx.signUpWithGoogle();
    });
    \u0275\u0275element(44, "img", 35);
    \u0275\u0275text(45, " Sign up with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 36)(47, "span", 37);
    \u0275\u0275text(48, "Already have an account ");
    \u0275\u0275elementStart(49, "span", 38);
    \u0275\u0275text(50, "Log in");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 39);
    \u0275\u0275element(52, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "p", 41);
    \u0275\u0275text(54, " By creating your account, you agree to our ");
    \u0275\u0275elementStart(55, "a", 42);
    \u0275\u0275text(56, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, ", our ");
    \u0275\u0275elementStart(58, "a", 43);
    \u0275\u0275text(59, "Talent Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, ", that you have read and understood our ");
    \u0275\u0275elementStart(61, "a", 44);
    \u0275\u0275text(62, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, ". ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx.steps)("current", 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.submitError ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 27, "common.goBack"));
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.firstName);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.country)("options", ctx.countries);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.city)("options", ctx.cities);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ca-toggle--on", ctx.form.controls.addFavorite.value);
    \u0275\u0275attribute("aria-checked", ctx.form.controls.addFavorite.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx.form.controls.favoriteName);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.passportNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.username);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.email);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.taxDecoration);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.linkedInUrl);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.address)("rows", 3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.form.invalid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Processing\u2026" : "Create account", " ");
  }
}, dependencies: [
  CommonModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatusGroup,
  FormGroupDirective,
  RouterLink,
  FormInputComponent,
  FormTextareaComponent,
  FormSelectComponent,
  StepperComponent,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.ca-body[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 570px;\n  margin-inline: auto;\n  margin-block-start: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #ffffff;\n  border-bottom: 4px solid #f03d3d;\n  border-radius: var(--radius-16);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  position: relative;\n  z-index: 1;\n}\n.ca-error-banner__left[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ca-error-banner__badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 15px;\n  background: rgba(240, 61, 61, 0.4);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ca-error-banner__text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n}\n.ca-error-banner__close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  padding: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  display: inline-flex;\n}\n.ca-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back[_ngcontent-%COMP%]:hover {\n  color: var(--login-primary);\n}\n.ca-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 48px;\n}\n.ca-form__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ca-form__row--gap12[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.ca-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ca-toggle[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 18px;\n  padding: 2px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: #e6e6e6;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);\n  transition: background 0.2s;\n}\n.ca-toggle--on[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  justify-content: flex-end;\n}\n.ca-toggle__knob[_ngcontent-%COMP%] {\n  display: block;\n  width: 17px;\n  height: 14px;\n  border-radius: var(--radius-6);\n  background: #ffffff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 3.4px 6.7px rgba(0, 0, 0, 0.04);\n}\n.ca-toggle-row__label[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google[_ngcontent-%COMP%] {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google[_ngcontent-%COMP%]:hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login[_ngcontent-%COMP%]:hover   .ca-card__login-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.ca-card__terms[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-form__row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ca-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=basic-info-component.css.map */"], changeDetection: 0 });
var BasicInfoComponent = _BasicInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicInfoComponent, [{
    type: Component,
    args: [{ selector: "app-basic-info-component", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterLink,
      FormInputComponent,
      FormTextareaComponent,
      FormSelectComponent,
      StepperComponent,
      TranslocoModule
    ], template: `<div class="ca-body">

  <!-- Stepper \u2014 overlaps gradient header (Figma 3:123419) -->
  <app-stepper-component [steps]="steps" [current]="0" />

  <!-- Error banner (Figma 3:123386 "Component 27") \u2014 state-driven, between
       stepper and card. 570\xD748, white, 4px danger bottom border. -->
  @if (submitError) {
    <div class="ca-error-banner" role="alert">
      <span class="ca-error-banner__left">
        <span class="ca-error-banner__badge" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f03d3d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16.5" x2="12" y2="16.5"/></svg>
        </span>
        <span class="ca-error-banner__text">Opps! Something went wrong</span>
      </span>
      <button type="button" class="ca-error-banner__close" (click)="dismissError()" aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#f03d3d" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.54 12.12a1 1 0 0 1-1.42 1.42L12 13.41l-2.12 2.13a1 1 0 0 1-1.42-1.42L10.59 12 8.46 9.88a1 1 0 1 1 1.42-1.42L12 10.59l2.12-2.13a1 1 0 0 1 1.42 1.42L13.41 12z"/></svg>
      </button>
    </div>
  }

  <!-- Form card (Figma 3:123395: 569 wide, single card \u2014 no side panel) -->
  <div class="ca-card-wrap">
    <div class="ca-card">

      <!-- Logo (Figma 3:123397: navy MTWORK wordmark, 119\xD724) + Back -->
      <img class="ca-card__logo" src="assets/images/createaccount/logo-incard.svg" alt="MTWork" />
      <button type="button" class="ca-back" (click)="goBack()" [attr.aria-label]="'common.goBack' | transloco">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back
      </button>

      <!-- Heading (Figma 3:123217/218 \u2014 keeps the Figma copy verbatim) -->
      <h1 class="ca-card__title">Create Contractor acccount</h1>
      <p class="ca-card__subtitle">Sign up using the form, or the Google account you use at work</p>

      <!-- Form (Figma 3:123219: fields in order, gap 16) -->
      <form [formGroup]="form" (ngSubmit)="next()" novalidate class="ca-form">

        <!-- First / Last (3:123221) \u2014 required badge derives from validator -->
        <div class="ca-form__row">
          <app-form-input-component [control]="form.controls.firstName" label="First Name" placeholder="Your First Name..." />
          <app-form-input-component [control]="form.controls.lastName"  label="Last Name"  placeholder="Your Last Name..." />
        </div>

        <!-- Country / City (3:123224) -->
        <div class="ca-form__row">
          <app-form-select-component [control]="form.controls.country" label="Country" placeholder="Select your Country\u2026" [options]="countries" />
          <app-form-select-component [control]="form.controls.city"    label="City"    placeholder="Select your City\u2026"    [options]="cities" />
        </div>

        <!-- Add Favorite Name toggle (3:123227) -->
        <div class="ca-toggle-row">
          <button type="button" role="switch"
                  class="ca-toggle"
                  [class.ca-toggle--on]="form.controls.addFavorite.value"
                  [attr.aria-checked]="form.controls.addFavorite.value"
                  aria-label="Add Favorite Name"
                  (click)="toggleFavorite()">
            <span class="ca-toggle__knob"></span>
          </button>
          <span class="ca-toggle-row__label">Add Favorite Name</span>
        </div>

        <!-- Favorite name / Passport Number (3:123230) -->
        <div class="ca-form__row">
          <app-form-input-component [control]="form.controls.favoriteName"   label="Favorite name"    placeholder="Your Favorite name..." />
          <app-form-input-component [control]="form.controls.passportNumber" label="Passport Number"  placeholder="Your Passport Number..." />
        </div>

        <!-- Phone / Date of Birth \u2014 backend-required (not in Figma; added
             because Auth/register 400s without them, see memory:
             register-missing-required-fields). -->
        <div class="ca-form__row">
          <app-form-input-component [control]="form.controls.phoneNumber" label="Phone Number"   placeholder="Your Phone Number..." />
          <app-form-input-component [control]="form.controls.dateOfBirth" type="date" label="Date of Birth" placeholder="" />
        </div>

        <!-- User name (3:123233) -->
        <app-form-input-component [control]="form.controls.username" label="User name" placeholder="Your User name..." />

        <!-- Email \u2014 kept on Step 1 (API-required deviation; Figma omits it) -->
        <app-form-input-component [control]="form.controls.email" type="email" label="Email" placeholder="Your Email..." />

        <!-- Password (3:123234) -->
        <app-form-input-component [control]="form.controls.password" type="password" label="Password" placeholder="Your Password..." />

        <!-- Tax Decoration / LinkedIn URL (3:123235, gap 12) -->
        <div class="ca-form__row ca-form__row--gap12">
          <app-form-input-component [control]="form.controls.taxDecoration" label="Tax Decoration" placeholder="Your Tax Decoration..." />
          <app-form-input-component [control]="form.controls.linkedInUrl"   label="LinkedIn URL"    placeholder="Your LinkedIn URL..." />
        </div>

        <!-- Address textarea (3:123238: 102px, resizer) -->
        <app-form-textarea-component [control]="form.controls.address" label="Address" [rows]="3" placeholder="Your Address..." />

        <!-- Submit (Figma 3:123240: 521\xD748, r12, disabled #e6e6e6) -->
        <button type="submit" class="ca-btn ca-btn--primary" [disabled]="form.invalid || isSubmitting">
          {{ isSubmitting ? 'Processing\u2026' : 'Create account' }}
        </button>

      </form>

      <!-- Google (Figma 3:123416: 521\xD748, white, border) -->
      <button type="button" class="ca-btn ca-btn--google" (click)="signUpWithGoogle()">
        <img src="assets/images/google.png" alt="" aria-hidden="true" width="18" height="18">
        Sign up with Google
      </button>

      <!-- Login link (Figma 3:123417): "Already have an account \xB7 Log in" + glyph -->
      <a routerLink="/login" class="ca-card__login" aria-label="Already have an account? Log in">
        <span class="ca-card__login-text">Already have an account <span class="ca-card__login-link">Log in</span></span>
        <svg class="ca-card__login-icon" width="18" height="18" viewBox="0 0 13.5 13.5" fill="currentColor" aria-hidden="true"><path d="M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"/></svg>
      </a>

      <!-- Terms (Figma 3:123418): DM Sans 12 #999, links navy -->
      <p class="ca-card__terms">
        By creating your account, you agree to our
        <a href="/terms" class="ca-link">Terms of Service</a>,
        our <a href="/talent-terms" class="ca-link">Talent Terms of Service</a>,
        that you have read and understood our
        <a href="/privacy" class="ca-link">Privacy Policy</a>.
      </p>

    </div>
  </div>

</div>
`, styles: ["/* src/features/auth/CreateAccount/basic-info-component/basic-info-component.css */\n.ca-body {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error-banner {\n  width: 100%;\n  max-width: 570px;\n  margin-inline: auto;\n  margin-block-start: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #ffffff;\n  border-bottom: 4px solid #f03d3d;\n  border-radius: var(--radius-16);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  position: relative;\n  z-index: 1;\n}\n.ca-error-banner__left {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ca-error-banner__badge {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 15px;\n  background: rgba(240, 61, 61, 0.4);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ca-error-banner__text {\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n}\n.ca-error-banner__close {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  padding: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  display: inline-flex;\n}\n.ca-card {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back:hover {\n  color: var(--login-primary);\n}\n.ca-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 48px;\n}\n.ca-form__row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ca-form__row--gap12 {\n  gap: 12px;\n}\n.ca-toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ca-toggle {\n  flex-shrink: 0;\n  width: 38px;\n  height: 18px;\n  padding: 2px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: #e6e6e6;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);\n  transition: background 0.2s;\n}\n.ca-toggle--on {\n  background: var(--login-primary);\n  justify-content: flex-end;\n}\n.ca-toggle__knob {\n  display: block;\n  width: 17px;\n  height: 14px;\n  border-radius: var(--radius-6);\n  background: #ffffff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 3.4px 6.7px rgba(0, 0, 0, 0.04);\n}\n.ca-toggle-row__label {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-btn {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google:hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google img {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login:hover .ca-card__login-link {\n  text-decoration: underline;\n}\n.ca-card__terms {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-form__row {\n    grid-template-columns: 1fr;\n  }\n  .ca-card {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=basic-info-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicInfoComponent, { className: "BasicInfoComponent", filePath: "src/features/auth/createaccount/basic-info-component/basic-info-component.ts", lineNumber: 37 });
})();
export {
  BasicInfoComponent
};
//# sourceMappingURL=chunk-P3Q7UM36.js.map
