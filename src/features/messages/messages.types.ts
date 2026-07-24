// Public types for the Messages module — kept separate from mock data
// so consumers (component, service, tests) never import the mock file.

export interface MessageParticipant {
  id: string;
  name: string;
  initials: string;
  role?: string;
}

export interface Conversation {
  id: string;
  participant: MessageParticipant;
  lastMessage: string;
  lastMessageAt: string; // ISO
  unreadCount: number;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string; // 'me' for the current user, otherwise participant id
  body: string;
  sentAt: string; // ISO
}
