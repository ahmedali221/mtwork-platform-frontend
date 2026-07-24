import {
  CompanyService
} from "./chunk-OV3X5KZG.js";
import {
  UserService
} from "./chunk-TUIWGNTU.js";
import {
  ContractService
} from "./chunk-LWI6AAJD.js";
import {
  WithdrawService
} from "./chunk-VXEZP5JU.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  forkJoin,
  inject,
  of,
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

// src/features/dashboard/admin-dashboard/admin-dashboard.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.route;
function AdminDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.loading"));
  }
}
function AdminDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "admin.dashboard.errors.load"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "common.retry"), " ");
  }
}
function AdminDashboardComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27)(2, "mat-icon", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const kpi_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, kpi_r3.label));
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "admin.dashboard.recentCompanies.empty"));
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const company_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", company_r4.logoPath, \u0275\u0275sanitizeUrl)("alt", company_r4.name || "");
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.companyInitials(company_r4.name));
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32)(1, "div", 33);
    \u0275\u0275conditionalCreate(2, AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Conditional_2_Template, 1, 2, "img", 34)(3, AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Conditional_3_Template, 2, 1, "span", 35);
    \u0275\u0275elementStart(4, "div", 36)(5, "p", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(company_r4.logoPath ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(company_r4.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r4.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("admin-badge--active", company_r4.isActive !== false)("admin-badge--suspended", company_r4.isActive === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, company_r4.isActive === false ? "admin.dashboard.recentCompanies.suspended" : "admin.dashboard.recentCompanies.active"), " ");
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, AdminDashboardComponent_Conditional_12_Conditional_20_For_3_Template, 12, 10, "li", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "admin.dashboard.recentCompanies.title"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.recentCompanies());
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "admin.dashboard.pendingWithdrawals.empty"));
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_32_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32)(1, "div", 33)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "p", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.companyInitials(entry_r5.employeeName || entry_r5.fullName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r5.employeeName || entry_r5.fullName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "admin.dashboard.pendingWithdrawals.pending"), " ");
  }
}
function AdminDashboardComponent_Conditional_12_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, AdminDashboardComponent_Conditional_12_Conditional_32_For_3_Template, 12, 6, "li", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "admin.dashboard.pendingWithdrawals.title"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pendingWithdrawalsPreview());
  }
}
function AdminDashboardComponent_Conditional_12_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", action_r6.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, action_r6.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(action_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, action_r6.label));
  }
}
function AdminDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, AdminDashboardComponent_Conditional_12_For_3_Template, 10, 5, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "section", 12)(6, "div", 13)(7, "div", 14)(8, "mat-icon", 15);
    \u0275\u0275text(9, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 17);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "mat-icon", 7);
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, AdminDashboardComponent_Conditional_12_Conditional_19_Template, 3, 3, "p", 18)(20, AdminDashboardComponent_Conditional_12_Conditional_20_Template, 4, 3, "ul", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "section", 20)(22, "div", 13)(23, "div", 14)(24, "mat-icon", 15);
    \u0275\u0275text(25, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h2", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 22);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, AdminDashboardComponent_Conditional_12_Conditional_31_Template, 3, 3, "p", 18)(32, AdminDashboardComponent_Conditional_12_Conditional_32_Template, 4, 3, "ul", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "section", 23)(34, "div", 13)(35, "div", 14)(36, "mat-icon", 15);
    \u0275\u0275text(37, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h2", 24);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 25);
    \u0275\u0275repeaterCreate(42, AdminDashboardComponent_Conditional_12_For_43_Template, 7, 8, "a", 26, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 9, "admin.dashboard.kpiList"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.kpis());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "admin.dashboard.recentCompanies.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 13, "admin.dashboard.recentCompanies.viewAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "admin.dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.recentCompanies().length === 0 ? 19 : 20);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "admin.dashboard.pendingWithdrawals.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pendingWithdrawals().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingWithdrawals().length === 0 ? 31 : 32);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 19, "admin.dashboard.quickActions.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.quickActions);
  }
}
var _AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.companyService = inject(CompanyService);
    this.userService = inject(UserService);
    this.withdrawService = inject(WithdrawService);
    this.contractService = inject(ContractService);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.loadError = signal(false, ...ngDevMode ? [{ debugName: "loadError" }] : []);
    this.kpis = signal([
      { id: "companies", icon: "domain", label: "admin.dashboard.kpi.totalCompanies", value: null },
      { id: "users", icon: "people", label: "admin.dashboard.kpi.totalUsers", value: null },
      { id: "pendingWithdrawals", icon: "account_balance_wallet", label: "admin.dashboard.kpi.pendingWithdrawals", value: null },
      { id: "contracts", icon: "description", label: "admin.dashboard.kpi.totalContracts", value: null }
    ], ...ngDevMode ? [{ debugName: "kpis" }] : []);
    this.recentCompanies = signal([], ...ngDevMode ? [{ debugName: "recentCompanies" }] : []);
    this.pendingWithdrawals = signal([], ...ngDevMode ? [{ debugName: "pendingWithdrawals" }] : []);
    this.pendingWithdrawalsPreview = computed(() => this.pendingWithdrawals().slice(0, 5), ...ngDevMode ? [{ debugName: "pendingWithdrawalsPreview" }] : []);
    this.quickActions = [
      { icon: "people", label: "admin.dashboard.quickActions.users", route: "/dashboard/users" },
      { icon: "domain", label: "admin.dashboard.quickActions.companies", route: "/dashboard/companies" },
      { icon: "settings", label: "admin.dashboard.quickActions.settings", route: "/dashboard/settings" },
      { icon: "security", label: "admin.dashboard.quickActions.permissions", route: "/dashboard/permissions" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    this.loadError.set(false);
    forkJoin({
      companies: this.companyService.getAll().pipe(catchError(() => of([]))),
      users: this.userService.getAll().pipe(catchError(() => of([]))),
      withdrawals: this.withdrawService.getAdminRequests().pipe(catchError(() => of([]))),
      contracts: this.contractService.getContracts(1, 1).pipe(catchError(() => of({ data: [], pagination: { totalItems: 0 } })))
    }).subscribe({
      next: ({ companies, users, withdrawals, contracts }) => {
        const companyList = companies ?? [];
        const userList = users ?? [];
        const pending = (withdrawals ?? []).filter((w) => w.status === "pending");
        this.kpis.update((list) => list.map((k) => {
          switch (k.id) {
            case "companies":
              return __spreadProps(__spreadValues({}, k), { value: companyList.length });
            case "users":
              return __spreadProps(__spreadValues({}, k), { value: userList.length });
            case "pendingWithdrawals":
              return __spreadProps(__spreadValues({}, k), { value: pending.length });
            case "contracts":
              return __spreadProps(__spreadValues({}, k), { value: contracts?.pagination?.totalItems ?? 0 });
            default:
              return k;
          }
        }));
        this.recentCompanies.set([...companyList].sort((a, b) => (b.id ?? 0) - (a.id ?? 0)).slice(0, 5));
        this.pendingWithdrawals.set(pending);
        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set(true);
        this.isLoading.set(false);
      }
    });
  }
  /** Retry handler for the page-level error state. */
  retry() {
    this.load();
  }
  /** Initials fallback for a company logo cell. */
  companyInitials(name) {
    if (!name)
      return "\u2013";
    return name.trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  }
};
_AdminDashboardComponent.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminDashboardComponent)();
};
_AdminDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 13, vars: 10, consts: [[1, "admin-dash"], [1, "admin-dash__header"], [1, "admin-dash__title"], [1, "admin-dash__subtitle"], ["role", "status", "aria-live", "polite", 1, "admin-dash__state"], ["role", "alert", 1, "admin-dash__state", "admin-dash__state--error"], ["aria-hidden", "true", 1, "admin-dash__spinner"], ["aria-hidden", "true"], [1, "admin-dash__retry", 3, "click"], ["role", "list", 1, "admin-dash__kpi-row"], ["role", "listitem", 1, "admin-kpi-card"], [1, "admin-dash__grid"], ["aria-labelledby", "admin-recent-companies-heading", 1, "admin-card"], [1, "admin-card__header"], [1, "admin-card__title-group"], ["aria-hidden", "true", 1, "admin-card__icon"], ["id", "admin-recent-companies-heading", 1, "admin-card__title"], ["routerLink", "/dashboard/companies", 1, "admin-card__link"], [1, "admin-card__empty"], [1, "admin-list"], ["aria-labelledby", "admin-pending-withdrawals-heading", 1, "admin-card"], ["id", "admin-pending-withdrawals-heading", 1, "admin-card__title"], ["aria-hidden", "true", 1, "admin-card__count"], ["aria-labelledby", "admin-quick-actions-heading", 1, "admin-card"], ["id", "admin-quick-actions-heading", 1, "admin-card__title"], [1, "admin-actions"], [1, "admin-action", 3, "routerLink"], ["aria-hidden", "true", 1, "admin-kpi-card__icon-wrap"], [1, "admin-kpi-card__icon"], [1, "admin-kpi-card__body"], [1, "admin-kpi-card__value"], [1, "admin-kpi-card__label"], [1, "admin-list__item"], [1, "admin-list__lead"], [1, "admin-list__logo", 3, "src", "alt"], ["aria-hidden", "true", 1, "admin-list__logo-placeholder"], [1, "admin-list__text"], [1, "admin-list__primary"], [1, "admin-list__secondary"], [1, "admin-badge"], [1, "admin-badge", "admin-badge--pending"], ["aria-hidden", "true", 1, "admin-action__icon"], [1, "admin-action__label"]], template: function AdminDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "header", 1)(3, "div")(4, "h1", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, AdminDashboardComponent_Conditional_10_Template, 5, 3, "div", 4)(11, AdminDashboardComponent_Conditional_11_Template, 10, 9, "div", 5)(12, AdminDashboardComponent_Conditional_12_Template, 44, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, "admin.dashboard.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "admin.dashboard.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "admin.dashboard.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 10 : ctx.loadError() ? 11 : 12);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.admin-dash[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-dash__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.admin-dash__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.admin-dash__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.admin-dash__state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.admin-dash__state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.admin-dash__retry[_ngcontent-%COMP%] {\n  margin-inline-start: 0.5rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.admin-dash__retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n.admin-dash__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-dash__kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.admin-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n}\n.admin-kpi-card__icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-50);\n  flex-shrink: 0;\n}\n.admin-kpi-card__icon[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n}\n.admin-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0;\n  line-height: 1.2;\n}\n.admin-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--ui-text-muted);\n  margin: 0.25rem 0 0;\n}\n.admin-dash__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.admin-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.admin-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.admin-card__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.admin-card__icon[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n}\n.admin-card__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-card__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.125rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.admin-card__link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n.admin-card__link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-primary-700);\n}\n.admin-card__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.75rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.admin-card__empty[_ngcontent-%COMP%] {\n  padding: 1.5rem 0.5rem;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.admin-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.admin-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n}\n.admin-list__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--ui-border);\n}\n.admin-list__lead[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n}\n.admin-list__logo[_ngcontent-%COMP%], \n.admin-list__logo-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm, 6px);\n  flex-shrink: 0;\n}\n.admin-list__logo[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.admin-list__logo-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.admin-list__text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.admin-list__primary[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-list__secondary[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0.125rem 0 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.admin-badge--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.admin-badge--suspended[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-badge--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.admin-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1.25rem 0.75rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-primary);\n  text-decoration: none;\n  text-align: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.admin-action[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-50);\n  border-color: var(--brand-primary-200);\n}\n.admin-action__icon[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.admin-action__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .admin-dash__kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .admin-dash__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .admin-dash__kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.css.map */"], changeDetection: 0 });
var AdminDashboardComponent = _AdminDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="admin-dash" [attr.aria-label]="'admin.dashboard.title' | transloco">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="admin-dash__header">
    <div>
      <h1 class="admin-dash__title">{{ 'admin.dashboard.title' | transloco }}</h1>
      <p class="admin-dash__subtitle">{{ 'admin.dashboard.subtitle' | transloco }}</p>
    </div>
  </header>

  @if (isLoading()) {
    <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="admin-dash__state" role="status" aria-live="polite">
      <span class="admin-dash__spinner" aria-hidden="true"></span>
      <span>{{ 'common.loading' | transloco }}</span>
    </div>
  } @else if (loadError()) {
    <!-- \u2500\u2500 Page-level error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="admin-dash__state admin-dash__state--error" role="alert">
      <mat-icon aria-hidden="true">error_outline</mat-icon>
      <span>{{ 'admin.dashboard.errors.load' | transloco }}</span>
      <button class="admin-dash__retry" (click)="retry()" [attr.aria-label]="'common.retry' | transloco">
        {{ 'common.retry' | transloco }}
      </button>
    </div>
  } @else {

    <!-- \u2500\u2500 KPI ROW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
         Every value comes from a live endpoint. -->
    <div class="admin-dash__kpi-row" role="list" [attr.aria-label]="'admin.dashboard.kpiList' | transloco">
      @for (kpi of kpis(); track kpi.id) {
        <div class="admin-kpi-card" role="listitem">
          <div class="admin-kpi-card__icon-wrap" aria-hidden="true">
            <mat-icon class="admin-kpi-card__icon">{{ kpi.icon }}</mat-icon>
          </div>
          <div class="admin-kpi-card__body">
            <p class="admin-kpi-card__value">{{ kpi.value }}</p>
            <p class="admin-kpi-card__label">{{ kpi.label | transloco }}</p>
          </div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 CONTENT GRID \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="admin-dash__grid">

      <!-- \u2500\u2500 Recent Companies \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <section class="admin-card" aria-labelledby="admin-recent-companies-heading">
        <div class="admin-card__header">
          <div class="admin-card__title-group">
            <mat-icon class="admin-card__icon" aria-hidden="true">domain</mat-icon>
            <h2 class="admin-card__title" id="admin-recent-companies-heading">
              {{ 'admin.dashboard.recentCompanies.title' | transloco }}
            </h2>
          </div>
          <a routerLink="/dashboard/companies" class="admin-card__link"
             [attr.aria-label]="'admin.dashboard.recentCompanies.viewAll' | transloco">
            {{ 'admin.dashboard.viewAll' | transloco }}
            <mat-icon aria-hidden="true">chevron_right</mat-icon>
          </a>
        </div>

        @if (recentCompanies().length === 0) {
          <p class="admin-card__empty">{{ 'admin.dashboard.recentCompanies.empty' | transloco }}</p>
        } @else {
          <ul class="admin-list" [attr.aria-label]="'admin.dashboard.recentCompanies.title' | transloco">
            @for (company of recentCompanies(); track company.id) {
              <li class="admin-list__item">
                <div class="admin-list__lead">
                  @if (company.logoPath) {
                    <img class="admin-list__logo" [src]="company.logoPath" [alt]="company.name || ''" />
                  } @else {
                    <span class="admin-list__logo-placeholder" aria-hidden="true">{{ companyInitials(company.name) }}</span>
                  }
                  <div class="admin-list__text">
                    <p class="admin-list__primary">{{ company.name || '\u2014' }}</p>
                    <p class="admin-list__secondary">{{ company.email || '\u2014' }}</p>
                  </div>
                </div>
                <span class="admin-badge"
                      [class.admin-badge--active]="company.isActive !== false"
                      [class.admin-badge--suspended]="company.isActive === false">
                  {{ (company.isActive === false
                      ? 'admin.dashboard.recentCompanies.suspended'
                      : 'admin.dashboard.recentCompanies.active') | transloco }}
                </span>
              </li>
            }
          </ul>
        }
      </section>

      <!-- \u2500\u2500 Pending Withdrawals Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <section class="admin-card" aria-labelledby="admin-pending-withdrawals-heading">
        <div class="admin-card__header">
          <div class="admin-card__title-group">
            <mat-icon class="admin-card__icon" aria-hidden="true">account_balance_wallet</mat-icon>
            <h2 class="admin-card__title" id="admin-pending-withdrawals-heading">
              {{ 'admin.dashboard.pendingWithdrawals.title' | transloco }}
            </h2>
          </div>
          <span class="admin-card__count" aria-hidden="true">{{ pendingWithdrawals().length }}</span>
        </div>

        @if (pendingWithdrawals().length === 0) {
          <p class="admin-card__empty">{{ 'admin.dashboard.pendingWithdrawals.empty' | transloco }}</p>
        } @else {
          <ul class="admin-list" [attr.aria-label]="'admin.dashboard.pendingWithdrawals.title' | transloco">
            @for (entry of pendingWithdrawalsPreview(); track entry.id) {
              <li class="admin-list__item">
                <div class="admin-list__lead">
                  <span class="admin-list__logo-placeholder" aria-hidden="true">
                    {{ companyInitials(entry.employeeName || entry.fullName) }}
                  </span>
                  <div class="admin-list__text">
                    <p class="admin-list__primary">{{ entry.employeeName || entry.fullName || '\u2014' }}</p>
                    <p class="admin-list__secondary">{{ entry.amount }}</p>
                  </div>
                </div>
                <span class="admin-badge admin-badge--pending">
                  {{ 'admin.dashboard.pendingWithdrawals.pending' | transloco }}
                </span>
              </li>
            }
          </ul>
        }
      </section>

    </div>

    <!-- \u2500\u2500 Quick Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="admin-card" aria-labelledby="admin-quick-actions-heading">
      <div class="admin-card__header">
        <div class="admin-card__title-group">
          <mat-icon class="admin-card__icon" aria-hidden="true">bolt</mat-icon>
          <h2 class="admin-card__title" id="admin-quick-actions-heading">
            {{ 'admin.dashboard.quickActions.title' | transloco }}
          </h2>
        </div>
      </div>
      <div class="admin-actions">
        @for (action of quickActions; track action.route) {
          <a class="admin-action" [routerLink]="action.route" [attr.aria-label]="action.label | transloco">
            <mat-icon class="admin-action__icon" aria-hidden="true">{{ action.icon }}</mat-icon>
            <span class="admin-action__label">{{ action.label | transloco }}</span>
          </a>
        }
      </div>
    </section>

  }

</div>
`, styles: ["/* src/features/dashboard/admin-dashboard/admin-dashboard.css */\n.admin-dash {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-dash__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.admin-dash__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.admin-dash__subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.admin-dash__state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.admin-dash__state--error {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.admin-dash__retry {\n  margin-inline-start: 0.5rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.admin-dash__retry:hover {\n  background: var(--functional-danger-100);\n}\n.admin-dash__spinner {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: admin-spin 0.7s linear infinite;\n}\n@keyframes admin-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.admin-dash__kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.admin-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n}\n.admin-kpi-card__icon-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-50);\n  flex-shrink: 0;\n}\n.admin-kpi-card__icon {\n  color: var(--brand-primary-600);\n}\n.admin-kpi-card__value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0;\n  line-height: 1.2;\n}\n.admin-kpi-card__label {\n  font-size: 0.8125rem;\n  color: var(--ui-text-muted);\n  margin: 0.25rem 0 0;\n}\n.admin-dash__grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.admin-card {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.admin-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.admin-card__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.admin-card__icon {\n  color: var(--brand-primary-600);\n}\n.admin-card__title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-card__link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.125rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.admin-card__link mat-icon {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n.admin-card__link:hover {\n  color: var(--brand-primary-700);\n}\n.admin-card__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.75rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  border-radius: 999px;\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.admin-card__empty {\n  padding: 1.5rem 0.5rem;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.admin-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.admin-list__item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n}\n.admin-list__item:not(:last-child) {\n  border-bottom: 1px solid var(--ui-border);\n}\n.admin-list__lead {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n}\n.admin-list__logo,\n.admin-list__logo-placeholder {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm, 6px);\n  flex-shrink: 0;\n}\n.admin-list__logo {\n  object-fit: cover;\n}\n.admin-list__logo-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.admin-list__text {\n  min-width: 0;\n}\n.admin-list__primary {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-list__secondary {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0.125rem 0 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.admin-badge--active {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.admin-badge--suspended {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-badge--pending {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-actions {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.admin-action {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1.25rem 0.75rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-primary);\n  text-decoration: none;\n  text-align: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.admin-action:hover {\n  background: var(--brand-primary-50);\n  border-color: var(--brand-primary-200);\n}\n.admin-action__icon {\n  color: var(--brand-primary-600);\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.admin-action__label {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .admin-dash__kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .admin-dash__grid {\n    grid-template-columns: 1fr;\n  }\n  .admin-actions {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .admin-dash__kpi-row {\n    grid-template-columns: 1fr;\n  }\n  .admin-actions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/features/dashboard/admin-dashboard/admin-dashboard.ts", lineNumber: 40 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-EDQPPBJ5.js.map
