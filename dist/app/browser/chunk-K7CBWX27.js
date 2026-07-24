import {
  MeetingsService,
  REPEAT_ID_TO_TYPE,
  REPEAT_TYPE_TO_ID
} from "./chunk-USQJLBKJ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  TeamsService
} from "./chunk-6LK6CDX3.js";
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
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  __spreadProps,
  __spreadValues,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// src/components/DashboardLayout/SidebarComponents/MeetingsTabComponents/create-meeting-dialoge/create-meeting-dialoge.ts
var _forTrack0 = ($index, $item) => $item.id;
function CreateMeetingDialogeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Meeting title is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateMeetingDialogeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Date is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateMeetingDialogeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Start time is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateMeetingDialogeComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "End time is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateMeetingDialogeComponent_Conditional_79_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 44)(1, "input", 45);
    \u0275\u0275listener("change", function CreateMeetingDialogeComponent_Conditional_79_For_2_Template_input_change_1_listener() {
      const member_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMember(member_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r3.isMemberSelected(member_r3.id));
    \u0275\u0275attribute("aria-selected", ctx_r3.isMemberSelected(member_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isMemberSelected(member_r3.id));
    \u0275\u0275attribute("aria-label", member_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r3.name);
  }
}
function CreateMeetingDialogeComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, CreateMeetingDialogeComponent_Conditional_79_For_2_Template, 4, 6, "label", 43, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.members);
  }
}
function CreateMeetingDialogeComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "No employees have been added to your company yet.");
    \u0275\u0275elementEnd();
  }
}
var _CreateMeetingDialogeComponent = class _CreateMeetingDialogeComponent {
  constructor() {
    this.members = [];
    this.membersLoading = true;
    this.isSaving = false;
    this.membersDropdownOpen = false;
    this.isEditMode = false;
    this.editMeetingId = null;
    this.form = {
      title: "",
      meetingLink: "",
      meetingDescription: "",
      meetingDate: "",
      startTime: "",
      endTime: "",
      repeatType: "None",
      assignedMemberIds: []
    };
    this.dialogRef = inject(MatDialogRef);
    this.dialogData = inject(MAT_DIALOG_DATA, { optional: true });
    this.teamsService = inject(TeamsService);
    this.meetingsService = inject(MeetingsService);
    this.elRef = inject(ElementRef);
    this.submitted = false;
  }
  onDocumentClick(event) {
    if (!this.elRef.nativeElement.querySelector(".members-dropdown-wrapper")?.contains(event.target)) {
      this.membersDropdownOpen = false;
    }
  }
  get dialogTitle() {
    return this.isEditMode ? "Edit Meeting" : "Create New Meeting";
  }
  get saveLabel() {
    if (this.isSaving)
      return this.isEditMode ? "Saving..." : "Creating...";
    return this.isEditMode ? "Save Changes" : "Create";
  }
  get selectedMembersLabel() {
    if (this.membersLoading)
      return "Loading members...";
    if (this.members.length === 0)
      return "No employees found";
    const count = this.form.assignedMemberIds.length;
    if (count === 0)
      return "Select members";
    if (count === 1) {
      const m = this.members.find((m2) => String(m2.id) === this.form.assignedMemberIds[0]);
      return m?.name ?? "1 member selected";
    }
    return `${count} members selected`;
  }
  isMemberSelected(id) {
    return this.form.assignedMemberIds.includes(String(id));
  }
  toggleMember(id) {
    const sid = String(id);
    const idx = this.form.assignedMemberIds.indexOf(sid);
    if (idx === -1) {
      this.form.assignedMemberIds = [...this.form.assignedMemberIds, sid];
    } else {
      this.form.assignedMemberIds = this.form.assignedMemberIds.filter((x) => x !== sid);
    }
  }
  toggleDropdown() {
    if (!this.membersLoading && this.members.length > 0) {
      this.membersDropdownOpen = !this.membersDropdownOpen;
    }
  }
  ngOnInit() {
    const existing = this.dialogData?.meeting;
    if (existing) {
      this.isEditMode = true;
      this.editMeetingId = existing.id;
      const dateStr = existing.startTime?.includes("T") ? existing.startTime.substring(0, 10) : (existing.meetingDate ?? "").substring(0, 10);
      const startStr = existing.startTime?.includes("T") ? existing.startTime.substring(11, 16) : existing.startTime?.substring(0, 5) ?? "";
      const endStr = existing.endTime?.includes("T") ? existing.endTime.substring(11, 16) : existing.endTime?.substring(0, 5) ?? "";
      const repeatType = existing.repeatType ?? REPEAT_ID_TO_TYPE[existing.repeatId ?? 0] ?? "None";
      const existingIds = [
        ...existing.participants?.map((p) => String(p.id)) ?? [],
        ...existing.meetingUsers?.map((u) => String(u.assignedUserId ?? u.id ?? "")) ?? [],
        ...existing.meetingUserIds?.map((id) => String(id)) ?? []
      ].filter((v, i, a) => v && a.indexOf(v) === i);
      this.form = {
        title: existing.title ?? "",
        meetingLink: existing.meetingLink ?? "",
        meetingDescription: existing.description ?? existing.meetingDescription ?? "",
        meetingDate: dateStr,
        startTime: startStr,
        endTime: endStr,
        repeatType,
        assignedMemberIds: existingIds
      };
    }
    this.teamsService.getAllTeamMembers().subscribe({
      next: (members) => {
        this.members = members || [];
        this.membersLoading = false;
      },
      error: () => {
        this.members = [];
        this.membersLoading = false;
      }
    });
  }
  get isFormValid() {
    return !!(this.form.title.trim() && this.form.meetingDate && this.form.startTime && this.form.endTime);
  }
  saveMeeting() {
    this.submitted = true;
    if (!this.isFormValid)
      return;
    this.isSaving = true;
    const participants = this.members.filter((m) => this.form.assignedMemberIds.includes(String(m.id)));
    const startIso = this.form.meetingDate && this.form.startTime ? `${this.form.meetingDate}T${this.form.startTime}:00` : this.form.startTime;
    const endIso = this.form.meetingDate && this.form.endTime ? `${this.form.meetingDate}T${this.form.endTime}:00` : this.form.endTime;
    const payload = {
      title: this.form.title,
      meetingLink: this.form.meetingLink,
      description: this.form.meetingDescription,
      startTime: startIso,
      endTime: endIso,
      repeatId: REPEAT_TYPE_TO_ID[this.form.repeatType] ?? 0,
      meetingUserIds: participants.map((p) => p.id)
    };
    if (this.isEditMode && this.editMeetingId) {
      payload["id"] = this.editMeetingId;
      this.meetingsService.updateMeeting(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.dialogRef.close({ success: true, updated: payload, participants });
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.meetingsService.createMeeting(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.dialogRef.close(true);
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
};
_CreateMeetingDialogeComponent.\u0275fac = function CreateMeetingDialogeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateMeetingDialogeComponent)();
};
_CreateMeetingDialogeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateMeetingDialogeComponent, selectors: [["app-create-meeting-dialoge"]], hostBindings: function CreateMeetingDialogeComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function CreateMeetingDialogeComponent_click_HostBindingHandler($event) {
      return ctx.onDocumentClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, decls: 88, vars: 62, consts: [["meetingForm", "ngForm"], [1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], [1, "close-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", "width", "20px", "height", "20px", "aria-hidden", "true"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"], [1, "dialog-content"], [1, "meeting-form", 3, "ngSubmit"], [1, "form-group"], ["for", "meetingTitle"], ["aria-hidden", "true", 1, "required-mark"], ["type", "text", "id", "meetingTitle", "name", "title", "placeholder", "Add here..", "required", "", 1, "input-field", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "field-error"], ["for", "meetingLink"], ["type", "text", "id", "meetingLink", "name", "meetingLink", "placeholder", "Example: google link or zoom", 1, "input-field", 3, "ngModelChange", "ngModel"], ["for", "meetingDescription"], ["id", "meetingDescription", "name", "meetingDescription", "placeholder", "Add the purpose of your meeting", "rows", "3", 1, "input-field", "textarea-field", 3, "ngModelChange", "ngModel"], [1, "time-row"], ["for", "meetingDate"], ["type", "date", "id", "meetingDate", "name", "meetingDate", "required", "", 1, "input-field", "date-field", 3, "ngModelChange", "ngModel"], ["for", "startingTime"], ["type", "time", "id", "startingTime", "name", "startingTime", "required", "", 1, "input-field", "time-field", 3, "ngModelChange", "ngModel"], ["for", "endingTime"], ["type", "time", "id", "endingTime", "name", "endingTime", "required", "", 1, "input-field", "time-field", 3, "ngModelChange", "ngModel"], ["for", "repeatEvery"], [1, "select-wrapper"], ["id", "repeatEvery", "name", "repeatEvery", 1, "input-field", "select-field", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "None"], ["value", "Daily"], ["value", "Weekly"], ["value", "Monthly"], [1, "members-dropdown-wrapper"], ["type", "button", "aria-haspopup", "listbox", 1, "members-trigger", "input-field", 3, "click", "disabled"], [1, "trigger-label"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", "width", "16", "height", "16", "aria-hidden", "true", 1, "trigger-chevron"], ["d", "M7 10l5 5 5-5z"], ["role", "listbox", "aria-multiselectable", "true", 1, "members-dropdown"], [1, "members-hint"], [1, "dialog-actions"], ["type", "button", 1, "cancel-button", 3, "click"], ["type", "button", 1, "create-button", 3, "click", "disabled"], ["role", "option", 1, "member-option", 3, "selected"], ["role", "option", 1, "member-option"], ["type", "checkbox", 3, "change", "checked"], [1, "member-name"]], template: function CreateMeetingDialogeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function CreateMeetingDialogeComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.dialogRef.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "path", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 7)(9, "form", 8, 0);
    \u0275\u0275listener("ngSubmit", function CreateMeetingDialogeComponent_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveMeeting());
    });
    \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Meeting Title ");
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 12);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.title, $event) || (ctx.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, CreateMeetingDialogeComponent_Conditional_18_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "label", 14);
    \u0275\u0275text(21, "Meeting Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 15);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.meetingLink, $event) || (ctx.form.meetingLink = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 9)(25, "label", 16);
    \u0275\u0275text(26, "Meeting Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 17);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.meetingDescription, $event) || (ctx.form.meetingDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 9)(31, "label", 19);
    \u0275\u0275text(32, "Date ");
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 20);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.meetingDate, $event) || (ctx.form.meetingDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, CreateMeetingDialogeComponent_Conditional_37_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 9)(39, "label", 21);
    \u0275\u0275text(40, "Starting Time ");
    \u0275\u0275elementStart(41, "span", 11);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "input", 22);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.startTime, $event) || (ctx.form.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, CreateMeetingDialogeComponent_Conditional_45_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 9)(47, "label", 23);
    \u0275\u0275text(48, "Ending Time ");
    \u0275\u0275elementStart(49, "span", 11);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "input", 24);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.endTime, $event) || (ctx.form.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(53, CreateMeetingDialogeComponent_Conditional_53_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 9)(55, "label", 25);
    \u0275\u0275text(56, "Repeat Every");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 26)(58, "select", 27);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CreateMeetingDialogeComponent_Template_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.form.repeatType, $event) || (ctx.form.repeatType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(60, "option", 28);
    \u0275\u0275text(61, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 29);
    \u0275\u0275text(63, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 30);
    \u0275\u0275text(65, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 31);
    \u0275\u0275text(67, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 32);
    \u0275\u0275text(69, "Monthly");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 9)(71, "label");
    \u0275\u0275text(72, "Assign Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 33)(74, "button", 34);
    \u0275\u0275listener("click", function CreateMeetingDialogeComponent_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleDropdown());
    });
    \u0275\u0275elementStart(75, "span", 35);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 36);
    \u0275\u0275element(78, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(79, CreateMeetingDialogeComponent_Conditional_79_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(80, CreateMeetingDialogeComponent_Conditional_80_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(81, "div", 40)(82, "button", 41);
    \u0275\u0275pipe(83, "transloco");
    \u0275\u0275listener("click", function CreateMeetingDialogeComponent_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.dialogRef.close());
    });
    \u0275\u0275text(84, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 42);
    \u0275\u0275pipe(86, "transloco");
    \u0275\u0275listener("click", function CreateMeetingDialogeComponent_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveMeeting());
    });
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.dialogTitle);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 42, "common.closeDialog"));
    \u0275\u0275advance(12);
    \u0275\u0275classProp("input-error", ctx.submitted && !ctx.form.title.trim());
    \u0275\u0275twoWayProperty("ngModel", ctx.form.title);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 44, "meetings.meetingTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.submitted && !ctx.form.title.trim() ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.meetingLink);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 46, "meetings.meetingLink"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.meetingDescription);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 48, "meetings.meetingDescription"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("input-error", ctx.submitted && !ctx.form.meetingDate);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.meetingDate);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 50, "meetings.meetingDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.submitted && !ctx.form.meetingDate ? 37 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("input-error", ctx.submitted && !ctx.form.startTime);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.startTime);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 52, "meetings.startTime"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.submitted && !ctx.form.startTime ? 45 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("input-error", ctx.submitted && !ctx.form.endTime);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.endTime);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 54, "meetings.endTime"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.submitted && !ctx.form.endTime ? 53 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.repeatType);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(59, 56, "meetings.repeatFrequency"));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("open", ctx.membersDropdownOpen);
    \u0275\u0275property("disabled", ctx.membersLoading);
    \u0275\u0275attribute("aria-expanded", ctx.membersDropdownOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("placeholder", ctx.form.assignedMemberIds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.selectedMembersLabel, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.membersDropdownOpen ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.membersLoading && ctx.members.length === 0 ? 80 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(83, 58, "common.cancel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isSaving || ctx.submitted && !ctx.isFormValid);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 60, "meetings.saveMeeting"))("aria-busy", ctx.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.saveLabel, " ");
  }
}, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, MatDialogModule, TranslocoModule, TranslocoPipe], styles: [`

[_nghost-%COMP%] {
  display: block;
}
.dialog-container[_ngcontent-%COMP%] {
  width: 560px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: 12px;
  overflow: hidden;
}
.dialog-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid var(--ui-border);
}
.dialog-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--ui-text-main);
}
.close-button[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: var(--ui-text-muted);
  transition: background 0.15s, color 0.15s;
}
.close-button[_ngcontent-%COMP%]:hover {
  background: var(--ui-bg-subtle);
  color: var(--ui-text-main);
}
.dialog-content[_ngcontent-%COMP%] {
  padding: 24px;
  max-height: 68vh;
  overflow-y: auto;
}
.dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 5px;
}
.dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
.dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--ui-border);
  border-radius: 3px;
}
.meeting-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
}
.input-field[_ngcontent-%COMP%] {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  font-size: 14px;
  color: var(--ui-text-main);
  background-color: var(--ui-bg-surface);
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
  font-family: inherit;
}
.input-field[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
.input-field[_ngcontent-%COMP%]:focus {
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-500) 12%, transparent);
}
.textarea-field[_ngcontent-%COMP%] {
  min-height: 80px;
  resize: vertical;
  line-height: 1.5;
}
.time-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.date-field[_ngcontent-%COMP%], 
.time-field[_ngcontent-%COMP%] {
  color: var(--ui-text-main);
}
.date-field[_ngcontent-%COMP%]::-webkit-datetime-edit, 
.time-field[_ngcontent-%COMP%]::-webkit-datetime-edit {
  color: var(--ui-text-main);
}
.select-wrapper[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
}
.select-field[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23999" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.select-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  color: var(--ui-text-main);
}
.members-dropdown-wrapper[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
}
.members-trigger[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.members-trigger[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.trigger-label[_ngcontent-%COMP%] {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ui-text-main);
}
.trigger-label.placeholder[_ngcontent-%COMP%] {
  color: var(--ui-text-muted);
}
.trigger-chevron[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--ui-text-muted);
  transition: transform 0.2s;
  margin-inline-start: 8px;
}
.members-trigger.open[_ngcontent-%COMP%]   .trigger-chevron[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.members-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: 0;
  top: calc(100% + 4px);
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--ui-text-main) 10%, transparent);
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  padding: 6px;
}
.members-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 4px;
}
.members-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: transparent;
}
.members-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--ui-border);
  border-radius: 2px;
}
.member-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.12s;
}
.member-option[_ngcontent-%COMP%]:hover {
  background: var(--ui-bg-subtle);
}
.member-option.selected[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--brand-primary-500) 10%, transparent);
}
.member-option[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  accent-color: var(--brand-primary-500);
  cursor: pointer;
  flex-shrink: 0;
}
.member-name[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--ui-text-main);
}
.dialog-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-top: 1px solid var(--ui-border);
}
.cancel-button[_ngcontent-%COMP%] {
  padding: 9px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  border: 1px solid var(--ui-border);
  transition: background 0.15s;
}
.cancel-button[_ngcontent-%COMP%]:hover {
  background: var(--ui-bg-subtle);
}
.create-button[_ngcontent-%COMP%] {
  padding: 9px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: var(--brand-neutral-950);
  color: var(--ui-bg-surface);
  border: none;
  transition: opacity 0.15s;
}
.create-button[_ngcontent-%COMP%]:hover {
  opacity: 0.88;
}
.members-hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
  margin-block-start: 4px;
}
.required-mark[_ngcontent-%COMP%] {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.input-error[_ngcontent-%COMP%] {
  border-color: var(--functional-danger-400) !important;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-danger-500) 12%, transparent) !important;
}
.field-error[_ngcontent-%COMP%] {
  display: block;
  font-size: 12px;
  color: var(--functional-danger-600);
  margin-block-start: 2px;
}
@media (max-width: 600px) {
  .dialog-container[_ngcontent-%COMP%] {
    width: 100%;
    border-radius: 0;
  }
  .dialog-header[_ngcontent-%COMP%], 
   .dialog-content[_ngcontent-%COMP%], 
   .dialog-actions[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .time-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .cancel-button[_ngcontent-%COMP%], 
   .create-button[_ngcontent-%COMP%] {
    flex: 1;
    justify-content: center;
  }
}
/*# sourceMappingURL=create-meeting-dialoge.css.map */`] });
var CreateMeetingDialogeComponent = _CreateMeetingDialogeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateMeetingDialogeComponent, [{
    type: Component,
    args: [{ selector: "app-create-meeting-dialoge", standalone: true, imports: [CommonModule, FormsModule, MatDialogModule, TranslocoModule], template: `<div class="dialog-container">

  <!-- Header -->
  <div class="dialog-header">
    <h2 class="dialog-title">{{ dialogTitle }}</h2>
    <button class="close-button" (click)="dialogRef.close()" [attr.aria-label]="'common.closeDialog' | transloco">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px" aria-hidden="true">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>

  <!-- Body -->
  <div class="dialog-content">
    <form class="meeting-form" #meetingForm="ngForm" (ngSubmit)="saveMeeting()">

      <div class="form-group">
        <label for="meetingTitle">Meeting Title <span class="required-mark" aria-hidden="true">*</span></label>
        <input type="text" id="meetingTitle" name="title" placeholder="Add here.."
               class="input-field" [attr.aria-label]="'meetings.meetingTitle' | transloco"
               [class.input-error]="submitted && !form.title.trim()"
               [(ngModel)]="form.title" required />
        @if (submitted && !form.title.trim()) {
          <span class="field-error" role="alert">Meeting title is required.</span>
        }
      </div>

      <div class="form-group">
        <label for="meetingLink">Meeting Link</label>
        <input type="text" id="meetingLink" name="meetingLink" placeholder="Example: google link or zoom"
               class="input-field" [attr.aria-label]="'meetings.meetingLink' | transloco"
               [(ngModel)]="form.meetingLink" />
      </div>

      <div class="form-group">
        <label for="meetingDescription">Meeting Description</label>
        <textarea id="meetingDescription" name="meetingDescription"
                  placeholder="Add the purpose of your meeting" rows="3"
                  class="input-field textarea-field" [attr.aria-label]="'meetings.meetingDescription' | transloco"
                  [(ngModel)]="form.meetingDescription"></textarea>
      </div>

      <div class="time-row">
        <div class="form-group">
          <label for="meetingDate">Date <span class="required-mark" aria-hidden="true">*</span></label>
          <input type="date" id="meetingDate" name="meetingDate"
                 class="input-field date-field" [attr.aria-label]="'meetings.meetingDate' | transloco"
                 [class.input-error]="submitted && !form.meetingDate"
                 [(ngModel)]="form.meetingDate" required />
          @if (submitted && !form.meetingDate) {
            <span class="field-error" role="alert">Date is required.</span>
          }
        </div>
        <div class="form-group">
          <label for="startingTime">Starting Time <span class="required-mark" aria-hidden="true">*</span></label>
          <input type="time" id="startingTime" name="startingTime"
                 class="input-field time-field" [attr.aria-label]="'meetings.startTime' | transloco"
                 [class.input-error]="submitted && !form.startTime"
                 [(ngModel)]="form.startTime" required />
          @if (submitted && !form.startTime) {
            <span class="field-error" role="alert">Start time is required.</span>
          }
        </div>
        <div class="form-group">
          <label for="endingTime">Ending Time <span class="required-mark" aria-hidden="true">*</span></label>
          <input type="time" id="endingTime" name="endingTime"
                 class="input-field time-field" [attr.aria-label]="'meetings.endTime' | transloco"
                 [class.input-error]="submitted && !form.endTime"
                 [(ngModel)]="form.endTime" required />
          @if (submitted && !form.endTime) {
            <span class="field-error" role="alert">End time is required.</span>
          }
        </div>
      </div>

      <div class="form-group">
        <label for="repeatEvery">Repeat Every</label>
        <div class="select-wrapper">
          <select id="repeatEvery" name="repeatEvery" class="input-field select-field"
                  [attr.aria-label]="'meetings.repeatFrequency' | transloco" [(ngModel)]="form.repeatType">
            <option value="" disabled selected hidden>Select</option>
            <option value="None">None</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Assign Members</label>
        <div class="members-dropdown-wrapper">
          <button type="button" class="members-trigger input-field"
                  [class.open]="membersDropdownOpen"
                  [disabled]="membersLoading"
                  (click)="toggleDropdown()"
                  aria-haspopup="listbox" [attr.aria-expanded]="membersDropdownOpen">
            <span class="trigger-label" [class.placeholder]="form.assignedMemberIds.length === 0">
              {{ selectedMembersLabel }}
            </span>
            <svg class="trigger-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>

          @if (membersDropdownOpen) {
            <div class="members-dropdown" role="listbox" aria-multiselectable="true">
              @for (member of members; track member.id) {
                <label class="member-option"
                       [class.selected]="isMemberSelected(member.id)"
                       role="option"
                       [attr.aria-selected]="isMemberSelected(member.id)">
                  <input type="checkbox"
                         [checked]="isMemberSelected(member.id)"
                         (change)="toggleMember(member.id)"
                         [attr.aria-label]="member.name" />
                  <span class="member-name">{{ member.name }}</span>
                </label>
              }
            </div>
          }
        </div>
        @if (!membersLoading && members.length === 0) {
          <span class="members-hint">No employees have been added to your company yet.</span>
        }
      </div>

    </form>
  </div>

  <!-- Footer -->
  <div class="dialog-actions">
    <button type="button" class="cancel-button" (click)="dialogRef.close()" [attr.aria-label]="'common.cancel' | transloco">Cancel</button>
    <button type="button" class="create-button" [disabled]="isSaving || (submitted && !isFormValid)"
            (click)="saveMeeting()" [attr.aria-label]="'meetings.saveMeeting' | transloco" [attr.aria-busy]="isSaving">
      {{ saveLabel }}
    </button>
  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/SidebarComponents/MeetingsTabComponents/create-meeting-dialoge/create-meeting-dialoge.css */
:host {
  display: block;
}
.dialog-container {
  width: 560px;
  max-width: 100%;
  background: var(--ui-bg-surface);
  border-radius: 12px;
  overflow: hidden;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid var(--ui-border);
}
.dialog-title {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--ui-text-main);
}
.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: var(--ui-text-muted);
  transition: background 0.15s, color 0.15s;
}
.close-button:hover {
  background: var(--ui-bg-subtle);
  color: var(--ui-text-main);
}
.dialog-content {
  padding: 24px;
  max-height: 68vh;
  overflow-y: auto;
}
.dialog-content::-webkit-scrollbar {
  width: 5px;
}
.dialog-content::-webkit-scrollbar-track {
  background: transparent;
}
.dialog-content::-webkit-scrollbar-thumb {
  background: var(--ui-border);
  border-radius: 3px;
}
.meeting-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
}
.input-field {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  font-size: 14px;
  color: var(--ui-text-main);
  background-color: var(--ui-bg-surface);
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
  font-family: inherit;
}
.input-field::placeholder {
  color: var(--ui-text-muted);
}
.input-field:focus {
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-500) 12%, transparent);
}
.textarea-field {
  min-height: 80px;
  resize: vertical;
  line-height: 1.5;
}
.time-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.date-field,
.time-field {
  color: var(--ui-text-main);
}
.date-field::-webkit-datetime-edit,
.time-field::-webkit-datetime-edit {
  color: var(--ui-text-main);
}
.select-wrapper {
  position: relative;
  width: 100%;
}
.select-field {
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23999" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.select-field option {
  color: var(--ui-text-main);
}
.members-dropdown-wrapper {
  position: relative;
  width: 100%;
}
.members-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.members-trigger:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.trigger-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ui-text-main);
}
.trigger-label.placeholder {
  color: var(--ui-text-muted);
}
.trigger-chevron {
  flex-shrink: 0;
  color: var(--ui-text-muted);
  transition: transform 0.2s;
  margin-inline-start: 8px;
}
.members-trigger.open .trigger-chevron {
  transform: rotate(180deg);
}
.members-dropdown {
  position: absolute;
  inset-inline: 0;
  top: calc(100% + 4px);
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--ui-text-main) 10%, transparent);
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  padding: 6px;
}
.members-dropdown::-webkit-scrollbar {
  width: 4px;
}
.members-dropdown::-webkit-scrollbar-track {
  background: transparent;
}
.members-dropdown::-webkit-scrollbar-thumb {
  background: var(--ui-border);
  border-radius: 2px;
}
.member-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.12s;
}
.member-option:hover {
  background: var(--ui-bg-subtle);
}
.member-option.selected {
  background: color-mix(in srgb, var(--brand-primary-500) 10%, transparent);
}
.member-option input[type=checkbox] {
  width: 16px;
  height: 16px;
  accent-color: var(--brand-primary-500);
  cursor: pointer;
  flex-shrink: 0;
}
.member-name {
  font-size: 14px;
  color: var(--ui-text-main);
}
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-top: 1px solid var(--ui-border);
}
.cancel-button {
  padding: 9px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  border: 1px solid var(--ui-border);
  transition: background 0.15s;
}
.cancel-button:hover {
  background: var(--ui-bg-subtle);
}
.create-button {
  padding: 9px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: var(--brand-neutral-950);
  color: var(--ui-bg-surface);
  border: none;
  transition: opacity 0.15s;
}
.create-button:hover {
  opacity: 0.88;
}
.members-hint {
  font-size: 12px;
  color: var(--ui-text-muted);
  margin-block-start: 4px;
}
.required-mark {
  color: var(--functional-danger-500);
  margin-inline-start: 2px;
}
.input-error {
  border-color: var(--functional-danger-400) !important;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-danger-500) 12%, transparent) !important;
}
.field-error {
  display: block;
  font-size: 12px;
  color: var(--functional-danger-600);
  margin-block-start: 2px;
}
@media (max-width: 600px) {
  .dialog-container {
    width: 100%;
    border-radius: 0;
  }
  .dialog-header,
  .dialog-content,
  .dialog-actions {
    padding: 16px;
  }
  .time-row {
    grid-template-columns: 1fr;
  }
  .cancel-button,
  .create-button {
    flex: 1;
    justify-content: center;
  }
}
/*# sourceMappingURL=create-meeting-dialoge.css.map */
`] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateMeetingDialogeComponent, { className: "CreateMeetingDialogeComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/meetingstabcomponents/create-meeting-dialoge/create-meeting-dialoge.ts", lineNumber: 18 });
})();

// src/components/DashboardLayout/SidebarComponents/MeetingsTabComponents/meetings-list/meetings-list.ts
var _c0 = ["filterWrap"];
var _c1 = () => [];
var _forTrack02 = ($index, $item) => $item.id;
function MeetingsListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addNewMeeting());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 45);
    \u0275\u0275element(3, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " New Meeting ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "meetings.createMeeting"));
  }
}
function MeetingsListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function MeetingsListComponent_Conditional_33_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_33_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(3, " Clear filters ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "common.clearFilters"));
  }
}
function MeetingsListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "label", 49);
    \u0275\u0275text(5, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 50);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Conditional_33_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.statusFilter, $event) || (ctx_r2.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MeetingsListComponent_Conditional_33_Template_select_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilterChange());
    });
    \u0275\u0275elementStart(8, "option", 51);
    \u0275\u0275text(9, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 52);
    \u0275\u0275text(11, "Scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 53);
    \u0275\u0275text(13, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 54);
    \u0275\u0275text(15, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 48)(17, "label", 55);
    \u0275\u0275text(18, "Repeat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 56);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Conditional_33_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.repeatFilter, $event) || (ctx_r2.repeatFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MeetingsListComponent_Conditional_33_Template_select_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRepeatFilterChange());
    });
    \u0275\u0275elementStart(21, "option", 51);
    \u0275\u0275text(22, "All Repeats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 57);
    \u0275\u0275text(24, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 58);
    \u0275\u0275text(26, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 59);
    \u0275\u0275text(28, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 60);
    \u0275\u0275text(30, "None");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(31, MeetingsListComponent_Conditional_33_Conditional_31_Template, 4, 3, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 6, "common.filters"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.statusFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "common.filterByStatus"));
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.repeatFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 10, "meetings.filterByRepeat"));
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r2.hasActiveFilters() ? 31 : -1);
  }
}
function MeetingsListComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 41);
    \u0275\u0275element(1, "path", 63);
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 41);
    \u0275\u0275element(1, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "div", 65);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Loading meetings...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "meetings.loadingMeetings"));
  }
}
function MeetingsListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "circle", 67)(3, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 69);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_53_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMeetings());
    });
    \u0275\u0275text(7, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.loadError());
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 76)(1, "td", 77);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_For_18_Template_td_click_1_listener() {
      const meeting_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectedMeeting.set(meeting_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 78);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 79)(13, "button", 80);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 32);
    \u0275\u0275element(16, "circle", 81)(17, "circle", 82)(18, "circle", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "mat-menu", null, 1)(21, "button", 84);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_For_18_Template_button_click_21_listener() {
      const meeting_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectedMeeting.set(meeting_r8));
    });
    \u0275\u0275text(22, "View Details");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const meeting_r8 = ctx.$implicit;
    const rowMtgMenu_r9 = \u0275\u0275reference(20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", meeting_r8.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 8, meeting_r8.meetingDate, "mediumDate") || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", meeting_r8.startTime || "\u2014", "", meeting_r8.endTime ? " \u2013 " + meeting_r8.endTime : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meeting_r8.status || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meeting_r8.repeatType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", rowMtgMenu_r9);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 11, "meetings.meetingOptions"));
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "table", 73)(2, "thead")(3, "tr")(4, "th", 74);
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 74);
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 74);
    \u0275\u0275text(9, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 74);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 74);
    \u0275\u0275text(13, "Repeat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 75);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_For_18_Template, 23, 13, "tr", 76, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.filteredMeetings);
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meeting_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" with ", ctx_r2.getParticipantNames(meeting_r11));
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const meeting_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openEditMeeting(meeting_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 106);
    \u0275\u0275element(2, "path", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 109);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const meeting_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.requestDelete(meeting_r11.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 106);
    \u0275\u0275element(6, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275element(2, "img", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 88)(4, "div", 89);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_6_Template, 2, 1, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 92);
    \u0275\u0275element(9, "rect", 93)(10, "path", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 95);
    \u0275\u0275element(14, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 97)(18, "span", 98);
    \u0275\u0275element(19, "span", 99);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 100);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Template_button_click_21_listener() {
      const meeting_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.showMeetingDetails(meeting_r11));
    });
    \u0275\u0275text(22, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 23);
    \u0275\u0275element(25, "circle", 102)(26, "circle", 103)(27, "circle", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "mat-menu", 105, 2)(30, "button", 84);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Template_button_click_30_listener() {
      const meeting_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.showMeetingDetails(meeting_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 106);
    \u0275\u0275element(32, "path", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Conditional_34_Template, 8, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const meeting_r11 = ctx.$implicit;
    const cardMenu_r13 = \u0275\u0275reference(29);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", meeting_r11.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getParticipantNames(meeting_r11) ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(meeting_r11.startTime));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(meeting_r11.endTime));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-scheduled", (meeting_r11.status || "Scheduled") === "Scheduled")("pill-completed", meeting_r11.status === "Completed")("pill-cancelled", meeting_r11.status === "Cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", meeting_r11.status || "Scheduled", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Open details for " + meeting_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", cardMenu_r13);
    \u0275\u0275attribute("aria-label", "Options for " + meeting_r11.title);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 34 : -1);
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275repeaterCreate(1, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_For_2_Template, 35, 15, "div", 85, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredMeetings);
  }
}
function MeetingsListComponent_Conditional_54_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_0_Template, 19, 0, "div", 71)(1, MeetingsListComponent_Conditional_54_Conditional_0_Conditional_1_Template, 3, 0, "div", 72);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.viewMode === "table" ? 0 : 1);
  }
}
function MeetingsListComponent_Conditional_54_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "img", 111);
    \u0275\u0275elementStart(2, "h2", 112);
    \u0275\u0275text(3, "You don't have any meetings scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 113);
    \u0275\u0275text(5, "Once you create or join a meeting, it will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function MeetingsListComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingsListComponent_Conditional_54_Conditional_0_Template, 2, 1)(1, MeetingsListComponent_Conditional_54_Conditional_1_Template, 6, 0, "div", 70);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.filteredMeetings.length > 0 ? 0 : 1);
  }
}
function MeetingsListComponent_Conditional_55_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Deleting... ");
  }
}
function MeetingsListComponent_Conditional_55_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Delete ");
  }
}
function MeetingsListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 115)(2, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "circle", 118)(5, "path", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 120);
    \u0275\u0275text(7, "Delete Meeting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 121);
    \u0275\u0275text(9, " Are you sure you want to delete this meeting? This action cannot be undone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 122)(11, "button", 123);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_55_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 124);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_55_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete());
    });
    \u0275\u0275conditionalCreate(14, MeetingsListComponent_Conditional_55_Conditional_14_Template, 1, 0)(15, MeetingsListComponent_Conditional_55_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r2.isDeleting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isDeleting);
    \u0275\u0275attribute("aria-busy", ctx_r2.isDeleting);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isDeleting ? 14 : 15);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 137);
    \u0275\u0275element(1, "path", 158);
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_56_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 137);
    \u0275\u0275element(1, "path", 159);
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_56_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 160);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "circle", 161)(4, "circle", 103)(5, "circle", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "mat-menu", 105, 3)(8, "button", 84);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editFromDrawer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 106);
    \u0275\u0275element(10, "path", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Edit Meeting ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 109);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Conditional_17_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.requestDelete(ctx_r2.selectedMeeting().id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 106);
    \u0275\u0275element(14, "path", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Delete Meeting ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const drawerMenu_r17 = \u0275\u0275reference(7);
    \u0275\u0275property("matMenuTriggerFor", drawerMenu_r17);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "common.moreOptions"));
  }
}
function MeetingsListComponent_Conditional_56_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 165);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Conditional_32_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedMeeting().meetingLink);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 3, "meetings.copyMeetingLink"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.linkCopied ? "Copied!" : "Copy", " ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Loading... ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " All members already added ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select a member ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 168);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    \u0275\u0275property("value", m_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r20.name);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adding... ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "select", 166);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Conditional_56_Conditional_62_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedNewMemberId, $event) || (ctx_r2.selectedNewMemberId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 167);
    \u0275\u0275conditionalCreate(4, MeetingsListComponent_Conditional_56_Conditional_62_Conditional_4_Template, 1, 0)(5, MeetingsListComponent_Conditional_56_Conditional_62_Conditional_5_Template, 1, 0)(6, MeetingsListComponent_Conditional_56_Conditional_62_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, MeetingsListComponent_Conditional_56_Conditional_62_For_8_Template, 2, 2, "option", 168, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 169)(10, "button", 170);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Conditional_62_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmAddMember());
    });
    \u0275\u0275conditionalCreate(12, MeetingsListComponent_Conditional_56_Conditional_62_Conditional_12_Template, 1, 0)(13, MeetingsListComponent_Conditional_56_Conditional_62_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 171);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Conditional_62_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelAddMember());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedNewMemberId);
    \u0275\u0275property("disabled", ctx_r2.membersLoading || ctx_r2.isAddingMember);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "meetings.participantSearch"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.membersLoading ? 4 : ctx_r2.availableMembers.length === 0 ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.availableMembers);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.selectedNewMemberId || ctx_r2.isAddingMember);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 9, "meetings.confirmAddMember"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAddingMember ? 12 : 13);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 174);
  }
  if (rf & 2) {
    const member_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", member_r21.avatar, \u0275\u0275sanitizeUrl)("alt", member_r21.name);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(member_r21.name), " ");
  }
}
function MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r21.designation || member_r21.role);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_63_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 172)(1, "div", 173);
    \u0275\u0275conditionalCreate(2, MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_2_Template, 1, 2, "img", 174)(3, MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_3_Template, 2, 1, "span", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 176)(5, "span", 177);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MeetingsListComponent_Conditional_56_Conditional_63_For_2_Conditional_7_Template, 2, 1, "span", 178);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getAvatarClass(member_r21.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r21.avatar ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r21.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r21.designation || member_r21.role ? 7 : -1);
  }
}
function MeetingsListComponent_Conditional_56_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 154);
    \u0275\u0275repeaterCreate(1, MeetingsListComponent_Conditional_56_Conditional_63_For_2_Template, 8, 5, "li", 172, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedMeeting().participants ?? \u0275\u0275pureFunction0(0, _c1));
  }
}
function MeetingsListComponent_Conditional_56_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 155);
    \u0275\u0275text(1, "No participants listed.");
    \u0275\u0275elementEnd();
  }
}
function MeetingsListComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 126)(2, "div", 127)(3, "div", 128)(4, "div", 129);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 130);
    \u0275\u0275element(6, "path", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 132)(8, "h2", 133);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 134);
    \u0275\u0275element(11, "span", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 135)(14, "button", 136);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDrawerFullscreen());
    });
    \u0275\u0275conditionalCreate(15, MeetingsListComponent_Conditional_56_Conditional_15_Template, 2, 0, ":svg:svg", 137)(16, MeetingsListComponent_Conditional_56_Conditional_16_Template, 2, 0, ":svg:svg", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, MeetingsListComponent_Conditional_56_Conditional_17_Template, 16, 4);
    \u0275\u0275elementStart(18, "button", 138);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 66);
    \u0275\u0275element(21, "path", 139);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 140)(23, "section", 141)(24, "h3", 142);
    \u0275\u0275text(25, "Meeting Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 143);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 144)(29, "span", 145);
    \u0275\u0275text(30, "Meeting Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 146);
    \u0275\u0275conditionalCreate(32, MeetingsListComponent_Conditional_56_Conditional_32_Template, 5, 5)(33, MeetingsListComponent_Conditional_56_Conditional_33_Template, 2, 0, "span", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 144)(35, "span", 145);
    \u0275\u0275text(36, "Meeting info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 146)(38, "span", 148);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 144)(41, "span", 145);
    \u0275\u0275text(42, "Starting at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 146)(44, "span", 148);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 144)(47, "span", 145);
    \u0275\u0275text(48, "Ending at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 146)(50, "span", 148);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "section", 141)(53, "h3", 142);
    \u0275\u0275text(54, " Members ");
    \u0275\u0275elementStart(55, "span", 149);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 150);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMemberPicker());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 45);
    \u0275\u0275element(60, "circle", 151)(61, "path", 152);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(62, MeetingsListComponent_Conditional_56_Conditional_62_Template, 16, 11, "div", 153);
    \u0275\u0275conditionalCreate(63, MeetingsListComponent_Conditional_56_Conditional_63_Template, 3, 1, "ul", 154)(64, MeetingsListComponent_Conditional_56_Conditional_64_Template, 2, 0, "p", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 156)(66, "button", 157);
    \u0275\u0275listener("click", function MeetingsListComponent_Conditional_56_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275text(67, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("meeting-drawer--wide", ctx_r2.drawerFullscreen());
    \u0275\u0275attribute("aria-label", "Details for " + ctx_r2.selectedMeeting().title);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.selectedMeeting().title);
    \u0275\u0275advance();
    \u0275\u0275classProp("pill-scheduled", (ctx_r2.selectedMeeting().status || "Scheduled") === "Scheduled")("pill-completed", ctx_r2.selectedMeeting().status === "Completed")("pill-cancelled", ctx_r2.selectedMeeting().status === "Cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedMeeting().status || "Scheduled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r2.drawerFullscreen() ? "Collapse drawer" : "Expand drawer");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.drawerFullscreen() ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 24, "common.closeDetailsPanel"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(ctx_r2.selectedMeeting().startTime));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.selectedMeeting().meetingLink ? 32 : 33);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedMeeting().meetingDescription || ctx_r2.selectedMeeting().description || "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(ctx_r2.selectedMeeting().startTime));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(ctx_r2.selectedMeeting().endTime));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_18_0 = ctx_r2.selectedMeeting().participants) == null ? null : tmp_18_0.length) ?? 0, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(58, 26, "meetings.addParticipant"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.showMemberPicker ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.selectedMeeting().participants ?? \u0275\u0275pureFunction0(28, _c1)).length > 0 ? 63 : 64);
  }
}
var _MeetingsListComponent = class _MeetingsListComponent {
  constructor() {
    this.meetings = [];
    this.filteredMeetings = [];
    this.searchQuery = "";
    this.statusFilter = "All";
    this.repeatFilter = "All";
    this.selectedMeeting = signal(null, ...ngDevMode ? [{ debugName: "selectedMeeting" }] : []);
    this.drawerFullscreen = signal(false, ...ngDevMode ? [{ debugName: "drawerFullscreen" }] : []);
    this.showFilters = signal(false, ...ngDevMode ? [{ debugName: "showFilters" }] : []);
    this.isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
    this.viewMode = "cards";
    this.pendingDeleteId = null;
    this.isDeleting = false;
    this.showMemberPicker = false;
    this.allMembers = [];
    this.membersLoading = false;
    this.selectedNewMemberId = "";
    this.isAddingMember = false;
    this.linkCopied = false;
    this.meetingService = inject(MeetingsService);
    this.teamsService = inject(TeamsService);
    this.dialog = inject(MatDialog);
    this.cdr = inject(ChangeDetectorRef);
    this.tokenService = inject(TokenService);
    this.isEmployee = this.tokenService.getUserRole() === UserRole.Employee;
    this.onFsChange = () => {
      this.isFullscreen.set(!!document.fullscreenElement);
      this.cdr.markForCheck();
    };
  }
  setView(mode) {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  refresh() {
    this.loadMeetings();
  }
  onDocumentClick(event) {
    if (this.showFilters() && this.filterWrapRef && !this.filterWrapRef.nativeElement.contains(event.target)) {
      this.showFilters.set(false);
    }
  }
  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit() {
    this.loadMeetings();
    document.addEventListener("fullscreenchange", this.onFsChange);
  }
  ngOnDestroy() {
    document.removeEventListener("fullscreenchange", this.onFsChange);
  }
  // ── Data loading ─────────────────────────────────────────────
  loadMeetings() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.meetingService.getMeetings().subscribe({
      next: (data) => {
        this.meetings = data;
        this.applyFilters();
        this.isLoading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadError.set("Failed to load meetings. Please try again.");
        this.isLoading.set(false);
        this.cdr.markForCheck();
      }
    });
  }
  // ── Filtering ─────────────────────────────────────────────────
  applyFilters() {
    const q = this.searchQuery.toLowerCase();
    this.filteredMeetings = this.meetings.filter((m) => {
      const matchTitle = (m.title ?? "").toLowerCase().includes(q);
      const matchMember = m.participants?.some((p) => (p.name ?? "").toLowerCase().includes(q)) ?? false;
      const matchStatus = this.statusFilter === "All" || (m.status ?? "").toLowerCase() === this.statusFilter.toLowerCase();
      const matchRepeat = this.repeatFilter === "All" || (m.repeatType ?? "").toLowerCase() === this.repeatFilter.toLowerCase();
      return (matchTitle || matchMember) && matchStatus && matchRepeat;
    });
  }
  onSearchChange() {
    this.applyFilters();
    this.cdr.markForCheck();
  }
  onStatusFilterChange() {
    this.applyFilters();
    this.cdr.markForCheck();
  }
  onRepeatFilterChange() {
    this.applyFilters();
    this.cdr.markForCheck();
  }
  hasActiveFilters() {
    return this.statusFilter !== "All" || this.repeatFilter !== "All";
  }
  clearFilters() {
    this.statusFilter = "All";
    this.repeatFilter = "All";
    this.applyFilters();
    this.cdr.markForCheck();
  }
  toggleFilters() {
    this.showFilters.update((v) => !v);
  }
  // ── Fullscreen ────────────────────────────────────────────────
  toggleFullscreen() {
    const el = document.querySelector(".meetings-page");
    if (!document.fullscreenElement) {
      el?.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  }
  // ── Create / Edit ─────────────────────────────────────────────
  addNewMeeting() {
    if (this.isEmployee)
      return;
    const ref = this.dialog.open(CreateMeetingDialogeComponent, {
      width: "600px",
      panelClass: "custom-dialog-container"
    });
    ref.afterClosed().subscribe((result) => {
      if (result === true)
        this.loadMeetings();
    });
  }
  openEditMeeting(meeting) {
    if (this.isEmployee)
      return;
    const ref = this.dialog.open(CreateMeetingDialogeComponent, {
      width: "600px",
      panelClass: "custom-dialog-container",
      data: { meeting }
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved?.success && saved.updated) {
        const idx = this.meetings.findIndex((m) => m.id === saved.updated.id);
        if (idx !== -1) {
          this.meetings[idx] = __spreadProps(__spreadValues({}, this.meetings[idx]), {
            title: saved.updated.title,
            meetingLink: saved.updated.meetingLink,
            meetingDescription: saved.updated.description,
            description: saved.updated.description,
            startTime: saved.updated.startTime,
            endTime: saved.updated.endTime,
            repeatId: saved.updated.repeatId,
            repeatType: REPEAT_ID_TO_TYPE[saved.updated.repeatId] ?? "None",
            participants: saved.participants ?? this.meetings[idx].participants
          });
          this.meetings = [...this.meetings];
        }
        if (this.selectedMeeting()?.id === saved.updated.id) {
          this.selectedMeeting.set(this.meetings.find((m) => m.id === saved.updated.id) ?? null);
        }
        this.applyFilters();
        this.cdr.markForCheck();
      } else if (saved === true) {
        this.loadMeetings();
      }
    });
  }
  // ── Drawer ────────────────────────────────────────────────────
  showMeetingDetails(meeting) {
    this.selectedMeeting.set(meeting);
    this.showMemberPicker = false;
    this.linkCopied = false;
    this.drawerFullscreen.set(false);
  }
  closeDrawer() {
    this.selectedMeeting.set(null);
    this.showMemberPicker = false;
    this.drawerFullscreen.set(false);
  }
  toggleDrawerFullscreen() {
    this.drawerFullscreen.update((v) => !v);
  }
  editFromDrawer() {
    const m = this.selectedMeeting();
    if (!m)
      return;
    this.closeDrawer();
    this.openEditMeeting(m);
  }
  // ── Delete ────────────────────────────────────────────────────
  requestDelete(id) {
    if (this.isEmployee)
      return;
    this.pendingDeleteId = id;
  }
  cancelDelete() {
    this.pendingDeleteId = null;
  }
  confirmDelete() {
    if (this.pendingDeleteId === null || this.isDeleting)
      return;
    const id = this.pendingDeleteId;
    this.isDeleting = true;
    this.meetingService.deleteMeeting(id).subscribe({
      next: () => {
        this.meetings = this.meetings.filter((m) => m.id !== id);
        this.applyFilters();
        if (this.selectedMeeting()?.id === id)
          this.closeDrawer();
        this.pendingDeleteId = null;
        this.isDeleting = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingDeleteId = null;
        this.isDeleting = false;
        this.cdr.markForCheck();
      }
    });
  }
  // ── Copy link ─────────────────────────────────────────────────
  copyLink() {
    const link = this.selectedMeeting()?.meetingLink;
    if (!link)
      return;
    const done = () => {
      this.linkCopied = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.linkCopied = false;
        this.cdr.markForCheck();
      }, 2e3);
    };
    navigator.clipboard.writeText(link).then(done).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    });
  }
  // ── Drawer: add member ────────────────────────────────────────
  toggleMemberPicker() {
    this.showMemberPicker = !this.showMemberPicker;
    if (this.showMemberPicker && this.allMembers.length === 0) {
      this.membersLoading = true;
      this.teamsService.getAllTeamMembers().subscribe({
        next: (m) => {
          this.allMembers = m || [];
          this.membersLoading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.allMembers = [];
          this.membersLoading = false;
          this.cdr.markForCheck();
        }
      });
    }
  }
  get availableMembers() {
    const existing = (this.selectedMeeting()?.participants ?? []).map((p) => String(p.id));
    return this.allMembers.filter((m) => !existing.includes(String(m.id)));
  }
  confirmAddMember() {
    const meeting = this.selectedMeeting();
    if (!this.selectedNewMemberId || !meeting)
      return;
    const member = this.allMembers.find((m) => String(m.id) === String(this.selectedNewMemberId));
    if (!member)
      return;
    this.isAddingMember = true;
    const updatedParticipants = [...meeting.participants ?? [], member];
    const dateStr = meeting.startTime?.includes("T") ? meeting.startTime.substring(0, 10) : (meeting.meetingDate ?? "").substring(0, 10);
    const toIso = (t) => t && !t.includes("T") && dateStr ? `${dateStr}T${t}:00` : t;
    const repeatId = meeting.repeatId ?? REPEAT_TYPE_TO_ID[meeting.repeatType ?? "None"] ?? 0;
    const payload = {
      id: meeting.id,
      title: meeting.title,
      meetingLink: meeting.meetingLink,
      description: meeting.description ?? meeting.meetingDescription ?? "",
      startTime: toIso(meeting.startTime),
      endTime: toIso(meeting.endTime),
      repeatId,
      meetingUserIds: updatedParticipants.map((p) => p.id)
    };
    this.meetingService.updateMeeting(payload).subscribe({
      next: () => {
        meeting.participants = updatedParticipants;
        meeting.meetingUsers = updatedParticipants;
        meeting.meetingUserIds = updatedParticipants.map((p) => p.id);
        this.selectedNewMemberId = "";
        this.showMemberPicker = false;
        this.isAddingMember = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isAddingMember = false;
        this.cdr.markForCheck();
      }
    });
  }
  cancelAddMember() {
    this.showMemberPicker = false;
    this.selectedNewMemberId = "";
  }
  // ── Helpers ───────────────────────────────────────────────────
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(/\s+/);
    return parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].substring(0, 2).toUpperCase();
  }
  getAvatarClass(name) {
    const classes = [
      "av-1",
      "av-2",
      "av-3",
      "av-4",
      "av-5",
      "av-6"
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return classes[Math.abs(hash) % classes.length];
  }
  formatTime(val) {
    if (!val)
      return "\u2014";
    try {
      const d = new Date(val);
      if (isNaN(d.getTime()))
        return val.substring(0, 5);
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return val;
    }
  }
  formatDateTime(val) {
    if (!val)
      return "\u2014";
    try {
      const d = new Date(val);
      if (isNaN(d.getTime()))
        return val;
      return d.toLocaleDateString([], { year: "numeric", month: "short", day: "numeric" }) + "  " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return val;
    }
  }
  getParticipantNames(meeting) {
    const list = meeting.participants ?? meeting.meetingUsers ?? [];
    return list.map((p) => p.name).filter(Boolean).join(", ");
  }
};
_MeetingsListComponent.\u0275fac = function MeetingsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MeetingsListComponent)();
};
_MeetingsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingsListComponent, selectors: [["app-meetings-list"]], viewQuery: function MeetingsListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterWrapRef = _t.first);
  }
}, hostBindings: function MeetingsListComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function MeetingsListComponent_click_HostBindingHandler($event) {
      return ctx.onDocumentClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, decls: 57, vars: 43, consts: [["filterWrap", ""], ["rowMtgMenu", "matMenu"], ["cardMenu", "matMenu"], ["drawerMenu", "matMenu"], [1, "meetings-page"], [1, "breadcrumb"], [1, "bc-item"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "bc-chevron"], ["d", "M5.5 3.5L10.5 8L5.5 12.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bc-item", "bc-active"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-title"], [1, "count-badge"], [1, "btn-create"], [1, "meetings-toolbar"], [1, "toolbar-left"], [1, "search-field"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true", 1, "search-icon"], ["d", "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91\n                   13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16\n                   12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14Z\n                   M9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01\n                   14 9.5C14 11.99 11.99 14 9.5 14Z", "fill", "currentColor"], ["type", "text", "placeholder", "Search meetings...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-wrap"], ["aria-controls", "filter-panel", 1, "btn-filter", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "aria-hidden", "true"], ["d", "M2.25 4.5H15.75M4.5 9H13.5M6.75 13.5H11.25", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["cx", "6", "cy", "4.5", "r", "1.5", "fill", "currentColor"], ["cx", "12", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "9", "cy", "13.5", "r", "1.5", "fill", "currentColor"], ["aria-hidden", "true", 1, "filter-active-dot"], ["id", "filter-panel", "role", "group", 1, "filter-popover"], [1, "toolbar-right"], ["title", "Refresh", 1, "btn-filter", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z", "fill", "currentColor"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "btn-expand", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 22 22", "fill", "none", "aria-hidden", "true"], ["aria-live", "polite", 1, "loading-state"], ["role", "alert", 1, "error-state"], [1, "btn-create", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M8 1.5A6.5 6.5 0 1 0 8 14.5A6.5 6.5 0 0 0 8 1.5ZM8.75 8.75H5.25\n                   V7.25H7.25V5.25H8.75V7.25H10.75V8.75H8.75Z", "fill", "currentColor"], [1, "popover-row"], [1, "filter-group"], ["for", "statusFilter", 1, "filter-label"], ["id", "statusFilter", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "Scheduled"], ["value", "Cancelled"], ["value", "Completed"], ["for", "repeatFilter", 1, "filter-label"], ["id", "repeatFilter", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "Daily"], ["value", "Weekly"], ["value", "Monthly"], ["value", "None"], [1, "popover-footer"], [1, "btn-clear-filters", 3, "click"], ["d", "M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667\n                     M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25\n                     M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "status", 1, "spinner"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], ["cx", "10", "cy", "10", "r", "9", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M10 6v4M10 14h.01", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "btn-retry", 3, "click"], [1, "empty-state"], [1, "attendance-table-container"], [1, "meetings-list"], [1, "full-width-table", 2, "width", "100%", "border-collapse", "separate", "border-spacing", "0 8px"], [2, "text-align", "start", "padding", "12px 16px", "font-size", "12px", "font-weight", "600", "color", "var(--ui-text-muted)", "text-transform", "uppercase"], [2, "text-align", "end", "padding", "12px 16px", "font-size", "12px", "font-weight", "600", "color", "var(--ui-text-muted)", "text-transform", "uppercase"], [2, "background", "var(--ui-surface)"], [2, "padding", "14px 16px", "cursor", "pointer", 3, "click"], [2, "padding", "14px 16px"], [2, "padding", "14px 16px", "text-align", "end"], [1, "actions-menu-btn", 3, "matMenuTriggerFor"], ["cx", "12", "cy", "5", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "19", "r", "2", "fill", "currentColor"], ["mat-menu-item", "", 3, "click"], [1, "meeting-card"], ["aria-hidden", "true", 1, "card-icon-wrap"], ["src", "assets/images/GoogleMeet.png", "alt", "", 1, "card-icon-img"], [1, "card-info"], [1, "card-title"], [1, "card-with"], [1, "card-time"], ["width", "14", "height", "14", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["x", "2", "y", "3", "width", "12", "height", "11", "rx", "1.5", "stroke", "currentColor", "stroke-width", "1.3"], ["d", "M5 1.5V4M11 1.5V4M2 7H14", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "aria-hidden", "true"], ["d", "M2 6H10M7 3L10 6L7 9", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-actions"], [1, "status-pill"], ["aria-hidden", "true", 1, "pill-dot"], [1, "btn-open", 3, "click"], [1, "btn-card-menu", 3, "matMenuTriggerFor"], ["cx", "4.5", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "9", "cy", "9", "r", "1.5", "fill", "currentColor"], ["cx", "13.5", "cy", "9", "r", "1.5", "fill", "currentColor"], [1, "meetings-dropdown-menu"], ["width", "15", "height", "15", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["d", "M8 3C4.36 3 1.258 5.232.25 8.5 1.258 11.768 4.36 14 8 14\n                             s6.742-2.232 7.75-5.5C14.742 5.232 11.64 3 8 3Zm0 9.167\n                             A3.667 3.667 0 1 1 8 4.833a3.667 3.667 0 0 1 0 7.334Z\n                             M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z", "fill", "currentColor"], ["d", "M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15\n                               l1-3.667L11.333 2Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["mat-menu-item", "", 1, "menu-item-danger", 3, "click"], ["d", "M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4\n                               M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["src", "assets/images/NoMeetings.png", "alt", "No meetings", 1, "empty-img"], [1, "empty-title"], [1, "empty-sub"], ["role", "presentation", "aria-hidden", "true", 1, "confirm-overlay", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "confirm-title", "aria-describedby", "confirm-desc", 1, "confirm-dialog"], ["aria-hidden", "true", 1, "confirm-icon"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none"], ["cx", "16", "cy", "16", "r", "14", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M16 9v8M16 21.5h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["id", "confirm-title", 1, "confirm-title"], ["id", "confirm-desc", 1, "confirm-text"], [1, "confirm-actions"], [1, "btn-confirm-cancel", 3, "click", "disabled"], [1, "btn-confirm-delete", 3, "click", "disabled"], ["role", "presentation", "aria-hidden", "true", 1, "drawer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "meeting-drawer"], [1, "drawer-header"], [1, "drawer-header-left"], ["aria-hidden", "true", 1, "drawer-icon-box"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M15 10l4.553-2.277A1 1 0 0 1 21 8.723v6.554a1 1 0 0\n                     1-1.447.9L15 14M3 8h12a2 2 0 0 1 2 2v4a2 2 0 0\n                     1-2 2H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "drawer-header-meta"], [1, "drawer-name"], [1, "status-pill", "status-pill--sm"], [1, "drawer-header-actions"], [1, "drawer-action-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 22 22", "fill", "none", "aria-hidden", "true"], ["type", "button", 1, "drawer-close", 3, "click"], ["d", "M15 5L5 15M5 5L15 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "drawer-body"], [1, "drawer-section"], [1, "drawer-section-title"], [1, "drawer-section-date"], [1, "drawer-row"], [1, "drawer-row-label"], [1, "drawer-row-value"], [1, "drawer-row-empty"], [1, "drawer-row-text"], [1, "drawer-count-badge"], ["type", "button", 1, "btn-add-member", 3, "click"], ["cx", "8", "cy", "8", "r", "7", "stroke", "currentColor", "stroke-width", "1.3"], ["d", "M8 5v6M5 8h6", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round"], [1, "member-picker"], [1, "drawer-member-list"], [1, "drawer-empty-text"], [1, "drawer-footer"], ["type", "button", 1, "drawer-btn-close", 3, "click"], ["d", "M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667\n                       M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25\n                       M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "drawer-action-btn", 3, "matMenuTriggerFor"], ["cx", "9", "cy", "4.5", "r", "1.5", "fill", "currentColor"], ["d", "M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15\n                         l1-3.667L11.333 2Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4\n                         M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z", "stroke", "currentColor", "stroke-width", "1.3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "drawer-row-text", "link-text"], [1, "btn-copy", 3, "click"], [1, "member-picker-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", "disabled", "", "selected", "", "hidden", ""], [3, "value"], [1, "picker-actions"], [1, "btn-picker-confirm", 3, "click", "disabled"], [1, "btn-picker-cancel", 3, "click"], [1, "drawer-member-item"], [1, "drawer-member-avatar"], [1, "drawer-member-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "drawer-member-initials"], [1, "drawer-member-info"], [1, "drawer-member-name"], [1, "drawer-member-role"]], template: function MeetingsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "nav", 5);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "Mtwork");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "Meetings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "h1", 12);
    \u0275\u0275text(12, "All Meetings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, MeetingsListComponent_Conditional_15_Template, 5, 3, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 18);
    \u0275\u0275element(20, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "input", 20);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MeetingsListComponent_Template_input_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21, 0)(25, "button", 22);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 23);
    \u0275\u0275element(28, "path", 24)(29, "circle", 25)(30, "circle", 26)(31, "circle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, MeetingsListComponent_Conditional_32_Template, 1, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, MeetingsListComponent_Conditional_33_Template, 32, 12, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 30)(35, "button", 31);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.refresh());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 32);
    \u0275\u0275element(38, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 34);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementStart(41, "button", 35);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView("table"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 36);
    \u0275\u0275element(44, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "button", 38);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setView("cards"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 36);
    \u0275\u0275element(48, "path", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "button", 40);
    \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFullscreen());
    });
    \u0275\u0275conditionalCreate(50, MeetingsListComponent_Conditional_50_Template, 2, 0, ":svg:svg", 41)(51, MeetingsListComponent_Conditional_51_Template, 2, 0, ":svg:svg", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(52, MeetingsListComponent_Conditional_52_Template, 5, 3, "div", 42);
    \u0275\u0275conditionalCreate(53, MeetingsListComponent_Conditional_53_Template, 8, 1, "div", 43);
    \u0275\u0275conditionalCreate(54, MeetingsListComponent_Conditional_54_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, MeetingsListComponent_Conditional_55_Template, 16, 4);
    \u0275\u0275conditionalCreate(56, MeetingsListComponent_Conditional_56_Template, 68, 29);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 29, "common.breadcrumb"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.filteredMeetings.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isEmployee ? 15 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 31, "meetings.searchMeetings"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-filter--active", ctx.showFilters() || ctx.hasActiveFilters());
    \u0275\u0275attribute("aria-expanded", ctx.showFilters())("aria-label", \u0275\u0275pipeBind1(26, 33, "common.toggleFilters"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.hasActiveFilters() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showFilters() ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 35, "common.refresh"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(40, 37, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 39, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(46, 41, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-expand--active", ctx.isFullscreen());
    \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Enter fullscreen")("aria-pressed", ctx.isFullscreen());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isFullscreen() ? 50 : 51);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoading() ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadError() && !ctx.isLoading() ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading() && !ctx.loadError() ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.pendingDeleteId !== null ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selectedMeeting() ? 56 : -1);
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
  MatDialogModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  TranslocoModule,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n.meetings-page[_ngcontent-%COMP%] {\n  padding: 24px 24px 48px;\n  background: var(--ui-bg);\n  min-height: 100%;\n  font-family: var(--font-family-dm-sans);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-bottom: 24px;\n}\n.bc-item[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n}\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-800);\n}\n.bc-chevron[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-500);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  border-radius: 12px;\n  line-height: 1;\n}\n.btn-create[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 8px 12px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: 1px solid var(--brand-primary-700);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: var(--shadow-flat-button);\n  transition: background 0.2s ease;\n}\n.btn-create[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-700);\n}\n.btn-create[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.meetings-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--elevation-1);\n  gap: 12px;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 314px;\n  height: 42px;\n  padding: 6px 12px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--brand-neutral-400);\n}\n.btn-filter[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  flex-shrink: 0;\n}\n.btn-filter[_ngcontent-%COMP%]:hover {\n  color: var(--brand-grays-900);\n  border-color: var(--brand-neutral-300);\n  background: var(--ui-bg);\n}\n.btn-filter[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn-filter--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-800);\n  border-color: var(--brand-primary-400);\n  background: var(--brand-primary-50);\n}\n.btn-filter--active[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n}\n.filter-active-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  inset-inline-end: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--brand-primary-600);\n  border: 1.5px solid var(--ui-surface);\n}\n.filter-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.filter-popover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  inset-inline-start: calc(100% + 8px);\n  z-index: 200;\n  min-width: 300px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: var(--elevation-4);\n  padding: 16px;\n  animation: _ngcontent-%COMP%_popover-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_popover-in {\n  from {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.popover-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.popover-footer[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--ui-border);\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-expand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-12);\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.btn-expand[_ngcontent-%COMP%]:hover {\n  color: var(--brand-grays-900);\n  background: var(--ui-bg);\n}\n.btn-expand--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-800);\n  background: var(--brand-primary-100);\n}\n.btn-expand--active[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n}\n.btn-expand[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n  white-space: nowrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 10px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n  transition: border-color 0.15s;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.btn-clear-filters[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  padding: 0 14px;\n  height: 36px;\n  background: transparent;\n  border: 0.5px solid var(--functional-danger-300);\n  color: var(--functional-danger-500);\n  border-radius: var(--radius-8);\n  font-size: var(--caption-2-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-clear-filters[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-50);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 320px;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-2-size);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--brand-neutral-100);\n  border-top-color: var(--brand-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-12);\n  color: var(--functional-danger-700);\n  font-size: var(--caption-2-size);\n  margin-bottom: 16px;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  padding: 5px 14px;\n  background: var(--functional-danger-600);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-700);\n}\n.meetings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.meeting-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  box-shadow: var(--elevation-1);\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.meeting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--elevation-2);\n  transform: translateY(-1px);\n}\n.card-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-8);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-50);\n}\n.card-icon-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n.card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-with[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n}\n.card-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-open[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 16px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-open[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-700);\n}\n.btn-open[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  line-height: 1;\n  white-space: nowrap;\n}\n.status-pill--sm[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  padding: 3px 8px;\n}\n.pill-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pill-scheduled[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.pill-scheduled[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n}\n.pill-completed[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.pill-completed[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.pill-cancelled[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.pill-cancelled[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: var(--functional-danger-500);\n}\n.btn-card-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-card-menu[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.btn-card-menu[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n  .meetings-dropdown-menu .mat-mdc-menu-panel {\n  border-radius: var(--radius-12) !important;\n  box-shadow: var(--elevation-4) !important;\n  min-width: 168px !important;\n  padding: 4px !important;\n}\n  .meetings-dropdown-menu .mat-mdc-menu-content {\n  padding: 4px !important;\n}\n  .meetings-dropdown-menu .mat-mdc-menu-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  font-family: var(--font-family-dm-sans) !important;\n  font-size: var(--caption-2-size) !important;\n  color: var(--brand-grays-900) !important;\n  padding: 9px 12px !important;\n  min-height: 40px !important;\n  border-radius: var(--radius-8) !important;\n  letter-spacing: 0 !important;\n}\n  .meetings-dropdown-menu .mat-mdc-menu-item .mat-icon, \n  .meetings-dropdown-menu .mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: inherit !important;\n}\n  .meetings-dropdown-menu .mat-mdc-menu-item:hover {\n  background: var(--ui-bg) !important;\n}\n  .meetings-dropdown-menu .menu-item-danger, \n  .meetings-dropdown-menu .menu-item-danger .mdc-list-item__primary-text {\n  color: var(--functional-danger-500) !important;\n}\n  .meetings-dropdown-menu .menu-item-danger:hover {\n  background: var(--functional-danger-50) !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 500px;\n  text-align: center;\n}\n.empty-img[_ngcontent-%COMP%] {\n  width: 260px;\n  height: auto;\n  object-fit: contain;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  margin: 0;\n  max-width: 380px;\n  line-height: 1.5;\n}\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 50%, transparent);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_overlay-fade-in 0.15s ease forwards;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1001;\n  width: 400px;\n  max-width: 92vw;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 32px 28px 24px;\n  box-shadow: var(--elevation-6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n}\n.confirm-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-500);\n  margin: 0;\n  line-height: 1.6;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n  width: 100%;\n  justify-content: center;\n}\n.btn-confirm-cancel[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-confirm-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-neutral-100);\n}\n.btn-confirm-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-confirm-delete[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--functional-danger-600);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-confirm-delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--functional-danger-700);\n}\n.btn-confirm-delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_overlay-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 45%, transparent);\n  z-index: 900;\n  animation: _ngcontent-%COMP%_overlay-fade-in 0.2s ease forwards;\n}\n.meeting-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block: 0;\n  inset-inline-end: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--ui-surface);\n  box-shadow: var(--elevation-6);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_drawer-slide-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n  transition: width 0.25s ease;\n}\n.meeting-drawer--wide[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 100vw;\n}\n@keyframes _ngcontent-%COMP%_drawer-slide-in {\n  from {\n    transform: translateX(100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .meeting-drawer[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_drawer-slide-in-rtl 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n@keyframes _ngcontent-%COMP%_drawer-slide-in-rtl {\n  from {\n    transform: translateX(-100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n  gap: 12px;\n  flex-shrink: 0;\n}\n.drawer-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n  flex: 1;\n}\n.drawer-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-800);\n  flex-shrink: 0;\n}\n.drawer-header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.drawer-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.drawer-action-btn[_ngcontent-%COMP%], \n.drawer-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.drawer-action-btn[_ngcontent-%COMP%]:hover, \n.drawer-close[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.drawer-action-btn[_ngcontent-%COMP%]:focus-visible, \n.drawer-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--brand-neutral-100);\n  border-radius: 3px;\n}\n.drawer-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--brand-neutral-300);\n}\n.drawer-section[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.drawer-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.drawer-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.drawer-section-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  margin-bottom: 20px;\n}\n.drawer-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--brand-neutral-50);\n}\n.drawer-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.drawer-row-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  font-weight: 400;\n}\n.drawer-row-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.drawer-row-text[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  flex: 1;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.link-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 220px;\n}\n.drawer-row-empty[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n}\n.btn-copy[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  height: 28px;\n  background: var(--brand-neutral-50);\n  border: none;\n  border-radius: var(--radius-6);\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n.btn-copy[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: var(--brand-primary-100);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.btn-add-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-6);\n  transition: background 0.15s, color 0.15s;\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.btn-add-member[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n  color: var(--brand-primary-700);\n}\n.member-picker[_ngcontent-%COMP%] {\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  padding: 12px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.member-picker-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-6);\n  background: var(--ui-surface);\n  color: var(--brand-grays-900);\n  font-size: var(--caption-2-size);\n  font-family: var(--font-family-dm-sans);\n  outline: none;\n  cursor: pointer;\n}\n.member-picker-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.picker-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.btn-picker-confirm[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: var(--radius-6);\n  border: none;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  font-size: var(--caption-size);\n  font-weight: 500;\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n}\n.btn-picker-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.btn-picker-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-picker-cancel[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: var(--radius-6);\n  border: 1px solid var(--ui-border);\n  background: transparent;\n  color: var(--brand-neutral-600);\n  font-size: var(--caption-size);\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n}\n.btn-picker-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg);\n}\n.drawer-member-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer-member-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg);\n}\n.drawer-member-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.av-1[_ngcontent-%COMP%] {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-800);\n}\n.av-2[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.av-3[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-800);\n}\n.av-4[_ngcontent-%COMP%] {\n  background: var(--functional-danger-100);\n  color: var(--functional-danger-700);\n}\n.av-5[_ngcontent-%COMP%] {\n  background: var(--brand-secondary-100);\n  color: var(--brand-secondary-800);\n}\n.av-6[_ngcontent-%COMP%] {\n  background: var(--brand-tertiary-100);\n  color: var(--brand-tertiary-800);\n}\n.drawer-member-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.drawer-member-initials[_ngcontent-%COMP%] {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 13px;\n  font-weight: 700;\n}\n.drawer-member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-member-name[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-member-role[_ngcontent-%COMP%] {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n}\n.drawer-empty-text[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  text-align: center;\n  padding: 24px 0;\n  margin: 0;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.drawer-btn-close[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.drawer-btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-btn-close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .meetings-page[_ngcontent-%COMP%] {\n    padding: 16px 16px 48px;\n  }\n  .meetings-toolbar[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .toolbar-left[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 220px;\n  }\n  .meeting-card[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .card-icon-wrap[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .status-pill[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .filter-popover[_ngcontent-%COMP%] {\n    min-width: calc(100vw - 32px);\n    inset-inline-start: auto;\n    inset-inline-end: 0;\n  }\n}\n@media (max-width: 480px) {\n  .search-field[_ngcontent-%COMP%] {\n    max-width: none;\n    flex: 1;\n  }\n  .toolbar-left[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .btn-open[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=meetings-list.css.map */"] });
var MeetingsListComponent = _MeetingsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsListComponent, [{
    type: Component,
    args: [{ selector: "app-meetings-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatMenuModule,
      TranslocoModule
    ], template: `<div class="meetings-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="bc-item">Mtwork</span>
    <svg class="bc-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="bc-item bc-active">Meetings</span>
  </nav>

  <!-- \u2500\u2500 Page title row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="page-title-wrap">
      <h1 class="page-title">All Meetings</h1>
      <span class="count-badge">{{ filteredMeetings.length }}</span>
    </div>
    @if (!isEmployee) {
      <button class="btn-create" (click)="addNewMeeting()" [attr.aria-label]="'meetings.createMeeting' | transloco">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5A6.5 6.5 0 1 0 8 14.5A6.5 6.5 0 0 0 8 1.5ZM8.75 8.75H5.25
                   V7.25H7.25V5.25H8.75V7.25H10.75V8.75H8.75Z" fill="currentColor"/>
        </svg>
        New Meeting
      </button>
    }
  </div>

  <!-- \u2500\u2500 Toolbar: [search + filter popover] \u2500\u2500 [expand] \u2500\u2500 -->
  <div class="meetings-toolbar">

    <!-- Left: search + filter -->
    <div class="toolbar-left">

      <!-- Search -->
      <div class="search-field">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91
                   13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16
                   12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14Z
                   M9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01
                   14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
        </svg>
        <input
          type="text"
          class="search-input"
          [(ngModel)]="searchQuery"
          (ngModelChange)="onSearchChange()"
          placeholder="Search meetings..."
          [attr.aria-label]="'meetings.searchMeetings' | transloco"
        />
      </div>

      <!-- Filter button + absolute popover -->
      <div class="filter-wrap" #filterWrap>
        <button
          class="btn-filter"
          [class.btn-filter--active]="showFilters() || hasActiveFilters()"
          (click)="toggleFilters()"
          [attr.aria-expanded]="showFilters()"
          aria-controls="filter-panel"
          [attr.aria-label]="'common.toggleFilters' | transloco"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2.25 4.5H15.75M4.5 9H13.5M6.75 13.5H11.25"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="6"  cy="4.5"  r="1.5" fill="currentColor"/>
            <circle cx="12" cy="9"    r="1.5" fill="currentColor"/>
            <circle cx="9"  cy="13.5" r="1.5" fill="currentColor"/>
          </svg>
          @if (hasActiveFilters()) {
            <span class="filter-active-dot" aria-hidden="true"></span>
          }
        </button>

        <!-- Popover panel \u2014 absolute, does NOT affect layout flow -->
        @if (showFilters()) {
          <div class="filter-popover" id="filter-panel" role="group" [attr.aria-label]="'common.filters' | transloco">
            <div class="popover-row">
              <div class="filter-group">
                <label class="filter-label" for="statusFilter">Status</label>
                <select
                  id="statusFilter"
                  class="filter-select"
                  [(ngModel)]="statusFilter"
                  (ngModelChange)="onStatusFilterChange()"
                  [attr.aria-label]="'common.filterByStatus' | transloco"
                >
                  <option value="All">All Statuses</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div class="filter-group">
                <label class="filter-label" for="repeatFilter">Repeat</label>
                <select
                  id="repeatFilter"
                  class="filter-select"
                  [(ngModel)]="repeatFilter"
                  (ngModelChange)="onRepeatFilterChange()"
                  [attr.aria-label]="'meetings.filterByRepeat' | transloco"
                >
                  <option value="All">All Repeats</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>

            @if (hasActiveFilters()) {
              <div class="popover-footer">
                <button class="btn-clear-filters" (click)="clearFilters()" [attr.aria-label]="'common.clearFilters' | transloco">
                  Clear filters
                </button>
              </div>
            }
          </div>
        }
      </div><!-- /filter-wrap -->
    </div><!-- /toolbar-left -->

    <!-- Right: refresh + view toggle + fullscreen -->
    <div class="toolbar-right">
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

      <button
        class="btn-expand"
        [class.btn-expand--active]="isFullscreen()"
        (click)="toggleFullscreen()"
        [attr.aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Enter fullscreen'"
        [attr.aria-pressed]="isFullscreen()"
      >
        @if (isFullscreen()) {
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667
                     M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        } @else {
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25
                     M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }
      </button>
    </div><!-- /toolbar-right -->

  </div><!-- /meetings-toolbar -->

  <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isLoading()) {
    <div class="loading-state" aria-live="polite" [attr.aria-label]="'meetings.loadingMeetings' | transloco">
      <div class="spinner" role="status"></div>
      <span>Loading meetings...</span>
    </div>
  }

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (loadError() && !isLoading()) {
    <div class="error-state" role="alert">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
        <path d="M10 6v4M10 14h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span>{{ loadError() }}</span>
      <button class="btn-retry" (click)="loadMeetings()">Retry</button>
    </div>
  }

  <!-- \u2500\u2500 Meetings list \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!isLoading() && !loadError()) {
    @if (filteredMeetings.length > 0) {

      <!-- \u2500\u2500 Table view (alternate to the existing card list) \u2500\u2500 -->
      @if (viewMode === 'table') {
        <div class="attendance-table-container">
          <table class="full-width-table" style="width:100%; border-collapse:separate; border-spacing:0 8px;">
            <thead>
              <tr>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Title</th>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Date</th>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Time</th>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Status</th>
                <th style="text-align:start; padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Repeat</th>
                <th style="text-align:end;   padding:12px 16px; font-size:12px; font-weight:600; color:var(--ui-text-muted); text-transform:uppercase;">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (meeting of filteredMeetings; track meeting.id) {
                <tr style="background: var(--ui-surface);">
                  <td style="padding:14px 16px; cursor:pointer;" (click)="selectedMeeting.set(meeting)">
                    {{ meeting.title }}
                  </td>
                  <td style="padding:14px 16px;">{{ (meeting.meetingDate | date:'mediumDate') || '\u2014' }}</td>
                  <td style="padding:14px 16px;">{{ meeting.startTime || '\u2014' }}{{ meeting.endTime ? ' \u2013 ' + meeting.endTime : '' }}</td>
                  <td style="padding:14px 16px;">{{ meeting.status || '\u2014' }}</td>
                  <td style="padding:14px 16px;">{{ meeting.repeatType || '\u2014' }}</td>
                  <td style="padding:14px 16px; text-align:end;">
                    <button class="actions-menu-btn" [matMenuTriggerFor]="rowMtgMenu" [attr.aria-label]="'meetings.meetingOptions' | transloco">
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="5"  r="2" fill="currentColor"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                        <circle cx="12" cy="19" r="2" fill="currentColor"/>
                      </svg>
                    </button>
                    <mat-menu #rowMtgMenu="matMenu">
                      <button mat-menu-item (click)="selectedMeeting.set(meeting)">View Details</button>
                    </mat-menu>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
      <!-- \u2500\u2500 Card view (existing \u2014 preserved) \u2500\u2500 -->
      <div class="meetings-list">
        @for (meeting of filteredMeetings; track meeting.id) {
          <div class="meeting-card">

            <!-- Icon -->
            <div class="card-icon-wrap" aria-hidden="true">
              <img src="assets/images/GoogleMeet.png" alt="" class="card-icon-img" />
            </div>

            <!-- Info -->
            <div class="card-info">
              <div class="card-title">
                {{ meeting.title }}
                @if (getParticipantNames(meeting)) {
                  <span class="card-with"> with {{ getParticipantNames(meeting) }}</span>
                }
              </div>
              <div class="card-time">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="3" width="12" height="11" rx="1.5"
                        stroke="currentColor" stroke-width="1.3"/>
                  <path d="M5 1.5V4M11 1.5V4M2 7H14"
                        stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
                <span>{{ formatTime(meeting.startTime) }}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6H10M7 3L10 6L7 9"
                        stroke="currentColor" stroke-width="1.3"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ formatTime(meeting.endTime) }}</span>
              </div>
            </div>

            <!-- Status + Open + \u22EF menu -->
            <div class="card-actions">
              <span
                class="status-pill"
                [class.pill-scheduled]="(meeting.status || 'Scheduled') === 'Scheduled'"
                [class.pill-completed]="meeting.status === 'Completed'"
                [class.pill-cancelled]="meeting.status === 'Cancelled'"
              >
                <span class="pill-dot" aria-hidden="true"></span>
                {{ meeting.status || 'Scheduled' }}
              </span>

              <!-- Open button -->
              <button
                class="btn-open"
                (click)="showMeetingDetails(meeting)"
                [attr.aria-label]="'Open details for ' + meeting.title"
              >Open</button>

              <!-- \u22EF actions menu -->
              <button
                class="btn-card-menu"
                [matMenuTriggerFor]="cardMenu"
                [attr.aria-label]="'Options for ' + meeting.title"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="4.5" cy="9"   r="1.5" fill="currentColor"/>
                  <circle cx="9"   cy="9"   r="1.5" fill="currentColor"/>
                  <circle cx="13.5" cy="9"  r="1.5" fill="currentColor"/>
                </svg>
              </button>

              <mat-menu #cardMenu="matMenu" class="meetings-dropdown-menu">
                <button mat-menu-item (click)="showMeetingDetails(meeting)">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 3C4.36 3 1.258 5.232.25 8.5 1.258 11.768 4.36 14 8 14
                             s6.742-2.232 7.75-5.5C14.742 5.232 11.64 3 8 3Zm0 9.167
                             A3.667 3.667 0 1 1 8 4.833a3.667 3.667 0 0 1 0 7.334Z
                             M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                          fill="currentColor"/>
                  </svg>
                  View Details
                </button>
                @if (!isEmployee) {
                  <button mat-menu-item (click)="openEditMeeting(meeting)">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15
                               l1-3.667L11.333 2Z"
                            stroke="currentColor" stroke-width="1.3"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Edit
                  </button>
                  <button mat-menu-item class="menu-item-danger" (click)="requestDelete(meeting.id)">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4
                               M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z"
                            stroke="currentColor" stroke-width="1.3"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Delete
                  </button>
                }
              </mat-menu>
            </div>

          </div>
        }
      </div>
      }<!-- /@else (card view) -->

    } @else {
      <!-- Empty state -->
      <div class="empty-state">
        <img src="assets/images/NoMeetings.png" alt="No meetings" class="empty-img" />
        <h2 class="empty-title">You don't have any meetings scheduled</h2>
        <p class="empty-sub">Once you create or join a meeting, it will appear here.</p>
      </div>
    }
  }

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Delete Confirmation Dialog
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (pendingDeleteId !== null) {
  <div
    class="confirm-overlay"
    (click)="cancelDelete()"
    role="presentation"
    aria-hidden="true"
  ></div>

  <div
    class="confirm-dialog"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="confirm-title"
    aria-describedby="confirm-desc"
  >
    <div class="confirm-icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5"/>
        <path d="M16 9v8M16 21.5h.01"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <h3 id="confirm-title" class="confirm-title">Delete Meeting</h3>
    <p  id="confirm-desc"  class="confirm-text">
      Are you sure you want to delete this meeting? This action cannot be undone.
    </p>
    <div class="confirm-actions">
      <button
        class="btn-confirm-cancel"
        (click)="cancelDelete()"
        [disabled]="isDeleting"
      >Cancel</button>
      <button
        class="btn-confirm-delete"
        (click)="confirmDelete()"
        [disabled]="isDeleting"
        [attr.aria-busy]="isDeleting"
      >
        @if (isDeleting) { Deleting... } @else { Delete }
      </button>
    </div>
  </div>
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     Meeting Details Drawer  (inline <aside>, Teams pattern)
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (selectedMeeting()) {

  <!-- Backdrop -->
  <div
    class="drawer-overlay"
    (click)="closeDrawer()"
    role="presentation"
    aria-hidden="true"
  ></div>

  <!-- Drawer panel -->
  <aside
    class="meeting-drawer"
    [class.meeting-drawer--wide]="drawerFullscreen()"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="'Details for ' + selectedMeeting()!.title"
  >

    <!-- Header -->
    <div class="drawer-header">
      <div class="drawer-header-left">
        <div class="drawer-icon-box" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 10l4.553-2.277A1 1 0 0 1 21 8.723v6.554a1 1 0 0
                     1-1.447.9L15 14M3 8h12a2 2 0 0 1 2 2v4a2 2 0 0
                     1-2 2H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"
                  stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="drawer-header-meta">
          <h2 class="drawer-name">{{ selectedMeeting()!.title }}</h2>
          <span
            class="status-pill status-pill--sm"
            [class.pill-scheduled]="(selectedMeeting()!.status || 'Scheduled') === 'Scheduled'"
            [class.pill-completed]="selectedMeeting()!.status === 'Completed'"
            [class.pill-cancelled]="selectedMeeting()!.status === 'Cancelled'"
          >
            <span class="pill-dot" aria-hidden="true"></span>
            {{ selectedMeeting()!.status || 'Scheduled' }}
          </span>
        </div>
      </div>

      <div class="drawer-header-actions">
        <!-- Expand / Compress drawer -->
        <button
          class="drawer-action-btn"
          (click)="toggleDrawerFullscreen()"
          [attr.aria-label]="drawerFullscreen() ? 'Collapse drawer' : 'Expand drawer'"
        >
          @if (drawerFullscreen()) {
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M8.25 3.667V8.25H3.667M18.333 8.25H13.75V3.667
                       M13.75 18.333V13.75H18.333M3.667 13.75H8.25V18.333"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          } @else {
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3.667 8.25V3.667H8.25M13.75 3.667H18.333V8.25
                       M18.333 13.75V18.333H13.75M8.25 18.333H3.667V13.75"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          }
        </button>

        <!-- More options (Edit / Delete) \u2014 Business/Admin only -->
        @if (!isEmployee) {
          <button
            class="drawer-action-btn"
            [matMenuTriggerFor]="drawerMenu"
            [attr.aria-label]="'common.moreOptions' | transloco"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="4.5"  r="1.5" fill="currentColor"/>
              <circle cx="9" cy="9"    r="1.5" fill="currentColor"/>
              <circle cx="9" cy="13.5" r="1.5" fill="currentColor"/>
            </svg>
          </button>

          <mat-menu #drawerMenu="matMenu" class="meetings-dropdown-menu">
            <button mat-menu-item (click)="editFromDrawer()">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14 1 15
                         l1-3.667L11.333 2Z"
                      stroke="currentColor" stroke-width="1.3"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Edit Meeting
            </button>
            <button mat-menu-item class="menu-item-danger"
                    (click)="requestDelete(selectedMeeting()!.id)">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4
                         M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z"
                      stroke="currentColor" stroke-width="1.3"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Delete Meeting
            </button>
          </mat-menu>
        }

        <!-- Close -->
        <button
          class="drawer-close"
          (click)="closeDrawer()"
          [attr.aria-label]="'common.closeDetailsPanel' | transloco"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Scrollable body -->
    <div class="drawer-body">

      <!-- \u2500\u2500 Meeting Details \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <section class="drawer-section">
        <h3 class="drawer-section-title">Meeting Details</h3>
        <span class="drawer-section-date">{{ formatDateTime(selectedMeeting()!.startTime) }}</span>

        <!-- Link -->
        <div class="drawer-row">
          <span class="drawer-row-label">Meeting Link</span>
          <div class="drawer-row-value">
            @if (selectedMeeting()!.meetingLink) {
              <span class="drawer-row-text link-text">{{ selectedMeeting()!.meetingLink }}</span>
              <button class="btn-copy" (click)="copyLink()" [attr.aria-label]="'meetings.copyMeetingLink' | transloco">
                {{ linkCopied ? 'Copied!' : 'Copy' }}
              </button>
            } @else {
              <span class="drawer-row-empty">N/A</span>
            }
          </div>
        </div>

        <!-- Description -->
        <div class="drawer-row">
          <span class="drawer-row-label">Meeting info</span>
          <div class="drawer-row-value">
            <span class="drawer-row-text">
              {{ selectedMeeting()!.meetingDescription || selectedMeeting()!.description || '\u2014' }}
            </span>
          </div>
        </div>

        <!-- Starting at -->
        <div class="drawer-row">
          <span class="drawer-row-label">Starting at</span>
          <div class="drawer-row-value">
            <span class="drawer-row-text">{{ formatDateTime(selectedMeeting()!.startTime) }}</span>
          </div>
        </div>

        <!-- Ending at -->
        <div class="drawer-row">
          <span class="drawer-row-label">Ending at</span>
          <div class="drawer-row-value">
            <span class="drawer-row-text">{{ formatDateTime(selectedMeeting()!.endTime) }}</span>
          </div>
        </div>
      </section>

      <!-- \u2500\u2500 Members \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <section class="drawer-section">
        <h3 class="drawer-section-title">
          Members
          <span class="drawer-count-badge">
            {{ selectedMeeting()!.participants?.length ?? 0 }}
          </span>
          <button
            class="btn-add-member"
            (click)="toggleMemberPicker()"
            [attr.aria-label]="'meetings.addParticipant' | transloco"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.3"/>
              <path d="M8 5v6M5 8h6"
                    stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </button>
        </h3>

        <!-- Member picker -->
        @if (showMemberPicker) {
          <div class="member-picker">
            <select
              class="member-picker-select"
              [(ngModel)]="selectedNewMemberId"
              [disabled]="membersLoading || isAddingMember"
              [attr.aria-label]="'meetings.participantSearch' | transloco"
            >
              <option value="" disabled selected hidden>
                @if (membersLoading) { Loading... }
                @else if (availableMembers.length === 0) { All members already added }
                @else { Select a member }
              </option>
              @for (m of availableMembers; track m.id) {
                <option [value]="m.id">{{ m.name }}</option>
              }
            </select>
            <div class="picker-actions">
              <button
                class="btn-picker-confirm"
                (click)="confirmAddMember()"
                [disabled]="!selectedNewMemberId || isAddingMember"
                [attr.aria-label]="'meetings.confirmAddMember' | transloco"
              >
                @if (isAddingMember) { Adding... } @else { Add }
              </button>
              <button class="btn-picker-cancel" (click)="cancelAddMember()">Cancel</button>
            </div>
          </div>
        }

        <!-- Members list -->
        @if ((selectedMeeting()!.participants ?? []).length > 0) {
          <ul class="drawer-member-list">
            @for (member of (selectedMeeting()!.participants ?? []); track member.id) {
              <li class="drawer-member-item">
                <div class="drawer-member-avatar" [class]="getAvatarClass(member.name)">
                  @if (member.avatar) {
                    <img [src]="member.avatar" [alt]="member.name" class="drawer-member-img" />
                  } @else {
                    <span class="drawer-member-initials" aria-hidden="true">
                      {{ getInitials(member.name) }}
                    </span>
                  }
                </div>
                <div class="drawer-member-info">
                  <span class="drawer-member-name">{{ member.name }}</span>
                  @if (member.designation || member.role) {
                    <span class="drawer-member-role">{{ member.designation || member.role }}</span>
                  }
                </div>
              </li>
            }
          </ul>
        } @else {
          <p class="drawer-empty-text">No participants listed.</p>
        }
      </section>

    </div><!-- /drawer-body -->

    <!-- Footer -->
    <div class="drawer-footer">
      <button class="drawer-btn-close" (click)="closeDrawer()" type="button">Close</button>
    </div>

  </aside>
}
`, styles: ["/* src/components/DashboardLayout/SidebarComponents/MeetingsTabComponents/meetings-list/meetings-list.css */\n.meetings-page {\n  padding: 24px 24px 48px;\n  background: var(--ui-bg);\n  min-height: 100%;\n  font-family: var(--font-family-dm-sans);\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-bottom: 24px;\n}\n.bc-item {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n}\n.bc-active {\n  color: var(--brand-primary-800);\n}\n.bc-chevron {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--h6-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-500);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  border-radius: 12px;\n  line-height: 1;\n}\n.btn-create {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 40px;\n  padding: 8px 12px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: 1px solid var(--brand-primary-700);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: var(--shadow-flat-button);\n  transition: background 0.2s ease;\n}\n.btn-create:hover {\n  background: var(--brand-primary-700);\n}\n.btn-create:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.meetings-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--elevation-1);\n  gap: 12px;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 314px;\n  height: 42px;\n  padding: 6px 12px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n}\n.search-icon {\n  color: var(--brand-neutral-400);\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  color: var(--brand-grays-900);\n  min-width: 0;\n}\n.search-input::placeholder {\n  color: var(--brand-neutral-400);\n}\n.btn-filter {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-12);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 var(--background-bg-gray-opacity-40);\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  flex-shrink: 0;\n}\n.btn-filter:hover {\n  color: var(--brand-grays-900);\n  border-color: var(--brand-neutral-300);\n  background: var(--ui-bg);\n}\n.btn-filter:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.btn-filter--active {\n  color: var(--brand-primary-800);\n  border-color: var(--brand-primary-400);\n  background: var(--brand-primary-50);\n}\n.btn-filter--active:hover {\n  background: var(--brand-primary-100);\n}\n.filter-active-dot {\n  position: absolute;\n  top: 4px;\n  inset-inline-end: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--brand-primary-600);\n  border: 1.5px solid var(--ui-surface);\n}\n.filter-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.filter-popover {\n  position: absolute;\n  top: 0;\n  inset-inline-start: calc(100% + 8px);\n  z-index: 200;\n  min-width: 300px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: var(--elevation-4);\n  padding: 16px;\n  animation: popover-in 0.15s ease;\n}\n@keyframes popover-in {\n  from {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.popover-row {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.popover-footer {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--ui-border);\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-expand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-12);\n  transition: color 0.15s, background 0.15s;\n  flex-shrink: 0;\n}\n.btn-expand:hover {\n  color: var(--brand-grays-900);\n  background: var(--ui-bg);\n}\n.btn-expand--active {\n  color: var(--brand-primary-800);\n  background: var(--brand-primary-100);\n}\n.btn-expand--active:hover {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n}\n.btn-expand:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-label {\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n  white-space: nowrap;\n}\n.filter-select {\n  height: 36px;\n  padding: 0 10px;\n  background: var(--ui-surface);\n  border: 0.5px solid var(--brand-neutral-200);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n  transition: border-color 0.15s;\n}\n.filter-select:focus {\n  border-color: var(--brand-primary-400);\n}\n.btn-clear-filters {\n  margin-inline-start: auto;\n  padding: 0 14px;\n  height: 36px;\n  background: transparent;\n  border: 0.5px solid var(--functional-danger-300);\n  color: var(--functional-danger-500);\n  border-radius: var(--radius-8);\n  font-size: var(--caption-2-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-clear-filters:hover {\n  background: var(--functional-danger-50);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 320px;\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-2-size);\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--brand-neutral-100);\n  border-top-color: var(--brand-primary-600);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--functional-danger-50);\n  border: 1px solid var(--functional-danger-200);\n  border-radius: var(--radius-12);\n  color: var(--functional-danger-700);\n  font-size: var(--caption-2-size);\n  margin-bottom: 16px;\n}\n.btn-retry {\n  margin-inline-start: auto;\n  padding: 5px 14px;\n  background: var(--functional-danger-600);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-size: var(--caption-size);\n  font-family: var(--font-family-dm-sans);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-retry:hover {\n  background: var(--functional-danger-700);\n}\n.meetings-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.meeting-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  box-shadow: var(--elevation-1);\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.meeting-card:hover {\n  box-shadow: var(--elevation-2);\n  transform: translateY(-1px);\n}\n.card-icon-wrap {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-8);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-primary-50);\n}\n.card-icon-img {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n.card-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card-title {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-with {\n  font-weight: 400;\n  color: var(--brand-neutral-400);\n}\n.card-time {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n}\n.card-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.btn-open {\n  height: 34px;\n  padding: 0 16px;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-open:hover {\n  background: var(--brand-primary-700);\n}\n.btn-open:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  line-height: 1;\n  white-space: nowrap;\n}\n.status-pill--sm {\n  font-size: var(--caption-size);\n  padding: 3px 8px;\n}\n.pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pill-scheduled {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.pill-scheduled .pill-dot {\n  background: var(--brand-primary-500);\n}\n.pill-completed {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.pill-completed .pill-dot {\n  background: var(--functional-success-500);\n}\n.pill-cancelled {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n}\n.pill-cancelled .pill-dot {\n  background: var(--functional-danger-500);\n}\n.btn-card-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-card-menu:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.btn-card-menu:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-panel {\n  border-radius: var(--radius-12) !important;\n  box-shadow: var(--elevation-4) !important;\n  min-width: 168px !important;\n  padding: 4px !important;\n}\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-content {\n  padding: 4px !important;\n}\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 10px !important;\n  font-family: var(--font-family-dm-sans) !important;\n  font-size: var(--caption-2-size) !important;\n  color: var(--brand-grays-900) !important;\n  padding: 9px 12px !important;\n  min-height: 40px !important;\n  border-radius: var(--radius-8) !important;\n  letter-spacing: 0 !important;\n}\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-item .mat-icon,\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: inherit !important;\n}\n::ng-deep .meetings-dropdown-menu .mat-mdc-menu-item:hover {\n  background: var(--ui-bg) !important;\n}\n::ng-deep .meetings-dropdown-menu .menu-item-danger,\n::ng-deep .meetings-dropdown-menu .menu-item-danger .mdc-list-item__primary-text {\n  color: var(--functional-danger-500) !important;\n}\n::ng-deep .meetings-dropdown-menu .menu-item-danger:hover {\n  background: var(--functional-danger-50) !important;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 500px;\n  text-align: center;\n}\n.empty-img {\n  width: 260px;\n  height: auto;\n  object-fit: contain;\n}\n.empty-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--title-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.empty-sub {\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  color: var(--brand-neutral-300);\n  margin: 0;\n  max-width: 380px;\n  line-height: 1.5;\n}\n.confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 50%, transparent);\n  z-index: 1000;\n  animation: overlay-fade-in 0.15s ease forwards;\n}\n.confirm-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1001;\n  width: 400px;\n  max-width: 92vw;\n  background: var(--ui-surface);\n  border-radius: var(--radius-16);\n  padding: 32px 28px 24px;\n  box-shadow: var(--elevation-6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n}\n.confirm-icon {\n  color: var(--functional-danger-500);\n}\n.confirm-title {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n}\n.confirm-text {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-500);\n  margin: 0;\n  line-height: 1.6;\n}\n.confirm-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n  width: 100%;\n  justify-content: center;\n}\n.btn-confirm-cancel {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-confirm-cancel:hover:not(:disabled) {\n  background: var(--brand-neutral-100);\n}\n.btn-confirm-cancel:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-confirm-delete {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--functional-danger-600);\n  color: var(--ui-surface);\n  border: none;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-confirm-delete:hover:not(:disabled) {\n  background: var(--functional-danger-700);\n}\n.btn-confirm-delete:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes overlay-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.drawer-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-grays-900) 45%, transparent);\n  z-index: 900;\n  animation: overlay-fade-in 0.2s ease forwards;\n}\n.meeting-drawer {\n  position: fixed;\n  inset-block: 0;\n  inset-inline-end: 0;\n  width: 420px;\n  max-width: 90vw;\n  height: 100vh;\n  background: var(--ui-surface);\n  box-shadow: var(--elevation-6);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: drawer-slide-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n  transition: width 0.25s ease;\n}\n.meeting-drawer--wide {\n  width: 100vw;\n  max-width: 100vw;\n}\n@keyframes drawer-slide-in {\n  from {\n    transform: translateX(100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl] .meeting-drawer {\n  animation: drawer-slide-in-rtl 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n@keyframes drawer-slide-in-rtl {\n  from {\n    transform: translateX(-100%);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.drawer-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 20px;\n  border-bottom: 1px solid var(--ui-border);\n  gap: 12px;\n  flex-shrink: 0;\n}\n.drawer-header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n  flex: 1;\n}\n.drawer-icon-box {\n  width: 44px;\n  height: 44px;\n  background: var(--brand-primary-100);\n  border-radius: var(--radius-8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-800);\n  flex-shrink: 0;\n}\n.drawer-header-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.drawer-name {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--body-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.drawer-action-btn,\n.drawer-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-8);\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.drawer-action-btn:hover,\n.drawer-close:hover {\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n}\n.drawer-action-btn:focus-visible,\n.drawer-close:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n.drawer-body {\n  flex: 1;\n  overflow-y: auto;\n}\n.drawer-body::-webkit-scrollbar {\n  width: 6px;\n}\n.drawer-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.drawer-body::-webkit-scrollbar-thumb {\n  background: var(--brand-neutral-100);\n  border-radius: 3px;\n}\n.drawer-body::-webkit-scrollbar-thumb:hover {\n  background: var(--brand-neutral-300);\n}\n.drawer-section {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.drawer-section:last-child {\n  border-bottom: none;\n}\n.drawer-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  color: var(--brand-grays-900);\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.drawer-section-date {\n  display: block;\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  margin-bottom: 20px;\n}\n.drawer-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--brand-neutral-50);\n}\n.drawer-row:last-child {\n  border-bottom: none;\n}\n.drawer-row-label {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n  font-weight: 400;\n}\n.drawer-row-value {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.drawer-row-text {\n  font-size: var(--caption-2-size);\n  color: var(--brand-grays-900);\n  flex: 1;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.link-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 220px;\n}\n.drawer-row-empty {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n}\n.btn-copy {\n  padding: 4px 12px;\n  height: 28px;\n  background: var(--brand-neutral-50);\n  border: none;\n  border-radius: var(--radius-6);\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n.btn-copy:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: var(--brand-primary-100);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--brand-primary-800);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.btn-add-member {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: none;\n  color: var(--brand-neutral-400);\n  cursor: pointer;\n  border-radius: var(--radius-6);\n  transition: background 0.15s, color 0.15s;\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.btn-add-member:hover {\n  background: var(--ui-bg);\n  color: var(--brand-primary-700);\n}\n.member-picker {\n  background: var(--ui-bg);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  padding: 12px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.member-picker-select {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-6);\n  background: var(--ui-surface);\n  color: var(--brand-grays-900);\n  font-size: var(--caption-2-size);\n  font-family: var(--font-family-dm-sans);\n  outline: none;\n  cursor: pointer;\n}\n.member-picker-select:focus {\n  border-color: var(--brand-primary-400);\n}\n.picker-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.btn-picker-confirm {\n  padding: 6px 16px;\n  border-radius: var(--radius-6);\n  border: none;\n  background: var(--brand-primary-800);\n  color: var(--ui-surface);\n  font-size: var(--caption-size);\n  font-weight: 500;\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n}\n.btn-picker-confirm:hover:not(:disabled) {\n  background: var(--brand-primary-700);\n}\n.btn-picker-confirm:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-picker-cancel {\n  padding: 6px 16px;\n  border-radius: var(--radius-6);\n  border: 1px solid var(--ui-border);\n  background: transparent;\n  color: var(--brand-neutral-600);\n  font-size: var(--caption-size);\n  cursor: pointer;\n  font-family: var(--font-family-dm-sans);\n  transition: background 0.15s;\n}\n.btn-picker-cancel:hover {\n  background: var(--ui-bg);\n}\n.drawer-member-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer-member-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-8);\n  background: var(--ui-bg);\n}\n.drawer-member-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.av-1 {\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-800);\n}\n.av-2 {\n  background: var(--functional-success-100);\n  color: var(--functional-success-800);\n}\n.av-3 {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-800);\n}\n.av-4 {\n  background: var(--functional-danger-100);\n  color: var(--functional-danger-700);\n}\n.av-5 {\n  background: var(--brand-secondary-100);\n  color: var(--brand-secondary-800);\n}\n.av-6 {\n  background: var(--brand-tertiary-100);\n  color: var(--brand-tertiary-800);\n}\n.drawer-member-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.drawer-member-initials {\n  font-family: var(--font-family-ibm-plex-sans);\n  font-size: 13px;\n  font-weight: 700;\n}\n.drawer-member-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex: 1;\n  min-width: 0;\n}\n.drawer-member-name {\n  font-size: var(--caption-2-size);\n  font-weight: 600;\n  color: var(--brand-grays-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-member-role {\n  font-size: var(--caption-size);\n  color: var(--brand-neutral-400);\n}\n.drawer-empty-text {\n  font-size: var(--caption-2-size);\n  color: var(--brand-neutral-400);\n  text-align: center;\n  padding: 24px 0;\n  margin: 0;\n}\n.drawer-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.drawer-btn-close {\n  height: 40px;\n  min-width: 100px;\n  padding: 0 20px;\n  background: var(--ui-bg);\n  color: var(--brand-grays-900);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--caption-2-size);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.drawer-btn-close:hover {\n  background: var(--brand-neutral-100);\n}\n.drawer-btn-close:focus-visible {\n  outline: 2px solid var(--brand-primary-600);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .meetings-page {\n    padding: 16px 16px 48px;\n  }\n  .meetings-toolbar {\n    padding: 10px 12px;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .toolbar-left {\n    flex: 1;\n  }\n  .search-field {\n    width: 100%;\n    max-width: 220px;\n  }\n  .meeting-card {\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .card-icon-wrap {\n    width: 40px;\n    height: 40px;\n  }\n  .status-pill {\n    display: none;\n  }\n  .filter-popover {\n    min-width: calc(100vw - 32px);\n    inset-inline-start: auto;\n    inset-inline-end: 0;\n  }\n}\n@media (max-width: 480px) {\n  .search-field {\n    max-width: none;\n    flex: 1;\n  }\n  .toolbar-left {\n    flex: 1;\n  }\n  .btn-open {\n    display: none;\n  }\n}\n/*# sourceMappingURL=meetings-list.css.map */\n"] }]
  }], null, { filterWrapRef: [{
    type: ViewChild,
    args: ["filterWrap"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingsListComponent, { className: "MeetingsListComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/meetingstabcomponents/meetings-list/meetings-list.ts", lineNumber: 29 });
})();
export {
  MeetingsListComponent
};
//# sourceMappingURL=chunk-K7CBWX27.js.map
