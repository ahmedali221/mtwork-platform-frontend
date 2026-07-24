import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-component.html',
  styleUrls: ['./stepper-component.css']
})
export class StepperComponent {
  @Input() steps: string[] = [];
  @Input() current: number = 0;
}
