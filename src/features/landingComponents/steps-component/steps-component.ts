import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-steps-component',
  templateUrl: './steps-component.html',
  styleUrls: ['./steps-component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class StepsComponent {
  readonly languageService = inject(LanguageService);

  readonly filterKeys = ['country', 'workerType', 'jobTitle'] as const;
  readonly payrollBars = [73, 62, 36, 62, 55, 36, 31];
  readonly stepNumbers = [1, 2, 3];
  readonly metricValue = '823K';
  readonly metricGrowth = '+9.1%';
  readonly stepItems = [
    { titleKey: 'step1Title', descKey: 'step1Desc' },
    { titleKey: 'step2Title', descKey: 'step2Desc' },
    { titleKey: 'step3Title', descKey: 'step3Desc' },
  ] as const;
}
