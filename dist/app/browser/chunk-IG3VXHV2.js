import {
  WithdrawService
} from "./chunk-VXEZP5JU.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
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
  DatePipe,
  NgClass
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/withdraw/admin-withdrawals/admin-withdrawals.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminWithdrawalsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "span", 10);
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
function AdminWithdrawalsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function AdminWithdrawalsComponent_Conditional_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.errorKey()));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "common.retry"), " ");
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.actionErrorKey()));
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon", 11);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "admin.withdrawals.emptyPending"));
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 11);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "admin.withdrawals.actions.approve"));
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 22)(15, "button", 23);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275listener("click", function AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Template_button_click_15_listener() {
      const entry_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.process(entry_r4, "approve"));
    });
    \u0275\u0275conditionalCreate(17, AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Conditional_17_Template, 1, 0, "span", 24)(18, AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Conditional_18_Template, 5, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 25);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275listener("click", function AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Template_button_click_19_listener() {
      const entry_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.process(entry_r4, "reject"));
    });
    \u0275\u0275elementStart(21, "mat-icon", 11);
    \u0275\u0275text(22, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.employeeName || entry_r4.fullName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.companyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.createdAt ? \u0275\u0275pipeBind2(9, 12, entry_r4.createdAt, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(entry_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, ctx_r1.statusLabel(entry_r4.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.processingId() !== null);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 17, "admin.withdrawals.actions.approve"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.processingId() === entry_r4.id ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.processingId() !== null);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 19, "admin.withdrawals.actions.reject"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, "admin.withdrawals.actions.reject"));
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 19);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, AdminWithdrawalsComponent_Conditional_26_Conditional_6_For_25_Template, 26, 23, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "admin.withdrawals.pendingTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "admin.withdrawals.columns.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "admin.withdrawals.columns.company"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "admin.withdrawals.columns.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, "admin.withdrawals.columns.requestDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "admin.withdrawals.columns.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 19, "admin.withdrawals.columns.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pending());
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon", 11);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "admin.withdrawals.emptyProcessed"));
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_12_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.employeeName || entry_r5.fullName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.companyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.createdAt ? \u0275\u0275pipeBind2(9, 6, entry_r5.createdAt, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(entry_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, ctx_r1.statusLabel(entry_r5.status)), " ");
  }
}
function AdminWithdrawalsComponent_Conditional_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 19);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, AdminWithdrawalsComponent_Conditional_26_Conditional_12_For_22_Template, 14, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "admin.withdrawals.processedTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "admin.withdrawals.columns.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "admin.withdrawals.columns.company"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "admin.withdrawals.columns.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "admin.withdrawals.columns.requestDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "admin.withdrawals.columns.status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.processed());
  }
}
function AdminWithdrawalsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminWithdrawalsComponent_Conditional_26_Conditional_0_Template, 6, 3, "div", 9);
    \u0275\u0275elementStart(1, "section", 13)(2, "h2", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AdminWithdrawalsComponent_Conditional_26_Conditional_5_Template, 6, 3, "div", 15)(6, AdminWithdrawalsComponent_Conditional_26_Conditional_6_Template, 26, 21, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 17)(8, "h2", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, AdminWithdrawalsComponent_Conditional_26_Conditional_11_Template, 6, 3, "div", 15)(12, AdminWithdrawalsComponent_Conditional_26_Conditional_12_Template, 23, 18, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.actionErrorKey() ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "admin.withdrawals.pendingTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pending().length === 0 ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "admin.withdrawals.processedTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.processed().length === 0 ? 11 : 12);
  }
}
var _AdminWithdrawalsComponent = class _AdminWithdrawalsComponent {
  constructor() {
    this.withdrawService = inject(WithdrawService);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.errorKey = signal("", ...ngDevMode ? [{ debugName: "errorKey" }] : []);
    this.pending = signal([], ...ngDevMode ? [{ debugName: "pending" }] : []);
    this.processed = signal([], ...ngDevMode ? [{ debugName: "processed" }] : []);
    this.pendingCount = signal(0, ...ngDevMode ? [{ debugName: "pendingCount" }] : []);
    this.processedCount = signal(0, ...ngDevMode ? [{ debugName: "processedCount" }] : []);
    this.processingId = signal(null, ...ngDevMode ? [{ debugName: "processingId" }] : []);
    this.actionErrorKey = signal("", ...ngDevMode ? [{ debugName: "actionErrorKey" }] : []);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    this.errorKey.set("");
    this.withdrawService.getAdminRequestsGrouped().subscribe({
      next: (res) => {
        this.pending.set(res.pending ?? []);
        this.processed.set([...res.processed ?? []].sort((a, b) => this.dateValue(b) - this.dateValue(a)));
        this.pendingCount.set(res.totalPendingCount ?? (res.pending?.length ?? 0));
        this.processedCount.set(res.totalProcessedCount ?? (res.processed?.length ?? 0));
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set("admin.withdrawals.errors.load");
        this.isLoading.set(false);
      }
    });
  }
  /** Approve or reject a pending request via PUT Withdraw/ProcessRequest/{id}. */
  process(entry, kind) {
    if (this.processingId() !== null)
      return;
    this.processingId.set(entry.id);
    this.actionErrorKey.set("");
    this.withdrawService.processRequest(entry.id, {
      status: kind === "approve" ? "approved" : "rejected"
    }).subscribe({
      next: () => {
        this.processingId.set(null);
        this.load();
      },
      error: () => {
        this.processingId.set(null);
        this.actionErrorKey.set("admin.withdrawals.errors.process");
      }
    });
  }
  retry() {
    this.load();
  }
  /** Maps a withdraw status to a badge modifier class suffix. */
  statusClass(status) {
    if (status === "approved")
      return "admin-wd__badge--approved";
    if (status === "rejected")
      return "admin-wd__badge--rejected";
    return "admin-wd__badge--pending";
  }
  /** i18n key for a withdraw status label. */
  statusLabel(status) {
    if (status === "approved")
      return "admin.withdrawals.status.approved";
    if (status === "rejected")
      return "admin.withdrawals.status.rejected";
    return "admin.withdrawals.status.pending";
  }
  dateValue(e) {
    const raw = e.processedAt || e.createdAt;
    const t = raw ? Date.parse(raw) : NaN;
    return Number.isNaN(t) ? 0 : t;
  }
};
_AdminWithdrawalsComponent.\u0275fac = function AdminWithdrawalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminWithdrawalsComponent)();
};
_AdminWithdrawalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminWithdrawalsComponent, selectors: [["app-admin-withdrawals"]], decls: 27, vars: 21, consts: [[1, "admin-wd"], [1, "admin-wd__header"], [1, "admin-wd__title"], [1, "admin-wd__subtitle"], ["role", "group", 1, "admin-wd__stats"], [1, "admin-wd__stat"], [1, "admin-wd__stat-value"], [1, "admin-wd__stat-label"], ["aria-busy", "true", "role", "status", 1, "admin-wd__state"], ["role", "alert", 1, "admin-wd__state", "admin-wd__state--error"], ["aria-hidden", "true", 1, "admin-wd__spinner"], ["aria-hidden", "true"], [1, "admin-wd__retry", 3, "click"], ["aria-labelledby", "admin-wd-pending-heading", 1, "admin-wd__section"], ["id", "admin-wd-pending-heading", 1, "admin-wd__section-title"], [1, "admin-wd__state", "admin-wd__state--empty"], [1, "admin-wd__table-wrap"], ["aria-labelledby", "admin-wd-processed-heading", 1, "admin-wd__section"], ["id", "admin-wd-processed-heading", 1, "admin-wd__section-title"], [1, "admin-wd__table"], [1, "admin-wd__cell"], [1, "admin-wd__badge", 3, "ngClass"], [1, "admin-wd__cell", "admin-wd__cell--actions"], [1, "admin-wd__btn", "admin-wd__btn--approve", 3, "click", "disabled"], ["aria-hidden", "true", 1, "admin-wd__spinner", "admin-wd__spinner--sm"], [1, "admin-wd__btn", "admin-wd__btn--reject", 3, "click", "disabled"]], template: function AdminWithdrawalsComponent_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementStart(12, "div", 5)(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 5)(19, "span", 6);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 7);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(24, AdminWithdrawalsComponent_Conditional_24_Template, 5, 3, "div", 8)(25, AdminWithdrawalsComponent_Conditional_25_Template, 10, 9, "div", 9)(26, AdminWithdrawalsComponent_Conditional_26_Template, 13, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 9, "admin.withdrawals.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "admin.withdrawals.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "admin.withdrawals.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 15, "admin.withdrawals.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.pendingCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "admin.withdrawals.pendingCount"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.processedCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, "admin.withdrawals.processedCount"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 24 : ctx.errorKey() ? 25 : 26);
  }
}, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, TranslocoModule, DatePipe, TranslocoPipe], styles: ["\n\n.admin-wd[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-wd__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.admin-wd__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.admin-wd__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.admin-wd__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.admin-wd__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 90px;\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n}\n.admin-wd__stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.admin-wd__stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  text-align: center;\n}\n.admin-wd__state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2.5rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.admin-wd__state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.admin-wd__retry[_ngcontent-%COMP%] {\n  margin-inline-start: 0.5rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.admin-wd__retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n.admin-wd__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.admin-wd__section-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-wd__table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.admin-wd__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.admin-wd__table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.admin-wd__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child)   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ui-border);\n}\n.admin-wd__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.admin-wd__cell[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.admin-wd__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.admin-wd__badge--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-wd__badge--approved[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.admin-wd__badge--rejected[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.admin-wd__cell--actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.admin-wd__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  min-width: 92px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    opacity 0.15s;\n}\n.admin-wd__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.admin-wd__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.admin-wd__btn--approve[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n  border-color: var(--functional-success-200);\n}\n.admin-wd__btn--approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--functional-success-100);\n}\n.admin-wd__btn--reject[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border-color: var(--functional-danger-200);\n}\n.admin-wd__btn--reject[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--functional-danger-100);\n}\n.admin-wd__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_admin-wd-spin 0.7s linear infinite;\n}\n.admin-wd__spinner--sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n}\n@keyframes _ngcontent-%COMP%_admin-wd-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .admin-wd__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .admin-wd__cell--actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=admin-withdrawals.css.map */"], changeDetection: 0 });
var AdminWithdrawalsComponent = _AdminWithdrawalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminWithdrawalsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-withdrawals", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="admin-wd" [attr.aria-label]="'admin.withdrawals.title' | transloco">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="admin-wd__header">
    <div>
      <h1 class="admin-wd__title">{{ 'admin.withdrawals.title' | transloco }}</h1>
      <p class="admin-wd__subtitle">{{ 'admin.withdrawals.subtitle' | transloco }}</p>
    </div>
    <div class="admin-wd__stats" role="group" [attr.aria-label]="'admin.withdrawals.title' | transloco">
      <div class="admin-wd__stat">
        <span class="admin-wd__stat-value">{{ pendingCount() }}</span>
        <span class="admin-wd__stat-label">{{ 'admin.withdrawals.pendingCount' | transloco }}</span>
      </div>
      <div class="admin-wd__stat">
        <span class="admin-wd__stat-value">{{ processedCount() }}</span>
        <span class="admin-wd__stat-label">{{ 'admin.withdrawals.processedCount' | transloco }}</span>
      </div>
    </div>
  </header>

  @if (isLoading()) {
    <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="admin-wd__state" aria-busy="true" role="status">
      <span class="admin-wd__spinner" aria-hidden="true"></span>
      <span>{{ 'common.loading' | transloco }}</span>
    </div>
  } @else if (errorKey()) {
    <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="admin-wd__state admin-wd__state--error" role="alert">
      <mat-icon aria-hidden="true">error_outline</mat-icon>
      <span>{{ errorKey() | transloco }}</span>
      <button class="admin-wd__retry" (click)="retry()" [attr.aria-label]="'common.retry' | transloco">
        {{ 'common.retry' | transloco }}
      </button>
    </div>
  } @else {

    <!-- \u2500\u2500 Row-level action error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (actionErrorKey()) {
      <div class="admin-wd__state admin-wd__state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ actionErrorKey() | transloco }}</span>
      </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         PENDING REQUESTS
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="admin-wd__section" aria-labelledby="admin-wd-pending-heading">
      <h2 class="admin-wd__section-title" id="admin-wd-pending-heading">
        {{ 'admin.withdrawals.pendingTitle' | transloco }}
      </h2>

      @if (pending().length === 0) {
        <div class="admin-wd__state admin-wd__state--empty">
          <mat-icon aria-hidden="true">inbox</mat-icon>
          <span>{{ 'admin.withdrawals.emptyPending' | transloco }}</span>
        </div>
      } @else {
        <div class="admin-wd__table-wrap">
          <table class="admin-wd__table" [attr.aria-label]="'admin.withdrawals.pendingTitle' | transloco">
            <thead>
              <tr>
                <th>{{ 'admin.withdrawals.columns.employee' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.company' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.amount' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.requestDate' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.status' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.actions' | transloco }}</th>
              </tr>
            </thead>
            <tbody>
              @for (entry of pending(); track entry.id) {
                <tr>
                  <td class="admin-wd__cell">{{ entry.employeeName || entry.fullName || '\u2014' }}</td>
                  <td class="admin-wd__cell">{{ entry.companyName || '\u2014' }}</td>
                  <td class="admin-wd__cell">{{ entry.amount }}</td>
                  <td class="admin-wd__cell">{{ entry.createdAt ? (entry.createdAt | date:'mediumDate') : '\u2014' }}</td>
                  <td class="admin-wd__cell">
                    <span class="admin-wd__badge" [ngClass]="statusClass(entry.status)">
                      {{ statusLabel(entry.status) | transloco }}
                    </span>
                  </td>
                  <td class="admin-wd__cell admin-wd__cell--actions">
                    <button
                      class="admin-wd__btn admin-wd__btn--approve"
                      (click)="process(entry, 'approve')"
                      [disabled]="processingId() !== null"
                      [attr.aria-label]="'admin.withdrawals.actions.approve' | transloco">
                      @if (processingId() === entry.id) {
                        <span class="admin-wd__spinner admin-wd__spinner--sm" aria-hidden="true"></span>
                      } @else {
                        <mat-icon aria-hidden="true">check_circle</mat-icon>
                        <span>{{ 'admin.withdrawals.actions.approve' | transloco }}</span>
                      }
                    </button>
                    <button
                      class="admin-wd__btn admin-wd__btn--reject"
                      (click)="process(entry, 'reject')"
                      [disabled]="processingId() !== null"
                      [attr.aria-label]="'admin.withdrawals.actions.reject' | transloco">
                      <mat-icon aria-hidden="true">cancel</mat-icon>
                      <span>{{ 'admin.withdrawals.actions.reject' | transloco }}</span>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         PROCESSED REQUESTS (read-only history, latest first)
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="admin-wd__section" aria-labelledby="admin-wd-processed-heading">
      <h2 class="admin-wd__section-title" id="admin-wd-processed-heading">
        {{ 'admin.withdrawals.processedTitle' | transloco }}
      </h2>

      @if (processed().length === 0) {
        <div class="admin-wd__state admin-wd__state--empty">
          <mat-icon aria-hidden="true">history</mat-icon>
          <span>{{ 'admin.withdrawals.emptyProcessed' | transloco }}</span>
        </div>
      } @else {
        <div class="admin-wd__table-wrap">
          <table class="admin-wd__table" [attr.aria-label]="'admin.withdrawals.processedTitle' | transloco">
            <thead>
              <tr>
                <th>{{ 'admin.withdrawals.columns.employee' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.company' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.amount' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.requestDate' | transloco }}</th>
                <th>{{ 'admin.withdrawals.columns.status' | transloco }}</th>
              </tr>
            </thead>
            <tbody>
              @for (entry of processed(); track entry.id) {
                <tr>
                  <td class="admin-wd__cell">{{ entry.employeeName || entry.fullName || '\u2014' }}</td>
                  <td class="admin-wd__cell">{{ entry.companyName || '\u2014' }}</td>
                  <td class="admin-wd__cell">{{ entry.amount }}</td>
                  <td class="admin-wd__cell">{{ entry.createdAt ? (entry.createdAt | date:'mediumDate') : '\u2014' }}</td>
                  <td class="admin-wd__cell">
                    <span class="admin-wd__badge" [ngClass]="statusClass(entry.status)">
                      {{ statusLabel(entry.status) | transloco }}
                    </span>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>

  }

</div>
`, styles: ["/* src/features/withdraw/admin-withdrawals/admin-withdrawals.css */\n.admin-wd {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-wd__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.admin-wd__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 0.25rem;\n}\n.admin-wd__subtitle {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.admin-wd__stats {\n  display: flex;\n  gap: 1rem;\n}\n.admin-wd__stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 90px;\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-md, 8px);\n  background: var(--ui-bg-surface);\n}\n.admin-wd__stat-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--ui-text-primary);\n}\n.admin-wd__stat-label {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  text-align: center;\n}\n.admin-wd__state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2.5rem;\n  border-radius: var(--radius-lg, 12px);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n}\n.admin-wd__state--error {\n  color: var(--functional-danger-600);\n  background: var(--functional-danger-50);\n}\n.admin-wd__retry {\n  margin-inline-start: 0.5rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.admin-wd__retry:hover {\n  background: var(--functional-danger-100);\n}\n.admin-wd__section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.admin-wd__section-title {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin: 0;\n}\n.admin-wd__table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-lg, 12px);\n  border: 1px solid var(--ui-border);\n}\n.admin-wd__table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.admin-wd__table thead th {\n  padding: 0.875rem 1rem;\n  text-align: start;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-bottom: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.admin-wd__table tbody tr:not(:last-child) td {\n  border-bottom: 1px solid var(--ui-border);\n}\n.admin-wd__table tbody tr:hover {\n  background: var(--ui-bg-subtle);\n}\n.admin-wd__cell {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.admin-wd__badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.admin-wd__badge--pending {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.admin-wd__badge--approved {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.admin-wd__badge--rejected {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.admin-wd__cell--actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.admin-wd__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  min-width: 92px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    opacity 0.15s;\n}\n.admin-wd__btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.admin-wd__btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.admin-wd__btn--approve {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n  border-color: var(--functional-success-200);\n}\n.admin-wd__btn--approve:hover:not(:disabled) {\n  background: var(--functional-success-100);\n}\n.admin-wd__btn--reject {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border-color: var(--functional-danger-200);\n}\n.admin-wd__btn--reject:hover:not(:disabled) {\n  background: var(--functional-danger-100);\n}\n.admin-wd__spinner {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: admin-wd-spin 0.7s linear infinite;\n}\n.admin-wd__spinner--sm {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n}\n@keyframes admin-wd-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .admin-wd__header {\n    flex-direction: column;\n  }\n  .admin-wd__cell--actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=admin-withdrawals.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminWithdrawalsComponent, { className: "AdminWithdrawalsComponent", filePath: "src/features/withdraw/admin-withdrawals/admin-withdrawals.ts", lineNumber: 22 });
})();
export {
  AdminWithdrawalsComponent
};
//# sourceMappingURL=chunk-IG3VXHV2.js.map
