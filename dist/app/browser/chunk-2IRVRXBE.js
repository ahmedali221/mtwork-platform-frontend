import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import {
  Router
} from "./chunk-LSMZM5UZ.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/features/landingComponents/choosing-component/choosing-component.ts
var _c0 = () => [1, 2, 3];
function ChoosingComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 7);
    \u0275\u0275domElement(1, "img", 11);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r0.lang.translations()) == null ? null : tmp_10_0.choosing == null ? null : tmp_10_0.choosing.feature) || "Real Success Growth");
  }
}
function ChoosingComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 7);
    \u0275\u0275domElement(1, "img", 11);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r0.lang.translations()) == null ? null : tmp_10_0.choosing == null ? null : tmp_10_0.choosing.feature) || "Real Success Growth");
  }
}
var _ChoosingComponent = class _ChoosingComponent {
  constructor() {
    this.lang = inject(LanguageService);
    this.router = inject(Router);
    this.image1 = "assets/images/chooseBg1.png";
    this.image2 = "assets/images/chooseBg2.png";
  }
  onGetStarted() {
    this.router.navigate(["/register"]);
  }
};
_ChoosingComponent.\u0275fac = function ChoosingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChoosingComponent)();
};
_ChoosingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChoosingComponent, selectors: [["app-choosing-component"]], decls: 29, vars: 12, consts: [[1, "splits"], [1, "splits__row"], [1, "splits__text"], [1, "splits__badge"], [1, "splits__title"], [1, "splits__desc"], [1, "splits__list"], [1, "splits__list-item"], ["type", "button", 1, "splits__cta", 3, "click"], ["src", "assets/images/testimonials/split-panel-dark.png", "alt", "", "aria-hidden", "true", 1, "splits__panel"], ["src", "assets/images/testimonials/split-panel-blue.png", "alt", "", "aria-hidden", "true", 1, "splits__panel"], ["src", "assets/images/testimonials/check-arrow.svg", "alt", "", "aria-hidden", "true"]], template: function ChoosingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "ul", 6);
    \u0275\u0275repeaterCreate(10, ChoosingComponent_For_11_Template, 4, 1, "li", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "button", 8);
    \u0275\u0275domListener("click", function ChoosingComponent_Template_button_click_12_listener() {
      return ctx.onGetStarted();
    });
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(14, "img", 9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div", 1);
    \u0275\u0275domElement(16, "img", 10);
    \u0275\u0275domElementStart(17, "div", 2)(18, "span", 3);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "h2", 4);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "p", 5);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "ul", 6);
    \u0275\u0275repeaterCreate(25, ChoosingComponent_For_26_Template, 4, 1, "li", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "button", 8);
    \u0275\u0275domListener("click", function ChoosingComponent_Template_button_click_27_listener() {
      return ctx.onGetStarted();
    });
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_0_0 = ctx.lang.translations()) == null ? null : tmp_0_0.hero == null ? null : tmp_0_0.hero.badge) || "Payroll Managment");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_1_0 = ctx.lang.translations()) == null ? null : tmp_1_0.creatingImpact == null ? null : tmp_1_0.creatingImpact.titlePrefix, " ", (tmp_1_0 = ctx.lang.translations()) == null ? null : tmp_1_0.creatingImpact == null ? null : tmp_1_0.creatingImpact.titleHighlight, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx.lang.translations()) == null ? null : tmp_2_0.creatingImpact == null ? null : tmp_2_0.creatingImpact.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx.lang.translations()) == null ? null : tmp_4_0.compliance == null ? null : tmp_4_0.compliance.getStarted, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx.lang.translations()) == null ? null : tmp_5_0.hero == null ? null : tmp_5_0.hero.badge) || "Payroll Managment");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_6_0 = ctx.lang.translations()) == null ? null : tmp_6_0.creatingImpact == null ? null : tmp_6_0.creatingImpact.titlePrefix, " ", (tmp_6_0 = ctx.lang.translations()) == null ? null : tmp_6_0.creatingImpact == null ? null : tmp_6_0.creatingImpact.titleHighlight, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx.lang.translations()) == null ? null : tmp_7_0.creatingImpact == null ? null : tmp_7_0.creatingImpact.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = ctx.lang.translations()) == null ? null : tmp_9_0.compliance == null ? null : tmp_9_0.compliance.getStarted, " ");
  }
}, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n  padding-block: 79px 148.46px;\n}\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  background: var(--brand-grays-500);\n}\n@media (prefers-color-scheme: dark) {\n  .dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n    background: var(--brand-grays-500);\n  }\n}\n.splits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-very-large-giant);\n  max-inline-size: 1388px;\n  margin-inline: auto;\n}\n.splits__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  block-size: 419.77px;\n  padding-inline: 113.48px;\n}\n.splits__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n  inline-size: 523px;\n}\n.splits__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 1px solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-navbar-primary);\n  color: var(--landing-navbar-surface);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.splits__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.splits__desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.splits__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.splits__list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  color: var(--landing-navbar-primary);\n  font-size: var(--body-size);\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.splits__list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 20.273px;\n  block-size: 14.504px;\n}\n.splits__cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-inline-size: 111px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.splits__panel[_ngcontent-%COMP%] {\n  inline-size: 510px;\n  block-size: 419.77px;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .splits[_ngcontent-%COMP%] {\n    max-inline-size: 100%;\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .splits__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-very-large-giant);\n    block-size: auto;\n    padding-inline: 0;\n  }\n  .splits__text[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    max-inline-size: 523px;\n  }\n  .splits__panel[_ngcontent-%COMP%] {\n    inline-size: min(100%, 510px);\n    block-size: auto;\n    aspect-ratio: 510 / 419.77;\n  }\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    padding-block-end: var(--spacing-large-xxl);\n  }\n  .splits[_ngcontent-%COMP%] {\n    max-inline-size: 345px;\n  }\n  .splits__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-very-large-giant);\n    block-size: auto;\n    padding-inline: 0;\n  }\n  .splits__text[_ngcontent-%COMP%] {\n    inline-size: 100%;\n  }\n  .splits__title[_ngcontent-%COMP%] {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n    white-space: nowrap;\n  }\n  .splits__panel[_ngcontent-%COMP%] {\n    inline-size: 340.78px;\n    block-size: 280.47px;\n  }\n}\n/*# sourceMappingURL=choosing-component.css.map */"], changeDetection: 0 });
var ChoosingComponent = _ChoosingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChoosingComponent, [{
    type: Component,
    args: [{ selector: "app-choosing-component", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Figma nodes 3:38102 / 3:38121 \u2014 feature split containers (inside section 3:38071) -->
<section class="splits">

  <!-- Container 1: text left, panel right (3:38102) -->
  <div class="splits__row">
    <div class="splits__text">
      <span class="splits__badge">{{ lang.translations()?.hero?.badge || 'Payroll Managment' }}</span>
      <h2 class="splits__title">
        {{ lang.translations()?.creatingImpact?.titlePrefix }}
        {{ lang.translations()?.creatingImpact?.titleHighlight }}
      </h2>
      <p class="splits__desc">{{ lang.translations()?.creatingImpact?.description }}</p>
      <ul class="splits__list">
        @for (_ of [1, 2, 3]; track $index) {
          <li class="splits__list-item">
            <img src="assets/images/testimonials/check-arrow.svg" alt="" aria-hidden="true" />
            <span>{{ lang.translations()?.choosing?.feature || 'Real Success Growth' }}</span>
          </li>
        }
      </ul>
      <button type="button" class="splits__cta" (click)="onGetStarted()">
        {{ lang.translations()?.compliance?.getStarted }}
      </button>
    </div>
    <img class="splits__panel" src="assets/images/testimonials/split-panel-dark.png" alt="" aria-hidden="true" />
  </div>

  <!-- Container 2: panel left, text right (3:38121) -->
  <div class="splits__row">
    <img class="splits__panel" src="assets/images/testimonials/split-panel-blue.png" alt="" aria-hidden="true" />
    <div class="splits__text">
      <span class="splits__badge">{{ lang.translations()?.hero?.badge || 'Payroll Managment' }}</span>
      <h2 class="splits__title">
        {{ lang.translations()?.creatingImpact?.titlePrefix }}
        {{ lang.translations()?.creatingImpact?.titleHighlight }}
      </h2>
      <p class="splits__desc">{{ lang.translations()?.creatingImpact?.description }}</p>
      <ul class="splits__list">
        @for (_ of [1, 2, 3]; track $index) {
          <li class="splits__list-item">
            <img src="assets/images/testimonials/check-arrow.svg" alt="" aria-hidden="true" />
            <span>{{ lang.translations()?.choosing?.feature || 'Real Success Growth' }}</span>
          </li>
        }
      </ul>
      <button type="button" class="splits__cta" (click)="onGetStarted()">
        {{ lang.translations()?.compliance?.getStarted }}
      </button>
    </div>
  </div>

</section>
`, styles: ["/* src/features/landingComponents/choosing-component/choosing-component.css */\n:host {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n  padding-block: 79px 148.46px;\n}\n:host-context(.dark-theme) {\n  background: var(--brand-grays-500);\n}\n@media (prefers-color-scheme: dark) {\n  :host-context(.dark-theme) {\n    background: var(--brand-grays-500);\n  }\n}\n.splits {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-very-large-giant);\n  max-inline-size: 1388px;\n  margin-inline: auto;\n}\n.splits__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  block-size: 419.77px;\n  padding-inline: 113.48px;\n}\n.splits__text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n  inline-size: 523px;\n}\n.splits__badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 1px solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-navbar-primary);\n  color: var(--landing-navbar-surface);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.splits__title {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.splits__desc {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.splits__list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.splits__list-item {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  color: var(--landing-navbar-primary);\n  font-size: var(--body-size);\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.splits__list-item img {\n  inline-size: 20.273px;\n  block-size: 14.504px;\n}\n.splits__cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-inline-size: 111px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.splits__panel {\n  inline-size: 510px;\n  block-size: 419.77px;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .splits {\n    max-inline-size: 100%;\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .splits__row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-very-large-giant);\n    block-size: auto;\n    padding-inline: 0;\n  }\n  .splits__text {\n    inline-size: 100%;\n    max-inline-size: 523px;\n  }\n  .splits__panel {\n    inline-size: min(100%, 510px);\n    block-size: auto;\n    aspect-ratio: 510 / 419.77;\n  }\n}\n@media (max-width: 767px) {\n  :host {\n    padding-block-end: var(--spacing-large-xxl);\n  }\n  .splits {\n    max-inline-size: 345px;\n  }\n  .splits__row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-very-large-giant);\n    block-size: auto;\n    padding-inline: 0;\n  }\n  .splits__text {\n    inline-size: 100%;\n  }\n  .splits__title {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n    white-space: nowrap;\n  }\n  .splits__panel {\n    inline-size: 340.78px;\n    block-size: 280.47px;\n  }\n}\n/*# sourceMappingURL=choosing-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChoosingComponent, { className: "ChoosingComponent", filePath: "src/features/landingcomponents/choosing-component/choosing-component.ts", lineNumber: 14 });
})();

export {
  ChoosingComponent
};
//# sourceMappingURL=chunk-2IRVRXBE.js.map
