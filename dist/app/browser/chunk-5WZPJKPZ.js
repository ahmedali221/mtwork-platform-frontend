import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  OrderStatus
} from "./chunk-D43U22HZ.js";
import {
  HrService
} from "./chunk-MVEYIQO5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import {
  MatSnackBar
} from "./chunk-DWKHQJBX.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
  CommonModule,
  DatePipe,
  NgClass
} from "./chunk-Z3ORTAM2.js";
import {
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
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/HR/leave-request-dialog/leave-request-dialog.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaveRequestDialogComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.loading"));
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", type_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r3.name);
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 12)(1, "option", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, LeaveRequestDialogComponent_Conditional_9_Conditional_8_For_5_Template, 2, 2, "option", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx_r1.fieldInvalid("leaveTypeId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "hr.form.requestType"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.leaveTypes);
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "hr.form.requestType"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "hr.form.startDate"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "hr.form.endDate"), " ", \u0275\u0275pipeBind1(3, 4, "common.isRequired"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "hr.form.endBeforeStart"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.submitError));
  }
}
function LeaveRequestDialogComponent_Conditional_9_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function LeaveRequestDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function LeaveRequestDialogComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, LeaveRequestDialogComponent_Conditional_9_Conditional_7_Template, 3, 3, "p", 11)(8, LeaveRequestDialogComponent_Conditional_9_Conditional_8_Template, 6, 6, "select", 12);
    \u0275\u0275conditionalCreate(9, LeaveRequestDialogComponent_Conditional_9_Conditional_9_Template, 4, 6, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 8)(12, "label", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 16);
    \u0275\u0275conditionalCreate(18, LeaveRequestDialogComponent_Conditional_9_Conditional_18_Template, 4, 6, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8)(20, "label", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementStart(23, "span", 10);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275conditionalCreate(26, LeaveRequestDialogComponent_Conditional_9_Conditional_26_Template, 4, 6, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, LeaveRequestDialogComponent_Conditional_9_Conditional_27_Template, 3, 3, "p", 19);
    \u0275\u0275elementStart(28, "div", 8)(29, "label", 20);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "textarea", 21);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275text(35, "        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, LeaveRequestDialogComponent_Conditional_9_Conditional_36_Template, 3, 3, "p", 19);
    \u0275\u0275elementStart(37, "div", 22)(38, "button", 23);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275listener("click", function LeaveRequestDialogComponent_Conditional_9_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 24);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275conditionalCreate(44, LeaveRequestDialogComponent_Conditional_9_Conditional_44_Template, 1, 0, "span", 25);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.fieldInvalid("leaveTypeId"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 29, "hr.form.requestType"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.leaveTypesLoading ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fieldInvalid("leaveTypeId") ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.fieldInvalid("startDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 31, "hr.form.startDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx_r1.fieldInvalid("startDate"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("startDate") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.fieldInvalid("endDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 33, "hr.form.endDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-required", true)("aria-invalid", ctx_r1.fieldInvalid("endDate"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("endDate") ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.form.errors == null ? null : ctx_r1.form.errors["endBeforeStart"]) && ctx_r1.form.touched ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 35, "hr.form.reason"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 37, "hr.form.reasonPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 39, "hr.form.reason"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.submitError ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(39, 41, "hr.actions.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 43, "hr.actions.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(43, 45, "hr.actions.submit"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSubmitting ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitting ? \u0275\u0275pipeBind1(46, 47, "common.loading") : \u0275\u0275pipeBind1(47, 49, "hr.actions.submit"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "hr.errors.loadRequests"));
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, d_r5.createDate, "mediumDate"));
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "hr.requests.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.employee.employeeName);
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "hr.requests.reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.requestComments);
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reject());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275conditionalCreate(6, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Conditional_6_Template, 1, 0, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isActioning);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 7, "hr.actions.reject"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "hr.actions.reject"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isActioning);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 11, "hr.actions.approve"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isActioning ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 13, "hr.actions.approve"), " ");
  }
}
function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_5_Template, 3, 4, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275conditionalCreate(7, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_7_Template, 6, 4, "div", 33);
    \u0275\u0275elementStart(8, "div", 33)(9, "span", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "span", 34);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 35);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 33)(22, "span", 34);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 35);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_28_Template, 6, 4, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 22)(30, "button", 37);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275listener("click", function LeaveRequestDialogComponent_Conditional_10_Conditional_2_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Conditional_34_Template, 9, 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(d_r5.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, ctx_r1.getStatusKey(d_r5.orderStatus)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r5.createDate ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((d_r5.employee == null ? null : d_r5.employee.employeeName) ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "hr.requests.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((d_r5.leaveType == null ? null : d_r5.leaveType.nameEn) || (d_r5.orderType == null ? null : d_r5.orderType.nameEn) || d_r5.leaveTypeId || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "hr.requests.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 20, d_r5.startDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "hr.requests.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 25, d_r5.endDate, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r5.requestComments ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(31, 28, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 30, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isPending ? 34 : -1);
  }
}
function LeaveRequestDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LeaveRequestDialogComponent_Conditional_10_Conditional_0_Template, 4, 3, "div", 28)(1, LeaveRequestDialogComponent_Conditional_10_Conditional_1_Template, 4, 3, "div", 28)(2, LeaveRequestDialogComponent_Conditional_10_Conditional_2_Template, 35, 32, "div", 28);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.detailLoading() ? 0 : ctx_r1.detailError() ? 1 : (tmp_1_0 = ctx_r1.detail()) ? 2 : -1, tmp_1_0);
  }
}
var _LeaveRequestDialogComponent = class _LeaveRequestDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.hrService = inject(HrService);
    this.lookupService = inject(LookupService);
    this.authService = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.snack = inject(MatSnackBar);
    this.transloco = inject(TranslocoService);
    this.OrderStatus = OrderStatus;
    this.leaveTypes = [];
    this.leaveTypesLoading = true;
    this.detail = signal(null, ...ngDevMode ? [{ debugName: "detail" }] : []);
    this.detailLoading = signal(false, ...ngDevMode ? [{ debugName: "detailLoading" }] : []);
    this.detailError = signal(false, ...ngDevMode ? [{ debugName: "detailError" }] : []);
    this.form = this.fb.nonNullable.group({
      leaveTypeId: [0, [Validators.required, Validators.min(1)]],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      requestTitle: [""],
      reason: [""]
    }, { validators: endAfterStart });
    this.isSubmitting = false;
    this.isActioning = false;
    this.submitError = "";
  }
  get isCreate() {
    return this.data.mode === "create";
  }
  get isPending() {
    return this.detail()?.orderStatus === OrderStatus.Pending;
  }
  ngOnInit() {
    if (this.isCreate) {
      this.lookupService.getLeaveTypes().subscribe({
        next: (types) => {
          this.leaveTypes = types;
          this.leaveTypesLoading = false;
        },
        error: () => {
          this.leaveTypesLoading = false;
        }
      });
    } else if (this.data.requestId) {
      this.detailLoading.set(true);
      this.hrService.getLeaveRequestDetail(this.data.requestId).subscribe({
        next: (d) => {
          this.detail.set(d);
          this.detailLoading.set(false);
        },
        error: () => {
          this.detailError.set(true);
          this.detailLoading.set(false);
        }
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
  // ── Create ────────────────────────────────────────────────
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { leaveTypeId, startDate, endDate, requestTitle, reason } = this.form.getRawValue();
    this.isSubmitting = true;
    this.submitError = "";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) + 1;
    const payload = {
      leaveTypeId: Number(leaveTypeId),
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      totalDays,
      requestTitle: requestTitle || void 0,
      requestComments: reason || void 0,
      requestingEmployeeId: this.authService.getCurrentUser().userId ?? void 0,
      contractId: this.data.contractId
    };
    this.hrService.createLeaveRequest(payload).subscribe({
      next: () => this.dialogRef.close({ refresh: true }),
      error: () => {
        this.isSubmitting = false;
        this.submitError = "hr.errors.submitRequest";
        this.snack.open(this.transloco.translate("hr.errors.submitRequest"), "", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Approve / Reject ──────────────────────────────────────
  approve() {
    this.changeStatus(OrderStatus.Approved);
  }
  reject() {
    this.changeStatus(OrderStatus.Rejected);
  }
  changeStatus(orderStatus) {
    const d = this.detail();
    if (!d)
      return;
    this.isActioning = true;
    const payload = { orderId: d.id, statusId: orderStatus };
    this.hrService.changeOrderStatus(payload).subscribe({
      next: () => this.dialogRef.close({ refresh: true }),
      error: () => {
        this.isActioning = false;
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────
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
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
};
_LeaveRequestDialogComponent.\u0275fac = function LeaveRequestDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaveRequestDialogComponent)();
};
_LeaveRequestDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveRequestDialogComponent, selectors: [["app-leave-request-dialog"]], decls: 11, vars: 8, consts: [[1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["d", "M2 2l14 14M16 2L2 16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["novalidate", "", 1, "dialog-body", 3, "formGroup"], ["novalidate", "", 1, "dialog-body", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "leaveTypeId", 1, "field-label"], ["aria-hidden", "true", 1, "required"], ["role", "status", 1, "field-loading"], ["id", "leaveTypeId", "formControlName", "leaveTypeId", 1, "field-select"], ["role", "alert", 1, "field-error"], [1, "form-row"], ["for", "startDate", 1, "field-label"], ["id", "startDate", "type", "date", "formControlName", "startDate", 1, "field-input"], ["for", "endDate", 1, "field-label"], ["id", "endDate", "type", "date", "formControlName", "endDate", 1, "field-input"], ["role", "alert", 1, "form-level-error"], ["for", "reason", 1, "field-label"], ["id", "reason", "formControlName", "reason", "rows", "4", 1, "field-textarea", 3, "placeholder"], [1, "dialog-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "spinner"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "dialog-body"], [1, "status-row"], [1, "status-badge", 3, "ngClass"], [1, "created-at"], [1, "info-section"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "info-row", "info-row-column"], [1, "btn-secondary", 3, "click"], [1, "info-value", "reason-text"], [1, "btn-reject", 3, "click", "disabled"], [1, "btn-approve", 3, "click", "disabled"]], template: function LeaveRequestDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function LeaveRequestDialogComponent_Template_button_click_5_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 4);
    \u0275\u0275element(8, "path", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, LeaveRequestDialogComponent_Conditional_9_Template, 48, 51, "form", 6);
    \u0275\u0275conditionalCreate(10, LeaveRequestDialogComponent_Conditional_10_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.isCreate ? "hr.dialog.createTitle" : "hr.dialog.viewTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 6, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.isCreate ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isCreate ? 10 : -1);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  TranslocoModule,
  DatePipe,
  TranslocoPipe
], styles: [`

.dialog-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: var(--radius-8);
  overflow: hidden;
}
.dialog-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--brand-neutral-100);
  flex-shrink: 0;
}
.dialog-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: var(--brand-neutral-950);
  letter-spacing: -0.2px;
}
.close-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--radius-6);
  background: none;
  color: var(--brand-neutral-400);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  flex-shrink: 0;
}
.close-btn[_ngcontent-%COMP%]:hover {
  background-color: var(--brand-neutral-100);
  color: var(--brand-neutral-900);
}
.dialog-body[_ngcontent-%COMP%] {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.field-label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--brand-neutral-800);
}
.required[_ngcontent-%COMP%] {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.field-select[_ngcontent-%COMP%], 
.field-input[_ngcontent-%COMP%], 
.field-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--brand-neutral-200);
  border-radius: var(--radius-6);
  font-size: 13px;
  color: var(--brand-neutral-800);
  background-color: var(--brand-neutral-50);
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}
.field-select[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: inset-inline-end 12px center;
  padding-inline-end: 32px;
  cursor: pointer;
}
.field-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 96px;
  line-height: 1.5;
}
.field-select[_ngcontent-%COMP%]:focus, 
.field-input[_ngcontent-%COMP%]:focus, 
.field-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-500);
  box-shadow: 0 0 0 2px var(--brand-primary-100);
  background-color: var(--ui-bg-surface);
}
.field-select[_ngcontent-%COMP%]::placeholder, 
.field-input[_ngcontent-%COMP%]::placeholder, 
.field-textarea[_ngcontent-%COMP%]::placeholder {
  color: var(--brand-neutral-300);
}
.form-field.has-error[_ngcontent-%COMP%]   .field-select[_ngcontent-%COMP%], 
.form-field.has-error[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%], 
.form-field.has-error[_ngcontent-%COMP%]   .field-textarea[_ngcontent-%COMP%] {
  border-color: var(--functional-danger-500);
}
.form-field.has-error[_ngcontent-%COMP%]   .field-select[_ngcontent-%COMP%]:focus, 
.form-field.has-error[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]:focus, 
.form-field.has-error[_ngcontent-%COMP%]   .field-textarea[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 2px var(--functional-danger-100);
}
.field-error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-danger-500);
}
.form-level-error[_ngcontent-%COMP%] {
  margin: 0;
  padding: 10px 12px;
  border-radius: var(--radius-6);
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
  font-size: 13px;
  border: 1px solid var(--functional-danger-100);
}
.status-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.status-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
}
.status-badge.status-pending[_ngcontent-%COMP%] {
  background-color: var(--functional-warning-50);
  color: var(--functional-warning-600);
}
.status-badge.status-approved[_ngcontent-%COMP%] {
  background-color: var(--functional-success-50);
  color: var(--functional-success-600);
}
.status-badge.status-rejected[_ngcontent-%COMP%] {
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
}
.status-badge.status-canceled[_ngcontent-%COMP%] {
  background-color: var(--brand-neutral-100);
  color: var(--brand-neutral-600);
}
.created-at[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--brand-neutral-400);
}
.info-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--brand-neutral-100);
  border-radius: var(--radius-6);
  overflow: hidden;
}
.info-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 14px;
  border-bottom: 1px solid var(--brand-neutral-50);
  font-size: 13px;
  gap: 12px;
}
.info-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.info-row-column[_ngcontent-%COMP%] {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}
.info-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: var(--brand-neutral-400);
  white-space: nowrap;
  flex-shrink: 0;
}
.info-value[_ngcontent-%COMP%] {
  color: var(--brand-neutral-900);
  font-weight: 500;
  text-align: end;
  word-break: break-word;
}
.reason-text[_ngcontent-%COMP%] {
  margin: 0;
  text-align: start;
  font-weight: 400;
  color: var(--brand-neutral-800);
  line-height: 1.6;
}
.dialog-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-top: 4px;
}
.btn-secondary[_ngcontent-%COMP%] {
  padding: 9px 18px;
  border: 1px solid var(--brand-neutral-200);
  border-radius: var(--radius-6);
  background: none;
  font-size: 13px;
  font-weight: 500;
  color: var(--brand-neutral-800);
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: var(--brand-neutral-50);
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border: none;
  border-radius: var(--radius-6);
  background-color: var(--brand-primary-500);
  color: var(--brand-neutral-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--brand-primary-600);
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-approve[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border: none;
  border-radius: var(--radius-6);
  background-color: var(--functional-success-500);
  color: var(--brand-neutral-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-approve[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--functional-success-600);
}
.btn-approve[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-reject[_ngcontent-%COMP%] {
  padding: 9px 20px;
  border: 1px solid var(--functional-danger-200);
  border-radius: var(--radius-6);
  background: none;
  color: var(--functional-danger-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-reject[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--functional-danger-50);
}
.btn-reject[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.spinner[_ngcontent-%COMP%] {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: var(--brand-neutral-500);
  border-radius: var(--radius-full);
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 520px) {
  .dialog-container[_ngcontent-%COMP%] {
    width: 100%;
  }
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .dialog-footer[_ngcontent-%COMP%] {
    flex-direction: column-reverse;
    align-items: stretch;
  }
  .btn-primary[_ngcontent-%COMP%], 
   .btn-secondary[_ngcontent-%COMP%], 
   .btn-approve[_ngcontent-%COMP%], 
   .btn-reject[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
/*# sourceMappingURL=leave-request-dialog.css.map */`] });
var LeaveRequestDialogComponent = _LeaveRequestDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveRequestDialogComponent, [{
    type: Component,
    args: [{ selector: "app-leave-request-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatIconModule,
      MatButtonModule,
      TranslocoModule
    ], template: `<div class="dialog-container">

  <!-- \u2500\u2500 Header \u2500\u2500 -->
  <div class="dialog-header">
    <h2 class="dialog-title">
      {{ (isCreate ? 'hr.dialog.createTitle' : 'hr.dialog.viewTitle') | transloco }}
    </h2>
    <button class="close-btn" (click)="close()"
            [attr.aria-label]="'common.close' | transloco">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CREATE MODE \u2014 Reactive Form
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (isCreate) {
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="dialog-body" novalidate>

      <!-- Leave Type (from API) -->
      <div class="form-field" [class.has-error]="fieldInvalid('leaveTypeId')">
        <label for="leaveTypeId" class="field-label">
          {{ 'hr.form.requestType' | transloco }}
          <span class="required" aria-hidden="true">*</span>
        </label>
        @if (leaveTypesLoading) {
          <p class="field-loading" role="status">{{ 'common.loading' | transloco }}</p>
        } @else {
          <select id="leaveTypeId" formControlName="leaveTypeId" class="field-select"
                  [attr.aria-required]="true"
                  [attr.aria-invalid]="fieldInvalid('leaveTypeId')">
            <option [ngValue]="0" disabled>{{ 'hr.form.requestType' | transloco }}</option>
            @for (type of leaveTypes; track type.id) {
              <option [ngValue]="type.id">{{ type.name }}</option>
            }
          </select>
        }
        @if (fieldInvalid('leaveTypeId')) {
          <span class="field-error" role="alert">
            {{ 'hr.form.requestType' | transloco }} {{ 'common.isRequired' | transloco }}
          </span>
        }
      </div>

      <!-- Date Row -->
      <div class="form-row">
        <!-- Start Date -->
        <div class="form-field" [class.has-error]="fieldInvalid('startDate')">
          <label for="startDate" class="field-label">
            {{ 'hr.form.startDate' | transloco }}
            <span class="required" aria-hidden="true">*</span>
          </label>
          <input id="startDate" type="date" formControlName="startDate" class="field-input"
                 [attr.aria-required]="true"
                 [attr.aria-invalid]="fieldInvalid('startDate')">
          @if (fieldInvalid('startDate')) {
            <span class="field-error" role="alert">
              {{ 'hr.form.startDate' | transloco }} {{ 'common.isRequired' | transloco }}
            </span>
          }
        </div>

        <!-- End Date -->
        <div class="form-field" [class.has-error]="fieldInvalid('endDate')">
          <label for="endDate" class="field-label">
            {{ 'hr.form.endDate' | transloco }}
            <span class="required" aria-hidden="true">*</span>
          </label>
          <input id="endDate" type="date" formControlName="endDate" class="field-input"
                 [attr.aria-required]="true"
                 [attr.aria-invalid]="fieldInvalid('endDate')">
          @if (fieldInvalid('endDate')) {
            <span class="field-error" role="alert">
              {{ 'hr.form.endDate' | transloco }} {{ 'common.isRequired' | transloco }}
            </span>
          }
        </div>
      </div>

      <!-- Cross-field date error -->
      @if (form.errors?.['endBeforeStart'] && form.touched) {
        <p class="form-level-error" role="alert">
          {{ 'hr.form.endBeforeStart' | transloco }}
        </p>
      }

      <!-- Reason -->
      <div class="form-field">
        <label for="reason" class="field-label">
          {{ 'hr.form.reason' | transloco }}
        </label>
        <textarea id="reason" formControlName="reason" class="field-textarea" rows="4"
                  [placeholder]="'hr.form.reasonPlaceholder' | transloco"
                  [attr.aria-label]="'hr.form.reason' | transloco">
        </textarea>
      </div>

      <!-- Submit error -->
      @if (submitError) {
        <p class="form-level-error" role="alert">{{ submitError | transloco }}</p>
      }

      <!-- Footer -->
      <div class="dialog-footer">
        <button type="button" class="btn-secondary" (click)="close()"
                [attr.aria-label]="'hr.actions.cancel' | transloco">
          {{ 'hr.actions.cancel' | transloco }}
        </button>
        <button type="submit" class="btn-primary" [disabled]="isSubmitting"
                [attr.aria-label]="'hr.actions.submit' | transloco">
          @if (isSubmitting) {
            <span class="spinner" aria-hidden="true"></span>
          }
          {{ isSubmitting ? ('common.loading' | transloco) : ('hr.actions.submit' | transloco) }}
        </button>
      </div>

    </form>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       VIEW MODE \u2014 Request Details
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (!isCreate) {

    @if (detailLoading()) {
      <div class="dialog-body">
        <p class="field-loading" role="status">{{ 'common.loading' | transloco }}</p>
      </div>
    } @else if (detailError()) {
      <div class="dialog-body">
        <p class="form-level-error" role="alert">{{ 'hr.errors.loadRequests' | transloco }}</p>
      </div>
    } @else if (detail(); as d) {
      <div class="dialog-body">

        <!-- Status badge -->
        <div class="status-row">
          <span class="status-badge" [ngClass]="getStatusClass(d.orderStatus)">
            {{ getStatusKey(d.orderStatus) | transloco }}
          </span>
          @if (d.createDate) {
            <span class="created-at">{{ d.createDate | date: 'mediumDate' }}</span>
          }
        </div>

        <!-- Info rows -->
        <div class="info-section">
          @if (d.employee?.employeeName) {
            <div class="info-row">
              <span class="info-label">{{ 'hr.requests.employee' | transloco }}</span>
              <span class="info-value">{{ d.employee!.employeeName }}</span>
            </div>
          }
          <div class="info-row">
            <span class="info-label">{{ 'hr.requests.type' | transloco }}</span>
            <span class="info-value">{{ d.leaveType?.nameEn || d.orderType?.nameEn || d.leaveTypeId || '\u2014' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">{{ 'hr.requests.startDate' | transloco }}</span>
            <span class="info-value">{{ d.startDate | date: 'mediumDate' }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">{{ 'hr.requests.endDate' | transloco }}</span>
            <span class="info-value">{{ d.endDate | date: 'mediumDate' }}</span>
          </div>
          @if (d.requestComments) {
            <div class="info-row info-row-column">
              <span class="info-label">{{ 'hr.requests.reason' | transloco }}</span>
              <p class="info-value reason-text">{{ d.requestComments }}</p>
            </div>
          }
        </div>

        <!-- Footer -->
        <div class="dialog-footer">
          <button class="btn-secondary" (click)="close()"
                  [attr.aria-label]="'common.close' | transloco">
            {{ 'common.close' | transloco }}
          </button>

          @if (isPending) {
            <button class="btn-reject" (click)="reject()" [disabled]="isActioning"
                    [attr.aria-label]="'hr.actions.reject' | transloco">
              {{ 'hr.actions.reject' | transloco }}
            </button>
            <button class="btn-approve" (click)="approve()" [disabled]="isActioning"
                    [attr.aria-label]="'hr.actions.approve' | transloco">
              @if (isActioning) {
                <span class="spinner" aria-hidden="true"></span>
              }
              {{ 'hr.actions.approve' | transloco }}
            </button>
          }
        </div>

      </div>
    }

  }

</div>
`, styles: [`/* src/components/DashboardLayout/HR/leave-request-dialog/leave-request-dialog.css */
.dialog-container {
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: var(--radius-8);
  overflow: hidden;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--brand-neutral-100);
  flex-shrink: 0;
}
.dialog-title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: var(--brand-neutral-950);
  letter-spacing: -0.2px;
}
.close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--radius-6);
  background: none;
  color: var(--brand-neutral-400);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  flex-shrink: 0;
}
.close-btn:hover {
  background-color: var(--brand-neutral-100);
  color: var(--brand-neutral-900);
}
.dialog-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.field-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--brand-neutral-800);
}
.required {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.field-select,
.field-input,
.field-textarea {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--brand-neutral-200);
  border-radius: var(--radius-6);
  font-size: 13px;
  color: var(--brand-neutral-800);
  background-color: var(--brand-neutral-50);
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}
.field-select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: inset-inline-end 12px center;
  padding-inline-end: 32px;
  cursor: pointer;
}
.field-textarea {
  resize: vertical;
  min-height: 96px;
  line-height: 1.5;
}
.field-select:focus,
.field-input:focus,
.field-textarea:focus {
  outline: none;
  border-color: var(--brand-primary-500);
  box-shadow: 0 0 0 2px var(--brand-primary-100);
  background-color: var(--ui-bg-surface);
}
.field-select::placeholder,
.field-input::placeholder,
.field-textarea::placeholder {
  color: var(--brand-neutral-300);
}
.form-field.has-error .field-select,
.form-field.has-error .field-input,
.form-field.has-error .field-textarea {
  border-color: var(--functional-danger-500);
}
.form-field.has-error .field-select:focus,
.form-field.has-error .field-input:focus,
.form-field.has-error .field-textarea:focus {
  box-shadow: 0 0 0 2px var(--functional-danger-100);
}
.field-error {
  font-size: 12px;
  color: var(--functional-danger-500);
}
.form-level-error {
  margin: 0;
  padding: 10px 12px;
  border-radius: var(--radius-6);
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
  font-size: 13px;
  border: 1px solid var(--functional-danger-100);
}
.status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.status-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
}
.status-badge.status-pending {
  background-color: var(--functional-warning-50);
  color: var(--functional-warning-600);
}
.status-badge.status-approved {
  background-color: var(--functional-success-50);
  color: var(--functional-success-600);
}
.status-badge.status-rejected {
  background-color: var(--functional-danger-50);
  color: var(--functional-danger-600);
}
.status-badge.status-canceled {
  background-color: var(--brand-neutral-100);
  color: var(--brand-neutral-600);
}
.created-at {
  font-size: 12px;
  color: var(--brand-neutral-400);
}
.info-section {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--brand-neutral-100);
  border-radius: var(--radius-6);
  overflow: hidden;
}
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 14px;
  border-bottom: 1px solid var(--brand-neutral-50);
  font-size: 13px;
  gap: 12px;
}
.info-row:last-child {
  border-bottom: none;
}
.info-row-column {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}
.info-label {
  font-weight: 500;
  color: var(--brand-neutral-400);
  white-space: nowrap;
  flex-shrink: 0;
}
.info-value {
  color: var(--brand-neutral-900);
  font-weight: 500;
  text-align: end;
  word-break: break-word;
}
.reason-text {
  margin: 0;
  text-align: start;
  font-weight: 400;
  color: var(--brand-neutral-800);
  line-height: 1.6;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-top: 4px;
}
.btn-secondary {
  padding: 9px 18px;
  border: 1px solid var(--brand-neutral-200);
  border-radius: var(--radius-6);
  background: none;
  font-size: 13px;
  font-weight: 500;
  color: var(--brand-neutral-800);
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-secondary:hover {
  background-color: var(--brand-neutral-50);
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border: none;
  border-radius: var(--radius-6);
  background-color: var(--brand-primary-500);
  color: var(--brand-neutral-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-primary:hover:not(:disabled) {
  background-color: var(--brand-primary-600);
}
.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-approve {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border: none;
  border-radius: var(--radius-6);
  background-color: var(--functional-success-500);
  color: var(--brand-neutral-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-approve:hover:not(:disabled) {
  background-color: var(--functional-success-600);
}
.btn-approve:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-reject {
  padding: 9px 20px;
  border: 1px solid var(--functional-danger-200);
  border-radius: var(--radius-6);
  background: none;
  color: var(--functional-danger-500);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-reject:hover:not(:disabled) {
  background-color: var(--functional-danger-50);
}
.btn-reject:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: var(--brand-neutral-500);
  border-radius: var(--radius-full);
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 520px) {
  .dialog-container {
    width: 100%;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .dialog-footer {
    flex-direction: column-reverse;
    align-items: stretch;
  }
  .btn-primary,
  .btn-secondary,
  .btn-approve,
  .btn-reject {
    justify-content: center;
  }
}
/*# sourceMappingURL=leave-request-dialog.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveRequestDialogComponent, { className: "LeaveRequestDialogComponent", filePath: "src/components/dashboardlayout/hr/leave-request-dialog/leave-request-dialog.ts", lineNumber: 34 });
})();
function endAfterStart(group) {
  const start = group.get("startDate")?.value;
  const end = group.get("endDate")?.value;
  if (start && end && end < start) {
    return { endBeforeStart: true };
  }
  return null;
}

export {
  LeaveRequestDialogComponent
};
//# sourceMappingURL=chunk-5WZPJKPZ.js.map
