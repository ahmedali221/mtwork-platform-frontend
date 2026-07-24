import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import "./chunk-P46WWH45.js";
import "./chunk-RDBMT5X2.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/login/login.component.ts
var _forTrack0 = ($index, $item) => $item.src;
function LoginComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 94);
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", segment_r1.width, "px")("height", segment_r1.height, "px");
    \u0275\u0275property("src", segment_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function LoginComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "img", 96)(2, "img", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const av_r2 = ctx.$implicit;
    \u0275\u0275styleProp("background", av_r2.bg);
    \u0275\u0275advance();
    \u0275\u0275property("src", av_r2.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", av_r2.flag, \u0275\u0275sanitizeUrl);
  }
}
function LoginComponent_For_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r3.track, "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", bar_r3.fill, "%");
  }
}
function LoginComponent_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMessage());
  }
}
function LoginComponent_Conditional_170_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", \u0275\u0275pipeBind1(2, 1, "login.fpSuccess"), " ");
  }
}
function LoginComponent_Conditional_170_Conditional_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.fpError());
  }
}
function LoginComponent_Conditional_170_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "label", 112);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 113);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_170_Conditional_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.fpEmail, $event) || (ctx_r3.fpEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_170_Conditional_16_Conditional_8_Template, 2, 1, "p", 76);
    \u0275\u0275elementStart(9, "button", 114);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Conditional_170_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitForgotPassword());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "login.fpEmailLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fpEmail);
    \u0275\u0275property("disabled", ctx_r3.fpLoading())("placeholder", \u0275\u0275pipeBind1(6, 11, "login.fpEmailPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 13, "login.fpEmailLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.fpError() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.fpEmail.trim() || ctx_r3.fpLoading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 15, "login.fpSendLink"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.fpLoading() ? \u0275\u0275pipeBind1(12, 17, "login.fpSending") : \u0275\u0275pipeBind1(13, 19, "login.fpSendLink"), " ");
  }
}
function LoginComponent_Conditional_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Conditional_170_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForgotModal());
    });
    \u0275\u0275elementStart(2, "div", 101);
    \u0275\u0275listener("click", function LoginComponent_Conditional_170_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "div", 102)(4, "h2", 103);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 104);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Conditional_170_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForgotModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 105);
    \u0275\u0275element(10, "line", 106)(11, "line", 107);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "p", 108);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, LoginComponent_Conditional_170_Conditional_15_Template, 3, 3, "div", 109)(16, LoginComponent_Conditional_170_Conditional_16_Template, 14, 21, "div", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "login.forgotPasswordDialog"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "login.forgotPasswordTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 9, "common.closeDialog"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "login.forgotPasswordSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.fpSuccess() ? 15 : 16);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.languageService = inject(LanguageService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.transloco = inject(TranslocoService);
    this.logoSegments = [
      { src: "assets/images/navbar/logo-1.svg", width: 23.211, height: 15.464 },
      { src: "assets/images/navbar/logo-2.svg", width: 11.6, height: 14.951 },
      { src: "assets/images/navbar/logo-3.svg", width: 23.22, height: 15.464 },
      { src: "assets/images/navbar/logo-4.svg", width: 15.503, height: 14.961 },
      { src: "assets/images/navbar/logo-5.svg", width: 13.7, height: 14.961 },
      { src: "assets/images/navbar/logo-6.svg", width: 13.838, height: 14.951 }
    ];
    this.avatars = [
      { src: "assets/images/login/avatar-1.png", bg: "var(--login-primary)", flag: "assets/images/login/flag-eg.svg" },
      { src: "assets/images/login/avatar-2.png", bg: "var(--brand-secondary-500)", flag: "assets/images/login/flag-sa.svg" },
      { src: "assets/images/login/avatar-3.png", bg: "var(--brand-neutral-900)", flag: "assets/images/login/flag-eg.svg" },
      { src: "assets/images/login/avatar-4.png", bg: "var(--brand-tertiary-500)", flag: "assets/images/login/flag-sa.svg" }
    ];
    this.bars = [
      { track: 100, fill: 73 },
      { track: 90, fill: 69 },
      { track: 55, fill: 65 },
      { track: 90, fill: 69 },
      { track: 78, fill: 71 },
      { track: 55, fill: 65 },
      { track: 43, fill: 72 }
    ];
    this.loginForm = inject(FormBuilder).group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.showForgotModal = signal(false, ...ngDevMode ? [{ debugName: "showForgotModal" }] : []);
    this.fpEmail = "";
    this.fpLoading = signal(false, ...ngDevMode ? [{ debugName: "fpLoading" }] : []);
    this.fpSuccess = signal(false, ...ngDevMode ? [{ debugName: "fpSuccess" }] : []);
    this.fpError = signal(null, ...ngDevMode ? [{ debugName: "fpError" }] : []);
  }
  openForgotModal() {
    this.fpEmail = "";
    this.fpSuccess.set(false);
    this.fpError.set(null);
    this.showForgotModal.set(true);
  }
  closeForgotModal() {
    this.showForgotModal.set(false);
  }
  submitForgotPassword() {
    const email = this.fpEmail.trim();
    if (!email || this.fpLoading())
      return;
    this.fpLoading.set(true);
    this.fpError.set(null);
    this.authService.forgetPassword(email).subscribe({
      next: () => {
        this.fpSuccess.set(true);
        this.fpLoading.set(false);
        this.router.navigate(["/otp"], { queryParams: { email } });
      },
      error: (err) => {
        this.fpError.set(err?.error?.message ?? this.transloco.translate("errors.resetFailed"));
        this.fpLoading.set(false);
      }
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.errorMessage.set("");
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.router.navigate(["/dashboard"]);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMessage.set(err?.error?.errorMsg || err?.error?.ErrorMsg || err?.error?.message || this.transloco.translate("auth.errors.loginFailed"));
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  setTheme(mode) {
    const isDark = this.themeService.isDarkMode();
    if (mode === "dark" && !isDark || mode === "light" && isDark) {
      this.themeService.toggleTheme();
    }
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 171, vars: 84, consts: [[1, "login-page"], [1, "login-panel", "login-panel--left"], ["src", "assets/images/login/promo-pattern-band.png", "alt", "", "aria-hidden", "true", 1, "login-panel__pattern"], [1, "login-panel__topbar"], ["aria-label", "MTWork", 1, "login-panel__logo"], ["alt", "", 1, "login-panel__logo-segment", 3, "src", "width", "height"], [1, "login-panel__controls"], [1, "login-ctrl", "login-ctrl--lang", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["role", "group", 1, "login-ctrl", "login-ctrl--theme-group"], [1, "login-ctrl__theme-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], ["aria-hidden", "true", 1, "login-cluster"], ["aria-hidden", "true", 1, "mock-card", "mock-card--profit"], [1, "mock-card__header"], [1, "mock-card__title"], [1, "mock-card__sub"], [1, "mock-card__chart"], ["viewBox", "0 0 107 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["stroke", "rgba(13,13,13,0.10)", "stroke-width", "0.5"], ["x1", "0", "y1", "0", "x2", "0", "y2", "80"], ["x1", "21.4", "y1", "0", "x2", "21.4", "y2", "80"], ["x1", "42.8", "y1", "0", "x2", "42.8", "y2", "80"], ["x1", "64.2", "y1", "0", "x2", "64.2", "y2", "80"], ["x1", "85.6", "y1", "0", "x2", "85.6", "y2", "80"], ["x1", "107", "y1", "0", "x2", "107", "y2", "80"], ["points", "6.05,74.2 27.2,25.3 53.5,52.7 92,4", "stroke", "var(--brand-secondary-500)", "stroke-width", "2", "fill", "none", "stroke-linejoin", "round", "stroke-linecap", "round"], ["cx", "6.05", "cy", "74.2", "r", "4.3", "fill", "var(--brand-secondary-500)"], ["cx", "27.2", "cy", "25.3", "r", "4.3", "fill", "var(--brand-secondary-500)"], ["cx", "53.5", "cy", "52.7", "r", "4.3", "fill", "var(--brand-secondary-500)"], ["cx", "92", "cy", "4", "r", "4", "fill", "var(--ui-surface)", "stroke", "var(--brand-secondary-500)", "stroke-width", "2"], [1, "mock-card__footer"], [1, "mock-card__value"], [1, "mock-card__badge", "mock-card__badge--up"], ["aria-hidden", "true", 1, "mock-card", "mock-card--employees"], [1, "mock-card__filters"], [1, "mock-filter"], [1, "mock-filter", "mock-filter--add"], [1, "mock-card__divider"], [1, "mock-card__avatars"], [1, "mock-avatar", 3, "background"], ["aria-hidden", "true", 1, "mock-card", "mock-card--payroll"], [1, "mock-card__bars"], [1, "mock-bar", 3, "height"], [1, "login-panel__hero"], [1, "login-panel__headline"], [1, "login-panel__highlight"], [1, "login-panel__sub"], ["aria-hidden", "true", 1, "login-panel__dots"], [1, "login-panel__dot", "login-panel__dot--active"], [1, "login-panel__dot"], [1, "login-panel", "login-panel--right"], [1, "login-form-card"], [1, "login-form__title"], [1, "login-form__subtitle"], ["novalidate", "", 1, "login-form", 3, "ngSubmit", "formGroup"], [1, "login-field"], ["for", "email", 1, "login-label"], [1, "login-required-badge"], ["type", "email", "id", "email", "formControlName", "email", "autocomplete", "email", "aria-required", "true", 1, "login-input", 3, "placeholder"], ["for", "password", 1, "login-label"], ["type", "password", "id", "password", "formControlName", "password", "autocomplete", "current-password", "aria-required", "true", 1, "login-input", 3, "placeholder"], [1, "login-form__forgot"], ["type", "button", 1, "login-link", "login-link--danger", 3, "click"], ["role", "alert", 1, "login-error"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "login-foot"], [1, "login-form__privacy"], ["routerLink", "/register", 1, "login-link"], ["role", "group", 1, "login-social"], ["type", "button", "disabled", "", 1, "login-social__btn"], [1, "login-social__apple"], ["viewBox", "0 0 24 24", "fill", "#ffffff", "aria-hidden", "true"], ["d", "M16.365 1.43c0 1.14-.42 2.2-1.12 2.99-.84.95-2.2 1.68-3.32 1.6-.14-1.1.43-2.27 1.1-3 .77-.84 2.13-1.47 3.34-1.59zM20.5 17.2c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.53-4.12 3.54-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.01-3.05-1.78-4.04-3.35C-.04 16.78-.32 11.6 1.34 8.86c.99-1.62 2.55-2.65 4.04-2.65 1.51 0 2.46 1 3.96 1 1.45 0 2.34-1.01 4.08-1.01 1.31 0 2.7.71 3.69 1.94-3.24 1.78-2.71 6.4.39 7.66z"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], ["viewBox", "0 0 24 24", "fill", "#1877F2", "aria-hidden", "true"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop"], ["alt", "", 1, "login-panel__logo-segment", 3, "src"], [1, "mock-avatar"], ["alt", "", 1, "mock-avatar__img", 3, "src"], ["alt", "", 1, "mock-avatar__flag", 3, "src"], [1, "mock-bar"], [1, "mock-bar__fill"], ["role", "dialog", "aria-modal", "true", 1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-card__header"], [1, "modal-card__title"], ["type", "button", 1, "modal-card__close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-card__subtitle"], ["role", "alert", 1, "modal-card__success"], [1, "modal-card__group"], [1, "modal-field"], ["for", "fp-modal-email", 1, "modal-label"], ["id", "fp-modal-email", "type", "email", "name", "fpEmail", "autocomplete", "email", 1, "modal-input", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], ["type", "button", 1, "modal-btn", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
    \u0275\u0275repeaterCreate(5, LoginComponent_For_6_Template, 1, 5, "img", 5, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_8_listener() {
      return ctx.toggleLanguage();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "circle", 9)(12, "line", 10)(13, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
      return ctx.setTheme("light");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 14);
    \u0275\u0275element(20, "circle", 15)(21, "line", 16)(22, "line", 17)(23, "line", 18)(24, "line", 19)(25, "line", 20)(26, "line", 21)(27, "line", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 13);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
      return ctx.setTheme("dark");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 14);
    \u0275\u0275element(32, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Dark ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26)(37, "span", 27);
    \u0275\u0275text(38, "Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 28);
    \u0275\u0275text(40, "Last Month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 30)(43, "g", 31);
    \u0275\u0275element(44, "line", 32)(45, "line", 33)(46, "line", 34)(47, "line", 35)(48, "line", 36)(49, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "polyline", 38)(51, "circle", 39)(52, "circle", 40)(53, "circle", 41)(54, "circle", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "div", 43)(56, "span", 44);
    \u0275\u0275text(57, "823K");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 45);
    \u0275\u0275text(59, "+9.1%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 46)(61, "div", 47)(62, "span", 48);
    \u0275\u0275text(63, "Country ");
    \u0275\u0275elementStart(64, "i");
    \u0275\u0275text(65, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "span", 48);
    \u0275\u0275text(67, "Worker type ");
    \u0275\u0275elementStart(68, "i");
    \u0275\u0275text(69, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span", 48);
    \u0275\u0275text(71, "Job title ");
    \u0275\u0275elementStart(72, "i");
    \u0275\u0275text(73, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "span", 49);
    \u0275\u0275text(75, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(76, "div", 50);
    \u0275\u0275elementStart(77, "div", 51);
    \u0275\u0275repeaterCreate(78, LoginComponent_For_79_Template, 3, 4, "div", 52, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 53)(81, "div", 26)(82, "span", 27);
    \u0275\u0275text(83, "Payroll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 28);
    \u0275\u0275text(85, "Last Month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 54);
    \u0275\u0275repeaterCreate(87, LoginComponent_For_88_Template, 2, 4, "div", 55, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 43)(90, "span", 44);
    \u0275\u0275text(91, "823K");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 45);
    \u0275\u0275text(93, "+9.1%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 56)(95, "h2", 57)(96, "span", 58);
    \u0275\u0275text(97, "Spend 51%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, " less time onboarding global employees ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 59);
    \u0275\u0275text(100, "Let us handle global HR for you\u2014including hiring, compliance, onboarding, invoicing, payments, and more.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 60);
    \u0275\u0275element(102, "span", 61)(103, "span", 62)(104, "span", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 63)(106, "div", 64)(107, "h2", 65);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 66);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "form", 67);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_113_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(114, "div", 68)(115, "label", 69);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementStart(118, "span", 70);
    \u0275\u0275pipe(119, "transloco");
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(122, "input", 71);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 68)(125, "label", 72);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "transloco");
    \u0275\u0275elementStart(128, "span", 70);
    \u0275\u0275pipe(129, "transloco");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(132, "input", 73);
    \u0275\u0275pipe(133, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 74)(135, "button", 75);
    \u0275\u0275pipe(136, "transloco");
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_135_listener() {
      return ctx.openForgotModal();
    });
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(139, LoginComponent_Conditional_139_Template, 2, 1, "p", 76);
    \u0275\u0275elementStart(140, "button", 77);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "transloco");
    \u0275\u0275pipe(143, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 78)(145, "p", 79);
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "transloco");
    \u0275\u0275pipe(148, "transloco");
    \u0275\u0275elementStart(149, "a", 80);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 81);
    \u0275\u0275pipe(153, "transloco");
    \u0275\u0275elementStart(154, "button", 82);
    \u0275\u0275pipe(155, "transloco");
    \u0275\u0275elementStart(156, "span", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(157, "svg", 84);
    \u0275\u0275element(158, "path", 85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(159, "button", 82);
    \u0275\u0275pipe(160, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(161, "svg", 86);
    \u0275\u0275element(162, "path", 87)(163, "path", 88)(164, "path", 89)(165, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(166, "button", 82);
    \u0275\u0275pipe(167, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(168, "svg", 91);
    \u0275\u0275element(169, "path", 92);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275conditionalCreate(170, LoginComponent_Conditional_170_Template, 17, 13, "div", 93);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.logoSegments);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 34, "common.toggleLanguage"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.languageService.currentLang() === "en" ? "Arabic" : "English", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 36, "common.themeToggle"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("login-ctrl__theme-btn--active", !ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 38, "common.lightMode"));
    \u0275\u0275advance(12);
    \u0275\u0275classProp("login-ctrl__theme-btn--active", ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 40, "common.darkMode"));
    \u0275\u0275advance(49);
    \u0275\u0275repeater(ctx.avatars);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.bars);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 42, "login.welcome"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 44, "login.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(117, 46, "login.emailLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(119, 48, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 50, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(123, 52, "login.emailPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 54, "login.passwordLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(129, 56, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 58, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(133, 60, "login.passwordPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(136, 62, "login.openForgotDialog"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(138, 64, "login.forgotPassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage() ? 139 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading());
    \u0275\u0275attribute("aria-busy", ctx.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? \u0275\u0275pipeBind1(142, 66, "login.loading") : \u0275\u0275pipeBind1(143, 68, "login.submit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(147, 70, "login.privacy"), " ", \u0275\u0275pipeBind1(148, 72, "login.signUpPrompt"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 74, "login.signUpLink"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(153, 76, "login.socialGroup"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(155, 78, "login.signInApple"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(160, 80, "login.signInGoogle"));
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(167, 82, "login.signInFacebook"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showForgotModal() ? 170 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, RouterLink, TranslocoModule, TranslocoPipe], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  --login-required-bg: rgba(252, 190, 4, 0.4);\n  --login-field-bg: var(--brand-grays-500);\n  --login-surface-white: #ffffff;\n  --login-apple-badge: #ffd166;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100vh;\n}\n.login-panel--left[_ngcontent-%COMP%] {\n  --ui-surface: #ffffff;\n  --ui-text-main: var(--brand-grays-900);\n  --ui-text-muted: var(--brand-neutral-400);\n  --ui-text-sub: var(--brand-neutral-400);\n  --ui-bg: var(--brand-grays-500);\n  --ui-border: var(--brand-grays-200, #e9e6e1);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 23px 3.7% 40px;\n  gap: 28px;\n  background-color: var(--login-primary);\n  overflow: hidden;\n}\n.login-panel__pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  block-size: auto;\n  object-fit: contain;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 0;\n}\n.login-panel__topbar[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 4;\n}\n.login-panel__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.login-panel__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n}\n.login-panel__logo-segment[_ngcontent-%COMP%] {\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.login-ctrl--lang[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--login-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.login-ctrl--theme-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--login-surface-white);\n}\n.login-ctrl__theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.login-ctrl__theme-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-900);\n  color: var(--ui-surface);\n}\n.login-cluster[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  align-self: center;\n  inline-size: min(666px, 100%);\n  aspect-ratio: 666 / 517;\n  margin-block-start: auto;\n}\n.mock-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  box-shadow: var(--elevation-4);\n  display: flex;\n  flex-direction: column;\n}\n.mock-card--profit[_ngcontent-%COMP%] {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 20.87%;\n  block-size: 37.92%;\n  padding: 16px;\n  gap: 12px;\n  z-index: 1;\n}\n.mock-card--employees[_ngcontent-%COMP%] {\n  inset-inline-start: 12.85%;\n  inset-block-start: 24.95%;\n  inline-size: 74.32%;\n  block-size: 43.13%;\n  padding: 16px;\n  gap: 16px;\n  z-index: 2;\n}\n.mock-card--payroll[_ngcontent-%COMP%] {\n  inset-inline-start: 71.92%;\n  inset-block-start: 60.15%;\n  inline-size: 28.08%;\n  block-size: 39.85%;\n  padding: 16px;\n  gap: 24px;\n  z-index: 3;\n}\n.mock-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  width: 100%;\n}\n.mock-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--brand-neutral-950);\n}\n.mock-card__sub[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.mock-card__chart[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.mock-card__chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.mock-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mock-card__value[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--brand-neutral-950);\n}\n.mock-card__badge[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  font-weight: 700;\n  color: #36c220;\n}\n.mock-card__footer[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.mock-card__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13.229px;\n}\n.mock-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4.41px;\n  height: 35.278px;\n  padding: 8.819px;\n  font-family: var(--font-family-dm-sans);\n  font-size: 13.229px;\n  color: var(--ui-text-muted);\n  border: 0.551px solid rgba(13, 13, 13, 0.25);\n  border-radius: 8.819px;\n  white-space: nowrap;\n}\n.mock-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 11px;\n}\n.mock-filter--add[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  justify-content: center;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--login-required-bg);\n  color: var(--brand-neutral-900);\n  font-size: 16px;\n}\n.mock-card__divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(13, 13, 13, 0.1);\n  margin: 0;\n}\n.mock-card__avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mock-avatar[_ngcontent-%COMP%] {\n  width: 98.755px;\n  height: 98.755px;\n  border-radius: var(--radius-full);\n  position: relative;\n  flex: 0 0 auto;\n}\n.mock-avatar__img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--radius-full);\n}\n.mock-avatar__flag[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 2px;\n  inset-block-end: 6px;\n  width: 26px;\n  height: auto;\n  z-index: 2;\n  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.15));\n}\n.mock-card__bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex: 1;\n  min-height: 0;\n}\n.mock-bar[_ngcontent-%COMP%] {\n  width: 9px;\n  flex: 0 0 9px;\n  background: var(--login-field-bg);\n  border-radius: 21px;\n  display: flex;\n  align-items: flex-end;\n}\n.mock-bar__fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--login-primary);\n  border-radius: 21px;\n}\n.login-panel__hero[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: min(613px, 100%);\n  margin-inline-start: clamp(0px, 5vw, 37px);\n  z-index: 1;\n}\n.login-panel__headline[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--ui-surface);\n  line-height: 1.3;\n  margin: 0 0 16px;\n}\n.login-panel__highlight[_ngcontent-%COMP%] {\n  display: inline;\n  background: var(--landing-hr-highlight-bg);\n  color: var(--ui-surface);\n  padding-inline: 8px;\n  border-radius: var(--radius-4);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.login-panel__sub[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: rgba(255, 255, 255, 0.72);\n  line-height: 1.5;\n  margin: 0 0 24px;\n  inline-size: 556px;\n}\n.login-panel__dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.login-panel__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.35);\n}\n.login-panel__dot--active[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  width: 20px;\n}\n.login-panel--right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: var(--brand-grays-50);\n  padding-block: 32px;\n  padding-inline: clamp(24px, calc(845px - 50vw), 125px) 24px;\n}\n.login-form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 528px;\n  background: var(--login-surface-white);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px 32px;\n  box-shadow: none;\n}\n.login-form__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-grays-900);\n  margin: 0 0 4px;\n}\n.login-form__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-work-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0 0 24px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.login-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.login-required-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: var(--login-required-bg);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\n.login-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--login-field-bg);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 1px var(--login-primary);\n}\n.login-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.login-form__forgot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.login-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  color: var(--login-primary);\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-link--danger[_ngcontent-%COMP%] {\n  color: var(--brand-tertiary-500);\n}\n.login-error[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  margin-block-start: 16px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  background: var(--brand-neutral-950);\n  color: var(--login-surface-white);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.88;\n}\n.login-btn--primary-dark[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n}\n.login-foot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-block-start: 32px;\n}\n.login-form__privacy[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  margin: 0;\n  line-height: 1.5;\n}\n.login-form__privacy[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.login-social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  width: 204px;\n  max-width: 100%;\n}\n.login-social__btn[_ngcontent-%COMP%] {\n  flex: 1 0 0;\n  min-width: 0;\n  height: 56px;\n  padding: 12px 16px;\n  border-radius: var(--radius-12);\n  border: 0;\n  background: var(--login-field-bg);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.login-social__btn[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--elevation-1);\n}\n.login-social__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.login-social__apple[_ngcontent-%COMP%] {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-social__apple[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: var(--login-apple-badge);\n}\n.login-social__apple[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 18px;\n  height: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: var(--radius-20);\n  padding: 16px 24px;\n  width: 567px;\n  max-width: calc(100vw - 48px);\n  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.modal-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.4;\n  color: #1b1b1b;\n  margin: 0;\n}\n.modal-card__close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-4);\n  border: 0;\n  background: transparent;\n  color: #282828;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.modal-card__close[_ngcontent-%COMP%]:hover {\n  background: #f7f5f2;\n}\n.modal-card__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 18px;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.5;\n}\n.modal-card__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modal-label[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #1b1b1b;\n}\n.modal-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: #f7f5f2;\n  color: #1b1b1b;\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\n.modal-input[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 1px #2e358f;\n}\n.modal-input[_ngcontent-%COMP%]::placeholder {\n  color: #999999;\n}\n.modal-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 8px 12px;\n  border: 1px solid #2e358f;\n  border-radius: var(--radius-8);\n  background: #2e358f;\n  color: #ffffff;\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  box-shadow:\n    0px 0px 0px 2px rgba(46, 53, 143, 0.2),\n    inset 0px 0px 0px 2px #32399a,\n    inset 0px -2px 2px 0px #252a74;\n  transition: opacity 0.2s;\n}\n.modal-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.9;\n}\n.modal-card__success[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: var(--radius-8);\n  background: var(--functional-success-50);\n  border: var(--border-width-thin) solid var(--functional-success-200);\n  color: var(--functional-success-700);\n  font-size: var(--caption-2-size);\n}\n@media (max-width: 900px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-panel--left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-panel--right[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    justify-content: center;\n    padding-inline: 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'], changeDetection: 0 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="login-page">

  <!-- \u2500\u2500 Left Panel (Figma art 3:123582 = 742\xD71055, scaled stage) \u2500\u2500\u2500 -->
  <div class="login-panel login-panel--left">

    <!-- Promo pattern \u2014 EXACT Figma render (cropped from art 3:123582,
         baked opacity + composition), placed once below the topbar.
         No tile/repeat/mirror/stretch. -->
    <img class="login-panel__pattern" src="assets/images/login/promo-pattern-band.png" alt="" aria-hidden="true" />

      <!-- Top bar: logo + controls  (x21.5 y23 699\xD732) -->
      <div class="login-panel__topbar">
        <span class="login-panel__logo" aria-label="MTWork">
          @for (segment of logoSegments; track segment.src) {
            <img class="login-panel__logo-segment" [src]="segment.src" alt="" [style.width.px]="segment.width" [style.height.px]="segment.height" />
          }
        </span>
        <div class="login-panel__controls">
          <button class="login-ctrl login-ctrl--lang" (click)="toggleLanguage()" [attr.aria-label]="'common.toggleLanguage' | transloco">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {{ languageService.currentLang() === 'en' ? 'Arabic' : 'English' }}
          </button>
          <div class="login-ctrl login-ctrl--theme-group" role="group" [attr.aria-label]="'common.themeToggle' | transloco">
            <button class="login-ctrl__theme-btn" [class.login-ctrl__theme-btn--active]="!themeService.isDarkMode()" (click)="setTheme('light')" [attr.aria-label]="'common.lightMode' | transloco">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              Light
            </button>
            <button class="login-ctrl__theme-btn" [class.login-ctrl__theme-btn--active]="themeService.isDarkMode()" (click)="setTheme('dark')" [attr.aria-label]="'common.darkMode' | transloco">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              Dark
            </button>
          </div>
        </div>
      </div>

      <!-- Dashboard mock cluster (Figma cards span 666\xD7517, kept as one
           overlapping composition centred between topbar and hero) -->
      <div class="login-cluster" aria-hidden="true">

      <!-- Profit card  (3:123633  139\xD7196, pad16 gap12) -->
      <div class="mock-card mock-card--profit" aria-hidden="true">
        <div class="mock-card__header">
          <span class="mock-card__title">Profit</span>
          <span class="mock-card__sub">Last Month</span>
        </div>
        <div class="mock-card__chart">
          <!-- 6 faint vertical gridlines + blue line + 3 dots + endpoint ring -->
          <svg viewBox="0 0 107 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(13,13,13,0.10)" stroke-width="0.5">
              <line x1="0" y1="0" x2="0" y2="80"/>
              <line x1="21.4" y1="0" x2="21.4" y2="80"/>
              <line x1="42.8" y1="0" x2="42.8" y2="80"/>
              <line x1="64.2" y1="0" x2="64.2" y2="80"/>
              <line x1="85.6" y1="0" x2="85.6" y2="80"/>
              <line x1="107" y1="0" x2="107" y2="80"/>
            </g>
            <polyline points="6.05,74.2 27.2,25.3 53.5,52.7 92,4" stroke="var(--brand-secondary-500)" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="6.05" cy="74.2" r="4.3" fill="var(--brand-secondary-500)"/>
            <circle cx="27.2" cy="25.3" r="4.3" fill="var(--brand-secondary-500)"/>
            <circle cx="53.5" cy="52.7" r="4.3" fill="var(--brand-secondary-500)"/>
            <circle cx="92" cy="4" r="4" fill="var(--ui-surface)" stroke="var(--brand-secondary-500)" stroke-width="2"/>
          </svg>
        </div>
        <div class="mock-card__footer">
          <span class="mock-card__value">823K</span>
          <span class="mock-card__badge mock-card__badge--up">+9.1%</span>
        </div>
      </div>

      <!-- People/filter card  (x120.56 y402  495\xD7223) -->
      <div class="mock-card mock-card--employees" aria-hidden="true">
        <div class="mock-card__filters">
          <span class="mock-filter">Country <i>\u25BE</i></span>
          <span class="mock-filter">Worker type <i>\u25BE</i></span>
          <span class="mock-filter">Job title <i>\u25BE</i></span>
          <span class="mock-filter mock-filter--add">+</span>
        </div>
        <div class="mock-card__divider"></div>
        <div class="mock-card__avatars">
          @for(av of avatars; track av.src) {
            <div class="mock-avatar" [style.background]="av.bg">
              <img class="mock-avatar__img" [src]="av.src" alt="" />
              <img class="mock-avatar__flag" [src]="av.flag" alt="" />
            </div>
          }
        </div>
      </div>

      <!-- Payroll card  (x514 y583.99  187\xD7206) -->
      <div class="mock-card mock-card--payroll" aria-hidden="true">
        <div class="mock-card__header">
          <span class="mock-card__title">Payroll</span>
          <span class="mock-card__sub">Last Month</span>
        </div>
        <div class="mock-card__bars">
          @for(bar of bars; track $index) {
            <div class="mock-bar" [style.height.%]="bar.track">
              <div class="mock-bar__fill" [style.height.%]="bar.fill"></div>
            </div>
          }
        </div>
        <div class="mock-card__footer">
          <span class="mock-card__value">823K</span>
          <span class="mock-card__badge mock-card__badge--up">+9.1%</span>
        </div>
      </div>

      </div><!-- /.login-cluster -->

      <!-- Hero text  (x64.5 y761.12  613\xD7196) -->
      <div class="login-panel__hero">
        <h2 class="login-panel__headline">
          <span class="login-panel__highlight">Spend 51%</span>
          less time onboarding global employees
        </h2>
        <p class="login-panel__sub">Let us handle global HR for you\u2014including hiring, compliance, onboarding, invoicing, payments, and more.</p>
        <div class="login-panel__dots" aria-hidden="true">
          <span class="login-panel__dot login-panel__dot--active"></span>
          <span class="login-panel__dot"></span>
          <span class="login-panel__dot"></span>
        </div>
      </div>

  </div>

  <!-- \u2500\u2500 Right Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="login-panel login-panel--right">
    <div class="login-form-card">

      <h2 class="login-form__title">{{ 'login.welcome' | transloco }}</h2>
      <p class="login-form__subtitle">{{ 'login.subtitle' | transloco }}</p>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate class="login-form">

        <!-- Email -->
        <div class="login-field">
          <label for="email" class="login-label">
            {{ 'login.emailLabel' | transloco }}
            <span class="login-required-badge" [attr.aria-label]="'common.required' | transloco">{{ 'common.required' | transloco }}</span>
          </label>
          <input
            type="email"
            id="email"
            formControlName="email"
            class="login-input"
            [placeholder]="'login.emailPlaceholder' | transloco"
            autocomplete="email"
            aria-required="true"
          />
        </div>

        <!-- Password -->
        <div class="login-field">
          <label for="password" class="login-label">
            {{ 'login.passwordLabel' | transloco }}
            <span class="login-required-badge" [attr.aria-label]="'common.required' | transloco">{{ 'common.required' | transloco }}</span>
          </label>
          <input
            type="password"
            id="password"
            formControlName="password"
            class="login-input"
            [placeholder]="'login.passwordPlaceholder' | transloco"
            autocomplete="current-password"
            aria-required="true"
          />
        </div>

        <!-- Forgot password -->
        <div class="login-form__forgot">
          <button type="button" (click)="openForgotModal()" class="login-link login-link--danger" [attr.aria-label]="'login.openForgotDialog' | transloco">
            {{ 'login.forgotPassword' | transloco }}
          </button>
        </div>

        <!-- Error -->
        @if (errorMessage()) {
          <p class="login-error" role="alert">{{ errorMessage() }}</p>
        }

        <!-- Submit -->
        <button
          type="submit"
          class="login-btn"
          [disabled]="isLoading()"
          [attr.aria-busy]="isLoading()"
        >
          {{ isLoading() ? ('login.loading' | transloco) : ('login.submit' | transloco) }}
        </button>

      </form>

      <!-- Privacy + sign-up (one centered paragraph) + social row -->
      <div class="login-foot">
        <p class="login-form__privacy">
          {{ 'login.privacy' | transloco }}
          {{ 'login.signUpPrompt' | transloco }}
          <a routerLink="/register" class="login-link">{{ 'login.signUpLink' | transloco }}</a>
        </p>

        <!-- Social (visual placeholders \u2014 no SSO backend) -->
        <div class="login-social" role="group" [attr.aria-label]="'login.socialGroup' | transloco">
          <button type="button" class="login-social__btn" disabled [attr.aria-label]="'login.signInApple' | transloco">
            <!-- Figma integration icon: white apple on a #ffd166 rounded badge -->
            <span class="login-social__apple">
              <svg viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true"><path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.99-.84.95-2.2 1.68-3.32 1.6-.14-1.1.43-2.27 1.1-3 .77-.84 2.13-1.47 3.34-1.59zM20.5 17.2c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.53-4.12 3.54-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.01-3.05-1.78-4.04-3.35C-.04 16.78-.32 11.6 1.34 8.86c.99-1.62 2.55-2.65 4.04-2.65 1.51 0 2.46 1 3.96 1 1.45 0 2.34-1.01 4.08-1.01 1.31 0 2.7.71 3.69 1.94-3.24 1.78-2.71 6.4.39 7.66z"/></svg>
            </span>
          </button>
          <button type="button" class="login-social__btn" disabled [attr.aria-label]="'login.signInGoogle' | transloco">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          </button>
          <button type="button" class="login-social__btn" disabled [attr.aria-label]="'login.signInFacebook' | transloco">
            <svg viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- \u2500\u2500 Forgot Password Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (showForgotModal()) {
  <div class="modal-backdrop" (click)="closeForgotModal()" role="dialog" aria-modal="true" [attr.aria-label]="'login.forgotPasswordDialog' | transloco">
    <div class="modal-card" (click)="$event.stopPropagation()">

      <div class="modal-card__header">
        <h2 class="modal-card__title">{{ 'login.forgotPasswordTitle' | transloco }}</h2>
        <button type="button" class="modal-card__close" (click)="closeForgotModal()" [attr.aria-label]="'common.closeDialog' | transloco">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <p class="modal-card__subtitle">{{ 'login.forgotPasswordSubtitle' | transloco }}</p>

      @if (fpSuccess()) {
        <div class="modal-card__success" role="alert">
          \u2713 {{ 'login.fpSuccess' | transloco }}
        </div>
      } @else {
        <div class="modal-card__group">
          <div class="modal-field">
            <label for="fp-modal-email" class="modal-label">{{ 'login.fpEmailLabel' | transloco }}</label>
            <input
              id="fp-modal-email"
              type="email"
              [(ngModel)]="fpEmail"
              name="fpEmail"
              [disabled]="fpLoading()"
              [placeholder]="'login.fpEmailPlaceholder' | transloco"
              [attr.aria-label]="'login.fpEmailLabel' | transloco"
              autocomplete="email"
              class="modal-input"
            />
          </div>

          @if (fpError()) {
            <p class="login-error" role="alert">{{ fpError() }}</p>
          }

          <button
            type="button"
            (click)="submitForgotPassword()"
            [disabled]="!fpEmail.trim() || fpLoading()"
            class="modal-btn"
            [attr.aria-label]="'login.fpSendLink' | transloco"
          >
            {{ fpLoading() ? ('login.fpSending' | transloco) : ('login.fpSendLink' | transloco) }}
          </button>
        </div>
      }

    </div><!-- /.modal-card -->
  </div><!-- /.modal-backdrop -->
}
`, styles: ['/* src/features/auth/login/login.component.css */\n.login-page {\n  --login-primary: var(--landing-navbar-primary);\n  --login-required-bg: rgba(252, 190, 4, 0.4);\n  --login-field-bg: var(--brand-grays-500);\n  --login-surface-white: #ffffff;\n  --login-apple-badge: #ffd166;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100vh;\n}\n.login-panel--left {\n  --ui-surface: #ffffff;\n  --ui-text-main: var(--brand-grays-900);\n  --ui-text-muted: var(--brand-neutral-400);\n  --ui-text-sub: var(--brand-neutral-400);\n  --ui-bg: var(--brand-grays-500);\n  --ui-border: var(--brand-grays-200, #e9e6e1);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 23px 3.7% 40px;\n  gap: 28px;\n  background-color: var(--login-primary);\n  overflow: hidden;\n}\n.login-panel__pattern {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  block-size: auto;\n  object-fit: contain;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 0;\n}\n.login-panel__topbar {\n  position: relative;\n  flex: 0 0 auto;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 4;\n}\n.login-panel__controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.login-panel__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n}\n.login-panel__logo-segment {\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.login-ctrl--lang {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--login-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.login-ctrl--theme-group {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--login-surface-white);\n}\n.login-ctrl__theme-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.login-ctrl__theme-btn--active {\n  background: var(--brand-neutral-900);\n  color: var(--ui-surface);\n}\n.login-cluster {\n  position: relative;\n  flex: 0 0 auto;\n  align-self: center;\n  inline-size: min(666px, 100%);\n  aspect-ratio: 666 / 517;\n  margin-block-start: auto;\n}\n.mock-card {\n  position: absolute;\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  box-shadow: var(--elevation-4);\n  display: flex;\n  flex-direction: column;\n}\n.mock-card--profit {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 20.87%;\n  block-size: 37.92%;\n  padding: 16px;\n  gap: 12px;\n  z-index: 1;\n}\n.mock-card--employees {\n  inset-inline-start: 12.85%;\n  inset-block-start: 24.95%;\n  inline-size: 74.32%;\n  block-size: 43.13%;\n  padding: 16px;\n  gap: 16px;\n  z-index: 2;\n}\n.mock-card--payroll {\n  inset-inline-start: 71.92%;\n  inset-block-start: 60.15%;\n  inline-size: 28.08%;\n  block-size: 39.85%;\n  padding: 16px;\n  gap: 24px;\n  z-index: 3;\n}\n.mock-card__header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  width: 100%;\n}\n.mock-card__title {\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--brand-neutral-950);\n}\n.mock-card__sub {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.mock-card__chart {\n  flex: 1;\n  min-height: 0;\n}\n.mock-card__chart svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.mock-card__footer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mock-card__value {\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--brand-neutral-950);\n}\n.mock-card__badge {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  font-weight: 700;\n  color: #36c220;\n}\n.mock-card__footer {\n  justify-content: space-between;\n}\n.mock-card__filters {\n  display: flex;\n  align-items: center;\n  gap: 13.229px;\n}\n.mock-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 4.41px;\n  height: 35.278px;\n  padding: 8.819px;\n  font-family: var(--font-family-dm-sans);\n  font-size: 13.229px;\n  color: var(--ui-text-muted);\n  border: 0.551px solid rgba(13, 13, 13, 0.25);\n  border-radius: 8.819px;\n  white-space: nowrap;\n}\n.mock-filter i {\n  font-style: normal;\n  font-size: 11px;\n}\n.mock-filter--add {\n  margin-inline-start: auto;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  justify-content: center;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--login-required-bg);\n  color: var(--brand-neutral-900);\n  font-size: 16px;\n}\n.mock-card__divider {\n  height: 0.5px;\n  background: rgba(13, 13, 13, 0.1);\n  margin: 0;\n}\n.mock-card__avatars {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mock-avatar {\n  width: 98.755px;\n  height: 98.755px;\n  border-radius: var(--radius-full);\n  position: relative;\n  flex: 0 0 auto;\n}\n.mock-avatar__img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--radius-full);\n}\n.mock-avatar__flag {\n  position: absolute;\n  inset-inline-end: 2px;\n  inset-block-end: 6px;\n  width: 26px;\n  height: auto;\n  z-index: 2;\n  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.15));\n}\n.mock-card__bars {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex: 1;\n  min-height: 0;\n}\n.mock-bar {\n  width: 9px;\n  flex: 0 0 9px;\n  background: var(--login-field-bg);\n  border-radius: 21px;\n  display: flex;\n  align-items: flex-end;\n}\n.mock-bar__fill {\n  width: 100%;\n  background: var(--login-primary);\n  border-radius: 21px;\n}\n.login-panel__hero {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: min(613px, 100%);\n  margin-inline-start: clamp(0px, 5vw, 37px);\n  z-index: 1;\n}\n.login-panel__headline {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--ui-surface);\n  line-height: 1.3;\n  margin: 0 0 16px;\n}\n.login-panel__highlight {\n  display: inline;\n  background: var(--landing-hr-highlight-bg);\n  color: var(--ui-surface);\n  padding-inline: 8px;\n  border-radius: var(--radius-4);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.login-panel__sub {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: rgba(255, 255, 255, 0.72);\n  line-height: 1.5;\n  margin: 0 0 24px;\n  inline-size: 556px;\n}\n.login-panel__dots {\n  display: flex;\n  gap: 6px;\n}\n.login-panel__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.35);\n}\n.login-panel__dot--active {\n  background: var(--ui-surface);\n  width: 20px;\n}\n.login-panel--right {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: var(--brand-grays-50);\n  padding-block: 32px;\n  padding-inline: clamp(24px, calc(845px - 50vw), 125px) 24px;\n}\n.login-form-card {\n  width: 100%;\n  max-width: 528px;\n  background: var(--login-surface-white);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px 32px;\n  box-shadow: none;\n}\n.login-form__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-grays-900);\n  margin: 0 0 4px;\n}\n.login-form__subtitle {\n  font-family: var(--font-family-work-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0 0 24px;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.login-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.login-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n}\n.login-required-badge {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 6px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  background: var(--login-required-bg);\n  padding: 2px 4px;\n  border-radius: var(--radius-4);\n  white-space: nowrap;\n}\n.login-input {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: var(--login-field-bg);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\n.login-input:focus {\n  box-shadow: inset 0 0 0 1px var(--login-primary);\n}\n.login-input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.login-form__forgot {\n  display: flex;\n  justify-content: flex-start;\n}\n.login-link {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n  color: var(--login-primary);\n  text-decoration: none;\n}\n.login-link:hover {\n  text-decoration: underline;\n}\n.login-link--danger {\n  color: var(--brand-tertiary-500);\n}\n.login-error {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.login-btn {\n  width: 100%;\n  height: 48px;\n  margin-block-start: 16px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  background: var(--brand-neutral-950);\n  color: var(--login-surface-white);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.login-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-btn:not(:disabled):hover {\n  opacity: 0.88;\n}\n.login-btn--primary-dark {\n  background: var(--login-primary);\n}\n.login-foot {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-block-start: 32px;\n}\n.login-form__privacy {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n  text-align: center;\n  margin: 0;\n  line-height: 1.5;\n}\n.login-form__privacy .login-link {\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.login-social {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  width: 204px;\n  max-width: 100%;\n}\n.login-social__btn {\n  flex: 1 0 0;\n  min-width: 0;\n  height: 56px;\n  padding: 12px 16px;\n  border-radius: var(--radius-12);\n  border: 0;\n  background: var(--login-field-bg);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.login-social__btn:hover {\n  box-shadow: var(--elevation-1);\n}\n.login-social__btn svg {\n  width: 32px;\n  height: 32px;\n}\n.login-social__apple {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-social__apple::before {\n  content: "";\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: var(--login-apple-badge);\n}\n.login-social__apple svg {\n  position: relative;\n  width: 18px;\n  height: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-card {\n  background: #ffffff;\n  border-radius: var(--radius-20);\n  padding: 16px 24px;\n  width: 567px;\n  max-width: calc(100vw - 48px);\n  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.modal-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.modal-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.4;\n  color: #1b1b1b;\n  margin: 0;\n}\n.modal-card__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-4);\n  border: 0;\n  background: transparent;\n  color: #282828;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.modal-card__close:hover {\n  background: #f7f5f2;\n}\n.modal-card__subtitle {\n  font-family: var(--font-family-dm-sans);\n  font-size: 18px;\n  font-weight: 400;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.5;\n}\n.modal-card__group {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.modal-label {\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #1b1b1b;\n}\n.modal-input {\n  width: 100%;\n  height: 40px;\n  padding: 12px 8px;\n  border-radius: var(--radius-8);\n  border: 0;\n  background: #f7f5f2;\n  color: #1b1b1b;\n  font-family: var(--font-family-dm-sans);\n  font-size: 12px;\n  line-height: 1.5;\n  outline: none;\n  transition: box-shadow 0.2s;\n}\n.modal-input:focus {\n  box-shadow: inset 0 0 0 1px #2e358f;\n}\n.modal-input::placeholder {\n  color: #999999;\n}\n.modal-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-btn {\n  width: 100%;\n  height: 40px;\n  padding: 8px 12px;\n  border: 1px solid #2e358f;\n  border-radius: var(--radius-8);\n  background: #2e358f;\n  color: #ffffff;\n  font-family: var(--font-family-dm-sans);\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  box-shadow:\n    0px 0px 0px 2px rgba(46, 53, 143, 0.2),\n    inset 0px 0px 0px 2px #32399a,\n    inset 0px -2px 2px 0px #252a74;\n  transition: opacity 0.2s;\n}\n.modal-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-btn:not(:disabled):hover {\n  opacity: 0.9;\n}\n.modal-card__success {\n  padding: 12px 16px;\n  border-radius: var(--radius-8);\n  background: var(--functional-success-50);\n  border: var(--border-width-thin) solid var(--functional-success-200);\n  color: var(--functional-success-700);\n  font-size: var(--caption-2-size);\n}\n@media (max-width: 900px) {\n  .login-page {\n    grid-template-columns: 1fr;\n  }\n  .login-panel--left {\n    display: none;\n  }\n  .login-panel--right {\n    min-height: 100vh;\n    justify-content: center;\n    padding-inline: 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/features/auth/login/login.component.ts", lineNumber: 18 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-YHKEHUQO.js.map
