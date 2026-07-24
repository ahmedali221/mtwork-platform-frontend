import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  Router
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/SidebarComponents/choose-people-type/choose-people-type.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChoosePeopleType_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r2.infoText);
  }
}
function ChoosePeopleType_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 11);
    \u0275\u0275domListener("click", function ChoosePeopleType_For_15_Template_article_click_0_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelect(card_r2));
    })("keydown.enter", function ChoosePeopleType_For_15_Template_article_keydown_enter_0_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelect(card_r2));
    });
    \u0275\u0275domElementStart(1, "div", 12);
    \u0275\u0275domElement(2, "img", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 14)(4, "h2", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 17)(9, "div", 18)(10, "button", 19);
    \u0275\u0275domListener("click", function ChoosePeopleType_For_15_Template_button_click_10_listener($event) {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleInfo(card_r2, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(11, "svg", 20);
    \u0275\u0275domElement(12, "path", 21);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(13, " More info ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(14, ChoosePeopleType_For_15_Conditional_14_Template, 2, 1, "div", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "svg", 23);
    \u0275\u0275domElement(16, "path", 24);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "Select " + card_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r2.bgClass);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", card_r2.image, \u0275\u0275sanitizeUrl)("alt", card_r2.imageAlt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "More info about " + card_r2.title)("aria-expanded", ctx_r2.showInfoId === card_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.showInfoId === card_r2.id ? 14 : -1);
  }
}
var _ChoosePeopleType = class _ChoosePeopleType {
  constructor() {
    this.router = inject(Router);
    this.showInfoId = null;
    this.cards = [
      {
        id: "contractor",
        title: "Contractor",
        description: "Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team",
        image: "assets/images/chooseBg1.png",
        imageAlt: "Contractor illustration",
        route: "/dashboard/typecontract",
        bgClass: "bg-contractor",
        infoText: "A contractor is an independent professional hired for specific projects or tasks. They manage their own taxes and are not on your company payroll."
      },
      {
        id: "employee",
        title: "Employee",
        description: "Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team",
        image: "assets/images/chooseBg2.png",
        imageAlt: "Employee illustration",
        route: "/dashboard/CreateEmployeeContract",
        bgClass: "bg-employee",
        infoText: "A full-time or part-time employee hired under a fixed salary contract. They are on your company payroll with benefits and legal protections."
      }
    ];
  }
  onBack() {
    window.history.back();
  }
  onSelect(card) {
    this.router.navigate([card.route]);
  }
  toggleInfo(card, event) {
    event.stopPropagation();
    this.showInfoId = this.showInfoId === card.id ? null : card.id;
  }
};
_ChoosePeopleType.\u0275fac = function ChoosePeopleType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChoosePeopleType)();
};
_ChoosePeopleType.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChoosePeopleType, selectors: [["app-choose-people-type"]], decls: 16, vars: 3, consts: [[1, "page-wrap"], [1, "container"], [1, "back-row"], [1, "back-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M19 12H5M12 5l-7 7 7 7"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "cards-grid"], ["role", "button", "tabindex", "0", 1, "people-card"], ["role", "button", "tabindex", "0", 1, "people-card", 3, "click", "keydown.enter"], [1, "card-illustration"], [1, "card-img", 3, "src", "alt"], [1, "card-content"], [1, "card-title"], [1, "card-description"], [1, "card-footer"], [1, "info-wrapper"], [1, "info-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"], ["role", "tooltip", 1, "info-tooltip"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "chevron"], ["d", "M9 18l6-6-6-6"]], template: function ChoosePeopleType_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275domListener("click", function ChoosePeopleType_Template_button_click_3_listener() {
      return ctx.onBack();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(5, "svg", 4);
    \u0275\u0275domElement(6, "path", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7, " Back ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "header", 6)(9, "h1", 7);
    \u0275\u0275text(10, "Add People");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 8);
    \u0275\u0275text(12, "Select what type of work you want to create.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 9);
    \u0275\u0275repeaterCreate(14, ChoosePeopleType_For_15_Template, 17, 10, "article", 10, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "common.goBack"));
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.cards);
  }
}, dependencies: [CommonModule, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  padding: 36px 24px;\n  font-family: var(--font-family-primary);\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 880px;\n  margin: 0 auto;\n}\n.back-row[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  padding: 6px 0;\n  transition: color 0.15s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-main);\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: var(--ui-text-main);\n  margin: 0 0 8px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.people-card[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n  display: flex;\n  flex-direction: column;\n}\n.people-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 28px color-mix(in srgb, var(--brand-neutral-950) 8%, transparent);\n}\n.people-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.card-illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bg-contractor[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--brand-secondary-500) 12%, var(--ui-bg-surface));\n}\n.bg-employee[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--brand-accent-500) 10%, var(--ui-bg-surface));\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 14px;\n  border-top: 1px solid var(--ui-border);\n  margin-top: auto;\n}\n.info-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.info-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--functional-info-500);\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.15s;\n}\n.info-btn[_ngcontent-%COMP%]:hover {\n  color: var(--functional-info-700);\n}\n.info-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 0;\n  bottom: calc(100% + 8px);\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  line-height: 1.5;\n  box-shadow: 0 4px 14px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  z-index: 10;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=choose-people-type.css.map */"] });
var ChoosePeopleType = _ChoosePeopleType;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChoosePeopleType, [{
    type: Component,
    args: [{ selector: "app-choose-people-type", standalone: true, imports: [CommonModule, TranslocoModule], template: `<div class="page-wrap">
  <div class="container">

    <!-- Back -->
    <div class="back-row">
      <button class="back-btn" (click)="onBack()" [attr.aria-label]="'common.goBack' | transloco">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back
      </button>
    </div>

    <!-- Header -->
    <header class="page-header">
      <h1 class="page-title">Add People</h1>
      <p class="page-subtitle">Select what type of work you want to create.</p>
    </header>

    <!-- Cards -->
    <div class="cards-grid">
      @for (card of cards; track card.id) {
        <article
          class="people-card"
          (click)="onSelect(card)"
          role="button"
          tabindex="0"
          (keydown.enter)="onSelect(card)"
          [attr.aria-label]="'Select ' + card.title"
        >
          <!-- Illustration -->
          <div class="card-illustration" [class]="card.bgClass">
            <img [src]="card.image" [alt]="card.imageAlt" class="card-img" />
          </div>

          <!-- Content -->
          <div class="card-content">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-description">{{ card.description }}</p>

            <!-- Footer row -->
            <div class="card-footer">
              <div class="info-wrapper">
                <button
                  class="info-btn"
                  (click)="toggleInfo(card, $event)"
                  [attr.aria-label]="'More info about ' + card.title"
                  [attr.aria-expanded]="showInfoId === card.id"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                  More info
                </button>
                @if (showInfoId === card.id) {
                  <div class="info-tooltip" role="tooltip">{{ card.infoText }}</div>
                }
              </div>
              <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </article>
      }
    </div>

  </div>
</div>
`, styles: ["/* src/components/DashboardLayout/SidebarComponents/choose-people-type/choose-people-type.css */\n:host {\n  display: block;\n}\n.page-wrap {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  padding: 36px 24px;\n  font-family: var(--font-family-primary);\n}\n.container {\n  width: 100%;\n  max-width: 880px;\n  margin: 0 auto;\n}\n.back-row {\n  margin-bottom: 24px;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  padding: 6px 0;\n  transition: color 0.15s;\n}\n.back-btn:hover {\n  color: var(--ui-text-main);\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.page-title {\n  font-size: 30px;\n  font-weight: 800;\n  color: var(--ui-text-main);\n  margin: 0 0 8px;\n}\n.page-subtitle {\n  font-size: 16px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.people-card {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n  display: flex;\n  flex-direction: column;\n}\n.people-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 28px color-mix(in srgb, var(--brand-neutral-950) 8%, transparent);\n}\n.people-card:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.card-illustration {\n  width: 100%;\n  height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bg-contractor {\n  background: color-mix(in srgb, var(--brand-secondary-500) 12%, var(--ui-bg-surface));\n}\n.bg-employee {\n  background: color-mix(in srgb, var(--brand-accent-500) 10%, var(--ui-bg-surface));\n}\n.card-img {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n.card-content {\n  padding: 20px 20px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.card-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.card-description {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 14px;\n  border-top: 1px solid var(--ui-border);\n  margin-top: auto;\n}\n.info-wrapper {\n  position: relative;\n}\n.info-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--functional-info-500);\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.15s;\n}\n.info-btn:hover {\n  color: var(--functional-info-700);\n}\n.info-tooltip {\n  position: absolute;\n  inset-inline-start: 0;\n  bottom: calc(100% + 8px);\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  line-height: 1.5;\n  box-shadow: 0 4px 14px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  z-index: 10;\n}\n.chevron {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .page-title {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=choose-people-type.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChoosePeopleType, { className: "ChoosePeopleType", filePath: "src/components/dashboardlayout/sidebarcomponents/choose-people-type/choose-people-type.ts", lineNumber: 24 });
})();
export {
  ChoosePeopleType
};
//# sourceMappingURL=chunk-LSYYDQKU.js.map
