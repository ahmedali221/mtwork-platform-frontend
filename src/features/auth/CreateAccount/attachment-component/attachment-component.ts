import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../file-upload-component/file-upload-component';
import { StepperComponent } from '../stepper-component/stepper-component';
import { CreateAccountFormService } from '../services/create-account-form.service';
import { AttachmentForm } from '../models/create-account.model';
import { CustomValidators } from '../validators/custom-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attachment-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, StepperComponent, FileUploadComponent, MatSnackBarModule],
  templateUrl: './attachment-component.html',
  styleUrls: ['./attachment-component.css']
})
export class AttachmentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formService = inject(CreateAccountFormService);
  private snackBar = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  /** Contractor flow stepper (4 steps) — must match Steps 1-3 labels. */
  steps = ['Basic Information', 'Education & Qualifications', 'Address', 'Attachments'];
  form!: FormGroup;
  isSubmitting = false;
  submitError: string | null = null;

  ngOnInit(): void {
    const existingData = this.formService.getStepData('attachments') as AttachmentForm | undefined;

    // Figma 3:123316: ALL 5 uploads carry the Required badge → all required.
    this.form = this.fb.group({
      cvResume:                [existingData?.cvResume || null,                [Validators.required, CustomValidators.fileType(['pdf', 'doc', 'docx']), CustomValidators.fileSize(5)]],
      passport:                [existingData?.passport || null,                [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
      educationCertification:  [existingData?.educationCertification || null,  [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
      experienceCertification: [existingData?.experienceCertification || null, [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]],
      professorCertification:  [existingData?.professorCertification || null,  [Validators.required, CustomValidators.fileType(['pdf', 'jpg', 'jpeg', 'png']), CustomValidators.fileSize(5)]]
    });
  }

  get cvResume()                { return this.form.get('cvResume'); }
  get passport()                { return this.form.get('passport'); }
  get educationCertification()  { return this.form.get('educationCertification'); }
  get experienceCertification() { return this.form.get('experienceCertification'); }
  get professorCertification()  { return this.form.get('professorCertification'); }

  previous(): void {
    this.router.navigate(['../address'], { relativeTo: this.route });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = null;

    const formValue: AttachmentForm = this.form.value;
    this.formService.updateStepData('attachments', { attachments: formValue });

    this.formService.submitForm().subscribe({
      next: () => {
        this.isSubmitting = false;
        this.formService.clearSensitiveData();

        this.snackBar.open('Account created successfully! Please sign in.', 'OK', {
          duration: 4000,
          panelClass: ['snack-success'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });

        // Give the user 2 s to read the message, then go to login
        setTimeout(() => {
          this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, 2000);
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.isSubmitting = false;

        const apiMessage: string =
          error?.error?.errorMsg ||
          error?.error?.ErrorMsg ||
          error?.error?.message  ||
          error?.message         ||
          'An error occurred while creating your account. Please try again.';

        // Highlight "email already exists" specifically
        if (apiMessage.toLowerCase().includes('email') && apiMessage.toLowerCase().includes('exist')) {
          this.submitError = `${apiMessage} — <a href="/login" class="underline font-semibold">Sign in instead</a>`;
        } else {
          this.submitError = apiMessage;
        }
        this.cdr.markForCheck();
      }
    });
  }
}
