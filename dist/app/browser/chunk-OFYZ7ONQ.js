import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/theme.service.ts
var _ThemeService = class _ThemeService {
  constructor() {
    this.isDarkMode = signal(false, ...ngDevMode ? [{ debugName: "isDarkMode" }] : []);
    this.themeEffect = effect(() => {
      const dark = this.isDarkMode();
      document.documentElement.classList.toggle("dark-theme", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    }, ...ngDevMode ? [{ debugName: "themeEffect" }] : []);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDarkMode.set(true);
    } else if (savedTheme === "light") {
      this.isDarkMode.set(false);
    } else {
      this.isDarkMode.set(prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "system") {
        this.isDarkMode.set(e.matches);
      }
    });
  }
  toggleTheme() {
    this.isDarkMode.update((isDark) => !isDark);
  }
};
_ThemeService.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeService)();
};
_ThemeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
var ThemeService = _ThemeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-OFYZ7ONQ.js.map
