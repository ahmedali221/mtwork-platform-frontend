import {
  UserService
} from "./chunk-TUIWGNTU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import "./chunk-RDBMT5X2.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/settings/account-settings/account-settings.ts
function AccountSettingsComponent_Conditional_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function AccountSettingsComponent_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function AccountSettingsComponent_Conditional_27_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadProfile());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profileError());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "common.retry"), " ");
  }
}
function AccountSettingsComponent_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 17)(1, "div", 18)(2, "dt");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "dt");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "dt");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "p", 19);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "settings.profile.fullName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fullName(user_r3) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "settings.profile.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "settings.profile.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.phoneNumber || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "settings.profile.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.userTypeId || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 17, "settings.profile.readonlyNote"));
  }
}
function AccountSettingsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AccountSettingsComponent_Conditional_27_Conditional_7_Template, 4, 3, "div", 14)(8, AccountSettingsComponent_Conditional_27_Conditional_8_Template, 6, 4, "div", 15)(9, AccountSettingsComponent_Conditional_27_Conditional_9_Template, 28, 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.profile.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "settings.profile.sub"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loadingProfile() ? 7 : ctx_r1.profileError() ? 8 : (tmp_3_0 = ctx_r1.profile()) ? 9 : -1, tmp_3_0);
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "settings.password.tooShort"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "settings.password.tooShort"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "settings.password.mismatch"));
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r5 = ctx;
    \u0275\u0275classProp("form-message--success", msg_r5.kind === "success")("form-message--error", msg_r5.kind === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, msg_r5.text), " ");
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "common.saving"), " ");
  }
}
function AccountSettingsComponent_Conditional_28_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "settings.password.save"), " ");
  }
}
function AccountSettingsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 20);
    \u0275\u0275listener("ngSubmit", function AccountSettingsComponent_Conditional_28_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPassword());
    });
    \u0275\u0275elementStart(8, "div", 21)(9, "label", 22);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 23);
    \u0275\u0275conditionalCreate(13, AccountSettingsComponent_Conditional_28_Conditional_13_Template, 3, 3, "span", 24);
    \u0275\u0275conditionalCreate(14, AccountSettingsComponent_Conditional_28_Conditional_14_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21)(16, "label", 25);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 26);
    \u0275\u0275conditionalCreate(20, AccountSettingsComponent_Conditional_28_Conditional_20_Template, 3, 3, "span", 24);
    \u0275\u0275conditionalCreate(21, AccountSettingsComponent_Conditional_28_Conditional_21_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "label", 27);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 28);
    \u0275\u0275conditionalCreate(27, AccountSettingsComponent_Conditional_28_Conditional_27_Template, 3, 3, "span", 24);
    \u0275\u0275conditionalCreate(28, AccountSettingsComponent_Conditional_28_Conditional_28_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, AccountSettingsComponent_Conditional_28_Conditional_29_Template, 3, 7, "div", 29);
    \u0275\u0275elementStart(30, "div", 30)(31, "button", 31);
    \u0275\u0275conditionalCreate(32, AccountSettingsComponent_Conditional_28_Conditional_32_Template, 2, 3)(33, AccountSettingsComponent_Conditional_28_Conditional_33_Template, 2, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "settings.password.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 18, "settings.password.sub"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 20, "settings.password.current"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasError("currentPassword", "required") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasError("currentPassword", "minlength") ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "settings.password.new"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasError("newPassword", "required") ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasError("newPassword", "minlength") ? 21 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 24, "settings.password.confirm"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasError("confirmPassword", "required") ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formMismatch() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.passwordMessage()) ? 29 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.passwordForm.invalid || ctx_r1.isSavingPassword());
    \u0275\u0275attribute("aria-busy", ctx_r1.isSavingPassword());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSavingPassword() ? 32 : 33);
  }
}
function AccountSettingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "div", 34)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "button", 36);
    \u0275\u0275listener("click", function AccountSettingsComponent_Conditional_29_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage("en"));
    });
    \u0275\u0275text(18, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 36);
    \u0275\u0275listener("click", function AccountSettingsComponent_Conditional_29_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage("ar"));
    });
    \u0275\u0275text(20, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 33)(22, "div", 34)(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37)(30, "button", 38);
    \u0275\u0275listener("click", function AccountSettingsComponent_Conditional_29_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 15, "settings.preferences.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "settings.preferences.sub"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "settings.preferences.language"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "settings.preferences.languageSub"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 23, "common.language"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-btn--active", ctx_r1.languageService.currentLang() === "en");
    \u0275\u0275attribute("aria-pressed", ctx_r1.languageService.currentLang() === "en");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-btn--active", ctx_r1.languageService.currentLang() === "ar");
    \u0275\u0275attribute("aria-pressed", ctx_r1.languageService.currentLang() === "ar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 25, "settings.preferences.theme"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "settings.preferences.themeSub"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-pressed", ctx_r1.themeService.isDarkMode());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.themeService.isDarkMode() ? \u0275\u0275pipeBind1(32, 29, "settings.preferences.themeDark") : \u0275\u0275pipeBind1(33, 31, "settings.preferences.themeLight"), " ");
  }
}
var _AccountSettingsComponent = class _AccountSettingsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.userService = inject(UserService);
    this.languageService = inject(LanguageService);
    this.themeService = inject(ThemeService);
    this.activeSection = signal("profile", ...ngDevMode ? [{ debugName: "activeSection" }] : []);
    this.profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : []);
    this.loadingProfile = signal(false, ...ngDevMode ? [{ debugName: "loadingProfile" }] : []);
    this.profileError = signal(null, ...ngDevMode ? [{ debugName: "profileError" }] : []);
    this.passwordForm = this.fb.group({
      currentPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: [this.matchPasswords] });
    this.isSavingPassword = signal(false, ...ngDevMode ? [{ debugName: "isSavingPassword" }] : []);
    this.passwordMessage = signal(null, ...ngDevMode ? [{ debugName: "passwordMessage" }] : []);
  }
  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit() {
    this.loadProfile();
  }
  // ── Section nav ────────────────────────────────────────────────────
  setSection(key) {
    this.activeSection.set(key);
  }
  // ── Profile ────────────────────────────────────────────────────────
  loadProfile() {
    this.loadingProfile.set(true);
    this.profileError.set(null);
    this.userService.getMyProfile().subscribe({
      next: (user) => {
        this.profile.set(user);
        this.loadingProfile.set(false);
      },
      error: (err) => {
        this.profileError.set(err?.error?.message ?? "Failed to load profile.");
        this.loadingProfile.set(false);
      }
    });
  }
  // ── Password ───────────────────────────────────────────────────────
  matchPasswords(group) {
    const next = group.get("newPassword")?.value;
    const confirm = group.get("confirmPassword")?.value;
    return next && confirm && next !== confirm ? { passwordsMismatch: true } : null;
  }
  /**
   * Password change — UI ONLY per project decision.
   *
   * On submit:
   *   - if invalid → show validation errors, stay put.
   *   - if valid   → flip loading flag for 500ms, then surface a fake-success
   *                  message and reset the form. No API call is made.
   *
   * When the backend lands, replace the body of the timeout block with a
   * real subscribe (e.g. UserService.resetPassword). Validation, loading
   * state, and the success/error pipes already match.
   */
  submitPassword() {
    if (this.isSavingPassword())
      return;
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.passwordMessage.set(null);
      return;
    }
    this.isSavingPassword.set(true);
    this.passwordMessage.set(null);
    setTimeout(() => {
      this.isSavingPassword.set(false);
      this.passwordMessage.set({
        kind: "success",
        text: "settings.password.uiSuccess"
      });
      this.passwordForm.reset();
    }, 500);
  }
  // ── Preferences ────────────────────────────────────────────────────
  setLanguage(lang) {
    if (this.languageService.currentLang() !== lang) {
      this.languageService.toggleLanguage();
    }
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  // ── Helpers for the template (no logic in HTML) ────────────────────
  fullName(u) {
    if (!u)
      return "";
    return `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
  }
  hasError(name, error) {
    const c = this.passwordForm.get(name);
    return !!c && c.touched && c.hasError(error);
  }
  formMismatch() {
    return this.passwordForm.touched && this.passwordForm.hasError("passwordsMismatch") && !!this.passwordForm.get("confirmPassword")?.touched;
  }
};
_AccountSettingsComponent.\u0275fac = function AccountSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountSettingsComponent)();
};
_AccountSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountSettingsComponent, selectors: [["app-account-settings"]], decls: 30, vars: 34, consts: [[1, "settings-page"], [1, "breadcrumb"], [1, "bc-item"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "bc-chevron"], ["d", "M5.5 3.5L10.5 8L5.5 12.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bc-item", "bc-active"], [1, "page-title"], [1, "settings-shell"], [1, "settings-nav"], ["type", "button", 1, "nav-item", 3, "click"], [1, "settings-content"], [1, "section-card"], [1, "section-title"], [1, "section-sub"], ["role", "status", 1, "state-block"], ["role", "alert", 1, "state-block", "state-block--error"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "profile-grid"], [1, "profile-row"], [1, "readonly-note"], ["novalidate", "", 1, "form", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "curPwd"], ["id", "curPwd", "type", "password", "autocomplete", "current-password", "formControlName", "currentPassword"], [1, "form-error"], ["for", "newPwd"], ["id", "newPwd", "type", "password", "autocomplete", "new-password", "formControlName", "newPassword"], ["for", "cfPwd"], ["id", "cfPwd", "type", "password", "autocomplete", "new-password", "formControlName", "confirmPassword"], ["role", "status", 1, "form-message", 3, "form-message--success", "form-message--error"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["role", "status", 1, "form-message"], [1, "pref-row"], [1, "pref-label"], ["role", "group", 1, "pref-control"], ["type", "button", 1, "seg-btn", 3, "click"], [1, "pref-control"], ["type", "button", 1, "toggle-btn", 3, "click"]], template: function AccountSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 3);
    \u0275\u0275element(7, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h1", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7)(15, "aside", 8);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "button", 9);
    \u0275\u0275listener("click", function AccountSettingsComponent_Template_button_click_17_listener() {
      return ctx.setSection("profile");
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 9);
    \u0275\u0275listener("click", function AccountSettingsComponent_Template_button_click_20_listener() {
      return ctx.setSection("password");
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 9);
    \u0275\u0275listener("click", function AccountSettingsComponent_Template_button_click_23_listener() {
      return ctx.setSection("preferences");
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "section", 10);
    \u0275\u0275conditionalCreate(27, AccountSettingsComponent_Conditional_27_Template, 10, 7, "div", 11);
    \u0275\u0275conditionalCreate(28, AccountSettingsComponent_Conditional_28_Template, 34, 26, "div", 11);
    \u0275\u0275conditionalCreate(29, AccountSettingsComponent_Conditional_29_Template, 34, 33, "div", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 18, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 20, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 22, "settings.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 24, "settings.title"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 26, "settings.sections"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("nav-item--active", ctx.activeSection() === "profile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 28, "settings.profile.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("nav-item--active", ctx.activeSection() === "password");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 30, "settings.password.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("nav-item--active", ctx.activeSection() === "preferences");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 32, "settings.preferences.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx.activeSection());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeSection() === "profile" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeSection() === "password" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeSection() === "preferences" ? 29 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: ["\n\n.settings-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1100px;\n  margin-inline: auto;\n  width: 100%;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.settings-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.settings-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 10px;\n  padding: 8px;\n  position: sticky;\n  inset-block-start: 16px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  text-align: start;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  color: var(--ui-text);\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: var(--ui-surface-hover, rgba(99,102,241,0.1));\n  color: var(--brand-primary-500);\n  font-weight: 600;\n}\n.nav-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  padding: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.section-sub[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 24px;\n  margin: 0 0 16px;\n}\n.profile-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.profile-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.profile-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.readonly-note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  font-style: italic;\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 480px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  background: var(--ui-surface);\n  color: var(--ui-text);\n  font-size: 14px;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 0;\n  border-color: var(--brand-primary-500);\n}\n.form-error[_ngcontent-%COMP%] {\n  color: var(--ui-error, rgb(220,38,38));\n  font-size: 12px;\n}\n.form-message[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.form-message--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(22, 163, 74);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.form-message--error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(220, 38, 38);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.state-block[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-surface);\n  border: 1px dashed var(--ui-border);\n  border-radius: 10px;\n}\n.state-block--error[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.state-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.pref-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-block-end: 1px solid var(--ui-border);\n}\n.pref-row[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.pref-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.pref-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.pref-control[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  padding: 6px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.seg-btn[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 6px;\n  border-end-start-radius: 6px;\n}\n.seg-btn[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 6px;\n  border-end-end-radius: 6px;\n}\n.seg-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-color: var(--brand-primary-500);\n}\n.seg-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 999px;\n  padding: 6px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.toggle-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .settings-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .settings-nav[_ngcontent-%COMP%] {\n    position: static;\n    flex-direction: row;\n    overflow-x: auto;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pref-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=account-settings.css.map */"], changeDetection: 0 });
var AccountSettingsComponent = _AccountSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-account-settings", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="settings-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="bc-item">{{ 'common.appName' | transloco }}</span>
    <svg class="bc-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="bc-item bc-active">{{ 'settings.title' | transloco }}</span>
  </nav>

  <h1 class="page-title">{{ 'settings.title' | transloco }}</h1>

  <div class="settings-shell">

    <!-- \u2500\u2500 Side nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <aside class="settings-nav" [attr.aria-label]="'settings.sections' | transloco">
      <button
        type="button"
        class="nav-item"
        [class.nav-item--active]="activeSection() === 'profile'"
        (click)="setSection('profile')"
      >
        {{ 'settings.profile.title' | transloco }}
      </button>
      <button
        type="button"
        class="nav-item"
        [class.nav-item--active]="activeSection() === 'password'"
        (click)="setSection('password')"
      >
        {{ 'settings.password.title' | transloco }}
      </button>
      <button
        type="button"
        class="nav-item"
        [class.nav-item--active]="activeSection() === 'preferences'"
        (click)="setSection('preferences')"
      >
        {{ 'settings.preferences.title' | transloco }}
      </button>
    </aside>

    <!-- \u2500\u2500 Section content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="settings-content" [attr.aria-label]="activeSection()">

      <!-- \u2500\u2500 Profile (read-only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (activeSection() === 'profile') {
        <div class="section-card">
          <h2 class="section-title">{{ 'settings.profile.title' | transloco }}</h2>
          <p class="section-sub">{{ 'settings.profile.sub' | transloco }}</p>

          @if (loadingProfile()) {
            <div class="state-block" role="status">
              <p>{{ 'common.loading' | transloco }}</p>
            </div>
          } @else if (profileError()) {
            <div class="state-block state-block--error" role="alert">
              <p>{{ profileError() }}</p>
              <button type="button" class="btn-secondary" (click)="loadProfile()">
                {{ 'common.retry' | transloco }}
              </button>
            </div>
          } @else if (profile(); as user) {
            <dl class="profile-grid">
              <div class="profile-row">
                <dt>{{ 'settings.profile.fullName' | transloco }}</dt>
                <dd>{{ fullName(user) || '\u2014' }}</dd>
              </div>
              <div class="profile-row">
                <dt>{{ 'settings.profile.email' | transloco }}</dt>
                <dd>{{ user.email || '\u2014' }}</dd>
              </div>
              <div class="profile-row">
                <dt>{{ 'settings.profile.phone' | transloco }}</dt>
                <dd>{{ user.phoneNumber || '\u2014' }}</dd>
              </div>
              <div class="profile-row">
                <dt>{{ 'settings.profile.role' | transloco }}</dt>
                <dd>{{ user.userTypeId || '\u2014' }}</dd>
              </div>
            </dl>
            <p class="readonly-note">{{ 'settings.profile.readonlyNote' | transloco }}</p>
          }
        </div>
      }

      <!-- \u2500\u2500 Password \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (activeSection() === 'password') {
        <div class="section-card">
          <h2 class="section-title">{{ 'settings.password.title' | transloco }}</h2>
          <p class="section-sub">{{ 'settings.password.sub' | transloco }}</p>

          <form class="form" [formGroup]="passwordForm" (ngSubmit)="submitPassword()" novalidate>
            <div class="form-field">
              <label for="curPwd">{{ 'settings.password.current' | transloco }}</label>
              <input id="curPwd" type="password" autocomplete="current-password"
                     formControlName="currentPassword" />
              @if (hasError('currentPassword', 'required')) {
                <span class="form-error">{{ 'validation.required' | transloco }}</span>
              }
              @if (hasError('currentPassword', 'minlength')) {
                <span class="form-error">{{ 'settings.password.tooShort' | transloco }}</span>
              }
            </div>

            <div class="form-field">
              <label for="newPwd">{{ 'settings.password.new' | transloco }}</label>
              <input id="newPwd" type="password" autocomplete="new-password"
                     formControlName="newPassword" />
              @if (hasError('newPassword', 'required')) {
                <span class="form-error">{{ 'validation.required' | transloco }}</span>
              }
              @if (hasError('newPassword', 'minlength')) {
                <span class="form-error">{{ 'settings.password.tooShort' | transloco }}</span>
              }
            </div>

            <div class="form-field">
              <label for="cfPwd">{{ 'settings.password.confirm' | transloco }}</label>
              <input id="cfPwd" type="password" autocomplete="new-password"
                     formControlName="confirmPassword" />
              @if (hasError('confirmPassword', 'required')) {
                <span class="form-error">{{ 'validation.required' | transloco }}</span>
              }
              @if (formMismatch()) {
                <span class="form-error">{{ 'settings.password.mismatch' | transloco }}</span>
              }
            </div>

            @if (passwordMessage(); as msg) {
              <div
                class="form-message"
                [class.form-message--success]="msg.kind === 'success'"
                [class.form-message--error]="msg.kind === 'error'"
                role="status"
              >
                {{ msg.text | transloco }}
              </div>
            }

            <div class="form-actions">
              <button
                type="submit"
                class="btn-primary"
                [disabled]="passwordForm.invalid || isSavingPassword()"
                [attr.aria-busy]="isSavingPassword()"
              >
                @if (isSavingPassword()) {
                  {{ 'common.saving' | transloco }}
                } @else {
                  {{ 'settings.password.save' | transloco }}
                }
              </button>
            </div>
          </form>
        </div>
      }

      <!-- \u2500\u2500 Preferences \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      @if (activeSection() === 'preferences') {
        <div class="section-card">
          <h2 class="section-title">{{ 'settings.preferences.title' | transloco }}</h2>
          <p class="section-sub">{{ 'settings.preferences.sub' | transloco }}</p>

          <!-- Language -->
          <div class="pref-row">
            <div class="pref-label">
              <h3>{{ 'settings.preferences.language' | transloco }}</h3>
              <p>{{ 'settings.preferences.languageSub' | transloco }}</p>
            </div>
            <div class="pref-control" role="group" [attr.aria-label]="'common.language' | transloco">
              <button
                type="button"
                class="seg-btn"
                [class.seg-btn--active]="languageService.currentLang() === 'en'"
                (click)="setLanguage('en')"
                [attr.aria-pressed]="languageService.currentLang() === 'en'"
              >English</button>
              <button
                type="button"
                class="seg-btn"
                [class.seg-btn--active]="languageService.currentLang() === 'ar'"
                (click)="setLanguage('ar')"
                [attr.aria-pressed]="languageService.currentLang() === 'ar'"
              >\u0627\u0644\u0639\u0631\u0628\u064A\u0629</button>
            </div>
          </div>

          <!-- Theme -->
          <div class="pref-row">
            <div class="pref-label">
              <h3>{{ 'settings.preferences.theme' | transloco }}</h3>
              <p>{{ 'settings.preferences.themeSub' | transloco }}</p>
            </div>
            <div class="pref-control">
              <button
                type="button"
                class="toggle-btn"
                (click)="toggleTheme()"
                [attr.aria-pressed]="themeService.isDarkMode()"
              >
                {{ themeService.isDarkMode()
                    ? ('settings.preferences.themeDark'  | transloco)
                    : ('settings.preferences.themeLight' | transloco) }}
              </button>
            </div>
          </div>
        </div>
      }

    </section>
  </div>
</div>
`, styles: ["/* src/features/settings/account-settings/account-settings.css */\n.settings-page {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1100px;\n  margin-inline: auto;\n  width: 100%;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron {\n  color: var(--ui-text-muted);\n}\n.page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.settings-shell {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.settings-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 10px;\n  padding: 8px;\n  position: sticky;\n  inset-block-start: 16px;\n}\n.nav-item {\n  background: transparent;\n  border: none;\n  text-align: start;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  color: var(--ui-text);\n  cursor: pointer;\n}\n.nav-item:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.nav-item--active {\n  background: var(--ui-surface-hover, rgba(99,102,241,0.1));\n  color: var(--brand-primary-500);\n  font-weight: 600;\n}\n.nav-item:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.section-card {\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  padding: 24px;\n}\n.section-title {\n  margin: 0 0 4px;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.section-sub {\n  margin: 0 0 20px;\n  font-size: 13px;\n  color: var(--ui-text-muted);\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 24px;\n  margin: 0 0 16px;\n}\n.profile-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.profile-row dt {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.profile-row dd {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.readonly-note {\n  margin: 12px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n  font-style: italic;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 480px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text);\n}\n.form-field input {\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  background: var(--ui-surface);\n  color: var(--ui-text);\n  font-size: 14px;\n}\n.form-field input:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 0;\n  border-color: var(--brand-primary-500);\n}\n.form-error {\n  color: var(--ui-error, rgb(220,38,38));\n  font-size: 12px;\n}\n.form-message {\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.form-message--success {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(22, 163, 74);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.form-message--error {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(220, 38, 38);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.form-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-primary {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.btn-secondary {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n}\n.state-block {\n  padding: 24px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n  background: var(--ui-surface);\n  border: 1px dashed var(--ui-border);\n  border-radius: 10px;\n}\n.state-block--error {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.state-block p {\n  margin: 0 0 12px;\n}\n.pref-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-block-end: 1px solid var(--ui-border);\n}\n.pref-row:last-child {\n  border-block-end: none;\n}\n.pref-label h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.pref-label p {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.pref-control {\n  display: flex;\n  gap: 4px;\n}\n.seg-btn {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  padding: 6px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.seg-btn:first-child {\n  border-start-start-radius: 6px;\n  border-end-start-radius: 6px;\n}\n.seg-btn:last-child {\n  border-start-end-radius: 6px;\n  border-end-end-radius: 6px;\n}\n.seg-btn--active {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-color: var(--brand-primary-500);\n}\n.seg-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.toggle-btn {\n  background: transparent;\n  border: 1px solid var(--ui-border);\n  color: var(--ui-text);\n  border-radius: 999px;\n  padding: 6px 16px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.toggle-btn:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .settings-shell {\n    grid-template-columns: 1fr;\n  }\n  .settings-nav {\n    position: static;\n    flex-direction: row;\n    overflow-x: auto;\n  }\n  .nav-item {\n    white-space: nowrap;\n  }\n  .profile-grid {\n    grid-template-columns: 1fr;\n  }\n  .pref-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=account-settings.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountSettingsComponent, { className: "AccountSettingsComponent", filePath: "src/features/settings/account-settings/account-settings.ts", lineNumber: 26 });
})();
export {
  AccountSettingsComponent
};
//# sourceMappingURL=chunk-KVW4ZU7H.js.map
