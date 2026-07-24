import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  TeamsService
} from "./chunk-6LK6CDX3.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  CommonModule,
  TitleCasePipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/invite-members-dialog/invite-members-dialog.ts
function InviteMembersDialogComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function InviteMembersDialogComponent_For_13_Template_button_click_3_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEmail($index_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 19);
    \u0275\u0275element(5, "path", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(email_r4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + email_r4);
  }
}
function InviteMembersDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.sendError());
  }
}
function InviteMembersDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Invitations sent successfully! ");
    \u0275\u0275elementEnd();
  }
}
function InviteMembersDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
var _InviteMembersDialogComponent = class _InviteMembersDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.teamsService = inject(TeamsService);
    this.emails = [];
    this.inputEmail = "";
    this.sending = false;
    this.sendError = signal(null, ...ngDevMode ? [{ debugName: "sendError" }] : []);
    this.sendSuccess = signal(false, ...ngDevMode ? [{ debugName: "sendSuccess" }] : []);
  }
  get buttonLabel() {
    if (this.sending)
      return "Sending\u2026";
    const n = this.emails.length;
    if (n === 0)
      return "Invite Member";
    return `Add ${n} Member${n > 1 ? "s" : ""}`;
  }
  addEmailFromInput() {
    const email = this.inputEmail.trim().toLowerCase();
    if (!email || !this.isValidEmail(email) || this.emails.includes(email))
      return;
    this.emails.push(email);
    this.inputEmail = "";
    this.sendError.set(null);
  }
  removeEmail(index) {
    this.emails.splice(index, 1);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      this.addEmailFromInput();
      return;
    }
    if (event.key === "Backspace" && !this.inputEmail && this.emails.length > 0) {
      this.emails.pop();
    }
  }
  submitInvite() {
    this.addEmailFromInput();
    if (this.emails.length === 0)
      return;
    this.sending = true;
    this.sendError.set(null);
    let completed = 0;
    let errors = 0;
    const total = this.emails.length;
    this.emails.forEach((email) => {
      this.teamsService.inviteMember(email).subscribe({
        next: (result) => {
          if (!result.success)
            errors++;
          completed++;
          if (completed === total)
            this.onSendComplete(errors, total);
        },
        error: () => {
          errors++;
          completed++;
          if (completed === total)
            this.onSendComplete(errors, total);
        }
      });
    });
  }
  onSendComplete(errors, total) {
    this.sending = false;
    if (errors === 0) {
      this.sendSuccess.set(true);
      this.emails = [];
      setTimeout(() => this.dialogRef.close(true), 1800);
    } else {
      this.sendError.set(`${errors} of ${total} invitation${total > 1 ? "s" : ""} failed. Please try again.`);
    }
  }
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  close() {
    this.dialogRef.close();
  }
};
_InviteMembersDialogComponent.\u0275fac = function InviteMembersDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InviteMembersDialogComponent)();
};
_InviteMembersDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteMembersDialogComponent, selectors: [["app-invite-members-dialog"]], decls: 24, vars: 14, consts: [[1, "im-dialog"], [1, "im-header"], [1, "im-title"], ["type", "button", 1, "im-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], ["d", "M15 5L5 15M5 5L15 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "im-body"], [1, "im-sub"], [1, "im-chips-field"], [1, "im-chip"], ["type", "email", "autocomplete", "off", 1, "im-chip-input", 3, "ngModelChange", "keydown", "blur", "ngModel", "placeholder"], ["role", "alert", "aria-live", "polite", 1, "im-message", "im-message--error"], ["role", "status", "aria-live", "polite", 1, "im-message", "im-message--success"], [1, "im-footer"], ["type", "button", 1, "im-btn", "im-btn-cancel", 3, "click"], ["type", "button", 1, "im-btn", "im-btn-invite", 3, "click", "disabled"], ["aria-hidden", "true", 1, "im-spinner"], [1, "im-chip-text"], ["type", "button", 1, "im-chip-remove", 3, "click"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill", "none", "aria-hidden", "true"], ["d", "M8 2L2 8M2 2L8 8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 5h1.5v4.5h-1.5V5Zm0 6h1.5v1.5h-1.5V11Z", "fill", "currentColor"], ["d", "M13.5 4.5L6 12 2.5 8.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function InviteMembersDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Invite Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function InviteMembersDialogComponent_Template_button_click_4_listener() {
      return ctx.close();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 4);
    \u0275\u0275element(7, "path", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 6)(9, "p", 7);
    \u0275\u0275text(10, "Add members by email address. Press Enter or comma to add multiple.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275repeaterCreate(12, InviteMembersDialogComponent_For_13_Template, 6, 2, "span", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(14, "input", 10);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function InviteMembersDialogComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inputEmail, $event) || (ctx.inputEmail = $event);
      return $event;
    });
    \u0275\u0275listener("keydown", function InviteMembersDialogComponent_Template_input_keydown_14_listener($event) {
      return ctx.onKeydown($event);
    })("blur", function InviteMembersDialogComponent_Template_input_blur_14_listener() {
      return ctx.addEmailFromInput();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, InviteMembersDialogComponent_Conditional_16_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(17, InviteMembersDialogComponent_Conditional_17_Template, 4, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
    \u0275\u0275listener("click", function InviteMembersDialogComponent_Template_button_click_19_listener() {
      return ctx.close();
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 15);
    \u0275\u0275listener("click", function InviteMembersDialogComponent_Template_button_click_21_listener() {
      return ctx.submitInvite();
    });
    \u0275\u0275conditionalCreate(22, InviteMembersDialogComponent_Conditional_22_Template, 1, 0, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 10, "common.closeDialog"));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.emails);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.inputEmail);
    \u0275\u0275property("placeholder", ctx.emails.length === 0 ? "Add More Members" : "");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 12, "teams.emailInvite"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.sendError() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.sendSuccess() ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.sending || ctx.emails.length === 0 && !ctx.inputEmail.trim());
    \u0275\u0275attribute("aria-busy", ctx.sending);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.sending ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.buttonLabel, " ");
  }
}, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoModule, TranslocoPipe], styles: ["\n\n.im-dialog[_ngcontent-%COMP%] {\n  width: 560px;\n  max-width: 100%;\n  background: var(--ui-surface);\n  border-radius: var(--radius-20);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: var(--font-family-dm-sans);\n}\n.im-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.im-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.im-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.im-close[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.im-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.im-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.im-chips-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 52px;\n  padding: 8px 12px;\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  cursor: text;\n  transition: border-color 0.15s;\n}\n.im-chips-field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--brand-primary-800);\n}\n.im-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 28px;\n  padding: 0 6px 0 10px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-6);\n  font-size: 13px;\n  color: var(--brand-primary-800);\n  font-weight: 500;\n  white-space: nowrap;\n  max-width: 240px;\n}\n.im-chip-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.im-chip-remove[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: var(--brand-primary-800);\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  opacity: 0.65;\n  transition: opacity 0.15s, background 0.15s;\n}\n.im-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: color-mix(in srgb, var(--brand-primary-800) 12%, transparent);\n}\n.im-chip-remove[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-chip-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  height: 28px;\n  padding: 0;\n}\n.im-chip-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.im-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: var(--radius-8);\n  font-size: var(--caption-2-size);\n  line-height: 1.4;\n}\n.im-message--error[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50, var(--ui-bg));\n  border: 1px solid var(--functional-danger-300, var(--ui-border));\n  color: var(--functional-danger-700, var(--brand-grays-900));\n}\n.im-message--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-50, var(--ui-bg));\n  border: 1px solid var(--functional-success-300, var(--ui-border));\n  color: var(--functional-success-700, var(--brand-grays-900));\n}\n.im-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--ui-border);\n}\n.im-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 40px;\n  min-width: 122px;\n  padding: 0 20px;\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.im-btn-cancel[_ngcontent-%COMP%] {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n}\n.im-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.im-btn-invite[_ngcontent-%COMP%] {\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.im-btn-invite[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.im-btn-invite[_ngcontent-%COMP%]:disabled {\n  background: var(--brand-neutral-200);\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.im-btn-cancel[_ngcontent-%COMP%]:focus-visible, \n.im-btn-invite[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_im-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_im-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=invite-members-dialog.css.map */"] });
var InviteMembersDialogComponent = _InviteMembersDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteMembersDialogComponent, [{
    type: Component,
    args: [{ selector: "app-invite-members-dialog", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule], template: `<div class="im-dialog">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="im-header">
    <h2 class="im-title">Invite Members</h2>
    <button class="im-close" (click)="close()" [attr.aria-label]="'common.closeDialog' | transloco" type="button">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="im-body">
    <p class="im-sub">Add members by email address. Press Enter or comma to add multiple.</p>

    <!-- Email chips + input -->
    <div class="im-chips-field">
      @for (email of emails; track $index) {
        <span class="im-chip">
          <span class="im-chip-text">{{ email }}</span>
          <button
            class="im-chip-remove"
            (click)="removeEmail($index)"
            [attr.aria-label]="'Remove ' + email"
            type="button"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M8 2L2 8M2 2L8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </span>
      }
      <input
        class="im-chip-input"
        type="email"
        [(ngModel)]="inputEmail"
        (keydown)="onKeydown($event)"
        (blur)="addEmailFromInput()"
        [placeholder]="emails.length === 0 ? 'Add More Members' : ''"
        [attr.aria-label]="'teams.emailInvite' | transloco"
        autocomplete="off"
      />
    </div>

    @if (sendError()) {
      <div class="im-message im-message--error" role="alert" aria-live="polite">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 5h1.5v4.5h-1.5V5Zm0 6h1.5v1.5h-1.5V11Z" fill="currentColor"/>
        </svg>
        <span>{{ sendError() }}</span>
      </div>
    }

    @if (sendSuccess()) {
      <div class="im-message im-message--success" role="status" aria-live="polite">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 4.5L6 12 2.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Invitations sent successfully!
      </div>
    }
  </div>

  <!-- \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="im-footer">
    <button class="im-btn im-btn-cancel" (click)="close()" type="button">Cancel</button>
    <button
      class="im-btn im-btn-invite"
      (click)="submitInvite()"
      type="button"
      [disabled]="sending || (emails.length === 0 && !inputEmail.trim())"
      [attr.aria-busy]="sending"
    >
      @if (sending) {
        <span class="im-spinner" aria-hidden="true"></span>
      }
      {{ buttonLabel }}
    </button>
  </div>

</div>
`, styles: ["/* src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/invite-members-dialog/invite-members-dialog.css */\n.im-dialog {\n  width: 560px;\n  max-width: 100%;\n  background: var(--ui-surface);\n  border-radius: var(--radius-20);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: var(--font-family-dm-sans);\n}\n.im-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.im-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.im-close {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.im-close:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.im-close:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-body {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.im-sub {\n  margin: 0;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  line-height: 1.5;\n}\n.im-chips-field {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 52px;\n  padding: 8px 12px;\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  cursor: text;\n  transition: border-color 0.15s;\n}\n.im-chips-field:focus-within {\n  border-color: var(--brand-primary-800);\n}\n.im-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 28px;\n  padding: 0 6px 0 10px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-6);\n  font-size: 13px;\n  color: var(--brand-primary-800);\n  font-weight: 500;\n  white-space: nowrap;\n  max-width: 240px;\n}\n.im-chip-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.im-chip-remove {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: var(--brand-primary-800);\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  opacity: 0.65;\n  transition: opacity 0.15s, background 0.15s;\n}\n.im-chip-remove:hover {\n  opacity: 1;\n  background: color-mix(in srgb, var(--brand-primary-800) 12%, transparent);\n}\n.im-chip-remove:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-chip-input {\n  flex: 1;\n  min-width: 140px;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  height: 28px;\n  padding: 0;\n}\n.im-chip-input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.im-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: var(--radius-8);\n  font-size: var(--caption-2-size);\n  line-height: 1.4;\n}\n.im-message--error {\n  background: var(--functional-danger-50, var(--ui-bg));\n  border: 1px solid var(--functional-danger-300, var(--ui-border));\n  color: var(--functional-danger-700, var(--brand-grays-900));\n}\n.im-message--success {\n  background: var(--functional-success-50, var(--ui-bg));\n  border: 1px solid var(--functional-success-300, var(--ui-border));\n  color: var(--functional-success-700, var(--brand-grays-900));\n}\n.im-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--ui-border);\n}\n.im-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 40px;\n  min-width: 122px;\n  padding: 0 20px;\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.im-btn-cancel {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n}\n.im-btn-cancel:hover {\n  background: var(--brand-neutral-100);\n}\n.im-btn-invite {\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n}\n.im-btn-invite:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.im-btn-invite:disabled {\n  background: var(--brand-neutral-200);\n  color: var(--brand-neutral-400);\n  cursor: not-allowed;\n}\n.im-btn-cancel:focus-visible,\n.im-btn-invite:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.im-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: im-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes im-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=invite-members-dialog.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteMembersDialogComponent, { className: "InviteMembersDialogComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/teamstabcomponents/invite-members-dialog/invite-members-dialog.ts", lineNumber: 15 });
})();

// src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/create-team-dialog/create-team-dialog.ts
var _forTrack0 = ($index, $item) => $item.id;
function CreateTeamDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Loading members\u2026");
    \u0275\u0275elementEnd();
  }
}
function CreateTeamDialogComponent_Conditional_20_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    \u0275\u0275property("value", member_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", member_r3.name || member_r3.email, "", member_r3.designation ? " \u2014 " + member_r3.designation : "", " ");
  }
}
function CreateTeamDialogComponent_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "No employees found in your company.");
    \u0275\u0275elementEnd();
  }
}
function CreateTeamDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 17);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateTeamDialogComponent_Conditional_20_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.teamData.assigners, $event) || (ctx_r1.teamData.assigners = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(2, CreateTeamDialogComponent_Conditional_20_For_3_Template, 2, 3, "option", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CreateTeamDialogComponent_Conditional_20_Conditional_4_Template, 2, 0, "p", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.teamData.assigners);
    \u0275\u0275property("disabled", ctx_r1.availableAssigners.length === 0);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, "teams.selectMembers"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.availableAssigners);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.availableAssigners.length === 0 ? 4 : -1);
  }
}
function CreateTeamDialogComponent_Conditional_21_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r5 = ctx.$implicit;
    \u0275\u0275property("value", icon_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, icon_r5));
  }
}
function CreateTeamDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 20);
    \u0275\u0275text(2, "Send via Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 21);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateTeamDialogComponent_Conditional_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.teamData.sendViaEmail, $event) || (ctx_r1.teamData.sendViaEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "label", 22);
    \u0275\u0275text(7, "Team Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 23);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateTeamDialogComponent_Conditional_21_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.teamData.teamIcon, $event) || (ctx_r1.teamData.teamIcon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 24);
    \u0275\u0275text(11, "Select an icon");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, CreateTeamDialogComponent_Conditional_21_For_13_Template, 3, 4, "option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.teamData.sendViaEmail);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 4, "teams.sendViaEmail"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.teamData.teamIcon);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 6, "teams.selectIcon"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.availableIcons);
  }
}
function CreateTeamDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.saveError());
  }
}
function CreateTeamDialogComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275text(1, " Saving\u2026 ");
  }
}
function CreateTeamDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Save Changes" : "Create Team", " ");
  }
}
var _CreateTeamDialogComponent = class _CreateTeamDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.teamsService = inject(TeamsService);
    this.dialogData = inject(MAT_DIALOG_DATA, { optional: true });
    this.saving = false;
    this.saveError = signal(null, ...ngDevMode ? [{ debugName: "saveError" }] : []);
    this.teamData = {
      teamName: "",
      assigners: [],
      sendViaEmail: "",
      teamIcon: ""
    };
    this.availableAssigners = [];
    this.membersLoading = false;
    this.availableIcons = ["work", "group", "star", "settings"];
  }
  get isEditMode() {
    return !!this.dialogData?.team;
  }
  ngOnInit() {
    this.loadMembers();
  }
  loadMembers() {
    this.membersLoading = true;
    this.teamsService.getAllTeamMembers().subscribe({
      next: (members) => {
        this.availableAssigners = members || [];
        this.membersLoading = false;
        if (this.isEditMode) {
          this.prefillFromTeam();
        }
      },
      error: () => {
        this.availableAssigners = [];
        this.membersLoading = false;
      }
    });
  }
  prefillFromTeam() {
    const team = this.dialogData.team;
    this.teamData.teamName = team.name || "";
    this.teamData.assigners = (team.members || []).map((m) => String(m.id));
  }
  get membersPlaceholder() {
    if (this.membersLoading)
      return "Loading members...";
    if (this.availableAssigners.length === 0)
      return "No employees found";
    return "Select members";
  }
  save() {
    if (this.isEditMode) {
      this.updateTeam();
    } else {
      this.createTeam();
    }
  }
  createTeam() {
    const name = this.teamData.teamName.trim();
    if (!name)
      return;
    this.saving = true;
    this.saveError.set(null);
    const createUser = (localStorage.getItem("userId") ?? localStorage.getItem("userName") ?? localStorage.getItem("email") ?? "").trim();
    const teamUserIds = (this.teamData.assigners || []).filter((id) => id != null && String(id).trim() !== "").map((id) => String(id));
    const payload = {
      id: 0,
      nameAr: name,
      nameEn: name,
      desc: "",
      createUser,
      teamUserIds
    };
    this.teamsService.createTeam(payload).subscribe({
      next: () => {
        this.saving = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.saving = false;
        this.saveError.set(this.extractError(err));
      }
    });
  }
  updateTeam() {
    const name = this.teamData.teamName.trim();
    if (!name)
      return;
    this.saving = true;
    this.saveError.set(null);
    const teamId = this.dialogData.team.id;
    const teamUserIds = (this.teamData.assigners || []).filter((id) => id != null && String(id).trim() !== "").map((id) => String(id));
    const payload = {
      id: teamId,
      nameAr: name,
      nameEn: name,
      desc: "",
      teamUserIds
    };
    this.teamsService.updateTeam(payload).subscribe({
      next: () => {
        this.saving = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.saving = false;
        this.saveError.set(this.extractError(err));
      }
    });
  }
  extractError(err) {
    return err?.error?.message ?? err?.error?.title ?? err?.error?.errorMsg ?? (typeof err?.error === "string" ? err.error.slice(0, 300) : null) ?? err?.message ?? "Server error " + (err?.status ?? "");
  }
  cancel() {
    this.dialogRef.close();
  }
};
_CreateTeamDialogComponent.\u0275fac = function CreateTeamDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateTeamDialogComponent)();
};
_CreateTeamDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateTeamDialogComponent, selectors: [["app-create-team-dialog"]], decls: 29, vars: 14, consts: [[1, "ct-dialog"], [1, "ct-header"], [1, "ct-title"], ["type", "button", 1, "ct-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], ["d", "M15 5L5 15M5 5L15 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "ct-body"], [1, "ct-field"], ["for", "ct-team-name", 1, "ct-label"], [1, "ct-required"], ["id", "ct-team-name", "type", "text", "name", "teamName", "placeholder", "HR, Employees, Contractors", "required", "", 1, "ct-input", 3, "ngModelChange", "ngModel"], ["for", "ct-members", 1, "ct-label"], ["aria-busy", "true", 1, "ct-input", "ct-loading"], ["role", "alert", "aria-live", "polite", 1, "ct-error"], [1, "ct-footer"], ["type", "button", 1, "ct-btn", "ct-btn-cancel", 3, "click"], ["type", "button", 1, "ct-btn", "ct-btn-create", 3, "click", "disabled"], ["id", "ct-members", "name", "assigners", "multiple", "", "size", "4", 1, "ct-select", "ct-select-multi", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "ct-hint"], ["for", "ct-email", 1, "ct-label"], ["id", "ct-email", "type", "email", "name", "sendViaEmail", "placeholder", "Enter email address", 1, "ct-input", 3, "ngModelChange", "ngModel"], ["for", "ct-icon", 1, "ct-label"], ["id", "ct-icon", "name", "teamIcon", 1, "ct-select", "ct-select-single", 3, "ngModelChange", "ngModel"], ["value", ""], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 5h1.5v4.5h-1.5V5Zm0 6h1.5v1.5h-1.5V11Z", "fill", "currentColor"], ["aria-hidden", "true", 1, "ct-spinner"]], template: function CreateTeamDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function CreateTeamDialogComponent_Template_button_click_4_listener() {
      return ctx.cancel();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 4);
    \u0275\u0275element(7, "path", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11, " Team Name ");
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 10);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateTeamDialogComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.teamData.teamName, $event) || (ctx.teamData.teamName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "label", 11);
    \u0275\u0275text(18, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, CreateTeamDialogComponent_Conditional_19_Template, 2, 0, "div", 12)(20, CreateTeamDialogComponent_Conditional_20_Template, 5, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, CreateTeamDialogComponent_Conditional_21_Template, 14, 8);
    \u0275\u0275conditionalCreate(22, CreateTeamDialogComponent_Conditional_22_Template, 5, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
    \u0275\u0275listener("click", function CreateTeamDialogComponent_Template_button_click_24_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 16);
    \u0275\u0275listener("click", function CreateTeamDialogComponent_Template_button_click_26_listener() {
      return ctx.save();
    });
    \u0275\u0275conditionalCreate(27, CreateTeamDialogComponent_Conditional_27_Template, 2, 0)(28, CreateTeamDialogComponent_Conditional_28_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Team" : "Create Team");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 10, "common.closeDialog"));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.teamData.teamName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 12, "teams.teamName"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.membersLoading ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isEditMode ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.saveError() ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.teamData.teamName.trim() || ctx.saving);
    \u0275\u0275attribute("aria-busy", ctx.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.saving ? 27 : 28);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  NgControlStatus,
  RequiredValidator,
  NgModel,
  TranslocoModule,
  TitleCasePipe,
  TranslocoPipe
], styles: [`

.ct-dialog[_ngcontent-%COMP%] {
  width: 567px;
  max-width: 100%;
  background: var(--ui-surface);
  border-radius: var(--radius-20);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: var(--font-family-dm-sans);
}
.ct-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 20px;
  border-bottom: 1px solid var(--ui-border);
}
.ct-title[_ngcontent-%COMP%] {
  font-family: var(--font-family-ibm-plex-sans);
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--brand-grays-900);
  margin: 0;
  line-height: 1.4;
}
.ct-close[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-8);
  color: var(--brand-neutral-400);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, color 0.15s;
}
.ct-close[_ngcontent-%COMP%]:hover {
  background: var(--ui-bg);
  color: var(--brand-grays-900);
}
.ct-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--brand-primary-600);
  outline-offset: 2px;
}
.ct-body[_ngcontent-%COMP%] {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: 480px;
}
.ct-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ct-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--caption-2-size);
  font-weight: 600;
  color: var(--brand-grays-900);
  line-height: 1.4;
}
.ct-required[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 500;
  color: var(--brand-neutral-900);
  background: var(--functional-warning-100);
  border: 1px solid var(--functional-warning-300);
  border-radius: 3px;
  padding: 1px 6px;
  line-height: 1.5;
}
.ct-input[_ngcontent-%COMP%] {
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  background: var(--ui-bg);
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  color: var(--brand-grays-900);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
}
.ct-input[_ngcontent-%COMP%]::placeholder {
  color: var(--brand-neutral-400);
}
.ct-input[_ngcontent-%COMP%]:focus {
  border-color: var(--brand-primary-800);
}
.ct-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 14px;
  background: var(--ui-bg);
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  color: var(--brand-grays-900);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
  cursor: pointer;
}
.ct-select[_ngcontent-%COMP%]:focus {
  border-color: var(--brand-primary-800);
}
.ct-select[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.ct-select-multi[_ngcontent-%COMP%] {
  height: 112px;
  padding: 6px 8px;
}
.ct-select-multi[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 5px 8px;
  border-radius: 4px;
}
.ct-select-multi[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked {
  background: var(--brand-primary-100);
  color: var(--brand-primary-800);
}
.ct-select-single[_ngcontent-%COMP%] {
  height: 44px;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
}
.ct-loading[_ngcontent-%COMP%] {
  height: 44px;
  display: flex;
  align-items: center;
  color: var(--brand-neutral-400);
  font-size: var(--caption-2-size);
  cursor: default;
}
.ct-hint[_ngcontent-%COMP%] {
  margin: 2px 0 0;
  font-size: var(--caption-size);
  color: var(--brand-neutral-400);
  line-height: 1.4;
}
.ct-error[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--functional-danger-50, var(--ui-bg));
  border: 1px solid var(--functional-danger-300, var(--ui-border));
  border-radius: var(--radius-8);
  color: var(--functional-danger-700, var(--brand-grays-900));
  font-size: var(--caption-2-size);
  line-height: 1.4;
}
.ct-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid var(--ui-border);
}
.ct-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  min-width: 122px;
  padding: 0 20px;
  border: none;
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.ct-btn-cancel[_ngcontent-%COMP%] {
  background: var(--ui-bg);
  color: var(--brand-grays-900);
  border: 1px solid var(--ui-border);
}
.ct-btn-cancel[_ngcontent-%COMP%]:hover {
  background: var(--brand-neutral-100);
}
.ct-btn-create[_ngcontent-%COMP%] {
  background: var(--brand-primary-800);
  color: var(--ui-surface);
}
.ct-btn-create[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--brand-primary-700);
}
.ct-btn-create[_ngcontent-%COMP%]:disabled {
  background: var(--brand-neutral-200);
  color: var(--brand-neutral-400);
  cursor: not-allowed;
}
.ct-btn-cancel[_ngcontent-%COMP%]:focus-visible, 
.ct-btn-create[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--brand-primary-600);
  outline-offset: 2px;
}
.ct-spinner[_ngcontent-%COMP%] {
  width: 15px;
  height: 15px;
  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_ct-spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes _ngcontent-%COMP%_ct-spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=create-team-dialog.css.map */`] });
var CreateTeamDialogComponent = _CreateTeamDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateTeamDialogComponent, [{
    type: Component,
    args: [{ selector: "app-create-team-dialog", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule
    ], template: `<div class="ct-dialog">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-header">
    <h2 class="ct-title">{{ isEditMode ? 'Edit Team' : 'Create Team' }}</h2>
    <button class="ct-close" (click)="cancel()" [attr.aria-label]="'common.closeDialog' | transloco" type="button">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-body">

    <!-- Team Name -->
    <div class="ct-field">
      <label class="ct-label" for="ct-team-name">
        Team Name
        <span class="ct-required">Required</span>
      </label>
      <input
        id="ct-team-name"
        class="ct-input"
        type="text"
        [(ngModel)]="teamData.teamName"
        name="teamName"
        placeholder="HR, Employees, Contractors"
        [attr.aria-label]="'teams.teamName' | transloco"
        required
      />
    </div>

    <!-- Members -->
    <div class="ct-field">
      <label class="ct-label" for="ct-members">Members</label>
      @if (membersLoading) {
        <div class="ct-input ct-loading" aria-busy="true">Loading members\u2026</div>
      } @else {
        <select
          id="ct-members"
          class="ct-select ct-select-multi"
          [(ngModel)]="teamData.assigners"
          name="assigners"
          multiple
          [disabled]="availableAssigners.length === 0"
          [attr.aria-label]="'teams.selectMembers' | transloco"
          size="4"
        >
          @for (member of availableAssigners; track member.id) {
            <option [value]="member.id">
              {{ member.name || member.email }}{{ member.designation ? ' \u2014 ' + member.designation : '' }}
            </option>
          }
        </select>
        @if (availableAssigners.length === 0) {
          <p class="ct-hint">No employees found in your company.</p>
        }
      }
    </div>

    @if (!isEditMode) {
      <!-- Send via Email -->
      <div class="ct-field">
        <label class="ct-label" for="ct-email">Send via Email</label>
        <input
          id="ct-email"
          class="ct-input"
          type="email"
          [(ngModel)]="teamData.sendViaEmail"
          name="sendViaEmail"
          placeholder="Enter email address"
          [attr.aria-label]="'teams.sendViaEmail' | transloco"
        />
      </div>

      <!-- Team Icon -->
      <div class="ct-field">
        <label class="ct-label" for="ct-icon">Team Icon</label>
        <select
          id="ct-icon"
          class="ct-select ct-select-single"
          [(ngModel)]="teamData.teamIcon"
          name="teamIcon"
          [attr.aria-label]="'teams.selectIcon' | transloco"
        >
          <option value="">Select an icon</option>
          @for (icon of availableIcons; track icon) {
            <option [value]="icon">{{ icon | titlecase }}</option>
          }
        </select>
      </div>
    }

    @if (saveError()) {
      <div class="ct-error" role="alert" aria-live="polite">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 5h1.5v4.5h-1.5V5Zm0 6h1.5v1.5h-1.5V11Z" fill="currentColor"/>
        </svg>
        <span>{{ saveError() }}</span>
      </div>
    }

  </div>

  <!-- \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ct-footer">
    <button class="ct-btn ct-btn-cancel" (click)="cancel()" type="button">Cancel</button>
    <button
      class="ct-btn ct-btn-create"
      (click)="save()"
      type="button"
      [disabled]="!teamData.teamName.trim() || saving"
      [attr.aria-busy]="saving"
    >
      @if (saving) {
        <span class="ct-spinner" aria-hidden="true"></span>
        Saving\u2026
      } @else {
        {{ isEditMode ? 'Save Changes' : 'Create Team' }}
      }
    </button>
  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/SidebarComponents/TeamsTabComponents/create-team-dialog/create-team-dialog.css */
.ct-dialog {
  width: 567px;
  max-width: 100%;
  background: var(--ui-surface);
  border-radius: var(--radius-20);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: var(--font-family-dm-sans);
}
.ct-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 20px;
  border-bottom: 1px solid var(--ui-border);
}
.ct-title {
  font-family: var(--font-family-ibm-plex-sans);
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--brand-grays-900);
  margin: 0;
  line-height: 1.4;
}
.ct-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-8);
  color: var(--brand-neutral-400);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, color 0.15s;
}
.ct-close:hover {
  background: var(--ui-bg);
  color: var(--brand-grays-900);
}
.ct-close:focus-visible {
  outline: 2px solid var(--brand-primary-600);
  outline-offset: 2px;
}
.ct-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: 480px;
}
.ct-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ct-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--caption-2-size);
  font-weight: 600;
  color: var(--brand-grays-900);
  line-height: 1.4;
}
.ct-required {
  font-size: 11px;
  font-weight: 500;
  color: var(--brand-neutral-900);
  background: var(--functional-warning-100);
  border: 1px solid var(--functional-warning-300);
  border-radius: 3px;
  padding: 1px 6px;
  line-height: 1.5;
}
.ct-input {
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  background: var(--ui-bg);
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  color: var(--brand-grays-900);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
}
.ct-input::placeholder {
  color: var(--brand-neutral-400);
}
.ct-input:focus {
  border-color: var(--brand-primary-800);
}
.ct-select {
  width: 100%;
  padding: 10px 14px;
  background: var(--ui-bg);
  border: 1px solid var(--ui-border);
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  color: var(--brand-grays-900);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
  cursor: pointer;
}
.ct-select:focus {
  border-color: var(--brand-primary-800);
}
.ct-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.ct-select-multi {
  height: 112px;
  padding: 6px 8px;
}
.ct-select-multi option {
  padding: 5px 8px;
  border-radius: 4px;
}
.ct-select-multi option:checked {
  background: var(--brand-primary-100);
  color: var(--brand-primary-800);
}
.ct-select-single {
  height: 44px;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
}
.ct-loading {
  height: 44px;
  display: flex;
  align-items: center;
  color: var(--brand-neutral-400);
  font-size: var(--caption-2-size);
  cursor: default;
}
.ct-hint {
  margin: 2px 0 0;
  font-size: var(--caption-size);
  color: var(--brand-neutral-400);
  line-height: 1.4;
}
.ct-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--functional-danger-50, var(--ui-bg));
  border: 1px solid var(--functional-danger-300, var(--ui-border));
  border-radius: var(--radius-8);
  color: var(--functional-danger-700, var(--brand-grays-900));
  font-size: var(--caption-2-size);
  line-height: 1.4;
}
.ct-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid var(--ui-border);
}
.ct-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  min-width: 122px;
  padding: 0 20px;
  border: none;
  border-radius: var(--radius-8);
  font-family: var(--font-family-dm-sans);
  font-size: var(--caption-2-size);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.ct-btn-cancel {
  background: var(--ui-bg);
  color: var(--brand-grays-900);
  border: 1px solid var(--ui-border);
}
.ct-btn-cancel:hover {
  background: var(--brand-neutral-100);
}
.ct-btn-create {
  background: var(--brand-primary-800);
  color: var(--ui-surface);
}
.ct-btn-create:hover:not(:disabled) {
  background: var(--brand-primary-700);
}
.ct-btn-create:disabled {
  background: var(--brand-neutral-200);
  color: var(--brand-neutral-400);
  cursor: not-allowed;
}
.ct-btn-cancel:focus-visible,
.ct-btn-create:focus-visible {
  outline: 2px solid var(--brand-primary-600);
  outline-offset: 2px;
}
.ct-spinner {
  width: 15px;
  height: 15px;
  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: ct-spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes ct-spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=create-team-dialog.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateTeamDialogComponent, { className: "CreateTeamDialogComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/teamstabcomponents/create-team-dialog/create-team-dialog.ts", lineNumber: 26 });
})();

export {
  InviteMembersDialogComponent,
  CreateTeamDialogComponent
};
//# sourceMappingURL=chunk-K5MTZ62X.js.map
