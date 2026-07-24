import { ContractType } from '../wizard/wizard.types';

// Returns undefined for empty strings, null, and undefined — omitted by JSON.stringify
function s(v: unknown): string | undefined {
  if (v === null || v === undefined) return undefined;
  const str = String(v).trim();
  return str === '' ? undefined : str;
}

// Returns undefined for 0, NaN, null, undefined
function n(v: unknown): number | undefined {
  if (v === null || v === undefined || v === '') return undefined;
  const num = Number(v);
  return isNaN(num) || num === 0 ? undefined : num;
}

// Removes all keys whose value is undefined
function strip(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  );
}

export function buildContractPayload(
  formValue: Record<string, unknown>,
  contractType: ContractType
): Record<string, unknown> {

  const employer   = (formValue['employer']   ?? {}) as Record<string, unknown>;
  const contractor = (formValue['contractor'] ?? {}) as Record<string, unknown>;

  // API ContractTypeEnum: 1=EmployeeContract, 2=FixedPayContract,
  //                        3=PerTaskContract,  4=PerProjectContract
  const contractTypeId: Record<ContractType, number> = {
    Employee:    1,   // EmployeeContract
    FixedSalary: 2,   // FixedPayContract
    PayByTask:   3,   // PerTaskContract
    Milestone:   4,   // PerProjectContract
  };

  const base = strip({
    contractTypeId: contractTypeId[contractType],

    // Employer
    entityName:                s(employer['entityName']),
    officialNumber:            s(employer['officialNumber']),
    companyPhone:              s(employer['phoneNumber']),
    companyEmail:              s(employer['emailAddress']),
    companyAddress:            s(employer['address']),
    representative:            s(employer['representative']),
    representativeIdentity:    s(employer['representativeIdentity']),
    representativeEmail:       s(employer['representativeEmail']),
    representativeDescription: s(employer['representativeDescription']),

    // Contractor / employee
    employeeName:  s(contractor['contractorName']),
    nationality:   s(contractor['nationality']),
    idNumber:      s(contractor['idNumber']),
    employeePhone: s(contractor['phoneNumber']),
    employeeEmail: s(contractor['emailAddress']),
    jobTitleName:  s(contractor['jobTitle']),
    address:       s(contractor['address']),
    bankName:      s(contractor['bankName']),
    iban:          s(contractor['iban']),
  });

  switch (contractType) {
    case 'FixedSalary': {
      const scope       = (formValue['scopeOfWork']  ?? {}) as Record<string, unknown>;
      const contracting = (formValue['contracting']  ?? {}) as Record<string, unknown>;
      const financial   = (formValue['financial']    ?? {}) as Record<string, unknown>;

      Object.assign(base, strip({
        jobNumber:              s(scope['jobNumber']),
        jobDescription:         s(scope['jobDescription']),
        startDate:              s(contracting['startDate']),
        endDate:                s(contracting['endDate']),
        trialPeriod:            s(contracting['trialPeriod']),
        terminateDuringTrial:   s(contracting['rightToTerminateTrial']),
        terminateDuringContract: s(contracting['rightToTerminateDuring']),
        terminateContract:      s(contracting['rightToTerminate']),
        noticePeriod:           s(contracting['noticePeriod']),
        currency:               s(financial['currency']),
        billingCycle:           s(financial['billingCycle']),
        salary:                 n(financial['amount']),
        firstBatchFrom:         s(financial['firstBatchFrom']),
        firstBatchTo:           s(financial['firstBatchTo']),
        firstPatchAmount:       n(financial['firstPaymentAmount']),
        lastBatchFrom:          s(financial['lastBatchFrom']),
        lastBatchTo:            s(financial['lastBatchTo']),
        lastPatchAmount:        n(financial['lastPaymentAmount']),
      }));
      break;
    }

    case 'PayByTask': {
      const sc    = (formValue['scopeContracting'] ?? {}) as Record<string, unknown>;
      const tasks = (formValue['tasks'] ?? [])             as Record<string, unknown>[];

      Object.assign(base, strip({
        jobTitleName:  s(sc['jobTitle']),
        startDate:     s(sc['startDate']),
        endDate:       s(sc['endDate']),
        trialPeriod:   s(sc['trialPeriod']),
        noticePeriod:  s(sc['noticePeriod']),
        tasks: tasks.map(t => strip({
          taskTitle:     s(t['taskTitle']),
          workBrief:     s(t['workBrief']),
          taskStartDate: s(t['taskStartDate']),
          taskAmount:    n(t['taskAmount']),
          filePath:      s(t['filePath']),
        })),
      }));
      break;
    }

    case 'Milestone': {
      const sc     = (formValue['scopeContracting'] ?? {}) as Record<string, unknown>;
      const stages = (formValue['stages'] ?? [])           as Record<string, unknown>[];

      Object.assign(base, strip({
        jobTitleName:  s(sc['jobTitle']),
        startDate:     s(sc['startDate']),
        endDate:       s(sc['endDate']),
        trialPeriod:   s(sc['trialPeriod']),
        noticePeriod:  s(sc['noticePeriod']),
        stages: stages.map(st => strip({
          stageTitle:     s(st['stageTitle']),
          workBrief:      s(st['workBrief']),
          stageStartDate: s(st['stageStartDate']),
          stageAmount:    n(st['stageAmount']),
          filePath:       s(st['filePath']),
        })),
      }));
      break;
    }

    case 'Employee': {
      const contracting = (formValue['contracting']  ?? {}) as Record<string, unknown>;
      const workingTime = (formValue['workingTime']  ?? {}) as Record<string, unknown>;
      const days = workingTime['workingDays'];

      Object.assign(base, strip({
        startDate:            s(contracting['contractStartDate']),
        contractDuration:     s(contracting['contractDuration']),
        trialPeriod:          s(contracting['trialPeriod']),
        typeOfWork:           s(contracting['typeOfWork']),
        vacationDays:         n(contracting['vacationDays']),
        noticePeriod:         s(contracting['noticePeriod']),
        numberOfWorkingHours: n(workingTime['numberOfWorkingHours']),
        workingDays:          Array.isArray(days) && days.length > 0 ? days : undefined,
        workingHoursFrom:     s(workingTime['workingHoursFrom']),
        workingHoursTo:       s(workingTime['workingHoursTo']),
        salary:               n(workingTime['salary']),
        currency:             s(workingTime['currency']),
        billingCycle:         s(workingTime['billingCycle']),
        includeAllowances:    workingTime['allowances'] === true ? true : undefined,
      }));
      break;
    }
  }

  return base;
}
