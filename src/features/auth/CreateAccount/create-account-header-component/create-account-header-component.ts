import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';
import { ThemeService } from '../../../../services/theme.service';
@Component({
  selector: 'app-create-account-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-account-header-component.html',
  styleUrls: ['./create-account-header-component.css']
})
export class CreateAccountHeaderComponent {
  lang = inject(LanguageService);
  themeService = inject(ThemeService);

 

 

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.lang.toggleLanguage();
  }
  ngOnInit() {
}}
