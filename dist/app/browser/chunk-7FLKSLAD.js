import {
  CreateAccountFormService
} from "./chunk-FMT3FVVH.js";
import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import "./chunk-RDBMT5X2.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import "./chunk-D5YQFVLR.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/register/register.component.ts
var _forTrack0 = ($index, $item) => $item.src;
var _forTrack1 = ($index, $item) => $item.key;
function RegisterComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", segment_r1.width, "px")("height", segment_r1.height, "px");
    \u0275\u0275property("src", segment_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function RegisterComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function RegisterComponent_For_38_Template_button_click_0_listener() {
      const card_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectRole(card_r3.key));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275element(2, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap("register-card " + card_r3.modifier);
    \u0275\u0275classProp("register-card--selected", ctx_r3.selectedRole() === card_r3.key);
    \u0275\u0275attribute("aria-pressed", ctx_r3.selectedRole() === card_r3.key)("aria-label", card_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", card_r3.illus, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.cardBody);
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.languageService = inject(LanguageService);
    this.tokenService = inject(TokenService);
    this.router = inject(Router);
    this.createAccountFormService = inject(CreateAccountFormService);
    this.selectedRole = signal(null, ...ngDevMode ? [{ debugName: "selectedRole" }] : []);
    this.logoSegments = [
      { src: "assets/images/navbar/logo-1.svg", width: 23.211, height: 15.464 },
      { src: "assets/images/navbar/logo-2.svg", width: 11.6, height: 14.951 },
      { src: "assets/images/navbar/logo-3.svg", width: 23.22, height: 15.464 },
      { src: "assets/images/navbar/logo-4.svg", width: 15.503, height: 14.961 },
      { src: "assets/images/navbar/logo-5.svg", width: 13.7, height: 14.961 },
      { src: "assets/images/navbar/logo-6.svg", width: 13.838, height: 14.951 }
    ];
    this.cards = [
      { key: "business", title: "As a business", illus: "assets/images/signup/illus-business.png", modifier: "register-card--business" },
      { key: "contractor", title: "Contractor", illus: "assets/images/signup/illus-contractor.png", modifier: "register-card--contractor" },
      { key: "employee", title: "Employee", illus: "assets/images/signup/illus-employee.png", modifier: "register-card--employee" }
    ];
    this.cardBody = "Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team";
    const token = localStorage.getItem("MT_token");
    if (token && !this.tokenService.isTokenExpired()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  selectRole(role) {
    this.selectedRole.set(role);
    const routeMap = {
      contractor: "/CreateContractorAccount",
      // Employee has no dedicated flow — it reuses the Contractor form and
      // Auth/register endpoint, distinguished only by the UserType recorded
      // below (see CreateAccountFormService.submitForm()).
      employee: "/CreateContractorAccount",
      business: "/CreateBusinessAccount"
    };
    const target = routeMap[role];
    if (!target)
      return;
    if (role === "employee" || role === "contractor" || role === "business") {
      this.createAccountFormService.setAccountType(role);
    }
    this.router.navigate([target]);
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
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterComponent)();
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 46, vars: 10, consts: [[1, "register-page"], [1, "register-topbar"], ["routerLink", "/", 1, "register-topbar__logo"], ["alt", "", 1, "register-topbar__logo-segment", 3, "src", "width", "height"], [1, "register-topbar__controls"], [1, "reg-ctrl", "reg-ctrl--lang", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["role", "group", 1, "reg-ctrl", "reg-ctrl--theme-group"], [1, "reg-ctrl__theme-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "register-content"], [1, "register-head"], [1, "register-head__title"], [1, "register-head__subtitle"], ["src", "assets/images/signup/brush.svg", "alt", "", "aria-hidden", "true", 1, "register-head__brush"], [1, "register-head__subtitle-text"], ["role", "list", 1, "register-cards"], ["type", "button", "role", "listitem", 3, "class", "register-card--selected"], ["routerLink", "/login", "aria-label", "Already have an account? Log in", 1, "register-footer"], [1, "register-footer__text"], [1, "register-footer__link"], ["width", "18", "height", "18", "viewBox", "0 0 13.5 13.5", "fill", "currentColor", "aria-hidden", "true", 1, "register-footer__icon"], ["d", "M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"], ["alt", "", 1, "register-topbar__logo-segment", 3, "src"], ["type", "button", "role", "listitem", 3, "click"], [1, "register-card__illus-wrap"], ["alt", "", "aria-hidden", "true", 1, "register-card__illus", 3, "src"], [1, "register-card__title"], [1, "register-card__body"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
    \u0275\u0275repeaterCreate(3, RegisterComponent_For_4_Template, 1, 5, "img", 3, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function RegisterComponent_Template_button_click_6_listener() {
      return ctx.toggleLanguage();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 6);
    \u0275\u0275element(8, "circle", 7)(9, "line", 8)(10, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
    \u0275\u0275listener("click", function RegisterComponent_Template_button_click_13_listener() {
      return ctx.setTheme("light");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 12);
    \u0275\u0275element(15, "circle", 13)(16, "line", 14)(17, "line", 15)(18, "line", 16)(19, "line", 17)(20, "line", 18)(21, "line", 19)(22, "line", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 11);
    \u0275\u0275listener("click", function RegisterComponent_Template_button_click_24_listener() {
      return ctx.setTheme("dark");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 12);
    \u0275\u0275element(26, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Dark ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "main", 22)(29, "div", 23)(30, "h1", 24);
    \u0275\u0275text(31, "How will you use Mtwork ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 25);
    \u0275\u0275element(33, "img", 26);
    \u0275\u0275elementStart(34, "span", 27);
    \u0275\u0275text(35, "Select one of the options below");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 28);
    \u0275\u0275repeaterCreate(37, RegisterComponent_For_38_Template, 7, 9, "button", 29, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 30)(40, "span", 31);
    \u0275\u0275text(41, " Already have an account ");
    \u0275\u0275elementStart(42, "span", 32);
    \u0275\u0275text(43, "Log in");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 33);
    \u0275\u0275element(45, "path", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", (tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.common == null ? null : tmp_0_0.common.mtworkHome);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.logoSegments);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", (tmp_2_0 = ctx.languageService.translations()) == null ? null : tmp_2_0.common == null ? null : tmp_2_0.common.toggleLanguage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx.languageService.currentLang() === "en" ? "Arabic" : "English", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_4_0 = ctx.languageService.translations()) == null ? null : tmp_4_0.common == null ? null : tmp_4_0.common.themeToggle);
    \u0275\u0275advance();
    \u0275\u0275classProp("reg-ctrl__theme-btn--active", !ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", (tmp_6_0 = ctx.languageService.translations()) == null ? null : tmp_6_0.common == null ? null : tmp_6_0.common.lightMode);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("reg-ctrl__theme-btn--active", ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", (tmp_8_0 = ctx.languageService.translations()) == null ? null : tmp_8_0.common == null ? null : tmp_8_0.common.darkMode);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx.cards);
  }
}, dependencies: [CommonModule, RouterLink], styles: ['\n\n.register-page[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  --register-surface-white: #ffffff;\n  --register-business-bg: #d8daf3;\n  --register-contractor-bg: var(--brand-secondary-100);\n  --register-employee-bg: var(--brand-tertiary-50);\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.register-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 40px 32px 0;\n}\n.register-topbar__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n  text-decoration: none;\n}\n.register-topbar__logo-segment[_ngcontent-%COMP%] {\n  display: block;\n  filter: var(--register-logo-filter, none);\n}\n.register-topbar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.reg-ctrl--lang[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--register-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.reg-ctrl--theme-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--register-surface-white);\n}\n.reg-ctrl__theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.reg-ctrl__theme-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.register-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 32px 56px;\n}\n.register-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n}\n.register-head__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h3-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-neutral-950);\n  margin: 0;\n}\n.register-head__subtitle[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0;\n}\n.register-head__brush[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 50%;\n  inset-block-start: calc(50% + 2px);\n  transform: translate(-50%, -50%);\n  width: 324.845px;\n  height: 45.865px;\n  pointer-events: none;\n  z-index: 0;\n}\n.register-head__subtitle-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.register-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 320px;\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 24px;\n  border: 0;\n  border-radius: var(--radius-16);\n  cursor: pointer;\n  text-align: center;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.register-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--elevation-2);\n}\n.register-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--login-primary);\n  outline-offset: 2px;\n}\n.register-card--selected[_ngcontent-%COMP%] {\n  outline: 2px solid var(--login-primary);\n  outline-offset: 2px;\n}\n.register-card--business[_ngcontent-%COMP%] {\n  background: var(--register-business-bg);\n}\n.register-card--contractor[_ngcontent-%COMP%] {\n  background: var(--register-contractor-bg);\n}\n.register-card--employee[_ngcontent-%COMP%] {\n  background: var(--register-employee-bg);\n}\n.register-card__illus-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 154px;\n}\n.register-card__illus[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n}\n.register-card--business[_ngcontent-%COMP%]   .register-card__illus[_ngcontent-%COMP%] {\n  height: 144px;\n}\n.register-card--contractor[_ngcontent-%COMP%]   .register-card__illus[_ngcontent-%COMP%] {\n  height: 152px;\n}\n.register-card--employee[_ngcontent-%COMP%]   .register-card__illus[_ngcontent-%COMP%] {\n  height: 146px;\n}\n.register-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-neutral-950);\n}\n.register-card__body[_ngcontent-%COMP%] {\n  font-family: "Instrument Sans", var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 22px;\n  margin: 0;\n}\n.register-card--business[_ngcontent-%COMP%]   .register-card__body[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n}\n.register-card--contractor[_ngcontent-%COMP%]   .register-card__body[_ngcontent-%COMP%] {\n  color: var(--brand-secondary-500);\n}\n.register-card--employee[_ngcontent-%COMP%]   .register-card__body[_ngcontent-%COMP%] {\n  color: var(--brand-tertiary-500);\n}\n.register-footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: var(--radius-8);\n  text-decoration: none;\n}\n.register-footer__text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.register-footer__link[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.register-footer__icon[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.register-footer[_ngcontent-%COMP%]:hover   .register-footer__link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n@media (max-width: 1040px) {\n  .register-cards[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (max-width: 896px) {\n  .register-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 360px;\n    min-height: auto;\n  }\n}\n@media (max-width: 620px) {\n  .register-content[_ngcontent-%COMP%] {\n    gap: 40px;\n    padding: 24px 16px 40px;\n  }\n  .register-head__title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    max-width: 340px;\n  }\n  .register-topbar[_ngcontent-%COMP%] {\n    padding: 24px 16px 0;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'], changeDetection: 0 });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Role Picker \u2014 Figma 3:124199 "How will you use Mtwork?". Standalone cream
     surface: topbar + title/subtitle (orange brush) + 3 role cards + login
     footer. Exact Figma illustration assets, brush, tints, and login glyph. -->
<div class="register-page">

  <!-- Top bar (Figma 3:124200, matches login/OTP) -->
  <header class="register-topbar">
    <a routerLink="/" class="register-topbar__logo" [attr.aria-label]="languageService.translations()?.common?.mtworkHome">
      @for (segment of logoSegments; track segment.src) {
        <img class="register-topbar__logo-segment" [src]="segment.src" alt="" [style.width.px]="segment.width" [style.height.px]="segment.height" />
      }
    </a>
    <div class="register-topbar__controls">
      <button class="reg-ctrl reg-ctrl--lang" (click)="toggleLanguage()" [attr.aria-label]="languageService.translations()?.common?.toggleLanguage">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        {{ languageService.currentLang() === 'en' ? 'Arabic' : 'English' }}
      </button>
      <div class="reg-ctrl reg-ctrl--theme-group" role="group" [attr.aria-label]="languageService.translations()?.common?.themeToggle">
        <button class="reg-ctrl__theme-btn" [class.reg-ctrl__theme-btn--active]="!themeService.isDarkMode()" (click)="setTheme('light')" [attr.aria-label]="languageService.translations()?.common?.lightMode">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Light
        </button>
        <button class="reg-ctrl__theme-btn" [class.reg-ctrl__theme-btn--active]="themeService.isDarkMode()" (click)="setTheme('dark')" [attr.aria-label]="languageService.translations()?.common?.darkMode">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          Dark
        </button>
      </div>
    </div>
  </header>

  <!-- Content (Figma 3:124207): title/subtitle \u2192 cards \u2192 footer -->
  <main class="register-content">

    <!-- Title + subtitle (Figma 3:124208), exact Figma brush over subtitle -->
    <div class="register-head">
      <h1 class="register-head__title">How will you use Mtwork ?</h1>
      <p class="register-head__subtitle">
        <img class="register-head__brush" src="assets/images/signup/brush.svg" alt="" aria-hidden="true" />
        <span class="register-head__subtitle-text">Select one of the options below</span>
      </p>
    </div>

    <!-- 3 role cards (Figma 3:124212) \u2014 exact Figma illustration assets -->
    <div class="register-cards" role="list">
      @for (card of cards; track card.key) {
        <button
          type="button"
          [class]="'register-card ' + card.modifier"
          role="listitem"
          (click)="selectRole(card.key)"
          [class.register-card--selected]="selectedRole() === card.key"
          [attr.aria-pressed]="selectedRole() === card.key"
          [attr.aria-label]="card.title"
        >
          <span class="register-card__illus-wrap">
            <img class="register-card__illus" [src]="card.illus" alt="" aria-hidden="true" />
          </span>
          <span class="register-card__title">{{ card.title }}</span>
          <span class="register-card__body">{{ cardBody }}</span>
        </button>
      }
    </div>

    <!-- Footer (Figma 3:124236): "Already have an account \xB7 Log in" + exact glyph -->
    <a routerLink="/login" class="register-footer" aria-label="Already have an account? Log in">
      <span class="register-footer__text">
        Already have an account
        <span class="register-footer__link">Log in</span>
      </span>
      <!-- Exact Figma login icon (3:124236 \u2192 3:18092), filled glyph, 18px, navy -->
      <svg class="register-footer__icon" width="18" height="18" viewBox="0 0 13.5 13.5" fill="currentColor" aria-hidden="true"><path d="M7.5 13.5C7.2875 13.5 7.1095 13.428 6.966 13.284C6.8225 13.14 6.7505 12.962 6.75 12.75C6.7495 12.538 6.8215 12.36 6.966 12.216C7.1105 12.072 7.2885 12 7.5 12H12V1.5H7.5C7.2875 1.5 7.1095 1.428 6.966 1.284C6.8225 1.14 6.7505 0.962 6.75 0.75C6.7495 0.538 6.8215 0.36 6.966 0.216C7.1105 0.0720001 7.2885 0 7.5 0H12C12.4125 0 12.7658 0.147 13.0598 0.441C13.3538 0.735 13.5005 1.088 13.5 1.5V12C13.5 12.4125 13.3533 12.7658 13.0598 13.0598C12.7663 13.3538 12.413 13.5005 12 13.5H7.5ZM6.13125 7.5H0.750003C0.537503 7.5 0.359503 7.428 0.216003 7.284C0.0725027 7.14 0.000502586 6.962 2.5862e-06 6.75C-0.000497414 6.538 0.0715027 6.36 0.216003 6.216C0.360503 6.072 0.538503 6 0.750003 6H6.13125L4.725 4.59375C4.5875 4.45625 4.51875 4.2875 4.51875 4.0875C4.51875 3.8875 4.5875 3.7125 4.725 3.5625C4.8625 3.4125 5.0375 3.33425 5.25 3.32775C5.4625 3.32125 5.64375 3.39325 5.79375 3.54375L8.475 6.225C8.625 6.375 8.7 6.55 8.7 6.75C8.7 6.95 8.625 7.125 8.475 7.275L5.79375 9.95625C5.64375 10.1062 5.46575 10.1782 5.25975 10.1722C5.05375 10.1662 4.8755 10.088 4.725 9.9375C4.5875 9.7875 4.522 9.6095 4.5285 9.4035C4.535 9.1975 4.60675 9.0255 4.74375 8.8875L6.13125 7.5Z"/></svg>
    </a>

  </main>
</div>
`, styles: ['/* src/features/auth/register/register.component.css */\n.register-page {\n  --login-primary: var(--landing-navbar-primary);\n  --register-surface-white: #ffffff;\n  --register-business-bg: #d8daf3;\n  --register-contractor-bg: var(--brand-secondary-100);\n  --register-employee-bg: var(--brand-tertiary-50);\n  min-height: 100vh;\n  background: var(--brand-grays-50);\n  display: flex;\n  flex-direction: column;\n}\n.register-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 40px 32px 0;\n}\n.register-topbar__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n  text-decoration: none;\n}\n.register-topbar__logo-segment {\n  display: block;\n  filter: var(--register-logo-filter, none);\n}\n.register-topbar__controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.reg-ctrl--lang {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: var(--register-surface-white);\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.reg-ctrl--theme-group {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: var(--register-surface-white);\n}\n.reg-ctrl__theme-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.reg-ctrl__theme-btn--active {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.register-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 32px 56px;\n}\n.register-head {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n}\n.register-head__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h3-size);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--brand-neutral-950);\n  margin: 0;\n}\n.register-head__subtitle {\n  position: relative;\n  isolation: isolate;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-neutral-400);\n  margin: 0;\n}\n.register-head__brush {\n  position: absolute;\n  inset-inline-start: 50%;\n  inset-block-start: calc(50% + 2px);\n  transform: translate(-50%, -50%);\n  width: 324.845px;\n  height: 45.865px;\n  pointer-events: none;\n  z-index: 0;\n}\n.register-head__subtitle-text {\n  position: relative;\n  z-index: 1;\n}\n.register-cards {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.register-card {\n  width: 320px;\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 24px;\n  border: 0;\n  border-radius: var(--radius-16);\n  cursor: pointer;\n  text-align: center;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.register-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--elevation-2);\n}\n.register-card:focus-visible {\n  outline: 2px solid var(--login-primary);\n  outline-offset: 2px;\n}\n.register-card--selected {\n  outline: 2px solid var(--login-primary);\n  outline-offset: 2px;\n}\n.register-card--business {\n  background: var(--register-business-bg);\n}\n.register-card--contractor {\n  background: var(--register-contractor-bg);\n}\n.register-card--employee {\n  background: var(--register-employee-bg);\n}\n.register-card__illus-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 154px;\n}\n.register-card__illus {\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n}\n.register-card--business .register-card__illus {\n  height: 144px;\n}\n.register-card--contractor .register-card__illus {\n  height: 152px;\n}\n.register-card--employee .register-card__illus {\n  height: 146px;\n}\n.register-card__title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  line-height: 1.4;\n  color: var(--brand-neutral-950);\n}\n.register-card__body {\n  font-family: "Instrument Sans", var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 22px;\n  margin: 0;\n}\n.register-card--business .register-card__body {\n  color: var(--login-primary);\n}\n.register-card--contractor .register-card__body {\n  color: var(--brand-secondary-500);\n}\n.register-card--employee .register-card__body {\n  color: var(--brand-tertiary-500);\n}\n.register-footer {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: var(--radius-8);\n  text-decoration: none;\n}\n.register-footer__text {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--brand-grays-900);\n}\n.register-footer__link {\n  font-family: var(--font-family-dm-sans);\n  font-weight: 700;\n  color: var(--login-primary);\n}\n.register-footer__icon {\n  color: var(--login-primary);\n  flex-shrink: 0;\n}\n.register-footer:hover .register-footer__link {\n  text-decoration: underline;\n}\n@media (max-width: 1040px) {\n  .register-cards {\n    gap: 16px;\n  }\n  .register-card {\n    width: 280px;\n  }\n}\n@media (max-width: 896px) {\n  .register-cards {\n    flex-direction: column;\n    align-items: center;\n  }\n  .register-card {\n    width: 100%;\n    max-width: 360px;\n    min-height: auto;\n  }\n}\n@media (max-width: 620px) {\n  .register-content {\n    gap: 40px;\n    padding: 24px 16px 40px;\n  }\n  .register-head__title {\n    font-size: 32px;\n  }\n  .register-card {\n    max-width: 340px;\n  }\n  .register-topbar {\n    padding: 24px 16px 0;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/features/auth/register/register.component.ts", lineNumber: 17 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-7FLKSLAD.js.map
