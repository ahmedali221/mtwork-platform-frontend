import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-APK5HPN3.js";
import {
  ApiService
} from "./chunk-RDBMT5X2.js";
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
  Injectable,
  catchError,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MQLQGMUZ.js";

// src/services/settings.service.ts
var _SettingsService = class _SettingsService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /** GET /api/Settings/GetFirstRegistrationFee */
  getFirstRegistrationFee() {
    return this.apiService.get("Settings/GetFirstRegistrationFee").pipe(catchError((err) => throwError(() => err)));
  }
  /** GET /api/Settings/GetContractFees */
  getContractFees() {
    return this.apiService.get("Settings/GetContractFees").pipe(catchError((err) => throwError(() => err)));
  }
  /** GET /api/Settings/GetOrdinaryEmployeePercentage */
  getOrdinaryEmployeePercentage() {
    return this.apiService.get("Settings/GetOrdinaryEmployeePercentage").pipe(catchError((err) => throwError(() => err)));
  }
};
_SettingsService.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsService)();
};
_SettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/components/DashboardLayout/Admin/settings/settings.ts
var _forTrack0 = ($index, $item) => $item.labelKey;
function AdminSettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon", 8);
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
function AdminSettingsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "mat-icon", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.iconName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, card_r2.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.value);
  }
}
function AdminSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AdminSettingsComponent_Conditional_6_For_2_Template, 10, 5, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cards());
  }
}
var _AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.settingsService = inject(SettingsService);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorKey = signal("", ...ngDevMode ? [{ debugName: "errorKey" }] : []);
    this.cards = signal([], ...ngDevMode ? [{ debugName: "cards" }] : []);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    this.errorKey.set("");
    forkJoin({
      regFee: this.settingsService.getFirstRegistrationFee(),
      contractFee: this.settingsService.getContractFees(),
      empPct: this.settingsService.getOrdinaryEmployeePercentage()
    }).subscribe({
      next: ({ regFee, contractFee, empPct }) => {
        this.cards.set([
          {
            labelKey: "admin.settings.registrationFee",
            iconName: "how_to_reg",
            value: this.formatAmount(regFee?.fee ?? regFee?.amount)
          },
          {
            labelKey: "admin.settings.contractFees",
            iconName: "description",
            value: this.formatFees(contractFee)
          },
          {
            labelKey: "admin.settings.employeePercentage",
            iconName: "percent",
            value: empPct?.percentage != null ? `${empPct.percentage}%` : "\u2014"
          }
        ]);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set("admin.settings.errors.load");
        this.isLoading.set(false);
      }
    });
  }
  formatAmount(val) {
    if (val == null)
      return "\u2014";
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);
  }
  formatFees(dto) {
    const parts = [];
    if (dto?.feePercentage != null)
      parts.push(`${dto.feePercentage}%`);
    if (dto?.fixedFee != null)
      parts.push(this.formatAmount(dto.fixedFee));
    return parts.length ? parts.join(" + ") : "\u2014";
  }
};
_AdminSettingsComponent.\u0275fac = function AdminSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminSettingsComponent)();
};
_AdminSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], decls: 7, vars: 1, consts: [[1, "adm-settings"], [1, "adm-settings__header"], ["transloco", "admin.settings.title", 1, "adm-settings__title"], ["transloco", "admin.settings.subtitle", 1, "adm-settings__subtitle"], ["aria-busy", "true", 1, "adm-settings__state", "adm-settings__state--loading"], ["role", "alert", 1, "adm-settings__state", "adm-settings__state--error"], [1, "adm-settings__grid"], ["aria-hidden", "true", 1, "adm-settings__spinner"], ["aria-hidden", "true"], [1, "adm-settings__card"], [1, "adm-settings__card-icon"], [1, "adm-settings__card-body"], [1, "adm-settings__card-label"], [1, "adm-settings__card-value"]], template: function AdminSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "h1", 2)(3, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AdminSettingsComponent_Conditional_4_Template, 2, 0, "div", 4)(5, AdminSettingsComponent_Conditional_5_Template, 6, 3, "div", 5)(6, AdminSettingsComponent_Conditional_6_Template, 3, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.isLoading() ? 4 : ctx.errorKey() ? 5 : 6);
  }
}, dependencies: [CommonModule, TranslocoModule, TranslocoDirective, MatIconModule, MatIcon, TranslocoPipe], styles: ["\n\n.adm-settings[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.adm-settings__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.adm-settings__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.adm-settings__state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.adm-settings__state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.adm-settings__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.adm-settings__card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  transition: box-shadow 0.15s;\n}\n.adm-settings__card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n}\n.adm-settings__card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.adm-settings__card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n.adm-settings__card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.adm-settings__card-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.adm-settings__card-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.adm-settings__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_adm-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_adm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=settings.css.map */"], changeDetection: 0 });
var AdminSettingsComponent = _AdminSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-settings", standalone: true, imports: [CommonModule, TranslocoModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="adm-settings">\n\n  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class="adm-settings__header">\n    <h1 class="adm-settings__title"    transloco="admin.settings.title"></h1>\n    <p  class="adm-settings__subtitle" transloco="admin.settings.subtitle"></p>\n  </div>\n\n  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  @if (isLoading()) {\n    <div class="adm-settings__state adm-settings__state--loading" aria-busy="true">\n      <span class="adm-settings__spinner" aria-hidden="true"></span>\n    </div>\n  }\n\n  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  @else if (errorKey()) {\n    <div class="adm-settings__state adm-settings__state--error" role="alert">\n      <mat-icon aria-hidden="true">error_outline</mat-icon>\n      <span>{{ errorKey() | transloco }}</span>\n    </div>\n  }\n\n  <!-- \u2500\u2500 Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  @else {\n    <div class="adm-settings__grid">\n      @for (card of cards(); track card.labelKey) {\n        <div class="adm-settings__card">\n          <div class="adm-settings__card-icon">\n            <mat-icon aria-hidden="true">{{ card.iconName }}</mat-icon>\n          </div>\n          <div class="adm-settings__card-body">\n            <span class="adm-settings__card-label">{{ card.labelKey | transloco }}</span>\n            <span class="adm-settings__card-value">{{ card.value }}</span>\n          </div>\n        </div>\n      }\n    </div>\n  }\n\n</div>\n', styles: ["/* src/components/DashboardLayout/Admin/settings/settings.css */\n.adm-settings {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.adm-settings__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.adm-settings__subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.adm-settings__state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.adm-settings__state--error {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.adm-settings__grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.adm-settings__card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-lg, 12px);\n  transition: box-shadow 0.15s;\n}\n.adm-settings__card:hover {\n  box-shadow: var(--shadow-sm);\n}\n.adm-settings__card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md, 8px);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.adm-settings__card-icon mat-icon {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n.adm-settings__card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.adm-settings__card-label {\n  font-size: 0.8125rem;\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.adm-settings__card-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.adm-settings__spinner {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: adm-spin 0.7s linear infinite;\n}\n@keyframes adm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=settings.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/components/dashboardlayout/admin/settings/settings.ts", lineNumber: 30 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=chunk-65UDSUFE.js.map
