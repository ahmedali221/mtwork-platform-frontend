import {
  CompanyService
} from "./chunk-OV3X5KZG.js";
import {
  FormsModule
} from "./chunk-RILOBYFO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Admin/company-management/company-management.ts
var _forTrack0 = ($index, $item) => $item.id;
function CompanyManagementComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.errorKey()));
  }
}
function CompanyManagementComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 13);
    \u0275\u0275text(2, "business_center");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 14);
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_Conditional_14_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const company_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", company_r3.logoPath, \u0275\u0275sanitizeUrl)("alt", company_r3.name ?? "");
  }
}
function CompanyManagementComponent_Conditional_14_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (company_r3.name ?? "?")[0].toUpperCase(), " ");
  }
}
function CompanyManagementComponent_Conditional_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21)(2, "div", 22);
    \u0275\u0275conditionalCreate(3, CompanyManagementComponent_Conditional_14_For_12_Conditional_3_Template, 1, 2, "img", 23)(4, CompanyManagementComponent_Conditional_14_For_12_Conditional_4_Template, 2, 1, "span", 24);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 25)(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 27)(16, "button", 28);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("click", function CompanyManagementComponent_Conditional_14_For_12_Template_button_click_16_listener() {
      const company_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmAction(company_r3.id, "suspend"));
    });
    \u0275\u0275elementStart(18, "mat-icon", 13);
    \u0275\u0275text(19, "pause_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 30);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275listener("click", function CompanyManagementComponent_Conditional_14_For_12_Template_button_click_21_listener() {
      const company_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmAction(company_r3.id, "delete"));
    });
    \u0275\u0275elementStart(23, "mat-icon", 13);
    \u0275\u0275text(24, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "span", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const company_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(company_r3.logoPath ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(company_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r3.email ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r3.phoneNumber ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("co-mgmt__badge--active", company_r3.isActive !== false)("co-mgmt__badge--suspended", company_r3.isActive === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, company_r3.isActive !== false ? "admin.companies.status.active" : "admin.companies.status.suspended"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 13, "admin.companies.actions.suspend"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 15, "admin.companies.actions.delete"));
  }
}
function CompanyManagementComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 15);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr");
    \u0275\u0275element(5, "th", 16)(6, "th", 17)(7, "th", 18)(8, "th", 19)(9, "th", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, CompanyManagementComponent_Conditional_14_For_12_Template, 26, 17, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "admin.companies.list"));
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r0.filteredCompanies());
  }
}
function CompanyManagementComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.actionErrorKey()), " ");
  }
}
function CompanyManagementComponent_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 39);
  }
}
function CompanyManagementComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.pendingAction().type === "suspend" ? "admin.companies.actions.suspend" : "admin.companies.actions.delete"), " ");
  }
}
function CompanyManagementComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 32)(2, "mat-icon", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CompanyManagementComponent_Conditional_15_Conditional_7_Template, 3, 3, "p", 35);
    \u0275\u0275elementStart(8, "div", 36)(9, "button", 37);
    \u0275\u0275listener("click", function CompanyManagementComponent_Conditional_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelAction());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function CompanyManagementComponent_Conditional_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.executeAction());
    });
    \u0275\u0275conditionalCreate(11, CompanyManagementComponent_Conditional_15_Conditional_11_Template, 1, 0, "span", 39)(12, CompanyManagementComponent_Conditional_15_Conditional_12_Template, 3, 3, "span");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("co-mgmt__confirm-icon--warn", ctx_r0.pendingAction().type === "suspend")("co-mgmt__confirm-icon--danger", ctx_r0.pendingAction().type === "delete");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pendingAction().type === "suspend" ? "pause_circle" : "delete_forever", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, ctx_r0.pendingAction().type === "suspend" ? "admin.companies.confirmSuspend" : "admin.companies.confirmDelete"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.actionErrorKey() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275classProp("co-mgmt__confirm-btn--warn", ctx_r0.pendingAction().type === "suspend")("co-mgmt__confirm-btn--danger", ctx_r0.pendingAction().type === "delete");
    \u0275\u0275property("disabled", ctx_r0.actionLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.actionLoading() ? 11 : 12);
  }
}
var _CompanyManagementComponent = class _CompanyManagementComponent {
  constructor() {
    this.companyService = inject(CompanyService);
    this.companies = signal([], ...ngDevMode ? [{ debugName: "companies" }] : []);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorKey = signal("", ...ngDevMode ? [{ debugName: "errorKey" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.pendingAction = signal(null, ...ngDevMode ? [{ debugName: "pendingAction" }] : []);
    this.actionLoading = signal(false, ...ngDevMode ? [{ debugName: "actionLoading" }] : []);
    this.actionErrorKey = signal("", ...ngDevMode ? [{ debugName: "actionErrorKey" }] : []);
    this.filteredCompanies = computed(() => {
      const q = this.searchQuery().toLowerCase().trim();
      if (!q)
        return this.companies();
      return this.companies().filter((c) => c.name?.toLowerCase().includes(q) || c.email?.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredCompanies" }] : []);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    this.errorKey.set("");
    this.companyService.getAll().subscribe({
      next: (list) => {
        this.companies.set(list ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set("admin.companies.errors.load");
        this.isLoading.set(false);
      }
    });
  }
  onSearch(value) {
    this.searchQuery.set(value);
  }
  confirmAction(id, type) {
    this.pendingAction.set({ id, type });
    this.actionErrorKey.set("");
  }
  cancelAction() {
    this.pendingAction.set(null);
    this.actionErrorKey.set("");
  }
  executeAction() {
    const action = this.pendingAction();
    if (!action)
      return;
    this.actionLoading.set(true);
    this.actionErrorKey.set("");
    const call$ = action.type === "suspend" ? this.companyService.suspend(action.id) : this.companyService.delete(action.id);
    call$.subscribe({
      next: () => {
        this.companies.update((list) => list.filter((c) => c.id !== action.id));
        this.pendingAction.set(null);
        this.actionLoading.set(false);
      },
      error: () => {
        const key = action.type === "suspend" ? "admin.companies.errors.suspend" : "admin.companies.errors.delete";
        this.actionErrorKey.set(key);
        this.actionLoading.set(false);
      }
    });
  }
};
_CompanyManagementComponent.\u0275fac = function CompanyManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CompanyManagementComponent)();
};
_CompanyManagementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementComponent, selectors: [["app-company-management"]], decls: 16, vars: 9, consts: [[1, "co-mgmt"], [1, "co-mgmt__header"], ["transloco", "admin.companies.title", 1, "co-mgmt__title"], ["transloco", "admin.companies.subtitle", 1, "co-mgmt__subtitle"], [1, "co-mgmt__search-wrap"], ["aria-hidden", "true", 1, "co-mgmt__search-icon"], ["type", "search", 1, "co-mgmt__search", 3, "input", "placeholder", "value"], ["aria-busy", "true", 1, "co-mgmt__state", "co-mgmt__state--loading"], ["role", "alert", 1, "co-mgmt__state", "co-mgmt__state--error"], [1, "co-mgmt__state", "co-mgmt__state--empty"], [1, "co-mgmt__table-wrap"], ["role", "dialog", "aria-modal", "true", 1, "co-mgmt__overlay"], ["aria-hidden", "true", 1, "co-mgmt__spinner"], ["aria-hidden", "true"], ["transloco", "admin.companies.empty"], [1, "co-mgmt__table"], ["transloco", "admin.companies.columns.name"], ["transloco", "admin.companies.columns.email"], ["transloco", "admin.companies.columns.phone"], ["transloco", "admin.companies.columns.status"], ["transloco", "admin.companies.columns.actions"], [1, "co-mgmt__cell", "co-mgmt__cell--name"], [1, "co-mgmt__company-name"], [1, "co-mgmt__logo", 3, "src", "alt"], ["aria-hidden", "true", 1, "co-mgmt__logo-placeholder"], [1, "co-mgmt__cell"], [1, "co-mgmt__badge"], [1, "co-mgmt__cell", "co-mgmt__cell--actions"], [1, "co-mgmt__btn", "co-mgmt__btn--suspend", 3, "click"], ["transloco", "admin.companies.actions.suspend"], [1, "co-mgmt__btn", "co-mgmt__btn--delete", 3, "click"], ["transloco", "admin.companies.actions.delete"], [1, "co-mgmt__confirm"], ["aria-hidden", "true", 1, "co-mgmt__confirm-icon"], [1, "co-mgmt__confirm-msg"], ["role", "alert", 1, "co-mgmt__confirm-error"], [1, "co-mgmt__confirm-actions"], ["transloco", "common.cancel", 1, "co-mgmt__confirm-btn", "co-mgmt__confirm-btn--cancel", 3, "click", "disabled"], [1, "co-mgmt__confirm-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "co-mgmt__spinner", "co-mgmt__spinner--sm"]], template: function CompanyManagementComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div");
    \u0275\u0275element(3, "h1", 2)(4, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "mat-icon", 5);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 6);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("input", function CompanyManagementComponent_Template_input_input_8_listener($event) {
      return ctx.onSearch($event.target.value);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, CompanyManagementComponent_Conditional_11_Template, 2, 0, "div", 7)(12, CompanyManagementComponent_Conditional_12_Template, 6, 3, "div", 8)(13, CompanyManagementComponent_Conditional_13_Template, 4, 0, "div", 9)(14, CompanyManagementComponent_Conditional_14_Template, 13, 3, "div", 10);
    \u0275\u0275conditionalCreate(15, CompanyManagementComponent_Conditional_15_Template, 13, 16, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "admin.companies.searchPlaceholder"))("value", ctx.searchQuery());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 7, "admin.companies.search"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.errorKey() ? 12 : ctx.filteredCompanies().length === 0 ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.pendingAction() ? 15 : -1);
  }
}, dependencies: [CommonModule, FormsModule, TranslocoModule, TranslocoDirective, MatIconModule, MatIcon, TranslocoPipe], styles: ["\n\n.co-mgmt[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  position: relative;\n}\n.co-mgmt__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.co-mgmt__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.co-mgmt__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.co-mgmt__search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.co-mgmt__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 0.75rem;\n  font-size: 1.125rem;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.co-mgmt__search[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem 0.5rem 2.5rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  width: 260px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.co-mgmt__search[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.co-mgmt__state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.co-mgmt__state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.co-mgmt__table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.co-mgmt__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.co-mgmt__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.co-mgmt__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child)   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ui-border);\n}\n.co-mgmt__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.co-mgmt__cell[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.co-mgmt__company-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.co-mgmt__logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.co-mgmt__logo-placeholder[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.co-mgmt__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.co-mgmt__badge--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.co-mgmt__badge--suspended[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.co-mgmt__cell--actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.co-mgmt__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.co-mgmt__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.co-mgmt__btn--suspend[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n  border-color: var(--functional-warning-200);\n}\n.co-mgmt__btn--suspend[_ngcontent-%COMP%]:hover {\n  background: var(--functional-warning-100);\n}\n.co-mgmt__btn--delete[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border-color: var(--functional-danger-200);\n}\n.co-mgmt__btn--delete[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n.co-mgmt__overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.co-mgmt__confirm[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-lg, 12px);\n  padding: 2rem;\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  box-shadow: var(--shadow-lg);\n}\n.co-mgmt__confirm-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.co-mgmt__confirm-icon--warn[_ngcontent-%COMP%] {\n  color: var(--functional-warning-600);\n}\n.co-mgmt__confirm-icon--danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.co-mgmt__confirm-msg[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--ui-text-primary);\n  margin: 0;\n  line-height: 1.5;\n}\n.co-mgmt__confirm-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--functional-danger-600);\n  margin: 0;\n}\n.co-mgmt__confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  width: 100%;\n}\n.co-mgmt__confirm-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: background 0.15s, opacity 0.15s;\n}\n.co-mgmt__confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.co-mgmt__confirm-btn--cancel[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-secondary);\n  border: 1px solid var(--ui-border);\n}\n.co-mgmt__confirm-btn--cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-border);\n}\n.co-mgmt__confirm-btn--warn[_ngcontent-%COMP%] {\n  background: var(--functional-warning-600);\n  color: var(--brand-neutral-0, #fff);\n}\n.co-mgmt__confirm-btn--warn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--functional-warning-700);\n}\n.co-mgmt__confirm-btn--danger[_ngcontent-%COMP%] {\n  background: var(--functional-danger-600);\n  color: var(--brand-neutral-0, #fff);\n}\n.co-mgmt__confirm-btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--functional-danger-700);\n}\n.co-mgmt__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_co-spin 0.7s linear infinite;\n}\n.co-mgmt__spinner--sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-color: rgba(255, 255, 255, 0.35);\n  border-top-color: var(--brand-neutral-0, #fff);\n}\n@keyframes _ngcontent-%COMP%_co-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .co-mgmt__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .co-mgmt__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .co-mgmt__cell--actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=company-management.css.map */"], changeDetection: 0 });
var CompanyManagementComponent = _CompanyManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyManagementComponent, [{
    type: Component,
    args: [{ selector: "app-company-management", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="co-mgmt">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="co-mgmt__header">
    <div>
      <h1 class="co-mgmt__title"    transloco="admin.companies.title"></h1>
      <p  class="co-mgmt__subtitle" transloco="admin.companies.subtitle"></p>
    </div>

    <div class="co-mgmt__search-wrap">
      <mat-icon class="co-mgmt__search-icon" aria-hidden="true">search</mat-icon>
      <input
        class="co-mgmt__search"
        type="search"
        [placeholder]="'admin.companies.searchPlaceholder' | transloco"
        [value]="searchQuery()"
        (input)="onSearch($any($event.target).value)"
        [attr.aria-label]="'admin.companies.search' | transloco"
      />
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="co-mgmt__state co-mgmt__state--loading" aria-busy="true">
      <span class="co-mgmt__spinner" aria-hidden="true"></span>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (errorKey()) {
    <div class="co-mgmt__state co-mgmt__state--error" role="alert">
      <mat-icon aria-hidden="true">error_outline</mat-icon>
      <span>{{ errorKey() | transloco }}</span>
    </div>
  }

  <!-- \u2500\u2500 Empty \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (filteredCompanies().length === 0) {
    <div class="co-mgmt__state co-mgmt__state--empty">
      <mat-icon aria-hidden="true">business_center</mat-icon>
      <span transloco="admin.companies.empty"></span>
    </div>
  }

  <!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else {
    <div class="co-mgmt__table-wrap">
      <table class="co-mgmt__table" [attr.aria-label]="'admin.companies.list' | transloco">
        <thead>
          <tr>
            <th transloco="admin.companies.columns.name"></th>
            <th transloco="admin.companies.columns.email"></th>
            <th transloco="admin.companies.columns.phone"></th>
            <th transloco="admin.companies.columns.status"></th>
            <th transloco="admin.companies.columns.actions"></th>
          </tr>
        </thead>
        <tbody>
          @for (company of filteredCompanies(); track company.id) {
            <tr>
              <td class="co-mgmt__cell co-mgmt__cell--name">
                <div class="co-mgmt__company-name">
                  @if (company.logoPath) {
                    <img class="co-mgmt__logo" [src]="company.logoPath" [alt]="company.name ?? ''" />
                  } @else {
                    <span class="co-mgmt__logo-placeholder" aria-hidden="true">
                      {{ (company.name ?? '?')[0].toUpperCase() }}
                    </span>
                  }
                  <span>{{ company.name }}</span>
                </div>
              </td>
              <td class="co-mgmt__cell">{{ company.email ?? '\u2014' }}</td>
              <td class="co-mgmt__cell">{{ company.phoneNumber ?? '\u2014' }}</td>
              <td class="co-mgmt__cell">
                <span
                  class="co-mgmt__badge"
                  [class.co-mgmt__badge--active]="company.isActive !== false"
                  [class.co-mgmt__badge--suspended]="company.isActive === false">
                  {{
                    (company.isActive !== false
                      ? 'admin.companies.status.active'
                      : 'admin.companies.status.suspended') | transloco
                  }}
                </span>
              </td>
              <td class="co-mgmt__cell co-mgmt__cell--actions">
                <button
                  class="co-mgmt__btn co-mgmt__btn--suspend"
                  (click)="confirmAction(company.id!, 'suspend')"
                  [attr.aria-label]="'admin.companies.actions.suspend' | transloco">
                  <mat-icon aria-hidden="true">pause_circle</mat-icon>
                  <span transloco="admin.companies.actions.suspend"></span>
                </button>
                <button
                  class="co-mgmt__btn co-mgmt__btn--delete"
                  (click)="confirmAction(company.id!, 'delete')"
                  [attr.aria-label]="'admin.companies.actions.delete' | transloco">
                  <mat-icon aria-hidden="true">delete_outline</mat-icon>
                  <span transloco="admin.companies.actions.delete"></span>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- \u2500\u2500 Confirmation dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (pendingAction()) {
    <div class="co-mgmt__overlay" role="dialog" aria-modal="true">
      <div class="co-mgmt__confirm">

        <mat-icon
          class="co-mgmt__confirm-icon"
          [class.co-mgmt__confirm-icon--warn]="pendingAction()!.type === 'suspend'"
          [class.co-mgmt__confirm-icon--danger]="pendingAction()!.type === 'delete'"
          aria-hidden="true">
          {{ pendingAction()!.type === 'suspend' ? 'pause_circle' : 'delete_forever' }}
        </mat-icon>

        <p class="co-mgmt__confirm-msg">
          {{
            (pendingAction()!.type === 'suspend'
              ? 'admin.companies.confirmSuspend'
              : 'admin.companies.confirmDelete') | transloco
          }}
        </p>

        @if (actionErrorKey()) {
          <p class="co-mgmt__confirm-error" role="alert">
            {{ actionErrorKey() | transloco }}
          </p>
        }

        <div class="co-mgmt__confirm-actions">
          <button
            class="co-mgmt__confirm-btn co-mgmt__confirm-btn--cancel"
            (click)="cancelAction()"
            [disabled]="actionLoading()"
            transloco="common.cancel">
          </button>
          <button
            class="co-mgmt__confirm-btn"
            [class.co-mgmt__confirm-btn--warn]="pendingAction()!.type === 'suspend'"
            [class.co-mgmt__confirm-btn--danger]="pendingAction()!.type === 'delete'"
            (click)="executeAction()"
            [disabled]="actionLoading()">
            @if (actionLoading()) {
              <span class="co-mgmt__spinner co-mgmt__spinner--sm" aria-hidden="true"></span>
            } @else {
              <span>
                {{
                  (pendingAction()!.type === 'suspend'
                    ? 'admin.companies.actions.suspend'
                    : 'admin.companies.actions.delete') | transloco
                }}
              </span>
            }
          </button>
        </div>

      </div>
    </div>
  }

</div>
`, styles: ["/* src/components/DashboardLayout/Admin/company-management/company-management.css */\n.co-mgmt {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  position: relative;\n}\n.co-mgmt__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.co-mgmt__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.co-mgmt__subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.co-mgmt__search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.co-mgmt__search-icon {\n  position: absolute;\n  inset-inline-start: 0.75rem;\n  font-size: 1.125rem;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.co-mgmt__search {\n  padding: 0.5rem 0.875rem 0.5rem 2.5rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  width: 260px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.co-mgmt__search:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.co-mgmt__state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.co-mgmt__state--error {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.co-mgmt__table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.co-mgmt__table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.co-mgmt__table thead th {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.co-mgmt__table tbody tr:not(:last-child) td {\n  border-bottom: 1px solid var(--ui-border);\n}\n.co-mgmt__table tbody tr:hover {\n  background: var(--ui-bg-subtle);\n}\n.co-mgmt__cell {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.co-mgmt__company-name {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.co-mgmt__logo {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.co-mgmt__logo-placeholder {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.co-mgmt__badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.co-mgmt__badge--active {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.co-mgmt__badge--suspended {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.co-mgmt__cell--actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.co-mgmt__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.co-mgmt__btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.co-mgmt__btn--suspend {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n  border-color: var(--functional-warning-200);\n}\n.co-mgmt__btn--suspend:hover {\n  background: var(--functional-warning-100);\n}\n.co-mgmt__btn--delete {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border-color: var(--functional-danger-200);\n}\n.co-mgmt__btn--delete:hover {\n  background: var(--functional-danger-100);\n}\n.co-mgmt__overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.co-mgmt__confirm {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-lg, 12px);\n  padding: 2rem;\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  box-shadow: var(--shadow-lg);\n}\n.co-mgmt__confirm-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.co-mgmt__confirm-icon--warn {\n  color: var(--functional-warning-600);\n}\n.co-mgmt__confirm-icon--danger {\n  color: var(--functional-danger-600);\n}\n.co-mgmt__confirm-msg {\n  font-size: 0.9375rem;\n  color: var(--ui-text-primary);\n  margin: 0;\n  line-height: 1.5;\n}\n.co-mgmt__confirm-error {\n  font-size: 0.875rem;\n  color: var(--functional-danger-600);\n  margin: 0;\n}\n.co-mgmt__confirm-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  width: 100%;\n}\n.co-mgmt__confirm-btn {\n  flex: 1;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: background 0.15s, opacity 0.15s;\n}\n.co-mgmt__confirm-btn:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.co-mgmt__confirm-btn--cancel {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-secondary);\n  border: 1px solid var(--ui-border);\n}\n.co-mgmt__confirm-btn--cancel:hover:not(:disabled) {\n  background: var(--ui-border);\n}\n.co-mgmt__confirm-btn--warn {\n  background: var(--functional-warning-600);\n  color: var(--brand-neutral-0, #fff);\n}\n.co-mgmt__confirm-btn--warn:hover:not(:disabled) {\n  background: var(--functional-warning-700);\n}\n.co-mgmt__confirm-btn--danger {\n  background: var(--functional-danger-600);\n  color: var(--brand-neutral-0, #fff);\n}\n.co-mgmt__confirm-btn--danger:hover:not(:disabled) {\n  background: var(--functional-danger-700);\n}\n.co-mgmt__spinner {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: co-spin 0.7s linear infinite;\n}\n.co-mgmt__spinner--sm {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-color: rgba(255, 255, 255, 0.35);\n  border-top-color: var(--brand-neutral-0, #fff);\n}\n@keyframes co-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .co-mgmt__header {\n    flex-direction: column;\n  }\n  .co-mgmt__search {\n    width: 100%;\n  }\n  .co-mgmt__cell--actions {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=company-management.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementComponent, { className: "CompanyManagementComponent", filePath: "src/components/dashboardlayout/admin/company-management/company-management.ts", lineNumber: 19 });
})();
export {
  CompanyManagementComponent
};
//# sourceMappingURL=chunk-LBOIT62M.js.map
