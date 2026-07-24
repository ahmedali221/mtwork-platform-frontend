import { Component } from '@angular/core';
import { ContractWizardShellComponent } from '../contract-wizard-shell/contract-wizard-shell';

@Component({
  selector: 'app-create-fixed-salary',
  standalone: true,
  imports: [ContractWizardShellComponent],
  template: `<app-contract-wizard-shell contractType="FixedSalary" />`,
})
export class CreateFixedSalaryComponent {}
