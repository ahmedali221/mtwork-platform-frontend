import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@/src/services/language.service';

// Figma node 3:38140 — blog header + 3 blog cards (390×454)
@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-component.html',
  styleUrl: './blog-component.css'
})
export class BlogComponent {
  languageService = inject(LanguageService);

  blogPosts = [
    { id: 1, image: 'assets/images/blog/blog-card-image.png', title: 'Trusted by 20 big companies', category: 'Payroll' },
    { id: 2, image: 'assets/images/blog/blog-card-image.png', title: 'Trusted by 20 big companies', category: 'Payroll' },
    { id: 3, image: 'assets/images/blog/blog-card-image.png', title: 'Trusted by 20 big companies', category: 'Payroll' },
  ];
}
