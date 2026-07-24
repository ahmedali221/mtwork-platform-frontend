import { ContractService } from './../../../../../../services/contract-service';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
//import Steps components 
import { Step1PayByTaskComponent } from '../../CreatePayByTaskContract/step1-pay-by-task/step1-pay-by-task';
import { Step2PayByTaskComponent } from '../../CreatePayByTaskContract/step2-pay-by-task/step2-pay-by-task';
import { Step3payByTaskComponent } from '../../CreatePayByTaskContract/step3pay-by-task/step3pay-by-task';
import { Step4PayByTaskComponent } from '../../CreatePayByTaskContract/step4-pay-by-task/step4-pay-by-task';
import { Contract } from '../../../../../../models/contract-models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../../success-dialog-component/success-dialog-component';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-create-paytask-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatBadgeModule,
    MatDialogModule,
    Step1PayByTaskComponent,
    Step2PayByTaskComponent,
    Step3payByTaskComponent,
    Step4PayByTaskComponent
  ,
    TranslocoModule
  ],
  templateUrl: './create-paytask-contact.html',
  styleUrls: ['./create-paytask-contact.css']
})
export class CreatePaytaskContactComponent implements OnInit {

  formGroup!: FormGroup;

  isSubmitting = signal(false);
  submitError  = signal('');

  steps = [
    { number: 1, title: 'Employee information', completed: false },
    { number: 2, title: 'Contractor information', completed: false },
    { number: 3, title: 'Scope&Contracting', completed: false },
    { number: 4, title: 'Add task', completed: false },
  
  ];
    currentStep = 1;
  totalSteps = this.steps.length;

  private fb = inject(FormBuilder);
  private contractService = inject(ContractService);
  private dialog = inject(MatDialog);

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
    const v    = this.formGroup.value;
    const emp  = v['employee']    ?? {};
    const con  = v['contractor']  ?? {};
    const sw   = v['scopeOfWork'] ?? {};
    const cont = v['contracting'] ?? {};
    const t1   = v['Task1Form']   ?? {};
    const t2   = v['Task2Form']   ?? {};

    return {
      contractType: 'PayByTask',
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
      description:  sw['jobDescription'],
      startDate:    cont['startDate'] ?? '',
      endDate:      cont['endDate']   ?? '',
      trialPeriod:  cont['trialPeriod'],
      noticePeriod: cont['noticePeriod'],
      paymentType:  'task',
      // Task details mapped as description if API doesn't have task array
      terms: [t1, t2].filter(t => t['taskTitle']).map((t: any) =>
        `${t['taskTitle']}: ${t['taskDesc'] ?? ''} (${t['taskAmount'] ?? ''})`
      ).join(' | '),
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
          data: { contractType: 'Pay By Task' },
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
