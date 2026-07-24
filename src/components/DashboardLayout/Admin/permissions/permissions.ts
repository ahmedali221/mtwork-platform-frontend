import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="admin-placeholder">
      <div class="admin-placeholder__icon">
        <mat-icon>security</mat-icon>
      </div>
      <h1 class="admin-placeholder__title">Permissions</h1>
      <p class="admin-placeholder__subtitle">Control role-based access, define permissions per feature.</p>
      <span class="admin-placeholder__badge">Coming Soon</span>
    </div>
  `,
  styles: [`
    .admin-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      gap: 1rem;
      text-align: center;
      color: var(--ui-text-muted);
    }
    .admin-placeholder__icon mat-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: var(--brand-primary-500);
      opacity: 0.7;
    }
    .admin-placeholder__title {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--ui-text-primary);
    }
    .admin-placeholder__subtitle {
      font-size: 1rem;
      max-width: 400px;
    }
    .admin-placeholder__badge {
      display: inline-block;
      padding: 0.25rem 1rem;
      border-radius: 9999px;
      background: var(--brand-primary-100, #e0e7ff);
      color: var(--brand-primary-700, #4338ca);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
  `]
})
export class PermissionsComponent {}
