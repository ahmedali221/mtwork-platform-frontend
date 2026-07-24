
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  languageService = inject(LanguageService);
  currentYear = new Date().getFullYear();

  // Component 185 wordmark — exact Figma Dev Mode segment dims (node 3:38261)
  readonly logoSegments = [
    { src: 'assets/images/navbar/logo-1.svg', width: 23.211, height: 15.464 },
    { src: 'assets/images/navbar/logo-2.svg', width: 11.6, height: 14.951 },
    { src: 'assets/images/navbar/logo-3.svg', width: 23.22, height: 15.464 },
    { src: 'assets/images/navbar/logo-4.svg', width: 15.503, height: 14.961 },
    { src: 'assets/images/navbar/logo-5.svg', width: 13.7, height: 14.961 },
    { src: 'assets/images/navbar/logo-6.svg', width: 13.838, height: 14.951 },
  ] as const;

  readonly socials = [
    { icon: 'fab fa-instagram', key: 'instagram' },
    { icon: 'fab fa-linkedin-in', key: 'linkedin' },
    { icon: 'fab fa-youtube', key: 'youtube' },
    { icon: 'fab fa-facebook-f', key: 'facebook' },
    { icon: 'fab fa-x-twitter', key: 'twitter' },
  ] as const;
}
