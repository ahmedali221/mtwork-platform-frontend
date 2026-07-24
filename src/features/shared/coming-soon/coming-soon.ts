import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="coming-soon-wrapper">
      <span class="coming-soon-icon">🚧</span>
      <h2 class="coming-soon-title">{{ title() }}</h2>
      <p class="coming-soon-subtitle">This feature is coming soon.</p>
    </div>
  `,
  styles: [`
    .coming-soon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      gap: 12px;
      color: var(--ui-text-sub);
    }
    .coming-soon-icon { font-size: 48px; }
    .coming-soon-title { font-size: 1.5rem; font-weight: 600; margin: 0; color: var(--ui-text-main); }
    .coming-soon-subtitle { margin: 0; }
  `]
})
export class ComingSoonComponent {
  title = input<string>('Coming Soon');
}
