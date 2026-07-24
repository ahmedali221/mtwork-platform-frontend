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
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-MQLQGMUZ.js";

// src/features/ErrorMiddleWare/internal-server-error/internal-server-error.ts
var _InternalServerError = class _InternalServerError {
  reloadPage() {
    window.location.reload();
  }
};
_InternalServerError.\u0275fac = function InternalServerError_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InternalServerError)();
};
_InternalServerError.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InternalServerError, selectors: [["app-internal-server-error"]], decls: 19, vars: 0, consts: [[1, "container-center", "text-center"], [1, "content"], [1, "image-wrap"], ["src", "assets/images/InternalServerError500.png", "alt", "500 Internal Server Error", 1, "error-image"], [1, "header-500"], [1, "error-message"], [1, "mt-3", "reach-out"], [1, "icon-text"], ["src", "assets/images/message-envelope-svgrepo.png", "alt", "message", 1, "icon-inline"], [1, "text-danger", "fw-bold"], [1, "btn", "btn-primary", "mt-4", "btn-khalli", 3, "click"]], template: function InternalServerError_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275domElement(3, "img", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 4);
    \u0275\u0275text(5, " 500 - Internal Server Error ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h1", 5);
    \u0275\u0275text(7, " Something went wrong on our end ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 5);
    \u0275\u0275text(9, " We\u2019re working to fix this issue as soon as possible ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 6)(11, "span", 7);
    \u0275\u0275domElement(12, "img", 8);
    \u0275\u0275text(13, " Reach out to ");
    \u0275\u0275domElementStart(14, "span", 9);
    \u0275\u0275text(15, "Support if it continues");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElement(16, "br");
    \u0275\u0275domElementStart(17, "button", 10);
    \u0275\u0275domListener("click", function InternalServerError_Template_button_click_17_listener() {
      return ctx.reloadPage();
    });
    \u0275\u0275text(18, " Please try again later ");
    \u0275\u0275domElementEnd()()();
  }
}, dependencies: [CommonModule, RouterModule], styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n}\n.header-500[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--brand-neutral-800);\n  margin-top: 20px;\n  margin-bottom: 12px;\n}\n.image-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-image[_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: auto;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--brand-neutral-800);\n  margin-top: 16px;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--brand-neutral-600);\n}\n.reach-out[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.6;\n  margin-top: 8px;\n}\n.icon-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  font-size: 1rem;\n}\n.icon-inline[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 500;\n  border: none;\n  border-radius: 6px;\n  padding: 0.6rem 1.25rem;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-500);\n  color: var(--ui-surface);\n}\n.btn-khalli[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli[_ngcontent-%COMP%]:hover, \n.btn-khalli[_ngcontent-%COMP%]:focus, \n.btn-khalli[_ngcontent-%COMP%]:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=internal-server-error.css.map */"] });
var InternalServerError = _InternalServerError;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalServerError, [{
    type: Component,
    args: [{ selector: "app-internal-server-error", imports: [CommonModule, RouterModule], template: '<div class="container-center text-center">\n  <div class="content">\n   \n\n    <div class="image-wrap">\n      <img src="assets/images/InternalServerError500.png"\n           alt="500 Internal Server Error"\n           class="error-image" />\n    </div>\n\n    <div class="header-500">\n      500 - Internal Server Error\n    </div>\n    <h1 class="error-message">\n      Something went wrong on our end\n    </h1>\n\n    <p class="error-message">\n      We\u2019re working to fix this issue as soon as possible\n    </p>\n\n    <p class="mt-3 reach-out">\n      <span class="icon-text">\n        <img src="assets/images/message-envelope-svgrepo.png"\n             alt="message"\n             class="icon-inline" />\n        Reach out to\n        <span class="text-danger fw-bold">Support if it continues</span>\n      </span>\n    </p>   <br/>\n\n    <button class="btn btn-primary mt-4 btn-khalli" (click)="reloadPage()">\n      Please try again later\n    </button>\n  </div>\n</div>', styles: ["/* src/features/ErrorMiddleWare/internal-server-error/internal-server-error.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n}\n.content {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n}\n.header-500 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--brand-neutral-800);\n  margin-top: 20px;\n  margin-bottom: 12px;\n}\n.image-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.error-image {\n  max-width: 280px;\n  height: auto;\n}\n.error-title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--brand-neutral-800);\n  margin-top: 16px;\n}\n.error-message {\n  font-size: 1rem;\n  color: var(--brand-neutral-600);\n}\n.reach-out {\n  display: inline-block;\n  line-height: 1.6;\n  margin-top: 8px;\n}\n.icon-text {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  font-size: 1rem;\n}\n.icon-inline {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.btn {\n  display: inline-block;\n  font-weight: 500;\n  border: none;\n  border-radius: 6px;\n  padding: 0.6rem 1.25rem;\n  cursor: pointer;\n}\n.btn-primary {\n  background-color: var(--brand-primary-500);\n  color: var(--ui-surface);\n}\n.btn-khalli {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli:hover,\n.btn-khalli:focus,\n.btn-khalli:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=internal-server-error.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InternalServerError, { className: "InternalServerError", filePath: "src/features/errormiddleware/internal-server-error/internal-server-error.ts", lineNumber: 10 });
})();
export {
  InternalServerError
};
//# sourceMappingURL=chunk-UD3YCCHG.js.map
