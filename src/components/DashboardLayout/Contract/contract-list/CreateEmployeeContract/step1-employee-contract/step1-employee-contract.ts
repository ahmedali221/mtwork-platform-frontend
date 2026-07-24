import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step1-employee-contract',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step1-employee-contract.html',
  styleUrls: ['./step1-employee-contract.css']
})
export class Step1EmployeeContractComponent implements OnInit {
@Input() parentForm!: FormGroup;
  employeeForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    // If navigated to directly, ensure parentForm exists to avoid errors
    if (!this.parentForm) {
      this.parentForm = this.fb.group({});
    }
    this.employeeForm = this.fb.group({
      entityName: ['', Validators.required],
      officialNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      address: [''],
      representative: ['', Validators.required],
      representativeSecond: ['', Validators.required],
      representativeIdentity: [''],
      representativePhone: [''],
      representativeEmail: ['', [Validators.required, Validators.email]],
      representativeDescription: ['']
    });

    this.parentForm.addControl('employee', this.employeeForm);
  }
}
