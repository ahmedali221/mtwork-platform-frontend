import { Injectable, inject, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { AuthService } from './auth';
import { TokenService } from './token.service';
import { environment } from '../environment';

export interface ChatMessage {
  senderId:  string;
  message:   string;
  timestamp: string;
  isMine:    boolean;
}

export interface ChatUserDto {
  id:           string;
  userName?:    string;
  email?:       string;
  isOnline?:    boolean;
  lastMessage?: string;
  unreadCount?: number;
}

export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'error';

@Injectable({ providedIn: 'root' })
export class ChatService implements OnDestroy {
  private authService  = inject(AuthService);
  private tokenService = inject(TokenService);

  private hubConnection: signalR.HubConnection | null = null;
  private authSub: Subscription;

  private readonly _messages$         = new Subject<ChatMessage>();
  private readonly _connectionState$  = new BehaviorSubject<ConnectionState>('disconnected');
  private readonly _previousMessages$ = new Subject<ChatMessage[]>();
  private readonly _employees$        = new Subject<ChatUserDto[]>();
  private readonly _userOnline$       = new Subject<string>();
  private readonly _userOffline$      = new Subject<string>();
  private readonly _authConfirmed$    = new Subject<void>();

  readonly messages$         = this._messages$.asObservable();
  readonly connectionState$  = this._connectionState$.asObservable();
  readonly previousMessages$ = this._previousMessages$.asObservable();
  readonly employees$        = this._employees$.asObservable();
  readonly userOnline$       = this._userOnline$.asObservable();
  readonly userOffline$      = this._userOffline$.asObservable();
  readonly authConfirmed$    = this._authConfirmed$.asObservable();

  private get hubUrl(): string {
    return environment.baseUrl.replace(/\/api\/?$/, '') + '/chatHub';
  }

  constructor() {
    this.authSub = this.authService.isLoggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        const token = this.authService.getToken();
        if (token) this.connect(token);
      } else {
        this.disconnect();
      }
    });
  }

  connect(token: string): void {
    if (this.hubConnection?.state === signalR.HubConnectionState.Connected ||
        this.hubConnection?.state === signalR.HubConnectionState.Connecting) {
      return;
    }

    this._connectionState$.next('connecting');

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl, {
        accessTokenFactory: () => token,
        transport: signalR.HttpTransportType.WebSockets |
                   signalR.HttpTransportType.LongPolling,
      })
      .withAutomaticReconnect([0, 2000, 5000, 10000, 30000])
      .configureLogging(signalR.LogLevel.Warning)
      .build();

    this.registerHandlers();

    this.hubConnection.onreconnecting(() => this._connectionState$.next('connecting'));
    this.hubConnection.onreconnected(() => {
      this._connectionState$.next('connected');
      this.invokeAuthMe();
    });
    this.hubConnection.onclose(() => this._connectionState$.next('disconnected'));

    this.hubConnection
      .start()
      .then(() => {
        this._connectionState$.next('connected');
        this.invokeAuthMe();
      })
      .catch(() => this._connectionState$.next('error'));
  }

  private registerHandlers(): void {
    if (!this.hubConnection) return;

    this.hubConnection.on(
      'ReceiveMessage',
      (senderId: string, message: string, timestamp: string) => {
        const myId = this.tokenService.getUserId() ?? localStorage.getItem('userId') ?? '';
        this._messages$.next({ senderId, message, timestamp, isMine: senderId === myId });
      }
    );

    this.hubConnection.on('authmeresponsesuccess', () => {
      this._authConfirmed$.next();
    });

    this.hubConnection.on('PreviousMessages', (messages: ChatMessage[]) => {
      this._previousMessages$.next(messages ?? []);
    });

    this.hubConnection.on('getEmployeesResponse', (employees: ChatUserDto[]) => {
      this._employees$.next(employees ?? []);
    });

    this.hubConnection.on('userOn', (userId: string) => {
      this._userOnline$.next(userId);
    });

    this.hubConnection.on('userOff', (userId: string) => {
      this._userOffline$.next(userId);
    });

    this.hubConnection.on('logoutResponse', () => {
      this.hubConnection?.stop().catch(() => {});
      this.hubConnection = null;
      this._connectionState$.next('disconnected');
    });
  }

  private invokeAuthMe(): void {
    const rawId = this.tokenService.getUserId() ?? localStorage.getItem('userId');
    if (!rawId) return;

    const asInt = parseInt(String(rawId), 10);
    const userId: string | number = (!isNaN(asInt) && asInt > 0) ? asInt : String(rawId);

    this.hubConnection?.invoke('authMe', userId).catch(() => {});
  }

  ngOnDestroy(): void {
    this.disconnect();
    this.authSub?.unsubscribe();
  }

  /** Reject when the hub isn't connected so callers can surface the failure
   *  instead of silently believing a message/operation succeeded. */
  private requireConnected(): Promise<void> | null {
    if (!this.hubConnection || this.hubConnection.state !== signalR.HubConnectionState.Connected) {
      return Promise.reject(new Error('Hub not connected'));
    }
    return null;
  }

  getPreviousMessages(receiverId: string): Promise<void> {
    return this.requireConnected() ?? this.hubConnection!.invoke('GetPreviousMessages', receiverId);
  }

  sendMessage(receiverId: string, message: string): Promise<void> {
    return this.requireConnected() ?? this.hubConnection!.invoke('SendMessage', receiverId, message);
  }

  getCompanyEmployees(): Promise<void> {
    return this.requireConnected() ?? this.hubConnection!.invoke('GetAllCompanyEmployees');
  }

  markAsSeen(senderId: string): Promise<void> {
    return this.requireConnected() ?? this.hubConnection!.invoke('MarkAsSeen', senderId);
  }

  disconnect(): void {
    if (this.hubConnection) {
      this.hubConnection.stop().catch(() => {});
      this.hubConnection = null;
    }
    this._connectionState$.next('disconnected');
  }

  logOut(): void {
    this.hubConnection?.invoke('LogOut').catch(() => {});
  }

  isConnected(): boolean {
    return this.hubConnection?.state === signalR.HubConnectionState.Connected;
  }
}
