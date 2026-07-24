import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@ngneat/transloco';

// IMPORTANT: Replace this with the actual path and class name of your MutSelectComponent
// For example:

@Component({
  selector: 'app-step3pay-by-task',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule
  ,
    TranslocoModule
  ],
  templateUrl: './step3pay-by-task.html',
  styleUrls: ['./step3pay-by-task.css']
})
export class Step3payByTaskComponent implements OnInit {

  TerminationOptions: string[] = ['Either Party', 'Employer Only', 'Employee Only'];
  CurrencyOptions: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

  @Input() parentForm!: FormGroup;
  scopeForm!: FormGroup;
  ContractingForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    // Initialize scopeForm
    this.scopeForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobNumber: ['', Validators.required],
      jobDescription: ['']
    });

    // Initialize ContractingForm
    this.ContractingForm = this.fb.group({
      contractStartDate: [''],
      contractEndDate: [''],
      // Corrected form control name to match HTML
      whoCanToTerminateContract: ['', Validators.required],
      // Corrected form control name to match HTML
      SelectedCurrency: ['', Validators.required]
    });

    // Attach these forms to the parent form
    this.parentForm.addControl('scopeOfWork', this.scopeForm);
    this.parentForm.addControl('contracting', this.ContractingForm);
  }
}