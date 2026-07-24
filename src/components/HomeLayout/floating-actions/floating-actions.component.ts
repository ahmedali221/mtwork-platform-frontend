import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [],
  templateUrl: './floating-actions.component.html',
  styleUrl: './floating-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingActionsComponent {
  readonly languageService = inject(LanguageService);

  // Temporary placeholder links (per spec)
  readonly whatsappLink = '#';
  readonly phoneLink = '#';
  readonly assistantLink = '#';
}
