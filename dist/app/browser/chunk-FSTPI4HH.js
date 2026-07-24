import {
  CreateTeamDialogComponent,
  InviteMembersDialogComponent
} from "./chunk-K5MTZ62X.js";
import "./chunk-DSHWJW7U.js";
import {
  MatTooltipModule
} from "./chunk-PVDVVREM.js";
import "./chunk-HIQBHLFY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RILOBYFO.js";
import {
  TeamsService
} from "./chunk-6LK6CDX3.js";
import {
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  UserRole
} from "./chunk-TXEUWJT3.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe,
  SlicePipe
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
  __spreadProps,
  __spreadValues,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/teams-list/teams-list.ts
var _forTrack0 = ($index, $item) => $item.id;
function TeamsListComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const person_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", person_r1.avatar, \u0275\u0275sanitizeUrl)("alt", person_r1.name + " avatar");
  }
}
function TeamsListComponent_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const person_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials(person_r1.name));
  }
}
function TeamsListComponent_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const person_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", person_r1.countryFlag, \u0275\u0275sanitizeUrl);
  }
}
function TeamsListComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 41)(2, "div", 42);
    \u0275\u0275conditionalCreate(3, TeamsListComponent_For_13_Conditional_3_Template, 1, 2, "img", 43)(4, TeamsListComponent_For_13_Conditional_4_Template, 2, 1, "div", 44);
    \u0275\u0275conditionalCreate(5, TeamsListComponent_For_13_Conditional_5_Template, 1, 1, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46)(7, "span", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const person_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(person_r1.avatar && !person_r1.avatar.includes("Avater.png") ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(person_r1.countryFlag ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(person_r1.name || "Unknown");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(person_r1.designation || person_r1.role || "\u2014");
  }
}
function TeamsListComponent_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No team members yet.");
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addNewTeam());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Create Team ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "teams.createTeam"));
  }
}
function TeamsListComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_52_Conditional_0_For_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_0_For_12_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const team_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editTeam(team_r5.id));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_0_For_12_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const team_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTeam(team_r5.id));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_52_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 58)(1, "td", 59);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_0_For_12_Template_td_click_1_listener() {
      const team_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showTeamDetails(team_r5.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 61)(6, "button", 62);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 28);
    \u0275\u0275element(9, "circle", 63)(10, "circle", 64)(11, "circle", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "mat-menu", null, 0);
    \u0275\u0275conditionalCreate(14, TeamsListComponent_Conditional_52_Conditional_0_For_12_Conditional_14_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const team_r5 = ctx.$implicit;
    const rowTeamMenu_r7 = \u0275\u0275reference(13);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resolveTeamName(team_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r5.members.length || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", rowTeamMenu_r7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "teams.teamOptions"));
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.isEmployee ? 14 : -1);
  }
}
function TeamsListComponent_Conditional_52_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 55)(2, "thead")(3, "tr")(4, "th", 56);
    \u0275\u0275text(5, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 56);
    \u0275\u0275text(7, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 57);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, TeamsListComponent_Conditional_52_Conditional_0_For_12_Template, 15, 7, "tr", 58, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.paginatedTeams);
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const team_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editTeam(team_r10.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 78);
    \u0275\u0275element(2, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Team ");
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const team_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTeam(team_r10.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 78);
    \u0275\u0275element(2, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete Team ");
    \u0275\u0275elementEnd();
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_For_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", m_r12.name || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials(m_r12.name));
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", team_r10.members.length - 3);
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 70);
    \u0275\u0275element(4, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 22);
    \u0275\u0275element(7, "circle", 73)(8, "circle", 74)(9, "circle", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "mat-menu", 76, 1);
    \u0275\u0275conditionalCreate(12, TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_12_Template, 4, 0, "button", 77);
    \u0275\u0275elementStart(13, "button", 66);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_52_Conditional_1_For_2_Template_button_click_13_listener() {
      const team_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showTeamDetails(team_r10.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 78);
    \u0275\u0275element(15, "path", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_17_Template, 4, 0, "button", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 81);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 82)(21, "span", 83);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 84);
    \u0275\u0275repeaterCreate(24, TeamsListComponent_Conditional_52_Conditional_1_For_2_For_25_Template, 2, 2, "div", 85, _forTrack0);
    \u0275\u0275pipe(26, "slice");
    \u0275\u0275conditionalCreate(27, TeamsListComponent_Conditional_52_Conditional_1_For_2_Conditional_27_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const team_r10 = ctx.$implicit;
    const teamMenu_r13 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", teamMenu_r13);
    \u0275\u0275attribute("aria-label", "Options for " + ctx_r1.resolveTeamName(team_r10));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r1.isEmployee ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.isEmployee ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.resolveTeamName(team_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", team_r10.members.length, " Members");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(26, 7, team_r10.members, 0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(team_r10.members.length > 3 ? 27 : -1);
  }
}
function TeamsListComponent_Conditional_52_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, TeamsListComponent_Conditional_52_Conditional_1_For_2_Template, 28, 11, "div", 67, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.paginatedTeams);
  }
}
function TeamsListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TeamsListComponent_Conditional_52_Conditional_0_Template, 13, 0, "div", 53)(1, TeamsListComponent_Conditional_52_Conditional_1_Template, 3, 0, "div", 54);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.viewMode === "table" ? 0 : 1);
  }
}
function TeamsListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "img", 90);
    \u0275\u0275elementStart(2, "h2", 91);
    \u0275\u0275text(3, "No Teams Created yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 92);
    \u0275\u0275text(5, "Start by creating team to see your teams, project, task working on");
    \u0275\u0275elementEnd()();
  }
}
function TeamsListComponent_Conditional_54_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_54_For_9_Template_button_click_0_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r16 === ctx_r1.currentPage);
    \u0275\u0275attribute("aria-label", "Page " + p_r16)("aria-current", p_r16 === ctx_r1.currentPage ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r16);
  }
}
function TeamsListComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "button", 93);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_54_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 22);
    \u0275\u0275element(5, "path", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 95);
    \u0275\u0275repeaterCreate(8, TeamsListComponent_Conditional_54_For_9_Template, 2, 5, "button", 96, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 97);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_54_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(12, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 22);
    \u0275\u0275element(14, "path", 98);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "teams.teamsPagination"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "common.previousPage"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.pages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 9, "common.nextPage"));
  }
}
function TeamsListComponent_Conditional_55_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 122);
    \u0275\u0275element(2, "rect", 123)(3, "path", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 125);
    \u0275\u0275text(5, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 126);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.selectedTeam().createdAt, "MMM d, y"));
  }
}
function TeamsListComponent_Conditional_55_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 127);
    \u0275\u0275element(2, "path", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No members have been added yet.");
    \u0275\u0275elementEnd()();
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 131);
  }
  if (rf & 2) {
    const member_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", member_r18.avatar, \u0275\u0275sanitizeUrl)("alt", (member_r18.name || "") + " avatar");
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials(member_r18.name));
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r18.designation || member_r18.role);
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r18.email);
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 129)(1, "div", 130);
    \u0275\u0275conditionalCreate(2, TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_2_Template, 1, 2, "img", 131)(3, TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_3_Template, 2, 1, "span", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133)(5, "span", 134);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_7_Template, 2, 1, "span", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TeamsListComponent_Conditional_55_Conditional_29_For_2_Conditional_8_Template, 2, 1, "span", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r18.avatar && !member_r18.avatar.includes("Avater.png") ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r18.name || member_r18.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r18.designation || member_r18.role ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r18.email && member_r18.name ? 8 : -1);
  }
}
function TeamsListComponent_Conditional_55_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 119);
    \u0275\u0275repeaterCreate(1, TeamsListComponent_Conditional_55_Conditional_29_For_2_Template, 9, 4, "li", 129, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.selectedTeam().members);
  }
}
function TeamsListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 101)(2, "div", 102)(3, "div", 103)(4, "div", 104);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 105);
    \u0275\u0275element(6, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 106)(8, "h2", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 108);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 109);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_55_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 110);
    \u0275\u0275element(15, "path", 111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 112)(17, "section", 113)(18, "h3", 114);
    \u0275\u0275text(19, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 115);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, TeamsListComponent_Conditional_55_Conditional_22_Template, 9, 4, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "section", 113)(24, "h3", 114);
    \u0275\u0275text(25, " Team Members ");
    \u0275\u0275elementStart(26, "span", 117);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, TeamsListComponent_Conditional_55_Conditional_28_Template, 5, 0, "div", 118)(29, TeamsListComponent_Conditional_55_Conditional_29_Template, 3, 0, "ul", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 120)(31, "button", 121);
    \u0275\u0275listener("click", function TeamsListComponent_Conditional_55_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(32, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Details for " + ctx_r1.selectedTeam().name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedTeam().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedTeam().members.length, " Member", ctx_r1.selectedTeam().members.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 9, "common.closeDetailsPanel"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTeam().description || "No description provided for this team.", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedTeam().createdAt ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTeam().members.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedTeam().members.length === 0 ? 28 : 29);
  }
}
var _TeamsListComponent = class _TeamsListComponent {
  constructor() {
    this.allPeople = [];
    this.teams = [];
    this.filteredTeams = [];
    this.searchQuery = "";
    this.membersFilter = "All";
    this.selectedTeam = signal(null, ...ngDevMode ? [{ debugName: "selectedTeam" }] : []);
    this.isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
    this.viewMode = "cards";
    this.currentPage = 1;
    this.pageSize = 9;
    this.teamService = inject(TeamsService);
    this.cdr = inject(ChangeDetectorRef);
    this.dialog = inject(MatDialog);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.tokenService = inject(TokenService);
    this.isEmployee = this.tokenService.getUserRole() === UserRole.Employee;
    this.onFullscreenChange = () => {
      this.isFullscreen.set(!!document.fullscreenElement);
      this.cdr.markForCheck();
    };
  }
  setView(mode) {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  refresh() {
    this.loadTeams();
    this.loadAllPeople();
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredTeams.length / this.pageSize));
  }
  get pages() {
    return Array.from({ length: Math.min(this.totalPages, 6) }, (_, i) => i + 1);
  }
  get paginatedTeams() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTeams.slice(start, start + this.pageSize);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages)
      this.currentPage = page;
  }
  nextPage() {
    this.goToPage(this.currentPage + 1);
  }
  prevPage() {
    this.goToPage(this.currentPage - 1);
  }
  ngOnInit() {
    this.loadAllPeople();
    this.loadTeams();
    this.routeSub = this.route.queryParams.subscribe((params) => {
      const action = params["action"];
      if (action === "create-team") {
        this.addNewTeam();
        this.clearActionParam();
      } else if (action === "invite-worker") {
        this.openInviteMemberDialog();
        this.clearActionParam();
      }
      if (params["refreshed"]) {
        this.loadTeams();
        this.loadAllPeople();
      }
    });
    document.addEventListener("fullscreenchange", this.onFullscreenChange);
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
    document.removeEventListener("fullscreenchange", this.onFullscreenChange);
  }
  clearActionParam() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: null },
      queryParamsHandling: "merge"
    });
  }
  loadAllPeople() {
    this.teamService.getAllTeamMembers().subscribe({
      next: (data) => {
        this.allPeople = data;
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        const raw = Array.isArray(data) ? data : [];
        this.teams = raw.map((t) => __spreadProps(__spreadValues({}, t), {
          name: t.name || t.nameEn || t.nameAr || t.teamName || "",
          members: Array.isArray(t.members) ? t.members : []
        }));
        this.applyFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.teams = [];
        this.applyFilters();
        this.cdr.markForCheck();
      }
    });
  }
  applyFilters() {
    this.filteredTeams = this.teams.filter((team) => {
      const displayName = this.resolveTeamName(team).toLowerCase();
      const matchesSearch = !this.searchQuery || displayName.includes(this.searchQuery.toLowerCase());
      const count = team.members?.length || 0;
      const matchesMembers = this.membersFilter === "All" || this.membersFilter === "HasMembers" && count > 0 || this.membersFilter === "NoMembers" && count === 0;
      return matchesSearch && matchesMembers;
    });
    this.currentPage = 1;
  }
  onSearchChange() {
    this.applyFilters();
  }
  openInviteMemberDialog() {
    if (this.isEmployee)
      return;
    this.dialog.open(InviteMembersDialogComponent, {
      width: "560px",
      panelClass: "teams-modal-panel",
      autoFocus: true
    });
  }
  addNewTeam() {
    if (this.isEmployee)
      return;
    const ref = this.dialog.open(CreateTeamDialogComponent, {
      width: "580px",
      panelClass: "teams-modal-panel",
      autoFocus: true
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved)
        this.loadTeams();
    });
  }
  editTeam(teamId) {
    if (this.isEmployee)
      return;
    this.teamService.getTeamById(teamId).subscribe({
      next: (fullTeam) => {
        const ref = this.dialog.open(CreateTeamDialogComponent, {
          width: "580px",
          panelClass: "teams-modal-panel",
          data: { team: fullTeam }
        });
        ref.afterClosed().subscribe((saved) => {
          if (saved)
            this.loadTeams();
        });
      },
      error: () => {
        const team = this.teams.find((t) => t.id === teamId);
        if (!team)
          return;
        const ref = this.dialog.open(CreateTeamDialogComponent, {
          width: "580px",
          panelClass: "teams-modal-panel",
          data: { team }
        });
        ref.afterClosed().subscribe((saved) => {
          if (saved)
            this.loadTeams();
        });
      }
    });
  }
  showTeamDetails(teamId) {
    this.teamService.getTeamById(teamId).subscribe({
      next: (fullTeam) => this.selectedTeam.set(fullTeam),
      error: () => {
        const team = this.teams.find((t) => t.id === teamId);
        if (team)
          this.selectedTeam.set(team);
      }
    });
  }
  closeDrawer() {
    this.selectedTeam.set(null);
  }
  toggleFullscreen() {
    const el = document.querySelector(".teams-page");
    if (!document.fullscreenElement) {
      el?.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  }
  deleteTeam(teamId) {
    if (this.isEmployee)
      return;
    if (!confirm("Are you sure you want to delete this team?"))
      return;
    this.teamService.deleteTeam(teamId).subscribe({
      next: () => this.loadTeams(),
      error: () => {
      }
    });
  }
  resolveTeamName(team) {
    const lang = localStorage.getItem("lang") || "en";
    if (lang === "ar")
      return team?.nameAr || team?.nameEn || team?.name || team?.teamName || "";
    return team?.nameEn || team?.nameAr || team?.name || team?.teamName || "";
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1)
      return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};
_TeamsListComponent.\u0275fac = function TeamsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamsListComponent)();
};
_TeamsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamsListComponent, selectors: [["app-teams-list"]], decls: 56, vars: 40, consts: [["rowTeamMenu", "matMenu"], ["teamMenu", "matMenu"], [1, "teams-page"], [1, "breadcrumb"], [1, "bc-item"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "bc-chevron"], ["d", "M5.5 3.5L10.5 8L5.5 12.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bc-item", "bc-active"], [1, "section-people-title"], [1, "people-row"], [1, "person-card"], [1, "people-empty"], [1, "teams-section-header"], [1, "teams-title"], [1, "btn-create-team"], [1, "teams-toolbar"], [1, "toolbar-start"], [1, "search-field"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true", 1, "search-icon"], ["d", "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z", "fill", "currentColor"], ["type", "text", "placeholder", "Search teams...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "btn-filter"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "aria-hidden", "true"], ["d", "M2.25 4.5H15.75M4.5 9H13.5M6.75 13.5H11.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["cx", "6", "cy", "4.5", "r", "1.5", "fill", "currentColor"], ["cx", "12", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "9", "cy", "13.5", "r", "1.5", "fill", "currentColor"], ["title", "Refresh", 1, "btn-filter", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z", "fill", "currentColor"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "btn-expand", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none", "aria-hidden", "true"], [1, "teams-content"], [1, "empty-state"], ["role", "navigation", 1, "pagination"], [1, "person-card-inner"], [1, "person-avatar-wrap"], [1, "person-avatar-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "person-avatar-initials"], ["alt", "country flag", 1, "person-flag", 3, "src"], [1, "person-meta"], [1, "person-name"], [1, "person-role"], [1, "btn-create-team", 3, "click"], ["d", "M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM12.75 9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25V5.25H9.75V8.25H12.75V9.75Z", "fill", "currentColor"], ["d", "M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "attendance-table-container"], [1, "teams-grid"], [1, "full-width-table", 2, "width", "100%", "border-collapse", "separate", "border-spacing", "0 8px"], [2, "text-align", "start", "padding", "12px 16px", "font-size", "12px", "font-weight", "600", "color", "var(--ui-text-muted)", "text-transform", "uppercase"], [2, "text-align", "end", "padding", "12px 16px", "font-size", "12px", "font-weight", "600", "color", "var(--ui-text-muted)", "text-transform", "uppercase"], [2, "background", "var(--ui-surface)", "border-radius", "8px"], [2, "padding", "14px 16px", "cursor", "pointer", 3, "click"], [2, "padding", "14px 16px"], [2, "padding", "14px 16px", "text-align", "end"], [1, "actions-menu-btn", 3, "matMenuTriggerFor"], ["cx", "12", "cy", "5", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "19", "r", "2", "fill", "currentColor"], ["mat-menu-item", "", 3, "click"], [1, "team-card"], [1, "team-card-top"], ["aria-hidden", "true", 1, "team-icon-box"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z", "fill", "currentColor"], [1, "btn-team-menu", 3, "matMenuTriggerFor"], ["cx", "4.5", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "9", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "13.5", "cy", "9", "r", "1.5", "fill", "currentColor"], [1, "teams-dropdown-menu"], ["mat-menu-item", ""], ["width", "15", "height", "15", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M8 3C4.36 3 1.258 5.232.25 8.5 1.258 11.768 4.36 14 8 14s6.742-2.232 7.75-5.5C14.742 5.232 11.64 3 8 3Zm0 9.167A3.667 3.667 0 1 1 8 4.833a3.667 3.667 0 0 1 0 7.334ZM8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z", "fill", "currentColor"], ["mat-menu-item", "", 1, "menu-item-danger"], [1, "team-name"], [1, "team-card-footer"], [1, "members-count"], ["aria-hidden", "true", 1, "avatar-group"], [1, "avatar-chip", 3, "title"], [1, "avatar-chip", "avatar-overflow"], ["d", "M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15l1-3.667L11.333 2Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["mat-menu-item", "", 1, "menu-item-danger", 3, "click"], ["d", "M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["src", "assets/images/NoTeams.png", "alt", "No teams illustration", 1, "empty-img"], [1, "empty-title"], [1, "empty-sub"], [1, "page-btn", "page-prev", 3, "click", "disabled"], ["d", "M11.25 13.5L6.75 9L11.25 4.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "page-numbers"], [1, "page-num", 3, "active"], [1, "page-btn", "page-next", 3, "click", "disabled"], ["d", "M6.75 4.5L11.25 9L6.75 13.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "page-num", 3, "click"], ["aria-hidden", "true", "role", "presentation", 1, "drawer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "team-drawer"], [1, "drawer-header"], [1, "drawer-header-left"], ["aria-hidden", "true", 1, "drawer-icon-box"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none"], [1, "drawer-header-meta"], [1, "drawer-name"], [1, "drawer-members-count"], ["type", "button", 1, "drawer-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], ["d", "M15 5L5 15M5 5L15 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "drawer-body"], [1, "drawer-section"], [1, "drawer-section-title"], [1, "drawer-description"], [1, "drawer-meta-row"], [1, "drawer-count-badge"], [1, "drawer-empty-members"], [1, "drawer-member-list"], [1, "drawer-footer"], ["type", "button", 1, "drawer-btn-close", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "drawer-meta-icon"], ["x", "2", "y", "3", "width", "12", "height", "11", "rx", "1.5", "stroke", "currentColor", "stroke-width", "1.3"], ["d", "M5 1.5V4M11 1.5V4M2 7H14", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round"], [1, "drawer-meta-label"], [1, "drawer-meta-value"], ["width", "36", "height", "36", "viewBox", "0 0 36 36", "fill", "none", "aria-hidden", "true"], ["d", "M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9 32a9 9 0 0 1 18 0", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "drawer-member-item"], [1, "drawer-member-avatar"], [1, "drawer-member-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "drawer-member-initials"], [1, "drawer-member-info"], [1, "drawer-member-name"], [1, "drawer-member-role"], [1, "drawer-member-email"]], template: function TeamsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "Mtwork");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 5);
    \u0275\u0275element(6, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "Teams");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h2", 8);
    \u0275\u0275text(10, "All Peoples in teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275repeaterCreate(12, TeamsListComponent_For_13_Template, 11, 4, "div", 10, _forTrack0, false, TeamsListComponent_ForEmpty_14_Template, 2, 0, "p", 11);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "h1", 13);
    \u0275\u0275text(18, "Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, TeamsListComponent_Conditional_19_Template, 5, 3, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 18);
    \u0275\u0275element(24, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "input", 20);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TeamsListComponent_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TeamsListComponent_Template_input_ngModelChange_25_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 22);
    \u0275\u0275element(30, "path", 23)(31, "circle", 24)(32, "circle", 25)(33, "circle", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Template_button_click_34_listener() {
      return ctx.refresh();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 28);
    \u0275\u0275element(37, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 30);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementStart(40, "button", 31);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Template_button_click_40_listener() {
      return ctx.setView("table");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 32);
    \u0275\u0275element(43, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "button", 34);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275listener("click", function TeamsListComponent_Template_button_click_44_listener() {
      return ctx.setView("cards");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 32);
    \u0275\u0275element(47, "path", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "button", 36);
    \u0275\u0275listener("click", function TeamsListComponent_Template_button_click_48_listener() {
      return ctx.toggleFullscreen();
    });
    \u0275\u0275conditionalCreate(49, TeamsListComponent_Conditional_49_Template, 2, 0, ":svg:svg", 37)(50, TeamsListComponent_Conditional_50_Template, 2, 0, ":svg:svg", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 38);
    \u0275\u0275conditionalCreate(52, TeamsListComponent_Conditional_52_Template, 2, 1)(53, TeamsListComponent_Conditional_53_Template, 6, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, TeamsListComponent_Conditional_54_Template, 15, 11, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, TeamsListComponent_Conditional_55_Template, 33, 11);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 22, "common.breadcrumb"));
    \u0275\u0275advance(11);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 24, ctx.allPeople, 0, 5));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx.isEmployee ? 19 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 28, "teams.searchTeams"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 30, "teams.filterTeams"));
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 32, "common.refresh"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(39, 34, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(41, 36, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(45, 38, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-expand--active", ctx.isFullscreen());
    \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Enter fullscreen")("aria-pressed", ctx.isFullscreen());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFullscreen() ? 49 : 50);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.filteredTeams.length > 0 ? 52 : 53);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.filteredTeams.length > 0 ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selectedTeam() ? 55 : -1);
  }
}, dependencies: [
  CommonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatTooltipModule,
  TranslocoModule,
  SlicePipe,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.teams-page[_ngcontent-%COMP%] {\n  padding: 0 24px 48px;\n  background: var(--ui-bg);\n  min-height: 100%;\n  font-family: var(--font-family-dm-sans);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-bottom: 24px;\n}\n.bc-item[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n}\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-800);\n}\n.bc-chevron[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.section-people-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0 0 24px;\n}\n.people-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n  margin-bottom: 32px;\n}\n.person-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 24px;\n  min-height: 185px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--elevation-1);\n}\n.person-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.person-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 78px;\n  height: 78px;\n  flex-shrink: 0;\n  margin-bottom: 4px;\n}\n.person-avatar-img[_ngcontent-%COMP%] {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top;\n}\n.person-avatar-initials[_ngcontent-%COMP%] {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-800) 0%,\n      transparent 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-weight: 700;\n  font-size: 24px;\n  color: var(--ui-surface);\n}\n.person-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  inset-inline-end: 0;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--ui-surface);\n}\n.person-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.person-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n}\n.person-role[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.people-empty[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  padding: 32px 0;\n}\n.teams-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.teams-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0;\n}\n.btn-create-team[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 8px 12px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: 1px solid var(--brand-primary-700);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: var(--shadow-flat-button);\n  transition: background 0.2s ease;\n}\n.btn-create-team[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-700);\n}\n.btn-create-team[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.teams-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--elevation-1);\n}\n.toolbar-start[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 314px;\n  height: 42px;\n  padding: 6px 12px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.btn-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  flex-shrink: 0;\n}\n.btn-filter[_ngcontent-%COMP%]:hover {\n  color: var(--brand-grays-900);\n  border-color: var(--brand-neutral-300);\n  background: var(--ui-bg);\n}\n.btn-filter[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn-expand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-12);\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.btn-expand[_ngcontent-%COMP%]:hover {\n  color: var(--brand-grays-900);\n  background: var(--ui-bg);\n}\n.btn-expand--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-800);\n  background: var(--brand-primary-100);\n}\n.btn-expand--active[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n}\n.btn-expand[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.teams-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.teams-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 16px 0;\n}\n.team-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 16px;\n  min-height: 177px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n  box-shadow: var(--elevation-1);\n}\n.team-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--elevation-2);\n  transform: translateY(-1px);\n}\n.team-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.team-icon-box[_ngcontent-%COMP%] {\n  width: 41px;\n  height: 42px;\n  background: var(--brand-primary-100);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5.6px;\n  flex-shrink: 0;\n  color: var(--brand-primary-800);\n}\n.btn-team-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-team-menu[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.btn-team-menu[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.team-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-neutral-950);\n  line-height: 1.5;\n  flex: 1;\n}\n.team-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-start: auto;\n}\n.members-count[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.avatar-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 4px;\n}\n.avatar-chip[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  border: 2px solid var(--ui-surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 8px;\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin-inline-start: -4px;\n  flex-shrink: 0;\n}\n.avatar-chip[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: 0;\n}\n.avatar-overflow[_ngcontent-%COMP%] {\n  background: var(--brand-secondary-100);\n  color: var(--brand-grays-900);\n  font-size: 8px;\n}\n  .teams-dropdown-menu .mat-mdc-menu-panel {\n  border-radius: var(--radius-12) !important;\n  box-shadow: var(--elevation-4) !important;\n  min-width: 168px !important;\n  padding: 4px !important;\n}\n  .teams-dropdown-menu .mat-mdc-menu-content {\n  padding: 4px !important;\n}\n  .teams-dropdown-menu .mat-mdc-menu-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  font-family: var(--font-family-dm-sans) !important;\n  font-size: var(--caption-2-size) !important;\n  color: var(--brand-grays-900) !important;\n  padding: 9px 12px !important;\n  min-height: 40px !important;\n  border-radius: var(--radius-8) !important;\n  letter-spacing: 0 !important;\n}\n  .teams-dropdown-menu .mat-mdc-menu-item .mat-icon, \n  .teams-dropdown-menu .mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: inherit !important;\n}\n  .teams-dropdown-menu .mat-mdc-menu-item:hover {\n  background: var(--ui-bg) !important;\n}\n  .teams-dropdown-menu .menu-item-danger, \n  .teams-dropdown-menu .menu-item-danger .mdc-list-item__primary-text {\n  color: var(--functional-danger-500) !important;\n}\n  .teams-dropdown-menu .menu-item-danger:hover {\n  background: var(--functional-danger-50, var(--ui-bg)) !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 600px;\n  text-align: center;\n}\n.empty-img[_ngcontent-%COMP%] {\n  width: 258px;\n  height: auto;\n  object-fit: contain;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  line-height: 1.5;\n  margin: 0;\n  max-width: 420px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-start: 16px;\n  padding: 0 4px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 40px;\n  padding: 8px 12px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-surface);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-num[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.page-num[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--brand-primary-100);\n  border-color: var(--brand-primary-800);\n  color: var(--brand-primary-800);\n}\n.page-num.active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-100);\n  border-color: var(--brand-primary-800);\n  color: var(--brand-primary-800);\n  font-weight: 700;\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 45%, transparent);\n  z-index: 900;\n  animation: _ngcontent-%COMP%_overlay-fade-in 0.2s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_overlay-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.team-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block: 0;\n  inset-inline-end: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--ui-surface);\n  box-shadow: var(--elevation-6);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_drawer-slide-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n@keyframes _ngcontent-%COMP%_drawer-slide-in {\n  from {\n    transform: translateX(100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n  gap: 12px;\n  flex-shrink: 0;\n}\n.drawer-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.drawer-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-800);\n  flex-shrink: 0;\n}\n.drawer-header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.drawer-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-members-count[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.drawer-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-block-start: 4px;\n  transition: background 0.15s, color 0.15s;\n}\n.drawer-close[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.drawer-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.drawer-section[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.drawer-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.drawer-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0 0 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.drawer-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: var(--brand-primary-100);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.drawer-description[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-600);\n  line-height: 1.6;\n}\n.drawer-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-size);\n}\n.drawer-meta-icon[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.drawer-meta-label[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.drawer-meta-value[_ngcontent-%COMP%] {\n  color: var(--brand-grays-900);\n  font-weight: 600;\n}\n.drawer-member-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer-member-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg);\n}\n.drawer-member-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  background: var(--brand-primary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.drawer-member-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.drawer-member-initials[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n}\n.drawer-member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-member-name[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-member-role[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n}\n.drawer-member-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--brand-neutral-400);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 120px;\n  flex-shrink: 0;\n}\n.drawer-empty-members[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 24px 0;\n  color: var(--brand-neutral-400);\n  text-align: center;\n}\n.drawer-empty-members[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--caption-2-size);\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.drawer-btn-close[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.drawer-btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-btn-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n@media (max-width: 1024px) {\n  .people-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .teams-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .teams-page[_ngcontent-%COMP%] {\n    padding: 0 16px 32px;\n  }\n  .people-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .teams-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n  .teams-section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .team-drawer[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n  }\n}\n/*# sourceMappingURL=teams-list.css.map */"] });
var TeamsListComponent = _TeamsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamsListComponent, [{
    type: Component,
    args: [{ selector: "app-teams-list", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      FormsModule,
      MatTooltipModule,
      TranslocoModule
    ], template: `<div class="teams-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="bc-item">Mtwork</span>
    <svg class="bc-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="bc-item bc-active">Teams</span>
  </nav>

  <!-- \u2500\u2500 People Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <h2 class="section-people-title">All Peoples in teams</h2>

  <div class="people-row">
    @for (person of allPeople | slice:0:5; track person.id) {
      <div class="person-card">
        <div class="person-card-inner">
          <div class="person-avatar-wrap">
            @if (person.avatar && !person.avatar.includes('Avater.png')) {
              <img [src]="person.avatar" [alt]="person.name + ' avatar'" class="person-avatar-img">
            } @else {
              <div class="person-avatar-initials" aria-hidden="true">{{ getInitials(person.name) }}</div>
            }
            @if (person.countryFlag) {
              <img [src]="person.countryFlag" alt="country flag" class="person-flag">
            }
          </div>
          <div class="person-meta">
            <span class="person-name">{{ person.name || 'Unknown' }}</span>
            <span class="person-role">{{ person.designation || person.role || '\u2014' }}</span>
          </div>
        </div>
      </div>
    }
    @empty {
      <p class="people-empty">No team members yet.</p>
    }
  </div>

  <!-- \u2500\u2500 Teams Section Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="teams-section-header">
    <h1 class="teams-title">Teams</h1>
    @if (!isEmployee) {
      <button class="btn-create-team" (click)="addNewTeam()" [attr.aria-label]="'teams.createTeam' | transloco">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM12.75 9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25V5.25H9.75V8.25H12.75V9.75Z" fill="currentColor"/>
        </svg>
        Create Team
      </button>
    }
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="teams-toolbar">
    <div class="toolbar-start">
      <!-- Search -->
      <div class="search-field">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
        </svg>
        <input
          type="text"
          class="search-input"
          [(ngModel)]="searchQuery"
          (ngModelChange)="onSearchChange()"
          placeholder="Search teams..."
          [attr.aria-label]="'teams.searchTeams' | transloco"
        />
      </div>

      <!-- Filter button -->
      <button class="btn-filter" [attr.aria-label]="'teams.filterTeams' | transloco">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M2.25 4.5H15.75M4.5 9H13.5M6.75 13.5H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="6"  cy="4.5"  r="1.5" fill="currentColor"/>
          <circle cx="12" cy="9"    r="1.5" fill="currentColor"/>
          <circle cx="9"  cy="13.5" r="1.5" fill="currentColor"/>
        </svg>
      </button>

      <!-- Refresh -->
      <button class="btn-filter" (click)="refresh()" [attr.aria-label]="'common.refresh' | transloco" title="Refresh">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
        </svg>
      </button>

      <!-- View toggle: table | cards (shared .ui-view-toggle) -->
      <div class="ui-view-toggle" role="group" [attr.aria-label]="'common.switchView' | transloco">
        <button type="button" class="ui-view-toggle__btn"
                [class.ui-view-toggle__btn--active]="viewMode === 'table'"
                (click)="setView('table')" title="Table view" [attr.aria-label]="'common.tableView' | transloco">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z" fill="currentColor"/></svg>
        </button>
        <button type="button" class="ui-view-toggle__btn"
                [class.ui-view-toggle__btn--active]="viewMode === 'cards'"
                (click)="setView('cards')" title="Card view" [attr.aria-label]="'common.cardView' | transloco">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="currentColor"/></svg>
        </button>
      </div>
    </div>

    <!-- Fullscreen toggle -->
    <button
      class="btn-expand"
      [class.btn-expand--active]="isFullscreen()"
      (click)="toggleFullscreen()"
      [attr.aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Enter fullscreen'"
      [attr.aria-pressed]="isFullscreen()"
    >
      @if (isFullscreen()) {
        <!-- Compress icon -->
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      } @else {
        <!-- Expand icon -->
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
    </button>
  </div>

  <!-- \u2500\u2500 Teams Grid / Table / Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="teams-content">
    @if (filteredTeams.length > 0) {

      <!-- \u2500\u2500 Table view (alternate to the existing card grid) \u2500\u2500 -->
      @if (viewMode === 'table') {
        <div class="attendance-table-container">
          <table class="full-width-table" style="width:100%; border-collapse:separate; border-spacing:0 8px;">
            <thead>
              <tr>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Team</th>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Members</th>
                <th style="text-align:end;   padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (team of paginatedTeams; track team.id) {
                <tr style="background: var(--ui-surface); border-radius:8px;">
                  <td style="padding:14px 16px; cursor:pointer;" (click)="showTeamDetails(team.id)">
                    {{ resolveTeamName(team) }}
                  </td>
                  <td style="padding:14px 16px;">{{ team.members.length || 0 }}</td>
                  <td style="padding:14px 16px; text-align:end;">
                    <button class="actions-menu-btn" [matMenuTriggerFor]="rowTeamMenu" [attr.aria-label]="'teams.teamOptions' | transloco">
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="5"  r="2" fill="currentColor"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                        <circle cx="12" cy="19" r="2" fill="currentColor"/>
                      </svg>
                    </button>
                    <mat-menu #rowTeamMenu="matMenu">
                      @if (!isEmployee) {
                        <button mat-menu-item (click)="editTeam(team.id)">Edit</button>
                        <button mat-menu-item (click)="deleteTeam(team.id)">Delete</button>
                      }
                    </mat-menu>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
      <!-- \u2500\u2500 Card view (existing \u2014 preserved) \u2500\u2500 -->
      <div class="teams-grid">
        @for (team of paginatedTeams; track team.id) {
          <div class="team-card">
            <div class="team-card-top">
              <!-- Team icon -->
              <div class="team-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
                </svg>
              </div>

              <!-- Three-dot menu -->
              <button
                class="btn-team-menu"
                [matMenuTriggerFor]="teamMenu"
                [attr.aria-label]="'Options for ' + resolveTeamName(team)"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="4.5" cy="9" r="1.5" fill="currentColor"/>
                  <circle cx="9"   cy="9" r="1.5" fill="currentColor"/>
                  <circle cx="13.5" cy="9" r="1.5" fill="currentColor"/>
                </svg>
              </button>

              <mat-menu #teamMenu="matMenu" class="teams-dropdown-menu">
                @if (!isEmployee) {
                  <button mat-menu-item (click)="editTeam(team.id)">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15l1-3.667L11.333 2Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Edit Team
                  </button>
                }
                <button mat-menu-item (click)="showTeamDetails(team.id)">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 3C4.36 3 1.258 5.232.25 8.5 1.258 11.768 4.36 14 8 14s6.742-2.232 7.75-5.5C14.742 5.232 11.64 3 8 3Zm0 9.167A3.667 3.667 0 1 1 8 4.833a3.667 3.667 0 0 1 0 7.334ZM8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" fill="currentColor"/>
                  </svg>
                  View Details
                </button>
                @if (!isEmployee) {
                  <button mat-menu-item (click)="deleteTeam(team.id)" class="menu-item-danger">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Delete Team
                  </button>
                }
              </mat-menu>
            </div>

            <div class="team-name">{{ resolveTeamName(team) }}</div>

            <div class="team-card-footer">
              <span class="members-count">{{ team.members.length }} Members</span>
              <div class="avatar-group" aria-hidden="true">
                @for (m of team.members | slice:0:3; track m.id) {
                  <div class="avatar-chip" [title]="m.name || ''">{{ getInitials(m.name) }}</div>
                }
                @if (team.members.length > 3) {
                  <div class="avatar-chip avatar-overflow">+{{ team.members.length - 3 }}</div>
                }
              </div>
            </div>
          </div>
        }
      </div>
      }<!-- /@else (card view) -->

    } @else {
      <!-- Empty state -->
      <div class="empty-state">
        <img src="assets/images/NoTeams.png" alt="No teams illustration" class="empty-img">
        <h2 class="empty-title">No Teams Created yet.</h2>
        <p class="empty-sub">Start by creating team to see your teams, project, task working on</p>
      </div>
    }
  </div>

  <!-- \u2500\u2500 Pagination \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (filteredTeams.length > 0) {
    <div class="pagination" role="navigation" [attr.aria-label]="'teams.teamsPagination' | transloco">
      <button
        class="page-btn page-prev"
        (click)="prevPage()"
        [disabled]="currentPage === 1"
        [attr.aria-label]="'common.previousPage' | transloco"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Previous
      </button>

      <div class="page-numbers">
        @for (p of pages; track p) {
          <button
            class="page-num"
            [class.active]="p === currentPage"
            (click)="goToPage(p)"
            [attr.aria-label]="'Page ' + p"
            [attr.aria-current]="p === currentPage ? 'page' : null"
          >{{ p }}</button>
        }
      </div>

      <button
        class="page-btn page-next"
        (click)="nextPage()"
        [disabled]="currentPage === totalPages"
        [attr.aria-label]="'common.nextPage' | transloco"
      >
        Next
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  }

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Team Details Drawer  (rendered outside .teams-page so it
     can overlay the full viewport via position:fixed)
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (selectedTeam()) {
  <!-- Backdrop -->
  <div
    class="drawer-overlay"
    (click)="closeDrawer()"
    aria-hidden="true"
    role="presentation"
  ></div>

  <!-- Drawer panel -->
  <aside
    class="team-drawer"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="'Details for ' + selectedTeam()!.name"
  >
    <!-- Header -->
    <div class="drawer-header">
      <div class="drawer-header-left">
        <div class="drawer-icon-box" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="drawer-header-meta">
          <h2 class="drawer-name">{{ selectedTeam()!.name }}</h2>
          <span class="drawer-members-count">
            {{ selectedTeam()!.members.length }} Member{{ selectedTeam()!.members.length !== 1 ? 's' : '' }}
          </span>
        </div>
      </div>
      <button class="drawer-close" (click)="closeDrawer()" [attr.aria-label]="'common.closeDetailsPanel' | transloco" type="button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Scrollable body -->
    <div class="drawer-body">

      <!-- About section -->
      <section class="drawer-section">
        <h3 class="drawer-section-title">About</h3>
        <p class="drawer-description">
          {{ selectedTeam()!.description || 'No description provided for this team.' }}
        </p>
        @if (selectedTeam()!.createdAt) {
          <div class="drawer-meta-row">
            <svg class="drawer-meta-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" stroke-width="1.3"/>
              <path d="M5 1.5V4M11 1.5V4M2 7H14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <span class="drawer-meta-label">Created</span>
            <span class="drawer-meta-value">{{ selectedTeam()!.createdAt | date:'MMM d, y' }}</span>
          </div>
        }
      </section>

      <!-- Members section -->
      <section class="drawer-section">
        <h3 class="drawer-section-title">
          Team Members
          <span class="drawer-count-badge">{{ selectedTeam()!.members.length }}</span>
        </h3>

        @if (selectedTeam()!.members.length === 0) {
          <div class="drawer-empty-members">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9 32a9 9 0 0 1 18 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <p>No members have been added yet.</p>
          </div>
        } @else {
          <ul class="drawer-member-list">
            @for (member of selectedTeam()!.members; track member.id) {
              <li class="drawer-member-item">
                <div class="drawer-member-avatar">
                  @if (member.avatar && !member.avatar.includes('Avater.png')) {
                    <img
                      [src]="member.avatar"
                      [alt]="(member.name || '') + ' avatar'"
                      class="drawer-member-img"
                    >
                  } @else {
                    <span class="drawer-member-initials" aria-hidden="true">{{ getInitials(member.name) }}</span>
                  }
                </div>
                <div class="drawer-member-info">
                  <span class="drawer-member-name">{{ member.name || member.email || '\u2014' }}</span>
                  @if (member.designation || member.role) {
                    <span class="drawer-member-role">{{ member.designation || member.role }}</span>
                  }
                </div>
                @if (member.email && member.name) {
                  <span class="drawer-member-email">{{ member.email }}</span>
                }
              </li>
            }
          </ul>
        }
      </section>

    </div>

    <!-- Footer -->
    <div class="drawer-footer">
      <button class="drawer-btn-close" (click)="closeDrawer()" type="button">Close</button>
    </div>
  </aside>
}
`, styles: ["/* src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/teams-list/teams-list.css */\n.teams-page {\n  padding: 0 24px 48px;\n  background: var(--ui-bg);\n  min-height: 100%;\n  font-family: var(--font-family-dm-sans);\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-bottom: 24px;\n}\n.bc-item {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n}\n.bc-active {\n  color: var(--brand-primary-800);\n}\n.bc-chevron {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.section-people-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0 0 24px;\n}\n.people-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n  margin-bottom: 32px;\n}\n.person-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 24px;\n  min-height: 185px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--elevation-1);\n}\n.person-card-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.person-avatar-wrap {\n  position: relative;\n  width: 78px;\n  height: 78px;\n  flex-shrink: 0;\n  margin-bottom: 4px;\n}\n.person-avatar-img {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top;\n}\n.person-avatar-initials {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-800) 0%,\n      transparent 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-weight: 700;\n  font-size: 24px;\n  color: var(--ui-surface);\n}\n.person-flag {\n  position: absolute;\n  bottom: 0;\n  inset-inline-end: 0;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--ui-surface);\n}\n.person-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.person-name {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n}\n.person-role {\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.people-empty {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  padding: 32px 0;\n}\n.teams-section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.teams-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0;\n}\n.btn-create-team {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 8px 12px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: 1px solid var(--brand-primary-700);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: var(--shadow-flat-button);\n  transition: background 0.2s ease;\n}\n.btn-create-team:hover {\n  background: var(--brand-primary-700);\n}\n.btn-create-team:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.teams-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--elevation-1);\n}\n.toolbar-start {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 314px;\n  height: 42px;\n  padding: 6px 12px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n}\n.search-icon {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  min-width: 0;\n}\n.search-input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.btn-filter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  flex-shrink: 0;\n}\n.btn-filter:hover {\n  color: var(--brand-grays-900);\n  border-color: var(--brand-neutral-300);\n  background: var(--ui-bg);\n}\n.btn-filter:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn-expand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-12);\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.btn-expand:hover {\n  color: var(--brand-grays-900);\n  background: var(--ui-bg);\n}\n.btn-expand--active {\n  color: var(--brand-primary-800);\n  background: var(--brand-primary-100);\n}\n.btn-expand--active:hover {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n}\n.btn-expand:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.teams-content {\n  min-height: 400px;\n}\n.teams-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 16px 0;\n}\n.team-card {\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 16px;\n  min-height: 177px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n  box-shadow: var(--elevation-1);\n}\n.team-card:hover {\n  box-shadow: var(--elevation-2);\n  transform: translateY(-1px);\n}\n.team-card-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.team-icon-box {\n  width: 41px;\n  height: 42px;\n  background: var(--brand-primary-100);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5.6px;\n  flex-shrink: 0;\n  color: var(--brand-primary-800);\n}\n.btn-team-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-team-menu:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.btn-team-menu:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.team-name {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-neutral-950);\n  line-height: 1.5;\n  flex: 1;\n}\n.team-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-start: auto;\n}\n.members-count {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.avatar-group {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 4px;\n}\n.avatar-chip {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  border: 2px solid var(--ui-surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 8px;\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin-inline-start: -4px;\n  flex-shrink: 0;\n}\n.avatar-chip:first-child {\n  margin-inline-start: 0;\n}\n.avatar-overflow {\n  background: var(--brand-secondary-100);\n  color: var(--brand-grays-900);\n  font-size: 8px;\n}\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-panel {\n  border-radius: var(--radius-12) !important;\n  box-shadow: var(--elevation-4) !important;\n  min-width: 168px !important;\n  padding: 4px !important;\n}\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-content {\n  padding: 4px !important;\n}\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  font-family: var(--font-family-dm-sans) !important;\n  font-size: var(--caption-2-size) !important;\n  color: var(--brand-grays-900) !important;\n  padding: 9px 12px !important;\n  min-height: 40px !important;\n  border-radius: var(--radius-8) !important;\n  letter-spacing: 0 !important;\n}\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-item .mat-icon,\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: inherit !important;\n}\n::ng-deep .teams-dropdown-menu .mat-mdc-menu-item:hover {\n  background: var(--ui-bg) !important;\n}\n::ng-deep .teams-dropdown-menu .menu-item-danger,\n::ng-deep .teams-dropdown-menu .menu-item-danger .mdc-list-item__primary-text {\n  color: var(--functional-danger-500) !important;\n}\n::ng-deep .teams-dropdown-menu .menu-item-danger:hover {\n  background: var(--functional-danger-50, var(--ui-bg)) !important;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 600px;\n  text-align: center;\n}\n.empty-img {\n  width: 258px;\n  height: auto;\n  object-fit: contain;\n}\n.empty-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  line-height: 1.4;\n  margin: 0;\n}\n.empty-sub {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  line-height: 1.5;\n  margin: 0;\n  max-width: 420px;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-block-start: 16px;\n  padding: 0 4px;\n}\n.page-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 40px;\n  padding: 8px 12px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.page-btn:hover:not(:disabled) {\n  background: var(--ui-surface);\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.page-numbers {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-num {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-6);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.page-num:hover:not(.active) {\n  background: var(--brand-primary-100);\n  border-color: var(--brand-primary-800);\n  color: var(--brand-primary-800);\n}\n.page-num.active {\n  background: var(--brand-primary-100);\n  border-color: var(--brand-primary-800);\n  color: var(--brand-primary-800);\n  font-weight: 700;\n}\n.drawer-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 45%, transparent);\n  z-index: 900;\n  animation: overlay-fade-in 0.2s ease forwards;\n}\n@keyframes overlay-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.team-drawer {\n  position: fixed;\n  inset-block: 0;\n  inset-inline-end: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--ui-surface);\n  box-shadow: var(--elevation-6);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: drawer-slide-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n@keyframes drawer-slide-in {\n  from {\n    transform: translateX(100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n  gap: 12px;\n  flex-shrink: 0;\n}\n.drawer-header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n}\n.drawer-icon-box {\n  width: 44px;\n  height: 44px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-800);\n  flex-shrink: 0;\n}\n.drawer-header-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.drawer-name {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-members-count {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.drawer-close {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-block-start: 4px;\n  transition: background 0.15s, color 0.15s;\n}\n.drawer-close:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.drawer-close:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n}\n.drawer-section {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.drawer-section:last-child {\n  border-bottom: none;\n}\n.drawer-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0 0 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.drawer-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: var(--brand-primary-100);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.drawer-description {\n  margin: 0 0 14px;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-600);\n  line-height: 1.6;\n}\n.drawer-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-size);\n}\n.drawer-meta-icon {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.drawer-meta-label {\n  color: var(--brand-neutral-400);\n  font-weight: 500;\n}\n.drawer-meta-value {\n  color: var(--brand-grays-900);\n  font-weight: 600;\n}\n.drawer-member-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer-member-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg);\n}\n.drawer-member-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  background: var(--brand-primary-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.drawer-member-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.drawer-member-initials {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n}\n.drawer-member-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-member-name {\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-member-role {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n}\n.drawer-member-email {\n  font-size: 11px;\n  color: var(--brand-neutral-400);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 120px;\n  flex-shrink: 0;\n}\n.drawer-empty-members {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 24px 0;\n  color: var(--brand-neutral-400);\n  text-align: center;\n}\n.drawer-empty-members p {\n  margin: 0;\n  font-size: var(--caption-2-size);\n}\n.drawer-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.drawer-btn-close {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.drawer-btn-close:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-btn-close:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n@media (max-width: 1024px) {\n  .people-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .teams-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .teams-page {\n    padding: 0 16px 32px;\n  }\n  .people-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .teams-grid {\n    grid-template-columns: 1fr;\n  }\n  .search-field {\n    width: 220px;\n  }\n  .teams-section-header {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .team-drawer {\n    width: 100vw;\n    max-width: 100vw;\n  }\n}\n/*# sourceMappingURL=teams-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamsListComponent, { className: "TeamsListComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/teamstabcomponents/teams-list/teams-list.ts", lineNumber: 32 });
})();
export {
  TeamsListComponent
};
//# sourceMappingURL=chunk-FSTPI4HH.js.map
