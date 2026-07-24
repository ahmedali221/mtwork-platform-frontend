import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-creatingimact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creatingimact.html',
  styleUrl: './creatingimact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatingimactComponent {
  readonly lang = inject(LanguageService);

  readonly statValues = ['500K', '500K', '500K'];
}
