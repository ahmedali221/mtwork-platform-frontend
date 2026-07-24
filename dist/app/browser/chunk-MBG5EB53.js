import {
  ContractService
} from "./chunk-LWI6AAJD.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatSnackBar
} from "./chunk-DWKHQJBX.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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

// src/components/DashboardLayout/Contract/wizard/wizard.types.ts
var STEP_CONFIGS = {
  FixedSalary: [
    { number: 1, labelKey: "wizard.steps.employerInfo", formKey: "employer" },
    { number: 2, labelKey: "wizard.steps.contractorInfo", formKey: "contractor" },
    { number: 3, labelKey: "wizard.steps.scopeOfWork", formKey: "scopeOfWork" },
    { number: 4, labelKey: "wizard.steps.contracting", formKey: "contracting" },
    { number: 5, labelKey: "wizard.steps.financial", formKey: "financial" }
  ],
  PayByTask: [
    { number: 1, labelKey: "wizard.steps.employerInfo", formKey: "employer" },
    { number: 2, labelKey: "wizard.steps.contractorInfo", formKey: "contractor" },
    { number: 3, labelKey: "wizard.steps.scopeContracting", formKey: "scopeContracting" },
    { number: 4, labelKey: "wizard.steps.tasks", formKey: "tasks" }
  ],
  Milestone: [
    { number: 1, labelKey: "wizard.steps.employerInfo", formKey: "employer" },
    { number: 2, labelKey: "wizard.steps.contractorInfo", formKey: "contractor" },
    { number: 3, labelKey: "wizard.steps.scopeContracting", formKey: "scopeContracting" },
    { number: 4, labelKey: "wizard.steps.stages", formKey: "stages" }
  ],
  Employee: [
    { number: 1, labelKey: "wizard.steps.employerInfo", formKey: "employer" },
    { number: 2, labelKey: "wizard.steps.contractorInfo", formKey: "contractor" },
    { number: 3, labelKey: "wizard.steps.contracting", formKey: "contracting" },
    { number: 4, labelKey: "wizard.steps.workingTime", formKey: "workingTime" }
  ]
};
var CONTRACT_TYPE_LABELS = {
  FixedSalary: "wizard.title.fixedSalary",
  PayByTask: "wizard.title.payByTask",
  Milestone: "wizard.title.milestone",
  Employee: "wizard.title.employee"
};
var CONTRACT_TYPE_EDIT_LABELS = {
  FixedSalary: "wizard.title.editFixedSalary",
  PayByTask: "wizard.title.editPayByTask",
  Milestone: "wizard.title.editMilestone",
  Employee: "wizard.title.editEmployee"
};

// src/components/DashboardLayout/Contract/wizard/wizard-stepper/wizard-stepper.ts
var _forTrack0 = ($index, $item) => $item.number;
function WizardStepperComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 4);
    \u0275\u0275domElement(1, "path", 9);
    \u0275\u0275domElementEnd();
  }
}
function WizardStepperComponent_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r2.number);
  }
}
function WizardStepperComponent_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "wizard.stepper.completed"));
  }
}
function WizardStepperComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275domListener("click", function WizardStepperComponent_For_3_Template_div_click_0_listener() {
      const step_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStepClick(step_r2.number));
    })("keydown.enter", function WizardStepperComponent_For_3_Template_div_keydown_enter_0_listener() {
      const step_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStepClick(step_r2.number));
    })("keydown.space", function WizardStepperComponent_For_3_Template_div_keydown_space_0_listener() {
      const step_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStepClick(step_r2.number));
    });
    \u0275\u0275domElementStart(3, "div", 3);
    \u0275\u0275conditionalCreate(4, WizardStepperComponent_For_3_Conditional_4_Template, 2, 0, ":svg:svg", 4)(5, WizardStepperComponent_For_3_Conditional_5_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 6);
    \u0275\u0275conditionalCreate(7, WizardStepperComponent_For_3_Conditional_7_Template, 3, 3, "span", 7);
    \u0275\u0275domElementStart(8, "span", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("step-item--active", ctx_r2.isActive(step_r2.number))("step-item--completed", ctx_r2.isCompleted(step_r2.number) && !ctx_r2.isActive(step_r2.number))("step-item--clickable", ctx_r2.isClickable(step_r2.number));
    \u0275\u0275attribute("role", ctx_r2.isClickable(step_r2.number) ? "button" : null)("tabindex", ctx_r2.isClickable(step_r2.number) ? 0 : null)("aria-current", ctx_r2.isActive(step_r2.number) ? "step" : null)("aria-label", \u0275\u0275pipeBind1(1, 13, step_r2.labelKey) + " \u2014 " + \u0275\u0275pipeBind1(2, 15, "wizard.stepper.step") + " " + step_r2.number);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isCompleted(step_r2.number) && !ctx_r2.isActive(step_r2.number) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isCompleted(step_r2.number) && !ctx_r2.isActive(step_r2.number) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, step_r2.labelKey));
  }
}
var _WizardStepperComponent = class _WizardStepperComponent {
  constructor() {
    this.steps = [];
    this.currentStep = 1;
    this.completedSteps = /* @__PURE__ */ new Set();
    this.stepClicked = new EventEmitter();
  }
  isCompleted(n2) {
    return this.completedSteps.has(n2);
  }
  isActive(n2) {
    return n2 === this.currentStep;
  }
  isClickable(n2) {
    return n2 < this.currentStep || this.completedSteps.has(n2);
  }
  onStepClick(n2) {
    if (this.isClickable(n2))
      this.stepClicked.emit(n2);
  }
};
_WizardStepperComponent.\u0275fac = function WizardStepperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WizardStepperComponent)();
};
_WizardStepperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardStepperComponent, selectors: [["app-wizard-stepper"]], inputs: { steps: "steps", currentStep: "currentStep", completedSteps: "completedSteps" }, outputs: { stepClicked: "stepClicked" }, decls: 4, vars: 3, consts: [[1, "stepper"], [1, "step-item", 3, "step-item--active", "step-item--completed", "step-item--clickable"], [1, "step-item", 3, "click", "keydown.enter", "keydown.space"], ["aria-hidden", "true", 1, "step-item__badge"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], [1, "step-item__number"], [1, "step-item__text"], [1, "step-item__status"], [1, "step-item__label"], ["d", "M2.5 7L5.5 10L11.5 4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function WizardStepperComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav", 0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275repeaterCreate(2, WizardStepperComponent_For_3_Template, 11, 19, "div", 1, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "wizard.stepper.ariaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.steps);
  }
}, dependencies: [CommonModule, TranslocoModule, TranslocoPipe], styles: ["\n\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border-inline-start: 3px solid transparent;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n  transition: background 0.15s, border-color 0.15s;\n  position: relative;\n}\n.step-item--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.step-item--clickable[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.step-item--clickable[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.step-item--active[_ngcontent-%COMP%] {\n  background: var(--ui-bg-subtle);\n  border-inline-start-color: var(--brand-primary-500);\n}\n.step-item__badge[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    color 0.2s;\n}\n.step-item--active[_ngcontent-%COMP%]   .step-item__badge[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  border-color: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.step-item--completed[_ngcontent-%COMP%]   .step-item__badge[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n  border-color: var(--functional-success-500);\n  color: var(--ui-bg-surface);\n}\n.step-item__number[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n}\n.step-item__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.step-item__status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--functional-success-600);\n  line-height: 1.2;\n}\n.step-item__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  line-height: 1.3;\n  transition: color 0.2s;\n}\n.step-item--active[_ngcontent-%COMP%]   .step-item__label[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n  font-weight: 600;\n}\n.step-item--completed[_ngcontent-%COMP%]   .step-item__label[_ngcontent-%COMP%] {\n  color: var(--ui-text-sub);\n}\n@media (max-width: 768px) {\n  .step-item__status[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .step-item[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=wizard-stepper.css.map */"] });
var WizardStepperComponent = _WizardStepperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStepperComponent, [{
    type: Component,
    args: [{ selector: "app-wizard-stepper", standalone: true, imports: [CommonModule, TranslocoModule], template: `<nav class="stepper" aria-label="{{ 'wizard.stepper.ariaLabel' | transloco }}">
  @for (step of steps; track step.number) {
    <div
      class="step-item"
      [class.step-item--active]="isActive(step.number)"
      [class.step-item--completed]="isCompleted(step.number) && !isActive(step.number)"
      [class.step-item--clickable]="isClickable(step.number)"
      [attr.role]="isClickable(step.number) ? 'button' : null"
      [attr.tabindex]="isClickable(step.number) ? 0 : null"
      [attr.aria-current]="isActive(step.number) ? 'step' : null"
      [attr.aria-label]="(step.labelKey | transloco) + ' \u2014 ' + ('wizard.stepper.step' | transloco) + ' ' + step.number"
      (click)="onStepClick(step.number)"
      (keydown.enter)="onStepClick(step.number)"
      (keydown.space)="onStepClick(step.number)"
    >
      <!-- Badge -->
      <div class="step-item__badge" aria-hidden="true">
        @if (isCompleted(step.number) && !isActive(step.number)) {
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        } @else {
          <span class="step-item__number">{{ step.number }}</span>
        }
      </div>

      <!-- Text -->
      <div class="step-item__text">
        @if (isCompleted(step.number) && !isActive(step.number)) {
          <span class="step-item__status">{{ 'wizard.stepper.completed' | transloco }}</span>
        }
        <span class="step-item__label">{{ step.labelKey | transloco }}</span>
      </div>
    </div>
  }
</nav>
`, styles: ["/* src/components/DashboardLayout/Contract/wizard/wizard-stepper/wizard-stepper.css */\n.stepper {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border-inline-start: 3px solid transparent;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n  transition: background 0.15s, border-color 0.15s;\n  position: relative;\n}\n.step-item--clickable {\n  cursor: pointer;\n}\n.step-item--clickable:hover {\n  background: var(--ui-bg-subtle);\n}\n.step-item--clickable:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.step-item--active {\n  background: var(--ui-bg-subtle);\n  border-inline-start-color: var(--brand-primary-500);\n}\n.step-item__badge {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--ui-border);\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    color 0.2s;\n}\n.step-item--active .step-item__badge {\n  background: var(--brand-neutral-950);\n  border-color: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n}\n.step-item--completed .step-item__badge {\n  background: var(--functional-success-500);\n  border-color: var(--functional-success-500);\n  color: var(--ui-bg-surface);\n}\n.step-item__number {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n}\n.step-item__text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.step-item__status {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--functional-success-600);\n  line-height: 1.2;\n}\n.step-item__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  line-height: 1.3;\n  transition: color 0.2s;\n}\n.step-item--active .step-item__label {\n  color: var(--ui-text-main);\n  font-weight: 600;\n}\n.step-item--completed .step-item__label {\n  color: var(--ui-text-sub);\n}\n@media (max-width: 768px) {\n  .step-item__status {\n    display: none;\n  }\n  .step-item {\n    padding: 8px 10px;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=wizard-stepper.css.map */\n"] }]
  }], null, { steps: [{
    type: Input
  }], currentStep: [{
    type: Input
  }], completedSteps: [{
    type: Input
  }], stepClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardStepperComponent, { className: "WizardStepperComponent", filePath: "src/components/dashboardlayout/contract/wizard/wizard-stepper/wizard-stepper.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/wizard/wizard-footer/wizard-footer.ts
function WizardFooterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 2);
  }
}
function WizardFooterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "path", 10);
    \u0275\u0275domElementEnd();
  }
}
function WizardFooterComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 9);
  }
}
function WizardFooterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? \u0275\u0275pipeBind1(1, 1, "wizard.footer.saveChanges") : \u0275\u0275pipeBind1(2, 3, "common.submit"), " ");
  }
}
function WizardFooterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 6);
    \u0275\u0275domElement(3, "path", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "common.next"), " ");
  }
}
var _WizardFooterComponent = class _WizardFooterComponent {
  constructor() {
    this.back = new EventEmitter();
    this.next = new EventEmitter();
    this.saveDraft = new EventEmitter();
  }
};
_WizardFooterComponent.\u0275fac = function WizardFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WizardFooterComponent)();
};
_WizardFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardFooterComponent, selectors: [["app-wizard-footer"]], inputs: { isFirst: "isFirst", isLast: "isLast", isSubmitting: "isSubmitting", isSavingDraft: "isSavingDraft", isEditMode: "isEditMode" }, outputs: { back: "back", next: "next", saveDraft: "saveDraft" }, decls: 21, vars: 25, consts: [[1, "wizard-footer"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "btn-spinner"], ["width", "15", "height", "15", "viewBox", "0 0 15 15", "fill", "none", "aria-hidden", "true"], [1, "wizard-footer__nav"], ["type", "button", 1, "btn", "btn--secondary", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "aria-hidden", "true"], ["d", "M8.5 2.5L3.5 7L8.5 11.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["aria-hidden", "true", 1, "btn-spinner", "btn-spinner--light"], ["d", "M12.5 9.5V12.5H2.5V9.5M7.5 1.5V9.5M4.5 6.5L7.5 9.5L10.5 6.5", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5.5 2.5L10.5 7L5.5 11.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function WizardFooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275domListener("click", function WizardFooterComponent_Template_button_click_1_listener() {
      return ctx.saveDraft.emit();
    });
    \u0275\u0275conditionalCreate(3, WizardFooterComponent_Conditional_3_Template, 1, 0, "span", 2)(4, WizardFooterComponent_Conditional_4_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275domListener("click", function WizardFooterComponent_Template_button_click_8_listener() {
      return ctx.back.emit();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(10, "svg", 6);
    \u0275\u0275domElement(11, "path", 7);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(14, "button", 8);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275domListener("click", function WizardFooterComponent_Template_button_click_14_listener() {
      return ctx.next.emit();
    });
    \u0275\u0275conditionalCreate(18, WizardFooterComponent_Conditional_18_Template, 1, 0, "span", 9);
    \u0275\u0275conditionalCreate(19, WizardFooterComponent_Conditional_19_Template, 3, 5)(20, WizardFooterComponent_Conditional_20_Template, 4, 3);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx.isSavingDraft || ctx.isSubmitting);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 11, "wizard.footer.saveDraft"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isSavingDraft ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "wizard.footer.saveDraft"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx.isFirst || ctx.isSubmitting || ctx.isSavingDraft);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 15, "common.back"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 17, "common.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx.isSubmitting || ctx.isSavingDraft);
    \u0275\u0275attribute("aria-label", ctx.isLast ? ctx.isEditMode ? \u0275\u0275pipeBind1(15, 19, "wizard.footer.saveChanges") : \u0275\u0275pipeBind1(16, 21, "common.submit") : \u0275\u0275pipeBind1(17, 23, "common.next"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.isSubmitting ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLast ? 19 : 20);
  }
}, dependencies: [CommonModule, TranslocoModule, TranslocoPipe], styles: ["\n\n.wizard-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 0;\n  border-block-start: 1px solid var(--ui-border);\n  background: transparent;\n}\n.wizard-footer__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition:\n    opacity 0.15s,\n    background 0.15s,\n    border-color 0.15s;\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  border-color: var(--ui-border);\n}\n.btn--secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: none;\n  color: var(--ui-text-muted);\n  border-color: transparent;\n  padding-inline: 10px;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border: 2px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_footer-spin 0.65s linear infinite;\n  flex-shrink: 0;\n}\n.btn-spinner--light[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.35);\n  border-top-color: var(--brand-neutral-0, #fff);\n}\n@keyframes _ngcontent-%COMP%_footer-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .wizard-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    padding: 12px 16px;\n  }\n  .wizard-footer__nav[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .btn--ghost[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=wizard-footer.css.map */"] });
var WizardFooterComponent = _WizardFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardFooterComponent, [{
    type: Component,
    args: [{ selector: "app-wizard-footer", standalone: true, imports: [CommonModule, TranslocoModule], template: `<div class="wizard-footer">

  <!-- Save as Draft \u2014 no validation, always available -->
  <button
    type="button"
    class="btn btn--ghost"
    (click)="saveDraft.emit()"
    [disabled]="isSavingDraft || isSubmitting"
    [attr.aria-label]="'wizard.footer.saveDraft' | transloco"
  >
    @if (isSavingDraft) {
      <span class="btn-spinner" aria-hidden="true"></span>
    } @else {
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path d="M12.5 9.5V12.5H2.5V9.5M7.5 1.5V9.5M4.5 6.5L7.5 9.5L10.5 6.5"
              stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    }
    {{ 'wizard.footer.saveDraft' | transloco }}
  </button>

  <!-- Navigation buttons -->
  <div class="wizard-footer__nav">
    <button
      type="button"
      class="btn btn--secondary"
      (click)="back.emit()"
      [disabled]="isFirst || isSubmitting || isSavingDraft"
      [attr.aria-label]="'common.back' | transloco"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ 'common.back' | transloco }}
    </button>

    <button
      type="button"
      class="btn btn--primary"
      (click)="next.emit()"
      [disabled]="isSubmitting || isSavingDraft"
      [attr.aria-label]="isLast
        ? (isEditMode ? ('wizard.footer.saveChanges' | transloco) : ('common.submit' | transloco))
        : ('common.next' | transloco)"
    >
      @if (isSubmitting) {
        <span class="btn-spinner btn-spinner--light" aria-hidden="true"></span>
      }
      @if (isLast) {
        {{ isEditMode ? ('wizard.footer.saveChanges' | transloco) : ('common.submit' | transloco) }}
      } @else {
        {{ 'common.next' | transloco }}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5.5 2.5L10.5 7L5.5 11.5" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
    </button>
  </div>

</div>
`, styles: ["/* src/components/DashboardLayout/Contract/wizard/wizard-footer/wizard-footer.css */\n.wizard-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 0;\n  border-block-start: 1px solid var(--ui-border);\n  background: transparent;\n}\n.wizard-footer__nav {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition:\n    opacity 0.15s,\n    background 0.15s,\n    border-color 0.15s;\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.btn--primary {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border-color: var(--brand-neutral-950);\n}\n.btn--primary:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn--secondary {\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-sub);\n  border-color: var(--ui-border);\n}\n.btn--secondary:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n}\n.btn--ghost {\n  background: none;\n  color: var(--ui-text-muted);\n  border-color: transparent;\n  padding-inline: 10px;\n}\n.btn--ghost:hover:not(:disabled) {\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.btn-spinner {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border: 2px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: footer-spin 0.65s linear infinite;\n  flex-shrink: 0;\n}\n.btn-spinner--light {\n  border-color: rgba(255, 255, 255, 0.35);\n  border-top-color: var(--brand-neutral-0, #fff);\n}\n@keyframes footer-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .wizard-footer {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    padding: 12px 16px;\n  }\n  .wizard-footer__nav {\n    justify-content: flex-end;\n  }\n  .btn--ghost {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=wizard-footer.css.map */\n"] }]
  }], null, { isFirst: [{
    type: Input
  }], isLast: [{
    type: Input
  }], isSubmitting: [{
    type: Input
  }], isSavingDraft: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], back: [{
    type: Output
  }], next: [{
    type: Output
  }], saveDraft: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardFooterComponent, { className: "WizardFooterComponent", filePath: "src/components/dashboardlayout/contract/wizard/wizard-footer/wizard-footer.ts", lineNumber: 12 });
})();

// src/components/DashboardLayout/Contract/wizard/steps/step-employer-info/step-employer-info.ts
function StepEmployerInfoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("entityName")), " ");
  }
}
function StepEmployerInfoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("officialNumber")), " ");
  }
}
function StepEmployerInfoComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("phoneNumber")), " ");
  }
}
function StepEmployerInfoComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("emailAddress")), " ");
  }
}
function StepEmployerInfoComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("representative")), " ");
  }
}
function StepEmployerInfoComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("representativeEmail")), " ");
  }
}
var _StepEmployerInfoComponent = class _StepEmployerInfoComponent {
  isInvalid(field) {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
  errorKey(field) {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl || !ctrl.errors)
      return "";
    if (ctrl.errors["required"])
      return "validation.required";
    if (ctrl.errors["email"])
      return "validation.email";
    return "validation.invalid";
  }
};
_StepEmployerInfoComponent.\u0275fac = function StepEmployerInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepEmployerInfoComponent)();
};
_StepEmployerInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepEmployerInfoComponent, selectors: [["app-step-employer-info"]], inputs: { formGroup: "formGroup" }, decls: 101, vars: 121, consts: [[1, "step", 3, "formGroup"], [1, "step-card"], [1, "step-card__title"], [1, "step__grid"], [1, "field"], ["for", "entityName", 1, "field__label"], [1, "field__badge"], ["id", "entityName", "type", "text", "formControlName", "entityName", "autocomplete", "organization", 1, "field__input"], ["id", "entityName-err", "role", "alert", 1, "field__error"], ["for", "officialNumber", 1, "field__label"], ["id", "officialNumber", "type", "text", "formControlName", "officialNumber", 1, "field__input"], ["id", "officialNumber-err", "role", "alert", 1, "field__error"], ["for", "empPhone", 1, "field__label"], ["id", "empPhone", "type", "tel", "formControlName", "phoneNumber", "autocomplete", "tel", 1, "field__input"], ["id", "empPhone-err", "role", "alert", 1, "field__error"], ["for", "empEmail", 1, "field__label"], ["id", "empEmail", "type", "email", "formControlName", "emailAddress", "autocomplete", "email", 1, "field__input"], ["id", "empEmail-err", "role", "alert", 1, "field__error"], [1, "field", "field--full"], ["for", "empAddress", 1, "field__label"], ["id", "empAddress", "formControlName", "address", "autocomplete", "street-address", "rows", "3", 1, "field__input", "field__textarea"], ["for", "representative", 1, "field__label"], ["id", "representative", "type", "text", "formControlName", "representative", 1, "field__input"], ["id", "representative-err", "role", "alert", 1, "field__error"], ["for", "representativeRole", 1, "field__label"], ["id", "representativeRole", "type", "text", "formControlName", "representativeRole", 1, "field__input"], ["for", "representativeIdentity", 1, "field__label"], ["id", "representativeIdentity", "type", "text", "formControlName", "representativeIdentity", 1, "field__input"], ["for", "representativePhone", 1, "field__label"], ["id", "representativePhone", "type", "tel", "formControlName", "representativePhone", "autocomplete", "tel", 1, "field__input"], ["for", "representativeEmail", 1, "field__label"], ["id", "representativeEmail", "type", "email", "formControlName", "representativeEmail", "autocomplete", "email", 1, "field__input"], ["id", "representativeEmail-err", "role", "alert", 1, "field__error"], ["for", "representativeDescription", 1, "field__label"], ["id", "representativeDescription", "formControlName", "representativeDescription", "rows", "3", 1, "field__input", "field__textarea"]], template: function StepEmployerInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "span", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275conditionalCreate(15, StepEmployerInfoComponent_Conditional_15_Template, 3, 3, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 4)(17, "label", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementStart(20, "span", 6);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 10);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275conditionalCreate(25, StepEmployerInfoComponent_Conditional_25_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 4)(27, "label", 12);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementStart(30, "span", 6);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 13);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275conditionalCreate(35, StepEmployerInfoComponent_Conditional_35_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 4)(37, "label", 15);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementStart(40, "span", 6);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "input", 16);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275conditionalCreate(45, StepEmployerInfoComponent_Conditional_45_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 18)(47, "label", 19);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 20);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 1)(53, "div", 3)(54, "div", 4)(55, "label", 21);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementStart(58, "span", 6);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(61, "input", 22);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275conditionalCreate(63, StepEmployerInfoComponent_Conditional_63_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 4)(65, "label", 24);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementStart(68, "span", 6);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "input", 25);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 4)(74, "label", 26);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 27);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 4)(80, "label", 28);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 29);
    \u0275\u0275pipe(84, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 18)(86, "label", 30);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "transloco");
    \u0275\u0275elementStart(89, "span", 6);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(92, "input", 31);
    \u0275\u0275pipe(93, "transloco");
    \u0275\u0275conditionalCreate(94, StepEmployerInfoComponent_Conditional_94_Template, 3, 3, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 18)(96, "label", 33);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "textarea", 34);
    \u0275\u0275pipe(100, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 61, "wizard.steps.employerInfo"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 63, "employer.entityName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 65, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("entityName"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 67, "employer.entityName"))("aria-invalid", ctx.isInvalid("entityName"))("aria-describedby", ctx.isInvalid("entityName") ? "entityName-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("entityName") ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 69, "employer.officialNumber"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 71, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("officialNumber"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 73, "employer.officialNumber"))("aria-invalid", ctx.isInvalid("officialNumber"))("aria-describedby", ctx.isInvalid("officialNumber") ? "officialNumber-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("officialNumber") ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 75, "employer.phoneNumber"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 77, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("phoneNumber"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 79, "employer.phoneNumber"))("aria-invalid", ctx.isInvalid("phoneNumber"))("aria-describedby", ctx.isInvalid("phoneNumber") ? "empPhone-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("phoneNumber") ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 81, "employer.emailAddress"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 83, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("emailAddress"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 85, "employer.emailAddress"))("aria-invalid", ctx.isInvalid("emailAddress"))("aria-describedby", ctx.isInvalid("emailAddress") ? "empEmail-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("emailAddress") ? 45 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 87, "employer.address"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 89, "employer.address"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 91, "employer.representative"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 93, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("representative"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(62, 95, "employer.representative"))("aria-invalid", ctx.isInvalid("representative"))("aria-describedby", ctx.isInvalid("representative") ? "representative-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("representative") ? 63 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 97, "employer.representativeRole"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 99, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(72, 101, "employer.representativeRole"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 103, "employer.representativeIdentity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(78, 105, "employer.representativeIdentity"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 107, "employer.representativePhone"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(84, 109, "employer.representativePhone"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 111, "employer.representativeEmail"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 113, "common.required"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("representativeEmail"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(93, 115, "employer.representativeEmail"))("aria-invalid", ctx.isInvalid("representativeEmail"))("aria-describedby", ctx.isInvalid("representativeEmail") ? "representativeEmail-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("representativeEmail") ? 94 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(98, 117, "employer.representativeDescription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(100, 119, "employer.representativeDescription"));
  }
}, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: [`

.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card[_ngcontent-%COMP%] {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title[_ngcontent-%COMP%] {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
}
.field--third[_ngcontent-%COMP%] {
  grid-column: span 1;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required[_ngcontent-%COMP%] {
  color: var(--functional-error-500);
}
.field__input[_ngcontent-%COMP%] {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error[_ngcontent-%COMP%] {
  border-color: var(--functional-error-400);
}
.field__input--error[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
select.field__input[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */`, "\n\n/*# sourceMappingURL=step-employer-info.css.map */"] });
var StepEmployerInfoComponent = _StepEmployerInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepEmployerInfoComponent, [{
    type: Component,
    args: [{ selector: "app-step-employer-info", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="step" [formGroup]="formGroup">

  <!-- Card 1: Employer information -->
  <div class="step-card">
    <h2 class="step-card__title">{{ 'wizard.steps.employerInfo' | transloco }}</h2>

    <div class="step__grid">

      <!-- Entity name -->
      <div class="field">
        <label class="field__label" for="entityName">
          {{ 'employer.entityName' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="entityName"
          type="text"
          class="field__input"
          [class.field__input--error]="isInvalid('entityName')"
          formControlName="entityName"
          [attr.aria-label]="'employer.entityName' | transloco"
          [attr.aria-invalid]="isInvalid('entityName')"
          [attr.aria-describedby]="isInvalid('entityName') ? 'entityName-err' : null"
          autocomplete="organization"
        />
        @if (isInvalid('entityName')) {
          <span id="entityName-err" class="field__error" role="alert">
            {{ errorKey('entityName') | transloco }}
          </span>
        }
      </div>

      <!-- Official number -->
      <div class="field">
        <label class="field__label" for="officialNumber">
          {{ 'employer.officialNumber' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="officialNumber"
          type="text"
          class="field__input"
          [class.field__input--error]="isInvalid('officialNumber')"
          formControlName="officialNumber"
          [attr.aria-label]="'employer.officialNumber' | transloco"
          [attr.aria-invalid]="isInvalid('officialNumber')"
          [attr.aria-describedby]="isInvalid('officialNumber') ? 'officialNumber-err' : null"
        />
        @if (isInvalid('officialNumber')) {
          <span id="officialNumber-err" class="field__error" role="alert">
            {{ errorKey('officialNumber') | transloco }}
          </span>
        }
      </div>

      <!-- Phone number -->
      <div class="field">
        <label class="field__label" for="empPhone">
          {{ 'employer.phoneNumber' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="empPhone"
          type="tel"
          class="field__input"
          [class.field__input--error]="isInvalid('phoneNumber')"
          formControlName="phoneNumber"
          [attr.aria-label]="'employer.phoneNumber' | transloco"
          [attr.aria-invalid]="isInvalid('phoneNumber')"
          [attr.aria-describedby]="isInvalid('phoneNumber') ? 'empPhone-err' : null"
          autocomplete="tel"
        />
        @if (isInvalid('phoneNumber')) {
          <span id="empPhone-err" class="field__error" role="alert">
            {{ errorKey('phoneNumber') | transloco }}
          </span>
        }
      </div>

      <!-- Email address -->
      <div class="field">
        <label class="field__label" for="empEmail">
          {{ 'employer.emailAddress' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="empEmail"
          type="email"
          class="field__input"
          [class.field__input--error]="isInvalid('emailAddress')"
          formControlName="emailAddress"
          [attr.aria-label]="'employer.emailAddress' | transloco"
          [attr.aria-invalid]="isInvalid('emailAddress')"
          [attr.aria-describedby]="isInvalid('emailAddress') ? 'empEmail-err' : null"
          autocomplete="email"
        />
        @if (isInvalid('emailAddress')) {
          <span id="empEmail-err" class="field__error" role="alert">
            {{ errorKey('emailAddress') | transloco }}
          </span>
        }
      </div>

      <!-- Address (full width textarea) -->
      <div class="field field--full">
        <label class="field__label" for="empAddress">
          {{ 'employer.address' | transloco }}
        </label>
        <textarea
          id="empAddress"
          class="field__input field__textarea"
          formControlName="address"
          [attr.aria-label]="'employer.address' | transloco"
          autocomplete="street-address"
          rows="3"
        ></textarea>
      </div>

    </div>
  </div>

  <!-- Card 2: Representative section -->
  <div class="step-card">
    <div class="step__grid">

      <!-- Representative (name) -->
      <div class="field">
        <label class="field__label" for="representative">
          {{ 'employer.representative' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="representative"
          type="text"
          class="field__input"
          [class.field__input--error]="isInvalid('representative')"
          formControlName="representative"
          [attr.aria-label]="'employer.representative' | transloco"
          [attr.aria-invalid]="isInvalid('representative')"
          [attr.aria-describedby]="isInvalid('representative') ? 'representative-err' : null"
        />
        @if (isInvalid('representative')) {
          <span id="representative-err" class="field__error" role="alert">
            {{ errorKey('representative') | transloco }}
          </span>
        }
      </div>

      <!-- Representative role (second "Representative" field per Figma) -->
      <div class="field">
        <label class="field__label" for="representativeRole">
          {{ 'employer.representativeRole' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="representativeRole"
          type="text"
          class="field__input"
          formControlName="representativeRole"
          [attr.aria-label]="'employer.representativeRole' | transloco"
        />
      </div>

      <!-- Representative identity -->
      <div class="field">
        <label class="field__label" for="representativeIdentity">
          {{ 'employer.representativeIdentity' | transloco }}
        </label>
        <input
          id="representativeIdentity"
          type="text"
          class="field__input"
          formControlName="representativeIdentity"
          [attr.aria-label]="'employer.representativeIdentity' | transloco"
        />
      </div>

      <!-- Representative phone number -->
      <div class="field">
        <label class="field__label" for="representativePhone">
          {{ 'employer.representativePhone' | transloco }}
        </label>
        <input
          id="representativePhone"
          type="tel"
          class="field__input"
          formControlName="representativePhone"
          [attr.aria-label]="'employer.representativePhone' | transloco"
          autocomplete="tel"
        />
      </div>

      <!-- Representative email (full width) -->
      <div class="field field--full">
        <label class="field__label" for="representativeEmail">
          {{ 'employer.representativeEmail' | transloco }}
          <span class="field__badge">{{ 'common.required' | transloco }}</span>
        </label>
        <input
          id="representativeEmail"
          type="email"
          class="field__input"
          [class.field__input--error]="isInvalid('representativeEmail')"
          formControlName="representativeEmail"
          [attr.aria-label]="'employer.representativeEmail' | transloco"
          [attr.aria-invalid]="isInvalid('representativeEmail')"
          [attr.aria-describedby]="isInvalid('representativeEmail') ? 'representativeEmail-err' : null"
          autocomplete="email"
        />
        @if (isInvalid('representativeEmail')) {
          <span id="representativeEmail-err" class="field__error" role="alert">
            {{ errorKey('representativeEmail') | transloco }}
          </span>
        }
      </div>

      <!-- Representative description (full width textarea) -->
      <div class="field field--full">
        <label class="field__label" for="representativeDescription">
          {{ 'employer.representativeDescription' | transloco }}
        </label>
        <textarea
          id="representativeDescription"
          class="field__input field__textarea"
          formControlName="representativeDescription"
          [attr.aria-label]="'employer.representativeDescription' | transloco"
          rows="3"
        ></textarea>
      </div>

    </div>
  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/Contract/wizard/steps/step-form.css */
.step {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full {
  grid-column: 1 / -1;
}
.field--third {
  grid-column: span 1;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required {
  color: var(--functional-error-500);
}
.field__input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error {
  border-color: var(--functional-error-400);
}
.field__input--error:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input::placeholder {
  color: var(--ui-text-muted);
}
select.field__input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */
`, "/* src/components/DashboardLayout/Contract/wizard/steps/step-employer-info/step-employer-info.css */\n/*# sourceMappingURL=step-employer-info.css.map */\n"] }]
  }], null, { formGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepEmployerInfoComponent, { className: "StepEmployerInfoComponent", filePath: "src/components/dashboardlayout/contract/wizard/steps/step-employer-info/step-employer-info.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/wizard/steps/step-contractor-info/step-contractor-info.ts
function StepContractorInfoComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("contractorName")), " ");
  }
}
function StepContractorInfoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("nationality")), " ");
  }
}
function StepContractorInfoComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("idNumber")), " ");
  }
}
function StepContractorInfoComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("phoneNumber")), " ");
  }
}
function StepContractorInfoComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("emailAddress")), " ");
  }
}
function StepContractorInfoComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("bankName")), " ");
  }
}
function StepContractorInfoComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("iban")), " ");
  }
}
var _StepContractorInfoComponent = class _StepContractorInfoComponent {
  isInvalid(field) {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
  errorKey(field) {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors)
      return "";
    if (ctrl.errors["required"])
      return "validation.required";
    if (ctrl.errors["email"])
      return "validation.email";
    return "validation.invalid";
  }
};
_StepContractorInfoComponent.\u0275fac = function StepContractorInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepContractorInfoComponent)();
};
_StepContractorInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepContractorInfoComponent, selectors: [["app-step-contractor-info"]], inputs: { formGroup: "formGroup" }, decls: 89, vars: 99, consts: [[1, "step", 3, "formGroup"], [1, "step__header"], [1, "step__title"], [1, "step__desc"], [1, "step__grid"], [1, "field"], ["for", "contractorName", 1, "field__label"], ["aria-hidden", "true", 1, "field__required"], ["id", "contractorName", "type", "text", "formControlName", "contractorName", "autocomplete", "name", 1, "field__input"], ["id", "contractorName-err", "role", "alert", 1, "field__error"], ["for", "nationality", 1, "field__label"], ["id", "nationality", "type", "text", "formControlName", "nationality", 1, "field__input"], ["id", "nationality-err", "role", "alert", 1, "field__error"], ["for", "cIdNumber", 1, "field__label"], ["id", "cIdNumber", "type", "text", "formControlName", "idNumber", 1, "field__input"], ["id", "cIdNumber-err", "role", "alert", 1, "field__error"], ["for", "cPhone", 1, "field__label"], ["id", "cPhone", "type", "tel", "formControlName", "phoneNumber", "autocomplete", "tel", 1, "field__input"], ["id", "cPhone-err", "role", "alert", 1, "field__error"], ["for", "cEmail", 1, "field__label"], ["id", "cEmail", "type", "email", "formControlName", "emailAddress", "autocomplete", "email", 1, "field__input"], ["id", "cEmail-err", "role", "alert", 1, "field__error"], ["for", "cJobTitle", 1, "field__label"], ["id", "cJobTitle", "type", "text", "formControlName", "jobTitle", 1, "field__input"], [1, "field", "field--full"], ["for", "cAddress", 1, "field__label"], ["id", "cAddress", "type", "text", "formControlName", "address", "autocomplete", "street-address", 1, "field__input"], [1, "step__section-header"], [1, "step__section-title"], ["for", "bankName", 1, "field__label"], ["id", "bankName", "type", "text", "formControlName", "bankName", 1, "field__input"], ["id", "bankName-err", "role", "alert", 1, "field__error"], ["for", "iban", 1, "field__label"], ["id", "iban", "type", "text", "formControlName", "iban", 1, "field__input"], ["id", "iban-err", "role", "alert", 1, "field__error"]], template: function StepContractorInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275conditionalCreate(17, StepContractorInfoComponent_Conditional_17_Template, 3, 3, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 5)(19, "label", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementStart(22, "span", 7);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "input", 11);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275conditionalCreate(26, StepContractorInfoComponent_Conditional_26_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 5)(28, "label", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementStart(31, "span", 7);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 14);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275conditionalCreate(35, StepContractorInfoComponent_Conditional_35_Template, 3, 3, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 5)(37, "label", 16);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementStart(40, "span", 7);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 17);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275conditionalCreate(44, StepContractorInfoComponent_Conditional_44_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 5)(46, "label", 19);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementStart(49, "span", 7);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 20);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275conditionalCreate(53, StepContractorInfoComponent_Conditional_53_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 5)(55, "label", 22);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 23);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 24)(61, "label", 25);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 26);
    \u0275\u0275pipe(65, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 27)(67, "span", 28);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 4)(71, "div", 5)(72, "label", 29);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "transloco");
    \u0275\u0275elementStart(75, "span", 7);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(77, "input", 30);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275conditionalCreate(79, StepContractorInfoComponent_Conditional_79_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 5)(81, "label", 32);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "transloco");
    \u0275\u0275elementStart(84, "span", 7);
    \u0275\u0275text(85, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(86, "input", 33);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275conditionalCreate(88, StepContractorInfoComponent_Conditional_88_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 57, "wizard.steps.contractorInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 59, "wizard.steps.contractorInfoDesc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 61, "contractor.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("contractorName"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 63, "contractor.name"))("aria-invalid", ctx.isInvalid("contractorName"))("aria-describedby", ctx.isInvalid("contractorName") ? "contractorName-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("contractorName") ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 65, "contractor.nationality"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("nationality"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 67, "contractor.nationality"))("aria-invalid", ctx.isInvalid("nationality"))("aria-describedby", ctx.isInvalid("nationality") ? "nationality-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("nationality") ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 69, "contractor.idNumber"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("idNumber"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 71, "contractor.idNumber"))("aria-invalid", ctx.isInvalid("idNumber"))("aria-describedby", ctx.isInvalid("idNumber") ? "cIdNumber-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("idNumber") ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 73, "contractor.phoneNumber"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("phoneNumber"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(43, 75, "contractor.phoneNumber"))("aria-invalid", ctx.isInvalid("phoneNumber"))("aria-describedby", ctx.isInvalid("phoneNumber") ? "cPhone-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("phoneNumber") ? 44 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 77, "contractor.emailAddress"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("emailAddress"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 79, "contractor.emailAddress"))("aria-invalid", ctx.isInvalid("emailAddress"))("aria-describedby", ctx.isInvalid("emailAddress") ? "cEmail-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("emailAddress") ? 53 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 81, "contractor.jobTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(59, 83, "contractor.jobTitle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 85, "contractor.address"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(65, 87, "contractor.address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 89, "contractor.bankingSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 91, "contractor.bankName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("bankName"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(78, 93, "contractor.bankName"))("aria-invalid", ctx.isInvalid("bankName"))("aria-describedby", ctx.isInvalid("bankName") ? "bankName-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("bankName") ? 79 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 95, "contractor.iban"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("iban"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(87, 97, "contractor.iban"))("aria-invalid", ctx.isInvalid("iban"))("aria-describedby", ctx.isInvalid("iban") ? "iban-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("iban") ? 88 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: [`

.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card[_ngcontent-%COMP%] {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title[_ngcontent-%COMP%] {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
}
.field--third[_ngcontent-%COMP%] {
  grid-column: span 1;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required[_ngcontent-%COMP%] {
  color: var(--functional-error-500);
}
.field__input[_ngcontent-%COMP%] {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error[_ngcontent-%COMP%] {
  border-color: var(--functional-error-400);
}
.field__input--error[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
select.field__input[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */`, "\n\n/*# sourceMappingURL=step-contractor-info.css.map */"] });
var StepContractorInfoComponent = _StepContractorInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepContractorInfoComponent, [{
    type: Component,
    args: [{ selector: "app-step-contractor-info", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="step" [formGroup]="formGroup">

  <div class="step__header">
    <h2 class="step__title">{{ 'wizard.steps.contractorInfo' | transloco }}</h2>
    <p class="step__desc">{{ 'wizard.steps.contractorInfoDesc' | transloco }}</p>
  </div>

  <div class="step__grid">

    <!-- Full name -->
    <div class="field">
      <label class="field__label" for="contractorName">
        {{ 'contractor.name' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="contractorName" type="text" class="field__input"
        [class.field__input--error]="isInvalid('contractorName')"
        formControlName="contractorName"
        [attr.aria-label]="'contractor.name' | transloco"
        [attr.aria-invalid]="isInvalid('contractorName')"
        [attr.aria-describedby]="isInvalid('contractorName') ? 'contractorName-err' : null"
        autocomplete="name" />
      @if (isInvalid('contractorName')) {
        <span id="contractorName-err" class="field__error" role="alert">
          {{ errorKey('contractorName') | transloco }}
        </span>
      }
    </div>

    <!-- Nationality -->
    <div class="field">
      <label class="field__label" for="nationality">
        {{ 'contractor.nationality' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="nationality" type="text" class="field__input"
        [class.field__input--error]="isInvalid('nationality')"
        formControlName="nationality"
        [attr.aria-label]="'contractor.nationality' | transloco"
        [attr.aria-invalid]="isInvalid('nationality')"
        [attr.aria-describedby]="isInvalid('nationality') ? 'nationality-err' : null" />
      @if (isInvalid('nationality')) {
        <span id="nationality-err" class="field__error" role="alert">
          {{ errorKey('nationality') | transloco }}
        </span>
      }
    </div>

    <!-- ID number -->
    <div class="field">
      <label class="field__label" for="cIdNumber">
        {{ 'contractor.idNumber' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="cIdNumber" type="text" class="field__input"
        [class.field__input--error]="isInvalid('idNumber')"
        formControlName="idNumber"
        [attr.aria-label]="'contractor.idNumber' | transloco"
        [attr.aria-invalid]="isInvalid('idNumber')"
        [attr.aria-describedby]="isInvalid('idNumber') ? 'cIdNumber-err' : null" />
      @if (isInvalid('idNumber')) {
        <span id="cIdNumber-err" class="field__error" role="alert">
          {{ errorKey('idNumber') | transloco }}
        </span>
      }
    </div>

    <!-- Phone -->
    <div class="field">
      <label class="field__label" for="cPhone">
        {{ 'contractor.phoneNumber' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="cPhone" type="tel" class="field__input"
        [class.field__input--error]="isInvalid('phoneNumber')"
        formControlName="phoneNumber"
        [attr.aria-label]="'contractor.phoneNumber' | transloco"
        [attr.aria-invalid]="isInvalid('phoneNumber')"
        [attr.aria-describedby]="isInvalid('phoneNumber') ? 'cPhone-err' : null"
        autocomplete="tel" />
      @if (isInvalid('phoneNumber')) {
        <span id="cPhone-err" class="field__error" role="alert">
          {{ errorKey('phoneNumber') | transloco }}
        </span>
      }
    </div>

    <!-- Email -->
    <div class="field">
      <label class="field__label" for="cEmail">
        {{ 'contractor.emailAddress' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="cEmail" type="email" class="field__input"
        [class.field__input--error]="isInvalid('emailAddress')"
        formControlName="emailAddress"
        [attr.aria-label]="'contractor.emailAddress' | transloco"
        [attr.aria-invalid]="isInvalid('emailAddress')"
        [attr.aria-describedby]="isInvalid('emailAddress') ? 'cEmail-err' : null"
        autocomplete="email" />
      @if (isInvalid('emailAddress')) {
        <span id="cEmail-err" class="field__error" role="alert">
          {{ errorKey('emailAddress') | transloco }}
        </span>
      }
    </div>

    <!-- Job title (optional) -->
    <div class="field">
      <label class="field__label" for="cJobTitle">
        {{ 'contractor.jobTitle' | transloco }}
      </label>
      <input id="cJobTitle" type="text" class="field__input"
        formControlName="jobTitle"
        [attr.aria-label]="'contractor.jobTitle' | transloco" />
    </div>

    <!-- Address (optional, full width) -->
    <div class="field field--full">
      <label class="field__label" for="cAddress">
        {{ 'contractor.address' | transloco }}
      </label>
      <input id="cAddress" type="text" class="field__input"
        formControlName="address"
        [attr.aria-label]="'contractor.address' | transloco"
        autocomplete="street-address" />
    </div>

  </div>

  <!-- Banking section -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'contractor.bankingSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <!-- Bank name -->
    <div class="field">
      <label class="field__label" for="bankName">
        {{ 'contractor.bankName' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="bankName" type="text" class="field__input"
        [class.field__input--error]="isInvalid('bankName')"
        formControlName="bankName"
        [attr.aria-label]="'contractor.bankName' | transloco"
        [attr.aria-invalid]="isInvalid('bankName')"
        [attr.aria-describedby]="isInvalid('bankName') ? 'bankName-err' : null" />
      @if (isInvalid('bankName')) {
        <span id="bankName-err" class="field__error" role="alert">
          {{ errorKey('bankName') | transloco }}
        </span>
      }
    </div>

    <!-- IBAN -->
    <div class="field">
      <label class="field__label" for="iban">
        {{ 'contractor.iban' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="iban" type="text" class="field__input"
        [class.field__input--error]="isInvalid('iban')"
        formControlName="iban"
        [attr.aria-label]="'contractor.iban' | transloco"
        [attr.aria-invalid]="isInvalid('iban')"
        [attr.aria-describedby]="isInvalid('iban') ? 'iban-err' : null" />
      @if (isInvalid('iban')) {
        <span id="iban-err" class="field__error" role="alert">
          {{ errorKey('iban') | transloco }}
        </span>
      }
    </div>

  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/Contract/wizard/steps/step-form.css */
.step {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full {
  grid-column: 1 / -1;
}
.field--third {
  grid-column: span 1;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required {
  color: var(--functional-error-500);
}
.field__input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error {
  border-color: var(--functional-error-400);
}
.field__input--error:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input::placeholder {
  color: var(--ui-text-muted);
}
select.field__input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */
`, "/* src/components/DashboardLayout/Contract/wizard/steps/step-contractor-info/step-contractor-info.css */\n/*# sourceMappingURL=step-contractor-info.css.map */\n"] }]
  }], null, { formGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepContractorInfoComponent, { className: "StepContractorInfoComponent", filePath: "src/components/dashboardlayout/contract/wizard/steps/step-contractor-info/step-contractor-info.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/wizard/steps/step-scope-of-work/step-scope-of-work.ts
function StepScopeOfWorkComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("jobTitle")), " ");
  }
}
function StepScopeOfWorkComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("jobNumber")), " ");
  }
}
var _StepScopeOfWorkComponent = class _StepScopeOfWorkComponent {
  isInvalid(field) {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
  errorKey(field) {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors)
      return "";
    if (ctrl.errors["required"])
      return "validation.required";
    return "validation.invalid";
  }
};
_StepScopeOfWorkComponent.\u0275fac = function StepScopeOfWorkComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepScopeOfWorkComponent)();
};
_StepScopeOfWorkComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepScopeOfWorkComponent, selectors: [["app-step-scope-of-work"]], inputs: { formGroup: "formGroup" }, decls: 33, vars: 35, consts: [[1, "step", 3, "formGroup"], [1, "step__header"], [1, "step__title"], [1, "step__desc"], [1, "step__grid"], [1, "field"], ["for", "scopeJobTitle", 1, "field__label"], ["aria-hidden", "true", 1, "field__required"], ["id", "scopeJobTitle", "type", "text", "formControlName", "jobTitle", 1, "field__input"], ["id", "scopeJobTitle-err", "role", "alert", 1, "field__error"], ["for", "jobNumber", 1, "field__label"], ["id", "jobNumber", "type", "text", "formControlName", "jobNumber", 1, "field__input"], ["id", "jobNumber-err", "role", "alert", 1, "field__error"], [1, "field", "field--full"], ["for", "jobDescription", 1, "field__label"], ["id", "jobDescription", "formControlName", "jobDescription", "rows", "4", 1, "field__input", "field__textarea"]], template: function StepScopeOfWorkComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275conditionalCreate(17, StepScopeOfWorkComponent_Conditional_17_Template, 3, 3, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 5)(19, "label", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementStart(22, "span", 7);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "input", 11);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275conditionalCreate(26, StepScopeOfWorkComponent_Conditional_26_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 13)(28, "label", 14);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 15);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 19, "wizard.steps.scopeOfWork"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, "wizard.steps.scopeOfWorkDesc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 23, "scope.jobTitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("jobTitle"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 25, "scope.jobTitle"))("aria-invalid", ctx.isInvalid("jobTitle"))("aria-describedby", ctx.isInvalid("jobTitle") ? "scopeJobTitle-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("jobTitle") ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 27, "scope.jobNumber"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("jobNumber"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 29, "scope.jobNumber"))("aria-invalid", ctx.isInvalid("jobNumber"))("aria-describedby", ctx.isInvalid("jobNumber") ? "jobNumber-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("jobNumber") ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 31, "scope.jobDescription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(32, 33, "scope.jobDescription"));
  }
}, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: [`

.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card[_ngcontent-%COMP%] {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title[_ngcontent-%COMP%] {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
}
.field--third[_ngcontent-%COMP%] {
  grid-column: span 1;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required[_ngcontent-%COMP%] {
  color: var(--functional-error-500);
}
.field__input[_ngcontent-%COMP%] {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error[_ngcontent-%COMP%] {
  border-color: var(--functional-error-400);
}
.field__input--error[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
select.field__input[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */`, "\n\n/*# sourceMappingURL=step-scope-of-work.css.map */"] });
var StepScopeOfWorkComponent = _StepScopeOfWorkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepScopeOfWorkComponent, [{
    type: Component,
    args: [{ selector: "app-step-scope-of-work", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="step" [formGroup]="formGroup">

  <div class="step__header">
    <h2 class="step__title">{{ 'wizard.steps.scopeOfWork' | transloco }}</h2>
    <p class="step__desc">{{ 'wizard.steps.scopeOfWorkDesc' | transloco }}</p>
  </div>

  <div class="step__grid">

    <!-- Job title -->
    <div class="field">
      <label class="field__label" for="scopeJobTitle">
        {{ 'scope.jobTitle' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="scopeJobTitle" type="text" class="field__input"
        [class.field__input--error]="isInvalid('jobTitle')"
        formControlName="jobTitle"
        [attr.aria-label]="'scope.jobTitle' | transloco"
        [attr.aria-invalid]="isInvalid('jobTitle')"
        [attr.aria-describedby]="isInvalid('jobTitle') ? 'scopeJobTitle-err' : null" />
      @if (isInvalid('jobTitle')) {
        <span id="scopeJobTitle-err" class="field__error" role="alert">
          {{ errorKey('jobTitle') | transloco }}
        </span>
      }
    </div>

    <!-- Job number -->
    <div class="field">
      <label class="field__label" for="jobNumber">
        {{ 'scope.jobNumber' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="jobNumber" type="text" class="field__input"
        [class.field__input--error]="isInvalid('jobNumber')"
        formControlName="jobNumber"
        [attr.aria-label]="'scope.jobNumber' | transloco"
        [attr.aria-invalid]="isInvalid('jobNumber')"
        [attr.aria-describedby]="isInvalid('jobNumber') ? 'jobNumber-err' : null" />
      @if (isInvalid('jobNumber')) {
        <span id="jobNumber-err" class="field__error" role="alert">
          {{ errorKey('jobNumber') | transloco }}
        </span>
      }
    </div>

    <!-- Job description (optional, full width) -->
    <div class="field field--full">
      <label class="field__label" for="jobDescription">
        {{ 'scope.jobDescription' | transloco }}
      </label>
      <textarea id="jobDescription" class="field__input field__textarea"
        formControlName="jobDescription"
        [attr.aria-label]="'scope.jobDescription' | transloco"
        rows="4"></textarea>
    </div>

  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/Contract/wizard/steps/step-form.css */
.step {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full {
  grid-column: 1 / -1;
}
.field--third {
  grid-column: span 1;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required {
  color: var(--functional-error-500);
}
.field__input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error {
  border-color: var(--functional-error-400);
}
.field__input--error:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input::placeholder {
  color: var(--ui-text-muted);
}
select.field__input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */
`, "/* src/components/DashboardLayout/Contract/wizard/steps/step-scope-of-work/step-scope-of-work.css */\n/*# sourceMappingURL=step-scope-of-work.css.map */\n"] }]
  }], null, { formGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepScopeOfWorkComponent, { className: "StepScopeOfWorkComponent", filePath: "src/components/dashboardlayout/contract/wizard/steps/step-scope-of-work/step-scope-of-work.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/wizard/steps/step-contracting/step-contracting.ts
function StepContractingComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("startDate")), " ");
  }
}
function StepContractingComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("endDate")), " ");
  }
}
function StepContractingComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("trialPeriod")), " ");
  }
}
function StepContractingComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("rightToTerminateTrial")), " ");
  }
}
function StepContractingComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("rightToTerminateDuring")), " ");
  }
}
function StepContractingComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("rightToTerminate")), " ");
  }
}
var _StepContractingComponent = class _StepContractingComponent {
  isInvalid(field) {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
  errorKey(field) {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors)
      return "";
    if (ctrl.errors["required"])
      return "validation.required";
    return "validation.invalid";
  }
};
_StepContractingComponent.\u0275fac = function StepContractingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepContractingComponent)();
};
_StepContractingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepContractingComponent, selectors: [["app-step-contracting"]], inputs: { formGroup: "formGroup" }, decls: 107, vars: 118, consts: [[1, "step", 3, "formGroup"], [1, "step__header"], [1, "step__title"], [1, "step__desc"], [1, "step__section-header"], [1, "step__section-title"], [1, "step__grid"], [1, "field"], ["for", "startDate", 1, "field__label"], ["aria-hidden", "true", 1, "field__required"], ["id", "startDate", "type", "date", "formControlName", "startDate", 1, "field__input"], ["id", "startDate-err", "role", "alert", 1, "field__error"], ["for", "endDate", 1, "field__label"], ["id", "endDate", "type", "date", "formControlName", "endDate", 1, "field__input"], ["id", "endDate-err", "role", "alert", 1, "field__error"], ["for", "trialPeriod", 1, "field__label"], ["id", "trialPeriod", "type", "text", "formControlName", "trialPeriod", 1, "field__input", 3, "placeholder"], ["id", "trialPeriod-err", "role", "alert", 1, "field__error"], ["for", "noticePeriod", 1, "field__label"], ["id", "noticePeriod", "type", "text", "formControlName", "noticePeriod", 1, "field__input", 3, "placeholder"], ["for", "rightToTerminateTrial", 1, "field__label"], ["id", "rightToTerminateTrial", "formControlName", "rightToTerminateTrial", 1, "field__input"], ["value", ""], ["value", "Yes"], ["value", "No"], ["id", "rightToTerminateTrial-err", "role", "alert", 1, "field__error"], ["for", "rightToTerminateDuring", 1, "field__label"], ["id", "rightToTerminateDuring", "formControlName", "rightToTerminateDuring", 1, "field__input"], ["id", "rightToTerminateDuring-err", "role", "alert", 1, "field__error"], ["for", "rightToTerminate", 1, "field__label"], ["id", "rightToTerminate", "formControlName", "rightToTerminate", 1, "field__input"], ["id", "rightToTerminate-err", "role", "alert", 1, "field__error"]], template: function StepContractingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "label", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 10);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275conditionalCreate(21, StepContractingComponent_Conditional_21_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 7)(23, "label", 12);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementStart(26, "span", 9);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 13);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275conditionalCreate(30, StepContractingComponent_Conditional_30_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 7)(32, "label", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementStart(35, "span", 9);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 16);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275conditionalCreate(40, StepContractingComponent_Conditional_40_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 7)(42, "label", 18);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 19);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 4)(49, "span", 5);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 6)(53, "div", 7)(54, "label", 20);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementStart(57, "span", 9);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 21);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementStart(61, "option", 22);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 23);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 24);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(70, StepContractingComponent_Conditional_70_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 7)(72, "label", 26);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "transloco");
    \u0275\u0275elementStart(75, "span", 9);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "select", 27);
    \u0275\u0275pipe(78, "transloco");
    \u0275\u0275elementStart(79, "option", 22);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 23);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "option", 24);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(88, StepContractingComponent_Conditional_88_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 7)(90, "label", 29);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementStart(93, "span", 9);
    \u0275\u0275text(94, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "select", 30);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementStart(97, "option", 22);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "option", 23);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "option", 24);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(106, StepContractingComponent_Conditional_106_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 60, "wizard.steps.contracting"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 62, "wizard.steps.contractingDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 64, "contracting.durationSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 66, "contracting.startDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("startDate"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 68, "contracting.startDate"))("aria-invalid", ctx.isInvalid("startDate"))("aria-describedby", ctx.isInvalid("startDate") ? "startDate-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("startDate") ? 21 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 70, "contracting.endDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("endDate"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 72, "contracting.endDate"))("aria-invalid", ctx.isInvalid("endDate"))("aria-describedby", ctx.isInvalid("endDate") ? "endDate-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("endDate") ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 74, "contracting.trialPeriod"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("trialPeriod"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 76, "contracting.trialPeriodPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(39, 78, "contracting.trialPeriod"))("aria-invalid", ctx.isInvalid("trialPeriod"))("aria-describedby", ctx.isInvalid("trialPeriod") ? "trialPeriod-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isInvalid("trialPeriod") ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 80, "contracting.noticePeriod"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 82, "contracting.noticePeriodPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 84, "contracting.noticePeriod"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 86, "contracting.terminationSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 88, "contracting.rightToTerminateTrial"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("rightToTerminateTrial"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(60, 90, "contracting.rightToTerminateTrial"))("aria-invalid", ctx.isInvalid("rightToTerminateTrial"))("aria-describedby", ctx.isInvalid("rightToTerminateTrial") ? "rightToTerminateTrial-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 92, "wizard.options.selectPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 94, "wizard.options.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 96, "wizard.options.no"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("rightToTerminateTrial") ? 70 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 98, "contracting.rightToTerminateDuring"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("rightToTerminateDuring"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(78, 100, "contracting.rightToTerminateDuring"))("aria-invalid", ctx.isInvalid("rightToTerminateDuring"))("aria-describedby", ctx.isInvalid("rightToTerminateDuring") ? "rightToTerminateDuring-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 102, "wizard.options.selectPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 104, "wizard.options.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 106, "wizard.options.no"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("rightToTerminateDuring") ? 88 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 108, "contracting.rightToTerminate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("rightToTerminate"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(96, 110, "contracting.rightToTerminate"))("aria-invalid", ctx.isInvalid("rightToTerminate"))("aria-describedby", ctx.isInvalid("rightToTerminate") ? "rightToTerminate-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 112, "wizard.options.selectPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 114, "wizard.options.yes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 116, "wizard.options.no"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("rightToTerminate") ? 106 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: [`

.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card[_ngcontent-%COMP%] {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title[_ngcontent-%COMP%] {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
}
.field--third[_ngcontent-%COMP%] {
  grid-column: span 1;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required[_ngcontent-%COMP%] {
  color: var(--functional-error-500);
}
.field__input[_ngcontent-%COMP%] {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error[_ngcontent-%COMP%] {
  border-color: var(--functional-error-400);
}
.field__input--error[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
select.field__input[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */`, "\n\n/*# sourceMappingURL=step-contracting.css.map */"] });
var StepContractingComponent = _StepContractingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepContractingComponent, [{
    type: Component,
    args: [{ selector: "app-step-contracting", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="step" [formGroup]="formGroup">

  <div class="step__header">
    <h2 class="step__title">{{ 'wizard.steps.contracting' | transloco }}</h2>
    <p class="step__desc">{{ 'wizard.steps.contractingDesc' | transloco }}</p>
  </div>

  <!-- Contract duration -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'contracting.durationSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <!-- Start date -->
    <div class="field">
      <label class="field__label" for="startDate">
        {{ 'contracting.startDate' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="startDate" type="date" class="field__input"
        [class.field__input--error]="isInvalid('startDate')"
        formControlName="startDate"
        [attr.aria-label]="'contracting.startDate' | transloco"
        [attr.aria-invalid]="isInvalid('startDate')"
        [attr.aria-describedby]="isInvalid('startDate') ? 'startDate-err' : null" />
      @if (isInvalid('startDate')) {
        <span id="startDate-err" class="field__error" role="alert">
          {{ errorKey('startDate') | transloco }}
        </span>
      }
    </div>

    <!-- End date -->
    <div class="field">
      <label class="field__label" for="endDate">
        {{ 'contracting.endDate' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="endDate" type="date" class="field__input"
        [class.field__input--error]="isInvalid('endDate')"
        formControlName="endDate"
        [attr.aria-label]="'contracting.endDate' | transloco"
        [attr.aria-invalid]="isInvalid('endDate')"
        [attr.aria-describedby]="isInvalid('endDate') ? 'endDate-err' : null" />
      @if (isInvalid('endDate')) {
        <span id="endDate-err" class="field__error" role="alert">
          {{ errorKey('endDate') | transloco }}
        </span>
      }
    </div>

    <!-- Trial period -->
    <div class="field">
      <label class="field__label" for="trialPeriod">
        {{ 'contracting.trialPeriod' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="trialPeriod" type="text" class="field__input"
        [class.field__input--error]="isInvalid('trialPeriod')"
        formControlName="trialPeriod"
        [attr.aria-label]="'contracting.trialPeriod' | transloco"
        [attr.aria-invalid]="isInvalid('trialPeriod')"
        [attr.aria-describedby]="isInvalid('trialPeriod') ? 'trialPeriod-err' : null"
        [placeholder]="'contracting.trialPeriodPlaceholder' | transloco" />
      @if (isInvalid('trialPeriod')) {
        <span id="trialPeriod-err" class="field__error" role="alert">
          {{ errorKey('trialPeriod') | transloco }}
        </span>
      }
    </div>

    <!-- Notice period (optional) -->
    <div class="field">
      <label class="field__label" for="noticePeriod">
        {{ 'contracting.noticePeriod' | transloco }}
      </label>
      <input id="noticePeriod" type="text" class="field__input"
        formControlName="noticePeriod"
        [attr.aria-label]="'contracting.noticePeriod' | transloco"
        [placeholder]="'contracting.noticePeriodPlaceholder' | transloco" />
    </div>

  </div>

  <!-- Termination rights -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'contracting.terminationSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <!-- Right to terminate during trial -->
    <div class="field">
      <label class="field__label" for="rightToTerminateTrial">
        {{ 'contracting.rightToTerminateTrial' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <select id="rightToTerminateTrial" class="field__input"
        [class.field__input--error]="isInvalid('rightToTerminateTrial')"
        formControlName="rightToTerminateTrial"
        [attr.aria-label]="'contracting.rightToTerminateTrial' | transloco"
        [attr.aria-invalid]="isInvalid('rightToTerminateTrial')"
        [attr.aria-describedby]="isInvalid('rightToTerminateTrial') ? 'rightToTerminateTrial-err' : null">
        <option value="">{{ 'wizard.options.selectPlaceholder' | transloco }}</option>
        <option value="Yes">{{ 'wizard.options.yes' | transloco }}</option>
        <option value="No">{{ 'wizard.options.no' | transloco }}</option>
      </select>
      @if (isInvalid('rightToTerminateTrial')) {
        <span id="rightToTerminateTrial-err" class="field__error" role="alert">
          {{ errorKey('rightToTerminateTrial') | transloco }}
        </span>
      }
    </div>

    <!-- Right to terminate during contract -->
    <div class="field">
      <label class="field__label" for="rightToTerminateDuring">
        {{ 'contracting.rightToTerminateDuring' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <select id="rightToTerminateDuring" class="field__input"
        [class.field__input--error]="isInvalid('rightToTerminateDuring')"
        formControlName="rightToTerminateDuring"
        [attr.aria-label]="'contracting.rightToTerminateDuring' | transloco"
        [attr.aria-invalid]="isInvalid('rightToTerminateDuring')"
        [attr.aria-describedby]="isInvalid('rightToTerminateDuring') ? 'rightToTerminateDuring-err' : null">
        <option value="">{{ 'wizard.options.selectPlaceholder' | transloco }}</option>
        <option value="Yes">{{ 'wizard.options.yes' | transloco }}</option>
        <option value="No">{{ 'wizard.options.no' | transloco }}</option>
      </select>
      @if (isInvalid('rightToTerminateDuring')) {
        <span id="rightToTerminateDuring-err" class="field__error" role="alert">
          {{ errorKey('rightToTerminateDuring') | transloco }}
        </span>
      }
    </div>

    <!-- Right to terminate (general) -->
    <div class="field">
      <label class="field__label" for="rightToTerminate">
        {{ 'contracting.rightToTerminate' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <select id="rightToTerminate" class="field__input"
        [class.field__input--error]="isInvalid('rightToTerminate')"
        formControlName="rightToTerminate"
        [attr.aria-label]="'contracting.rightToTerminate' | transloco"
        [attr.aria-invalid]="isInvalid('rightToTerminate')"
        [attr.aria-describedby]="isInvalid('rightToTerminate') ? 'rightToTerminate-err' : null">
        <option value="">{{ 'wizard.options.selectPlaceholder' | transloco }}</option>
        <option value="Yes">{{ 'wizard.options.yes' | transloco }}</option>
        <option value="No">{{ 'wizard.options.no' | transloco }}</option>
      </select>
      @if (isInvalid('rightToTerminate')) {
        <span id="rightToTerminate-err" class="field__error" role="alert">
          {{ errorKey('rightToTerminate') | transloco }}
        </span>
      }
    </div>

  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/Contract/wizard/steps/step-form.css */
.step {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full {
  grid-column: 1 / -1;
}
.field--third {
  grid-column: span 1;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required {
  color: var(--functional-error-500);
}
.field__input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error {
  border-color: var(--functional-error-400);
}
.field__input--error:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input::placeholder {
  color: var(--ui-text-muted);
}
select.field__input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */
`, "/* src/components/DashboardLayout/Contract/wizard/steps/step-contracting/step-contracting.css */\n/*# sourceMappingURL=step-contracting.css.map */\n"] }]
  }], null, { formGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepContractingComponent, { className: "StepContractingComponent", filePath: "src/components/dashboardlayout/contract/wizard/steps/step-contracting/step-contracting.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/wizard/steps/step-financial/step-financial.ts
function StepFinancialComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("currency")), " ");
  }
}
function StepFinancialComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("billingCycle")), " ");
  }
}
function StepFinancialComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("amount")), " ");
  }
}
function StepFinancialComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("firstBatchFrom")), " ");
  }
}
function StepFinancialComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("firstBatchTo")), " ");
  }
}
function StepFinancialComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("firstPaymentAmount")), " ");
  }
}
function StepFinancialComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("lastBatchFrom")), " ");
  }
}
function StepFinancialComponent_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("lastBatchTo")), " ");
  }
}
function StepFinancialComponent_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey("lastPaymentAmount")), " ");
  }
}
var _StepFinancialComponent = class _StepFinancialComponent {
  isInvalid(field) {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }
  errorKey(field) {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors)
      return "";
    if (ctrl.errors["required"])
      return "validation.required";
    if (ctrl.errors["min"])
      return "validation.minAmount";
    return "validation.invalid";
  }
};
_StepFinancialComponent.\u0275fac = function StepFinancialComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepFinancialComponent)();
};
_StepFinancialComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepFinancialComponent, selectors: [["app-step-financial"]], inputs: { formGroup: "formGroup" }, decls: 137, vars: 148, consts: [[1, "step", 3, "formGroup"], [1, "step__header"], [1, "step__title"], [1, "step__desc"], [1, "step__section-header"], [1, "step__section-title"], [1, "step__grid"], [1, "field"], ["for", "currency", 1, "field__label"], ["aria-hidden", "true", 1, "field__required"], ["id", "currency", "formControlName", "currency", 1, "field__input"], ["value", ""], ["value", "SAR"], ["value", "USD"], ["value", "EUR"], ["value", "GBP"], ["value", "AED"], ["id", "currency-err", "role", "alert", 1, "field__error"], ["for", "billingCycle", 1, "field__label"], ["id", "billingCycle", "formControlName", "billingCycle", 1, "field__input"], ["value", "Monthly"], ["value", "Quarterly"], ["value", "Annually"], ["value", "One-Time"], ["id", "billingCycle-err", "role", "alert", 1, "field__error"], [1, "field", "field--full"], ["for", "amount", 1, "field__label"], ["id", "amount", "type", "number", "min", "1", "formControlName", "amount", 1, "field__input"], ["id", "amount-err", "role", "alert", 1, "field__error"], ["for", "firstBatchFrom", 1, "field__label"], ["id", "firstBatchFrom", "type", "date", "formControlName", "firstBatchFrom", 1, "field__input"], ["id", "firstBatchFrom-err", "role", "alert", 1, "field__error"], ["for", "firstBatchTo", 1, "field__label"], ["id", "firstBatchTo", "type", "date", "formControlName", "firstBatchTo", 1, "field__input"], ["id", "firstBatchTo-err", "role", "alert", 1, "field__error"], ["for", "firstPaymentAmount", 1, "field__label"], ["id", "firstPaymentAmount", "type", "number", "min", "1", "formControlName", "firstPaymentAmount", 1, "field__input"], ["id", "firstPaymentAmount-err", "role", "alert", 1, "field__error"], ["for", "lastBatchFrom", 1, "field__label"], ["id", "lastBatchFrom", "type", "date", "formControlName", "lastBatchFrom", 1, "field__input"], ["id", "lastBatchFrom-err", "role", "alert", 1, "field__error"], ["for", "lastBatchTo", 1, "field__label"], ["id", "lastBatchTo", "type", "date", "formControlName", "lastBatchTo", 1, "field__input"], ["id", "lastBatchTo-err", "role", "alert", 1, "field__error"], ["for", "lastPaymentAmount", 1, "field__label"], ["id", "lastPaymentAmount", "type", "number", "min", "1", "formControlName", "lastPaymentAmount", 1, "field__input"], ["id", "lastPaymentAmount-err", "role", "alert", 1, "field__error"]], template: function StepFinancialComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "label", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "select", 10);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementStart(21, "option", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 13);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 15);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 16);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, StepFinancialComponent_Conditional_39_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 7)(41, "label", 18);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementStart(44, "span", 9);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 19);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementStart(48, "option", 11);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 20);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 21);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 22);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 23);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(63, StepFinancialComponent_Conditional_63_Template, 3, 3, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 25)(65, "label", 26);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementStart(68, "span", 9);
    \u0275\u0275text(69, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(70, "input", 27);
    \u0275\u0275pipe(71, "transloco");
    \u0275\u0275conditionalCreate(72, StepFinancialComponent_Conditional_72_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 4)(74, "span", 5);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 6)(78, "div", 7)(79, "label", 29);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementStart(82, "span", 9);
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(84, "input", 30);
    \u0275\u0275pipe(85, "transloco");
    \u0275\u0275conditionalCreate(86, StepFinancialComponent_Conditional_86_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 7)(88, "label", 32);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "transloco");
    \u0275\u0275elementStart(91, "span", 9);
    \u0275\u0275text(92, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(93, "input", 33);
    \u0275\u0275pipe(94, "transloco");
    \u0275\u0275conditionalCreate(95, StepFinancialComponent_Conditional_95_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 25)(97, "label", 35);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "transloco");
    \u0275\u0275elementStart(100, "span", 9);
    \u0275\u0275text(101, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(102, "input", 36);
    \u0275\u0275pipe(103, "transloco");
    \u0275\u0275conditionalCreate(104, StepFinancialComponent_Conditional_104_Template, 3, 3, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 4)(106, "span", 5);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 6)(110, "div", 7)(111, "label", 38);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "transloco");
    \u0275\u0275elementStart(114, "span", 9);
    \u0275\u0275text(115, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(116, "input", 39);
    \u0275\u0275pipe(117, "transloco");
    \u0275\u0275conditionalCreate(118, StepFinancialComponent_Conditional_118_Template, 3, 3, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 7)(120, "label", 41);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "transloco");
    \u0275\u0275elementStart(123, "span", 9);
    \u0275\u0275text(124, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(125, "input", 42);
    \u0275\u0275pipe(126, "transloco");
    \u0275\u0275conditionalCreate(127, StepFinancialComponent_Conditional_127_Template, 3, 3, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 25)(129, "label", 44);
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "transloco");
    \u0275\u0275elementStart(132, "span", 9);
    \u0275\u0275text(133, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(134, "input", 45);
    \u0275\u0275pipe(135, "transloco");
    \u0275\u0275conditionalCreate(136, StepFinancialComponent_Conditional_136_Template, 3, 3, "span", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 80, "wizard.steps.financial"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 82, "wizard.steps.financialDesc"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 84, "financial.paymentTermsSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 86, "financial.currency"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("currency"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 88, "financial.currency"))("aria-invalid", ctx.isInvalid("currency"))("aria-describedby", ctx.isInvalid("currency") ? "currency-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 90, "wizard.options.selectPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 92, "wizard.options.currency.sar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 94, "wizard.options.currency.usd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 96, "wizard.options.currency.eur"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 98, "wizard.options.currency.gbp"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 100, "wizard.options.currency.aed"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("currency") ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 102, "financial.billingCycle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("billingCycle"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 104, "financial.billingCycle"))("aria-invalid", ctx.isInvalid("billingCycle"))("aria-describedby", ctx.isInvalid("billingCycle") ? "billingCycle-err" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 106, "wizard.options.selectPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 108, "wizard.options.billingCycle.monthly"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 110, "wizard.options.billingCycle.quarterly"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 112, "wizard.options.billingCycle.annually"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 114, "wizard.options.billingCycle.oneTime"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("billingCycle") ? 63 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 116, "financial.amount"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("amount"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(71, 118, "financial.amount"))("aria-invalid", ctx.isInvalid("amount"))("aria-describedby", ctx.isInvalid("amount") ? "amount-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("amount") ? 72 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 120, "financial.firstBatchSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 122, "financial.periodFrom"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("firstBatchFrom"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(85, 124, "financial.periodFrom"))("aria-invalid", ctx.isInvalid("firstBatchFrom"))("aria-describedby", ctx.isInvalid("firstBatchFrom") ? "firstBatchFrom-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("firstBatchFrom") ? 86 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 126, "financial.periodTo"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("firstBatchTo"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(94, 128, "financial.periodTo"))("aria-invalid", ctx.isInvalid("firstBatchTo"))("aria-describedby", ctx.isInvalid("firstBatchTo") ? "firstBatchTo-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("firstBatchTo") ? 95 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 130, "financial.paymentAmount"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("firstPaymentAmount"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(103, 132, "financial.paymentAmount"))("aria-invalid", ctx.isInvalid("firstPaymentAmount"))("aria-describedby", ctx.isInvalid("firstPaymentAmount") ? "firstPaymentAmount-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("firstPaymentAmount") ? 104 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 134, "financial.lastBatchSection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 136, "financial.periodFrom"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("lastBatchFrom"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(117, 138, "financial.periodFrom"))("aria-invalid", ctx.isInvalid("lastBatchFrom"))("aria-describedby", ctx.isInvalid("lastBatchFrom") ? "lastBatchFrom-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("lastBatchFrom") ? 118 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(122, 140, "financial.periodTo"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("lastBatchTo"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(126, 142, "financial.periodTo"))("aria-invalid", ctx.isInvalid("lastBatchTo"))("aria-describedby", ctx.isInvalid("lastBatchTo") ? "lastBatchTo-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("lastBatchTo") ? 127 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(131, 144, "financial.paymentAmount"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--error", ctx.isInvalid("lastPaymentAmount"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(135, 146, "financial.paymentAmount"))("aria-invalid", ctx.isInvalid("lastPaymentAmount"))("aria-describedby", ctx.isInvalid("lastPaymentAmount") ? "lastPaymentAmount-err" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isInvalid("lastPaymentAmount") ? 136 : -1);
  }
}, dependencies: [CommonModule, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: [`

.step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card[_ngcontent-%COMP%] {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title[_ngcontent-%COMP%] {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full[_ngcontent-%COMP%] {
  grid-column: 1 / -1;
}
.field--third[_ngcontent-%COMP%] {
  grid-column: span 1;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required[_ngcontent-%COMP%] {
  color: var(--functional-error-500);
}
.field__input[_ngcontent-%COMP%] {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error[_ngcontent-%COMP%] {
  border-color: var(--functional-error-400);
}
.field__input--error[_ngcontent-%COMP%]:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input[_ngcontent-%COMP%]::placeholder {
  color: var(--ui-text-muted);
}
select.field__input[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */`, "\n\ninput[type=number].field__input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \ninput[type=number].field__input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number].field__input[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=step-financial.css.map */"] });
var StepFinancialComponent = _StepFinancialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepFinancialComponent, [{
    type: Component,
    args: [{ selector: "app-step-financial", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="step" [formGroup]="formGroup">

  <div class="step__header">
    <h2 class="step__title">{{ 'wizard.steps.financial' | transloco }}</h2>
    <p class="step__desc">{{ 'wizard.steps.financialDesc' | transloco }}</p>
  </div>

  <!-- Payment terms -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'financial.paymentTermsSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <!-- Currency -->
    <div class="field">
      <label class="field__label" for="currency">
        {{ 'financial.currency' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <select id="currency" class="field__input"
        [class.field__input--error]="isInvalid('currency')"
        formControlName="currency"
        [attr.aria-label]="'financial.currency' | transloco"
        [attr.aria-invalid]="isInvalid('currency')"
        [attr.aria-describedby]="isInvalid('currency') ? 'currency-err' : null">
        <option value="">{{ 'wizard.options.selectPlaceholder' | transloco }}</option>
        <option value="SAR">{{ 'wizard.options.currency.sar' | transloco }}</option>
        <option value="USD">{{ 'wizard.options.currency.usd' | transloco }}</option>
        <option value="EUR">{{ 'wizard.options.currency.eur' | transloco }}</option>
        <option value="GBP">{{ 'wizard.options.currency.gbp' | transloco }}</option>
        <option value="AED">{{ 'wizard.options.currency.aed' | transloco }}</option>
      </select>
      @if (isInvalid('currency')) {
        <span id="currency-err" class="field__error" role="alert">
          {{ errorKey('currency') | transloco }}
        </span>
      }
    </div>

    <!-- Billing cycle -->
    <div class="field">
      <label class="field__label" for="billingCycle">
        {{ 'financial.billingCycle' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <select id="billingCycle" class="field__input"
        [class.field__input--error]="isInvalid('billingCycle')"
        formControlName="billingCycle"
        [attr.aria-label]="'financial.billingCycle' | transloco"
        [attr.aria-invalid]="isInvalid('billingCycle')"
        [attr.aria-describedby]="isInvalid('billingCycle') ? 'billingCycle-err' : null">
        <option value="">{{ 'wizard.options.selectPlaceholder' | transloco }}</option>
        <option value="Monthly">{{ 'wizard.options.billingCycle.monthly' | transloco }}</option>
        <option value="Quarterly">{{ 'wizard.options.billingCycle.quarterly' | transloco }}</option>
        <option value="Annually">{{ 'wizard.options.billingCycle.annually' | transloco }}</option>
        <option value="One-Time">{{ 'wizard.options.billingCycle.oneTime' | transloco }}</option>
      </select>
      @if (isInvalid('billingCycle')) {
        <span id="billingCycle-err" class="field__error" role="alert">
          {{ errorKey('billingCycle') | transloco }}
        </span>
      }
    </div>

    <!-- Total amount -->
    <div class="field field--full">
      <label class="field__label" for="amount">
        {{ 'financial.amount' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="amount" type="number" min="1" class="field__input"
        [class.field__input--error]="isInvalid('amount')"
        formControlName="amount"
        [attr.aria-label]="'financial.amount' | transloco"
        [attr.aria-invalid]="isInvalid('amount')"
        [attr.aria-describedby]="isInvalid('amount') ? 'amount-err' : null" />
      @if (isInvalid('amount')) {
        <span id="amount-err" class="field__error" role="alert">
          {{ errorKey('amount') | transloco }}
        </span>
      }
    </div>

  </div>

  <!-- First payment batch -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'financial.firstBatchSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <div class="field">
      <label class="field__label" for="firstBatchFrom">
        {{ 'financial.periodFrom' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="firstBatchFrom" type="date" class="field__input"
        [class.field__input--error]="isInvalid('firstBatchFrom')"
        formControlName="firstBatchFrom"
        [attr.aria-label]="'financial.periodFrom' | transloco"
        [attr.aria-invalid]="isInvalid('firstBatchFrom')"
        [attr.aria-describedby]="isInvalid('firstBatchFrom') ? 'firstBatchFrom-err' : null" />
      @if (isInvalid('firstBatchFrom')) {
        <span id="firstBatchFrom-err" class="field__error" role="alert">
          {{ errorKey('firstBatchFrom') | transloco }}
        </span>
      }
    </div>

    <div class="field">
      <label class="field__label" for="firstBatchTo">
        {{ 'financial.periodTo' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="firstBatchTo" type="date" class="field__input"
        [class.field__input--error]="isInvalid('firstBatchTo')"
        formControlName="firstBatchTo"
        [attr.aria-label]="'financial.periodTo' | transloco"
        [attr.aria-invalid]="isInvalid('firstBatchTo')"
        [attr.aria-describedby]="isInvalid('firstBatchTo') ? 'firstBatchTo-err' : null" />
      @if (isInvalid('firstBatchTo')) {
        <span id="firstBatchTo-err" class="field__error" role="alert">
          {{ errorKey('firstBatchTo') | transloco }}
        </span>
      }
    </div>

    <div class="field field--full">
      <label class="field__label" for="firstPaymentAmount">
        {{ 'financial.paymentAmount' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="firstPaymentAmount" type="number" min="1" class="field__input"
        [class.field__input--error]="isInvalid('firstPaymentAmount')"
        formControlName="firstPaymentAmount"
        [attr.aria-label]="'financial.paymentAmount' | transloco"
        [attr.aria-invalid]="isInvalid('firstPaymentAmount')"
        [attr.aria-describedby]="isInvalid('firstPaymentAmount') ? 'firstPaymentAmount-err' : null" />
      @if (isInvalid('firstPaymentAmount')) {
        <span id="firstPaymentAmount-err" class="field__error" role="alert">
          {{ errorKey('firstPaymentAmount') | transloco }}
        </span>
      }
    </div>

  </div>

  <!-- Last payment batch -->
  <div class="step__section-header">
    <span class="step__section-title">{{ 'financial.lastBatchSection' | transloco }}</span>
  </div>

  <div class="step__grid">

    <div class="field">
      <label class="field__label" for="lastBatchFrom">
        {{ 'financial.periodFrom' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="lastBatchFrom" type="date" class="field__input"
        [class.field__input--error]="isInvalid('lastBatchFrom')"
        formControlName="lastBatchFrom"
        [attr.aria-label]="'financial.periodFrom' | transloco"
        [attr.aria-invalid]="isInvalid('lastBatchFrom')"
        [attr.aria-describedby]="isInvalid('lastBatchFrom') ? 'lastBatchFrom-err' : null" />
      @if (isInvalid('lastBatchFrom')) {
        <span id="lastBatchFrom-err" class="field__error" role="alert">
          {{ errorKey('lastBatchFrom') | transloco }}
        </span>
      }
    </div>

    <div class="field">
      <label class="field__label" for="lastBatchTo">
        {{ 'financial.periodTo' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="lastBatchTo" type="date" class="field__input"
        [class.field__input--error]="isInvalid('lastBatchTo')"
        formControlName="lastBatchTo"
        [attr.aria-label]="'financial.periodTo' | transloco"
        [attr.aria-invalid]="isInvalid('lastBatchTo')"
        [attr.aria-describedby]="isInvalid('lastBatchTo') ? 'lastBatchTo-err' : null" />
      @if (isInvalid('lastBatchTo')) {
        <span id="lastBatchTo-err" class="field__error" role="alert">
          {{ errorKey('lastBatchTo') | transloco }}
        </span>
      }
    </div>

    <div class="field field--full">
      <label class="field__label" for="lastPaymentAmount">
        {{ 'financial.paymentAmount' | transloco }}
        <span class="field__required" aria-hidden="true">*</span>
      </label>
      <input id="lastPaymentAmount" type="number" min="1" class="field__input"
        [class.field__input--error]="isInvalid('lastPaymentAmount')"
        formControlName="lastPaymentAmount"
        [attr.aria-label]="'financial.paymentAmount' | transloco"
        [attr.aria-invalid]="isInvalid('lastPaymentAmount')"
        [attr.aria-describedby]="isInvalid('lastPaymentAmount') ? 'lastPaymentAmount-err' : null" />
      @if (isInvalid('lastPaymentAmount')) {
        <span id="lastPaymentAmount-err" class="field__error" role="alert">
          {{ errorKey('lastPaymentAmount') | transloco }}
        </span>
      }
    </div>

  </div>

</div>
`, styles: [`/* src/components/DashboardLayout/Contract/wizard/steps/step-form.css */
.step {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.step-card {
  background: var(--ui-bg-surface);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.step-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
}
.field__badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 4px;
  background: var(--functional-warning-100);
  color: var(--functional-warning-700);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  margin-inline-start: 4px;
}
.step__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--ui-text-main);
  margin: 0;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--ui-text-muted);
  margin: 0;
}
.step__section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block-end: 4px;
  border-block-end: 1px solid var(--ui-border);
}
.step__section-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--ui-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.step__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
}
.field--full {
  grid-column: 1 / -1;
}
.field--third {
  grid-column: span 1;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-text-sub);
  display: flex;
  align-items: center;
  gap: 3px;
}
.field__required {
  color: var(--functional-error-500);
}
.field__input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 8px;
  background: var(--ui-bg-surface);
  color: var(--ui-text-main);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}
.field__input:focus {
  outline: none;
  border-color: var(--brand-primary-400);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-400) 14%, transparent);
}
.field__input--error {
  border-color: var(--functional-error-400);
}
.field__input--error:focus {
  border-color: var(--functional-error-500);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--functional-error-400) 14%, transparent);
}
.field__input::placeholder {
  color: var(--ui-text-muted);
}
select.field__input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-inline-end: 36px;
  cursor: pointer;
}
.field__textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  min-height: 80px;
}
.field__hint {
  font-size: 12px;
  color: var(--ui-text-muted);
}
.field__error {
  font-size: 12px;
  color: var(--functional-error-600);
}
@media (max-width: 600px) {
  .step__grid {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=step-form.css.map */
`, "/* src/components/DashboardLayout/Contract/wizard/steps/step-financial/step-financial.css */\ninput[type=number].field__input::-webkit-inner-spin-button,\ninput[type=number].field__input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number].field__input {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=step-financial.css.map */\n"] }]
  }], null, { formGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepFinancialComponent, { className: "StepFinancialComponent", filePath: "src/components/dashboardlayout/contract/wizard/steps/step-financial/step-financial.ts", lineNumber: 13 });
})();

// src/components/DashboardLayout/Contract/success-dialog-component/success-dialog-component.ts
var _SuccessDialogComponent = class _SuccessDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.router = inject(Router);
    this.data = inject(MAT_DIALOG_DATA);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  goToDashboard() {
    const userType = localStorage.getItem("userType");
    const route = userType === "1" ? "/dashboard/employee" : userType === "2" ? "/dashboard/contractor" : "/dashboard/business";
    this.dialogRef.close();
    this.router.navigate([route]);
  }
};
_SuccessDialogComponent.\u0275fac = function SuccessDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuccessDialogComponent)();
};
_SuccessDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuccessDialogComponent, selectors: [["app-success-dialog"]], decls: 14, vars: 1, consts: [[1, "dialog-content"], ["src", "assets/SavedSuccessfully.png", "alt", "Success", 1, "success-img"], [1, "success-message"], [1, "contract-type"], [1, "dialog-actions"], ["mat-button", "", "routerLink", "/dashboard/contracts", 1, "btnContract", 3, "click"], ["mat-button", "", 1, "btnDashboard", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "btnClose", 3, "click"]], template: function SuccessDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275elementStart(2, "p", 2);
    \u0275\u0275text(3, " Your ");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Contract has been created successfully! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function SuccessDialogComponent_Template_button_click_8_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275text(9, "Go to Contracts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function SuccessDialogComponent_Template_button_click_10_listener() {
      return ctx.goToDashboard();
    });
    \u0275\u0275text(11, "Go to Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function SuccessDialogComponent_Template_button_click_12_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275text(13, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.data.contractType);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, MatDialogModule], styles: ["\n\n.dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 24px 20px;\n}\n.success-img[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 16px;\n}\n.success-message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.contract-type[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n  font-weight: 700;\n  margin-inline-start: 4px;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.btnContract[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  transition: opacity 0.15s;\n}\n.btnContract[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btnDashboard[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.btnDashboard[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.btnClose[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: none;\n  color: var(--ui-text-muted);\n  border: none;\n  transition: color 0.15s;\n}\n.btnClose[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-main);\n}\n/*# sourceMappingURL=success-dialog-component.css.map */"] });
var SuccessDialogComponent = _SuccessDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuccessDialogComponent, [{
    type: Component,
    args: [{ selector: "app-success-dialog", standalone: true, imports: [CommonModule, RouterModule, MatDialogModule], template: '<div class="dialog-content">\n  <img src="assets/SavedSuccessfully.png" alt="Success" class="success-img" />\n\n  <p class="success-message">\n    Your <span class="contract-type">{{ data.contractType }}</span> Contract has been created successfully!\n  </p>\n\n  <div class="dialog-actions">\n    <button class="btnContract" mat-button routerLink="/dashboard/contracts" (click)="closeDialog()">Go to Contracts</button>\n    <button class="btnDashboard" mat-button (click)="goToDashboard()">Go to Dashboard</button>\n    <button class="btnClose" mat-stroked-button color="primary" (click)="closeDialog()">Close</button>\n  </div>\n</div>\n', styles: ["/* src/components/DashboardLayout/Contract/success-dialog-component/success-dialog-component.css */\n.dialog-content {\n  text-align: center;\n  padding: 28px 24px 20px;\n}\n.success-img {\n  width: 100px;\n  margin-bottom: 16px;\n}\n.success-message {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.contract-type {\n  color: var(--brand-primary-600);\n  font-weight: 700;\n  margin-inline-start: 4px;\n}\n.dialog-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.btnContract {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  transition: opacity 0.15s;\n}\n.btnContract:hover {\n  opacity: 0.88;\n}\n.btnDashboard {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  background: var(--ui-bg-surface);\n  color: var(--ui-text-main);\n  border: 1px solid var(--ui-border);\n  transition: background 0.15s;\n}\n.btnDashboard:hover {\n  background: var(--ui-bg-subtle);\n}\n.btnClose {\n  width: 100%;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: none;\n  color: var(--ui-text-muted);\n  border: none;\n  transition: color 0.15s;\n}\n.btnClose:hover {\n  color: var(--ui-text-main);\n}\n/*# sourceMappingURL=success-dialog-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuccessDialogComponent, { className: "SuccessDialogComponent", filePath: "src/components/dashboardlayout/contract/success-dialog-component/success-dialog-component.ts", lineNumber: 14 });
})();

// src/components/DashboardLayout/Contract/utils/contract-form.utils.ts
function contractToForm(contract, contractType) {
  const employer = {
    entityName: contract.employer?.entityName ?? "",
    officialNumber: contract.employer?.officialNumber ?? "",
    phoneNumber: contract.employer?.phone ?? "",
    emailAddress: contract.employer?.email ?? "",
    address: contract.employer?.address ?? "",
    representative: contract.empoleeOrContractor?.authorizedFirstName ?? "",
    representativeIdentity: contract.empoleeOrContractor?.authorizedId ?? "",
    representativeEmail: "",
    representativeDescription: ""
  };
  const contractor = {
    contractorName: contract.empoleeOrContractor?.name ?? "",
    nationality: contract.empoleeOrContractor?.country ?? "",
    idNumber: contract.empoleeOrContractor?.authorizedId ?? "",
    phoneNumber: contract.empoleeOrContractor?.phone ?? "",
    emailAddress: contract.empoleeOrContractor?.email ?? "",
    jobTitle: contract.empoleeOrContractor?.role ?? "",
    address: contract.empoleeOrContractor?.address ?? "",
    bankName: "",
    iban: ""
  };
  const base = { employer, contractor };
  switch (contractType) {
    case "FixedSalary":
      base["scopeOfWork"] = {
        jobTitle: contract.contractTitle ?? "",
        jobNumber: contract.workId ?? "",
        jobDescription: contract.description ?? ""
      };
      base["contracting"] = {
        startDate: contract.startDate ?? "",
        endDate: contract.endDate ?? "",
        trialPeriod: contract.trialPeriod ?? "",
        rightToTerminateTrial: contract.terminateDuringTrial ?? "",
        rightToTerminateDuring: "",
        rightToTerminate: contract.terminateContract ?? "",
        noticePeriod: contract.noticePeriod ?? ""
      };
      base["financial"] = {
        currency: contract.currency ?? "",
        billingCycle: contract.billingCycle ?? "",
        amount: contract.salary ?? "",
        firstBatchFrom: "",
        firstBatchTo: "",
        firstPaymentAmount: "",
        lastBatchFrom: "",
        lastBatchTo: "",
        lastPaymentAmount: ""
      };
      break;
    case "PayByTask":
      base["scopeContracting"] = {
        jobTitle: contract.contractTitle ?? "",
        startDate: contract.startDate ?? "",
        endDate: contract.endDate ?? "",
        trialPeriod: contract.trialPeriod ?? "",
        noticePeriod: contract.noticePeriod ?? ""
      };
      break;
    case "Milestone":
      base["scopeContracting"] = {
        jobTitle: contract.contractTitle ?? "",
        startDate: contract.startDate ?? "",
        endDate: contract.endDate ?? "",
        trialPeriod: contract.trialPeriod ?? "",
        noticePeriod: contract.noticePeriod ?? ""
      };
      break;
    case "Employee":
      base["contracting"] = {
        contractStartDate: contract.startDate ?? "",
        contractDuration: contract.contractDuration ?? "",
        trialPeriod: contract.trialPeriod ?? "",
        typeOfWork: contract.typeOfWork ?? "",
        vacationDays: contract.vacationDays ?? null,
        noticePeriod: contract.noticePeriod ?? ""
      };
      base["workingTime"] = {
        numberOfWorkingHours: contract.numberOfWorkingHours ?? null,
        workingDays: [],
        workingHoursFrom: "",
        workingHoursTo: "",
        salary: contract.salary ?? "",
        currency: contract.currency ?? "",
        billingCycle: contract.billingCycle ?? "",
        allowances: contract.includeAllowances ?? false
      };
      break;
  }
  return base;
}

// src/components/DashboardLayout/Contract/utils/contract-payload.builder.ts
function s(v) {
  if (v === null || v === void 0)
    return void 0;
  const str = String(v).trim();
  return str === "" ? void 0 : str;
}
function n(v) {
  if (v === null || v === void 0 || v === "")
    return void 0;
  const num = Number(v);
  return isNaN(num) || num === 0 ? void 0 : num;
}
function strip(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== void 0));
}
function buildContractPayload(formValue, contractType) {
  const employer = formValue["employer"] ?? {};
  const contractor = formValue["contractor"] ?? {};
  const contractTypeId = {
    Employee: 1,
    // EmployeeContract
    FixedSalary: 2,
    // FixedPayContract
    PayByTask: 3,
    // PerTaskContract
    Milestone: 4
    // PerProjectContract
  };
  const base = strip({
    contractTypeId: contractTypeId[contractType],
    // Employer
    entityName: s(employer["entityName"]),
    officialNumber: s(employer["officialNumber"]),
    companyPhone: s(employer["phoneNumber"]),
    companyEmail: s(employer["emailAddress"]),
    companyAddress: s(employer["address"]),
    representative: s(employer["representative"]),
    representativeIdentity: s(employer["representativeIdentity"]),
    representativeEmail: s(employer["representativeEmail"]),
    representativeDescription: s(employer["representativeDescription"]),
    // Contractor / employee
    employeeName: s(contractor["contractorName"]),
    nationality: s(contractor["nationality"]),
    idNumber: s(contractor["idNumber"]),
    employeePhone: s(contractor["phoneNumber"]),
    employeeEmail: s(contractor["emailAddress"]),
    jobTitleName: s(contractor["jobTitle"]),
    address: s(contractor["address"]),
    bankName: s(contractor["bankName"]),
    iban: s(contractor["iban"])
  });
  switch (contractType) {
    case "FixedSalary": {
      const scope = formValue["scopeOfWork"] ?? {};
      const contracting = formValue["contracting"] ?? {};
      const financial = formValue["financial"] ?? {};
      Object.assign(base, strip({
        jobNumber: s(scope["jobNumber"]),
        jobDescription: s(scope["jobDescription"]),
        startDate: s(contracting["startDate"]),
        endDate: s(contracting["endDate"]),
        trialPeriod: s(contracting["trialPeriod"]),
        terminateDuringTrial: s(contracting["rightToTerminateTrial"]),
        terminateDuringContract: s(contracting["rightToTerminateDuring"]),
        terminateContract: s(contracting["rightToTerminate"]),
        noticePeriod: s(contracting["noticePeriod"]),
        currency: s(financial["currency"]),
        billingCycle: s(financial["billingCycle"]),
        salary: n(financial["amount"]),
        firstBatchFrom: s(financial["firstBatchFrom"]),
        firstBatchTo: s(financial["firstBatchTo"]),
        firstPatchAmount: n(financial["firstPaymentAmount"]),
        lastBatchFrom: s(financial["lastBatchFrom"]),
        lastBatchTo: s(financial["lastBatchTo"]),
        lastPatchAmount: n(financial["lastPaymentAmount"])
      }));
      break;
    }
    case "PayByTask": {
      const sc = formValue["scopeContracting"] ?? {};
      const tasks = formValue["tasks"] ?? [];
      Object.assign(base, strip({
        jobTitleName: s(sc["jobTitle"]),
        startDate: s(sc["startDate"]),
        endDate: s(sc["endDate"]),
        trialPeriod: s(sc["trialPeriod"]),
        noticePeriod: s(sc["noticePeriod"]),
        tasks: tasks.map((t) => strip({
          taskTitle: s(t["taskTitle"]),
          workBrief: s(t["workBrief"]),
          taskStartDate: s(t["taskStartDate"]),
          taskAmount: n(t["taskAmount"]),
          filePath: s(t["filePath"])
        }))
      }));
      break;
    }
    case "Milestone": {
      const sc = formValue["scopeContracting"] ?? {};
      const stages = formValue["stages"] ?? [];
      Object.assign(base, strip({
        jobTitleName: s(sc["jobTitle"]),
        startDate: s(sc["startDate"]),
        endDate: s(sc["endDate"]),
        trialPeriod: s(sc["trialPeriod"]),
        noticePeriod: s(sc["noticePeriod"]),
        stages: stages.map((st) => strip({
          stageTitle: s(st["stageTitle"]),
          workBrief: s(st["workBrief"]),
          stageStartDate: s(st["stageStartDate"]),
          stageAmount: n(st["stageAmount"]),
          filePath: s(st["filePath"])
        }))
      }));
      break;
    }
    case "Employee": {
      const contracting = formValue["contracting"] ?? {};
      const workingTime = formValue["workingTime"] ?? {};
      const days = workingTime["workingDays"];
      Object.assign(base, strip({
        startDate: s(contracting["contractStartDate"]),
        contractDuration: s(contracting["contractDuration"]),
        trialPeriod: s(contracting["trialPeriod"]),
        typeOfWork: s(contracting["typeOfWork"]),
        vacationDays: n(contracting["vacationDays"]),
        noticePeriod: s(contracting["noticePeriod"]),
        numberOfWorkingHours: n(workingTime["numberOfWorkingHours"]),
        workingDays: Array.isArray(days) && days.length > 0 ? days : void 0,
        workingHoursFrom: s(workingTime["workingHoursFrom"]),
        workingHoursTo: s(workingTime["workingHoursTo"]),
        salary: n(workingTime["salary"]),
        currency: s(workingTime["currency"]),
        billingCycle: s(workingTime["billingCycle"]),
        includeAllowances: workingTime["allowances"] === true ? true : void 0
      }));
      break;
    }
  }
  return base;
}

// src/components/DashboardLayout/Contract/wizard/contract-wizard-shell/contract-wizard-shell.ts
function ContractWizardShellComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "span", 13);
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 3, "common.loading")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "wizard.loading"));
  }
}
function ContractWizardShellComponent_Conditional_25_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-employer-info", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.employerForm);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-contractor-info", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.contractorForm);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-scope-of-work", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.scopeForm);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-contracting", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.contractingForm);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 2, "wizard.steps.contracting"), " \u2014 ", \u0275\u0275pipeBind1(4, 4, "common.comingSoon"));
  }
}
function ContractWizardShellComponent_Conditional_25_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContractWizardShellComponent_Conditional_25_Case_5_Conditional_0_Template, 1, 1, "app-step-contracting", 17)(1, ContractWizardShellComponent_Conditional_25_Case_5_Conditional_1_Template, 5, 6, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.contractType === "FixedSalary" ? 0 : 1);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-step-financial", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.financialForm);
  }
}
function ContractWizardShellComponent_Conditional_25_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.comingSoon"));
  }
}
function ContractWizardShellComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 24)(3, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitError(), " ");
  }
}
function ContractWizardShellComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "main", 16);
    \u0275\u0275conditionalCreate(2, ContractWizardShellComponent_Conditional_25_Case_2_Template, 1, 1, "app-step-employer-info", 17)(3, ContractWizardShellComponent_Conditional_25_Case_3_Template, 1, 1, "app-step-contractor-info", 17)(4, ContractWizardShellComponent_Conditional_25_Case_4_Template, 1, 1, "app-step-scope-of-work", 17)(5, ContractWizardShellComponent_Conditional_25_Case_5_Template, 2, 1)(6, ContractWizardShellComponent_Conditional_25_Case_6_Template, 1, 1, "app-step-financial", 17)(7, ContractWizardShellComponent_Conditional_25_Case_7_Template, 4, 3, "div", 18);
    \u0275\u0275conditionalCreate(8, ContractWizardShellComponent_Conditional_25_Conditional_8_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "aside", 20)(10, "app-wizard-stepper", 21);
    \u0275\u0275listener("stepClicked", function ContractWizardShellComponent_Conditional_25_Template_app_wizard_stepper_stepClicked_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToStep($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "app-wizard-footer", 22);
    \u0275\u0275listener("back", function ContractWizardShellComponent_Conditional_25_Template_app_wizard_footer_back_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    })("next", function ContractWizardShellComponent_Conditional_25_Template_app_wizard_footer_next_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNext());
    })("saveDraft", function ContractWizardShellComponent_Conditional_25_Template_app_wizard_footer_saveDraft_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaveDraft());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.currentStepDef.formKey) === "employer" ? 2 : tmp_1_0 === "contractor" ? 3 : tmp_1_0 === "scopeOfWork" ? 4 : tmp_1_0 === "contracting" ? 5 : tmp_1_0 === "financial" ? 6 : 7);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.submitError() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("steps", ctx_r1.steps)("currentStep", ctx_r1.currentStep())("completedSteps", ctx_r1.completedSteps());
    \u0275\u0275advance();
    \u0275\u0275property("isFirst", ctx_r1.isFirst)("isLast", ctx_r1.isLast)("isSubmitting", ctx_r1.isSubmitting())("isSavingDraft", ctx_r1.isSavingDraft())("isEditMode", ctx_r1.isEditMode());
  }
}
var _ContractWizardShellComponent = class _ContractWizardShellComponent {
  constructor() {
    this.currentStep = signal(1, ...ngDevMode ? [{ debugName: "currentStep" }] : []);
    this.completedSteps = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "completedSteps" }] : []);
    this.steps = [];
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
    this.isSavingDraft = signal(false, ...ngDevMode ? [{ debugName: "isSavingDraft" }] : []);
    this.isLoadingEdit = signal(false, ...ngDevMode ? [{ debugName: "isLoadingEdit" }] : []);
    this.submitError = signal("", ...ngDevMode ? [{ debugName: "submitError" }] : []);
    this.isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
    this.contractId = signal(null, ...ngDevMode ? [{ debugName: "contractId" }] : []);
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.contractService = inject(ContractService);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
  }
  // ── Computed ──────────────────────────────────────────────────────
  get titleKey() {
    return this.isEditMode() ? CONTRACT_TYPE_EDIT_LABELS[this.contractType] : CONTRACT_TYPE_LABELS[this.contractType];
  }
  get totalSteps() {
    return this.steps.length;
  }
  get isFirst() {
    return this.currentStep() === 1;
  }
  get isLast() {
    return this.currentStep() === this.totalSteps;
  }
  get currentStepDef() {
    return this.steps[this.currentStep() - 1];
  }
  // ── Sub-form accessors ───────────────────────────────────────────
  get employerForm() {
    return this.parentForm.get("employer");
  }
  get contractorForm() {
    return this.parentForm.get("contractor");
  }
  get scopeForm() {
    return this.parentForm.get("scopeOfWork");
  }
  get contractingForm() {
    return this.parentForm.get("contracting");
  }
  get financialForm() {
    return this.parentForm.get("financial");
  }
  get workingTimeForm() {
    return this.parentForm.get("workingTime");
  }
  get scopeContractingForm() {
    return this.parentForm.get("scopeContracting");
  }
  get tasksArray() {
    return this.parentForm.get("tasks");
  }
  get stagesArray() {
    return this.parentForm.get("stages");
  }
  // ── Lifecycle ────────────────────────────────────────────────────
  ngOnInit() {
    this.steps = STEP_CONFIGS[this.contractType];
    this.buildParentForm();
    this.readQueryParams();
  }
  readQueryParams() {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      if (params["mode"] === "edit" && params["id"]) {
        this.isEditMode.set(true);
        this.contractId.set(params["id"]);
        this.loadForEdit(params["id"]);
      }
    });
  }
  // ── Form construction ────────────────────────────────────────────
  buildParentForm() {
    const base = {
      employer: this.buildEmployerGroup(),
      contractor: this.buildContractorGroup()
    };
    switch (this.contractType) {
      case "FixedSalary":
        base["scopeOfWork"] = this.buildScopeGroup();
        base["contracting"] = this.buildFixedSalaryContractingGroup();
        base["financial"] = this.buildFinancialGroup();
        break;
      case "PayByTask":
        base["scopeContracting"] = this.buildScopeContractingGroup();
        base["tasks"] = this.fb.array([this.buildTaskItem()]);
        break;
      case "Milestone":
        base["scopeContracting"] = this.buildScopeContractingGroup();
        base["stages"] = this.fb.array([this.buildStageItem()]);
        break;
      case "Employee":
        base["contracting"] = this.buildEmployeeContractingGroup();
        base["workingTime"] = this.buildWorkingTimeGroup();
        break;
    }
    this.parentForm = this.fb.group(base);
  }
  buildEmployerGroup() {
    return this.fb.group({
      entityName: ["", Validators.required],
      officialNumber: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      emailAddress: ["", [Validators.required, Validators.email]],
      address: [""],
      representative: ["", Validators.required],
      representativeRole: [""],
      representativeIdentity: [""],
      representativePhone: [""],
      representativeEmail: ["", [Validators.required, Validators.email]],
      representativeDescription: [""]
    });
  }
  buildContractorGroup() {
    return this.fb.group({
      contractorName: ["", Validators.required],
      nationality: ["", Validators.required],
      idNumber: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      emailAddress: ["", [Validators.required, Validators.email]],
      jobTitle: [""],
      address: [""],
      bankName: ["", Validators.required],
      iban: ["", Validators.required]
    });
  }
  buildScopeGroup() {
    return this.fb.group({
      jobTitle: ["", Validators.required],
      jobNumber: ["", Validators.required],
      jobDescription: [""]
    });
  }
  buildScopeContractingGroup() {
    return this.fb.group({
      jobTitle: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      trialPeriod: [""],
      noticePeriod: [""]
    });
  }
  buildFixedSalaryContractingGroup() {
    return this.fb.group({
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      trialPeriod: ["", Validators.required],
      rightToTerminateTrial: ["", Validators.required],
      rightToTerminateDuring: ["", Validators.required],
      rightToTerminate: ["", Validators.required],
      noticePeriod: [""]
    });
  }
  buildEmployeeContractingGroup() {
    return this.fb.group({
      contractStartDate: ["", Validators.required],
      contractDuration: [""],
      trialPeriod: ["", Validators.required],
      typeOfWork: ["", Validators.required],
      vacationDays: [null],
      noticePeriod: [""]
    });
  }
  buildFinancialGroup() {
    return this.fb.group({
      currency: ["", Validators.required],
      billingCycle: ["", Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      firstBatchFrom: ["", Validators.required],
      firstBatchTo: ["", Validators.required],
      firstPaymentAmount: [null, [Validators.required, Validators.min(1)]],
      lastBatchFrom: ["", Validators.required],
      lastBatchTo: ["", Validators.required],
      lastPaymentAmount: [null, [Validators.required, Validators.min(1)]]
    });
  }
  buildWorkingTimeGroup() {
    return this.fb.group({
      numberOfWorkingHours: [null],
      workingDays: [[]],
      workingHoursFrom: [""],
      workingHoursTo: [""],
      salary: [null, [Validators.required, Validators.min(1)]],
      currency: ["", Validators.required],
      billingCycle: ["", Validators.required],
      allowances: [false]
    });
  }
  buildTaskItem() {
    return this.fb.group({
      taskTitle: [""],
      workBrief: [""],
      taskStartDate: [""],
      taskAmount: [null, [Validators.required, Validators.min(0)]],
      filePath: [""]
    });
  }
  buildStageItem() {
    return this.fb.group({
      stageTitle: [""],
      workBrief: [""],
      stageStartDate: [""],
      stageAmount: [null, [Validators.required, Validators.min(0)]],
      filePath: [""]
    });
  }
  addTask() {
    this.tasksArray.push(this.buildTaskItem());
  }
  addStage() {
    this.stagesArray.push(this.buildStageItem());
  }
  removeTask(i) {
    if (this.tasksArray.length > 1)
      this.tasksArray.removeAt(i);
  }
  removeStage(i) {
    if (this.stagesArray.length > 1)
      this.stagesArray.removeAt(i);
  }
  // ── Edit mode ────────────────────────────────────────────────────
  loadForEdit(id) {
    this.isLoadingEdit.set(true);
    this.contractService.getContractById(id).subscribe({
      next: (contract) => {
        const mapped = contractToForm(contract, this.contractType);
        this.parentForm.patchValue(mapped);
        const allCompleted = new Set(this.steps.map((s2) => s2.number));
        this.completedSteps.set(allCompleted);
        this.isLoadingEdit.set(false);
      },
      error: () => {
        this.isLoadingEdit.set(false);
        this.snackBar.open("Failed to load contract for editing.", "OK", {
          duration: 4e3,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ["snack-warn"]
        });
      }
    });
  }
  // ── Step completion sync ─────────────────────────────────────────
  syncCompletionForStep(stepNumber) {
    const step = this.steps.find((s2) => s2.number === stepNumber);
    if (!step)
      return;
    const stepForm = this.parentForm.get(step.formKey);
    const isInvalid = stepForm instanceof FormGroup && stepForm.invalid || stepForm instanceof FormArray && stepForm.invalid;
    if (isInvalid) {
      this.completedSteps.update((set) => {
        const next = new Set(set);
        next.delete(stepNumber);
        return next;
      });
    }
  }
  // ── Navigation ───────────────────────────────────────────────────
  onNext() {
    const formKey = this.currentStepDef.formKey;
    const stepForm = this.parentForm.get(formKey);
    if (stepForm instanceof FormArray) {
      stepForm.markAllAsTouched();
      if (stepForm.invalid)
        return;
    } else if (stepForm instanceof FormGroup) {
      if (stepForm.invalid) {
        stepForm.markAllAsTouched();
        return;
      }
    }
    this.completedSteps.update((set) => /* @__PURE__ */ new Set([...set, this.currentStep()]));
    this.submitError.set("");
    if (this.isLast) {
      this.onSubmit();
    } else {
      this.currentStep.update((n2) => n2 + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  onBack() {
    if (this.currentStep() > 1) {
      this.syncCompletionForStep(this.currentStep());
      this.submitError.set("");
      this.currentStep.update((n2) => n2 - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  goToStep(n2) {
    if (n2 === this.currentStep())
      return;
    if (n2 < this.currentStep() || this.completedSteps().has(n2)) {
      this.syncCompletionForStep(this.currentStep());
      this.currentStep.set(n2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  // ── Save as Draft ────────────────────────────────────────────────
  onSaveDraft() {
    if (this.isSavingDraft())
      return;
    this.isSavingDraft.set(true);
    const payload = __spreadProps(__spreadValues({}, buildContractPayload(this.parentForm.value, this.contractType)), { statusId: 1 });
    const save$ = this.isEditMode() && this.contractId() ? this.contractService.updateContract(__spreadProps(__spreadValues({}, payload), { id: this.contractId() })) : this.contractService.saveContract(payload);
    save$.subscribe({
      next: () => {
        this.isSavingDraft.set(false);
        this.snackBar.open("Saved as draft.", "OK", {
          duration: 3e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      },
      error: (err) => {
        this.isSavingDraft.set(false);
        const msg = err?.error?.message ?? "Failed to save draft.";
        this.snackBar.open(msg, "OK", {
          duration: 4e3,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ["snack-warn"]
        });
      }
    });
  }
  // ── Submit ───────────────────────────────────────────────────────
  onSubmit() {
    if (this.isSubmitting())
      return;
    this.submitError.set("");
    this.isSubmitting.set(true);
    const payload = buildContractPayload(this.parentForm.value, this.contractType);
    const submit$ = this.isEditMode() && this.contractId() ? this.contractService.updateContract(__spreadProps(__spreadValues({}, payload), { id: this.contractId() })) : this.contractService.saveContract(payload);
    submit$.subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialog.open(SuccessDialogComponent, {
          width: "420px",
          disableClose: true,
          data: { contractType: this.contractType }
        });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(err?.error?.message ?? "Failed to save contract. Please try again.");
      }
    });
  }
  navigateBack() {
    this.router.navigate(["/dashboard/contracts"]);
  }
};
_ContractWizardShellComponent.\u0275fac = function ContractWizardShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContractWizardShellComponent)();
};
_ContractWizardShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractWizardShellComponent, selectors: [["app-contract-wizard-shell"]], inputs: { contractType: "contractType" }, decls: 26, vars: 21, consts: [[1, "wizard-page"], [1, "wizard-breadcrumb", 3, "aria-label"], ["role", "link", "tabindex", "0", 1, "breadcrumb__item", "breadcrumb__item--link", 3, "click", "keydown.enter"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "aria-hidden", "true", 1, "breadcrumb__sep"], ["d", "M4 2L8 6L4 10", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "breadcrumb__item"], ["aria-current", "page", 1, "breadcrumb__item", "breadcrumb__item--current"], [1, "wizard-heading"], ["type", "button", 1, "wizard-heading__back", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], ["d", "M12 4L7 10L12 16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wizard-heading__title"], ["aria-live", "polite", 1, "wizard-loading", 3, "aria-label"], ["aria-hidden", "true", 1, "wizard-spinner"], [1, "wizard-loading__text"], [1, "wizard-layout"], [1, "wizard-main"], [3, "formGroup"], [1, "step-placeholder"], ["role", "alert", "aria-live", "assertive", 1, "wizard-error"], [1, "wizard-aside"], [3, "stepClicked", "steps", "currentStep", "completedSteps"], [3, "back", "next", "saveDraft", "isFirst", "isLast", "isSubmitting", "isSavingDraft", "isEditMode"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true"], ["cx", "8", "cy", "8", "r", "7", "stroke", "currentColor", "stroke-width", "1.4"], ["d", "M8 5V8.5M8 11H8.01", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"]], template: function ContractWizardShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275listener("click", function ContractWizardShellComponent_Template_span_click_3_listener() {
      return ctx.navigateBack();
    })("keydown.enter", function ContractWizardShellComponent_Template_span_keydown_enter_3_listener() {
      return ctx.navigateBack();
    });
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
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 3);
    \u0275\u0275element(12, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("click", function ContractWizardShellComponent_Template_button_click_17_listener() {
      return ctx.navigateBack();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 9);
    \u0275\u0275element(20, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "h1", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, ContractWizardShellComponent_Conditional_24_Template, 6, 7, "div", 12);
    \u0275\u0275conditionalCreate(25, ContractWizardShellComponent_Conditional_25_Template, 12, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 9, "common.breadcrumb")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "contracts.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "wizard.selectContract"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 15, ctx.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 17, "common.back"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, ctx.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoadingEdit() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingEdit() ? 25 : -1);
  }
}, dependencies: [
  CommonModule,
  TranslocoModule,
  MatDialogModule,
  WizardStepperComponent,
  WizardFooterComponent,
  StepEmployerInfoComponent,
  StepContractorInfoComponent,
  StepScopeOfWorkComponent,
  StepContractingComponent,
  StepFinancialComponent,
  TranslocoPipe
], styles: ["\n\n.wizard-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 24px;\n  max-width: 1060px;\n  margin: 0 auto;\n  min-height: 100%;\n}\n.wizard-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  flex-wrap: wrap;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.breadcrumb__item--link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.breadcrumb__item--link[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-sub);\n}\n.breadcrumb__item--current[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.wizard-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.wizard-heading__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.wizard-heading__back[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.wizard-heading__back[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.wizard-heading__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.25;\n}\n.wizard-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n.wizard-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.wizard-aside[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  padding: 16px;\n  position: sticky;\n  top: 20px;\n}\n.wizard-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 80px 24px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n}\n.wizard-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_wizard-spin 0.7s linear infinite;\n}\n.wizard-loading__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n}\n@keyframes _ngcontent-%COMP%_wizard-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wizard-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: var(--functional-error-50);\n  border: 1px solid var(--functional-error-200);\n  color: var(--functional-error-700);\n  font-size: 13px;\n  font-weight: 500;\n}\n.step-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .wizard-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-aside[_ngcontent-%COMP%] {\n    order: -1;\n    position: static;\n  }\n  .wizard-heading__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .wizard-page[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=contract-wizard-shell.css.map */"] });
var ContractWizardShellComponent = _ContractWizardShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractWizardShellComponent, [{
    type: Component,
    args: [{ selector: "app-contract-wizard-shell", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      MatDialogModule,
      WizardStepperComponent,
      WizardFooterComponent,
      StepEmployerInfoComponent,
      StepContractorInfoComponent,
      StepScopeOfWorkComponent,
      StepContractingComponent,
      StepFinancialComponent
    ], template: `<div class="wizard-page">

  <!-- Breadcrumb -->
  <nav class="wizard-breadcrumb" aria-label="{{ 'common.breadcrumb' | transloco }}">
    <span class="breadcrumb__item breadcrumb__item--link"
          (click)="navigateBack()" role="link" tabindex="0"
          (keydown.enter)="navigateBack()">
      {{ 'contracts.title' | transloco }}
    </span>
    <svg class="breadcrumb__sep" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4 2L8 6L4 10" stroke="currentColor" stroke-width="1.4"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="breadcrumb__item">{{ 'wizard.selectContract' | transloco }}</span>
    <svg class="breadcrumb__sep" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4 2L8 6L4 10" stroke="currentColor" stroke-width="1.4"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="breadcrumb__item breadcrumb__item--current" aria-current="page">
      {{ titleKey | transloco }}
    </span>
  </nav>

  <!-- Page heading -->
  <div class="wizard-heading">
    <button type="button" class="wizard-heading__back"
            (click)="navigateBack()"
            [attr.aria-label]="'common.back' | transloco">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M12 4L7 10L12 16" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h1 class="wizard-heading__title">{{ titleKey | transloco }}</h1>
  </div>

  <!-- Loading overlay for edit mode -->
  @if (isLoadingEdit()) {
    <div class="wizard-loading" aria-live="polite" aria-label="{{ 'common.loading' | transloco }}">
      <span class="wizard-spinner" aria-hidden="true"></span>
      <span class="wizard-loading__text">{{ 'wizard.loading' | transloco }}</span>
    </div>
  }

  @if (!isLoadingEdit()) {

    <!-- Two-column layout: form (left) + stepper (right) -->
    <div class="wizard-layout">

      <!-- Left: step content -->
      <main class="wizard-main">

        @switch (currentStepDef.formKey) {

          @case ('employer') {
            <app-step-employer-info [formGroup]="employerForm" />
          }

          @case ('contractor') {
            <app-step-contractor-info [formGroup]="contractorForm" />
          }

          @case ('scopeOfWork') {
            <app-step-scope-of-work [formGroup]="scopeForm" />
          }

          @case ('contracting') {
            @if (contractType === 'FixedSalary') {
              <app-step-contracting [formGroup]="contractingForm" />
            } @else {
              <div class="step-placeholder">
                <p>{{ 'wizard.steps.contracting' | transloco }} \u2014 {{ 'common.comingSoon' | transloco }}</p>
              </div>
            }
          }

          @case ('financial') {
            <app-step-financial [formGroup]="financialForm" />
          }

          @default {
            <div class="step-placeholder">
              <p>{{ 'common.comingSoon' | transloco }}</p>
            </div>
          }

        }

        <!-- Submit error -->
        @if (submitError()) {
          <div class="wizard-error" role="alert" aria-live="assertive">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"/>
              <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round"/>
            </svg>
            {{ submitError() }}
          </div>
        }

      </main>

      <!-- Right: stepper panel -->
      <aside class="wizard-aside">
        <app-wizard-stepper
          [steps]="steps"
          [currentStep]="currentStep()"
          [completedSteps]="completedSteps()"
          (stepClicked)="goToStep($event)"
        />
      </aside>

    </div>

    <!-- Footer (full width, below the two columns) -->
    <app-wizard-footer
      [isFirst]="isFirst"
      [isLast]="isLast"
      [isSubmitting]="isSubmitting()"
      [isSavingDraft]="isSavingDraft()"
      [isEditMode]="isEditMode()"
      (back)="onBack()"
      (next)="onNext()"
      (saveDraft)="onSaveDraft()"
    />

  }

</div>
`, styles: ["/* src/components/DashboardLayout/Contract/wizard/contract-wizard-shell/contract-wizard-shell.css */\n.wizard-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 24px;\n  max-width: 1060px;\n  margin: 0 auto;\n  min-height: 100%;\n}\n.wizard-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  flex-wrap: wrap;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.breadcrumb__item--link {\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.breadcrumb__item--link:hover {\n  color: var(--ui-text-sub);\n}\n.breadcrumb__item--current {\n  color: var(--ui-text-main);\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.wizard-heading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.wizard-heading__back {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.wizard-heading__back:hover {\n  background: var(--ui-bg-subtle);\n}\n.wizard-heading__back:focus-visible {\n  outline: 2px solid var(--brand-primary-400);\n  outline-offset: 2px;\n}\n.wizard-heading__title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n  line-height: 1.25;\n}\n.wizard-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n.wizard-main {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.wizard-aside {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  padding: 16px;\n  position: sticky;\n  top: 20px;\n}\n.wizard-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 80px 24px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n}\n.wizard-spinner {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--ui-border);\n  border-top-color: var(--brand-primary-500);\n  border-radius: 50%;\n  animation: wizard-spin 0.7s linear infinite;\n}\n.wizard-loading__text {\n  font-size: 14px;\n  color: var(--ui-text-muted);\n}\n@keyframes wizard-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wizard-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: var(--functional-error-50);\n  border: 1px solid var(--functional-error-200);\n  color: var(--functional-error-700);\n  font-size: 13px;\n  font-weight: 500;\n}\n.step-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .wizard-layout {\n    grid-template-columns: 1fr;\n  }\n  .wizard-aside {\n    order: -1;\n    position: static;\n  }\n  .wizard-heading__title {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .wizard-page {\n    padding: 16px;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=contract-wizard-shell.css.map */\n"] }]
  }], null, { contractType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractWizardShellComponent, { className: "ContractWizardShellComponent", filePath: "src/components/dashboardlayout/contract/wizard/contract-wizard-shell/contract-wizard-shell.ts", lineNumber: 56 });
})();

export {
  ContractWizardShellComponent
};
//# sourceMappingURL=chunk-MBG5EB53.js.map
