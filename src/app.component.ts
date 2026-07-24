import { Component, ChangeDetectionStrategy, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import { HomePageComponent } from './components/HomeLayout/home-page/home-page';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  host: {
    '[attr.dir]': 'languageService.direction()'
  }
})
export class AppComponent {
  languageService = inject(LanguageService);
  themeService = inject(ThemeService);
  title = 'mtwork-platform';

  constructor() {
    effect(() => {
      const lang = this.languageService.currentLang();
      const dir = this.languageService.direction();
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    });
  }
}