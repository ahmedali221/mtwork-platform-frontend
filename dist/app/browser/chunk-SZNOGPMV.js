import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/stepper-component/stepper-component.ts
function StepperComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 7);
  }
  if (rf & 2) {
    const \u0275$index_3_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("stepper__line--done", \u0275$index_3_r1 <= ctx_r1.current);
  }
}
function StepperComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 5);
    \u0275\u0275domElement(1, "polyline", 8);
    \u0275\u0275domElementEnd();
  }
}
function StepperComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_3_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_3_r1 + 1, " ");
  }
}
function StepperComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, StepperComponent_For_2_Conditional_1_Template, 1, 2, "div", 3);
    \u0275\u0275domElementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, StepperComponent_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 5)(4, StepperComponent_For_2_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const \u0275$index_3_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("stepper__item--active", \u0275$index_3_r1 === ctx_r1.current)("stepper__item--done", \u0275$index_3_r1 < ctx_r1.current);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_3_r1 > 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_3_r1 < ctx_r1.current ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r3);
  }
}
var _StepperComponent = class _StepperComponent {
  constructor() {
    this.steps = [];
    this.current = 0;
  }
};
_StepperComponent.\u0275fac = function StepperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepperComponent)();
};
_StepperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperComponent, selectors: [["app-stepper-component"]], inputs: { steps: "steps", current: "current" }, decls: 3, vars: 0, consts: [[1, "stepper"], [1, "stepper__item", 3, "stepper__item--active", "stepper__item--done"], [1, "stepper__item"], [1, "stepper__line", 3, "stepper__line--done"], [1, "stepper__circle"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "stepper__label"], [1, "stepper__line"], ["points", "20 6 9 17 4 12"]], template: function StepperComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, StepperComponent_For_2_Template, 7, 7, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.steps);
  }
}, dependencies: [CommonModule], styles: ["\n\n.stepper[_ngcontent-%COMP%] {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 515px;\n  max-width: 100%;\n  margin-inline: auto;\n  position: relative;\n  z-index: 2;\n  margin-block-start: -126px;\n}\n.stepper__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 32px;\n  position: relative;\n  height: 58px;\n}\n.stepper__line[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 15px;\n  inset-inline-end: 32px;\n  width: 209.5px;\n  height: 2px;\n  background: #b3b3b3;\n  z-index: 0;\n}\n.stepper__line--done[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n}\n.stepper__circle[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  background: #ffffff;\n  border: 1.5px solid #b3b3b3;\n  color: var(--brand-neutral-400);\n  transition:\n    background 0.25s,\n    border-color 0.25s,\n    color 0.25s;\n}\n.stepper__item--active[_ngcontent-%COMP%]   .stepper__circle[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  border-color: var(--login-primary);\n  color: #ffffff;\n}\n.stepper__item--done[_ngcontent-%COMP%]   .stepper__circle[_ngcontent-%COMP%] {\n  background: var(--login-primary);\n  border-color: var(--login-primary);\n  color: #ffffff;\n}\n.stepper__label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 42px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  text-align: center;\n  white-space: nowrap;\n}\n.stepper__item--active[_ngcontent-%COMP%]   .stepper__label[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n}\n.stepper__item--done[_ngcontent-%COMP%]   .stepper__label[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n}\n/*# sourceMappingURL=stepper-component.css.map */"] });
var StepperComponent = _StepperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{ selector: "app-stepper-component", standalone: true, imports: [CommonModule], template: '<div class="stepper">\n  @for (step of steps; track step; let i = $index) {\n    <div class="stepper__item" [class.stepper__item--active]="i === current" [class.stepper__item--done]="i < current">\n\n      <!-- Connector line (before first circle, except first step) -->\n      @if (i > 0) {\n        <div class="stepper__line" [class.stepper__line--done]="i <= current"></div>\n      }\n\n      <!-- Circle -->\n      <div class="stepper__circle">\n        @if (i < current) {\n          <!-- Checkmark -->\n          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>\n        } @else {\n          {{ i + 1 }}\n        }\n      </div>\n\n      <!-- Label -->\n      <span class="stepper__label">{{ step }}</span>\n    </div>\n  }\n</div>\n', styles: ["/* src/features/auth/CreateAccount/stepper-component/stepper-component.css */\n.stepper {\n  --login-primary: var(--landing-navbar-primary);\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 515px;\n  max-width: 100%;\n  margin-inline: auto;\n  position: relative;\n  z-index: 2;\n  margin-block-start: -126px;\n}\n.stepper__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 32px;\n  position: relative;\n  height: 58px;\n}\n.stepper__line {\n  position: absolute;\n  inset-block-start: 15px;\n  inset-inline-end: 32px;\n  width: 209.5px;\n  height: 2px;\n  background: #b3b3b3;\n  z-index: 0;\n}\n.stepper__line--done {\n  background: var(--login-primary);\n}\n.stepper__circle {\n  position: relative;\n  z-index: 1;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-size);\n  font-weight: 400;\n  background: #ffffff;\n  border: 1.5px solid #b3b3b3;\n  color: var(--brand-neutral-400);\n  transition:\n    background 0.25s,\n    border-color 0.25s,\n    color 0.25s;\n}\n.stepper__item--active .stepper__circle {\n  background: var(--login-primary);\n  border-color: var(--login-primary);\n  color: #ffffff;\n}\n.stepper__item--done .stepper__circle {\n  background: var(--login-primary);\n  border-color: var(--login-primary);\n  color: #ffffff;\n}\n.stepper__label {\n  position: absolute;\n  inset-block-start: 42px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  font-family: var(--font-family-dm-sans);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--brand-neutral-950);\n  text-align: center;\n  white-space: nowrap;\n}\n.stepper__item--active .stepper__label {\n  color: var(--login-primary);\n}\n.stepper__item--done .stepper__label {\n  color: var(--login-primary);\n}\n/*# sourceMappingURL=stepper-component.css.map */\n"] }]
  }], null, { steps: [{
    type: Input
  }], current: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "src/features/auth/createaccount/stepper-component/stepper-component.ts", lineNumber: 11 });
})();

export {
  StepperComponent
};
//# sourceMappingURL=chunk-SZNOGPMV.js.map
