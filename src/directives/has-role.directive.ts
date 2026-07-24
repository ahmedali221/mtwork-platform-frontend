import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { UserRole } from '../models/roles.enum';

/**
 * Structural directive that shows/hides content based on the current user's role.
 *
 * Usage:
 *   <div *hasRole="[UserRole.Admin]">Admin only</div>
 *   <div *hasRole="[UserRole.Admin, UserRole.Business]">Admin + Business</div>
 */
@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private tokenService = inject(TokenService);
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);

  @Input() set hasRole(allowedRoles: UserRole[]) {
    const currentRole = this.tokenService.getUserRole() as UserRole | null;
    const isAllowed = currentRole !== null && allowedRoles.includes(currentRole);

    this.viewContainer.clear();
    if (isAllowed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
