import {
  Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef
} from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormInputComponent } from '../form-input-component/form-input-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { PasswordRequirementsComponent } from '../password-requirements-component/password-requirements-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { CustomValidators } from '../validators/custom-validators';
import { BusinessAuthorizedForm } from '../models/create-account.model';

/**
 * Business Step 2 — "Authorized" (Figma 3:123420, fields 3:123443).
 * Fields: First Name(req), Last Name(req), Authorized ID(req),
 * Email(req), Password(req) + requirements panel, Address, plus
 * Phone/DOB/Passport#/Passport Expiry — backend-required for Auth/register,
 * not in Figma (same gap as Contractor/Employee — see memory:
 * register-missing-required-fields). City moved to Step 1 (Basic Information)
 * as the single Country/City source (lookup ids) — this step no longer
 * collects its own City to avoid a stale free-text value overriding it.
 * Username added — swagger's `required` list includes UserName and the
 * Business flow never collected it, causing every submission to 400.
 */
@Component({
  selector: 'app-business-authorized-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormInputComponent, StepperComponent, PasswordRequirementsComponent],
  templateUrl: './business-authorized-component.html',
  styleUrls: ['./business-authorized-component.css']
})
export class BusinessAuthorizedComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  steps = ['Basic Information', 'Authorized', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;
  submitError = false;

  ngOnInit(): void {
    const existing = this.formService.getBusinessStepData('business-authorized') as BusinessAuthorizedForm | undefined;

    this.form = this.fb.group({
      firstName:    [existing?.firstName ?? '', [Validators.required, Validators.minLength(2)]],
      lastName:     [existing?.lastName ?? '', [Validators.required, Validators.minLength(2)]],
      authorizedId: [existing?.authorizedId ?? '', Validators.required],
      username:     [existing?.username ?? '', [Validators.required, Validators.minLength(6)]],
      email:        [existing?.email ?? '', [Validators.required, CustomValidators.emailFormat()]],
      password:     [existing?.password ?? '', [Validators.required, CustomValidators.passwordStrength()]],
      address:      [existing?.address ?? ''],
      // Backend-required for Auth/register (undocumented in swagger's
      // `required` list — see memory: register-missing-required-fields).
      phoneNumber:        [existing?.phoneNumber ?? '', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{6,20}$/)]],
      dateOfBirth:        [existing?.dateOfBirth ?? '', Validators.required],
      passportNumber:     [existing?.passportNumber ?? '', Validators.required],
      passportExpiryDate: [existing?.passportExpiryDate ?? '', Validators.required],
    });

    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
  }

  previous(): void {
    this.router.navigate(['../basic-info'], { relativeTo: this.route });
  }

  next(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitError = true;
      this.cdr.markForCheck();
      return;
    }
    this.isSubmitting = true;
    this.submitError = false;
    this.cdr.markForCheck();

    this.formService.updateStepData('business-authorized', { businessAuthorized: this.form.value as BusinessAuthorizedForm });
    this.router.navigate(['../attachments'], { relativeTo: this.route })
      .then(() => { this.isSubmitting = false; this.cdr.markForCheck(); })
      .catch(() => { this.isSubmitting = false; this.submitError = true; this.cdr.markForCheck(); });
  }

  dismissError(): void { this.submitError = false; this.cdr.markForCheck(); }

  signUpWithGoogle(): void { /* SSO not wired */ }
}
