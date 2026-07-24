import {
  WithdrawService
} from "./chunk-VXEZP5JU.js";
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/dashboard/contractor-dashboard/contractor-dashboard.ts
var _forTrack0 = ($index, $item) => $item.label;
function ContractorDashboardComponent_Conditional_2_Template(rf, ctx) {
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
function ContractorDashboardComponent_Conditional_3_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 33);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function ContractorDashboardComponent_Conditional_3_Conditional_43_Template_button_click_6_listener() {
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
function ContractorDashboardComponent_Conditional_3_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon", 33);
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
function ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60)(1, "mat-icon", 62);
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
function ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", meeting_r3.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "dashboard.meeting.open") + ": " + (meeting_r3.title || \u0275\u0275pipeBind1(2, 5, "dashboard.meeting.untitled")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "dashboard.meeting.open"));
  }
}
function ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-icon", 57);
    \u0275\u0275text(3, "video_call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 59);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Conditional_12_Template, 4, 1, "p", 60);
    \u0275\u0275conditionalCreate(13, ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Conditional_13_Template, 5, 9, "a", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ct-meeting-card__status--past", meeting_r3.status === "past")("ct-meeting-card__status--now", meeting_r3.status === "now");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", meeting_r3.status === "now" ? \u0275\u0275pipeBind1(6, 8, "dashboard.meeting.now") : meeting_r3.status === "past" ? \u0275\u0275pipeBind1(7, 10, "dashboard.meeting.past") : \u0275\u0275pipeBind1(8, 12, "dashboard.meeting.soon"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(meeting_r3.title || \u0275\u0275pipeBind1(11, 14, "dashboard.meeting.untitled"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(meeting_r3.when ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(meeting_r3.link ? 13 : -1);
  }
}
function ContractorDashboardComponent_Conditional_3_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ContractorDashboardComponent_Conditional_3_Conditional_45_For_2_Template, 14, 16, "div", 55, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.meetings);
  }
}
function ContractorDashboardComponent_Conditional_3_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 63)(2, "div", 64)(3, "mat-icon", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 67);
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
function ContractorDashboardComponent_Conditional_3_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon", 33);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function ContractorDashboardComponent_Conditional_3_Conditional_68_Template_button_click_6_listener() {
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
function ContractorDashboardComponent_Conditional_3_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon", 33);
    \u0275\u0275text(2, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "dashboard.states.emptyProjectStatus"));
  }
}
function ContractorDashboardComponent_Conditional_3_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40)(1, "div", 68)(2, "mat-icon");
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 69)(5, "p", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 72);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(w_r6.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r6.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getWithdrawalClass(w_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, ctx_r1.getWithdrawalLabel(w_r6.status)), " ");
  }
}
function ContractorDashboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "mat-icon", 10);
    \u0275\u0275text(15, "engineering");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 13);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 14);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "section", 15)(30, "div", 16)(31, "div", 17)(32, "mat-icon", 18);
    \u0275\u0275text(33, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h3", 19);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "a", 20);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementStart(41, "mat-icon", 21);
    \u0275\u0275text(42, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(43, ContractorDashboardComponent_Conditional_3_Conditional_43_Template, 10, 9, "div", 22)(44, ContractorDashboardComponent_Conditional_3_Conditional_44_Template, 6, 3, "div", 23)(45, ContractorDashboardComponent_Conditional_3_Conditional_45_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 25);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275repeaterCreate(48, ContractorDashboardComponent_Conditional_3_For_49_Template, 10, 7, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "section", 27)(51, "div", 16)(52, "div", 17)(53, "mat-icon", 18);
    \u0275\u0275text(54, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div")(56, "h3", 28);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 29);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "a", 30);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275elementStart(66, "mat-icon", 21);
    \u0275\u0275text(67, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(68, ContractorDashboardComponent_Conditional_3_Conditional_68_Template, 10, 9, "div", 22)(69, ContractorDashboardComponent_Conditional_3_Conditional_69_Template, 6, 3, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "section", 31)(71, "div", 16)(72, "div", 17)(73, "mat-icon", 18);
    \u0275\u0275text(74, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div")(76, "h3", 32);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 29);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 23)(83, "mat-icon", 33);
    \u0275\u0275text(84, "show_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 34)(89, "section", 35)(90, "div", 36)(91, "div", 17)(92, "mat-icon", 18);
    \u0275\u0275text(93, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "h3", 37);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "a", 38);
    \u0275\u0275pipe(98, "transloco");
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "transloco");
    \u0275\u0275elementStart(101, "mat-icon", 21);
    \u0275\u0275text(102, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "ul", 39);
    \u0275\u0275pipe(104, "transloco");
    \u0275\u0275repeaterCreate(105, ContractorDashboardComponent_Conditional_3_For_106_Template, 12, 6, "li", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "section", 41)(108, "div", 36)(109, "div", 17)(110, "mat-icon", 18);
    \u0275\u0275text(111, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "h3", 42);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "div", 43)(116, "a", 44);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementStart(118, "div", 45)(119, "mat-icon");
    \u0275\u0275text(120, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "a", 46);
    \u0275\u0275pipe(125, "transloco");
    \u0275\u0275elementStart(126, "div", 47)(127, "mat-icon");
    \u0275\u0275text(128, "folder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "span");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "a", 48);
    \u0275\u0275pipe(133, "transloco");
    \u0275\u0275elementStart(134, "div", 49)(135, "mat-icon");
    \u0275\u0275text(136, "groups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "span");
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "a", 50);
    \u0275\u0275pipe(141, "transloco");
    \u0275\u0275elementStart(142, "div", 51)(143, "mat-icon");
    \u0275\u0275text(144, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "span");
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "a", 52);
    \u0275\u0275pipe(149, "transloco");
    \u0275\u0275elementStart(150, "div", 53)(151, "mat-icon");
    \u0275\u0275text(152, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "span");
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 36, "dashboard.contractor.bannerTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 38, "dashboard.contractor.bannerSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 40, "dashboard.viewContracts"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 42, "dashboard.contractor.viewContracts"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 44, "dashboard.contractor.badge"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 46, "dashboard.contractor.manageWork"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 48, "dashboard.goToWithdrawals"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 50, "dashboard.contractor.withdraw"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 52, "dashboard.upcomingMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 54, "dashboard.viewAllMeetings"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 56, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.meetingsStatus() === "error" ? 43 : ctx_r1.meetings.length === 0 ? 44 : 45);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 58, "dashboard.kpiList"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.kpiStats);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 60, "dashboard.contractor.projectsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 62, "dashboard.contractor.projectsSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(63, 64, "dashboard.viewAllProjects"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 66, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.projectsStatus() === "error" ? 68 : 69);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 68, "dashboard.contractor.tasksTimelineTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 70, "dashboard.contractor.tasksTimelineSub"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 72, "dashboard.states.emptyTasksTimeline"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 74, "dashboard.contractor.recentWithdrawalsTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(98, 76, "dashboard.viewAllWithdrawals"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 78, "dashboard.viewAll"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(104, 80, "dashboard.contractor.recentWithdrawals"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.recentWithdrawals);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 82, "dashboard.contractor.quickAccess"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(117, 84, "dashboard.goToContracts"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 86, "dashboard.nav.contracts"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(125, 88, "dashboard.goToProjects"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 90, "dashboard.nav.projects"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(133, 92, "dashboard.goToTeams"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 94, "dashboard.nav.teams"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(141, 96, "dashboard.goToMeetings"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(147, 98, "dashboard.nav.meetings"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(149, 100, "dashboard.goToWithdrawals"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 102, "dashboard.nav.withdrawals"));
  }
}
var _ContractorDashboardComponent = class _ContractorDashboardComponent {
  constructor() {
    this.projectService = inject(ProjectService);
    this.meetingsService = inject(MeetingsService);
    this.teamsService = inject(TeamsService);
    this.withdrawService = inject(WithdrawService);
    this.languageService = inject(LanguageService);
    this.userId = localStorage.getItem("userId") ?? "";
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.meetingsStatus = signal("loading", ...ngDevMode ? [{ debugName: "meetingsStatus" }] : []);
    this.projectsStatus = signal("loading", ...ngDevMode ? [{ debugName: "projectsStatus" }] : []);
    this.kpiStats = [
      { icon: "description", label: "dashboard.kpi.activeContracts", value: 0, iconBg: "var(--brand-primary-50)" },
      { icon: "folder_open", label: "dashboard.kpi.totalProjects", value: 0, iconBg: "var(--brand-secondary-50)" },
      { icon: "groups", label: "dashboard.kpi.teams", value: 0, iconBg: "var(--functional-success-50)" },
      { icon: "account_balance_wallet", label: "dashboard.kpi.pendingWithdrawals", value: 0, iconBg: "var(--functional-warning-50)" }
    ];
    this.meetings = [];
    this.recentWithdrawals = [];
  }
  /** Active UI locale for Intl date/time formatting — respects the language toggle. */
  get locale() {
    return this.languageService.currentLang();
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  /** Re-run the dashboard load. Used by ngOnInit and all retry buttons. */
  reload() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading.set(true);
    this.meetingsStatus.set("loading");
    this.projectsStatus.set("loading");
    const wrap = (src, fallback) => src.pipe(map((data) => ({ ok: true, data })), catchError(() => of({ ok: false, data: fallback })));
    forkJoin({
      projects: wrap(this.projectService.getProjects(), []),
      meetings: wrap(this.meetingsService.getMeetings(), []),
      teams: wrap(this.teamsService.getTeams(), []),
      withdrawals: this.userId ? wrap(this.withdrawService.getEmployeeHistory(this.userId).pipe(map(({ entries }) => entries)), []) : of({ ok: true, data: [] })
    }).subscribe(({ projects, meetings, teams, withdrawals }) => {
      this.projectsStatus.set(projects.ok ? "ok" : "error");
      const projectList = projects.ok ? projects.data ?? [] : [];
      if (projectList.length) {
        this.kpiStats[1].value = projectList.length;
      }
      if (teams.ok && teams.data?.length) {
        this.kpiStats[2].value = teams.data.length;
      }
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
          status: this.getMeetingStatus(m),
          link: m.meetingLink
        }));
        this.meetingsStatus.set("ok");
      }
      const wList = withdrawals.ok ? withdrawals.data ?? [] : [];
      if (wList.length) {
        this.kpiStats[3].value = wList.filter((w) => w.status === "pending").length;
        this.recentWithdrawals = wList.slice(0, 4).map((w) => ({
          amount: this.formatAmount(w.amount),
          status: w.status,
          date: w.createdAt ? new Date(w.createdAt).toLocaleDateString(this.locale, { month: "short", day: "numeric", year: "numeric" }) : ""
        }));
      }
      this.isLoading.set(false);
    });
  }
  /** Localized number formatting for withdrawal amounts. The WithdrawEntry
   *  backend contract carries NO currency field, so no currency symbol is
   *  inferred — the real amount is shown as a plain localized number, per the
   *  "never infer business values" rule. */
  formatAmount(amount) {
    return new Intl.NumberFormat(this.locale, {
      maximumFractionDigits: 2
    }).format(amount ?? 0);
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
  getWithdrawalClass(status) {
    if (status === "approved")
      return "ct-withdrawal__status--approved";
    if (status === "rejected")
      return "ct-withdrawal__status--rejected";
    return "ct-withdrawal__status--pending";
  }
  getWithdrawalLabel(status) {
    const map2 = {
      approved: "salary.withdrawStatus.approved",
      rejected: "salary.withdrawStatus.rejected",
      pending: "salary.withdrawStatus.pending"
    };
    return map2[status] ?? "salary.withdrawStatus.pending";
  }
};
_ContractorDashboardComponent.\u0275fac = function ContractorDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContractorDashboardComponent)();
};
_ContractorDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractorDashboardComponent, selectors: [["app-contractor-dashboard"]], decls: 4, vars: 4, consts: [[1, "ct-dash"], ["role", "status", "aria-live", "polite", 1, "dashboard-loading"], [1, "dashboard-loading__spinner"], [1, "ct-banner"], [1, "ct-banner__content"], [1, "ct-banner__title"], [1, "ct-banner__sub"], ["routerLink", "/dashboard/contracts", 1, "ct-banner__cta"], ["aria-hidden", "true", 1, "ct-banner__visual"], [1, "ct-banner__avatar-ring"], [1, "ct-banner__avatar-icon"], [1, "ct-banner__card"], [1, "ct-banner__card-badge"], [1, "ct-banner__card-text"], ["routerLink", "/dashboard/withdrawals", 1, "ct-banner__withdraw-btn"], ["aria-labelledby", "ct-meetings-heading", 1, "ct-section"], [1, "ct-section__header"], [1, "ct-section__title-group"], [1, "ct-section__icon"], ["id", "ct-meetings-heading", 1, "ct-section__title"], ["routerLink", "/dashboard/meetings", 1, "ct-section__view-all"], [1, "ct-section__arrow"], ["role", "alert", 1, "ct-widget-state", "ct-widget-state--error"], [1, "ct-widget-state", "ct-widget-state--empty"], [1, "ct-meetings-grid"], ["role", "list", 1, "ct-kpi-row"], ["role", "listitem", 1, "ct-kpi-card"], ["aria-labelledby", "ct-projects-heading", 1, "ct-section"], ["id", "ct-projects-heading", 1, "ct-section__title"], [1, "ct-section__subtitle"], ["routerLink", "/dashboard/projects", 1, "ct-section__view-all"], ["aria-labelledby", "ct-tasks-heading", 1, "ct-section"], ["id", "ct-tasks-heading", 1, "ct-section__title"], ["aria-hidden", "true"], [1, "ct-bottom-row"], ["aria-labelledby", "ct-withdrawals-heading", 1, "ct-chart-card"], [1, "ct-chart-card__header"], ["id", "ct-withdrawals-heading", 1, "ct-section__title"], ["routerLink", "/dashboard/withdrawals", 1, "ct-section__view-all"], [1, "ct-withdrawal-list"], [1, "ct-withdrawal-item"], ["aria-labelledby", "ct-links-heading", 1, "ct-chart-card"], ["id", "ct-links-heading", 1, "ct-section__title"], [1, "ct-quick-links"], ["routerLink", "/dashboard/contracts", 1, "ct-quick-link"], [1, "ct-quick-link__icon", 2, "background", "var(--brand-primary-50)"], ["routerLink", "/dashboard/projects", 1, "ct-quick-link"], [1, "ct-quick-link__icon", 2, "background", "var(--brand-secondary-50)"], ["routerLink", "/dashboard/teams", 1, "ct-quick-link"], [1, "ct-quick-link__icon", 2, "background", "var(--functional-success-50)"], ["routerLink", "/dashboard/meetings", 1, "ct-quick-link"], [1, "ct-quick-link__icon", 2, "background", "var(--brand-accent-50)"], ["routerLink", "/dashboard/withdrawals", 1, "ct-quick-link"], [1, "ct-quick-link__icon", 2, "background", "var(--brand-tertiary-50)"], ["type", "button", 1, "ct-widget-state__retry", 3, "click"], [1, "ct-meeting-card"], [1, "ct-meeting-card__top"], [1, "ct-meeting-card__icon"], [1, "ct-meeting-card__status"], [1, "ct-meeting-card__title"], [1, "ct-meeting-card__time"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ct-meeting-card__open", 3, "href"], [1, "ct-meeting-card__time-icon"], [1, "ct-kpi-card__header"], [1, "ct-kpi-card__icon-wrap"], [1, "ct-kpi-card__icon"], [1, "ct-kpi-card__value"], [1, "ct-kpi-card__label"], [1, "ct-withdrawal__icon-wrap"], [1, "ct-withdrawal__info"], [1, "ct-withdrawal__amount"], [1, "ct-withdrawal__date"], [1, "ct-withdrawal__status", 3, "ngClass"]], template: function ContractorDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275conditionalCreate(2, ContractorDashboardComponent_Conditional_2_Template, 5, 3, "div", 1)(3, ContractorDashboardComponent_Conditional_3_Template, 156, 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "dashboard.contractor.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 2 : 3);
  }
}, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ['\n\n.ct-widget-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.ct-widget-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.ct-widget-state--empty[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.ct-widget-state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.ct-widget-state__retry[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ct-widget-state__retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-100);\n}\n.ct-dash[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.ct-banner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 1.75rem;\n  padding-inline: 2rem;\n  border-radius: var(--radius-16);\n  background: var(--brand-primary-600);\n  overflow: hidden;\n  min-height: 130px;\n}\n.ct-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-block-start: -40px;\n  inset-inline-end: 28%;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.ct-banner__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  max-width: 52%;\n  z-index: 1;\n}\n.ct-banner__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  margin: 0;\n  line-height: 1.4;\n}\n.ct-banner__sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0;\n  line-height: 1.5;\n}\n.ct-banner__cta[_ngcontent-%COMP%] {\n  margin-block-start: 0.5rem;\n  align-self: flex-start;\n  padding: 0.45rem 1.25rem;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-primary-600);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  display: inline-block;\n}\n.ct-banner__cta[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.ct-banner__visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1;\n}\n.ct-banner__avatar-ring[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 3px solid rgba(255, 255, 255, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-banner__avatar-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  width: 2.2rem;\n  height: 2.2rem;\n  color: var(--ui-bg-surface);\n}\n.ct-banner__card[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-12);\n  padding: 0.65rem 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n  min-width: 130px;\n}\n.ct-banner__card-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--brand-primary-600);\n  background: var(--brand-primary-50);\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  align-self: flex-start;\n}\n.ct-banner__card-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-banner__withdraw-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  padding: 3px 10px;\n  text-decoration: none;\n  align-self: flex-start;\n  transition: background 0.2s;\n}\n.ct-banner__withdraw-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.ct-banner__withdraw-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.ct-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.ct-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ct-section__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.ct-section__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.ct-section__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-section__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.ct-section__view-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  transition: background 0.2s;\n}\n.ct-section__view-all[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.ct-section__arrow[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.ct-meetings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .ct-meetings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-meeting-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start: 3px solid var(--brand-primary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.ct-meeting-card[_ngcontent-%COMP%]:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.ct-meeting-card[_ngcontent-%COMP%]:nth-child(3) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.ct-meeting-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ct-meeting-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-400);\n}\n.ct-meeting-card__status[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.ct-meeting-card__status--past[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.ct-meeting-card__status--now[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.ct-meeting-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-meeting-card__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-meeting-card__time-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.ct-meeting-card__open[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-block-start: 0.25rem;\n  padding: 0.3rem 1rem;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ct-meeting-card__open[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.ct-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 900px) {\n  .ct-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ct-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-kpi-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.ct-kpi-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.ct-kpi-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-kpi-card__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.ct-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.ct-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-chart-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.ct-chart-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.ct-bottom-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .ct-bottom-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-withdrawal-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.ct-withdrawal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.ct-withdrawal__icon-wrap[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ct-withdrawal__icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.ct-withdrawal__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ct-withdrawal__amount[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-withdrawal__date[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-withdrawal__status[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.ct-withdrawal__status--approved[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.ct-withdrawal__status--rejected[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.ct-withdrawal__status--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.ct-quick-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.ct-quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.5rem;\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  text-decoration: none;\n  color: var(--ui-text-main);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.ct-quick-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.ct-quick-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.ct-quick-link__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-quick-link__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--brand-primary-600);\n}\n/*# sourceMappingURL=contractor-dashboard.css.map */'] });
var ContractorDashboardComponent = _ContractorDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-contractor-dashboard", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule], template: `<div class="ct-dash" [attr.aria-label]="'dashboard.contractor.title' | transloco">

  @if (isLoading()) {
    <div class="dashboard-loading" role="status" aria-live="polite">
      <div class="dashboard-loading__spinner"></div>
      <p>{{ 'common.loading' | transloco }}</p>
    </div>
  } @else {

  <!-- \u2500\u2500 HERO BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-banner">
    <div class="ct-banner__content">
      <h2 class="ct-banner__title">{{ 'dashboard.contractor.bannerTitle' | transloco }}</h2>
      <p class="ct-banner__sub">{{ 'dashboard.contractor.bannerSubtitle' | transloco }}</p>
      <a routerLink="/dashboard/contracts" class="ct-banner__cta" [attr.aria-label]="'dashboard.viewContracts' | transloco">{{ 'dashboard.contractor.viewContracts' | transloco }}</a>
    </div>
    <div class="ct-banner__visual" aria-hidden="true">
      <div class="ct-banner__avatar-ring">
        <mat-icon class="ct-banner__avatar-icon">engineering</mat-icon>
      </div>
      <div class="ct-banner__card">
        <span class="ct-banner__card-badge">{{ 'dashboard.contractor.badge' | transloco }}</span>
        <p class="ct-banner__card-text">{{ 'dashboard.contractor.manageWork' | transloco }}</p>
        <a routerLink="/dashboard/withdrawals" class="ct-banner__withdraw-btn" [attr.aria-label]="'dashboard.goToWithdrawals' | transloco">
          <mat-icon>account_balance_wallet</mat-icon> {{ 'dashboard.contractor.withdraw' | transloco }}
        </a>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 UPCOMING MEETINGS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="ct-section" aria-labelledby="ct-meetings-heading">
    <div class="ct-section__header">
      <div class="ct-section__title-group">
        <mat-icon class="ct-section__icon">videocam</mat-icon>
        <h3 class="ct-section__title" id="ct-meetings-heading">{{ 'dashboard.upcomingMeetings' | transloco }}</h3>
      </div>
      <a routerLink="/dashboard/meetings" class="ct-section__view-all" [attr.aria-label]="'dashboard.viewAllMeetings' | transloco">
        {{ 'dashboard.viewAll' | transloco }} <mat-icon class="ct-section__arrow">expand_more</mat-icon>
      </a>
    </div>

    @if (meetingsStatus() === 'error') {
      <div class="ct-widget-state ct-widget-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ 'dashboard.states.error' | transloco }}</span>
        <button type="button" class="ct-widget-state__retry" (click)="reload()"
                [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
      </div>
    } @else if (meetings.length === 0) {
      <div class="ct-widget-state ct-widget-state--empty">
        <mat-icon aria-hidden="true">event_busy</mat-icon>
        <span>{{ 'dashboard.states.emptyMeetings' | transloco }}</span>
      </div>
    } @else {
      <div class="ct-meetings-grid">
        @for (meeting of meetings; track $index) {
          <div class="ct-meeting-card">
            <div class="ct-meeting-card__top">
              <mat-icon class="ct-meeting-card__icon">video_call</mat-icon>
              <span class="ct-meeting-card__status"
                [class.ct-meeting-card__status--past]="meeting.status === 'past'"
                [class.ct-meeting-card__status--now]="meeting.status === 'now'">
                {{ meeting.status === 'now' ? ('dashboard.meeting.now' | transloco) : meeting.status === 'past' ? ('dashboard.meeting.past' | transloco) : ('dashboard.meeting.soon' | transloco) }}
              </span>
            </div>
            <p class="ct-meeting-card__title">{{ meeting.title || ('dashboard.meeting.untitled' | transloco) }}</p>
            @if (meeting.when) {
              <p class="ct-meeting-card__time">
                <mat-icon class="ct-meeting-card__time-icon">schedule</mat-icon>
                {{ meeting.when }}
              </p>
            }
            @if (meeting.link) {
              <a class="ct-meeting-card__open" [href]="meeting.link" target="_blank" rel="noopener noreferrer"
                 [attr.aria-label]="('dashboard.meeting.open' | transloco) + ': ' + (meeting.title || ('dashboard.meeting.untitled' | transloco))">{{ 'dashboard.meeting.open' | transloco }}</a>
            }
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2500\u2500 KPI STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-kpi-row" role="list" [attr.aria-label]="'dashboard.kpiList' | transloco">
    @for (stat of kpiStats; track stat.label) {
      <div class="ct-kpi-card" role="listitem">
        <div class="ct-kpi-card__header">
          <div class="ct-kpi-card__icon-wrap" [style.background]="stat.iconBg">
            <mat-icon class="ct-kpi-card__icon">{{ stat.icon }}</mat-icon>
          </div>
        </div>
        <p class="ct-kpi-card__value">{{ stat.value }}</p>
        <p class="ct-kpi-card__label">{{ stat.label | transloco }}</p>
      </div>
    }
  </div>

  <!-- \u2500\u2500 PROJECTS SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="ct-section" aria-labelledby="ct-projects-heading">
    <div class="ct-section__header">
      <div class="ct-section__title-group">
        <mat-icon class="ct-section__icon">folder</mat-icon>
        <div>
          <h3 class="ct-section__title" id="ct-projects-heading">{{ 'dashboard.contractor.projectsTitle' | transloco }}</h3>
          <p class="ct-section__subtitle">{{ 'dashboard.contractor.projectsSubtitle' | transloco }}</p>
        </div>
      </div>
      <a routerLink="/dashboard/projects" class="ct-section__view-all" [attr.aria-label]="'dashboard.viewAllProjects' | transloco">
        {{ 'dashboard.viewAll' | transloco }} <mat-icon class="ct-section__arrow">expand_more</mat-icon>
      </a>
    </div>

    <!-- Project status / by-month are backend-blocked (no status/date fields).
         No fabricated charts \u2014 honest error/empty state instead. -->
    @if (projectsStatus() === 'error') {
      <div class="ct-widget-state ct-widget-state--error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        <span>{{ 'dashboard.states.error' | transloco }}</span>
        <button type="button" class="ct-widget-state__retry" (click)="reload()"
                [attr.aria-label]="'common.retry' | transloco">{{ 'common.retry' | transloco }}</button>
      </div>
    } @else {
      <div class="ct-widget-state ct-widget-state--empty">
        <mat-icon aria-hidden="true">donut_large</mat-icon>
        <span>{{ 'dashboard.states.emptyProjectStatus' | transloco }}</span>
      </div>
    }
  </section>

  <!-- \u2500\u2500 TASKS TIMELINE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="ct-section" aria-labelledby="ct-tasks-heading">
    <div class="ct-section__header">
      <div class="ct-section__title-group">
        <mat-icon class="ct-section__icon">assignment</mat-icon>
        <div>
          <h3 class="ct-section__title" id="ct-tasks-heading">{{ 'dashboard.contractor.tasksTimelineTitle' | transloco }}</h3>
          <p class="ct-section__subtitle">{{ 'dashboard.contractor.tasksTimelineSub' | transloco }}</p>
        </div>
      </div>
    </div>
    <!-- Tasks timeline is backend-blocked (no task time-series API).
         No fabricated chart \u2014 honest empty state. -->
    <div class="ct-widget-state ct-widget-state--empty">
      <mat-icon aria-hidden="true">show_chart</mat-icon>
      <span>{{ 'dashboard.states.emptyTasksTimeline' | transloco }}</span>
    </div>
  </section>

  <!-- \u2500\u2500 BOTTOM ROW: WITHDRAWALS + TEAMS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-bottom-row">

    <!-- Recent Withdrawals -->
    <section class="ct-chart-card" aria-labelledby="ct-withdrawals-heading">
      <div class="ct-chart-card__header">
        <div class="ct-section__title-group">
          <mat-icon class="ct-section__icon">account_balance_wallet</mat-icon>
          <h3 class="ct-section__title" id="ct-withdrawals-heading">{{ 'dashboard.contractor.recentWithdrawalsTitle' | transloco }}</h3>
        </div>
        <a routerLink="/dashboard/withdrawals" class="ct-section__view-all" [attr.aria-label]="'dashboard.viewAllWithdrawals' | transloco">
          {{ 'dashboard.viewAll' | transloco }} <mat-icon class="ct-section__arrow">expand_more</mat-icon>
        </a>
      </div>
      <ul class="ct-withdrawal-list" [attr.aria-label]="'dashboard.contractor.recentWithdrawals' | transloco">
        @for (w of recentWithdrawals; track $index) {
          <li class="ct-withdrawal-item">
            <div class="ct-withdrawal__icon-wrap">
              <mat-icon>payments</mat-icon>
            </div>
            <div class="ct-withdrawal__info">
              <p class="ct-withdrawal__amount">{{ w.amount }}</p>
              <p class="ct-withdrawal__date">{{ w.date }}</p>
            </div>
            <span class="ct-withdrawal__status" [ngClass]="getWithdrawalClass(w.status)">
              {{ getWithdrawalLabel(w.status) | transloco }}
            </span>
          </li>
        }
      </ul>
    </section>

    <!-- Quick Links -->
    <section class="ct-chart-card" aria-labelledby="ct-links-heading">
      <div class="ct-chart-card__header">
        <div class="ct-section__title-group">
          <mat-icon class="ct-section__icon">apps</mat-icon>
          <h3 class="ct-section__title" id="ct-links-heading">{{ 'dashboard.contractor.quickAccess' | transloco }}</h3>
        </div>
      </div>
      <div class="ct-quick-links">
        <a routerLink="/dashboard/contracts" class="ct-quick-link" [attr.aria-label]="'dashboard.goToContracts' | transloco">
          <div class="ct-quick-link__icon" style="background:var(--brand-primary-50)">
            <mat-icon>description</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.contracts' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/projects" class="ct-quick-link" [attr.aria-label]="'dashboard.goToProjects' | transloco">
          <div class="ct-quick-link__icon" style="background:var(--brand-secondary-50)">
            <mat-icon>folder</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.projects' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/teams" class="ct-quick-link" [attr.aria-label]="'dashboard.goToTeams' | transloco">
          <div class="ct-quick-link__icon" style="background:var(--functional-success-50)">
            <mat-icon>groups</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.teams' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/meetings" class="ct-quick-link" [attr.aria-label]="'dashboard.goToMeetings' | transloco">
          <div class="ct-quick-link__icon" style="background:var(--brand-accent-50)">
            <mat-icon>event</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.meetings' | transloco }}</span>
        </a>
        <a routerLink="/dashboard/withdrawals" class="ct-quick-link" [attr.aria-label]="'dashboard.goToWithdrawals' | transloco">
          <div class="ct-quick-link__icon" style="background:var(--brand-tertiary-50)">
            <mat-icon>account_balance_wallet</mat-icon>
          </div>
          <span>{{ 'dashboard.nav.withdrawals' | transloco }}</span>
        </a>
      </div>
    </section>

  </div>

  } <!-- end @else -->

</div>
`, styles: ['/* src/features/dashboard/contractor-dashboard/contractor-dashboard.css */\n.ct-widget-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  border-radius: var(--radius-lg, 12px);\n  text-align: center;\n  font-size: 0.875rem;\n}\n.ct-widget-state mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.ct-widget-state--empty {\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n}\n.ct-widget-state--error {\n  color: var(--functional-danger-700);\n  background: var(--functional-danger-50);\n}\n.ct-widget-state__retry {\n  margin-top: 0.25rem;\n  padding: 0.375rem 0.875rem;\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--ui-bg-surface);\n  color: var(--functional-danger-700);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ct-widget-state__retry:hover {\n  background: var(--functional-danger-100);\n}\n.ct-dash {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-block: 1.5rem;\n  padding-inline: 1.5rem;\n  background: var(--ui-bg);\n  min-height: 100%;\n}\n.ct-banner {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 1.75rem;\n  padding-inline: 2rem;\n  border-radius: var(--radius-16);\n  background: var(--brand-primary-600);\n  overflow: hidden;\n  min-height: 130px;\n}\n.ct-banner::before {\n  content: "";\n  position: absolute;\n  inset-block-start: -40px;\n  inset-inline-end: 28%;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  pointer-events: none;\n}\n.ct-banner__content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  max-width: 52%;\n  z-index: 1;\n}\n.ct-banner__title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  margin: 0;\n  line-height: 1.4;\n}\n.ct-banner__sub {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0;\n  line-height: 1.5;\n}\n.ct-banner__cta {\n  margin-block-start: 0.5rem;\n  align-self: flex-start;\n  padding: 0.45rem 1.25rem;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  color: var(--brand-primary-600);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  display: inline-block;\n}\n.ct-banner__cta:hover {\n  opacity: 0.9;\n}\n.ct-banner__visual {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1;\n}\n.ct-banner__avatar-ring {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 3px solid rgba(255, 255, 255, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-banner__avatar-icon {\n  font-size: 2.2rem;\n  width: 2.2rem;\n  height: 2.2rem;\n  color: var(--ui-bg-surface);\n}\n.ct-banner__card {\n  background: var(--ui-bg-surface);\n  border-radius: var(--radius-12);\n  padding: 0.65rem 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);\n  min-width: 130px;\n}\n.ct-banner__card-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: var(--brand-primary-600);\n  background: var(--brand-primary-50);\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  align-self: flex-start;\n}\n.ct-banner__card-text {\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-banner__withdraw-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  padding: 3px 10px;\n  text-decoration: none;\n  align-self: flex-start;\n  transition: background 0.2s;\n}\n.ct-banner__withdraw-btn mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.ct-banner__withdraw-btn:hover {\n  background: var(--brand-primary-100);\n}\n.ct-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.ct-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ct-section__title-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.ct-section__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-600);\n}\n.ct-section__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-section__subtitle {\n  font-size: 0.72rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n  margin-block-start: 2px;\n}\n.ct-section__view-all {\n  display: flex;\n  align-items: center;\n  gap: 0.15rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--brand-primary-600);\n  text-decoration: none;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  transition: background 0.2s;\n}\n.ct-section__view-all:hover {\n  background: var(--brand-primary-100);\n}\n.ct-section__arrow {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.ct-meetings-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .ct-meetings-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-meeting-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  border-inline-start: 3px solid var(--brand-primary-400);\n  padding: 0.85rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.ct-meeting-card:nth-child(2) {\n  border-inline-start-color: var(--brand-tertiary-500);\n}\n.ct-meeting-card:nth-child(3) {\n  border-inline-start-color: var(--functional-success-500);\n}\n.ct-meeting-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ct-meeting-card__icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--brand-primary-400);\n}\n.ct-meeting-card__status {\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: var(--radius-full);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.ct-meeting-card__status--past {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.ct-meeting-card__status--now {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.ct-meeting-card__title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-meeting-card__time {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.7rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-meeting-card__time-icon {\n  font-size: 0.75rem;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.ct-meeting-card__open {\n  align-self: flex-start;\n  margin-block-start: 0.25rem;\n  padding: 0.3rem 1rem;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  border: 1px solid var(--brand-primary-200);\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ct-meeting-card__open:hover {\n  background: var(--brand-primary-100);\n}\n.ct-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 900px) {\n  .ct-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ct-kpi-row {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-kpi-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.ct-kpi-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-end: 0.25rem;\n}\n.ct-kpi-card__icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-kpi-card__icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.ct-kpi-card__value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.2;\n}\n.ct-kpi-card__label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-chart-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  padding: 1.1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.ct-chart-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.ct-bottom-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .ct-bottom-row {\n    grid-template-columns: 1fr;\n  }\n}\n.ct-withdrawal-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.ct-withdrawal-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.ct-withdrawal__icon-wrap {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ct-withdrawal__icon-wrap mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: var(--brand-primary-600);\n}\n.ct-withdrawal__info {\n  flex: 1;\n  min-width: 0;\n}\n.ct-withdrawal__amount {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.ct-withdrawal__date {\n  font-size: 0.68rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.ct-withdrawal__status {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.ct-withdrawal__status--approved {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.ct-withdrawal__status--rejected {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.ct-withdrawal__status--pending {\n  background: var(--functional-warning-50);\n  color: var(--functional-warning-700);\n}\n.ct-quick-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.ct-quick-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.5rem;\n  border-radius: var(--radius-12);\n  border: 1px solid var(--ui-border);\n  text-decoration: none;\n  color: var(--ui-text-main);\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.ct-quick-link:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.ct-quick-link:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.ct-quick-link__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ct-quick-link__icon mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--brand-primary-600);\n}\n/*# sourceMappingURL=contractor-dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractorDashboardComponent, { className: "ContractorDashboardComponent", filePath: "src/features/dashboard/contractor-dashboard/contractor-dashboard.ts", lineNumber: 49 });
})();
export {
  ContractorDashboardComponent
};
//# sourceMappingURL=chunk-CBONMTPV.js.map
