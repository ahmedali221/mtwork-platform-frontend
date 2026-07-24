import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { LanguageService } from '../../../services/language.service';
import { TokenService } from '../../../services/token.service';
import { CreateAccountFormService } from '../CreateAccount/services/create-account-form.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
  tokenService = inject(TokenService);
  router = inject(Router);
  createAccountFormService = inject(CreateAccountFormService);

  selectedRole = signal<string | null>(null);

  /** MTWORK wordmark — same 6 SVG segments as login/OTP topbar (Figma 3:124201). */
  readonly logoSegments = [
    { src: 'assets/images/navbar/logo-1.svg', width: 23.211, height: 15.464 },
    { src: 'assets/images/navbar/logo-2.svg', width: 11.6, height: 14.951 },
    { src: 'assets/images/navbar/logo-3.svg', width: 23.22, height: 15.464 },
    { src: 'assets/images/navbar/logo-4.svg', width: 15.503, height: 14.961 },
    { src: 'assets/images/navbar/logo-5.svg', width: 13.7, height: 14.961 },
    { src: 'assets/images/navbar/logo-6.svg', width: 13.838, height: 14.951 },
  ] as const;

  /** 3 role cards (Figma 3:124213/14/15) — exact Figma illustration assets,
   *  per-role tint + body color. */
  readonly cards = [
    { key: 'business',   title: 'As a business', illus: 'assets/images/signup/illus-business.png',   modifier: 'register-card--business' },
    { key: 'contractor', title: 'Contractor',    illus: 'assets/images/signup/illus-contractor.png', modifier: 'register-card--contractor' },
    { key: 'employee',   title: 'Employee',      illus: 'assets/images/signup/illus-employee.png',   modifier: 'register-card--employee' },
  ] as const;

  readonly cardBody = 'Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team';

  constructor() {
    const token = localStorage.getItem('MT_token');
    if (token && !this.tokenService.isTokenExpired()) {
      this.router.navigate(['/dashboard']);
    }
  }

  selectRole(role: string) {
    this.selectedRole.set(role);
    const routeMap: Record<string, string> = {
      contractor: '/CreateContractorAccount',
      // Employee has no dedicated flow — it reuses the Contractor form and
      // Auth/register endpoint, distinguished only by the UserType recorded
      // below (see CreateAccountFormService.submitForm()).
      employee:   '/CreateContractorAccount',
      business:   '/CreateBusinessAccount',
    };
    const target = routeMap[role];
    if (!target) return;

    if (role === 'employee' || role === 'contractor' || role === 'business') {
      this.createAccountFormService.setAccountType(role);
    }
    this.router.navigate([target]);
  }

  setTheme(mode: 'light' | 'dark') {
    const isDark = this.themeService.isDarkMode();
    if ((mode === 'dark' && !isDark) || (mode === 'light' && isDark)) {
      this.themeService.toggleTheme();
    }
  }

  toggleTheme() { this.themeService.toggleTheme(); }
  toggleLanguage() { this.languageService.toggleLanguage(); }
}
