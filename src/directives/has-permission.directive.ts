import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
} from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { FeatureKey } from '../models/feature-keys.enum';

/**
 * Structural directive — shows the host element only if the current user
 * holds the backend permission(s) required by the given FeatureKey.
 *
 * Reads from `AuthorizationService.permissions` (signal), so the view
 * re-renders automatically when permissions are refreshed (e.g. after
 * login, token refresh, or a future server-driven reload).
 *
 * Usage:
 *   <button *appHasPermission="FeatureKey.CreateLeave">New Request</button>
 *
 * For the CreateLeave business rule (employee + active contract), pair
 * with `[disabled]="!auth.validateEmployeeHasContract(emp)"` so the UX
 * distinguishes "no permission" (hidden) from "no contract" (disabled).
 */
@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  private auth          = inject(AuthorizationService);
  private templateRef   = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  private feature: FeatureKey | null = null;
  private rendered = false;

  @Input({ required: true })
  set appHasPermission(key: FeatureKey) {
    this.feature = key;
    this.update();
  }

  constructor() {
    // Re-evaluate whenever the permissions signal changes.
    effect(() => {
      // Touch the signal to register the dependency.
      this.auth.permissions();
      this.update();
    });
  }

  private update(): void {
    if (!this.feature) {
      if (this.rendered) {
        this.viewContainer.clear();
        this.rendered = false;
      }
      return;
    }
    const allowed = this.auth.canAccessFeature(this.feature);
    if (allowed && !this.rendered) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.rendered = true;
    } else if (!allowed && this.rendered) {
      this.viewContainer.clear();
      this.rendered = false;
    }
  }
}
