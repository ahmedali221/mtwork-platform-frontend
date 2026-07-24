import {
  UserTypeId
} from "./chunk-5WHRH4NB.js";
import {
  LookupService
} from "./chunk-WMD6EG53.js";
import {
  UserService
} from "./chunk-TUIWGNTU.js";
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
import "./chunk-AIQ4E4TV.js";
import "./chunk-APK5HPN3.js";
import {
  ApiService,
  environment
} from "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-BHGUJP3X.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MQLQGMUZ.js";

// src/services/attachment.service.ts
var _AttachmentService = class _AttachmentService {
  constructor() {
    this.apiService = inject(ApiService);
    this.http = inject(HttpClient);
  }
  /**
   * POST /api/Attachment/Upload — multipart/form-data
   * @param file The file to upload
   * @param entityType Optional: context for the upload (e.g. 'contract', 'user')
   */
  upload(file, entityType) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    if (entityType) {
      formData.append("entityType", entityType);
    }
    return this.apiService.postForm("Attachment/Upload", formData).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * GET /api/User/GetBlobFile?filePath={path} — download file as blob
   */
  getBlobFile(filePath) {
    const token = localStorage.getItem("MT_token") || "";
    const language = localStorage.getItem("lang") || "en";
    const headers = new HttpHeaders().set("lang", language).set("Authorization", "Bearer " + token);
    return this.http.get(`${environment.baseUrl}User/GetBlobFile`, {
      params: { filePath },
      headers,
      responseType: "blob"
    }).pipe(catchError((err) => throwError(() => err)));
  }
};
_AttachmentService.\u0275fac = function AttachmentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttachmentService)();
};
_AttachmentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttachmentService, factory: _AttachmentService.\u0275fac, providedIn: "root" });
var AttachmentService = _AttachmentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/features/profile/user-profile/user-profile.ts
var _forTrack0 = ($index, $item) => $item.id;
function UserProfileComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "mat-spinner", 12);
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "profile.loading"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "profile.loading"));
  }
}
function UserProfileComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon", 14);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.loadError()));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "profile.actions.retry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "profile.actions.retry"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.user().profileImagePath, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.firstName, (tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.lastName));
  }
}
function UserProfileComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "profile.actions.uploading"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "profile.actions.uploadAvatar"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.avatarError()));
  }
}
function UserProfileComponent_Conditional_20_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("avatar-badge--active", (tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ((tmp_3_0 = ctx_r1.user()) == null ? null : tmp_3_0.isActive) ? "profile.status.active" : "profile.status.inactive"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon", 42);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "profile.banners.saved"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 42);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.saveError()), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", (tmp_3_0 = ctx_r1.user()) == null ? null : tmp_3_0.cvPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "profile.actions.download"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", (tmp_3_0 = ctx_r1.user()) == null ? null : tmp_3_0.passportPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "profile.actions.download"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", (tmp_3_0 = ctx_r1.user()) == null ? null : tmp_3_0.nationalIdPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "profile.actions.download"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_20_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 54)(1, "header", 35)(2, "h3", 55);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 56);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_20_Conditional_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(7, "mat-icon", 42);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37)(12, "div", 57)(13, "div", 58)(14, "span", 59);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 58)(20, "span", 59);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 60);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 58)(26, "span", 59);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 60);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 58)(32, "span", 59);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 60);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 58)(38, "span", 59);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 60);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 58)(45, "span", 59);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 60);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "section", 61)(52, "header", 35)(53, "h3", 62);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_20_Conditional_38_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(58, "mat-icon", 42);
    \u0275\u0275text(59, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 37)(63, "div", 57)(64, "div", 58)(65, "span", 59);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 60);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 58)(71, "span", 59);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 60);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 58)(77, "span", 59);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 60);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(82, "section", 63)(83, "header", 35)(84, "h3", 64);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "button", 56);
    \u0275\u0275pipe(88, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_20_Conditional_38_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(89, "mat-icon", 42);
    \u0275\u0275text(90, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 37)(94, "div", 57)(95, "div", 58)(96, "span", 59);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span", 60);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 58)(102, "span", 59);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 60);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 58)(108, "span", 59);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span", 60);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 65)(114, "div", 66)(115, "span", 67);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(118, UserProfileComponent_Conditional_20_Conditional_38_Conditional_118_Template, 3, 4, "a", 68)(119, UserProfileComponent_Conditional_20_Conditional_38_Conditional_119_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 66)(121, "span", 67);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(124, UserProfileComponent_Conditional_20_Conditional_38_Conditional_124_Template, 3, 4, "a", 68)(125, UserProfileComponent_Conditional_20_Conditional_38_Conditional_125_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 66)(127, "span", 67);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(130, UserProfileComponent_Conditional_20_Conditional_38_Conditional_130_Template, 3, 4, "a", 68)(131, UserProfileComponent_Conditional_20_Conditional_38_Conditional_131_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(132, "section", 70)(133, "header", 35)(134, "h3", 71);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "button", 56);
    \u0275\u0275pipe(138, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_20_Conditional_38_Template_button_click_137_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditing());
    });
    \u0275\u0275elementStart(139, "mat-icon", 42);
    \u0275\u0275text(140, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 37)(144, "div", 57)(145, "div", 58)(146, "span", 59);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "span", 60);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 58)(152, "span", 59);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 60);
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 58)(158, "span", 59);
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span", 60);
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_30_0;
    let tmp_32_0;
    let tmp_34_0;
    let tmp_36_0;
    let tmp_38_0;
    let tmp_40_0;
    let tmp_45_0;
    let tmp_47_0;
    let tmp_49_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 48, "profile.sections.personal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 50, "profile.actions.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 52, "profile.actions.edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 54, "profile.fields.firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r1.user()) == null ? null : tmp_6_0.firstName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 56, "profile.fields.lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r1.user()) == null ? null : tmp_8_0.lastName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 58, "profile.fields.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r1.user()) == null ? null : tmp_10_0.email) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 60, "profile.fields.phoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_12_0 = ctx_r1.user()) == null ? null : tmp_12_0.phoneNumber) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 62, "profile.fields.gender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 64, ctx_r1.getGenderKey((tmp_14_0 = ctx_r1.user()) == null ? null : tmp_14_0.gender)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 66, "profile.fields.birthDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_16_0 = ctx_r1.user()) == null ? null : tmp_16_0.birthDate) ? \u0275\u0275pipeBind2(50, 68, ctx_r1.user().birthDate, "mediumDate") : "\u2014", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 71, "profile.sections.address"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(57, 73, "profile.actions.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 75, "profile.actions.edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 77, "profile.fields.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCountryName((tmp_21_0 = ctx_r1.user()) == null ? null : tmp_21_0.countryId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 79, "profile.fields.city"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCityName((tmp_23_0 = ctx_r1.user()) == null ? null : tmp_23_0.cityId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 81, "profile.fields.address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_25_0 = ctx_r1.user()) == null ? null : tmp_25_0.address) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 83, "profile.sections.identity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(88, 85, "profile.actions.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 87, "profile.actions.edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 89, "profile.fields.nationalId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_30_0 = ctx_r1.user()) == null ? null : tmp_30_0.nationalId) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 91, "profile.fields.passportNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_32_0 = ctx_r1.user()) == null ? null : tmp_32_0.passportNumber) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 93, "profile.fields.ibanNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_34_0 = ctx_r1.user()) == null ? null : tmp_34_0.ibanNumber) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 95, "profile.fields.cv"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_36_0 = ctx_r1.user()) == null ? null : tmp_36_0.cvPath) ? 118 : 119);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 97, "profile.fields.passport"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_38_0 = ctx_r1.user()) == null ? null : tmp_38_0.passportPath) ? 124 : 125);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 99, "profile.fields.nationalIdFile"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_40_0 = ctx_r1.user()) == null ? null : tmp_40_0.nationalIdPath) ? 130 : 131);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(136, 101, "profile.sections.education"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(138, 103, "profile.actions.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(142, 105, "profile.actions.edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 107, "profile.fields.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getJobTitleName((tmp_45_0 = ctx_r1.user()) == null ? null : tmp_45_0.jobTitleId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(154, 109, "profile.fields.qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getQualificationName((tmp_47_0 = ctx_r1.user()) == null ? null : tmp_47_0.qualificationId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 111, "profile.fields.university"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getUniversityName((tmp_49_0 = ctx_r1.user()) == null ? null : tmp_49_0.universityId));
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.errors.firstNameRequired"));
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.errors.lastNameRequired"));
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.name);
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r8.name);
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_For_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", q_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r9.name);
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_For_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", u_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r10.name);
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "profile.actions.saving"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "profile.actions.save"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 33)(1, "header", 35)(2, "h3", 72);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37)(6, "form", 38);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("ngSubmit", function UserProfileComponent_Conditional_20_Conditional_39_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 45)(10, "label", 73);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 74);
    \u0275\u0275conditionalCreate(16, UserProfileComponent_Conditional_20_Conditional_39_Conditional_16_Template, 3, 3, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 45)(18, "label", 75);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementStart(21, "span", 42);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 76);
    \u0275\u0275conditionalCreate(24, UserProfileComponent_Conditional_20_Conditional_39_Conditional_24_Template, 3, 3, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 45)(26, "label", 77);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 45)(31, "label", 79);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 80)(35, "option", 81);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 81);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 81);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 45)(45, "label", 82);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 45)(50, "label", 84);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 45)(55, "label", 86);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 45)(60, "label", 88);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 45)(65, "label", 90);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 91)(69, "option", 81);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(72, UserProfileComponent_Conditional_20_Conditional_39_For_73_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 45)(75, "label", 92);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "select", 93)(79, "option", 81);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(82, UserProfileComponent_Conditional_20_Conditional_39_For_83_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 40)(85, "label", 94);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 45)(90, "label", 96);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "select", 97)(94, "option", 81);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(97, UserProfileComponent_Conditional_20_Conditional_39_For_98_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 45)(100, "label", 98);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "select", 99)(104, "option", 81);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(107, UserProfileComponent_Conditional_20_Conditional_39_For_108_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 45)(110, "label", 100);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "select", 101)(114, "option", 81);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(117, UserProfileComponent_Conditional_20_Conditional_39_For_118_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "div", 50)(120, "button", 102);
    \u0275\u0275pipe(121, "transloco");
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_20_Conditional_39_Template_button_click_120_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditing());
    });
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "button", 51);
    \u0275\u0275pipe(125, "transloco");
    \u0275\u0275conditionalCreate(126, UserProfileComponent_Conditional_20_Conditional_39_Conditional_126_Template, 3, 3)(127, UserProfileComponent_Conditional_20_Conditional_39_Conditional_127_Template, 4, 3);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 46, "profile.sections.edit"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 48, "profile.sections.edit"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 50, "profile.fields.firstName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.fieldInvalid("firstName"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("firstName") ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 52, "profile.fields.lastName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.fieldInvalid("lastName"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fieldInvalid("lastName") ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 54, "profile.fields.phoneNumber"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 56, "profile.fields.gender"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 58, "profile.gender.unspecified"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 60, "profile.gender.male"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 62, "profile.gender.female"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 64, "profile.fields.birthDate"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 66, "profile.fields.nationalId"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 68, "profile.fields.passportNumber"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 70, "profile.fields.ibanNumber"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 72, "profile.fields.country"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 74, "profile.placeholders.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.countries());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 76, "profile.fields.city"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cities().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 78, "profile.placeholders.city"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.cities());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 80, "profile.fields.address"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 82, "profile.fields.jobTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 84, "profile.placeholders.jobTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.jobTitles());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 86, "profile.fields.qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 88, "profile.placeholders.qualification"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.qualifications());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 90, "profile.fields.university"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 92, "profile.placeholders.university"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.universities());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(121, 94, "profile.actions.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 96, "profile.actions.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(125, 98, "profile.actions.save"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSaving() ? 126 : 127);
  }
}
function UserProfileComponent_Conditional_20_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon", 42);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "profile.banners.passwordChanged"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 42);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.passwordError()), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.password.currentRequired"));
  }
}
function UserProfileComponent_Conditional_20_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.password.newMinLength"));
  }
}
function UserProfileComponent_Conditional_20_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.password.mismatch"));
  }
}
function UserProfileComponent_Conditional_20_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "profile.password.submitting"), " ");
  }
}
function UserProfileComponent_Conditional_20_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "profile.password.submit"), " ");
  }
}
function UserProfileComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "aside", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, UserProfileComponent_Conditional_20_Conditional_3_Template, 1, 1, "img", 18)(4, UserProfileComponent_Conditional_20_Conditional_4_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 20)(6, "input", 21);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("change", function UserProfileComponent_Conditional_20_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, UserProfileComponent_Conditional_20_Conditional_8_Template, 3, 3)(9, UserProfileComponent_Conditional_20_Conditional_9_Template, 4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UserProfileComponent_Conditional_20_Conditional_10_Template, 3, 3, "p", 22);
    \u0275\u0275elementStart(11, "div", 23)(12, "h2", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, UserProfileComponent_Conditional_20_Conditional_17_Template, 3, 5, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dl", 27)(19, "dt", 28);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dt", 28);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 29);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dt", 28);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 30);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275conditionalCreate(36, UserProfileComponent_Conditional_20_Conditional_36_Template, 5, 3, "div", 31);
    \u0275\u0275conditionalCreate(37, UserProfileComponent_Conditional_20_Conditional_37_Template, 5, 3, "div", 32);
    \u0275\u0275conditionalCreate(38, UserProfileComponent_Conditional_20_Conditional_38_Template, 163, 113);
    \u0275\u0275conditionalCreate(39, UserProfileComponent_Conditional_20_Conditional_39_Template, 128, 100, "section", 33);
    \u0275\u0275elementStart(40, "section", 34)(41, "header", 35)(42, "h3", 36);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 37);
    \u0275\u0275conditionalCreate(46, UserProfileComponent_Conditional_20_Conditional_46_Template, 5, 3, "div", 31);
    \u0275\u0275conditionalCreate(47, UserProfileComponent_Conditional_20_Conditional_47_Template, 5, 3, "div", 32);
    \u0275\u0275elementStart(48, "form", 38);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275listener("ngSubmit", function UserProfileComponent_Conditional_20_Template_form_ngSubmit_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChangePassword());
    });
    \u0275\u0275elementStart(50, "div", 39)(51, "div", 40)(52, "label", 41);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementStart(55, "span", 42);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "input", 43);
    \u0275\u0275conditionalCreate(58, UserProfileComponent_Conditional_20_Conditional_58_Template, 3, 3, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 45)(60, "label", 46);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementStart(63, "span", 42);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(65, "input", 47);
    \u0275\u0275conditionalCreate(66, UserProfileComponent_Conditional_20_Conditional_66_Template, 3, 3, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 45)(68, "label", 48);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementStart(71, "span", 42);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(73, "input", 49);
    \u0275\u0275conditionalCreate(74, UserProfileComponent_Conditional_20_Conditional_74_Template, 3, 3, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 50)(76, "button", 51);
    \u0275\u0275pipe(77, "transloco");
    \u0275\u0275conditionalCreate(78, UserProfileComponent_Conditional_20_Conditional_78_Template, 3, 3)(79, UserProfileComponent_Conditional_20_Conditional_79_Template, 4, 3);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.user()) == null ? null : tmp_1_0.profileImagePath) ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-loading", ctx_r1.isUploadingAvatar());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isUploadingAvatar());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 42, "profile.actions.uploadAvatar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isUploadingAvatar() ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.avatarError() ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_7_0 = ctx_r1.user()) == null ? null : tmp_7_0.firstName, " ", (tmp_7_0 = ctx_r1.user()) == null ? null : tmp_7_0.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 44, ctx_r1.getRoleKey((tmp_8_0 = ctx_r1.user()) == null ? null : tmp_8_0.userTypeId)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.user()) == null ? null : tmp_9_0.isActive) !== void 0 ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 46, "profile.fields.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r1.user()) == null ? null : tmp_11_0.email) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 48, "profile.fields.phoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.user()) == null ? null : tmp_13_0.phoneNumber) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 50, "profile.fields.country"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCountryName((tmp_15_0 = ctx_r1.user()) == null ? null : tmp_15_0.countryId));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 52, "profile.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.saveSuccess() ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveError() ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditing() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 39 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 54, "profile.sections.security"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.passwordSuccess() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordError() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 56, "profile.sections.security"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 58, "profile.password.current"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.passwordFieldInvalid("currentPassword"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordFieldInvalid("currentPassword") ? 58 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 60, "profile.password.new"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.passwordFieldInvalid("newPassword"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordFieldInvalid("newPassword") ? 66 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 62, "profile.password.confirm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-field__input--error", ctx_r1.passwordFieldInvalid("confirmPassword") || ctx_r1.passwordsMismatch());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordsMismatch() ? 74 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isChangingPassword());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(77, 64, "profile.password.submit"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isChangingPassword() ? 78 : 79);
  }
}
var _UserProfileComponent = class _UserProfileComponent {
  constructor() {
    this.userService = inject(UserService);
    this.lookupService = inject(LookupService);
    this.attachmentService = inject(AttachmentService);
    this.fb = inject(FormBuilder);
    this.user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : []);
    this.isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
    this.isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : []);
    this.isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : []);
    this.saveError = signal(null, ...ngDevMode ? [{ debugName: "saveError" }] : []);
    this.saveSuccess = signal(false, ...ngDevMode ? [{ debugName: "saveSuccess" }] : []);
    this.isUploadingAvatar = signal(false, ...ngDevMode ? [{ debugName: "isUploadingAvatar" }] : []);
    this.avatarError = signal(null, ...ngDevMode ? [{ debugName: "avatarError" }] : []);
    this.isChangingPassword = signal(false, ...ngDevMode ? [{ debugName: "isChangingPassword" }] : []);
    this.passwordError = signal(null, ...ngDevMode ? [{ debugName: "passwordError" }] : []);
    this.passwordSuccess = signal(false, ...ngDevMode ? [{ debugName: "passwordSuccess" }] : []);
    this.countries = signal([], ...ngDevMode ? [{ debugName: "countries" }] : []);
    this.cities = signal([], ...ngDevMode ? [{ debugName: "cities" }] : []);
    this.jobTitles = signal([], ...ngDevMode ? [{ debugName: "jobTitles" }] : []);
    this.qualifications = signal([], ...ngDevMode ? [{ debugName: "qualifications" }] : []);
    this.universities = signal([], ...ngDevMode ? [{ debugName: "universities" }] : []);
    this.profileForm = this.fb.nonNullable.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
      lastName: ["", [Validators.required, Validators.maxLength(60)]],
      phoneNumber: [""],
      address: [""],
      birthDate: [""],
      gender: [0],
      nationalId: [""],
      passportNumber: [""],
      ibanNumber: [""],
      jobTitleId: [0],
      qualificationId: [0],
      universityId: [0],
      countryId: [0],
      cityId: [0]
    });
    this.passwordForm = this.fb.nonNullable.group({
      currentPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: [this.passwordsMatchValidator] });
  }
  // ── Lifecycle ───────────────────────────────────────────────────
  ngOnInit() {
    this.loadProfile();
    this.loadLookups();
    this.profileForm.controls.countryId.valueChanges.subscribe((countryId) => {
      if (countryId && countryId > 0) {
        this.loadCities(countryId);
      } else {
        this.cities.set([]);
        this.profileForm.controls.cityId.setValue(0);
      }
    });
    this.profileForm.valueChanges.subscribe(() => {
      if (this.saveError())
        this.saveError.set(null);
      if (this.saveSuccess())
        this.saveSuccess.set(false);
    });
    this.passwordForm.valueChanges.subscribe(() => {
      if (this.passwordError())
        this.passwordError.set(null);
      if (this.passwordSuccess())
        this.passwordSuccess.set(false);
    });
  }
  // ── Data loading ────────────────────────────────────────────────
  loadProfile() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.userService.getMyProfile().subscribe({
      next: (data) => {
        this.user.set(data);
        this.patchFormFromUser(data);
        if (data.countryId && data.countryId > 0) {
          this.loadCities(data.countryId);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set("profile.errors.load");
        this.isLoading.set(false);
      }
    });
  }
  loadLookups() {
    this.lookupService.getCountries().subscribe((items) => this.countries.set(items));
    this.lookupService.getJobTitles().subscribe((items) => this.jobTitles.set(items));
    this.lookupService.getQualifications().subscribe((items) => this.qualifications.set(items));
    this.lookupService.getUniversities().subscribe((items) => this.universities.set(items));
  }
  loadCities(countryId) {
    this.lookupService.getCitiesByCountry(countryId).subscribe((items) => this.cities.set(items));
  }
  retry() {
    this.loadProfile();
  }
  // ── Patch form ──────────────────────────────────────────────────
  patchFormFromUser(u) {
    this.profileForm.patchValue({
      firstName: u.firstName ?? "",
      lastName: u.lastName ?? "",
      phoneNumber: u.phoneNumber ?? "",
      address: u.address ?? "",
      birthDate: this.toDateInput(u.birthDate),
      gender: u.gender ?? 0,
      nationalId: u.nationalId ?? "",
      passportNumber: u.passportNumber ?? "",
      ibanNumber: u.ibanNumber ?? "",
      jobTitleId: u.jobTitleId ?? 0,
      qualificationId: u.qualificationId ?? 0,
      universityId: u.universityId ?? 0,
      countryId: u.countryId ?? 0,
      cityId: u.cityId ?? 0
    });
  }
  // ── Edit toggles ────────────────────────────────────────────────
  startEditing() {
    const u = this.user();
    if (u)
      this.patchFormFromUser(u);
    this.isEditing.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);
  }
  cancelEditing() {
    const u = this.user();
    if (u)
      this.patchFormFromUser(u);
    this.isEditing.set(false);
    this.saveError.set(null);
  }
  fieldInvalid(name) {
    const ctrl = this.profileForm.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  // ── Save profile ────────────────────────────────────────────────
  onSave() {
    this.saveError.set(null);
    this.saveSuccess.set(false);
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const current = this.user();
    if (!current)
      return;
    this.isSaving.set(true);
    const v = this.profileForm.getRawValue();
    const payload = __spreadProps(__spreadValues({}, current), {
      firstName: v.firstName,
      lastName: v.lastName,
      phoneNumber: v.phoneNumber || void 0,
      address: v.address || void 0,
      birthDate: this.fromDateInput(v.birthDate),
      gender: v.gender > 0 ? v.gender : void 0,
      nationalId: v.nationalId || void 0,
      passportNumber: v.passportNumber || void 0,
      ibanNumber: v.ibanNumber || void 0,
      jobTitleId: v.jobTitleId > 0 ? v.jobTitleId : void 0,
      qualificationId: v.qualificationId > 0 ? v.qualificationId : void 0,
      universityId: v.universityId > 0 ? v.universityId : void 0,
      countryId: v.countryId > 0 ? v.countryId : void 0,
      cityId: v.cityId > 0 ? v.cityId : void 0
    });
    this.userService.update(payload).subscribe({
      next: () => {
        this.user.set(__spreadValues(__spreadValues({}, current), payload));
        this.isSaving.set(false);
        this.isEditing.set(false);
        this.saveSuccess.set(true);
      },
      error: () => {
        this.isSaving.set(false);
        this.saveError.set("profile.errors.save");
      }
    });
  }
  // ── Avatar upload ───────────────────────────────────────────────
  onAvatarSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.avatarError.set(null);
    this.isUploadingAvatar.set(true);
    this.attachmentService.upload(file, "user").subscribe({
      next: (res) => {
        const current = this.user();
        if (!current) {
          this.isUploadingAvatar.set(false);
          return;
        }
        const updated = __spreadProps(__spreadValues({}, current), { profileImagePath: res.filePath });
        this.userService.update(updated).subscribe({
          next: () => {
            this.user.set(__spreadProps(__spreadValues({}, current), { profileImagePath: res.filePath }));
            this.isUploadingAvatar.set(false);
          },
          error: () => {
            this.isUploadingAvatar.set(false);
            this.avatarError.set("profile.errors.avatarSave");
          }
        });
      },
      error: () => {
        this.isUploadingAvatar.set(false);
        this.avatarError.set("profile.errors.avatarUpload");
      }
    });
    input.value = "";
  }
  // ── Change password ─────────────────────────────────────────────
  passwordFieldInvalid(name) {
    const ctrl = this.passwordForm.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }
  passwordsMismatch() {
    return !!(this.passwordForm.errors?.["passwordsMismatch"] && this.passwordForm.get("confirmPassword")?.touched);
  }
  onChangePassword() {
    this.passwordError.set(null);
    this.passwordSuccess.set(false);
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    this.isChangingPassword.set(true);
    const payload = this.passwordForm.getRawValue();
    this.userService.resetPassword(payload).subscribe({
      next: () => {
        this.isChangingPassword.set(false);
        this.passwordSuccess.set(true);
        this.passwordForm.reset({ currentPassword: "", newPassword: "", confirmPassword: "" });
      },
      error: () => {
        this.isChangingPassword.set(false);
        this.passwordError.set("profile.errors.password");
      }
    });
  }
  // ── Display helpers (read-only views) ───────────────────────────
  getInitials(first, last) {
    const f = (first ?? "").trim().charAt(0).toUpperCase();
    const l = (last ?? "").trim().charAt(0).toUpperCase();
    return f + l || "?";
  }
  getCountryName(id) {
    return this.lookupName(this.countries(), id);
  }
  getCityName(id) {
    return this.lookupName(this.cities(), id);
  }
  getJobTitleName(id) {
    return this.lookupName(this.jobTitles(), id);
  }
  getQualificationName(id) {
    return this.lookupName(this.qualifications(), id);
  }
  getUniversityName(id) {
    return this.lookupName(this.universities(), id);
  }
  lookupName(list, id) {
    if (!id || id <= 0)
      return "\u2014";
    const found = list.find((x) => x.id === id);
    return found?.name ?? "\u2014";
  }
  /** Map gender enum → i18n key. Backend convention: 1 = Male, 2 = Female. */
  getGenderKey(g) {
    if (g === 1)
      return "profile.gender.male";
    if (g === 2)
      return "profile.gender.female";
    return "profile.gender.unspecified";
  }
  /** Map UserTypeId → i18n key for the role badge. */
  getRoleKey(t) {
    switch (t) {
      case UserTypeId.Employee:
        return "profile.role.employee";
      case UserTypeId.Contractor:
        return "profile.role.contractor";
      case UserTypeId.Business:
        return "profile.role.business";
      // Admin is a JWT role claim, not a UserType — handle via role string fallback
      default:
        return "profile.role.unknown";
    }
  }
  /** Best-effort ISO → yyyy-mm-dd for <input type="date">. */
  toDateInput(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    if (isNaN(d.getTime()))
      return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  /** yyyy-mm-dd → ISO for the API. Returns undefined for empty. */
  fromDateInput(s) {
    if (!s)
      return void 0;
    const d = new Date(s);
    return isNaN(d.getTime()) ? void 0 : d.toISOString();
  }
  // ── Cross-field password validator ──────────────────────────────
  passwordsMatchValidator(group) {
    const np = group.get("newPassword")?.value;
    const cp = group.get("confirmPassword")?.value;
    if (!np || !cp)
      return null;
    return np === cp ? null : { passwordsMismatch: true };
  }
};
_UserProfileComponent.\u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileComponent)();
};
_UserProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], decls: 21, vars: 13, consts: [[1, "page-container", "profile-page"], [1, "breadcrumb"], [1, "breadcrumb__item"], ["aria-hidden", "true", 1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header"], [1, "page-header__left"], [1, "page-title"], [1, "page-subtitle"], ["role", "status", 1, "state-center"], ["role", "alert", 1, "state-center", "state-center--error"], [1, "profile-layout"], ["diameter", "48"], [1, "state-center__text"], ["aria-hidden", "true", 1, "state-center__icon"], [1, "btn", "btn--secondary", 3, "click"], [1, "card", "profile-avatar-card"], ["aria-hidden", "true", 1, "avatar-wrap"], ["alt", "", 1, "avatar-img", 3, "src"], [1, "avatar-initials"], [1, "avatar-upload-btn"], ["type", "file", "accept", "image/*", 1, "avatar-upload-input", 3, "change", "disabled"], ["role", "alert", 1, "avatar-error"], [1, "avatar-meta"], [1, "avatar-name"], [1, "avatar-badge", "avatar-badge--role"], [1, "avatar-badge", 3, "avatar-badge--active"], [1, "avatar-stats"], [1, "avatar-stats__label"], [1, "avatar-stats__value"], [1, "profile-details"], ["role", "status", 1, "banner", "banner--success"], ["role", "alert", 1, "banner", "banner--error"], ["aria-labelledby", "up-sec-edit", 1, "card", "profile-section"], ["aria-labelledby", "up-sec-security", 1, "card", "profile-section"], [1, "profile-section__header"], ["id", "up-sec-security", 1, "profile-section__title"], [1, "profile-section__body"], ["novalidate", "", 1, "edit-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-field", "form-field--full"], ["for", "up-currentPassword", 1, "form-field__label"], ["aria-hidden", "true"], ["id", "up-currentPassword", "type", "password", "formControlName", "currentPassword", "autocomplete", "current-password", "aria-required", "true", 1, "form-field__input"], ["role", "alert", 1, "form-field__error"], [1, "form-field"], ["for", "up-newPassword", 1, "form-field__label"], ["id", "up-newPassword", "type", "password", "formControlName", "newPassword", "autocomplete", "new-password", "aria-required", "true", 1, "form-field__input"], ["for", "up-confirmPassword", 1, "form-field__label"], ["id", "up-confirmPassword", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "aria-required", "true", 1, "form-field__input"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], ["diameter", "14", "aria-hidden", "true"], [1, "avatar-badge"], ["aria-labelledby", "up-sec-personal", 1, "card", "profile-section"], ["id", "up-sec-personal", 1, "profile-section__title"], ["type", "button", 1, "btn", "btn--ghost-edit", 3, "click"], [1, "detail-grid"], [1, "detail-field"], [1, "detail-field__label"], [1, "detail-field__value"], ["aria-labelledby", "up-sec-address", 1, "card", "profile-section"], ["id", "up-sec-address", 1, "profile-section__title"], ["aria-labelledby", "up-sec-identity", 1, "card", "profile-section"], ["id", "up-sec-identity", 1, "profile-section__title"], [1, "file-links"], [1, "file-link"], [1, "file-link__label"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link", 3, "href"], [1, "file-link__empty"], ["aria-labelledby", "up-sec-education", 1, "card", "profile-section"], ["id", "up-sec-education", 1, "profile-section__title"], ["id", "up-sec-edit", 1, "profile-section__title"], ["for", "up-firstName", 1, "form-field__label"], ["id", "up-firstName", "formControlName", "firstName", "aria-required", "true", 1, "form-field__input"], ["for", "up-lastName", 1, "form-field__label"], ["id", "up-lastName", "formControlName", "lastName", "aria-required", "true", 1, "form-field__input"], ["for", "up-phone", 1, "form-field__label"], ["id", "up-phone", "type", "tel", "formControlName", "phoneNumber", 1, "form-field__input"], ["for", "up-gender", 1, "form-field__label"], ["id", "up-gender", "formControlName", "gender", 1, "form-field__select"], [3, "ngValue"], ["for", "up-birthDate", 1, "form-field__label"], ["id", "up-birthDate", "type", "date", "formControlName", "birthDate", 1, "form-field__input"], ["for", "up-nationalId", 1, "form-field__label"], ["id", "up-nationalId", "formControlName", "nationalId", 1, "form-field__input"], ["for", "up-passport", 1, "form-field__label"], ["id", "up-passport", "formControlName", "passportNumber", 1, "form-field__input"], ["for", "up-iban", 1, "form-field__label"], ["id", "up-iban", "formControlName", "ibanNumber", 1, "form-field__input"], ["for", "up-country", 1, "form-field__label"], ["id", "up-country", "formControlName", "countryId", 1, "form-field__select"], ["for", "up-city", 1, "form-field__label"], ["id", "up-city", "formControlName", "cityId", 1, "form-field__select", 3, "disabled"], ["for", "up-address", 1, "form-field__label"], ["id", "up-address", "formControlName", "address", 1, "form-field__input"], ["for", "up-jobTitle", 1, "form-field__label"], ["id", "up-jobTitle", "formControlName", "jobTitleId", 1, "form-field__select"], ["for", "up-qualification", 1, "form-field__label"], ["id", "up-qualification", "formControlName", "qualificationId", 1, "form-field__select"], ["for", "up-university", 1, "form-field__label"], ["id", "up-university", "formControlName", "universityId", 1, "form-field__select"], ["type", "button", 1, "btn", "btn--secondary", 3, "click", "disabled"], ["diameter", "16", "aria-hidden", "true"]], template: function UserProfileComponent_Template(rf, ctx) {
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
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "h1", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, UserProfileComponent_Conditional_18_Template, 6, 6, "div", 9)(19, UserProfileComponent_Conditional_19_Template, 10, 9, "div", 10)(20, UserProfileComponent_Conditional_20_Template, 80, 66, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "common.breadcrumb"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "profile.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "profile.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "profile.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 18 : ctx.loadError() ? 19 : 20);
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
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  width: 100%;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-border);\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  font-weight: var(--body-font-weight-semi-bold);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--spacing-medium-lg);\n  margin-block-end: var(--spacing-large-xxl);\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: var(--spacing-small-xxxs) 0 0;\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 9px 18px;\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.btn--secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-border);\n  color: var(--ui-text-main);\n}\n.btn--ghost-edit[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  padding: 6px 12px;\n  font-size: var(--text-xs);\n}\n.btn--ghost-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn--ghost-edit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.state-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  text-align: center;\n}\n.state-center__text[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.state-center__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--functional-danger-500);\n}\n.state-center--error[_ngcontent-%COMP%]   .state-center__text[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: var(--spacing-large-xxl);\n  width: 100%;\n}\n.profile-avatar-card[_ngcontent-%COMP%] {\n  padding: var(--spacing-large-xxl);\n  overflow: hidden;\n  flex: 0 0 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  text-align: center;\n}\n.profile-details[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n@media (max-width: 768px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .profile-avatar-card[_ngcontent-%COMP%], \n   .profile-details[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    width: 100%;\n  }\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 3px solid var(--ui-border);\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-600);\n}\n.avatar-upload-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 6px 12px;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.avatar-upload-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.avatar-upload-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-border);\n}\n.avatar-upload-btn.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.avatar-upload-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.avatar-error[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n  margin: 0;\n  text-align: center;\n}\n.avatar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-small-xxs);\n}\n.avatar-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n  text-align: center;\n}\n.avatar-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.avatar-badge--active[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.avatar-badge--role[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.avatar-stats[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  text-align: start;\n  padding-block-start: var(--spacing-small-xs);\n  border-block-start: 1px solid var(--ui-border);\n  margin: 0;\n}\n.avatar-stats__label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--ui-text-muted);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  align-self: center;\n}\n.avatar-stats__value[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  align-self: center;\n  word-break: break-word;\n  margin: 0;\n}\n.profile-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  border-block-end: 1px solid var(--ui-border);\n}\n.profile-section__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.profile-section__body[_ngcontent-%COMP%] {\n  padding: var(--spacing-large-xxl);\n}\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  margin-block-end: var(--spacing-medium-md);\n}\n.banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.banner--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  color: var(--functional-success-700);\n}\n.banner--error[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.detail-field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding-block: var(--spacing-small-xs);\n  border-block-end: 1px solid var(--ui-border);\n}\n.detail-field[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n@media (max-width: 540px) {\n  .detail-field[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-small-xxxs);\n    align-items: flex-start;\n  }\n}\n.detail-field__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-regular, 400);\n  color: var(--ui-text-muted);\n  letter-spacing: normal;\n  text-transform: none;\n}\n.detail-field__value[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n  text-align: end;\n  word-break: break-word;\n}\n@media (max-width: 540px) {\n  .detail-field__value[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n.link[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  text-decoration: none;\n  word-break: break-all;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.file-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  margin-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n.file-link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n}\n.file-link__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.file-link__empty[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  text-align: end;\n}\n.file-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium-md);\n}\n@media (max-width: 540px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field__label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n}\n.form-field__input[_ngcontent-%COMP%], \n.form-field__select[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  background: var(--ui-bg-surface);\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-field__input[_ngcontent-%COMP%]:focus, \n.form-field__select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.form-field__input--error[_ngcontent-%COMP%] {\n  border-color: var(--functional-danger-500) !important;\n}\n.form-field__error[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n/*# sourceMappingURL=user-profile.css.map */"] });
var UserProfileComponent = _UserProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="page-container profile-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="breadcrumb__item">MTWork</span>
    <span class="breadcrumb__sep" aria-hidden="true">\u203A</span>
    <span class="breadcrumb__item breadcrumb__item--active">{{ 'profile.title' | transloco }}</span>
  </nav>

  <!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="page-header__left">
      <h1 class="page-title">{{ 'profile.title' | transloco }}</h1>
      <p class="page-subtitle">{{ 'profile.subtitle' | transloco }}</p>
    </div>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="state-center" role="status" [attr.aria-label]="'profile.loading' | transloco">
      <mat-spinner diameter="48"></mat-spinner>
      <p class="state-center__text">{{ 'profile.loading' | transloco }}</p>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else if (loadError()) {
    <div class="state-center state-center--error" role="alert">
      <mat-icon class="state-center__icon" aria-hidden="true">error_outline</mat-icon>
      <p class="state-center__text">{{ loadError()! | transloco }}</p>
      <button class="btn btn--secondary" (click)="retry()" [attr.aria-label]="'profile.actions.retry' | transloco">
        {{ 'profile.actions.retry' | transloco }}
      </button>
    </div>
  }

  <!-- \u2500\u2500 Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @else {
    <div class="profile-layout">

      <!-- \u2500\u2500 Left column: avatar + summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <aside class="card profile-avatar-card">
        <div class="avatar-wrap" aria-hidden="true">
          @if (user()?.profileImagePath) {
            <img [src]="user()!.profileImagePath" alt="" class="avatar-img" />
          } @else {
            <div class="avatar-initials">{{ getInitials(user()?.firstName, user()?.lastName) }}</div>
          }
        </div>

        <!-- Avatar upload control -->
        <label class="avatar-upload-btn" [class.is-loading]="isUploadingAvatar()">
          <input
            type="file"
            accept="image/*"
            class="avatar-upload-input"
            (change)="onAvatarSelected($event)"
            [disabled]="isUploadingAvatar()"
            [attr.aria-label]="'profile.actions.uploadAvatar' | transloco"
          />
          @if (isUploadingAvatar()) {
            <mat-spinner diameter="14" aria-hidden="true"></mat-spinner>
            {{ 'profile.actions.uploading' | transloco }}
          } @else {
            <mat-icon aria-hidden="true">photo_camera</mat-icon>
            {{ 'profile.actions.uploadAvatar' | transloco }}
          }
        </label>

        @if (avatarError()) {
          <p class="avatar-error" role="alert">{{ avatarError()! | transloco }}</p>
        }

        <div class="avatar-meta">
          <h2 class="avatar-name">
            {{ user()?.firstName }} {{ user()?.lastName }}
          </h2>
          <span class="avatar-badge avatar-badge--role">
            {{ getRoleKey(user()?.userTypeId) | transloco }}
          </span>
          @if (user()?.isActive !== undefined) {
            <span class="avatar-badge" [class.avatar-badge--active]="user()?.isActive">
              {{ (user()?.isActive ? 'profile.status.active' : 'profile.status.inactive') | transloco }}
            </span>
          }
        </div>

        <dl class="avatar-stats">
          <dt class="avatar-stats__label">{{ 'profile.fields.email' | transloco }}</dt>
          <dd class="avatar-stats__value">{{ user()?.email || '\u2014' }}</dd>

          <dt class="avatar-stats__label">{{ 'profile.fields.phoneNumber' | transloco }}</dt>
          <dd class="avatar-stats__value">{{ user()?.phoneNumber || '\u2014' }}</dd>

          <dt class="avatar-stats__label">{{ 'profile.fields.country' | transloco }}</dt>
          <dd class="avatar-stats__value">{{ getCountryName(user()?.countryId) }}</dd>
        </dl>
      </aside>

      <!-- \u2500\u2500 Right column: stack of section cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="profile-details" [attr.aria-label]="'profile.title' | transloco">

        <!-- Save banners -->
        @if (saveSuccess()) {
          <div class="banner banner--success" role="status">
            <mat-icon aria-hidden="true">check_circle</mat-icon>
            {{ 'profile.banners.saved' | transloco }}
          </div>
        }
        @if (saveError()) {
          <div class="banner banner--error" role="alert">
            <mat-icon aria-hidden="true">error_outline</mat-icon>
            {{ saveError()! | transloco }}
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VIEW MODE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (!isEditing()) {

          <!-- Section: Personal Information -->
          <section class="card profile-section" aria-labelledby="up-sec-personal">
            <header class="profile-section__header">
              <h3 id="up-sec-personal" class="profile-section__title">
                {{ 'profile.sections.personal' | transloco }}
              </h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'profile.actions.edit' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                {{ 'profile.actions.edit' | transloco }}
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.firstName' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.firstName || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.lastName' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.lastName || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.email' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.email || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.phoneNumber' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.phoneNumber || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.gender' | transloco }}</span>
                  <span class="detail-field__value">{{ getGenderKey(user()?.gender) | transloco }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.birthDate' | transloco }}</span>
                  <span class="detail-field__value">
                    {{ user()?.birthDate ? (user()!.birthDate! | date:'mediumDate') : '\u2014' }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Section: Address & Location -->
          <section class="card profile-section" aria-labelledby="up-sec-address">
            <header class="profile-section__header">
              <h3 id="up-sec-address" class="profile-section__title">
                {{ 'profile.sections.address' | transloco }}
              </h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'profile.actions.edit' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                {{ 'profile.actions.edit' | transloco }}
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.country' | transloco }}</span>
                  <span class="detail-field__value">{{ getCountryName(user()?.countryId) }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.city' | transloco }}</span>
                  <span class="detail-field__value">{{ getCityName(user()?.cityId) }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.address' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.address || '\u2014' }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Section: Identity & Banking -->
          <section class="card profile-section" aria-labelledby="up-sec-identity">
            <header class="profile-section__header">
              <h3 id="up-sec-identity" class="profile-section__title">
                {{ 'profile.sections.identity' | transloco }}
              </h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'profile.actions.edit' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                {{ 'profile.actions.edit' | transloco }}
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.nationalId' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.nationalId || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.passportNumber' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.passportNumber || '\u2014' }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.ibanNumber' | transloco }}</span>
                  <span class="detail-field__value">{{ user()?.ibanNumber || '\u2014' }}</span>
                </div>
              </div>

              <!-- Display-only file links -->
              <div class="file-links">
                <div class="file-link">
                  <span class="file-link__label">{{ 'profile.fields.cv' | transloco }}</span>
                  @if (user()?.cvPath) {
                    <a [href]="user()?.cvPath" target="_blank" rel="noopener noreferrer" class="link">
                      {{ 'profile.actions.download' | transloco }}
                    </a>
                  } @else { <span class="file-link__empty">\u2014</span> }
                </div>
                <div class="file-link">
                  <span class="file-link__label">{{ 'profile.fields.passport' | transloco }}</span>
                  @if (user()?.passportPath) {
                    <a [href]="user()?.passportPath" target="_blank" rel="noopener noreferrer" class="link">
                      {{ 'profile.actions.download' | transloco }}
                    </a>
                  } @else { <span class="file-link__empty">\u2014</span> }
                </div>
                <div class="file-link">
                  <span class="file-link__label">{{ 'profile.fields.nationalIdFile' | transloco }}</span>
                  @if (user()?.nationalIdPath) {
                    <a [href]="user()?.nationalIdPath" target="_blank" rel="noopener noreferrer" class="link">
                      {{ 'profile.actions.download' | transloco }}
                    </a>
                  } @else { <span class="file-link__empty">\u2014</span> }
                </div>
              </div>
            </div>
          </section>

          <!-- Section: Education & Job -->
          <section class="card profile-section" aria-labelledby="up-sec-education">
            <header class="profile-section__header">
              <h3 id="up-sec-education" class="profile-section__title">
                {{ 'profile.sections.education' | transloco }}
              </h3>
              <button
                type="button"
                class="btn btn--ghost-edit"
                (click)="startEditing()"
                [attr.aria-label]="'profile.actions.edit' | transloco"
              >
                <mat-icon aria-hidden="true">edit</mat-icon>
                {{ 'profile.actions.edit' | transloco }}
              </button>
            </header>
            <div class="profile-section__body">
              <div class="detail-grid">
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.jobTitle' | transloco }}</span>
                  <span class="detail-field__value">{{ getJobTitleName(user()?.jobTitleId) }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.qualification' | transloco }}</span>
                  <span class="detail-field__value">{{ getQualificationName(user()?.qualificationId) }}</span>
                </div>
                <div class="detail-field">
                  <span class="detail-field__label">{{ 'profile.fields.university' | transloco }}</span>
                  <span class="detail-field__value">{{ getUniversityName(user()?.universityId) }}</span>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EDIT MODE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (isEditing()) {
          <section class="card profile-section" aria-labelledby="up-sec-edit">
            <header class="profile-section__header">
              <h3 id="up-sec-edit" class="profile-section__title">
                {{ 'profile.sections.edit' | transloco }}
              </h3>
            </header>
            <div class="profile-section__body">
              <form
                [formGroup]="profileForm"
                (ngSubmit)="onSave()"
                novalidate
                class="edit-form"
                [attr.aria-label]="'profile.sections.edit' | transloco"
              >
                <div class="form-grid">
                  <!-- firstName -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-firstName">
                      {{ 'profile.fields.firstName' | transloco }} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="up-firstName"
                      class="form-field__input"
                      [class.form-field__input--error]="fieldInvalid('firstName')"
                      formControlName="firstName"
                      aria-required="true"
                    />
                    @if (fieldInvalid('firstName')) {
                      <span class="form-field__error" role="alert">{{ 'profile.errors.firstNameRequired' | transloco }}</span>
                    }
                  </div>

                  <!-- lastName -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-lastName">
                      {{ 'profile.fields.lastName' | transloco }} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="up-lastName"
                      class="form-field__input"
                      [class.form-field__input--error]="fieldInvalid('lastName')"
                      formControlName="lastName"
                      aria-required="true"
                    />
                    @if (fieldInvalid('lastName')) {
                      <span class="form-field__error" role="alert">{{ 'profile.errors.lastNameRequired' | transloco }}</span>
                    }
                  </div>

                  <!-- phoneNumber -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-phone">{{ 'profile.fields.phoneNumber' | transloco }}</label>
                    <input id="up-phone" type="tel" class="form-field__input" formControlName="phoneNumber" />
                  </div>

                  <!-- gender -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-gender">{{ 'profile.fields.gender' | transloco }}</label>
                    <select id="up-gender" class="form-field__select" formControlName="gender">
                      <option [ngValue]="0">{{ 'profile.gender.unspecified' | transloco }}</option>
                      <option [ngValue]="1">{{ 'profile.gender.male' | transloco }}</option>
                      <option [ngValue]="2">{{ 'profile.gender.female' | transloco }}</option>
                    </select>
                  </div>

                  <!-- birthDate -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-birthDate">{{ 'profile.fields.birthDate' | transloco }}</label>
                    <input id="up-birthDate" type="date" class="form-field__input" formControlName="birthDate" />
                  </div>

                  <!-- nationalId -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-nationalId">{{ 'profile.fields.nationalId' | transloco }}</label>
                    <input id="up-nationalId" class="form-field__input" formControlName="nationalId" />
                  </div>

                  <!-- passportNumber -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-passport">{{ 'profile.fields.passportNumber' | transloco }}</label>
                    <input id="up-passport" class="form-field__input" formControlName="passportNumber" />
                  </div>

                  <!-- ibanNumber -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-iban">{{ 'profile.fields.ibanNumber' | transloco }}</label>
                    <input id="up-iban" class="form-field__input" formControlName="ibanNumber" />
                  </div>

                  <!-- country -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-country">{{ 'profile.fields.country' | transloco }}</label>
                    <select id="up-country" class="form-field__select" formControlName="countryId">
                      <option [ngValue]="0">{{ 'profile.placeholders.country' | transloco }}</option>
                      @for (c of countries(); track c.id) {
                        <option [ngValue]="c.id">{{ c.name }}</option>
                      }
                    </select>
                  </div>

                  <!-- city -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-city">{{ 'profile.fields.city' | transloco }}</label>
                    <select id="up-city" class="form-field__select" formControlName="cityId" [disabled]="cities().length === 0">
                      <option [ngValue]="0">{{ 'profile.placeholders.city' | transloco }}</option>
                      @for (c of cities(); track c.id) {
                        <option [ngValue]="c.id">{{ c.name }}</option>
                      }
                    </select>
                  </div>

                  <!-- address -->
                  <div class="form-field form-field--full">
                    <label class="form-field__label" for="up-address">{{ 'profile.fields.address' | transloco }}</label>
                    <input id="up-address" class="form-field__input" formControlName="address" />
                  </div>

                  <!-- jobTitle -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-jobTitle">{{ 'profile.fields.jobTitle' | transloco }}</label>
                    <select id="up-jobTitle" class="form-field__select" formControlName="jobTitleId">
                      <option [ngValue]="0">{{ 'profile.placeholders.jobTitle' | transloco }}</option>
                      @for (j of jobTitles(); track j.id) {
                        <option [ngValue]="j.id">{{ j.name }}</option>
                      }
                    </select>
                  </div>

                  <!-- qualification -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-qualification">{{ 'profile.fields.qualification' | transloco }}</label>
                    <select id="up-qualification" class="form-field__select" formControlName="qualificationId">
                      <option [ngValue]="0">{{ 'profile.placeholders.qualification' | transloco }}</option>
                      @for (q of qualifications(); track q.id) {
                        <option [ngValue]="q.id">{{ q.name }}</option>
                      }
                    </select>
                  </div>

                  <!-- university -->
                  <div class="form-field">
                    <label class="form-field__label" for="up-university">{{ 'profile.fields.university' | transloco }}</label>
                    <select id="up-university" class="form-field__select" formControlName="universityId">
                      <option [ngValue]="0">{{ 'profile.placeholders.university' | transloco }}</option>
                      @for (u of universities(); track u.id) {
                        <option [ngValue]="u.id">{{ u.name }}</option>
                      }
                    </select>
                  </div>
                </div>

                <!-- Actions -->
                <div class="form-actions">
                  <button
                    type="button"
                    class="btn btn--secondary"
                    (click)="cancelEditing()"
                    [disabled]="isSaving()"
                    [attr.aria-label]="'profile.actions.cancel' | transloco"
                  >
                    {{ 'profile.actions.cancel' | transloco }}
                  </button>
                  <button
                    type="submit"
                    class="btn btn--primary"
                    [disabled]="isSaving()"
                    [attr.aria-label]="'profile.actions.save' | transloco"
                  >
                    @if (isSaving()) {
                      <mat-spinner diameter="16" aria-hidden="true"></mat-spinner>
                      {{ 'profile.actions.saving' | transloco }}
                    } @else {
                      <mat-icon aria-hidden="true">save</mat-icon>
                      {{ 'profile.actions.save' | transloco }}
                    }
                  </button>
                </div>
              </form>
            </div>
          </section>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SECURITY \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <section class="card profile-section" aria-labelledby="up-sec-security">
          <header class="profile-section__header">
            <h3 id="up-sec-security" class="profile-section__title">
              {{ 'profile.sections.security' | transloco }}
            </h3>
          </header>
          <div class="profile-section__body">

            @if (passwordSuccess()) {
              <div class="banner banner--success" role="status">
                <mat-icon aria-hidden="true">check_circle</mat-icon>
                {{ 'profile.banners.passwordChanged' | transloco }}
              </div>
            }
            @if (passwordError()) {
              <div class="banner banner--error" role="alert">
                <mat-icon aria-hidden="true">error_outline</mat-icon>
                {{ passwordError()! | transloco }}
              </div>
            }

            <form
              [formGroup]="passwordForm"
              (ngSubmit)="onChangePassword()"
              novalidate
              class="edit-form"
              [attr.aria-label]="'profile.sections.security' | transloco"
            >
              <div class="form-grid">
                <div class="form-field form-field--full">
                  <label class="form-field__label" for="up-currentPassword">
                    {{ 'profile.password.current' | transloco }} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="up-currentPassword"
                    type="password"
                    class="form-field__input"
                    [class.form-field__input--error]="passwordFieldInvalid('currentPassword')"
                    formControlName="currentPassword"
                    autocomplete="current-password"
                    aria-required="true"
                  />
                  @if (passwordFieldInvalid('currentPassword')) {
                    <span class="form-field__error" role="alert">{{ 'profile.password.currentRequired' | transloco }}</span>
                  }
                </div>

                <div class="form-field">
                  <label class="form-field__label" for="up-newPassword">
                    {{ 'profile.password.new' | transloco }} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="up-newPassword"
                    type="password"
                    class="form-field__input"
                    [class.form-field__input--error]="passwordFieldInvalid('newPassword')"
                    formControlName="newPassword"
                    autocomplete="new-password"
                    aria-required="true"
                  />
                  @if (passwordFieldInvalid('newPassword')) {
                    <span class="form-field__error" role="alert">{{ 'profile.password.newMinLength' | transloco }}</span>
                  }
                </div>

                <div class="form-field">
                  <label class="form-field__label" for="up-confirmPassword">
                    {{ 'profile.password.confirm' | transloco }} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="up-confirmPassword"
                    type="password"
                    class="form-field__input"
                    [class.form-field__input--error]="passwordFieldInvalid('confirmPassword') || passwordsMismatch()"
                    formControlName="confirmPassword"
                    autocomplete="new-password"
                    aria-required="true"
                  />
                  @if (passwordsMismatch()) {
                    <span class="form-field__error" role="alert">{{ 'profile.password.mismatch' | transloco }}</span>
                  }
                </div>
              </div>

              <div class="form-actions">
                <button
                  type="submit"
                  class="btn btn--primary"
                  [disabled]="isChangingPassword()"
                  [attr.aria-label]="'profile.password.submit' | transloco"
                >
                  @if (isChangingPassword()) {
                    <mat-spinner diameter="16" aria-hidden="true"></mat-spinner>
                    {{ 'profile.password.submitting' | transloco }}
                  } @else {
                    <mat-icon aria-hidden="true">lock_reset</mat-icon>
                    {{ 'profile.password.submit' | transloco }}
                  }
                </button>
              </div>
            </form>
          </div>
        </section>

      </div><!-- /.profile-details -->
    </div><!-- /.profile-layout -->
  }

</div><!-- /.profile-page -->
`, styles: ["/* src/features/profile/user-profile/user-profile.css */\n.profile-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  width: 100%;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  margin-block-end: var(--spacing-medium-lg);\n}\n.breadcrumb__sep {\n  color: var(--ui-border);\n}\n.breadcrumb__item--active {\n  color: var(--ui-text-main);\n  font-weight: var(--body-font-weight-semi-bold);\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--spacing-medium-lg);\n  margin-block-end: var(--spacing-large-xxl);\n  flex-wrap: wrap;\n}\n.page-title {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.page-subtitle {\n  margin: var(--spacing-small-xxxs) 0 0;\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 9px 18px;\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n  text-decoration: none;\n}\n.btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn--primary {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.btn--primary:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.btn--secondary:hover:not(:disabled) {\n  background: var(--ui-border);\n  color: var(--ui-text-main);\n}\n.btn--ghost-edit {\n  background: transparent;\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  padding: 6px 12px;\n  font-size: var(--text-xs);\n}\n.btn--ghost-edit mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.btn--ghost-edit:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n}\n.state-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: var(--spacing-large-huge);\n  text-align: center;\n}\n.state-center__text {\n  font-size: var(--text-base);\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.state-center__icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--functional-danger-500);\n}\n.state-center--error .state-center__text {\n  color: var(--functional-danger-600);\n}\n.profile-layout {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: var(--spacing-large-xxl);\n  width: 100%;\n}\n.profile-avatar-card {\n  padding: var(--spacing-large-xxl);\n  overflow: hidden;\n  flex: 0 0 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  text-align: center;\n}\n.profile-details {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n@media (max-width: 768px) {\n  .profile-layout {\n    flex-direction: column;\n  }\n  .profile-avatar-card,\n  .profile-details {\n    flex: 1 1 auto;\n    width: 100%;\n  }\n}\n.avatar-wrap {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--brand-primary-50);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 3px solid var(--ui-border);\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials {\n  font-size: var(--text-2xl);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--brand-primary-600);\n}\n.avatar-upload-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: 6px 12px;\n  border-radius: var(--radius-8);\n  border: 1px solid var(--ui-border);\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-main);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.avatar-upload-btn mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.avatar-upload-btn:hover {\n  background: var(--ui-border);\n}\n.avatar-upload-btn.is-loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.avatar-upload-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.avatar-error {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n  margin: 0;\n  text-align: center;\n}\n.avatar-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-small-xxs);\n}\n.avatar-name {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n  text-align: center;\n}\n.avatar-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-xs);\n  font-weight: var(--body-font-weight-semi-bold);\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.avatar-badge--active {\n  background: var(--functional-success-50);\n  color: var(--functional-success-600);\n}\n.avatar-badge--role {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.avatar-stats {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: var(--spacing-small-xxxs) var(--spacing-medium-md);\n  text-align: start;\n  padding-block-start: var(--spacing-small-xs);\n  border-block-start: 1px solid var(--ui-border);\n  margin: 0;\n}\n.avatar-stats__label {\n  font-size: var(--text-xs);\n  color: var(--ui-text-muted);\n  font-weight: var(--body-font-weight-semi-bold);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  align-self: center;\n}\n.avatar-stats__value {\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  align-self: center;\n  word-break: break-word;\n  margin: 0;\n}\n.profile-section {\n  display: flex;\n  flex-direction: column;\n}\n.profile-section__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  border-block-end: 1px solid var(--ui-border);\n}\n.profile-section__title {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: var(--h4-font-weight-bold);\n  color: var(--ui-text-main);\n}\n.profile-section__body {\n  padding: var(--spacing-large-xxl);\n}\n.banner {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-small-xs);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  margin-block-end: var(--spacing-medium-md);\n}\n.banner mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.banner--success {\n  background: var(--functional-success-50);\n  border: 1px solid var(--functional-success-200);\n  color: var(--functional-success-700);\n}\n.banner--error {\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  color: var(--functional-danger-600);\n}\n.detail-grid {\n  display: flex;\n  flex-direction: column;\n}\n.detail-field {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n  padding-block: var(--spacing-small-xs);\n  border-block-end: 1px solid var(--ui-border);\n}\n.detail-field:last-child {\n  border-block-end: none;\n}\n@media (max-width: 540px) {\n  .detail-field {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-small-xxxs);\n    align-items: flex-start;\n  }\n}\n.detail-field__label {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-regular, 400);\n  color: var(--ui-text-muted);\n  letter-spacing: normal;\n  text-transform: none;\n}\n.detail-field__value {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n  text-align: end;\n  word-break: break-word;\n}\n@media (max-width: 540px) {\n  .detail-field__value {\n    text-align: start;\n  }\n}\n.link {\n  color: var(--brand-primary-500);\n  text-decoration: none;\n  word-break: break-all;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.file-links {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  margin-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n.file-link {\n  display: grid;\n  grid-template-columns: minmax(120px, 35%) 1fr;\n  align-items: center;\n  gap: var(--spacing-medium-md);\n}\n.file-link__label {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n}\n.file-link__empty {\n  font-size: var(--text-sm);\n  color: var(--ui-text-muted);\n  text-align: end;\n}\n.file-link a {\n  text-align: end;\n}\n.edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium-md);\n}\n@media (max-width: 540px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xxxs);\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field__label {\n  font-size: var(--text-sm);\n  font-weight: var(--body-font-weight-semi-bold);\n  color: var(--ui-text-main);\n}\n.form-field__input,\n.form-field__select {\n  padding: 10px 14px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-size: var(--text-sm);\n  color: var(--ui-text-main);\n  background: var(--ui-bg-surface);\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-field__input:focus,\n.form-field__select:focus {\n  border-color: var(--brand-primary-500);\n  box-shadow: 0 0 0 3px var(--brand-primary-50);\n}\n.form-field__input--error {\n  border-color: var(--functional-danger-500) !important;\n}\n.form-field__error {\n  font-size: var(--text-xs);\n  color: var(--functional-danger-600);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-small-xs);\n  padding-block-start: var(--spacing-medium-md);\n  border-block-start: 1px solid var(--ui-border);\n}\n/*# sourceMappingURL=user-profile.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/features/profile/user-profile/user-profile.ts", lineNumber: 34 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-DSUYYUTU.js.map
