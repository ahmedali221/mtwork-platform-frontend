import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

// Figma node 3:37872 — Impact section: 4 tab pills + 2×2 card grid
@Component({
  selector: 'app-hrsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hrsection.html',
  styleUrl: './hrsection.css',
})
export class HRsectionComponent {
  lang = inject(LanguageService);

  readonly tabs = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  // Row layout per Figma: row 1 = [wide, narrow], row 2 = [narrow, wide]
  readonly rows = [
    [{ wide: true }, { wide: false }],
    [{ wide: false }, { wide: true }],
  ];
}
