// src/models/contract-models.ts
var ContractStatus;
(function(ContractStatus2) {
  ContractStatus2[ContractStatus2["Initiated"] = 1] = "Initiated";
  ContractStatus2[ContractStatus2["Reviewed"] = 2] = "Reviewed";
  ContractStatus2[ContractStatus2["Approved"] = 3] = "Approved";
  ContractStatus2[ContractStatus2["Canceled"] = 4] = "Canceled";
})(ContractStatus || (ContractStatus = {}));
var CONTRACT_STATUS_LABELS = {
  [ContractStatus.Initiated]: "contracts.status.initiated",
  [ContractStatus.Reviewed]: "contracts.status.reviewed",
  [ContractStatus.Approved]: "contracts.status.approved",
  [ContractStatus.Canceled]: "contracts.status.canceled"
};
var ContractType;
(function(ContractType2) {
  ContractType2[ContractType2["EmployeeContract"] = 1] = "EmployeeContract";
  ContractType2[ContractType2["FixedPayContract"] = 2] = "FixedPayContract";
  ContractType2[ContractType2["PerTaskContract"] = 3] = "PerTaskContract";
  ContractType2[ContractType2["PerProjectContract"] = 4] = "PerProjectContract";
})(ContractType || (ContractType = {}));
var CONTRACT_TYPE_LABELS = {
  [ContractType.EmployeeContract]: "contracts.types.employeeContract",
  [ContractType.FixedPayContract]: "contracts.types.fixedPayContract",
  [ContractType.PerTaskContract]: "contracts.types.perTaskContract",
  [ContractType.PerProjectContract]: "contracts.types.perProjectContract"
};

export {
  ContractStatus,
  CONTRACT_STATUS_LABELS,
  ContractType
};
//# sourceMappingURL=chunk-5LLUWZOB.js.map
