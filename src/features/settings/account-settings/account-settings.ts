import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors,
  Validators,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { UserService } from '../../../services/user.service';
import { LanguageService } from '../../../services/language.service';
import { ThemeService } from '../../../services/theme.service';
import { UserDto } from '../../../models/user.model';

type SectionKey = 'profile' | 'password' | 'preferences';

interface PasswordMessage { kind: 'success' | 'error'; text: string; }

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingsComponent implements OnInit {
  private fb              = inject(FormBuilder);
  private userService     = inject(UserService);
  readonly languageService = inject(LanguageService);
  readonly themeService    = inject(ThemeService);

  // ── Tab state ──────────────────────────────────────────────────────
  readonly activeSection = signal<SectionKey>('profile');

  // ── Profile (read-only) ────────────────────────────────────────────
  readonly profile        = signal<UserDto | null>(null);
  readonly loadingProfile = signal<boolean>(false);
  readonly profileError   = signal<string | null>(null);

  // ── Password form ──────────────────────────────────────────────────
  readonly passwordForm: FormGroup = this.fb.group(
    {
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [this.matchPasswords] },
  );
  readonly isSavingPassword = signal<boolean>(false);
  readonly passwordMessage  = signal<PasswordMessage | null>(null);

  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadProfile();
  }

  // ── Section nav ────────────────────────────────────────────────────
  setSection(key: SectionKey): void {
    this.activeSection.set(key);
  }

  // ── Profile ────────────────────────────────────────────────────────
  loadProfile(): void {
    this.loadingProfile.set(true);
    this.profileError.set(null);
    this.userService.getMyProfile().subscribe({
      next: (user) => {
        this.profile.set(user);
        this.loadingProfile.set(false);
      },
      error: (err) => {
        this.profileError.set(err?.error?.message ?? 'Failed to load profile.');
        this.loadingProfile.set(false);
      },
    });
  }

  // ── Password ───────────────────────────────────────────────────────
  private matchPasswords(group: AbstractControl): ValidationErrors | null {
    const next    = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return next && confirm && next !== confirm ? { passwordsMismatch: true } : null;
  }

  /**
   * Password change — UI ONLY per project decision.
   *
   * On submit:
   *   - if invalid → show validation errors, stay put.
   *   - if valid   → flip loading flag for 500ms, then surface a fake-success
   *                  message and reset the form. No API call is made.
   *
   * When the backend lands, replace the body of the timeout block with a
   * real subscribe (e.g. UserService.resetPassword). Validation, loading
   * state, and the success/error pipes already match.
   */
  submitPassword(): void {
    if (this.isSavingPassword()) return;

    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.passwordMessage.set(null);
      return;
    }

    this.isSavingPassword.set(true);
    this.passwordMessage.set(null);

    setTimeout(() => {
      this.isSavingPassword.set(false);
      this.passwordMessage.set({
        kind: 'success',
        text: 'settings.password.uiSuccess',
      });
      this.passwordForm.reset();
    }, 500);
  }

  // ── Preferences ────────────────────────────────────────────────────
  setLanguage(lang: 'en' | 'ar'): void {
    if (this.languageService.currentLang() !== lang) {
      this.languageService.toggleLanguage();
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // ── Helpers for the template (no logic in HTML) ────────────────────
  fullName(u: UserDto | null): string {
    if (!u) return '';
    return `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim();
  }

  hasError(name: string, error: string): boolean {
    const c = this.passwordForm.get(name);
    return !!c && c.touched && c.hasError(error);
  }

  formMismatch(): boolean {
    return this.passwordForm.touched
      && this.passwordForm.hasError('passwordsMismatch')
      && !!this.passwordForm.get('confirmPassword')?.touched;
  }
}
