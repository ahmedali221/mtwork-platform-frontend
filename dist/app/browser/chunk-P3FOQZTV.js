import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  ContractService
} from "./chunk-LWI6AAJD.js";
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
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  CONTRACT_STATUS_LABELS,
  ContractStatus
} from "./chunk-5LLUWZOB.js";
import {
  MatSnackBar
} from "./chunk-DWKHQJBX.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  Router,
  RouterLink
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  NgClass
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/Contract/contract-details-dialoge/contract-details-dialoge.ts
var _forTrack0 = ($index, $item) => $item.name;
function ContractDetailsDialogeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 37);
    \u0275\u0275elementEnd();
  }
}
function ContractDetailsDialogeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.contract.empoleeOrContractor.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r1.contract.empoleeOrContractor.name + " avatar");
  }
}
function ContractDetailsDialogeComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.name), " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function ContractDetailsDialogeComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275element(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contract.empoleeOrContractor.availabilityStatus, " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21)(1, "mat-icon", 39);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contract.country.name, " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21)(1, "mat-icon", 39);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contract.empoleeOrContractor.phone, " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "mat-icon", 39);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contract.empoleeOrContractor.email, " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "mat-icon", 39);
    \u0275\u0275text(2, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contract.empoleeOrContractor.github, " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "contracts.details.fields.companyName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.name) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "contracts.details.fields.lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.lastName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "contracts.details.fields.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.country == null ? null : ctx_r1.contract.country.name) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "contracts.details.fields.postCode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.postCode) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, "contracts.details.fields.taxDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.taxId) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 22, "contracts.details.fields.linkedIn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.linkedin) || "\u2014");
  }
}
function ContractDetailsDialogeComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "contracts.details.fields.firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.authorizedFirstName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "contracts.details.fields.lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.authorizedLastName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "contracts.details.fields.authorizedId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.authorizedId) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "contracts.details.fields.city"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.city) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, "contracts.details.fields.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.email) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 22, "contracts.details.fields.address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.address) || "\u2014");
  }
}
function ContractDetailsDialogeComponent_Conditional_83_Conditional_1_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const att_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", att_r4.uploadedAt ? \u0275\u0275pipeBind1(2, 2, "contracts.details.uploadedOn") + att_r4.uploadedAt : "", " ", att_r4.size ? " \xB7 " + att_r4.size : "", " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_83_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "mat-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 46)(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ContractDetailsDialogeComponent_Conditional_83_Conditional_1_For_1_Conditional_7_Template, 3, 4, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 49)(9, "button", 50);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "delete_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 51);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Conditional_83_Conditional_1_For_1_Template_button_click_13_listener() {
      const att_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadAttachment(att_r4.url));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const att_r4 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(att_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(att_r4.uploadedAt || att_r4.size ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 4, "contracts.details.deleteAttachment"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 6, "contracts.details.downloadAttachment"));
  }
}
function ContractDetailsDialogeComponent_Conditional_83_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContractDetailsDialogeComponent_Conditional_83_Conditional_1_For_1_Template, 17, 8, "div", 44, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.contract.attachments);
  }
}
function ContractDetailsDialogeComponent_Conditional_83_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "contracts.details.noAttachments"));
  }
}
function ContractDetailsDialogeComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275conditionalCreate(1, ContractDetailsDialogeComponent_Conditional_83_Conditional_1_Template, 2, 0)(2, ContractDetailsDialogeComponent_Conditional_83_Conditional_2_Template, 3, 3, "p", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.contract.attachments == null ? null : ctx_r1.contract.attachments.length) ? 1 : 2);
  }
}
function ContractDetailsDialogeComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "contracts.details.fields.entityName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.employer == null ? null : ctx_r1.contract.employer.entityName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "contracts.details.fields.officialNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.employer == null ? null : ctx_r1.contract.employer.officialNumber) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "contracts.details.fields.phoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.employer == null ? null : ctx_r1.contract.employer.phone) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "contracts.details.fields.emailAddress"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.employer == null ? null : ctx_r1.contract.employer.email) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 18, "contracts.details.fields.address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.employer == null ? null : ctx_r1.contract.employer.address) || "\u2014");
  }
}
function ContractDetailsDialogeComponent_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "contracts.details.fields.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.name) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "contracts.details.fields.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.role) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "contracts.details.fields.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.empoleeOrContractor == null ? null : ctx_r1.contract.empoleeOrContractor.email) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 14, "contracts.details.fields.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.contract.country == null ? null : ctx_r1.contract.country.name) || "\u2014");
  }
}
function ContractDetailsDialogeComponent_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 40)(38, "span", 41);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 42);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 40)(44, "span", 41);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 42);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 40)(50, "span", 41);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 42);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 18, "contracts.details.fields.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.startDate || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "contracts.details.fields.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.endDate || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 22, "contracts.details.fields.contractDuration"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.contractDuration || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 24, "contracts.details.fields.trialPeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.trialPeriod || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "contracts.details.fields.typeOfWork"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.typeOfWork || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 28, "contracts.details.fields.vacationDays"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.vacationDays ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 30, "contracts.details.fields.terminateDuringTrial"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.terminateDuringTrial || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 32, "contracts.details.fields.terminateContract"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.terminateContract || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 34, "contracts.details.fields.noticePeriod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.noticePeriod || "\u2014");
  }
}
function ContractDetailsDialogeComponent_Conditional_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 40)(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 42);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 40)(38, "span", 41);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 42);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 40)(44, "span", 41);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 42)(48, "span", 54);
    \u0275\u0275element(49, "span", 55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 17, "contracts.details.fields.workingHoursPerDay"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.numberOfWorkingHours ? ctx_r1.contract.numberOfWorkingHours + " " + \u0275\u0275pipeBind1(7, 19, "contracts.details.units.hours") : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 21, "contracts.details.fields.workingDays"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.workingDays ? ctx_r1.contract.workingDays + " " + \u0275\u0275pipeBind1(14, 23, "contracts.details.units.days") : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 25, "contracts.details.fields.totalWorkingHours"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.workingHours ? ctx_r1.contract.workingHours + " " + \u0275\u0275pipeBind1(21, 27, "contracts.details.units.hours") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "contracts.details.salariesSubsection"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 31, "contracts.details.fields.salary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.salary ? "$ " + ctx_r1.contract.salary + " " + (ctx_r1.contract.currency || "") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 33, "contracts.details.fields.currency"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.currency || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 35, "contracts.details.fields.billingCycle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contract.billingCycle || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 37, "contracts.details.fields.includeAllowances"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("cd-toggle--on", ctx_r1.contract.includeAllowances);
    \u0275\u0275attribute("aria-label", ctx_r1.contract.includeAllowances ? "On" : "Off");
  }
}
function ContractDetailsDialogeComponent_Conditional_148_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 60);
  }
}
function ContractDetailsDialogeComponent_Conditional_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-icon", 56);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 57)(7, "button", 58);
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Conditional_148_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Conditional_148_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteAction());
    });
    \u0275\u0275conditionalCreate(11, ContractDetailsDialogeComponent_Conditional_148_Conditional_11_Template, 1, 0, "mat-spinner", 60);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "contracts.details.confirmDelete.message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isActioning());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "contracts.details.confirmDelete.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isActioning());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActioning() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "contracts.details.confirmDelete.confirm"), " ");
  }
}
function ContractDetailsDialogeComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Conditional_151_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeStatus(ctx_r1.ContractStatus.Reviewed));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isActioning());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "contracts.details.markContractReviewed"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "contracts.details.menu.markReviewed"));
  }
}
function ContractDetailsDialogeComponent_Conditional_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Conditional_152_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeStatus(ctx_r1.ContractStatus.Approved));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isActioning());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "contracts.details.approveContract"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "contracts.details.menu.approve"));
  }
}
var _ContractDetailsDialogeComponent = class _ContractDetailsDialogeComponent {
  constructor() {
    this.contractService = inject(ContractService);
    this.dialogRef = inject(MatDialogRef);
    this.snackBar = inject(MatSnackBar);
    this.initialData = inject(MAT_DIALOG_DATA);
    this.contract = this.initialData;
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.isActioning = signal(false, ...ngDevMode ? [{ debugName: "isActioning" }] : []);
    this.confirmDelete = signal(false, ...ngDevMode ? [{ debugName: "confirmDelete" }] : []);
    this.basicOpen = signal(true, ...ngDevMode ? [{ debugName: "basicOpen" }] : []);
    this.authorizedOpen = signal(true, ...ngDevMode ? [{ debugName: "authorizedOpen" }] : []);
    this.attachmentsOpen = signal(true, ...ngDevMode ? [{ debugName: "attachmentsOpen" }] : []);
    this.employerOpen = signal(true, ...ngDevMode ? [{ debugName: "employerOpen" }] : []);
    this.workerOpen = signal(false, ...ngDevMode ? [{ debugName: "workerOpen" }] : []);
    this.contractingOpen = signal(true, ...ngDevMode ? [{ debugName: "contractingOpen" }] : []);
    this.salaryOpen = signal(true, ...ngDevMode ? [{ debugName: "salaryOpen" }] : []);
    this.ContractStatus = ContractStatus;
  }
  ngOnInit() {
    if (this.contract?.id) {
      this.isLoading.set(true);
      this.contractService.getContractById(this.contract.id).subscribe({
        next: (detail) => {
          if (detail?.id)
            this.contract = detail;
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
    }
  }
  toggle(section) {
    const map = {
      basic: this.basicOpen,
      authorized: this.authorizedOpen,
      attachments: this.attachmentsOpen,
      employer: this.employerOpen,
      worker: this.workerOpen,
      contracting: this.contractingOpen,
      salary: this.salaryOpen
    };
    const sig = map[section];
    sig.set(!sig());
  }
  // ── Status Change ────────────────────────────────────────────────
  // Backend ContractStatusEnum: 1=Initiated → 2=Reviewed → 3=Approved (4=Canceled).
  // Workflow buttons preserved at the same numeric transitions:
  //   "Mark Reviewed" : Initiated (1) → Reviewed (2)
  //   "Approve"       : Reviewed (2)  → Approved (3)
  // Cancel transition is not exposed in this dialog (out of scope for F3).
  canActivate() {
    return this.contract.statusId === ContractStatus.Initiated;
  }
  canTerminate() {
    return this.contract.statusId === ContractStatus.Reviewed;
  }
  changeStatus(statusId) {
    if (this.isActioning())
      return;
    this.isActioning.set(true);
    this.contractService.changeStatus(Number(this.contract.id), statusId).subscribe({
      next: () => {
        const labelKey = CONTRACT_STATUS_LABELS[statusId] ?? "";
        const labelName = ContractStatus[statusId] ?? String(statusId);
        this.contract = __spreadProps(__spreadValues({}, this.contract), { statusId, status: labelName });
        this.snackBar.open(`Contract status changed to ${labelName}`, "OK", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        this.isActioning.set(false);
        void labelKey;
        this.dialogRef.close("status-changed");
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to change status. Please try again.";
        this.snackBar.open(msg, "OK", { duration: 4e3, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snack-warn"] });
        this.isActioning.set(false);
      }
    });
  }
  // ── Delete ───────────────────────────────────────────────────────
  requestDelete() {
    this.confirmDelete.set(true);
  }
  cancelDelete() {
    this.confirmDelete.set(false);
  }
  confirmDeleteAction() {
    if (this.isActioning())
      return;
    this.isActioning.set(true);
    this.contractService.deleteContract(this.contract.id).subscribe({
      next: () => {
        this.snackBar.open("Contract deleted.", "OK", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        this.dialogRef.close("deleted");
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to delete contract.";
        this.snackBar.open(msg, "OK", { duration: 4e3, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snack-warn"] });
        this.isActioning.set(false);
      }
    });
  }
  // ── PDF Download ─────────────────────────────────────────────────
  downloadPdf() {
    if (this.isActioning())
      return;
    this.isActioning.set(true);
    this.contractService.downloadPdf(this.contract.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `contract-${this.contract.workId || this.contract.id}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
        this.isActioning.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to download PDF.";
        this.snackBar.open(msg, "OK", { duration: 4e3, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snack-warn"] });
        this.isActioning.set(false);
      }
    });
  }
  // ── Helpers ──────────────────────────────────────────────────────
  closeDialog() {
    this.dialogRef.close(null);
  }
  downloadAttachment(url) {
    if (url)
      window.open(url, "_blank");
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2)
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
};
_ContractDetailsDialogeComponent.\u0275fac = function ContractDetailsDialogeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContractDetailsDialogeComponent)();
};
_ContractDetailsDialogeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractDetailsDialogeComponent, selectors: [["app-contract-details-dialoge"]], decls: 167, vars: 143, consts: [["optionsMenu", "matMenu"], [1, "cd-container"], [1, "cd-header"], [1, "cd-header__left"], [1, "cd-header__title"], [1, "cd-header__id"], [1, "cd-header__actions"], [1, "cd-header__icon-btn", 3, "matMenuTriggerFor"], [1, "cd-header__icon-btn", 3, "click"], [1, "cd-loading"], [1, "cd-body"], [1, "cd-person"], [1, "cd-person__avatar-wrap"], [1, "cd-person__avatar", 3, "src", "alt"], [1, "cd-person__avatar", "cd-person__avatar--initials"], [1, "cd-person__status-dot"], [1, "cd-person__info"], [1, "cd-person__name"], [1, "cd-person__role"], [1, "cd-person__avail"], [1, "cd-person__contact"], [1, "cd-person__contact-item"], [1, "cd-person__links"], [1, "cd-person__link-item"], [1, "cd-section"], [1, "cd-section__header", 3, "click"], [1, "cd-section__title"], [1, "cd-section__header-right"], [1, "cd-edit-btn", 3, "click"], [1, "cd-chevron"], [1, "cd-section__body"], [1, "cd-section__body", "cd-attachments"], [1, "cd-edit-btn", "cd-edit-btn--primary", 3, "click"], [1, "cd-confirm-delete"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", "", 1, "cd-menu-danger", 3, "click", "disabled"], ["diameter", "32"], [1, "cd-person__avail-dot"], [1, "cd-icon-xs"], [1, "cd-row"], [1, "cd-row__label"], [1, "cd-row__val"], [1, "cd-empty-msg"], [1, "cd-attachment"], [1, "cd-attachment__icon"], [1, "cd-attachment__info"], [1, "cd-attachment__name"], [1, "cd-attachment__meta"], [1, "cd-attachment__actions"], [1, "cd-attachment__btn", "cd-attachment__btn--delete"], [1, "cd-attachment__btn", "cd-attachment__btn--download", 3, "click"], [1, "cd-subsection-title"], [1, "cd-row__val", "cd-salary-val"], ["role", "img", 1, "cd-toggle"], [1, "cd-toggle__thumb"], [1, "cd-confirm-delete__icon"], [1, "cd-confirm-delete__actions"], [1, "cd-confirm-delete__btn", "cd-confirm-delete__btn--cancel", 3, "click", "disabled"], [1, "cd-confirm-delete__btn", "cd-confirm-delete__btn--confirm", 3, "click", "disabled"], ["diameter", "14"]], template: function ContractDetailsDialogeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 8);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(17, ContractDetailsDialogeComponent_Conditional_17_Template, 2, 0, "div", 9);
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "div", 12);
    \u0275\u0275conditionalCreate(21, ContractDetailsDialogeComponent_Conditional_21_Template, 1, 2, "img", 13)(22, ContractDetailsDialogeComponent_Conditional_22_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(23, ContractDetailsDialogeComponent_Conditional_23_Template, 1, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ContractDetailsDialogeComponent_Conditional_29_Template, 3, 1, "span", 19);
    \u0275\u0275elementStart(30, "div", 20);
    \u0275\u0275conditionalCreate(31, ContractDetailsDialogeComponent_Conditional_31_Template, 4, 1, "span", 21);
    \u0275\u0275conditionalCreate(32, ContractDetailsDialogeComponent_Conditional_32_Template, 4, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22);
    \u0275\u0275conditionalCreate(34, ContractDetailsDialogeComponent_Conditional_34_Template, 4, 1, "span", 23);
    \u0275\u0275conditionalCreate(35, ContractDetailsDialogeComponent_Conditional_35_Template, 4, 1, "span", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 24)(37, "button", 25);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("basic"));
    });
    \u0275\u0275elementStart(39, "span", 26);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 27)(43, "button", 28);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-icon", 29);
    \u0275\u0275text(50, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(51, ContractDetailsDialogeComponent_Conditional_51_Template, 37, 24, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 24)(53, "button", 25);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("authorized"));
    });
    \u0275\u0275elementStart(55, "span", 26);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 27)(59, "button", 28);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(61, "mat-icon");
    \u0275\u0275text(62, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-icon", 29);
    \u0275\u0275text(66, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(67, ContractDetailsDialogeComponent_Conditional_67_Template, 37, 24, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 24)(69, "button", 25);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("attachments"));
    });
    \u0275\u0275elementStart(71, "span", 26);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 27)(75, "button", 28);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(77, "mat-icon");
    \u0275\u0275text(78, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "mat-icon", 29);
    \u0275\u0275text(82, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(83, ContractDetailsDialogeComponent_Conditional_83_Template, 3, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 24)(85, "button", 25);
    \u0275\u0275pipe(86, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("employer"));
    });
    \u0275\u0275elementStart(87, "span", 26);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 27)(91, "button", 32);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_91_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(93, "mat-icon");
    \u0275\u0275text(94, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-icon", 29);
    \u0275\u0275text(98, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(99, ContractDetailsDialogeComponent_Conditional_99_Template, 31, 20, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 24)(101, "button", 25);
    \u0275\u0275pipe(102, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("worker"));
    });
    \u0275\u0275elementStart(103, "span", 26);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 27)(107, "button", 32);
    \u0275\u0275pipe(108, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_107_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(109, "mat-icon");
    \u0275\u0275text(110, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "mat-icon", 29);
    \u0275\u0275text(114, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(115, ContractDetailsDialogeComponent_Conditional_115_Template, 25, 16, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 24)(117, "button", 25);
    \u0275\u0275pipe(118, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("contracting"));
    });
    \u0275\u0275elementStart(119, "span", 26);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 27)(123, "button", 32);
    \u0275\u0275pipe(124, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_123_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(125, "mat-icon");
    \u0275\u0275text(126, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "mat-icon", 29);
    \u0275\u0275text(130, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(131, ContractDetailsDialogeComponent_Conditional_131_Template, 55, 36, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 24)(133, "button", 25);
    \u0275\u0275pipe(134, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_133_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggle("salary"));
    });
    \u0275\u0275elementStart(135, "span", 26);
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 27)(139, "button", 32);
    \u0275\u0275pipe(140, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_139_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(141, "mat-icon");
    \u0275\u0275text(142, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "mat-icon", 29);
    \u0275\u0275text(146, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(147, ContractDetailsDialogeComponent_Conditional_147_Template, 50, 39, "div", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(148, ContractDetailsDialogeComponent_Conditional_148_Template, 14, 12, "div", 33);
    \u0275\u0275elementStart(149, "mat-menu", null, 0);
    \u0275\u0275conditionalCreate(151, ContractDetailsDialogeComponent_Conditional_151_Template, 7, 7, "button", 34);
    \u0275\u0275conditionalCreate(152, ContractDetailsDialogeComponent_Conditional_152_Template, 7, 7, "button", 34);
    \u0275\u0275elementStart(153, "button", 35);
    \u0275\u0275pipe(154, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_153_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadPdf());
    });
    \u0275\u0275elementStart(155, "mat-icon");
    \u0275\u0275text(156, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "span");
    \u0275\u0275text(158);
    \u0275\u0275pipe(159, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "button", 36);
    \u0275\u0275pipe(161, "transloco");
    \u0275\u0275listener("click", function ContractDetailsDialogeComponent_Template_button_click_160_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.requestDelete());
    });
    \u0275\u0275elementStart(162, "mat-icon");
    \u0275\u0275text(163, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "span");
    \u0275\u0275text(165);
    \u0275\u0275pipe(166, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const optionsMenu_r8 = \u0275\u0275reference(150);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.contract.contractTitle || \u0275\u0275pipeBind1(5, 73, "contracts.details.fallbackTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.contract.workId);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", optionsMenu_r8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 75, "contracts.details.moreOptions"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 77, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.isLoading() ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.avatar) ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.availabilityStatus) ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.role);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.availabilityStatus) ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.contract.country == null ? null : ctx.contract.country.name) ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.phone) ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.email) ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.contract.empoleeOrContractor == null ? null : ctx.contract.empoleeOrContractor.github) ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 79, "contracts.details.toggleBasicInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 81, "contracts.details.sections.basic"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 83, "contracts.details.editBasicInfo"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 85, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.basicOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.basicOpen() ? 51 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(54, 87, "contracts.details.toggleAuthorized"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 89, "contracts.details.sections.authorized"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(60, 91, "contracts.details.editAuthorized"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 93, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.authorizedOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.authorizedOpen() ? 67 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(70, 95, "contracts.details.toggleAttachments"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 97, "contracts.details.sections.attachments"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(76, 99, "contracts.details.editAttachments"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 101, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.attachmentsOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.attachmentsOpen() ? 83 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 103, "contracts.details.toggleEmployerInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 105, "contracts.details.sections.employer"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(92, 107, "contracts.details.editEmployerInfo"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 109, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.employerOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.employerOpen() ? 99 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(102, 111, "contracts.details.toggleWorkerInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 113, "contracts.details.sections.worker"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(108, 115, "contracts.details.editWorkerInfo"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 117, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.workerOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.workerOpen() ? 115 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(118, 119, "contracts.details.toggleContracting"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 121, "contracts.details.sections.contracting"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(124, 123, "contracts.details.editContracting"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(128, 125, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.contractingOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.contractingOpen() ? 131 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(134, 127, "contracts.details.toggleWorkTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 129, "contracts.details.sections.salary"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(140, 131, "contracts.details.editWorkTime"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(144, 133, "contracts.details.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cd-chevron--open", ctx.salaryOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.salaryOpen() ? 147 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.confirmDelete() ? 148 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.canActivate() ? 151 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.canTerminate() ? 152 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isActioning());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(154, 135, "contracts.details.downloadContractPDF"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(159, 137, "contracts.details.menu.downloadPdf"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isActioning());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(161, 139, "contracts.details.deleteContract"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(166, 141, "contracts.details.menu.delete"));
  }
}, dependencies: [
  CommonModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.cd-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: var(--ui-bg);\n  overflow: hidden;\n}\n.cd-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-block-end: 1px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n  flex-shrink: 0;\n  gap: 12px;\n}\n.cd-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.cd-header__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cd-header__id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 4px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.cd-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.cd-header__icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.cd-header__icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  flex-shrink: 0;\n}\n.cd-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.cd-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.cd-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cd-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--ui-border);\n  border-radius: 3px;\n}\n.cd-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--ui-border-secondary);\n}\n.cd-person[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 20px;\n  border-block-end: 1px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n}\n.cd-person__avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.cd-person__avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--ui-border);\n}\n.cd-person__avatar--initials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-600);\n  font-size: 20px;\n  font-weight: 700;\n}\n.cd-person__status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-end: 2px;\n  inset-inline-end: 2px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  border: 2px solid var(--ui-bg-surface);\n}\n.cd-person__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cd-person__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.cd-person__role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.cd-person__avail[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--functional-success-600);\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  border-radius: 20px;\n  padding: 2px 8px;\n  width: fit-content;\n  margin-block: 2px;\n}\n.cd-person__avail-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  animation: _ngcontent-%COMP%_cd-pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_cd-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.cd-person__contact[_ngcontent-%COMP%], \n.cd-person__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n}\n.cd-person__contact-item[_ngcontent-%COMP%], \n.cd-person__link-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n}\n.cd-icon-xs[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: var(--ui-text-muted);\n}\n.cd-section[_ngcontent-%COMP%] {\n  border-block-end: 1px solid var(--ui-border);\n}\n.cd-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 20px;\n  background: var(--ui-bg);\n  border: none;\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.15s;\n}\n.cd-section__header[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.cd-section__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.cd-section__header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cd-edit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cd-edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n}\n.cd-edit-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-edit-btn--primary[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  border-color: var(--ui-border);\n}\n.cd-edit-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-chevron[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: var(--ui-text-muted);\n  transition: transform 0.2s ease;\n}\n.cd-chevron--open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.cd-section__body[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  padding: 4px 0 8px;\n}\n.cd-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-block-end: 1px solid var(--ui-bg-subtle);\n  gap: 12px;\n}\n.cd-row[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.cd-row__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  font-weight: 400;\n  min-width: 130px;\n  flex-shrink: 0;\n}\n.cd-row__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  font-weight: 500;\n  text-align: end;\n  word-break: break-word;\n}\n.cd-salary-val[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n  font-weight: 700;\n  font-size: 14px;\n}\n.cd-subsection-title[_ngcontent-%COMP%] {\n  padding: 10px 20px 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  background: var(--ui-bg-subtle);\n  border-block: 1px solid var(--ui-border);\n  margin-block: 8px 0;\n}\n.cd-attachments[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 20px !important;\n}\n.cd-attachment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  transition: border-color 0.15s;\n}\n.cd-attachment[_ngcontent-%COMP%]:hover {\n  border-color: var(--ui-border-secondary);\n}\n.cd-attachment__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 6px;\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cd-attachment__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.cd-attachment__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cd-attachment__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cd-attachment__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.cd-attachment__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.cd-attachment__btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.cd-attachment__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n}\n.cd-attachment__btn--delete[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.cd-attachment__btn--delete[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--functional-danger-600) 8%, transparent);\n}\n.cd-attachment__btn--download[_ngcontent-%COMP%] {\n  color: var(--ui-text-sub);\n}\n.cd-attachment__btn--download[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-empty-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  text-align: center;\n  padding: 16px 0;\n  margin: 0;\n}\n.cd-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: 36px;\n  height: 20px;\n  border-radius: 10px;\n  background: var(--ui-border);\n  padding: 2px;\n  transition: background 0.2s;\n  cursor: default;\n}\n.cd-toggle--on[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  justify-content: flex-end;\n}\n.cd-toggle__thumb[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--ui-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);\n}\n.cd-menu-danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600) !important;\n}\n@media (max-width: 600px) {\n  .cd-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .cd-person[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cd-section__header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .cd-row[_ngcontent-%COMP%] {\n    padding: 9px 16px;\n  }\n  .cd-row__label[_ngcontent-%COMP%] {\n    min-width: 110px;\n    font-size: 12px;\n  }\n  .cd-row__val[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.cd-confirm-delete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 12px 20px;\n  background: var(--functional-danger-50);\n  border-block-end: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.cd-confirm-delete__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.cd-confirm-delete__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-inline-start: auto;\n}\n.cd-confirm-delete__btn[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.15s;\n}\n.cd-confirm-delete__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cd-confirm-delete__btn--cancel[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.cd-confirm-delete__btn--confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--functional-danger-600);\n  color: var(--ui-bg-surface);\n}\n.cd-confirm-delete__btn--confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n/*# sourceMappingURL=contract-details-dialoge.css.map */"] });
var ContractDetailsDialogeComponent = _ContractDetailsDialogeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractDetailsDialogeComponent, [{
    type: Component,
    args: [{ selector: "app-contract-details-dialoge", standalone: true, imports: [
      CommonModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="cd-container">

  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cd-header">
    <div class="cd-header__left">
      <span class="cd-header__title">{{ contract.contractTitle || ('contracts.details.fallbackTitle' | transloco) }}</span>
      <span class="cd-header__id">{{ contract.workId }}</span>
    </div>
    <div class="cd-header__actions">
      <button class="cd-header__icon-btn" [matMenuTriggerFor]="optionsMenu" [attr.aria-label]="'contracts.details.moreOptions' | transloco">
        <mat-icon>more_horiz</mat-icon>
      </button>
      <button class="cd-header__icon-btn" (click)="closeDialog()" [attr.aria-label]="'common.close' | transloco">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 LOADING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="cd-loading">
      <mat-spinner diameter="32"></mat-spinner>
    </div>
  }

  <!-- \u2500\u2500 SCROLLABLE BODY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cd-body">

    <!-- Contractor card -->
    <div class="cd-person">
      <div class="cd-person__avatar-wrap">
        @if (contract.empoleeOrContractor?.avatar) {
          <img [src]="contract.empoleeOrContractor!.avatar"
               [alt]="contract.empoleeOrContractor!.name + ' avatar'"
               class="cd-person__avatar">
        } @else {
          <div class="cd-person__avatar cd-person__avatar--initials">
            {{ getInitials(contract.empoleeOrContractor?.name) }}
          </div>
        }
        @if (contract.empoleeOrContractor?.availabilityStatus) {
          <span class="cd-person__status-dot"></span>
        }
      </div>
      <div class="cd-person__info">
        <div class="cd-person__name">{{ contract.empoleeOrContractor?.name }}</div>
        <div class="cd-person__role">{{ contract.empoleeOrContractor?.role }}</div>
        @if (contract.empoleeOrContractor?.availabilityStatus) {
          <span class="cd-person__avail">
            <span class="cd-person__avail-dot"></span>
            {{ contract.empoleeOrContractor!.availabilityStatus }}
          </span>
        }
        <div class="cd-person__contact">
          @if (contract.country?.name) {
            <span class="cd-person__contact-item">
              <mat-icon class="cd-icon-xs">location_on</mat-icon>
              {{ contract.country!.name }}
            </span>
          }
          @if (contract.empoleeOrContractor?.phone) {
            <span class="cd-person__contact-item">
              <mat-icon class="cd-icon-xs">phone</mat-icon>
              {{ contract.empoleeOrContractor!.phone }}
            </span>
          }
        </div>
        <div class="cd-person__links">
          @if (contract.empoleeOrContractor?.email) {
            <span class="cd-person__link-item">
              <mat-icon class="cd-icon-xs">email</mat-icon>
              {{ contract.empoleeOrContractor!.email }}
            </span>
          }
          @if (contract.empoleeOrContractor?.github) {
            <span class="cd-person__link-item">
              <mat-icon class="cd-icon-xs">code</mat-icon>
              {{ contract.empoleeOrContractor!.github }}
            </span>
          }
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Basic Information \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('basic')" [attr.aria-label]="'contracts.details.toggleBasicInfo' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.basic' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editBasicInfo' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="basicOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (basicOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.companyName' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.name || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.lastName' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.lastName || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.country' | transloco }}</span><span class="cd-row__val">{{ contract.country?.name || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.postCode' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.postCode || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.taxDescription' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.taxId || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.linkedIn' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.linkedin || '\u2014' }}</span></div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Authorized \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('authorized')" [attr.aria-label]="'contracts.details.toggleAuthorized' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.authorized' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editAuthorized' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="authorizedOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (authorizedOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.firstName' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.authorizedFirstName || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.lastName' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.authorizedLastName || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.authorizedId' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.authorizedId || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.city' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.city || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.email' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.email || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.address' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.address || '\u2014' }}</span></div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Attachments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('attachments')" [attr.aria-label]="'contracts.details.toggleAttachments' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.attachments' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editAttachments' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="attachmentsOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (attachmentsOpen()) {
        <div class="cd-section__body cd-attachments">
          @if (contract.attachments?.length) {
            @for (att of contract.attachments; track att.name) {
              <div class="cd-attachment">
                <div class="cd-attachment__icon"><mat-icon>description</mat-icon></div>
                <div class="cd-attachment__info">
                  <span class="cd-attachment__name">{{ att.name }}</span>
                  @if (att.uploadedAt || att.size) {
                    <span class="cd-attachment__meta">
                      {{ att.uploadedAt ? ('contracts.details.uploadedOn' | transloco) + att.uploadedAt : '' }}
                      {{ att.size ? ' \xB7 ' + att.size : '' }}
                    </span>
                  }
                </div>
                <div class="cd-attachment__actions">
                  <button class="cd-attachment__btn cd-attachment__btn--delete" [attr.aria-label]="'contracts.details.deleteAttachment' | transloco">
                    <mat-icon>delete_outline</mat-icon>
                  </button>
                  <button class="cd-attachment__btn cd-attachment__btn--download"
                          (click)="downloadAttachment(att.url)"
                          [attr.aria-label]="'contracts.details.downloadAttachment' | transloco">
                    <mat-icon>download</mat-icon>
                  </button>
                </div>
              </div>
            }
          } @else {
            <p class="cd-empty-msg">{{ 'contracts.details.noAttachments' | transloco }}</p>
          }
        </div>
      }
    </div>

    <!-- \u2500\u2500 Employer Information \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('employer')" [attr.aria-label]="'contracts.details.toggleEmployerInfo' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.employer' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn cd-edit-btn--primary" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editEmployerInfo' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="employerOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (employerOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.entityName' | transloco }}</span><span class="cd-row__val">{{ contract.employer?.entityName || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.officialNumber' | transloco }}</span><span class="cd-row__val">{{ contract.employer?.officialNumber || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.phoneNumber' | transloco }}</span><span class="cd-row__val">{{ contract.employer?.phone || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.emailAddress' | transloco }}</span><span class="cd-row__val">{{ contract.employer?.email || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.address' | transloco }}</span><span class="cd-row__val">{{ contract.employer?.address || '\u2014' }}</span></div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Worker Information \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('worker')" [attr.aria-label]="'contracts.details.toggleWorkerInfo' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.worker' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn cd-edit-btn--primary" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editWorkerInfo' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="workerOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (workerOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.name' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.name || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.role' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.role || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.email' | transloco }}</span><span class="cd-row__val">{{ contract.empoleeOrContractor?.email || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.country' | transloco }}</span><span class="cd-row__val">{{ contract.country?.name || '\u2014' }}</span></div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Contracting \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('contracting')" [attr.aria-label]="'contracts.details.toggleContracting' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.contracting' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn cd-edit-btn--primary" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editContracting' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="contractingOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (contractingOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.startDate' | transloco }}</span><span class="cd-row__val">{{ contract.startDate || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.endDate' | transloco }}</span><span class="cd-row__val">{{ contract.endDate || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.contractDuration' | transloco }}</span><span class="cd-row__val">{{ contract.contractDuration || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.trialPeriod' | transloco }}</span><span class="cd-row__val">{{ contract.trialPeriod || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.typeOfWork' | transloco }}</span><span class="cd-row__val">{{ contract.typeOfWork || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.vacationDays' | transloco }}</span><span class="cd-row__val">{{ contract.vacationDays ?? '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.terminateDuringTrial' | transloco }}</span><span class="cd-row__val">{{ contract.terminateDuringTrial || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.terminateContract' | transloco }}</span><span class="cd-row__val">{{ contract.terminateContract || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.noticePeriod' | transloco }}</span><span class="cd-row__val">{{ contract.noticePeriod || '\u2014' }}</span></div>
        </div>
      }
    </div>

    <!-- \u2500\u2500 Working Time & Salaries \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cd-section">
      <button class="cd-section__header" (click)="toggle('salary')" [attr.aria-label]="'contracts.details.toggleWorkTime' | transloco">
        <span class="cd-section__title">{{ 'contracts.details.sections.salary' | transloco }}</span>
        <div class="cd-section__header-right">
          <button class="cd-edit-btn cd-edit-btn--primary" (click)="$event.stopPropagation()" [attr.aria-label]="'contracts.details.editWorkTime' | transloco">
            <mat-icon>edit</mat-icon> {{ 'contracts.details.edit' | transloco }}
          </button>
          <mat-icon class="cd-chevron" [class.cd-chevron--open]="salaryOpen()">expand_more</mat-icon>
        </div>
      </button>
      @if (salaryOpen()) {
        <div class="cd-section__body">
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.workingHoursPerDay' | transloco }}</span><span class="cd-row__val">{{ contract.numberOfWorkingHours ? contract.numberOfWorkingHours + ' ' + ('contracts.details.units.hours' | transloco) : '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.workingDays' | transloco }}</span><span class="cd-row__val">{{ contract.workingDays ? contract.workingDays + ' ' + ('contracts.details.units.days' | transloco) : '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.totalWorkingHours' | transloco }}</span><span class="cd-row__val">{{ contract.workingHours ? contract.workingHours + ' ' + ('contracts.details.units.hours' | transloco) : '\u2014' }}</span></div>

          <!-- Salaries and Other Benefit sub-section -->
          <div class="cd-subsection-title">{{ 'contracts.details.salariesSubsection' | transloco }}</div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.salary' | transloco }}</span><span class="cd-row__val cd-salary-val">{{ contract.salary ? ('$ ' + contract.salary + ' ' + (contract.currency || '')) : '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.currency' | transloco }}</span><span class="cd-row__val">{{ contract.currency || '\u2014' }}</span></div>
          <div class="cd-row"><span class="cd-row__label">{{ 'contracts.details.fields.billingCycle' | transloco }}</span><span class="cd-row__val">{{ contract.billingCycle || '\u2014' }}</span></div>
          <div class="cd-row">
            <span class="cd-row__label">{{ 'contracts.details.fields.includeAllowances' | transloco }}</span>
            <span class="cd-row__val">
              <span class="cd-toggle" [class.cd-toggle--on]="contract.includeAllowances" role="img" [attr.aria-label]="contract.includeAllowances ? 'On' : 'Off'">
                <span class="cd-toggle__thumb"></span>
              </span>
            </span>
          </div>
        </div>
      }
    </div>

  </div><!-- /cd-body -->

</div>

<!-- Options menu -->
<!-- \u2500\u2500 Confirm delete banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (confirmDelete()) {
  <div class="cd-confirm-delete">
    <mat-icon class="cd-confirm-delete__icon">warning</mat-icon>
    <span>{{ 'contracts.details.confirmDelete.message' | transloco }}</span>
    <div class="cd-confirm-delete__actions">
      <button class="cd-confirm-delete__btn cd-confirm-delete__btn--cancel"
              (click)="cancelDelete()" [disabled]="isActioning()">
        {{ 'contracts.details.confirmDelete.cancel' | transloco }}
      </button>
      <button class="cd-confirm-delete__btn cd-confirm-delete__btn--confirm"
              (click)="confirmDeleteAction()" [disabled]="isActioning()">
        @if (isActioning()) { <mat-spinner diameter="14"></mat-spinner> }
        {{ 'contracts.details.confirmDelete.confirm' | transloco }}
      </button>
    </div>
  </div>
}

<mat-menu #optionsMenu="matMenu">
  @if (canActivate()) {
    <button mat-menu-item (click)="changeStatus(ContractStatus.Reviewed)"
            [disabled]="isActioning()" [attr.aria-label]="'contracts.details.markContractReviewed' | transloco">
      <mat-icon>check_circle</mat-icon>
      <span>{{ 'contracts.details.menu.markReviewed' | transloco }}</span>
    </button>
  }
  @if (canTerminate()) {
    <button mat-menu-item (click)="changeStatus(ContractStatus.Approved)"
            [disabled]="isActioning()" [attr.aria-label]="'contracts.details.approveContract' | transloco">
      <mat-icon>verified</mat-icon>
      <span>{{ 'contracts.details.menu.approve' | transloco }}</span>
    </button>
  }
  <button mat-menu-item (click)="downloadPdf()"
          [disabled]="isActioning()" [attr.aria-label]="'contracts.details.downloadContractPDF' | transloco">
    <mat-icon>picture_as_pdf</mat-icon>
    <span>{{ 'contracts.details.menu.downloadPdf' | transloco }}</span>
  </button>
  <button mat-menu-item (click)="requestDelete()"
          [disabled]="isActioning()" class="cd-menu-danger" [attr.aria-label]="'contracts.details.deleteContract' | transloco">
    <mat-icon>delete_outline</mat-icon>
    <span>{{ 'contracts.details.menu.delete' | transloco }}</span>
  </button>
</mat-menu>
`, styles: ["/* src/components/DashboardLayout/Contract/contract-details-dialoge/contract-details-dialoge.css */\n.cd-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: var(--ui-bg);\n  overflow: hidden;\n}\n.cd-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-block-end: 1px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n  flex-shrink: 0;\n  gap: 12px;\n}\n.cd-header__left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.cd-header__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cd-header__id {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 4px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.cd-header__actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.cd-header__icon-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.cd-header__icon-btn:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  flex-shrink: 0;\n}\n.cd-body {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.cd-body::-webkit-scrollbar {\n  width: 5px;\n}\n.cd-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cd-body::-webkit-scrollbar-thumb {\n  background: var(--ui-border);\n  border-radius: 3px;\n}\n.cd-body::-webkit-scrollbar-thumb:hover {\n  background: var(--ui-border-secondary);\n}\n.cd-person {\n  display: flex;\n  gap: 14px;\n  padding: 20px;\n  border-block-end: 1px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n}\n.cd-person__avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.cd-person__avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--ui-border);\n}\n.cd-person__avatar--initials {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-600);\n  font-size: 20px;\n  font-weight: 700;\n}\n.cd-person__status-dot {\n  position: absolute;\n  inset-block-end: 2px;\n  inset-inline-end: 2px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  border: 2px solid var(--ui-bg-surface);\n}\n.cd-person__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cd-person__name {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.cd-person__role {\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.cd-person__avail {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--functional-success-600);\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  border-radius: 20px;\n  padding: 2px 8px;\n  width: fit-content;\n  margin-block: 2px;\n}\n.cd-person__avail-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  animation: cd-pulse 2s infinite;\n}\n@keyframes cd-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.cd-person__contact,\n.cd-person__links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n}\n.cd-person__contact-item,\n.cd-person__link-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n}\n.cd-icon-xs {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  color: var(--ui-text-muted);\n}\n.cd-section {\n  border-block-end: 1px solid var(--ui-border);\n}\n.cd-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 20px;\n  background: var(--ui-bg);\n  border: none;\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.15s;\n}\n.cd-section__header:hover {\n  background: var(--ui-bg-subtle);\n}\n.cd-section__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n}\n.cd-section__header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cd-edit-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cd-edit-btn mat-icon {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n}\n.cd-edit-btn:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-edit-btn--primary {\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  border-color: var(--ui-border);\n}\n.cd-edit-btn--primary:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-chevron {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: var(--ui-text-muted);\n  transition: transform 0.2s ease;\n}\n.cd-chevron--open {\n  transform: rotate(180deg);\n}\n.cd-section__body {\n  background: var(--ui-bg-surface);\n  padding: 4px 0 8px;\n}\n.cd-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-block-end: 1px solid var(--ui-bg-subtle);\n  gap: 12px;\n}\n.cd-row:last-child {\n  border-block-end: none;\n}\n.cd-row__label {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  font-weight: 400;\n  min-width: 130px;\n  flex-shrink: 0;\n}\n.cd-row__val {\n  font-size: 13px;\n  color: var(--ui-text-main);\n  font-weight: 500;\n  text-align: end;\n  word-break: break-word;\n}\n.cd-salary-val {\n  color: var(--brand-primary-600);\n  font-weight: 700;\n  font-size: 14px;\n}\n.cd-subsection-title {\n  padding: 10px 20px 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  background: var(--ui-bg-subtle);\n  border-block: 1px solid var(--ui-border);\n  margin-block: 8px 0;\n}\n.cd-attachments {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 20px !important;\n}\n.cd-attachment {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  transition: border-color 0.15s;\n}\n.cd-attachment:hover {\n  border-color: var(--ui-border-secondary);\n}\n.cd-attachment__icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 6px;\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cd-attachment__icon mat-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.cd-attachment__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cd-attachment__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cd-attachment__meta {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.cd-attachment__actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.cd-attachment__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.cd-attachment__btn mat-icon {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n}\n.cd-attachment__btn--delete {\n  color: var(--functional-danger-600);\n}\n.cd-attachment__btn--delete:hover {\n  background: color-mix(in srgb, var(--functional-danger-600) 8%, transparent);\n}\n.cd-attachment__btn--download {\n  color: var(--ui-text-sub);\n}\n.cd-attachment__btn--download:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.cd-empty-msg {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  text-align: center;\n  padding: 16px 0;\n  margin: 0;\n}\n.cd-toggle {\n  display: inline-flex;\n  align-items: center;\n  width: 36px;\n  height: 20px;\n  border-radius: 10px;\n  background: var(--ui-border);\n  padding: 2px;\n  transition: background 0.2s;\n  cursor: default;\n}\n.cd-toggle--on {\n  background: var(--brand-primary-500);\n  justify-content: flex-end;\n}\n.cd-toggle__thumb {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--ui-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);\n}\n.cd-menu-danger {\n  color: var(--functional-danger-600) !important;\n}\n@media (max-width: 600px) {\n  .cd-header {\n    padding: 12px 16px;\n  }\n  .cd-person {\n    padding: 16px;\n  }\n  .cd-section__header {\n    padding: 12px 16px;\n  }\n  .cd-row {\n    padding: 9px 16px;\n  }\n  .cd-row__label {\n    min-width: 110px;\n    font-size: 12px;\n  }\n  .cd-row__val {\n    font-size: 12px;\n  }\n}\n.cd-confirm-delete {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 12px 20px;\n  background: var(--functional-danger-50);\n  border-block-end: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n  font-size: 13px;\n}\n.cd-confirm-delete__icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.cd-confirm-delete__actions {\n  display: flex;\n  gap: 8px;\n  margin-inline-start: auto;\n}\n.cd-confirm-delete__btn {\n  padding: 5px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.15s;\n}\n.cd-confirm-delete__btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cd-confirm-delete__btn--cancel {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.cd-confirm-delete__btn--confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--functional-danger-600);\n  color: var(--ui-bg-surface);\n}\n.cd-confirm-delete__btn--confirm:hover:not(:disabled) {\n  opacity: 0.88;\n}\n/*# sourceMappingURL=contract-details-dialoge.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractDetailsDialogeComponent, { className: "ContractDetailsDialogeComponent", filePath: "src/components/dashboardlayout/contract/contract-details-dialoge/contract-details-dialoge.ts", lineNumber: 29 });
})();

// src/components/DashboardLayout/Contract/contract-list/contract-list.ts
var _c0 = () => ["/dashboard", "typepeople"];
var _c1 = (a0) => ({ id: a0 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ContractListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 13);
    \u0275\u0275element(3, "path", 16)(4, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "contracts.list.newContractAriaLabel"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "contracts.list.newContract"), " ");
  }
}
function ContractListComponent_Conditional_38_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "contracts.list.loading"));
  }
}
function ContractListComponent_Conditional_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "contracts.empty.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "contracts.empty.subtitle"));
  }
}
function ContractListComponent_Conditional_38_Conditional_2_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contract_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r1.workId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((contract_r1.empoleeOrContractor == null ? null : contract_r1.empoleeOrContractor.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((contract_r1.country == null ? null : contract_r1.country.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r1.startDate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r1.endDate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r1.contractType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((contract_r1.manager == null ? null : contract_r1.manager.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r1.createdTime || "\u2014");
  }
}
function ContractListComponent_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 24);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr")(5, "th", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 25);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 25);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 25);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, ContractListComponent_Conditional_38_Conditional_2_For_31_Template, 17, 8, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 9, "contracts.list.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "contracts.table.workId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "contracts.table.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "contracts.table.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "contracts.table.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "contracts.table.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "contracts.table.contractType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 23, "contracts.table.manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 25, "contracts.table.createdAt"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filteredContracts);
  }
}
function ContractListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContractListComponent_Conditional_38_Conditional_0_Template, 5, 3, "div", 18)(1, ContractListComponent_Conditional_38_Conditional_1_Template, 7, 6, "div", 19)(2, ContractListComponent_Conditional_38_Conditional_2_Template, 32, 27, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 0 : ctx_r1.filteredContracts.length === 0 ? 1 : 2);
  }
}
function ContractListComponent_Conditional_39_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    \u0275\u0275property("value", country_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(country_r4.name);
  }
}
function ContractListComponent_Conditional_39_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, type_r5.labelKey));
  }
}
function ContractListComponent_Conditional_39_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    \u0275\u0275property("value", status_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, status_r6.labelKey));
  }
}
function ContractListComponent_Conditional_39_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllFilters());
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
function ContractListComponent_Conditional_39_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "contracts.list.loading"));
  }
}
function ContractListComponent_Conditional_39_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon", 44);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_36_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadContracts());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "common.error"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "contracts.list.loadError"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "common.retry"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const contract_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", contract_r12.country.flag, \u0275\u0275sanitizeUrl)("alt", contract_r12.country.name + " flag");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 84);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "contracts.actions.delete"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "p", 80);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 81)(5, "button", 82);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.cancelQuickDelete($event));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 83);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const contract_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmQuickDelete(contract_r12, $event));
    });
    \u0275\u0275conditionalCreate(9, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Conditional_9_Template, 1, 0, "span", 84)(10, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Conditional_10_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "contracts.actions.deleteConfirm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDeleting() ? 9 : 10);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const contract_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editContract(contract_r12, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 85);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_2_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const contract_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.quickDownloadPdf(contract_r12, $event));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 86);
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_2_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r15);
      const contract_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.requestQuickDelete(contract_r12.id, $event));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "contracts.actions.edit"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "contracts.actions.downloadPdf"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "contracts.actions.delete"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(1, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_1_Template, 11, 8, "div", 79)(2, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Conditional_2_Template, 10, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contract_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deleteConfirmId() === contract_r12.id ? 1 : 2);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 77)(1, "td", 88)(2, "div", 89)(3, "dl", 90)(4, "div")(5, "dt");
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
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(44, "dd");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const contract_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "contracts.table.workId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.workId || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "contracts.table.contractType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.contractType || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "contracts.table.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.startDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 20, "contracts.table.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.endDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 22, "contracts.table.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((contract_r12.country == null ? null : contract_r12.country.name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 24, "contracts.table.manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((contract_r12.manager == null ? null : contract_r12.manager.name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 26, "contracts.table.createdAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.createdTime || "-");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 58);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_input_ngModelChange_2_listener($event) {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(contract_r12.isSelected, $event) || (contract_r12.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_input_change_2_listener() {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onContractSelected(contract_r12));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "button", 59);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_button_click_5_listener() {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(contract_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 60);
    \u0275\u0275element(7, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "td", 62);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_td_click_8_listener() {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openContractDetails(contract_r12));
    })("keydown.enter", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_td_keydown_enter_8_listener() {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openContractDetails(contract_r12));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 63)(12, "div", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "div", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 66);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "td")(20, "div", 67);
    \u0275\u0275conditionalCreate(21, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_21_Template, 1, 2, "img", 68);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "span", 69);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td")(32, "div", 70)(33, "div", 64);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "div", 65);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 66);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 71)(43, "button", 72);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template_button_click_43_listener($event) {
      const contract_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(contract_r12.id, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 13);
    \u0275\u0275element(46, "circle", 73)(47, "circle", 74)(48, "circle", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_49_Template, 3, 1, "div", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Conditional_50_Template, 46, 28, "tr", 77);
  }
  if (rf & 2) {
    const contract_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", contract_r12.isSelected);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 27, "contracts.table.selectContract"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === contract_r12.id)("aria-label", ctx_r1.expandedRowId === contract_r12.id ? "Collapse row" : "Expand row");
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === contract_r12.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", contract_r12.workId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getAvatarColorClass((contract_r12.empoleeOrContractor == null ? null : contract_r12.empoleeOrContractor.name) ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((contract_r12.empoleeOrContractor == null ? null : contract_r12.empoleeOrContractor.name) ?? ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.empoleeOrContractor == null ? null : contract_r12.empoleeOrContractor.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.empoleeOrContractor == null ? null : contract_r12.empoleeOrContractor.role);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((contract_r12.country == null ? null : contract_r12.country.flag) ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.country == null ? null : contract_r12.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("milestone", contract_r12.contractType === "Milestone");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contract_r12.contractType, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getAvatarColorClass((contract_r12.manager == null ? null : contract_r12.manager.name) ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((contract_r12.manager == null ? null : contract_r12.manager.name) ?? ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r12.manager == null ? null : contract_r12.manager.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.manager == null ? null : contract_r12.manager.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contract_r12.createdTime);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(44, 29, "contracts.table.actionsFor", \u0275\u0275pureFunction1(32, _c1, contract_r12.workId)))("aria-expanded", ctx_r1.activeMenuId() === contract_r12.id);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.activeMenuId() === contract_r12.id ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedRowId === contract_r12.id ? 50 : -1);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 55);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "thead")(4, "tr")(5, "th", 25)(6, "input", 56);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("change", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onSelectAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "th", 57);
    \u0275\u0275elementStart(9, "th", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 25);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 25);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 25);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 25);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 25);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "th", 25);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275repeaterCreate(36, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_For_37_Template, 51, 34, null, null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 11, "contracts.list.title"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 13, "contracts.table.selectAll"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "contracts.table.workId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "contracts.table.employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "contracts.table.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "contracts.table.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, "contracts.table.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 25, "contracts.table.contractType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "contracts.table.manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "contracts.table.createdAt"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 31, "contracts.table.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filteredContracts);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "dl", 90)(2, "div")(3, "dt");
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
    const contract_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "contracts.table.manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((contract_r17.manager == null ? null : contract_r17.manager.name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "contracts.table.createdAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r17.createdTime || "-");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 91)(1, "header", 92)(2, "div", 63)(3, "div", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Template_button_click_10_listener() {
      const contract_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(contract_r17.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 60);
    \u0275\u0275element(12, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "dl", 93)(14, "div")(15, "dt");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd")(19, "span", 69);
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
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(39, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Conditional_39_Template, 14, 8, "div", 89);
    \u0275\u0275elementStart(40, "footer", 94)(41, "button", 95);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Template_button_click_41_listener() {
      const contract_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openContractDetails(contract_r17));
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const contract_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getAvatarColorClass((contract_r17.empoleeOrContractor == null ? null : contract_r17.empoleeOrContractor.name) ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((contract_r17.empoleeOrContractor == null ? null : contract_r17.empoleeOrContractor.name) ?? ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((contract_r17.empoleeOrContractor == null ? null : contract_r17.empoleeOrContractor.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", contract_r17.workId);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.expandedRowId === contract_r17.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.expandedRowId === contract_r17.id ? "rotate(90deg)" : "rotate(0)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "contracts.table.contractType"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("milestone", contract_r17.contractType === "Milestone");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contract_r17.contractType, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "contracts.table.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((contract_r17.country == null ? null : contract_r17.country.name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 23, "contracts.table.startDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r17.startDate || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 25, "contracts.table.endDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contract_r17.endDate || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedRowId === contract_r17.id ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 27, "contracts.actions.view"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275repeaterCreate(1, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_For_2_Template, 44, 29, "article", 91, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredContracts);
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_For_19_Template_button_click_0_listener() {
      const page_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r19));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.paginationInfo.currentPage === page_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r19, " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_0_Template, 38, 33, "div", 46);
    \u0275\u0275conditionalCreate(1, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Conditional_1_Template, 3, 0, "div", 47);
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "label", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 51);
    \u0275\u0275listener("change", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onItemsPerPageChange($event));
    });
    \u0275\u0275elementStart(8, "option", 34);
    \u0275\u0275text(9, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 34);
    \u0275\u0275text(11, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 34);
    \u0275\u0275text(13, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 52)(15, "button", 53);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.paginationInfo.currentPage - 1));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_For_19_Template, 2, 3, "button", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(20, "button", 53);
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.paginationInfo.currentPage + 1));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.viewMode === "table" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode === "cards" ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "contracts.pagination.itemsPerPage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.paginationInfo.itemsPerPage);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.paginationInfo.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "contracts.pagination.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pagesArray);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.paginationInfo.currentPage === ctx_r1.paginationInfo.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "contracts.pagination.next"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 97);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "contracts.empty.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "contracts.empty.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "contracts.list.newContract"), " ");
  }
}
function ContractListComponent_Conditional_39_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContractListComponent_Conditional_39_Conditional_37_Conditional_0_Template, 23, 17)(1, ContractListComponent_Conditional_39_Conditional_37_Conditional_1_Template, 10, 11, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.filteredContracts.length > 0 ? 0 : 1);
  }
}
function ContractListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 13);
    \u0275\u0275element(3, "path", 28)(4, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "input", 30);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ContractListComponent_Conditional_39_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractListComponent_Conditional_39_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onServerFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "select", 33);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countryFilter, $event) || (ctx_r1.countryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onServerFilterChange());
    });
    \u0275\u0275repeaterCreate(12, ContractListComponent_Conditional_39_For_13_Template, 2, 2, "option", 34, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "select", 33);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contractTypeFilter, $event) || (ctx_r1.contractTypeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onServerFilterChange());
    });
    \u0275\u0275repeaterCreate(17, ContractListComponent_Conditional_39_For_18_Template, 3, 4, "option", 34, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 32)(20, "select", 33);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workStatusFilter, $event) || (ctx_r1.workStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractListComponent_Conditional_39_Template_select_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onServerFilterChange());
    });
    \u0275\u0275repeaterCreate(22, ContractListComponent_Conditional_39_For_23_Template, 3, 4, "option", 34, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 35);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementStart(26, "button", 36);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setView("table"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 37);
    \u0275\u0275element(29, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "button", 39);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275listener("click", function ContractListComponent_Conditional_39_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setView("cards"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 37);
    \u0275\u0275element(33, "path", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, ContractListComponent_Conditional_39_Conditional_34_Template, 4, 6, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, ContractListComponent_Conditional_39_Conditional_35_Template, 5, 3, "div", 18);
    \u0275\u0275conditionalCreate(36, ContractListComponent_Conditional_39_Conditional_36_Template, 12, 9, "div", 42);
    \u0275\u0275conditionalCreate(37, ContractListComponent_Conditional_39_Conditional_37_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 20, "contracts.filters.searchPlaceholder"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 22, "contracts.filters.searchPlaceholder"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countryFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 24, "contracts.filters.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contractTypeFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 26, "contracts.filters.contractType"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.contractTypes);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workStatusFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 28, "contracts.filters.status"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.workStatuses);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 30, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx_r1.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(27, 32, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx_r1.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(31, 34, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.hasActiveFilters() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoading() && ctx_r1.hasError() ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoading() && !ctx_r1.hasError() ? 37 : -1);
  }
}
var _ContractListComponent = class _ContractListComponent {
  constructor() {
    this.originalContracts = [];
    this.filteredContracts = [];
    this.paginationInfo = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 0
    };
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : []);
    this.hasError = signal(false, ...ngDevMode ? [{ debugName: "hasError" }] : []);
    this.activeMenuId = signal(null, ...ngDevMode ? [{ debugName: "activeMenuId" }] : []);
    this.deleteConfirmId = signal(null, ...ngDevMode ? [{ debugName: "deleteConfirmId" }] : []);
    this.viewMode = "table";
    this.reportMode = false;
    this.expandedRowId = null;
    this.selectedTab = "All";
    this.countryFilter = "";
    this.contractTypeFilter = "";
    this.workStatusFilter = "";
    this.searchQuery = "";
    this.countries = [{ value: "", name: "All" }];
    this.contractTypes = [
      { value: "", labelKey: "contracts.filters.all" },
      { value: "EmployeeContract", labelKey: "contracts.types.employeeContract" },
      { value: "FixedPayContract", labelKey: "contracts.types.fixedPayContract" },
      { value: "PerTaskContract", labelKey: "contracts.types.perTaskContract" },
      { value: "PerProjectContract", labelKey: "contracts.types.perProjectContract" }
    ];
    this.workStatuses = [
      { value: "", labelKey: "contracts.filters.all" },
      { value: "Initiated", labelKey: "contracts.status.initiated" },
      { value: "Reviewed", labelKey: "contracts.status.reviewed" },
      { value: "Approved", labelKey: "contracts.status.approved" },
      { value: "Canceled", labelKey: "contracts.status.canceled" }
    ];
    this.avatarColors = [
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5",
      "color-6"
    ];
    this.contractService = inject(ContractService);
    this.lookupService = inject(LookupService);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.cdr = inject(ChangeDetectorRef);
  }
  setView(mode) {
    this.viewMode = mode;
  }
  toggleReport() {
    this.reportMode = !this.reportMode;
    if (this.reportMode) {
      this.expandedRowId = null;
      this.activeMenuId.set(null);
      this.deleteConfirmId.set(null);
    }
  }
  toggleExpand(id) {
    if (this.reportMode)
      return;
    this.expandedRowId = this.expandedRowId === id ? null : id;
  }
  // ── Lifecycle ─────────────────────────────────────────────────────
  ngOnInit() {
    this.loadContracts();
    this.loadLookups();
  }
  onDocumentClick() {
    this.activeMenuId.set(null);
    this.deleteConfirmId.set(null);
  }
  // ── Data loading ──────────────────────────────────────────────────
  loadLookups() {
    this.lookupService.getCountries().subscribe({
      next: (items) => {
        this.countries = [
          { value: "", name: "All" },
          ...items.map((c) => ({ value: c.name, name: c.name }))
        ];
      },
      error: () => {
      }
    });
  }
  loadContracts() {
    this.isLoading.set(true);
    this.hasError.set(false);
    const filters = {
      country: this.countryFilter || void 0,
      contractType: this.contractTypeFilter || void 0,
      status: this.workStatusFilter || void 0,
      search: this.searchQuery || void 0
    };
    this.contractService.getContracts(this.paginationInfo.currentPage, this.paginationInfo.itemsPerPage, filters).subscribe({
      next: (response) => {
        this.originalContracts = response.data;
        this.paginationInfo = response.pagination;
        this.applyFilters();
        this.isLoading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading.set(false);
        this.hasError.set(true);
        this.cdr.markForCheck();
      }
    });
  }
  // ── Filtering (client-side tab + recompute filteredContracts) ─────
  // Status mapping: "Draft" tab -> backend ContractStatusEnum.Initiated (id 1).
  // Type mapping:   "Employees" tab -> contractType === 'EmployeeContract'.
  //                 "Contractors" tab -> all OTHER contract types.
  applyFilters() {
    switch (this.selectedTab) {
      case "Employees":
        this.filteredContracts = this.originalContracts.filter((c) => c.contractType === "EmployeeContract");
        break;
      case "Contractors":
        this.filteredContracts = this.originalContracts.filter((c) => !!c.contractType && c.contractType !== "EmployeeContract");
        break;
      case "Draft":
        this.filteredContracts = this.originalContracts.filter((c) => c.statusId === ContractStatus.Initiated);
        break;
      case "All":
      default:
        this.filteredContracts = [...this.originalContracts];
    }
  }
  selectTab(tab) {
    this.selectedTab = tab;
    this.expandedRowId = null;
    this.applyFilters();
    this.cdr.markForCheck();
  }
  /** Server-side filter change (search/dropdowns) — re-fetch the first page. */
  onServerFilterChange() {
    this.paginationInfo.currentPage = 1;
    this.loadContracts();
  }
  hasActiveFilters() {
    return !!this.countryFilter || !!this.contractTypeFilter || !!this.workStatusFilter || !!this.searchQuery || this.selectedTab !== "All";
  }
  clearAllFilters() {
    this.countryFilter = "";
    this.contractTypeFilter = "";
    this.workStatusFilter = "";
    this.searchQuery = "";
    this.selectedTab = "All";
    this.paginationInfo.currentPage = 1;
    this.loadContracts();
  }
  // ── Pagination ────────────────────────────────────────────────────
  onPageChange(newPage) {
    this.paginationInfo.currentPage = newPage;
    this.loadContracts();
  }
  onItemsPerPageChange(event) {
    const el = event.target;
    this.paginationInfo.itemsPerPage = parseInt(el.value, 10);
    this.paginationInfo.currentPage = 1;
    this.loadContracts();
  }
  // ── Selection ─────────────────────────────────────────────────────
  onSelectAll(event) {
    const checked = event.target.checked;
    this.originalContracts = this.originalContracts.map((c) => __spreadProps(__spreadValues({}, c), { isSelected: checked }));
    this.applyFilters();
  }
  onContractSelected(contract) {
    const idx = this.originalContracts.findIndex((c) => c.workId === contract.workId);
    if (idx !== -1)
      this.originalContracts[idx] = contract;
  }
  // ── Detail dialog ─────────────────────────────────────────────────
  openContractDetails(contract) {
    if (this.reportMode)
      return;
    const ref = this.dialog.open(ContractDetailsDialogeComponent, {
      data: contract,
      width: "500px",
      height: "100vh",
      position: { right: "0", top: "0" },
      panelClass: "meeting-details-right-panel"
    });
    ref.afterClosed().subscribe((result) => {
      if (result === "deleted" || result === "status-changed") {
        this.loadContracts();
      }
    });
  }
  // ── Context menu ──────────────────────────────────────────────────
  toggleMenu(contractId, event) {
    event.stopPropagation();
    const opening = this.activeMenuId() !== contractId;
    this.activeMenuId.set(opening ? contractId : null);
    this.deleteConfirmId.set(null);
  }
  closeMenu() {
    this.activeMenuId.set(null);
    this.deleteConfirmId.set(null);
  }
  // ── Edit ──────────────────────────────────────────────────────────
  editContract(contract, event) {
    event.stopPropagation();
    this.closeMenu();
    const routeMap = {
      EmployeeContract: "/dashboard/CreateEmployeeContract",
      FixedPayContract: "/dashboard/CreateFixedSalaryContract",
      PerTaskContract: "/dashboard/CreatePaytaskContact",
      PerProjectContract: "/dashboard/CreateMileStoneContract"
    };
    const route = routeMap[contract.contractType] ?? "/dashboard/CreateFixedSalaryContract";
    this.router.navigate([route], { queryParams: { id: contract.id, mode: "edit" } });
  }
  // ── Delete ────────────────────────────────────────────────────────
  requestQuickDelete(contractId, event) {
    event.stopPropagation();
    this.deleteConfirmId.set(contractId);
  }
  cancelQuickDelete(event) {
    event.stopPropagation();
    this.deleteConfirmId.set(null);
  }
  confirmQuickDelete(contract, event) {
    event.stopPropagation();
    if (this.isDeleting())
      return;
    this.isDeleting.set(true);
    this.contractService.deleteContract(contract.id).subscribe({
      next: () => {
        this.isDeleting.set(false);
        this.closeMenu();
        this.snackBar.open("Contract deleted.", "OK", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        this.loadContracts();
      },
      error: (err) => {
        this.isDeleting.set(false);
        const msg = err?.error?.message ?? "Failed to delete contract.";
        this.snackBar.open(msg, "OK", {
          duration: 4e3,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ["snack-warn"]
        });
      }
    });
  }
  // ── Download PDF ──────────────────────────────────────────────────
  quickDownloadPdf(contract, event) {
    event.stopPropagation();
    this.closeMenu();
    this.contractService.downloadPdf(contract.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `contract-${contract.workId || contract.id}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to download PDF.";
        this.snackBar.open(msg, "OK", {
          duration: 4e3,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ["snack-warn"]
        });
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────
  getInitials(fullName) {
    if (!fullName)
      return "?";
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  }
  getAvatarColorClass(fullName) {
    if (!fullName)
      return this.avatarColors[0];
    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return this.avatarColors[Math.abs(hash) % this.avatarColors.length];
  }
  get pagesArray() {
    return Array.from({ length: this.paginationInfo.totalPages }, (_, i) => i + 1);
  }
};
_ContractListComponent.\u0275fac = function ContractListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContractListComponent)();
};
_ContractListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractListComponent, selectors: [["app-contract-list"]], hostBindings: function ContractListComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function ContractListComponent_click_HostBindingHandler() {
      return ctx.onDocumentClick();
    }, \u0275\u0275resolveDocument);
  }
}, decls: 40, vars: 51, consts: [[1, "contracts-page"], [1, "page-content"], [1, "breadcrumb"], [1, "breadcrumb__item"], [1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header"], [1, "page-title"], [1, "new-contract-btn", "btn-create", 3, "routerLink"], [1, "tabs-container"], ["role", "tablist", 1, "tabs"], ["role", "tab", 1, "tab-item", 3, "click", "disabled"], [1, "view-as-report-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M12.6667 9.33333H3.33333V12C3.33333 12.3536 3.47381 12.6924 3.72386 12.9424C3.97391 13.1925 4.31268 13.3333 4.66667 13.3333H11.3333C11.6873 13.3333 12.0261 13.1925 12.2761 12.9424C12.5262 12.6924 12.6667 12.3536 12.6667 12V9.33333Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.6667 4.66667H3.33333V7.33333C3.33333 7.68732 3.47381 8.02609 3.72386 8.27614C3.97391 8.52619 4.31268 8.66667 4.66667 8.66667H11.3333C11.6873 8.66667 12.0261 8.52619 12.2761 8.27614C12.5262 8.02609 12.6667 7.68732 12.6667 7.33333V4.66667Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 3.33331V12.6666", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.33398 8H12.6673", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "status", "aria-live", "polite", 1, "loading-spinner"], ["role", "status", 1, "empty-state"], ["data-mode", "report", 1, "contracts-table-wrapper"], [1, "spinner"], [1, "empty-state__title"], [1, "empty-state__sub"], ["role", "grid", 1, "contracts-table", "contracts-table--report"], ["scope", "col"], [1, "filters-container"], [1, "search-input-wrapper"], ["d", "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 14L11.1 11.1", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", 3, "ngModelChange", "placeholder", "ngModel"], [1, "dropdowns"], [1, "dropdown"], [3, "ngModelChange", "ngModel"], [3, "value"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "clear-filters-btn"], ["role", "alert", 1, "empty-state"], [1, "clear-filters-btn", 3, "click"], ["aria-hidden", "true", 1, "empty-state__icon"], [1, "btn-primary", 3, "click"], [1, "contracts-table-wrapper"], [1, "ui-cards-grid"], [1, "pagination-container"], [1, "items-per-page"], ["for", "itemsPerPage"], ["id", "itemsPerPage", 3, "change", "ngModel"], ["role", "navigation", 1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-btn", 3, "active"], ["role", "grid", 1, "contracts-table"], ["type", "checkbox", 3, "change"], ["scope", "col", 2, "width", "40px"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], ["type", "button", 1, "expand-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M9 6l6 6-6 6", "stroke", "currentColor", "stroke-width", "2", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "button", "tabindex", "0", 1, "clickable-row", 3, "click", "keydown.enter"], [1, "employee-info"], ["aria-hidden", "true", 1, "avatar-badge", 3, "ngClass"], [1, "name"], [1, "role"], [1, "country-info"], [1, "flag", 3, "src", "alt"], [1, "contract-type-badge"], [1, "manager-info"], [1, "action-cell"], ["aria-haspopup", "menu", 1, "action-menu-btn", 3, "click"], ["cx", "8", "cy", "3", "r", "1.2", "fill", "currentColor"], ["cx", "8", "cy", "8", "r", "1.2", "fill", "currentColor"], ["cx", "8", "cy", "13", "r", "1.2", "fill", "currentColor"], ["role", "menu", 1, "context-menu"], [1, "expand-row"], ["role", "menu", 1, "context-menu", 3, "click"], [1, "context-menu__confirm"], [1, "context-menu__confirm-text"], [1, "context-menu__confirm-actions"], [1, "context-menu__confirm-btn", "context-menu__confirm-btn--cancel", 3, "click"], [1, "context-menu__confirm-btn", "context-menu__confirm-btn--delete", 3, "click", "disabled"], [1, "btn-spinner"], ["role", "menuitem", 1, "context-menu__item", 3, "click"], ["role", "separator", 1, "context-menu__divider"], ["role", "menuitem", 1, "context-menu__item", "context-menu__item--danger", 3, "click"], ["colspan", "11"], [1, "expand-panel"], [1, "expand-grid"], [1, "ui-card"], [1, "ui-card__head"], [1, "ui-card__meta"], [1, "ui-card__foot"], [1, "action-menu-btn", 3, "click"], [1, "pagination-btn", 3, "click"], [1, "new-contract-btn", 3, "routerLink"]], template: function ContractListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "h1", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ContractListComponent_Conditional_16_Template, 7, 8, "a", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "button", 11);
    \u0275\u0275listener("click", function ContractListComponent_Template_button_click_19_listener() {
      return ctx.selectTab("All");
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 11);
    \u0275\u0275listener("click", function ContractListComponent_Template_button_click_22_listener() {
      return ctx.selectTab("Employees");
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 11);
    \u0275\u0275listener("click", function ContractListComponent_Template_button_click_25_listener() {
      return ctx.selectTab("Contractors");
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 11);
    \u0275\u0275listener("click", function ContractListComponent_Template_button_click_28_listener() {
      return ctx.selectTab("Draft");
    });
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 12);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275listener("click", function ContractListComponent_Template_button_click_31_listener() {
      return ctx.toggleReport();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 13);
    \u0275\u0275element(34, "path", 14)(35, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, ContractListComponent_Conditional_38_Template, 3, 1)(39, ContractListComponent_Conditional_39_Template, 38, 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 31, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 33, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 35, "contracts.list.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 37, "contracts.list.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.reportMode ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.selectedTab === "All");
    \u0275\u0275property("disabled", ctx.reportMode);
    \u0275\u0275attribute("aria-selected", ctx.selectedTab === "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 39, "contracts.tabs.all"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedTab === "Employees");
    \u0275\u0275property("disabled", ctx.reportMode);
    \u0275\u0275attribute("aria-selected", ctx.selectedTab === "Employees");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 41, "contracts.tabs.employees"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedTab === "Contractors");
    \u0275\u0275property("disabled", ctx.reportMode);
    \u0275\u0275attribute("aria-selected", ctx.selectedTab === "Contractors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 43, "contracts.tabs.contractors"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.selectedTab === "Draft");
    \u0275\u0275property("disabled", ctx.reportMode);
    \u0275\u0275attribute("aria-selected", ctx.selectedTab === "Draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 45, "contracts.tabs.draft"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("view-as-report-btn--active", ctx.reportMode);
    \u0275\u0275attribute("aria-pressed", ctx.reportMode)("aria-label", \u0275\u0275pipeBind1(32, 47, "contracts.list.viewAsReport"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 49, "contracts.list.viewAsReport"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.reportMode ? 38 : 39);
  }
}, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, TranslocoModule, MatIconModule, MatIcon, TranslocoPipe], styles: ['\n\n.contracts-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.page-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.new-contract-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.new-contract-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 0;\n  border-block-end: 1px solid var(--ui-border);\n  padding-block-end: 0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.tab-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  border-block-end: 2px solid transparent;\n  margin-block-end: -1px;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-sub);\n}\n.tab-item.active[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  border-block-end-color: var(--ui-text-main);\n  font-weight: 600;\n}\n.view-as-report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.view-as-report-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 36px;\n  padding-inline: 12px 28px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  min-width: 130px;\n}\n.dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-primary-400);\n}\n.dropdown[_ngcontent-%COMP%]::after {\n  content: "\\25be";\n  position: absolute;\n  inset-inline-end: 10px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: none;\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  color: var(--brand-primary-500);\n}\n.contracts-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--ui-bg-surface);\n  border-radius: 0 0 8px 8px;\n  border: 1px solid var(--ui-border);\n  border-block-start: none;\n}\n.contracts-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.contracts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.contracts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.contracts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n  text-transform: none;\n}\n.contracts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.contracts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.contracts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.contracts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.contracts-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--brand-primary-600);\n}\n.employee-info[_ngcontent-%COMP%], \n.manager-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.avatar-badge.color-1[_ngcontent-%COMP%] {\n  background: var(--functional-info-500);\n}\n.avatar-badge.color-2[_ngcontent-%COMP%] {\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-3[_ngcontent-%COMP%] {\n  background: var(--functional-warning-500);\n}\n.avatar-badge.color-4[_ngcontent-%COMP%] {\n  background: var(--functional-danger-500);\n}\n.avatar-badge.color-5[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.avatar-badge.color-6[_ngcontent-%COMP%] {\n  background: var(--brand-accent-400);\n}\n.employee-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.manager-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.country-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 14px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.contract-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.contract-type-badge.milestone[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--brand-primary-100) 50%, transparent);\n  color: var(--brand-primary-700);\n  border-color: var(--brand-primary-100);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.action-cell[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n.action-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.action-menu-btn[_ngcontent-%COMP%]:hover, \n.action-menu-btn[aria-expanded=true][_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.context-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  min-width: 168px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);\n  z-index: 100;\n  padding: 4px 0;\n  animation: _ngcontent-%COMP%_menu-in 0.12s ease;\n}\n@keyframes _ngcontent-%COMP%_menu-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.context-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 14px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n  white-space: nowrap;\n}\n.context-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.context-menu__item--danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n}\n.context-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--functional-danger-50) 60%, transparent);\n  color: var(--functional-danger-600);\n}\n.context-menu__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--ui-border);\n  margin: 4px 0;\n}\n.context-menu__confirm[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.context-menu__confirm-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-sub);\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.context-menu__confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.context-menu__confirm-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: opacity 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.context-menu__confirm-btn--cancel[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  border-color: var(--ui-border);\n  color: var(--ui-text-sub);\n}\n.context-menu__confirm-btn--delete[_ngcontent-%COMP%] {\n  background: var(--functional-danger-500);\n  color: var(--ui-bg-surface);\n}\n.context-menu__confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 16px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-block-start: none;\n  border-radius: 0 0 8px 8px;\n  flex-wrap: wrap;\n}\n.items-per-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n}\n.items-per-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  font-size: 13px;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding-inline: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n  gap: 4px;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: var(--ui-bg-subtle);\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-btn.active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 8px 8px;\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--ui-text-muted);\n  margin-block-end: 16px;\n}\n.empty-state__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 8px;\n}\n.empty-state__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .filters-container[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .contracts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+7), \n   .contracts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+7) {\n    display: none;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=contract-list.css.map */'] });
var ContractListComponent = _ContractListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractListComponent, [{
    type: Component,
    args: [{ selector: "app-contract-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, TranslocoModule, MatIconModule], template: `<div class="contracts-page">
  <div class="page-content">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
      <span class="breadcrumb__item">{{ 'common.appName' | transloco }}</span>
      <span class="breadcrumb__sep">\u203A</span>
      <span class="breadcrumb__item breadcrumb__item--active">{{ 'contracts.list.title' | transloco }}</span>
    </nav>

    <!-- Page header -->
    <div class="page-header">
      <h1 class="page-title">{{ 'contracts.list.title' | transloco }}</h1>
      @if (!reportMode) {
        <a
          [routerLink]="['/dashboard', 'typepeople']"
          class="new-contract-btn btn-create"
          [attr.aria-label]="'contracts.list.newContractAriaLabel' | transloco"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3.33331V12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33398 8H12.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ 'contracts.list.newContract' | transloco }}
        </a>
      }
    </div>

    <!-- Tabs + report toggle (always visible so user can leave report mode) -->
    <div class="tabs-container">
      <div class="tabs" role="tablist">
        <button role="tab" class="tab-item"
          [class.active]="selectedTab === 'All'"
          [attr.aria-selected]="selectedTab === 'All'"
          [disabled]="reportMode"
          (click)="selectTab('All')">{{ 'contracts.tabs.all' | transloco }}</button>
        <button role="tab" class="tab-item"
          [class.active]="selectedTab === 'Employees'"
          [attr.aria-selected]="selectedTab === 'Employees'"
          [disabled]="reportMode"
          (click)="selectTab('Employees')">{{ 'contracts.tabs.employees' | transloco }}</button>
        <button role="tab" class="tab-item"
          [class.active]="selectedTab === 'Contractors'"
          [attr.aria-selected]="selectedTab === 'Contractors'"
          [disabled]="reportMode"
          (click)="selectTab('Contractors')">{{ 'contracts.tabs.contractors' | transloco }}</button>
        <button role="tab" class="tab-item"
          [class.active]="selectedTab === 'Draft'"
          [attr.aria-selected]="selectedTab === 'Draft'"
          [disabled]="reportMode"
          (click)="selectTab('Draft')">{{ 'contracts.tabs.draft' | transloco }}</button>
      </div>

      <button class="view-as-report-btn"
              [class.view-as-report-btn--active]="reportMode"
              (click)="toggleReport()"
              [attr.aria-pressed]="reportMode"
              [attr.aria-label]="'contracts.list.viewAsReport' | transloco">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M12.6667 9.33333H3.33333V12C3.33333 12.3536 3.47381 12.6924 3.72386 12.9424C3.97391 13.1925 4.31268 13.3333 4.66667 13.3333H11.3333C11.6873 13.3333 12.0261 13.1925 12.2761 12.9424C12.5262 12.6924 12.6667 12.3536 12.6667 12V9.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6667 4.66667H3.33333V7.33333C3.33333 7.68732 3.47381 8.02609 3.72386 8.27614C3.97391 8.52619 4.31268 8.66667 4.66667 8.66667H11.3333C11.6873 8.66667 12.0261 8.52619 12.2761 8.27614C12.5262 8.02609 12.6667 7.68732 12.6667 7.33333V4.66667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ 'contracts.list.viewAsReport' | transloco }}
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         REPORT MODE \u2014 read-only, no filters, no expand, no actions
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (reportMode) {

      @if (isLoading()) {
        <div class="loading-spinner" role="status" aria-live="polite">
          <div class="spinner"></div>
          <p>{{ 'contracts.list.loading' | transloco }}</p>
        </div>
      } @else if (filteredContracts.length === 0) {
        <div class="empty-state" role="status">
          <h2 class="empty-state__title">{{ 'contracts.empty.title' | transloco }}</h2>
          <p class="empty-state__sub">{{ 'contracts.empty.subtitle' | transloco }}</p>
        </div>
      } @else {
        <div class="contracts-table-wrapper" data-mode="report">
          <table class="contracts-table contracts-table--report" role="grid"
                 [attr.aria-label]="'contracts.list.title' | transloco">
            <thead>
              <tr>
                <th scope="col">{{ 'contracts.table.workId'      | transloco }}</th>
                <th scope="col">{{ 'contracts.table.employee'     | transloco }}</th>
                <th scope="col">{{ 'contracts.table.country'      | transloco }}</th>
                <th scope="col">{{ 'contracts.table.startDate'    | transloco }}</th>
                <th scope="col">{{ 'contracts.table.endDate'      | transloco }}</th>
                <th scope="col">{{ 'contracts.table.contractType' | transloco }}</th>
                <th scope="col">{{ 'contracts.table.manager'      | transloco }}</th>
                <th scope="col">{{ 'contracts.table.createdAt'    | transloco }}</th>
              </tr>
            </thead>
            <tbody>
              @for (contract of filteredContracts; track contract.id) {
                <tr>
                  <td>{{ contract.workId }}</td>
                  <td>{{ contract.empoleeOrContractor?.name || '\u2014' }}</td>
                  <td>{{ contract.country?.name || '\u2014' }}</td>
                  <td>{{ contract.startDate || '\u2014' }}</td>
                  <td>{{ contract.endDate || '\u2014' }}</td>
                  <td>{{ contract.contractType }}</td>
                  <td>{{ contract.manager?.name || '\u2014' }}</td>
                  <td>{{ contract.createdTime || '\u2014' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

    } @else {
      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           NORMAL MODE \u2014 filters + view toggle (table | cards) + expand
      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

      <!-- Filters -->
      <div class="filters-container">
        <div class="search-input-wrapper">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input type="text"
            [placeholder]="'contracts.filters.searchPlaceholder' | transloco"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onServerFilterChange()"
            [attr.aria-label]="'contracts.filters.searchPlaceholder' | transloco" />
        </div>

        <div class="dropdowns">
          <div class="dropdown">
            <select [(ngModel)]="countryFilter"
                    (ngModelChange)="onServerFilterChange()"
                    [attr.aria-label]="'contracts.filters.country' | transloco">
              @for (country of countries; track country.value) {
                <option [value]="country.value">{{ country.name }}</option>
              }
            </select>
          </div>

          <div class="dropdown">
            <select [(ngModel)]="contractTypeFilter"
                    (ngModelChange)="onServerFilterChange()"
                    [attr.aria-label]="'contracts.filters.contractType' | transloco">
              @for (type of contractTypes; track type.value) {
                <option [value]="type.value">{{ type.labelKey | transloco }}</option>
              }
            </select>
          </div>

          <div class="dropdown">
            <select [(ngModel)]="workStatusFilter"
                    (ngModelChange)="onServerFilterChange()"
                    [attr.aria-label]="'contracts.filters.status' | transloco">
              @for (status of workStatuses; track status.value) {
                <option [value]="status.value">{{ status.labelKey | transloco }}</option>
              }
            </select>
          </div>
        </div>

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
          <button class="clear-filters-btn" (click)="clearAllFilters()"
                  [attr.aria-label]="'contracts.filters.clearAll' | transloco">
            {{ 'contracts.filters.clearAll' | transloco }}
          </button>
        }
      </div>

      <!-- Loading -->
      @if (isLoading()) {
        <div class="loading-spinner" role="status" aria-live="polite">
          <div class="spinner"></div>
          <p>{{ 'contracts.list.loading' | transloco }}</p>
        </div>
      }

      <!-- Error -->
      @if (!isLoading() && hasError()) {
        <div class="empty-state" role="alert">
          <mat-icon class="empty-state__icon" aria-hidden="true">error_outline</mat-icon>
          <h2 class="empty-state__title">{{ 'common.error' | transloco }}</h2>
          <p class="empty-state__sub">{{ 'contracts.list.loadError' | transloco }}</p>
          <button class="btn-primary" (click)="loadContracts()">
            {{ 'common.retry' | transloco }}
          </button>
        </div>
      }

      @if (!isLoading() && !hasError()) {
        @if (filteredContracts.length > 0) {

          <!-- \u2500\u2500 Table view \u2500\u2500 -->
          @if (viewMode === 'table') {
            <div class="contracts-table-wrapper">
              <table class="contracts-table" role="grid"
                     [attr.aria-label]="'contracts.list.title' | transloco">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" (change)="onSelectAll($event)"
                             [attr.aria-label]="'contracts.table.selectAll' | transloco" />
                    </th>
                    <th scope="col" style="width:40px"></th>
                    <th scope="col">{{ 'contracts.table.workId'       | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.employee'      | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.country'       | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.startDate'     | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.endDate'       | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.contractType'  | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.manager'       | transloco }}</th>
                    <th scope="col">{{ 'contracts.table.createdAt'     | transloco }}</th>
                    <th scope="col" [attr.aria-label]="'contracts.table.actions' | transloco"></th>
                  </tr>
                </thead>
                <tbody>
                  @for (contract of filteredContracts; track contract.id) {
                    <tr>
                      <td>
                        <input type="checkbox" [(ngModel)]="contract.isSelected"
                               (change)="onContractSelected(contract)"
                               [attr.aria-label]="'contracts.table.selectContract' | transloco" />
                      </td>
                      <td>
                        <button type="button" class="expand-btn"
                                (click)="toggleExpand(contract.id)"
                                [attr.aria-expanded]="expandedRowId === contract.id"
                                [attr.aria-label]="expandedRowId === contract.id ? 'Collapse row' : 'Expand row'">
                          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                               [style.transform]="expandedRowId === contract.id ? 'rotate(90deg)' : 'rotate(0)'">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button>
                      </td>
                      <td class="clickable-row" (click)="openContractDetails(contract)" role="button" tabindex="0" (keydown.enter)="openContractDetails(contract)">
                        {{ contract.workId }}
                      </td>
                      <td>
                        <div class="employee-info">
                          <div class="avatar-badge" [ngClass]="getAvatarColorClass(contract.empoleeOrContractor?.name ?? '')" aria-hidden="true">
                            {{ getInitials(contract.empoleeOrContractor?.name ?? '') }}
                          </div>
                          <div>
                            <div class="name">{{ contract.empoleeOrContractor?.name }}</div>
                            <div class="role">{{ contract.empoleeOrContractor?.role }}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="country-info">
                          @if (contract.country?.flag) {
                            <img [src]="contract.country!.flag" [alt]="contract.country!.name + ' flag'" class="flag" />
                          }
                          <span>{{ contract.country?.name }}</span>
                        </div>
                      </td>
                      <td>{{ contract.startDate }}</td>
                      <td>{{ contract.endDate }}</td>
                      <td>
                        <span class="contract-type-badge" [class.milestone]="contract.contractType === 'Milestone'">
                          {{ contract.contractType }}
                        </span>
                      </td>
                      <td>
                        <div class="manager-info">
                          <div class="avatar-badge" [ngClass]="getAvatarColorClass(contract.manager?.name ?? '')" aria-hidden="true">
                            {{ getInitials(contract.manager?.name ?? '') }}
                          </div>
                          <div>
                            <div class="name">{{ contract.manager?.name }}</div>
                            <div class="role">{{ contract.manager?.role }}</div>
                          </div>
                        </div>
                      </td>
                      <td>{{ contract.createdTime }}</td>
                      <td class="action-cell">
                        <button class="action-menu-btn"
                                (click)="toggleMenu(contract.id, $event)"
                                [attr.aria-label]="'contracts.table.actionsFor' | transloco : { id: contract.workId }"
                                [attr.aria-expanded]="activeMenuId() === contract.id"
                                aria-haspopup="menu">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="3" r="1.2" fill="currentColor"/>
                            <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
                            <circle cx="8" cy="13" r="1.2" fill="currentColor"/>
                          </svg>
                        </button>

                        @if (activeMenuId() === contract.id) {
                          <div class="context-menu" role="menu" (click)="$event.stopPropagation()">
                            @if (deleteConfirmId() === contract.id) {
                              <div class="context-menu__confirm">
                                <p class="context-menu__confirm-text">{{ 'contracts.actions.deleteConfirm' | transloco }}</p>
                                <div class="context-menu__confirm-actions">
                                  <button class="context-menu__confirm-btn context-menu__confirm-btn--cancel"
                                          (click)="cancelQuickDelete($event)">
                                    {{ 'common.cancel' | transloco }}
                                  </button>
                                  <button class="context-menu__confirm-btn context-menu__confirm-btn--delete"
                                          (click)="confirmQuickDelete(contract, $event)"
                                          [disabled]="isDeleting()">
                                    @if (isDeleting()) {
                                      <span class="btn-spinner"></span>
                                    } @else {
                                      {{ 'contracts.actions.delete' | transloco }}
                                    }
                                  </button>
                                </div>
                              </div>
                            } @else {
                              <button class="context-menu__item" role="menuitem" (click)="editContract(contract, $event)">
                                {{ 'contracts.actions.edit' | transloco }}
                              </button>
                              <button class="context-menu__item" role="menuitem" (click)="quickDownloadPdf(contract, $event)">
                                {{ 'contracts.actions.downloadPdf' | transloco }}
                              </button>
                              <div class="context-menu__divider" role="separator"></div>
                              <button class="context-menu__item context-menu__item--danger" role="menuitem" (click)="requestQuickDelete(contract.id, $event)">
                                {{ 'contracts.actions.delete' | transloco }}
                              </button>
                            }
                          </div>
                        }
                      </td>
                    </tr>
                    @if (expandedRowId === contract.id) {
                      <tr class="expand-row">
                        <td colspan="11">
                          <div class="expand-panel">
                            <dl class="expand-grid">
                              <div><dt>{{ 'contracts.table.workId' | transloco }}</dt><dd>{{ contract.workId || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.contractType' | transloco }}</dt><dd>{{ contract.contractType || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.startDate' | transloco }}</dt><dd>{{ contract.startDate || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.endDate' | transloco }}</dt><dd>{{ contract.endDate || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.country' | transloco }}</dt><dd>{{ contract.country?.name || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.manager' | transloco }}</dt><dd>{{ contract.manager?.name || '-' }}</dd></div>
                              <div><dt>{{ 'contracts.table.createdAt' | transloco }}</dt><dd>{{ contract.createdTime || '-' }}</dd></div>
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
              @for (contract of filteredContracts; track contract.id) {
                <article class="ui-card">
                  <header class="ui-card__head">
                    <div class="employee-info">
                      <div class="avatar-badge" [ngClass]="getAvatarColorClass(contract.empoleeOrContractor?.name ?? '')" aria-hidden="true">
                        {{ getInitials(contract.empoleeOrContractor?.name ?? '') }}
                      </div>
                      <div>
                        <div class="name">{{ contract.empoleeOrContractor?.name || '-' }}</div>
                        <div class="role">#{{ contract.workId }}</div>
                      </div>
                    </div>
                    <button type="button" class="expand-btn"
                            (click)="toggleExpand(contract.id)"
                            [attr.aria-expanded]="expandedRowId === contract.id">
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
                           [style.transform]="expandedRowId === contract.id ? 'rotate(90deg)' : 'rotate(0)'">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </header>

                  <dl class="ui-card__meta">
                    <div>
                      <dt>{{ 'contracts.table.contractType' | transloco }}</dt>
                      <dd>
                        <span class="contract-type-badge" [class.milestone]="contract.contractType === 'Milestone'">
                          {{ contract.contractType }}
                        </span>
                      </dd>
                    </div>
                    <div><dt>{{ 'contracts.table.country' | transloco }}</dt><dd>{{ contract.country?.name || '-' }}</dd></div>
                    <div><dt>{{ 'contracts.table.startDate' | transloco }}</dt><dd>{{ contract.startDate || '-' }}</dd></div>
                    <div><dt>{{ 'contracts.table.endDate' | transloco }}</dt><dd>{{ contract.endDate || '-' }}</dd></div>
                  </dl>

                  @if (expandedRowId === contract.id) {
                    <div class="expand-panel">
                      <dl class="expand-grid">
                        <div><dt>{{ 'contracts.table.manager' | transloco }}</dt><dd>{{ contract.manager?.name || '-' }}</dd></div>
                        <div><dt>{{ 'contracts.table.createdAt' | transloco }}</dt><dd>{{ contract.createdTime || '-' }}</dd></div>
                      </dl>
                    </div>
                  }

                  <footer class="ui-card__foot">
                    <button class="action-menu-btn" (click)="openContractDetails(contract)">
                      {{ 'contracts.actions.view' | transloco }}
                    </button>
                  </footer>
                </article>
              }
            </div>
          }

          <div class="pagination-container">
            <div class="items-per-page">
              <label for="itemsPerPage">{{ 'contracts.pagination.itemsPerPage' | transloco }}</label>
              <select id="itemsPerPage" [ngModel]="paginationInfo.itemsPerPage" (change)="onItemsPerPageChange($event)">
                <option [value]="10">10</option>
                <option [value]="20">20</option>
                <option [value]="50">50</option>
              </select>
            </div>
            <div class="pagination-controls" role="navigation">
              <button class="pagination-btn" [disabled]="paginationInfo.currentPage === 1" (click)="onPageChange(paginationInfo.currentPage - 1)">
                {{ 'contracts.pagination.previous' | transloco }}
              </button>
              @for (page of pagesArray; track page) {
                <button class="pagination-btn" [class.active]="paginationInfo.currentPage === page" (click)="onPageChange(page)">
                  {{ page }}
                </button>
              }
              <button class="pagination-btn" [disabled]="paginationInfo.currentPage === paginationInfo.totalPages" (click)="onPageChange(paginationInfo.currentPage + 1)">
                {{ 'contracts.pagination.next' | transloco }}
              </button>
            </div>
          </div>

        } @else {
          <div class="empty-state" role="status">
            <h2 class="empty-state__title">{{ 'contracts.empty.title' | transloco }}</h2>
            <p class="empty-state__sub">{{ 'contracts.empty.subtitle' | transloco }}</p>
            <a [routerLink]="['/dashboard', 'typepeople']" class="new-contract-btn">
              {{ 'contracts.list.newContract' | transloco }}
            </a>
          </div>
        }
      }

    }

  </div>
</div>
`, styles: ['/* src/components/DashboardLayout/Contract/contract-list/contract-list.css */\n.contracts-page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.page-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  margin-block-end: 8px;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n}\n.breadcrumb__item--active {\n  color: var(--brand-primary-500);\n  font-weight: 500;\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 24px;\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.new-contract-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.new-contract-btn:hover {\n  opacity: 0.88;\n}\n.tabs-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-end: 0;\n  border-block-end: 1px solid var(--ui-border);\n  padding-block-end: 0;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n}\n.tab-item {\n  background: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s;\n  border-block-end: 2px solid transparent;\n  margin-block-end: -1px;\n}\n.tab-item:hover {\n  color: var(--ui-text-sub);\n}\n.tab-item.active {\n  color: var(--ui-text-main);\n  border-block-end-color: var(--ui-text-main);\n  font-weight: 600;\n}\n.view-as-report-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.view-as-report-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.filters-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--ui-bg-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-wrap: wrap;\n}\n.search-input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 260px;\n  height: 36px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding-inline: 10px;\n}\n.search-input-wrapper svg {\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n}\n.search-input-wrapper input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n}\n.search-input-wrapper input::placeholder {\n  color: var(--ui-text-muted);\n}\n.dropdowns {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.dropdown {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.dropdown select {\n  height: 36px;\n  padding-inline: 12px 28px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  min-width: 130px;\n}\n.dropdown select:focus {\n  outline: none;\n  border-color: var(--brand-primary-400);\n}\n.dropdown::after {\n  content: "\\25be";\n  position: absolute;\n  inset-inline-end: 10px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.dropdown label {\n  display: none;\n}\n.clear-filters-btn {\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n  margin-inline-start: auto;\n  transition: color 0.15s;\n}\n.clear-filters-btn:hover {\n  color: var(--brand-primary-500);\n}\n.contracts-table-wrapper {\n  overflow-x: auto;\n  background: var(--ui-bg-surface);\n  border-radius: 0 0 8px 8px;\n  border: 1px solid var(--ui-border);\n  border-block-start: none;\n}\n.contracts-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ui-bg-surface);\n}\n.contracts-table th,\n.contracts-table td {\n  padding: 12px 16px;\n  text-align: start;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.contracts-table th {\n  background: var(--ui-bg-surface);\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  border-block-end: 1px solid var(--ui-border);\n  text-transform: none;\n}\n.contracts-table tbody tr {\n  border-block-end: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.contracts-table tbody tr:last-child {\n  border-block-end: none;\n}\n.contracts-table tbody tr:hover {\n  background: color-mix(in srgb, var(--brand-primary-50) 40%, transparent);\n}\n.contracts-table td {\n  color: var(--ui-text-main);\n  vertical-align: middle;\n}\n.contracts-table input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-neutral-950);\n}\n.clickable-row {\n  cursor: pointer;\n}\n.clickable-row:hover {\n  text-decoration: underline;\n  color: var(--brand-primary-600);\n}\n.employee-info,\n.manager-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-badge {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ui-bg-surface);\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.avatar-badge.color-1 {\n  background: var(--functional-info-500);\n}\n.avatar-badge.color-2 {\n  background: var(--brand-primary-400);\n}\n.avatar-badge.color-3 {\n  background: var(--functional-warning-500);\n}\n.avatar-badge.color-4 {\n  background: var(--functional-danger-500);\n}\n.avatar-badge.color-5 {\n  background: var(--functional-success-500);\n}\n.avatar-badge.color-6 {\n  background: var(--brand-accent-400);\n}\n.employee-info div,\n.manager-info div {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.role {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.country-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.flag {\n  width: 20px;\n  height: 14px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.contract-type-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 400;\n  white-space: nowrap;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n  border: 1px solid var(--ui-border);\n}\n.contract-type-badge.milestone {\n  background: color-mix(in srgb, var(--brand-primary-100) 50%, transparent);\n  color: var(--brand-primary-700);\n  border-color: var(--brand-primary-100);\n}\n.loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-bg-surface);\n}\n.spinner {\n  width: 28px;\n  height: 28px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.action-cell {\n  position: relative;\n  white-space: nowrap;\n}\n.action-menu-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.action-menu-btn:hover,\n.action-menu-btn[aria-expanded=true] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.context-menu {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  min-width: 168px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);\n  z-index: 100;\n  padding: 4px 0;\n  animation: menu-in 0.12s ease;\n}\n@keyframes menu-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.context-menu__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 14px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n  white-space: nowrap;\n}\n.context-menu__item:hover {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.context-menu__item--danger {\n  color: var(--functional-danger-500);\n}\n.context-menu__item--danger:hover {\n  background: color-mix(in srgb, var(--functional-danger-50) 60%, transparent);\n  color: var(--functional-danger-600);\n}\n.context-menu__divider {\n  height: 1px;\n  background: var(--ui-border);\n  margin: 4px 0;\n}\n.context-menu__confirm {\n  padding: 12px 14px;\n}\n.context-menu__confirm-text {\n  font-size: 12px;\n  color: var(--ui-text-sub);\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.context-menu__confirm-actions {\n  display: flex;\n  gap: 6px;\n}\n.context-menu__confirm-btn {\n  flex: 1;\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: opacity 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.context-menu__confirm-btn--cancel {\n  background: var(--ui-bg-subtle);\n  border-color: var(--ui-border);\n  color: var(--ui-text-sub);\n}\n.context-menu__confirm-btn--delete {\n  background: var(--functional-danger-500);\n  color: var(--ui-bg-surface);\n}\n.context-menu__confirm-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: var(--brand-neutral-0, #fff);\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 16px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-block-start: none;\n  border-radius: 0 0 8px 8px;\n  flex-wrap: wrap;\n}\n.items-per-page {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n}\n.items-per-page select {\n  padding: 4px 8px;\n  border: 1px solid var(--ui-border);\n  border-radius: 6px;\n  font-size: 13px;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pagination-btn {\n  min-width: 32px;\n  height: 32px;\n  padding-inline: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n  gap: 4px;\n}\n.pagination-btn:hover:not(:disabled):not(.active) {\n  background: var(--ui-bg-subtle);\n}\n.pagination-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-btn.active {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n  font-weight: 600;\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 8px 8px;\n}\n.empty-state__icon {\n  font-size: 48px;\n  color: var(--ui-text-muted);\n  margin-block-end: 16px;\n}\n.empty-state__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0 0 8px;\n}\n.empty-state__sub {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .filters-container {\n    padding: 10px 12px;\n  }\n  .contracts-table th:nth-child(n+7),\n  .contracts-table td:nth-child(n+7) {\n    display: none;\n  }\n  .pagination-container {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=contract-list.css.map */\n'] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractListComponent, { className: "ContractListComponent", filePath: "src/components/dashboardlayout/contract/contract-list/contract-list.ts", lineNumber: 36 });
})();
export {
  ContractListComponent
};
//# sourceMappingURL=chunk-P3FOQZTV.js.map
