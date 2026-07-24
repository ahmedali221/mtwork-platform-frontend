import { Component, ChangeDetectionStrategy, inject, signal, computed, ElementRef, viewChildren, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ThemeService } from '../../../services/theme.service';
import { LanguageService } from '../../../services/language.service';
import { AuthService } from '../../../services/auth';

/**
 * OTP Verification — Figma node 3:124181 ("Sign Up As" frame, but the
 * content is the "Enter OTP Code" screen). Standalone auth surface (NOT a
 * modal): cream page + topbar + centered white card, 4 single-digit cells,
 * Resend, dark "Reset" CTA. Chrome matches the frozen login freeze tokens.
 *
 * Email is carried from the forgot-password flow via the `email` query param
 * / router state; falls back to a placeholder for display only.
 * Verifies via AuthService.verifyOTP({ email, otp }) → POST Auth/VerifyOTP.
 * Resend re-triggers forgetPassword(email) with a silent cooldown (no timer
 * text in Figma — button greys out for RESEND_COOLDOWN_MS).
 */
@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpComponent implements OnDestroy {
  themeService    = inject(ThemeService);
  languageService = inject(LanguageService);
  private authService = inject(AuthService);
  private router      = inject(Router);
  private route       = inject(ActivatedRoute);
  private transloco   = inject(TranslocoService);

  /** MTWORK wordmark — same 6 SVG segments as login topbar (Figma 3:124183). */
  readonly logoSegments = [
    { src: 'assets/images/navbar/logo-1.svg', width: 23.211, height: 15.464 },
    { src: 'assets/images/navbar/logo-2.svg', width: 11.6, height: 14.951 },
    { src: 'assets/images/navbar/logo-3.svg', width: 23.22, height: 15.464 },
    { src: 'assets/images/navbar/logo-4.svg', width: 15.503, height: 14.961 },
    { src: 'assets/images/navbar/logo-5.svg', width: 13.7, height: 14.961 },
    { src: 'assets/images/navbar/logo-6.svg', width: 13.838, height: 14.951 },
  ] as const;

  /** 4 OTP cells (Figma 3:124196 — "Digit Input Containe" with 4 "Fiedls"). */
  readonly cells = [0, 1, 2, 3] as const;
  private cellInputs = viewChildren<ElementRef<HTMLInputElement>>('cell');

  /** Email under verification (from forgot-password flow). */
  email = signal(
    this.route.snapshot.queryParamMap.get('email')
    ?? (this.router.getCurrentNavigation()?.extras?.state as { email?: string })?.email
    ?? 'example@gmaill.com'
  );

  /** Per-cell digit values; the joined string is the OTP code. */
  digits = signal<string[]>(['', '', '', '']);
  readonly code = computed(() => this.digits().join(''));
  readonly isComplete = computed(() => this.code().length === 4);

  isLoading = signal(false);
  errorMessage = signal('');

  // Resend cooldown (silent — no countdown text, button just disables).
  private static readonly RESEND_COOLDOWN_MS = 30_000;
  resendDisabled = signal(false);
  private resendTimer: ReturnType<typeof setTimeout> | null = null;

  /** Single-digit input: keep only the last numeric char, auto-advance. */
  onInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '');
    const char = raw.slice(-1);
    input.value = char;

    this.setDigit(index, char);
    if (this.errorMessage()) this.errorMessage.set('');

    if (char && index < this.cells.length - 1) {
      this.focusCell(index + 1);
    }
  }

  /** Backspace on an empty cell steps back to the previous cell. */
  onKeydown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.digits()[index] && index > 0) {
      event.preventDefault();
      this.focusCell(index - 1);
      this.setDigit(index - 1, '');
      const prev = this.cellInputs()[index - 1]?.nativeElement;
      if (prev) prev.value = '';
    } else if (event.key === 'ArrowLeft' && index > 0) {
      this.focusCell(index - 1);
    } else if (event.key === 'ArrowRight' && index < this.cells.length - 1) {
      this.focusCell(index + 1);
    }
  }

  /** Paste a full code into any cell — distribute digits across cells. */
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, 4);
    if (!pasted) return;

    const next = ['', '', '', ''];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    this.digits.set(next);

    const inputs = this.cellInputs();
    inputs.forEach((ref, i) => (ref.nativeElement.value = next[i] ?? ''));
    this.focusCell(Math.min(pasted.length, this.cells.length - 1));
    if (this.errorMessage()) this.errorMessage.set('');
  }

  private setDigit(index: number, value: string): void {
    this.digits.update(d => {
      const next = [...d];
      next[index] = value;
      return next;
    });
  }

  private focusCell(index: number): void {
    this.cellInputs()[index]?.nativeElement.focus();
  }

  submit(): void {
    if (!this.isComplete() || this.isLoading()) return;
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService.verifyOTP({ email: this.email(), otp: this.code() }).subscribe({
      next: () => {
        this.isLoading.set(false);
        // Post-OTP target is the reset-password screen (not yet located in
        // Figma). Route there with the verified email; until that route
        // exists this navigation is the documented hand-off point.
        this.router.navigate(['/reset-password'], { queryParams: { email: this.email() } });
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          err?.error?.errorMsg ?? err?.error?.ErrorMsg ?? err?.error?.message ?? this.transloco.translate('otp.errors.invalid')
        );
      },
    });
  }

  resend(): void {
    if (this.resendDisabled()) return;
    this.resendDisabled.set(true);
    this.errorMessage.set('');

    this.authService.forgetPassword(this.email()).subscribe({
      error: (err) => {
        this.errorMessage.set(
          err?.error?.message ?? this.transloco.translate('otp.errors.resendFailed')
        );
      },
    });

    this.resendTimer = setTimeout(
      () => this.resendDisabled.set(false),
      OtpComponent.RESEND_COOLDOWN_MS
    );
  }

  setTheme(mode: 'light' | 'dark'): void {
    const isDark = this.themeService.isDarkMode();
    if ((mode === 'dark' && !isDark) || (mode === 'light' && isDark)) {
      this.themeService.toggleTheme();
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  ngOnDestroy(): void {
    if (this.resendTimer) clearTimeout(this.resendTimer);
  }
}
