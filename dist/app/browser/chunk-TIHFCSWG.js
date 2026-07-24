import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MQLQGMUZ.js";

// src/shared/components/empty-state/empty-state.ts
function EmptyStateComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "path", 5);
    \u0275\u0275domElementEnd();
  }
}
function EmptyStateComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "path", 6);
    \u0275\u0275domElementEnd();
  }
}
function EmptyStateComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "circle", 7)(2, "path", 8);
    \u0275\u0275domElementEnd();
  }
}
function EmptyStateComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "path", 9);
    \u0275\u0275domElementEnd();
  }
}
function EmptyStateComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
var _EmptyStateComponent = class _EmptyStateComponent {
  constructor() {
    this.kind = "inbox";
  }
};
_EmptyStateComponent.\u0275fac = function EmptyStateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmptyStateComponent)();
};
_EmptyStateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { title: "title", description: "description", kind: "kind" }, decls: 9, vars: 3, consts: [["role", "status", "aria-live", "polite", 1, "empty-state"], ["aria-hidden", "true", 1, "empty-state__icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none"], [1, "empty-state__title"], [1, "empty-state__desc"], ["d", "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 21l-4.35-4.35", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function EmptyStateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, EmptyStateComponent_Case_2_Template, 2, 0, ":svg:svg", 2)(3, EmptyStateComponent_Case_3_Template, 2, 0, ":svg:svg", 2)(4, EmptyStateComponent_Case_4_Template, 3, 0, ":svg:svg", 2)(5, EmptyStateComponent_Case_5_Template, 2, 0, ":svg:svg", 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h3", 3);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, EmptyStateComponent_Conditional_8_Template, 2, 1, "p", 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_0_0 = ctx.kind) === "chat" ? 2 : tmp_0_0 === "bell" ? 3 : tmp_0_0 === "search" ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.description ? 8 : -1);
  }
}, dependencies: [CommonModule], styles: ["\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: var(--ui-text-muted);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--ui-surface-hover, rgba(0, 0, 0, 0.04));\n  color: var(--ui-text-muted);\n  margin-block-end: 4px;\n}\n.empty-state__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.empty-state__desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  max-width: 320px;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=empty-state.css.map */"], changeDetection: 0 });
var EmptyStateComponent = _EmptyStateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyStateComponent, [{
    type: Component,
    args: [{ selector: "app-empty-state", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="empty-state" role="status" aria-live="polite">
  <div class="empty-state__icon" aria-hidden="true">
    @switch (kind) {
      @case ('chat') {
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('bell') {
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('search') {
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      }
      @default {
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
    }
  </div>

  <h3 class="empty-state__title">{{ title }}</h3>

  @if (description) {
    <p class="empty-state__desc">{{ description }}</p>
  }
</div>
`, styles: ["/* src/shared/components/empty-state/empty-state.css */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: var(--ui-text-muted);\n}\n.empty-state__icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--ui-surface-hover, rgba(0, 0, 0, 0.04));\n  color: var(--ui-text-muted);\n  margin-block-end: 4px;\n}\n.empty-state__title {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.empty-state__desc {\n  margin: 0;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  max-width: 320px;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=empty-state.css.map */\n"] }]
  }], null, { title: [{
    type: Input,
    args: [{ required: true }]
  }], description: [{
    type: Input
  }], kind: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/shared/components/empty-state/empty-state.ts", lineNumber: 26 });
})();

export {
  EmptyStateComponent
};
//# sourceMappingURL=chunk-TIHFCSWG.js.map
