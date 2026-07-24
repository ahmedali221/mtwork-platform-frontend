import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../../../../services/language.service';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-create-account-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './create-account-layout.html',
  styleUrls: ['./create-account-layout.css']
})
export class CreateAccountLayout {
  lang = inject(LanguageService);
  themeService = inject(ThemeService);

  toggleLanguage() {
    this.lang.toggleLanguage();
  }

  setTheme(mode: 'light' | 'dark') {
    const isDark = this.themeService.isDarkMode();
    if ((mode === 'dark' && !isDark) || (mode === 'light' && isDark)) {
      this.themeService.toggleTheme();
    }
  }
}
