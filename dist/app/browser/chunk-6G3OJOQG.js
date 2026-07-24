import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-MQLQGMUZ.js";

// src/features/ErrorMiddleWare/bad-request400/bad-request400.ts
var _BadRequest400 = class _BadRequest400 {
};
_BadRequest400.\u0275fac = function BadRequest400_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BadRequest400)();
};
_BadRequest400.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadRequest400, selectors: [["app-bad-request400"]], decls: 12, vars: 0, consts: [[1, "m-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "mt-3", "btn-khalli"], [1, "container-center", "text-center"], [1, "content"], ["src", "assets/images/BadRequest400.png", "alt", "400 Bad Request Error", 1, "error-image"], [1, "error-title", "mt-4"], [1, "error-message"]], template: function BadRequest400_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "a", 1);
    \u0275\u0275text(2, " Go to Homepage ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275domElement(5, "img", 4);
    \u0275\u0275domElementStart(6, "h2", 5);
    \u0275\u0275text(7, "\u26A0\uFE0F 400 - Bad Request");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 6);
    \u0275\u0275text(9, " Oops! Something\u2019s wrong with the request.");
    \u0275\u0275domElement(10, "br");
    \u0275\u0275text(11, " The link may be broken, or the data sent is invalid. ");
    \u0275\u0275domElementEnd()()();
  }
}, styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n}\n.error-image[_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: auto;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 10px;\n}\n.btn-khalli[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli[_ngcontent-%COMP%]:hover, \n.btn-khalli[_ngcontent-%COMP%]:focus, \n.btn-khalli[_ngcontent-%COMP%]:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=bad-request400.css.map */"] });
var BadRequest400 = _BadRequest400;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadRequest400, [{
    type: Component,
    args: [{ selector: "app-bad-request400", imports: [], template: '\n<div class="m-5">\n      <!-- Button -->\n    <a routerLink="/" class="btn btn-primary btn-lg mt-3 btn-khalli">\n      Go to Homepage\n    </a>\n</div>\n<div class="container-center text-center">\n  <div class="content">\n\n    <!-- 400 Image -->\n    <img src="assets/images/BadRequest400.png"\n         alt="400 Bad Request Error"\n         class="error-image"/>\n\n    <!-- Title -->\n    <h2 class="error-title mt-4">\u26A0\uFE0F 400 - Bad Request</h2>\n\n    <!-- Message -->\n    <p class="error-message">\n      Oops! Something\u2019s wrong with the request.<br>\n      The link may be broken, or the data sent is invalid.\n    </p>\n\n\n  </div>\n</div>\n', styles: ["/* src/features/ErrorMiddleWare/bad-request400/bad-request400.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: var(--ui-surface);\n}\n.content {\n  text-align: center;\n  max-width: 600px;\n  padding: 20px;\n}\n.error-image {\n  max-width: 280px;\n  height: auto;\n}\n.error-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message {\n  font-size: 1rem;\n  color: var(--ui-text-muted);\n  margin-top: 10px;\n}\n.btn-khalli {\n  background-color: var(--brand-primary-800);\n  border-color: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.btn-khalli:hover,\n.btn-khalli:focus,\n.btn-khalli:active {\n  background-color: var(--brand-primary-900);\n  border-color: var(--brand-primary-900);\n  color: var(--ui-surface);\n}\n/*# sourceMappingURL=bad-request400.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadRequest400, { className: "BadRequest400", filePath: "src/features/errormiddleware/bad-request400/bad-request400.ts", lineNumber: 9 });
})();
export {
  BadRequest400
};
//# sourceMappingURL=chunk-6G3OJOQG.js.map
