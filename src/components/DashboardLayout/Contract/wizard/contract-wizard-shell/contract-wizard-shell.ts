import {
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';

import {
  ContractType,
  CONTRACT_TYPE_LABELS,
  CONTRACT_TYPE_EDIT_LABELS,
  STEP_CONFIGS,
  StepDefinition,
} from '../wizard.types';

import { WizardStepperComponent }       from '../wizard-stepper/wizard-stepper';
import { WizardFooterComponent }         from '../wizard-footer/wizard-footer';
import { StepEmployerInfoComponent }     from '../steps/step-employer-info/step-employer-info';
import { StepContractorInfoComponent }   from '../steps/step-contractor-info/step-contractor-info';
import { StepScopeOfWorkComponent }      from '../steps/step-scope-of-work/step-scope-of-work';
import { StepContractingComponent }      from '../steps/step-contracting/step-contracting';
import { StepFinancialComponent }        from '../steps/step-financial/step-financial';

import { ContractService }        from '../../../../../services/contract-service';
import { SuccessDialogComponent } from '../../success-dialog-component/success-dialog-component';

import { contractToForm }      from '../../utils/contract-form.utils';
import { buildContractPayload } from '../../utils/contract-payload.builder';

@Component({
  selector: 'app-contract-wizard-shell',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './contract-wizard-shell.html',
  styleUrls: ['./contract-wizard-shell.css'],
})
export class ContractWizardShellComponent implements OnInit {

  @Input() contractType!: ContractType;

  // ── Navigation state ────────────────────────────────────────────
  currentStep    = signal(1);
  completedSteps = signal<Set<number>>(new Set());
  steps: StepDefinition[] = [];

  // ── Async state ──────────────────────────────────────────────────
  isSubmitting  = signal(false);
  isSavingDraft = signal(false);
  isLoadingEdit = signal(false);
  submitError   = signal('');

  // ── Mode ─────────────────────────────────────────────────────────
  isEditMode = signal(false);
  contractId = signal<string | null>(null);

  // ── Form ─────────────────────────────────────────────────────────
  parentForm!: FormGroup;

  // ── Injections ───────────────────────────────────────────────────
  private fb              = inject(FormBuilder);
  private router          = inject(Router);
  private route           = inject(ActivatedRoute);
  private contractService = inject(ContractService);
  private dialog          = inject(MatDialog);
  private snackBar        = inject(MatSnackBar);

  // ── Computed ──────────────────────────────────────────────────────
  get titleKey(): string {
    return this.isEditMode()
      ? CONTRACT_TYPE_EDIT_LABELS[this.contractType]
      : CONTRACT_TYPE_LABELS[this.contractType];
  }

  get totalSteps(): number  { return this.steps.length; }
  get isFirst():    boolean  { return this.currentStep() === 1; }
  get isLast():     boolean  { return this.currentStep() === this.totalSteps; }

  get currentStepDef(): StepDefinition {
    return this.steps[this.currentStep() - 1];
  }

  // ── Sub-form accessors ───────────────────────────────────────────
  get employerForm():         FormGroup { return this.parentForm.get('employer')         as FormGroup; }
  get contractorForm():       FormGroup { return this.parentForm.get('contractor')       as FormGroup; }
  get scopeForm():            FormGroup { return this.parentForm.get('scopeOfWork')      as FormGroup; }
  get contractingForm():      FormGroup { return this.parentForm.get('contracting')      as FormGroup; }
  get financialForm():        FormGroup { return this.parentForm.get('financial')        as FormGroup; }
  get workingTimeForm():      FormGroup { return this.parentForm.get('workingTime')      as FormGroup; }
  get scopeContractingForm(): FormGroup { return this.parentForm.get('scopeContracting') as FormGroup; }
  get tasksArray():           FormArray  { return this.parentForm.get('tasks')           as FormArray; }
  get stagesArray():          FormArray  { return this.parentForm.get('stages')          as FormArray; }

  // ── Lifecycle ────────────────────────────────────────────────────
  ngOnInit(): void {
    this.steps = STEP_CONFIGS[this.contractType];
    this.buildParentForm();
    this.readQueryParams();
  }

  private readQueryParams(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      if (params['mode'] === 'edit' && params['id']) {
        this.isEditMode.set(true);
        this.contractId.set(params['id']);
        this.loadForEdit(params['id']);
      }
    });
  }

  // ── Form construction ────────────────────────────────────────────
  private buildParentForm(): void {
    const base: Record<string, FormGroup | FormArray> = {
      employer:   this.buildEmployerGroup(),
      contractor: this.buildContractorGroup(),
    };

    switch (this.contractType) {
      case 'FixedSalary':
        base['scopeOfWork']  = this.buildScopeGroup();
        base['contracting']  = this.buildFixedSalaryContractingGroup();
        base['financial']    = this.buildFinancialGroup();
        break;

      case 'PayByTask':
        base['scopeContracting'] = this.buildScopeContractingGroup();
        base['tasks']            = this.fb.array([this.buildTaskItem()]);
        break;

      case 'Milestone':
        base['scopeContracting'] = this.buildScopeContractingGroup();
        base['stages']           = this.fb.array([this.buildStageItem()]);
        break;

      case 'Employee':
        base['contracting']  = this.buildEmployeeContractingGroup();
        base['workingTime']  = this.buildWorkingTimeGroup();
        break;
    }

    this.parentForm = this.fb.group(base);
  }

  private buildEmployerGroup(): FormGroup {
    return this.fb.group({
      entityName:                ['', Validators.required],
      officialNumber:            ['', Validators.required],
      phoneNumber:               ['', Validators.required],
      emailAddress:              ['', [Validators.required, Validators.email]],
      address:                   [''],
      representative:            ['', Validators.required],
      representativeRole:        [''],
      representativeIdentity:    [''],
      representativePhone:       [''],
      representativeEmail:       ['', [Validators.required, Validators.email]],
      representativeDescription: [''],
    });
  }

  private buildContractorGroup(): FormGroup {
    return this.fb.group({
      contractorName: ['', Validators.required],
      nationality:    ['', Validators.required],
      idNumber:       ['', Validators.required],
      phoneNumber:    ['', Validators.required],
      emailAddress:   ['', [Validators.required, Validators.email]],
      jobTitle:       [''],
      address:        [''],
      bankName:       ['', Validators.required],
      iban:           ['', Validators.required],
    });
  }

  private buildScopeGroup(): FormGroup {
    return this.fb.group({
      jobTitle:       ['', Validators.required],
      jobNumber:      ['', Validators.required],
      jobDescription: [''],
    });
  }

  private buildScopeContractingGroup(): FormGroup {
    return this.fb.group({
      jobTitle:     ['', Validators.required],
      startDate:    ['', Validators.required],
      endDate:      ['', Validators.required],
      trialPeriod:  [''],
      noticePeriod: [''],
    });
  }

  private buildFixedSalaryContractingGroup(): FormGroup {
    return this.fb.group({
      startDate:               ['', Validators.required],
      endDate:                 ['', Validators.required],
      trialPeriod:             ['', Validators.required],
      rightToTerminateTrial:   ['', Validators.required],
      rightToTerminateDuring:  ['', Validators.required],
      rightToTerminate:        ['', Validators.required],
      noticePeriod:            [''],
    });
  }

  private buildEmployeeContractingGroup(): FormGroup {
    return this.fb.group({
      contractStartDate: ['', Validators.required],
      contractDuration:  [''],
      trialPeriod:       ['', Validators.required],
      typeOfWork:        ['', Validators.required],
      vacationDays:      [null as number | null],
      noticePeriod:      [''],
    });
  }

  private buildFinancialGroup(): FormGroup {
    return this.fb.group({
      currency:           ['', Validators.required],
      billingCycle:       ['', Validators.required],
      amount:             [null as number | null, [Validators.required, Validators.min(1)]],
      firstBatchFrom:     ['', Validators.required],
      firstBatchTo:       ['', Validators.required],
      firstPaymentAmount: [null as number | null, [Validators.required, Validators.min(1)]],
      lastBatchFrom:      ['', Validators.required],
      lastBatchTo:        ['', Validators.required],
      lastPaymentAmount:  [null as number | null, [Validators.required, Validators.min(1)]],
    });
  }

  private buildWorkingTimeGroup(): FormGroup {
    return this.fb.group({
      numberOfWorkingHours: [null as number | null],
      workingDays:          [[] as string[]],
      workingHoursFrom:     [''],
      workingHoursTo:       [''],
      salary:               [null as number | null, [Validators.required, Validators.min(1)]],
      currency:             ['', Validators.required],
      billingCycle:         ['', Validators.required],
      allowances:           [false],
    });
  }

  buildTaskItem(): FormGroup {
    return this.fb.group({
      taskTitle:     [''],
      workBrief:     [''],
      taskStartDate: [''],
      taskAmount:    [null as number | null, [Validators.required, Validators.min(0)]],
      filePath:      [''],
    });
  }

  buildStageItem(): FormGroup {
    return this.fb.group({
      stageTitle:     [''],
      workBrief:      [''],
      stageStartDate: [''],
      stageAmount:    [null as number | null, [Validators.required, Validators.min(0)]],
      filePath:       [''],
    });
  }

  addTask():              void { this.tasksArray.push(this.buildTaskItem()); }
  addStage():             void { this.stagesArray.push(this.buildStageItem()); }
  removeTask(i: number):  void { if (this.tasksArray.length  > 1) this.tasksArray.removeAt(i); }
  removeStage(i: number): void { if (this.stagesArray.length > 1) this.stagesArray.removeAt(i); }

  // ── Edit mode ────────────────────────────────────────────────────
  private loadForEdit(id: string): void {
    this.isLoadingEdit.set(true);
    this.contractService.getContractById(id).subscribe({
      next: (contract) => {
        const mapped = contractToForm(contract, this.contractType);
        this.parentForm.patchValue(mapped);
        const allCompleted = new Set(this.steps.map(s => s.number));
        this.completedSteps.set(allCompleted);
        this.isLoadingEdit.set(false);
      },
      error: () => {
        this.isLoadingEdit.set(false);
        this.snackBar.open('Failed to load contract for editing.', 'OK', {
          duration: 4000, horizontalPosition: 'center', verticalPosition: 'top',
          panelClass: ['snack-warn'],
        });
      },
    });
  }

  // ── Step completion sync ─────────────────────────────────────────
  private syncCompletionForStep(stepNumber: number): void {
    const step = this.steps.find(s => s.number === stepNumber);
    if (!step) return;
    const stepForm = this.parentForm.get(step.formKey);
    const isInvalid =
      (stepForm instanceof FormGroup && stepForm.invalid) ||
      (stepForm instanceof FormArray && stepForm.invalid);
    if (isInvalid) {
      this.completedSteps.update(set => {
        const next = new Set(set);
        next.delete(stepNumber);
        return next;
      });
    }
  }

  // ── Navigation ───────────────────────────────────────────────────
  onNext(): void {
    const formKey  = this.currentStepDef.formKey;
    const stepForm = this.parentForm.get(formKey);

    if (stepForm instanceof FormArray) {
      stepForm.markAllAsTouched();
      if (stepForm.invalid) return;
    } else if (stepForm instanceof FormGroup) {
      if (stepForm.invalid) {
        stepForm.markAllAsTouched();
        return;
      }
    }

    this.completedSteps.update(set => new Set([...set, this.currentStep()]));
    this.submitError.set('');

    if (this.isLast) {
      this.onSubmit();
    } else {
      this.currentStep.update(n => n + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onBack(): void {
    if (this.currentStep() > 1) {
      this.syncCompletionForStep(this.currentStep());
      this.submitError.set('');
      this.currentStep.update(n => n - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(n: number): void {
    if (n === this.currentStep()) return;
    if (n < this.currentStep() || this.completedSteps().has(n)) {
      this.syncCompletionForStep(this.currentStep());
      this.currentStep.set(n);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ── Save as Draft ────────────────────────────────────────────────
  onSaveDraft(): void {
    if (this.isSavingDraft()) return;
    this.isSavingDraft.set(true);

    const payload = { ...buildContractPayload(this.parentForm.value, this.contractType), statusId: 1 };

    const save$ = this.isEditMode() && this.contractId()
      ? this.contractService.updateContract({ ...payload, id: this.contractId()! } as any)
      : this.contractService.saveContract(payload as any);

    save$.subscribe({
      next: () => {
        this.isSavingDraft.set(false);
        this.snackBar.open('Saved as draft.', 'OK', {
          duration: 3000, horizontalPosition: 'center', verticalPosition: 'top',
        });
        // Stay in wizard — do NOT redirect
      },
      error: (err) => {
        this.isSavingDraft.set(false);
        const msg = err?.error?.message ?? 'Failed to save draft.';
        this.snackBar.open(msg, 'OK', {
          duration: 4000, horizontalPosition: 'center', verticalPosition: 'top',
          panelClass: ['snack-warn'],
        });
      },
    });
  }

  // ── Submit ───────────────────────────────────────────────────────
  onSubmit(): void {
    if (this.isSubmitting()) return;
    this.submitError.set('');
    this.isSubmitting.set(true);

    const payload = buildContractPayload(this.parentForm.value, this.contractType);

    const submit$ = this.isEditMode() && this.contractId()
      ? this.contractService.updateContract({ ...payload, id: this.contractId()! } as any)
      : this.contractService.saveContract(payload as any);

    submit$.subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialog.open(SuccessDialogComponent, {
          width: '420px',
          disableClose: true,
          data: { contractType: this.contractType },
        });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(err?.error?.message ?? 'Failed to save contract. Please try again.');
      },
    });
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/contracts']);
  }
}
