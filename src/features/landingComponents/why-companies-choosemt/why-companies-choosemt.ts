import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-why-companies-choosemt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-companies-choosemt.html',
  styleUrl: './why-companies-choosemt.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyCompaniesChoosemtComponent {
  readonly lang = inject(LanguageService);
}
