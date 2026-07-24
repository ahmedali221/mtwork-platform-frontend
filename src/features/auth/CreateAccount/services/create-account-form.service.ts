import { Injectable, signal, computed, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateAccountFormData, FormStep, BusinessFormStep } from '../models/create-account.model';
import { ApiService } from '../../../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountFormService {
  private readonly STORAGE_KEY = 'createAccountFormData';
  private readonly apiService = inject(ApiService);

  // Form data state
  private formDataSubject = new BehaviorSubject<CreateAccountFormData>(this.loadFromStorage());
  public formData$ = this.formDataSubject.asObservable();

  // Current step state
  private currentStepSubject = new BehaviorSubject<FormStep>('basic-info');
  public currentStep$ = this.currentStepSubject.asObservable();

  // Computed signals for reactive updates
  public formData = signal<CreateAccountFormData>(this.loadFromStorage());
  public currentStep = signal<FormStep>('basic-info');
  public isFormValid = computed(() => this.validateFormData());

  constructor() {
    // Sync signals with subjects
    this.formData$.subscribe(data => this.formData.set(data));
    this.currentStep$.subscribe(step => this.currentStep.set(step));
  }

  /**
   * Record which role card the user picked on /register (Employee/Contractor/
   * Business) — Employee and Contractor share this same form + Auth/register
   * endpoint, differing only in the UserType sent on submit.
   */
  setAccountType(accountType: 'employee' | 'contractor' | 'business'): void {
    this.updateStepData('basic-info', { accountType });
  }

  /** UserTypeEnum per swagger: 1=Employee, 2=Contractor, 3=Business. */
  private accountTypeToUserType(accountType?: 'employee' | 'contractor' | 'business'): number {
    switch (accountType) {
      case 'employee': return 1;
      case 'business': return 3;
      case 'contractor':
      default: return 2;
    }
  }

  /**
   * Convert a `yyyy-MM-dd` value from `<input type="date">` to the
   * `date-time` format Auth/register expects (confirmed against the live
   * endpoint — see memory: register-missing-required-fields).
   */
  private toDateTime(dateOnly?: string): string | undefined {
    if (!dateOnly) return undefined;
    return `${dateOnly}T00:00:00Z`;
  }

  /**
   * Update form data for a specific step
   */
  updateStepData(step: FormStep | BusinessFormStep, data: Partial<CreateAccountFormData>): void {
    const currentData = this.formDataSubject.value;
    const updatedData: CreateAccountFormData = {
      ...currentData,
      ...data
    };

    this.formDataSubject.next(updatedData);
    this.saveToStorage(updatedData);
  }

  /**
   * Get current form data
   */
  getFormData(): CreateAccountFormData {
    return this.formDataSubject.value;
  }

  /**
   * Get data for a specific step
   */
  getStepData(step: FormStep): any {
    const data = this.formDataSubject.value;
    switch (step) {
      case 'basic-info':
        return data.basicInfo;
      case 'edu-qual':
        return data.educationQualification;
      case 'address':
        return data.address;
      case 'attachments':
        return data.attachments;
      default:
        return null;
    }
  }

  /**
   * Get data for a Business step (isolated from contractor step keys).
   */
  getBusinessStepData(step: 'business-basic-info' | 'business-authorized' | 'business-attachments'): any {
    const data = this.formDataSubject.value;
    switch (step) {
      case 'business-basic-info': return data.businessBasicInfo;
      case 'business-authorized': return data.businessAuthorized;
      case 'business-attachments': return data.attachments;
      default: return null;
    }
  }

  /**
   * Set current step
   */
  setCurrentStep(step: FormStep): void {
    this.currentStepSubject.next(step);
  }

  /**
   * Get current step
   */
  getCurrentStep(): FormStep {
    return this.currentStepSubject.value;
  }

  /**
   * Check if a specific step is completed
   */
  isStepCompleted(step: FormStep): boolean {
    const data = this.formDataSubject.value;
    switch (step) {
      case 'basic-info':
        return !!(data.basicInfo?.firstName && data.basicInfo?.lastName &&
                 data.basicInfo?.email && data.basicInfo?.username && data.basicInfo?.password);
      case 'edu-qual':
        return !!(data.educationQualification?.qualification &&
                 data.educationQualification?.industry);
      case 'address':
        return !!(data.address?.country && data.address?.city);
      case 'attachments':
        return !!(data.attachments?.cvResume && data.attachments?.passport &&
                 data.attachments?.educationCertification);
      default:
        return false;
    }
  }

  /**
   * Validate entire form data
   */
  private validateFormData(): boolean {
    return this.isStepCompleted('basic-info') &&
           this.isStepCompleted('edu-qual') &&
           this.isStepCompleted('address') &&
           this.isStepCompleted('attachments');
  }

  /**
   * Save form data to localStorage — password is intentionally excluded.
   * Sensitive credentials stay in-memory only (BehaviorSubject).
   */
  private saveToStorage(data: CreateAccountFormData): void {
    try {
      const storageData = {
        ...data,
        basicInfo: data.basicInfo ? {
          ...data.basicInfo,
          password: undefined   // never persist password to localStorage
        } : undefined,
        attachments: data.attachments ? {
          cvResume: data.attachments.cvResume ? { name: data.attachments.cvResume.name, size: data.attachments.cvResume.size } : undefined,
          passport: data.attachments.passport ? { name: data.attachments.passport.name, size: data.attachments.passport.size } : undefined,
          educationCertification: data.attachments.educationCertification ? { name: data.attachments.educationCertification.name, size: data.attachments.educationCertification.size } : undefined,
          experienceCertification: data.attachments.experienceCertification ? { name: data.attachments.experienceCertification.name, size: data.attachments.experienceCertification.size } : undefined,
          professorCertification: data.attachments.professorCertification ? { name: data.attachments.professorCertification.name, size: data.attachments.professorCertification.size } : undefined,
        } : undefined
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storageData));
    } catch {
    }
  }

  /**
   * Load form data from localStorage.
   * Password is never present here (excluded on save).
   */
  private loadFromStorage(): CreateAccountFormData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  /**
   * Clear form data (localStorage + in-memory)
   */
  clearFormData(): void {
    this.formDataSubject.next({});
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Clear all sensitive in-memory data (password, etc.)
   * Call this after successful registration or on navigation away.
   */
  clearSensitiveData(): void {
    const current = this.formDataSubject.value;
    if (current.basicInfo) {
      const sanitized: CreateAccountFormData = {
        ...current,
        basicInfo: { ...current.basicInfo, password: undefined as any }
      };
      this.formDataSubject.next(sanitized);
    }
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Submit form data to backend via ApiService.
   * Uses environment.baseUrl — no hardcoded URLs.
   */
  submitForm(): Observable<any> {
    const formData = this.formDataSubject.value;

    const fd = new FormData();

    // UserType is a required enum field on Auth/register (1=Employee,
    // 2=Contractor, 3=Business) — Employee and Contractor share this form,
    // distinguished only by the role card picked on /register.
    fd.append('UserType', String(this.accountTypeToUserType(formData.accountType)));

    // Basic info
    if (formData.basicInfo) {
      if (formData.basicInfo.firstName) fd.append('FirstName', formData.basicInfo.firstName);
      if (formData.basicInfo.lastName) fd.append('LastName', formData.basicInfo.lastName);
      if (formData.basicInfo.email) fd.append('Email', formData.basicInfo.email);
      if (formData.basicInfo.username) fd.append('UserName', formData.basicInfo.username);
      if (formData.basicInfo.password) fd.append('Password', formData.basicInfo.password);
      // Country/City now collected on Step 1 (Figma 3:123197) as lookup IDs
      // (via LookupService selects) — the backend requires numeric FKs, not
      // free-text names. Country maps to the flat CountryId (profile country);
      // City has no flat key on the DTO — it only binds under the nested
      // UserAddress.CityId (dot-notation multipart key per swagger).
      if (formData.basicInfo.country != null) fd.append('CountryId', String(formData.basicInfo.country));
      if (formData.basicInfo.city != null) fd.append('UserAddress.CityId', String(formData.basicInfo.city));
      // Backend-required — confirmed against the live endpoint, undocumented
      // in swagger's `required` list (see memory: register-missing-required-fields).
      if (formData.basicInfo.passportNumber) fd.append('PassportNumber', formData.basicInfo.passportNumber);
      if (formData.basicInfo.phoneNumber) fd.append('PhoneNumber', formData.basicInfo.phoneNumber);
      const dob = this.toDateTime(formData.basicInfo.dateOfBirth);
      if (dob) fd.append('DateOfBirth', dob);
      // ⚠️ FLAGGED (no backend payload key): favoriteName,
      //    taxDecoration, linkedInUrl, address — collected but NOT transmitted.
    }

    // Education / Qualification — all four are lookup IDs (LookupService selects).
    if (formData.educationQualification) {
      if (formData.educationQualification.qualification != null) fd.append('QualificationId', String(formData.educationQualification.qualification));
      if (formData.educationQualification.industry != null) fd.append('IndustryId', String(formData.educationQualification.industry));
      if (formData.educationQualification.university != null) fd.append('UniversityId', String(formData.educationQualification.university));
      if (formData.educationQualification.jobTitle != null) fd.append('JobTitleId', String(formData.educationQualification.jobTitle));
      // Backend-required (see comment above).
      if (formData.educationQualification.idNumber) fd.append('IdNumber', formData.educationQualification.idNumber);
      const passportExpiry = this.toDateTime(formData.educationQualification.passportExpiryDate);
      if (passportExpiry) fd.append('PassportExpiryDate', passportExpiry);
    }

    // Address (Contractor Step 3, Figma 3:123281).
    // Country/City are the responsibility of Step 1 (basicInfo) — the single
    // source for CountryId/CityId — so they are NOT re-appended here (avoids
    // duplicate FormData keys). Step 3 still collects Country/City for display.
    // ⚠️ FLAGGED (no backend payload key): country, city, postalCode, address.
    // PhoneNumber removed — no phone field in the Contractor Step 3 design.

    // Attachments (File objects only — metadata stubs from localStorage are ignored)
    if (formData.attachments) {
      if (formData.attachments.cvResume instanceof File) fd.append('CVAttach', formData.attachments.cvResume);
      if (formData.attachments.passport instanceof File) fd.append('PassportAttach', formData.attachments.passport);
      if (formData.attachments.educationCertification instanceof File) fd.append('EduCertificateAttach', formData.attachments.educationCertification);
      if (formData.attachments.experienceCertification instanceof File) fd.append('ExperienceCertificateAttach', formData.attachments.experienceCertification);
      if (formData.attachments.professorCertification instanceof File) fd.append('ProfCertificateAttach', formData.attachments.professorCertification);
    }

    return new Observable(observer => {
      this.apiService.postForm<any>('Auth/register', fd).subscribe({
        next: data => {
          observer.next(data);
          observer.complete();
          this.clearFormData();
        },
        error: err => observer.error(err)
      });
    });
  }

  /**
   * Submit the BUSINESS flow (isolated from contractor).
   * Maps the Figma Business fields to the existing Auth/register payload
   * where a key exists; fields WITHOUT a backend key are intentionally
   * NOT sent (flagged below) until the backend adds them — no silent drop
   * into a wrong key.
   */
  submitBusinessForm(): Observable<any> {
    const data = this.formDataSubject.value;
    const fd = new FormData();

    const basic = data.businessBasicInfo;
    const auth = data.businessAuthorized;

    // UserType=3 (Business) — see accountTypeToUserType/swagger UserTypeEnum.
    fd.append('UserType', '3');

    // ── Mapped to existing payload keys ──
    if (auth?.firstName) fd.append('FirstName', auth.firstName);
    // Last name appears on both steps; prefer the Authorized step value.
    const lastName = auth?.lastName || basic?.lastName;
    if (lastName) fd.append('LastName', lastName);
    if (auth?.email) fd.append('Email', auth.email);
    // Required by swagger's `required` list — the Business flow previously
    // never collected this at all (see memory: register-missing-required-fields).
    if (auth?.username) fd.append('UserName', auth.username);
    if (auth?.password) fd.append('Password', auth.password);
    // Country/City are lookup ids collected once on Step 1 (Basic Information)
    // — matches the Contractor flow. A free-text Country/City here would send
    // a non-numeric CountryId and 400 (see memory: register-missing-required-fields).
    if (basic?.country != null) fd.append('CountryId', String(basic.country));
    if (basic?.city != null) fd.append('UserAddress.CityId', String(basic.city));
    // "Authorized ID" (business-authorized step) doubles as the backend's
    // required IdNumber field (see memory: register-missing-required-fields).
    if (auth?.authorizedId) fd.append('IdNumber', auth.authorizedId);
    // Backend-required — confirmed against the live endpoint, undocumented
    // in swagger's `required` list (see memory: register-missing-required-fields).
    if (auth?.phoneNumber) fd.append('PhoneNumber', auth.phoneNumber);
    const dob = this.toDateTime(auth?.dateOfBirth);
    if (dob) fd.append('DateOfBirth', dob);
    if (auth?.passportNumber) fd.append('PassportNumber', auth.passportNumber);
    const passportExpiry = this.toDateTime(auth?.passportExpiryDate);
    if (passportExpiry) fd.append('PassportExpiryDate', passportExpiry);

    // ── File attachments (business step 3 uses the same AttachmentForm) ──
    if (data.attachments) {
      if (data.attachments.cvResume instanceof File) fd.append('CVAttach', data.attachments.cvResume);
      if (data.attachments.passport instanceof File) fd.append('PassportAttach', data.attachments.passport);
      if (data.attachments.educationCertification instanceof File) fd.append('EduCertificateAttach', data.attachments.educationCertification);
      if (data.attachments.experienceCertification instanceof File) fd.append('ExperienceCertificateAttach', data.attachments.experienceCertification);
      if (data.attachments.professorCertification instanceof File) fd.append('ProfCertificateAttach', data.attachments.professorCertification);
    }

    // ⚠️ GAP — no backend key yet, intentionally NOT transmitted:
    //   businessBasicInfo.companyName, .postalCode, .taxDecoration, .linkedInUrl
    //   businessAuthorized.address
    // These are collected + retained in the form model; wire them once the
    // backend exposes keys. Do NOT map them to unrelated keys.

    return new Observable(observer => {
      this.apiService.postForm<any>('Auth/register', fd).subscribe({
        next: response => {
          observer.next(response);
          observer.complete();
          this.clearFormData();
        },
        error: err => observer.error(err)
      });
    });
  }
}
