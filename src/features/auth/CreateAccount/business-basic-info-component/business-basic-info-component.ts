import {
  Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef
} from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormInputComponent } from '../form-input-component/form-input-component';
import { FormSelectComponent } from '../form-select-component/form-select-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { BusinessBasicInfoForm } from '../models/create-account.model';
import { LookupService, LookupItem } from '../../../../services/lookup.service';

/**
 * Business Step 1 — "Basic Information" (Figma 3:123379, fields 3:123403).
 * Fields: Company name(req), Last name(req), Country(req), City, Postal Code,
 * Tax Decoration(req), LinkedIn URL. Isolated from the contractor flow.
 * Country/City are lookup-id selects (matches the Contractor flow) — a free-text
 * Country/City here would send a non-numeric CountryId and 400 on submit.
 */
@Component({
  selector: 'app-business-basic-info-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormInputComponent, FormSelectComponent, StepperComponent],
  templateUrl: './business-basic-info-component.html',
  styleUrls: ['./business-basic-info-component.css']
})
export class BusinessBasicInfoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private lookupService = inject(LookupService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  /** Business stepper (3 steps) — no Education, no Address. */
  steps = ['Basic Information', 'Authorized', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;
  submitError = false;

  countries: LookupItem[] = [];
  cities: LookupItem[] = [];

  ngOnInit(): void {
    const existing = this.formService.getBusinessStepData('business-basic-info') as BusinessBasicInfoForm | undefined;
    // Guard against stale/legacy localStorage values (e.g. a country name
    // string persisted by an older build) — only trust a real numeric id.
    if (existing && !Number.isFinite(existing.country)) {
      existing.country = null;
    }

    this.form = this.fb.group({
      companyName:   [existing?.companyName ?? '', [Validators.required, Validators.minLength(2)]],
      lastName:      [existing?.lastName ?? '', [Validators.required, Validators.minLength(2)]],
      country:       [existing?.country ?? null, Validators.required],
      city:          [existing?.city ?? null],
      postalCode:    [existing?.postalCode ?? ''],
      taxDecoration: [existing?.taxDecoration ?? '', Validators.required],
      linkedInUrl:   [existing?.linkedInUrl ?? ''],
    });

    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());

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

  goBack(): void {
    this.router.navigate(['/register']);
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

    this.formService.updateStepData('business-basic-info', { businessBasicInfo: this.form.value as BusinessBasicInfoForm });
    this.router.navigate(['../authorized'], { relativeTo: this.route })
      .then(() => { this.isSubmitting = false; this.cdr.markForCheck(); })
      .catch(() => { this.isSubmitting = false; this.submitError = true; this.cdr.markForCheck(); });
  }

  dismissError(): void { this.submitError = false; this.cdr.markForCheck(); }

  signUpWithGoogle(): void { /* SSO not wired */ }
}
