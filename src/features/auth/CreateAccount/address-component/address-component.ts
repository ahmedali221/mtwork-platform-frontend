import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input-component/form-input-component';
import { FormTextareaComponent } from '../form-textarea-component/form-textarea-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { AddressForm } from '../models/create-account.model';

@Component({
  selector: 'app-address-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormInputComponent, FormTextareaComponent, StepperComponent],
  templateUrl: './address-component.html',
  styleUrls: ['./address-component.css']
})
export class AddressComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  /** Contractor flow stepper (4 steps) — must match Step 1 labels. */
  steps = ['Basic Information', 'Education & Qualifications', 'Address', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;

  ngOnInit(): void {
    const existingData = this.formService.getStepData('address') as AddressForm | undefined;

    // Figma 3:123281: Country/City/Postal Code required, Address optional
    // textarea. Phone Number removed (no Figma field). Country/City are
    // collected but NOT transmitted (Step 1 is the CountryId/CityId source).
    this.form = this.fb.group({
      country: [existingData?.country || '', Validators.required],
      city: [existingData?.city || '', Validators.required],
      postalCode: [existingData?.postalCode || '', Validators.required],
      address: [existingData?.address || ''],
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
  }

  next(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }

    this.isSubmitting = true;
    this.cdr.markForCheck();
    
    const formValue: AddressForm = this.form.value;
    this.formService.updateStepData('address', { address: formValue });
    
    // Navigate without setTimeout
    this.router.navigate(['../attachments'], { relativeTo: this.route })
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
    this.router.navigate(['../edu-qual'], { relativeTo: this.route });
  }
  signUpWithGoogle(): void {
    // Implement Google sign up logic here
    // This would typically redirect to Google OAuth or call an API
  }
}
