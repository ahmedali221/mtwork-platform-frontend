// MOCK DATA — consumed only by MessagesService.
// The Messages component MUST NOT import this file directly.
// When the backend is ready, replace MessagesService internals; do not touch the component.

import { ChatMessage, Conversation } from './messages.types';

export const MOCK_CURRENT_USER_ID = 'me';

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'c-1',
    participant: { id: 'u-101', name: 'Sarah Mohamed', initials: 'SM', role: 'HR Manager' },
    lastMessage: 'Sounds good — let’s sync tomorrow morning.',
    lastMessageAt: '2026-05-03T08:42:00Z',
    unreadCount: 2,
  },
  {
    id: 'c-2',
    participant: { id: 'u-102', name: 'Ahmed Ali', initials: 'AA', role: 'Project Lead' },
    lastMessage: 'I uploaded the latest contract draft.',
    lastMessageAt: '2026-05-02T16:11:00Z',
    unreadCount: 0,
  },
  {
    id: 'c-3',
    participant: { id: 'u-103', name: 'Layla Hassan', initials: 'LH', role: 'Designer' },
    lastMessage: 'Could you review the new dashboard mock?',
    lastMessageAt: '2026-05-01T11:25:00Z',
    unreadCount: 1,
  },
  {
    id: 'c-4',
    participant: { id: 'u-104', name: 'Omar Khaled', initials: 'OK', role: 'Backend Engineer' },
    lastMessage: 'Deploy is queued.',
    lastMessageAt: '2026-04-29T19:03:00Z',
    unreadCount: 0,
  },
];

export const MOCK_MESSAGES: Record<string, ChatMessage[]> = {
  'c-1': [
    { id: 'm-1', conversationId: 'c-1', senderId: 'u-101', body: 'Hi, do you have time for a quick call?', sentAt: '2026-05-03T08:30:00Z' },
    { id: 'm-2', conversationId: 'c-1', senderId: MOCK_CURRENT_USER_ID, body: 'Sure — give me 10 minutes.', sentAt: '2026-05-03T08:35:00Z' },
    { id: 'm-3', conversationId: 'c-1', senderId: 'u-101', body: 'Sounds good — let’s sync tomorrow morning.', sentAt: '2026-05-03T08:42:00Z' },
  ],
  'c-2': [
    { id: 'm-4', conversationId: 'c-2', senderId: 'u-102', body: 'I uploaded the latest contract draft.', sentAt: '2026-05-02T16:11:00Z' },
  ],
  'c-3': [
    { id: 'm-5', conversationId: 'c-3', senderId: 'u-103', body: 'Could you review the new dashboard mock?', sentAt: '2026-05-01T11:25:00Z' },
  ],
  'c-4': [
    { id: 'm-6', conversationId: 'c-4', senderId: 'u-104', body: 'Deploy is queued.', sentAt: '2026-04-29T19:03:00Z' },
  ],
};
