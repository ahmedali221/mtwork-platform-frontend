import { Injectable, computed, signal } from '@angular/core';

import { AppNotification } from './notifications.types';
import { MOCK_NOTIFICATIONS } from './notifications.mock';

/**
 * Single source of truth for notifications.
 *
 * Owns the state with signals so multiple consumers — the Notifications page
 * and the authenticated header's unread badge — stay in sync automatically.
 *
 * All updates are IMMUTABLE: every mutator returns a new array, never edits
 * existing notification objects in place. This guarantees signal change
 * detection fires reliably and avoids any stale-UI hazards.
 *
 * When a backend lands, replace the seed and the body of each mutator with
 * the relevant HttpClient calls — consumers stay untouched.
 */
@Injectable({ providedIn: 'root' })
export class NotificationsService {
  // Private writable, exposed read-only.
  private readonly _notifications = signal<AppNotification[]>(
    structuredClone(MOCK_NOTIFICATIONS),
  );

  /** Read-only accessor for consumers. */
  readonly notifications = this._notifications.asReadonly();

  /** Live unread count — consumed by the header badge and the page filter. */
  readonly unreadCount = computed(
    () => this._notifications().filter(n => !n.read).length,
  );

  /** Mark a single notification as read (immutable). */
  markAsRead(id: string): void {
    this._notifications.update(list =>
      list.map(n => n.id === id ? { ...n, read: true } : n),
    );
  }

  /** Mark every unread notification as read (immutable). */
  markAllAsRead(): void {
    this._notifications.update(list =>
      list.map(n => n.read ? n : { ...n, read: true }),
    );
  }
}
