import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/select';
import { MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import{MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step4-employee-contract',
  imports: [CommonModule,MatSlideToggleModule ,RouterModule,ReactiveFormsModule, MatSelectModule,MatFormField,MatFormFieldModule,
    TranslocoModule
  ],
  templateUrl: './step4-employee-contract.html',
  styleUrls: ['./step4-employee-contract.css']
})
export class Step4EmployeeContractComponent implements OnInit {
  WorkingDaysOptions: string[] = ['Sunday to Thursday', 'Monday to Friday', 'Custom'];
  WorkingHoursOptions: string[] = ['Full-Time', 'Part-Time', 'Contract'];


 CurrancyOptions: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AED'];
 BillingCycleOptions: string[] = ['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Annually'];


  @Input() parentForm!: FormGroup;
  WorkingTimeForm!: FormGroup;

  SalariesAndBenefitsForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {

    // Initialize WorkingTimeForm
    this.WorkingTimeForm = this.fb.group({
      WorkingHoursNum: ['', Validators.required],
      SelectedWorkingDays: ['', Validators.required],
      SelectedWorkingHours: ['',Validators.required]
    });

    // Initialize SalariesAndBenefitsForm
    this.SalariesAndBenefitsForm = this.fb.group({
      salary: ['', Validators.required],
      Allowances: [''],
      SelectedCurrency: ['',Validators.required],
      SelectedBillingCycle: ['', Validators.required],
    });

    // Initialize ContractingForm
   

    // Attach these forms to the parent form
    this.parentForm.addControl('workingTime', this.WorkingTimeForm);
    this.parentForm.addControl('salariesAndBenefits', this.SalariesAndBenefitsForm);
  }
}
