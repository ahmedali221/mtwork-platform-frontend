import { Component } from '@angular/core';
import { ContractWizardShellComponent } from '../contract-wizard-shell/contract-wizard-shell';

@Component({
  selector: 'app-create-pay-by-task',
  standalone: true,
  imports: [ContractWizardShellComponent],
  template: `<app-contract-wizard-shell contractType="PayByTask" />`,
})
export class CreatePayByTaskComponent {}
