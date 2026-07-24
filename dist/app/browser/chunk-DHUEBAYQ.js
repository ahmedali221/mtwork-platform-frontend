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
  Component,
  ViewChildren,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChildren,
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
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/otp/otp.component.ts
var _c0 = ["cell"];
var _c1 = () => ["/login"];
var _forTrack0 = ($index, $item) => $item.src;
function OtpComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", segment_r1.width, "px")("height", segment_r1.height, "px");
    \u0275\u0275property("src", segment_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function OtpComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 44, 0);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("input", function OtpComponent_For_58_Template_input_input_0_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onInput(i_r3, $event));
    })("keydown", function OtpComponent_For_58_Template_input_keydown_0_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onKeydown(i_r3, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "otp.cellAria") + " " + (i_r3 + 1));
  }
}
function OtpComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMessage());
  }
}
var _OtpComponent = class _OtpComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.languageService = inject(LanguageService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.transloco = inject(TranslocoService);
    this.logoSegments = [
      { src: "assets/images/navbar/logo-1.svg", width: 23.211, height: 15.464 },
      { src: "assets/images/navbar/logo-2.svg", width: 11.6, height: 14.951 },
      { src: "assets/images/navbar/logo-3.svg", width: 23.22, height: 15.464 },
      { src: "assets/images/navbar/logo-4.svg", width: 15.503, height: 14.961 },
      { src: "assets/images/navbar/logo-5.svg", width: 13.7, height: 14.961 },
      { src: "assets/images/navbar/logo-6.svg", width: 13.838, height: 14.951 }
    ];
    this.cells = [0, 1, 2, 3];
    this.cellInputs = viewChildren("cell", ...ngDevMode ? [{ debugName: "cellInputs" }] : []);
    this.email = signal(this.route.snapshot.queryParamMap.get("email") ?? this.router.getCurrentNavigation()?.extras?.state?.email ?? "example@gmaill.com", ...ngDevMode ? [{ debugName: "email" }] : []);
    this.digits = signal(["", "", "", ""], ...ngDevMode ? [{ debugName: "digits" }] : []);
    this.code = computed(() => this.digits().join(""), ...ngDevMode ? [{ debugName: "code" }] : []);
    this.isComplete = computed(() => this.code().length === 4, ...ngDevMode ? [{ debugName: "isComplete" }] : []);
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.resendDisabled = signal(false, ...ngDevMode ? [{ debugName: "resendDisabled" }] : []);
    this.resendTimer = null;
  }
  /** Single-digit input: keep only the last numeric char, auto-advance. */
  onInput(index, event) {
    const input = event.target;
    const raw = input.value.replace(/\D/g, "");
    const char = raw.slice(-1);
    input.value = char;
    this.setDigit(index, char);
    if (this.errorMessage())
      this.errorMessage.set("");
    if (char && index < this.cells.length - 1) {
      this.focusCell(index + 1);
    }
  }
  /** Backspace on an empty cell steps back to the previous cell. */
  onKeydown(index, event) {
    if (event.key === "Backspace" && !this.digits()[index] && index > 0) {
      event.preventDefault();
      this.focusCell(index - 1);
      this.setDigit(index - 1, "");
      const prev = this.cellInputs()[index - 1]?.nativeElement;
      if (prev)
        prev.value = "";
    } else if (event.key === "ArrowLeft" && index > 0) {
      this.focusCell(index - 1);
    } else if (event.key === "ArrowRight" && index < this.cells.length - 1) {
      this.focusCell(index + 1);
    }
  }
  /** Paste a full code into any cell — distribute digits across cells. */
  onPaste(event) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData("text") ?? "").replace(/\D/g, "").slice(0, 4);
    if (!pasted)
      return;
    const next = ["", "", "", ""];
    for (let i = 0; i < pasted.length; i++)
      next[i] = pasted[i];
    this.digits.set(next);
    const inputs = this.cellInputs();
    inputs.forEach((ref, i) => ref.nativeElement.value = next[i] ?? "");
    this.focusCell(Math.min(pasted.length, this.cells.length - 1));
    if (this.errorMessage())
      this.errorMessage.set("");
  }
  setDigit(index, value) {
    this.digits.update((d) => {
      const next = [...d];
      next[index] = value;
      return next;
    });
  }
  focusCell(index) {
    this.cellInputs()[index]?.nativeElement.focus();
  }
  submit() {
    if (!this.isComplete() || this.isLoading())
      return;
    this.isLoading.set(true);
    this.errorMessage.set("");
    this.authService.verifyOTP({ email: this.email(), otp: this.code() }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(["/reset-password"], { queryParams: { email: this.email() } });
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err?.error?.errorMsg ?? err?.error?.ErrorMsg ?? err?.error?.message ?? this.transloco.translate("otp.errors.invalid"));
      }
    });
  }
  resend() {
    if (this.resendDisabled())
      return;
    this.resendDisabled.set(true);
    this.errorMessage.set("");
    this.authService.forgetPassword(this.email()).subscribe({
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? this.transloco.translate("otp.errors.resendFailed"));
      }
    });
    this.resendTimer = setTimeout(() => this.resendDisabled.set(false), _OtpComponent.RESEND_COOLDOWN_MS);
  }
  setTheme(mode) {
    const isDark = this.themeService.isDarkMode();
    if (mode === "dark" && !isDark || mode === "light" && isDark) {
      this.themeService.toggleTheme();
    }
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
  ngOnDestroy() {
    if (this.resendTimer)
      clearTimeout(this.resendTimer);
  }
};
_OtpComponent.RESEND_COOLDOWN_MS = 3e4;
_OtpComponent.\u0275fac = function OtpComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OtpComponent)();
};
_OtpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], viewQuery: function OtpComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.cellInputs, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 72, vars: 56, consts: [["cell", ""], [1, "otp-page"], [1, "otp-topbar"], ["routerLink", "/", 1, "otp-topbar__logo"], ["alt", "", 1, "otp-topbar__logo-segment", 3, "src", "width", "height"], [1, "otp-topbar__controls"], [1, "otp-ctrl", "otp-ctrl--lang", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["role", "group", 1, "otp-ctrl", "otp-ctrl--theme-group"], [1, "otp-ctrl__theme-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "otp-main"], [1, "otp-card"], [1, "otp-back", 3, "routerLink"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "otp-head"], [1, "otp-head__title"], [1, "otp-head__subtitle"], [1, "otp-head__email"], [1, "otp-body"], [1, "otp-digits-block"], ["role", "group", 1, "otp-cells", 3, "paste"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", "maxlength", "1", 1, "otp-cell"], ["type", "button", 1, "otp-resend", 3, "click", "disabled"], ["points", "23 4 23 10 17 10"], ["points", "1 20 1 14 7 14"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["role", "alert", 1, "otp-error"], ["type", "button", 1, "otp-btn", 3, "click", "disabled"], ["alt", "", 1, "otp-topbar__logo-segment", 3, "src"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", "maxlength", "1", 1, "otp-cell", 3, "input", "keydown"]], template: function OtpComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "a", 3);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275repeaterCreate(4, OtpComponent_For_5_Template, 1, 5, "img", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("click", function OtpComponent_Template_button_click_7_listener() {
      return ctx.toggleLanguage();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "circle", 8)(11, "line", 9)(12, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementStart(16, "button", 12);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("click", function OtpComponent_Template_button_click_16_listener() {
      return ctx.setTheme("light");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 13);
    \u0275\u0275element(19, "circle", 14)(20, "line", 15)(21, "line", 16)(22, "line", 17)(23, "line", 18)(24, "line", 19)(25, "line", 20)(26, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 12);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275listener("click", function OtpComponent_Template_button_click_28_listener() {
      return ctx.setTheme("dark");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 13);
    \u0275\u0275element(31, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Dark ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "main", 23)(34, "div", 24)(35, "a", 25);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 26);
    \u0275\u0275element(38, "line", 27)(39, "polyline", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 29)(43, "h1", 30);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 31);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementStart(49, "span", 32);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 33)(54, "div", 34)(55, "div", 35);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275listener("paste", function OtpComponent_Template_div_paste_55_listener($event) {
      return ctx.onPaste($event);
    });
    \u0275\u0275repeaterCreate(57, OtpComponent_For_58_Template, 3, 3, "input", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 37);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275listener("click", function OtpComponent_Template_button_click_59_listener() {
      return ctx.resend();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 7);
    \u0275\u0275element(62, "polyline", 38)(63, "polyline", 39)(64, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(67, OtpComponent_Conditional_67_Template, 2, 1, "p", 41);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "button", 42);
    \u0275\u0275listener("click", function OtpComponent_Template_button_click_68_listener() {
      return ctx.submit();
    });
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275pipe(71, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 25, "common.mtworkHome"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.logoSegments);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 27, "common.toggleLanguage"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.languageService.currentLang() === "en" ? "Arabic" : "English", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 29, "common.themeToggle"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("otp-ctrl__theme-btn--active", !ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 31, "common.lightMode"));
    \u0275\u0275advance(12);
    \u0275\u0275classProp("otp-ctrl__theme-btn--active", ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 33, "common.darkMode"));
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(55, _c1));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 35, "otp.backAria"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 37, "common.back"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 39, "otp.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 41, "otp.subtitleStart"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.email());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 43, "otp.subtitleEnd"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(56, 45, "otp.codeAria"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.cells);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.resendDisabled());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(60, 47, "otp.resendAria"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 49, "otp.resend"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage() ? 67 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.isComplete() || ctx.isLoading());
    \u0275\u0275attribute("aria-busy", ctx.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? \u0275\u0275pipeBind1(70, 51, "otp.verifying") : \u0275\u0275pipeBind1(71, 53, "otp.reset"), " ");
  }
}, dependencies: [CommonModule, RouterLink, TranslocoModule, TranslocoPipe], styles: ["\n\n.otp-page[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  --otp-surface-white: #ffffff;\n  --otp-field-bg: var(--brand-grays-500);\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.otp-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 40px 32px 0;\n}\n.otp-topbar__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n  text-decoration: none;\n}\n.otp-topbar__logo-segment[_ngcontent-%COMP%] {\n  display: block;\n  filter: var(--otp-logo-filter, none);\n}\n.otp-topbar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.otp-ctrl--lang[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--otp-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.otp-ctrl--theme-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--otp-surface-white);\n}\n.otp-ctrl__theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.otp-ctrl__theme-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.otp-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.otp-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 426px;\n  background: var(--otp-surface-white);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.otp-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  text-decoration: none;\n}\n.otp-back[_ngcontent-%COMP%]:hover {\n  color: var(--login-primary);\n}\n.otp-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.otp-head__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-grays-900);\n  margin: 0;\n}\n.otp-head__subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-work-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0;\n}\n.otp-head__email[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n}\n.otp-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.otp-digits-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.otp-cells[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 8px;\n}\n.otp-cell[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  height: 56px;\n  border: 1px solid var(--brand-grays-300, #cccccc);\n  border-radius: var(--radius-12);\n  background: var(--otp-surface-white);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.otp-cell[_ngcontent-%COMP%]:focus {\n  border-color: var(--login-primary);\n  box-shadow: inset 0 0 0 1px var(--login-primary);\n}\n.otp-resend[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  width: fit-content;\n  padding: 8px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.otp-resend[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.otp-resend[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.7;\n}\n.otp-error[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.otp-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  background: var(--brand-neutral-950);\n  color: #ffffff;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.otp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.otp-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.88;\n}\n@media (max-width: 480px) {\n  .otp-topbar[_ngcontent-%COMP%] {\n    padding: 24px 16px 0;\n  }\n  .otp-main[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=otp.component.css.map */"], changeDetection: 0 });
var OtpComponent = _OtpComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpComponent, [{
    type: Component,
    args: [{ selector: "app-otp", standalone: true, imports: [CommonModule, RouterLink, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- OTP Verification \u2014 Figma 3:124181. Standalone cream surface (NOT a
     modal): topbar + centered white card. Chrome matches the login freeze. -->
<div class="otp-page">

  <!-- Top bar: logo + lang + theme toggle (Figma 3:124182, identical to login) -->
  <header class="otp-topbar">
    <a routerLink="/" class="otp-topbar__logo" [attr.aria-label]="'common.mtworkHome' | transloco">
      @for (segment of logoSegments; track segment.src) {
        <img class="otp-topbar__logo-segment" [src]="segment.src" alt="" [style.width.px]="segment.width" [style.height.px]="segment.height" />
      }
    </a>
    <div class="otp-topbar__controls">
      <button class="otp-ctrl otp-ctrl--lang" (click)="toggleLanguage()" [attr.aria-label]="'common.toggleLanguage' | transloco">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        {{ languageService.currentLang() === 'en' ? 'Arabic' : 'English' }}
      </button>
      <div class="otp-ctrl otp-ctrl--theme-group" role="group" [attr.aria-label]="'common.themeToggle' | transloco">
        <button class="otp-ctrl__theme-btn" [class.otp-ctrl__theme-btn--active]="!themeService.isDarkMode()" (click)="setTheme('light')" [attr.aria-label]="'common.lightMode' | transloco">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Light
        </button>
        <button class="otp-ctrl__theme-btn" [class.otp-ctrl__theme-btn--active]="themeService.isDarkMode()" (click)="setTheme('dark')" [attr.aria-label]="'common.darkMode' | transloco">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          Dark
        </button>
      </div>
    </div>
  </header>

  <!-- Card: Figma 3:124189 "Container Login" 426\xD7419 -->
  <main class="otp-main">
    <div class="otp-card">

      <!-- Back (Figma 3:124190): arrow + "Back", DM Sans Bold 18, h48 -->
      <a [routerLink]="['/login']" class="otp-back" [attr.aria-label]="'otp.backAria' | transloco">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {{ 'common.back' | transloco }}
      </a>

      <!-- Title + subtitle (Figma 3:124191) -->
      <div class="otp-head">
        <h1 class="otp-head__title">{{ 'otp.title' | transloco }}</h1>
        <p class="otp-head__subtitle">
          {{ 'otp.subtitleStart' | transloco }}
          <span class="otp-head__email">{{ email() }}</span>
          {{ 'otp.subtitleEnd' | transloco }}
        </p>
      </div>

      <!-- Digit group + CTA (Figma 3:124194, gap 32) -->
      <div class="otp-body">

        <div class="otp-digits-block">
          <!-- 4 cells (Figma 3:124196) -->
          <div class="otp-cells" role="group" [attr.aria-label]="'otp.codeAria' | transloco" (paste)="onPaste($event)">
            @for (i of cells; track i) {
              <input
                #cell
                class="otp-cell"
                type="text"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="1"
                [attr.aria-label]="('otp.cellAria' | transloco) + ' ' + (i + 1)"
                (input)="onInput(i, $event)"
                (keydown)="onKeydown(i, $event)"
              />
            }
          </div>

          <!-- Resend (Figma 3:124197): replace icon + "Resend", sm button -->
          <button type="button" class="otp-resend" (click)="resend()" [disabled]="resendDisabled()" [attr.aria-label]="'otp.resendAria' | transloco">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          {{ 'otp.resend' | transloco }}
        </button>
        </div>

        @if (errorMessage()) {
          <p class="otp-error" role="alert">{{ errorMessage() }}</p>
        }

        <!-- Reset CTA (Figma 3:124198): full-width, h48, black, r12 -->
        <button
          type="button"
          class="otp-btn"
          [disabled]="!isComplete() || isLoading()"
          [attr.aria-busy]="isLoading()"
          (click)="submit()"
        >
          {{ isLoading() ? ('otp.verifying' | transloco) : ('otp.reset' | transloco) }}
        </button>

      </div>

    </div>
  </main>

</div>
`, styles: ["/* src/features/auth/otp/otp.component.css */\n.otp-page {\n  --login-primary: var(--landing-navbar-primary);\n  --otp-surface-white: #ffffff;\n  --otp-field-bg: var(--brand-grays-500);\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.otp-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 40px 32px 0;\n}\n.otp-topbar__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n  text-decoration: none;\n}\n.otp-topbar__logo-segment {\n  display: block;\n  filter: var(--otp-logo-filter, none);\n}\n.otp-topbar__controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.otp-ctrl--lang {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--otp-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.otp-ctrl--theme-group {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--otp-surface-white);\n}\n.otp-ctrl__theme-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.otp-ctrl__theme-btn--active {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.otp-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.otp-card {\n  width: 100%;\n  max-width: 426px;\n  background: var(--otp-surface-white);\n  border: 0.5px solid rgba(13, 13, 13, 0.25);\n  border-radius: var(--radius-20);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.otp-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  width: fit-content;\n  padding: 12px 16px 12px 0;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n  text-decoration: none;\n}\n.otp-back:hover {\n  color: var(--login-primary);\n}\n.otp-head {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.otp-head__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-grays-900);\n  margin: 0;\n}\n.otp-head__subtitle {\n  font-family: var(--font-family-work-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0;\n}\n.otp-head__email {\n  color: var(--login-primary);\n}\n.otp-body {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.otp-digits-block {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.otp-cells {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 8px;\n}\n.otp-cell {\n  min-width: 0;\n  width: 100%;\n  height: 56px;\n  border: 1px solid var(--brand-grays-300, #cccccc);\n  border-radius: var(--radius-12);\n  background: var(--otp-surface-white);\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h5-size);\n  font-weight: 700;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.otp-cell:focus {\n  border-color: var(--login-primary);\n  box-shadow: inset 0 0 0 1px var(--login-primary);\n}\n.otp-resend {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  width: fit-content;\n  padding: 8px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.otp-resend:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.otp-resend:not(:disabled):hover {\n  opacity: 0.7;\n}\n.otp-error {\n  font-size: var(--caption-2-size);\n  color: var(--functional-danger-500);\n  margin: 0;\n}\n.otp-btn {\n  width: 100%;\n  height: 48px;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: var(--radius-12);\n  background: var(--brand-neutral-950);\n  color: #ffffff;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.otp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.otp-btn:not(:disabled):hover {\n  opacity: 0.88;\n}\n@media (max-width: 480px) {\n  .otp-topbar {\n    padding: 24px 16px 0;\n  }\n  .otp-main {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=otp.component.css.map */\n"] }]
  }], null, { cellInputs: [{ type: ViewChildren, args: ["cell", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "src/features/auth/otp/otp.component.ts", lineNumber: 29 });
})();
export {
  OtpComponent
};
//# sourceMappingURL=chunk-DHUEBAYQ.js.map
