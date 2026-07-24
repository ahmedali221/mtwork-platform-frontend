import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

// Figma node 3:37939 — compliance intro + 3 cards + why band + 6 service cards
@Component({
  selector: 'app-continouscompliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continouscompliance.html',
  styleUrls: ['./continouscompliance.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContinouscomplianceComponent {
  readonly lang = inject(LanguageService);

  readonly totalTrustedCompanies = 20;
  readonly portalCount = Array(6).fill(null);
}
