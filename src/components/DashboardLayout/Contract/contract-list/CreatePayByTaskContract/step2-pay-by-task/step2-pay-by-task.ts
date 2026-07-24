import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step2-pay-by-task',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step2-pay-by-task.html',
  styleUrls: ['./step2-pay-by-task.css']
})
export class Step2PayByTaskComponent  implements OnInit   {

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
