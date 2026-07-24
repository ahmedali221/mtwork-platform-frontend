import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import "./chunk-D5YQFVLR.js";
import {
  RouterOutlet
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import "./chunk-Z3ORTAM2.js";
import {
  Component,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/create-account-layout/create-account-layout.ts
var _CreateAccountLayout = class _CreateAccountLayout {
  constructor() {
    this.lang = inject(LanguageService);
    this.themeService = inject(ThemeService);
  }
  toggleLanguage() {
    this.lang.toggleLanguage();
  }
  setTheme(mode) {
    const isDark = this.themeService.isDarkMode();
    if (mode === "dark" && !isDark || mode === "light" && isDark) {
      this.themeService.toggleTheme();
    }
  }
};
_CreateAccountLayout.\u0275fac = function CreateAccountLayout_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateAccountLayout)();
};
_CreateAccountLayout.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateAccountLayout, selectors: [["app-create-account-layout"]], decls: 30, vars: 10, consts: [[1, "ca-page", 3, "dir"], [1, "ca-gradient-header"], ["aria-hidden", "true", 1, "ca-gradient-header__pattern"], [1, "ca-topbar"], ["src", "assets/images/createaccount/logo-header.svg", "alt", "MTWork", 1, "ca-topbar__logo"], [1, "ca-topbar__controls"], [1, "ca-ctrl", "ca-ctrl--lang", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["role", "group", 1, "ca-ctrl", "ca-ctrl--theme-group"], [1, "ca-ctrl__theme-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "aria-hidden", "true"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "ca-main"]], template: function CreateAccountLayout_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
    \u0275\u0275listener("click", function CreateAccountLayout_Template_button_click_6_listener() {
      return ctx.toggleLanguage();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 7);
    \u0275\u0275element(8, "circle", 8)(9, "line", 9)(10, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
    \u0275\u0275listener("click", function CreateAccountLayout_Template_button_click_13_listener() {
      return ctx.setTheme("light");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 13);
    \u0275\u0275element(15, "circle", 14)(16, "line", 15)(17, "line", 16)(18, "line", 17)(19, "line", 18)(20, "line", 19)(21, "line", 20)(22, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Light ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 12);
    \u0275\u0275listener("click", function CreateAccountLayout_Template_button_click_24_listener() {
      return ctx.setTheme("dark");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 22);
    \u0275\u0275element(26, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Dark ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "main", 24);
    \u0275\u0275element(29, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    \u0275\u0275property("dir", ctx.lang.direction());
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", (tmp_1_0 = ctx.lang.translations()) == null ? null : tmp_1_0.common == null ? null : tmp_1_0.common.toggleLanguage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx.lang.currentLang() === "en" ? "Arabic" : "English", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_3_0 = ctx.lang.translations()) == null ? null : tmp_3_0.common == null ? null : tmp_3_0.common.themeToggle);
    \u0275\u0275advance();
    \u0275\u0275classProp("ca-ctrl__theme-btn--active", !ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", (tmp_5_0 = ctx.lang.translations()) == null ? null : tmp_5_0.common == null ? null : tmp_5_0.common.lightMode);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("ca-ctrl__theme-btn--active", ctx.themeService.isDarkMode());
    \u0275\u0275attribute("aria-label", (tmp_7_0 = ctx.lang.translations()) == null ? null : tmp_7_0.common == null ? null : tmp_7_0.common.darkMode);
  }
}, dependencies: [RouterOutlet], styles: ["\n\n.ca-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f7f5f2;\n  font-family: var(--font-family-dm-sans);\n  display: flex;\n  flex-direction: column;\n}\n.ca-gradient-header[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  position: relative;\n  height: 235px;\n  background:\n    linear-gradient(\n      to bottom,\n      #7f84be 0%,\n      #c2c3e0 51%,\n      #e9e7ed 85%,\n      #ffffff 100%);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ca-gradient-header__pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: url(/assets/images/createaccount/header-pattern.svg);\n  background-repeat: repeat-x;\n  background-position: top left;\n  background-size: 635px 235px;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.ca-topbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px 32px 0;\n}\n.ca-topbar__logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-topbar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ca-ctrl--lang[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: #ffffff;\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.ca-ctrl--theme-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: #ffffff;\n}\n.ca-ctrl__theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.ca-ctrl__theme-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.ca-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-block-end: 48px;\n}\n/*# sourceMappingURL=create-account-layout.css.map */"] });
var CreateAccountLayout = _CreateAccountLayout;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateAccountLayout, [{
    type: Component,
    args: [{ selector: "app-create-account-layout", standalone: true, imports: [RouterOutlet], template: `<div class="ca-page" [dir]="lang.direction()">

  <!-- Purple gradient header band -->
  <div class="ca-gradient-header">
    <!-- Dot/chain pattern overlay -->
    <div class="ca-gradient-header__pattern" aria-hidden="true"></div>

    <!-- Topbar: logo + controls -->
    <div class="ca-topbar">
      <!-- Header logo (Figma 3:123389): exact dark #282828 wordmark \u2014 NOT
           white. Asset carries its own fills; no contrast filter. -->
      <img class="ca-topbar__logo" src="assets/images/createaccount/logo-header.svg" alt="MTWork" />
      <div class="ca-topbar__controls">
        <button class="ca-ctrl ca-ctrl--lang" (click)="toggleLanguage()" [attr.aria-label]="lang.translations()?.common?.toggleLanguage">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          {{ lang.currentLang() === 'en' ? 'Arabic' : 'English' }}
        </button>
        <div class="ca-ctrl ca-ctrl--theme-group" role="group" [attr.aria-label]="lang.translations()?.common?.themeToggle">
          <button class="ca-ctrl__theme-btn" [class.ca-ctrl__theme-btn--active]="!themeService.isDarkMode()" (click)="setTheme('light')" [attr.aria-label]="lang.translations()?.common?.lightMode">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            Light
          </button>
          <button class="ca-ctrl__theme-btn" [class.ca-ctrl__theme-btn--active]="themeService.isDarkMode()" (click)="setTheme('dark')" [attr.aria-label]="lang.translations()?.common?.darkMode">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            Dark
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Page content (stepper overlaps gradient, card is below) -->
  <main class="ca-main">
    <router-outlet />
  </main>
</div>
`, styles: ["/* src/features/auth/CreateAccount/create-account-layout/create-account-layout.css */\n.ca-page {\n  min-height: 100vh;\n  background: #f7f5f2;\n  font-family: var(--font-family-dm-sans);\n  display: flex;\n  flex-direction: column;\n}\n.ca-gradient-header {\n  --login-primary: var(--landing-navbar-primary);\n  position: relative;\n  height: 235px;\n  background:\n    linear-gradient(\n      to bottom,\n      #7f84be 0%,\n      #c2c3e0 51%,\n      #e9e7ed 85%,\n      #ffffff 100%);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ca-gradient-header__pattern {\n  position: absolute;\n  inset: 0;\n  background-image: url(/assets/images/createaccount/header-pattern.svg);\n  background-repeat: repeat-x;\n  background-position: top left;\n  background-size: 635px 235px;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.ca-topbar {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px 32px 0;\n}\n.ca-topbar__logo {\n  display: block;\n  width: 119px;\n  height: 24px;\n}\n.ca-topbar__controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ca-ctrl--lang {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--radius-8);\n  background: #ffffff;\n  border: 0;\n  color: var(--brand-neutral-950);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.ca-ctrl--theme-group {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 4px;\n  border-radius: var(--radius-8);\n  background: #ffffff;\n}\n.ca-ctrl__theme-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  padding: 0 8px;\n  border-radius: var(--radius-6);\n  border: 0;\n  background: transparent;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.ca-ctrl__theme-btn--active {\n  background: var(--brand-neutral-900);\n  color: #ffffff;\n}\n.ca-main {\n  flex: 1;\n  padding-block-end: 48px;\n}\n/*# sourceMappingURL=create-account-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateAccountLayout, { className: "CreateAccountLayout", filePath: "src/features/auth/createaccount/create-account-layout/create-account-layout.ts", lineNumber: 13 });
})();
export {
  CreateAccountLayout
};
//# sourceMappingURL=chunk-LP2UYE7Y.js.map
