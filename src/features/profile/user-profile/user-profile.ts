import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';

import { UserService, ResetPasswordPayload } from '../../../services/user.service';
import { LookupService } from '../../../services/lookup.service';
import { AttachmentService } from '../../../services/attachment.service';
import { UserDto, UserTypeId } from '../../../models/user.model';

interface LookupItem { id: number; name: string; }

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfileComponent implements OnInit {
  private readonly userService       = inject(UserService);
  private readonly lookupService     = inject(LookupService);
  private readonly attachmentService = inject(AttachmentService);
  private readonly fb                = inject(FormBuilder);

  // ── State ───────────────────────────────────────────────────────
  user        = signal<UserDto | null>(null);
  isLoading   = signal(true);
  loadError   = signal<string | null>(null);
  isEditing   = signal(false);
  isSaving    = signal(false);
  saveError   = signal<string | null>(null);
  saveSuccess = signal(false);

  // Avatar upload state
  isUploadingAvatar = signal(false);
  avatarError       = signal<string | null>(null);

  // Password change state
  isChangingPassword     = signal(false);
  passwordError          = signal<string | null>(null);
  passwordSuccess        = signal(false);

  // Lookups
  countries      = signal<LookupItem[]>([]);
  cities         = signal<LookupItem[]>([]);
  jobTitles      = signal<LookupItem[]>([]);
  qualifications = signal<LookupItem[]>([]);
  universities   = signal<LookupItem[]>([]);

  // ── Profile form (editable fields only) ─────────────────────────
  profileForm = this.fb.nonNullable.group({
    firstName:        ['', [Validators.required, Validators.maxLength(60)]],
    lastName:         ['', [Validators.required, Validators.maxLength(60)]],
    phoneNumber:      [''],
    address:          [''],
    birthDate:        [''],
    gender:           [0],
    nationalId:       [''],
    passportNumber:   [''],
    ibanNumber:       [''],
    jobTitleId:       [0],
    qualificationId:  [0],
    universityId:     [0],
    countryId:        [0],
    cityId:           [0],
  });

  // ── Password form (separate, independent submit) ────────────────
  passwordForm = this.fb.nonNullable.group(
    {
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [this.passwordsMatchValidator] }
  );

  // ── Lifecycle ───────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadProfile();
    this.loadLookups();

    // Reload cities when country changes (matches existing lookup pattern).
    this.profileForm.controls.countryId.valueChanges.subscribe(countryId => {
      if (countryId && countryId > 0) {
        this.loadCities(countryId);
      } else {
        this.cities.set([]);
        this.profileForm.controls.cityId.setValue(0);
      }
    });

    // Clear stale save banner on any profile field edit.
    this.profileForm.valueChanges.subscribe(() => {
      if (this.saveError())   this.saveError.set(null);
      if (this.saveSuccess()) this.saveSuccess.set(false);
    });

    // Same for password form.
    this.passwordForm.valueChanges.subscribe(() => {
      if (this.passwordError())   this.passwordError.set(null);
      if (this.passwordSuccess()) this.passwordSuccess.set(false);
    });
  }

  // ── Data loading ────────────────────────────────────────────────
  private loadProfile(): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.userService.getMyProfile().subscribe({
      next: (data) => {
        this.user.set(data);
        this.patchFormFromUser(data);
        // Load cities up-front if the user has a country already.
        if (data.countryId && data.countryId > 0) {
          this.loadCities(data.countryId);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set('profile.errors.load');
        this.isLoading.set(false);
      },
    });
  }

  private loadLookups(): void {
    this.lookupService.getCountries().subscribe(items => this.countries.set(items));
    this.lookupService.getJobTitles().subscribe(items => this.jobTitles.set(items));
    this.lookupService.getQualifications().subscribe(items => this.qualifications.set(items));
    this.lookupService.getUniversities().subscribe(items => this.universities.set(items));
  }

  private loadCities(countryId: number): void {
    this.lookupService.getCitiesByCountry(countryId).subscribe(items => this.cities.set(items));
  }

  retry(): void { this.loadProfile(); }

  // ── Patch form ──────────────────────────────────────────────────
  private patchFormFromUser(u: UserDto): void {
    this.profileForm.patchValue({
      firstName:       u.firstName ?? '',
      lastName:        u.lastName ?? '',
      phoneNumber:     u.phoneNumber ?? '',
      address:         u.address ?? '',
      birthDate:       this.toDateInput(u.birthDate),
      gender:          u.gender ?? 0,
      nationalId:      u.nationalId ?? '',
      passportNumber:  u.passportNumber ?? '',
      ibanNumber:      u.ibanNumber ?? '',
      jobTitleId:      u.jobTitleId ?? 0,
      qualificationId: u.qualificationId ?? 0,
      universityId:    u.universityId ?? 0,
      countryId:       u.countryId ?? 0,
      cityId:          u.cityId ?? 0,
    });
  }

  // ── Edit toggles ────────────────────────────────────────────────
  startEditing(): void {
    const u = this.user();
    if (u) this.patchFormFromUser(u);
    this.isEditing.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);
  }

  cancelEditing(): void {
    const u = this.user();
    if (u) this.patchFormFromUser(u);
    this.isEditing.set(false);
    this.saveError.set(null);
  }

  fieldInvalid(name: string): boolean {
    const ctrl = this.profileForm.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  // ── Save profile ────────────────────────────────────────────────
  onSave(): void {
    this.saveError.set(null);
    this.saveSuccess.set(false);

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const current = this.user();
    if (!current) return;

    this.isSaving.set(true);

    const v = this.profileForm.getRawValue();
    const payload: Partial<UserDto> = {
      ...current,
      firstName:       v.firstName,
      lastName:        v.lastName,
      phoneNumber:     v.phoneNumber || undefined,
      address:         v.address || undefined,
      birthDate:       this.fromDateInput(v.birthDate),
      gender:          v.gender > 0 ? v.gender : undefined,
      nationalId:      v.nationalId || undefined,
      passportNumber:  v.passportNumber || undefined,
      ibanNumber:      v.ibanNumber || undefined,
      jobTitleId:      v.jobTitleId      > 0 ? v.jobTitleId      : undefined,
      qualificationId: v.qualificationId > 0 ? v.qualificationId : undefined,
      universityId:    v.universityId    > 0 ? v.universityId    : undefined,
      countryId:       v.countryId       > 0 ? v.countryId       : undefined,
      cityId:          v.cityId          > 0 ? v.cityId          : undefined,
    };

    this.userService.update(payload).subscribe({
      next: () => {
        // Reflect saved values locally and exit edit mode.
        this.user.set({ ...current, ...payload });
        this.isSaving.set(false);
        this.isEditing.set(false);
        this.saveSuccess.set(true);
      },
      error: () => {
        this.isSaving.set(false);
        this.saveError.set('profile.errors.save');
      },
    });
  }

  // ── Avatar upload ───────────────────────────────────────────────
  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;

    this.avatarError.set(null);
    this.isUploadingAvatar.set(true);

    this.attachmentService.upload(file, 'user').subscribe({
      next: (res) => {
        const current = this.user();
        if (!current) { this.isUploadingAvatar.set(false); return; }

        // Server returned the new path — persist it via /User/Update.
        const updated: Partial<UserDto> = { ...current, profileImagePath: res.filePath };
        this.userService.update(updated).subscribe({
          next: () => {
            this.user.set({ ...current, profileImagePath: res.filePath });
            this.isUploadingAvatar.set(false);
          },
          error: () => {
            this.isUploadingAvatar.set(false);
            this.avatarError.set('profile.errors.avatarSave');
          },
        });
      },
      error: () => {
        this.isUploadingAvatar.set(false);
        this.avatarError.set('profile.errors.avatarUpload');
      },
    });

    // Reset the input so selecting the same file again still triggers (change).
    input.value = '';
  }

  // ── Change password ─────────────────────────────────────────────
  passwordFieldInvalid(name: string): boolean {
    const ctrl = this.passwordForm.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  passwordsMismatch(): boolean {
    return !!(
      this.passwordForm.errors?.['passwordsMismatch'] &&
      this.passwordForm.get('confirmPassword')?.touched
    );
  }

  onChangePassword(): void {
    this.passwordError.set(null);
    this.passwordSuccess.set(false);

    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.isChangingPassword.set(true);
    const payload: ResetPasswordPayload = this.passwordForm.getRawValue();

    this.userService.resetPassword(payload).subscribe({
      next: () => {
        this.isChangingPassword.set(false);
        this.passwordSuccess.set(true);
        this.passwordForm.reset({ currentPassword: '', newPassword: '', confirmPassword: '' });
      },
      error: () => {
        this.isChangingPassword.set(false);
        this.passwordError.set('profile.errors.password');
      },
    });
  }

  // ── Display helpers (read-only views) ───────────────────────────
  getInitials(first?: string, last?: string): string {
    const f = (first ?? '').trim().charAt(0).toUpperCase();
    const l = (last  ?? '').trim().charAt(0).toUpperCase();
    return (f + l) || '?';
  }

  getCountryName(id?: number): string     { return this.lookupName(this.countries(),     id); }
  getCityName(id?: number): string        { return this.lookupName(this.cities(),        id); }
  getJobTitleName(id?: number): string    { return this.lookupName(this.jobTitles(),     id); }
  getQualificationName(id?: number): string { return this.lookupName(this.qualifications(), id); }
  getUniversityName(id?: number): string  { return this.lookupName(this.universities(),  id); }

  private lookupName(list: LookupItem[], id?: number): string {
    if (!id || id <= 0) return '—';
    const found = list.find(x => x.id === id);
    return found?.name ?? '—';
  }

  /** Map gender enum → i18n key. Backend convention: 1 = Male, 2 = Female. */
  getGenderKey(g?: number): string {
    if (g === 1) return 'profile.gender.male';
    if (g === 2) return 'profile.gender.female';
    return 'profile.gender.unspecified';
  }

  /** Map UserTypeId → i18n key for the role badge. */
  getRoleKey(t?: number): string {
    switch (t) {
      case UserTypeId.Employee:   return 'profile.role.employee';
      case UserTypeId.Contractor: return 'profile.role.contractor';
      case UserTypeId.Business:   return 'profile.role.business';
      // Admin is a JWT role claim, not a UserType — handle via role string fallback
      default: return 'profile.role.unknown';
    }
  }

  /** Best-effort ISO → yyyy-mm-dd for <input type="date">. */
  private toDateInput(iso?: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  /** yyyy-mm-dd → ISO for the API. Returns undefined for empty. */
  private fromDateInput(s?: string): string | undefined {
    if (!s) return undefined;
    const d = new Date(s);
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  // ── Cross-field password validator ──────────────────────────────
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const np = group.get('newPassword')?.value;
    const cp = group.get('confirmPassword')?.value;
    if (!np || !cp) return null;
    return np === cp ? null : { passwordsMismatch: true };
  }
}
