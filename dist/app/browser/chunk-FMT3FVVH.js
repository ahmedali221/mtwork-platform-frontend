import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/services/create-account-form.service.ts
var _CreateAccountFormService = class _CreateAccountFormService {
  constructor() {
    this.STORAGE_KEY = "createAccountFormData";
    this.apiService = inject(ApiService);
    this.formDataSubject = new BehaviorSubject(this.loadFromStorage());
    this.formData$ = this.formDataSubject.asObservable();
    this.currentStepSubject = new BehaviorSubject("basic-info");
    this.currentStep$ = this.currentStepSubject.asObservable();
    this.formData = signal(this.loadFromStorage(), ...ngDevMode ? [{ debugName: "formData" }] : []);
    this.currentStep = signal("basic-info", ...ngDevMode ? [{ debugName: "currentStep" }] : []);
    this.isFormValid = computed(() => this.validateFormData(), ...ngDevMode ? [{ debugName: "isFormValid" }] : []);
    this.formData$.subscribe((data) => this.formData.set(data));
    this.currentStep$.subscribe((step) => this.currentStep.set(step));
  }
  /**
   * Record which role card the user picked on /register (Employee/Contractor/
   * Business) — Employee and Contractor share this same form + Auth/register
   * endpoint, differing only in the UserType sent on submit.
   */
  setAccountType(accountType) {
    this.updateStepData("basic-info", { accountType });
  }
  /** UserTypeEnum per swagger: 1=Employee, 2=Contractor, 3=Business. */
  accountTypeToUserType(accountType) {
    switch (accountType) {
      case "employee":
        return 1;
      case "business":
        return 3;
      case "contractor":
      default:
        return 2;
    }
  }
  /**
   * Convert a `yyyy-MM-dd` value from `<input type="date">` to the
   * `date-time` format Auth/register expects (confirmed against the live
   * endpoint — see memory: register-missing-required-fields).
   */
  toDateTime(dateOnly) {
    if (!dateOnly)
      return void 0;
    return `${dateOnly}T00:00:00Z`;
  }
  /**
   * Update form data for a specific step
   */
  updateStepData(step, data) {
    const currentData = this.formDataSubject.value;
    const updatedData = __spreadValues(__spreadValues({}, currentData), data);
    this.formDataSubject.next(updatedData);
    this.saveToStorage(updatedData);
  }
  /**
   * Get current form data
   */
  getFormData() {
    return this.formDataSubject.value;
  }
  /**
   * Get data for a specific step
   */
  getStepData(step) {
    const data = this.formDataSubject.value;
    switch (step) {
      case "basic-info":
        return data.basicInfo;
      case "edu-qual":
        return data.educationQualification;
      case "address":
        return data.address;
      case "attachments":
        return data.attachments;
      default:
        return null;
    }
  }
  /**
   * Get data for a Business step (isolated from contractor step keys).
   */
  getBusinessStepData(step) {
    const data = this.formDataSubject.value;
    switch (step) {
      case "business-basic-info":
        return data.businessBasicInfo;
      case "business-authorized":
        return data.businessAuthorized;
      case "business-attachments":
        return data.attachments;
      default:
        return null;
    }
  }
  /**
   * Set current step
   */
  setCurrentStep(step) {
    this.currentStepSubject.next(step);
  }
  /**
   * Get current step
   */
  getCurrentStep() {
    return this.currentStepSubject.value;
  }
  /**
   * Check if a specific step is completed
   */
  isStepCompleted(step) {
    const data = this.formDataSubject.value;
    switch (step) {
      case "basic-info":
        return !!(data.basicInfo?.firstName && data.basicInfo?.lastName && data.basicInfo?.email && data.basicInfo?.username && data.basicInfo?.password);
      case "edu-qual":
        return !!(data.educationQualification?.qualification && data.educationQualification?.industry);
      case "address":
        return !!(data.address?.country && data.address?.city);
      case "attachments":
        return !!(data.attachments?.cvResume && data.attachments?.passport && data.attachments?.educationCertification);
      default:
        return false;
    }
  }
  /**
   * Validate entire form data
   */
  validateFormData() {
    return this.isStepCompleted("basic-info") && this.isStepCompleted("edu-qual") && this.isStepCompleted("address") && this.isStepCompleted("attachments");
  }
  /**
   * Save form data to localStorage — password is intentionally excluded.
   * Sensitive credentials stay in-memory only (BehaviorSubject).
   */
  saveToStorage(data) {
    try {
      const storageData = __spreadProps(__spreadValues({}, data), {
        basicInfo: data.basicInfo ? __spreadProps(__spreadValues({}, data.basicInfo), {
          password: void 0
          // never persist password to localStorage
        }) : void 0,
        attachments: data.attachments ? {
          cvResume: data.attachments.cvResume ? { name: data.attachments.cvResume.name, size: data.attachments.cvResume.size } : void 0,
          passport: data.attachments.passport ? { name: data.attachments.passport.name, size: data.attachments.passport.size } : void 0,
          educationCertification: data.attachments.educationCertification ? { name: data.attachments.educationCertification.name, size: data.attachments.educationCertification.size } : void 0,
          experienceCertification: data.attachments.experienceCertification ? { name: data.attachments.experienceCertification.name, size: data.attachments.experienceCertification.size } : void 0,
          professorCertification: data.attachments.professorCertification ? { name: data.attachments.professorCertification.name, size: data.attachments.professorCertification.size } : void 0
        } : void 0
      });
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storageData));
    } catch {
    }
  }
  /**
   * Load form data from localStorage.
   * Password is never present here (excluded on save).
   */
  loadFromStorage() {
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
  clearFormData() {
    this.formDataSubject.next({});
    localStorage.removeItem(this.STORAGE_KEY);
  }
  /**
   * Clear all sensitive in-memory data (password, etc.)
   * Call this after successful registration or on navigation away.
   */
  clearSensitiveData() {
    const current = this.formDataSubject.value;
    if (current.basicInfo) {
      const sanitized = __spreadProps(__spreadValues({}, current), {
        basicInfo: __spreadProps(__spreadValues({}, current.basicInfo), { password: void 0 })
      });
      this.formDataSubject.next(sanitized);
    }
    localStorage.removeItem(this.STORAGE_KEY);
  }
  /**
   * Submit form data to backend via ApiService.
   * Uses environment.baseUrl — no hardcoded URLs.
   */
  submitForm() {
    const formData = this.formDataSubject.value;
    const fd = new FormData();
    fd.append("UserType", String(this.accountTypeToUserType(formData.accountType)));
    if (formData.basicInfo) {
      if (formData.basicInfo.firstName)
        fd.append("FirstName", formData.basicInfo.firstName);
      if (formData.basicInfo.lastName)
        fd.append("LastName", formData.basicInfo.lastName);
      if (formData.basicInfo.email)
        fd.append("Email", formData.basicInfo.email);
      if (formData.basicInfo.username)
        fd.append("UserName", formData.basicInfo.username);
      if (formData.basicInfo.password)
        fd.append("Password", formData.basicInfo.password);
      if (formData.basicInfo.country != null)
        fd.append("CountryId", String(formData.basicInfo.country));
      if (formData.basicInfo.city != null)
        fd.append("UserAddress.CityId", String(formData.basicInfo.city));
      if (formData.basicInfo.passportNumber)
        fd.append("PassportNumber", formData.basicInfo.passportNumber);
      if (formData.basicInfo.phoneNumber)
        fd.append("PhoneNumber", formData.basicInfo.phoneNumber);
      const dob = this.toDateTime(formData.basicInfo.dateOfBirth);
      if (dob)
        fd.append("DateOfBirth", dob);
    }
    if (formData.educationQualification) {
      if (formData.educationQualification.qualification != null)
        fd.append("QualificationId", String(formData.educationQualification.qualification));
      if (formData.educationQualification.industry != null)
        fd.append("IndustryId", String(formData.educationQualification.industry));
      if (formData.educationQualification.university != null)
        fd.append("UniversityId", String(formData.educationQualification.university));
      if (formData.educationQualification.jobTitle != null)
        fd.append("JobTitleId", String(formData.educationQualification.jobTitle));
      if (formData.educationQualification.idNumber)
        fd.append("IdNumber", formData.educationQualification.idNumber);
      const passportExpiry = this.toDateTime(formData.educationQualification.passportExpiryDate);
      if (passportExpiry)
        fd.append("PassportExpiryDate", passportExpiry);
    }
    if (formData.attachments) {
      if (formData.attachments.cvResume instanceof File)
        fd.append("CVAttach", formData.attachments.cvResume);
      if (formData.attachments.passport instanceof File)
        fd.append("PassportAttach", formData.attachments.passport);
      if (formData.attachments.educationCertification instanceof File)
        fd.append("EduCertificateAttach", formData.attachments.educationCertification);
      if (formData.attachments.experienceCertification instanceof File)
        fd.append("ExperienceCertificateAttach", formData.attachments.experienceCertification);
      if (formData.attachments.professorCertification instanceof File)
        fd.append("ProfCertificateAttach", formData.attachments.professorCertification);
    }
    return new Observable((observer) => {
      this.apiService.postForm("Auth/register", fd).subscribe({
        next: (data) => {
          observer.next(data);
          observer.complete();
          this.clearFormData();
        },
        error: (err) => observer.error(err)
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
  submitBusinessForm() {
    const data = this.formDataSubject.value;
    const fd = new FormData();
    const basic = data.businessBasicInfo;
    const auth = data.businessAuthorized;
    fd.append("UserType", "3");
    if (auth?.firstName)
      fd.append("FirstName", auth.firstName);
    const lastName = auth?.lastName || basic?.lastName;
    if (lastName)
      fd.append("LastName", lastName);
    if (auth?.email)
      fd.append("Email", auth.email);
    if (auth?.username)
      fd.append("UserName", auth.username);
    if (auth?.password)
      fd.append("Password", auth.password);
    if (basic?.country != null)
      fd.append("CountryId", String(basic.country));
    if (basic?.city != null)
      fd.append("UserAddress.CityId", String(basic.city));
    if (auth?.authorizedId)
      fd.append("IdNumber", auth.authorizedId);
    if (auth?.phoneNumber)
      fd.append("PhoneNumber", auth.phoneNumber);
    const dob = this.toDateTime(auth?.dateOfBirth);
    if (dob)
      fd.append("DateOfBirth", dob);
    if (auth?.passportNumber)
      fd.append("PassportNumber", auth.passportNumber);
    const passportExpiry = this.toDateTime(auth?.passportExpiryDate);
    if (passportExpiry)
      fd.append("PassportExpiryDate", passportExpiry);
    if (data.attachments) {
      if (data.attachments.cvResume instanceof File)
        fd.append("CVAttach", data.attachments.cvResume);
      if (data.attachments.passport instanceof File)
        fd.append("PassportAttach", data.attachments.passport);
      if (data.attachments.educationCertification instanceof File)
        fd.append("EduCertificateAttach", data.attachments.educationCertification);
      if (data.attachments.experienceCertification instanceof File)
        fd.append("ExperienceCertificateAttach", data.attachments.experienceCertification);
      if (data.attachments.professorCertification instanceof File)
        fd.append("ProfCertificateAttach", data.attachments.professorCertification);
    }
    return new Observable((observer) => {
      this.apiService.postForm("Auth/register", fd).subscribe({
        next: (response) => {
          observer.next(response);
          observer.complete();
          this.clearFormData();
        },
        error: (err) => observer.error(err)
      });
    });
  }
};
_CreateAccountFormService.\u0275fac = function CreateAccountFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateAccountFormService)();
};
_CreateAccountFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreateAccountFormService, factory: _CreateAccountFormService.\u0275fac, providedIn: "root" });
var CreateAccountFormService = _CreateAccountFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateAccountFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  CreateAccountFormService
};
//# sourceMappingURL=chunk-FMT3FVVH.js.map
