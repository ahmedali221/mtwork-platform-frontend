import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-choosing-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choosing-component.html',
  styleUrl: './choosing-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoosingComponent {
  readonly lang = inject(LanguageService);
  private readonly router = inject(Router);

  readonly image1 = 'assets/images/chooseBg1.png';
  readonly image2 = 'assets/images/chooseBg2.png';

  onGetStarted(): void {
    this.router.navigate(['/register']);
  }
}
