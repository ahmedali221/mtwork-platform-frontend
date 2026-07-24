import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  CompanyService
} from "./chunk-OV3X5KZG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
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
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
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
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
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

// src/components/DashboardLayout/Company/company-profile/company-profile.ts
var _forTrack0 = ($index, $item) => $item.id;
function CompanyProfileComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "mat-spinner", 12);
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "Loading profile\u2026");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "companies.profile.loading"));
  }
}
function CompanyProfileComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 14);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function CompanyProfileComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(7, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loadError());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 2, "common.retryLoading"));
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.company().logoPath, \u0275\u0275sanitizeUrl)("alt", ((tmp_3_0 = ctx_r1.company()) == null ? null : tmp_3_0.name) + " logo");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials((tmp_2_0 = ctx_r1.company()) == null ? null : tmp_2_0.name));
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.company()) == null ? null : tmp_2_0.description);
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 25);
    \u0275\u0275text(1, "Reg. Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "dd", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.company()) == null ? null : tmp_2_0.registrationNumber);
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon", 31);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Company profile updated successfully. ");
    \u0275\u0275elementEnd();
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon", 31);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveError(), " ");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_25_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", (tmp_3_0 = ctx_r1.company()) == null ? null : tmp_3_0.websiteUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r1.company()) == null ? null : tmp_4_0.websiteUrl, " ");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_25_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "header", 33)(2, "h3", 34);
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function CompanyProfileComponent_Conditional_17_Conditional_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(6, "mat-icon", 31);
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36)(10, "div", 37)(11, "div", 38)(12, "span", 39);
    \u0275\u0275text(13, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 38)(17, "span", 39);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 39);
    \u0275\u0275text(23, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 38)(27, "span", 39);
    \u0275\u0275text(28, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 40);
    \u0275\u0275conditionalCreate(30, CompanyProfileComponent_Conditional_17_Conditional_25_Conditional_30_Template, 2, 2, "a", 41)(31, CompanyProfileComponent_Conditional_17_Conditional_25_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 38)(33, "span", 39);
    \u0275\u0275text(34, "Registration No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 40);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "span", 39);
    \u0275\u0275text(39, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 40);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 38)(43, "span", 39);
    \u0275\u0275text(44, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 40);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "section", 42)(48, "header", 33)(49, "h3", 43);
    \u0275\u0275text(50, "Address & Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 35);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275listener("click", function CompanyProfileComponent_Conditional_17_Conditional_25_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(53, "mat-icon", 31);
    \u0275\u0275text(54, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 36)(57, "div", 37)(58, "div", 38)(59, "span", 39);
    \u0275\u0275text(60, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 40);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 38)(64, "span", 39);
    \u0275\u0275text(65, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 40);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 11, "companies.profile.editBasicInfo"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.company()) == null ? null : tmp_3_0.name) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.company()) == null ? null : tmp_4_0.email) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.company()) == null ? null : tmp_5_0.phoneNumber) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.company()) == null ? null : tmp_6_0.websiteUrl) ? 30 : 31);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.company()) == null ? null : tmp_7_0.registrationNumber) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCountryName((tmp_8_0 = ctx_r1.company()) == null ? null : tmp_8_0.countryId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getIndustryName((tmp_9_0 = ctx_r1.company()) == null ? null : tmp_9_0.industryId));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 13, "companies.profile.editAddressDesc"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r1.company()) == null ? null : tmp_11_0.address) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_12_0 = ctx_r1.company()) == null ? null : tmp_12_0.description) || "\u2014");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Company name is required.");
    \u0275\u0275elementEnd();
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Valid email is required.");
    \u0275\u0275elementEnd();
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275property("value", i_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r6.name);
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 72);
    \u0275\u0275text(1, " Saving\u2026 ");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 31);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Save Changes ");
  }
}
function CompanyProfileComponent_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 30)(1, "header", 33)(2, "h3", 44);
    \u0275\u0275text(3, "Edit Company Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 36)(5, "form", 45);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("ngSubmit", function CompanyProfileComponent_Conditional_17_Conditional_26_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "label", 48);
    \u0275\u0275text(10, "Company Name ");
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 49);
    \u0275\u0275conditionalCreate(14, CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_14_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 47)(16, "label", 51);
    \u0275\u0275text(17, "Email ");
    \u0275\u0275elementStart(18, "span", 31);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 52);
    \u0275\u0275conditionalCreate(21, CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_21_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "label", 53);
    \u0275\u0275text(24, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 47)(27, "label", 55);
    \u0275\u0275text(28, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 47)(31, "label", 57);
    \u0275\u0275text(32, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47)(35, "label", 59);
    \u0275\u0275text(36, "Registration Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 47)(39, "label", 61);
    \u0275\u0275text(40, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 62);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementStart(43, "option", 63);
    \u0275\u0275text(44, "Select country\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, CompanyProfileComponent_Conditional_17_Conditional_26_For_46_Template, 2, 2, "option", 63, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 47)(48, "label", 64);
    \u0275\u0275text(49, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "select", 65);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementStart(52, "option", 63);
    \u0275\u0275text(53, "Select industry\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(54, CompanyProfileComponent_Conditional_17_Conditional_26_For_55_Template, 2, 2, "option", 63, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 66)(57, "label", 67);
    \u0275\u0275text(58, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "textarea", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 69)(61, "button", 70);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275listener("click", function CompanyProfileComponent_Conditional_17_Conditional_26_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditing());
    });
    \u0275\u0275text(63, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 71);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275conditionalCreate(66, CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_66_Template, 2, 0)(67, CompanyProfileComponent_Conditional_17_Conditional_26_Conditional_67_Template, 3, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 17, "companies.profile.form"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.fieldInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("name") ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.fieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("email") ? 21 : -1);
    \u0275\u0275advance(20);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 19, "companies.profile.selectCountry"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.countries());
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 21, "companies.profile.selectIndustry"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.industries());
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(62, 23, "companies.profile.cancelEditing"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(65, 25, "companies.profile.saveProfile"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSaving() ? 66 : 67);
  }
}
function CompanyProfileComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "aside", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, CompanyProfileComponent_Conditional_17_Conditional_3_Template, 1, 2, "img", 18)(4, CompanyProfileComponent_Conditional_17_Conditional_4_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "h2", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, CompanyProfileComponent_Conditional_17_Conditional_10_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(11, "dl", 24)(12, "dt", 25);
    \u0275\u0275text(13, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dt", 25);
    \u0275\u0275text(17, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd", 26);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, CompanyProfileComponent_Conditional_17_Conditional_20_Template, 4, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275conditionalCreate(23, CompanyProfileComponent_Conditional_17_Conditional_23_Template, 4, 0, "div", 28);
    \u0275\u0275conditionalCreate(24, CompanyProfileComponent_Conditional_17_Conditional_24_Template, 4, 1, "div", 29);
    \u0275\u0275conditionalCreate(25, CompanyProfileComponent_Conditional_17_Conditional_25_Template, 68, 15);
    \u0275\u0275conditionalCreate(26, CompanyProfileComponent_Conditional_17_Conditional_26_Template, 68, 27, "section", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.company()) == null ? null : tmp_1_0.logoPath) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.company()) == null ? null : tmp_2_0.name) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("avatar-badge--active", (tmp_3_0 = ctx_r1.company()) == null ? null : tmp_3_0.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.company()) == null ? null : tmp_4_0.isActive) ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.company()) == null ? null : tmp_5_0.description) ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getIndustryName((tmp_6_0 = ctx_r1.company()) == null ? null : tmp_6_0.industryId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCountryName((tmp_7_0 = ctx_r1.company()) == null ? null : tmp_7_0.countryId));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.company()) == null ? null : tmp_8_0.registrationNumber) ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 14, "companies.profile.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.saveSuccess() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveError() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditing() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 26 : -1);
  }
}
var _CompanyProfileComponent = class _CompanyProfileComponent {
  constructor() {
    this.companyService = inject(CompanyService);
    this.lookupService = inject(LookupService);
    this.fb = inject(FormBuilder);
    this.company = signal(null, ...ngDevMode ? [{ debugName: "company" }] : []);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
    this.isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : []);
    this.isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : []);
    this.saveError = signal(null, ...ngDevMode ? [{ debugName: "saveError" }] : []);
    this.saveSuccess = signal(false, ...ngDevMode ? [{ debugName: "saveSuccess" }] : []);
    this.countries = signal([], ...ngDevMode ? [{ debugName: "countries" }] : []);
    this.industries = signal([], ...ngDevMode ? [{ debugName: "industries" }] : []);
    this.form = this.fb.nonNullable.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: [""],
      address: [""],
      websiteUrl: [""],
      description: [""],
      registrationNumber: [""],
      countryId: [0],
      industryId: [0]
    });
  }
  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    this.loadLookups();
    this.loadCompany();
  }
  loadLookups() {
    this.lookupService.getCountries().subscribe({
      next: (items) => this.countries.set(items),
      error: () => {
      }
    });
    this.lookupService.getIndustries().subscribe({
      next: (items) => this.industries.set(items),
      error: () => {
      }
    });
  }
  loadCompany() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.companyService.get().subscribe({
      next: (data) => {
        this.company.set(data);
        this.patchForm(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.loadError.set(err?.error?.message ?? "Failed to load company profile.");
        this.isLoading.set(false);
      }
    });
  }
  patchForm(c) {
    this.form.patchValue({
      name: c["name"] ?? "",
      email: c["email"] ?? "",
      phoneNumber: c["phoneNumber"] ?? "",
      address: c["address"] ?? "",
      websiteUrl: c["websiteUrl"] ?? "",
      description: c["description"] ?? "",
      registrationNumber: c["registrationNumber"] ?? "",
      countryId: c["countryId"] ?? 0,
      industryId: c["industryId"] ?? 0
    });
  }
  // ── Edit / Cancel ─────────────────────────────────────────
  startEditing() {
    const c = this.company();
    if (c)
      this.patchForm(c);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    this.isEditing.set(true);
  }
  cancelEditing() {
    const c = this.company();
    if (c)
      this.patchForm(c);
    this.saveError.set(null);
    this.isEditing.set(false);
  }
  // ── Save ──────────────────────────────────────────────────
  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = __spreadValues(__spreadValues({}, this.company()), this.form.getRawValue());
    this.isSaving.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    this.companyService.update(payload).subscribe({
      next: () => {
        this.company.set(payload);
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.isEditing.set(false);
        setTimeout(() => this.saveSuccess.set(false), 4e3);
      },
      error: (err) => {
        this.isSaving.set(false);
        this.saveError.set(err?.error?.message ?? "Failed to save changes. Please try again.");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────
  fieldInvalid(name) {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  getCountryName(id) {
    if (!id)
      return "\u2014";
    return this.countries().find((c) => c.id === id)?.name ?? "\u2014";
  }
  getIndustryName(id) {
    if (!id)
      return "\u2014";
    return this.industries().find((i) => i.id === id)?.name ?? "\u2014";
  }
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  retry() {
    this.loadCompany();
  }
};
_CompanyProfileComponent.\u0275fac = function CompanyProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CompanyProfileComponent)();
};
_CompanyProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyProfileComponent, selectors: [["app-company-profile"]], decls: 18, vars: 4, consts: [[1, "page-container", "profile-page"], [1, "breadcrumb"], [1, "breadcrumb__item"], ["aria-hidden", "true", 1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header"], [1, "page-header__left"], [1, "page-title"], [1, "page-subtitle"], ["role", "status", 1, "state-center"], ["role", "alert", 1, "state-center", "state-center--error"], [1, "profile-layout"], ["diameter", "48"], [1, "state-center__text"], ["aria-hidden", "true", 1, "state-center__icon"], [1, "btn", "btn--secondary", 3, "click"], [1, "card", "profile-avatar-card"], ["aria-hidden", "true", 1, "avatar-wrap"], [1, "avatar-img", 3, "src", "alt"], [1, "avatar-initials"], [1, "avatar-meta"], [1, "avatar-name"], [1, "avatar-badge"], [1, "avatar-desc"], [1, "avatar-stats"], [1, "avatar-stats__label"], [1, "avatar-stats__value"], [1, "profile-details"], ["role", "status", 1, "banner", "banner--success"], ["role", "alert", 1, "banner", "banner--error"], ["aria-labelledby", "cp-sec-edit", 1, "card", "profile-section"], ["aria-hidden", "true"], ["aria-labelledby", "cp-sec-basic", 1, "card", "profile-section"], [1, "profile-section__header"], ["id", "cp-sec-basic", 1, "profile-section__title"], ["type", "button", 1, "btn", "btn--ghost-edit", 3, "click"], [1, "profile-section__body"], [1, "detail-grid"], [1, "detail-field"], [1, "detail-field__label"], [1, "detail-field__value"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link", 3, "href"], ["aria-labelledby", "cp-sec-address", 1, "card", "profile-section"], ["id", "cp-sec-address", 1, "profile-section__title"], ["id", "cp-sec-edit", 1, "profile-section__title"], ["novalidate", "", 1, "edit-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-field"], ["for", "cp-name", 1, "form-field__label"], ["id", "cp-name", "formControlName", "name", "placeholder", "Your company name", "aria-required", "true", 1, "form-field__input"], ["role", "alert", 1, "form-field__error"], ["for", "cp-email", 1, "form-field__label"], ["id", "cp-email", "type", "email", "formControlName", "email", "placeholder", "contact@company.com", "aria-required", "true", 1, "form-field__input"], ["for", "cp-phone", 1, "form-field__label"], ["id", "cp-phone", "type", "tel", "formControlName", "phoneNumber", "placeholder", "+1 555 000 0000", 1, "form-field__input"], ["for", "cp-address", 1, "form-field__label"], ["id", "cp-address", "formControlName", "address", "placeholder", "123 Main St, City", 1, "form-field__input"], ["for", "cp-website", 1, "form-field__label"], ["id", "cp-website", "type", "url", "formControlName", "websiteUrl", "placeholder", "https://yourcompany.com", 1, "form-field__input"], ["for", "cp-reg", 1, "form-field__label"], ["id", "cp-reg", "formControlName", "registrationNumber", "placeholder", "REG-0000000", 1, "form-field__input"], ["for", "cp-country", 1, "form-field__label"], ["id", "cp-country", "formControlName", "countryId", 1, "form-field__select"], [3, "value"], ["for", "cp-industry", 1, "form-field__label"], ["id", "cp-industry", "formControlName", "industryId", 1, "form-field__select"], [1, "form-field", "form-field--full"], ["for", "cp-desc", 1, "form-field__label"], ["id", "cp-desc", "formControlName", "description", "rows", "3", "placeholder", "Brief description of your company\u2026", 1, "form-field__textarea"], [1, "form-actions"], ["type", "button", 1, "btn", "btn--secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], ["diameter", "16", "aria-hidden", "true"]], template: function CompanyProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4, "MTWork");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "Company Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "h1", 7);
    \u0275\u0275text(12, "Company Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 8);
    \u0275\u0275text(14, "View and manage your company information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, CompanyProfileComponent_Conditional_15_Template, 5, 3, "div", 9)(16, CompanyProfileComponent_Conditional_16_Template, 8, 4, "div", 10)(17, CompanyProfileComponent_Conditional_17_Template, 27, 16, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "common.breadcrumb"));
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx.isLoading() ? 15 : ctx.loadError() ? 16 : 17);
  }
}, dependencies: [
  CommonModule,
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
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  width: 100%;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-border);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  font-weight: var(--body-font-weight-semi-bold);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--spacing-medium-lg);\n  margin-block-end: var(--spacing-large-xxl);\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: var(--spacing-small-xxxs) 0 0;\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 9px 18px;\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.btn--secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-border);\n  color: var(--ui-text-main);\n}\n.state-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  text-align: center;\n}\n.state-center__text[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.state-center__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--functional-danger-500);\n}\n.state-center--error[_ngcontent-%COMP%]   .state-center__text[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: var(--spacing-large-xxl);\n  width: 100%;\n}\n.profile-avatar-card[_ngcontent-%COMP%] {\n  padding: var(--spacing-large-xxl);\n  overflow: hidden;\n  flex: 0 0 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  text-align: center;\n}\n.profile-details[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .profile-avatar-card[_ngcontent-%COMP%], \n   .profile-details[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    width: 100%;\n  }\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 3px solid var(--ui-border);\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-600);\n}\n.avatar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-small-xxs);\n}\n.avatar-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.avatar-badge--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.avatar-desc[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  line-height: 1.5;\n  margin: 0;\n}\n.avatar-stats[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  text-align: start;\n  padding-block-start: var(--spacing-small-xs);\n  border-block-start: 1px solid var(--ui-border);\n}\n.avatar-stats__label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--ui-text-muted);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  align-self: center;\n}\n.avatar-stats__value[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  align-self: center;\n  word-break: break-word;\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.profile-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  border-block-end: 1px solid var(--ui-border);\n}\n.profile-section__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.profile-section__body[_ngcontent-%COMP%] {\n  padding: var(--spacing-large-xxl);\n}\n.btn--ghost-edit[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  padding: 6px 12px;\n  font-size: var(--text-xs);\n}\n.btn--ghost-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn--ghost-edit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n}\n.banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.banner--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  color: var(--functional-success-700);\n}\n.banner--error[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding-block: var(--spacing-small-xs);\n  border-block-end: 1px solid var(--ui-border);\n}\n.detail-field[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n@media (max-width: 540px) {\n  .detail-field[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-small-xxxs);\n    align-items: flex-start;\n  }\n}\n.detail-field__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-regular, 400);\n  color: var(--ui-text-muted);\n  letter-spacing: normal;\n  text-transform: none;\n}\n.detail-field__value[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n  text-align: end;\n  word-break: break-word;\n}\n@media (max-width: 540px) {\n  .detail-field__value[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n.link[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  text-decoration: none;\n  word-break: break-all;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium-md);\n}\n@media (max-width: 540px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n}\n.form-field__input[_ngcontent-%COMP%], \n.form-field__textarea[_ngcontent-%COMP%], \n.form-field__select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  background: var(--ui-bg-surface);\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  resize: vertical;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-field__input[_ngcontent-%COMP%]:focus, \n.form-field__textarea[_ngcontent-%COMP%]:focus, \n.form-field__select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.form-field__input--error[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-500) !important;\n}\n.form-field__error[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n/*# sourceMappingURL=company-profile.css.map */"] });
var CompanyProfileComponent = _CompanyProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyProfileComponent, [{
    type: Component,
    args: [{ selector: "app-company-profile", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="page-container profile-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="breadcrumb__item">MTWork</span>
    <span class="breadcrumb__sep" aria-hidden="true">\u203A</span>
    <span class="breadcrumb__item breadcrumb__item--active">Company Profile</span>
  </nav>

  <!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="page-header__left">
      <h1 class="page-title">Company Profile</h1>
      <p class="page-subtitle">View and manage your company information</p>
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="state-center" role="status" [attr.aria-label]="'companies.profile.loading' | transloco">
      <mat-spinner diameter="48"></mat-spinner>
      <p class="state-center__text">Loading profile\u2026</p>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (loadError()) {
    <div class="state-center state-center--error" role="alert">
      <mat-icon class="state-center__icon" aria-hidden="true">error_outline</mat-icon>
      <p class="state-center__text">{{ loadError() }}</p>
      <button class="btn btn--secondary" (click)="retry()" [attr.aria-label]="'common.retryLoading' | transloco">
        Retry
      </button>
    </div>
  }

  <!-- \u2500\u2500 Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else {
    <div class="profile-layout">

      <!-- \u2500\u2500 Left column: avatar + summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <aside class="card profile-avatar-card">
        <div class="avatar-wrap" aria-hidden="true">
          @if (company()?.logoPath) {
            <img [src]="company()!.logoPath" [alt]="company()?.name + ' logo'" class="avatar-img" />
          } @else {
            <div class="avatar-initials">{{ getInitials(company()?.name) }}</div>
          }
        </div>

        <div class="avatar-meta">
          <h2 class="avatar-name">{{ company()?.name || '\u2014' }}</h2>
          <span class="avatar-badge" [class.avatar-badge--active]="company()?.isActive">
            {{ company()?.isActive ? 'Active' : 'Inactive' }}
          </span>
        </div>

        @if (company()?.description) {
          <p class="avatar-desc">{{ company()?.description }}</p>
        }

        <dl class="avatar-stats">
          <dt class="avatar-stats__label">Industry</dt>
          <dd class="avatar-stats__value">{{ getIndustryName(company()?.industryId) }}</dd>

          <dt class="avatar-stats__label">Country</dt>
          <dd class="avatar-stats__value">{{ getCountryName(company()?.countryId) }}</dd>

          @if (company()?.registrationNumber) {
            <dt class="avatar-stats__label">Reg. Number</dt>
            <dd class="avatar-stats__value">{{ company()?.registrationNumber }}</dd>
          }
        </dl>
      </aside>

      <!-- \u2500\u2500 Right column: stack of section cards (NOT a card itself) \u2500\u2500 -->
      <div class="profile-details" [attr.aria-label]="'companies.profile.title' | transloco">

        <!-- Success banner -->
        @if (saveSuccess()) {
          <div class="banner banner--success" role="status">
            <mat-icon aria-hidden="true">check_circle</mat-icon>
            Company profile updated successfully.
          </div>
        }

        <!-- Save error banner -->
        @if (saveError()) {
          <div class="banner banner--error" role="alert">
            <mat-icon aria-hidden="true">error_outline</mat-icon>
            {{ saveError() }}
          </div>
        }

        <!-- \u2500\u2500 VIEW MODE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (!isEditing()) {

          <!-- Section: Basic Information -->
          <section class="card profile-section" aria-labelledby="cp-sec-basic">
            <header class="profile-section__header">
              <h3 id="cp-sec-basic" class="profile-section__title">Basic Information</h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'companies.profile.editBasicInfo' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                Edit
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">Company Name</span>
                  <span class="detail-field__value">{{ company()?.name || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Email</span>
                  <span class="detail-field__value">{{ company()?.email || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Phone</span>
                  <span class="detail-field__value">{{ company()?.phoneNumber || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Website</span>
                  <span class="detail-field__value">
                    @if (company()?.websiteUrl) {
                      <a [href]="company()?.websiteUrl" target="_blank" rel="noopener noreferrer" class="link">
                        {{ company()?.websiteUrl }}
                      </a>
                    } @else { \u2014 }
                  </span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Registration No.</span>
                  <span class="detail-field__value">{{ company()?.registrationNumber || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Country</span>
                  <span class="detail-field__value">{{ getCountryName(company()?.countryId) }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Industry</span>
                  <span class="detail-field__value">{{ getIndustryName(company()?.industryId) }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Section: Address & Description -->
          <section class="card profile-section" aria-labelledby="cp-sec-address">
            <header class="profile-section__header">
              <h3 id="cp-sec-address" class="profile-section__title">Address &amp; Description</h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'companies.profile.editAddressDesc' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                Edit
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">Address</span>
                  <span class="detail-field__value">{{ company()?.address || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">Description</span>
                  <span class="detail-field__value">{{ company()?.description || '\u2014' }}</span>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- \u2500\u2500 EDIT MODE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (isEditing()) {
          <section class="card profile-section" aria-labelledby="cp-sec-edit">
            <header class="profile-section__header">
              <h3 id="cp-sec-edit" class="profile-section__title">Edit Company Information</h3>
            </header>
            <div class="profile-section__body">
          <form [formGroup]="form" (ngSubmit)="onSave()" novalidate class="edit-form" [attr.aria-label]="'companies.profile.form' | transloco">

            <div class="form-grid">
              <!-- Name -->
              <div class="form-field">
                <label class="form-field__label" for="cp-name">Company Name <span aria-hidden="true">*</span></label>
                <input
                  id="cp-name"
                  class="form-field__input"
                  [class.form-field__input--error]="fieldInvalid('name')"
                  formControlName="name"
                  placeholder="Your company name"
                  aria-required="true"
                />
                @if (fieldInvalid('name')) {
                  <span class="form-field__error" role="alert">Company name is required.</span>
                }
              </div>

              <!-- Email -->
              <div class="form-field">
                <label class="form-field__label" for="cp-email">Email <span aria-hidden="true">*</span></label>
                <input
                  id="cp-email"
                  type="email"
                  class="form-field__input"
                  [class.form-field__input--error]="fieldInvalid('email')"
                  formControlName="email"
                  placeholder="contact@company.com"
                  aria-required="true"
                />
                @if (fieldInvalid('email')) {
                  <span class="form-field__error" role="alert">Valid email is required.</span>
                }
              </div>

              <!-- Phone -->
              <div class="form-field">
                <label class="form-field__label" for="cp-phone">Phone</label>
                <input
                  id="cp-phone"
                  type="tel"
                  class="form-field__input"
                  formControlName="phoneNumber"
                  placeholder="+1 555 000 0000"
                />
              </div>

              <!-- Address -->
              <div class="form-field">
                <label class="form-field__label" for="cp-address">Address</label>
                <input
                  id="cp-address"
                  class="form-field__input"
                  formControlName="address"
                  placeholder="123 Main St, City"
                />
              </div>

              <!-- Website -->
              <div class="form-field">
                <label class="form-field__label" for="cp-website">Website</label>
                <input
                  id="cp-website"
                  type="url"
                  class="form-field__input"
                  formControlName="websiteUrl"
                  placeholder="https://yourcompany.com"
                />
              </div>

              <!-- Registration number -->
              <div class="form-field">
                <label class="form-field__label" for="cp-reg">Registration Number</label>
                <input
                  id="cp-reg"
                  class="form-field__input"
                  formControlName="registrationNumber"
                  placeholder="REG-0000000"
                />
              </div>

              <!-- Country -->
              <div class="form-field">
                <label class="form-field__label" for="cp-country">Country</label>
                <select id="cp-country" class="form-field__select" formControlName="countryId" [attr.aria-label]="'companies.profile.selectCountry' | transloco">
                  <option [value]="0">Select country\u2026</option>
                  @for (c of countries(); track c.id) {
                    <option [value]="c.id">{{ c.name }}</option>
                  }
                </select>
              </div>

              <!-- Industry -->
              <div class="form-field">
                <label class="form-field__label" for="cp-industry">Industry</label>
                <select id="cp-industry" class="form-field__select" formControlName="industryId" [attr.aria-label]="'companies.profile.selectIndustry' | transloco">
                  <option [value]="0">Select industry\u2026</option>
                  @for (i of industries(); track i.id) {
                    <option [value]="i.id">{{ i.name }}</option>
                  }
                </select>
              </div>

              <!-- Description -->
              <div class="form-field form-field--full">
                <label class="form-field__label" for="cp-desc">Description</label>
                <textarea
                  id="cp-desc"
                  class="form-field__textarea"
                  formControlName="description"
                  rows="3"
                  placeholder="Brief description of your company\u2026"
                ></textarea>
              </div>
            </div>

            <!-- Actions -->
            <div class="form-actions">
              <button
                type="button"
                class="btn btn--secondary"
                (click)="cancelEditing()"
                [disabled]="isSaving()"
                [attr.aria-label]="'companies.profile.cancelEditing' | transloco"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn--primary"
                [disabled]="isSaving()"
                [attr.aria-label]="'companies.profile.saveProfile' | transloco"
              >
                @if (isSaving()) {
                  <mat-spinner diameter="16" aria-hidden="true"></mat-spinner>
                  Saving\u2026
                } @else {
                  <mat-icon aria-hidden="true">save</mat-icon>
                  Save Changes
                }
              </button>
            </div>

          </form>
            </div><!-- /.profile-section__body -->
          </section>
        }

      </div><!-- /.profile-details -->
    </div><!-- /.profile-layout -->
  }

</div><!-- /.profile-page -->
`, styles: ["/* src/components/DashboardLayout/Company/company-profile/company-profile.css */\n.profile-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  width: 100%;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.breadcrumb__sep {\n  color: var(--ui-border);\n}\n.breadcrumb__item--active {\n  color: var(--ui-text-main);\n  font-weight: var(--body-font-weight-semi-bold);\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--spacing-medium-lg);\n  margin-block-end: var(--spacing-large-xxl);\n  flex-wrap: wrap;\n}\n.page-title {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.page-subtitle {\n  margin: var(--spacing-small-xxxs) 0 0;\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 9px 18px;\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n  text-decoration: none;\n}\n.btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn--primary {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.btn--secondary:hover:not(:disabled) {\n  background: var(--ui-border);\n  color: var(--ui-text-main);\n}\n.state-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  text-align: center;\n}\n.state-center__text {\n  font-size: var(--text-base);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.state-center__icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--functional-danger-500);\n}\n.state-center--error .state-center__text {\n  color: var(--functional-danger-600);\n}\n.profile-layout {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: var(--spacing-large-xxl);\n  width: 100%;\n}\n.profile-avatar-card {\n  padding: var(--spacing-large-xxl);\n  overflow: hidden;\n  flex: 0 0 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  text-align: center;\n}\n.profile-details {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .profile-layout {\n    flex-direction: column;\n  }\n  .profile-avatar-card,\n  .profile-details {\n    flex: 1 1 auto;\n    width: 100%;\n  }\n}\n.avatar-wrap {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 3px solid var(--ui-border);\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-600);\n}\n.avatar-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-small-xxs);\n}\n.avatar-name {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.avatar-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.avatar-badge--active {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.avatar-desc {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  line-height: 1.5;\n  margin: 0;\n}\n.avatar-stats {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  text-align: start;\n  padding-block-start: var(--spacing-small-xs);\n  border-block-start: 1px solid var(--ui-border);\n}\n.avatar-stats__label {\n  font-size: var(--text-xs);\n  color: var(--ui-text-muted);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  align-self: center;\n}\n.avatar-stats__value {\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  align-self: center;\n  word-break: break-word;\n}\n.profile-details {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.profile-section {\n  display: flex;\n  flex-direction: column;\n}\n.profile-section__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  border-block-end: 1px solid var(--ui-border);\n}\n.profile-section__title {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.profile-section__body {\n  padding: var(--spacing-large-xxl);\n}\n.btn--ghost-edit {\n  background: transparent;\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  padding: 6px 12px;\n  font-size: var(--text-xs);\n}\n.btn--ghost-edit mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn--ghost-edit:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.banner {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n}\n.banner mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.banner--success {\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  color: var(--functional-success-700);\n}\n.banner--error {\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n}\n.detail-grid {\n  display: flex;\n  flex-direction: column;\n}\n.detail-field {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding-block: var(--spacing-small-xs);\n  border-block-end: 1px solid var(--ui-border);\n}\n.detail-field:last-child {\n  border-block-end: none;\n}\n@media (max-width: 540px) {\n  .detail-field {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-small-xxxs);\n    align-items: flex-start;\n  }\n}\n.detail-field__label {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-regular, 400);\n  color: var(--ui-text-muted);\n  letter-spacing: normal;\n  text-transform: none;\n}\n.detail-field__value {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n  text-align: end;\n  word-break: break-word;\n}\n@media (max-width: 540px) {\n  .detail-field__value {\n    text-align: start;\n  }\n}\n.link {\n  color: var(--brand-primary-500);\n  text-decoration: none;\n  word-break: break-all;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium-md);\n}\n@media (max-width: 540px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field__label {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n}\n.form-field__input,\n.form-field__textarea,\n.form-field__select {\n  padding: 10px 14px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  background: var(--ui-bg-surface);\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  resize: vertical;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-field__input:focus,\n.form-field__textarea:focus,\n.form-field__select:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.form-field__input--error {\n  border-color: var(--functional-danger-500) !important;\n}\n.form-field__error {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n/*# sourceMappingURL=company-profile.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyProfileComponent, { className: "CompanyProfileComponent", filePath: "src/components/dashboardlayout/company/company-profile/company-profile.ts", lineNumber: 26 });
})();
export {
  CompanyProfileComponent
};
//# sourceMappingURL=chunk-7YU7ZWEG.js.map
