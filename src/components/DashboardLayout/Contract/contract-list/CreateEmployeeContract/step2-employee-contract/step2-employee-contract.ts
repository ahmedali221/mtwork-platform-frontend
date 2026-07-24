import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step2-employee-contract',
  imports: [ CommonModule,RouterModule,RouterModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step2-employee-contract.html',
  styleUrls: ['./step2-employee-contract.css']
})
export class Step2EmployeeContractComponent  implements OnInit {

  @Input() parentForm!: FormGroup;
  contractorForm!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.contractorForm = this.fb.group({
      contractorName: ['', Validators.required],
      nationality: ['', Validators.required],
      idNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      address: [''],
      jobTitle: [''],
      bankName: ['', Validators.required],
      iban: ['', Validators.required]
    });

    // Add child form to parent
    if (!this.parentForm) {
      this.parentForm = this.fb.group({});
    }
    this.parentForm.addControl('contractor', this.contractorForm);
  }
}
