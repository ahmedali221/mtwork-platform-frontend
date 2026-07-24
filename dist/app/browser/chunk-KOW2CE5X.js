import {
  EmptyStateComponent
} from "./chunk-TIHFCSWG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-RILOBYFO.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Injectable,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// src/features/messages/messages.mock.ts
var MOCK_CURRENT_USER_ID = "me";
var MOCK_CONVERSATIONS = [
  {
    id: "c-1",
    participant: { id: "u-101", name: "Sarah Mohamed", initials: "SM", role: "HR Manager" },
    lastMessage: "Sounds good \u2014 let\u2019s sync tomorrow morning.",
    lastMessageAt: "2026-05-03T08:42:00Z",
    unreadCount: 2
  },
  {
    id: "c-2",
    participant: { id: "u-102", name: "Ahmed Ali", initials: "AA", role: "Project Lead" },
    lastMessage: "I uploaded the latest contract draft.",
    lastMessageAt: "2026-05-02T16:11:00Z",
    unreadCount: 0
  },
  {
    id: "c-3",
    participant: { id: "u-103", name: "Layla Hassan", initials: "LH", role: "Designer" },
    lastMessage: "Could you review the new dashboard mock?",
    lastMessageAt: "2026-05-01T11:25:00Z",
    unreadCount: 1
  },
  {
    id: "c-4",
    participant: { id: "u-104", name: "Omar Khaled", initials: "OK", role: "Backend Engineer" },
    lastMessage: "Deploy is queued.",
    lastMessageAt: "2026-04-29T19:03:00Z",
    unreadCount: 0
  }
];
var MOCK_MESSAGES = {
  "c-1": [
    { id: "m-1", conversationId: "c-1", senderId: "u-101", body: "Hi, do you have time for a quick call?", sentAt: "2026-05-03T08:30:00Z" },
    { id: "m-2", conversationId: "c-1", senderId: MOCK_CURRENT_USER_ID, body: "Sure \u2014 give me 10 minutes.", sentAt: "2026-05-03T08:35:00Z" },
    { id: "m-3", conversationId: "c-1", senderId: "u-101", body: "Sounds good \u2014 let\u2019s sync tomorrow morning.", sentAt: "2026-05-03T08:42:00Z" }
  ],
  "c-2": [
    { id: "m-4", conversationId: "c-2", senderId: "u-102", body: "I uploaded the latest contract draft.", sentAt: "2026-05-02T16:11:00Z" }
  ],
  "c-3": [
    { id: "m-5", conversationId: "c-3", senderId: "u-103", body: "Could you review the new dashboard mock?", sentAt: "2026-05-01T11:25:00Z" }
  ],
  "c-4": [
    { id: "m-6", conversationId: "c-4", senderId: "u-104", body: "Deploy is queued.", sentAt: "2026-04-29T19:03:00Z" }
  ]
};

// src/features/messages/messages.service.ts
var _MessagesService = class _MessagesService {
  constructor() {
    this.currentUserId = MOCK_CURRENT_USER_ID;
    this.conversations$ = new BehaviorSubject(structuredClone(MOCK_CONVERSATIONS));
    this.messagesByConv$ = new BehaviorSubject(structuredClone(MOCK_MESSAGES));
  }
  // ── Public API ────────────────────────────────────────────────────
  getConversations() {
    return this.conversations$.asObservable();
  }
  getMessages(conversationId) {
    return this.messagesByConv$.pipe(map((byId) => byId[conversationId] ?? []));
  }
  sendMessage(conversationId, body) {
    const trimmed = body.trim();
    if (!trimmed) {
      throw new Error("Message body cannot be empty.");
    }
    const newMessage = {
      id: `m-${Date.now()}`,
      conversationId,
      senderId: this.currentUserId,
      body: trimmed,
      sentAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const currentMap = this.messagesByConv$.value;
    this.messagesByConv$.next(__spreadProps(__spreadValues({}, currentMap), {
      [conversationId]: [...currentMap[conversationId] ?? [], newMessage]
    }));
    this.conversations$.next(this.conversations$.value.map((c) => c.id === conversationId ? __spreadProps(__spreadValues({}, c), { lastMessage: trimmed, lastMessageAt: newMessage.sentAt }) : c));
    return of(newMessage);
  }
  /** Local-only: clears the unread badge for a conversation. */
  markConversationRead(conversationId) {
    this.conversations$.next(this.conversations$.value.map((c) => c.id === conversationId && c.unreadCount > 0 ? __spreadProps(__spreadValues({}, c), { unreadCount: 0 }) : c));
  }
};
_MessagesService.\u0275fac = function MessagesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessagesService)();
};
_MessagesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagesService, factory: _MessagesService.\u0275fac, providedIn: "root" });
var MessagesService = _MessagesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/features/messages/messages-page/messages-page.ts
var _c0 = ["messageList"];
function MessagesPageComponent_For_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "chat.unreadMessages"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.unreadCount);
  }
}
function MessagesPageComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function MessagesPageComponent_For_27_Template_li_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConversation(c_r2.id));
    })("keyup.enter", function MessagesPageComponent_For_27_Template_li_keyup_enter_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConversation(c_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25)(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, MessagesPageComponent_For_27_Conditional_12_Template, 3, 4, "span", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("conv-item--active", c_r2.id === ctx_r2.selectedConvId());
    \u0275\u0275attribute("aria-selected", c_r2.id === ctx_r2.selectedConvId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.participant.initials);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.participant.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDay(c_r2.lastMessageAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.unreadCount > 0 ? 12 : -1);
  }
}
function MessagesPageComponent_ForEmpty_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275element(1, "app-empty-state", 28);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "messages.empty.conversations.title"))("description", \u0275\u0275pipeBind1(3, 4, "messages.empty.conversations.desc"));
  }
}
function MessagesPageComponent_Conditional_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conv_r5.participant.role);
  }
}
function MessagesPageComponent_Conditional_31_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "p", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-row--mine", m_r6.senderId === ctx_r2.currentUserId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r6.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(m_r6.sentAt));
  }
}
function MessagesPageComponent_Conditional_31_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 28);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "messages.empty.thread.title"))("description", \u0275\u0275pipeBind1(2, 4, "messages.empty.thread.desc"));
  }
}
function MessagesPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "h2", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, MessagesPageComponent_Conditional_31_Conditional_6_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34, 0);
    \u0275\u0275repeaterCreate(9, MessagesPageComponent_Conditional_31_For_10_Template, 6, 4, "div", 35, \u0275\u0275componentInstance().trackByMsgId, true, MessagesPageComponent_Conditional_31_ForEmpty_11_Template, 3, 6, "app-empty-state", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "form", 36);
    \u0275\u0275listener("ngSubmit", function MessagesPageComponent_Conditional_31_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementStart(13, "input", 37);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275listener("ngModelChange", function MessagesPageComponent_Conditional_31_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDraftChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const conv_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conv_r5.participant.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conv_r5.participant.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(conv_r5.participant.role ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.currentMessages());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.draft());
    \u0275\u0275attribute("placeholder", \u0275\u0275pipeBind1(14, 10, "messages.composerPlaceholder"))("aria-label", \u0275\u0275pipeBind1(15, 12, "messages.composerPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.draft().trim());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 14, "messages.send"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "messages.send"), " ");
  }
}
function MessagesPageComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-empty-state", 28);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "messages.empty.select.title"))("description", \u0275\u0275pipeBind1(3, 4, "messages.empty.select.desc"));
  }
}
var _MessagesPageComponent = class _MessagesPageComponent {
  constructor() {
    this.messagesService = inject(MessagesService);
    this.currentUserId = this.messagesService.currentUserId;
    this.conversations = signal([], ...ngDevMode ? [{ debugName: "conversations" }] : []);
    this.currentMessages = signal([], ...ngDevMode ? [{ debugName: "currentMessages" }] : []);
    this.selectedConvId = signal(null, ...ngDevMode ? [{ debugName: "selectedConvId" }] : []);
    this.draft = signal("", ...ngDevMode ? [{ debugName: "draft" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.selectedConversation = computed(() => {
      const id = this.selectedConvId();
      return id ? this.conversations().find((c) => c.id === id) ?? null : null;
    }, ...ngDevMode ? [{ debugName: "selectedConversation" }] : []);
    this.filteredConversations = computed(() => {
      const q = this.searchQuery().trim().toLowerCase();
      if (!q)
        return this.conversations();
      return this.conversations().filter((c) => c.participant.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredConversations" }] : []);
    this.shouldScroll = false;
    this.trackByConvId = (_, c) => c.id;
    this.trackByMsgId = (_, m) => m.id;
  }
  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit() {
    this.convSub = this.messagesService.getConversations().subscribe((list) => {
      this.conversations.set(list);
      if (this.selectedConvId() === null && list.length > 0) {
        this.selectConversation(list[0].id);
      }
    });
  }
  ngOnDestroy() {
    this.convSub?.unsubscribe();
    this.msgSub?.unsubscribe();
  }
  ngAfterViewChecked() {
    if (this.shouldScroll && this.messageListRef) {
      const el = this.messageListRef.nativeElement;
      el.scrollTop = el.scrollHeight;
      this.shouldScroll = false;
    }
  }
  // ── Actions ────────────────────────────────────────────────────────
  selectConversation(id) {
    this.selectedConvId.set(id);
    this.messagesService.markConversationRead(id);
    this.msgSub?.unsubscribe();
    this.msgSub = this.messagesService.getMessages(id).subscribe((list) => {
      this.currentMessages.set(list);
      this.shouldScroll = true;
    });
  }
  onDraftChange(value) {
    this.draft.set(value);
  }
  onSearchChange(value) {
    this.searchQuery.set(value);
  }
  sendMessage() {
    const body = this.draft().trim();
    const conv = this.selectedConversation();
    if (!body || !conv)
      return;
    this.messagesService.sendMessage(conv.id, body).subscribe({
      next: () => {
        this.draft.set("");
        this.shouldScroll = true;
      }
    });
  }
  formatTime(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    return isNaN(d.getTime()) ? "" : d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  formatDay(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    const now = /* @__PURE__ */ new Date();
    if (isNaN(d.getTime()))
      return "";
    const sameDay = d.toDateString() === now.toDateString();
    return sameDay ? this.formatTime(iso) : d.toLocaleDateString([], { month: "short", day: "numeric" });
  }
};
_MessagesPageComponent.\u0275fac = function MessagesPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessagesPageComponent)();
};
_MessagesPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesPageComponent, selectors: [["app-messages-page"]], viewQuery: function MessagesPageComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageListRef = _t.first);
  }
}, decls: 33, vars: 33, consts: [["messageList", ""], [1, "messages-page"], [1, "breadcrumb"], [1, "bc-item"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "aria-hidden", "true", 1, "bc-chevron"], ["d", "M5.5 3.5L10.5 8L5.5 12.5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "bc-item", "bc-active"], [1, "page-title"], ["role", "region", 1, "messages-shell"], [1, "conversations-panel"], [1, "conv-search"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z", "fill", "currentColor"], ["type", "text", 3, "ngModelChange", "ngModel"], ["role", "listbox", 1, "conv-list"], ["role", "option", "tabindex", "0", 1, "conv-item", 3, "conv-item--active"], [1, "conv-empty"], [1, "messages-panel"], [1, "thread-empty", "thread-empty--full"], ["role", "option", "tabindex", "0", 1, "conv-item", 3, "click", "keyup.enter"], ["aria-hidden", "true", 1, "conv-avatar"], [1, "conv-meta"], [1, "conv-row"], [1, "conv-name"], [1, "conv-time"], [1, "conv-row", "conv-row--sub"], [1, "conv-preview"], [1, "conv-badge"], ["kind", "chat", 3, "title", "description"], [1, "thread-header"], ["aria-hidden", "true", 1, "thread-avatar"], [1, "thread-meta"], [1, "thread-name"], [1, "thread-role"], ["role", "log", "aria-live", "polite", 1, "thread-list"], [1, "msg-row", 3, "msg-row--mine"], [1, "thread-composer", 3, "ngSubmit"], ["type", "text", "name", "draft", 1, "composer-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "composer-send", 3, "disabled"], [1, "msg-row"], [1, "msg-bubble"], [1, "msg-body"], [1, "msg-time"]], template: function MessagesPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 4);
    \u0275\u0275element(7, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h1", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementStart(16, "aside", 9);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 11);
    \u0275\u0275element(20, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "input", 13);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275listener("ngModelChange", function MessagesPageComponent_Template_input_ngModelChange_21_listener($event) {
      return ctx.onSearchChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ul", 14);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275repeaterCreate(26, MessagesPageComponent_For_27_Template, 13, 8, "li", 15, ctx.trackByConvId, true, MessagesPageComponent_ForEmpty_28_Template, 4, 6, "li", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "section", 17);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275conditionalCreate(31, MessagesPageComponent_Conditional_31_Template, 20, 18)(32, MessagesPageComponent_Conditional_32_Template, 4, 6, "div", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 13, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "common.appName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "messages.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "messages.title"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 21, "messages.title"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 23, "messages.conversations"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.searchQuery());
    \u0275\u0275attribute("placeholder", \u0275\u0275pipeBind1(22, 25, "messages.searchPlaceholder"))("aria-label", \u0275\u0275pipeBind1(23, 27, "messages.searchPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 29, "messages.list"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.filteredConversations());
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 31, "messages.thread"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx.selectedConversation()) ? 31 : 32, tmp_12_0);
  }
}, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, TranslocoModule, EmptyStateComponent, TranslocoPipe], styles: ["\n\n.messages-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.messages-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(280px, 340px) 1fr;\n  gap: 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  overflow: hidden;\n  min-height: 60vh;\n}\n.conversations-panel[_ngcontent-%COMP%] {\n  border-inline-end: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n}\n.conv-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.conv-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.conv-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  flex: 1;\n}\n.conv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  border-block-end: 1px solid var(--ui-border);\n  transition: background-color 120ms ease;\n}\n.conv-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.03));\n}\n.conv-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: -2px;\n}\n.conv-item--active[_ngcontent-%COMP%] {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.05));\n}\n.conv-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-primary-100, var(--ui-surface-hover, rgba(99,102,241,0.12)));\n  color: var(--brand-primary-700, var(--brand-primary-500));\n  display: grid;\n  place-items: center;\n  font-weight: 600;\n  font-size: 13px;\n  flex: none;\n}\n.conv-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.conv-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.conv-row--sub[_ngcontent-%COMP%] {\n  margin-block-start: 2px;\n}\n.conv-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--ui-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.conv-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.conv-preview[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.conv-badge[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  flex: none;\n}\n.conv-empty[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.messages-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n}\n.thread-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.thread-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-primary-100, rgba(99,102,241,0.12));\n  color: var(--brand-primary-700, var(--brand-primary-500));\n  display: grid;\n  place-items: center;\n  font-weight: 600;\n}\n.thread-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.thread-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.thread-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.msg-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.msg-row--mine[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: min(540px, 70%);\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n  color: var(--ui-text);\n  padding: 10px 14px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.msg-row--mine[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n}\n.msg-body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4;\n  word-wrap: break-word;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  align-self: flex-end;\n}\n.thread-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ui-text-muted);\n  padding: 32px 16px;\n  font-size: 14px;\n}\n.thread-empty--full[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.thread-composer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-block-start: 1px solid var(--ui-border);\n}\n.composer-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 14px;\n  color: var(--ui-text);\n  background: var(--ui-surface);\n}\n.composer-input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 0;\n  border-color: var(--brand-primary-500);\n}\n.composer-send[_ngcontent-%COMP%] {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.composer-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.composer-send[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .messages-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .conversations-panel[_ngcontent-%COMP%] {\n    border-inline-end: none;\n    border-block-end: 1px solid var(--ui-border);\n  }\n}\n/*# sourceMappingURL=messages-page.css.map */"], changeDetection: 0 });
var MessagesPageComponent = _MessagesPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesPageComponent, [{
    type: Component,
    args: [{ selector: "app-messages-page", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule, EmptyStateComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="messages-page">

  <!-- \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
    <span class="bc-item">{{ 'common.appName' | transloco }}</span>
    <svg class="bc-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="bc-item bc-active">{{ 'messages.title' | transloco }}</span>
  </nav>

  <h1 class="page-title">{{ 'messages.title' | transloco }}</h1>

  <div class="messages-shell" role="region" [attr.aria-label]="'messages.title' | transloco">

    <!-- \u2500\u2500 Left: conversations list \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <aside class="conversations-panel" [attr.aria-label]="'messages.conversations' | transloco">
      <div class="conv-search">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
        </svg>
        <input
          type="text"
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearchChange($event)"
          [attr.placeholder]="'messages.searchPlaceholder' | transloco"
          [attr.aria-label]="'messages.searchPlaceholder' | transloco"
        />
      </div>

      <ul class="conv-list" role="listbox" [attr.aria-label]="'messages.list' | transloco">
        @for (c of filteredConversations(); track trackByConvId($index, c)) {
          <li
            class="conv-item"
            role="option"
            [class.conv-item--active]="c.id === selectedConvId()"
            [attr.aria-selected]="c.id === selectedConvId()"
            (click)="selectConversation(c.id)"
            (keyup.enter)="selectConversation(c.id)"
            tabindex="0"
          >
            <div class="conv-avatar" aria-hidden="true">{{ c.participant.initials }}</div>
            <div class="conv-meta">
              <div class="conv-row">
                <span class="conv-name">{{ c.participant.name }}</span>
                <span class="conv-time">{{ formatDay(c.lastMessageAt) }}</span>
              </div>
              <div class="conv-row conv-row--sub">
                <span class="conv-preview">{{ c.lastMessage }}</span>
                @if (c.unreadCount > 0) {
                  <span class="conv-badge" [attr.aria-label]="'chat.unreadMessages' | transloco">{{ c.unreadCount }}</span>
                }
              </div>
            </div>
          </li>
        } @empty {
          <li class="conv-empty">
            <app-empty-state
              kind="chat"
              [title]="'messages.empty.conversations.title' | transloco"
              [description]="'messages.empty.conversations.desc' | transloco"
            />
          </li>
        }
      </ul>
    </aside>

    <!-- \u2500\u2500 Right: messages panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="messages-panel" [attr.aria-label]="'messages.thread' | transloco">

      @if (selectedConversation(); as conv) {
        <header class="thread-header">
          <div class="thread-avatar" aria-hidden="true">{{ conv.participant.initials }}</div>
          <div class="thread-meta">
            <h2 class="thread-name">{{ conv.participant.name }}</h2>
            @if (conv.participant.role) {
              <span class="thread-role">{{ conv.participant.role }}</span>
            }
          </div>
        </header>

        <div #messageList class="thread-list" role="log" aria-live="polite">
          @for (m of currentMessages(); track trackByMsgId($index, m)) {
            <div class="msg-row" [class.msg-row--mine]="m.senderId === currentUserId">
              <div class="msg-bubble">
                <p class="msg-body">{{ m.body }}</p>
                <span class="msg-time">{{ formatTime(m.sentAt) }}</span>
              </div>
            </div>
          } @empty {
            <app-empty-state
              kind="chat"
              [title]="'messages.empty.thread.title' | transloco"
              [description]="'messages.empty.thread.desc' | transloco"
            />
          }
        </div>

        <form class="thread-composer" (ngSubmit)="sendMessage()">
          <input
            type="text"
            class="composer-input"
            [ngModel]="draft()"
            (ngModelChange)="onDraftChange($event)"
            name="draft"
            [attr.placeholder]="'messages.composerPlaceholder' | transloco"
            [attr.aria-label]="'messages.composerPlaceholder' | transloco"
          />
          <button
            type="submit"
            class="composer-send"
            [disabled]="!draft().trim()"
            [attr.aria-label]="'messages.send' | transloco"
          >
            {{ 'messages.send' | transloco }}
          </button>
        </form>
      } @else {
        <div class="thread-empty thread-empty--full">
          <app-empty-state
            kind="chat"
            [title]="'messages.empty.select.title' | transloco"
            [description]="'messages.empty.select.desc' | transloco"
          />
        </div>
      }

    </section>
  </div>
</div>
`, styles: ["/* src/features/messages/messages-page/messages-page.css */\n.messages-page {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--ui-text-muted);\n  font-size: 13px;\n}\n.bc-active {\n  color: var(--ui-text);\n  font-weight: 600;\n}\n.bc-chevron {\n  color: var(--ui-text-muted);\n}\n.page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ui-text);\n}\n.messages-shell {\n  display: grid;\n  grid-template-columns: minmax(280px, 340px) 1fr;\n  gap: 16px;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  overflow: hidden;\n  min-height: 60vh;\n}\n.conversations-panel {\n  border-inline-end: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n}\n.conv-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.conv-search svg {\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.conv-search input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: var(--ui-text);\n}\n.conv-search input::placeholder {\n  color: var(--ui-text-muted);\n}\n.conv-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  flex: 1;\n}\n.conv-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  border-block-end: 1px solid var(--ui-border);\n  transition: background-color 120ms ease;\n}\n.conv-item:hover {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.03));\n}\n.conv-item:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: -2px;\n}\n.conv-item--active {\n  background: var(--ui-surface-hover, rgba(0,0,0,0.05));\n}\n.conv-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-primary-100, var(--ui-surface-hover, rgba(99,102,241,0.12)));\n  color: var(--brand-primary-700, var(--brand-primary-500));\n  display: grid;\n  place-items: center;\n  font-weight: 600;\n  font-size: 13px;\n  flex: none;\n}\n.conv-meta {\n  flex: 1;\n  min-width: 0;\n}\n.conv-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.conv-row--sub {\n  margin-block-start: 2px;\n}\n.conv-name {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--ui-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.conv-time {\n  font-size: 11px;\n  color: var(--ui-text-muted);\n  flex: none;\n}\n.conv-preview {\n  font-size: 13px;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.conv-badge {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  flex: none;\n}\n.conv-empty {\n  padding: 32px 16px;\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.messages-panel {\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n}\n.thread-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.thread-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-primary-100, rgba(99,102,241,0.12));\n  color: var(--brand-primary-700, var(--brand-primary-500));\n  display: grid;\n  place-items: center;\n  font-weight: 600;\n}\n.thread-name {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ui-text);\n}\n.thread-role {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.thread-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.msg-row {\n  display: flex;\n}\n.msg-row--mine {\n  justify-content: flex-end;\n}\n.msg-bubble {\n  max-width: min(540px, 70%);\n  background: var(--ui-surface-hover, rgba(0,0,0,0.04));\n  color: var(--ui-text);\n  padding: 10px 14px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.msg-row--mine .msg-bubble {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n}\n.msg-body {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4;\n  word-wrap: break-word;\n}\n.msg-time {\n  font-size: 10px;\n  opacity: 0.7;\n  align-self: flex-end;\n}\n.thread-empty {\n  text-align: center;\n  color: var(--ui-text-muted);\n  padding: 32px 16px;\n  font-size: 14px;\n}\n.thread-empty--full {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.thread-composer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-block-start: 1px solid var(--ui-border);\n}\n.composer-input {\n  flex: 1;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 14px;\n  color: var(--ui-text);\n  background: var(--ui-surface);\n}\n.composer-input:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 0;\n  border-color: var(--brand-primary-500);\n}\n.composer-send {\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n}\n.composer-send:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.composer-send:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n@media (max-width: 768px) {\n  .messages-shell {\n    grid-template-columns: 1fr;\n  }\n  .conversations-panel {\n    border-inline-end: none;\n    border-block-end: 1px solid var(--ui-border);\n  }\n}\n/*# sourceMappingURL=messages-page.css.map */\n"] }]
  }], null, { messageListRef: [{
    type: ViewChild,
    args: ["messageList"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesPageComponent, { className: "MessagesPageComponent", filePath: "src/features/messages/messages-page/messages-page.ts", lineNumber: 22 });
})();
export {
  MessagesPageComponent
};
//# sourceMappingURL=chunk-KOW2CE5X.js.map
