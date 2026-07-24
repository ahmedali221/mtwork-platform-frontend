import {
  AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef,
  OnDestroy, OnInit, ViewChild, computed, inject, signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';

import { ChatMessage, Conversation } from '../messages.types';
import { MessagesService } from '../messages.service';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule, EmptyStateComponent],
  templateUrl: './messages-page.html',
  styleUrls: ['./messages-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesPageComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly messagesService = inject(MessagesService);

  /** Used by the template to align bubbles for the current user. */
  readonly currentUserId = this.messagesService.currentUserId;

  // ── State (signal-driven, populated from service) ──────────────────
  readonly conversations  = signal<Conversation[]>([]);
  readonly currentMessages = signal<ChatMessage[]>([]);
  readonly selectedConvId = signal<string | null>(null);
  readonly draft          = signal('');
  readonly searchQuery    = signal('');

  readonly selectedConversation = computed<Conversation | null>(() => {
    const id = this.selectedConvId();
    return id ? this.conversations().find(c => c.id === id) ?? null : null;
  });

  readonly filteredConversations = computed<Conversation[]>(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return this.conversations();
    return this.conversations().filter(c =>
      c.participant.name.toLowerCase().includes(q) ||
      c.lastMessage.toLowerCase().includes(q),
    );
  });

  // ── Subscriptions ──────────────────────────────────────────────────
  private convSub?: Subscription;
  private msgSub?:  Subscription;

  // ── DOM scroll-to-bottom on new message ────────────────────────────
  @ViewChild('messageList') private messageListRef?: ElementRef<HTMLElement>;
  private shouldScroll = false;

  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit(): void {
    this.convSub = this.messagesService.getConversations().subscribe(list => {
      this.conversations.set(list);
      // Auto-select the first conversation on initial load.
      if (this.selectedConvId() === null && list.length > 0) {
        this.selectConversation(list[0].id);
      }
    });
  }

  ngOnDestroy(): void {
    this.convSub?.unsubscribe();
    this.msgSub?.unsubscribe();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll && this.messageListRef) {
      const el = this.messageListRef.nativeElement;
      el.scrollTop = el.scrollHeight;
      this.shouldScroll = false;
    }
  }

  // ── Actions ────────────────────────────────────────────────────────
  selectConversation(id: string): void {
    this.selectedConvId.set(id);
    this.messagesService.markConversationRead(id);

    // Re-subscribe to messages for the new conversation.
    this.msgSub?.unsubscribe();
    this.msgSub = this.messagesService.getMessages(id).subscribe(list => {
      this.currentMessages.set(list);
      this.shouldScroll = true;
    });
  }

  onDraftChange(value: string): void {
    this.draft.set(value);
  }

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
  }

  sendMessage(): void {
    const body = this.draft().trim();
    const conv = this.selectedConversation();
    if (!body || !conv) return;

    this.messagesService.sendMessage(conv.id, body).subscribe({
      next: () => {
        this.draft.set('');
        this.shouldScroll = true;
      },
    });
  }

  // ── Helpers (template — no logic in HTML) ──────────────────────────
  trackByConvId = (_: number, c: Conversation) => c.id;
  trackByMsgId  = (_: number, m: ChatMessage)  => m.id;

  formatTime(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    return isNaN(d.getTime())
      ? ''
      : d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  formatDay(iso: string): string {
    if (!iso) return '';
    const d   = new Date(iso);
    const now = new Date();
    if (isNaN(d.getTime())) return '';
    const sameDay = d.toDateString() === now.toDateString();
    return sameDay
      ? this.formatTime(iso)
      : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
}
