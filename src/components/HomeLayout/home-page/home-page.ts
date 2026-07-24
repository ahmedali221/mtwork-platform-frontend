import { Component, OnDestroy, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FloatingActionsComponent } from '../floating-actions/floating-actions.component';
import { ThemeService } from '../../../services/theme.service';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, FloatingActionsComponent, RouterModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent implements OnDestroy {
  private themeService = inject(ThemeService);
  private themeEffectCleanup = effect(() => {
    const dark = this.themeService.isDarkMode();
    document.documentElement.classList.toggle('dark-theme', dark);
  });

  ngOnDestroy(): void {
    // ensure cleanup of the effect when leaving Home scope
    this.themeEffectCleanup.destroy?.();
  }
}
