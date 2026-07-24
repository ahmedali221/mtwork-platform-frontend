import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step3-employee-contract',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ,
    TranslocoModule
  ],
  templateUrl: './step3-employee-contract.html',
  styleUrls: ['./step3-employee-contract.css'],
})
export class Step3EmployeeContractComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  ContractingForm!: FormGroup;

  // Dropdown options
  ContractDurationOptions = ['1 month', '3 months', '6 months', '1 year', 'Indefinite'];
  TypeOfWorkOptions = ['Full-time', 'Part-time', 'Freelance', 'Temporary'];
  WhoCanTerminateOptions = ['Employer', 'Employee', 'Both'];

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.ContractingForm = this.fb.group({
      contractStartDate: ['', Validators.required],
      contractDuration: ['', Validators.required],
      trialPeriod: ['', Validators.required],
      typeOfWork: ['', Validators.required],
      vacationDays: ['', Validators.required],
      whoCanTerminateDuringTrial: ['', Validators.required],
      whoCanTerminate: ['', Validators.required],
      noticePeriod: ['', Validators.required],
    });

    if (this.parentForm) {
      this.parentForm.addControl('contracting', this.ContractingForm);
    }
  }
}
