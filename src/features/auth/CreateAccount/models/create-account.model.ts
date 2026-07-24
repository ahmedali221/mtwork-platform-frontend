// Contractor Step 1 — Figma 3:123197 (fields 3:123219).
// Field order: First/Last · Country/City · [Add Favorite toggle] ·
// Favorite/Passport · Username · Password · Tax/LinkedIn · Address.
// Email kept here as an intentional API-required deviation (Figma omits it).
export interface BasicInfoForm {
  firstName: string;            // → FirstName
  lastName: string;             // → LastName
  email: string;                // → Email (kept; Figma omits, submit requires)
  country?: number | null;      // → CountryId
  city?: number | null;         // → CityId (not required per Figma)
  addFavorite?: boolean;        // toggle (3:123227) — UI state, not transmitted
  favoriteName?: string;        // ⚠️ no current payload key (flagged)
  passportNumber?: string;      // → PassportNumber (backend requires it — see below)
  username?: string;            // → UserName (required by submitForm)
  password: string;             // → Password
  taxDecoration?: string;       // ⚠️ no current payload key (flagged)
  linkedInUrl?: string;         // ⚠️ no current payload key (flagged)
  address?: string;             // ⚠️ no current payload key (flagged)
  confirmPassword?: string;
  // Backend requires these for Auth/register to pass validation — undocumented
  // in swagger's `required` list, confirmed 2026-07-14 by isolating fields
  // against the live endpoint (see memory: register-missing-required-fields).
  phoneNumber?: string;         // → PhoneNumber
  dateOfBirth?: string;         // → DateOfBirth (yyyy-MM-dd from <input type="date">)
}

export interface EducationQualificationForm {
  qualification: number | null;
  industry: number | null;
  university?: number | null;
  jobTitle?: number | null;
  yearsOfExperience?: number;
  // Backend-required (see BasicInfoForm comment above).
  idNumber?: string;             // → IdNumber
  passportExpiryDate?: string;   // → PassportExpiryDate (yyyy-MM-dd)
}

export interface AddressForm {
  country: string;
  city: string;
  postalCode?: string;
  address?: string;
  phoneNumber?: string;
}

export interface AttachmentForm {
  cvResume?: File;
  passport?: File;
  educationCertification?: File;
  experienceCertification?: File;
  professorCertification?: File;
}

// ── Business flow (isolated from Contractor) ──────────────────────
// Figma Business Step 1 (3:123379 / fields 3:123403)
export interface BusinessBasicInfoForm {
  companyName: string;          // ⚠️ no current payload key
  lastName: string;             // → Name
  country: number | null;       // → CountryId (lookup id, matches Contractor flow)
  city: number | null;          // → UserAddress.CityId (lookup id)
  postalCode?: string;          // ⚠️ no current payload key
  taxDecoration: string;        // ⚠️ no current payload key
  linkedInUrl?: string;         // ⚠️ no current payload key
}

// Figma Business Step 2 "Authorized" (3:123420 / fields 3:123443)
export interface BusinessAuthorizedForm {
  firstName: string;       // → FirstName
  lastName: string;        // → LastName
  authorizedId: string;    // → IdNumber
  username: string;        // → UserName (required by swagger's `required` list)
  email: string;           // → Email
  password: string;        // → Password
  address?: string;        // ⚠️ no current payload key
  // Backend-required for Auth/register (same gap as Contractor/Employee —
  // see memory: register-missing-required-fields).
  phoneNumber?: string;         // → PhoneNumber
  dateOfBirth?: string;         // → DateOfBirth (yyyy-MM-dd from <input type="date">)
  passportNumber?: string;      // → PassportNumber
  passportExpiryDate?: string;  // → PassportExpiryDate (yyyy-MM-dd)
}

export interface CreateAccountFormData {
  basicInfo?: BasicInfoForm;
  educationQualification?: EducationQualificationForm;
  address?: AddressForm;
  attachments?: AttachmentForm;
  accountType?: 'employee' | 'contractor' | 'business';
  // Business-only step data (separate from contractor shapes)
  businessBasicInfo?: BusinessBasicInfoForm;
  businessAuthorized?: BusinessAuthorizedForm;
}

export type FormStep = 'basic-info' | 'edu-qual' | 'address' | 'attachments';

// Business flow has its own step keys (Basic Information → Authorized → Attachments)
export type BusinessFormStep = 'business-basic-info' | 'business-authorized' | 'business-attachments';

