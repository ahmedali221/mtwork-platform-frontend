
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { StepsComponent } from '../steps-component/steps-component';
import { BlogComponent } from '../blog-component/blog-component';
import { ChoosingComponent } from '../choosing-component/choosing-component';
import { AnalysisSectionComponent } from '../analysis-section/analysis-section';
import{HRsectionComponent} from '../../landingComponents/hrsection/hrsection';
import{CreatingimactComponent}from '../../landingComponents/creatingimact/creatingimact';
import{ContinouscomplianceComponent}from '../../landingComponents/continouscompliance/continouscompliance'

@Component({
  selector: 'app-landingcomponent',
  standalone:true,
  imports: [CommonModule, RouterLink, StepsComponent,BlogComponent,ChoosingComponent,
    AnalysisSectionComponent,CreatingimactComponent,HRsectionComponent,ContinouscomplianceComponent],
  templateUrl: './landingcomponent.html',
  styleUrl: './landingcomponent.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landingcomponent {
  languageService = inject(LanguageService);
  private document = inject(DOCUMENT);

  scrollToFeatures(): void {
    this.document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }

  // Figma 3:38081 — 3 columns × 5 cards (offset stacks, clipped to 684px).
  // Visible card bg: columns 1 & 3 peach, column 2 blue (sampled from Figma render).
  readonly testimonialColumns = [
    { blue: false, cards: Array(5).fill(null) },
    { blue: true, cards: Array(5).fill(null) },
    { blue: false, cards: Array(5).fill(null) },
  ];

  // Figma placeholder content (nodes 3:138730/35/36) — i18n keys take over when added
  readonly testimonialQuote =
    'Working with Mtwokr is very impressive and high looking experiance for payroll, insurance, HRs managment system ever with good Saas soultions';
  readonly testimonialName = 'Abdelrahman Farid';
  readonly testimonialRole = 'Ceo Rawbit';



}
