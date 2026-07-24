import {
  Component, inject, signal, computed,
  OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { ChatService, ChatMessage, ConnectionState } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './chat-widget.html',
  styleUrls: ['./chat-widget.css'],
})
export class ChatWidgetComponent implements OnInit, OnDestroy, AfterViewChecked {
  private chatService = inject(ChatService);

  @ViewChild('messageList') messageListRef?: ElementRef<HTMLElement>;

  // ── State ──────────────────────────────────────────────────────────
  isOpen          = signal(false);
  messages        = signal<ChatMessage[]>([]);
  connectionState = signal<ConnectionState>('disconnected');
  unreadCount     = signal(0);
  sending         = signal(false);
  sendError       = signal<string | null>(null);

  recipientId = '';
  messageText = '';

  private subs: Subscription[] = [];
  private shouldScrollToBottom = false;

  // ── Computed ───────────────────────────────────────────────────────
  readonly isConnected = computed(() => this.connectionState() === 'connected');
  readonly statusIcon  = computed<string>(() => {
    switch (this.connectionState()) {
      case 'connected':    return 'wifi';
      case 'connecting':   return 'wifi_find';
      case 'error':        return 'wifi_off';
      default:             return 'wifi_off';
    }
  });

  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit(): void {
    this.subs.push(
      this.chatService.connectionState$.subscribe(s => this.connectionState.set(s)),

      this.chatService.messages$.subscribe(msg => {
        this.messages.update(list => [...list, msg]);
        if (!this.isOpen()) {
          this.unreadCount.update(n => n + 1);
        }
        this.shouldScrollToBottom = true;
      }),

      // Replace the visible thread whenever the hub returns history for the active recipient.
      this.chatService.previousMessages$.subscribe(history => {
        this.messages.set(history ?? []);
        this.shouldScrollToBottom = true;
      }),
    );
  }

  /** Fetch conversation history for the currently typed recipient. */
  loadHistory(): void {
    const id = this.recipientId.trim();
    if (!id || !this.isConnected()) return;
    this.chatService.getPreviousMessages(id).catch(() => {});
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  // ── Actions ────────────────────────────────────────────────────────
  togglePanel(): void {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      this.unreadCount.set(0);
      this.shouldScrollToBottom = true;
    }
  }

  async send(): Promise<void> {
    const text      = this.messageText.trim();
    const recipient = this.recipientId.trim();
    if (!text || !recipient || !this.isConnected() || this.sending()) return;

    this.sending.set(true);
    this.sendError.set(null);

    try {
      await this.chatService.sendMessage(recipient, text);
      // Optimistically add own message
      const now = new Date().toISOString();
      this.messages.update(list => [
        ...list,
        { senderId: localStorage.getItem('userId') ?? 'me', message: text, timestamp: now, isMine: true },
      ]);
      this.messageText = '';
      this.shouldScrollToBottom = true;
    } catch {
      this.sendError.set('chat.sendError');
    } finally {
      this.sending.set(false);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  formatTime(isoString: string): string {
    try {
      return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  }

  private scrollToBottom(): void {
    const el = this.messageListRef?.nativeElement;
    if (el) el.scrollTop = el.scrollHeight;
  }
}
