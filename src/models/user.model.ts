/**
 * UserType IDs — mirrors backend UserTypeEnum.cs
 * Source: API doc §6 (UserTypeEnum): 1=Employee, 2=Contractor, 3=Business only.
 *
 * NOTE: Admin is a JWT *role* claim ("role": "Admin"), NOT a UserType.
 * Do NOT add Admin=4 here — it does not exist in the backend enum and
 * causes incorrect authorization logic. Use UserRole.Admin from roles.enum.ts.
 */
export enum UserTypeId {
  Employee   = 1,
  Contractor = 2,
  Business   = 3,
}

export interface UserDto {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  userTypeId: number;
  companyId?: number;
  jobTitleId?: number;
  qualificationId?: number;
  universityId?: number;
  countryId?: number;
  cityId?: number;
  nationalityId?: number;
  gender?: number;
  birthDate?: string;
  nationalId?: string;
  passportNumber?: string;
  ibanNumber?: string;
  address?: string;
  isActive?: boolean;
  profileImagePath?: string;
  cvPath?: string;
  passportPath?: string;
  nationalIdPath?: string;
}
