import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-IIF23ZQ3.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule,
  MatTabsModule
} from "./chunk-VXEIUSAH.js";
import "./chunk-S3Q32BCL.js";
import {
  AttendanceService
} from "./chunk-GQUEZJ2O.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix
} from "./chunk-Y6F5OIGJ.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-UKZCYTB4.js";
import "./chunk-XWKVXKPV.js";
import "./chunk-HIQBHLFY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5X6PCUCF.js";
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
  RouterLink
} from "./chunk-LSMZM5UZ.js";
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/SidebarComponents/attendance-details/attendance-details.ts
var _forTrack0 = ($index, $item) => $item.id ?? $index;
function AttendanceDetailsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employeeRole);
  }
}
function AttendanceDetailsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employeeStatus);
  }
}
function AttendanceDetailsComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Conditional_68_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 55);
    \u0275\u0275element(3, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Reset ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "common.resetFilters"));
  }
}
function AttendanceDetailsComponent_Conditional_79_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Search: ", ctx_r0.searchQuery);
  }
}
function AttendanceDetailsComponent_Conditional_79_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Date: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.selectedDate, "mediumDate"));
  }
}
function AttendanceDetailsComponent_Conditional_79_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Shift: ", ctx_r0.shiftFilter);
  }
}
function AttendanceDetailsComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275conditionalCreate(1, AttendanceDetailsComponent_Conditional_79_Conditional_1_Template, 2, 1, "span", 57);
    \u0275\u0275conditionalCreate(2, AttendanceDetailsComponent_Conditional_79_Conditional_2_Template, 3, 4, "span", 57);
    \u0275\u0275conditionalCreate(3, AttendanceDetailsComponent_Conditional_79_Conditional_3_Template, 2, 1, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.searchQuery ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selectedDate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shiftFilter ? 3 : -1);
  }
}
function AttendanceDetailsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceDetailsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "p");
    \u0275\u0275text(2, "Couldn't load your attendance records. Please check your connection and try again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Conditional_81_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadAttendanceRecords());
    });
    \u0275\u0275text(5, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "common.retryLoading"));
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "No matches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 67);
    \u0275\u0275text(3, "No records match your current filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 68);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Conditional_82_Conditional_0_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275text(6, " Clear filters ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 1, "common.clearFilters"));
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "No Attendance Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 67);
    \u0275\u0275text(3, "No attendance records have been recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AttendanceDetailsComponent_Conditional_82_Conditional_0_Conditional_3_Template, 7, 3)(4, AttendanceDetailsComponent_Conditional_82_Conditional_0_Conditional_4_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.hasActiveFilters ? 3 : 4);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, " Date ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", record_r5.weekDay);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_4_Conditional_2_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(record_r5.attendanceDate || record_r5.checkInTime) || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r5.weekDay ? 2 : -1);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82)(1, "span", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStatusClass(record_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(record_r6), " ");
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, " Check In ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(record_r7.checkInTime) || "\u2014", " ");
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 81);
    \u0275\u0275text(1, " Check Out ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(record_r8.checkOutTime) || "\u2014", " ");
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, " Actions ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 86)(1, "button", 87);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 88);
    \u0275\u0275element(4, "path", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "mat-menu", null, 0)(7, "button", 90);
    \u0275\u0275text(8, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 90);
    \u0275\u0275text(10, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r9 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.actionsMenu"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 91);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 92);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "table", 69);
    \u0275\u0275elementContainerStart(2, 70);
    \u0275\u0275template(3, AttendanceDetailsComponent_Conditional_82_Conditional_1_th_3_Template, 2, 0, "th", 71)(4, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_4_Template, 3, 2, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 73);
    \u0275\u0275template(6, AttendanceDetailsComponent_Conditional_82_Conditional_1_th_6_Template, 2, 0, "th", 71)(7, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_7_Template, 3, 3, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 74);
    \u0275\u0275template(9, AttendanceDetailsComponent_Conditional_82_Conditional_1_th_9_Template, 2, 0, "th", 71)(10, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_10_Template, 2, 1, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 75);
    \u0275\u0275template(12, AttendanceDetailsComponent_Conditional_82_Conditional_1_th_12_Template, 2, 0, "th", 71)(13, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_13_Template, 2, 1, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 76);
    \u0275\u0275template(15, AttendanceDetailsComponent_Conditional_82_Conditional_1_th_15_Template, 2, 0, "th", 77)(16, AttendanceDetailsComponent_Conditional_82_Conditional_1_td_16_Template, 11, 6, "td", 78);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(17, AttendanceDetailsComponent_Conditional_82_Conditional_1_tr_17_Template, 1, 0, "tr", 79)(18, AttendanceDetailsComponent_Conditional_82_Conditional_1_tr_18_Template, 1, 0, "tr", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.filteredRecords);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 93)(1, "header", 94)(2, "span", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 88);
    \u0275\u0275element(6, "circle", 96)(7, "circle", 97)(8, "circle", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "mat-menu", null, 1)(11, "button", 90);
    \u0275\u0275text(12, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 90);
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 99)(16, "dl", 100)(17, "div")(18, "dt");
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24, "Check In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "dt");
    \u0275\u0275text(29, "Check Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const record_r10 = ctx.$implicit;
    const cardMenu_r11 = \u0275\u0275reference(10);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(record_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(record_r10), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", cardMenu_r11);
    \u0275\u0275attribute("aria-label", "Actions for record " + (record_r10.id ?? ""));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(record_r10.attendanceDate || record_r10.checkInTime) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(record_r10.checkInTime) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(record_r10.checkOutTime) || "\u2014");
  }
}
function AttendanceDetailsComponent_Conditional_82_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275repeaterCreate(1, AttendanceDetailsComponent_Conditional_82_Conditional_2_For_2_Template, 32, 10, "article", 93, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredRecords);
  }
}
function AttendanceDetailsComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AttendanceDetailsComponent_Conditional_82_Conditional_0_Template, 5, 1, "div", 61)(1, AttendanceDetailsComponent_Conditional_82_Conditional_1_Template, 19, 3, "div", 62)(2, AttendanceDetailsComponent_Conditional_82_Conditional_2_Template, 3, 0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.filteredRecords.length === 0 ? 0 : ctx_r0.viewMode === "table" ? 1 : 2);
  }
}
var _AttendanceDetailsComponent = class _AttendanceDetailsComponent {
  constructor() {
    this.attendanceService = inject(AttendanceService);
    this.tokenService = inject(TokenService);
    this.cdr = inject(ChangeDetectorRef);
    this.employeeId = this.tokenService.getUserId() ?? "";
    this.employeeName = "";
    this.employeeRole = "";
    this.employeeStatus = "";
    this.attendanceRecords = [];
    this.filteredRecords = [];
    this.searchQuery = "";
    this.selectedDate = null;
    this.shiftFilter = "";
    this.dateInputValue = "";
    this.isLoading = false;
    this.loadError = false;
    this.viewMode = "table";
    this.displayedColumns = ["date", "leaveType", "checkIn", "checkOut", "actions"];
  }
  setView(mode) {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  get hasActiveFilters() {
    return !!(this.searchQuery || this.selectedDate || this.shiftFilter);
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedDate = null;
    this.shiftFilter = "";
    this.dateInputValue = "";
    this.applyFilters();
  }
  ngOnInit() {
    this.loadAttendanceRecords();
  }
  loadAttendanceRecords() {
    this.isLoading = true;
    this.loadError = false;
    this.cdr.markForCheck();
    this.attendanceService.getEmployeeAttendance(this.employeeId).subscribe({
      next: (data) => {
        this.attendanceRecords = data ?? [];
        if (this.attendanceRecords.length > 0) {
          const first = this.attendanceRecords[0];
          this.employeeName = this.getFullName(first);
        }
        this.isLoading = false;
        this.applyFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.loadError = true;
        this.attendanceRecords = [];
        this.filteredRecords = [];
        this.cdr.markForCheck();
      }
    });
  }
  applyFilters() {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredRecords = this.attendanceRecords.filter((record) => {
      const fullName = this.getFullName(record).toLowerCase();
      const statusTxt = this.getStatusLabel(record).toLowerCase();
      const matchesSearch = !q || fullName.includes(q) || statusTxt.includes(q) || (record.weekDay ?? "").toLowerCase().includes(q) || (record.userName ?? "").toLowerCase().includes(q);
      let matchesDate = true;
      if (this.selectedDate) {
        const recordDate = record.attendanceDate ?? record.checkInTime;
        if (!recordDate) {
          matchesDate = false;
        } else {
          const d = new Date(recordDate);
          matchesDate = this.normalizeDate(d).getTime() === this.normalizeDate(this.selectedDate).getTime();
        }
      }
      const matchesShift = !this.shiftFilter || String(Number(record.leaveType ?? 0)) === this.shiftFilter || statusTxt === this.shiftFilter.toLowerCase();
      return matchesSearch && matchesDate && matchesShift;
    });
  }
  onSearchChange() {
    this.applyFilters();
  }
  onDateInputChange(value) {
    this.dateInputValue = value;
    this.selectedDate = value ? new Date(value) : null;
    this.applyFilters();
  }
  onShiftChange(value) {
    this.shiftFilter = value;
    this.applyFilters();
  }
  importAttendance() {
  }
  // Backend `leaveType` is the daily attendance STATUS, not a leave subtype.
  //   0 → Working (no leave on that day; default int when not set)
  //   1 → Leave    (CheckOutEnum.Leave)
  //   2 → Meeting  (CheckOutEnum.Meeting)
  //   3 → Other    (CheckOutEnum.Other)
  getStatusLabel(record) {
    switch (Number(record?.leaveType ?? 0)) {
      case 0:
        return "Working";
      case 1:
        return "Leave";
      case 2:
        return "Meeting";
      case 3:
        return "Other";
      default:
        return "\u2014";
    }
  }
  /** Modifier class for the status badge — paired with .ui-status-badge. */
  getStatusClass(record) {
    switch (Number(record?.leaveType ?? 0)) {
      case 0:
        return "ui-status-badge--working";
      case 1:
        return "ui-status-badge--leave";
      case 2:
        return "ui-status-badge--meeting";
      case 3:
        return "ui-status-badge--other";
      default:
        return "";
    }
  }
  /** Back-compat aliases — keep callers using the old names from breaking. */
  getLeaveTypeLabel(record) {
    return this.getStatusLabel(record);
  }
  getShiftType(record) {
    return this.getStatusLabel(record);
  }
  getFullName(record) {
    const first = record.employee?.firstName ?? "";
    const last = record.employee?.lastName ?? "";
    return `${first} ${last}`.trim();
  }
  formatDateWithOrdinal(value) {
    if (!value)
      return "";
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return "";
    const day = d.getDate();
    const ordinal = this.getOrdinal(day);
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    return `${month} ${day}${ordinal} ${d.getFullYear()}`;
  }
  getOrdinal(day) {
    if (day > 3 && day < 21)
      return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  getInitials(name) {
    if (!name)
      return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  normalizeDate(d) {
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
  }
  formatDate(date) {
    return this.formatDateWithOrdinal(date);
  }
};
_AttendanceDetailsComponent.\u0275fac = function AttendanceDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendanceDetailsComponent)();
};
_AttendanceDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceDetailsComponent, selectors: [["app-attendance-details"]], decls: 83, vars: 40, consts: [["menu", "matMenu"], ["cardMenu", "matMenu"], [1, "attendance-container"], [1, "top-bar"], ["routerLink", "/attendance", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "icon-inline"], ["d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", "fill", "currentColor"], ["mat-flat-button", "", "color", "primary", 1, "import-btn", 3, "click", "disabled"], ["d", "M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z", "fill", "currentColor"], [1, "breadcrumb-section"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "chev"], ["d", "M9.29 6.71L13.58 11 9.29 15.29 10.71 16.71 16.42 11 10.71 5.29z", "fill", "currentColor"], ["routerLink", "/dashboard/genralattendance"], ["routerLink", "/dashboard/attendance", 1, "current-page"], [1, "employee-header-card"], [1, "card-content"], [1, "employee-avatar-stack"], ["src", "assets/images/Avater.png", "alt", "Employee Avatar", 1, "employee-avatar"], ["src", "assets/images/EgyptAvater.png", "alt", "Employee Country Flag", 1, "emp-country-flag"], [1, "employee-main-info"], [1, "employee-details"], [1, "muted", "employee-role"], [1, "status-badge"], [1, "filter-section"], ["appearance", "outline", 1, "search-input"], ["matPrefix", "", 1, "search-icon"], ["matInput", "", "placeholder", "Search", 3, "ngModelChange", "ngModel"], [1, "filter-btn"], ["viewBox", "-2.4 -2.4 28.80 28.80", "xmlns", "http://www.w3.org/2000/svg", "fill", "#000000", "width", "20", "height", "20"], ["fill", "none", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "4", "y1", "5", "x2", "16", "y2", "5"], ["x1", "4", "y1", "12", "x2", "10", "y2", "12"], ["x1", "14", "y1", "12", "x2", "20", "y2", "12"], ["x1", "8", "y1", "19", "x2", "20", "y2", "19"], ["cx", "18", "cy", "5", "r", "2"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "6", "cy", "19", "r", "2"], ["type", "date", 1, "date-filter-input", 3, "ngModelChange", "ngModel"], [1, "shift-filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["title", "Reset filters", 1, "filter-reset-btn"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], ["role", "status", "aria-live", "polite", 1, "active-filters"], ["role", "status", "aria-live", "polite", 1, "loading-state"], ["role", "alert", 1, "error-state"], ["title", "Reset filters", 1, "filter-reset-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", "fill", "currentColor"], [1, "filter-chip"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "loading-spinner-icon"], ["d", "M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z", "fill", "currentColor"], [1, "retry-btn", 3, "click"], [1, "ui-empty", "ui-empty--compact"], [1, "attendance-table-container"], [1, "ui-cards-grid"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z", "fill", "currentColor"], [1, "ui-empty__title"], [1, "ui-empty__sub"], ["type", "button", 1, "ui-empty__cta", 3, "click"], ["mat-table", "", 1, "full-width-table", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "leaveType"], ["matColumnDef", "checkIn"], ["matColumnDef", "checkOut"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "mat-column-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "mat-column-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "muted", 2, "margin-inline-start", "6px"], [1, "ui-status-badge"], ["mat-header-cell", "", 1, "mat-column-actions"], ["mat-cell", "", 1, "mat-column-actions"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z", "fill", "currentColor"], ["mat-menu-item", "", 3, "disabled"], ["mat-header-row", ""], ["mat-row", ""], [1, "ui-card"], [1, "ui-card__head"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor"], ["cx", "12", "cy", "5", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "19", "r", "2", "fill", "currentColor"], [1, "ui-card__body"], [1, "ui-card__meta"]], template: function AttendanceDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Template_button_click_8_listener() {
      return ctx.importAttendance();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 5);
    \u0275\u0275element(10, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Import");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "span");
    \u0275\u0275text(15, "Mtwork");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 10);
    \u0275\u0275element(17, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "a", 12);
    \u0275\u0275text(19, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 10);
    \u0275\u0275element(21, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "a", 13);
    \u0275\u0275text(23, "Attendance Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h2");
    \u0275\u0275text(25, "Attendance Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-card", 14)(27, "div", 15)(28, "div", 16);
    \u0275\u0275element(29, "img", 17)(30, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "h3");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, AttendanceDetailsComponent_Conditional_35_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, AttendanceDetailsComponent_Conditional_36_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 23)(38, "mat-form-field", 24)(39, "mat-icon", 25);
    \u0275\u0275text(40, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 26);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceDetailsComponent_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AttendanceDetailsComponent_Template_input_ngModelChange_41_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 27);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 28)(46, "g", 29);
    \u0275\u0275element(47, "line", 30)(48, "line", 31)(49, "line", 32)(50, "line", 33)(51, "circle", 34)(52, "circle", 35)(53, "circle", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "input", 37);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceDetailsComponent_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.dateInputValue, $event) || (ctx.dateInputValue = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AttendanceDetailsComponent_Template_input_ngModelChange_54_listener($event) {
      return ctx.onDateInputChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 38);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceDetailsComponent_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.shiftFilter, $event) || (ctx.shiftFilter = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AttendanceDetailsComponent_Template_select_ngModelChange_56_listener($event) {
      return ctx.onShiftChange($event);
    });
    \u0275\u0275elementStart(58, "option", 39);
    \u0275\u0275text(59, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 40);
    \u0275\u0275text(61, "Working");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 41);
    \u0275\u0275text(63, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 42);
    \u0275\u0275text(65, "Meeting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 43);
    \u0275\u0275text(67, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(68, AttendanceDetailsComponent_Conditional_68_Template, 5, 3, "button", 44);
    \u0275\u0275elementStart(69, "div", 45);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementStart(71, "button", 46);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Template_button_click_71_listener() {
      return ctx.setView("table");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 47);
    \u0275\u0275element(74, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "button", 49);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275listener("click", function AttendanceDetailsComponent_Template_button_click_75_listener() {
      return ctx.setView("cards");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 47);
    \u0275\u0275element(78, "path", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(79, AttendanceDetailsComponent_Conditional_79_Template, 4, 3, "div", 51);
    \u0275\u0275conditionalCreate(80, AttendanceDetailsComponent_Conditional_80_Template, 5, 0, "div", 52);
    \u0275\u0275conditionalCreate(81, AttendanceDetailsComponent_Conditional_81_Template, 6, 3, "div", 53);
    \u0275\u0275conditionalCreate(82, AttendanceDetailsComponent_Conditional_82_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 24, "attendance.backToAttendance"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx.employeeName || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.employeeRole ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.employeeStatus ? 36 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 26, "attendance.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 28, "common.filters"));
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.dateInputValue);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(55, 30, "attendance.filterByDate"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.shiftFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(57, 32, "common.filterByStatus"));
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx.hasActiveFilters ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(70, 34, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(72, 36, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(76, 38, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.hasActiveFilters ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 80 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading && ctx.loadError ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading && !ctx.loadError ? 82 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  RouterLink,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatCardModule,
  MatCard,
  MatTabsModule,
  MatTableModule,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  TranslocoModule,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.attendance-container[_ngcontent-%COMP%] {\n}\n[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n  background-color: var(--ui-bg-subtle);\n  min-height: 100vh;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: var(--brand-neutral-800);\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-sub);\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-neutral-950);\n}\n.icon-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.import-btn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  border-radius: 8px;\n  padding: 6px 16px;\n  font-weight: 500;\n  text-transform: none;\n}\n.import-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  margin: 8px 0 18px 0;\n}\n.breadcrumb-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.breadcrumb-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--brand-neutral-800);\n}\n.breadcrumb-section[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-800);\n  font-weight: 600;\n}\n.chev[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: var(--ui-text-muted);\n}\n.employee-header-card[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n  background: var(--ui-surface);\n  margin-bottom: 16px;\n  border: 1px solid color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.employee-avatar-stack[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 48px;\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.employee-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--brand-neutral-950) 6%, transparent);\n}\n.emp-country-flag[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  bottom: -2px;\n  inset-inline-end: -2px;\n  border-radius: 4px;\n  border: 1px solid var(--ui-surface);\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 12%, transparent);\n}\n.employee-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.employee-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.employee-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.3;\n  color: var(--brand-neutral-800);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-role[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 12px;\n  line-height: 1.3;\n}\n.employee-info[_ngcontent-%COMP%]   p.muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: var(--ui-text-muted);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 5%, transparent);\n  margin-inline-start: auto;\n}\n.filter-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 10px 12px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  flex-wrap: wrap;\n}\n.filter-section[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%], \n.filter-section[_ngcontent-%COMP%]   .date-filter-input[_ngcontent-%COMP%], \n.filter-section[_ngcontent-%COMP%]   .shift-filter-select[_ngcontent-%COMP%], \n.filter-section[_ngcontent-%COMP%]   .filter-reset-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.filter-section[_ngcontent-%COMP%]   .ui-view-toggle[_ngcontent-%COMP%], \n.filter-section[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n.filter-section[_ngcontent-%COMP%]   .ui-view-toggle[_ngcontent-%COMP%]    ~ .fullscreen-btn[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n}\n.mat-tab-group[_ngcontent-%COMP%] {\n  min-width: 170px;\n  flex-shrink: 0;\n  height: 48px;\n}\n.mat-tab-label-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.mat-tab-label[_ngcontent-%COMP%] {\n  min-width: unset !important;\n  padding: 0 20px !important;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n  opacity: 1;\n  transition: color 0.2s ease;\n  height: 48px;\n}\n.mat-tab-label[_ngcontent-%COMP%]:hover {\n  color: var(--brand-neutral-800);\n}\n.mat-tab-label.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n.mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: var(--functional-info-700) !important;\n  height: 3px !important;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 250px;\n  height: 48px;\n}\n.date-picker[_ngcontent-%COMP%] {\n  min-width: 180px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding-bottom: 0 !important;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 12px !important;\n  display: flex;\n  align-items: center;\n}\n.search-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding-inline-start: 0px !important;\n}\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 0 12px;\n}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  top: -8px !important;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  top: 10px !important;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%], \n.mat-form-field-suffix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.search-input[_ngcontent-%COMP%]   .mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-inline-end: 8px;\n  opacity: 0.6;\n}\n.fullscreen-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 8px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ui-text-sub);\n  transition: background-color 0.2s ease, border-color 0.2s ease;\n}\n.fullscreen-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--ui-bg);\n  border-color: var(--ui-border-secondary);\n}\n.attendance-table-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  padding: 8px 12px;\n  overflow-x: auto;\n}\n.attendance-container[_ngcontent-%COMP%]    > .ui-cards-grid[_ngcontent-%COMP%], \n.attendance-container[_ngcontent-%COMP%]    > .ui-empty[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.mat-header-row[_ngcontent-%COMP%] {\n  height: 52px;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n  text-transform: uppercase;\n}\n.mat-row[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 8px;\n  min-height: 64px;\n  transition: background-color 0.2s ease;\n}\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-neutral-50);\n}\n.mat-cell[_ngcontent-%COMP%], \n.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  vertical-align: middle;\n  border-bottom: none;\n  font-size: 14px;\n}\n.mat-header-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-inline-start: 24px;\n}\n.mat-cell[_ngcontent-%COMP%]:first-of-type {\n  border-start-start-radius: 8px;\n  border-end-start-radius: 8px;\n  padding-inline-start: 24px;\n}\n.mat-cell[_ngcontent-%COMP%]:last-of-type {\n  border-start-end-radius: 8px;\n  border-end-end-radius: 8px;\n  padding-inline-end: 24px;\n}\n.mat-column-actions[_ngcontent-%COMP%] {\n  text-align: end;\n  padding-inline-end: 24px !important;\n}\n.employee-cell-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.employee-initials[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-50),\n      var(--brand-primary-100));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: var(--functional-info-700);\n  font-size: 14px;\n  box-shadow: 0 1px 0 color-mix(in srgb, var(--brand-neutral-950) 3%, transparent);\n  flex-shrink: 0;\n}\n.employee-details-text[_ngcontent-%COMP%]   .employee-name-in-table[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-neutral-800);\n}\n.employee-details-text[_ngcontent-%COMP%]   .employee-designation-in-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  margin-top: 2px;\n}\n.shift-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-50),\n      var(--brand-primary-100));\n  border: 1px solid color-mix(in srgb, var(--brand-primary-800) 6%, transparent);\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--functional-info-800);\n  white-space: nowrap;\n}\n.no-records-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--ui-text-muted);\n  font-style: italic;\n  font-size: 16px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n@media (max-width: 900px) {\n  .filter-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-input[_ngcontent-%COMP%], \n   .date-picker[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n  }\n  .mat-tab-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .attendance-container[_ngcontent-%COMP%] {\n    margin-inline-start: 0 !important;\n    padding: 16px;\n  }\n  .attendance-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .full-width-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .top-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .mat-dialog-container[_ngcontent-%COMP%], \n   .cdk-overlay-pane[_ngcontent-%COMP%] {\n    max-width: 95vw !important;\n    width: 95vw !important;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=attendance-details.css.map */"] });
var AttendanceDetailsComponent = _AttendanceDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-details", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatMenuModule,
      MatCardModule,
      MatTabsModule,
      MatTableModule,
      TranslocoModule
    ], template: `<!-- ============================== -->
<!-- MAIN CONTAINER -->
<!-- ============================== -->
<div class="attendance-container">

  <!-- ============================== -->
  <!-- TOP BAR - Back Link & Import Button -->
  <!-- ============================== -->
  <div class="top-bar">
    <!-- Back Link -->
    <a routerLink="/attendance" class="back-link" [attr.aria-label]="'attendance.backToAttendance' | transloco">
      <svg width="18" height="18" viewBox="0 0 24 24" class="icon-inline" aria-hidden="true">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"></path>
      </svg>
      <span>Back</span>
    </a>

    <!-- Import Button -->
    <button mat-flat-button color="primary" (click)="importAttendance()" class="import-btn" [disabled]="true">
      <svg width="18" height="18" viewBox="0 0 24 24" class="icon-inline" aria-hidden="true">
        <path d="M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z" fill="currentColor"></path>
      </svg>
      <span>Import</span>
    </button>
  </div>

  <!-- ============================== -->
  <!-- BREADCRUMB NAVIGATION -->
  <!-- ============================== -->
  <div class="breadcrumb-section">
    <span>Mtwork</span>
    <svg width="14" height="14" viewBox="0 0 24 24" class="chev" aria-hidden="true">
      <path d="M9.29 6.71L13.58 11 9.29 15.29 10.71 16.71 16.42 11 10.71 5.29z" fill="currentColor"></path>
    </svg>
    <a routerLink="/dashboard/genralattendance">Attendance</a>
    <svg width="14" height="14" viewBox="0 0 24 24" class="chev" aria-hidden="true">
      <path d="M9.29 6.71L13.58 11 9.29 15.29 10.71 16.71 16.42 11 10.71 5.29z" fill="currentColor"></path>
    </svg>
    <a routerLink="/dashboard/attendance" class="current-page">Attendance Details</a>
  </div>

  <!-- ============================== -->
  <!-- PAGE TITLE -->
  <!-- ============================== -->
  <h2>Attendance Details</h2>

  <!-- ============================== -->
  <!-- EMPLOYEE HEADER CARD -->
  <!-- ============================== -->
  <mat-card class="employee-header-card">
    <div class="card-content">
      <!-- Employee Avatar with Country Flag -->
      <div class="employee-avatar-stack">
        <img src="assets/images/Avater.png" alt="Employee Avatar" class="employee-avatar">
        <img src="assets/images/EgyptAvater.png" alt="Employee Country Flag" class="emp-country-flag">
      </div>
      
      <!-- Employee Information -->
      <div class="employee-main-info">
        <div class="employee-details">
          <h3>{{ employeeName || '\u2014' }}</h3>
          @if (employeeRole) {
            <p class="muted employee-role">{{ employeeRole }}</p>
          }
        </div>
        <!-- Status Badge \u2014 hidden when no status string is available -->
        @if (employeeStatus) {
          <span class="status-badge">{{ employeeStatus }}</span>
        }
      </div>
    </div>
  </mat-card>

  <!-- ============================== -->
  <!-- FILTER SECTION - Search, Filter, Date, Fullscreen -->
  <!-- ============================== -->
  <div class="filter-section">
    <!-- Search Input -->
    <mat-form-field appearance="outline" class="search-input">
      <mat-icon matPrefix class="search-icon">search</mat-icon>
      <input matInput placeholder="Search" [(ngModel)]="searchQuery" (ngModelChange)="onSearchChange()" [attr.aria-label]="'attendance.searchRecords' | transloco">
    </mat-form-field>
    
    <!-- Filter Button -->
    <button class="filter-btn" [attr.aria-label]="'common.filters' | transloco">
      <svg viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20" height="20">
        <g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round">
          <line x1="4" y1="5" x2="16" y2="5"/>
          <line x1="4" y1="12" x2="10" y2="12"/>
          <line x1="14" y1="12" x2="20" y2="12"/>
          <line x1="8" y1="19" x2="20" y2="19"/>
          <circle cx="18" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="6" cy="19" r="2"/>
        </g>
      </svg>
    </button>
    
    <!-- Date Filter Input -->
    <input
      type="date"
      class="date-filter-input"
      [attr.aria-label]="'attendance.filterByDate' | transloco"
      [(ngModel)]="dateInputValue"
      (ngModelChange)="onDateInputChange($event)"
    />

    <!-- Status filter (backend \`leaveType\`: 0=Working, 1=Leave, 2=Meeting, 3=Other) -->
    <select class="shift-filter-select" [attr.aria-label]="'common.filterByStatus' | transloco" [(ngModel)]="shiftFilter" (ngModelChange)="onShiftChange($event)">
      <option value="">All Statuses</option>
      <option value="0">Working</option>
      <option value="1">Leave</option>
      <option value="2">Meeting</option>
      <option value="3">Other</option>
    </select>

    @if (hasActiveFilters) {
      <button class="filter-reset-btn" (click)="resetFilters()" [attr.aria-label]="'common.resetFilters' | transloco" title="Reset filters">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
        </svg>
        Reset
      </button>
    }

    <!-- View toggle: table | cards (shared .ui-view-toggle from styles.css) -->
    <div class="ui-view-toggle" role="group" [attr.aria-label]="'common.switchView' | transloco">
      <button
        type="button"
        class="ui-view-toggle__btn"
        [class.ui-view-toggle__btn--active]="viewMode === 'table'"
        (click)="setView('table')"
        [attr.aria-label]="'common.tableView' | transloco"
        title="Table view">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z" fill="currentColor"/>
        </svg>
      </button>
      <button
        type="button"
        class="ui-view-toggle__btn"
        [class.ui-view-toggle__btn--active]="viewMode === 'cards'"
        (click)="setView('cards')"
        [attr.aria-label]="'common.cardView' | transloco"
        title="Card view">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Active filter chips -->
  @if (hasActiveFilters) {
    <div class="active-filters" role="status" aria-live="polite">
      @if (searchQuery) {
        <span class="filter-chip">Search: {{ searchQuery }}</span>
      }
      @if (selectedDate) {
        <span class="filter-chip">Date: {{ selectedDate | date: 'mediumDate' }}</span>
      }
      @if (shiftFilter) {
        <span class="filter-chip">Shift: {{ shiftFilter }}</span>
      }
    </div>
  }

  <!-- Loading state -->
  @if (isLoading) {
    <div class="loading-state" role="status" aria-live="polite">
      <svg class="loading-spinner-icon" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor"/>
      </svg>
      <p>Loading\u2026</p>
    </div>
  }

  <!-- Error state -->
  @if (!isLoading && loadError) {
    <div class="error-state" role="alert">
      <p>Couldn't load your attendance records. Please check your connection and try again.</p>
      <button class="retry-btn" (click)="loadAttendanceRecords()" [attr.aria-label]="'common.retryLoading' | transloco">Retry</button>
    </div>
  }

  <!-- ============================== -->
  <!-- DATA REGION \u2014 table OR cards (shared .ui-* primitives) -->
  <!-- ============================== -->
  @if (!isLoading && !loadError) {

    <!-- Empty state shared with both views -->
    @if (filteredRecords.length === 0) {
      <div class="ui-empty ui-empty--compact">
        <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor"/>
        </svg>
        @if (hasActiveFilters) {
          <p class="ui-empty__title">No matches</p>
          <p class="ui-empty__sub">No records match your current filters.</p>
          <button type="button" class="ui-empty__cta" (click)="resetFilters()" [attr.aria-label]="'common.clearFilters' | transloco">
            Clear filters
          </button>
        } @else {
          <p class="ui-empty__title">No Attendance Records</p>
          <p class="ui-empty__sub">No attendance records have been recorded yet.</p>
        }
      </div>
    }

    <!-- Table view -->
    @else if (viewMode === 'table') {
      <div class="attendance-table-container">
        <table mat-table [dataSource]="filteredRecords" class="full-width-table">

          <!-- (Employee column intentionally removed \u2014 page is single-employee.) -->

          <!-- Date \u2014 primary sortable identifier per record -->
          <ng-container matColumnDef="date">
            <th mat-header-cell *matHeaderCellDef> Date </th>
            <td mat-cell *matCellDef="let record">
              {{ formatDate(record.attendanceDate || record.checkInTime) || '\u2014' }}
              @if (record.weekDay) {
                <span class="muted" style="margin-inline-start:6px;">\xB7 {{ record.weekDay }}</span>
              }
            </td>
          </ng-container>

          <!-- Status \u2014 backend \`leaveType\` is the daily attendance status -->
          <ng-container matColumnDef="leaveType">
            <th mat-header-cell *matHeaderCellDef> Status </th>
            <td mat-cell *matCellDef="let record">
              <span class="ui-status-badge" [class]="getStatusClass(record)">
                {{ getStatusLabel(record) }}
              </span>
            </td>
          </ng-container>

          <ng-container matColumnDef="checkIn">
            <th mat-header-cell *matHeaderCellDef> Check In </th>
            <td mat-cell *matCellDef="let record"> {{ formatDate(record.checkInTime) || '\u2014' }} </td>
          </ng-container>

          <ng-container matColumnDef="checkOut">
            <th mat-header-cell *matHeaderCellDef> Check Out </th>
            <td mat-cell *matCellDef="let record"> {{ formatDate(record.checkOutTime) || '\u2014' }} </td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef class="mat-column-actions"> Actions </th>
            <td mat-cell *matCellDef="let record" class="mat-column-actions">
              <button mat-icon-button [matMenuTriggerFor]="menu" [attr.aria-label]="'common.actionsMenu' | transloco">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/>
                </svg>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item [disabled]="true">Edit</button>
                <button mat-menu-item [disabled]="true">Delete</button>
              </mat-menu>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    }

    <!-- Card view (shared .ui-cards-grid + .ui-card from styles.css) -->
    @else {
      <div class="ui-cards-grid">
        @for (record of filteredRecords; track record.id ?? $index) {
          <article class="ui-card">
            <header class="ui-card__head">
              <span class="ui-status-badge" [class]="getStatusClass(record)">
                {{ getStatusLabel(record) }}
              </span>
              <button type="button" mat-icon-button
                      [matMenuTriggerFor]="cardMenu"
                      [attr.aria-label]="'Actions for record ' + (record.id ?? '')">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="5"  r="2" fill="currentColor"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <circle cx="12" cy="19" r="2" fill="currentColor"/>
                </svg>
              </button>
              <mat-menu #cardMenu="matMenu">
                <button mat-menu-item [disabled]="true">Edit</button>
                <button mat-menu-item [disabled]="true">Delete</button>
              </mat-menu>
            </header>

            <div class="ui-card__body">
              <dl class="ui-card__meta">
                <div>
                  <dt>Date</dt>
                  <dd>{{ formatDate(record.attendanceDate || record.checkInTime) || '\u2014' }}</dd>
                </div>
                <div>
                  <dt>Check In</dt>
                  <dd>{{ formatDate(record.checkInTime) || '\u2014' }}</dd>
                </div>
                <div>
                  <dt>Check Out</dt>
                  <dd>{{ formatDate(record.checkOutTime) || '\u2014' }}</dd>
                </div>
              </dl>
            </div>
          </article>
        }
      </div>
    }
  }

</div>
<!-- END OF ATTENDANCE CONTAINER -->`, styles: ["/* src/components/DashboardLayout/SidebarComponents/attendance-details/attendance-details.css */\n.attendance-container {\n}\n:host {\n  display: block;\n  padding: 24px;\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n  background-color: var(--ui-bg-subtle);\n  min-height: 100vh;\n}\nh2 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: var(--brand-neutral-800);\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.back-link {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-sub);\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.back-link:hover {\n  color: var(--brand-neutral-950);\n}\n.icon-inline {\n  display: inline-block;\n  vertical-align: middle;\n}\n.import-btn {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  border-radius: 8px;\n  padding: 6px 16px;\n  font-weight: 500;\n  text-transform: none;\n}\n.import-btn .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-section {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  margin: 8px 0 18px 0;\n}\n.breadcrumb-section a {\n  color: var(--ui-text-muted);\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.breadcrumb-section a:hover {\n  color: var(--brand-neutral-800);\n}\n.breadcrumb-section .current-page {\n  color: var(--brand-neutral-800);\n  font-weight: 600;\n}\n.chev {\n  opacity: 0.5;\n  color: var(--ui-text-muted);\n}\n.employee-header-card {\n  padding: 12px 16px;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n  background: var(--ui-surface);\n  margin-bottom: 16px;\n  border: 1px solid color-mix(in srgb, var(--brand-neutral-950) 4%, transparent);\n}\n.card-content {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.employee-avatar-stack {\n  position: relative;\n  min-width: 48px;\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.employee-avatar {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid color-mix(in srgb, var(--brand-neutral-950) 6%, transparent);\n}\n.emp-country-flag {\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  bottom: -2px;\n  inset-inline-end: -2px;\n  border-radius: 4px;\n  border: 1px solid var(--ui-surface);\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 12%, transparent);\n}\n.employee-main-info {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.employee-details {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.employee-details h3 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.3;\n  color: var(--brand-neutral-800);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-role {\n  margin: 2px 0 0;\n  font-size: 12px;\n  line-height: 1.3;\n}\n.employee-info p.muted {\n  margin: 4px 0 0 0;\n  color: var(--ui-text-muted);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 5%, transparent);\n  margin-inline-start: auto;\n}\n.filter-section {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 10px 12px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  flex-wrap: wrap;\n}\n.filter-section .search-input {\n  flex: 1 1 220px;\n}\n.filter-section .filter-btn,\n.filter-section .date-filter-input,\n.filter-section .shift-filter-select,\n.filter-section .filter-reset-btn {\n  flex-shrink: 0;\n}\n.filter-section .ui-view-toggle,\n.filter-section .fullscreen-btn {\n  margin-inline-start: auto;\n}\n.filter-section .ui-view-toggle ~ .fullscreen-btn {\n  margin-inline-start: 0;\n}\n.mat-tab-group {\n  min-width: 170px;\n  flex-shrink: 0;\n  height: 48px;\n}\n.mat-tab-label-container {\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.mat-tab-label {\n  min-width: unset !important;\n  padding: 0 20px !important;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n  opacity: 1;\n  transition: color 0.2s ease;\n  height: 48px;\n}\n.mat-tab-label:hover {\n  color: var(--brand-neutral-800);\n}\n.mat-tab-label.mat-tab-label-active {\n  color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n.mat-ink-bar {\n  background-color: var(--functional-info-700) !important;\n  height: 3px !important;\n}\n.search-input {\n  flex-grow: 1;\n  min-width: 250px;\n  height: 48px;\n}\n.date-picker {\n  min-width: 180px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding-bottom: 0 !important;\n}\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 12px 12px 12px 12px !important;\n  display: flex;\n  align-items: center;\n}\n.search-input .mat-form-field-infix {\n  padding-inline-start: 0px !important;\n}\n.mat-form-field-flex {\n  align-items: center;\n  padding: 0 12px;\n}\n.mat-form-field-label-wrapper {\n  top: -8px !important;\n}\n.mat-form-field-label {\n  top: 10px !important;\n}\n.mat-form-field-appearance-outline .mat-form-field-label {\n  margin-top: -4px;\n}\n.mat-form-field-prefix,\n.mat-form-field-suffix {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.search-input .mat-form-field-prefix .mat-icon {\n  margin-inline-end: 8px;\n  opacity: 0.6;\n}\n.fullscreen-btn {\n  flex-shrink: 0;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 8px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ui-text-sub);\n  transition: background-color 0.2s ease, border-color 0.2s ease;\n}\n.fullscreen-btn:hover {\n  background-color: var(--ui-bg);\n  border-color: var(--ui-border-secondary);\n}\n.attendance-table-container {\n  margin-top: 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, .04);\n  padding: 8px 12px;\n  overflow-x: auto;\n}\n.attendance-container > .ui-cards-grid,\n.attendance-container > .ui-empty {\n  margin-top: 16px;\n}\n.full-width-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.mat-header-row {\n  height: 52px;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n  text-transform: uppercase;\n}\n.mat-row {\n  background: var(--ui-surface);\n  border-radius: 8px;\n  min-height: 64px;\n  transition: background-color 0.2s ease;\n}\n.mat-row:hover {\n  background-color: var(--brand-neutral-50);\n}\n.mat-cell,\n.mat-header-cell {\n  padding: 14px 16px;\n  vertical-align: middle;\n  border-bottom: none;\n  font-size: 14px;\n}\n.mat-header-cell:first-of-type {\n  padding-inline-start: 24px;\n}\n.mat-cell:first-of-type {\n  border-start-start-radius: 8px;\n  border-end-start-radius: 8px;\n  padding-inline-start: 24px;\n}\n.mat-cell:last-of-type {\n  border-start-end-radius: 8px;\n  border-end-end-radius: 8px;\n  padding-inline-end: 24px;\n}\n.mat-column-actions {\n  text-align: end;\n  padding-inline-end: 24px !important;\n}\n.employee-cell-content {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.employee-initials {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-50),\n      var(--brand-primary-100));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: var(--functional-info-700);\n  font-size: 14px;\n  box-shadow: 0 1px 0 color-mix(in srgb, var(--brand-neutral-950) 3%, transparent);\n  flex-shrink: 0;\n}\n.employee-details-text .employee-name-in-table {\n  font-weight: 600;\n  color: var(--brand-neutral-800);\n}\n.employee-details-text .employee-designation-in-table {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  margin-top: 2px;\n}\n.shift-badge {\n  display: inline-block;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-primary-50),\n      var(--brand-primary-100));\n  border: 1px solid color-mix(in srgb, var(--brand-primary-800) 6%, transparent);\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--functional-info-800);\n  white-space: nowrap;\n}\n.no-records-message {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--ui-text-muted);\n  font-style: italic;\n  font-size: 16px;\n}\n.muted {\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n@media (max-width: 900px) {\n  .filter-section {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-input,\n  .date-picker {\n    width: 100%;\n    min-width: unset;\n  }\n  .mat-tab-group {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .attendance-container {\n    margin-inline-start: 0 !important;\n    padding: 16px;\n  }\n  .attendance-table-container {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .full-width-table {\n    min-width: 600px;\n  }\n  .top-bar {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .top-bar > * {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .mat-dialog-container,\n  .cdk-overlay-pane {\n    max-width: 95vw !important;\n    width: 95vw !important;\n  }\n  h2 {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=attendance-details.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceDetailsComponent, { className: "AttendanceDetailsComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/attendance-details/attendance-details.ts", lineNumber: 42 });
})();
export {
  AttendanceDetailsComponent
};
//# sourceMappingURL=chunk-NWBT7PTM.js.map
