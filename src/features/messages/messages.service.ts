import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

import { ChatMessage, Conversation } from './messages.types';
import { MOCK_CONVERSATIONS, MOCK_CURRENT_USER_ID, MOCK_MESSAGES } from './messages.mock';

/**
 * Single source of truth for the Messages feature.
 *
 * The component talks ONLY to this service.
 * When the real backend lands, replace the body of each public method
 * with HttpClient calls — the component stays untouched.
 *
 * Public surface (do not break):
 *   - getConversations(): Observable<Conversation[]>
 *   - getMessages(conversationId): Observable<ChatMessage[]>
 *   - sendMessage(conversationId, body): Observable<ChatMessage>
 *   - markConversationRead(conversationId): void
 *   - currentUserId: string
 */
@Injectable({ providedIn: 'root' })
export class MessagesService {
  /** Identifier used to mark a message as authored by "me" in the UI. */
  readonly currentUserId: string = MOCK_CURRENT_USER_ID;

  // ── Internal state (mock-backed) ──────────────────────────────────
  private readonly conversations$ = new BehaviorSubject<Conversation[]>(
    structuredClone(MOCK_CONVERSATIONS),
  );
  private readonly messagesByConv$ = new BehaviorSubject<Record<string, ChatMessage[]>>(
    structuredClone(MOCK_MESSAGES),
  );

  // ── Public API ────────────────────────────────────────────────────
  getConversations(): Observable<Conversation[]> {
    // Real impl example:
    //   return this.api.get<{ data: Conversation[] }>('Message/Conversations')
    //     .pipe(map(r => r.data ?? []));
    return this.conversations$.asObservable();
  }

  getMessages(conversationId: string): Observable<ChatMessage[]> {
    // Real impl example:
    //   return this.api.get<{ data: ChatMessage[] }>(
    //     'Message/GetByConversation', { conversationId }
    //   ).pipe(map(r => r.data ?? []));
    return this.messagesByConv$.pipe(
      map(byId => byId[conversationId] ?? []),
    );
  }

  sendMessage(conversationId: string, body: string): Observable<ChatMessage> {
    const trimmed = body.trim();
    if (!trimmed) {
      // Match a future backend that would 400 on empty body.
      throw new Error('Message body cannot be empty.');
    }

    const newMessage: ChatMessage = {
      id:             `m-${Date.now()}`,
      conversationId,
      senderId:       this.currentUserId,
      body:           trimmed,
      sentAt:         new Date().toISOString(),
    };

    // Append immutably to the conversation's message list.
    const currentMap = this.messagesByConv$.value;
    this.messagesByConv$.next({
      ...currentMap,
      [conversationId]: [...(currentMap[conversationId] ?? []), newMessage],
    });

    // Bump the conversation's preview + timestamp immutably.
    this.conversations$.next(
      this.conversations$.value.map(c =>
        c.id === conversationId
          ? { ...c, lastMessage: trimmed, lastMessageAt: newMessage.sentAt }
          : c,
      ),
    );

    // Real impl example:
    //   return this.api.post<ChatMessage>('Message/Send', { conversationId, body });
    return of(newMessage);
  }

  /** Local-only: clears the unread badge for a conversation. */
  markConversationRead(conversationId: string): void {
    this.conversations$.next(
      this.conversations$.value.map(c =>
        c.id === conversationId && c.unreadCount > 0
          ? { ...c, unreadCount: 0 }
          : c,
      ),
    );
  }
}
