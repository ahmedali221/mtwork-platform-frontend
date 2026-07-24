import {
  BaseChartDirective
} from "./chunk-R2LENQHC.js";
import {
  ContractService
} from "./chunk-LWI6AAJD.js";
import {
  MeetingsService
} from "./chunk-USQJLBKJ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  ProjectService
} from "./chunk-WT3XXVTX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  Chart,
  registerables
} from "./chunk-5RFBFEXW.js";
import "./chunk-5LLUWZOB.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-APK5HPN3.js";
import {
  environment
} from "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import {
  HttpClient
} from "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
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
  ɵɵdefineInjectable,
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

// src/services/report.service.ts
var _ReportService = class _ReportService {
  constructor() {
    this.http = inject(HttpClient);
  }
  generatePdf(contractId) {
    return this.http.get(`${environment.baseUrl}Report/generate-pdf`, {
      params: { ContractId: contractId.toString() },
      responseType: "blob"
    });
  }
  downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }
};
_ReportService.\u0275fac = function ReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportService)();
};
_ReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
var ReportService = _ReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/features/dashboard/reports/report-list.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReportListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function ReportListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 20);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.meetingsError()));
  }
}
function ReportListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 20);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "reports.meetings.noMeetings"));
  }
}
function ReportListComponent_Conditional_19_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "reports.meetings.statusNow"), " ");
  }
}
function ReportListComponent_Conditional_19_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "reports.meetings.statusPast"), " ");
  }
}
function ReportListComponent_Conditional_19_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "reports.meetings.statusSoon"), " ");
  }
}
function ReportListComponent_Conditional_19_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26)(1, "mat-icon", 28);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", meeting_r2.date, " ");
  }
}
function ReportListComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, "video_call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275conditionalCreate(5, ReportListComponent_Conditional_19_For_2_Conditional_5_Template, 2, 3)(6, ReportListComponent_Conditional_19_For_2_Conditional_6_Template, 2, 3)(7, ReportListComponent_Conditional_19_For_2_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ReportListComponent_Conditional_19_For_2_Conditional_10_Template, 4, 1, "p", 26);
    \u0275\u0275elementStart(11, "a", 27);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const meeting_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275classProp("rp-meeting-card__status--past", meeting_r2.status === "past")("rp-meeting-card__status--now", meeting_r2.status === "now");
    \u0275\u0275advance();
    \u0275\u0275conditional(meeting_r2.status === "now" ? 5 : meeting_r2.status === "past" ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(meeting_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(meeting_r2.date ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", meeting_r2.link || "#", \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 10, "reports.meetings.open"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "reports.meetings.open"), " ");
  }
}
function ReportListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ReportListComponent_Conditional_19_For_2_Template, 15, 14, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.meetings());
  }
}
function ReportListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function ReportListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 20);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.projectsError()));
  }
}
function ReportListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 29)(2, "div", 30)(3, "div")(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 33);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "option");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 34)(17, "div", 35);
    \u0275\u0275element(18, "canvas", 36);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 37);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "span", 39);
    \u0275\u0275element(24, "span", 40);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 39);
    \u0275\u0275element(28, "span", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 39);
    \u0275\u0275element(32, "span", 42);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 29)(36, "div", 30)(37, "div")(38, "p", 31);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 32);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "select", 33);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementStart(47, "option");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 43);
    \u0275\u0275element(51, "canvas", 44);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "reports.projects.statusOverview.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 22, "reports.projects.statusOverview.sub"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(11, 24, "reports.periodFilter"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 26, "reports.periodFilter"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 28, "reports.projects.statusOverview.filter"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r0.projectStatusData)("options", ctx_r0.projectStatusOptions);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 30, "reports.projects.statusOverview.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donutCenterLabel(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 32, "reports.projects.statusOverview.completed"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 34, "reports.projects.statusOverview.inProgress"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 36, "reports.projects.statusOverview.notStarted"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 38, "reports.projects.byManager.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 40, "reports.projects.byManager.sub"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(45, 42, "reports.periodFilter"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 44, "reports.periodFilter"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 46, "reports.projects.byManager.filter"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r0.projectsByManagerData)("options", ctx_r0.projectsByManagerOptions);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 48, "reports.projects.byManager.title"));
  }
}
function ReportListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function ReportListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 20);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.contractsError()));
  }
}
function ReportListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 20);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "reports.noContracts"));
  }
}
function ReportListComponent_Conditional_48_For_19_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 53);
  }
}
function ReportListComponent_Conditional_48_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function ReportListComponent_Conditional_48_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 49)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 52);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function ReportListComponent_Conditional_48_For_19_Template_button_click_11_listener() {
      const contract_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadPdf(contract_r4.id));
    });
    \u0275\u0275conditionalCreate(13, ReportListComponent_Conditional_48_For_19_Conditional_13_Template, 1, 0, "mat-spinner", 53)(14, ReportListComponent_Conditional_48_For_19_Conditional_14_Template, 2, 0, "mat-icon", 20);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const contract_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", contract_r4.contractTitle || "Contract #" + contract_r4.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (contract_r4.empoleeOrContractor == null ? null : contract_r4.empoleeOrContractor.name) || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", contract_r4.status ? contract_r4.status.toLowerCase() : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contract_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDownloading(contract_r4.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 8, "reports.downloadBtn") + " " + (contract_r4.contractTitle || contract_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDownloading(contract_r4.id) ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDownloading(contract_r4.id) ? \u0275\u0275pipeBind1(17, 10, "reports.downloading") : \u0275\u0275pipeBind1(18, 12, "reports.downloadBtn"), " ");
  }
}
function ReportListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "table", 45)(3, "thead")(4, "tr")(5, "th", 46);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ReportListComponent_Conditional_48_For_19_Template, 19, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "reports.contracts.heading"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "reports.columns.contract"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "reports.columns.contractor"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "reports.columns.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "reports.columns.action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.contracts());
  }
}
Chart.register(...registerables);
var COMPLETED_STATUSES = ["done", "completed"];
var IN_PROGRESS_STATUSES = ["in-progress", "pending"];
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
var _ReportListComponent = class _ReportListComponent {
  constructor() {
    this.meetingsService = inject(MeetingsService);
    this.projectService = inject(ProjectService);
    this.contractService = inject(ContractService);
    this.reportService = inject(ReportService);
    this.meetingsLoading = signal(true, ...ngDevMode ? [{ debugName: "meetingsLoading" }] : []);
    this.meetingsError = signal(null, ...ngDevMode ? [{ debugName: "meetingsError" }] : []);
    this.meetings = signal([], ...ngDevMode ? [{ debugName: "meetings" }] : []);
    this.projectsLoading = signal(true, ...ngDevMode ? [{ debugName: "projectsLoading" }] : []);
    this.projectsError = signal(null, ...ngDevMode ? [{ debugName: "projectsError" }] : []);
    this.donutCenterLabel = signal("0%", ...ngDevMode ? [{ debugName: "donutCenterLabel" }] : []);
    this.projectStatusData = {
      labels: [],
      datasets: [{ data: [], backgroundColor: [], borderWidth: 0, hoverOffset: 4 }]
    };
    this.projectStatusOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "72%",
      plugins: { legend: { display: false }, tooltip: { enabled: true } }
    };
    this.projectsByManagerData = {
      labels: [],
      datasets: [{ data: [], backgroundColor: "", borderRadius: 4, barThickness: 14 }]
    };
    this.projectsByManagerOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: "", font: { size: 11 } } },
        y: { grid: { display: false }, border: { display: false }, ticks: { color: "", font: { size: 12 } } }
      }
    };
    this.contractsLoading = signal(true, ...ngDevMode ? [{ debugName: "contractsLoading" }] : []);
    this.contractsError = signal(null, ...ngDevMode ? [{ debugName: "contractsError" }] : []);
    this.contracts = signal([], ...ngDevMode ? [{ debugName: "contracts" }] : []);
    this.downloading = signal({}, ...ngDevMode ? [{ debugName: "downloading" }] : []);
  }
  // ── Lifecycle ────────────────────────────────────────────────────────
  ngOnInit() {
    forkJoin({
      meetings: this.meetingsService.getMeetings().pipe(catchError(() => of([]))),
      projects: this.projectService.getProjects().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ meetings, projects }) => {
        this.processMeetings(meetings);
        this.processProjects(projects);
      },
      error: () => {
        this.meetingsError.set("reports.errors.meetings");
        this.projectsError.set("reports.errors.projects");
        this.meetingsLoading.set(false);
        this.projectsLoading.set(false);
      }
    });
    this.contractService.getContracts(1, 100).subscribe({
      next: (res) => {
        this.contracts.set(res.data);
        this.contractsLoading.set(false);
      },
      error: () => {
        this.contractsError.set("reports.errors.contracts");
        this.contractsLoading.set(false);
      }
    });
  }
  // ── Private helpers ──────────────────────────────────────────────────
  processMeetings(raw) {
    this.meetings.set(raw.slice(0, 4).map((m) => ({
      id: m.id,
      title: m.title || "Meeting",
      date: m.startTime ? new Date(m.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "",
      status: this.getMeetingStatus(m),
      link: m.meetingLink || ""
    })));
    this.meetingsLoading.set(false);
  }
  processProjects(projects) {
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;
    const managerMap = /* @__PURE__ */ new Map();
    for (const p of projects) {
      if (COMPLETED_STATUSES.includes(p.status))
        completed++;
      else if (IN_PROGRESS_STATUSES.includes(p.status))
        inProgress++;
      else
        notStarted++;
      const mgr = p.managerId ?? "Unassigned";
      managerMap.set(mgr, (managerMap.get(mgr) ?? 0) + 1);
    }
    const total = projects.length || 1;
    this.donutCenterLabel.set(`${Math.round(completed / total * 100)}%`);
    const successColor = getCSSVar("--functional-success-500");
    const warningColor = getCSSVar("--functional-warning-500");
    const neutralColor = getCSSVar("--ui-border");
    const barColor = getCSSVar("--brand-tertiary-500");
    const tickMuted = getCSSVar("--ui-text-muted");
    const tickMain = getCSSVar("--ui-text-main");
    this.projectStatusData = {
      labels: [],
      datasets: [{
        data: [completed, inProgress, notStarted],
        backgroundColor: [successColor, warningColor, neutralColor],
        borderWidth: 0,
        hoverOffset: 4
      }]
    };
    const entries = [...managerMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
    this.projectsByManagerData = {
      labels: entries.map(([id]) => id.length > 14 ? id.slice(0, 14) + "\u2026" : id),
      datasets: [{
        data: entries.map(([, count]) => count),
        backgroundColor: barColor,
        borderRadius: 4,
        barThickness: 14
      }]
    };
    this.projectsByManagerOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickMuted, font: { size: 11 } }
        },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickMain, font: { size: 12 } }
        }
      }
    };
    this.projectsLoading.set(false);
  }
  getMeetingStatus(m) {
    const now = /* @__PURE__ */ new Date();
    const start = m.startTime ? new Date(m.startTime) : null;
    const end = m.endTime ? new Date(m.endTime) : null;
    if (!start)
      return "upcoming";
    if (end && now >= start && now <= end)
      return "now";
    if (now > (end ?? start))
      return "past";
    return "upcoming";
  }
  // ── PDF download ─────────────────────────────────────────────────────
  downloadPdf(contractId) {
    const numId = Number(contractId);
    this.downloading.update((d) => __spreadProps(__spreadValues({}, d), { [contractId]: true }));
    this.reportService.generatePdf(numId).subscribe({
      next: (blob) => {
        this.reportService.downloadBlob(blob, `contract-${numId}.pdf`);
        this.downloading.update((d) => __spreadProps(__spreadValues({}, d), { [contractId]: false }));
      },
      error: () => {
        this.downloading.update((d) => __spreadProps(__spreadValues({}, d), { [contractId]: false }));
      }
    });
  }
  isDownloading(contractId) {
    return !!this.downloading()[contractId];
  }
};
_ReportListComponent.\u0275fac = function ReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportListComponent)();
};
_ReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportListComponent, selectors: [["app-report-list"]], decls: 49, vars: 35, consts: [[1, "rp-page"], ["aria-labelledby", "rp-meetings-heading", 1, "rp-section"], [1, "rp-section__header"], [1, "rp-section__title-group"], ["aria-hidden", "true", 1, "rp-section__icon"], ["id", "rp-meetings-heading", 1, "rp-section__title"], ["routerLink", "/dashboard/meetings", 1, "rp-section__view-all"], ["aria-hidden", "true", 1, "rp-section__arrow"], ["role", "status", "aria-live", "polite", 1, "rp-state"], ["role", "alert", 1, "rp-state", "rp-state--error"], ["role", "status", 1, "rp-state"], [1, "rp-meetings-grid"], ["aria-labelledby", "rp-projects-heading", 1, "rp-section"], ["id", "rp-projects-heading", 1, "rp-section__title"], ["routerLink", "/dashboard/projects", 1, "rp-section__view-all"], [1, "rp-charts-row"], ["aria-labelledby", "rp-contracts-heading", 1, "rp-section"], ["id", "rp-contracts-heading", 1, "rp-section__title"], ["role", "region", 1, "rp-table-wrapper"], ["diameter", "36"], ["aria-hidden", "true"], [1, "rp-meeting-card"], [1, "rp-meeting-card__top"], ["aria-hidden", "true", 1, "rp-meeting-card__icon"], [1, "rp-meeting-card__status"], [1, "rp-meeting-card__title"], [1, "rp-meeting-card__time"], ["rel", "noopener noreferrer", "target", "_blank", 1, "rp-meeting-card__open", 3, "href"], ["aria-hidden", "true", 1, "rp-meeting-card__time-icon"], [1, "rp-chart-card"], [1, "rp-chart-card__header"], [1, "rp-chart-card__title"], [1, "rp-chart-card__sub"], [1, "rp-select", 3, "title"], [1, "rp-donut-wrap"], [1, "rp-chart-canvas-wrap"], ["baseChart", "", "type", "doughnut", "role", "img", 3, "data", "options"], ["aria-hidden", "true", 1, "rp-donut-center"], ["aria-hidden", "true", 1, "rp-legend"], [1, "rp-legend__item"], [1, "rp-legend__dot", "rp-legend__dot--success"], [1, "rp-legend__dot", "rp-legend__dot--warning"], [1, "rp-legend__dot", "rp-legend__dot--neutral"], [1, "rp-chart-canvas-wrap", "rp-chart-canvas-wrap--bar"], ["baseChart", "", "type", "bar", "role", "img", 3, "data", "options"], ["aria-labelledby", "rp-contracts-heading", 1, "rp-table"], ["scope", "col"], ["scope", "col", 1, "rp-col-hide-mobile"], [1, "rp-contract-title"], [1, "rp-col-hide-mobile"], [1, "rp-contractor-name"], [1, "rp-status-badge"], ["mat-stroked-button", "", "color", "primary", 1, "rp-download-btn", 3, "click", "disabled"], ["diameter", "18"]], template: function ReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "mat-icon", 4);
    \u0275\u0275text(6, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 6);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementStart(14, "mat-icon", 7);
    \u0275\u0275text(15, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(16, ReportListComponent_Conditional_16_Template, 2, 0, "div", 8);
    \u0275\u0275conditionalCreate(17, ReportListComponent_Conditional_17_Template, 6, 3, "div", 9);
    \u0275\u0275conditionalCreate(18, ReportListComponent_Conditional_18_Template, 6, 3, "div", 10);
    \u0275\u0275conditionalCreate(19, ReportListComponent_Conditional_19_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "section", 12)(21, "div", 2)(22, "div", 3)(23, "mat-icon", 4);
    \u0275\u0275text(24, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h2", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 14);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementStart(32, "mat-icon", 7);
    \u0275\u0275text(33, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, ReportListComponent_Conditional_34_Template, 2, 0, "div", 8);
    \u0275\u0275conditionalCreate(35, ReportListComponent_Conditional_35_Template, 6, 3, "div", 9);
    \u0275\u0275conditionalCreate(36, ReportListComponent_Conditional_36_Template, 53, 50, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "section", 16)(38, "div", 2)(39, "div", 3)(40, "mat-icon", 4);
    \u0275\u0275text(41, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h2", 17);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, ReportListComponent_Conditional_45_Template, 2, 0, "div", 8);
    \u0275\u0275conditionalCreate(46, ReportListComponent_Conditional_46_Template, 6, 3, "div", 9);
    \u0275\u0275conditionalCreate(47, ReportListComponent_Conditional_47_Template, 6, 3, "div", 10);
    \u0275\u0275conditionalCreate(48, ReportListComponent_Conditional_48_Template, 20, 15, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 19, "reports.title"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 21, "reports.meetings.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 23, "reports.meetings.viewAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 25, "reports.meetings.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.meetingsLoading() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.meetingsLoading() && ctx.meetingsError() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.meetingsLoading() && !ctx.meetingsError() && ctx.meetings().length === 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.meetingsLoading() && !ctx.meetingsError() && ctx.meetings().length > 0 ? 19 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 27, "reports.projects.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 29, "reports.projects.seeAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 31, "reports.projects.seeAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.projectsLoading() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.projectsLoading() && ctx.projectsError() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.projectsLoading() && !ctx.projectsError() ? 36 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 33, "reports.contracts.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.contractsLoading() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.contractsLoading() && ctx.contractsError() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.contractsLoading() && !ctx.contractsError() && ctx.contracts().length === 0 ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.contractsLoading() && !ctx.contractsError() && ctx.contracts().length > 0 ? 48 : -1);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatButton,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  BaseChartDirective,
  TranslocoPipe
], styles: ["\n\n.rp-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.rp-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.rp-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.rp-section__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.rp-section__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.rp-section__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.rp-section__view-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  transition: background 0.2s;\n}\n.rp-section__view-all[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.rp-section__view-all[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.rp-section__arrow[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rp-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: var(--ui-text-muted);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.rp-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--ui-border);\n}\n.rp-state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n}\n.rp-state--error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n}\n.rp-meetings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.rp-meeting-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start-width: 3px;\n  border-inline-start-color: var(--brand-primary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.rp-meeting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.rp-meeting-card[_ngcontent-%COMP%]:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.rp-meeting-card[_ngcontent-%COMP%]:nth-child(3) {\n  border-inline-start-color: var(--brand-secondary-500);\n}\n.rp-meeting-card[_ngcontent-%COMP%]:nth-child(4) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.rp-meeting-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rp-meeting-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-400);\n}\n.rp-meeting-card__status[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.rp-meeting-card__status--past[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.rp-meeting-card__status--now[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.rp-meeting-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.rp-meeting-card__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.rp-meeting-card__time-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.rp-meeting-card__open[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-block-start: 0.25rem;\n  padding: 0.3rem 1rem;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n  transition: background 0.2s;\n}\n.rp-meeting-card__open[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.rp-meeting-card__open[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.rp-charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.rp-chart-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rp-chart-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rp-chart-card__title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.rp-chart-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.rp-select[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  outline: none;\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.rp-select[_ngcontent-%COMP%]:focus-visible {\n  border-color: var(--brand-primary-400);\n  box-shadow: 0 0 0 2px var(--brand-primary-100);\n}\n.rp-donut-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.rp-chart-canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 180px;\n}\n.rp-chart-canvas-wrap--bar[_ngcontent-%COMP%] {\n  height: 220px;\n}\n.rp-donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  pointer-events: none;\n}\n.rp-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.rp-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  color: var(--ui-text-muted);\n}\n.rp-legend__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--ui-border);\n}\n.rp-legend__dot--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.rp-legend__dot--warning[_ngcontent-%COMP%] {\n  background: var(--functional-warning-500);\n}\n.rp-legend__dot--neutral[_ngcontent-%COMP%] {\n  background: var(--ui-border);\n}\n.rp-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n}\n.rp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.rp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ui-bg);\n  color: var(--ui-text-muted);\n  font-weight: 600;\n  text-align: start;\n  padding: 0.75rem 1rem;\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.rp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.rp-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-block-end: none;\n}\n.rp-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n}\n.rp-contract-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.rp-contractor-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.rp-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--ui-border);\n  color: var(--ui-text-muted);\n  text-transform: capitalize;\n}\n.rp-status-badge[data-status=active][_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.rp-status-badge[data-status=terminated][_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.rp-status-badge[data-status=draft][_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-800);\n}\n.rp-download-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  white-space: nowrap;\n}\n.rp-download-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n@media (max-width: 1024px) {\n  .rp-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .rp-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .rp-page[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n    padding-block: 1rem;\n  }\n  .rp-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rp-col-hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=report-list.css.map */"] });
var ReportListComponent = _ReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportListComponent, [{
    type: Component,
    args: [{ selector: "app-report-list", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      BaseChartDirective
    ], template: `<div class="rp-page" [attr.aria-label]="'reports.title' | transloco">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SECTION 1 \u2014 UPCOMING MEETINGS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="rp-section" aria-labelledby="rp-meetings-heading">
    <div class="rp-section__header">
      <div class="rp-section__title-group">
        <mat-icon class="rp-section__icon" aria-hidden="true">videocam</mat-icon>
        <h2 class="rp-section__title" id="rp-meetings-heading">
          {{ 'reports.meetings.heading' | transloco }}
        </h2>
      </div>
      <a
        routerLink="/dashboard/meetings"
        class="rp-section__view-all"
        [attr.aria-label]="'reports.meetings.viewAll' | transloco"
      >
        {{ 'reports.meetings.viewAll' | transloco }}
        <mat-icon class="rp-section__arrow" aria-hidden="true">chevron_right</mat-icon>
      </a>
    </div>

    @if (meetingsLoading()) {
      <div class="rp-state" role="status" aria-live="polite">
        <mat-spinner diameter="36"></mat-spinner>
      </div>
    }

    @if (!meetingsLoading() && meetingsError()) {
      <div class="rp-state rp-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ meetingsError()! | transloco }}</span>
      </div>
    }

    @if (!meetingsLoading() && !meetingsError() && meetings().length === 0) {
      <div class="rp-state" role="status">
        <mat-icon aria-hidden="true">event_busy</mat-icon>
        <span>{{ 'reports.meetings.noMeetings' | transloco }}</span>
      </div>
    }

    @if (!meetingsLoading() && !meetingsError() && meetings().length > 0) {
      <div class="rp-meetings-grid">
        @for (meeting of meetings(); track meeting.id) {
          <div class="rp-meeting-card">
            <div class="rp-meeting-card__top">
              <mat-icon class="rp-meeting-card__icon" aria-hidden="true">video_call</mat-icon>
              <span
                class="rp-meeting-card__status"
                [class.rp-meeting-card__status--past]="meeting.status === 'past'"
                [class.rp-meeting-card__status--now]="meeting.status === 'now'"
              >
                @if (meeting.status === 'now') {
                  {{ 'reports.meetings.statusNow' | transloco }}
                } @else if (meeting.status === 'past') {
                  {{ 'reports.meetings.statusPast' | transloco }}
                } @else {
                  {{ 'reports.meetings.statusSoon' | transloco }}
                }
              </span>
            </div>
            <p class="rp-meeting-card__title">{{ meeting.title }}</p>
            @if (meeting.date) {
              <p class="rp-meeting-card__time">
                <mat-icon class="rp-meeting-card__time-icon" aria-hidden="true">schedule</mat-icon>
                {{ meeting.date }}
              </p>
            }
            <a
              [href]="meeting.link || '#'"
              class="rp-meeting-card__open"
              [attr.aria-label]="'reports.meetings.open' | transloco"
              rel="noopener noreferrer"
              target="_blank"
            >
              {{ 'reports.meetings.open' | transloco }}
            </a>
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SECTION 2 \u2014 PROJECTS ANALYTICS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="rp-section" aria-labelledby="rp-projects-heading">
    <div class="rp-section__header">
      <div class="rp-section__title-group">
        <mat-icon class="rp-section__icon" aria-hidden="true">folder</mat-icon>
        <h2 class="rp-section__title" id="rp-projects-heading">
          {{ 'reports.projects.heading' | transloco }}
        </h2>
      </div>
      <a
        routerLink="/dashboard/projects"
        class="rp-section__view-all"
        [attr.aria-label]="'reports.projects.seeAll' | transloco"
      >
        {{ 'reports.projects.seeAll' | transloco }}
        <mat-icon class="rp-section__arrow" aria-hidden="true">chevron_right</mat-icon>
      </a>
    </div>

    @if (projectsLoading()) {
      <div class="rp-state" role="status" aria-live="polite">
        <mat-spinner diameter="36"></mat-spinner>
      </div>
    }

    @if (!projectsLoading() && projectsError()) {
      <div class="rp-state rp-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ projectsError()! | transloco }}</span>
      </div>
    }

    <!-- Charts render only after data is ready (prevents null-canvas issue) -->
    @if (!projectsLoading() && !projectsError()) {
      <div class="rp-charts-row">

        <!-- Left: Project Status Doughnut \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="rp-chart-card">
          <div class="rp-chart-card__header">
            <div>
              <p class="rp-chart-card__title">
                {{ 'reports.projects.statusOverview.title' | transloco }}
              </p>
              <p class="rp-chart-card__sub">
                {{ 'reports.projects.statusOverview.sub' | transloco }}
              </p>
            </div>
            <select
              class="rp-select"
              [attr.aria-label]="'reports.periodFilter' | transloco"
              [title]="'reports.periodFilter' | transloco"
            >
              <option>{{ 'reports.projects.statusOverview.filter' | transloco }}</option>
            </select>
          </div>

          <div class="rp-donut-wrap">
            <div class="rp-chart-canvas-wrap">
              <canvas
                baseChart
                [data]="projectStatusData"
                [options]="projectStatusOptions"
                type="doughnut"
                [attr.aria-label]="'reports.projects.statusOverview.title' | transloco"
                role="img"
              ></canvas>
            </div>
            <div class="rp-donut-center" aria-hidden="true">
              {{ donutCenterLabel() }}
            </div>
          </div>

          <div class="rp-legend" aria-hidden="true">
            <span class="rp-legend__item">
              <span class="rp-legend__dot rp-legend__dot--success"></span>
              {{ 'reports.projects.statusOverview.completed' | transloco }}
            </span>
            <span class="rp-legend__item">
              <span class="rp-legend__dot rp-legend__dot--warning"></span>
              {{ 'reports.projects.statusOverview.inProgress' | transloco }}
            </span>
            <span class="rp-legend__item">
              <span class="rp-legend__dot rp-legend__dot--neutral"></span>
              {{ 'reports.projects.statusOverview.notStarted' | transloco }}
            </span>
          </div>
        </div>

        <!-- Right: Projects by Manager Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="rp-chart-card">
          <div class="rp-chart-card__header">
            <div>
              <p class="rp-chart-card__title">
                {{ 'reports.projects.byManager.title' | transloco }}
              </p>
              <p class="rp-chart-card__sub">
                {{ 'reports.projects.byManager.sub' | transloco }}
              </p>
            </div>
            <select
              class="rp-select"
              [attr.aria-label]="'reports.periodFilter' | transloco"
              [title]="'reports.periodFilter' | transloco"
            >
              <option>{{ 'reports.projects.byManager.filter' | transloco }}</option>
            </select>
          </div>
          <div class="rp-chart-canvas-wrap rp-chart-canvas-wrap--bar">
            <canvas
              baseChart
              [data]="projectsByManagerData"
              [options]="projectsByManagerOptions"
              type="bar"
              [attr.aria-label]="'reports.projects.byManager.title' | transloco"
              role="img"
            ></canvas>
          </div>
        </div>

      </div>
    }
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SECTION 3 \u2014 CONTRACT PDF REPORTS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="rp-section" aria-labelledby="rp-contracts-heading">
    <div class="rp-section__header">
      <div class="rp-section__title-group">
        <mat-icon class="rp-section__icon" aria-hidden="true">description</mat-icon>
        <h2 class="rp-section__title" id="rp-contracts-heading">
          {{ 'reports.contracts.heading' | transloco }}
        </h2>
      </div>
    </div>

    @if (contractsLoading()) {
      <div class="rp-state" role="status" aria-live="polite">
        <mat-spinner diameter="36"></mat-spinner>
      </div>
    }

    @if (!contractsLoading() && contractsError()) {
      <div class="rp-state rp-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ contractsError()! | transloco }}</span>
      </div>
    }

    @if (!contractsLoading() && !contractsError() && contracts().length === 0) {
      <div class="rp-state" role="status">
        <mat-icon aria-hidden="true">description</mat-icon>
        <span>{{ 'reports.noContracts' | transloco }}</span>
      </div>
    }

    @if (!contractsLoading() && !contractsError() && contracts().length > 0) {
      <div class="rp-table-wrapper" role="region"
           [attr.aria-label]="'reports.contracts.heading' | transloco">
        <table class="rp-table" aria-labelledby="rp-contracts-heading">
          <thead>
            <tr>
              <th scope="col">{{ 'reports.columns.contract'   | transloco }}</th>
              <th scope="col" class="rp-col-hide-mobile">{{ 'reports.columns.contractor' | transloco }}</th>
              <th scope="col">{{ 'reports.columns.status'     | transloco }}</th>
              <th scope="col">{{ 'reports.columns.action'     | transloco }}</th>
            </tr>
          </thead>
          <tbody>
            @for (contract of contracts(); track contract.id) {
              <tr>
                <td>
                  <span class="rp-contract-title">
                    {{ contract.contractTitle || ('Contract #' + contract.id) }}
                  </span>
                </td>
                <td class="rp-col-hide-mobile">
                  <span class="rp-contractor-name">
                    {{ contract.empoleeOrContractor?.name || '\u2014' }}
                  </span>
                </td>
                <td>
                  <span class="rp-status-badge"
                        [attr.data-status]="contract.status ? contract.status.toLowerCase() : ''">
                    {{ contract.status }}
                  </span>
                </td>
                <td>
                  <button
                    mat-stroked-button
                    color="primary"
                    class="rp-download-btn"
                    [disabled]="isDownloading(contract.id)"
                    (click)="downloadPdf(contract.id)"
                    [attr.aria-label]="('reports.downloadBtn' | transloco) + ' ' + (contract.contractTitle || contract.id)"
                  >
                    @if (isDownloading(contract.id)) {
                      <mat-spinner diameter="18"></mat-spinner>
                    } @else {
                      <mat-icon aria-hidden="true">download</mat-icon>
                    }
                    <span>
                      {{ isDownloading(contract.id)
                           ? ('reports.downloading' | transloco)
                           : ('reports.downloadBtn' | transloco) }}
                    </span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </section>

</div>
`, styles: ["/* src/features/dashboard/reports/report-list.css */\n.rp-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.rp-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.rp-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.rp-section__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.rp-section__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.rp-section__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.rp-section__view-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  transition: background 0.2s;\n}\n.rp-section__view-all:hover {\n  background: var(--brand-primary-100);\n}\n.rp-section__view-all:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.rp-section__arrow {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rp-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: var(--ui-text-muted);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.rp-state mat-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--ui-border);\n}\n.rp-state--error {\n  color: var(--functional-danger-500);\n}\n.rp-state--error mat-icon {\n  color: var(--functional-danger-500);\n}\n.rp-meetings-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.rp-meeting-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start-width: 3px;\n  border-inline-start-color: var(--brand-primary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.rp-meeting-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.rp-meeting-card:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.rp-meeting-card:nth-child(3) {\n  border-inline-start-color: var(--brand-secondary-500);\n}\n.rp-meeting-card:nth-child(4) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.rp-meeting-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rp-meeting-card__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-400);\n}\n.rp-meeting-card__status {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.rp-meeting-card__status--past {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.rp-meeting-card__status--now {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.rp-meeting-card__title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.rp-meeting-card__time {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.rp-meeting-card__time-icon {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.rp-meeting-card__open {\n  align-self: flex-start;\n  margin-block-start: 0.25rem;\n  padding: 0.3rem 1rem;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n  transition: background 0.2s;\n}\n.rp-meeting-card__open:hover {\n  background: var(--brand-primary-100);\n}\n.rp-meeting-card__open:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.rp-charts-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.rp-chart-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rp-chart-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rp-chart-card__title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.rp-chart-card__sub {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.rp-select {\n  font-size: 0.72rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  outline: none;\n  min-width: 90px;\n  flex-shrink: 0;\n}\n.rp-select:focus-visible {\n  border-color: var(--brand-primary-400);\n  box-shadow: 0 0 0 2px var(--brand-primary-100);\n}\n.rp-donut-wrap {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.rp-chart-canvas-wrap {\n  position: relative;\n  width: 100%;\n  height: 180px;\n}\n.rp-chart-canvas-wrap--bar {\n  height: 220px;\n}\n.rp-donut-center {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  pointer-events: none;\n}\n.rp-legend {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.rp-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  color: var(--ui-text-muted);\n}\n.rp-legend__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: var(--ui-border);\n}\n.rp-legend__dot--success {\n  background: var(--functional-success-500);\n}\n.rp-legend__dot--warning {\n  background: var(--functional-warning-500);\n}\n.rp-legend__dot--neutral {\n  background: var(--ui-border);\n}\n.rp-table-wrapper {\n  overflow-x: auto;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n}\n.rp-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.rp-table th {\n  background: var(--ui-bg);\n  color: var(--ui-text-muted);\n  font-weight: 600;\n  text-align: start;\n  padding: 0.75rem 1rem;\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n}\n.rp-table td {\n  padding: 0.75rem 1rem;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.rp-table tbody tr:last-child td {\n  border-block-end: none;\n}\n.rp-table tbody tr:hover {\n  background: var(--ui-bg);\n}\n.rp-contract-title {\n  font-weight: 500;\n}\n.rp-contractor-name {\n  font-weight: 500;\n}\n.rp-status-badge {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--ui-border);\n  color: var(--ui-text-muted);\n  text-transform: capitalize;\n}\n.rp-status-badge[data-status=active] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.rp-status-badge[data-status=terminated] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.rp-status-badge[data-status=draft] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-800);\n}\n.rp-download-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  white-space: nowrap;\n}\n.rp-download-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n@media (max-width: 1024px) {\n  .rp-meetings-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .rp-charts-row {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .rp-page {\n    padding-inline: 1rem;\n    padding-block: 1rem;\n  }\n  .rp-meetings-grid {\n    grid-template-columns: 1fr;\n  }\n  .rp-col-hide-mobile {\n    display: none;\n  }\n}\n/*# sourceMappingURL=report-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportListComponent, { className: "ReportListComponent", filePath: "src/features/dashboard/reports/report-list.ts", lineNumber: 56 });
})();
export {
  ReportListComponent
};
//# sourceMappingURL=chunk-ONLTD34W.js.map
