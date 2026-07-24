import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Shared empty-state block used across the dashboard.
 *
 * Layout: icon (top) + title + description (centered).
 * - `icon` is a Material Symbols / Material Icons ligature name. When provided,
 *   the host should ensure MatIconModule (or any provider of the `mat-icon`
 *   selector) is available at the parent scope — we keep the markup
 *   svg-based here so this component has no Angular Material runtime dependency.
 *
 * Inputs:
 *   - title:       short headline (required)
 *   - description: explanatory subtext (optional)
 *   - kind:        which built-in glyph to render. Defaults to 'inbox'.
 */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-state.html',
  styleUrls: ['./empty-state.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() kind: 'inbox' | 'chat' | 'bell' | 'search' = 'inbox';
}
