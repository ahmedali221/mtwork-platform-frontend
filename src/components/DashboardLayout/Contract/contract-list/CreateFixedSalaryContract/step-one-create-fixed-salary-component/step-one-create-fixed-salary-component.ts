import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step-one-create-fixed-salary-component',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step-one-create-fixed-salary-component.html',
  styleUrls: ['./step-one-create-fixed-salary-component.css']
})
export class StepOneCreateFixedSalaryComponent  implements OnInit{
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
