import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/features/notifications/notifications.mock.ts
var MOCK_NOTIFICATIONS = [
  {
    id: "n-1",
    kind: "info",
    title: "New leave request",
    message: "Sarah Mohamed submitted a leave request for review.",
    createdAt: "2026-05-03T08:42:00Z",
    read: false,
    link: "/dashboard/requests"
  },
  {
    id: "n-2",
    kind: "success",
    title: "Salary paid",
    message: "Your salary for April 2026 has been paid.",
    createdAt: "2026-05-01T09:00:00Z",
    read: false,
    link: "/dashboard/salary"
  },
  {
    id: "n-3",
    kind: "warning",
    title: "Subscription expiring",
    message: "Your subscription expires in 7 days.",
    createdAt: "2026-04-28T13:12:00Z",
    read: true,
    link: "/dashboard/subscription"
  },
  {
    id: "n-4",
    kind: "info",
    title: "New contract draft",
    message: "A contract draft is awaiting your review.",
    createdAt: "2026-04-26T17:30:00Z",
    read: true,
    link: "/dashboard/contracts"
  },
  {
    id: "n-5",
    kind: "error",
    title: "Payment failed",
    message: "A scheduled payment could not be processed.",
    createdAt: "2026-04-22T10:15:00Z",
    read: true,
    link: "/dashboard/payments"
  }
];

// src/features/notifications/notifications.service.ts
var _NotificationsService = class _NotificationsService {
  constructor() {
    this._notifications = signal(structuredClone(MOCK_NOTIFICATIONS), ...ngDevMode ? [{ debugName: "_notifications" }] : []);
    this.notifications = this._notifications.asReadonly();
    this.unreadCount = computed(() => this._notifications().filter((n) => !n.read).length, ...ngDevMode ? [{ debugName: "unreadCount" }] : []);
  }
  /** Mark a single notification as read (immutable). */
  markAsRead(id) {
    this._notifications.update((list) => list.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  /** Mark every unread notification as read (immutable). */
  markAllAsRead() {
    this._notifications.update((list) => list.map((n) => n.read ? n : __spreadProps(__spreadValues({}, n), { read: true })));
  }
};
_NotificationsService.\u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsService)();
};
_NotificationsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
var NotificationsService = _NotificationsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationsService
};
//# sourceMappingURL=chunk-YKOGZMDC.js.map
