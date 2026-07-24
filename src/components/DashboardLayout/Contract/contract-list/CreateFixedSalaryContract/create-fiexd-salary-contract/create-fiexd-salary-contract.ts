import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContractService } from '../../../../../../services/contract-service';
import { SuccessDialogComponent } from '../../../success-dialog-component/success-dialog-component';
import { StepOneCreateFixedSalaryComponent } from '../step-one-create-fixed-salary-component/step-one-create-fixed-salary-component';
import { StepTwoCreateFixedSalaryComponent } from '../step-two-create-fixed-salary-component/step-two-create-fixed-salary-component';
import { StepThreeCreateFixedSalaryComponent } from '../step-three-create-fixed-salary-component/step-three-create-fixed-salary-component';
import { StepFourCreateFixedSalaryComponent } from '../step-four-create-fixed-salary-component/step-four-create-fixed-salary-component';
import { StepFiveCreateFixedSalaryComponent } from '../step-five-create-fixed-salary-component/step-five-create-fixed-salary-component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-create-fiexd-salary-contract',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    RouterModule,
    StepOneCreateFixedSalaryComponent,
    StepTwoCreateFixedSalaryComponent,
    StepThreeCreateFixedSalaryComponent,
    StepFourCreateFixedSalaryComponent,
    StepFiveCreateFixedSalaryComponent,
  
    TranslocoModule
  ],
  templateUrl: './create-fiexd-salary-contract.html',
  styleUrls: ['./create-fiexd-salary-contract.css']
})
export class CreateFiexdSalaryContractComponent implements OnInit {

  private fb              = inject(FormBuilder);
  private contractService = inject(ContractService);
  private dialog          = inject(MatDialog);

  formGroup!: FormGroup;

  isSubmitting = signal(false);
  submitError  = signal('');

  steps = [
    { number: 1, title: 'Employee information',   completed: false },
    { number: 2, title: 'Contractor information', completed: false },
    { number: 3, title: 'Scope of work',          completed: false },
    { number: 4, title: 'Contracting',            completed: false },
    { number: 5, title: 'Financial compensation', completed: false },
  ];

  currentStep = 1;
  readonly totalSteps = this.steps.length;

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
    const target = this.steps.find(s => s.number === step);
    if (target && (target.completed || step === this.currentStep)) {
      this.currentStep = step;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private buildPayload(): object {
    const v    = this.formGroup.value;
    const emp  = v['employee']               ?? {};
    const con  = v['contractor']             ?? {};
    const sw   = v['scopeOfWork']            ?? {};
    const cont = v['contracting']            ?? {};
    const fin  = v['financialCompensation']  ?? {};

    return {
      contractType: 'FixedSalary',
      employer: {
        entityName:     emp['entityName'],
        officialNumber: emp['officialNumber'],
        phone:          emp['phoneNumber'],
        email:          emp['emailAddress'],
        address:        emp['address'],
      },
      empoleeOrContractor: {
        name:        con['contractorName'],
        role:        con['jobTitle'] ?? sw['jobTitle'] ?? '',
        email:       con['emailAddress'],
        phone:       con['phoneNumber'],
        address:     con['address'],
        avatar:      '',
        nationality: con['nationality'],
        idNumber:    con['idNumber'],
        bankName:    con['bankName'],
        iban:        con['iban'],
      },
      description:    sw['jobDescription'],
      startDate:      cont['startDate'] ?? '',
      endDate:        cont['endDate']   ?? '',
      trialPeriod:    cont['trialPeriod'],
      noticePeriod:   cont['noticePeriod'],
      salary:               fin['amount'],
      currency:             fin['currency'],
      billingCycle:         fin['billingCycle'],
      paymentType:          'firstPatch',
      firstBatchFrom:       fin['firstBatchFrom'],
      firstBatchTo:         fin['firstBatchTo'],
      firstPaymentAmount:   fin['firstPaymentAmount'],
      lastBatchFrom:        fin['lastBatchFrom'],
      lastBatchTo:          fin['lastBatchTo'],
      lastPaymentAmount:    fin['lastPaymentAmount'],
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
          data: { contractType: 'Fixed Salary' },
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
