import {
  LeaveRequestDialogComponent
} from "./chunk-5WZPJKPZ.js";
import "./chunk-WMD6EG53.js";
import {
  OrderStatus
} from "./chunk-D43U22HZ.js";
import {
  HrService
} from "./chunk-MVEYIQO5.js";
import {
  MatDialog
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import "./chunk-43IMQJR4.js";
import {
  AuthorizationService,
  FeatureKey
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import {
  MatSnackBar
} from "./chunk-DWKHQJBX.js";
import "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-P46WWH45.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/HR/hr-list/hr-list.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function HrListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewRequestDialog());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 13);
    \u0275\u0275element(3, "path", 26)(4, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "hr.actions.newRequest"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "hr.actions.newRequest"), " ");
  }
}
function HrListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.employeesTotal);
  }
}
function HrListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.originalRequests.length);
  }
}
function HrListComponent_Conditional_35_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r4.labelKey));
  }
}
function HrListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "select", 28);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HrListComponent_Conditional_35_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.status, $event) || (ctx_r1.filters.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function HrListComponent_Conditional_35_Template_select_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275repeaterCreate(3, HrListComponent_Conditional_35_For_4_Template, 3, 4, "option", 29, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.status);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "hr.filters.status"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.statusOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "hr.filters.status"));
  }
}
function HrListComponent_Conditional_36_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", dept_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r6);
  }
}
function HrListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "select", 28);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HrListComponent_Conditional_36_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.department, $event) || (ctx_r1.filters.department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function HrListComponent_Conditional_36_Template_select_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(3, "option", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, HrListComponent_Conditional_36_For_7_Template, 2, 2, "option", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.department);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "hr.filters.department"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "common.all"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.departmentOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "hr.filters.department"));
  }
}
function HrListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "contracts.filters.clearAll"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "contracts.filters.clearAll"), " ");
  }
}
function HrListComponent_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function HrListComponent_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Conditional_48_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadEmployees());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "hr.errors.loadEmployees"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "common.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "common.retry"), " ");
  }
}
function HrListComponent_Conditional_48_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "circle", 36)(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "hr.emptyState.noEmployeesSearch"));
  }
}
function HrListComponent_Conditional_48_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "circle", 38)(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "hr.emptyState.noEmployees"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "hr.emptyState.noEmployeesDesc"));
  }
}
function HrListComponent_Conditional_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275conditionalCreate(1, HrListComponent_Conditional_48_Conditional_2_Conditional_1_Template, 6, 3)(2, HrListComponent_Conditional_48_Conditional_2_Conditional_2_Template, 9, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filters.search || ctx_r1.filters.department ? 1 : 2);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, emp_r10.salary), " ", emp_r10.currency);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const emp_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openNewRequestForEmployee(emp_r10));
    });
    \u0275\u0275text(4, " + ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r1.auth.validateEmployeeHasContract(emp_r10))("title", ctx_r1.auth.validateEmployeeHasContract(emp_r10) ? \u0275\u0275pipeBind1(1, 3, "hr.actions.newRequest") : \u0275\u0275pipeBind1(2, 5, "permissions.requires_active_contract"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "hr.actions.newRequest"));
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const emp_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, emp_r10.salary), " ", emp_r10.currency, " ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 52)(1, "td", 54)(2, "div", 55)(3, "dl", 56)(4, "div")(5, "dt");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "dt");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "dt");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275conditionalCreate(33, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Conditional_33_Template, 2, 4)(34, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Conditional_34_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "dt");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const emp_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "hr.employees.contract"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r10.contractTitle || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "hr.employees.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r10.jobTitle || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "hr.employees.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r10.startDate || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, "hr.employees.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r10.endDate || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 20, "hr.employees.salary"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(emp_r10.salary ? 33 : 34);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 22, "common.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r10.status || "\u2014");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 44);
    \u0275\u0275listener("click", function HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Template_button_click_2_listener() {
      const emp_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(emp_r10.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 45);
    \u0275\u0275element(4, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "td")(6, "div", 47)(7, "div", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_20_Template, 3, 4, "span", 50)(21, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275conditionalCreate(23, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_23_Template, 5, 9, "button", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Conditional_24_Template, 41, 24, "tr", 52);
  }
  if (rf & 2) {
    const emp_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === emp_r10.id)("aria-label", ctx_r1.expandedRowId === emp_r10.id ? "Collapse row" : "Expand row");
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === emp_r10.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(emp_r10.employeeName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r10.employeeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r10.jobTitle || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r10.contractTitle || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r10.startDate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r10.endDate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(emp_r10.salary ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isEmployee() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedRowId === emp_r10.id ? 24 : -1);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 42)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 43);
    \u0275\u0275elementStart(5, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th");
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, HrListComponent_Conditional_48_Conditional_3_Conditional_0_For_27_Template, 25, 13, null, null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "hr.employees.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "hr.employees.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "hr.employees.contract"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "hr.employees.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "hr.employees.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "hr.employees.salary"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 19, "common.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filteredEmployees);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const emp_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, emp_r13.salary), " ", emp_r13.currency, " ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "dl", 56)(2, "div")(3, "dt");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dd");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "dt");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emp_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "hr.employees.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.jobTitle || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "common.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.status || "-");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 61)(1, "button", 62);
    \u0275\u0275listener("click", function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const emp_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openNewRequestForEmployee(emp_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.auth.validateEmployeeHasContract(emp_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "hr.actions.newRequest"), " ");
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 57)(1, "header", 58)(2, "div", 47)(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275listener("click", function HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Template_button_click_10_listener() {
      const emp_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(emp_r13.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 45);
    \u0275\u0275element(12, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "dl", 60)(14, "div")(15, "dt");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "dt");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "dt");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "dt");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd");
    \u0275\u0275conditionalCreate(37, HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_37_Template, 2, 4)(38, HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_38_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(39, HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_39_Template, 14, 8, "div", 55);
    \u0275\u0275conditionalCreate(40, HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Conditional_40_Template, 4, 4, "footer", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(emp_r13.employeeName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.employeeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r13.jobTitle || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === emp_r13.id)("aria-label", ctx_r1.expandedRowId === emp_r13.id ? "Collapse details" : "Expand details");
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === emp_r13.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "hr.employees.contract"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.contractTitle || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, "hr.employees.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.startDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 21, "hr.employees.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r13.endDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 23, "hr.employees.salary"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(emp_r13.salary ? 37 : 38);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedRowId === emp_r13.id ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEmployee() ? 40 : -1);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275repeaterCreate(1, HrListComponent_Conditional_48_Conditional_3_Conditional_1_For_2_Template, 41, 25, "article", 57, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredEmployees);
  }
}
function HrListComponent_Conditional_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrListComponent_Conditional_48_Conditional_3_Conditional_0_Template, 28, 21, "div", 40);
    \u0275\u0275conditionalCreate(1, HrListComponent_Conditional_48_Conditional_3_Conditional_1_Template, 3, 0, "div", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.viewMode === "table" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode === "cards" ? 1 : -1);
  }
}
function HrListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrListComponent_Conditional_48_Conditional_0_Template, 4, 3, "div", 31)(1, HrListComponent_Conditional_48_Conditional_1_Template, 8, 9, "div", 32)(2, HrListComponent_Conditional_48_Conditional_2_Template, 3, 1, "div", 33)(3, HrListComponent_Conditional_48_Conditional_3_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.employeesLoading ? 0 : ctx_r1.employeesError ? 1 : ctx_r1.filteredEmployees.length === 0 ? 2 : 3);
  }
}
function HrListComponent_Conditional_49_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function HrListComponent_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadLeaveRequests());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "hr.errors.loadRequests"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.retry"));
  }
}
function HrListComponent_Conditional_49_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "hr.emptyState.noRequestsSearch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "contracts.filters.clearAll"), " ");
  }
}
function HrListComponent_Conditional_49_Conditional_2_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_2_Conditional_2_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openNewRequestDialog());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "hr.actions.newRequest"), " ");
  }
}
function HrListComponent_Conditional_49_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrListComponent_Conditional_49_Conditional_2_Conditional_2_Conditional_6_Template, 3, 3, "button", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "hr.emptyState.noRequests"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "hr.emptyState.noRequestsDesc"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isEmployee() ? 6 : -1);
  }
}
function HrListComponent_Conditional_49_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275conditionalCreate(1, HrListComponent_Conditional_49_Conditional_2_Conditional_1_Template, 6, 6)(2, HrListComponent_Conditional_49_Conditional_2_Conditional_2_Template, 7, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasActiveFilters() ? 1 : 2);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const req_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(req_r19.employeeName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.employeeName);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_22_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "hr.requests.totalDays"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.totalDays);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 52)(1, "td", 68)(2, "div", 55)(3, "dl", 56)(4, "div")(5, "dt");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "dt");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd")(27, "span", 66);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(30, HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_22_Conditional_30_Template, 6, 4, "div");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const req_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "hr.requests.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.orderTypeName || req_r19.leaveTypeName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "hr.requests.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.startDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 14, "hr.requests.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.endDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 16, "hr.requests.status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(req_r19.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 18, ctx_r1.getStatusKey(req_r19.orderStatus)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(req_r19.totalDays ? 30 : -1);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 44);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Template_button_click_2_listener() {
      const req_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(req_r19.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 45);
    \u0275\u0275element(4, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "td", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_8_Template, 6, 2, "div", 47)(9, HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 64);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 65);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 66);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "button", 67);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Template_button_click_20_listener($event) {
      const req_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openActionsMenu(req_r19, $event));
    });
    \u0275\u0275text(21, " ... ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Conditional_22_Template, 31, 20, "tr", 52);
  }
  if (rf & 2) {
    const req_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === req_r19.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === req_r19.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r19.id || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(req_r19.employeeName ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getRequestTypeClass(req_r19.leaveTypeName ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r19.leaveTypeName || req_r19.leaveTypeId || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r19.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(req_r19.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, ctx_r1.getStatusKey(req_r19.orderStatus)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.expandedRowId === req_r19.id ? 22 : -1);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 42)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 43);
    \u0275\u0275elementStart(5, "th");
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
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, HrListComponent_Conditional_49_Conditional_3_Conditional_0_For_23_Template, 23, 13, null, null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "hr.requests.key"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "hr.requests.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "hr.requests.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "hr.requests.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "hr.requests.status"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.filteredRequests);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Conditional_41_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r21 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "hr.requests.totalDays"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r21.totalDays);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "dl", 56)(2, "div")(3, "dt");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dd");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Conditional_41_Conditional_8_Template, 6, 4, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "hr.requests.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r21.orderTypeName || req_r21.leaveTypeName || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(req_r21.totalDays ? 8 : -1);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 57)(1, "header", 58)(2, "div", 47)(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Template_button_click_10_listener() {
      const req_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(req_r21.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 45);
    \u0275\u0275element(12, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "dl", 60)(14, "div")(15, "dt");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd")(19, "span", 64);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "dt");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "dt");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "dt");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd")(38, "span", 66);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(41, HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Conditional_41_Template, 9, 5, "div", 55);
    \u0275\u0275elementStart(42, "footer", 61)(43, "button", 67);
    \u0275\u0275listener("click", function HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Template_button_click_43_listener($event) {
      const req_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openActionsMenu(req_r21, $event));
    });
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const req_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(req_r21.employeeName ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r21.employeeName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", req_r21.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === req_r21.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === req_r21.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "hr.requests.type"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getRequestTypeClass(req_r21.leaveTypeName ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r21.leaveTypeName || req_r21.leaveTypeId || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "hr.requests.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r21.startDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 22, "hr.requests.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r21.endDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 24, "hr.requests.status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(req_r21.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 26, ctx_r1.getStatusKey(req_r21.orderStatus)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedRowId === req_r21.id ? 41 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 28, "common.view"), " ");
  }
}
function HrListComponent_Conditional_49_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275repeaterCreate(1, HrListComponent_Conditional_49_Conditional_3_Conditional_1_For_2_Template, 46, 30, "article", 57, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredRequests);
  }
}
function HrListComponent_Conditional_49_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrListComponent_Conditional_49_Conditional_3_Conditional_0_Template, 24, 15, "div", 40);
    \u0275\u0275conditionalCreate(1, HrListComponent_Conditional_49_Conditional_3_Conditional_1_Template, 3, 0, "div", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.viewMode === "table" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode === "cards" ? 1 : -1);
  }
}
function HrListComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrListComponent_Conditional_49_Conditional_0_Template, 4, 3, "div", 31)(1, HrListComponent_Conditional_49_Conditional_1_Template, 7, 6, "div", 32)(2, HrListComponent_Conditional_49_Conditional_2_Template, 3, 1, "div", 33)(3, HrListComponent_Conditional_49_Conditional_3_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.requestsLoading ? 0 : ctx_r1.requestsError ? 1 : ctx_r1.filteredRequests.length === 0 ? 2 : 3);
  }
}
var _HrListComponent = class _HrListComponent {
  constructor() {
    this.hrService = inject(HrService);
    this.dialog = inject(MatDialog);
    this.snack = inject(MatSnackBar);
    this.transloco = inject(TranslocoService);
    this.auth = inject(AuthorizationService);
    this.cdr = inject(ChangeDetectorRef);
    this.OrderStatus = OrderStatus;
    this.FeatureKey = FeatureKey;
    this.isEmployee = signal(false, ...ngDevMode ? [{ debugName: "isEmployee" }] : []);
    this.activeTab = "employees";
    this.pendingDeleteId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteId" }] : []);
    this.originalEmployees = [];
    this.filteredEmployees = [];
    this.employeesTotal = 0;
    this.employeesLoading = false;
    this.employeesError = false;
    this.originalRequests = [];
    this.filteredRequests = [];
    this.requestsLoading = false;
    this.requestsError = false;
    this.viewMode = "table";
    this.filters = { search: "", status: "", department: "" };
    this.statusOptions = [
      { value: "", labelKey: "common.all" },
      { value: String(OrderStatus.Pending), labelKey: "hr.status.pending" },
      { value: String(OrderStatus.Approved), labelKey: "hr.status.approved" },
      { value: String(OrderStatus.Rejected), labelKey: "hr.status.rejected" },
      { value: String(OrderStatus.Canceled), labelKey: "hr.status.canceled" }
    ];
    this.expandedRowId = null;
  }
  setView(mode) {
    this.viewMode = mode;
  }
  /**
   * Department dropdown options.
   * The HRListDto has no `department` field — we surface distinct `jobTitle`
   * values as the closest existing-data proxy (per project rule:
   * no new data, no API change).
   */
  get departmentOptions() {
    return [...new Set(this.originalEmployees.map((e) => e.jobTitle).filter((t) => !!t))].sort();
  }
  toggleExpand(id) {
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }
  // ── Lifecycle ───────────────────────────────────────────────────────
  ngOnInit() {
    this.isEmployee.set(this.auth.canAccessFeature(FeatureKey.CreateLeave));
    this.loadEmployees();
    this.loadLeaveRequests();
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.filters = { search: "", status: "", department: "" };
    this.expandedRowId = null;
    this.applyFilters();
  }
  // ── Data loading ────────────────────────────────────────────────────
  loadEmployees() {
    this.employeesLoading = true;
    this.employeesError = false;
    this.hrService.getHRList().subscribe({
      next: ({ total, result }) => {
        this.originalEmployees = result;
        this.employeesTotal = total;
        this.employeesLoading = false;
        this.applyFilters();
        this.cdr.detectChanges();
      },
      error: () => {
        this.employeesLoading = false;
        this.employeesError = true;
        this.cdr.detectChanges();
      }
    });
  }
  loadLeaveRequests() {
    this.requestsLoading = true;
    this.requestsError = false;
    this.hrService.getAllLeaveRequests().subscribe({
      next: (requests) => {
        this.originalRequests = requests;
        this.requestsLoading = false;
        this.applyFilters();
        this.cdr.detectChanges();
      },
      error: () => {
        this.requestsLoading = false;
        this.requestsError = true;
        this.cdr.detectChanges();
      }
    });
  }
  // ── Filtering (single applyFilters for both tabs) ───────────────────
  applyFilters() {
    const q = (this.filters.search || "").trim().toLowerCase();
    const dep = (this.filters.department || "").toLowerCase();
    const s = this.filters.status;
    this.filteredEmployees = this.originalEmployees.filter((e) => {
      const matchesSearch = !q || (e.employeeName ?? "").toLowerCase().includes(q) || String(e.id ?? "").toLowerCase().includes(q) || (e.employeeId ?? "").toLowerCase().includes(q) || (e.jobTitle ?? "").toLowerCase().includes(q) || (e.contractTitle ?? "").toLowerCase().includes(q);
      const matchesDept = !dep || (e.jobTitle ?? "").toLowerCase() === dep;
      return matchesSearch && matchesDept;
    });
    this.filteredRequests = this.originalRequests.filter((r) => {
      const matchesSearch = !q || (r.employeeName ?? "").toLowerCase().includes(q) || (r.leaveTypeName ?? "").toLowerCase().includes(q) || (r.orderTypeName ?? "").toLowerCase().includes(q) || String(r.id ?? "").toLowerCase().includes(q);
      const matchesStatus = s === "" || r.orderStatus === Number(s);
      return matchesSearch && matchesStatus;
    });
  }
  // ── Helpers ─────────────────────────────────────────────────────────
  getStatusClass(status) {
    switch (status) {
      case OrderStatus.Approved:
        return "status-approved";
      case OrderStatus.Rejected:
        return "status-rejected";
      case OrderStatus.Canceled:
        return "status-canceled";
      default:
        return "status-pending";
    }
  }
  getStatusKey(status) {
    switch (status) {
      case OrderStatus.Approved:
        return "hr.status.approved";
      case OrderStatus.Rejected:
        return "hr.status.rejected";
      case OrderStatus.Canceled:
        return "hr.status.canceled";
      default:
        return "hr.status.pending";
    }
  }
  getRequestTypeClass(type) {
    if (!type)
      return "";
    const t = type.toLowerCase();
    if (t.includes("leave"))
      return "type-leave";
    if (t.includes("overtime"))
      return "type-overtime";
    if (t.includes("business"))
      return "type-business-trip";
    return "";
  }
  openActionsMenu(request, event) {
    event.stopPropagation();
    this.openRequestDetails(request);
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
  hasActiveFilters() {
    return !!(this.filters.search || this.filters.status || this.filters.department);
  }
  clearFilters() {
    this.filters = { search: "", status: "", department: "" };
    this.applyFilters();
  }
  // ── Dialog actions (unchanged) ──────────────────────────────────────
  openNewRequestDialog() {
    if (!this.auth.canCreateLeave()) {
      this.snack.open(this.transloco.translate(this.auth.reasonFor(FeatureKey.CreateLeave)), "", { duration: 4e3, panelClass: "snack-warning" });
      return;
    }
    this.openLeaveDialog(void 0);
  }
  openNewRequestForEmployee(emp) {
    if (!this.auth.canCreateLeave(emp)) {
      this.snack.open(this.transloco.translate(this.auth.reasonFor(FeatureKey.CreateLeave, emp)));
      return;
    }
    this.openLeaveDialog(emp.contractId);
  }
  openLeaveDialog(contractId) {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: "480px",
      data: { mode: "create", contractId }
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.refresh) {
        this.loadLeaveRequests();
        this.snack.open(this.transloco.translate("hr.toasts.requestSubmitted"), "", { duration: 3e3, panelClass: "snack-success" });
      }
    });
  }
  openRequestDetails(request) {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: "480px",
      data: { mode: "view", requestId: request.id }
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.refresh)
        this.loadLeaveRequests();
    });
  }
  approveRequest(request) {
    const payload = { orderId: request.id, statusId: OrderStatus.Approved };
    this.hrService.changeOrderStatus(payload).subscribe({ next: () => this.loadLeaveRequests() });
  }
  rejectRequest(request) {
    const payload = { orderId: request.id, statusId: OrderStatus.Rejected };
    this.hrService.changeOrderStatus(payload).subscribe({ next: () => this.loadLeaveRequests() });
  }
  requestDelete(id) {
    this.pendingDeleteId.set(id);
  }
  cancelDelete() {
    this.pendingDeleteId.set(null);
  }
  deleteRequest(request) {
    this.hrService.deleteLeaveRequest(request.id).subscribe({
      next: () => {
        this.pendingDeleteId.set(null);
        this.loadLeaveRequests();
      }
    });
  }
};
_HrListComponent.\u0275fac = function HrListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HrListComponent)();
};
_HrListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrListComponent, selectors: [["app-hr-list"]], decls: 50, vars: 56, consts: [[1, "page-container", "hr-page"], [1, "breadcrumb"], [1, "breadcrumb__item"], [1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header"], [1, "page-title"], [1, "new-request-btn"], [1, "tabs-container"], [1, "tab-item", 3, "click"], [1, "tab-badge"], [1, "filters-container"], [1, "search-input-wrapper"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 14L11.1 11.1", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [1, "dropdown"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "clear-filters-btn"], [1, "new-request-btn", 3, "click"], ["d", "M8 3.33331V12.6666", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.33398 8H12.6673", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "clear-filters-btn", 3, "click"], ["role", "status", "aria-live", "polite", 1, "loading-spinner"], ["role", "alert", 1, "error-state"], [1, "empty-state"], [1, "retry-btn", 3, "click"], ["width", "64", "height", "64", "viewBox", "0 0 64 64", "fill", "none", "aria-hidden", "true"], ["cx", "28", "cy", "28", "r", "16", "stroke", "currentColor", "stroke-width", "2"], ["d", "M40 40l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "32", "cy", "20", "r", "12", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "table-container"], [1, "ui-cards-grid"], [1, "hr-table"], [2, "width", "40px"], ["type", "button", 1, "expand-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M9 6l6 6-6 6", "stroke", "currentColor", "stroke-width", "2", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "employee-cell"], [1, "avatar-badge"], [1, "employee-name"], [1, "salary-value"], [1, "action-menu-btn", 3, "disabled", "title"], [1, "expand-row"], [1, "action-menu-btn", 3, "click", "disabled", "title"], ["colspan", "8"], [1, "expand-panel"], [1, "expand-grid"], [1, "ui-card"], [1, "ui-card__head"], [1, "employee-role"], [1, "ui-card__meta"], [1, "ui-card__foot"], [1, "action-menu-btn", 3, "click", "disabled"], [2, "color", "var(--ui-text-muted)", "font-size", "12px"], [1, "request-type-badge", 3, "ngClass"], [2, "color", "var(--ui-text-sub)"], [1, "status-badge", 3, "ngClass"], [1, "action-menu-btn", 3, "click"], ["colspan", "7"]], template: function HrListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "h1", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, HrListComponent_Conditional_15_Template, 7, 6, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Template_button_click_17_listener() {
      return ctx.switchTab("employees");
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275conditionalCreate(21, HrListComponent_Conditional_21_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 9);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Template_button_click_22_listener() {
      return ctx.switchTab("requests");
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275conditionalCreate(26, HrListComponent_Conditional_26_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 13);
    \u0275\u0275element(30, "path", 14)(31, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "input", 16);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HrListComponent_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function HrListComponent_Template_input_ngModelChange_32_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, HrListComponent_Conditional_35_Template, 8, 7, "div", 17);
    \u0275\u0275conditionalCreate(36, HrListComponent_Conditional_36_Template, 11, 11, "div", 17);
    \u0275\u0275elementStart(37, "div", 18);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementStart(39, "button", 19);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Template_button_click_39_listener() {
      return ctx.setView("table");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 20);
    \u0275\u0275element(42, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "button", 22);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275listener("click", function HrListComponent_Template_button_click_43_listener() {
      return ctx.setView("cards");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 20);
    \u0275\u0275element(46, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(47, HrListComponent_Conditional_47_Template, 4, 6, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, HrListComponent_Conditional_48_Template, 4, 1);
    \u0275\u0275conditionalCreate(49, HrListComponent_Conditional_49_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 30, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 34, "hr.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 36, "hr.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isEmployee() ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.activeTab === "employees");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 38, "hr.tabs.employees"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 40, "hr.tabs.employees"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.employeesTotal > 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.activeTab === "requests");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 42, "hr.tabs.requests"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 44, "hr.tabs.requests"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.originalRequests.length > 0 ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 46, "common.search"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 48, "hr.filters.search"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.activeTab === "requests" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab === "employees" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 50, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(40, 52, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 54, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.hasActiveFilters() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab === "employees" ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab === "requests" ? 49 : -1);
  }
}, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslocoModule, DecimalPipe, TranslocoPipe], styles: ['\n\n.hr-page[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.new-request-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.new-request-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-block-end: 0;\n  border-block-end: 1px solid var(--ui-border);\n  padding-block-end: 0;\n}\n.tab-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  border-block-end: 2px solid transparent;\n  margin-block-end: -1px;\n  white-space: nowrap;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-sub);\n}\n.tab-item.active[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  border-block-end-color: var(--ui-text-main);\n  font-weight: 600;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: color-mix(in srgb, var(--brand-primary-100) 60%, transparent);\n  color: var(--brand-primary-700);\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 36px;\n  padding-inline: 12px 28px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  min-width: 130px;\n}\n.dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-primary-400);\n}\n.dropdown[_ngcontent-%COMP%]::after {\n  content: "\\25be";\n  position: absolute;\n  inset-inline-end: 10px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: none;\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  color: var(--brand-primary-500);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: none;\n  font-size: 13px;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.hr-page[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n}\n.hr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.hr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.hr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.hr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n  text-transform: none;\n}\n.hr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.hr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.hr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.hr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.hr-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-1[_ngcontent-%COMP%] {\n  background: var(--functional-info-500);\n}\n.avatar-badge.color-2[_ngcontent-%COMP%] {\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-3[_ngcontent-%COMP%] {\n  background: var(--functional-warning-500);\n}\n.avatar-badge.color-4[_ngcontent-%COMP%] {\n  background: var(--functional-danger-500);\n}\n.avatar-badge.color-5[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.avatar-badge.color-6[_ngcontent-%COMP%] {\n  background: var(--brand-accent-400);\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.salary-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ui-text-sub);\n}\n.request-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.request-type-badge.type-leave[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--functional-info-50) 60%, transparent);\n  color: var(--functional-info-600);\n  border-color: var(--functional-info-100);\n}\n.request-type-badge.type-overtime[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--functional-warning-50) 60%, transparent);\n  color: var(--functional-warning-700);\n  border-color: var(--functional-warning-100);\n}\n.request-type-badge.type-business-trip[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--brand-accent-50) 60%, transparent);\n  color: var(--brand-accent-600);\n  border-color: var(--brand-accent-100);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--functional-warning-50) 70%, transparent);\n  color: var(--functional-warning-700);\n}\n.status-badge.status-approved[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--functional-success-50) 70%, transparent);\n  color: var(--functional-success-700);\n}\n.status-badge.status-rejected[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--functional-danger-50) 70%, transparent);\n  color: var(--functional-danger-600);\n}\n.status-badge.status-canceled[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.action-menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background 0.15s;\n  line-height: 1;\n}\n.action-menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 64px 24px;\n  text-align: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  color: var(--ui-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 360px;\n}\n@media (max-width: 768px) {\n  .filters-container[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .hr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+5), \n   .hr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+5) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=hr-list.css.map */'] });
var HrListComponent = _HrListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrListComponent, [{
    type: Component,
    args: [{ selector: "app-hr-list", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule], template: `<div class="page-container hr-page">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
      <span class="breadcrumb__item">{{ 'common.appName' | transloco }}</span>
      <span class="breadcrumb__sep">\u203A</span>
      <span class="breadcrumb__item breadcrumb__item--active">{{ 'hr.title' | transloco }}</span>
    </nav>

    <!-- Page header -->
    <div class="page-header">
      <h1 class="page-title">{{ 'hr.title' | transloco }}</h1>
      @if (isEmployee()) {
        <button class="new-request-btn" (click)="openNewRequestDialog()"
                [attr.aria-label]="'hr.actions.newRequest' | transloco">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3.33331V12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33398 8H12.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ 'hr.actions.newRequest' | transloco }}
        </button>
      }
    </div>

    <!-- Tabs -->
    <div class="tabs-container">
      <button class="tab-item" [class.active]="activeTab === 'employees'"
              (click)="switchTab('employees')"
              [attr.aria-label]="'hr.tabs.employees' | transloco">
        {{ 'hr.tabs.employees' | transloco }}
        @if (employeesTotal > 0) {
          <span class="tab-badge">{{ employeesTotal }}</span>
        }
      </button>
      <button class="tab-item" [class.active]="activeTab === 'requests'"
              (click)="switchTab('requests')"
              [attr.aria-label]="'hr.tabs.requests' | transloco">
        {{ 'hr.tabs.requests' | transloco }}
        @if (originalRequests.length > 0) {
          <span class="tab-badge">{{ originalRequests.length }}</span>
        }
      </button>
    </div>

    <!-- Filters + view toggle -->
    <div class="filters-container">
      <div class="search-input-wrapper">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input type="text" [(ngModel)]="filters.search"
               (ngModelChange)="applyFilters()"
               [placeholder]="'common.search' | transloco"
               [attr.aria-label]="'hr.filters.search' | transloco">
      </div>

      @if (activeTab === 'requests') {
        <div class="dropdown">
          <select [(ngModel)]="filters.status"
                  (ngModelChange)="applyFilters()"
                  [attr.aria-label]="'hr.filters.status' | transloco">
            @for (opt of statusOptions; track opt.value) {
              <option [ngValue]="opt.value">{{ opt.labelKey | transloco }}</option>
            }
          </select>
          <label>{{ 'hr.filters.status' | transloco }}</label>
        </div>
      }

      @if (activeTab === 'employees') {
        <div class="dropdown">
          <select [(ngModel)]="filters.department"
                  (ngModelChange)="applyFilters()"
                  [attr.aria-label]="'hr.filters.department' | transloco">
            <option [ngValue]="''">{{ 'common.all' | transloco }}</option>
            @for (dept of departmentOptions; track dept) {
              <option [ngValue]="dept">{{ dept }}</option>
            }
          </select>
          <label>{{ 'hr.filters.department' | transloco }}</label>
        </div>
      }

      <!-- View toggle (table | cards) \u2014 same pattern as Teams/Meetings -->
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

      @if (hasActiveFilters()) {
        <button class="clear-filters-btn" (click)="clearFilters()"
                [attr.aria-label]="'contracts.filters.clearAll' | transloco">
          {{ 'contracts.filters.clearAll' | transloco }}
        </button>
      }
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EMPLOYEES TAB \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (activeTab === 'employees') {

      @if (employeesLoading) {
        <div class="loading-spinner" role="status" aria-live="polite">
          <p>{{ 'common.loading' | transloco }}</p>
        </div>
      } @else if (employeesError) {
        <div class="error-state" role="alert">
          <p>{{ 'hr.errors.loadEmployees' | transloco }}</p>
          <button class="retry-btn" (click)="loadEmployees()"
                  [attr.aria-label]="'common.retry' | transloco">
            {{ 'common.retry' | transloco }}
          </button>
        </div>
      } @else if (filteredEmployees.length === 0) {
        <div class="empty-state">
          @if (filters.search || filters.department) {
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="28" cy="28" r="16" stroke="currentColor" stroke-width="2"/>
              <path d="M40 40l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p>{{ 'hr.emptyState.noEmployeesSearch' | transloco }}</p>
          } @else {
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="32" cy="20" r="12" stroke="currentColor" stroke-width="2"/>
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h2>{{ 'hr.emptyState.noEmployees' | transloco }}</h2>
            <p>{{ 'hr.emptyState.noEmployeesDesc' | transloco }}</p>
          }
        </div>
      } @else {

        @if (viewMode === 'table') {
          <div class="table-container">
            <table class="hr-table">
              <thead>
                <tr>
                  <th style="width:40px"></th>
                  <th>{{ 'hr.employees.name' | transloco }}</th>
                  <th>{{ 'hr.employees.jobTitle' | transloco }}</th>
                  <th>{{ 'hr.employees.contract' | transloco }}</th>
                  <th>{{ 'hr.employees.startDate' | transloco }}</th>
                  <th>{{ 'hr.employees.endDate' | transloco }}</th>
                  <th>{{ 'hr.employees.salary' | transloco }}</th>
                  <th [attr.aria-label]="'common.actions' | transloco"></th>
                </tr>
              </thead>
              <tbody>
                @for (emp of filteredEmployees; track emp.id) {
                  <tr>
                    <td>
                      <button type="button" class="expand-btn"
                              (click)="toggleExpand(emp.id)"
                              [attr.aria-expanded]="expandedRowId === emp.id"
                              [attr.aria-label]="expandedRowId === emp.id ? 'Collapse row' : 'Expand row'">
                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                             [style.transform]="expandedRowId === emp.id ? 'rotate(90deg)' : 'rotate(0)'">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <div class="employee-cell">
                        <div class="avatar-badge">{{ getInitials(emp.employeeName) }}</div>
                        <span class="employee-name">{{ emp.employeeName }}</span>
                      </div>
                    </td>
                    <td>{{ emp.jobTitle || '\u2014' }}</td>
                    <td>{{ emp.contractTitle || '\u2014' }}</td>
                    <td>{{ emp.startDate || '\u2014' }}</td>
                    <td>{{ emp.endDate || '\u2014' }}</td>
                    <td>
                      @if (emp.salary) {
                        <span class="salary-value">{{ emp.salary | number }} {{ emp.currency }}</span>
                      } @else { \u2014 }
                    </td>
                    <td>
                      @if (isEmployee()) {
                        <button class="action-menu-btn"
                                [disabled]="!auth.validateEmployeeHasContract(emp)"
                                (click)="openNewRequestForEmployee(emp)"
                                [attr.aria-label]="'hr.actions.newRequest' | transloco"
                                [title]="auth.validateEmployeeHasContract(emp)
                                  ? ('hr.actions.newRequest' | transloco)
                                  : ('permissions.requires_active_contract' | transloco)">
                          +
                        </button>
                      }
                    </td>
                  </tr>
                  @if (expandedRowId === emp.id) {
                    <tr class="expand-row">
                      <td colspan="8">
                        <div class="expand-panel">
                          <dl class="expand-grid">
                            <div><dt>{{ 'hr.employees.contract' | transloco }}</dt><dd>{{ emp.contractTitle || '\u2014' }}</dd></div>
                            <div><dt>{{ 'hr.employees.jobTitle' | transloco }}</dt><dd>{{ emp.jobTitle || '\u2014' }}</dd></div>
                            <div><dt>{{ 'hr.employees.startDate' | transloco }}</dt><dd>{{ emp.startDate || '\u2014' }}</dd></div>
                            <div><dt>{{ 'hr.employees.endDate' | transloco }}</dt><dd>{{ emp.endDate || '\u2014' }}</dd></div>
                            <div>
                              <dt>{{ 'hr.employees.salary' | transloco }}</dt>
                              <dd>
                                @if (emp.salary) {
                                  {{ emp.salary | number }} {{ emp.currency }}
                                } @else { \u2014 }
                              </dd>
                            </div>
                            <div><dt>{{ 'common.status' | transloco }}</dt><dd>{{ emp.status || '\u2014' }}</dd></div>
                          </dl>
                        </div>
                      </td>
                    </tr>
                  }
                }
              </tbody>
            </table>
          </div>
        }

        @if (viewMode === 'cards') {
          <div class="ui-cards-grid">
            @for (emp of filteredEmployees; track emp.id) {
              <article class="ui-card">
                <header class="ui-card__head">
                  <div class="employee-cell">
                    <div class="avatar-badge">{{ getInitials(emp.employeeName) }}</div>
                    <div>
                      <div class="employee-name">{{ emp.employeeName }}</div>
                      <div class="employee-role">{{ emp.jobTitle || '\u2014' }}</div>
                    </div>
                  </div>
                  <button type="button" class="expand-btn"
                          (click)="toggleExpand(emp.id)"
                          [attr.aria-expanded]="expandedRowId === emp.id"
                          [attr.aria-label]="expandedRowId === emp.id ? 'Collapse details' : 'Expand details'">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                         [style.transform]="expandedRowId === emp.id ? 'rotate(90deg)' : 'rotate(0)'">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </header>
                <dl class="ui-card__meta">
                  <div><dt>{{ 'hr.employees.contract' | transloco }}</dt><dd>{{ emp.contractTitle || '-' }}</dd></div>
                  <div><dt>{{ 'hr.employees.startDate' | transloco }}</dt><dd>{{ emp.startDate || '-' }}</dd></div>
                  <div><dt>{{ 'hr.employees.endDate' | transloco }}</dt><dd>{{ emp.endDate || '-' }}</dd></div>
                  <div>
                    <dt>{{ 'hr.employees.salary' | transloco }}</dt>
                    <dd>
                      @if (emp.salary) {
                        {{ emp.salary | number }} {{ emp.currency }}
                      } @else { - }
                    </dd>
                  </div>
                </dl>
                @if (expandedRowId === emp.id) {
                  <div class="expand-panel">
                    <dl class="expand-grid">
                      <div><dt>{{ 'hr.employees.jobTitle' | transloco }}</dt><dd>{{ emp.jobTitle || '-' }}</dd></div>
                      <div><dt>{{ 'common.status' | transloco }}</dt><dd>{{ emp.status || '-' }}</dd></div>
                    </dl>
                  </div>
                }
                @if (isEmployee()) {
                  <footer class="ui-card__foot">
                    <button class="action-menu-btn"
                            [disabled]="!auth.validateEmployeeHasContract(emp)"
                            (click)="openNewRequestForEmployee(emp)">
                      {{ 'hr.actions.newRequest' | transloco }}
                    </button>
                  </footer>
                }
              </article>
            }
          </div>
        }

      }
    }

    @if (activeTab === 'requests') {

      @if (requestsLoading) {
        <div class="loading-spinner" role="status" aria-live="polite">
          <p>{{ 'common.loading' | transloco }}</p>
        </div>
      } @else if (requestsError) {
        <div class="error-state" role="alert">
          <p>{{ 'hr.errors.loadRequests' | transloco }}</p>
          <button class="retry-btn" (click)="loadLeaveRequests()">{{ 'common.retry' | transloco }}</button>
        </div>
      } @else if (filteredRequests.length === 0) {
        <div class="empty-state">
          @if (hasActiveFilters()) {
            <p>{{ 'hr.emptyState.noRequestsSearch' | transloco }}</p>
            <button class="clear-filters-btn" (click)="clearFilters()">
              {{ 'contracts.filters.clearAll' | transloco }}
            </button>
          } @else {
            <h2>{{ 'hr.emptyState.noRequests' | transloco }}</h2>
            <p>{{ 'hr.emptyState.noRequestsDesc' | transloco }}</p>
            @if (isEmployee()) {
              <button class="new-request-btn" (click)="openNewRequestDialog()">
                {{ 'hr.actions.newRequest' | transloco }}
              </button>
            }
          }
        </div>
      } @else {

        @if (viewMode === 'table') {
          <div class="table-container">
            <table class="hr-table">
              <thead>
                <tr>
                  <th style="width:40px"></th>
                  <th>{{ 'hr.requests.key' | transloco }}</th>
                  <th>{{ 'hr.requests.employee' | transloco }}</th>
                  <th>{{ 'hr.requests.type' | transloco }}</th>
                  <th>{{ 'hr.requests.startDate' | transloco }}</th>
                  <th>{{ 'hr.requests.status' | transloco }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (req of filteredRequests; track req.id) {
                  <tr>
                    <td>
                      <button type="button" class="expand-btn"
                              (click)="toggleExpand(req.id)"
                              [attr.aria-expanded]="expandedRowId === req.id">
                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                             [style.transform]="expandedRowId === req.id ? 'rotate(90deg)' : 'rotate(0)'">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </td>
                    <td style="color:var(--ui-text-muted);font-size:12px">{{ req.id || '-' }}</td>
                    <td>
                      @if (req.employeeName) {
                        <div class="employee-cell">
                          <div class="avatar-badge">{{ getInitials(req.employeeName) }}</div>
                          <div>
                            <div class="employee-name">{{ req.employeeName }}</div>
                          </div>
                        </div>
                      } @else { - }
                    </td>
                    <td>
                      <span class="request-type-badge" [ngClass]="getRequestTypeClass(req.leaveTypeName ?? '')">
                        {{ req.leaveTypeName || req.leaveTypeId || '-' }}
                      </span>
                    </td>
                    <td style="color:var(--ui-text-sub)">{{ req.startDate }}</td>
                    <td>
                      <span class="status-badge" [ngClass]="getStatusClass(req.orderStatus)">
                        {{ getStatusKey(req.orderStatus) | transloco }}
                      </span>
                    </td>
                    <td>
                      <button class="action-menu-btn" (click)="openActionsMenu(req, $event)">
                        ...
                      </button>
                    </td>
                  </tr>
                  @if (expandedRowId === req.id) {
                    <tr class="expand-row">
                      <td colspan="7">
                        <div class="expand-panel">
                          <dl class="expand-grid">
                            <div><dt>{{ 'hr.requests.type' | transloco }}</dt><dd>{{ req.orderTypeName || req.leaveTypeName || '-' }}</dd></div>
                            <div><dt>{{ 'hr.requests.startDate' | transloco }}</dt><dd>{{ req.startDate || '-' }}</dd></div>
                            <div><dt>{{ 'hr.requests.endDate' | transloco }}</dt><dd>{{ req.endDate || '-' }}</dd></div>
                            <div><dt>{{ 'hr.requests.status' | transloco }}</dt>
                              <dd>
                                <span class="status-badge" [ngClass]="getStatusClass(req.orderStatus)">
                                  {{ getStatusKey(req.orderStatus) | transloco }}
                                </span>
                              </dd>
                            </div>
                            @if (req.totalDays) {
                              <div><dt>{{ 'hr.requests.totalDays' | transloco }}</dt><dd>{{ req.totalDays }}</dd></div>
                            }
                          </dl>
                        </div>
                      </td>
                    </tr>
                  }
                }
              </tbody>
            </table>
          </div>
        }

        @if (viewMode === 'cards') {
          <div class="ui-cards-grid">
            @for (req of filteredRequests; track req.id) {
              <article class="ui-card">
                <header class="ui-card__head">
                  <div class="employee-cell">
                    <div class="avatar-badge">{{ getInitials(req.employeeName ?? '') }}</div>
                    <div>
                      <div class="employee-name">{{ req.employeeName || '-' }}</div>
                      <div class="employee-role">#{{ req.id }}</div>
                    </div>
                  </div>
                  <button type="button" class="expand-btn"
                          (click)="toggleExpand(req.id)"
                          [attr.aria-expanded]="expandedRowId === req.id">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                         [style.transform]="expandedRowId === req.id ? 'rotate(90deg)' : 'rotate(0)'">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </header>
                <dl class="ui-card__meta">
                  <div>
                    <dt>{{ 'hr.requests.type' | transloco }}</dt>
                    <dd>
                      <span class="request-type-badge" [ngClass]="getRequestTypeClass(req.leaveTypeName ?? '')">
                        {{ req.leaveTypeName || req.leaveTypeId || '-' }}
                      </span>
                    </dd>
                  </div>
                  <div><dt>{{ 'hr.requests.startDate' | transloco }}</dt><dd>{{ req.startDate || '-' }}</dd></div>
                  <div><dt>{{ 'hr.requests.endDate' | transloco }}</dt><dd>{{ req.endDate || '-' }}</dd></div>
                  <div>
                    <dt>{{ 'hr.requests.status' | transloco }}</dt>
                    <dd>
                      <span class="status-badge" [ngClass]="getStatusClass(req.orderStatus)">
                        {{ getStatusKey(req.orderStatus) | transloco }}
                      </span>
                    </dd>
                  </div>
                </dl>
                @if (expandedRowId === req.id) {
                  <div class="expand-panel">
                    <dl class="expand-grid">
                      <div><dt>{{ 'hr.requests.type' | transloco }}</dt><dd>{{ req.orderTypeName || req.leaveTypeName || '-' }}</dd></div>
                      @if (req.totalDays) {
                        <div><dt>{{ 'hr.requests.totalDays' | transloco }}</dt><dd>{{ req.totalDays }}</dd></div>
                      }
                    </dl>
                  </div>
                }
                <footer class="ui-card__foot">
                  <button class="action-menu-btn" (click)="openActionsMenu(req, $event)">
                    {{ 'common.view' | transloco }}
                  </button>
                </footer>
              </article>
            }
          </div>
        }
      }
    }

</div><!-- /.page-container hr-page -->
`, styles: ['/* src/components/DashboardLayout/HR/hr-list/hr-list.css */\n.hr-page {\n  gap: 0;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.new-request-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.new-request-btn:hover {\n  opacity: 0.88;\n}\n.tabs-container {\n  display: flex;\n  gap: 0;\n  margin-block-end: 0;\n  border-block-end: 1px solid var(--ui-border);\n  padding-block-end: 0;\n}\n.tab-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  border-block-end: 2px solid transparent;\n  margin-block-end: -1px;\n  white-space: nowrap;\n}\n.tab-item:hover {\n  color: var(--ui-text-sub);\n}\n.tab-item.active {\n  color: var(--ui-text-main);\n  border-block-end-color: var(--ui-text-main);\n  font-weight: 600;\n}\n.tab-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: color-mix(in srgb, var(--brand-primary-100) 60%, transparent);\n  color: var(--brand-primary-700);\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper svg {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper input::placeholder {\n  color: var(--ui-text-muted);\n}\n.dropdown {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.dropdown select {\n  height: 36px;\n  padding-inline: 12px 28px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  min-width: 130px;\n}\n.dropdown select:focus {\n  outline: none;\n  border-color: var(--brand-primary-400);\n}\n.dropdown::after {\n  content: "\\25be";\n  position: absolute;\n  inset-inline-end: 10px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.dropdown label {\n  display: none;\n}\n.clear-filters-btn {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn:hover {\n  color: var(--brand-primary-500);\n}\n.loading-spinner {\n  text-align: center;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n  color: var(--functional-danger-500);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.retry-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: none;\n  font-size: 13px;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.retry-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.hr-page .table-container {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n}\n.hr-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.hr-table th,\n.hr-table td {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.hr-table th {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n  text-transform: none;\n}\n.hr-table tbody tr {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.hr-table tbody tr:last-child {\n  border-block-end: none;\n}\n.hr-table tbody tr:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.hr-table td {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.hr-table input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-1 {\n  background: var(--functional-info-500);\n}\n.avatar-badge.color-2 {\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-3 {\n  background: var(--functional-warning-500);\n}\n.avatar-badge.color-4 {\n  background: var(--functional-danger-500);\n}\n.avatar-badge.color-5 {\n  background: var(--functional-success-500);\n}\n.avatar-badge.color-6 {\n  background: var(--brand-accent-400);\n}\n.employee-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.salary-value {\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.reason-cell {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--ui-text-sub);\n}\n.request-type-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.request-type-badge.type-leave {\n  background: color-mix(in srgb, var(--functional-info-50) 60%, transparent);\n  color: var(--functional-info-600);\n  border-color: var(--functional-info-100);\n}\n.request-type-badge.type-overtime {\n  background: color-mix(in srgb, var(--functional-warning-50) 60%, transparent);\n  color: var(--functional-warning-700);\n  border-color: var(--functional-warning-100);\n}\n.request-type-badge.type-business-trip {\n  background: color-mix(in srgb, var(--brand-accent-50) 60%, transparent);\n  color: var(--brand-accent-600);\n  border-color: var(--brand-accent-100);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge.status-pending {\n  background: color-mix(in srgb, var(--functional-warning-50) 70%, transparent);\n  color: var(--functional-warning-700);\n}\n.status-badge.status-approved {\n  background: color-mix(in srgb, var(--functional-success-50) 70%, transparent);\n  color: var(--functional-success-700);\n}\n.status-badge.status-rejected {\n  background: color-mix(in srgb, var(--functional-danger-50) 70%, transparent);\n  color: var(--functional-danger-600);\n}\n.status-badge.status-canceled {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.action-menu-btn {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background 0.15s;\n  line-height: 1;\n}\n.action-menu-btn:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 64px 24px;\n  text-align: center;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  color: var(--ui-text-muted);\n}\n.empty-state h2 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 4px;\n}\n.empty-state p {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 360px;\n}\n@media (max-width: 768px) {\n  .filters-container {\n    padding: 10px 12px;\n  }\n  .hr-table th:nth-child(n+5),\n  .hr-table td:nth-child(n+5) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=hr-list.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrListComponent, { className: "HrListComponent", filePath: "src/components/dashboardlayout/hr/hr-list/hr-list.ts", lineNumber: 28 });
})();
export {
  HrListComponent
};
//# sourceMappingURL=chunk-LWPEHA5W.js.map
