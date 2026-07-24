// src/features/auth/CreateAccount/validators/custom-validators.ts
var CustomValidators = class {
  /**
   * Password strength validator (10-70 characters)
   */
  static passwordStrength() {
    return (control) => {
      if (!control.value) {
        return null;
      }
      const value = control.value;
      const errors = {};
      if (value.length < 10) {
        errors["minLength"] = { requiredLength: 10, actualLength: value.length };
      }
      if (value.length > 70) {
        errors["maxLength"] = { requiredLength: 70, actualLength: value.length };
      }
      if (!/[A-Z]/.test(value)) {
        errors["uppercase"] = true;
      }
      if (!/[a-z]/.test(value)) {
        errors["lowercase"] = true;
      }
      if (!/[0-9]/.test(value)) {
        errors["number"] = true;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errors["specialChar"] = true;
      }
      return Object.keys(errors).length > 0 ? { passwordStrength: errors } : null;
    };
  }
  /**
   * Password match validator (for FormGroup level)
   */
  static passwordMatch(passwordControlName) {
    return (control) => {
      const formGroup = control;
      if (!formGroup || !formGroup.get) {
        return null;
      }
      const password = formGroup.get(passwordControlName)?.value;
      const confirmPassword = formGroup.get("confirmPassword")?.value;
      if (!password || !confirmPassword) {
        return null;
      }
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
  /**
   * Email format validator
   */
  static emailFormat() {
    return (control) => {
      if (!control.value) {
        return null;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(control.value) ? null : { emailFormat: true };
    };
  }
  /**
   * Username validator (alphanumeric and underscore only)
   */
  static usernameFormat() {
    return (control) => {
      if (!control.value) {
        return null;
      }
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      return usernameRegex.test(control.value) ? null : { usernameFormat: true };
    };
  }
  /**
   * File type validator
   */
  static fileType(allowedTypes) {
    return (control) => {
      if (!control.value) {
        return null;
      }
      const file = control.value;
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (!fileExtension || !allowedTypes.includes(fileExtension)) {
        return { fileType: { allowedTypes, actualType: fileExtension } };
      }
      return null;
    };
  }
  /**
   * File size validator (max size in bytes)
   */
  static fileSize(maxSizeInMB) {
    return (control) => {
      if (!control.value) {
        return null;
      }
      const file = control.value;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        return {
          fileSize: {
            maxSize: maxSizeInMB,
            actualSize: (file.size / (1024 * 1024)).toFixed(2)
          }
        };
      }
      return null;
    };
  }
};

export {
  CustomValidators
};
//# sourceMappingURL=chunk-UGR5L4VL.js.map
