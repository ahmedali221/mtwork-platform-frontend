import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-contractor-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './step-contractor-info.html',
  styleUrls: ['../step-form.css', './step-contractor-info.css'],
})
export class StepContractorInfoComponent {
  @Input() formGroup!: FormGroup;

  isInvalid(field: string): boolean {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  errorKey(field: string): string {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors) return '';
    if (ctrl.errors['required']) return 'validation.required';
    if (ctrl.errors['email'])    return 'validation.email';
    return 'validation.invalid';
  }
}
