import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    } else if (savedTheme === 'light') {
      this.isDarkMode.set(false);
    } else {
      this.isDarkMode.set(prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');  // حفظ الافتراضي
    }

    // Listener لتغييرات النظام (لو مش محفوظ يدويًا)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'system') {  // افترض 'system' لو عايز خيار تلقائي
        this.isDarkMode.set(e.matches);
      }
    });
  }

  // الـeffect خارج الـconstructor للتنظيم
  private themeEffect = effect(() => {
    const dark = this.isDarkMode();
    document.documentElement.classList.toggle('dark-theme', dark);  // غيرت إلى dark-theme
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });

  toggleTheme(): void {
    this.isDarkMode.update(isDark => !isDark);
  }
}