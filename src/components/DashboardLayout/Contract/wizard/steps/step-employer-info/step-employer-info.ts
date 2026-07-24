import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-employer-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './step-employer-info.html',
  styleUrls: ['../step-form.css', './step-employer-info.css'],
})
export class StepEmployerInfoComponent {
  @Input() formGroup!: FormGroup;

  isInvalid(field: string): boolean {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  errorKey(field: string): string {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl || !ctrl.errors) return '';
    if (ctrl.errors['required']) return 'validation.required';
    if (ctrl.errors['email'])    return 'validation.email';
    return 'validation.invalid';
  }
}
