import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-step4-pay-by-task',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatIconModule,
    TranslocoModule
  ],
  templateUrl: './step4-pay-by-task.html',
  styleUrls: ['./step4-pay-by-task.css']
})
export class Step4PayByTaskComponent implements OnInit {


  @Input() parentForm!: FormGroup;
  Task1Form!: FormGroup;
  Task2Form!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.Task1Form = this.fb.group({
      TaskTitle: [''],
      workBrief: [''],
      TaskStartDate: [''],
      TaskAmount: [0, [Validators.required, Validators.min(0)]], // Default to 0, add min validator
      TaskFiles: [null] // Use null for file input
    });
    this.Task2Form = this.fb.group({
      TaskTitle: [''],
      workBrief: [''],
      TaskStartDate: [''],
      TaskAmount: [0, [Validators.required, Validators.min(0)]], // Default to 0, add min validator
      TaskFiles: [null] // Use null for file input
    });

    // Attach this form to the parent form
    this.parentForm.addControl('Task1Form', this.Task1Form);
    this.parentForm.addControl('Task2Form', this.Task2Form);
  }

  // Method to handle file selection
  onFileSelected(event: any, taskNumber: number): void {
    const file: File = event.target.files[0];
    if (file) {
      if (taskNumber === 1) {
        this.Task1Form.patchValue({ TaskFiles: file });
      } else if (taskNumber === 2) {
        this.Task2Form.patchValue({ TaskFiles: file });
      }
      // You might want to display the file name in the UI
    }
  }

  // Method to increment TaskAmount
  incrementTaskAmount(taskNumber: number): void {
    if (taskNumber === 1) {
      let currentAmount = this.Task1Form.get('TaskAmount')?.value || 0;
      this.Task1Form.get('TaskAmount')?.setValue(currentAmount + 1);
    } else if (taskNumber === 2) {
      let currentAmount = this.Task2Form.get('TaskAmount')?.value || 0;
      this.Task2Form.get('TaskAmount')?.setValue(currentAmount + 1);
    }
  }

  // Method to decrement TaskAmount
  decrementTaskAmount(taskNumber: number): void {
    if (taskNumber === 1) {
      let currentAmount = this.Task1Form.get('TaskAmount')?.value || 0;
      if (currentAmount > 0) {
        this.Task1Form.get('TaskAmount')?.setValue(currentAmount - 1);
      }
    } else if (taskNumber === 2) {
      let currentAmount = this.Task2Form.get('TaskAmount')?.value || 0;
      if (currentAmount > 0) {
        this.Task2Form.get('TaskAmount')?.setValue(currentAmount - 1);
      }
    }
  }

  // Example method to add a new task (if you were to make it dynamic)
  addTask(): void {
    // This is a placeholder. In a real application, you'd dynamically
    // create and add new FormGroup instances to a FormArray.
    alert('This is where you would dynamically add a new task form!');
  }
}