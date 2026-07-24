import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import "./chunk-P46WWH45.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "circle", 27)(3, "line", 28)(4, "line", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, ctx_r0.errorMessage()), " ");
  }
}
function AdminLoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function AdminLoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 30)(2, "path", 31)(3, "line", 32);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 33)(2, "circle", 34);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function AdminLoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
var _AdminLoginComponent = class _AdminLoginComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.form = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.form.getRawValue();
    this.authService.adminLogin(email, password).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err?.error?.message ?? "admin.login.errors.failed");
      }
    });
  }
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
};
_AdminLoginComponent.\u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminLoginComponent)();
};
_AdminLoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 34, vars: 26, consts: [[1, "admin-login"], ["aria-hidden", "true", 1, "admin-login__brand"], [1, "admin-login__brand-inner"], [1, "admin-login__logo"], [1, "admin-login__shield"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["transloco", "admin.login.subtitle", 1, "admin-login__brand-tagline"], [1, "admin-login__form-panel"], [1, "admin-login__card"], ["transloco", "admin.login.title", 1, "admin-login__title"], ["role", "alert", "aria-live", "polite", 1, "admin-login__error"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "admin-login__field"], ["for", "adm-email", "transloco", "admin.login.email", 1, "admin-login__label"], ["id", "adm-email", "type", "email", "formControlName", "email", "autocomplete", "username", 1, "admin-login__input"], ["role", "alert", "transloco", "auth.errors.invalidEmail", 1, "admin-login__hint"], ["for", "adm-password", "transloco", "admin.login.password", 1, "admin-login__label"], [1, "admin-login__password-wrap"], ["id", "adm-password", "formControlName", "password", "autocomplete", "current-password", 1, "admin-login__input", "admin-login__input--pw", 3, "type"], ["type", "button", 1, "admin-login__toggle-pw", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["role", "alert", "transloco", "auth.errors.passwordRequired", 1, "admin-login__hint"], ["type", "submit", 1, "admin-login__submit", 3, "disabled"], ["aria-hidden", "true", 1, "admin-login__spinner"], ["transloco", "admin.login.submit"], ["routerLink", "/login", "transloco", "admin.login.backToLogin", 1, "admin-login__back-link"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"], ["d", "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"]], template: function AdminLoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "MTWORK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(8, "p", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275element(11, "h1", 10);
    \u0275\u0275conditionalCreate(12, AdminLoginComponent_Conditional_12_Template, 7, 3, "div", 11);
    \u0275\u0275elementStart(13, "form", 12);
    \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_13_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275element(15, "label", 14)(16, "input", 15);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275conditionalCreate(18, AdminLoginComponent_Conditional_18_Template, 1, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275element(20, "label", 17);
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275element(22, "input", 19);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementStart(24, "button", 20);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_24_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275conditionalCreate(26, AdminLoginComponent_Conditional_26_Template, 4, 0, ":svg:svg", 21)(27, AdminLoginComponent_Conditional_27_Template, 3, 0, ":svg:svg", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, AdminLoginComponent_Conditional_28_Template, 1, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275conditionalCreate(31, AdminLoginComponent_Conditional_31_Template, 1, 0, "span", 24);
    \u0275\u0275element(32, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "a", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx.errorMessage() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("admin-login__input--invalid", ctx.fieldInvalid("email"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 18, "admin.login.emailAriaLabel"))("aria-invalid", ctx.fieldInvalid("email"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("email") ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("admin-login__input--invalid", ctx.fieldInvalid("password"));
    \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 20, "admin.login.passwordAriaLabel"))("aria-invalid", ctx.fieldInvalid("password"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 22, ctx.showPassword() ? "common.hidePassword" : "common.showPassword"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.showPassword() ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("password") ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 24, "admin.login.signInLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 31 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, TranslocoModule, TranslocoDirective, TranslocoPipe], styles: ["\n\n.admin-login[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100vh;\n  background: var(--ui-bg-page);\n}\n.admin-login__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-600);\n  padding: 3rem;\n}\n.admin-login__brand-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  color: var(--brand-neutral-0, #fff);\n  text-align: center;\n}\n.admin-login__logo[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: var(--brand-neutral-0, #fff);\n}\n.admin-login__shield[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-neutral-0, #fff);\n}\n.admin-login__brand-tagline[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.85;\n  max-width: 260px;\n  line-height: 1.5;\n}\n.admin-login__form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n}\n.admin-login__card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-login__title[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-login__error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md, 8px);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  font-size: 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n}\n.admin-login__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.admin-login__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-secondary);\n}\n.admin-login__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.9375rem;\n  outline: none;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.admin-login__input[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.admin-login__input--invalid[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-400);\n}\n.admin-login__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--functional-danger-600);\n}\n.admin-login__password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-login__input--pw[_ngcontent-%COMP%] {\n  padding-inline-end: 2.75rem;\n}\n.admin-login__toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--ui-text-muted);\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.admin-login__toggle-pw[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  border-radius: 3px;\n}\n.admin-login__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-600);\n  color: var(--brand-neutral-0, #fff);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: background 0.15s, opacity 0.15s;\n}\n.admin-login__submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.admin-login__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.admin-login__submit[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.admin-login__spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_adm-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_adm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-login__back-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.admin-login__back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .admin-login[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-login__brand[_ngcontent-%COMP%] {\n    padding: 2rem;\n    min-height: 200px;\n  }\n  .admin-login__shield[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */"], changeDetection: 0 });
var AdminLoginComponent = _AdminLoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="admin-login">

  <!-- \u2500\u2500 Brand panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="admin-login__brand" aria-hidden="true">
    <div class="admin-login__brand-inner">
      <span class="admin-login__logo">MTWORK</span>
      <div class="admin-login__shield">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <p class="admin-login__brand-tagline" transloco="admin.login.subtitle"></p>
    </div>
  </div>

  <!-- \u2500\u2500 Form panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="admin-login__form-panel">
    <div class="admin-login__card">

      <h1 class="admin-login__title" transloco="admin.login.title"></h1>

      <!-- Error banner -->
      @if (errorMessage()) {
        <div class="admin-login__error" role="alert" aria-live="polite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {{ errorMessage() | transloco }}
        </div>
      }

      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

        <!-- Email -->
        <div class="admin-login__field">
          <label class="admin-login__label" for="adm-email"
                 transloco="admin.login.email"></label>
          <input
            id="adm-email"
            type="email"
            formControlName="email"
            class="admin-login__input"
            [class.admin-login__input--invalid]="fieldInvalid('email')"
            autocomplete="username"
            [attr.aria-label]="'admin.login.emailAriaLabel' | transloco"
            [attr.aria-invalid]="fieldInvalid('email')"
          />
          @if (fieldInvalid('email')) {
            <span class="admin-login__hint" role="alert" transloco="auth.errors.invalidEmail"></span>
          }
        </div>

        <!-- Password -->
        <div class="admin-login__field">
          <label class="admin-login__label" for="adm-password"
                 transloco="admin.login.password"></label>
          <div class="admin-login__password-wrap">
            <input
              id="adm-password"
              [type]="showPassword() ? 'text' : 'password'"
              formControlName="password"
              class="admin-login__input admin-login__input--pw"
              [class.admin-login__input--invalid]="fieldInvalid('password')"
              autocomplete="current-password"
              [attr.aria-label]="'admin.login.passwordAriaLabel' | transloco"
              [attr.aria-invalid]="fieldInvalid('password')"
            />
            <button
              type="button"
              class="admin-login__toggle-pw"
              (click)="togglePassword()"
              [attr.aria-label]="(showPassword() ? 'common.hidePassword' : 'common.showPassword') | transloco">
              @if (showPassword()) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              } @else {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              }
            </button>
          </div>
          @if (fieldInvalid('password')) {
            <span class="admin-login__hint" role="alert" transloco="auth.errors.passwordRequired"></span>
          }
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="admin-login__submit"
          [disabled]="isLoading()"
          [attr.aria-label]="'admin.login.signInLabel' | transloco">
          @if (isLoading()) {
            <span class="admin-login__spinner" aria-hidden="true"></span>
          }
          <span transloco="admin.login.submit"></span>
        </button>

      </form>

      <a routerLink="/login" class="admin-login__back-link" transloco="admin.login.backToLogin"></a>

    </div>
  </div>

</div>
`, styles: ["/* src/features/auth/admin-login/admin-login.component.css */\n.admin-login {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100vh;\n  background: var(--ui-bg-page);\n}\n.admin-login__brand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-600);\n  padding: 3rem;\n}\n.admin-login__brand-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  color: var(--brand-neutral-0, #fff);\n  text-align: center;\n}\n.admin-login__logo {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: var(--brand-neutral-0, #fff);\n}\n.admin-login__shield {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-neutral-0, #fff);\n}\n.admin-login__brand-tagline {\n  font-size: 1rem;\n  opacity: 0.85;\n  max-width: 260px;\n  line-height: 1.5;\n}\n.admin-login__form-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n}\n.admin-login__card {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-login__title {\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-login__error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md, 8px);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  font-size: 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n}\n.admin-login__field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.admin-login__label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-secondary);\n}\n.admin-login__input {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.9375rem;\n  outline: none;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.admin-login__input:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.admin-login__input--invalid {\n  border-color: var(--functional-danger-400);\n}\n.admin-login__hint {\n  font-size: 0.8125rem;\n  color: var(--functional-danger-600);\n}\n.admin-login__password-wrap {\n  position: relative;\n}\n.admin-login__input--pw {\n  padding-inline-end: 2.75rem;\n}\n.admin-login__toggle-pw {\n  position: absolute;\n  inset-inline-end: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--ui-text-muted);\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.admin-login__toggle-pw:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  border-radius: 3px;\n}\n.admin-login__submit {\n  width: 100%;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-600);\n  color: var(--brand-neutral-0, #fff);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: background 0.15s, opacity 0.15s;\n}\n.admin-login__submit:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.admin-login__submit:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.admin-login__submit:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.admin-login__spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: 50%;\n  animation: adm-spin 0.7s linear infinite;\n}\n@keyframes adm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-login__back-link {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.admin-login__back-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .admin-login {\n    grid-template-columns: 1fr;\n  }\n  .admin-login__brand {\n    padding: 2rem;\n    min-height: 200px;\n  }\n  .admin-login__shield {\n    width: 64px;\n    height: 64px;\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/features/auth/admin-login/admin-login.component.ts", lineNumber: 16 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-CMFEFZOR.js.map
