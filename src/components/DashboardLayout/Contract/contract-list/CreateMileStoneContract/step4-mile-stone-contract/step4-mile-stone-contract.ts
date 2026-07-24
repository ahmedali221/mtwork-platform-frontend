import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step4-mile-stone-contract',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,MatIconModule,
    TranslocoModule
  ],
  templateUrl: './step4-mile-stone-contract.html',
  styleUrls: ['./step4-mile-stone-contract.css']
})
export class Step4MileStoneContractComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  Stage1Form!: FormGroup;
  Stage2Form!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.Stage1Form = this.fb.group({
      StageTitle: [''],
      workBrief: [''],
      StageStartDate: [''],
      StageAmount: [0, [Validators.required, Validators.min(0)]], // Default to 0, add min validator
      StageFiles: [null] // Use null for file input
    });
    this.Stage2Form = this.fb.group({
      StageTitle: [''],
      workBrief: [''],
      StageStartDate: [''],
      StageAmount: [0, [Validators.required, Validators.min(0)]], // Default to 0, add min validator
      StageFiles: [null] // Use null for file input
    });

    // Attach this form to the parent form
    this.parentForm.addControl('Stage1Form', this.Stage1Form);
    this.parentForm.addControl('Stage2Form', this.Stage2Form);
  }

  // Method to handle file selection
  onFileSelected(event: any, StageNumber: number): void {
    const file: File = event.target.files[0];
    if (file) {
      if (StageNumber === 1) {
        this.Stage1Form.patchValue({ StageFiles: file });
      } else if (StageNumber === 2) {
        this.Stage2Form.patchValue({ StageFiles: file });
      }
      // You might want to display the file name in the UI
    }
  }

  // Method to increment StageAmount
  incrementStageAmount(StageNumber: number): void {
    if (StageNumber === 1) {
      let currentAmount = this.Stage1Form.get('StageAmount')?.value || 0;
      this.Stage1Form.get('StageAmount')?.setValue(currentAmount + 1);
    } else if (StageNumber === 2) {
      let currentAmount = this.Stage2Form.get('StageAmount')?.value || 0;
      this.Stage2Form.get('StageAmount')?.setValue(currentAmount + 1);
    }
  }

  // Method to decrement StageAmount
  decrementStageAmount(StageNumber: number): void {
    if (StageNumber === 1) {
      let currentAmount = this.Stage1Form.get('StageAmount')?.value || 0;
      if (currentAmount > 0) {
        this.Stage1Form.get('StageAmount')?.setValue(currentAmount - 1);
      }
    } else if (StageNumber === 2) {
      let currentAmount = this.Stage2Form.get('StageAmount')?.value || 0;
      if (currentAmount > 0) {
        this.Stage2Form.get('StageAmount')?.setValue(currentAmount - 1);
      }
    }
  }

  // Example method to add a new Stage (if you were to make it dynamic)
  addStage(): void {
    // This is a placeholder. In a real application, you'd dynamically
    // create and add new FormGroup instances to a FormArray.
    alert('This is where you would dynamically add a new Stage form!');
  }
}
