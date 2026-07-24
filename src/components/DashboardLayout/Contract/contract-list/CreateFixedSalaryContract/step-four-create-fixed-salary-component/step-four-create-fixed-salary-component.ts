import { CommonModule } from '@angular/common';
import { Component,OnInit,Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-four-create-fixed-salary-component',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step-four-create-fixed-salary-component.html',
  styleUrl: './step-four-create-fixed-salary-component.css'
})
export class StepFourCreateFixedSalaryComponent implements OnInit {
@Input() parentForm!: FormGroup;
  contractingForm!: FormGroup;

  terminationOptions = [
    { value: 'employer', label: 'Employer' },
    { value: 'contractor', label: 'Contractor' },
    { value: 'both', label: 'Both' }
  ];

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.contractingForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      trialPeriod: ['', Validators.required],
      rightToTerminateTrial: ['', Validators.required],
      rightToTerminateDuring: ['', Validators.required],
      rightToTerminate: ['', Validators.required],
      noticePeriod: ['']
    });

    // Attach this step’s form to the main parent form
    this.parentForm.addControl('contracting', this.contractingForm);
  }
}

