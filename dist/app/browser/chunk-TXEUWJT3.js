// src/models/roles.enum.ts
var UserRole;
(function(UserRole2) {
  UserRole2["Admin"] = "Admin";
  UserRole2["Employee"] = "Employee";
  UserRole2["Contractor"] = "Contractor";
  UserRole2["Business"] = "Business";
})(UserRole || (UserRole = {}));
var UserType;
(function(UserType2) {
  UserType2[UserType2["Employee"] = 1] = "Employee";
  UserType2[UserType2["Contractor"] = 2] = "Contractor";
  UserType2[UserType2["Business"] = 3] = "Business";
})(UserType || (UserType = {}));

export {
  UserRole,
  UserType
};
//# sourceMappingURL=chunk-TXEUWJT3.js.map
