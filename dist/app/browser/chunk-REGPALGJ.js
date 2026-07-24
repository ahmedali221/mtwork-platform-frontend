import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-APK5HPN3.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Admin/permissions/permissions.ts
var _PermissionsComponent = class _PermissionsComponent {
};
_PermissionsComponent.\u0275fac = function PermissionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionsComponent)();
};
_PermissionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsComponent, selectors: [["app-permissions"]], decls: 10, vars: 0, consts: [[1, "admin-placeholder"], [1, "admin-placeholder__icon"], [1, "admin-placeholder__title"], [1, "admin-placeholder__subtitle"], [1, "admin-placeholder__badge"]], template: function PermissionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon");
    \u0275\u0275text(3, "security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 2);
    \u0275\u0275text(5, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 3);
    \u0275\u0275text(7, "Control role-based access, define permissions per feature.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "Coming Soon");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ["\n\n.admin-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 1rem;\n  text-align: center;\n  color: var(--ui-text-muted);\n}\n.admin-placeholder__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: var(--brand-primary-500);\n  opacity: 0.7;\n}\n.admin-placeholder__title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.admin-placeholder__subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  max-width: 400px;\n}\n.admin-placeholder__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 1rem;\n  border-radius: 9999px;\n  background: var(--brand-primary-100, #e0e7ff);\n  color: var(--brand-primary-700, #4338ca);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=permissions.css.map */"] });
var PermissionsComponent = _PermissionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsComponent, [{
    type: Component,
    args: [{ selector: "app-permissions", standalone: true, imports: [CommonModule, MatIconModule], template: `
    <div class="admin-placeholder">
      <div class="admin-placeholder__icon">
        <mat-icon>security</mat-icon>
      </div>
      <h1 class="admin-placeholder__title">Permissions</h1>
      <p class="admin-placeholder__subtitle">Control role-based access, define permissions per feature.</p>
      <span class="admin-placeholder__badge">Coming Soon</span>
    </div>
  `, styles: ["/* angular:styles/component:css;b2ebb8fa25312e04fa795c42a4764ca1ca44abe9ea7f56da5ddfb202d4551abd;D:/MTWork_Clean/MTWork_Clean/src/components/DashboardLayout/Admin/permissions/permissions.ts */\n.admin-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 1rem;\n  text-align: center;\n  color: var(--ui-text-muted);\n}\n.admin-placeholder__icon mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: var(--brand-primary-500);\n  opacity: 0.7;\n}\n.admin-placeholder__title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.admin-placeholder__subtitle {\n  font-size: 1rem;\n  max-width: 400px;\n}\n.admin-placeholder__badge {\n  display: inline-block;\n  padding: 0.25rem 1rem;\n  border-radius: 9999px;\n  background: var(--brand-primary-100, #e0e7ff);\n  color: var(--brand-primary-700, #4338ca);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=permissions.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsComponent, { className: "PermissionsComponent", filePath: "src/components/dashboardlayout/admin/permissions/permissions.ts", lineNumber: 58 });
})();
export {
  PermissionsComponent
};
//# sourceMappingURL=chunk-REGPALGJ.js.map
