
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);

  // Exact segment dimensions from Figma Dev Mode (node 3:37674 → Component 185)
  protected readonly logoSegments = [
    { src: 'assets/images/navbar/logo-1.svg', width: 23.211, height: 15.464 },
    { src: 'assets/images/navbar/logo-2.svg', width: 11.6, height: 14.951 },
    { src: 'assets/images/navbar/logo-3.svg', width: 23.22, height: 15.464 },
    { src: 'assets/images/navbar/logo-4.svg', width: 15.503, height: 14.961 },
    { src: 'assets/images/navbar/logo-5.svg', width: 13.7, height: 14.961 },
    { src: 'assets/images/navbar/logo-6.svg', width: 13.838, height: 14.951 },
  ] as const;

  protected readonly navLinks = [
    { key: 'home', fallback: 'Home', route: '/Home' },
    { key: 'about', fallback: 'About', route: '/About' },
    { key: 'services', fallback: 'Service', route: '/Services' },
    { key: 'blog', fallback: 'Blog', route: '/Blog' },
    { key: 'contact', fallback: 'Contact', route: '/Contact' },
  ] as const;

  protected readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
