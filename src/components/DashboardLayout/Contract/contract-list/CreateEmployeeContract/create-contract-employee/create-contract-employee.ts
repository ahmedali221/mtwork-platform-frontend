import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContractService } from '../../../../../../services/contract-service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../../success-dialog-component/success-dialog-component';
import { Step1EmployeeContractComponent } from '../step1-employee-contract/step1-employee-contract';
import { Step2EmployeeContractComponent } from '../step2-employee-contract/step2-employee-contract';
import { Step3EmployeeContractComponent } from '../step3-employee-contract/step3-employee-contract';
import { Step4EmployeeContractComponent } from '../step4-employee-contract/step4-employee-contract';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-create-contract-employee',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    Step1EmployeeContractComponent,
    Step2EmployeeContractComponent,
    Step3EmployeeContractComponent,
    Step4EmployeeContractComponent
  ,
    TranslocoModule
  ],
  templateUrl: './create-contract-employee.html',
  styleUrl: './create-contract-employee.css'
})
export class CreateContractEmployee implements OnInit {
  formGroup!: FormGroup;

  isSubmitting = signal(false);
  submitError  = signal('');

  steps = [
    { number: 1, title: 'Employee information',      completed: false },
    { number: 2, title: 'Contractor information',    completed: false },
    { number: 3, title: 'Contracting',               completed: false },
    { number: 4, title: 'Working time & Salaries',   completed: false },
  ];

  currentStep = 1;
  totalSteps  = this.steps.length;

  private fb              = inject(FormBuilder);
  private contractService = inject(ContractService);
  private dialog          = inject(MatDialog);

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
  }

  onNext(): void {
    this.submitError.set('');
    const current = this.steps.find(s => s.number === this.currentStep);
    if (current) current.completed = true;

    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.onSubmit();
    }
  }

  onBack(): void {
    if (this.currentStep > 1) {
      this.submitError.set('');
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep) {
      this.currentStep = step;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private buildPayload(): object {
    const v = this.formGroup.value;
    const emp  = v['employee']          ?? {};
    const con  = v['contractor']        ?? {};
    const cont = v['contracting']       ?? {};
    const wt   = v['workingTime']       ?? {};
    const sal  = v['salariesAndBenefits'] ?? {};

    return {
      contractType: 'Employee',
      employer: {
        entityName:     emp['entityName'],
        officialNumber: emp['officialNumber'],
        phone:          emp['phoneNumber'],
        email:          emp['emailAddress'],
        address:        emp['address'],
      },
      empoleeOrContractor: {
        name:        con['contractorName'],
        role:        con['jobTitle'] ?? '',
        email:       con['emailAddress'],
        phone:       con['phoneNumber'],
        address:     con['address'],
        avatar:      '',
        nationality: con['nationality'],
        idNumber:    con['idNumber'],
        bankName:    con['bankName'],
        iban:        con['iban'],
      },
      startDate:           cont['contractStartDate'] ?? '',
      contractDuration:    cont['contractDuration'],
      trialPeriod:         cont['trialPeriod'],
      typeOfWork:          cont['typeOfWork'],
      vacationDays:        cont['vacationDays'],
      noticePeriod:        cont['noticePeriod'],
      numberOfWorkingHours: wt['WorkingHoursNum'],
      workingDays:         wt['SelectedWorkingDays'],
      workingHours:        wt['SelectedWorkingHours'],
      salary:              sal['salary'],
      currency:            sal['SelectedCurrency'],
      billingCycle:        sal['SelectedBillingCycle'],
      includeAllowances:   !!sal['Allowances'],
    };
  }

  onSubmit(): void {
    if (this.isSubmitting()) return;
    this.submitError.set('');
    this.isSubmitting.set(true);

    this.contractService.saveContract(this.buildPayload() as any).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialog.open(SuccessDialogComponent, {
          width: '400px',
          disableClose: true,
          data: { contractType: 'Employee' },
        });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        const msg = err?.error?.message ?? err?.message ?? 'Failed to create contract. Please try again.';
        this.submitError.set(msg);
      },
    });
  }
}
