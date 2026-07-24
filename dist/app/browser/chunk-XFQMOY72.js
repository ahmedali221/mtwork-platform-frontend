import {
  OrderStatus
} from "./chunk-D43U22HZ.js";
import {
  SalaryService
} from "./chunk-SZEG5LON.js";
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
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import "./chunk-5LLUWZOB.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
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
  CommonModule,
  NgClass
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/dashboard/employee-dashboard/employee-dashboard.ts
var _forTrack0 = ($index, $item) => $item.label;
function EmployeeDashboardComponent_Conditional_2_Template(rf, ctx) {
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
function EmployeeDashboardComponent_Conditional_3_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon", 33);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 53);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function EmployeeDashboardComponent_Conditional_3_Conditional_39_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reload());
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
function EmployeeDashboardComponent_Conditional_3_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 33);
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
function EmployeeDashboardComponent_Conditional_3_Conditional_41_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59)(1, "mat-icon", 60);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", meeting_r3.when, " ");
  }
}
function EmployeeDashboardComponent_Conditional_3_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "mat-icon", 56);
    \u0275\u0275text(3, "video_call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 58);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, EmployeeDashboardComponent_Conditional_3_Conditional_41_For_2_Conditional_12_Template, 4, 1, "p", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275classProp("emp-meeting-card__status--past", meeting_r3.status === "past")("emp-meeting-card__status--now", meeting_r3.status === "now");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", meeting_r3.status === "now" ? \u0275\u0275pipeBind1(6, 7, "dashboard.meeting.now") : meeting_r3.status === "past" ? \u0275\u0275pipeBind1(7, 9, "dashboard.meeting.past") : \u0275\u0275pipeBind1(8, 11, "dashboard.meeting.soon"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(meeting_r3.title || \u0275\u0275pipeBind1(11, 13, "dashboard.meeting.untitled"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(meeting_r3.when ? 12 : -1);
  }
}
function EmployeeDashboardComponent_Conditional_3_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, EmployeeDashboardComponent_Conditional_3_Conditional_41_For_2_Template, 13, 15, "div", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.meetings);
  }
}
function EmployeeDashboardComponent_Conditional_3_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 61)(2, "div", 62)(3, "mat-icon", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 65);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", stat_r4.iconBg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, stat_r4.label));
  }
}
function EmployeeDashboardComponent_Conditional_3_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon", 33);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 53);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function EmployeeDashboardComponent_Conditional_3_Conditional_104_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reload());
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
function EmployeeDashboardComponent_Conditional_3_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 33);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyRequests"));
  }
}
function EmployeeDashboardComponent_Conditional_3_Conditional_106_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 66)(1, "div", 67)(2, "mat-icon");
    \u0275\u0275text(3, "event_note");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 68)(5, "p", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 71);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(req_r6.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r6.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getRequestClass(req_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, ctx_r1.getRequestLabel(req_r6.status)), " ");
  }
}
function EmployeeDashboardComponent_Conditional_3_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 41);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, EmployeeDashboardComponent_Conditional_3_Conditional_106_For_3_Template, 12, 6, "li", 66, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "dashboard.employee.recentRequests"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.recentRequests);
  }
}
function EmployeeDashboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "mat-icon", 9);
    \u0275\u0275text(11, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 13);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "request_page");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "section", 14)(26, "div", 15)(27, "div", 16)(28, "mat-icon", 17);
    \u0275\u0275text(29, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h3", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 19);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementStart(37, "mat-icon", 20);
    \u0275\u0275text(38, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(39, EmployeeDashboardComponent_Conditional_3_Conditional_39_Template, 10, 9, "div", 21)(40, EmployeeDashboardComponent_Conditional_3_Conditional_40_Template, 6, 3, "div", 22)(41, EmployeeDashboardComponent_Conditional_3_Conditional_41_Template, 3, 0, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275repeaterCreate(44, EmployeeDashboardComponent_Conditional_3_For_45_Template, 10, 7, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 26)(47, "section", 27)(48, "div", 28)(49, "div")(50, "p", 29);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 30);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "a", 31);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementStart(60, "mat-icon", 20);
    \u0275\u0275text(61, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 32)(63, "mat-icon", 33);
    \u0275\u0275text(64, "insights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "section", 34)(69, "div", 28)(70, "div")(71, "p", 35);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 30);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "a", 36);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "transloco");
    \u0275\u0275elementStart(81, "mat-icon", 20);
    \u0275\u0275text(82, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 32)(84, "mat-icon", 33);
    \u0275\u0275text(85, "show_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "div", 37)(90, "section", 38)(91, "div", 28)(92, "div", 16)(93, "mat-icon", 17);
    \u0275\u0275text(94, "request_page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "h3", 39);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "a", 40);
    \u0275\u0275pipe(99, "transloco");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "transloco");
    \u0275\u0275elementStart(102, "mat-icon", 20);
    \u0275\u0275text(103, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(104, EmployeeDashboardComponent_Conditional_3_Conditional_104_Template, 10, 9, "div", 21)(105, EmployeeDashboardComponent_Conditional_3_Conditional_105_Template, 6, 3, "div", 22)(106, EmployeeDashboardComponent_Conditional_3_Conditional_106_Template, 4, 3, "ul", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "section", 42)(108, "div", 28)(109, "div", 16)(110, "mat-icon", 17);
    \u0275\u0275text(111, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "h3", 43);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "div", 44)(116, "a", 45);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementStart(118, "div", 46)(119, "mat-icon");
    \u0275\u0275text(120, "how_to_reg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "a", 47);
    \u0275\u0275pipe(125, "transloco");
    \u0275\u0275elementStart(126, "div", 48)(127, "mat-icon");
    \u0275\u0275text(128, "request_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "span");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "a", 49);
    \u0275\u0275pipe(133, "transloco");
    \u0275\u0275elementStart(134, "div", 50)(135, "mat-icon");
    \u0275\u0275text(136, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "span");
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "a", 51);
    \u0275\u0275pipe(141, "transloco");
    \u0275\u0275elementStart(142, "div", 52)(143, "mat-icon");
    \u0275\u0275text(144, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "span");
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 34, "dashboard.employee.bannerTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 36, "dashboard.employee.bannerSubtitle"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 38, "dashboard.employee.badge"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 40, "dashboard.employee.manageWork"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 42, "dashboard.employee.submitRequest"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 44, "dashboard.employee.request"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 46, "dashboard.upcomingMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 48, "dashboard.viewAllMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 50, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.meetingsStatus() === "error" ? 39 : ctx_r1.meetings.length === 0 ? 40 : 41);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(43, 52, "dashboard.kpiList"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.kpiStats);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 54, "dashboard.employee.monthlyAttendance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 56, "dashboard.employee.attendanceSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(57, 58, "dashboard.employee.viewAttendance"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 60, "dashboard.viewAll"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 62, "dashboard.states.emptyAttendance"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 64, "dashboard.employee.salaryHistory"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 66, "dashboard.employee.salarySub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(78, 68, "dashboard.employee.viewSalary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 70, "dashboard.viewAll"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 72, "dashboard.states.emptySalary"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 74, "dashboard.employee.recentRequestsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(99, 76, "dashboard.viewAllRequests"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(101, 78, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.requestsStatus() === "error" ? 104 : ctx_r1.recentRequests.length === 0 ? 105 : 106);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 80, "dashboard.employee.quickAccess"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(117, 82, "dashboard.goToAttendance"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 84, "dashboard.nav.attendance"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(125, 86, "dashboard.goToRequests"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 88, "dashboard.nav.requests"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(133, 90, "dashboard.goToSalary"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 92, "dashboard.nav.salary"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(141, 94, "dashboard.goToMeetings"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(147, 96, "dashboard.nav.meetings"));
  }
}
var _EmployeeDashboardComponent = class _EmployeeDashboardComponent {
  constructor() {
    this.meetingsService = inject(MeetingsService);
    this.hrService = inject(HrService);
    this.contractService = inject(ContractService);
    this.salaryService = inject(SalaryService);
    this.tokenService = inject(TokenService);
    this.languageService = inject(LanguageService);
    this.userId = this.tokenService.getUserId() ?? localStorage.getItem("userId") ?? "";
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.meetingsStatus = signal("loading", ...ngDevMode ? [{ debugName: "meetingsStatus" }] : []);
    this.requestsStatus = signal("loading", ...ngDevMode ? [{ debugName: "requestsStatus" }] : []);
    this.kpiStats = [
      { icon: "description", label: "dashboard.kpi.activeContracts", value: 0, iconBg: "var(--brand-primary-50)" },
      { icon: "payments", label: "dashboard.kpi.lastSalary", value: "\u2014", iconBg: "var(--functional-success-50)" },
      // Audit DEFECT-2: no attendance API is integrated, so a real rate cannot be
      // computed. Show a neutral no-data indicator instead of a fabricated "0%".
      { icon: "how_to_reg", label: "dashboard.kpi.attendanceRate", value: "\u2014", iconBg: "var(--brand-secondary-50)" },
      { icon: "request_page", label: "dashboard.kpi.pendingRequests", value: 0, iconBg: "var(--functional-warning-50)" }
    ];
    this.meetings = [];
    this.recentRequests = [];
  }
  /** Active UI locale for Intl date/time formatting — respects the language toggle. */
  get locale() {
    return this.languageService.currentLang();
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons (ER-2). */
  reload() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading.set(true);
    this.meetingsStatus.set("loading");
    this.requestsStatus.set("loading");
    const wrap = (src, fallback) => src.pipe(map((data) => ({ ok: true, data })), catchError(() => of({ ok: false, data: fallback })));
    forkJoin({
      meetings: wrap(this.meetingsService.getMeetings(), []),
      requests: wrap(this.hrService.getLeaveRequests(), []),
      contracts: wrap(this.contractService.getContracts(1, 10), { data: [], pagination: { totalItems: 0 } }),
      salary: this.userId ? wrap(this.salaryService.getEmployeeSalary(this.userId), null) : of({ ok: true, data: null })
    }).subscribe(({ meetings, requests, contracts, salary }) => {
      if (!meetings.ok) {
        this.meetings = [];
        this.meetingsStatus.set("error");
      } else {
        this.meetings = (meetings.data ?? []).slice(0, 3).map((m) => ({
          // Title left empty when absent — template renders a localized fallback.
          title: m.title || "",
          // Real start time only, formatted in the active locale. No timezone label
          // is invented: the API returns no zone, so we show date + time as-is.
          when: m.startTime ? new Date(m.startTime).toLocaleString(this.locale, {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) : "",
          status: this.getMeetingStatus(m)
        }));
        this.meetingsStatus.set("ok");
      }
      if (!requests.ok) {
        this.recentRequests = [];
        this.requestsStatus.set("error");
      } else {
        const reqList = requests.data ?? [];
        this.recentRequests = reqList.slice(0, 4).map((r) => ({
          // EC-2 (frozen): map from the real LeaveRequest fields.
          type: r.orderTypeName || r.leaveTypeName || "",
          date: r.createdAt ? new Date(r.createdAt).toLocaleDateString(this.locale, { month: "short", day: "numeric", year: "numeric" }) : "",
          // EC-3 (frozen): explicit OrderStatus mapping.
          status: this.mapOrderStatus(r.orderStatus)
        }));
        this.kpiStats[3].value = reqList.filter((r) => r.orderStatus === OrderStatus.Pending).length;
        this.requestsStatus.set("ok");
      }
      if (contracts.ok && contracts.data?.pagination?.totalItems != null) {
        this.kpiStats[0].value = contracts.data.pagination.totalItems;
      }
      if (salary.ok && salary.data?.salary) {
        const amount = salary.data.salary;
        this.kpiStats[1].value = salary.data.currency ? `${salary.data.currency} ${amount}` : `${amount}`;
      }
      this.isLoading.set(false);
    });
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
  /** EC-3: explicit OrderStatus → UI status (Canceled is its own state, not pending). */
  mapOrderStatus(orderStatus) {
    switch (orderStatus) {
      case OrderStatus.Approved:
        return "approved";
      case OrderStatus.Rejected:
        return "rejected";
      case OrderStatus.Canceled:
        return "canceled";
      default:
        return "pending";
    }
  }
  getRequestClass(status) {
    if (status === "approved")
      return "emp-request__status--approved";
    if (status === "rejected")
      return "emp-request__status--rejected";
    if (status === "canceled")
      return "emp-request__status--canceled";
    return "emp-request__status--pending";
  }
  /** Returns an i18n key — bind with transloco pipe in template. */
  getRequestLabel(status) {
    if (status === "approved")
      return "requests.status.approved";
    if (status === "rejected")
      return "requests.status.rejected";
    if (status === "canceled")
      return "requests.status.canceled";
    return "requests.status.pending";
  }
};
_EmployeeDashboardComponent.\u0275fac = function EmployeeDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeeDashboardComponent)();
};
_EmployeeDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeDashboardComponent, selectors: [["app-employee-dashboard"]], decls: 4, vars: 4, consts: [[1, "emp-dash"], ["role", "status", "aria-live", "polite", 1, "dashboard-loading"], [1, "dashboard-loading__spinner"], [1, "emp-banner"], [1, "emp-banner__content"], [1, "emp-banner__title"], [1, "emp-banner__sub"], ["aria-hidden", "true", 1, "emp-banner__visual"], [1, "emp-banner__avatar-ring"], [1, "emp-banner__avatar-icon"], [1, "emp-banner__card"], [1, "emp-banner__card-badge"], [1, "emp-banner__card-text"], ["routerLink", "/dashboard/requests", 1, "emp-banner__request-btn"], ["aria-labelledby", "emp-meetings-heading", 1, "emp-section"], [1, "emp-section__header"], [1, "emp-section__title-group"], [1, "emp-section__icon"], ["id", "emp-meetings-heading", 1, "emp-section__title"], ["routerLink", "/dashboard/meetings", 1, "emp-section__view-all"], [1, "emp-section__arrow"], ["role", "alert", 1, "emp-widget-state", "emp-widget-state--error"], [1, "emp-widget-state", "emp-widget-state--empty"], [1, "emp-meetings-grid"], ["role", "list", 1, "emp-kpi-row"], ["role", "listitem", 1, "emp-kpi-card"], [1, "emp-charts-row"], ["aria-labelledby", "emp-attendance-heading", 1, "emp-chart-card"], [1, "emp-chart-card__header"], ["id", "emp-attendance-heading", 1, "emp-chart-card__title"], [1, "emp-chart-card__sub"], ["routerLink", "/dashboard/attendance", 1, "emp-section__view-all"], [1, "emp-widget-state", "emp-widget-state--empty", 2, "min-height", "220px"], ["aria-hidden", "true"], ["aria-labelledby", "emp-salary-heading", 1, "emp-chart-card"], ["id", "emp-salary-heading", 1, "emp-chart-card__title"], ["routerLink", "/dashboard/salary", 1, "emp-section__view-all"], [1, "emp-bottom-row"], ["aria-labelledby", "emp-requests-heading", 1, "emp-chart-card"], ["id", "emp-requests-heading", 1, "emp-chart-card__title"], ["routerLink", "/dashboard/requests", 1, "emp-section__view-all"], [1, "emp-request-list"], ["aria-labelledby", "emp-quick-heading", 1, "emp-chart-card"], ["id", "emp-quick-heading", 1, "emp-chart-card__title"], [1, "emp-quick-links"], ["routerLink", "/dashboard/attendance", 1, "emp-quick-link"], [1, "emp-quick-link__icon", 2, "background", "var(--brand-secondary-50)"], ["routerLink", "/dashboard/requests", 1, "emp-quick-link"], [1, "emp-quick-link__icon", 2, "background", "var(--functional-warning-50)"], ["routerLink", "/dashboard/salary", 1, "emp-quick-link"], [1, "emp-quick-link__icon", 2, "background", "var(--functional-success-50)"], ["routerLink", "/dashboard/meetings", 1, "emp-quick-link"], [1, "emp-quick-link__icon", 2, "background", "var(--brand-tertiary-50)"], ["type", "button", 1, "emp-widget-state__retry", 3, "click"], [1, "emp-meeting-card"], [1, "emp-meeting-card__top"], [1, "emp-meeting-card__icon"], [1, "emp-meeting-card__status"], [1, "emp-meeting-card__title"], [1, "emp-meeting-card__time"], [1, "emp-meeting-card__time-icon"], [1, "emp-kpi-card__header"], [1, "emp-kpi-card__icon-wrap"], [1, "emp-kpi-card__icon"], [1, "emp-kpi-card__value"], [1, "emp-kpi-card__label"], [1, "emp-request-item"], [1, "emp-request__icon-wrap"], [1, "emp-request__info"], [1, "emp-request__type"], [1, "emp-request__date"], [1, "emp-request__status", 3, "ngClass"]], template: function EmployeeDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275conditionalCreate(2, EmployeeDashboardComponent_Conditional_2_Template, 5, 3, "div", 1)(3, EmployeeDashboardComponent_Conditional_3_Template, 148, 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "dashboard.employee.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 2 : 3);
  }
}, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ['\n\n.emp-widget-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.emp-widget-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.emp-widget-state--empty[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.emp-widget-state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.emp-widget-state__retry[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.emp-widget-state__retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n.emp-dash[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.emp-banner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 1.75rem;\n  padding-inline: 2rem;\n  border-radius: var(--radius-16);\n  background: var(--brand-secondary-600);\n  overflow: hidden;\n  min-height: 130px;\n}\n.emp-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-block-start: -40px;\n  inset-inline-end: 28%;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.emp-banner__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  max-width: 52%;\n  z-index: 1;\n}\n.emp-banner__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  margin: 0;\n  line-height: 1.4;\n}\n.emp-banner__sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0;\n  line-height: 1.5;\n}\n.emp-banner__cta[_ngcontent-%COMP%] {\n  margin-block-start: 0.5rem;\n  align-self: flex-start;\n  padding: 0.45rem 1.25rem;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-secondary-600);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  display: inline-block;\n}\n.emp-banner__cta[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.emp-banner__visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1;\n}\n.emp-banner__avatar-ring[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 3px solid rgba(255, 255, 255, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-banner__avatar-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  width: 2.2rem;\n  height: 2.2rem;\n  color: var(--ui-bg-surface);\n}\n.emp-banner__card[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-12);\n  padding: 0.65rem 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n  min-width: 130px;\n}\n.emp-banner__card-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--brand-secondary-700);\n  background: var(--brand-secondary-50);\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  align-self: flex-start;\n}\n.emp-banner__card-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-banner__request-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--brand-secondary-700);\n  border: 1px solid var(--brand-secondary-200);\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-50);\n  padding: 3px 10px;\n  text-decoration: none;\n  align-self: flex-start;\n  transition: background 0.2s;\n}\n.emp-banner__request-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.emp-banner__request-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-secondary-100);\n}\n.emp-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.emp-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-section__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.emp-section__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-section__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-section__view-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-secondary-700);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-secondary-200);\n  background: var(--brand-secondary-50);\n  transition: background 0.2s;\n}\n.emp-section__view-all[_ngcontent-%COMP%]:hover {\n  background: var(--brand-secondary-100);\n}\n.emp-section__arrow[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.emp-meetings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .emp-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-meeting-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start: 3px solid var(--brand-secondary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.emp-meeting-card[_ngcontent-%COMP%]:nth-child(2) {\n  border-inline-start-color: var(--brand-primary-400);\n}\n.emp-meeting-card[_ngcontent-%COMP%]:nth-child(3) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.emp-meeting-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-meeting-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-secondary-500);\n}\n.emp-meeting-card__status[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-50);\n  color: var(--brand-secondary-700);\n}\n.emp-meeting-card__status--past[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.emp-meeting-card__status--now[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.emp-meeting-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-meeting-card__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-meeting-card__time-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.emp-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 900px) {\n  .emp-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .emp-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-kpi-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.emp-kpi-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.emp-kpi-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-kpi-card__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.emp-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .emp-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-chart-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.emp-chart-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.emp-chart-card__title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-chart-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.emp-bottom-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .emp-bottom-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-request-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.emp-request-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.emp-request__icon-wrap[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-8);\n  background: var(--brand-secondary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emp-request__icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-request__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.emp-request__type[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-request__date[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-request__status[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.emp-request__status--approved[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.emp-request__status--rejected[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.emp-request__status--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.emp-request__status--canceled[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.emp-quick-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.emp-quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.5rem;\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  text-decoration: none;\n  color: var(--ui-text-main);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.emp-quick-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.emp-quick-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-secondary-400);\n  outline-offset: 2px;\n}\n.emp-quick-link__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-quick-link__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--brand-secondary-600);\n}\n/*# sourceMappingURL=employee-dashboard.css.map */'] });
var EmployeeDashboardComponent = _EmployeeDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-employee-dashboard", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule], template: `<div class="emp-dash" [attr.aria-label]="'dashboard.employee.title' | transloco">

  @if (isLoading()) {
    <div class="dashboard-loading" role="status" aria-live="polite">
      <div class="dashboard-loading__spinner"></div>
      <p>{{ 'common.loading' | transloco }}</p>
    </div>
  } @else {

  <!-- \u2500\u2500 HERO BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="emp-banner">
    <div class="emp-banner__content">
      <h2 class="emp-banner__title">{{ 'dashboard.employee.bannerTitle' | transloco }}</h2>
      <p class="emp-banner__sub">{{ 'dashboard.employee.bannerSubtitle' | transloco }}</p>
      <!-- Audit DEFECT-1: removed dead "My Contracts" CTA \u2014 /dashboard/contracts is
           gated to [Admin, Business] (FeatureAccess.contracts), so an Employee was
           bounced back here. The request button (in the visual card) remains the
           working primary action for this role. -->
    </div>
    <div class="emp-banner__visual" aria-hidden="true">
      <div class="emp-banner__avatar-ring">
        <mat-icon class="emp-banner__avatar-icon">person</mat-icon>
      </div>
      <div class="emp-banner__card">
        <span class="emp-banner__card-badge">{{ 'dashboard.employee.badge' | transloco }}</span>
        <p class="emp-banner__card-text">{{ 'dashboard.employee.manageWork' | transloco }}</p>
        <a routerLink="/dashboard/requests" class="emp-banner__request-btn" [attr.aria-label]="'dashboard.employee.submitRequest' | transloco">
          <mat-icon>request_page</mat-icon> {{ 'dashboard.employee.request' | transloco }}
        </a>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 UPCOMING MEETINGS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="emp-section" aria-labelledby="emp-meetings-heading">
    <div class="emp-section__header">
      <div class="emp-section__title-group">
        <mat-icon class="emp-section__icon">videocam</mat-icon>
        <h3 class="emp-section__title" id="emp-meetings-heading">{{ 'dashboard.upcomingMeetings' | transloco }}</h3>
      </div>
      <a routerLink="/dashboard/meetings" class="emp-section__view-all" [attr.aria-label]="'dashboard.viewAllMeetings' | transloco">
        {{ 'dashboard.viewAll' | transloco }} <mat-icon class="emp-section__arrow">expand_more</mat-icon>
      </a>
    </div>
    @if (meetingsStatus() === 'error') {
      <div class="emp-widget-state emp-widget-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ 'dashboard.states.error' | transloco }}</span>
        <button type="button" class="emp-widget-state__retry" (click)="reload()"
                [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
      </div>
    } @else if (meetings.length === 0) {
      <div class="emp-widget-state emp-widget-state--empty">
        <mat-icon aria-hidden="true">event_busy</mat-icon>
        <span>{{ 'dashboard.states.emptyMeetings' | transloco }}</span>
      </div>
    } @else {
      <div class="emp-meetings-grid">
        @for (meeting of meetings; track $index) {
          <div class="emp-meeting-card">
            <div class="emp-meeting-card__top">
              <mat-icon class="emp-meeting-card__icon">video_call</mat-icon>
              <span class="emp-meeting-card__status"
                [class.emp-meeting-card__status--past]="meeting.status === 'past'"
                [class.emp-meeting-card__status--now]="meeting.status === 'now'">
                {{ meeting.status === 'now' ? ('dashboard.meeting.now' | transloco) : meeting.status === 'past' ? ('dashboard.meeting.past' | transloco) : ('dashboard.meeting.soon' | transloco) }}
              </span>
            </div>
            <p class="emp-meeting-card__title">{{ meeting.title || ('dashboard.meeting.untitled' | transloco) }}</p>
            @if (meeting.when) {
              <p class="emp-meeting-card__time">
                <mat-icon class="emp-meeting-card__time-icon">schedule</mat-icon>
                {{ meeting.when }}
              </p>
            }
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2500\u2500 KPI STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="emp-kpi-row" role="list" [attr.aria-label]="'dashboard.kpiList' | transloco">
    @for (stat of kpiStats; track stat.label) {
      <div class="emp-kpi-card" role="listitem">
        <div class="emp-kpi-card__header">
          <div class="emp-kpi-card__icon-wrap" [style.background]="stat.iconBg">
            <mat-icon class="emp-kpi-card__icon">{{ stat.icon }}</mat-icon>
          </div>
        </div>
        <p class="emp-kpi-card__value">{{ stat.value }}</p>
        <p class="emp-kpi-card__label">{{ stat.label | transloco }}</p>
      </div>
    }
  </div>

  <!-- \u2500\u2500 ATTENDANCE + SALARY CHARTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="emp-charts-row">
    <section class="emp-chart-card" aria-labelledby="emp-attendance-heading">
      <div class="emp-chart-card__header">
        <div>
          <p class="emp-chart-card__title" id="emp-attendance-heading">{{ 'dashboard.employee.monthlyAttendance' | transloco }}</p>
          <p class="emp-chart-card__sub">{{ 'dashboard.employee.attendanceSub' | transloco }}</p>
        </div>
        <a routerLink="/dashboard/attendance" class="emp-section__view-all" [attr.aria-label]="'dashboard.employee.viewAttendance' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="emp-section__arrow">expand_more</mat-icon>
        </a>
      </div>
      <!-- E-3: no attendance API integrated this phase \u2014 honest empty state, no fabricated chart. -->
      <div class="emp-widget-state emp-widget-state--empty" style="min-height:220px;">
        <mat-icon aria-hidden="true">insights</mat-icon>
        <span>{{ 'dashboard.states.emptyAttendance' | transloco }}</span>
      </div>
    </section>

    <section class="emp-chart-card" aria-labelledby="emp-salary-heading">
      <div class="emp-chart-card__header">
        <div>
          <p class="emp-chart-card__title" id="emp-salary-heading">{{ 'dashboard.employee.salaryHistory' | transloco }}</p>
          <p class="emp-chart-card__sub">{{ 'dashboard.employee.salarySub' | transloco }}</p>
        </div>
        <a routerLink="/dashboard/salary" class="emp-section__view-all" [attr.aria-label]="'dashboard.employee.viewSalary' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="emp-section__arrow">expand_more</mat-icon>
        </a>
      </div>
      <!-- E-4: salary history not integrated this phase \u2014 honest empty state, no fabricated trend. -->
      <div class="emp-widget-state emp-widget-state--empty" style="min-height:220px;">
        <mat-icon aria-hidden="true">show_chart</mat-icon>
        <span>{{ 'dashboard.states.emptySalary' | transloco }}</span>
      </div>
    </section>
  </div>

  <!-- \u2500\u2500 BOTTOM ROW: REQUESTS + QUICK ACCESS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="emp-bottom-row">

    <!-- Recent Requests -->
    <section class="emp-chart-card" aria-labelledby="emp-requests-heading">
      <div class="emp-chart-card__header">
        <div class="emp-section__title-group">
          <mat-icon class="emp-section__icon">request_page</mat-icon>
          <h3 class="emp-chart-card__title" id="emp-requests-heading">{{ 'dashboard.employee.recentRequestsTitle' | transloco }}</h3>
        </div>
        <a routerLink="/dashboard/requests" class="emp-section__view-all" [attr.aria-label]="'dashboard.viewAllRequests' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="emp-section__arrow">expand_more</mat-icon>
        </a>
      </div>
      @if (requestsStatus() === 'error') {
        <div class="emp-widget-state emp-widget-state--error" role="alert">
          <mat-icon aria-hidden="true">error_outline</mat-icon>
          <span>{{ 'dashboard.states.error' | transloco }}</span>
          <button type="button" class="emp-widget-state__retry" (click)="reload()"
                  [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
        </div>
      } @else if (recentRequests.length === 0) {
        <div class="emp-widget-state emp-widget-state--empty">
          <mat-icon aria-hidden="true">inbox</mat-icon>
          <span>{{ 'dashboard.states.emptyRequests' | transloco }}</span>
        </div>
      } @else {
        <ul class="emp-request-list" [attr.aria-label]="'dashboard.employee.recentRequests' | transloco">
          @for (req of recentRequests; track $index) {
            <li class="emp-request-item">
              <div class="emp-request__icon-wrap">
                <mat-icon>event_note</mat-icon>
              </div>
              <div class="emp-request__info">
                <p class="emp-request__type">{{ req.type }}</p>
                <p class="emp-request__date">{{ req.date }}</p>
              </div>
              <span class="emp-request__status" [ngClass]="getRequestClass(req.status)">
                {{ getRequestLabel(req.status) | transloco }}
              </span>
            </li>
          }
        </ul>
      }
    </section>

    <!-- Quick Access -->
    <section class="emp-chart-card" aria-labelledby="emp-quick-heading">
      <div class="emp-chart-card__header">
        <div class="emp-section__title-group">
          <mat-icon class="emp-section__icon">apps</mat-icon>
          <h3 class="emp-chart-card__title" id="emp-quick-heading">{{ 'dashboard.employee.quickAccess' | transloco }}</h3>
        </div>
      </div>
      <div class="emp-quick-links">
        <!-- Audit DEFECT-1: removed dead "Contracts" quick-link \u2014 /dashboard/contracts
             is gated to [Admin, Business], not available to Employees. -->
        <a routerLink="/dashboard/attendance" class="emp-quick-link" [attr.aria-label]="'dashboard.goToAttendance' | transloco">
          <div class="emp-quick-link__icon" style="background:var(--brand-secondary-50)">
            <mat-icon>how_to_reg</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.attendance' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/requests" class="emp-quick-link" [attr.aria-label]="'dashboard.goToRequests' | transloco">
          <div class="emp-quick-link__icon" style="background:var(--functional-warning-50)">
            <mat-icon>request_page</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.requests' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/salary" class="emp-quick-link" [attr.aria-label]="'dashboard.goToSalary' | transloco">
          <div class="emp-quick-link__icon" style="background:var(--functional-success-50)">
            <mat-icon>payments</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.salary' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/meetings" class="emp-quick-link" [attr.aria-label]="'dashboard.goToMeetings' | transloco">
          <div class="emp-quick-link__icon" style="background:var(--brand-tertiary-50)">
            <mat-icon>event</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.meetings' | transloco }}</span>
        </a>
      </div>
    </section>

  </div>

  }

</div>
`, styles: ['/* src/features/dashboard/employee-dashboard/employee-dashboard.css */\n.emp-widget-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.emp-widget-state mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.emp-widget-state--empty {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.emp-widget-state--error {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.emp-widget-state__retry {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.emp-widget-state__retry:hover {\n  background: var(--functional-danger-100);\n}\n.emp-dash {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.emp-banner {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 1.75rem;\n  padding-inline: 2rem;\n  border-radius: var(--radius-16);\n  background: var(--brand-secondary-600);\n  overflow: hidden;\n  min-height: 130px;\n}\n.emp-banner::before {\n  content: "";\n  position: absolute;\n  inset-block-start: -40px;\n  inset-inline-end: 28%;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.emp-banner__content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  max-width: 52%;\n  z-index: 1;\n}\n.emp-banner__title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  margin: 0;\n  line-height: 1.4;\n}\n.emp-banner__sub {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0;\n  line-height: 1.5;\n}\n.emp-banner__cta {\n  margin-block-start: 0.5rem;\n  align-self: flex-start;\n  padding: 0.45rem 1.25rem;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-secondary-600);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  display: inline-block;\n}\n.emp-banner__cta:hover {\n  opacity: 0.9;\n}\n.emp-banner__visual {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1;\n}\n.emp-banner__avatar-ring {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 3px solid rgba(255, 255, 255, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-banner__avatar-icon {\n  font-size: 2.2rem;\n  width: 2.2rem;\n  height: 2.2rem;\n  color: var(--ui-bg-surface);\n}\n.emp-banner__card {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-12);\n  padding: 0.65rem 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n  min-width: 130px;\n}\n.emp-banner__card-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--brand-secondary-700);\n  background: var(--brand-secondary-50);\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  align-self: flex-start;\n}\n.emp-banner__card-text {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-banner__request-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--brand-secondary-700);\n  border: 1px solid var(--brand-secondary-200);\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-50);\n  padding: 3px 10px;\n  text-decoration: none;\n  align-self: flex-start;\n  transition: background 0.2s;\n}\n.emp-banner__request-btn mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.emp-banner__request-btn:hover {\n  background: var(--brand-secondary-100);\n}\n.emp-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.emp-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-section__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.emp-section__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-section__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-section__view-all {\n  display: flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-secondary-700);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-secondary-200);\n  background: var(--brand-secondary-50);\n  transition: background 0.2s;\n}\n.emp-section__view-all:hover {\n  background: var(--brand-secondary-100);\n}\n.emp-section__arrow {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.emp-meetings-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .emp-meetings-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-meeting-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start: 3px solid var(--brand-secondary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.emp-meeting-card:nth-child(2) {\n  border-inline-start-color: var(--brand-primary-400);\n}\n.emp-meeting-card:nth-child(3) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.emp-meeting-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.emp-meeting-card__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-secondary-500);\n}\n.emp-meeting-card__status {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-50);\n  color: var(--brand-secondary-700);\n}\n.emp-meeting-card__status--past {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.emp-meeting-card__status--now {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.emp-meeting-card__title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-meeting-card__time {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-meeting-card__time-icon {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.emp-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 900px) {\n  .emp-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .emp-kpi-row {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-kpi-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.emp-kpi-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.emp-kpi-card__icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-kpi-card__icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-kpi-card__value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.emp-kpi-card__label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-charts-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .emp-charts-row {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-chart-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.emp-chart-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.emp-chart-card__title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-chart-card__sub {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.emp-bottom-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .emp-bottom-row {\n    grid-template-columns: 1fr;\n  }\n}\n.emp-request-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.emp-request-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.emp-request__icon-wrap {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-8);\n  background: var(--brand-secondary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emp-request__icon-wrap mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-secondary-600);\n}\n.emp-request__info {\n  flex: 1;\n  min-width: 0;\n}\n.emp-request__type {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.emp-request__date {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.emp-request__status {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.emp-request__status--approved {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.emp-request__status--rejected {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.emp-request__status--pending {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.emp-request__status--canceled {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.emp-quick-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.emp-quick-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.5rem;\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  text-decoration: none;\n  color: var(--ui-text-main);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.emp-quick-link:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.emp-quick-link:focus-visible {\n  outline: 2px solid var(--brand-secondary-400);\n  outline-offset: 2px;\n}\n.emp-quick-link__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emp-quick-link__icon mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--brand-secondary-600);\n}\n/*# sourceMappingURL=employee-dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeDashboardComponent, { className: "EmployeeDashboardComponent", filePath: "src/features/dashboard/employee-dashboard/employee-dashboard.ts", lineNumber: 51 });
})();
export {
  EmployeeDashboardComponent
};
//# sourceMappingURL=chunk-XFQMOY72.js.map
