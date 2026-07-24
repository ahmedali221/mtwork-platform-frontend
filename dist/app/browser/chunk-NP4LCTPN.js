import {
  NotificationsService
} from "./chunk-YKOGZMDC.js";
import {
  EmptyStateComponent
} from "./chunk-TIHFCSWG.js";
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
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/notifications/notifications-page/notifications-page.ts
function NotificationsPageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.unreadCount() + " unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount(), " ");
  }
}
function NotificationsPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount());
  }
}
function NotificationsPageComponent_For_31_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_For_31_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_For_31_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_For_31_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_For_31_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function NotificationsPageComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("click", function NotificationsPageComponent_For_31_Template_li_click_0_listener() {
      const n_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNotification(n_r3));
    })("keyup.enter", function NotificationsPageComponent_For_31_Template_li_keyup_enter_0_listener() {
      const n_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNotification(n_r3));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275conditionalCreate(2, NotificationsPageComponent_For_31_Case_2_Template, 2, 0, ":svg:svg", 19)(3, NotificationsPageComponent_For_31_Case_3_Template, 2, 0, ":svg:svg", 19)(4, NotificationsPageComponent_For_31_Case_4_Template, 2, 0, ":svg:svg", 19)(5, NotificationsPageComponent_For_31_Case_5_Template, 2, 0, ":svg:svg", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20)(7, "div", 21)(8, "h3", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, NotificationsPageComponent_For_31_Conditional_14_Template, 1, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const n_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("notif-item--unread", !n_r3.read);
    \u0275\u0275attribute("aria-label", n_r3.title + " \u2014 " + n_r3.message);
    \u0275\u0275advance();
    \u0275\u0275classMap("notif-icon--" + n_r3.kind);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = n_r3.kind) === "success" ? 2 : tmp_13_0 === "warning" ? 3 : tmp_13_0 === "error" ? 4 : 5);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(n_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRelative(n_r3.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r3.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(!n_r3.read ? 14 : -1);
  }
}
function NotificationsPageComponent_ForEmpty_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 30);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "notifications.empty.unread.title"))("description", \u0275\u0275pipeBind1(2, 4, "notifications.empty.unread.desc"));
  }
}
function NotificationsPageComponent_ForEmpty_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 30);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "notifications.empty.all.title"))("description", \u0275\u0275pipeBind1(2, 4, "notifications.empty.all.desc"));
  }
}
function NotificationsPageComponent_ForEmpty_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275conditionalCreate(1, NotificationsPageComponent_ForEmpty_32_Conditional_1_Template, 3, 6, "app-empty-state", 30)(2, NotificationsPageComponent_ForEmpty_32_Conditional_2_Template, 3, 6, "app-empty-state", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeFilter() === "unread" ? 1 : 2);
  }
}
var _NotificationsPageComponent = class _NotificationsPageComponent {
  constructor() {
    this.router = inject(Router);
    this.notificationsService = inject(NotificationsService);
    this.notifications = this.notificationsService.notifications;
    this.unreadCount = this.notificationsService.unreadCount;
    this.activeFilter = signal("all", ...ngDevMode ? [{ debugName: "activeFilter" }] : []);
    this.filteredNotifications = computed(() => {
      const list = this.notifications();
      return this.activeFilter() === "unread" ? list.filter((n) => !n.read) : list;
    }, ...ngDevMode ? [{ debugName: "filteredNotifications" }] : []);
    this.trackById = (_, n) => n.id;
  }
  setFilter(key) {
    this.activeFilter.set(key);
  }
  markAllAsRead() {
    this.notificationsService.markAllAsRead();
  }
  openNotification(n) {
    if (!n.read)
      this.notificationsService.markAsRead(n.id);
    if (n.link)
      this.router.navigateByUrl(n.link);
  }
  formatRelative(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    if (isNaN(d.getTime()))
      return "";
    const diffMs = Date.now() - d.getTime();
    const diffMin = Math.floor(diffMs / 6e4);
    if (diffMin < 1)
      return "just now";
    if (diffMin < 60)
      return `${diffMin}m ago`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)
      return `${diffH}h ago`;
    const diffD = Math.floor(diffH / 24);
    if (diffD < 7)
      return `${diffD}d ago`;
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  }
};
_NotificationsPageComponent.\u0275fac = function NotificationsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsPageComponent)();
};
_NotificationsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsPageComponent, selectors: [["app-notifications-page"]], decls: 33, vars: 34, consts: [[1, "notifications-page"], [1, "breadcrumb"], [1, "bc-item"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "bc-chevron"], ["d", "M5.5 3.5L10.5 8L5.5 12.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bc-item", "bc-active"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-title"], [1, "count-badge"], ["type", "button", 1, "btn-mark-all", 3, "click", "disabled"], ["role", "tablist", 1, "filter-tabs"], ["type", "button", "role", "tab", 1, "filter-tab", 3, "click"], [1, "tab-count"], ["role", "list", 1, "notif-list"], ["tabindex", "0", 1, "notif-item", 3, "notif-item--unread"], [1, "notif-empty"], ["tabindex", "0", 1, "notif-item", 3, "click", "keyup.enter"], ["aria-hidden", "true", 1, "notif-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24"], [1, "notif-body"], [1, "notif-row"], [1, "notif-title"], [1, "notif-time"], [1, "notif-msg"], ["aria-hidden", "true", 1, "notif-dot"], ["d", "M9 16.2L4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z", "fill", "currentColor"], ["d", "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", "fill", "currentColor"], ["d", "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", "fill", "currentColor"], ["d", "M11 7h2v2h-2zm0 4h2v6h-2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z", "fill", "currentColor"], ["kind", "bell", 3, "title", "description"]], template: function NotificationsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 3);
    \u0275\u0275element(7, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "h1", 8);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, NotificationsPageComponent_Conditional_16_Template, 2, 2, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_17_listener() {
      return ctx.markAllAsRead();
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementStart(22, "button", 12);
    \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_22_listener() {
      return ctx.setFilter("all");
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 12);
    \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_25_listener() {
      return ctx.setFilter("unread");
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275conditionalCreate(28, NotificationsPageComponent_Conditional_28_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "ul", 14);
    \u0275\u0275repeaterCreate(30, NotificationsPageComponent_For_31_Template, 15, 10, "li", 15, ctx.trackById, true, NotificationsPageComponent_ForEmpty_32_Template, 3, 1, "li", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 18, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 20, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 22, "notifications.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "notifications.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.unreadCount() > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.unreadCount() === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 26, "notifications.markAllRead"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 28, "notifications.filterLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("filter-tab--active", ctx.activeFilter() === "all");
    \u0275\u0275attribute("aria-selected", ctx.activeFilter() === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 30, "notifications.filterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("filter-tab--active", ctx.activeFilter() === "unread");
    \u0275\u0275attribute("aria-selected", ctx.activeFilter() === "unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 32, "notifications.filterUnread"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.unreadCount() > 0 ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.filteredNotifications());
  }
}, dependencies: [CommonModule, TranslocoModule, EmptyStateComponent, TranslocoPipe], styles: ["\n\n.notifications-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 800px;\n  margin-inline: auto;\n  width: 100%;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-mark-all[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.btn-mark-all[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.btn-mark-all[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.filter-tab[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 10px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  border-block-end: 2px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text);\n}\n.filter-tab--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  border-block-end-color: var(--brand-primary-500);\n}\n.filter-tab[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  font-size: 11px;\n  padding: 1px 7px;\n  font-weight: 600;\n}\n.notif-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 10px;\n  cursor: pointer;\n  position: relative;\n  transition: background-color 120ms ease;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.03));\n}\n.notif-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.notif-item--unread[_ngcontent-%COMP%] {\n  border-color: var(--brand-primary-500);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  flex: none;\n  background: var(--ui-surface-hover, rgba(0,0,0,0.05));\n  color: var(--ui-text-muted);\n}\n.notif-icon--info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: rgb(37, 99, 235);\n}\n.notif-icon--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(22, 163, 74);\n}\n.notif-icon--warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: rgb(202, 138, 4);\n}\n.notif-icon--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(220, 38, 38);\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  line-height: 1.4;\n}\n.notif-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--brand-primary-500);\n  flex: none;\n  margin-block-start: 6px;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 48px 16px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-surface);\n  border: 1px dashed var(--ui-border);\n  border-radius: 10px;\n}\n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=notifications-page.css.map */"], changeDetection: 0 });
var NotificationsPageComponent = _NotificationsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsPageComponent, [{
    type: Component,
    args: [{ selector: "app-notifications-page", standalone: true, imports: [CommonModule, TranslocoModule, EmptyStateComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="notifications-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="bc-item">{{ 'common.appName' | transloco }}</span>
    <svg class="bc-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="bc-item bc-active">{{ 'notifications.title' | transloco }}</span>
  </nav>

  <!-- \u2500\u2500 Header row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="page-title-wrap">
      <h1 class="page-title">{{ 'notifications.title' | transloco }}</h1>
      @if (unreadCount() > 0) {
        <span class="count-badge" [attr.aria-label]="(unreadCount() + ' unread')">
          {{ unreadCount() }}
        </span>
      }
    </div>
    <button
      type="button"
      class="btn-mark-all"
      [disabled]="unreadCount() === 0"
      (click)="markAllAsRead()"
    >
      {{ 'notifications.markAllRead' | transloco }}
    </button>
  </div>

  <!-- \u2500\u2500 Filter tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="filter-tabs" role="tablist" [attr.aria-label]="'notifications.filterLabel' | transloco">
    <button
      type="button"
      role="tab"
      class="filter-tab"
      [class.filter-tab--active]="activeFilter() === 'all'"
      [attr.aria-selected]="activeFilter() === 'all'"
      (click)="setFilter('all')"
    >
      {{ 'notifications.filterAll' | transloco }}
    </button>
    <button
      type="button"
      role="tab"
      class="filter-tab"
      [class.filter-tab--active]="activeFilter() === 'unread'"
      [attr.aria-selected]="activeFilter() === 'unread'"
      (click)="setFilter('unread')"
    >
      {{ 'notifications.filterUnread' | transloco }}
      @if (unreadCount() > 0) {
        <span class="tab-count">{{ unreadCount() }}</span>
      }
    </button>
  </div>

  <!-- \u2500\u2500 List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ul class="notif-list" role="list">
    @for (n of filteredNotifications(); track trackById($index, n)) {
      <li
        class="notif-item"
        [class.notif-item--unread]="!n.read"
        (click)="openNotification(n)"
        (keyup.enter)="openNotification(n)"
        tabindex="0"
        [attr.aria-label]="n.title + ' \u2014 ' + n.message"
      >
        <div class="notif-icon" [class]="'notif-icon--' + n.kind" aria-hidden="true">
          @switch (n.kind) {
            @case ('success') {
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z" fill="currentColor"/></svg>
            }
            @case ('warning') {
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/></svg>
            }
            @case ('error') {
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
            }
            @default {
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="currentColor"/></svg>
            }
          }
        </div>

        <div class="notif-body">
          <div class="notif-row">
            <h3 class="notif-title">{{ n.title }}</h3>
            <span class="notif-time">{{ formatRelative(n.createdAt) }}</span>
          </div>
          <p class="notif-msg">{{ n.message }}</p>
        </div>

        @if (!n.read) {
          <span class="notif-dot" aria-hidden="true"></span>
        }
      </li>
    } @empty {
      <li class="notif-empty">
        @if (activeFilter() === 'unread') {
          <app-empty-state
            kind="bell"
            [title]="'notifications.empty.unread.title' | transloco"
            [description]="'notifications.empty.unread.desc' | transloco"
          />
        } @else {
          <app-empty-state
            kind="bell"
            [title]="'notifications.empty.all.title' | transloco"
            [description]="'notifications.empty.all.desc' | transloco"
          />
        }
      </li>
    }
  </ul>
</div>
`, styles: ["/* src/features/notifications/notifications-page/notifications-page.css */\n.notifications-page {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 800px;\n  margin-inline: auto;\n  width: 100%;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron {\n  color: var(--ui-text-muted);\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.page-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.count-badge {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.btn-mark-all {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-mark-all:hover:not(:disabled) {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.btn-mark-all:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.btn-mark-all:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filter-tabs {\n  display: flex;\n  gap: 4px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.filter-tab {\n  background: transparent;\n  border: none;\n  padding: 10px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  border-block-end: 2px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-tab:hover {\n  color: var(--ui-text);\n}\n.filter-tab--active {\n  color: var(--brand-primary-500);\n  border-block-end-color: var(--brand-primary-500);\n}\n.filter-tab:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.tab-count {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  font-size: 11px;\n  padding: 1px 7px;\n  font-weight: 600;\n}\n.notif-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 10px;\n  cursor: pointer;\n  position: relative;\n  transition: background-color 120ms ease;\n}\n.notif-item:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.03));\n}\n.notif-item:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.notif-item--unread {\n  border-color: var(--brand-primary-500);\n}\n.notif-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  flex: none;\n  background: var(--ui-surface-hover, rgba(0,0,0,0.05));\n  color: var(--ui-text-muted);\n}\n.notif-icon--info {\n  background: rgba(59, 130, 246, 0.12);\n  color: rgb(37, 99, 235);\n}\n.notif-icon--success {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(22, 163, 74);\n}\n.notif-icon--warning {\n  background: rgba(234, 179, 8, 0.14);\n  color: rgb(202, 138, 4);\n}\n.notif-icon--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(220, 38, 38);\n}\n.notif-body {\n  flex: 1;\n  min-width: 0;\n}\n.notif-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.notif-title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.notif-time {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.notif-msg {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  line-height: 1.4;\n}\n.notif-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--brand-primary-500);\n  flex: none;\n  margin-block-start: 6px;\n}\n.notif-empty {\n  padding: 48px 16px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-surface);\n  border: 1px dashed var(--ui-border);\n  border-radius: 10px;\n}\n.notif-empty p {\n  margin: 0;\n}\n/*# sourceMappingURL=notifications-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsPageComponent, { className: "NotificationsPageComponent", filePath: "src/features/notifications/notifications-page/notifications-page.ts", lineNumber: 20 });
})();
export {
  NotificationsPageComponent
};
//# sourceMappingURL=chunk-NP4LCTPN.js.map
