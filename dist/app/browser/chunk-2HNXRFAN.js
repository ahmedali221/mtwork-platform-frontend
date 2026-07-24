import {
  LeaveRequestDialogComponent
} from "./chunk-5WZPJKPZ.js";
import {
  MatCheckboxModule
} from "./chunk-TIIUSL4T.js";
import "./chunk-S3Q32BCL.js";
import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  OrderStatus,
  OrderTypeId
} from "./chunk-D43U22HZ.js";
import {
  HrService
} from "./chunk-MVEYIQO5.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-O2QTMEGD.js";
import {
  MatFormFieldModule,
  MatInputModule,
  MatOption
} from "./chunk-Y6F5OIGJ.js";
import "./chunk-XWKVXKPV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  AuthorizationService,
  FeatureKey
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import "./chunk-DWKHQJBX.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
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
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Requests/new-request-dialog/new-request-dialog.ts
var _forTrack0 = ($index, $item) => $item.id;
function NewRequestDialogComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common.noData"));
  }
}
function NewRequestDialogComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.name);
  }
}
function NewRequestDialogComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "This field is required");
    \u0275\u0275elementEnd();
  }
}
function NewRequestDialogComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Failed to load request types.");
    \u0275\u0275elementEnd();
  }
}
function NewRequestDialogComponent_Conditional_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common.noData"));
  }
}
function NewRequestDialogComponent_Conditional_28_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lt_r2 = ctx.$implicit;
    \u0275\u0275property("value", lt_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lt_r2.name);
  }
}
function NewRequestDialogComponent_Conditional_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "This field is required");
    \u0275\u0275elementEnd();
  }
}
function NewRequestDialogComponent_Conditional_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Failed to load leave types.");
    \u0275\u0275elementEnd();
  }
}
function NewRequestDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 21);
    \u0275\u0275text(2, "Leave Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 22);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275conditionalCreate(7, NewRequestDialogComponent_Conditional_28_Conditional_7_Template, 3, 4, "mat-option", 12);
    \u0275\u0275repeaterCreate(8, NewRequestDialogComponent_Conditional_28_For_9_Template, 2, 2, "mat-option", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, NewRequestDialogComponent_Conditional_28_Conditional_10_Template, 2, 0, "span", 14);
    \u0275\u0275conditionalCreate(11, NewRequestDialogComponent_Conditional_28_Conditional_11_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("req-field__select--error", ctx_r2.fieldInvalid("leaveTypeId"));
    \u0275\u0275property("placeholder", ctx_r2.leaveTypesLoading() ? \u0275\u0275pipeBind1(4, 7, "common.loading") : \u0275\u0275pipeBind1(5, 9, "requests.leaveType"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 11, "requests.leaveType"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.leaveTypes().length === 0 && !ctx_r2.leaveTypesLoading() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.leaveTypes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.fieldInvalid("leaveTypeId") && !ctx_r2.leaveTypesError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.leaveTypesError() ? 11 : -1);
  }
}
function NewRequestDialogComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "label", 24);
    \u0275\u0275text(3, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 25);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "label", 26);
    \u0275\u0275text(8, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 27);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("req-field__input--error", ctx_r2.fieldInvalid("startDate"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "requests.startDate"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("req-field__input--error", ctx_r2.fieldInvalid("endDate"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 8, "requests.endDate"));
  }
}
function NewRequestDialogComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "label", 28);
    \u0275\u0275text(3, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 29);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "label", 30);
    \u0275\u0275text(8, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 31);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 4, "requests.overtimeDate"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("req-field__input--error", ctx_r2.fieldInvalid("overtimeHours"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 6, "requests.overtimeHours"));
  }
}
function NewRequestDialogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "label", 32);
    \u0275\u0275text(3, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 33);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "label", 34);
    \u0275\u0275text(8, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 35);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "label", 36);
    \u0275\u0275text(13, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 37);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 3, "requests.tripStartDate"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 5, "requests.tripEndDate"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 7, "requests.destination"));
  }
}
function NewRequestDialogComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "label", 38);
    \u0275\u0275text(3, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "label", 40);
    \u0275\u0275text(8, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 41);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "label", 42);
    \u0275\u0275text(13, "Course Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 43);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 3, "requests.courseStartDate"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 5, "requests.courseEndDate"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 7, "requests.courseName"));
  }
}
function NewRequestDialogComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 44);
    \u0275\u0275text(2, "Certificate Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 45);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "mat-option", 46);
    \u0275\u0275text(6, "Salary Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 47);
    \u0275\u0275text(8, "Employment Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 48);
    \u0275\u0275text(10, "Experience Letter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 49);
    \u0275\u0275text(12, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "requests.certificateType"));
  }
}
function NewRequestDialogComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reason ");
  }
}
function NewRequestDialogComponent_Conditional_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Notes (optional) ");
  }
}
function NewRequestDialogComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 50);
    \u0275\u0275conditionalCreate(2, NewRequestDialogComponent_Conditional_34_Conditional_2_Template, 1, 0)(3, NewRequestDialogComponent_Conditional_34_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 51);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.category() === "other" ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 2, "requests.reasonNotes"));
  }
}
function NewRequestDialogComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitError(), " ");
  }
}
function NewRequestDialogComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 52);
    \u0275\u0275text(1, " Submitting\u2026 ");
  }
}
function NewRequestDialogComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submit Request ");
  }
}
var _NewRequestDialogComponent = class _NewRequestDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.hrService = inject(HrService);
    this.lookupService = inject(LookupService);
    this.fb = inject(FormBuilder);
    this.orderTypes = signal([], ...ngDevMode ? [{ debugName: "orderTypes" }] : []);
    this.leaveTypes = signal([], ...ngDevMode ? [{ debugName: "leaveTypes" }] : []);
    this.orderTypesLoading = signal(true, ...ngDevMode ? [{ debugName: "orderTypesLoading" }] : []);
    this.leaveTypesLoading = signal(false, ...ngDevMode ? [{ debugName: "leaveTypesLoading" }] : []);
    this.orderTypesError = signal(false, ...ngDevMode ? [{ debugName: "orderTypesError" }] : []);
    this.leaveTypesError = signal(false, ...ngDevMode ? [{ debugName: "leaveTypesError" }] : []);
    this.form = this.fb.nonNullable.group({
      orderTypeId: [null, Validators.required],
      leaveTypeId: [null],
      startDate: [""],
      endDate: [""],
      overtimeDate: [""],
      overtimeHours: [null, [Validators.min(1), Validators.max(24)]],
      destination: [""],
      courseName: [""],
      certificateType: [""],
      reason: [""]
    });
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.submitError = signal("", ...ngDevMode ? [{ debugName: "submitError" }] : []);
    this.category = signal(null, ...ngDevMode ? [{ debugName: "category" }] : []);
  }
  resolveCategory(id) {
    if (id == null)
      return null;
    switch (id) {
      case OrderTypeId.Leave:
        return "leave";
      case OrderTypeId.Overtime:
        return "overtime";
      case OrderTypeId.BusinessTrip:
        return "trip";
      case OrderTypeId.Course:
        return "course";
      case OrderTypeId.ServiceCertificate:
        return "certificate";
      case OrderTypeId.Other:
        return "other";
      default:
        return "other";
    }
  }
  ngOnInit() {
    this.loadOrderTypes();
  }
  loadOrderTypes() {
    this.orderTypesLoading.set(true);
    this.orderTypesError.set(false);
    this.form.controls.orderTypeId.disable({ emitEvent: false });
    this.lookupService.getOrderTypes().subscribe({
      next: (items) => {
        this.orderTypes.set(items);
        this.orderTypesError.set(items.length === 0);
        this.orderTypesLoading.set(false);
        if (items.length > 0) {
          this.form.controls.orderTypeId.enable({ emitEvent: false });
        }
      },
      error: () => {
        this.orderTypesError.set(true);
        this.orderTypesLoading.set(false);
      }
    });
  }
  loadLeaveTypes() {
    if (this.leaveTypes().length > 0) {
      this.form.controls.leaveTypeId.enable({ emitEvent: false });
      return;
    }
    this.leaveTypesLoading.set(true);
    this.leaveTypesError.set(false);
    this.form.controls.leaveTypeId.disable({ emitEvent: false });
    this.lookupService.getLeaveTypes().subscribe({
      next: (items) => {
        this.leaveTypes.set(items);
        this.leaveTypesError.set(items.length === 0);
        this.leaveTypesLoading.set(false);
        if (items.length > 0) {
          this.form.controls.leaveTypeId.enable({ emitEvent: false });
        }
      },
      error: () => {
        this.leaveTypesError.set(true);
        this.leaveTypesLoading.set(false);
      }
    });
  }
  onOrderTypeChange(value) {
    this.form.patchValue({
      orderTypeId: value,
      leaveTypeId: null,
      startDate: "",
      endDate: "",
      overtimeDate: "",
      overtimeHours: null,
      destination: "",
      courseName: "",
      certificateType: "",
      reason: ""
    });
    const cat = this.resolveCategory(value);
    this.category.set(cat);
    if (this.submitError())
      this.submitError.set("");
    const leaveCtrl = this.form.controls.leaveTypeId;
    if (cat === "leave") {
      leaveCtrl.setValidators([Validators.required]);
      this.loadLeaveTypes();
    } else {
      leaveCtrl.clearValidators();
    }
    leaveCtrl.updateValueAndValidity({ emitEvent: false });
  }
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  close() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.isSubmitting())
      return;
    if (this.form.invalid) {
      const orderInvalid = this.form.controls.orderTypeId.invalid;
      const leaveInvalid = this.form.controls.leaveTypeId.invalid;
      if (orderInvalid)
        this.submitError.set("requests.errors.selectType");
      else if (leaveInvalid)
        this.submitError.set("requests.errors.selectLeaveType");
      else
        this.submitError.set("requests.errors.fillRequired");
      return;
    }
    const cat = this.category();
    if (!cat)
      return;
    const v = this.form.getRawValue();
    const orderTypeId = v.orderTypeId;
    const rawStart = cat === "overtime" ? v.overtimeDate : v.startDate;
    const rawEnd = cat === "overtime" ? v.overtimeDate : v.endDate;
    const startDate = rawStart ? new Date(rawStart).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    const endDate = rawEnd ? new Date(rawEnd).toISOString() : startDate;
    const base = {
      orderTypeId,
      startDate,
      endDate,
      requestComments: v.reason?.trim() || void 0
    };
    this.isSubmitting.set(true);
    this.submitError.set("");
    let request$;
    switch (cat) {
      case "leave": {
        const leavePayload = __spreadProps(__spreadValues({}, base), { leaveTypeId: v.leaveTypeId ?? void 0 });
        request$ = this.hrService.createLeaveRequest(leavePayload);
        break;
      }
      case "overtime": {
        const otPayload = __spreadProps(__spreadValues({}, base), {
          // Capture single overtime entry as one OverTimeDay; the rich
          // multi-day editor is not yet implemented in this dialog.
          overTimeDays: v.overtimeDate ? [{
            overTimeDate: new Date(v.overtimeDate).toISOString(),
            totalHours: v.overtimeHours ?? void 0
          }] : void 0
        });
        request$ = this.hrService.createOverTime(otPayload);
        break;
      }
      case "trip": {
        const tripPayload = __spreadProps(__spreadValues({}, base), {
          // Destination has no dedicated backend field; preserved in
          // requestTitle for now (rich expense editor is a follow-up).
          requestTitle: v.destination?.trim() || void 0
        });
        request$ = this.hrService.createBusinessTrip(tripPayload);
        break;
      }
      case "course": {
        const coursePayload = __spreadProps(__spreadValues({}, base), { requestTitle: v.courseName?.trim() || void 0 });
        request$ = this.hrService.createCourse(coursePayload);
        break;
      }
      case "certificate": {
        const certPayload = __spreadProps(__spreadValues({}, base), {
          serviceCertificate: v.certificateType ? { name: v.certificateType } : void 0
        });
        request$ = this.hrService.createServiceCertificate(certPayload);
        break;
      }
      case "other":
      default:
        request$ = this.hrService.createOther(base);
        break;
    }
    request$.subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialogRef.close({ refresh: true });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        const msg = err?.error?.message ?? err?.message ?? "requests.errors.submit";
        this.submitError.set(msg);
      }
    });
  }
};
_NewRequestDialogComponent.\u0275fac = function NewRequestDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewRequestDialogComponent)();
};
_NewRequestDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewRequestDialogComponent, selectors: [["app-new-request-dialog"]], decls: 42, vars: 27, consts: [[1, "req-dialog"], [1, "req-dialog__header"], [1, "req-dialog__title-group"], [1, "req-dialog__icon-wrap"], ["aria-hidden", "true"], ["transloco", "requests.newRequest", 1, "req-dialog__title"], ["transloco", "requests.subtitle", 1, "req-dialog__subtitle"], [1, "req-dialog__close", 3, "click"], [1, "req-dialog__body", 3, "ngSubmit", "formGroup"], [1, "req-field"], ["for", "req-type", "transloco", "requests.filterType", 1, "req-field__label"], ["id", "req-type", "formControlName", "orderTypeId", 1, "req-field__select", 3, "selectionChange", "placeholder"], [3, "disabled"], [3, "value"], ["transloco", "common.error", 1, "req-field__error"], ["transloco", "requests.errors.loadOrderTypes", 1, "req-field__error"], [1, "req-row"], ["role", "alert", 1, "req-dialog__error"], [1, "req-dialog__actions"], ["type", "button", "transloco", "common.cancel", 1, "req-btn", "req-btn--cancel", 3, "click"], ["type", "submit", 1, "req-btn", "req-btn--submit", 3, "disabled"], ["for", "req-leave-type", "transloco", "requests.leaveType", 1, "req-field__label"], ["id", "req-leave-type", "formControlName", "leaveTypeId", 1, "req-field__select", 3, "placeholder"], ["transloco", "requests.errors.loadLeaveTypes", 1, "req-field__error"], ["for", "req-start", 1, "req-field__label"], ["id", "req-start", "type", "date", "formControlName", "startDate", 1, "req-field__input"], ["for", "req-end", 1, "req-field__label"], ["id", "req-end", "type", "date", "formControlName", "endDate", 1, "req-field__input"], ["for", "req-ot-date", 1, "req-field__label"], ["id", "req-ot-date", "type", "date", "formControlName", "overtimeDate", 1, "req-field__input"], ["for", "req-ot-hours", 1, "req-field__label"], ["id", "req-ot-hours", "type", "number", "min", "1", "max", "24", "formControlName", "overtimeHours", "placeholder", "e.g. 3", 1, "req-field__input"], ["for", "req-trip-start", 1, "req-field__label"], ["id", "req-trip-start", "type", "date", "formControlName", "startDate", 1, "req-field__input"], ["for", "req-trip-end", 1, "req-field__label"], ["id", "req-trip-end", "type", "date", "formControlName", "endDate", 1, "req-field__input"], ["for", "req-destination", 1, "req-field__label"], ["id", "req-destination", "type", "text", "formControlName", "destination", "placeholder", "City / Country", 1, "req-field__input"], ["for", "req-course-start", 1, "req-field__label"], ["id", "req-course-start", "type", "date", "formControlName", "startDate", 1, "req-field__input"], ["for", "req-course-end", 1, "req-field__label"], ["id", "req-course-end", "type", "date", "formControlName", "endDate", 1, "req-field__input"], ["for", "req-course-name", 1, "req-field__label"], ["id", "req-course-name", "type", "text", "formControlName", "courseName", "placeholder", "Course or training title", 1, "req-field__input"], ["for", "req-cert-type", 1, "req-field__label"], ["id", "req-cert-type", "formControlName", "certificateType", 1, "req-field__select"], ["value", "salary"], ["value", "employment"], ["value", "experience"], ["value", "other"], ["for", "req-reason", 1, "req-field__label"], ["id", "req-reason", "formControlName", "reason", "rows", "3", "placeholder", "Add any additional notes\u2026", 1, "req-field__textarea"], ["diameter", "16", "aria-hidden", "true"]], template: function NewRequestDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
    \u0275\u0275text(5, "add_circle_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h2", 5);
    \u0275\u0275text(8, "New Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, "Submit a new request");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function NewRequestDialogComponent_Template_button_click_11_listener() {
      return ctx.close();
    });
    \u0275\u0275elementStart(13, "mat-icon", 4);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "form", 8);
    \u0275\u0275listener("ngSubmit", function NewRequestDialogComponent_Template_form_ngSubmit_15_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(16, "div", 9)(17, "label", 10);
    \u0275\u0275text(18, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 11);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275listener("selectionChange", function NewRequestDialogComponent_Template_mat_select_selectionChange_19_listener($event) {
      return ctx.onOrderTypeChange($event.value);
    });
    \u0275\u0275conditionalCreate(23, NewRequestDialogComponent_Conditional_23_Template, 3, 4, "mat-option", 12);
    \u0275\u0275repeaterCreate(24, NewRequestDialogComponent_For_25_Template, 2, 2, "mat-option", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, NewRequestDialogComponent_Conditional_26_Template, 2, 0, "span", 14);
    \u0275\u0275conditionalCreate(27, NewRequestDialogComponent_Conditional_27_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, NewRequestDialogComponent_Conditional_28_Template, 12, 13, "div", 9);
    \u0275\u0275conditionalCreate(29, NewRequestDialogComponent_Conditional_29_Template, 11, 10, "div", 16);
    \u0275\u0275conditionalCreate(30, NewRequestDialogComponent_Conditional_30_Template, 11, 8, "div", 16);
    \u0275\u0275conditionalCreate(31, NewRequestDialogComponent_Conditional_31_Template, 16, 9);
    \u0275\u0275conditionalCreate(32, NewRequestDialogComponent_Conditional_32_Template, 16, 9);
    \u0275\u0275conditionalCreate(33, NewRequestDialogComponent_Conditional_33_Template, 13, 3, "div", 9);
    \u0275\u0275conditionalCreate(34, NewRequestDialogComponent_Conditional_34_Template, 6, 4, "div", 9);
    \u0275\u0275conditionalCreate(35, NewRequestDialogComponent_Conditional_35_Template, 4, 1, "div", 17);
    \u0275\u0275elementStart(36, "div", 18)(37, "button", 19);
    \u0275\u0275listener("click", function NewRequestDialogComponent_Template_button_click_37_listener() {
      return ctx.close();
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 20);
    \u0275\u0275conditionalCreate(40, NewRequestDialogComponent_Conditional_40_Template, 2, 0)(41, NewRequestDialogComponent_Conditional_41_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 19, "common.closeDialog"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("req-field__select--error", ctx.fieldInvalid("orderTypeId"));
    \u0275\u0275property("placeholder", ctx.orderTypesLoading() ? \u0275\u0275pipeBind1(20, 21, "common.loading") : \u0275\u0275pipeBind1(21, 23, "requests.filterType"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 25, "requests.requestType"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.orderTypes().length === 0 && !ctx.orderTypesLoading() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.orderTypes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.fieldInvalid("orderTypeId") && !ctx.orderTypesError() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.orderTypesError() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "leave" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "leave" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "overtime" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "trip" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "course" ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() === "certificate" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.category() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.submitError() ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSubmitting() ? 40 : 41);
  }
}, dependencies: [
  CommonModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MinValidator,
  MaxValidator,
  FormGroupDirective,
  FormControlName,
  MatDialogModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  TranslocoDirective,
  TranslocoPipe
], styles: ["\n\n.req-dialog[_ngcontent-%COMP%] {\n  width: 520px;\n  max-width: 100%;\n  background: var(--ui-surface);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.req-dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 22px 24px 18px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.req-dialog__title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.req-dialog__icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-500);\n  flex-shrink: 0;\n}\n.req-dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.req-dialog__subtitle[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.req-dialog__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: var(--ui-text-muted);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s, color 0.15s;\n}\n.req-dialog__close[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text);\n}\n.req-dialog__body[_ngcontent-%COMP%] {\n  padding: 22px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.req-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.req-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-field__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text);\n}\n.req-field__input[_ngcontent-%COMP%], \n.req-field__textarea[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 14px;\n  color: var(--ui-text);\n  background: var(--ui-surface);\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n  resize: vertical;\n}\n.req-field__input[_ngcontent-%COMP%]:focus, \n.req-field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.req-field__input--error[_ngcontent-%COMP%], \n.req-field__select--error[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-500) !important;\n}\n.req-field__error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--functional-danger-600);\n}\n.req-field__select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.req-dialog__error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  border-radius: 8px;\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.req-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-block-start: 4px;\n}\n.req-btn[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition:\n    background 0.15s ease,\n    opacity 0.15s ease,\n    transform .12s ease,\n    box-shadow .15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.req-btn--cancel[_ngcontent-%COMP%] {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-muted);\n}\n.req-btn--cancel[_ngcontent-%COMP%]:hover {\n  background: var(--ui-border);\n  color: var(--ui-text);\n}\n.req-btn--submit[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.req-btn--submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n}\n.req-btn--submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.req-btn--submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n/*# sourceMappingURL=new-request-dialog.css.map */"] });
var NewRequestDialogComponent = _NewRequestDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewRequestDialogComponent, [{
    type: Component,
    args: [{ selector: "app-new-request-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="req-dialog">

  <!-- Header -->
  <div class="req-dialog__header">
    <div class="req-dialog__title-group">
      <div class="req-dialog__icon-wrap">
        <mat-icon aria-hidden="true">add_circle_outline</mat-icon>
      </div>
      <div>
        <h2 class="req-dialog__title" transloco="requests.newRequest">New Request</h2>
        <p class="req-dialog__subtitle" transloco="requests.subtitle">Submit a new request</p>
      </div>
    </div>
    <button class="req-dialog__close" (click)="close()" [attr.aria-label]="'common.closeDialog' | transloco">
      <mat-icon aria-hidden="true">close</mat-icon>
    </button>
  </div>

  <!-- Body -->
  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="req-dialog__body">

    <!-- Request Type (driven by Lookup/GetAllOrderType) -->
    <div class="req-field">
      <label class="req-field__label" for="req-type" transloco="requests.filterType">Request Type</label>
      <mat-select
        id="req-type"
        formControlName="orderTypeId"
        class="req-field__select"
        (selectionChange)="onOrderTypeChange($event.value)"
        [attr.aria-label]="'requests.requestType' | transloco"
        [placeholder]="orderTypesLoading() ? ('common.loading' | transloco) : ('requests.filterType' | transloco)"
        [class.req-field__select--error]="fieldInvalid('orderTypeId')">
        @if (orderTypes().length === 0 && !orderTypesLoading()) {
          <mat-option [disabled]="true">{{ 'common.noData' | transloco }}</mat-option>
        }
        @for (t of orderTypes(); track t.id) {
          <mat-option [value]="t.id">{{ t.name }}</mat-option>
        }
      </mat-select>
      @if (fieldInvalid('orderTypeId') && !orderTypesError()) {
        <span class="req-field__error" transloco="common.error">This field is required</span>
      }
      @if (orderTypesError()) {
        <span class="req-field__error" transloco="requests.errors.loadOrderTypes">Failed to load request types.</span>
      }
    </div>

    <!-- Leave Type (driven by Lookup/GetAllLeaveType) \u2014 only for Leave category -->
    @if (category() === 'leave') {
      <div class="req-field">
        <label class="req-field__label" for="req-leave-type" transloco="requests.leaveType">Leave Type</label>
        <mat-select
          id="req-leave-type"
          formControlName="leaveTypeId"
          class="req-field__select"
          [attr.aria-label]="'requests.leaveType' | transloco"
          [placeholder]="leaveTypesLoading() ? ('common.loading' | transloco) : ('requests.leaveType' | transloco)"
          [class.req-field__select--error]="fieldInvalid('leaveTypeId')">
          @if (leaveTypes().length === 0 && !leaveTypesLoading()) {
            <mat-option [disabled]="true">{{ 'common.noData' | transloco }}</mat-option>
          }
          @for (lt of leaveTypes(); track lt.id) {
            <mat-option [value]="lt.id">{{ lt.name }}</mat-option>
          }
        </mat-select>
        @if (fieldInvalid('leaveTypeId') && !leaveTypesError()) {
          <span class="req-field__error" transloco="common.error">This field is required</span>
        }
        @if (leaveTypesError()) {
          <span class="req-field__error" transloco="requests.errors.loadLeaveTypes">Failed to load leave types.</span>
        }
      </div>
    }

    <!-- Leave / WFH fields -->
    @if (category() === 'leave') {
      <div class="req-row">
        <div class="req-field">
          <label class="req-field__label" for="req-start">Start Date</label>
          <input id="req-start" type="date" formControlName="startDate" class="req-field__input"
                 [class.req-field__input--error]="fieldInvalid('startDate')"
                 [attr.aria-label]="'requests.startDate' | transloco" />
        </div>
        <div class="req-field">
          <label class="req-field__label" for="req-end">End Date</label>
          <input id="req-end" type="date" formControlName="endDate" class="req-field__input"
                 [class.req-field__input--error]="fieldInvalid('endDate')"
                 [attr.aria-label]="'requests.endDate' | transloco" />
        </div>
      </div>
    }

    <!-- Overtime fields -->
    @if (category() === 'overtime') {
      <div class="req-row">
        <div class="req-field">
          <label class="req-field__label" for="req-ot-date">Date</label>
          <input id="req-ot-date" type="date" formControlName="overtimeDate" class="req-field__input"
                 [attr.aria-label]="'requests.overtimeDate' | transloco" />
        </div>
        <div class="req-field">
          <label class="req-field__label" for="req-ot-hours">Hours</label>
          <input id="req-ot-hours" type="number" min="1" max="24" formControlName="overtimeHours"
                 class="req-field__input"
                 [class.req-field__input--error]="fieldInvalid('overtimeHours')"
                 placeholder="e.g. 3" [attr.aria-label]="'requests.overtimeHours' | transloco" />
        </div>
      </div>
    }

    <!-- Business Trip fields -->
    @if (category() === 'trip') {
      <div class="req-row">
        <div class="req-field">
          <label class="req-field__label" for="req-trip-start">Start Date</label>
          <input id="req-trip-start" type="date" formControlName="startDate" class="req-field__input"
                 [attr.aria-label]="'requests.tripStartDate' | transloco" />
        </div>
        <div class="req-field">
          <label class="req-field__label" for="req-trip-end">End Date</label>
          <input id="req-trip-end" type="date" formControlName="endDate" class="req-field__input"
                 [attr.aria-label]="'requests.tripEndDate' | transloco" />
        </div>
      </div>
      <div class="req-field">
        <label class="req-field__label" for="req-destination">Destination</label>
        <input id="req-destination" type="text" formControlName="destination" class="req-field__input"
               placeholder="City / Country" [attr.aria-label]="'requests.destination' | transloco" />
      </div>
    }

    <!-- Course / Training fields -->
    @if (category() === 'course') {
      <div class="req-row">
        <div class="req-field">
          <label class="req-field__label" for="req-course-start">Start Date</label>
          <input id="req-course-start" type="date" formControlName="startDate" class="req-field__input"
                 [attr.aria-label]="'requests.courseStartDate' | transloco" />
        </div>
        <div class="req-field">
          <label class="req-field__label" for="req-course-end">End Date</label>
          <input id="req-course-end" type="date" formControlName="endDate" class="req-field__input"
                 [attr.aria-label]="'requests.courseEndDate' | transloco" />
        </div>
      </div>
      <div class="req-field">
        <label class="req-field__label" for="req-course-name">Course Name</label>
        <input id="req-course-name" type="text" formControlName="courseName" class="req-field__input"
               placeholder="Course or training title" [attr.aria-label]="'requests.courseName' | transloco" />
      </div>
    }

    <!-- Certificate fields -->
    @if (category() === 'certificate') {
      <div class="req-field">
        <label class="req-field__label" for="req-cert-type">Certificate Type</label>
        <mat-select id="req-cert-type" formControlName="certificateType" class="req-field__select"
                    [attr.aria-label]="'requests.certificateType' | transloco">
          <mat-option value="salary">Salary Certificate</mat-option>
          <mat-option value="employment">Employment Certificate</mat-option>
          <mat-option value="experience">Experience Letter</mat-option>
          <mat-option value="other">Other</mat-option>
        </mat-select>
      </div>
    }

    <!-- Reason / Notes (all types) -->
    @if (category()) {
      <div class="req-field">
        <label class="req-field__label" for="req-reason">
          @if (category() === 'other') { Reason } @else { Notes (optional) }
        </label>
        <textarea id="req-reason" formControlName="reason" class="req-field__textarea" rows="3"
                  placeholder="Add any additional notes\u2026" [attr.aria-label]="'requests.reasonNotes' | transloco"></textarea>
      </div>
    }

    <!-- Submit error -->
    @if (submitError()) {
      <div class="req-dialog__error" role="alert">
        <mat-icon aria-hidden="true">error_outline</mat-icon>
        {{ submitError() }}
      </div>
    }

    <!-- Actions -->
    <div class="req-dialog__actions">
      <button type="button" class="req-btn req-btn--cancel" (click)="close()" transloco="common.cancel">Cancel</button>
      <button type="submit" class="req-btn req-btn--submit" [disabled]="isSubmitting()">
        @if (isSubmitting()) {
          <mat-spinner diameter="16" aria-hidden="true"></mat-spinner>
          Submitting\u2026
        } @else {
          Submit Request
        }
      </button>
    </div>

  </form>
</div>
`, styles: ["/* src/components/DashboardLayout/Requests/new-request-dialog/new-request-dialog.css */\n.req-dialog {\n  width: 520px;\n  max-width: 100%;\n  background: var(--ui-surface);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.req-dialog__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 22px 24px 18px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.req-dialog__title-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.req-dialog__icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-500);\n  flex-shrink: 0;\n}\n.req-dialog__title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.req-dialog__subtitle {\n  margin: 2px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.req-dialog__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: var(--ui-text-muted);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s, color 0.15s;\n}\n.req-dialog__close:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text);\n}\n.req-dialog__body {\n  padding: 22px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.req-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.req-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-field__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text);\n}\n.req-field__input,\n.req-field__textarea {\n  padding: 9px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 14px;\n  color: var(--ui-text);\n  background: var(--ui-surface);\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n  resize: vertical;\n}\n.req-field__input:focus,\n.req-field__textarea:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.req-field__input--error,\n.req-field__select--error {\n  border-color: var(--functional-danger-500) !important;\n}\n.req-field__error {\n  font-size: 11px;\n  color: var(--functional-danger-600);\n}\n.req-field__select {\n  width: 100%;\n}\n.req-dialog__error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  border-radius: 8px;\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.req-dialog__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-block-start: 4px;\n}\n.req-btn {\n  padding: 10px 22px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition:\n    background 0.15s ease,\n    opacity 0.15s ease,\n    transform .12s ease,\n    box-shadow .15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.req-btn--cancel {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-muted);\n}\n.req-btn--cancel:hover {\n  background: var(--ui-border);\n  color: var(--ui-text);\n}\n.req-btn--submit {\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.req-btn--submit:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n}\n.req-btn--submit:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n}\n.req-btn--submit:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n/*# sourceMappingURL=new-request-dialog.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewRequestDialogComponent, { className: "NewRequestDialogComponent", filePath: "src/components/dashboardlayout/requests/new-request-dialog/new-request-dialog.ts", lineNumber: 43 });
})();

// src/components/DashboardLayout/Requests/requests-list/requests-list.ts
var _forTrack02 = ($index, $item) => $item.id;
function RequestsListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewRequest());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14);
    \u0275\u0275element(3, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "requests.newRequest"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "requests.newRequest"), " ");
  }
}
function RequestsListComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "requests.loading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "requests.loading"));
  }
}
function RequestsListComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_84_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadRequests());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 3, "requests.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "requests.retry"), " ");
  }
}
function RequestsListComponent_Conditional_85_For_27_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 63);
    \u0275\u0275element(1, "path", 71);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_85_For_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 63);
    \u0275\u0275element(1, "path", 72);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_85_For_27_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 63);
    \u0275\u0275element(1, "path", 73);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_85_For_27_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 63);
    \u0275\u0275element(1, "path", 74);
    \u0275\u0275elementEnd();
  }
}
function RequestsListComponent_Conditional_85_For_27_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_85_For_27_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const req_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approveRequest(req_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14);
    \u0275\u0275element(3, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 77);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_85_For_27_Conditional_43_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const req_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.denyRequest(req_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 14);
    \u0275\u0275element(9, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", req_r8.orderStatus === ctx_r2.OrderStatus.Approved);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 6, "requests.actions.approve"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "requests.actions.approve"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", req_r8.orderStatus === ctx_r2.OrderStatus.Rejected);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "requests.actions.deny"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "requests.actions.deny"), " ");
  }
}
function RequestsListComponent_Conditional_85_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "input", 47);
    \u0275\u0275listener("change", function RequestsListComponent_Conditional_85_For_27_Template_input_change_2_listener() {
      const req_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRow(req_r8.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 48)(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 49)(7, "div", 56)(8, "div", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58)(11, "span", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 60);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "td", 50)(17, "span", 61);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 52)(22, "span", 62);
    \u0275\u0275conditionalCreate(23, RequestsListComponent_Conditional_85_For_27_Conditional_23_Template, 2, 0, ":svg:svg", 63)(24, RequestsListComponent_Conditional_85_For_27_Conditional_24_Template, 2, 0, ":svg:svg", 63)(25, RequestsListComponent_Conditional_85_For_27_Conditional_25_Template, 2, 0, ":svg:svg", 63)(26, RequestsListComponent_Conditional_85_For_27_Conditional_26_Template, 2, 0, ":svg:svg", 63);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 53)(29, "button", 64);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_85_For_27_Template_button_click_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stopPropagation($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 65);
    \u0275\u0275element(32, "circle", 66)(33, "circle", 67)(34, "circle", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "mat-menu", 69, 2)(37, "button", 27);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_85_For_27_Template_button_click_37_listener() {
      const req_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewDetails(req_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 14);
    \u0275\u0275element(40, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, RequestsListComponent_Conditional_85_For_27_Conditional_43_Template, 12, 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const req_r8 = ctx.$implicit;
    const rowMenu_r10 = \u0275\u0275reference(36);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row--selected", ctx_r2.isSelected(req_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isSelected(req_r8.id));
    \u0275\u0275attribute("aria-label", "Select request " + ctx_r2.formatKey(req_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatKey(req_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getAvatarClass(req_r8.employeeName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(req_r8.employeeName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r8.employeeName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r8.orderTypeName || \u0275\u0275pipeBind1(15, 23, "hr.tabs.employees"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getTypeClass(req_r8.leaveTypeName || req_r8.orderTypeName || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r8.leaveTypeName || req_r8.orderTypeName || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(req_r8.createdAt || req_r8.startDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusClass(req_r8.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275conditional(req_r8.orderStatus === ctx_r2.OrderStatus.Approved ? 23 : req_r8.orderStatus === ctx_r2.OrderStatus.Pending ? 24 : req_r8.orderStatus === ctx_r2.OrderStatus.Rejected ? 25 : 26);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(req_r8.orderStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", rowMenu_r10);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 25, "requests.table.actions") + " " + ctx_r2.formatKey(req_r8.id));
    \u0275\u0275advance(8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 27, "requests.actions.viewDetails"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 29, "requests.actions.viewDetails"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.auth.canAccessFeature(ctx_r2.FeatureKey.ApproveLeave) ? 43 : -1);
  }
}
function RequestsListComponent_Conditional_85_ForEmpty_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_85_ForEmpty_28_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNewRequest());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 63);
    \u0275\u0275element(3, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "requests.newRequest"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "requests.newRequest"), " ");
  }
}
function RequestsListComponent_Conditional_85_ForEmpty_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79)(2, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 81);
    \u0275\u0275element(4, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 83);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RequestsListComponent_Conditional_85_ForEmpty_28_Conditional_11_Template, 6, 6, "button", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "requests.emptyState.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "requests.emptyState.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.auth.canCreateLeave() ? 11 : -1);
  }
}
function RequestsListComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 37);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "thead")(3, "tr")(4, "th", 46)(5, "input", 47);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("change", function RequestsListComponent_Conditional_85_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelectAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 49);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 50);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 51);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 52);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 53);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, RequestsListComponent_Conditional_85_For_27_Template, 44, 31, "tr", 54, _forTrack02, false, RequestsListComponent_Conditional_85_ForEmpty_28_Template, 12, 7, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 10, "requests.requestsTable"));
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.allOnPageSelected());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 12, "requests.table.key"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "requests.table.key"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "requests.table.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "requests.table.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 20, "requests.table.creationDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 22, "requests.table.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 24, "requests.table.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.paginated());
  }
}
function RequestsListComponent_Conditional_86_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_86_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNewRequest());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 63);
    \u0275\u0275element(3, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " New Request ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "requests.newRequest"));
  }
}
function RequestsListComponent_Conditional_86_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 81);
    \u0275\u0275element(2, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 83);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 84);
    \u0275\u0275text(7, "No leave requests have been submitted yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, RequestsListComponent_Conditional_86_Conditional_0_Conditional_8_Template, 5, 3, "button", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "requests.emptyState.title"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.auth.canCreateLeave() ? 8 : -1);
  }
}
function RequestsListComponent_Conditional_86_Conditional_1_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_86_Conditional_1_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const req_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.approveRequest(req_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_86_Conditional_1_For_2_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const req_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.denyRequest(req_r13));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", req_r13.orderStatus === ctx_r2.OrderStatus.Approved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "requests.actions.approve"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", req_r13.orderStatus === ctx_r2.OrderStatus.Rejected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "requests.actions.deny"));
  }
}
function RequestsListComponent_Conditional_86_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 91)(1, "header", 92)(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 64);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_86_Conditional_1_For_2_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.stopPropagation($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 65);
    \u0275\u0275element(7, "circle", 66)(8, "circle", 67)(9, "circle", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "mat-menu", 69, 3)(12, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Conditional_86_Conditional_1_For_2_Template_button_click_12_listener() {
      const req_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewDetails(req_r13));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, RequestsListComponent_Conditional_86_Conditional_1_For_2_Conditional_15_Template, 6, 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 93)(17, "div", 56)(18, "div", 57);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 58)(21, "span", 59);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 60);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "dl", 94)(27, "div")(28, "dt");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd")(32, "span", 61);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div")(35, "dt");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "dd");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "dt");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "dd")(45, "span", 62);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const req_r13 = ctx.$implicit;
    const cardMenu_r15 = \u0275\u0275reference(11);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ui-card--selected", ctx_r2.isSelected(req_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatKey(req_r13.id));
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", cardMenu_r15);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 22, "requests.table.actions") + " " + ctx_r2.formatKey(req_r13.id));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "requests.actions.viewDetails"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.auth.canAccessFeature(ctx_r2.FeatureKey.ApproveLeave) ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getAvatarClass(req_r13.employeeName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(req_r13.employeeName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r13.employeeName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r13.orderTypeName || \u0275\u0275pipeBind1(25, 26, "hr.tabs.employees"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 28, "requests.table.type"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getTypeClass(req_r13.leaveTypeName || req_r13.orderTypeName || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r13.leaveTypeName || req_r13.orderTypeName || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 30, "requests.table.creationDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(req_r13.createdAt || req_r13.startDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 32, "requests.table.status"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStatusClass(req_r13.orderStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(req_r13.orderStatus), " ");
  }
}
function RequestsListComponent_Conditional_86_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275repeaterCreate(1, RequestsListComponent_Conditional_86_Conditional_1_For_2_Template, 47, 34, "article", 90, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.paginated());
  }
}
function RequestsListComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RequestsListComponent_Conditional_86_Conditional_0_Template, 9, 4, "div", 87)(1, RequestsListComponent_Conditional_86_Conditional_1_Template, 3, 0, "div", 88);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.paginated().length === 0 ? 0 : 1);
  }
}
var _RequestsListComponent = class _RequestsListComponent {
  constructor() {
    this.hrService = inject(HrService);
    this.dialog = inject(MatDialog);
    this.auth = inject(AuthorizationService);
    this.cdr = inject(ChangeDetectorRef);
    this.transloco = inject(TranslocoService);
    this.OrderStatus = OrderStatus;
    this.FeatureKey = FeatureKey;
    this.requests = signal([], ...ngDevMode ? [{ debugName: "requests" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
    this.sortOrder = signal("newest", ...ngDevMode ? [{ debugName: "sortOrder" }] : []);
    this.view = signal("table", ...ngDevMode ? [{ debugName: "view" }] : []);
    this.isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
    this.selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : []);
    this.currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
    this.pageSize = 10;
    this.filtered = computed(() => {
      const q = this.searchQuery().toLowerCase();
      const status = this.statusFilter();
      const order = this.sortOrder();
      const list = this.requests().filter((r) => {
        const matchSearch = !q || (r.employeeName ?? "").toLowerCase().includes(q) || (r.leaveTypeName ?? "").toLowerCase().includes(q) || (r.orderTypeName ?? "").toLowerCase().includes(q) || this.formatKey(r.id).toLowerCase().includes(q);
        const matchStatus = !status || r.orderStatus === status;
        return matchSearch && matchStatus;
      });
      const ts = (r) => {
        const d = new Date(r.createdAt || r.startDate || 0).getTime();
        return Number.isNaN(d) ? 0 : d;
      };
      return [...list].sort((a, b) => order === "newest" ? ts(b) - ts(a) : ts(a) - ts(b));
    }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
    this.paginated = computed(() => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.filtered().slice(start, start + this.pageSize);
    }, ...ngDevMode ? [{ debugName: "paginated" }] : []);
    this.pageNumbers = computed(() => {
      const total = this.totalPages();
      return Array.from({ length: Math.min(total, 6) }, (_, i) => i + 1);
    }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : []);
    this.allOnPageSelected = computed(() => {
      const page = this.paginated();
      if (!page.length)
        return false;
      return page.every((r) => this.selectedIds().has(r.id));
    }, ...ngDevMode ? [{ debugName: "allOnPageSelected" }] : []);
  }
  // ── Lifecycle ────────────────────────────────────────────────
  ngOnInit() {
    this.loadRequests();
  }
  loadRequests() {
    this.loading.set(true);
    this.error.set(null);
    this.hrService.getAllLeaveRequests().subscribe({
      next: (reqs) => {
        this.requests.set(reqs);
        this.loading.set(false);
        this.cdr.detectChanges();
      },
      error: () => {
        this.error.set(this.transloco.translate("requests.errors.load"));
        this.loading.set(false);
        this.cdr.detectChanges();
      }
    });
  }
  // ── Filters / Toolbar ────────────────────────────────────────
  onSearch(q) {
    this.searchQuery.set(q);
    this.currentPage.set(1);
  }
  setStatusFilter(status) {
    this.statusFilter.set(status);
    this.currentPage.set(1);
  }
  setSortOrder(order) {
    this.sortOrder.set(order);
  }
  setView(view) {
    this.view.set(view);
  }
  toggleFullscreen() {
    this.isFullscreen.update((v) => !v);
  }
  sortLabel() {
    return this.sortOrder() === "newest" ? this.transloco.translate("requests.sort.newest") : this.transloco.translate("requests.sort.oldest");
  }
  statusLabel() {
    const s = this.statusFilter();
    if (!s)
      return this.transloco.translate("requests.filter.allStatuses");
    return this.getStatusLabel(s);
  }
  // ── Selection ────────────────────────────────────────────────
  toggleSelectAll() {
    const page = this.paginated();
    const current = new Set(this.selectedIds());
    if (this.allOnPageSelected()) {
      page.forEach((r) => current.delete(r.id));
    } else {
      page.forEach((r) => current.add(r.id));
    }
    this.selectedIds.set(current);
  }
  toggleRow(id) {
    const s = new Set(this.selectedIds());
    s.has(id) ? s.delete(id) : s.add(id);
    this.selectedIds.set(s);
  }
  isSelected(id) {
    return this.selectedIds().has(id);
  }
  // ── Pagination ───────────────────────────────────────────────
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  // ── Actions ──────────────────────────────────────────────────
  openNewRequest() {
    if (!this.auth.canCreateLeave())
      return;
    const ref = this.dialog.open(NewRequestDialogComponent, {
      width: "540px",
      panelClass: "request-dialog-panel",
      disableClose: false
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.refresh)
        this.loadRequests();
    });
  }
  viewDetails(req) {
    const ref = this.dialog.open(LeaveRequestDialogComponent, {
      width: "500px",
      panelClass: "leave-request-dialog-panel",
      data: { mode: "view", requestId: req.id }
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.refresh)
        this.loadRequests();
    });
  }
  approveRequest(req) {
    if (!this.auth.canAccessFeature(FeatureKey.ApproveLeave))
      return;
    this.hrService.changeOrderStatus({ orderId: req.id, statusId: OrderStatus.Approved }).subscribe({
      next: () => this.loadRequests(),
      error: () => {
      }
    });
  }
  denyRequest(req) {
    if (!this.auth.canAccessFeature(FeatureKey.ApproveLeave))
      return;
    this.hrService.changeOrderStatus({ orderId: req.id, statusId: OrderStatus.Rejected }).subscribe({
      next: () => this.loadRequests(),
      error: () => {
      }
    });
  }
  // ── Helpers ──────────────────────────────────────────────────
  formatKey(id) {
    return `MDPO-${id}`;
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "\u2014";
    const d = new Date(dateStr);
    if (isNaN(d.getTime()))
      return "\u2014";
    const day = d.getDate();
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const year = d.getFullYear();
    const ord = this.ordinal(day);
    return `${month} ${day}${ord} ${year}`;
  }
  ordinal(n) {
    if (n > 3 && n < 21)
      return "th";
    switch (n % 10) {
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
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  getAvatarClass(name) {
    if (!name)
      return "avatar--default";
    const colors = ["avatar--yellow", "avatar--blue", "avatar--green", "avatar--orange", "avatar--purple"];
    let hash = 0;
    for (let i = 0; i < name.length; i++)
      hash += name.charCodeAt(i);
    return colors[hash % colors.length];
  }
  getStatusClass(status) {
    switch (status) {
      case OrderStatus.Approved:
        return "status--approved";
      case OrderStatus.Rejected:
        return "status--rejected";
      case OrderStatus.Canceled:
        return "status--canceled";
      default:
        return "status--pending";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case OrderStatus.Approved:
        return this.transloco.translate("requests.filter.approved");
      case OrderStatus.Rejected:
        return this.transloco.translate("requests.filter.rejected");
      case OrderStatus.Canceled:
        return this.transloco.translate("requests.filter.canceled");
      default:
        return this.transloco.translate("requests.filter.pending");
    }
  }
  getTypeClass(type) {
    const t = (type ?? "").toLowerCase();
    if (t.includes("business") || t.includes("trip"))
      return "type--business-trip";
    if (t.includes("overtime"))
      return "type--overtime";
    if (t.includes("leave"))
      return "type--leave";
    return "type--default";
  }
  stopPropagation(e) {
    e.stopPropagation();
  }
};
_RequestsListComponent.\u0275fac = function RequestsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestsListComponent)();
};
_RequestsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestsListComponent, selectors: [["app-requests-list"]], decls: 87, vars: 78, consts: [["sortMenu", "matMenu"], ["statusMenu", "matMenu"], ["rowMenu", "matMenu"], ["cardMenu", "matMenu"], [1, "page-container", "requests-page"], [1, "page-header"], [1, "breadcrumb"], [1, "breadcrumb__item"], ["aria-hidden", "true", 1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header__row"], [1, "page-title"], [1, "page-header__actions"], [1, "btn-action", "btn-action--secondary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z", "fill", "currentColor"], [1, "btn-action", "btn-action--primary"], [1, "table-toolbar"], ["title", "Refresh", 1, "toolbar-btn", 3, "click"], ["d", "M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z", "fill", "currentColor"], [1, "toolbar-search"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "toolbar-search__icon"], ["d", "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z", "fill", "currentColor"], ["type", "text", "placeholder", "Search by employee, type or key", 1, "toolbar-search__input", 3, "input", "value"], [1, "toolbar-dropdown-btn", 3, "matMenuTriggerFor"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z", "fill", "currentColor"], ["mat-menu-item", "", 3, "click"], ["role", "group", 1, "ui-view-toggle"], ["title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "toolbar-btn", "toolbar-expand", 3, "click"], [1, "table-container"], [1, "state-overlay"], [1, "state-overlay", "state-overlay--error"], [1, "requests-table"], [1, "btn-action", "btn-action--primary", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z", "fill", "currentColor"], ["d", "M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z", "fill", "currentColor"], ["d", "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z", "fill", "currentColor"], [1, "spinner"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", "fill", "currentColor"], [1, "btn-retry", 3, "click"], [1, "col-check"], ["type", "checkbox", 1, "row-checkbox", 3, "change", "checked"], [1, "col-key"], [1, "col-employee"], [1, "col-type"], [1, "col-date"], [1, "col-status"], [1, "col-actions"], [3, "row--selected"], [1, "request-key"], [1, "employee-cell"], ["aria-hidden", "true", 1, "employee-avatar"], [1, "employee-text"], [1, "employee-name"], [1, "employee-role"], [1, "type-badge"], [1, "status-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], [1, "actions-btn", 3, "click", "matMenuTriggerFor"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["cx", "12", "cy", "5", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "19", "r", "2", "fill", "currentColor"], [1, "requests-actions-menu"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", "fill", "currentColor"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z", "fill", "currentColor"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", "fill", "currentColor"], ["d", "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z", "fill", "currentColor"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z", "fill", "currentColor"], ["mat-menu-item", "", 3, "click", "disabled"], ["d", "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z", "fill", "currentColor"], ["mat-menu-item", "", 1, "menu-item--danger", 3, "click", "disabled"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", "fill", "currentColor"], ["colspan", "7", 1, "empty-row"], [1, "ui-empty"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z", "fill", "currentColor"], [1, "ui-empty__title"], [1, "ui-empty__sub"], ["type", "button", 1, "ui-empty__cta"], ["type", "button", 1, "ui-empty__cta", 3, "click"], [1, "ui-empty", "ui-empty--compact"], [1, "ui-cards-grid"], ["d", "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z", "fill", "currentColor"], [1, "ui-card", 3, "ui-card--selected"], [1, "ui-card"], [1, "ui-card__head"], [1, "ui-card__body"], [1, "ui-card__meta"]], template: function RequestsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nav", 6);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "h1", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 14);
    \u0275\u0275element(20, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RequestsListComponent_Conditional_23_Template, 6, 6, "button", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadRequests());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 14);
    \u0275\u0275element(28, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 21);
    \u0275\u0275element(31, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "input", 23);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275listener("input", function RequestsListComponent_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 24);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275text(36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 25);
    \u0275\u0275element(38, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "mat-menu", null, 0)(41, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setSortOrder("newest"));
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setSortOrder("oldest"));
    });
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 24);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275text(49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 25);
    \u0275\u0275element(51, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "mat-menu", null, 1)(54, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setStatusFilter(""));
    });
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setStatusFilter(ctx.OrderStatus.Pending));
    });
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setStatusFilter(ctx.OrderStatus.Approved));
    });
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setStatusFilter(ctx.OrderStatus.Rejected));
    });
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 27);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setStatusFilter(ctx.OrderStatus.Canceled));
    });
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 28);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementStart(71, "button", 29);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView("table"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 14);
    \u0275\u0275element(74, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "button", 31);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView("cards"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 14);
    \u0275\u0275element(78, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "button", 33);
    \u0275\u0275listener("click", function RequestsListComponent_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFullscreen());
    });
    \u0275\u0275conditionalCreate(80, RequestsListComponent_Conditional_80_Template, 2, 0, ":svg:svg", 14)(81, RequestsListComponent_Conditional_81_Template, 2, 0, ":svg:svg", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 34);
    \u0275\u0275conditionalCreate(83, RequestsListComponent_Conditional_83_Template, 6, 6, "div", 35)(84, RequestsListComponent_Conditional_84_Template, 9, 7, "div", 36)(85, RequestsListComponent_Conditional_85_Template, 29, 26, "table", 37)(86, RequestsListComponent_Conditional_86_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sortMenu_r16 = \u0275\u0275reference(40);
    const statusMenu_r17 = \u0275\u0275reference(53);
    \u0275\u0275classProp("ui-page--fullscreen", ctx.isFullscreen());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 38, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 40, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 42, "requests.breadcrumb"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "requests.title"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 46, "requests.import"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 48, "requests.import"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.auth.canCreateLeave() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 50, "common.refresh"));
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx.searchQuery());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(33, 52, "requests.searchRequests"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", sortMenu_r16);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 54, "common.sortByDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.sortLabel(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 56, "requests.sort.newest"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 58, "requests.sort.oldest"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", statusMenu_r17);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(48, 60, "requests.filter.allStatuses"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.statusLabel(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 62, "requests.filter.allStatuses"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 64, "requests.filter.pending"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 66, "requests.filter.approved"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 68, "requests.filter.rejected"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 70, "requests.filter.canceled"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(70, 72, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.view() === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(72, 74, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.view() === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(76, 76, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.isFullscreen());
    \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Expand to fullscreen")("title", ctx.isFullscreen() ? "Exit fullscreen" : "Expand");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isFullscreen() ? 80 : 81);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading() ? 83 : ctx.error() ? 84 : ctx.view() === "table" ? 85 : 86);
  }
}, dependencies: [CommonModule, FormsModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatCheckboxModule, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.requests-page[_ngcontent-%COMP%] {\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n  gap: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-medium-lg);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-weight: 400;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--brand-accent-500);\n  font-weight: 500;\n}\n.page-header__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  white-space: nowrap;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 10px 14px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12) var(--radius-12) 0 0;\n  border-bottom: none;\n  flex-wrap: wrap;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  transition: background 0.12s ease;\n  flex-shrink: 0;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.toolbar-expand[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n.toolbar-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 220px;\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 10px;\n}\n.toolbar-search__icon[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.toolbar-search__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  min-width: 0;\n}\n.toolbar-search__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.toolbar-dropdown-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s ease;\n}\n.toolbar-dropdown-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.requests-page[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n  min-height: 200px;\n  position: relative;\n}\n.state-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 64px 24px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.state-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.state-overlay--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-neutral-950);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 6px;\n  padding: 8px 18px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.requests-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.requests-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n}\n.requests-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  text-align: start;\n  white-space: nowrap;\n}\n.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ui-border);\n  transition: background 0.1s ease;\n  cursor: default;\n}\n.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row--selected[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--brand-primary-500) 5%, transparent);\n}\n.requests-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.col-check[_ngcontent-%COMP%] {\n  width: 44px;\n  padding-inline: 16px;\n}\n.col-key[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.col-employee[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.col-type[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.col-date[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.col-status[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.col-actions[_ngcontent-%COMP%] {\n  width: 60px;\n  text-align: end;\n}\n.row-checkbox[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.request-key[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n}\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.employee-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.avatar--yellow[_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.avatar--blue[_ngcontent-%COMP%] {\n  background: var(--brand-secondary-50);\n  color: var(--brand-primary-700);\n}\n.avatar--green[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.avatar--orange[_ngcontent-%COMP%] {\n  background: var(--brand-tertiary-50);\n  color: var(--brand-tertiary-700);\n}\n.avatar--purple[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.avatar--default[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.employee-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.type--business-trip[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.type--overtime[_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.type--leave[_ngcontent-%COMP%] {\n  background: var(--brand-secondary-50);\n  color: var(--brand-primary-700);\n}\n.type--default[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status--approved[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.status--pending[_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.status--rejected[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.status--canceled[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.actions-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  margin-inline-start: auto;\n  transition: background 0.12s;\n}\n.actions-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.menu-item--danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600) !important;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border: none !important;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-top: none;\n  border-radius: 0 0 12px 12px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pagination__btn--nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pagination__btn--nav[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n}\n.pagination__btn--nav[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination__pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination__page[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.pagination__page[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.pagination__page--active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .requests-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .table-toolbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .toolbar-search[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .toolbar-expand[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .center-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-action--secondary[_ngcontent-%COMP%] {\n  background: var(--ui-bg-hover, var(--brand-neutral-50));\n  color: var(--ui-text-muted);\n  border: 1px solid var(--ui-border);\n}\n.btn-action--secondary[_ngcontent-%COMP%]:hover {\n  background: var(--ui-border);\n  color: var(--ui-text);\n  opacity: 1;\n}\n.btn-action--primary[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  border: none;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n  transition:\n    background-color .15s ease,\n    transform .12s ease,\n    box-shadow .15s ease;\n}\n.btn-action--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n  opacity: 1;\n}\n.btn-action--primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-action--primary[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=requests-list.css.map */"] });
var RequestsListComponent = _RequestsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestsListComponent, [{
    type: Component,
    args: [{ selector: "app-requests-list", standalone: true, imports: [CommonModule, FormsModule, MatMenuModule, MatCheckboxModule, TranslocoModule], template: `<div class="page-container requests-page" [class.ui-page--fullscreen]="isFullscreen()">

  <!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
      <span class="breadcrumb__item">{{ 'common.appName' | transloco }}</span>
      <span class="breadcrumb__sep" aria-hidden="true">\u203A</span>
      <span class="breadcrumb__item breadcrumb__item--active">{{ 'requests.breadcrumb' | transloco }}</span>
    </nav>
    <div class="page-header__row">
      <h1 class="page-title">{{ 'requests.title' | transloco }}</h1>
      <div class="page-header__actions">
        <button class="btn-action btn-action--secondary" [attr.aria-label]="'requests.import' | transloco">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z" fill="currentColor"/>
          </svg>
          {{ 'requests.import' | transloco }}
        </button>
        @if (auth.canCreateLeave()) {
          <button class="btn-action btn-action--primary" (click)="openNewRequest()"
                  [attr.aria-label]="'requests.newRequest' | transloco">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
            </svg>
            {{ 'requests.newRequest' | transloco }}
          </button>
        }
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="table-toolbar">
    <button class="toolbar-btn" (click)="loadRequests()" [attr.aria-label]="'common.refresh' | transloco" title="Refresh">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
      </svg>
    </button>

    <div class="toolbar-search">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="toolbar-search__icon">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
      </svg>
      <input
        type="text"
        class="toolbar-search__input"
        placeholder="Search by employee, type or key"
        [value]="searchQuery()"
        (input)="onSearch($any($event.target).value)"
        [attr.aria-label]="'requests.searchRequests' | transloco"
      />
    </div>

    <!-- Sort menu (was a fake "By Date" button) -->
    <button class="toolbar-dropdown-btn" [matMenuTriggerFor]="sortMenu" [attr.aria-label]="'common.sortByDate' | transloco">
      {{ sortLabel() }}
      <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" fill="currentColor"/>
      </svg>
    </button>
    <mat-menu #sortMenu="matMenu">
      <button mat-menu-item (click)="setSortOrder('newest')">{{ 'requests.sort.newest' | transloco }}</button>
      <button mat-menu-item (click)="setSortOrder('oldest')">{{ 'requests.sort.oldest' | transloco }}</button>
    </mat-menu>

    <!-- Status filter -->
    <button class="toolbar-dropdown-btn" [matMenuTriggerFor]="statusMenu"
            [attr.aria-label]="'requests.filter.allStatuses' | transloco">
      {{ statusLabel() }}
      <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" fill="currentColor"/>
      </svg>
    </button>
    <mat-menu #statusMenu="matMenu">
      <button mat-menu-item (click)="setStatusFilter('')">{{ 'requests.filter.allStatuses' | transloco }}</button>
      <button mat-menu-item (click)="setStatusFilter(OrderStatus.Pending)">{{ 'requests.filter.pending' | transloco }}</button>
      <button mat-menu-item (click)="setStatusFilter(OrderStatus.Approved)">{{ 'requests.filter.approved' | transloco }}</button>
      <button mat-menu-item (click)="setStatusFilter(OrderStatus.Rejected)">{{ 'requests.filter.rejected' | transloco }}</button>
      <button mat-menu-item (click)="setStatusFilter(OrderStatus.Canceled)">{{ 'requests.filter.canceled' | transloco }}</button>
    </mat-menu>

    <!-- View toggle: table | cards (shared .ui-view-toggle from styles.css) -->
    <div class="ui-view-toggle" role="group" [attr.aria-label]="'common.switchView' | transloco">
      <button
        class="ui-view-toggle__btn"
        [class.ui-view-toggle__btn--active]="view() === 'table'"
        (click)="setView('table')"
        [attr.aria-label]="'common.tableView' | transloco"
        title="Table view">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z" fill="currentColor"/>
        </svg>
      </button>
      <button
        class="ui-view-toggle__btn"
        [class.ui-view-toggle__btn--active]="view() === 'cards'"
        (click)="setView('cards')"
        [attr.aria-label]="'common.cardView' | transloco"
        title="Card view">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="currentColor"/>
        </svg>
      </button>
    </div>

    <button class="toolbar-btn toolbar-expand"
            [class.ui-view-toggle__btn--active]="isFullscreen()"
            (click)="toggleFullscreen()"
            [attr.aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Expand to fullscreen'"
            [attr.title]="isFullscreen() ? 'Exit fullscreen' : 'Expand'">
      @if (!isFullscreen()) {
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
        </svg>
      } @else {
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="currentColor"/>
        </svg>
      }
    </button>
  </div>

  <!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="table-container">

    <!-- Loading -->
    @if (loading()) {
      <div class="state-overlay">
        <div class="spinner" [attr.aria-label]="'requests.loading' | transloco"></div>
        <p>{{ 'requests.loading' | transloco }}</p>
      </div>
    }

    <!-- Error -->
    @else if (error()) {
      <div class="state-overlay state-overlay--error">
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
        </svg>
        <p>{{ error() }}</p>
        <button class="btn-retry" (click)="loadRequests()"
                [attr.aria-label]="'requests.retry' | transloco">
          {{ 'requests.retry' | transloco }}
        </button>
      </div>
    }

    <!-- Table content -->
    @else if (view() === 'table') {
      <table class="requests-table" [attr.aria-label]="'requests.requestsTable' | transloco">
        <thead>
          <tr>
            <th class="col-check">
              <input
                type="checkbox"
                class="row-checkbox"
                [checked]="allOnPageSelected()"
                (change)="toggleSelectAll()"
                [attr.aria-label]="'requests.table.key' | transloco"
              />
            </th>
            <th class="col-key">{{ 'requests.table.key' | transloco }}</th>
            <th class="col-employee">{{ 'requests.table.employee' | transloco }}</th>
            <th class="col-type">{{ 'requests.table.type' | transloco }}</th>
            <th class="col-date">{{ 'requests.table.creationDate' | transloco }}</th>
            <th class="col-status">{{ 'requests.table.status' | transloco }}</th>
            <th class="col-actions">{{ 'requests.table.actions' | transloco }}</th>
          </tr>
        </thead>
        <tbody>
          @for (req of paginated(); track req.id) {
            <tr [class.row--selected]="isSelected(req.id)">

              <!-- Checkbox -->
              <td class="col-check">
                <input
                  type="checkbox"
                  class="row-checkbox"
                  [checked]="isSelected(req.id)"
                  (change)="toggleRow(req.id)"
                  [attr.aria-label]="'Select request ' + formatKey(req.id)"
                />
              </td>

              <!-- Request Key -->
              <td class="col-key">
                <span class="request-key">{{ formatKey(req.id) }}</span>
              </td>

              <!-- Employee -->
              <td class="col-employee">
                <div class="employee-cell">
                  <div class="employee-avatar" [class]="getAvatarClass(req.employeeName)" aria-hidden="true">
                    {{ getInitials(req.employeeName) }}
                  </div>
                  <div class="employee-text">
                    <span class="employee-name">{{ req.employeeName || '\u2014' }}</span>
                    <span class="employee-role">{{ req.orderTypeName || ('hr.tabs.employees' | transloco) }}</span>
                  </div>
                </div>
              </td>

              <!-- Request Type \u2014 show leave subtype if any, else the order type name -->
              <td class="col-type">
                <span class="type-badge" [class]="getTypeClass(req.leaveTypeName || req.orderTypeName || '')">
                  {{ req.leaveTypeName || req.orderTypeName || '\u2014' }}
                </span>
              </td>

              <!-- Creation Date -->
              <td class="col-date">
                {{ formatDate(req.createdAt || req.startDate) }}
              </td>

              <!-- Status -->
              <td class="col-status">
                <span class="status-badge" [class]="getStatusClass(req.orderStatus)">
                  @if (req.orderStatus === OrderStatus.Approved) {
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" fill="currentColor"/>
                    </svg>
                  } @else if (req.orderStatus === OrderStatus.Pending) {
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>
                    </svg>
                  } @else if (req.orderStatus === OrderStatus.Rejected) {
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" fill="currentColor"/>
                    </svg>
                  } @else {
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor"/>
                    </svg>
                  }
                  {{ getStatusLabel(req.orderStatus) }}
                </span>
              </td>

              <!-- Actions (\u22EF menu) -->
              <td class="col-actions">
                <button
                  class="actions-btn"
                  [matMenuTriggerFor]="rowMenu"
                  (click)="stopPropagation($event)"
                  [attr.aria-label]="('requests.table.actions' | transloco) + ' ' + formatKey(req.id)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="5"  r="2" fill="currentColor"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="19" r="2" fill="currentColor"/>
                  </svg>
                </button>

                <mat-menu #rowMenu="matMenu" class="requests-actions-menu">
                  <button mat-menu-item (click)="viewDetails(req)"
                          [attr.aria-label]="'requests.actions.viewDetails' | transloco">
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                    </svg>
                    {{ 'requests.actions.viewDetails' | transloco }}
                  </button>
                  @if (auth.canAccessFeature(FeatureKey.ApproveLeave)) {
                    <button mat-menu-item (click)="approveRequest(req)"
                            [attr.aria-label]="'requests.actions.approve' | transloco"
                            [disabled]="req.orderStatus === OrderStatus.Approved">
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                      </svg>
                      {{ 'requests.actions.approve' | transloco }}
                    </button>
                    <button mat-menu-item (click)="denyRequest(req)"
                            [attr.aria-label]="'requests.actions.deny' | transloco"
                            class="menu-item--danger"
                            [disabled]="req.orderStatus === OrderStatus.Rejected">
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                      </svg>
                      {{ 'requests.actions.deny' | transloco }}
                    </button>
                  }
                </mat-menu>
              </td>

            </tr>
          } @empty {
            <tr>
              <td colspan="7" class="empty-row">
                <div class="ui-empty">
                  <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                  </svg>
                  <p class="ui-empty__title">{{ 'requests.emptyState.title' | transloco }}</p>
                  <p class="ui-empty__sub">{{ 'requests.emptyState.subtitle' | transloco }}</p>
                  @if (auth.canCreateLeave()) {
                    <button type="button" class="ui-empty__cta" (click)="openNewRequest()"
                            [attr.aria-label]="'requests.newRequest' | transloco">
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                      </svg>
                      {{ 'requests.newRequest' | transloco }}
                    </button>
                  }
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    }

    <!-- Card view -->
    @else {
      @if (paginated().length === 0) {
        <div class="ui-empty ui-empty--compact">
          <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor"/>
          </svg>
          <p class="ui-empty__title">{{ 'requests.emptyState.title' | transloco }}</p>
          <p class="ui-empty__sub">No leave requests have been submitted yet.</p>
          @if (auth.canCreateLeave()) {
            <button type="button" class="ui-empty__cta" (click)="openNewRequest()" [attr.aria-label]="'requests.newRequest' | transloco">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
              </svg>
              New Request
            </button>
          }
        </div>
      } @else {
        <div class="ui-cards-grid">
          @for (req of paginated(); track req.id) {
            <article class="ui-card" [class.ui-card--selected]="isSelected(req.id)">
              <header class="ui-card__head">
                <span class="request-key">{{ formatKey(req.id) }}</span>
                <button
                  class="actions-btn"
                  [matMenuTriggerFor]="cardMenu"
                  (click)="stopPropagation($event)"
                  [attr.aria-label]="('requests.table.actions' | transloco) + ' ' + formatKey(req.id)">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="5"  r="2" fill="currentColor"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="19" r="2" fill="currentColor"/>
                  </svg>
                </button>
                <mat-menu #cardMenu="matMenu" class="requests-actions-menu">
                  <button mat-menu-item (click)="viewDetails(req)">{{ 'requests.actions.viewDetails' | transloco }}</button>
                  @if (auth.canAccessFeature(FeatureKey.ApproveLeave)) {
                    <button mat-menu-item (click)="approveRequest(req)"
                      [disabled]="req.orderStatus === OrderStatus.Approved">{{ 'requests.actions.approve' | transloco }}</button>
                    <button mat-menu-item (click)="denyRequest(req)" class="menu-item--danger"
                      [disabled]="req.orderStatus === OrderStatus.Rejected">{{ 'requests.actions.deny' | transloco }}</button>
                  }
                </mat-menu>
              </header>

              <div class="ui-card__body">
                <div class="employee-cell">
                  <div class="employee-avatar" [class]="getAvatarClass(req.employeeName)" aria-hidden="true">
                    {{ getInitials(req.employeeName) }}
                  </div>
                  <div class="employee-text">
                    <span class="employee-name">{{ req.employeeName || '\u2014' }}</span>
                    <span class="employee-role">{{ req.orderTypeName || ('hr.tabs.employees' | transloco) }}</span>
                  </div>
                </div>

                <dl class="ui-card__meta">
                  <div>
                    <dt>{{ 'requests.table.type' | transloco }}</dt>
                    <dd>
                      <span class="type-badge" [class]="getTypeClass(req.leaveTypeName || req.orderTypeName || '')">
                        {{ req.leaveTypeName || req.orderTypeName || '\u2014' }}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>{{ 'requests.table.creationDate' | transloco }}</dt>
                    <dd>{{ formatDate(req.createdAt || req.startDate) }}</dd>
                  </div>
                  <div>
                    <dt>{{ 'requests.table.status' | transloco }}</dt>
                    <dd>
                      <span class="status-badge" [class]="getStatusClass(req.orderStatus)">
                        {{ getStatusLabel(req.orderStatus) }}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          }
        </div>
      }
    }

  </div><!-- /.table-container -->

  <!-- \u2500\u2500 Pagination (none yet \u2014 API returns full list) \u2500\u2500 -->

</div><!-- /.page-container requests-page -->`, styles: ["/* src/components/DashboardLayout/Requests/requests-list/requests-list.css */\n:host {\n  display: block;\n}\n.requests-page {\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n  gap: 0;\n}\n.page-header {\n  margin-bottom: var(--spacing-medium-lg);\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n  font-weight: 400;\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active {\n  color: var(--brand-accent-500);\n  font-weight: 500;\n}\n.page-header__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.page-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  white-space: nowrap;\n}\n.btn-action:hover {\n  opacity: 0.88;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 10px 14px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12) var(--radius-12) 0 0;\n  border-bottom: none;\n  flex-wrap: wrap;\n}\n.toolbar-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  transition: background 0.12s ease;\n  flex-shrink: 0;\n}\n.toolbar-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.toolbar-expand {\n  margin-inline-start: auto;\n}\n.toolbar-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 220px;\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 10px;\n}\n.toolbar-search__icon {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.toolbar-search__input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  min-width: 0;\n}\n.toolbar-search__input::placeholder {\n  color: var(--ui-text-muted);\n}\n.toolbar-dropdown-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s ease;\n}\n.toolbar-dropdown-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.requests-page .table-container {\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n  border-block-start: none;\n  min-height: 200px;\n  position: relative;\n}\n.state-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 64px 24px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.state-overlay p {\n  margin: 0;\n}\n.state-overlay--error {\n  color: var(--functional-danger-600);\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-neutral-950);\n  border-radius: 50%;\n  animation: spin 0.75s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-retry {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 6px;\n  padding: 8px 18px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-retry:hover {\n  opacity: 0.85;\n}\n.requests-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.requests-table thead tr {\n  background: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n}\n.requests-table th {\n  padding: 12px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  text-align: start;\n  white-space: nowrap;\n}\n.requests-table tbody tr {\n  border-bottom: 1px solid var(--ui-border);\n  transition: background 0.1s ease;\n  cursor: default;\n}\n.requests-table tbody tr:last-child {\n  border-bottom: none;\n}\n.requests-table tbody tr:hover {\n  background: var(--ui-bg-subtle);\n}\n.requests-table tbody tr.row--selected {\n  background: color-mix(in srgb, var(--brand-primary-500) 5%, transparent);\n}\n.requests-table td {\n  padding: 14px 16px;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.col-check {\n  width: 44px;\n  padding-inline: 16px;\n}\n.col-key {\n  width: 110px;\n}\n.col-employee {\n  min-width: 180px;\n}\n.col-type {\n  width: 130px;\n}\n.col-date {\n  width: 140px;\n}\n.col-status {\n  width: 120px;\n}\n.col-actions {\n  width: 60px;\n  text-align: end;\n}\n.row-checkbox {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.request-key {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-sub);\n}\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.employee-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.avatar--yellow {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.avatar--blue {\n  background: var(--brand-secondary-50);\n  color: var(--brand-primary-700);\n}\n.avatar--green {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.avatar--orange {\n  background: var(--brand-tertiary-50);\n  color: var(--brand-tertiary-700);\n}\n.avatar--purple {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.avatar--default {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.employee-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.employee-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-role {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.type-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.type--business-trip {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.type--overtime {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.type--leave {\n  background: var(--brand-secondary-50);\n  color: var(--brand-primary-700);\n}\n.type--default {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status--approved {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.status--pending {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.status--rejected {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.status--canceled {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-muted);\n}\n.actions-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  margin-inline-start: auto;\n  transition: background 0.12s;\n}\n.actions-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.menu-item--danger {\n  color: var(--functional-danger-600) !important;\n}\n.empty-row {\n  padding: 0 !important;\n  border: none !important;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-top: none;\n  border-radius: 0 0 12px 12px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pagination__btn--nav {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pagination__btn--nav:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n}\n.pagination__btn--nav:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination__pages {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination__page {\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.pagination__page:hover {\n  background: var(--ui-bg-subtle);\n}\n.pagination__page--active {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .requests-page {\n    padding: 16px;\n  }\n  .table-toolbar {\n    flex-wrap: wrap;\n  }\n  .toolbar-search {\n    min-width: 100%;\n  }\n  .toolbar-expand {\n    margin-inline-start: 0;\n  }\n  .center-section {\n    display: none;\n  }\n}\n.page-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-action--secondary {\n  background: var(--ui-bg-hover, var(--brand-neutral-50));\n  color: var(--ui-text-muted);\n  border: 1px solid var(--ui-border);\n}\n.btn-action--secondary:hover {\n  background: var(--ui-border);\n  color: var(--ui-text);\n  opacity: 1;\n}\n.btn-action--primary {\n  background: var(--brand-primary-500);\n  color: var(--ui-bg-surface);\n  border: none;\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(79, 70, 229, .25);\n  transition:\n    background-color .15s ease,\n    transform .12s ease,\n    box-shadow .15s ease;\n}\n.btn-action--primary:hover:not(:disabled) {\n  background: var(--brand-primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, .3);\n  opacity: 1;\n}\n.btn-action--primary:active {\n  transform: translateY(0);\n}\n.btn-action--primary:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=requests-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestsListComponent, { className: "RequestsListComponent", filePath: "src/components/dashboardlayout/requests/requests-list/requests-list.ts", lineNumber: 22 });
})();
export {
  RequestsListComponent
};
//# sourceMappingURL=chunk-2HNXRFAN.js.map
