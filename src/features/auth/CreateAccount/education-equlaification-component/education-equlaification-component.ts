import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FormSelectComponent } from '../form-select-component/form-select-component';
import { FormInputComponent } from '../form-input-component/form-input-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { EducationQualificationForm } from '../models/create-account.model';
import { LookupService, LookupItem } from '../../../../services/lookup.service';

@Component({
  selector: 'app-education-equlaification-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormSelectComponent, FormInputComponent, StepperComponent],
  templateUrl: './education-equlaification-component.html',
  styleUrls: ['./education-equlaification-component.css']
})
export class EducationEqulaificationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private lookupService = inject(LookupService);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  /** Contractor flow stepper (4 steps) — must match Step 1 labels. */
  steps = ['Basic Information', 'Education & Qualifications', 'Address', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;

  qualifications: LookupItem[] = [];
  industries: LookupItem[] = [];
  universities: LookupItem[] = [];
  jobTitles: LookupItem[] = [];

  ngOnInit(): void {
    const existingData = this.formService.getStepData('edu-qual') as EducationQualificationForm | undefined;
    // Password is collected on Step 1 (basic-info) per Figma 3:123197 — it is
    // no longer handled here. submitForm() reads it directly from basicInfo.

    this.form = this.fb.group({
      qualification: [existingData?.qualification ?? null, Validators.required],
      industry: [existingData?.industry ?? null, Validators.required],
      university: [existingData?.university ?? null, Validators.required],   // Figma 3:123273: Required
      jobTitle: [existingData?.jobTitle ?? null],
      // yearsOfExperience kept in the model but NOT rendered (no Figma field).
      yearsOfExperience: [existingData?.yearsOfExperience || null, [Validators.min(0), Validators.max(50)]],
      // Backend-required for Auth/register (undocumented in swagger's
      // `required` list — see memory: register-missing-required-fields).
      idNumber:           [existingData?.idNumber ?? '', Validators.required],
      passportExpiryDate: [existingData?.passportExpiryDate ?? '', Validators.required],
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

    this.lookupService.getQualifications()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => { this.qualifications = items; this.cdr.markForCheck(); });

    this.lookupService.getIndustries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => { this.industries = items; this.cdr.markForCheck(); });

    this.lookupService.getUniversities()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => { this.universities = items; this.cdr.markForCheck(); });

    this.lookupService.getJobTitles()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => { this.jobTitles = items; this.cdr.markForCheck(); });
  }

  next(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }

    this.isSubmitting = true;
    this.cdr.markForCheck();

    // Password now lives on Step 1 — just persist the education values.
    this.formService.updateStepData('edu-qual', { educationQualification: this.form.value as EducationQualificationForm });

    // Navigate without setTimeout
    this.router.navigate(['../address'], { relativeTo: this.route })
      .then(() => {
        this.isSubmitting = false;
        this.cdr.markForCheck();
      })
      .catch(() => {
        this.isSubmitting = false;
        this.cdr.markForCheck();
      });
  }

  previous(): void {
    this.router.navigate(['../basic-info'], { relativeTo: this.route });
  }

   // Add method to handle Google sign up
  signUpWithGoogle(): void {
    // Implement Google sign up logic here
    // This would typically redirect to Google OAuth or call an API
  }
}
