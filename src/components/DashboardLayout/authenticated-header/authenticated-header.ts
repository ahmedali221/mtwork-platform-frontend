import { Component, inject, OnDestroy, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { SidebarService } from '../../../services/sidebar';
import { ThemeService } from '../../../services/theme.service';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth';
import { UserRole } from '../../../models/roles.enum';
import { NotificationsService } from '../../../features/notifications/notifications.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

/** Display label + CSS class for each role */
const ROLE_META: Record<UserRole, { labelKey: string; cssClass: string }> = {
  [UserRole.Admin]:      { labelKey: 'roles.admin',      cssClass: 'role-badge--admin' },
  [UserRole.Business]:   { labelKey: 'roles.business',   cssClass: 'role-badge--business' },
  [UserRole.Employee]:   { labelKey: 'roles.employee',   cssClass: 'role-badge--employee' },
  [UserRole.Contractor]: { labelKey: 'roles.contractor', cssClass: 'role-badge--contractor' },
};

@Component({
  selector: 'app-authenticated-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    TranslocoModule,
  ],
  templateUrl: './authenticated-header.html',
  styleUrls: ['./authenticated-header.css']
})
export class AuthenticatedHeaderComponent implements OnDestroy {
  protected sidebarService = inject(SidebarService);
  protected themeService   = inject(ThemeService);
  private tokenService     = inject(TokenService);
  private authService      = inject(AuthService);
  private breakpointObserver = inject(BreakpointObserver);
  private elementRef       = inject(ElementRef);
  private notificationsService = inject(NotificationsService);
  /** Live unread count for the bell icon's badge. */
  readonly unreadNotifications = this.notificationsService.unreadCount;
  private bpSub: Subscription;

  isMobile = false;
  searchQuery = '';
  userMenuOpen = signal(false);

  // ── User data from JWT ───────────────────────────────────────────
  readonly userEmail    = this.tokenService.getEmail() ?? '';
  readonly userInitials = this.buildInitials(this.userEmail);
  readonly currentRole  = this.tokenService.getUserRole() as UserRole | null;
  readonly roleMeta     = this.currentRole ? ROLE_META[this.currentRole] : null;

  constructor() {
    this.bpSub = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe(result => { this.isMobile = result.matches; });
  }

  ngOnDestroy() { this.bpSub.unsubscribe(); }

  onToggleSidebar(): void {
    if (this.isMobile) {
      this.sidebarService.toggleMobile();
    } else {
      this.sidebarService.toggle();
    }
  }

  onSearchChange(): void { /* hook for future search implementation */ }

  toggleUserMenu(): void {
    this.userMenuOpen.update(v => !v);
  }

  closeUserMenu(): void {
    this.userMenuOpen.set(false);
  }

  onLogout(): void {
    this.closeUserMenu();
    this.authService.logout();
  }

  /** Close dropdown when clicking outside the header component */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.userMenuOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeUserMenu();
    }
  }
  /** Build 2-letter initials from email: "john.doe@..." -> "JD" */
  private buildInitials(email: string): string {
    const parts = email.split('@')[0].split(/[._-]/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.slice(0, 2).toUpperCase() || 'MT';
  }
}
