import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-password-requirements-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './password-requirements-component.html',
  styleUrls: ['./password-requirements-component.css']
})
export class PasswordRequirementsComponent implements OnInit {
  @Input() control!: AbstractControl;

  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  passwordValue = '';

  ngOnInit(): void {
    if (!this.control) return;

    // Listen to value changes
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string) => {
        this.passwordValue = value || '';
        this.cdr.markForCheck();
      });

    // Initial value
    this.passwordValue = this.control.value || '';
  }

  get hasMinLength(): boolean {
    if (!this.passwordValue) return false;
    return this.passwordValue.length >= 10;
  }

  get hasMaxLength(): boolean {
    if (!this.passwordValue) return true;
    return this.passwordValue.length <= 70;
  }

  get hasLength(): boolean {
    if (!this.passwordValue) return false;
    return this.hasMinLength && this.hasMaxLength;
  }

  get hasUppercase(): boolean {
    if (!this.passwordValue) return false;
    return /[A-Z]/.test(this.passwordValue);
  }

  get hasLowercase(): boolean {
    if (!this.passwordValue) return false;
    return /[a-z]/.test(this.passwordValue);
  }

  get hasNumber(): boolean {
    if (!this.passwordValue) return false;
    return /[0-9]/.test(this.passwordValue);
  }

  get hasSpecialChar(): boolean {
    if (!this.passwordValue) return false;
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.passwordValue);
  }
}

