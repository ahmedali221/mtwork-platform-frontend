import {
  UserTypeId
} from "./chunk-5WHRH4NB.js";
import {
  UserService
} from "./chunk-TUIWGNTU.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RILOBYFO.js";
import {
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Employees/employee-detail-dialog/employee-detail-dialog.ts
function EmployeeDetailDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function EmployeeDetailDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "employees.errors.loadDetail"));
  }
}
function EmployeeDetailDialogComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "employees.columns.dateOfBirth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, ctx_r0.detail().dateOfBirth, "mediumDate"));
  }
}
var _EmployeeDetailDialogComponent = class _EmployeeDetailDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.userService = inject(UserService);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.error = signal(false, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.detail = signal(null, ...ngDevMode ? [{ debugName: "detail" }] : []);
  }
  ngOnInit() {
    this.userService.getEmployeeById(this.data.employeeId).subscribe({
      next: (res) => {
        this.detail.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
  fullName() {
    const d = this.detail() ?? this.data.fallback;
    return [d.firstName, d.lastName].filter(Boolean).join(" ") || d.favoriteName || d.email;
  }
  getInitials() {
    const name = this.fullName();
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0]?.substring(0, 2).toUpperCase() ?? "?";
  }
  location() {
    const d = this.detail() ?? this.data.fallback;
    return [d.userAddress?.cityName, d.userAddress?.countryName].filter(Boolean).join(", ");
  }
  close() {
    this.dialogRef.close();
  }
};
_EmployeeDetailDialogComponent.\u0275fac = function EmployeeDetailDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeeDetailDialogComponent)();
};
_EmployeeDetailDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeDetailDialogComponent, selectors: [["app-employee-detail-dialog"]], decls: 62, vars: 39, consts: [[1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "aria-hidden", "true"], ["d", "M2 2l14 14M16 2L2 16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], [1, "dialog-body"], ["role", "status", "aria-live", "polite", 1, "loading-spinner"], ["role", "alert", 1, "error-note"], [1, "profile-head"], [1, "avatar-badge-lg"], [1, "profile-name"], [1, "profile-sub"], [1, "profile-grid"], [1, "dialog-footer"], ["type", "button", 1, "btn-secondary", 3, "click"]], template: function EmployeeDetailDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 3);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275domListener("click", function EmployeeDetailDialogComponent_Template_button_click_5_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(7, "svg", 4);
    \u0275\u0275domElement(8, "path", 5);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(9, "div", 6);
    \u0275\u0275conditionalCreate(10, EmployeeDetailDialogComponent_Conditional_10_Template, 4, 3, "div", 7);
    \u0275\u0275conditionalCreate(11, EmployeeDetailDialogComponent_Conditional_11_Template, 4, 3, "div", 8);
    \u0275\u0275domElementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div")(16, "div", 11);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "div", 12);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(20, "dl", 13)(21, "div")(22, "dt");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div")(28, "dt");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "dd");
    \u0275\u0275text(32);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div")(34, "dt");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "div")(40, "dt");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "dd");
    \u0275\u0275text(44);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(45, "div")(46, "dt");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "dd");
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "div")(52, "dt");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(55, "dd");
    \u0275\u0275text(56);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(57, EmployeeDetailDialogComponent_Conditional_57_Template, 7, 7, "div");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(58, "div", 14)(59, "button", 15);
    \u0275\u0275domListener("click", function EmployeeDetailDialogComponent_Template_button_click_59_listener() {
      return ctx.close();
    });
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 21, "employees.dialog.title"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 23, "common.close"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.loading() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.error() && !ctx.loading() ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.getInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.fullName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).jobTitleName || (ctx.detail() ?? ctx.data.fallback).position || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 25, "employees.columns.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "employees.columns.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).phoneNumber || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 29, "employees.columns.qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).qualificationName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 31, "employees.columns.university"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).universityName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 33, "employees.columns.industry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx.detail() ?? ctx.data.fallback).industryName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 35, "employees.columns.location"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.location() || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_19_0 = ctx.detail()) == null ? null : tmp_19_0.dateOfBirth) ? 57 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 37, "common.close"), " ");
  }
}, dependencies: [CommonModule, MatDialogModule, MatIconModule, TranslocoModule, DatePipe, TranslocoPipe], styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 480px;\n  max-width: 100%;\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-8);\n  overflow: hidden;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--brand-neutral-100);\n  flex-shrink: 0;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--brand-neutral-950);\n  letter-spacing: -0.2px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background-color 0.2s, color 0.2s;\n  flex-shrink: 0;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.error-note[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: var(--radius-6);\n  background: color-mix(in srgb, var(--functional-danger-50) 70%, transparent);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.profile-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-badge-lg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n  flex-shrink: 0;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.profile-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  margin-block-start: 2px;\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin: 0;\n}\n.profile-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  margin-block-end: 2px;\n}\n.profile-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  background: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-800);\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-50);\n}\n@media (max-width: 480px) {\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=employee-detail-dialog.css.map */"] });
var EmployeeDetailDialogComponent = _EmployeeDetailDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeDetailDialogComponent, [{
    type: Component,
    args: [{ selector: "app-employee-detail-dialog", standalone: true, imports: [CommonModule, MatDialogModule, MatIconModule, TranslocoModule], template: `<div class="dialog-container">

  <div class="dialog-header">
    <h2 class="dialog-title">{{ 'employees.dialog.title' | transloco }}</h2>
    <button class="close-btn" (click)="close()" [attr.aria-label]="'common.close' | transloco">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <div class="dialog-body">
    @if (loading()) {
      <div class="loading-spinner" role="status" aria-live="polite">
        <p>{{ 'common.loading' | transloco }}</p>
      </div>
    }

    @if (error() && !loading()) {
      <div class="error-note" role="alert">
        <p>{{ 'employees.errors.loadDetail' | transloco }}</p>
      </div>
    }

    <div class="profile-head">
      <div class="avatar-badge-lg">{{ getInitials() }}</div>
      <div>
        <div class="profile-name">{{ fullName() }}</div>
        <div class="profile-sub">{{ (detail() ?? data.fallback).jobTitleName || (detail() ?? data.fallback).position || '\u2014' }}</div>
      </div>
    </div>

    <dl class="profile-grid">
      <div><dt>{{ 'employees.columns.email' | transloco }}</dt><dd>{{ (detail() ?? data.fallback).email || '\u2014' }}</dd></div>
      <div><dt>{{ 'employees.columns.phone' | transloco }}</dt><dd>{{ (detail() ?? data.fallback).phoneNumber || '\u2014' }}</dd></div>
      <div><dt>{{ 'employees.columns.qualification' | transloco }}</dt><dd>{{ (detail() ?? data.fallback).qualificationName || '\u2014' }}</dd></div>
      <div><dt>{{ 'employees.columns.university' | transloco }}</dt><dd>{{ (detail() ?? data.fallback).universityName || '\u2014' }}</dd></div>
      <div><dt>{{ 'employees.columns.industry' | transloco }}</dt><dd>{{ (detail() ?? data.fallback).industryName || '\u2014' }}</dd></div>
      <div><dt>{{ 'employees.columns.location' | transloco }}</dt><dd>{{ location() || '\u2014' }}</dd></div>
      @if (detail()?.dateOfBirth) {
        <div><dt>{{ 'employees.columns.dateOfBirth' | transloco }}</dt><dd>{{ detail()!.dateOfBirth | date:'mediumDate' }}</dd></div>
      }
    </dl>
  </div>

  <div class="dialog-footer">
    <button type="button" class="btn-secondary" (click)="close()">
      {{ 'common.close' | transloco }}
    </button>
  </div>

</div>
`, styles: ["/* src/components/DashboardLayout/Employees/employee-detail-dialog/employee-detail-dialog.css */\n.dialog-container {\n  display: flex;\n  flex-direction: column;\n  width: 480px;\n  max-width: 100%;\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-8);\n  overflow: hidden;\n}\n.dialog-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--brand-neutral-100);\n  flex-shrink: 0;\n}\n.dialog-title {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--brand-neutral-950);\n  letter-spacing: -0.2px;\n}\n.close-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-6);\n  background: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background-color 0.2s, color 0.2s;\n  flex-shrink: 0;\n}\n.close-btn:hover {\n  background-color: var(--brand-neutral-100);\n  color: var(--brand-neutral-900);\n}\n.dialog-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.loading-spinner {\n  text-align: center;\n  padding: 24px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.error-note {\n  padding: 10px 12px;\n  border-radius: var(--radius-6);\n  background: color-mix(in srgb, var(--functional-danger-50) 70%, transparent);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.profile-head {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-badge-lg {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n  flex-shrink: 0;\n}\n.profile-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.profile-sub {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  margin-block-start: 2px;\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin: 0;\n}\n.profile-grid dt {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  margin-block-end: 2px;\n}\n.profile-grid dd {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.dialog-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.btn-secondary {\n  padding: 9px 18px;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  background: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-neutral-800);\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-secondary:hover {\n  background-color: var(--brand-neutral-50);\n}\n@media (max-width: 480px) {\n  .profile-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=employee-detail-dialog.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeDetailDialogComponent, { className: "EmployeeDetailDialogComponent", filePath: "src/components/dashboardlayout/employees/employee-detail-dialog/employee-detail-dialog.ts", lineNumber: 22 });
})();

// src/components/DashboardLayout/Employees/employees-list/employees-list.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeesListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilter());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "contracts.filters.clearAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "contracts.filters.clearAll"), " ");
  }
}
function EmployeesListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function EmployeesListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "employees.errors.load"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "common.retry"), " ");
  }
}
function EmployeesListComponent_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "circle", 25)(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "employees.emptyState.noResultsSearch"));
  }
}
function EmployeesListComponent_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "circle", 27)(2, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "employees.emptyState.noEmployees"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "employees.emptyState.noEmployeesDesc"));
  }
}
function EmployeesListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, EmployeesListComponent_Conditional_36_Conditional_1_Template, 6, 3)(2, EmployeesListComponent_Conditional_36_Conditional_2_Template, 9, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.search ? 1 : 2);
  }
}
function EmployeesListComponent_Conditional_37_Conditional_0_For_24_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 42)(2, "div", 43)(3, "dl", 44)(4, "div")(5, "dt");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "dt");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const emp_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "employees.columns.qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r5.qualificationName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "employees.columns.university"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r5.universityName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "employees.columns.industry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r5.industryName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "employees.columns.location"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.location(emp_r5) || "\u2014");
  }
}
function EmployeesListComponent_Conditional_37_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 33);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_37_Conditional_0_For_24_Template_button_click_2_listener() {
      const emp_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(emp_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 34);
    \u0275\u0275element(6, "path", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "td")(8, "div", 36)(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "button", 40);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_37_Conditional_0_For_24_Template_button_click_24_listener() {
      const emp_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProfile(emp_r5));
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, EmployeesListComponent_Conditional_37_Conditional_0_For_24_Conditional_29_Template, 28, 16, "tr", 41);
  }
  if (rf & 2) {
    const emp_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === emp_r5.id)("aria-label", ctx_r1.expandedRowId === emp_r5.id ? \u0275\u0275pipeBind1(3, 14, "common.collapseRow") : \u0275\u0275pipeBind1(4, 16, "common.expandRow"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === emp_r5.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(emp_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fullName(emp_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.jobTitleName || emp_r5.position || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.phoneNumber || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, ctx_r1.userTypeKey(emp_r5.userType)));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 20, "employees.actions.viewProfile"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 22, "employees.actions.viewProfile"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 24, "common.view"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedRowId === emp_r5.id ? 29 : -1);
  }
}
function EmployeesListComponent_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "table", 31)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 32);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, EmployeesListComponent_Conditional_37_Conditional_0_For_24_Template, 30, 26, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "employees.columns.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "employees.columns.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "employees.columns.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "employees.columns.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 14, "employees.columns.type"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 16, "common.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filtered);
  }
}
function EmployeesListComponent_Conditional_37_Conditional_1_For_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "dl", 44)(2, "div")(3, "dt");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dd");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "dt");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "dt");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emp_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "employees.columns.qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r7.qualificationName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "employees.columns.university"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r7.universityName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, "employees.columns.industry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r7.industryName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "employees.columns.location"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.location(emp_r7) || "\u2014");
  }
}
function EmployeesListComponent_Conditional_37_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 45)(1, "header", 46)(2, "div", 36)(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_37_Conditional_1_For_2_Template_button_click_10_listener() {
      const emp_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(emp_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 34);
    \u0275\u0275element(14, "path", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "dl", 48)(16, "div")(17, "dt");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "dt");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, EmployeesListComponent_Conditional_37_Conditional_1_For_2_Conditional_35_Template, 26, 16, "div", 43);
    \u0275\u0275elementStart(36, "footer", 49)(37, "button", 50);
    \u0275\u0275listener("click", function EmployeesListComponent_Conditional_37_Conditional_1_For_2_Template_button_click_37_listener() {
      const emp_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProfile(emp_r7));
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emp_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(emp_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fullName(emp_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r7.jobTitleName || emp_r7.position || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === emp_r7.id)("aria-label", ctx_r1.expandedRowId === emp_r7.id ? \u0275\u0275pipeBind1(11, 15, "common.collapseRow") : \u0275\u0275pipeBind1(12, 17, "common.expandRow"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === emp_r7.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "employees.columns.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r7.email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, "employees.columns.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r7.phoneNumber || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, "employees.columns.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, ctx_r1.userTypeKey(emp_r7.userType)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedRowId === emp_r7.id ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 27, "employees.actions.viewProfile"), " ");
  }
}
function EmployeesListComponent_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, EmployeesListComponent_Conditional_37_Conditional_1_For_2_Template, 40, 29, "article", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filtered);
  }
}
function EmployeesListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmployeesListComponent_Conditional_37_Conditional_0_Template, 25, 18, "div", 29);
    \u0275\u0275conditionalCreate(1, EmployeesListComponent_Conditional_37_Conditional_1_Template, 3, 0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.viewMode === "table" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode === "cards" ? 1 : -1);
  }
}
var _EmployeesListComponent = class _EmployeesListComponent {
  constructor() {
    this.userService = inject(UserService);
    this.dialog = inject(MatDialog);
    this.cdr = inject(ChangeDetectorRef);
    this.UserTypeId = UserTypeId;
    this.original = [];
    this.filtered = [];
    this.loading = false;
    this.error = false;
    this.viewMode = "table";
    this.search = "";
    this.expandedRowId = null;
  }
  setView(mode) {
    this.viewMode = mode;
  }
  toggleExpand(id) {
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = false;
    this.userService.getAllCompanyEmployees().subscribe({
      next: (list) => {
        this.original = list ?? [];
        this.loading = false;
        this.applyFilter();
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.error = true;
        this.cdr.detectChanges();
      }
    });
  }
  applyFilter() {
    const q = (this.search || "").trim().toLowerCase();
    this.filtered = !q ? this.original : this.original.filter((e) => this.fullName(e).toLowerCase().includes(q) || (e.email ?? "").toLowerCase().includes(q) || (e.jobTitleName ?? "").toLowerCase().includes(q) || (e.position ?? "").toLowerCase().includes(q));
  }
  clearFilter() {
    this.search = "";
    this.applyFilter();
  }
  fullName(e) {
    return [e.firstName, e.lastName].filter(Boolean).join(" ") || e.favoriteName || e.email;
  }
  getInitials(e) {
    const name = this.fullName(e);
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0]?.substring(0, 2).toUpperCase() ?? "?";
  }
  location(e) {
    return [e.userAddress?.cityName, e.userAddress?.countryName].filter(Boolean).join(", ");
  }
  userTypeKey(userType) {
    switch (userType) {
      case UserTypeId.Contractor:
        return "employees.userTypes.contractor";
      case UserTypeId.Business:
        return "employees.userTypes.business";
      default:
        return "employees.userTypes.employee";
    }
  }
  openProfile(e) {
    this.dialog.open(EmployeeDetailDialogComponent, {
      width: "480px",
      panelClass: "custom-dialog-container",
      data: { employeeId: e.id, fallback: e }
    });
  }
};
_EmployeesListComponent.\u0275fac = function EmployeesListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeesListComponent)();
};
_EmployeesListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeesListComponent, selectors: [["app-employees-list"]], decls: 38, vars: 34, consts: [[1, "page-container", "employees-page"], [1, "breadcrumb"], [1, "breadcrumb__item"], [1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header"], [1, "page-title"], [1, "filters-container"], [1, "search-input-wrapper"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 14L11.1 11.1", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "clear-filters-btn"], ["role", "status", "aria-live", "polite", 1, "loading-spinner"], ["role", "alert", 1, "error-state"], [1, "empty-state"], [1, "clear-filters-btn", 3, "click"], [1, "retry-btn", 3, "click"], ["width", "64", "height", "64", "viewBox", "0 0 64 64", "fill", "none", "aria-hidden", "true"], ["cx", "28", "cy", "28", "r", "16", "stroke", "currentColor", "stroke-width", "2"], ["d", "M40 40l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "32", "cy", "20", "r", "12", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "table-container"], [1, "ui-cards-grid"], [1, "employees-table"], [2, "width", "40px"], ["type", "button", 1, "expand-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M9 6l6 6-6 6", "stroke", "currentColor", "stroke-width", "2", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "employee-cell"], [1, "avatar-badge"], [1, "employee-name"], [1, "type-badge"], [1, "action-menu-btn", 3, "click", "title"], [1, "expand-row"], ["colspan", "7"], [1, "expand-panel"], [1, "expand-grid"], [1, "ui-card"], [1, "ui-card__head"], [1, "employee-role"], [1, "ui-card__meta"], [1, "ui-card__foot"], [1, "action-menu-btn", 3, "click"]], template: function EmployeesListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "h1", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 9);
    \u0275\u0275element(18, "path", 10)(19, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "input", 12);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesListComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function EmployeesListComponent_Template_input_ngModelChange_20_listener() {
      return ctx.applyFilter();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementStart(25, "button", 14);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Template_button_click_25_listener() {
      return ctx.setView("table");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 15);
    \u0275\u0275element(28, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 14);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275listener("click", function EmployeesListComponent_Template_button_click_29_listener() {
      return ctx.setView("cards");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 15);
    \u0275\u0275element(32, "path", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, EmployeesListComponent_Conditional_33_Template, 4, 6, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, EmployeesListComponent_Conditional_34_Template, 4, 3, "div", 19)(35, EmployeesListComponent_Conditional_35_Template, 8, 9, "div", 20)(36, EmployeesListComponent_Conditional_36_Template, 3, 1, "div", 21)(37, EmployeesListComponent_Conditional_37_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 16, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 18, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "employees.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 22, "employees.title"));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 24, "employees.filters.search"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 26, "employees.filters.search"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 28, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 30, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 32, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.search ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 34 : ctx.error ? 35 : ctx.filtered.length === 0 ? 36 : 37);
  }
}, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoModule, TranslocoPipe], styles: ["\n\n.employees-page[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  color: var(--brand-primary-500);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: none;\n  font-size: 13px;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.employees-page[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n}\n.employees-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.employees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.employees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.employees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n}\n.employees-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.employees-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.employees-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.employees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.action-menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text-main);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 5px 12px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.action-menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.expand-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.expand-panel[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--ui-bg-subtle);\n}\n.expand-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin: 0;\n}\n.expand-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  margin-block-end: 2px;\n}\n.expand-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 64px 24px;\n  text-align: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  color: var(--ui-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 360px;\n}\n@media (max-width: 768px) {\n  .filters-container[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .employees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+4), \n   .employees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=employees-list.css.map */"] });
var EmployeesListComponent = _EmployeesListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesListComponent, [{
    type: Component,
    args: [{ selector: "app-employees-list", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule], template: `<div class="page-container employees-page">

  <!-- Breadcrumb -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="breadcrumb__item">{{ 'common.appName' | transloco }}</span>
    <span class="breadcrumb__sep">\u203A</span>
    <span class="breadcrumb__item breadcrumb__item--active">{{ 'employees.title' | transloco }}</span>
  </nav>

  <!-- Page header -->
  <div class="page-header">
    <h1 class="page-title">{{ 'employees.title' | transloco }}</h1>
  </div>

  <!-- Filters + view toggle -->
  <div class="filters-container">
    <div class="search-input-wrapper">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="text" [(ngModel)]="search"
             (ngModelChange)="applyFilter()"
             [placeholder]="'employees.filters.search' | transloco"
             [attr.aria-label]="'employees.filters.search' | transloco">
    </div>

    <div class="ui-view-toggle" role="group" [attr.aria-label]="'common.switchView' | transloco">
      <button type="button" class="ui-view-toggle__btn"
              [class.ui-view-toggle__btn--active]="viewMode === 'table'"
              (click)="setView('table')" [attr.aria-label]="'common.tableView' | transloco">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z" fill="currentColor"/></svg>
      </button>
      <button type="button" class="ui-view-toggle__btn"
              [class.ui-view-toggle__btn--active]="viewMode === 'cards'"
              (click)="setView('cards')" [attr.aria-label]="'common.cardView' | transloco">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="currentColor"/></svg>
      </button>
    </div>

    @if (search) {
      <button class="clear-filters-btn" (click)="clearFilter()"
              [attr.aria-label]="'contracts.filters.clearAll' | transloco">
        {{ 'contracts.filters.clearAll' | transloco }}
      </button>
    }
  </div>

  @if (loading) {
    <div class="loading-spinner" role="status" aria-live="polite">
      <p>{{ 'common.loading' | transloco }}</p>
    </div>
  } @else if (error) {
    <div class="error-state" role="alert">
      <p>{{ 'employees.errors.load' | transloco }}</p>
      <button class="retry-btn" (click)="load()" [attr.aria-label]="'common.retry' | transloco">
        {{ 'common.retry' | transloco }}
      </button>
    </div>
  } @else if (filtered.length === 0) {
    <div class="empty-state">
      @if (search) {
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="16" stroke="currentColor" stroke-width="2"/>
          <path d="M40 40l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p>{{ 'employees.emptyState.noResultsSearch' | transloco }}</p>
      } @else {
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="20" r="12" stroke="currentColor" stroke-width="2"/>
          <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <h2>{{ 'employees.emptyState.noEmployees' | transloco }}</h2>
        <p>{{ 'employees.emptyState.noEmployeesDesc' | transloco }}</p>
      }
    </div>
  } @else {

    @if (viewMode === 'table') {
      <div class="table-container">
        <table class="employees-table">
          <thead>
            <tr>
              <th style="width:40px"></th>
              <th>{{ 'employees.columns.name' | transloco }}</th>
              <th>{{ 'employees.columns.jobTitle' | transloco }}</th>
              <th>{{ 'employees.columns.email' | transloco }}</th>
              <th>{{ 'employees.columns.phone' | transloco }}</th>
              <th>{{ 'employees.columns.type' | transloco }}</th>
              <th [attr.aria-label]="'common.actions' | transloco"></th>
            </tr>
          </thead>
          <tbody>
            @for (emp of filtered; track emp.id) {
              <tr>
                <td>
                  <button type="button" class="expand-btn"
                          (click)="toggleExpand(emp.id)"
                          [attr.aria-expanded]="expandedRowId === emp.id"
                          [attr.aria-label]="expandedRowId === emp.id ? ('common.collapseRow' | transloco) : ('common.expandRow' | transloco)">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                         [style.transform]="expandedRowId === emp.id ? 'rotate(90deg)' : 'rotate(0)'">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </td>
                <td>
                  <div class="employee-cell">
                    <div class="avatar-badge">{{ getInitials(emp) }}</div>
                    <span class="employee-name">{{ fullName(emp) }}</span>
                  </div>
                </td>
                <td>{{ emp.jobTitleName || emp.position || '\u2014' }}</td>
                <td>{{ emp.email || '\u2014' }}</td>
                <td>{{ emp.phoneNumber || '\u2014' }}</td>
                <td>
                  <span class="type-badge">{{ userTypeKey(emp.userType) | transloco }}</span>
                </td>
                <td>
                  <button class="action-menu-btn" (click)="openProfile(emp)"
                          [attr.aria-label]="'employees.actions.viewProfile' | transloco"
                          [title]="'employees.actions.viewProfile' | transloco">
                    {{ 'common.view' | transloco }}
                  </button>
                </td>
              </tr>
              @if (expandedRowId === emp.id) {
                <tr class="expand-row">
                  <td colspan="7">
                    <div class="expand-panel">
                      <dl class="expand-grid">
                        <div><dt>{{ 'employees.columns.qualification' | transloco }}</dt><dd>{{ emp.qualificationName || '\u2014' }}</dd></div>
                        <div><dt>{{ 'employees.columns.university' | transloco }}</dt><dd>{{ emp.universityName || '\u2014' }}</dd></div>
                        <div><dt>{{ 'employees.columns.industry' | transloco }}</dt><dd>{{ emp.industryName || '\u2014' }}</dd></div>
                        <div><dt>{{ 'employees.columns.location' | transloco }}</dt>
                          <dd>{{ location(emp) || '\u2014' }}</dd>
                        </div>
                      </dl>
                    </div>
                  </td>
                </tr>
              }
            }
          </tbody>
        </table>
      </div>
    }

    @if (viewMode === 'cards') {
      <div class="ui-cards-grid">
        @for (emp of filtered; track emp.id) {
          <article class="ui-card">
            <header class="ui-card__head">
              <div class="employee-cell">
                <div class="avatar-badge">{{ getInitials(emp) }}</div>
                <div>
                  <div class="employee-name">{{ fullName(emp) }}</div>
                  <div class="employee-role">{{ emp.jobTitleName || emp.position || '\u2014' }}</div>
                </div>
              </div>
              <button type="button" class="expand-btn"
                      (click)="toggleExpand(emp.id)"
                      [attr.aria-expanded]="expandedRowId === emp.id"
                      [attr.aria-label]="expandedRowId === emp.id ? ('common.collapseRow' | transloco) : ('common.expandRow' | transloco)">
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                     [style.transform]="expandedRowId === emp.id ? 'rotate(90deg)' : 'rotate(0)'">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </header>
            <dl class="ui-card__meta">
              <div><dt>{{ 'employees.columns.email' | transloco }}</dt><dd>{{ emp.email || '\u2014' }}</dd></div>
              <div><dt>{{ 'employees.columns.phone' | transloco }}</dt><dd>{{ emp.phoneNumber || '\u2014' }}</dd></div>
              <div><dt>{{ 'employees.columns.type' | transloco }}</dt><dd>{{ userTypeKey(emp.userType) | transloco }}</dd></div>
            </dl>
            @if (expandedRowId === emp.id) {
              <div class="expand-panel">
                <dl class="expand-grid">
                  <div><dt>{{ 'employees.columns.qualification' | transloco }}</dt><dd>{{ emp.qualificationName || '\u2014' }}</dd></div>
                  <div><dt>{{ 'employees.columns.university' | transloco }}</dt><dd>{{ emp.universityName || '\u2014' }}</dd></div>
                  <div><dt>{{ 'employees.columns.industry' | transloco }}</dt><dd>{{ emp.industryName || '\u2014' }}</dd></div>
                  <div><dt>{{ 'employees.columns.location' | transloco }}</dt>
                    <dd>{{ location(emp) || '\u2014' }}</dd>
                  </div>
                </dl>
              </div>
            }
            <footer class="ui-card__foot">
              <button class="action-menu-btn" (click)="openProfile(emp)">
                {{ 'employees.actions.viewProfile' | transloco }}
              </button>
            </footer>
          </article>
        }
      </div>
    }

  }

</div><!-- /.page-container employees-page -->
`, styles: ["/* src/components/DashboardLayout/Employees/employees-list/employees-list.css */\n.employees-page {\n  gap: 0;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper svg {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper input::placeholder {\n  color: var(--ui-text-muted);\n}\n.clear-filters-btn {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn:hover {\n  color: var(--brand-primary-500);\n}\n.loading-spinner {\n  text-align: center;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.retry-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: none;\n  font-size: 13px;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.retry-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.employees-page .table-container {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n}\n.employees-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.employees-table th,\n.employees-table td {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.employees-table th {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n}\n.employees-table tbody tr {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.employees-table tbody tr:last-child {\n  border-block-end: none;\n}\n.employees-table tbody tr:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.employees-table td {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n}\n.employee-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.type-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.action-menu-btn {\n  background: none;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text-main);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 5px 12px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.action-menu-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.expand-btn {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n}\n.expand-panel {\n  padding: 12px 16px;\n  background: var(--ui-bg-subtle);\n}\n.expand-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin: 0;\n}\n.expand-grid dt {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  margin-block-end: 2px;\n}\n.expand-grid dd {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 64px 24px;\n  text-align: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  color: var(--ui-text-muted);\n}\n.empty-state h2 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.empty-state p {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 360px;\n}\n@media (max-width: 768px) {\n  .filters-container {\n    padding: 10px 12px;\n  }\n  .employees-table th:nth-child(n+4),\n  .employees-table td:nth-child(n+4) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=employees-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeesListComponent, { className: "EmployeesListComponent", filePath: "src/components/dashboardlayout/employees/employees-list/employees-list.ts", lineNumber: 18 });
})();
export {
  EmployeesListComponent
};
//# sourceMappingURL=chunk-KQKWFQPC.js.map
