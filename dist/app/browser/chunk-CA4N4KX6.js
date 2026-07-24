import {
  FileUploadComponent
} from "./chunk-JNGFMO5J.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DWKHQJBX.js";
import "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-APK5HPN3.js";
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
  ChangeDetectorRef,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/attachment-component/attachment-component.ts
var _c0 = () => ({ required: "CV/Resume is required", fileType: "Please upload a PDF or Word document", fileSize: "File size must not exceed 5MB" });
var _c1 = () => ({ required: "Passport copy is required", fileType: "Please upload a PDF or image file", fileSize: "File size must not exceed 5MB" });
var _c2 = () => ({ required: "Education certification is required", fileType: "Please upload a PDF or image file", fileSize: "File size must not exceed 5MB" });
var _c3 = () => ({ required: "Experience certification is required", fileType: "Please upload a PDF or image file", fileSize: "File size must not exceed 5MB" });
var _c4 = () => ({ required: "Professor certification is required", fileType: "Please upload a PDF or image file", fileSize: "File size must not exceed 5MB" });
function AttachmentComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.submitError, \u0275\u0275sanitizeHtml);
  }
}
var _AttachmentComponent = class _AttachmentComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.formService = inject(CreateAccountFormService);
    this.snackBar = inject(MatSnackBar);
    this.cdr = inject(ChangeDetectorRef);
    this.steps = ["Basic Information", "Education & Qualifications", "Address", "Attachments"];
    this.isSubmitting = false;
    this.submitError = null;
  }
  ngOnInit() {
    const existingData = this.formService.getStepData("attachments");
    this.form = this.fb.group({
      cvResume: [existingData?.cvResume || null, [Validators.required, CustomValidators.fileType(["pdf", "doc", "docx"]), CustomValidators.fileSize(5)]],
      passport: [existingData?.passport || null, [Validators.required, CustomValidators.fileType(["pdf", "jpg", "jpeg", "png"]), CustomValidators.fileSize(5)]],
      educationCertification: [existingData?.educationCertification || null, [Validators.required, CustomValidators.fileType(["pdf", "jpg", "jpeg", "png"]), CustomValidators.fileSize(5)]],
      experienceCertification: [existingData?.experienceCertification || null, [Validators.required, CustomValidators.fileType(["pdf", "jpg", "jpeg", "png"]), CustomValidators.fileSize(5)]],
      professorCertification: [existingData?.professorCertification || null, [Validators.required, CustomValidators.fileType(["pdf", "jpg", "jpeg", "png"]), CustomValidators.fileSize(5)]]
    });
  }
  get cvResume() {
    return this.form.get("cvResume");
  }
  get passport() {
    return this.form.get("passport");
  }
  get educationCertification() {
    return this.form.get("educationCertification");
  }
  get experienceCertification() {
    return this.form.get("experienceCertification");
  }
  get professorCertification() {
    return this.form.get("professorCertification");
  }
  previous() {
    this.router.navigate(["../address"], { relativeTo: this.route });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = null;
    const formValue = this.form.value;
    this.formService.updateStepData("attachments", { attachments: formValue });
    this.formService.submitForm().subscribe({
      next: () => {
        this.isSubmitting = false;
        this.formService.clearSensitiveData();
        this.snackBar.open("Account created successfully! Please sign in.", "OK", {
          duration: 4e3,
          panelClass: ["snack-success"],
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        setTimeout(() => {
          this.router.navigate(["/login"], { queryParams: { registered: "true" } });
        }, 2e3);
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.isSubmitting = false;
        const apiMessage = error?.error?.errorMsg || error?.error?.ErrorMsg || error?.error?.message || error?.message || "An error occurred while creating your account. Please try again.";
        if (apiMessage.toLowerCase().includes("email") && apiMessage.toLowerCase().includes("exist")) {
          this.submitError = `${apiMessage} \u2014 <a href="/login" class="underline font-semibold">Sign in instead</a>`;
        } else {
          this.submitError = apiMessage;
        }
        this.cdr.markForCheck();
      }
    });
  }
};
_AttachmentComponent.\u0275fac = function AttachmentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttachmentComponent)();
};
_AttachmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttachmentComponent, selectors: [["app-attachment-component"]], decls: 44, vars: 26, consts: [[1, "ca-body"], [3, "steps", "current"], [1, "ca-card-wrap"], [1, "ca-card"], ["src", "assets/images/createaccount/logo-incard.svg", "alt", "MTWork", 1, "ca-card__logo"], ["type", "button", "aria-label", "Back", 1, "ca-back", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "ca-card__title"], [1, "ca-card__subtitle"], ["novalidate", "", 1, "ca-form", 3, "ngSubmit", "formGroup"], ["formControlName", "cvResume", "label", "Cv/Resume", "accept", "pdf,doc,docx", 3, "required", "maxSizeMB", "errorMessages"], ["formControlName", "passport", "label", "Passport", "accept", "pdf,jpg,jpeg,png", 3, "required", "maxSizeMB", "errorMessages"], ["formControlName", "educationCertification", "label", "Education Certification", "accept", "pdf,jpg,jpeg,png", 3, "required", "maxSizeMB", "errorMessages"], ["formControlName", "experienceCertification", "label", "Experience Certifcation", "accept", "pdf,jpg,jpeg,png", 3, "required", "maxSizeMB", "errorMessages"], ["formControlName", "professorCertification", "label", "Professor Certfication", "accept", "pdf,jpg,jpeg,png", 3, "required", "maxSizeMB", "errorMessages"], ["role", "alert", 1, "ca-error", 3, "innerHTML"], ["type", "submit", 1, "ca-btn", "ca-btn--primary", 3, "disabled"], ["type", "button", "disabled", "", 1, "ca-btn", "ca-btn--google"], ["src", "assets/images/google.png", "alt", "", "aria-hidden", "true", "width", "18", "height", "18"], ["routerLink", "/login", "aria-label", "Already have an account? Log in", 1, "ca-card__login"], [1, "ca-card__login-text"], [1, "ca-card__login-link"], ["width", "18", "height", "18", "viewBox", "0 0 13.5 13.5", "fill", "currentColor", "aria-hidden", "true", 1, "ca-card__login-icon"], ["d", "M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"], [1, "ca-card__terms"], ["href", "/terms", 1, "ca-link"], ["href", "/talent-terms", 1, "ca-link"], ["href", "/privacy", 1, "ca-link"]], template: function AttachmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-stepper-component", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function AttachmentComponent_Template_button_click_5_listener() {
      return ctx.previous();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "polyline", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "h1", 9);
    \u0275\u0275text(11, "Create Contractor acccount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13, "Sign up using the form, or the Google account you use at work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "form", 11);
    \u0275\u0275listener("ngSubmit", function AttachmentComponent_Template_form_ngSubmit_14_listener() {
      return ctx.submit();
    });
    \u0275\u0275element(15, "app-file-upload-component", 12)(16, "app-file-upload-component", 13)(17, "app-file-upload-component", 14)(18, "app-file-upload-component", 15)(19, "app-file-upload-component", 16);
    \u0275\u0275conditionalCreate(20, AttachmentComponent_Conditional_20_Template, 1, 1, "p", 17);
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 19);
    \u0275\u0275element(24, "img", 20);
    \u0275\u0275text(25, " Sign up with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 21)(27, "span", 22);
    \u0275\u0275text(28, "Already have an account ");
    \u0275\u0275elementStart(29, "span", 23);
    \u0275\u0275text(30, "Log in");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 24);
    \u0275\u0275element(32, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "p", 26);
    \u0275\u0275text(34, " By creating your account, you agree to our ");
    \u0275\u0275elementStart(35, "a", 27);
    \u0275\u0275text(36, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, ", our ");
    \u0275\u0275elementStart(38, "a", 28);
    \u0275\u0275text(39, "Talent Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ", that you have read and understood our ");
    \u0275\u0275elementStart(41, "a", 29);
    \u0275\u0275text(42, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, ". ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx.steps)("current", 3);
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("maxSizeMB", 5)("errorMessages", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("maxSizeMB", 5)("errorMessages", \u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("maxSizeMB", 5)("errorMessages", \u0275\u0275pureFunction0(23, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("maxSizeMB", 5)("errorMessages", \u0275\u0275pureFunction0(24, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("maxSizeMB", 5)("errorMessages", \u0275\u0275pureFunction0(25, _c4));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.submitError ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.form.invalid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Processing\u2026" : "Create account", " ");
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, StepperComponent, FileUploadComponent, MatSnackBarModule], styles: ["\n\n.ca-body[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n  margin: 0;\n}\n.ca-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back[_ngcontent-%COMP%]:hover {\n  color: var(--login-primary);\n}\n.ca-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 48px;\n}\n.ca-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google[_ngcontent-%COMP%] {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.ca-btn--google[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login[_ngcontent-%COMP%]:hover   .ca-card__login-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.ca-card__terms[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=attachment-component.css.map */"] });
var AttachmentComponent = _AttachmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachmentComponent, [{
    type: Component,
    args: [{ selector: "app-attachment-component", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, StepperComponent, FileUploadComponent, MatSnackBarModule], template: `<!-- Contractor Step 4 \xB7 Attachments (Figma 3:123316).
     Same .ca-* chrome as the frozen Steps 1-3. Final submit step \u2014 submit()/
     submitForm()/snackbar/redirect wiring is UNCHANGED. The shared
     file-upload-component is NOT modified (Business B3 freeze). -->
<div class="ca-body">

  <!-- Stepper \u2014 overlaps gradient header (Figma 3:123376), step 4 active -->
  <app-stepper-component [steps]="steps" [current]="3" />

  <!-- Form card (Figma 3:123332: 569 wide, single card \u2014 no side panel) -->
  <div class="ca-card-wrap">
    <div class="ca-card">

      <!-- Logo (Figma 3:123334: navy MTWORK wordmark, 119\xD724) + Back -->
      <img class="ca-card__logo" src="assets/images/createaccount/logo-incard.svg" alt="MTWork" />
      <button type="button" class="ca-back" (click)="previous()" aria-label="Back">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back
      </button>

      <!-- Heading (Figma 3:123337/338 \u2014 keeps the Figma copy verbatim) -->
      <h1 class="ca-card__title">Create Contractor acccount</h1>
      <p class="ca-card__subtitle">Sign up using the form, or the Google account you use at work</p>

      <!-- Form (Figma 3:123339: 5 upload fields, gap 16). Labels verbatim. -->
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="ca-form">

        <app-file-upload-component
          formControlName="cvResume"
          label="Cv/Resume"
          [required]="true"
          accept="pdf,doc,docx"
          [maxSizeMB]="5"
          [errorMessages]="{ required: 'CV/Resume is required', fileType: 'Please upload a PDF or Word document', fileSize: 'File size must not exceed 5MB' }" />

        <app-file-upload-component
          formControlName="passport"
          label="Passport"
          [required]="true"
          accept="pdf,jpg,jpeg,png"
          [maxSizeMB]="5"
          [errorMessages]="{ required: 'Passport copy is required', fileType: 'Please upload a PDF or image file', fileSize: 'File size must not exceed 5MB' }" />

        <app-file-upload-component
          formControlName="educationCertification"
          label="Education Certification"
          [required]="true"
          accept="pdf,jpg,jpeg,png"
          [maxSizeMB]="5"
          [errorMessages]="{ required: 'Education certification is required', fileType: 'Please upload a PDF or image file', fileSize: 'File size must not exceed 5MB' }" />

        <app-file-upload-component
          formControlName="experienceCertification"
          label="Experience Certifcation"
          [required]="true"
          accept="pdf,jpg,jpeg,png"
          [maxSizeMB]="5"
          [errorMessages]="{ required: 'Experience certification is required', fileType: 'Please upload a PDF or image file', fileSize: 'File size must not exceed 5MB' }" />

        <app-file-upload-component
          formControlName="professorCertification"
          label="Professor Certfication"
          [required]="true"
          accept="pdf,jpg,jpeg,png"
          [maxSizeMB]="5"
          [errorMessages]="{ required: 'Professor certification is required', fileType: 'Please upload a PDF or image file', fileSize: 'File size must not exceed 5MB' }" />

        @if (submitError) {
          <p class="ca-error" role="alert" [innerHTML]="submitError"></p>
        }

        <!-- Submit (Figma 3:123372: 521\xD748, r12, disabled #e6e6e6) -->
        <button type="submit" class="ca-btn ca-btn--primary" [disabled]="form.invalid || isSubmitting">
          {{ isSubmitting ? 'Processing\u2026' : 'Create account' }}
        </button>

      </form>

      <!-- Google (Figma 3:123373: 521\xD748, white, border) -->
      <button type="button" class="ca-btn ca-btn--google" disabled>
        <img src="assets/images/google.png" alt="" aria-hidden="true" width="18" height="18">
        Sign up with Google
      </button>

      <!-- Login link (Figma 3:123374): "Already have an account \xB7 Log in" + glyph -->
      <a routerLink="/login" class="ca-card__login" aria-label="Already have an account? Log in">
        <span class="ca-card__login-text">Already have an account <span class="ca-card__login-link">Log in</span></span>
        <svg class="ca-card__login-icon" width="18" height="18" viewBox="0 0 13.5 13.5" fill="currentColor" aria-hidden="true"><path d="M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"/></svg>
      </a>

      <!-- Terms (Figma 3:123375): DM Sans 12 #999, links navy -->
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
`, styles: ["/* src/features/auth/CreateAccount/attachment-component/attachment-component.css */\n.ca-body {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block-end: 48px;\n  padding-inline: 24px;\n}\n.ca-card-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-block-start: 62px;\n}\n.ca-error {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  color: var(--functional-danger-500);\n  line-height: 1.5;\n  margin: 0;\n}\n.ca-card {\n  width: 100%;\n  max-width: 569px;\n  background: #ffffff;\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n.ca-card__logo {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  background: none;\n  border: none;\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  cursor: pointer;\n  margin-block-start: 16px;\n}\n.ca-back:hover {\n  color: var(--login-primary);\n}\n.ca-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-grays-900);\n  margin: 16px 0 0;\n}\n.ca-card__subtitle {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 8px 0 0;\n}\n.ca-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-block-start: 48px;\n}\n.ca-btn {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s, background 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.ca-btn--primary {\n  background: var(--login-primary);\n  color: #ffffff;\n  margin-block-start: 16px;\n}\n.ca-btn--primary:disabled {\n  background: #e6e6e6;\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.ca-btn--primary:not(:disabled):hover {\n  opacity: 0.9;\n}\n.ca-btn--google {\n  margin-block-start: 12px;\n  background: #ffffff;\n  color: var(--brand-neutral-950);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n}\n.ca-btn--google:not(:disabled):hover {\n  background: var(--brand-grays-50);\n}\n.ca-btn--google:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.ca-btn--google img {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.ca-card__login {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-block-start: 16px;\n  text-decoration: none;\n}\n.ca-card__login-text {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.ca-card__login-link {\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.ca-card__login-icon {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.ca-card__login:hover .ca-card__login-link {\n  text-decoration: underline;\n}\n.ca-card__terms {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.ca-link {\n  color: var(--login-primary);\n  text-decoration: none;\n  font-weight: 700;\n}\n.ca-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .ca-card {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=attachment-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttachmentComponent, { className: "AttachmentComponent", filePath: "src/features/auth/createaccount/attachment-component/attachment-component.ts", lineNumber: 20 });
})();
export {
  AttachmentComponent
};
//# sourceMappingURL=chunk-CA4N4KX6.js.map
