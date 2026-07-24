import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ThemeService } from '../../../services/theme.service';
import { LanguageService } from '../../../services/language.service';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink, TranslocoModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  themeService    = inject(ThemeService);
  languageService = inject(LanguageService);
  authService     = inject(AuthService);
  router          = inject(Router);
  private transloco = inject(TranslocoService);

  /** MTWORK wordmark — same 6 SVG segments as navbar/footer (Figma 3:123627).
   *  Rendered white over the blue promo panel via CSS filter. */
  readonly logoSegments = [
    { src: 'assets/images/navbar/logo-1.svg', width: 23.211, height: 15.464 },
    { src: 'assets/images/navbar/logo-2.svg', width: 11.6, height: 14.951 },
    { src: 'assets/images/navbar/logo-3.svg', width: 23.22, height: 15.464 },
    { src: 'assets/images/navbar/logo-4.svg', width: 15.503, height: 14.961 },
    { src: 'assets/images/navbar/logo-5.svg', width: 13.7, height: 14.961 },
    { src: 'assets/images/navbar/logo-6.svg', width: 13.838, height: 14.951 },
  ] as const;

  /** People-card avatars (Figma 3:123609) — real portraits + flag badge,
   *  each on its Figma circle-fill colour. Decorative (card is aria-hidden). */
  readonly avatars = [
    { src: 'assets/images/login/avatar-1.png', bg: 'var(--login-primary)',       flag: 'assets/images/login/flag-eg.svg' },
    { src: 'assets/images/login/avatar-2.png', bg: 'var(--brand-secondary-500)', flag: 'assets/images/login/flag-sa.svg' },
    { src: 'assets/images/login/avatar-3.png', bg: 'var(--brand-neutral-900)',   flag: 'assets/images/login/flag-eg.svg' },
    { src: 'assets/images/login/avatar-4.png', bg: 'var(--brand-tertiary-500)',  flag: 'assets/images/login/flag-sa.svg' },
  ] as const;
  /** Payroll bars — Figma 3:123665: each a gray track (#f7f5f2) with a
   *  #2e358f fill. track = % of 90px row, fill = % of its track. */
  readonly bars = [
    { track: 100, fill: 73 },
    { track: 90,  fill: 69 },
    { track: 55,  fill: 65 },
    { track: 90,  fill: 69 },
    { track: 78,  fill: 71 },
    { track: 55,  fill: 65 },
    { track: 43,  fill: 72 },
  ] as const;

  loginForm = inject(FormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  isLoading = signal(false);
  errorMessage = signal('');

  // Forgot Password Modal
  showForgotModal = signal(false);
  fpEmail = '';
  fpLoading = signal(false);
  fpSuccess = signal(false);
  fpError = signal<string | null>(null);

  openForgotModal(): void {
    this.fpEmail = '';
    this.fpSuccess.set(false);
    this.fpError.set(null);
    this.showForgotModal.set(true);
  }

  closeForgotModal(): void {
    this.showForgotModal.set(false);
  }

  submitForgotPassword(): void {
    const email = this.fpEmail.trim();
    if (!email || this.fpLoading()) return;
    this.fpLoading.set(true);
    this.fpError.set(null);
    this.authService.forgetPassword(email).subscribe({
      next: () => {
        this.fpSuccess.set(true);
        this.fpLoading.set(false);
        // Continue the reset flow: OTP consumes the email via query param.
        this.router.navigate(['/otp'], { queryParams: { email } });
      },
      error: (err) => {
        this.fpError.set(err?.error?.message ?? this.transloco.translate('errors.resetFailed'));
        this.fpLoading.set(false);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.errorMessage.set('');

      const { email, password } = this.loginForm.value;
      this.authService.login(email!, password!).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMessage.set(
            err?.error?.errorMsg || err?.error?.ErrorMsg || err?.error?.message || this.transloco.translate('auth.errors.loginFailed')
          );
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  setTheme(mode: 'light' | 'dark') {
    const isDark = this.themeService.isDarkMode();
    if ((mode === 'dark' && !isDark) || (mode === 'light' && isDark)) {
      this.themeService.toggleTheme();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
