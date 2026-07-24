/**
 * Role strings as stored in the JWT "role" claim.
 * Backend: ClaimTypes.Role → serialized as "role" in JWT payload.
 * Source: MTWorkHR.Infrastructure migrations (AspNetRoles seed data)
 */
export enum UserRole {
  Admin      = 'Admin',
  Employee   = 'Employee',
  Contractor = 'Contractor',
  Business   = 'Business',
}

/**
 * Numeric user type matching the backend UserTypeEnum.
 * Source: MTWorkHR.Core\Global\Enum\UserTypeEnum.cs
 * Used in the ApplicationUser.UserType property.
 */
export enum UserType {
  Employee   = 1,
  Contractor = 2,
  Business   = 3,
}
