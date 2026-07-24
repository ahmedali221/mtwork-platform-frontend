import {
  Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder, FormGroup, Validators, ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input-component/form-input-component';
import { FormTextareaComponent } from '../form-textarea-component/form-textarea-component';
import { FormSelectComponent } from '../form-select-component/form-select-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { CustomValidators } from '../validators/custom-validators';
import { BasicInfoForm } from '../models/create-account.model';
import { LookupService, LookupItem } from '../../../../services/lookup.service';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-basic-info-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    FormInputComponent,
    FormTextareaComponent,
    FormSelectComponent,
    StepperComponent, TranslocoModule],
  templateUrl: './basic-info-component.html',
  styleUrls: ['./basic-info-component.css']
})
export class BasicInfoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private lookupService = inject(LookupService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  countries: LookupItem[] = [];
  cities: LookupItem[] = [];

  /** Contractor flow stepper (4 steps). Business has its own components. */
  steps = ['Basic Information', 'Education & Qualifications', 'Address', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;
  /** Error banner (Figma 3:123386) — state-driven, shown on submit failure. */
  submitError = false;

  ngOnInit(): void {
    const existing = this.formService.getStepData('basic-info') as BasicInfoForm | undefined;
    // Guard against stale/legacy localStorage values (e.g. a country name
    // string persisted by an older build) — only trust a real numeric id.
    if (existing && !Number.isFinite(existing.country)) {
      existing.country = null;
    }

    // Contractor Step 1 (Figma 3:123197). Password lives HERE (matches Figma;
    // moved back from edu-qual). Country → CountryId, Username → UserName both
    // fix real submit-payload gaps. Required per Figma badges: First, Last,
    // Country, Password (+ Email kept as the API-required deviation, Tax
    // Decoration). Unmapped fields (favoriteName/passportNumber/taxDecoration/
    // linkedInUrl/address) are collected and FLAGGED — not transmitted.
    this.form = this.fb.group({
      firstName:      [existing?.firstName ?? '', [Validators.required, Validators.minLength(2)]],
      lastName:       [existing?.lastName ?? '', [Validators.required, Validators.minLength(2)]],
      country:        [existing?.country ?? null, Validators.required],
      city:           [existing?.city ?? null],
      addFavorite:    [existing?.addFavorite ?? false],
      favoriteName:   [existing?.favoriteName ?? ''],
      // Was optional in the UI but is backend-required (see comment below).
      passportNumber: [existing?.passportNumber ?? '', Validators.required],
      username:       [existing?.username ?? '', [Validators.required, Validators.minLength(2)]],
      email:          [existing?.email ?? '', [Validators.required, CustomValidators.emailFormat()]],
      password:       [existing?.password ?? '', [Validators.required, CustomValidators.passwordStrength()]],
      // Backend-required for Auth/register (undocumented in swagger's
      // `required` list — see memory: register-missing-required-fields).
      phoneNumber:    [existing?.phoneNumber ?? '', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{6,20}$/)]],
      dateOfBirth:    [existing?.dateOfBirth ?? '', Validators.required],
      taxDecoration:  [existing?.taxDecoration ?? '', Validators.required],
      linkedInUrl:    [existing?.linkedInUrl ?? ''],
      address:        [existing?.address ?? ''],
    });

    // Listen to form status changes to update the view
    this.form.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.cdr.markForCheck();
      });

    // Also listen to value changes for immediate feedback
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.cdr.markForCheck();
      });

    this.lookupService.getCountries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(countries => {
        this.countries = countries;
        this.cdr.markForCheck();
      });

    // Cascade City options off the selected Country; reset City on change.
    this.form.controls['country'].valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((countryId: number | null) => {
        this.cities = [];
        this.form.controls['city'].setValue(null, { emitEvent: false });
        if (countryId != null) {
          this.lookupService.getCitiesByCountry(countryId)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(cities => {
              this.cities = cities;
              this.cdr.markForCheck();
            });
        }
        this.cdr.markForCheck();
      });

    if (existing?.country != null) {
      this.lookupService.getCitiesByCountry(existing.country)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(cities => {
          this.cities = cities;
          this.cdr.markForCheck();
        });
    }
  }

  /* ---------- getters (optional) ---------- */
  get f() { return this.form.controls; }

  goBack(): void {
    this.router.navigate(['/']);
  }

  /** Add Favorite Name toggle (Figma 3:123227) — UI state only. */
  toggleFavorite(): void {
    const ctrl = this.form.controls['addFavorite'];
    ctrl.setValue(!ctrl.value);
    this.cdr.markForCheck();
  }

  next(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitError = true;          // surface the error banner
      this.cdr.markForCheck();
      return;
    }
    this.isSubmitting = true;
    this.submitError = false;
    this.cdr.markForCheck();

    const { confirmPassword, ...data } = this.form.value;
    this.formService.updateStepData('basic-info', { basicInfo: data as BasicInfoForm });
    // NOTE: password is now collected HERE (Figma 3:123197), so edu-qual no
    // longer needs to write it back. submitForm() reads it from basicInfo.

    // Navigate to education qualification page
    this.router.navigate(['../edu-qual'], { relativeTo: this.route })
      .then(() => {
        this.isSubmitting = false;
        this.cdr.markForCheck();
      })
      .catch(() => {
        this.isSubmitting = false;
        this.submitError = true;
        this.cdr.markForCheck();
      });
  }

  dismissError(): void {
    this.submitError = false;
    this.cdr.markForCheck();
  }

  // Add method to handle Google sign up
  signUpWithGoogle(): void {
    // Implement Google sign up logic here
    // This would typically redirect to Google OAuth or call an API
  }
}