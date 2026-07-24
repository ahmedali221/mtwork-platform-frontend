import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contract } from '../../../../../../models/contract-models';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-three-create-fixed-salary-component',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,
    TranslocoModule
  ],
  templateUrl: './step-three-create-fixed-salary-component.html',
  styleUrl: './step-three-create-fixed-salary-component.css'
})
export class StepThreeCreateFixedSalaryComponent implements OnInit  {

  @Input() parentForm!: FormGroup;
  scopeForm!: FormGroup;


  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.scopeForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobNumber: ['', Validators.required],
      jobDescription: ['']
    });


    // Attach this form to the parent form
    this.parentForm.addControl('scopeOfWork', this.scopeForm);
  }
}
