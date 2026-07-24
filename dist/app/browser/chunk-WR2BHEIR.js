import {
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/ErrorMiddleWare/maintance-page/maintance-page.ts
var _MaintancePage = class _MaintancePage {
  constructor() {
    this.estimatedTime = "2 hours";
  }
  reloadPage() {
    window.location.reload();
  }
};
_MaintancePage.\u0275fac = function MaintancePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MaintancePage)();
};
_MaintancePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintancePage, selectors: [["app-maintance-page"]], decls: 14, vars: 1, consts: [[1, "container-center", "text-center"], [1, "content"], ["src", "assets/images/Maintenance.png", "alt", "Maintenance", 1, "maintenance-image"], [1, "maintenance-title", "mt-4"], [1, "maintenance-message"], [1, "mt-3"], [1, "text-muted"], [1, "text-primary", "fw-bold"], [1, "btn", "btn-primary", "mt-4", "btn-khalli", 3, "click"]], template: function MaintancePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "h2", 3);
    \u0275\u0275text(4, " We\u2019re Under Maintenance ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 4);
    \u0275\u0275text(6, " We\u2019re making improvements to bring you a better experience. Thank you for your patience! ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 5)(8, "span", 6);
    \u0275\u0275text(9, " \u23F3 Estimated time: ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 7);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "button", 8);
    \u0275\u0275domListener("click", function MaintancePage_Template_button_click_12_listener() {
      return ctx.reloadPage();
    });
    \u0275\u0275text(13, " Please check back soon! ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx.estimatedTime, " ");
  }
}, dependencies: [CommonModule, RouterModule], styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 100%;\n  padding: 20px;\n}\n.maintenance-image[_ngcontent-%COMP%] {\n  max-width: 280px;\n  width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.maintenance-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n  margin-top: 16px;\n}\n.maintenance-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--ui-text-secondary);\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--functional-info-500);\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.btn-khalli[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli[_ngcontent-%COMP%]:hover, \n.btn-khalli[_ngcontent-%COMP%]:focus, \n.btn-khalli[_ngcontent-%COMP%]:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=maintance-page.css.map */"] });
var MaintancePage = _MaintancePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintancePage, [{
    type: Component,
    args: [{ selector: "app-maintance-page", imports: [CommonModule, RouterModule], template: '<div class="container-center text-center">\n  <div class="content">\n    <img src="assets/images/Maintenance.png"\n         alt="Maintenance"\n         class="maintenance-image" />\n\n    <h2 class="maintenance-title mt-4">\n      We\u2019re Under Maintenance\n    </h2>\n\n    <p class="maintenance-message">\n      We\u2019re making improvements to bring you a better experience.  \n      Thank you for your patience!\n    </p>\n\n    <p class="mt-3">\n      <span class="text-muted">\n        \u23F3 Estimated time: \n      </span>\n      <span class="text-primary fw-bold">\n        {{ estimatedTime }}\n      </span>\n    </p>\n\n    <button class="btn btn-primary mt-4 btn-khalli" (click)="reloadPage()">\n      Please check back soon!\n    </button>\n  </div>\n</div>', styles: ["/* src/features/ErrorMiddleWare/maintance-page/maintance-page.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n  padding: 0 16px;\n  box-sizing: border-box;\n}\n.content {\n  text-align: center;\n  max-width: 600px;\n  width: 100%;\n  padding: 20px;\n}\n.maintenance-image {\n  max-width: 280px;\n  width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.maintenance-title {\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n  margin-top: 16px;\n}\n.maintenance-message {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n.text-muted {\n  color: var(--ui-text-secondary);\n}\n.text-primary {\n  color: var(--functional-info-500);\n}\n.fw-bold {\n  font-weight: 700;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.btn-khalli {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli:hover,\n.btn-khalli:focus,\n.btn-khalli:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=maintance-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintancePage, { className: "MaintancePage", filePath: "src/features/errormiddleware/maintance-page/maintance-page.ts", lineNumber: 10 });
})();
export {
  MaintancePage
};
//# sourceMappingURL=chunk-WR2BHEIR.js.map
