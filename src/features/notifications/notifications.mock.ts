// MOCK DATA — consumed only by NotificationsService.
// Components MUST NOT import this file directly.

import { AppNotification } from './notifications.types';

export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'n-1',
    kind: 'info',
    title: 'New leave request',
    message: 'Sarah Mohamed submitted a leave request for review.',
    createdAt: '2026-05-03T08:42:00Z',
    read: false,
    link: '/dashboard/requests',
  },
  {
    id: 'n-2',
    kind: 'success',
    title: 'Salary paid',
    message: 'Your salary for April 2026 has been paid.',
    createdAt: '2026-05-01T09:00:00Z',
    read: false,
    link: '/dashboard/salary',
  },
  {
    id: 'n-3',
    kind: 'warning',
    title: 'Subscription expiring',
    message: 'Your subscription expires in 7 days.',
    createdAt: '2026-04-28T13:12:00Z',
    read: true,
    link: '/dashboard/subscription',
  },
  {
    id: 'n-4',
    kind: 'info',
    title: 'New contract draft',
    message: 'A contract draft is awaiting your review.',
    createdAt: '2026-04-26T17:30:00Z',
    read: true,
    link: '/dashboard/contracts',
  },
  {
    id: 'n-5',
    kind: 'error',
    title: 'Payment failed',
    message: 'A scheduled payment could not be processed.',
    createdAt: '2026-04-22T10:15:00Z',
    read: true,
    link: '/dashboard/payments',
  },
];
