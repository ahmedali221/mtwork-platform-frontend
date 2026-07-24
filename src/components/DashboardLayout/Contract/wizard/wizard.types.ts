export interface StepDefinition {
  number:   number;
  labelKey: string;
  formKey:  string;
}

export type ContractType = 'FixedSalary' | 'PayByTask' | 'Milestone' | 'Employee';

export const STEP_CONFIGS: Record<ContractType, StepDefinition[]> = {
  FixedSalary: [
    { number: 1, labelKey: 'wizard.steps.employerInfo',   formKey: 'employer'    },
    { number: 2, labelKey: 'wizard.steps.contractorInfo', formKey: 'contractor'  },
    { number: 3, labelKey: 'wizard.steps.scopeOfWork',    formKey: 'scopeOfWork' },
    { number: 4, labelKey: 'wizard.steps.contracting',    formKey: 'contracting' },
    { number: 5, labelKey: 'wizard.steps.financial',      formKey: 'financial'   },
  ],
  PayByTask: [
    { number: 1, labelKey: 'wizard.steps.employerInfo',     formKey: 'employer'         },
    { number: 2, labelKey: 'wizard.steps.contractorInfo',   formKey: 'contractor'       },
    { number: 3, labelKey: 'wizard.steps.scopeContracting', formKey: 'scopeContracting' },
    { number: 4, labelKey: 'wizard.steps.tasks',            formKey: 'tasks'            },
  ],
  Milestone: [
    { number: 1, labelKey: 'wizard.steps.employerInfo',     formKey: 'employer'         },
    { number: 2, labelKey: 'wizard.steps.contractorInfo',   formKey: 'contractor'       },
    { number: 3, labelKey: 'wizard.steps.scopeContracting', formKey: 'scopeContracting' },
    { number: 4, labelKey: 'wizard.steps.stages',           formKey: 'stages'           },
  ],
  Employee: [
    { number: 1, labelKey: 'wizard.steps.employerInfo',   formKey: 'employer'    },
    { number: 2, labelKey: 'wizard.steps.contractorInfo', formKey: 'contractor'  },
    { number: 3, labelKey: 'wizard.steps.contracting',    formKey: 'contracting' },
    { number: 4, labelKey: 'wizard.steps.workingTime',    formKey: 'workingTime' },
  ],
};

export const CONTRACT_TYPE_LABELS: Record<ContractType, string> = {
  FixedSalary: 'wizard.title.fixedSalary',
  PayByTask:   'wizard.title.payByTask',
  Milestone:   'wizard.title.milestone',
  Employee:    'wizard.title.employee',
};

export const CONTRACT_TYPE_EDIT_LABELS: Record<ContractType, string> = {
  FixedSalary: 'wizard.title.editFixedSalary',
  PayByTask:   'wizard.title.editPayByTask',
  Milestone:   'wizard.title.editMilestone',
  Employee:    'wizard.title.editEmployee',
};
