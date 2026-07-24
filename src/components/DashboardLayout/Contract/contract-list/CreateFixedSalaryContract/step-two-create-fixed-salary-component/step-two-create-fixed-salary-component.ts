import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-two-create-fixed-salary-component',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step-two-create-fixed-salary-component.html',
  styleUrl: './step-two-create-fixed-salary-component.css'
})
export class StepTwoCreateFixedSalaryComponent  implements OnInit{

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
