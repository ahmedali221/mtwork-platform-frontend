import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-step-scope-of-work',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './step-scope-of-work.html',
  styleUrls: ['../step-form.css', './step-scope-of-work.css'],
})
export class StepScopeOfWorkComponent {
  @Input() formGroup!: FormGroup;

  isInvalid(field: string): boolean {
    const ctrl = this.formGroup?.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  errorKey(field: string): string {
    const ctrl = this.formGroup?.get(field);
    if (!ctrl?.errors) return '';
    if (ctrl.errors['required']) return 'validation.required';
    return 'validation.invalid';
  }
}
