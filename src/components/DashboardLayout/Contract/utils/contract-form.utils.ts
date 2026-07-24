import { Contract } from '../../../../models/contract-models';
import { ContractType } from '../wizard/wizard.types';

/**
 * Maps an API Contract response to the shape expected by parentForm.patchValue().
 * Only populates the keys relevant to the given contractType.
 */
export function contractToForm(contract: Contract, contractType: ContractType): Record<string, unknown> {
  const employer = {
    entityName:                contract.employer?.entityName                ?? '',
    officialNumber:            contract.employer?.officialNumber            ?? '',
    phoneNumber:               contract.employer?.phone                    ?? '',
    emailAddress:              contract.employer?.email                    ?? '',
    address:                   contract.employer?.address                  ?? '',
    representative:            contract.empoleeOrContractor?.authorizedFirstName ?? '',
    representativeIdentity:    contract.empoleeOrContractor?.authorizedId  ?? '',
    representativeEmail:       '',
    representativeDescription: '',
  };

  const contractor = {
    contractorName: contract.empoleeOrContractor?.name        ?? '',
    nationality:    contract.empoleeOrContractor?.country     ?? '',
    idNumber:       contract.empoleeOrContractor?.authorizedId ?? '',
    phoneNumber:    contract.empoleeOrContractor?.phone       ?? '',
    emailAddress:   contract.empoleeOrContractor?.email       ?? '',
    jobTitle:       contract.empoleeOrContractor?.role        ?? '',
    address:        contract.empoleeOrContractor?.address     ?? '',
    bankName:       '',
    iban:           '',
  };

  const base: Record<string, unknown> = { employer, contractor };

  switch (contractType) {
    case 'FixedSalary':
      base['scopeOfWork'] = {
        jobTitle:       contract.contractTitle   ?? '',
        jobNumber:      contract.workId          ?? '',
        jobDescription: contract.description     ?? '',
      };
      base['contracting'] = {
        startDate:              contract.startDate               ?? '',
        endDate:                contract.endDate                 ?? '',
        trialPeriod:            contract.trialPeriod             ?? '',
        rightToTerminateTrial:  contract.terminateDuringTrial   ?? '',
        rightToTerminateDuring: '',
        rightToTerminate:       contract.terminateContract       ?? '',
        noticePeriod:           contract.noticePeriod            ?? '',
      };
      base['financial'] = {
        currency:           contract.currency       ?? '',
        billingCycle:       contract.billingCycle   ?? '',
        amount:             contract.salary         ?? '',
        firstBatchFrom:     '',
        firstBatchTo:       '',
        firstPaymentAmount: '',
        lastBatchFrom:      '',
        lastBatchTo:        '',
        lastPaymentAmount:  '',
      };
      break;

    case 'PayByTask':
      base['scopeContracting'] = {
        jobTitle:     contract.contractTitle  ?? '',
        startDate:    contract.startDate      ?? '',
        endDate:      contract.endDate        ?? '',
        trialPeriod:  contract.trialPeriod    ?? '',
        noticePeriod: contract.noticePeriod   ?? '',
      };
      break;

    case 'Milestone':
      base['scopeContracting'] = {
        jobTitle:     contract.contractTitle  ?? '',
        startDate:    contract.startDate      ?? '',
        endDate:      contract.endDate        ?? '',
        trialPeriod:  contract.trialPeriod    ?? '',
        noticePeriod: contract.noticePeriod   ?? '',
      };
      break;

    case 'Employee':
      base['contracting'] = {
        contractStartDate: contract.startDate          ?? '',
        contractDuration:  contract.contractDuration   ?? '',
        trialPeriod:       contract.trialPeriod        ?? '',
        typeOfWork:        contract.typeOfWork          ?? '',
        vacationDays:      contract.vacationDays        ?? null,
        noticePeriod:      contract.noticePeriod        ?? '',
      };
      base['workingTime'] = {
        numberOfWorkingHours: contract.numberOfWorkingHours ?? null,
        workingDays:          [],
        workingHoursFrom:     '',
        workingHoursTo:       '',
        salary:               contract.salary    ?? '',
        currency:             contract.currency  ?? '',
        billingCycle:         contract.billingCycle ?? '',
        allowances:           contract.includeAllowances ?? false,
      };
      break;
  }

  return base;
}
