import {
  Component, Input, ChangeDetectionStrategy,
  OnInit, ChangeDetectorRef, DestroyRef, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form-input-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input-component.html',
  styleUrls: ['./form-input-component.css']
})
export class FormInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() control!: AbstractControl;   // Changed from FormControl to AbstractControl
  @Input() errorMessages: Record<string, string> = {};

  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  touched = false;
  errors: ValidationErrors | null = null;

  ngOnInit(): void {
    if (!this.control) return;

    this.control.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.errors = this.control.errors;
        this.touched = this.control.touched;
        this.cdr.markForCheck();
      });
  }

  // Getter to safely cast to FormControl for template usage
  get formControl(): FormControl {
    return this.control as FormControl;
  }

  get required(): boolean {
    const ctrl = this.control;
    if (!ctrl) return false;
    // @ts-ignore
    return !!ctrl.validator?.(ctrl)?.required;
  }

  get invalid(): boolean {
    return !!this.errors && this.touched;
  }

  get errorText(): string {
    if (!this.errors) return '';
    const key = Object.keys(this.errors)[0];
    if (this.errorMessages[key]) return this.errorMessages[key];

    const defaults: Record<string, string> = {
      required: `${this.label} is required`,
      email: 'Please enter a valid email address',
      minlength: `Minimum length is ${this.errors['minlength']?.requiredLength}`,
      maxlength: `Maximum length is ${this.errors['maxlength']?.requiredLength}`,
      pattern: `Invalid format for ${this.label}`
    };
    return defaults[key] || `${this.label} is invalid`;
  }
}