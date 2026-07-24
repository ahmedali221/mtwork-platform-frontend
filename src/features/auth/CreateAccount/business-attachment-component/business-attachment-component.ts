import {
  Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, DestroyRef
} from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FileUploadComponent } from '../file-upload-component/file-upload-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { CustomValidators } from '../validators/custom-validators';
import { AttachmentForm } from '../models/create-account.model';

/**
 * Business Step 3 — "Attachments" (Figma 3:123499). File uploads:
 * Commercial(req), Tax Declaration(req), Passport(req), Experience
 * Certificate(req). Maps onto the existing AttachmentForm slots so
 * submitBusinessForm() transmits them via the existing payload keys.
 * Isolated from the contractor Attachment component. WIRING PASS ONLY.
 */
@Component({
  selector: 'app-business-attachment-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FileUploadComponent, StepperComponent],
  templateUrl: './business-attachment-component.html',
  styleUrls: ['./business-attachment-component.css']
})
export class BusinessAttachmentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  steps = ['Basic Information', 'Authorized', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;
  submitError: string | null = null;

  ngOnInit(): void {
    const existing = this.formService.getBusinessStepData('business-attachments') as AttachmentForm | undefined;

    // Figma business uploads → existing AttachmentForm slots:
    //   Commercial            → cvResume (CVAttach)
    //   Tax Declaration       → educationCertification (EduCertificateAttach)
    //   Passport              → passport (PassportAttach)
    //   Experience Certificate→ experienceCertification (ExperienceCertificateAttach)
    this.form = this.fb.group({
      cvResume:                [existing?.cvResume || null,                [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png', 'zip']), CustomValidators.fileSize(5)]],
      educationCertification:  [existing?.educationCertification || null,  [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
      passport:                [existing?.passport || null,                [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
      experienceCertification: [existing?.experienceCertification || null, [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
    });

    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
  }

  previous(): void {
    this.router.navigate(['../authorized'], { relativeTo: this.route });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }
    this.isSubmitting = true;
    this.submitError = null;
    this.cdr.markForCheck();

    this.formService.updateStepData('business-attachments', { attachments: this.form.value as AttachmentForm });

    this.formService.submitBusinessForm().subscribe({
      next: () => {
        this.isSubmitting = false;
        this.formService.clearSensitiveData();
        this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError =
          err?.error?.errorMsg || err?.error?.ErrorMsg || err?.error?.message || err?.message ||
          'An error occurred while creating your account. Please try again.';
        this.cdr.markForCheck();
      }
    });
  }

  signUpWithGoogle(): void { /* SSO not wired */ }
}
