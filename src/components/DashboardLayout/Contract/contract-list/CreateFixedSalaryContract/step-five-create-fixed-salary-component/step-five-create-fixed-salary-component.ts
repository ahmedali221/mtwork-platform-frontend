import { Component, OnInit ,Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step-five-create-fixed-salary-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step-five-create-fixed-salary-component.html',
  styleUrl: './step-five-create-fixed-salary-component.css'
})
export class StepFiveCreateFixedSalaryComponent implements OnInit {
   @Input() parentForm!: FormGroup;
  FinincialCompensationForm!: FormGroup;

  private fb = inject(FormBuilder);
   ngOnInit(): void {
    this.initializeForm();}


  initializeForm(): void {
    this.FinincialCompensationForm = this.fb.group({
      // Financial Compensation
      currency: ['', Validators.required],
      billingCycle: ['', Validators.required],
      amount: ['', Validators.required],

      // First Batch
      firstBatchFrom: ['', Validators.required],
      firstBatchTo: ['', Validators.required],
      firstPaymentAmount: ['', Validators.required],

      // Last Batch
      lastBatchFrom: ['', Validators.required],
      lastBatchTo: ['', Validators.required],
      lastPaymentAmount: ['', Validators.required]
    });

    // Attach to parent so the wizard collects this step's data on submit
    if (this.parentForm) {
      this.parentForm.addControl('financialCompensation', this.FinincialCompensationForm);
    }
  }

  currencies = [
    { value: 'usd', label: 'USD - US Dollar' },
    { value: 'egp', label: 'EGP - Egyptian Pound' },
    { value: 'eur', label: 'EUR - Euro' },
    { value: 'gbp', label: 'GBP - British Pound' }
  ];

  billingCycles = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'semi-annual', label: 'Semi-Annual' },
    { value: 'annual', label: 'Annual' }
  ];


}
