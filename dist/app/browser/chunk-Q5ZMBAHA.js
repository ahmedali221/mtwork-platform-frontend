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

// src/features/ErrorMiddleWare/result-not-found/result-not-found.ts
var _ResultNotFound = class _ResultNotFound {
};
_ResultNotFound.\u0275fac = function ResultNotFound_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResultNotFound)();
};
_ResultNotFound.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultNotFound, selectors: [["app-result-not-found"]], decls: 7, vars: 0, consts: [[1, "container-center", "text-center"], [1, "content"], ["src", "assets/images/ResultNotFound.png", "alt", "Result Not Found", 1, "error-image"], [1, "error-title", "mt-4"], [1, "error-message"]], template: function ResultNotFound_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "h2", 3);
    \u0275\u0275text(4, " Result Not found! ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 4);
    \u0275\u0275text(6, " It seems that the result you\u2019re looking for was not found. Try using different keywords. ");
    \u0275\u0275domElementEnd()()();
  }
}, styles: ["\n\n.container-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n  background-color: var(--ui-bg-subtle);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  padding: 20px;\n}\n.error-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=result-not-found.css.map */"] });
var ResultNotFound = _ResultNotFound;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultNotFound, [{
    type: Component,
    args: [{ selector: "app-result-not-found", imports: [], template: '<div class="container-center text-center">\n  <div class="content">\n    <img src="assets/images/ResultNotFound.png"\n         alt="Result Not Found"\n         class="error-image"/>\n\n    <h2 class="error-title mt-4">\n      Result Not found!\n    </h2>\n\n    <p class="error-message">\n      It seems that the result you\u2019re looking for was not found.  \n      Try using different keywords.\n    </p>\n  </div>\n</div>', styles: ["/* src/features/ErrorMiddleWare/result-not-found/result-not-found.css */\n.container-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n  background-color: var(--ui-bg-subtle);\n}\n.content {\n  text-align: center;\n  max-width: 500px;\n  padding: 20px;\n}\n.error-image {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n.error-title {\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: var(--brand-neutral-800);\n}\n.error-message {\n  font-size: 0.95rem;\n  color: var(--ui-text-muted);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=result-not-found.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultNotFound, { className: "ResultNotFound", filePath: "src/features/errormiddleware/result-not-found/result-not-found.ts", lineNumber: 9 });
})();
export {
  ResultNotFound
};
//# sourceMappingURL=chunk-Q5ZMBAHA.js.map
