import { Component } from '@angular/core';
import { ContractWizardShellComponent } from '../contract-wizard-shell/contract-wizard-shell';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ContractWizardShellComponent],
  template: `<app-contract-wizard-shell contractType="Employee" />`,
})
export class CreateEmployeeComponent {}
