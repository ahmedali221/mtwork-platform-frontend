import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { AppNotification } from '../notifications.types';
import { NotificationsService } from '../notifications.service';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state';

type FilterKey = 'all' | 'unread';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, TranslocoModule, EmptyStateComponent],
  templateUrl: './notifications-page.html',
  styleUrls: ['./notifications-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsPageComponent {
  private readonly router               = inject(Router);
  private readonly notificationsService = inject(NotificationsService);

  /** Read-only — the service owns the state. */
  readonly notifications = this.notificationsService.notifications;
  readonly unreadCount   = this.notificationsService.unreadCount;

  /** Local UI state — independent of the service. */
  readonly activeFilter = signal<FilterKey>('all');

  readonly filteredNotifications = computed<AppNotification[]>(() => {
    const list = this.notifications();
    return this.activeFilter() === 'unread'
      ? list.filter(n => !n.read)
      : list;
  });

  setFilter(key: FilterKey): void {
    this.activeFilter.set(key);
  }

  markAllAsRead(): void {
    this.notificationsService.markAllAsRead();
  }

  openNotification(n: AppNotification): void {
    if (!n.read) this.notificationsService.markAsRead(n.id);
    if (n.link)  this.router.navigateByUrl(n.link);
  }

  trackById = (_: number, n: AppNotification) => n.id;

  formatRelative(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const diffMs   = Date.now() - d.getTime();
    const diffMin  = Math.floor(diffMs / 60_000);
    if (diffMin < 1)    return 'just now';
    if (diffMin < 60)   return `${diffMin}m ago`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)     return `${diffH}h ago`;
    const diffD = Math.floor(diffH / 24);
    if (diffD < 7)      return `${diffD}d ago`;
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
}
