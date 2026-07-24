import {
  FormSelectComponent
} from "./chunk-CKTFAXGQ.js";
import {
  FormInputComponent
} from "./chunk-E7HIOBBH.js";
import {
  takeUntilDestroyed
} from "./chunk-HHJMLLJ5.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/business-basic-info-component/business-basic-info-component.ts
var _BusinessBasicInfoComponent = class _BusinessBasicInfoComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.formService = inject(CreateAccountFormService);
    this.lookupService = inject(LookupService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.steps = ["Basic Information", "Authorized", "Attachments"];
    this.isSubmitting = false;
    this.submitError = false;
    this.countries = [];
    this.cities = [];
  }
  ngOnInit() {
    const existing = this.formService.getBusinessStepData("business-basic-info");
    if (existing && !Number.isFinite(existing.country)) {
      existing.country = null;
    }
    this.form = this.fb.group({
      companyName: [existing?.companyName ?? "", [Validators.required, Validators.minLength(2)]],
      lastName: [existing?.lastName ?? "", [Validators.required, Validators.minLength(2)]],
      country: [existing?.country ?? null, Validators.required],
      city: [existing?.city ?? null],
      postalCode: [existing?.postalCode ?? ""],
      taxDecoration: [existing?.taxDecoration ?? "", Validators.required],
      linkedInUrl: [existing?.linkedInUrl ?? ""]
    });
    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
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
  goBack() {
    this.router.navigate(["/register"]);
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
    this.formService.updateStepData("business-basic-info", { businessBasicInfo: this.form.value });
    this.router.navigate(["../authorized"], { relativeTo: this.route }).then(() => {
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
  signUpWithGoogle() {
  }
};
_BusinessBasicInfoComponent.\u0275fac = function BusinessBasicInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BusinessBasicInfoComponent)();
};
_BusinessBasicInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessBasicInfoComponent, selectors: [["app-business-basic-info-component"]], decls: 48, vars: 14, consts: [[1, "ca-body"], [3, "steps", "current"], [1, "ca-card-wrap"], [1, "ca-card"], ["src", "assets/images/createaccount/logo-incard.svg", "alt", "MTWork", 1, "ca-card__logo"], ["type", "button", "aria-label", "Back", 1, "ca-back", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "ca-card__title"], [1, "ca-card__subtitle"], ["novalidate", "", 1, "ca-form", 3, "ngSubmit", "formGroup"], [1, "ca-form__row"], ["label", "Company name", "placeholder", "Your Company name...", 3, "control"], ["label", "Last name", "placeholder", "Your Last name...", 3, "control"], ["label", "Country", "placeholder", "Select your Country\u2026", 3, "control", "options"], ["label", "City", "placeholder", "Select your City\u2026", 3, "control", "options"], ["label", "Postal Code", "placeholder", "Your Postal Code...", 3, "control"], ["label", "Tax Decoration", "placeholder", "Your Tax Decoration...", 3, "control"], ["label", "LinkedIn URL", "placeholder", "Your LinkedIn URL...", 3, "control"], ["type", "submit", 1, "ca-btn", "ca-btn--primary", 3, "disabled"], ["type", "button", 1, "ca-btn", "ca-btn--google", 3, "click"], ["src", "assets/images/google.png", "alt", "", "aria-hidden", "true", "width", "18", "height", "18"], ["routerLink", "/login", "aria-label", "Already have an account? Log in", 1, "ca-card__login"], [1, "ca-card__login-text"], [1, "ca-card__login-link"], ["width", "18", "height", "18", "viewBox", "0 0 13.5 13.5", "fill", "currentColor", "aria-hidden", "true", 1, "ca-card__login-icon"], ["d", "M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"], [1, "ca-card__terms"], ["href", "/terms", 1, "ca-link"], ["href", "/talent-terms", 1, "ca-link"], ["href", "/privacy", 1, "ca-link"]], template: function BusinessBasicInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-stepper-component", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function BusinessBasicInfoComponent_Template_button_click_5_listener() {
      return ctx.goBack();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "polyline", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "h1", 9);
    \u0275\u0275text(11, "Create Business Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13, "Sign up using the form, or the Google account you use at work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "form", 11);
    \u0275\u0275listener("ngSubmit", function BusinessBasicInfoComponent_Template_form_ngSubmit_14_listener() {
      return ctx.next();
    });
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275element(16, "app-form-input-component", 13)(17, "app-form-input-component", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275element(19, "app-form-select-component", 15)(20, "app-form-select-component", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "app-form-input-component", 17);
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275element(23, "app-form-input-component", 18)(24, "app-form-input-component", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275listener("click", function BusinessBasicInfoComponent_Template_button_click_27_listener() {
      return ctx.signUpWithGoogle();
    });
    \u0275\u0275element(28, "img", 22);
    \u0275\u0275text(29, " Sign up with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 23)(31, "span", 24);
    \u0275\u0275text(32, "Already have an account ");
    \u0275\u0275elementStart(33, "span", 25);
    \u0275\u0275text(34, "Log in");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 26);
    \u0275\u0275element(36, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "p", 28);
    \u0275\u0275text(38, " By creating your account, you agree to our ");
    \u0275\u0275elementStart(39, "a", 29);
    \u0275\u0275text(40, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, ", our ");
    \u0275\u0275elementStart(42, "a", 30);
    \u0275\u0275text(43, "Talent Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, ", that you have read and understood our ");
    \u0275\u0275elementStart(45, "a", 31);
    \u0275\u0275text(46, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, ". ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx.steps)("current", 0);
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.country)("options", ctx.countries);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.city)("options", ctx.cities);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.postalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.taxDecoration);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.linkedInUrl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.form.invalid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Processing\u2026" : "Create account", " ");
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, RouterLink, FormInputComponent, FormSelectComponent, StepperComponent], styles: ["\n\n.ca-body[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 570px;\n  margin-inline: auto;\n  margin-block-start: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #ffffff;\n  border-bottom: 4px solid #f03d3d;\n  border-radius: var(--radius-16);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  position: relative;\n  z-index: 1;\n}\n.ca-error-banner__left[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ca-error-banner__badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 15px;\n  background: rgba(240, 61, 61, 0.4);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ca-error-banner__text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n}\n.ca-error-banner__close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  padding: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  display: inline-flex;\n}\n.ca-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back[_ngcontent-%COMP%]:hover {\n  color: var(--login-primary);\n}\n.ca-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 24px;\n}\n.ca-form__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ca-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google[_ngcontent-%COMP%] {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google[_ngcontent-%COMP%]:hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login[_ngcontent-%COMP%]:hover   .ca-card__login-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.ca-card__terms[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-form__row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ca-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=business-basic-info-component.css.map */"], changeDetection: 0 });
var BusinessBasicInfoComponent = _BusinessBasicInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessBasicInfoComponent, [{
    type: Component,
    args: [{ selector: "app-business-basic-info-component", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule, RouterLink, FormInputComponent, FormSelectComponent, StepperComponent], template: `<!-- Business Step 1 \xB7 Basic Information (Figma 3:123379) \u2014 WIRING PASS.
     Fields are correct per Figma; Figma skin applied in a later pass. -->
<div class="ca-body">

  <app-stepper-component [steps]="steps" [current]="0" />

  <div class="ca-card-wrap">
    <div class="ca-card">

      <img class="ca-card__logo" src="assets/images/createaccount/logo-incard.svg" alt="MTWork" />
      <button type="button" class="ca-back" (click)="goBack()" aria-label="Back">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back
      </button>

      <h1 class="ca-card__title">Create Business Account</h1>
      <p class="ca-card__subtitle">Sign up using the form, or the Google account you use at work</p>

      <form [formGroup]="form" (ngSubmit)="next()" novalidate class="ca-form">

        <div class="ca-form__row">
          <app-form-input-component [control]="form.controls.companyName" label="Company name" placeholder="Your Company name..." />
          <app-form-input-component [control]="form.controls.lastName"    label="Last name"    placeholder="Your Last name..." />
        </div>

        <div class="ca-form__row">
          <app-form-select-component [control]="form.controls.country" label="Country" placeholder="Select your Country\u2026" [options]="countries" />
          <app-form-select-component [control]="form.controls.city"    label="City"    placeholder="Select your City\u2026"    [options]="cities" />
        </div>

        <app-form-input-component [control]="form.controls.postalCode" label="Postal Code" placeholder="Your Postal Code..." />

        <div class="ca-form__row">
          <app-form-input-component [control]="form.controls.taxDecoration" label="Tax Decoration" placeholder="Your Tax Decoration..." />
          <app-form-input-component [control]="form.controls.linkedInUrl"   label="LinkedIn URL"   placeholder="Your LinkedIn URL..." />
        </div>

        <button type="submit" class="ca-btn ca-btn--primary" [disabled]="form.invalid || isSubmitting">
          {{ isSubmitting ? 'Processing\u2026' : 'Create account' }}
        </button>
      </form>

      <button type="button" class="ca-btn ca-btn--google" (click)="signUpWithGoogle()">
        <img src="assets/images/google.png" alt="" aria-hidden="true" width="18" height="18">
        Sign up with Google
      </button>

      <a routerLink="/login" class="ca-card__login" aria-label="Already have an account? Log in">
        <span class="ca-card__login-text">Already have an account <span class="ca-card__login-link">Log in</span></span>
        <svg class="ca-card__login-icon" width="18" height="18" viewBox="0 0 13.5 13.5" fill="currentColor" aria-hidden="true"><path d="M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"/></svg>
      </a>

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
`, styles: ["/* src/features/auth/CreateAccount/business-basic-info-component/business-basic-info-component.css */\n.ca-body {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error-banner {\n  width: 100%;\n  max-width: 570px;\n  margin-inline: auto;\n  margin-block-start: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #ffffff;\n  border-bottom: 4px solid #f03d3d;\n  border-radius: var(--radius-16);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  position: relative;\n  z-index: 1;\n}\n.ca-error-banner__left {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ca-error-banner__badge {\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 15px;\n  background: rgba(240, 61, 61, 0.4);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ca-error-banner__text {\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n}\n.ca-error-banner__close {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  padding: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  display: inline-flex;\n}\n.ca-card {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back:hover {\n  color: var(--login-primary);\n}\n.ca-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 24px;\n}\n.ca-form__row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.ca-btn {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google:hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google img {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login:hover .ca-card__login-link {\n  text-decoration: underline;\n}\n.ca-card__terms {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-form__row {\n    grid-template-columns: 1fr;\n  }\n  .ca-card {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=business-basic-info-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessBasicInfoComponent, { className: "BusinessBasicInfoComponent", filePath: "src/features/auth/createaccount/business-basic-info-component/business-basic-info-component.ts", lineNumber: 31 });
})();
export {
  BusinessBasicInfoComponent
};
//# sourceMappingURL=chunk-QHALJNMT.js.map
