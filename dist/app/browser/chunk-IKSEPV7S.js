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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
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

// src/components/DashboardLayout/Contract/contract-list/CreateFixedSalaryContract/choose-contractype/choose-contractype.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChooseContractype_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", c_r2.icon, \u0275\u0275sanitizeUrl)("alt", c_r2.title + " icon");
  }
}
function ChooseContractype_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.description);
  }
}
function ChooseContractype_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 9);
    \u0275\u0275domListener("click", function ChooseContractype_For_15_Template_article_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelect(c_r2));
    })("keydown.enter", function ChooseContractype_For_15_Template_article_keydown_enter_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelect(c_r2));
    });
    \u0275\u0275domElementStart(1, "div", 10);
    \u0275\u0275conditionalCreate(2, ChooseContractype_For_15_Conditional_2_Template, 1, 2, "img", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 12)(4, "div", 13)(5, "h3", 14);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 15)(8, "button", 16);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275domListener("click", function ChooseContractype_For_15_Template_button_click_8_listener($event) {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleInfo(c_r2, $event));
    });
    \u0275\u0275text(10, "\u25CF More info");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ChooseContractype_For_15_Conditional_11_Template, 2, 1, "div", 17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "p", 18);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 19)(15, "span", 20);
    \u0275\u0275text(16, "\u203A");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r2.icon ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 5, "common.moreInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showInfoId === c_r2.id ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.subtitle);
  }
}
var _ChooseContractype = class _ChooseContractype {
  constructor() {
    this.router = inject(Router);
    this.showInfoId = null;
    this.routeMap = {
      "fixed-salary": "/dashboard/CreateFixedSalaryContract",
      "pay-by-task": "/dashboard/CreatePaytaskContact",
      "milestone": "/dashboard/CreateMileStoneContract"
    };
    this.contracts = [
      {
        id: "fixed-salary",
        title: "Fixed Salary",
        subtitle: "A fixed monthly payment regardless of hours or tasks.",
        icon: "assets/icons/fixed-salary.svg",
        description: "A fixed salary contract pays the employee a set amount per month regardless of hours worked or tasks completed. Best for full-time or part-time employees with stable workloads."
      },
      {
        id: "pay-by-task",
        title: "Pay by Task",
        subtitle: "Pay per completed task or deliverable.",
        icon: "assets/icons/pay-by-task.svg",
        description: "A pay-by-task contract compensates the worker for each completed task or deliverable. Ideal for freelancers or contractors with variable workloads."
      },
      {
        id: "milestone",
        title: "Milestone",
        subtitle: "Payments tied to completed project milestones.",
        icon: "assets/icons/milestone.svg",
        description: "A milestone contract ties payments to the completion of defined project phases. Best for long-term projects with clear deliverable checkpoints."
      }
    ];
  }
  onBack() {
    window.history.back();
  }
  onSelect(card) {
    const route = this.routeMap[card.id];
    if (route) {
      this.router.navigate([route]);
    }
  }
  toggleInfo(card, event) {
    event.stopPropagation();
    this.showInfoId = this.showInfoId === card.id ? null : card.id;
  }
};
_ChooseContractype.\u0275fac = function ChooseContractype_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChooseContractype)();
};
_ChooseContractype.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChooseContractype, selectors: [["app-choose-contractype"]], decls: 16, vars: 3, consts: [[1, "page-wrap"], [1, "container"], [1, "header"], [1, "back-btn", 3, "click"], [1, "backIcon"], [1, "title"], [1, "subtitle"], [1, "cards"], ["role", "button", "tabindex", "0", 1, "card"], ["role", "button", "tabindex", "0", 1, "card", 3, "click", "keydown.enter"], [1, "card-left"], [1, "card-icon", 3, "src", "alt"], [1, "card-body"], [1, "card-title-row"], [1, "card-title"], [1, "info-wrapper"], [1, "info", 3, "click"], ["role", "tooltip", 1, "info-tooltip"], [1, "card-sub"], [1, "card-right"], [1, "chev"]], template: function ChooseContractype_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275domListener("click", function ChooseContractype_Template_button_click_3_listener() {
      return ctx.onBack();
    });
    \u0275\u0275domElementStart(5, "span", 4);
    \u0275\u0275text(6, "\u2190");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7, " Back ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "header", 2)(9, "h1", 5);
    \u0275\u0275text(10, "Create Contract");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 6);
    \u0275\u0275text(12, "What type of contract's you need to add ?");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "main", 7);
    \u0275\u0275repeaterCreate(14, ChooseContractype_For_15_Template, 17, 7, "article", 8, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "common.back"));
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.contracts);
  }
}, dependencies: [
  CommonModule,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  padding: 36px 24px;\n  font-family: var(--font-family-primary);\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 760px;\n  margin: 0 auto;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  padding: 6px 0;\n  margin-bottom: 24px;\n  transition: color 0.15s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-main);\n}\n.backIcon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--ui-text-main);\n  margin: 0 0 6px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr 32px;\n  gap: 16px;\n  align-items: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 14px;\n  padding: 18px 20px;\n  cursor: pointer;\n  transition:\n    transform 0.14s ease,\n    box-shadow 0.14s ease,\n    border-color 0.14s;\n  box-shadow: 0 1px 4px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--ui-border-secondary);\n  box-shadow: 0 6px 18px color-mix(in srgb, var(--brand-neutral-950) 8%, transparent);\n}\n.card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.card-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n  border-radius: 10px;\n  padding: 6px;\n  background: var(--ui-bg-subtle);\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.card-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.card-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  line-height: 1.45;\n  margin: 0;\n}\n.info-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--functional-info-500);\n  cursor: pointer;\n  white-space: nowrap;\n  padding: 0;\n  transition: color 0.15s;\n}\n.info[_ngcontent-%COMP%]:hover {\n  color: var(--functional-info-700);\n}\n.info-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 6px);\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n  line-height: 1.5;\n  box-shadow: 0 4px 16px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  z-index: 10;\n}\n.card-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chev[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--ui-text-muted);\n  line-height: 1;\n}\n@media (max-width: 600px) {\n  .page-wrap[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .card[_ngcontent-%COMP%] {\n    grid-template-columns: 44px 1fr 28px;\n    padding: 14px 16px;\n    gap: 12px;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=choose-contractype.css.map */"] });
var ChooseContractype = _ChooseContractype;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChooseContractype, [{
    type: Component,
    args: [{ selector: "app-choose-contractype", standalone: true, imports: [
      CommonModule,
      TranslocoModule
    ], template: `<div class="page-wrap">
  <div class="container">
    <div class="header">
      <button class="back-btn" (click)="onBack()" [attr.aria-label]="'common.back' | transloco">
       <span class="backIcon">\u2190</span>  Back
      </button>
    </div>

    <header class="header">
      <h1 class="title">Create Contract</h1>
      <p class="subtitle">What type of contract's you need to add ?</p>
    </header>

    <main class="cards">
      @for (c of contracts; track c.id) {
        <article
          class="card"
          (click)="onSelect(c)"
          role="button"
          tabindex="0"
          (keydown.enter)="onSelect(c)"
        >
          <div class="card-left">
            @if (c.icon) {
              <img [src]="c.icon" [alt]="c.title + ' icon'" class="card-icon" />
            }
          </div>

          <div class="card-body">
            <div class="card-title-row">
              <h3 class="card-title">{{ c.title }}</h3>
              <div class="info-wrapper">
                <button class="info" (click)="toggleInfo(c, $event)" [attr.aria-label]="'common.moreInfo' | transloco">\u25CF More info</button>
                @if (showInfoId === c.id) {
                  <div class="info-tooltip" role="tooltip">{{ c.description }}</div>
                }
              </div>
            </div>
            <p class="card-sub">{{ c.subtitle }}</p>
          </div>

          <div class="card-right">
            <span class="chev">\u203A</span>
          </div>
        </article>
      }
    </main>
  </div>
</div>
`, styles: ["/* src/components/DashboardLayout/Contract/contract-list/CreateFixedSalaryContract/choose-contractype/choose-contractype.css */\n:host {\n  display: block;\n}\n.page-wrap {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  padding: 36px 24px;\n  font-family: var(--font-family-primary);\n}\n.container {\n  width: 100%;\n  max-width: 760px;\n  margin: 0 auto;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  padding: 6px 0;\n  margin-bottom: 24px;\n  transition: color 0.15s;\n}\n.back-btn:hover {\n  color: var(--ui-text-main);\n}\n.backIcon {\n  font-size: 18px;\n  line-height: 1;\n}\n.header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.title {\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--ui-text-main);\n  margin: 0 0 6px;\n}\n.subtitle {\n  font-size: 15px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.cards {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card {\n  display: grid;\n  grid-template-columns: 56px 1fr 32px;\n  gap: 16px;\n  align-items: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 14px;\n  padding: 18px 20px;\n  cursor: pointer;\n  transition:\n    transform 0.14s ease,\n    box-shadow 0.14s ease,\n    border-color 0.14s;\n  box-shadow: 0 1px 4px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n}\n.card:hover {\n  transform: translateY(-2px);\n  border-color: var(--ui-border-secondary);\n  box-shadow: 0 6px 18px color-mix(in srgb, var(--brand-neutral-950) 8%, transparent);\n}\n.card:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.card-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n  border-radius: 10px;\n  padding: 6px;\n  background: var(--ui-bg-subtle);\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.card-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.card-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.card-sub {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  line-height: 1.45;\n  margin: 0;\n}\n.info-wrapper {\n  position: relative;\n}\n.info {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--functional-info-500);\n  cursor: pointer;\n  white-space: nowrap;\n  padding: 0;\n  transition: color 0.15s;\n}\n.info:hover {\n  color: var(--functional-info-700);\n}\n.info-tooltip {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 6px);\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n  line-height: 1.5;\n  box-shadow: 0 4px 16px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  z-index: 10;\n}\n.card-right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chev {\n  font-size: 20px;\n  color: var(--ui-text-muted);\n  line-height: 1;\n}\n@media (max-width: 600px) {\n  .page-wrap {\n    padding: 20px 16px;\n  }\n  .card {\n    grid-template-columns: 44px 1fr 28px;\n    padding: 14px 16px;\n    gap: 12px;\n  }\n  .card-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .title {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=choose-contractype.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChooseContractype, { className: "ChooseContractype", filePath: "src/components/dashboardlayout/contract/contract-list/createfixedsalarycontract/choose-contractype/choose-contractype.ts", lineNumber: 23 });
})();
export {
  ChooseContractype
};
//# sourceMappingURL=chunk-IKSEPV7S.js.map
