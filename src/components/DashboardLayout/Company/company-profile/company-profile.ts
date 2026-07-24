import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompanyService, CompanyDto } from '../../../../services/company.service';
import { LookupService, LookupItem } from '../../../../services/lookup.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  
    TranslocoModule
  ],
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.css',
})
export class CompanyProfileComponent implements OnInit {
  private readonly companyService = inject(CompanyService);
  private readonly lookupService  = inject(LookupService);
  private readonly fb             = inject(FormBuilder);

  // ── State ─────────────────────────────────────────────────
  company     = signal<CompanyDto | null>(null);
  isLoading   = signal(true);
  loadError   = signal<string | null>(null);
  isEditing   = signal(false);
  isSaving    = signal(false);
  saveError   = signal<string | null>(null);
  saveSuccess = signal(false);

  countries  = signal<LookupItem[]>([]);
  industries = signal<LookupItem[]>([]);

  // ── Form ──────────────────────────────────────────────────
  form = this.fb.nonNullable.group({
    name:               ['', Validators.required],
    email:              ['', [Validators.required, Validators.email]],
    phoneNumber:        [''],
    address:            [''],
    websiteUrl:         [''],
    description:        [''],
    registrationNumber: [''],
    countryId:          [0],
    industryId:         [0],
  });

  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit(): void {
    this.loadLookups();
    this.loadCompany();
  }

  private loadLookups(): void {
    this.lookupService.getCountries().subscribe({
      next: (items) => this.countries.set(items),
      error: () => {}
    });
    this.lookupService.getIndustries().subscribe({
      next: (items) => this.industries.set(items),
      error: () => {}
    });
  }

  private loadCompany(): void {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.companyService.get().subscribe({
      next: (data) => {
        this.company.set(data);
        this.patchForm(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.loadError.set(err?.error?.message ?? 'Failed to load company profile.');
        this.isLoading.set(false);
      },
    });
  }

  private patchForm(c: CompanyDto): void {
    this.form.patchValue({
      name:               (c['name'] as string)               ?? '',
      email:              (c['email'] as string)              ?? '',
      phoneNumber:        (c['phoneNumber'] as string)        ?? '',
      address:            (c['address'] as string)            ?? '',
      websiteUrl:         (c['websiteUrl'] as string)         ?? '',
      description:        (c['description'] as string)        ?? '',
      registrationNumber: (c['registrationNumber'] as string) ?? '',
      countryId:          (c['countryId'] as number)          ?? 0,
      industryId:         (c['industryId'] as number)         ?? 0,
    });
  }

  // ── Edit / Cancel ─────────────────────────────────────────
  startEditing(): void {
    const c = this.company();
    if (c) this.patchForm(c);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    this.isEditing.set(true);
  }

  cancelEditing(): void {
    const c = this.company();
    if (c) this.patchForm(c);
    this.saveError.set(null);
    this.isEditing.set(false);
  }

  // ── Save ──────────────────────────────────────────────────
  onSave(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload: CompanyDto = {
      ...this.company(),
      ...this.form.getRawValue(),
    };

    this.isSaving.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);

    this.companyService.update(payload).subscribe({
      next: () => {
        this.company.set(payload);
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.isEditing.set(false);
        setTimeout(() => this.saveSuccess.set(false), 4000);
      },
      error: (err) => {
        this.isSaving.set(false);
        this.saveError.set(err?.error?.message ?? 'Failed to save changes. Please try again.');
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  fieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  getCountryName(id?: number): string {
    if (!id) return '—';
    return this.countries().find(c => c.id === id)?.name ?? '—';
  }

  getIndustryName(id?: number): string {
    if (!id) return '—';
    return this.industries().find(i => i.id === id)?.name ?? '—';
  }

  getInitials(name?: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  retry(): void {
    this.loadCompany();
  }
}
