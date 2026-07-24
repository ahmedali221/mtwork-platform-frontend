import {
  BaseChartDirective
} from "./chunk-R2LENQHC.js";
import {
  AttendanceService
} from "./chunk-GQUEZJ2O.js";
import {
  HrService
} from "./chunk-MVEYIQO5.js";
import {
  ContractService
} from "./chunk-LWI6AAJD.js";
import {
  MeetingsService
} from "./chunk-USQJLBKJ.js";
import {
  ProjectService
} from "./chunk-WT3XXVTX.js";
import {
  TeamsService
} from "./chunk-6LK6CDX3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  Chart,
  registerables
} from "./chunk-5RFBFEXW.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
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
  Component,
  catchError,
  forkJoin,
  inject,
  map,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-MQLQGMUZ.js";

// src/features/dashboard/business-dashboard/business-dashboard.ts
var _c0 = () => [0, 1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.label;
function BusinessDashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.loading"));
  }
}
function BusinessDashboardComponent_Conditional_3_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function BusinessDashboardComponent_Conditional_3_For_36_Template_button_click_0_listener() {
      const dot_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setSlide(dot_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dot_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.currentSlide() === dot_r2);
    \u0275\u0275attribute("aria-label", "Slide " + (dot_r2 + 1))("aria-selected", ctx_r2.currentSlide() === dot_r2);
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon", 84);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 85);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function BusinessDashboardComponent_Conditional_3_Conditional_51_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reload());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "dashboard.states.error"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.retry"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon", 84);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyMeetings"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_53_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 97);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", meeting_r5.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "dashboard.meeting.open") + ": " + meeting_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "dashboard.meeting.open"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "span", 89)(4, "mat-icon", 90);
    \u0275\u0275text(5, "videocam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 92);
    \u0275\u0275element(9, "span", 93);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 94)(15, "p", 95)(16, "mat-icon", 96);
    \u0275\u0275text(17, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, BusinessDashboardComponent_Conditional_3_Conditional_53_For_2_Conditional_19_Template, 4, 7, "a", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const meeting_r5 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(meeting_r5.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("biz-meeting-card__status--past", meeting_r5.status === "past")("biz-meeting-card__status--now", meeting_r5.status === "now");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", meeting_r5.status === "now" ? \u0275\u0275pipeBind1(11, 9, "dashboard.meeting.now") : meeting_r5.status === "past" ? \u0275\u0275pipeBind1(12, 11, "dashboard.meeting.past") : \u0275\u0275pipeBind1(13, 13, "dashboard.meeting.soon"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", meeting_r5.date, " ", meeting_r5.time, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(meeting_r5.link ? 19 : -1);
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, BusinessDashboardComponent_Conditional_3_Conditional_53_For_2_Template, 20, 15, "div", 86, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.meetings);
  }
}
function BusinessDashboardComponent_Conditional_3_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 98)(2, "div", 99)(3, "mat-icon", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 101)(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 102);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 103);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 104);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(stat_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("biz-kpi-card__change--up", stat_r6.up)("biz-kpi-card__change--down", !stat_r6.up);
    \u0275\u0275attribute("aria-label", (stat_r6.up ? "Up" : "Down") + " " + stat_r6.change + "% from last month");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r6.up ? "arrow_upward" : "arrow_downward");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stat_r6.change, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, stat_r6.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", stat_r6.up ? "+" : "-", "", stat_r6.change, "% ", \u0275\u0275pipeBind1(16, 15, "dashboard.fromLastMonth"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon", 84);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 85);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function BusinessDashboardComponent_Conditional_3_Conditional_79_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reload());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "dashboard.states.error"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.retry"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon", 84);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyCharts"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 47)(2, "div", 48)(3, "div")(4, "p", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 50);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 51);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementStart(12, "option");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 52)(22, "div", 53);
    \u0275\u0275element(23, "canvas", 54);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 55);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 105)(28, "span", 106);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 107);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 108);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 47)(38, "div", 48)(39, "div")(40, "p", 49);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 50);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 51);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementStart(48, "option");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 63);
    \u0275\u0275element(55, "canvas", 54);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 23, "dashboard.projectStatusOverview"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 25, "dashboard.business.projectStatusSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 27, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "dashboard.lastMonth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 31, "dashboard.last3Months"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 33, "dashboard.lastYear"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.projectStatusData)("options", ctx_r2.projectStatusOptions)("type", "doughnut");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 35, "dashboard.projectStatusChart"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.projectCompletedPercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 37, "dashboard.status.completed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 39, "dashboard.status.inProgress"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 41, "dashboard.status.notStarted"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 43, "dashboard.business.projectsByManager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 45, "dashboard.business.projectsByManagerSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 47, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 49, "dashboard.lastMonth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 51, "dashboard.last3Months"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.projectsByManagerData)("options", ctx_r2.projectsByManagerOptions)("type", "bar");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(56, 53, "dashboard.business.projectsByMgrChart"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_259_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon", 84);
    \u0275\u0275text(2, "assignment_turned_in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyTasks"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_260_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 109)(1, "div", 110)(2, "div", 111)(3, "mat-icon", 112);
    \u0275\u0275text(4, "task_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "p", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 114)(9, "span", 115);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 116);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "span", 117);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(task_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "dashboard.business.tagWebDesign"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "dashboard.business.tagUIUX"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("biz-status-pill--done", task_r8.status === "done")("biz-status-pill--progress", task_r8.status === "in-progress")("biz-status-pill--not-started", task_r8.status === "not-started");
    \u0275\u0275attribute("aria-label", ctx_r2.getStatusLabel(task_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(task_r8.status));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_260_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 78);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, BusinessDashboardComponent_Conditional_3_Conditional_260_For_3_Template, 17, 15, "li", 109, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "dashboard.recentTasks"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.taskItems);
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon", 84);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyAttendance"));
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_277_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 118)(1, "div", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 120)(4, "p", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 122);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 123);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(item_r9.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 5, "dashboard.business.checkIn"), " ", item_r9.time);
  }
}
function BusinessDashboardComponent_Conditional_3_Conditional_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 82);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, BusinessDashboardComponent_Conditional_3_Conditional_277_For_3_Template, 11, 7, "li", 118, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "dashboard.business.recentAttendance"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.attendanceItems);
  }
}
function BusinessDashboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "h2", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 8);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
    \u0275\u0275element(15, "img", 11)(16, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "span", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 15)(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 17);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275element(32, "img", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 19);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275repeaterCreate(35, BusinessDashboardComponent_Conditional_3_For_36_Template, 1, 4, "button", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "section", 21)(38, "div", 22)(39, "div", 23)(40, "mat-icon", 24);
    \u0275\u0275text(41, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h3", 25);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "a", 26);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementStart(49, "mat-icon", 27);
    \u0275\u0275text(50, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(51, BusinessDashboardComponent_Conditional_3_Conditional_51_Template, 10, 9, "div", 28)(52, BusinessDashboardComponent_Conditional_3_Conditional_52_Template, 6, 3, "div", 29)(53, BusinessDashboardComponent_Conditional_3_Conditional_53_Template, 3, 0, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 31);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275repeaterCreate(56, BusinessDashboardComponent_Conditional_3_For_57_Template, 17, 17, "div", 32, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "section", 33)(59, "div", 34)(60, "div", 35)(61, "div", 36)(62, "div", 37)(63, "mat-icon", 38);
    \u0275\u0275text(64, "folder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "h3", 39);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 40);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "a", 41);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "transloco");
    \u0275\u0275elementStart(76, "mat-icon", 27);
    \u0275\u0275text(77, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 42);
    \u0275\u0275conditionalCreate(79, BusinessDashboardComponent_Conditional_3_Conditional_79_Template, 10, 9, "div", 28)(80, BusinessDashboardComponent_Conditional_3_Conditional_80_Template, 6, 3, "div", 29)(81, BusinessDashboardComponent_Conditional_3_Conditional_81_Template, 57, 55, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "section", 44)(83, "div", 34)(84, "div", 35)(85, "div", 36)(86, "div", 37)(87, "mat-icon", 38);
    \u0275\u0275text(88, "assignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div")(90, "h3", 45);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 40);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "a", 46);
    \u0275\u0275pipe(97, "transloco");
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "transloco");
    \u0275\u0275elementStart(100, "mat-icon", 27);
    \u0275\u0275text(101, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 42)(103, "div", 43)(104, "div", 47)(105, "div", 48)(106, "div")(107, "p", 49);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 50);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "select", 51);
    \u0275\u0275pipe(114, "transloco");
    \u0275\u0275elementStart(115, "option");
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 52)(119, "div", 53);
    \u0275\u0275element(120, "canvas", 54);
    \u0275\u0275pipe(121, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 55)(123, "span", 56);
    \u0275\u0275text(124, "1.8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 57);
    \u0275\u0275text(126, "Days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 58)(128, "span", 59);
    \u0275\u0275element(129, "span", 60);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span", 59);
    \u0275\u0275element(133, "span", 61);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span", 59);
    \u0275\u0275element(137, "span", 62);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(140, "div", 47)(141, "div", 48)(142, "div")(143, "p", 49);
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p", 50);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "select", 51);
    \u0275\u0275pipe(150, "transloco");
    \u0275\u0275elementStart(151, "option");
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "div", 63);
    \u0275\u0275element(155, "canvas", 54);
    \u0275\u0275pipe(156, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(157, "div", 47)(158, "div", 48)(159, "div")(160, "p", 49);
    \u0275\u0275text(161);
    \u0275\u0275pipe(162, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "p", 50);
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "select", 51);
    \u0275\u0275pipe(167, "transloco");
    \u0275\u0275elementStart(168, "option");
    \u0275\u0275text(169);
    \u0275\u0275pipe(170, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(171, "div", 63);
    \u0275\u0275element(172, "canvas", 54);
    \u0275\u0275pipe(173, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(174, "section", 64)(175, "div", 34)(176, "div", 35)(177, "div", 36)(178, "div", 37)(179, "mat-icon", 38);
    \u0275\u0275text(180, "groups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "div")(182, "h3", 65);
    \u0275\u0275text(183);
    \u0275\u0275pipe(184, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "p", 40);
    \u0275\u0275text(186);
    \u0275\u0275pipe(187, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(188, "a", 66);
    \u0275\u0275pipe(189, "transloco");
    \u0275\u0275text(190);
    \u0275\u0275pipe(191, "transloco");
    \u0275\u0275elementStart(192, "mat-icon", 27);
    \u0275\u0275text(193, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(194, "div", 42)(195, "div", 43)(196, "div", 47)(197, "div", 48)(198, "div")(199, "p", 49);
    \u0275\u0275text(200);
    \u0275\u0275pipe(201, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "p", 50);
    \u0275\u0275text(203);
    \u0275\u0275pipe(204, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "select", 51);
    \u0275\u0275pipe(206, "transloco");
    \u0275\u0275elementStart(207, "option");
    \u0275\u0275text(208);
    \u0275\u0275pipe(209, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(210, "div", 67);
    \u0275\u0275element(211, "canvas", 54);
    \u0275\u0275pipe(212, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 47)(214, "div", 48)(215, "div")(216, "p", 49);
    \u0275\u0275text(217);
    \u0275\u0275pipe(218, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "p", 50);
    \u0275\u0275text(220);
    \u0275\u0275pipe(221, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "select", 51);
    \u0275\u0275pipe(223, "transloco");
    \u0275\u0275elementStart(224, "option");
    \u0275\u0275text(225);
    \u0275\u0275pipe(226, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(227, "div", 68)(228, "span", 59);
    \u0275\u0275element(229, "span", 60);
    \u0275\u0275text(230);
    \u0275\u0275pipe(231, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "span", 59);
    \u0275\u0275element(233, "span", 61);
    \u0275\u0275text(234);
    \u0275\u0275pipe(235, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "span", 59);
    \u0275\u0275element(237, "span", 62);
    \u0275\u0275text(238);
    \u0275\u0275pipe(239, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(240, "div", 69);
    \u0275\u0275element(241, "canvas", 54);
    \u0275\u0275pipe(242, "transloco");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(243, "div", 70)(244, "section", 71)(245, "div", 72)(246, "div", 73)(247, "div", 74)(248, "mat-icon", 75);
    \u0275\u0275text(249, "assignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(250, "h3", 76);
    \u0275\u0275text(251);
    \u0275\u0275pipe(252, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(253, "a", 77);
    \u0275\u0275pipe(254, "transloco");
    \u0275\u0275text(255);
    \u0275\u0275pipe(256, "transloco");
    \u0275\u0275elementStart(257, "mat-icon", 27);
    \u0275\u0275text(258, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(259, BusinessDashboardComponent_Conditional_3_Conditional_259_Template, 6, 3, "div", 29)(260, BusinessDashboardComponent_Conditional_3_Conditional_260_Template, 4, 3, "ul", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "section", 79)(262, "div", 72)(263, "div", 73)(264, "div", 74)(265, "mat-icon", 75);
    \u0275\u0275text(266, "how_to_reg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(267, "h3", 80);
    \u0275\u0275text(268);
    \u0275\u0275pipe(269, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(270, "a", 81);
    \u0275\u0275pipe(271, "transloco");
    \u0275\u0275text(272);
    \u0275\u0275pipe(273, "transloco");
    \u0275\u0275elementStart(274, "mat-icon", 27);
    \u0275\u0275text(275, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(276, BusinessDashboardComponent_Conditional_3_Conditional_276_Template, 6, 3, "div", 29)(277, BusinessDashboardComponent_Conditional_3_Conditional_277_Template, 4, 3, "ul", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 82, "dashboard.business.bannerTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 84, "dashboard.business.bannerSubtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 86, "dashboard.business.knowMoreHiring"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 88, "dashboard.business.knowMore"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 90, "dashboard.business.developerBadge"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 92, "dashboard.business.developerDescPre"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 94, "dashboard.business.developerDescAccent"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 96, "dashboard.business.askAi"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 98, "dashboard.business.askAi"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 100, "dashboard.business.bannerSlides"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(208, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 102, "dashboard.upcomingMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 104, "dashboard.viewAllMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 106, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.meetingsStatus() === "error" ? 51 : ctx_r2.meetings.length === 0 ? 52 : 53);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(55, 108, "dashboard.kpiList"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.kpiStats);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 110, "dashboard.business.projectsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 112, "dashboard.business.projectsSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(73, 114, "dashboard.viewAllProjects"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 116, "dashboard.viewAll"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.chartsStatus() === "error" ? 79 : ctx_r2.kpiStats[0].value === 0 ? 80 : 81);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 118, "dashboard.business.tasksTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 120, "dashboard.business.tasksSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(97, 122, "dashboard.viewAllTasks"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 124, "dashboard.viewAll"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 126, "dashboard.business.taskStatusDist"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 128, "dashboard.business.taskStatusSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(114, 130, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 132, "dashboard.lastMonth"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r2.taskStatusData)("options", ctx_r2.taskStatusOptions)("type", "doughnut");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(121, 134, "dashboard.business.taskStatusChart"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 136, "dashboard.status.completed"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(135, 138, "dashboard.status.notStarted"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 140, "dashboard.status.inProgress"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 142, "dashboard.business.projectsByManager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 144, "dashboard.business.projectsByManagerSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(150, 146, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(153, 148, "dashboard.lastMonth"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.tasksByPriorityData)("options", ctx_r2.tasksByPriorityOptions)("type", "bar");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(156, 150, "dashboard.business.tasksByPriorityChart"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(162, 152, "dashboard.business.tasksTimeline"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(165, 154, "dashboard.business.tasksTimelineSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(167, 156, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(170, 158, "dashboard.lastMonth"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.tasksTimelineData)("options", ctx_r2.tasksTimelineOptions)("type", "line");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(173, 160, "dashboard.business.tasksTimelineChart"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(184, 162, "dashboard.business.teamsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 164, "dashboard.business.teamsSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(189, 166, "dashboard.viewAllTeams"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(191, 168, "dashboard.viewAll"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(201, 170, "dashboard.business.teamSizeOverview"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(204, 172, "dashboard.business.teamSizeOverviewSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(206, 174, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(209, 176, "dashboard.lastMonth"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.teamSizeData)("options", ctx_r2.teamSizeOptions)("type", "bar");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(212, 178, "dashboard.business.teamSizeChart"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(218, 180, "dashboard.business.tasksPerTeam"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(221, 182, "dashboard.business.tasksPerTeamSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(223, 184, "dashboard.timePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(226, 186, "dashboard.lastMonth"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(231, 188, "dashboard.status.completed"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(235, 190, "dashboard.status.notStarted"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(239, 192, "dashboard.status.inProgress"));
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.tasksPerTeamData)("options", ctx_r2.tasksPerTeamOptions)("type", "bar");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(242, 194, "dashboard.business.tasksPerTeamChart"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(252, 196, "dashboard.business.tasksOverview"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(254, 198, "dashboard.viewAllTasks"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(256, 200, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.taskItems.length === 0 ? 259 : 260);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(269, 202, "dashboard.business.recentAttendanceTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(271, 204, "dashboard.viewAllAttendance"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(273, 206, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.attendanceItems.length === 0 ? 276 : 277);
  }
}
Chart.register(...registerables);
var _BusinessDashboardComponent = class _BusinessDashboardComponent {
  constructor() {
    this.meetingsService = inject(MeetingsService);
    this.projectService = inject(ProjectService);
    this.attendanceService = inject(AttendanceService);
    this.teamsService = inject(TeamsService);
    this.hrService = inject(HrService);
    this.contractService = inject(ContractService);
    this.lang = inject(LanguageService);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.currentSlide = signal(3, ...ngDevMode ? [{ debugName: "currentSlide" }] : []);
    this.slideTimer = null;
    this.projectCompletedPercent = 0;
    this.kpiStats = [
      { id: "totalProjects", icon: "folder", label: "dashboard.kpi.totalProjects", value: 0, change: 20, up: true },
      { id: "activeProjects", icon: "folder_open", label: "dashboard.kpi.activeProjects", value: 0, change: 20, up: false },
      { id: "employees", icon: "badge", label: "dashboard.kpi.employees", value: 0, change: 20, up: true },
      { id: "contracts", icon: "description", label: "dashboard.kpi.totalContracts", value: 0, change: 20, up: false },
      { id: "attendanceRate", icon: "groups", label: "dashboard.kpi.attendanceRate", value: "0%", change: 20, up: true }
    ];
    this.meetingsStatus = signal("loading", ...ngDevMode ? [{ debugName: "meetingsStatus" }] : []);
    this.tasksStatus = signal("loading", ...ngDevMode ? [{ debugName: "tasksStatus" }] : []);
    this.attendanceStatus = signal("loading", ...ngDevMode ? [{ debugName: "attendanceStatus" }] : []);
    this.chartsStatus = signal("loading", ...ngDevMode ? [{ debugName: "chartsStatus" }] : []);
    this.meetings = [];
    this.taskItems = [];
    this.attendanceItems = [];
    this.months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
    this.projectStatusData = {
      labels: ["Completed", "In Progress", "Not Started"],
      datasets: [{ data: [77, 15, 8], backgroundColor: ["#36c220", "#fcbe04", "#e6e6e6"], borderWidth: 0, hoverOffset: 4 }]
    };
    this.projectStatusOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "72%",
      plugins: { legend: { display: false }, tooltip: { enabled: true } }
    };
    this.projectsByManagerData = {
      labels: ["Salem Ali", "Salem Ali", "Salem Ali", "Salem Ali", "Salem Ali"],
      datasets: [
        { data: [85, 60, 45, 35, 25], backgroundColor: "#f87748", borderRadius: 12, barThickness: 32 }
      ]
    };
    this.projectsByManagerOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 } } },
        y: { grid: { display: false }, border: { display: false }, ticks: { color: "#201b13", font: { size: 12 } } }
      }
    };
    this.taskStatusData = {
      labels: ["Completed", "Not Started", "In Progress"],
      datasets: [{ data: [11, 24, 26], backgroundColor: ["#36c220", "#e6e6e6", "#2e358f"], borderWidth: 0, hoverOffset: 4 }]
    };
    this.taskStatusOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "72%",
      plugins: { legend: { display: false }, tooltip: { enabled: true } }
    };
    this.tasksByPriorityData = {
      labels: this.months,
      datasets: [
        { label: "High", data: [400, 500, 600, 550, 480, 520], backgroundColor: "#f03d3d", stack: "a", borderRadius: 0 },
        { label: "Medium", data: [300, 350, 400, 380, 320, 360], backgroundColor: "#f87748", stack: "a", borderRadius: 0 },
        { label: "Low", data: [200, 250, 300, 280, 220, 260], backgroundColor: "#e6e6e6", stack: "a", borderRadius: 4 }
      ]
    };
    this.tasksByPriorityOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "top", align: "end", labels: { boxWidth: 10, font: { size: 11 }, color: "#999999" } } },
      scales: {
        x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 } } },
        y: { stacked: true, grid: { color: "#f2f2f2" }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 }, callback: (v) => `${Number(v) / 1e3}k` } }
      }
    };
    this.tasksTimelineData = {
      labels: this.months,
      datasets: [{
        data: [3e5, 45e4, 28e4, 62e4, 5e5, 75e4],
        fill: true,
        borderColor: "#36c220",
        backgroundColor: "rgba(54, 194, 32, 0.15)",
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 2
      }]
    };
    this.tasksTimelineOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { mode: "index", intersect: false } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 } } },
        y: { grid: { color: "#f2f2f2" }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 }, callback: (v) => `${Number(v) / 1e3}k` } }
      }
    };
    this.teamSizeData = {
      labels: ["TickPro Team", "TickPro Team", "TickPro Team", "TickPro Team", "TickPro Team"],
      datasets: [{ data: [2, 5, 3, 4, 3], backgroundColor: "#2e358f", borderRadius: 11, barThickness: 32 }]
    };
    this.teamSizeOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: "#999999", font: { size: 10 } } },
        y: { grid: { color: "#f2f2f2" }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 } } }
      }
    };
    this.tasksPerTeamData = {
      labels: this.months,
      datasets: [
        { label: "Completed", data: [300, 400, 500, 450, 380, 420], backgroundColor: "#36c220", stack: "b", borderRadius: 0 },
        { label: "Not Started", data: [200, 250, 300, 280, 220, 260], backgroundColor: "#e6e6e6", stack: "b", borderRadius: 0 },
        { label: "In Progress", data: [150, 200, 250, 230, 180, 200], backgroundColor: "#2e358f", stack: "b", borderRadius: 6 }
      ]
    };
    this.tasksPerTeamOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 } } },
        y: { stacked: true, grid: { color: "#f2f2f2" }, border: { display: false }, ticks: { color: "#999999", font: { size: 11 }, callback: (v) => `${Number(v) / 1e3}k` } }
      }
    };
  }
  /** Lookup a KPI card by its stable id (never by display label). */
  setKpi(id, value) {
    const card = this.kpiStats.find((k) => k.id === id);
    if (card)
      card.value = value;
  }
  /* ── Lifecycle ───────────────────────────────────────── */
  ngOnInit() {
    this.loadDashboardData();
    this.startBannerSlider();
  }
  ngOnDestroy() {
    if (this.slideTimer)
      clearInterval(this.slideTimer);
  }
  startBannerSlider() {
    this.slideTimer = setInterval(() => {
      this.currentSlide.update((s) => (s + 1) % 5);
    }, 4e3);
  }
  setSlide(index) {
    this.currentSlide.set(index);
  }
  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons. */
  reload() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading.set(true);
    this.meetingsStatus.set("loading");
    this.chartsStatus.set("loading");
    this.tasksStatus.set("ok");
    this.attendanceStatus.set("ok");
    const wrap = (src, fallback) => src.pipe(map((data) => ({ ok: true, data })), catchError(() => of({ ok: false, data: fallback })));
    forkJoin({
      meetings: wrap(this.meetingsService.getMeetings(), []),
      projects: wrap(this.projectService.getProjects(), []),
      hrList: wrap(this.hrService.getHRList(), { total: 0, result: [] }),
      contracts: wrap(this.contractService.getContracts(1, 1), { data: [], pagination: { totalItems: 0 } })
    }).subscribe(({ meetings, projects, hrList, contracts }) => {
      if (!meetings.ok) {
        this.meetings = [];
        this.meetingsStatus.set("error");
      } else {
        this.meetings = (meetings.data ?? []).slice(0, 4).map((m) => ({
          icon: "video_call",
          title: m.title || "Meeting",
          date: m.startTime ? new Date(m.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "",
          time: "IST",
          status: this.getMeetingStatus(m),
          link: m.meetingLink
        }));
        this.meetingsStatus.set("ok");
      }
      this.chartsStatus.set(projects.ok ? "ok" : "error");
      const projectList = projects.ok ? projects.data ?? [] : [];
      if (projectList.length) {
        const active = projectList.filter((p) => this.normalizeProjectStatus(p.status) === "in-progress").length;
        this.setKpi("totalProjects", projectList.length);
        this.setKpi("activeProjects", active);
      }
      if (hrList.ok && hrList.data?.total != null) {
        this.setKpi("employees", hrList.data.total);
      }
      if (contracts.ok && contracts.data?.pagination?.totalItems != null) {
        this.setKpi("contracts", contracts.data.pagination.totalItems);
      }
      if (projectList.length) {
        const projects2 = projectList;
        const done = projects2.filter((p) => this.normalizeProjectStatus(p.status) === "completed").length;
        const inProgress = projects2.filter((p) => this.normalizeProjectStatus(p.status) === "in-progress").length;
        const notStarted = Math.max(0, projects2.length - done - inProgress);
        const total = projects2.length || 1;
        this.projectCompletedPercent = Math.round(done / total * 100);
        this.projectStatusData = {
          labels: ["Completed", "In Progress", "Not Started"],
          datasets: [{
            data: [
              Math.round(done / total * 100),
              Math.round(inProgress / total * 100),
              Math.round(notStarted / total * 100)
            ],
            backgroundColor: [
              getComputedStyle(document.documentElement).getPropertyValue("--functional-success-500").trim() || "#36c220",
              getComputedStyle(document.documentElement).getPropertyValue("--brand-accent-500").trim() || "#fcbe04",
              getComputedStyle(document.documentElement).getPropertyValue("--brand-neutral-200").trim() || "#e6e6e6"
            ],
            borderWidth: 0,
            hoverOffset: 4
          }]
        };
        const managerMap = {};
        projects2.forEach((p) => {
          const mgr = p.managerName || p.managerId || "Unknown";
          managerMap[mgr] = (managerMap[mgr] || 0) + 1;
        });
        const managers = Object.keys(managerMap).slice(0, 5);
        this.projectsByManagerData = {
          labels: managers,
          datasets: [{ data: managers.map((m) => managerMap[m]), backgroundColor: "#f87748", borderRadius: 12, barThickness: 32 }]
        };
      }
      this.isLoading.set(false);
    });
  }
  /**
   * K-2: Normalize the assorted project-status shapes (string vocab + numeric
   * ids) into three canonical buckets so the Active KPI and the donut agree.
   * Anything unrecognised falls through to 'not-started'.
   */
  normalizeProjectStatus(status) {
    const s = String(status ?? "").toLowerCase().trim();
    if (s === "completed" || s === "done" || s === "3")
      return "completed";
    if (s === "in-progress" || s === "inprogress" || s === "active" || s === "1" || s === "2")
      return "in-progress";
    return "not-started";
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
  getInitials(name) {
    return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  }
  getStatusLabel(s) {
    return s === "done" ? "Done" : s === "in-progress" ? "In Progress" : "Not Started";
  }
};
_BusinessDashboardComponent.\u0275fac = function BusinessDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BusinessDashboardComponent)();
};
_BusinessDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessDashboardComponent, selectors: [["app-business-dashboard"]], decls: 4, vars: 4, consts: [[1, "biz-dash"], ["role", "status", "aria-live", "polite", 1, "dashboard-loading"], [1, "dashboard-loading__spinner"], [1, "biz-banner"], ["src", "assets/images/dashboard/banner-star.svg", "alt", "", "aria-hidden", "true", 1, "biz-banner__star"], [1, "biz-banner__content"], [1, "biz-banner__title"], [1, "biz-banner__subtitle"], ["routerLink", "/dashboard/contracts", 1, "biz-banner__cta"], [1, "biz-banner__visual"], [1, "biz-banner__avatar"], ["src", "assets/images/dashboard/banner-person-256.png", "alt", "", "aria-hidden", "true", 1, "biz-banner__avatar-photo"], ["src", "assets/images/dashboard/banner-flag-eg.svg", "alt", "", "aria-hidden", "true", 1, "biz-banner__avatar-flag"], [1, "biz-banner__card"], [1, "biz-banner__card-badge"], [1, "biz-banner__card-text"], [1, "biz-banner__card-accent"], ["type", "button", 1, "biz-banner__ai-btn"], ["src", "assets/images/dashboard/banner-ai-icon.svg", "alt", "", "aria-hidden", "true", 1, "biz-banner__ai-icon"], ["role", "tablist", 1, "biz-banner__dots"], ["role", "tab", 1, "biz-banner__dot", 3, "active"], ["aria-labelledby", "meetings-heading", 1, "biz-section"], [1, "biz-section__header"], [1, "biz-section__title-group"], [1, "biz-section__icon"], ["id", "meetings-heading", 1, "biz-section__title"], ["routerLink", "/dashboard/meetings", 1, "biz-btn-gray"], [1, "biz-btn-icon"], ["role", "alert", 1, "biz-widget-state", "biz-widget-state--error"], [1, "biz-widget-state", "biz-widget-state--empty"], [1, "biz-meetings-grid"], ["role", "list", 1, "biz-kpi-row"], ["role", "listitem", 1, "biz-kpi-card"], ["aria-labelledby", "projects-heading", 1, "biz-section"], [1, "biz-widget-card"], [1, "biz-widget-header"], [1, "biz-widget-header__left"], [1, "biz-widget-icon-wrap"], [1, "biz-widget-icon"], ["id", "projects-heading", 1, "biz-widget-title"], [1, "biz-widget-subtitle"], ["routerLink", "/dashboard/projects", 1, "biz-btn-primary"], [1, "biz-widget-inner"], [1, "biz-charts-row"], ["aria-labelledby", "tasks-heading", 1, "biz-section"], ["id", "tasks-heading", 1, "biz-widget-title"], ["routerLink", "/dashboard/task-management", 1, "biz-btn-primary"], [1, "biz-chart-card"], [1, "biz-chart-card__header"], [1, "biz-chart-card__title"], [1, "biz-chart-card__sub"], ["title", "Select period", 1, "biz-select"], [1, "biz-chart-donut-wrap"], [1, "biz-chart-canvas-wrap", 2, "height", "188px"], ["baseChart", "", 3, "data", "options", "type"], ["aria-hidden", "true", 1, "biz-donut-center"], [1, "biz-donut-center__val"], [1, "biz-donut-center__label"], [1, "biz-legend", "biz-legend--squares"], [1, "biz-legend__sq-item"], [1, "biz-legend__sq", "biz-legend__sq--success"], [1, "biz-legend__sq", "biz-legend__sq--neutral"], [1, "biz-legend__sq", "biz-legend__sq--primary"], [1, "biz-chart-canvas-wrap", 2, "height", "240px"], ["aria-labelledby", "teams-heading", 1, "biz-section"], ["id", "teams-heading", 1, "biz-widget-title"], ["routerLink", "/dashboard/teams", 1, "biz-btn-primary"], [1, "biz-chart-canvas-wrap", 2, "height", "220px"], [1, "biz-chart-legend-row"], [1, "biz-chart-canvas-wrap", 2, "height", "200px"], [1, "biz-bottom-row"], ["aria-labelledby", "tasks-overview-heading", 1, "biz-bottom-card"], [1, "biz-bottom-card__header"], [1, "biz-bottom-card__title-group"], ["aria-hidden", "true", 1, "biz-bottom-icon-wrap"], [1, "biz-bottom-icon"], ["id", "tasks-overview-heading", 1, "biz-bottom-title"], ["routerLink", "/dashboard/task-management", 1, "biz-btn-gray"], [1, "biz-task-list"], ["aria-labelledby", "attendance-heading", 1, "biz-bottom-card"], ["id", "attendance-heading", 1, "biz-bottom-title"], ["routerLink", "/dashboard/attendance", 1, "biz-btn-gray"], [1, "biz-attendance-list"], ["role", "tab", 1, "biz-banner__dot", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "biz-widget-state__retry", 3, "click"], [1, "biz-meeting-card"], [1, "biz-meeting-card__top"], [1, "biz-meeting-card__id"], ["aria-hidden", "true", 1, "biz-meeting-card__icon-wrap"], [1, "biz-meeting-card__icon"], [1, "biz-meeting-card__title"], [1, "biz-meeting-card__status"], ["aria-hidden", "true", 1, "biz-meeting-card__status-dot"], [1, "biz-meeting-card__bottom"], [1, "biz-meeting-card__time"], [1, "biz-meeting-card__time-icon"], ["target", "_blank", "rel", "noopener noreferrer", 1, "biz-meeting-card__open", 3, "href"], [1, "biz-kpi-card__header"], [1, "biz-kpi-card__icon-wrap"], [1, "biz-kpi-card__icon"], [1, "biz-kpi-card__change"], [1, "biz-kpi-card__value"], [1, "biz-kpi-card__label"], [1, "biz-kpi-card__sub"], [1, "biz-legend"], [1, "biz-legend__pill", "biz-legend__pill--success"], [1, "biz-legend__pill", "biz-legend__pill--warning"], [1, "biz-legend__pill", "biz-legend__pill--neutral"], [1, "biz-task-item"], [1, "biz-task-item__left"], ["aria-hidden", "true", 1, "biz-task-item__icon-wrap"], [1, "biz-task-item__icon"], [1, "biz-task-item__name"], [1, "biz-task-item__tags"], [1, "biz-tag", "biz-tag--orange"], [1, "biz-tag", "biz-tag--primary"], [1, "biz-status-pill"], [1, "biz-attendance-item"], ["aria-hidden", "true", 1, "biz-attendance-item__avatar"], [1, "biz-attendance-item__info"], [1, "biz-attendance-item__name"], [1, "biz-attendance-item__role"], [1, "biz-attendance-item__checkin"]], template: function BusinessDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275conditionalCreate(2, BusinessDashboardComponent_Conditional_2_Template, 5, 3, "div", 1)(3, BusinessDashboardComponent_Conditional_3_Template, 278, 209);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "dashboard.business.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 2 : 3);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, MatIconModule, MatIcon, BaseChartDirective, TranslocoModule, TranslocoPipe], styles: ['\n\n.biz-dash[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.biz-banner[_ngcontent-%COMP%] {\n  --biz-navy: #2e358f;\n  --biz-card-badge-bg: #d8daf3;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px 24px;\n  padding-block: 8px;\n  padding-inline: 24px;\n  border-radius: var(--radius-12);\n  background: var(--brand-tertiary-500);\n  overflow: hidden;\n  min-height: 160px;\n}\n.biz-banner__star[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: -108px;\n  inset-inline-end: -45px;\n  width: 329px;\n  height: 329px;\n  pointer-events: none;\n  opacity: 0.9;\n}\n[dir=rtl][_ngcontent-%COMP%]   .biz-banner__star[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.biz-banner__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  z-index: 1;\n}\n.biz-banner__title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.4;\n}\n.biz-banner__subtitle[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #f7f5f2;\n  margin: 0;\n  line-height: 1.2;\n  max-width: 420px;\n}\n.biz-banner__cta[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  background: #1b1b1b;\n  color: #ffffff;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.biz-banner__cta[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.biz-banner__cta[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1b1b1b;\n  outline-offset: 2px;\n}\n.biz-banner__visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 1;\n}\n.biz-banner__avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  flex-shrink: 0;\n}\n.biz-banner__avatar-photo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top center;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--biz-navy) 52%,\n      rgba(101, 108, 205, 0));\n}\n.biz-banner__avatar-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-end: 4px;\n  inset-inline-end: -2px;\n  width: 39px;\n  height: 39px;\n}\n.biz-banner__card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: var(--radius-12);\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  min-width: 200px;\n}\n.biz-banner__card-badge[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--biz-navy);\n  background: var(--biz-card-badge-bg);\n  padding: 5px 8px;\n  border-radius: 8px;\n  align-self: flex-start;\n}\n.biz-banner__card-text[_ngcontent-%COMP%] {\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.5;\n}\n.biz-banner__card-accent[_ngcontent-%COMP%] {\n  color: var(--brand-tertiary-500);\n}\n.biz-banner__ai-btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 33px;\n  padding-inline: 8px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #ffffff;\n  border: 1px solid var(--biz-navy);\n  border-radius: 10px;\n  background: var(--biz-navy);\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.biz-banner__ai-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.92;\n}\n.biz-banner__ai-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--biz-navy);\n  outline-offset: 2px;\n}\n.biz-banner__ai-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.biz-banner__dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-end: 12px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  padding: 6px 12px;\n  border-radius: 33px;\n}\n.biz-banner__dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: var(--radius-full);\n  background: #f2f2f2;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.2s;\n}\n.biz-banner__dot.active[_ngcontent-%COMP%] {\n  background: var(--brand-tertiary-500);\n  box-shadow: 0 0 0 3px rgba(248, 119, 72, 0.4);\n}\n.biz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 0 1px rgba(46, 53, 143, 0.2), inset 0 -2px 0 rgba(37, 42, 116, 0.35);\n  transition: opacity 0.2s;\n}\n.biz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.biz-btn-primary[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.biz-btn-gray[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.06);\n  transition: background 0.2s;\n}\n.biz-btn-gray[_ngcontent-%COMP%]:hover {\n  background: var(--ui-border);\n}\n.biz-btn-gray[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.biz-btn-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.biz-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.biz-section__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.biz-section__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.biz-section__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-meetings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 1024px) {\n  .biz-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .biz-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-meeting-card[_ngcontent-%COMP%] {\n  --biz-navy: #2e358f;\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-inline-start: 3px solid var(--biz-navy);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.biz-meeting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.biz-meeting-card[_ngcontent-%COMP%]:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.biz-meeting-card[_ngcontent-%COMP%]:nth-child(3) {\n  border-inline-start-color: var(--brand-secondary-500);\n}\n.biz-meeting-card[_ngcontent-%COMP%]:nth-child(4) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.biz-meeting-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.biz-meeting-card__id[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.biz-meeting-card__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.biz-meeting-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-meeting-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--biz-navy);\n}\n.biz-meeting-card__status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--functional-danger-500);\n  background: transparent;\n  color: var(--functional-danger-500);\n}\n.biz-meeting-card__status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  flex-shrink: 0;\n}\n.biz-meeting-card__status--past[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-500);\n  color: var(--functional-danger-500);\n}\n.biz-meeting-card__status--now[_ngcontent-%COMP%] {\n  border-color: var(--functional-success-500);\n  color: var(--functional-success-500);\n}\n.biz-meeting-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-meeting-card__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  min-width: 0;\n}\n.biz-meeting-card__time-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.biz-meeting-card__open[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  padding-inline: 16px;\n  border-radius: var(--radius-8);\n  background: #1b1b1b;\n  color: #ffffff;\n  border: none;\n  font-size: 0.72rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.biz-meeting-card__open[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.biz-meeting-card__open[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1b1b1b;\n  outline-offset: 2px;\n}\n.biz-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 1024px) {\n  .biz-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .biz-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.biz-kpi-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.biz-kpi-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.biz-kpi-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.biz-kpi-card__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.biz-kpi-card__change[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n}\n.biz-kpi-card__change[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.biz-kpi-card__change--up[_ngcontent-%COMP%] {\n  background: var(--dash-stat-up-bg);\n  color: var(--dash-stat-up-text);\n}\n.biz-kpi-card__change--down[_ngcontent-%COMP%] {\n  background: var(--dash-stat-down-bg);\n  color: var(--dash-stat-down-text);\n}\n.biz-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.biz-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.biz-widget-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 20px;\n  box-shadow: 0 0 8px 4px rgba(149, 157, 157, 0.2);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.biz-widget-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.biz-widget-icon-wrap[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 13px;\n  background: var(--ui-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-widget-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: var(--ui-text-muted);\n}\n.biz-widget-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.3;\n}\n.biz-widget-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.biz-widget-inner[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  border-radius: 26px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.biz-charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .biz-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-chart-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(149, 157, 157, 0.2);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.biz-chart-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.biz-chart-card__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-chart-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.biz-select[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: var(--radius-8);\n  border: none;\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  outline: none;\n  min-width: 90px;\n  flex-shrink: 0;\n  height: 32px;\n}\n.biz-select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 1px;\n}\n.biz-chart-canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.biz-chart-donut-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.biz-donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.biz-donut-center__val[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  line-height: 1;\n}\n.biz-donut-center__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  margin-block-start: 2px;\n}\n.biz-donut-center[_ngcontent-%COMP%]:not(:has(.biz-donut-center__val)) {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.biz-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.biz-legend__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.biz-legend__pill--success[_ngcontent-%COMP%] {\n  background: rgba(54, 194, 32, 0.4);\n  color: var(--functional-success-600);\n}\n.biz-legend__pill--warning[_ngcontent-%COMP%] {\n  background: rgba(252, 190, 4, 0.4);\n  color: var(--brand-accent-600);\n}\n.biz-legend__pill--neutral[_ngcontent-%COMP%] {\n  background: rgba(204, 204, 204, 0.3);\n  color: var(--ui-text-muted);\n}\n.biz-legend--squares[_ngcontent-%COMP%] {\n  flex-direction: row;\n  gap: 1rem;\n}\n.biz-legend__sq-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  color: var(--ui-text-muted);\n}\n.biz-legend__sq[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.biz-legend__sq--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.biz-legend__sq--neutral[_ngcontent-%COMP%] {\n  background: var(--ui-text-muted);\n}\n.biz-legend__sq--primary[_ngcontent-%COMP%] {\n  background: var(--brand-primary-600);\n}\n.biz-chart-legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.biz-bottom-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .biz-bottom-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-bottom-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 16px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-bottom-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.biz-bottom-card__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.biz-bottom-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  background: rgba(204, 204, 204, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--ui-text-main);\n}\n.biz-bottom-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-task-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.biz-task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding-block: 0.5rem;\n  padding-inline: 0.5rem;\n  border-radius: var(--radius-8);\n  min-height: 60px;\n}\n.biz-task-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n}\n.biz-task-item__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.biz-task-item__icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--brand-secondary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-task-item__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.biz-task-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-task-item__tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-block-start: 3px;\n  flex-wrap: wrap;\n}\n.biz-tag[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.biz-tag--orange[_ngcontent-%COMP%] {\n  background: var(--brand-tertiary-50);\n  color: var(--brand-tertiary-500);\n}\n.biz-tag--primary[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.biz-status-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 5px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n  flex-shrink: 0;\n  background: var(--brand-neutral-200);\n  color: var(--ui-text-muted);\n}\n.biz-status-pill--done[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.biz-status-pill--progress[_ngcontent-%COMP%] {\n  background: var(--brand-accent-50);\n  color: var(--brand-accent-700);\n}\n.biz-status-pill--not-started[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-200);\n  color: var(--ui-text-muted);\n}\n.biz-attendance-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.biz-attendance-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 6px 8px;\n  border-radius: 12px;\n  min-height: 60px;\n  transition: background 0.15s;\n}\n.biz-attendance-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n}\n.biz-attendance-item__avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--brand-primary-600),\n      rgba(101, 108, 205, 0));\n  color: var(--ui-bg-surface);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-attendance-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.biz-attendance-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-attendance-item__role[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 1px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.biz-attendance-item__checkin[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  text-align: end;\n  flex-shrink: 0;\n}\n.biz-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--ui-text-muted);\n  font-size: 0.9rem;\n}\n.biz-widget-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.biz-widget-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.biz-widget-state--empty[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.biz-widget-state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.biz-widget-state__retry[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.biz-widget-state__retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n/*# sourceMappingURL=business-dashboard.css.map */'] });
var BusinessDashboardComponent = _BusinessDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-business-dashboard", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, BaseChartDirective, TranslocoModule], template: `<div class="biz-dash" [attr.aria-label]="'dashboard.business.title' | transloco">

  @if (isLoading()) {
    <div class="dashboard-loading" role="status" aria-live="polite">
      <div class="dashboard-loading__spinner"></div>
      <p>{{ 'common.loading' | transloco }}</p>
    </div>
  } @else {

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       HERO BANNER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="biz-banner">
    <!-- Decorative star (top-end) -->
    <img class="biz-banner__star" src="assets/images/dashboard/banner-star.svg" alt="" aria-hidden="true" />

    <div class="biz-banner__content">
      <h2 class="biz-banner__title">{{ 'dashboard.business.bannerTitle' | transloco }}</h2>
      <p class="biz-banner__subtitle">
        {{ 'dashboard.business.bannerSubtitle' | transloco }}
      </p>
      <a class="biz-banner__cta" routerLink="/dashboard/contracts" [attr.aria-label]="'dashboard.business.knowMoreHiring' | transloco">{{ 'dashboard.business.knowMore' | transloco }}</a>
    </div>

    <div class="biz-banner__visual">
      <div class="biz-banner__avatar">
        <img class="biz-banner__avatar-photo" src="assets/images/dashboard/banner-person-256.png" alt="" aria-hidden="true" />
        <img class="biz-banner__avatar-flag" src="assets/images/dashboard/banner-flag-eg.svg" alt="" aria-hidden="true" />
      </div>
      <div class="biz-banner__card">
        <span class="biz-banner__card-badge">{{ 'dashboard.business.developerBadge' | transloco }}</span>
        <p class="biz-banner__card-text">
          <span>{{ 'dashboard.business.developerDescPre' | transloco }} </span><span class="biz-banner__card-accent">{{ 'dashboard.business.developerDescAccent' | transloco }}</span>
        </p>
        <button type="button" class="biz-banner__ai-btn" [attr.aria-label]="'dashboard.business.askAi' | transloco">
          {{ 'dashboard.business.askAi' | transloco }}
          <img class="biz-banner__ai-icon" src="assets/images/dashboard/banner-ai-icon.svg" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="biz-banner__dots" role="tablist" [attr.aria-label]="'dashboard.business.bannerSlides' | transloco">
      @for (dot of [0,1,2,3,4]; track dot) {
        <button
          class="biz-banner__dot"
          [class.active]="currentSlide() === dot"
          (click)="setSlide(dot)"
          [attr.aria-label]="'Slide ' + (dot + 1)"
          role="tab"
          [attr.aria-selected]="currentSlide() === dot"
        ></button>
      }
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       UPCOMING MEETINGS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="biz-section" aria-labelledby="meetings-heading">
    <div class="biz-section__header">
      <div class="biz-section__title-group">
        <mat-icon class="biz-section__icon">videocam</mat-icon>
        <h3 class="biz-section__title" id="meetings-heading">{{ 'dashboard.upcomingMeetings' | transloco }}</h3>
      </div>
      <a routerLink="/dashboard/meetings" class="biz-btn-gray" [attr.aria-label]="'dashboard.viewAllMeetings' | transloco">
        {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
      </a>
    </div>

    @if (meetingsStatus() === 'error') {
      <!-- ER-1/ER-3: failed to load \u2014 distinct from empty, with retry -->
      <div class="biz-widget-state biz-widget-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ 'dashboard.states.error' | transloco }}</span>
        <button type="button" class="biz-widget-state__retry" (click)="reload()"
                [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
      </div>
    } @else if (meetings.length === 0) {
      <!-- E-1: loaded but no meetings -->
      <div class="biz-widget-state biz-widget-state--empty">
        <mat-icon aria-hidden="true">event_busy</mat-icon>
        <span>{{ 'dashboard.states.emptyMeetings' | transloco }}</span>
      </div>
    } @else {
      <div class="biz-meetings-grid">
        @for (meeting of meetings; track $index) {
          <div class="biz-meeting-card">
            <div class="biz-meeting-card__top">
              <div class="biz-meeting-card__id">
                <span class="biz-meeting-card__icon-wrap" aria-hidden="true">
                  <mat-icon class="biz-meeting-card__icon">videocam</mat-icon>
                </span>
                <p class="biz-meeting-card__title">{{ meeting.title }}</p>
              </div>
              <span
                class="biz-meeting-card__status"
                [class.biz-meeting-card__status--past]="meeting.status === 'past'"
                [class.biz-meeting-card__status--now]="meeting.status === 'now'"
              >
                <span class="biz-meeting-card__status-dot" aria-hidden="true"></span>
                {{ (meeting.status === 'now' ? ('dashboard.meeting.now' | transloco) : meeting.status === 'past' ? ('dashboard.meeting.past' | transloco) : ('dashboard.meeting.soon' | transloco)) }}
              </span>
            </div>
            <div class="biz-meeting-card__bottom">
              <p class="biz-meeting-card__time">
                <mat-icon class="biz-meeting-card__time-icon">schedule</mat-icon>
                {{ meeting.date }} {{ meeting.time }}
              </p>
              @if (meeting.link) {
                <a class="biz-meeting-card__open" [href]="meeting.link" target="_blank" rel="noopener noreferrer"
                   [attr.aria-label]="('dashboard.meeting.open' | transloco) + ': ' + meeting.title">{{ 'dashboard.meeting.open' | transloco }}</a>
              }
            </div>
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       KPI STATS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="biz-kpi-row" role="list" [attr.aria-label]="'dashboard.kpiList' | transloco">
    @for (stat of kpiStats; track stat.label) {
      <div class="biz-kpi-card" role="listitem">
        <div class="biz-kpi-card__header">
          <div class="biz-kpi-card__icon-wrap">
            <mat-icon class="biz-kpi-card__icon">{{ stat.icon }}</mat-icon>
          </div>
          <span
            class="biz-kpi-card__change"
            [class.biz-kpi-card__change--up]="stat.up"
            [class.biz-kpi-card__change--down]="!stat.up"
            [attr.aria-label]="(stat.up ? 'Up' : 'Down') + ' ' + stat.change + '% from last month'"
          >
            <mat-icon>{{ stat.up ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
            {{ stat.change }}%
          </span>
        </div>
        <p class="biz-kpi-card__value">{{ stat.value }}</p>
        <p class="biz-kpi-card__label">{{ stat.label | transloco }}</p>
        <p class="biz-kpi-card__sub">{{ stat.up ? '+' : '-' }}{{ stat.change }}% {{ 'dashboard.fromLastMonth' | transloco }}</p>
      </div>
    }
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PROJECTS WIDGET CARD
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="biz-section" aria-labelledby="projects-heading">
    <div class="biz-widget-card">
      <div class="biz-widget-header">
        <div class="biz-widget-header__left">
          <div class="biz-widget-icon-wrap">
            <mat-icon class="biz-widget-icon">folder</mat-icon>
          </div>
          <div>
            <h3 class="biz-widget-title" id="projects-heading">{{ 'dashboard.business.projectsTitle' | transloco }}</h3>
            <p class="biz-widget-subtitle">{{ 'dashboard.business.projectsSubtitle' | transloco }}</p>
          </div>
        </div>
        <a routerLink="/dashboard/projects" class="biz-btn-primary" [attr.aria-label]="'dashboard.viewAllProjects' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
        </a>
      </div>

      <div class="biz-widget-inner">
        @if (chartsStatus() === 'error') {
          <!-- ER-1/ER-3: project data failed to load -->
          <div class="biz-widget-state biz-widget-state--error" role="alert">
            <mat-icon aria-hidden="true">error_outline</mat-icon>
            <span>{{ 'dashboard.states.error' | transloco }}</span>
            <button type="button" class="biz-widget-state__retry" (click)="reload()"
                    [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
          </div>
        } @else if (kpiStats[0].value === 0) {
          <!-- E-4: loaded but no projects \u2192 no chart data -->
          <div class="biz-widget-state biz-widget-state--empty">
            <mat-icon aria-hidden="true">bar_chart</mat-icon>
            <span>{{ 'dashboard.states.emptyCharts' | transloco }}</span>
          </div>
        } @else {
        <div class="biz-charts-row">
          <!-- Project Status Donut -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.projectStatusOverview' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.projectStatusSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
                <option>{{ 'dashboard.last3Months' | transloco }}</option>
                <option>{{ 'dashboard.lastYear' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-donut-wrap">
              <div class="biz-chart-canvas-wrap" style="height:188px;">
                <canvas baseChart [data]="projectStatusData" [options]="projectStatusOptions" [type]="'doughnut'" [attr.aria-label]="'dashboard.projectStatusChart' | transloco"></canvas>
              </div>
              <div class="biz-donut-center" aria-hidden="true">{{ projectCompletedPercent }}%</div>
            </div>
            <div class="biz-legend">
              <span class="biz-legend__pill biz-legend__pill--success">{{ 'dashboard.status.completed' | transloco }}</span>
              <span class="biz-legend__pill biz-legend__pill--warning">{{ 'dashboard.status.inProgress' | transloco }}</span>
              <span class="biz-legend__pill biz-legend__pill--neutral">{{ 'dashboard.status.notStarted' | transloco }}</span>
            </div>
          </div>

          <!-- Projects by Manager Bar -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.business.projectsByManager' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.projectsByManagerSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
                <option>{{ 'dashboard.last3Months' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-canvas-wrap" style="height:240px;">
              <canvas baseChart [data]="projectsByManagerData" [options]="projectsByManagerOptions" [type]="'bar'" [attr.aria-label]="'dashboard.business.projectsByMgrChart' | transloco"></canvas>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TASKS WIDGET CARD
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="biz-section" aria-labelledby="tasks-heading">
    <div class="biz-widget-card">
      <div class="biz-widget-header">
        <div class="biz-widget-header__left">
          <div class="biz-widget-icon-wrap">
            <mat-icon class="biz-widget-icon">assignment</mat-icon>
          </div>
          <div>
            <h3 class="biz-widget-title" id="tasks-heading">{{ 'dashboard.business.tasksTitle' | transloco }}</h3>
            <p class="biz-widget-subtitle">{{ 'dashboard.business.tasksSubtitle' | transloco }}</p>
          </div>
        </div>
        <a routerLink="/dashboard/task-management" class="biz-btn-primary" [attr.aria-label]="'dashboard.viewAllTasks' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
        </a>
      </div>

      <div class="biz-widget-inner">
        <div class="biz-charts-row">
          <!-- Task Status Donut -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.business.taskStatusDist' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.taskStatusSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-donut-wrap">
              <div class="biz-chart-canvas-wrap" style="height:188px;">
                <canvas baseChart [data]="taskStatusData" [options]="taskStatusOptions" [type]="'doughnut'" [attr.aria-label]="'dashboard.business.taskStatusChart' | transloco"></canvas>
              </div>
              <div class="biz-donut-center" aria-hidden="true">
                <span class="biz-donut-center__val">1.8</span>
                <span class="biz-donut-center__label">Days</span>
              </div>
            </div>
            <div class="biz-legend biz-legend--squares">
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--success"></span>{{ 'dashboard.status.completed' | transloco }}</span>
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--neutral"></span>{{ 'dashboard.status.notStarted' | transloco }}</span>
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--primary"></span>{{ 'dashboard.status.inProgress' | transloco }}</span>
            </div>
          </div>

          <!-- Tasks by Priority Stacked Bar -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.business.projectsByManager' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.projectsByManagerSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-canvas-wrap" style="height:240px;">
              <canvas baseChart [data]="tasksByPriorityData" [options]="tasksByPriorityOptions" [type]="'bar'" [attr.aria-label]="'dashboard.business.tasksByPriorityChart' | transloco"></canvas>
            </div>
          </div>
        </div>

        <!-- Tasks Timeline Area \u2014 full width inside widget-inner -->
        <div class="biz-chart-card">
          <div class="biz-chart-card__header">
            <div>
              <p class="biz-chart-card__title">{{ 'dashboard.business.tasksTimeline' | transloco }}</p>
              <p class="biz-chart-card__sub">{{ 'dashboard.business.tasksTimelineSub' | transloco }}</p>
            </div>
            <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
              <option>{{ 'dashboard.lastMonth' | transloco }}</option>
            </select>
          </div>
          <div class="biz-chart-canvas-wrap" style="height:240px;">
            <canvas baseChart [data]="tasksTimelineData" [options]="tasksTimelineOptions" [type]="'line'" [attr.aria-label]="'dashboard.business.tasksTimelineChart' | transloco"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TEAMS WIDGET CARD
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="biz-section" aria-labelledby="teams-heading">
    <div class="biz-widget-card">
      <div class="biz-widget-header">
        <div class="biz-widget-header__left">
          <div class="biz-widget-icon-wrap">
            <mat-icon class="biz-widget-icon">groups</mat-icon>
          </div>
          <div>
            <h3 class="biz-widget-title" id="teams-heading">{{ 'dashboard.business.teamsTitle' | transloco }}</h3>
            <p class="biz-widget-subtitle">{{ 'dashboard.business.teamsSubtitle' | transloco }}</p>
          </div>
        </div>
        <a routerLink="/dashboard/teams" class="biz-btn-primary" [attr.aria-label]="'dashboard.viewAllTeams' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
        </a>
      </div>

      <div class="biz-widget-inner">
        <div class="biz-charts-row">
          <!-- Team Size Bar -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.business.teamSizeOverview' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.teamSizeOverviewSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-canvas-wrap" style="height:220px;">
              <canvas baseChart [data]="teamSizeData" [options]="teamSizeOptions" [type]="'bar'" [attr.aria-label]="'dashboard.business.teamSizeChart' | transloco"></canvas>
            </div>
          </div>

          <!-- Tasks per Team Stacked Bar -->
          <div class="biz-chart-card">
            <div class="biz-chart-card__header">
              <div>
                <p class="biz-chart-card__title">{{ 'dashboard.business.tasksPerTeam' | transloco }}</p>
                <p class="biz-chart-card__sub">{{ 'dashboard.business.tasksPerTeamSub' | transloco }}</p>
              </div>
              <select class="biz-select" [attr.aria-label]="'dashboard.timePeriod' | transloco" title="Select period">
                <option>{{ 'dashboard.lastMonth' | transloco }}</option>
              </select>
            </div>
            <div class="biz-chart-legend-row">
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--success"></span>{{ 'dashboard.status.completed' | transloco }}</span>
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--neutral"></span>{{ 'dashboard.status.notStarted' | transloco }}</span>
              <span class="biz-legend__sq-item"><span class="biz-legend__sq biz-legend__sq--primary"></span>{{ 'dashboard.status.inProgress' | transloco }}</span>
            </div>
            <div class="biz-chart-canvas-wrap" style="height:200px;">
              <canvas baseChart [data]="tasksPerTeamData" [options]="tasksPerTeamOptions" [type]="'bar'" [attr.aria-label]="'dashboard.business.tasksPerTeamChart' | transloco"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       BOTTOM ROW: TASKS OVERVIEW + RECENT ATTENDANCE
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="biz-bottom-row">

    <!-- Tasks Overview -->
    <section class="biz-bottom-card" aria-labelledby="tasks-overview-heading">
      <div class="biz-bottom-card__header">
        <div class="biz-bottom-card__title-group">
          <div class="biz-bottom-icon-wrap" aria-hidden="true">
            <mat-icon class="biz-bottom-icon">assignment</mat-icon>
          </div>
          <h3 class="biz-bottom-title" id="tasks-overview-heading">{{ 'dashboard.business.tasksOverview' | transloco }}</h3>
        </div>
        <a routerLink="/dashboard/task-management" class="biz-btn-gray" [attr.aria-label]="'dashboard.viewAllTasks' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
        </a>
      </div>

      @if (taskItems.length === 0) {
        <!-- E-2: no task data (no Task API integrated this phase) -->
        <div class="biz-widget-state biz-widget-state--empty">
          <mat-icon aria-hidden="true">assignment_turned_in</mat-icon>
          <span>{{ 'dashboard.states.emptyTasks' | transloco }}</span>
        </div>
      } @else {
        <ul class="biz-task-list" [attr.aria-label]="'dashboard.recentTasks' | transloco">
          @for (task of taskItems; track $index) {
            <li class="biz-task-item">
              <div class="biz-task-item__left">
                <div class="biz-task-item__icon-wrap" aria-hidden="true">
                  <mat-icon class="biz-task-item__icon">task_alt</mat-icon>
                </div>
                <div>
                  <p class="biz-task-item__name">{{ task.name }}</p>
                  <div class="biz-task-item__tags">
                    <span class="biz-tag biz-tag--orange">{{ 'dashboard.business.tagWebDesign' | transloco }}</span>
                    <span class="biz-tag biz-tag--primary">{{ 'dashboard.business.tagUIUX' | transloco }}</span>
                  </div>
                </div>
              </div>
              <span
                class="biz-status-pill"
                [class.biz-status-pill--done]="task.status === 'done'"
                [class.biz-status-pill--progress]="task.status === 'in-progress'"
                [class.biz-status-pill--not-started]="task.status === 'not-started'"
                [attr.aria-label]="getStatusLabel(task.status)"
              >{{ getStatusLabel(task.status) }}</span>
            </li>
          }
        </ul>
      }
    </section>

    <!-- Recent Attendance -->
    <section class="biz-bottom-card" aria-labelledby="attendance-heading">
      <div class="biz-bottom-card__header">
        <div class="biz-bottom-card__title-group">
          <div class="biz-bottom-icon-wrap" aria-hidden="true">
            <mat-icon class="biz-bottom-icon">how_to_reg</mat-icon>
          </div>
          <h3 class="biz-bottom-title" id="attendance-heading">{{ 'dashboard.business.recentAttendanceTitle' | transloco }}</h3>
        </div>
        <a routerLink="/dashboard/attendance" class="biz-btn-gray" [attr.aria-label]="'dashboard.viewAllAttendance' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="biz-btn-icon">expand_more</mat-icon>
        </a>
      </div>

      @if (attendanceItems.length === 0) {
        <!-- E-3: no attendance data (no Attendance API integrated this phase) -->
        <div class="biz-widget-state biz-widget-state--empty">
          <mat-icon aria-hidden="true">badge</mat-icon>
          <span>{{ 'dashboard.states.emptyAttendance' | transloco }}</span>
        </div>
      } @else {
        <ul class="biz-attendance-list" [attr.aria-label]="'dashboard.business.recentAttendance' | transloco">
          @for (item of attendanceItems; track $index) {
            <li class="biz-attendance-item">
              <div class="biz-attendance-item__avatar" aria-hidden="true">{{ getInitials(item.name) }}</div>
              <div class="biz-attendance-item__info">
                <p class="biz-attendance-item__name">{{ item.name }}</p>
                <p class="biz-attendance-item__role">{{ item.role }}</p>
              </div>
              <p class="biz-attendance-item__checkin">{{ 'dashboard.business.checkIn' | transloco }} {{ item.time }}</p>
            </li>
          }
        </ul>
      }
    </section>

  </div>

  } <!-- end @else -->

</div>
`, styles: ['/* src/features/dashboard/business-dashboard/business-dashboard.css */\n.biz-dash {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.biz-banner {\n  --biz-navy: #2e358f;\n  --biz-card-badge-bg: #d8daf3;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px 24px;\n  padding-block: 8px;\n  padding-inline: 24px;\n  border-radius: var(--radius-12);\n  background: var(--brand-tertiary-500);\n  overflow: hidden;\n  min-height: 160px;\n}\n.biz-banner__star {\n  position: absolute;\n  inset-block-start: -108px;\n  inset-inline-end: -45px;\n  width: 329px;\n  height: 329px;\n  pointer-events: none;\n  opacity: 0.9;\n}\n[dir=rtl] .biz-banner__star {\n  transform: scaleX(-1);\n}\n.biz-banner__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  z-index: 1;\n}\n.biz-banner__title {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.4;\n}\n.biz-banner__subtitle {\n  font-family: "DM Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #f7f5f2;\n  margin: 0;\n  line-height: 1.2;\n  max-width: 420px;\n}\n.biz-banner__cta {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  background: #1b1b1b;\n  color: #ffffff;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.biz-banner__cta:hover {\n  opacity: 0.9;\n}\n.biz-banner__cta:focus-visible {\n  outline: 2px solid #1b1b1b;\n  outline-offset: 2px;\n}\n.biz-banner__visual {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 1;\n}\n.biz-banner__avatar {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  flex-shrink: 0;\n}\n.biz-banner__avatar-photo {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top center;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--biz-navy) 52%,\n      rgba(101, 108, 205, 0));\n}\n.biz-banner__avatar-flag {\n  position: absolute;\n  inset-block-end: 4px;\n  inset-inline-end: -2px;\n  width: 39px;\n  height: 39px;\n}\n.biz-banner__card {\n  position: relative;\n  background: #ffffff;\n  border-radius: var(--radius-12);\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  min-width: 200px;\n}\n.biz-banner__card-badge {\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--biz-navy);\n  background: var(--biz-card-badge-bg);\n  padding: 5px 8px;\n  border-radius: 8px;\n  align-self: flex-start;\n}\n.biz-banner__card-text {\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1b1b1b;\n  margin: 0;\n  line-height: 1.5;\n}\n.biz-banner__card-accent {\n  color: var(--brand-tertiary-500);\n}\n.biz-banner__ai-btn {\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 33px;\n  padding-inline: 8px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #ffffff;\n  border: 1px solid var(--biz-navy);\n  border-radius: 10px;\n  background: var(--biz-navy);\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.biz-banner__ai-btn:hover {\n  opacity: 0.92;\n}\n.biz-banner__ai-btn:focus-visible {\n  outline: 2px solid var(--biz-navy);\n  outline-offset: 2px;\n}\n.biz-banner__ai-icon {\n  width: 16px;\n  height: 16px;\n}\n.biz-banner__dots {\n  position: absolute;\n  inset-block-end: 12px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  padding: 6px 12px;\n  border-radius: 33px;\n}\n.biz-banner__dot {\n  width: 7px;\n  height: 7px;\n  border-radius: var(--radius-full);\n  background: #f2f2f2;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.2s;\n}\n.biz-banner__dot.active {\n  background: var(--brand-tertiary-500);\n  box-shadow: 0 0 0 3px rgba(248, 119, 72, 0.4);\n}\n.biz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 0 1px rgba(46, 53, 143, 0.2), inset 0 -2px 0 rgba(37, 42, 116, 0.35);\n  transition: opacity 0.2s;\n}\n.biz-btn-primary:hover {\n  opacity: 0.9;\n}\n.biz-btn-primary:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.biz-btn-gray {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  height: 32px;\n  padding-inline: 12px;\n  border-radius: var(--radius-8);\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.06);\n  transition: background 0.2s;\n}\n.biz-btn-gray:hover {\n  background: var(--ui-border);\n}\n.biz-btn-gray:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.biz-btn-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.biz-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.biz-section__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.biz-section__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.biz-section__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-meetings-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 1024px) {\n  .biz-meetings-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .biz-meetings-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-meeting-card {\n  --biz-navy: #2e358f;\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-inline-start: 3px solid var(--biz-navy);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s;\n}\n.biz-meeting-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.biz-meeting-card:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.biz-meeting-card:nth-child(3) {\n  border-inline-start-color: var(--brand-secondary-500);\n}\n.biz-meeting-card:nth-child(4) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.biz-meeting-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.biz-meeting-card__id {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.biz-meeting-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.biz-meeting-card__icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-meeting-card__icon {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--biz-navy);\n}\n.biz-meeting-card__status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--functional-danger-500);\n  background: transparent;\n  color: var(--functional-danger-500);\n}\n.biz-meeting-card__status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  flex-shrink: 0;\n}\n.biz-meeting-card__status--past {\n  border-color: var(--functional-danger-500);\n  color: var(--functional-danger-500);\n}\n.biz-meeting-card__status--now {\n  border-color: var(--functional-success-500);\n  color: var(--functional-success-500);\n}\n.biz-meeting-card__title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-meeting-card__time {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  min-width: 0;\n}\n.biz-meeting-card__time-icon {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.biz-meeting-card__open {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  padding-inline: 16px;\n  border-radius: var(--radius-8);\n  background: #1b1b1b;\n  color: #ffffff;\n  border: none;\n  font-size: 0.72rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.biz-meeting-card__open:hover {\n  opacity: 0.9;\n}\n.biz-meeting-card__open:focus-visible {\n  outline: 2px solid #1b1b1b;\n  outline-offset: 2px;\n}\n.biz-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 1024px) {\n  .biz-kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .biz-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.biz-kpi-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.biz-kpi-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.biz-kpi-card__icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.biz-kpi-card__icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.biz-kpi-card__change {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n}\n.biz-kpi-card__change mat-icon {\n  font-size: 0.7rem;\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.biz-kpi-card__change--up {\n  background: var(--dash-stat-up-bg);\n  color: var(--dash-stat-up-text);\n}\n.biz-kpi-card__change--down {\n  background: var(--dash-stat-down-bg);\n  color: var(--dash-stat-down-text);\n}\n.biz-kpi-card__value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.biz-kpi-card__label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-kpi-card__sub {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.biz-widget-card {\n  background: var(--ui-surface);\n  border-radius: 20px;\n  box-shadow: 0 0 8px 4px rgba(149, 157, 157, 0.2);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.biz-widget-header__left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.biz-widget-icon-wrap {\n  width: 50px;\n  height: 50px;\n  border-radius: 13px;\n  background: var(--ui-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-widget-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: var(--ui-text-muted);\n}\n.biz-widget-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.3;\n}\n.biz-widget-subtitle {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.biz-widget-inner {\n  background: var(--brand-neutral-100);\n  border-radius: 26px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.biz-charts-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .biz-charts-row {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-chart-card {\n  background: var(--ui-surface);\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(149, 157, 157, 0.2);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.biz-chart-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.biz-chart-card__title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-chart-card__sub {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.biz-select {\n  font-size: 0.72rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: var(--radius-8);\n  border: none;\n  background: var(--ui-bg);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  outline: none;\n  min-width: 90px;\n  flex-shrink: 0;\n  height: 32px;\n}\n.biz-select:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 1px;\n}\n.biz-chart-canvas-wrap {\n  position: relative;\n  width: 100%;\n}\n.biz-chart-donut-wrap {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.biz-donut-center {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.biz-donut-center__val {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  line-height: 1;\n}\n.biz-donut-center__label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  margin-block-start: 2px;\n}\n.biz-donut-center:not(:has(.biz-donut-center__val)) {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.biz-legend {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.biz-legend__pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.biz-legend__pill--success {\n  background: rgba(54, 194, 32, 0.4);\n  color: var(--functional-success-600);\n}\n.biz-legend__pill--warning {\n  background: rgba(252, 190, 4, 0.4);\n  color: var(--brand-accent-600);\n}\n.biz-legend__pill--neutral {\n  background: rgba(204, 204, 204, 0.3);\n  color: var(--ui-text-muted);\n}\n.biz-legend--squares {\n  flex-direction: row;\n  gap: 1rem;\n}\n.biz-legend__sq-item {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  color: var(--ui-text-muted);\n}\n.biz-legend__sq {\n  width: 17px;\n  height: 17px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.biz-legend__sq--success {\n  background: var(--functional-success-500);\n}\n.biz-legend__sq--neutral {\n  background: var(--ui-text-muted);\n}\n.biz-legend__sq--primary {\n  background: var(--brand-primary-600);\n}\n.biz-chart-legend-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.biz-bottom-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .biz-bottom-row {\n    grid-template-columns: 1fr;\n  }\n}\n.biz-bottom-card {\n  background: var(--ui-surface);\n  border-radius: 16px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.biz-bottom-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.biz-bottom-card__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.biz-bottom-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  background: rgba(204, 204, 204, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-bottom-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--ui-text-main);\n}\n.biz-bottom-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-task-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.biz-task-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding-block: 0.5rem;\n  padding-inline: 0.5rem;\n  border-radius: var(--radius-8);\n  min-height: 60px;\n}\n.biz-task-item:hover {\n  background: var(--ui-bg);\n}\n.biz-task-item__left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.biz-task-item__icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: var(--brand-secondary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-task-item__icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.biz-task-item__name {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.biz-task-item__tags {\n  display: flex;\n  gap: 4px;\n  margin-block-start: 3px;\n  flex-wrap: wrap;\n}\n.biz-tag {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.biz-tag--orange {\n  background: var(--brand-tertiary-50);\n  color: var(--brand-tertiary-500);\n}\n.biz-tag--primary {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.biz-status-pill {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 5px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n  flex-shrink: 0;\n  background: var(--brand-neutral-200);\n  color: var(--ui-text-muted);\n}\n.biz-status-pill--done {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.biz-status-pill--progress {\n  background: var(--brand-accent-50);\n  color: var(--brand-accent-700);\n}\n.biz-status-pill--not-started {\n  background: var(--brand-neutral-200);\n  color: var(--ui-text-muted);\n}\n.biz-attendance-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.biz-attendance-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 6px 8px;\n  border-radius: 12px;\n  min-height: 60px;\n  transition: background 0.15s;\n}\n.biz-attendance-item:hover {\n  background: var(--ui-bg);\n}\n.biz-attendance-item__avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--brand-primary-600),\n      rgba(101, 108, 205, 0));\n  color: var(--ui-bg-surface);\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-attendance-item__info {\n  flex: 1;\n  min-width: 0;\n}\n.biz-attendance-item__name {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-attendance-item__role {\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 1px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.biz-attendance-item__checkin {\n  font-size: 0.72rem;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n  text-align: end;\n  flex-shrink: 0;\n}\n.biz-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--ui-text-muted);\n  font-size: 0.9rem;\n}\n.biz-widget-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.biz-widget-state mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.biz-widget-state--empty {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.biz-widget-state--error {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.biz-widget-state__retry {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.biz-widget-state__retry:hover {\n  background: var(--functional-danger-100);\n}\n/*# sourceMappingURL=business-dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessDashboardComponent, { className: "BusinessDashboardComponent", filePath: "src/features/dashboard/business-dashboard/business-dashboard.ts", lineNumber: 68 });
})();
export {
  BusinessDashboardComponent
};
//# sourceMappingURL=chunk-4WGQGORA.js.map
