import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslocoModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css'],
})
export class ForgotPasswordComponent {
  private authService = inject(AuthService);
  private transloco   = inject(TranslocoService);
  private router      = inject(Router);

  email     = '';
  loading   = signal(false);
  success   = signal(false);
  error     = signal<string | null>(null);

  submit(): void {
    const emailVal = this.email.trim();
    if (!emailVal || this.loading()) return;

    this.loading.set(true);
    this.error.set(null);

    this.authService.forgetPassword(emailVal).subscribe({
      next: () => {
        this.success.set(true);
        this.loading.set(false);
        // Continue the reset flow: OTP consumes the email via query param
        // (also survives a refresh on /otp?email=...).
        this.router.navigate(['/otp'], { queryParams: { email: emailVal } });
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? this.transloco.translate('errors.resetFailed'));
        this.loading.set(false);
      }
    });
  }
}
