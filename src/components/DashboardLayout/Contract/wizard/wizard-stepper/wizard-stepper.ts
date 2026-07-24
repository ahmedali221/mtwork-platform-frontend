import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { StepDefinition } from '../wizard.types';

@Component({
  selector: 'app-wizard-stepper',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './wizard-stepper.html',
  styleUrls: ['./wizard-stepper.css'],
})
export class WizardStepperComponent {
  @Input() steps:          StepDefinition[] = [];
  @Input() currentStep:    number           = 1;
  @Input() completedSteps: Set<number>      = new Set();

  @Output() stepClicked = new EventEmitter<number>();

  isCompleted(n: number): boolean { return this.completedSteps.has(n); }
  isActive(n: number):    boolean { return n === this.currentStep; }
  isClickable(n: number): boolean {
    return n < this.currentStep || this.completedSteps.has(n);
  }

  onStepClick(n: number): void {
    if (this.isClickable(n)) this.stepClicked.emit(n);
  }
}
