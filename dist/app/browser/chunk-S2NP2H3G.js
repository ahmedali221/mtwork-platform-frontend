import {
  RouterLink
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-MQLQGMUZ.js";

// src/features/ErrorMiddleWare/forbidden403/forbidden403.ts
var _Forbidden403 = class _Forbidden403 {
};
_Forbidden403.\u0275fac = function Forbidden403_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Forbidden403)();
};
_Forbidden403.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Forbidden403, selectors: [["app-forbidden403"]], decls: 11, vars: 0, consts: [[1, "container-center", "text-center"], [1, "content"], ["src", "assets/images/Forbidden.png", "alt", "403 Forbidden Error", 1, "error-image"], [1, "error-title", "mt-4"], [1, "error-message"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-lg", "mt-3"]], template: function Forbidden403_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "h2", 3);
    \u0275\u0275text(4, "403 - Forbidden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " You don\u2019t have permission to access this page.");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " This could be due to restricted access or missing login credentials. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 5);
    \u0275\u0275text(10, " Login to your account ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [CommonModule, RouterLink], styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n  text-align: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 720px;\n  padding: 20px;\n}\n.error-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 10px;\n}\n/*# sourceMappingURL=forbidden403.css.map */"] });
var Forbidden403 = _Forbidden403;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Forbidden403, [{
    type: Component,
    args: [{ selector: "app-forbidden403", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="container-center text-center">\n  <div class="content">\n\n    <!-- 403 Image -->\n    <img src="assets/images/Forbidden.png"\n         alt="403 Forbidden Error"\n         class="error-image"/>\n\n    <!-- Title -->\n    <h2 class="error-title mt-4">403 - Forbidden</h2>\n\n    <!-- Message -->\n    <p class="error-message">\n      You don\u2019t have permission to access this page.<br>\n      This could be due to restricted access or missing login credentials.\n    </p>\n\n    <!-- Button -->\n    <a routerLink="/login" class="btn btn-primary btn-lg mt-3">\n      Login to your account\n    </a>\n  </div>\n</div>', styles: ["/* src/features/ErrorMiddleWare/forbidden403/forbidden403.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n  text-align: center;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 720px;\n  padding: 20px;\n}\n.error-image {\n  width: 100%;\n  max-width: 320px;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.error-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 10px;\n}\n/*# sourceMappingURL=forbidden403.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Forbidden403, { className: "Forbidden403", filePath: "src/features/errormiddleware/forbidden403/forbidden403.ts", lineNumber: 12 });
})();
export {
  Forbidden403
};
//# sourceMappingURL=chunk-S2NP2H3G.js.map
