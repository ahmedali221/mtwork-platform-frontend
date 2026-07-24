import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
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
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/forgot-password/forgot-password.ts
var _c0 = () => ["/login"];
function ForgotPasswordComponent_Conditional_35_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ForgotPasswordComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 28, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_35_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 30);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 31);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_35_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, ForgotPasswordComponent_Conditional_35_Conditional_15_Template, 2, 1, "p", 32);
    \u0275\u0275elementStart(16, "button", 33);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 11, "forgotPassword.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 13, "forgotPassword.subtitle"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "forgotPassword.emailLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275property("disabled", ctx_r1.loading())("placeholder", \u0275\u0275pipeBind1(13, 17, "forgotPassword.emailPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 19, "forgotPassword.emailAriaLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.email.trim() || ctx_r1.loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 21, "forgotPassword.sendResetAriaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(19, 23, "forgotPassword.sending") : \u0275\u0275pipeBind1(20, 25, "forgotPassword.sendReset"), " ");
  }
}
function ForgotPasswordComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 34);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "forgotPassword.successTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "forgotPassword.successSub"));
  }
}
var _ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.transloco = inject(TranslocoService);
    this.router = inject(Router);
    this.email = "";
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  }
  submit() {
    const emailVal = this.email.trim();
    if (!emailVal || this.loading())
      return;
    this.loading.set(true);
    this.error.set(null);
    this.authService.forgetPassword(emailVal).subscribe({
      next: () => {
        this.success.set(true);
        this.loading.set(false);
        this.router.navigate(["/otp"], { queryParams: { email: emailVal } });
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? this.transloco.translate("errors.resetFailed"));
        this.loading.set(false);
      }
    });
  }
};
_ForgotPasswordComponent.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordComponent)();
};
_ForgotPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 37, vars: 21, consts: [["fpForm", "ngForm"], [1, "fp-page"], [1, "fp-topbar"], ["routerLink", "/", 1, "fp-topbar__logo"], [1, "fp-topbar__controls"], ["role", "group", 1, "fp-ctrl", "fp-ctrl--theme-group"], [1, "fp-ctrl__theme-btn", "fp-ctrl__theme-btn--active"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], [1, "fp-ctrl__theme-btn"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "fp-main"], [1, "fp-card"], [1, "fp-back", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], ["role", "alert", 1, "fp-success"], [1, "fp-card__title"], [1, "fp-card__subtitle"], ["novalidate", "", 1, "fp-form", 3, "ngSubmit"], [1, "fp-field"], ["for", "fp-email", 1, "fp-label"], ["id", "fp-email", "type", "email", "name", "email", "required", "", "autocomplete", "email", 1, "fp-input", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], ["role", "alert", 1, "fp-error"], ["type", "submit", 1, "fp-btn", 3, "disabled"], [1, "fp-success__icon"], [1, "fp-success__title"], [1, "fp-success__sub"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "a", 3);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275text(4, "MTWORK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 7);
    \u0275\u0275element(11, "circle", 8)(12, "line", 9)(13, "line", 10)(14, "line", 11)(15, "line", 12)(16, "line", 13)(17, "line", 14)(18, "line", 15)(19, "line", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 7);
    \u0275\u0275element(24, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Dark ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "main", 19)(27, "div", 20)(28, "a", 21);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 22);
    \u0275\u0275element(31, "line", 23)(32, "polyline", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, ForgotPasswordComponent_Conditional_35_Template, 21, 27)(36, ForgotPasswordComponent_Conditional_36_Template, 10, 6, "div", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 8, "common.mtworkHome"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "common.themeToggle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 12, "common.lightMode"));
    \u0275\u0275advance(13);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 14, "common.darkMode"));
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 16, "forgotPassword.backToLogin"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 18, "forgotPassword.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.success() ? 35 : 36);
  }
}, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule, RouterLink, TranslocoModule, TranslocoPipe], styles: ["\n\n.fp-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.fp-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 40px;\n}\n.fp-topbar__logo[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  text-decoration: none;\n  letter-spacing: -0.5px;\n}\n.fp-topbar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.fp-ctrl--theme-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 3px;\n  border-radius: var(--radius-50);\n  background: var(--ui-border);\n}\n.fp-ctrl__theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border-radius: var(--radius-50);\n  border: 0;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size);\n  font-family: var(--typography-caption-font-family);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.fp-ctrl__theme-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-surface);\n}\n.fp-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.fp-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 28px 28px 32px;\n  box-shadow: var(--elevation-2);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fp-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--ui-text-main);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  text-decoration: none;\n  width: fit-content;\n}\n.fp-back[_ngcontent-%COMP%]:hover {\n  color: var(--brand-primary-500);\n}\n.fp-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.fp-card__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--ui-text-sub);\n  line-height: 1.6;\n  margin: 0;\n}\n.fp-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.fp-label[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.fp-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border-radius: var(--radius-8);\n  border: var(--border-width-thin) solid var(--ui-border);\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.fp-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.fp-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.fp-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-error[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.fp-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.fp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.88;\n}\n.fp-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: var(--functional-success-50);\n  border: var(--border-width-thin) solid var(--functional-success-200);\n  border-radius: var(--radius-8);\n}\n.fp-success__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--functional-success-600);\n  flex-shrink: 0;\n}\n.fp-success__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.fp-success__sub[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--ui-text-sub);\n  margin: 0;\n}\n/*# sourceMappingURL=forgot-password.css.map */"] });
var ForgotPasswordComponent = _ForgotPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslocoModule], template: `<div class="fp-page">

  <!-- Top bar -->
  <header class="fp-topbar">
    <a routerLink="/" class="fp-topbar__logo" [attr.aria-label]="'common.mtworkHome' | transloco">MTWORK</a>
    <div class="fp-topbar__controls">
      <div class="fp-ctrl fp-ctrl--theme-group" role="group" [attr.aria-label]="'common.themeToggle' | transloco">
        <button class="fp-ctrl__theme-btn fp-ctrl__theme-btn--active" [attr.aria-label]="'common.lightMode' | transloco">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Light
        </button>
        <button class="fp-ctrl__theme-btn" [attr.aria-label]="'common.darkMode' | transloco">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          Dark
        </button>
      </div>
    </div>
  </header>

  <!-- Card -->
  <main class="fp-main">
    <div class="fp-card">

      <a [routerLink]="['/login']" class="fp-back" [attr.aria-label]="'forgotPassword.backToLogin' | transloco">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {{ 'forgotPassword.back' | transloco }}
      </a>

      @if (!success()) {
        <h1 class="fp-card__title">{{ 'forgotPassword.title' | transloco }}</h1>
        <p class="fp-card__subtitle">{{ 'forgotPassword.subtitle' | transloco }}</p>

        <form (ngSubmit)="submit()" #fpForm="ngForm" novalidate class="fp-form">

          <div class="fp-field">
            <label for="fp-email" class="fp-label">{{ 'forgotPassword.emailLabel' | transloco }}</label>
            <input
              id="fp-email"
              class="fp-input"
              type="email"
              [(ngModel)]="email"
              name="email"
              required
              [disabled]="loading()"
              [placeholder]="'forgotPassword.emailPlaceholder' | transloco"
              [attr.aria-label]="'forgotPassword.emailAriaLabel' | transloco"
              autocomplete="email"
            />
          </div>

          @if (error()) {
            <p class="fp-error" role="alert">{{ error() }}</p>
          }

          <button
            type="submit"
            class="fp-btn"
            [disabled]="!email.trim() || loading()"
            [attr.aria-label]="'forgotPassword.sendResetAriaLabel' | transloco"
          >
            {{ loading() ? ('forgotPassword.sending' | transloco) : ('forgotPassword.sendReset' | transloco) }}
          </button>

        </form>
      } @else {
        <div class="fp-success" role="alert">
          <span class="fp-success__icon">\u2713</span>
          <div>
            <p class="fp-success__title">{{ 'forgotPassword.successTitle' | transloco }}</p>
            <p class="fp-success__sub">{{ 'forgotPassword.successSub' | transloco }}</p>
          </div>
        </div>
      }

    </div>
  </main>

</div>
`, styles: ["/* src/features/auth/forgot-password/forgot-password.css */\n.fp-page {\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.fp-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 40px;\n}\n.fp-topbar__logo {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  text-decoration: none;\n  letter-spacing: -0.5px;\n}\n.fp-topbar__controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.fp-ctrl--theme-group {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 3px;\n  border-radius: var(--radius-50);\n  background: var(--ui-border);\n}\n.fp-ctrl__theme-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border-radius: var(--radius-50);\n  border: 0;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size);\n  font-family: var(--typography-caption-font-family);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.fp-ctrl__theme-btn--active {\n  background: var(--brand-neutral-950);\n  color: var(--ui-surface);\n}\n.fp-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.fp-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 28px 28px 32px;\n  box-shadow: var(--elevation-2);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fp-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--ui-text-main);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  text-decoration: none;\n  width: fit-content;\n}\n.fp-back:hover {\n  color: var(--brand-primary-500);\n}\n.fp-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h4-size);\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.fp-card__subtitle {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--ui-text-sub);\n  line-height: 1.6;\n  margin: 0;\n}\n.fp-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.fp-label {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.fp-input {\n  width: 100%;\n  padding: 11px 14px;\n  border-radius: var(--radius-8);\n  border: var(--border-width-thin) solid var(--ui-border);\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.fp-input:focus {\n  border-color: var(--brand-primary-400);\n}\n.fp-input::placeholder {\n  color: var(--ui-text-muted);\n}\n.fp-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-error {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.fp-btn {\n  width: 100%;\n  padding: 13px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.fp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.fp-btn:not(:disabled):hover {\n  opacity: 0.88;\n}\n.fp-success {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: var(--functional-success-50);\n  border: var(--border-width-thin) solid var(--functional-success-200);\n  border-radius: var(--radius-8);\n}\n.fp-success__icon {\n  font-size: 20px;\n  color: var(--functional-success-600);\n  flex-shrink: 0;\n}\n.fp-success__title {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.fp-success__sub {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--ui-text-sub);\n  margin: 0;\n}\n/*# sourceMappingURL=forgot-password.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/features/auth/forgot-password/forgot-password.ts", lineNumber: 15 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-O6LQSHKT.js.map
