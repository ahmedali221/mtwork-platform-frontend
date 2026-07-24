import {
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-MQLQGMUZ.js";

// src/features/ErrorMiddleWare/error404/error404.ts
var _Error404 = class _Error404 {
};
_Error404.\u0275fac = function Error404_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Error404)();
};
_Error404.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404, selectors: [["app-error404"]], decls: 17, vars: 0, consts: [[1, "m-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "btn-khalli"], [1, "nav-hint"], ["src", "assets/images/navigate-svgrepo.png", "alt", "navigate", 1, "navigateIcon"], [1, "container-center", "text-center"], [1, "content"], ["src", "assets/images/Error404.png", "alt", "404 Not Found Error", 1, "error-image", "mt-4"], [1, "error-title", "mt-3"], [1, "error-message"]], template: function Error404_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
    \u0275\u0275text(2, " Go to Homepage ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275element(5, "img", 3);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Or navigate using Main menu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5);
    \u0275\u0275element(10, "img", 6);
    \u0275\u0275elementStart(11, "h2", 7);
    \u0275\u0275text(12, "404 - Page Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 8);
    \u0275\u0275text(14, " Sorry, the page you\u2019re looking for doesn\u2019t exist.");
    \u0275\u0275element(15, "br");
    \u0275\u0275text(16, " It may have been moved or deleted. ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n  background-color: var(--ui-surface);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n  margin: auto;\n}\n.error-image[_ngcontent-%COMP%] {\n  max-width: 380px;\n  height: auto;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n.navigateIcon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-inline-end: 6px;\n  vertical-align: middle;\n}\n.nav-hint[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 1rem;\n  color: var(--ui-text-sub);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-khalli[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli[_ngcontent-%COMP%]:hover, \n.btn-khalli[_ngcontent-%COMP%]:focus, \n.btn-khalli[_ngcontent-%COMP%]:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=error404.css.map */"] });
var Error404 = _Error404;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Error404, [{
    type: Component,
    args: [{ selector: "app-error404", imports: [CommonModule, RouterModule], template: '<div class="m-5">\n  <!-- Button -->\n  <a routerLink="/" class="btn btn-primary btn-lg btn-khalli">\n    Go to Homepage\n  </a><br/>\n\n  <!-- Navigation Hint -->\n  <div class="nav-hint">\n    <img src="assets/images/navigate-svgrepo.png"\n         alt="navigate"\n         class="navigateIcon"/>\n    <span>Or navigate using Main menu</span>\n  </div>\n</div>\n\n<div class="container-center text-center">\n  <div class="content">\n    <!-- 404 Image -->\n    <img src="assets/images/Error404.png"\n         alt="404 Not Found Error"\n         class="error-image mt-4"/>\n\n    <!-- Title -->\n    <h2 class="error-title mt-3">404 - Page Not Found</h2>\n\n    <!-- Message -->\n    <p class="error-message">\n      Sorry, the page you\u2019re looking for doesn\u2019t exist.<br>\n      It may have been moved or deleted.\n    </p>\n  </div>\n</div>\n', styles: ["/* src/features/ErrorMiddleWare/error404/error404.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n  background-color: var(--ui-surface);\n}\n.content {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n  margin: auto;\n}\n.error-image {\n  max-width: 380px;\n  height: auto;\n}\n.error-title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n.navigateIcon {\n  width: 24px;\n  height: 24px;\n  margin-inline-end: 6px;\n  vertical-align: middle;\n}\n.nav-hint {\n  margin-top: 12px;\n  font-size: 1rem;\n  color: var(--ui-text-sub);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-khalli {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli:hover,\n.btn-khalli:focus,\n.btn-khalli:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=error404.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404, { className: "Error404", filePath: "src/features/errormiddleware/error404/error404.ts", lineNumber: 10 });
})();
export {
  Error404
};
//# sourceMappingURL=chunk-D3GIYW7N.js.map
