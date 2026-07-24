// Public types for the Notifications module — kept separate from the mock
// so consumers (component, service, header) never import the mock file.

export type NotificationKind = 'info' | 'success' | 'warning' | 'error';

export interface AppNotification {
  id: string;
  kind: NotificationKind;
  title: string;
  message: string;
  createdAt: string; // ISO
  read: boolean;
  /** Optional: the route to open when the user clicks the notification. */
  link?: string;
}
