import {
  UserTypeId
} from "./chunk-5WHRH4NB.js";
import {
  UserService
} from "./chunk-TUIWGNTU.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Admin/user-management/user-management.ts
var _forTrack0 = ($index, $item) => $item.id;
function UserManagementComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 11);
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 12);
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
function UserManagementComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 12);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 13);
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_14_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", user_r2.profileImagePath, \u0275\u0275sanitizeUrl)("alt", user_r2.firstName + " " + user_r2.lastName);
  }
}
function UserManagementComponent_Conditional_14_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (user_r2.firstName || "?")[0].toUpperCase(), " ");
  }
}
function UserManagementComponent_Conditional_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19)(2, "div", 20);
    \u0275\u0275conditionalCreate(3, UserManagementComponent_Conditional_14_For_11_Conditional_3_Template, 1, 2, "img", 21)(4, UserManagementComponent_Conditional_14_For_11_Conditional_4_Template, 2, 1, "span", 22);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 23)(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 23)(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r2.profileImagePath ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r2.firstName, " ", user_r2.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("usr-mgmt__type-badge--employee", user_r2.userTypeId === ctx_r0.UserTypeId.Employee)("usr-mgmt__type-badge--contractor", user_r2.userTypeId === ctx_r0.UserTypeId.Contractor)("usr-mgmt__type-badge--business", user_r2.userTypeId === ctx_r0.UserTypeId.Business);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 16, ctx_r0.userTypeKey(user_r2.userTypeId)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("usr-mgmt__status-badge--active", user_r2.isActive !== false)("usr-mgmt__status-badge--suspended", user_r2.isActive === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, user_r2.isActive !== false ? "admin.users.status.active" : "admin.users.status.suspended"), " ");
  }
}
function UserManagementComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 14);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr");
    \u0275\u0275element(5, "th", 15)(6, "th", 16)(7, "th", 17)(8, "th", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, UserManagementComponent_Conditional_14_For_11_Template, 17, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "admin.users.listTitle"));
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.filteredUsers());
  }
}
var _UserManagementComponent = class _UserManagementComponent {
  constructor() {
    this.userService = inject(UserService);
    this.users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorKey = signal("", ...ngDevMode ? [{ debugName: "errorKey" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.UserTypeId = UserTypeId;
    this.filteredUsers = computed(() => {
      const q = this.searchQuery().toLowerCase().trim();
      if (!q)
        return this.users();
      return this.users().filter((u) => `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredUsers" }] : []);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    this.errorKey.set("");
    this.userService.getAll().subscribe({
      next: (list) => {
        this.users.set(list ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set("admin.users.errors.load");
        this.isLoading.set(false);
      }
    });
  }
  onSearch(value) {
    this.searchQuery.set(value);
  }
  userTypeKey(typeId) {
    switch (typeId) {
      case UserTypeId.Employee:
        return "admin.users.userTypes.1";
      case UserTypeId.Contractor:
        return "admin.users.userTypes.2";
      case UserTypeId.Business:
        return "admin.users.userTypes.3";
      default:
        return "admin.users.userTypes.1";
    }
  }
};
_UserManagementComponent.\u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserManagementComponent)();
};
_UserManagementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 15, vars: 8, consts: [[1, "usr-mgmt"], [1, "usr-mgmt__header"], ["transloco", "admin.users.title", 1, "usr-mgmt__title"], ["transloco", "admin.users.subtitle", 1, "usr-mgmt__subtitle"], [1, "usr-mgmt__search-wrap"], ["aria-hidden", "true", 1, "usr-mgmt__search-icon"], ["type", "search", 1, "usr-mgmt__search", 3, "input", "placeholder", "value"], ["aria-busy", "true", 1, "usr-mgmt__state", "usr-mgmt__state--loading"], ["role", "alert", 1, "usr-mgmt__state", "usr-mgmt__state--error"], [1, "usr-mgmt__state", "usr-mgmt__state--empty"], [1, "usr-mgmt__table-wrap"], ["aria-hidden", "true", 1, "usr-mgmt__spinner"], ["aria-hidden", "true"], ["transloco", "admin.users.empty"], [1, "usr-mgmt__table"], ["transloco", "admin.users.columns.name"], ["transloco", "admin.users.columns.email"], ["transloco", "admin.users.columns.type"], ["transloco", "admin.users.columns.status"], [1, "usr-mgmt__cell", "usr-mgmt__cell--name"], [1, "usr-mgmt__user-name"], [1, "usr-mgmt__avatar", 3, "src", "alt"], ["aria-hidden", "true", 1, "usr-mgmt__avatar-placeholder"], [1, "usr-mgmt__cell"], [1, "usr-mgmt__type-badge"], [1, "usr-mgmt__status-badge"]], template: function UserManagementComponent_Template(rf, ctx) {
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
    \u0275\u0275listener("input", function UserManagementComponent_Template_input_input_8_listener($event) {
      return ctx.onSearch($event.target.value);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, UserManagementComponent_Conditional_11_Template, 2, 0, "div", 7)(12, UserManagementComponent_Conditional_12_Template, 6, 3, "div", 8)(13, UserManagementComponent_Conditional_13_Template, 4, 0, "div", 9)(14, UserManagementComponent_Conditional_14_Template, 12, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 4, "admin.users.searchPlaceholder"))("value", ctx.searchQuery());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 6, "admin.users.search"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.errorKey() ? 12 : ctx.filteredUsers().length === 0 ? 13 : 14);
  }
}, dependencies: [CommonModule, FormsModule, TranslocoModule, TranslocoDirective, MatIconModule, MatIcon, TranslocoPipe], styles: ["\n\n.usr-mgmt[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.usr-mgmt__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.usr-mgmt__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.usr-mgmt__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.usr-mgmt__search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.usr-mgmt__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 0.75rem;\n  font-size: 1.125rem;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.usr-mgmt__search[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem 0.5rem 2.5rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  width: 260px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.usr-mgmt__search[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.usr-mgmt__state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.usr-mgmt__state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.usr-mgmt__table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.usr-mgmt__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.usr-mgmt__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.usr-mgmt__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child)   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ui-border);\n}\n.usr-mgmt__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.usr-mgmt__cell[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.usr-mgmt__user-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.usr-mgmt__avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.usr-mgmt__avatar-placeholder[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.usr-mgmt__type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.usr-mgmt__type-badge--employee[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.usr-mgmt__type-badge--contractor[_ngcontent-%COMP%] {\n  background: var(--functional-info-50);\n  color: var(--functional-info-700);\n}\n.usr-mgmt__type-badge--business[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.usr-mgmt__status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.usr-mgmt__status-badge--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.usr-mgmt__status-badge--suspended[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.usr-mgmt__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_usr-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_usr-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .usr-mgmt__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .usr-mgmt__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=user-management.css.map */"], changeDetection: 0 });
var UserManagementComponent = _UserManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="usr-mgmt">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="usr-mgmt__header">
    <div>
      <h1 class="usr-mgmt__title"    transloco="admin.users.title"></h1>
      <p  class="usr-mgmt__subtitle" transloco="admin.users.subtitle"></p>
    </div>

    <div class="usr-mgmt__search-wrap">
      <mat-icon class="usr-mgmt__search-icon" aria-hidden="true">search</mat-icon>
      <input
        class="usr-mgmt__search"
        type="search"
        [placeholder]="'admin.users.searchPlaceholder' | transloco"
        [value]="searchQuery()"
        (input)="onSearch($any($event.target).value)"
        [attr.aria-label]="'admin.users.search' | transloco"
      />
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="usr-mgmt__state usr-mgmt__state--loading" aria-busy="true">
      <span class="usr-mgmt__spinner" aria-hidden="true"></span>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (errorKey()) {
    <div class="usr-mgmt__state usr-mgmt__state--error" role="alert">
      <mat-icon aria-hidden="true">error_outline</mat-icon>
      <span>{{ errorKey() | transloco }}</span>
    </div>
  }

  <!-- \u2500\u2500 Empty \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (filteredUsers().length === 0) {
    <div class="usr-mgmt__state usr-mgmt__state--empty">
      <mat-icon aria-hidden="true">people_outline</mat-icon>
      <span transloco="admin.users.empty"></span>
    </div>
  }

  <!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else {
    <div class="usr-mgmt__table-wrap">
      <table class="usr-mgmt__table" [attr.aria-label]="'admin.users.listTitle' | transloco">
        <thead>
          <tr>
            <th transloco="admin.users.columns.name"></th>
            <th transloco="admin.users.columns.email"></th>
            <th transloco="admin.users.columns.type"></th>
            <th transloco="admin.users.columns.status"></th>
          </tr>
        </thead>
        <tbody>
          @for (user of filteredUsers(); track user.id) {
            <tr>
              <td class="usr-mgmt__cell usr-mgmt__cell--name">
                <div class="usr-mgmt__user-name">
                  @if (user.profileImagePath) {
                    <img class="usr-mgmt__avatar" [src]="user.profileImagePath"
                         [alt]="user.firstName + ' ' + user.lastName" />
                  } @else {
                    <span class="usr-mgmt__avatar-placeholder" aria-hidden="true">
                      {{ (user.firstName || '?')[0].toUpperCase() }}
                    </span>
                  }
                  <span>{{ user.firstName }} {{ user.lastName }}</span>
                </div>
              </td>
              <td class="usr-mgmt__cell">{{ user.email }}</td>
              <td class="usr-mgmt__cell">
                <span
                  class="usr-mgmt__type-badge"
                  [class.usr-mgmt__type-badge--employee]="user.userTypeId === UserTypeId.Employee"
                  [class.usr-mgmt__type-badge--contractor]="user.userTypeId === UserTypeId.Contractor"
                  [class.usr-mgmt__type-badge--business]="user.userTypeId === UserTypeId.Business">
                  {{ userTypeKey(user.userTypeId) | transloco }}
                </span>
              </td>
              <td class="usr-mgmt__cell">
                <span
                  class="usr-mgmt__status-badge"
                  [class.usr-mgmt__status-badge--active]="user.isActive !== false"
                  [class.usr-mgmt__status-badge--suspended]="user.isActive === false">
                  {{
                    (user.isActive !== false
                      ? 'admin.users.status.active'
                      : 'admin.users.status.suspended') | transloco
                  }}
                </span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

</div>
`, styles: ["/* src/components/DashboardLayout/Admin/user-management/user-management.css */\n.usr-mgmt {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.usr-mgmt__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.usr-mgmt__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.usr-mgmt__subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.usr-mgmt__search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.usr-mgmt__search-icon {\n  position: absolute;\n  inset-inline-start: 0.75rem;\n  font-size: 1.125rem;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.usr-mgmt__search {\n  padding: 0.5rem 0.875rem 0.5rem 2.5rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-primary);\n  font-size: 0.875rem;\n  width: 260px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.usr-mgmt__search:focus-visible {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-100);\n}\n.usr-mgmt__state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.usr-mgmt__state--error {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.usr-mgmt__table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.usr-mgmt__table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.usr-mgmt__table thead th {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.usr-mgmt__table tbody tr:not(:last-child) td {\n  border-bottom: 1px solid var(--ui-border);\n}\n.usr-mgmt__table tbody tr:hover {\n  background: var(--ui-bg-subtle);\n}\n.usr-mgmt__cell {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.usr-mgmt__user-name {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.usr-mgmt__avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.usr-mgmt__avatar-placeholder {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.usr-mgmt__type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.usr-mgmt__type-badge--employee {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.usr-mgmt__type-badge--contractor {\n  background: var(--functional-info-50);\n  color: var(--functional-info-700);\n}\n.usr-mgmt__type-badge--business {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.usr-mgmt__status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.usr-mgmt__status-badge--active {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.usr-mgmt__status-badge--suspended {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.usr-mgmt__spinner {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: usr-spin 0.7s linear infinite;\n}\n@keyframes usr-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .usr-mgmt__header {\n    flex-direction: column;\n  }\n  .usr-mgmt__search {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=user-management.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/components/dashboardlayout/admin/user-management/user-management.ts", lineNumber: 20 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-VACEKYAE.js.map
