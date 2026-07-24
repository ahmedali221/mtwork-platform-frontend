import {
  NotificationsService
} from "./chunk-YKOGZMDC.js";
import {
  CreateTeamDialogComponent,
  InviteMembersDialogComponent
} from "./chunk-K5MTZ62X.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DSHWJW7U.js";
import {
  MatSelectModule
} from "./chunk-O2QTMEGD.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-Y6F5OIGJ.js";
import "./chunk-XWKVXKPV.js";
import {
  MatTooltipModule
} from "./chunk-PVDVVREM.js";
import {
  MatTooltip
} from "./chunk-HIQBHLFY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5PCD5I2G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RILOBYFO.js";
import "./chunk-6LK6CDX3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import {
  AuthService,
  AuthorizationService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import {
  UserRole
} from "./chunk-TXEUWJT3.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DWKHQJBX.js";
import {
  MatButton,
  MatButtonModule,
  MatFabButton,
  MatIconButton
} from "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import {
  CdkScrollable,
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler
} from "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import {
  coerceBooleanProperty
} from "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import {
  _animationsDisabled
} from "./chunk-AIQ4E4TV.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import {
  BreakpointObserver,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  Platform,
  coerceNumberProperty,
  hasModifierKey
} from "./chunk-APK5HPN3.js";
import {
  environment
} from "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-D5YQFVLR.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __async,
  __require,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  computed,
  debounceTime,
  filter,
  fromEvent,
  inject,
  interval,
  map,
  mapTo,
  merge,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _container = inject(MatDrawerContainer);
  constructor() {
    const elementRef = inject(ElementRef);
    const scrollDispatcher = inject(ScrollDispatcher);
    const ngZone = inject(NgZone);
    super(elementRef, scrollDispatcher, ngZone);
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Determines whether the content element should be hidden from the user. */
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = function MatDrawerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT);
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  /** Whether the view of the component has been attached. */
  _isAttached;
  /** Anchor node used to restore the drawer to its initial position. */
  _anchor;
  /** The side that the drawer is attached to. */
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
  }
  _mode = "over";
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened() {
    return this._opened();
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = signal(false, ...ngDevMode ? [{
    debugName: "_opened"
  }] : []);
  /** How the sidenav was opened (keypress, mouse click etc.) */
  _openedVia;
  /** Emits whenever the drawer has started animating. */
  _animationStarted = new Subject();
  /** Emits whenever the drawer is done animating. */
  _animationEnd = new Subject();
  /** Event emitted when the drawer open state is changed. */
  openedChange = (
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(
      /* isAsync */
      true
    )
  );
  /** Event emitted when the drawer has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the drawer has started opening. */
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  /** Event emitted when the drawer has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the drawer has started closing. */
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Event emitted when the drawer's position changes. */
  // tslint:disable-next-line:no-output-on-prefix
  onPositionChanged = new EventEmitter();
  /** Reference to the inner element that contains all the content. */
  _content;
  /**
   * An observable that emits when the drawer mode changes. This is used by the drawer container to
   * to know when to when the mode changes so it can adapt the margins on the content.
   */
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      fromEvent(element, "keydown").pipe(filter((event) => {
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
      this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this.opened);
    });
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const hasMovedFocus = this._focusTrap.focusInitialElement();
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus();
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */
  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */
  _closeViaBackdropClick() {
    return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true,
      "mouse"
    );
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(),
      this._openedVia || "program"
    );
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this.opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened.set(isOpen);
    if (this._container?._transitionsEnabled) {
      this._setIsAnimating(true);
    } else {
      setTimeout(() => {
        this._animationStarted.next();
        this._animationEnd.next();
      });
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  /** Toggles whether the drawer is currently animating. */
  _setIsAnimating(isAnimating) {
    this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  /** Updates the enabled state of the focus trap. */
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  /** Event handler for animation events. */
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionrun") {
          this._animationStarted.next(event);
        } else {
          if (event.type === "transitionend") {
            this._setIsAnimating(false);
          }
          this._animationEnd.next(event);
        }
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationDisabled = _animationsDisabled();
  _transitionsEnabled = false;
  /** All drawers in the container. Includes drawers from inside nested containers. */
  _allDrawers;
  /** Drawers that belong to this container. */
  _drawers = new QueryList();
  _content;
  _userContent;
  /** The drawer child with the `start` position. */
  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */
  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride;
  /** Event emitted when the drawer backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** The drawer at the start/end position, independent of direction. */
  _start;
  _end;
  /**
   * The drawer at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  _left;
  _right;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  _doCheckSubject = new Subject();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (!this._animationDisabled && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(
        debounceTime(10),
        // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)
      ).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  /** Calls `close` of both start and end drawers */
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  // Whether argument drawer should have a backdrop when it opens
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: [1, "mat-drawer", "mat-sidenav"],
    hostVars: 16,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  // We need an initializer here to avoid a TS error.
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275conditionalCreate(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c6],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule,
    imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
    exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkScrollableModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// src/services/sidebar.ts
var _SidebarService = class _SidebarService {
  constructor() {
    this.isOpenSignal = signal(this.getInitialState(), ...ngDevMode ? [{ debugName: "isOpenSignal" }] : []);
    this.isOpen = computed(() => this.isOpenSignal(), ...ngDevMode ? [{ debugName: "isOpen" }] : []);
    this.isMobileOpenSignal = signal(false, ...ngDevMode ? [{ debugName: "isMobileOpenSignal" }] : []);
    this.isMobileOpen = computed(() => this.isMobileOpenSignal(), ...ngDevMode ? [{ debugName: "isMobileOpen" }] : []);
  }
  getInitialState() {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const savedState = localStorage.getItem("sidebarOpen");
      return savedState !== null ? JSON.parse(savedState) : true;
    }
    return true;
  }
  toggleMobile() {
    this.isMobileOpenSignal.update((v) => !v);
  }
  closeMobile() {
    this.isMobileOpenSignal.set(false);
  }
  // ────────────────────────────────────────────────────
  toggle() {
    const newState = !this.isOpenSignal();
    this.isOpenSignal.set(newState);
    this.saveState(newState);
  }
  open() {
    this.isOpenSignal.set(true);
    this.saveState(true);
  }
  close() {
    this.isOpenSignal.set(false);
    this.saveState(false);
  }
  saveState(state) {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("sidebarOpen", JSON.stringify(state));
    }
  }
  get value() {
    return this.isOpenSignal();
  }
};
_SidebarService.\u0275fac = function SidebarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarService)();
};
_SidebarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
var SidebarService = _SidebarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/components/DashboardLayout/authenticated-header/authenticated-header.ts
function AuthenticatedHeaderComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadNotifications() > 99 ? "99+" : ctx_r0.unreadNotifications(), " ");
  }
}
function AuthenticatedHeaderComponent_Conditional_66_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.roleMeta.cssClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, ctx_r0.roleMeta.labelKey));
  }
}
function AuthenticatedHeaderComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AuthenticatedHeaderComponent_Conditional_66_Conditional_7_Template, 3, 5, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 34);
    \u0275\u0275elementStart(9, "ul", 35)(10, "li", 36)(11, "button", 37);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Conditional_66_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUserMenu());
    });
    \u0275\u0275elementStart(13, "mat-icon", 38);
    \u0275\u0275text(14, "person_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "li", 36)(19, "button", 39);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Conditional_66_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUserMenu());
    });
    \u0275\u0275elementStart(21, "mat-icon", 38);
    \u0275\u0275text(22, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(26, "div", 34);
    \u0275\u0275elementStart(27, "button", 40);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Conditional_66_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLogout());
    });
    \u0275\u0275elementStart(29, "mat-icon", 38);
    \u0275\u0275text(30, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userInitials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.roleMeta ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 9, "common.viewProfile"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "common.profile"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 13, "common.settings"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "common.settings"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 17, "common.signOut"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 19, "common.signOutLabel"));
  }
}
var ROLE_META = {
  [UserRole.Admin]: { labelKey: "roles.admin", cssClass: "role-badge--admin" },
  [UserRole.Business]: { labelKey: "roles.business", cssClass: "role-badge--business" },
  [UserRole.Employee]: { labelKey: "roles.employee", cssClass: "role-badge--employee" },
  [UserRole.Contractor]: { labelKey: "roles.contractor", cssClass: "role-badge--contractor" }
};
var _AuthenticatedHeaderComponent = class _AuthenticatedHeaderComponent {
  constructor() {
    this.sidebarService = inject(SidebarService);
    this.themeService = inject(ThemeService);
    this.tokenService = inject(TokenService);
    this.authService = inject(AuthService);
    this.breakpointObserver = inject(BreakpointObserver);
    this.elementRef = inject(ElementRef);
    this.notificationsService = inject(NotificationsService);
    this.unreadNotifications = this.notificationsService.unreadCount;
    this.isMobile = false;
    this.searchQuery = "";
    this.userMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "userMenuOpen" }] : []);
    this.userEmail = this.tokenService.getEmail() ?? "";
    this.userInitials = this.buildInitials(this.userEmail);
    this.currentRole = this.tokenService.getUserRole();
    this.roleMeta = this.currentRole ? ROLE_META[this.currentRole] : null;
    this.bpSub = this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }
  ngOnDestroy() {
    this.bpSub.unsubscribe();
  }
  onToggleSidebar() {
    if (this.isMobile) {
      this.sidebarService.toggleMobile();
    } else {
      this.sidebarService.toggle();
    }
  }
  onSearchChange() {
  }
  toggleUserMenu() {
    this.userMenuOpen.update((v) => !v);
  }
  closeUserMenu() {
    this.userMenuOpen.set(false);
  }
  onLogout() {
    this.closeUserMenu();
    this.authService.logout();
  }
  /** Close dropdown when clicking outside the header component */
  onDocumentClick(event) {
    if (this.userMenuOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeUserMenu();
    }
  }
  /** Build 2-letter initials from email: "john.doe@..." -> "JD" */
  buildInitials(email) {
    const parts = email.split("@")[0].split(/[._-]/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.slice(0, 2).toUpperCase() || "MT";
  }
};
_AuthenticatedHeaderComponent.\u0275fac = function AuthenticatedHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticatedHeaderComponent)();
};
_AuthenticatedHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticatedHeaderComponent, selectors: [["app-authenticated-header"]], hostBindings: function AuthenticatedHeaderComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_click_HostBindingHandler($event) {
      return ctx.onDocumentClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, decls: 67, vars: 61, consts: [[1, "header"], [1, "left-section"], [1, "hamburger-btn", 3, "click", "title"], [1, "user-info"], ["aria-hidden", "true", 1, "user-avatar-small"], [1, "user-text"], [1, "user-name"], [1, "user-company"], [1, "center-section"], [1, "search-bar"], [1, "search-left"], [1, "search-icon"], ["type", "text", 1, "search-input", 3, "ngModelChange", "placeholder", "ngModel"], ["aria-hidden", "true", 1, "search-divider"], [1, "search-filter"], [1, "filter-label"], [1, "filter-arrow"], [1, "right-section"], [1, "icon-group"], [1, "icon-btn", 3, "click", "title"], ["routerLink", "/dashboard/account-settings", 1, "icon-btn", 3, "title"], ["routerLink", "/dashboard/messages", 1, "icon-btn", 3, "title"], ["routerLink", "/dashboard/notifications", 1, "icon-btn", "icon-btn--has-badge", 3, "title"], ["aria-hidden", "true", 1, "icon-badge"], [1, "user-avatar-wrapper"], ["aria-haspopup", "true", 1, "user-avatar", 3, "click", "title"], ["aria-hidden", "true", 1, "avatar-dot"], ["aria-hidden", "true", 1, "avatar-arrow-tip"], ["role", "menu", 1, "user-menu-dropdown"], [1, "menu-profile-header"], [1, "menu-avatar"], [1, "menu-user-info"], [1, "menu-user-email"], [1, "menu-role-badge", 3, "class"], ["aria-hidden", "true", 1, "menu-divider"], ["role", "none", 1, "menu-list"], ["role", "none"], ["type", "button", "role", "menuitem", "routerLink", "/dashboard/profile", 1, "menu-item", 3, "click"], [1, "menu-item-icon"], ["type", "button", "role", "menuitem", "routerLink", "/dashboard/account-settings", 1, "menu-item", 3, "click"], ["role", "menuitem", 1, "menu-item", "menu-item--danger", 3, "click"], [1, "menu-role-badge"]], template: function AuthenticatedHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Template_button_click_2_listener() {
      return ctx.onToggleSidebar();
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "mat-icon");
    \u0275\u0275text(10, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "p", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "mat-icon", 11);
    \u0275\u0275text(22, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 12);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function AuthenticatedHeaderComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function AuthenticatedHeaderComponent_Template_input_ngModelChange_23_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "div", 13);
    \u0275\u0275elementStart(27, "div", 14)(28, "span", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-icon", 16);
    \u0275\u0275text(32, "expand_more");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 17)(34, "div", 18)(35, "button", 19);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Template_button_click_35_listener() {
      return ctx.themeService.toggleTheme();
    });
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 20);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementStart(45, "mat-icon");
    \u0275\u0275text(46, "settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 21);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementStart(50, "mat-icon");
    \u0275\u0275text(51, "chat_bubble_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "button", 22);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementStart(55, "mat-icon");
    \u0275\u0275text(56, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(57, AuthenticatedHeaderComponent_Conditional_57_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 24)(59, "button", 25);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275listener("click", function AuthenticatedHeaderComponent_Template_button_click_59_listener() {
      return ctx.toggleUserMenu();
    });
    \u0275\u0275text(61);
    \u0275\u0275element(62, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 27)(64, "mat-icon");
    \u0275\u0275text(65, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(66, AuthenticatedHeaderComponent_Conditional_66_Template, 34, 21, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("sidebar-collapsed", !ctx.sidebarService.isOpen());
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 25, "common.toggleSidebar"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 27, "common.toggleSidebar"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "common.welcome"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.userEmail || \u0275\u0275pipeBind1(17, 31, "common.appName"));
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 33, "common.search"));
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 35, "common.search"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 37, "common.employee"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", ctx.themeService.isDarkMode() ? \u0275\u0275pipeBind1(36, 39, "common.lightMode") : \u0275\u0275pipeBind1(37, 41, "common.darkMode"));
    \u0275\u0275attribute("aria-label", ctx.themeService.isDarkMode() ? \u0275\u0275pipeBind1(38, 43, "common.lightMode") : \u0275\u0275pipeBind1(39, 45, "common.darkMode"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.themeService.isDarkMode() ? "light_mode" : "dark_mode");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 47, "common.settings"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 49, "common.settings"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 51, "common.messages"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 53, "common.messages"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(53, 55, "common.notifications"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(54, 57, "common.notifications"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.unreadNotifications() > 0 ? 57 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx.userEmail);
    \u0275\u0275attribute("aria-expanded", ctx.userMenuOpen())("aria-label", \u0275\u0275pipeBind1(60, 59, "common.userMenu"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.userInitials, " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.userMenuOpen() ? 66 : -1);
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  background: var(--ui-bg-surface);\n  border-block-end: 0.5px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  transition: margin-inline-start 0.3s ease;\n  margin-inline-start: 277px;\n}\n.header.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: 100px;\n}\n.left-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n  width: 361px;\n}\n.hamburger-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.hamburger-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.hamburger-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.user-avatar-small[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--ui-bg-surface);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-avatar-small[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.5;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n}\n.user-company[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 400;\n  color: var(--ui-text-muted);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 120px;\n}\n.center-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-inline: 24px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 465px;\n  height: 42px;\n  background: var(--ui-bg-surface);\n  border: 0.5px solid var(--ui-border);\n  border-radius: 12px;\n  padding-inline: 8px;\n  box-shadow: 0 0 1px rgba(204, 204, 204, 0.2);\n  gap: 8px;\n}\n.search-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 16px;\n  color: var(--ui-text-muted);\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.search-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  background: var(--ui-border);\n  flex-shrink: 0;\n}\n.search-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.filter-arrow[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: var(--ui-text-muted);\n}\n.right-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-bg-surface);\n  border: 0.25px solid var(--ui-border);\n  border-radius: 12px;\n  cursor: pointer;\n  box-shadow: 0 0 1px rgba(204, 204, 204, 0.2), inset 0 -2px 2px rgba(204, 204, 204, 0.2);\n  transition: background 0.15s ease;\n  color: var(--ui-text-sub);\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-accent-200);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: transform 0.15s ease;\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.avatar-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  inset-inline-end: 1px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  border: 2px solid var(--ui-bg-surface);\n}\n.user-avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.avatar-arrow-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  inset-inline-end: -4px;\n  width: 20px;\n  height: 20px;\n  background: var(--ui-bg);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.avatar-arrow-tip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  width: 13px !important;\n  height: 13px !important;\n  color: var(--ui-text-sub);\n}\n.user-menu-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 16px);\n  inset-inline-end: 0;\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_menuFadeIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_menuFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n}\n.menu-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--brand-accent-200);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.menu-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.menu-user-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu-role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 50px;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.menu-role-badge.role-badge--business[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.menu-role-badge.role-badge--employee[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.menu-role-badge.role-badge--contractor[_ngcontent-%COMP%] {\n  background: var(--functional-warning-50);\n  color: var(--brand-tertiary-600);\n}\n.menu-role-badge.role-badge--admin[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.menu-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--ui-border);\n  margin: 0;\n}\n.menu-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ui-text-main);\n  text-align: start;\n  transition: background 0.12s ease;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.menu-item-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: var(--ui-text-sub);\n}\n.menu-item--danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n  width: 100%;\n  padding: 10px 16px;\n  margin: 4px 0;\n}\n.menu-item--danger[_ngcontent-%COMP%]   .menu-item-icon[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.menu-item--danger[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--functional-danger-600) 8%, transparent);\n}\n@media (max-width: 1024px) {\n  .header[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .left-section[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    margin-inline-start: 0 !important;\n    padding: 12px 16px;\n  }\n  .center-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-company[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .left-section[_ngcontent-%COMP%] {\n    gap: 12px;\n    width: auto;\n  }\n  .icon-group[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:not(:last-child) {\n    display: none;\n  }\n}\n.icon-btn--has-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  inset-inline-end: 4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: var(--brand-primary-500, rgb(99, 102, 241));\n  color: var(--brand-neutral-0, #fff);\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 18px;\n  text-align: center;\n  pointer-events: none;\n  box-shadow: 0 0 0 2px var(--ui-bg-surface);\n}\n/*# sourceMappingURL=authenticated-header.css.map */"] });
var AuthenticatedHeaderComponent = _AuthenticatedHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-authenticated-header", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      TranslocoModule
    ], template: `<header class="header" [class.sidebar-collapsed]="!sidebarService.isOpen()">

  <!-- Left: toggle + user welcome -->
  <div class="left-section">
    <button class="hamburger-btn" (click)="onToggleSidebar()" [attr.aria-label]="'common.toggleSidebar' | transloco" [title]="'common.toggleSidebar' | transloco">
      <mat-icon>menu</mat-icon>
    </button>

    <div class="user-info">
      <div class="user-avatar-small" aria-hidden="true">
        <mat-icon>person</mat-icon>
      </div>
      <div class="user-text">
        <p class="user-name">{{ 'common.welcome' | transloco }}</p>
        <p class="user-company">{{ userEmail || ('common.appName' | transloco) }}</p>
      </div>
    </div>
  </div>

  <!-- Center: search + filter combined -->
  <div class="center-section">
    <div class="search-bar">
      <div class="search-left">
        <mat-icon class="search-icon">search</mat-icon>
        <input
          type="text"
          class="search-input"
          [placeholder]="'common.search' | transloco"
          [(ngModel)]="searchQuery"
          [attr.aria-label]="'common.search' | transloco"
          (ngModelChange)="onSearchChange()"
        />
      </div>
      <div class="search-divider" aria-hidden="true"></div>
      <div class="search-filter">
        <span class="filter-label">{{ 'common.employee' | transloco }}</span>
        <mat-icon class="filter-arrow">expand_more</mat-icon>
      </div>
    </div>
  </div>

  <!-- Right: icon buttons + avatar -->
  <div class="right-section">
    <div class="icon-group">
      <button class="icon-btn" (click)="themeService.toggleTheme()"
              [attr.aria-label]="themeService.isDarkMode() ? ('common.lightMode' | transloco) : ('common.darkMode' | transloco)"
              [title]="themeService.isDarkMode() ? ('common.lightMode' | transloco) : ('common.darkMode' | transloco)">
        <mat-icon>{{ themeService.isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
      <button class="icon-btn" routerLink="/dashboard/account-settings"
              [attr.aria-label]="'common.settings' | transloco" [title]="'common.settings' | transloco">
        <mat-icon>settings</mat-icon>
      </button>
      <button class="icon-btn" routerLink="/dashboard/messages"
              [attr.aria-label]="'common.messages' | transloco" [title]="'common.messages' | transloco">
        <mat-icon>chat_bubble_outline</mat-icon>
      </button>
      <button class="icon-btn icon-btn--has-badge" routerLink="/dashboard/notifications"
              [attr.aria-label]="'common.notifications' | transloco"
              [title]="'common.notifications' | transloco">
        <mat-icon>notifications_none</mat-icon>
        @if (unreadNotifications() > 0) {
          <span class="icon-badge" aria-hidden="true">
            {{ unreadNotifications() > 99 ? '99+' : unreadNotifications() }}
          </span>
        }
      </button>
    </div>

    <div class="user-avatar-wrapper">
      <button
        class="user-avatar"
        [title]="userEmail"
        (click)="toggleUserMenu()"
        [attr.aria-expanded]="userMenuOpen()"
        aria-haspopup="true"
        [attr.aria-label]="'common.userMenu' | transloco">
        {{ userInitials }}
        <span class="avatar-dot" aria-hidden="true"></span>
      </button>
      <span class="avatar-arrow-tip" aria-hidden="true">
        <mat-icon>expand_more</mat-icon>
      </span>

      <!-- User profile dropdown -->
      @if (userMenuOpen()) {
        <div class="user-menu-dropdown" role="menu">
          <!-- Profile header -->
          <div class="menu-profile-header">
            <div class="menu-avatar">{{ userInitials }}</div>
            <div class="menu-user-info">
              <p class="menu-user-email">{{ userEmail }}</p>
              @if (roleMeta) {
                <span class="menu-role-badge" [class]="roleMeta.cssClass">{{ roleMeta.labelKey | transloco }}</span>
              }
            </div>
          </div>

          <div class="menu-divider" aria-hidden="true"></div>

          <!-- Actions -->
          <ul class="menu-list" role="none">
            <li role="none">
              <button
                type="button"
                class="menu-item"
                role="menuitem"
                [attr.aria-label]="'common.viewProfile' | transloco"
                routerLink="/dashboard/profile"
                (click)="closeUserMenu()"
              >
                <mat-icon class="menu-item-icon">person_outline</mat-icon>
                <span>{{ 'common.profile' | transloco }}</span>
              </button>
            </li>
            <li role="none">
              <button
                type="button"
                class="menu-item"
                role="menuitem"
                [attr.aria-label]="'common.settings' | transloco"
                routerLink="/dashboard/account-settings"
                (click)="closeUserMenu()"
              >
                <mat-icon class="menu-item-icon">settings</mat-icon>
                <span>{{ 'common.settings' | transloco }}</span>
              </button>
            </li>
          </ul>

          <div class="menu-divider" aria-hidden="true"></div>

          <button class="menu-item menu-item--danger" role="menuitem" (click)="onLogout()" [attr.aria-label]="'common.signOut' | transloco">
            <mat-icon class="menu-item-icon">logout</mat-icon>
            <span>{{ 'common.signOutLabel' | transloco }}</span>
          </button>
        </div>
      }
    </div>
  </div>

</header>
`, styles: ["/* src/components/DashboardLayout/authenticated-header/authenticated-header.css */\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  background: var(--ui-bg-surface);\n  border-block-end: 0.5px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  transition: margin-inline-start 0.3s ease;\n  margin-inline-start: 277px;\n}\n.header.sidebar-collapsed {\n  margin-inline-start: 100px;\n}\n.left-section {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n  width: 361px;\n}\n.hamburger-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.hamburger-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.hamburger-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.user-avatar-small {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--ui-bg-surface);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-avatar-small mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.5;\n}\n.user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  white-space: nowrap;\n}\n.user-company {\n  font-size: 8px;\n  font-weight: 400;\n  color: var(--ui-text-muted);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 120px;\n}\n.center-section {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding-inline: 24px;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 465px;\n  height: 42px;\n  background: var(--ui-bg-surface);\n  border: 0.5px solid var(--ui-border);\n  border-radius: 12px;\n  padding-inline: 8px;\n  box-shadow: 0 0 1px rgba(204, 204, 204, 0.2);\n  gap: 8px;\n}\n.search-left {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.search-icon {\n  font-size: 20px !important;\n  width: 20px !important;\n  height: 20px !important;\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 16px;\n  color: var(--ui-text-muted);\n  min-width: 0;\n}\n.search-input::placeholder {\n  color: var(--ui-text-muted);\n}\n.search-divider {\n  width: 1px;\n  height: 20px;\n  background: var(--ui-border);\n  flex-shrink: 0;\n}\n.search-filter {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.filter-label {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.filter-arrow {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: var(--ui-text-muted);\n}\n.right-section {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.icon-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.icon-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: var(--ui-bg-surface);\n  border: 0.25px solid var(--ui-border);\n  border-radius: 12px;\n  cursor: pointer;\n  box-shadow: 0 0 1px rgba(204, 204, 204, 0.2), inset 0 -2px 2px rgba(204, 204, 204, 0.2);\n  transition: background 0.15s ease;\n  color: var(--ui-text-sub);\n}\n.icon-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.icon-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.user-avatar {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--brand-accent-200);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  cursor: pointer;\n  transition: transform 0.15s ease;\n  flex-shrink: 0;\n}\n.user-avatar:hover {\n  transform: scale(1.05);\n}\n.avatar-dot {\n  position: absolute;\n  bottom: 1px;\n  inset-inline-end: 1px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--functional-success-500);\n  border: 2px solid var(--ui-bg-surface);\n}\n.user-avatar-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.avatar-arrow-tip {\n  position: absolute;\n  bottom: -8px;\n  inset-inline-end: -4px;\n  width: 20px;\n  height: 20px;\n  background: var(--ui-bg);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.avatar-arrow-tip mat-icon {\n  font-size: 13px !important;\n  width: 13px !important;\n  height: 13px !important;\n  color: var(--ui-text-sub);\n}\n.user-menu-dropdown {\n  position: absolute;\n  top: calc(100% + 16px);\n  inset-inline-end: 0;\n  width: 240px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  animation: menuFadeIn 0.15s ease;\n}\n@keyframes menuFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-profile-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n}\n.menu-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--brand-accent-200);\n  border: 2px solid color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.menu-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.menu-user-email {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu-role-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 50px;\n  background: var(--ui-bg-subtle);\n  color: var(--ui-text-sub);\n}\n.menu-role-badge.role-badge--business {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n}\n.menu-role-badge.role-badge--employee {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n}\n.menu-role-badge.role-badge--contractor {\n  background: var(--functional-warning-50);\n  color: var(--brand-tertiary-600);\n}\n.menu-role-badge.role-badge--admin {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-700);\n}\n.menu-divider {\n  height: 1px;\n  background: var(--ui-border);\n  margin: 0;\n}\n.menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ui-text-main);\n  text-align: start;\n  transition: background 0.12s ease;\n}\n.menu-item:hover {\n  background: var(--ui-bg-subtle);\n}\n.menu-item-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  color: var(--ui-text-sub);\n}\n.menu-item--danger {\n  color: var(--functional-danger-600);\n  width: 100%;\n  padding: 10px 16px;\n  margin: 4px 0;\n}\n.menu-item--danger .menu-item-icon {\n  color: var(--functional-danger-600);\n}\n.menu-item--danger:hover {\n  background: color-mix(in srgb, var(--functional-danger-600) 8%, transparent);\n}\n@media (max-width: 1024px) {\n  .header {\n    margin-inline-start: 0;\n  }\n  .left-section {\n    width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .header {\n    margin-inline-start: 0 !important;\n    padding: 12px 16px;\n  }\n  .center-section {\n    display: none;\n  }\n  .user-company {\n    display: none;\n  }\n  .left-section {\n    gap: 12px;\n    width: auto;\n  }\n  .icon-group .icon-btn:not(:last-child) {\n    display: none;\n  }\n}\n.icon-btn--has-badge {\n  position: relative;\n}\n.icon-badge {\n  position: absolute;\n  top: 4px;\n  inset-inline-end: 4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: var(--brand-primary-500, rgb(99, 102, 241));\n  color: var(--brand-neutral-0, #fff);\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 18px;\n  text-align: center;\n  pointer-events: none;\n  box-shadow: 0 0 0 2px var(--ui-bg-surface);\n}\n/*# sourceMappingURL=authenticated-header.css.map */\n"] }]
  }], () => [], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticatedHeaderComponent, { className: "AuthenticatedHeaderComponent", filePath: "src/components/dashboardlayout/authenticated-header/authenticated-header.ts", lineNumber: 45 });
})();

// src/components/DashboardLayout/sidebar/sidebar.ts
var _forTrack0 = ($index, $item) => $item.route;
function SidebarComponent_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r1.labelKey));
  }
}
function SidebarComponent_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 0)(6, "button", 9);
    \u0275\u0275listener("click", function SidebarComponent_For_8_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openInviteMembersDialog());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function SidebarComponent_For_8_Conditional_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateTeamDialog());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const teamsMenu_r4 = \u0275\u0275reference(5);
    \u0275\u0275property("matMenuTriggerFor", teamsMenu_r4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, "common.teamsActions"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "nav.inviteWorker"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "nav.createTeam"));
  }
}
function SidebarComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SidebarComponent_For_8_Conditional_5_Template, 3, 3, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SidebarComponent_For_8_Conditional_6_Template, 18, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, item_r1.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sidebarService.isOpen() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.hasAdd && ctx_r2.sidebarService.isOpen() ? 6 : -1);
  }
}
var SIDEBAR_ITEMS = [
  // ── Figma-ordered items ────────────────────────────────────────────
  { icon: "dashboard", labelKey: "nav.dashboard", route: "/dashboard" },
  { icon: "folder", labelKey: "nav.projects", route: "/dashboard/projects" },
  // Employee's Figma frame has no Reports tab — sidebar-only hide, route stays reachable.
  { icon: "assessment", labelKey: "nav.reports", route: "/dashboard/reports", hideForRoles: [UserRole.Employee] },
  { icon: "groups", labelKey: "nav.teams", route: "/dashboard/teams", hasAdd: true },
  { icon: "event", labelKey: "nav.meetings", route: "/dashboard/meetings" },
  { icon: "description", labelKey: "nav.contracts", route: "/dashboard/contracts", feature: "contracts" },
  { icon: "task", labelKey: "nav.taskManagement", route: "/dashboard/task-management" },
  { icon: "badge", labelKey: "nav.hr", route: "/dashboard/hr", feature: "hr" },
  { icon: "how_to_reg", labelKey: "nav.attendance", route: "/dashboard/genralattendance", feature: "attendance" },
  // Employee's Figma frame labels this "My Requests".
  { icon: "request_page", labelKey: "nav.requests", route: "/dashboard/requests", feature: "requests", labelKeyByRole: { [UserRole.Employee]: "nav.myRequests" } },
  // ── Backend-supported extras (not in the Figma sidebar frame) ──────
  // Employee's Figma frame omits Salary/Withdrawals/Payments — sidebar-only
  // hide; the routes stay reachable (Employee has real salary/withdrawal
  // data per FeatureAccess) for whatever other entry point surfaces them.
  { icon: "payments", labelKey: "nav.salary", route: "/dashboard/salary", feature: "salary", hideForRoles: [UserRole.Employee] },
  { icon: "account_balance_wallet", labelKey: "nav.withdrawals", route: "/dashboard/withdrawals", feature: "withdrawals", hideForRoles: [UserRole.Employee] },
  { icon: "account_balance_wallet", labelKey: "nav.payments", route: "/dashboard/payments", hideForRoles: [UserRole.Employee] },
  { icon: "business", labelKey: "nav.companyProfile", route: "/dashboard/company-profile", feature: "companyProfile" },
  // Added 2026-07-24: AUTH_DASHBOARD_MAP.md §3/§4 lists "Employees" as a Business-owner
  // dashboard module (Figma nodes 3:124367/3:125105/3:125185); no page existed for it.
  { icon: "people_alt", labelKey: "nav.employees", route: "/dashboard/employees", feature: "employees" },
  // ── Admin-only items ───────────────────────────────────────────────
  { icon: "people", labelKey: "nav.admin.users", route: "/dashboard/users", adminOnly: true },
  { icon: "domain", labelKey: "nav.admin.companies", route: "/dashboard/companies", adminOnly: true },
  { icon: "settings", labelKey: "nav.admin.settings", route: "/dashboard/settings", adminOnly: true }
];
var _SidebarComponent = class _SidebarComponent {
  constructor() {
    this.sidebarService = inject(SidebarService);
    this.authService = inject(AuthService);
    this.authorization = inject(AuthorizationService);
    this.tokenService = inject(TokenService);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.isOpen = this.sidebarService.isOpen;
    this.navigationItems = computed(() => {
      const role = this.tokenService.getUserRole();
      const isAdmin = role === UserRole.Admin;
      return SIDEBAR_ITEMS.filter((item) => {
        if (role && item.hideForRoles?.includes(role))
          return false;
        if (item.adminOnly)
          return isAdmin;
        if (item.feature)
          return this.authorization.hasAccess(item.feature);
        return true;
      }).map((item) => {
        const override = role && item.labelKeyByRole?.[role];
        const suppressAdd = item.hasAdd && role === UserRole.Employee;
        if (!override && !suppressAdd)
          return item;
        return __spreadProps(__spreadValues({}, item), { labelKey: override ?? item.labelKey, hasAdd: suppressAdd ? false : item.hasAdd });
      });
    }, ...ngDevMode ? [{ debugName: "navigationItems" }] : []);
  }
  toggleSidebar() {
    this.sidebarService.toggle();
  }
  openInviteMembersDialog() {
    const ref = this.dialog.open(InviteMembersDialogComponent, {
      width: "520px",
      panelClass: "invite-dialog-panel",
      disableClose: false
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved && this.router.url.includes("/teams")) {
        this.router.navigate(["/dashboard/teams"], { queryParams: { refreshed: Date.now() } });
      }
    });
  }
  openCreateTeamDialog() {
    const ref = this.dialog.open(CreateTeamDialogComponent, {
      width: "600px",
      panelClass: "custom-dialog-container",
      disableClose: false
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved) {
        this.router.navigate(["/dashboard/teams"], { queryParams: { refreshed: Date.now() } });
      }
    });
  }
};
_SidebarComponent.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarComponent)();
};
_SidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 9, vars: 10, consts: [["teamsMenu", "matMenu"], ["role", "navigation", 1, "sidebar"], [1, "logo-section"], ["src", "assets/images/dashboard/sidebar-logo.svg", 1, "logo-img"], [1, "sidebar-nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-icon"], [1, "label"], ["mat-icon-button", "", 1, "add-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 1);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nav", 4)(6, "ul");
    \u0275\u0275repeaterCreate(7, SidebarComponent_For_8_Template, 7, 7, "li", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("collapsed", !ctx.sidebarService.isOpen())("open", ctx.sidebarService.isOpen());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 6, "common.mainNavigation"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("alt", \u0275\u0275pipeBind1(4, 8, "common.appName"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.navigationItems());
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  RouterLink,
  RouterLinkActive,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatIconButton,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatDialogModule,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 277px;\n  height: 100vh;\n  background: var(--ui-bg-surface);\n  border-inline-end: 0.5px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease;\n  position: fixed;\n  inset-inline-start: 0;\n  top: 0;\n  z-index: 200;\n  box-shadow: 0 4px 8px color-mix(in srgb, var(--brand-neutral-500) 20%, transparent);\n  overflow: hidden;\n  padding-block-start: 24px;\n  padding-block-end: 48px;\n  padding-inline: 12px;\n  gap: 32px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 100px;\n  align-items: center;\n  padding-block-start: 32px;\n  padding-inline: 16px;\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 24px;\n  object-fit: contain;\n  display: block;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 36px;\n  object-fit: cover;\n  object-position: left center;\n}\n.dark-theme[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--ui-border);\n  border-radius: 2px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-radius: 12px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  transition: background 0.2s ease;\n  position: relative;\n}\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(:has(.nav-link.active)) {\n  background: var(--ui-bg-subtle);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-grow: 1;\n  height: 40px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  color: var(--ui-text-muted);\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  transition: background 0.2s ease, color 0.2s ease;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  font-weight: 500;\n}\n.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--ui-bg-surface);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  line-height: 18px !important;\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n  transition: color 0.2s ease;\n}\n.label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.add-btn[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  color: var(--ui-text-muted);\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.add-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n  border-radius: 50%;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 8px;\n  gap: 0;\n  flex-grow: 0;\n  width: 40px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 1000;\n    box-shadow: none;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    box-shadow: 4px 0 24px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    inset: 0;\n    background: color-mix(in srgb, var(--brand-neutral-950) 50%, transparent);\n    z-index: 999;\n  }\n  .sidebar-overlay.active[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .hamburger-btn[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */"] });
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDialogModule,
      TranslocoModule
    ], template: `<aside class="sidebar" [class.collapsed]="!sidebarService.isOpen()" [class.open]="sidebarService.isOpen()" role="navigation" [attr.aria-label]="'common.mainNavigation' | transloco">
  <div class="logo-section">
    <img class="logo-img" src="assets/images/dashboard/sidebar-logo.svg" [attr.alt]="'common.appName' | transloco" />
  </div>

  <nav class="sidebar-nav">
    <ul>
      @for (item of navigationItems(); track item.route) {
        <li>
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            class="nav-link"
            [attr.aria-label]="item.labelKey | transloco"
          >
            <mat-icon class="nav-icon">{{ item.icon }}</mat-icon>
            @if (sidebarService.isOpen()) {
              <span class="label">{{ item.labelKey | transloco }}</span>
            }
          </a>

          @if (item.hasAdd && sidebarService.isOpen()) {
            <button mat-icon-button [matMenuTriggerFor]="teamsMenu" class="add-btn" [attr.aria-label]="'common.teamsActions' | transloco">
              <mat-icon>add</mat-icon>
            </button>
            <mat-menu #teamsMenu="matMenu">
              <button mat-menu-item (click)="openInviteMembersDialog()">
                <mat-icon>person_add</mat-icon><span>{{ 'nav.inviteWorker' | transloco }}</span>
              </button>
              <button mat-menu-item (click)="openCreateTeamDialog()">
                <mat-icon>group_add</mat-icon><span>{{ 'nav.createTeam' | transloco }}</span>
              </button>
            </mat-menu>
          }
        </li>
      }
    </ul>
  </nav>
</aside>
`, styles: ["/* src/components/DashboardLayout/sidebar/sidebar.css */\n.sidebar {\n  width: 277px;\n  height: 100vh;\n  background: var(--ui-bg-surface);\n  border-inline-end: 0.5px solid color-mix(in srgb, var(--brand-neutral-950) 25%, transparent);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease;\n  position: fixed;\n  inset-inline-start: 0;\n  top: 0;\n  z-index: 200;\n  box-shadow: 0 4px 8px color-mix(in srgb, var(--brand-neutral-500) 20%, transparent);\n  overflow: hidden;\n  padding-block-start: 24px;\n  padding-block-end: 48px;\n  padding-inline: 12px;\n  gap: 32px;\n}\n.sidebar.collapsed {\n  width: 100px;\n  align-items: center;\n  padding-block-start: 32px;\n  padding-inline: 16px;\n}\n.logo-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.logo-img {\n  width: 119px;\n  height: 24px;\n  object-fit: contain;\n  display: block;\n}\n.sidebar.collapsed .logo-img {\n  width: 36px;\n  object-fit: cover;\n  object-position: left center;\n}\n.dark-theme .logo-img {\n  filter: brightness(0) invert(1);\n}\n.sidebar-nav {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sidebar-nav::-webkit-scrollbar {\n  width: 3px;\n}\n.sidebar-nav::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: var(--ui-border);\n  border-radius: 2px;\n}\n.sidebar-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-radius: 12px;\n}\n.sidebar-nav li {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  transition: background 0.2s ease;\n  position: relative;\n}\n.sidebar-nav li:hover:not(:has(.nav-link.active)) {\n  background: var(--ui-bg-subtle);\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-grow: 1;\n  height: 40px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  color: var(--ui-text-muted);\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  transition: background 0.2s ease, color 0.2s ease;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.nav-link.active {\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  font-weight: 500;\n}\n.nav-link.active .nav-icon {\n  color: var(--ui-bg-surface);\n}\n.nav-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  line-height: 18px !important;\n  flex-shrink: 0;\n  color: var(--ui-text-muted);\n  transition: color 0.2s ease;\n}\n.label {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.add-btn {\n  margin-inline-start: auto;\n  color: var(--ui-text-muted);\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.add-btn:hover {\n  background: var(--ui-bg-subtle);\n  border-radius: 50%;\n}\n.sidebar.collapsed .label {\n  display: none;\n}\n.sidebar.collapsed .add-btn {\n  display: none;\n}\n.sidebar.collapsed .sidebar-nav li {\n  justify-content: center;\n}\n.sidebar.collapsed .nav-link {\n  justify-content: center;\n  padding: 8px;\n  gap: 0;\n  flex-grow: 0;\n  width: 40px;\n}\n.sidebar.collapsed .nav-icon {\n  margin: 0;\n}\n[dir=rtl] .sidebar .expand-icon,\n[dir=rtl] .sidebar .chevron {\n  transform: scaleX(-1);\n}\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 1000;\n    box-shadow: none;\n  }\n  [dir=rtl] .sidebar {\n    transform: translateX(100%);\n  }\n  .sidebar.open {\n    transform: translateX(0);\n    box-shadow: 4px 0 24px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  }\n  .sidebar-overlay {\n    display: none;\n    position: fixed;\n    inset: 0;\n    background: color-mix(in srgb, var(--brand-neutral-950) 50%, transparent);\n    z-index: 999;\n  }\n  .sidebar-overlay.active {\n    display: block;\n  }\n  .hamburger-btn {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/components/dashboardlayout/sidebar/sidebar.ts", lineNumber: 102 });
})();

// src/features/auth/session-expiry-dialog/session-expiry-dialog.component.ts
var _SessionExpiryDialogComponent = class _SessionExpiryDialogComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.cdr = inject(ChangeDetectorRef);
    this.secondsRemaining = this.data.secondsRemaining;
  }
  get formattedTime() {
    const m = Math.floor(this.secondsRemaining / 60);
    const s = this.secondsRemaining % 60;
    return m > 0 ? `${m}m ${s.toString().padStart(2, "0")}s` : `${s}s`;
  }
  ngOnInit() {
    this.tick$ = interval(1e3).subscribe(() => {
      this.secondsRemaining = Math.max(0, this.secondsRemaining - 1);
      this.cdr.markForCheck();
      if (this.secondsRemaining === 0) {
        this.dialogRef.close("logout");
      }
    });
  }
  ngOnDestroy() {
    this.tick$?.unsubscribe();
  }
  extend() {
    this.dialogRef.close("extend");
  }
  logout() {
    this.dialogRef.close("logout");
  }
};
_SessionExpiryDialogComponent.\u0275fac = function SessionExpiryDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionExpiryDialogComponent)();
};
_SessionExpiryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionExpiryDialogComponent, selectors: [["app-session-expiry-dialog"]], decls: 27, vars: 22, consts: [[1, "session-dialog"], [1, "session-dialog__icon"], ["aria-hidden", "true"], [1, "session-dialog__title"], [1, "session-dialog__body"], [1, "session-dialog__countdown"], [1, "session-dialog__actions"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function SessionExpiryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
    \u0275\u0275text(3, "timer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "strong", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 6)(15, "button", 7);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275listener("click", function SessionExpiryDialogComponent_Template_button_click_15_listener() {
      return ctx.extend();
    });
    \u0275\u0275elementStart(17, "mat-icon", 2);
    \u0275\u0275text(18, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 8);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275listener("click", function SessionExpiryDialogComponent_Template_button_click_21_listener() {
      return ctx.logout();
    });
    \u0275\u0275elementStart(23, "mat-icon", 2);
    \u0275\u0275text(24, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "session.expiringTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "session.expiringBody"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.formattedTime);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(". ", \u0275\u0275pipeBind1(13, 12, "session.expiringPrompt"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 14, "session.extendBtn"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "session.extendBtn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 18, "session.signOutBtn"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "session.signOutBtn"), " ");
  }
}, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.session-dialog[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  max-width: 360px;\n}\n.session-dialog__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--brand-accent-500);\n}\n.session-dialog__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 12px 0 8px;\n}\n.session-dialog__body[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n  margin-bottom: 24px;\n}\n.session-dialog__countdown[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--functional-danger-600);\n  font-variant-numeric: tabular-nums;\n}\n.session-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=session-expiry-dialog.component.css.map */"], changeDetection: 0 });
var SessionExpiryDialogComponent = _SessionExpiryDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionExpiryDialogComponent, [{
    type: Component,
    args: [{ selector: "app-session-expiry-dialog", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="session-dialog">
      <div class="session-dialog__icon">
        <mat-icon aria-hidden="true">timer</mat-icon>
      </div>

      <h2 class="session-dialog__title">{{ 'session.expiringTitle' | transloco }}</h2>
      <p class="session-dialog__body">
        {{ 'session.expiringBody' | transloco }}
        <strong class="session-dialog__countdown">{{ formattedTime }}</strong>.
        {{ 'session.expiringPrompt' | transloco }}
      </p>

      <div class="session-dialog__actions">
        <button mat-flat-button color="primary" (click)="extend()"
                [attr.aria-label]="'session.extendBtn' | transloco">
          <mat-icon aria-hidden="true">refresh</mat-icon>
          {{ 'session.extendBtn' | transloco }}
        </button>
        <button mat-stroked-button color="warn" (click)="logout()"
                [attr.aria-label]="'session.signOutBtn' | transloco">
          <mat-icon aria-hidden="true">logout</mat-icon>
          {{ 'session.signOutBtn' | transloco }}
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;20eb907a0ce2de068afd59adec7f063d080aa8cac2a9e878c7d84b45df32ed55;D:/MTWork_Clean/MTWork_Clean/src/features/auth/session-expiry-dialog/session-expiry-dialog.component.ts */\n.session-dialog {\n  padding: 24px;\n  text-align: center;\n  max-width: 360px;\n}\n.session-dialog__icon mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--brand-accent-500);\n}\n.session-dialog__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 12px 0 8px;\n}\n.session-dialog__body {\n  color: var(--ui-text-muted);\n  font-size: 0.9375rem;\n  margin-bottom: 24px;\n}\n.session-dialog__countdown {\n  font-size: 1.125rem;\n  color: var(--functional-danger-600);\n  font-variant-numeric: tabular-nums;\n}\n.session-dialog__actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=session-expiry-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionExpiryDialogComponent, { className: "SessionExpiryDialogComponent", filePath: "src/features/auth/session-expiry-dialog/session-expiry-dialog.component.ts", lineNumber: 85 });
})();

// src/services/session.service.ts
var CHECK_INTERVAL_MS = 6e4;
var WARN_BEFORE_SECONDS = 5 * 60;
var IDLE_TIMEOUT_MS = 30 * 6e4;
var _SessionService = class _SessionService {
  constructor() {
    this.tokenService = inject(TokenService);
    this.authService = inject(AuthService);
    this.transloco = inject(TranslocoService);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.ngZone = inject(NgZone);
    this.stop$ = new Subject();
    this.dialogOpen = false;
  }
  // ── Public API ───────────────────────────────────────────────────
  startMonitoring() {
    this.stopMonitoring();
    this._startTokenCheck();
    this._startIdleDetection();
  }
  stopMonitoring() {
    this.stop$.next();
    this.checkSub?.unsubscribe();
    this.idleSub?.unsubscribe();
    this.dialogOpen = false;
  }
  // ── Token expiry check (every 1 minute) ─────────────────────────
  _startTokenCheck() {
    this.checkSub = interval(CHECK_INTERVAL_MS).pipe(takeUntil(this.stop$)).subscribe(() => this._checkToken());
    this._checkToken();
  }
  _checkToken() {
    const decoded = this.tokenService.getDecodedToken();
    if (!decoded || !decoded["exp"]) {
      this._forceLogout("expired");
      return;
    }
    const nowSec = Math.floor(Date.now() / 1e3);
    const secondsLeft = decoded["exp"] - nowSec;
    if (secondsLeft <= 0) {
      this._forceLogout("expired");
      return;
    }
    if (secondsLeft <= WARN_BEFORE_SECONDS && !this.dialogOpen) {
      this._openWarningDialog(secondsLeft);
    }
  }
  // ── Warning dialog ───────────────────────────────────────────────
  _openWarningDialog(secondsRemaining) {
    if (this.dialogOpen)
      return;
    this.dialogOpen = true;
    this.ngZone.run(() => {
      const ref = this.dialog.open(SessionExpiryDialogComponent, {
        data: { secondsRemaining },
        disableClose: true,
        width: "400px"
      });
      ref.afterClosed().subscribe((result) => {
        this.dialogOpen = false;
        if (result === "logout" || !result) {
          this._forceLogout("signedOut");
        }
      });
    });
  }
  // ── Idle detection (30 minutes) ──────────────────────────────────
  _startIdleDetection() {
    const activity$ = merge(fromEvent(document, "mousemove"), fromEvent(document, "keydown"), fromEvent(document, "click"), fromEvent(document, "touchstart")).pipe(throttleTime(5e3));
    this.idleSub = activity$.pipe(
      // Every time there's activity, reset a 30-min idle timer
      switchMap(() => interval(IDLE_TIMEOUT_MS)),
      takeUntil(this.stop$)
    ).subscribe(() => {
      if (!this.dialogOpen) {
        this._openWarningDialog(0);
      }
    });
    interval(IDLE_TIMEOUT_MS).pipe(takeUntil(merge(this.stop$, activity$))).subscribe(() => {
      if (!this.dialogOpen) {
        this._openWarningDialog(0);
      }
    });
  }
  // ── Force logout ─────────────────────────────────────────────────
  /** @param messageKey — 'expired' | 'signedOut' (mapped to session.* i18n keys) */
  _forceLogout(messageKey) {
    this.stopMonitoring();
    this.authService.logout();
    const t = (k) => this.transloco.translate(k);
    const keyMap = {
      expired: "session.expired",
      signedOut: "session.signedOut"
    };
    this.ngZone.run(() => {
      this.snackBar.open(t(keyMap[messageKey]), t("errors.ok"), {
        duration: 5e3,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: ["snack-warn"]
      });
      this.router.navigate(["/login"]);
    });
  }
};
_SessionService.\u0275fac = function SessionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionService)();
};
_SessionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
var SessionService = _SessionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/@microsoft/signalr/dist/esm/Errors.js
var HttpError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(errorMessage, statusCode) {
    const trueProto = new.target.prototype;
    super(`${errorMessage}: Status code '${statusCode}'`);
    this.statusCode = statusCode;
    this.__proto__ = trueProto;
  }
};
var TimeoutError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "A timeout occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    this.__proto__ = trueProto;
  }
};
var AbortError = class extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "An abort occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    this.__proto__ = trueProto;
  }
};
var UnsupportedTransportError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "UnsupportedTransportError";
    this.__proto__ = trueProto;
  }
};
var DisabledTransportError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "DisabledTransportError";
    this.__proto__ = trueProto;
  }
};
var FailedToStartTransportError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "FailedToStartTransportError";
    this.__proto__ = trueProto;
  }
};
var FailedToNegotiateWithServerError = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(message) {
    const trueProto = new.target.prototype;
    super(message);
    this.errorType = "FailedToNegotiateWithServerError";
    this.__proto__ = trueProto;
  }
};
var AggregateErrors = class extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(message, innerErrors) {
    const trueProto = new.target.prototype;
    super(message);
    this.innerErrors = innerErrors;
    this.__proto__ = trueProto;
  }
};

// node_modules/@microsoft/signalr/dist/esm/HttpClient.js
var HttpResponse = class {
  constructor(statusCode, statusText, content) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.content = content;
  }
};
var HttpClient = class {
  get(url, options) {
    return this.send(__spreadProps(__spreadValues({}, options), {
      method: "GET",
      url
    }));
  }
  post(url, options) {
    return this.send(__spreadProps(__spreadValues({}, options), {
      method: "POST",
      url
    }));
  }
  delete(url, options) {
    return this.send(__spreadProps(__spreadValues({}, options), {
      method: "DELETE",
      url
    }));
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(url) {
    return "";
  }
};

// node_modules/@microsoft/signalr/dist/esm/ILogger.js
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
  LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
  LogLevel2[LogLevel2["Information"] = 2] = "Information";
  LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
  LogLevel2[LogLevel2["Error"] = 4] = "Error";
  LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
  LogLevel2[LogLevel2["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));

// node_modules/@microsoft/signalr/dist/esm/Loggers.js
var NullLogger = class {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(_logLevel, _message) {
  }
};
NullLogger.instance = new NullLogger();

// node_modules/@microsoft/signalr/dist/esm/pkg-version.js
var VERSION = "10.0.0";

// node_modules/@microsoft/signalr/dist/esm/Utils.js
var Arg = class {
  static isRequired(val, name) {
    if (val === null || val === void 0) {
      throw new Error(`The '${name}' argument is required.`);
    }
  }
  static isNotEmpty(val, name) {
    if (!val || val.match(/^\s*$/)) {
      throw new Error(`The '${name}' argument should not be empty.`);
    }
  }
  static isIn(val, values, name) {
    if (!(val in values)) {
      throw new Error(`Unknown ${name} value: ${val}.`);
    }
  }
};
var Platform2 = class _Platform {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !_Platform.isNode && typeof window === "object" && typeof window.document === "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !_Platform.isNode && typeof self === "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !_Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process !== "undefined" && process.release && process.release.name === "node";
  }
};
function getDataDetail(data, includeContent) {
  let detail = "";
  if (isArrayBuffer(data)) {
    detail = `Binary data of length ${data.byteLength}`;
    if (includeContent) {
      detail += `. Content: '${formatArrayBuffer(data)}'`;
    }
  } else if (typeof data === "string") {
    detail = `String data of length ${data.length}`;
    if (includeContent) {
      detail += `. Content: '${data}'`;
    }
  }
  return detail;
}
function formatArrayBuffer(data) {
  const view = new Uint8Array(data);
  let str = "";
  view.forEach((num) => {
    const pad = num < 16 ? "0" : "";
    str += `0x${pad}${num.toString(16)} `;
  });
  return str.substring(0, str.length - 1);
}
function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
function sendMessage(logger, transportName, httpClient, url, content, options) {
  return __async(this, null, function* () {
    const headers = {};
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = yield httpClient.post(url, {
      content,
      headers: __spreadValues(__spreadValues({}, headers), options.headers),
      responseType,
      timeout: options.timeout,
      withCredentials: options.withCredentials
    });
    logger.log(LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
  });
}
function createLogger(logger) {
  if (logger === void 0) {
    return new ConsoleLogger(LogLevel.Information);
  }
  if (logger === null) {
    return NullLogger.instance;
  }
  if (logger.log !== void 0) {
    return logger;
  }
  return new ConsoleLogger(logger);
}
var SubjectSubscription = class {
  constructor(subject, observer) {
    this._subject = subject;
    this._observer = observer;
  }
  dispose() {
    const index = this._subject.observers.indexOf(this._observer);
    if (index > -1) {
      this._subject.observers.splice(index, 1);
    }
    if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
      this._subject.cancelCallback().catch((_) => {
      });
    }
  }
};
var ConsoleLogger = class {
  constructor(minimumLogLevel) {
    this._minLevel = minimumLogLevel;
    this.out = console;
  }
  log(logLevel, message) {
    if (logLevel >= this._minLevel) {
      const msg = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${LogLevel[logLevel]}: ${message}`;
      switch (logLevel) {
        case LogLevel.Critical:
        case LogLevel.Error:
          this.out.error(msg);
          break;
        case LogLevel.Warning:
          this.out.warn(msg);
          break;
        case LogLevel.Information:
          this.out.info(msg);
          break;
        default:
          this.out.log(msg);
          break;
      }
    }
  }
};
function getUserAgentHeader() {
  let userAgentHeaderName = "X-SignalR-User-Agent";
  if (Platform2.isNode) {
    userAgentHeaderName = "User-Agent";
  }
  return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
function constructUserAgent(version, os, runtime, runtimeVersion) {
  let userAgent = "Microsoft SignalR/";
  const majorAndMinor = version.split(".");
  userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
  userAgent += ` (${version}; `;
  if (os && os !== "") {
    userAgent += `${os}; `;
  } else {
    userAgent += "Unknown OS; ";
  }
  userAgent += `${runtime}`;
  if (runtimeVersion) {
    userAgent += `; ${runtimeVersion}`;
  } else {
    userAgent += "; Unknown Runtime Version";
  }
  userAgent += ")";
  return userAgent;
}
function getOsName() {
  if (Platform2.isNode) {
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  } else {
    return "";
  }
}
function getRuntimeVersion() {
  if (Platform2.isNode) {
    return process.versions.node;
  }
  return void 0;
}
function getRuntime() {
  if (Platform2.isNode) {
    return "NodeJS";
  } else {
    return "Browser";
  }
}
function getErrorString(e) {
  if (e.stack) {
    return e.stack;
  } else if (e.message) {
    return e.message;
  }
  return `${e}`;
}
function getGlobalThis() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("could not find global");
}

// node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
var FetchHttpClient = class extends HttpClient {
  constructor(logger) {
    super();
    this._logger = logger;
    if (typeof fetch === "undefined" || Platform2.isNode) {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
      this._jar = new (requireFunc("tough-cookie")).CookieJar();
      if (typeof fetch === "undefined") {
        this._fetchType = requireFunc("node-fetch");
      } else {
        this._fetchType = fetch;
      }
      this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
    } else {
      this._fetchType = fetch.bind(getGlobalThis());
    }
    if (typeof AbortController === "undefined") {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
      this._abortControllerType = requireFunc("abort-controller");
    } else {
      this._abortControllerType = AbortController;
    }
  }
  /** @inheritDoc */
  send(request) {
    return __async(this, null, function* () {
      if (request.abortSignal && request.abortSignal.aborted) {
        throw new AbortError();
      }
      if (!request.method) {
        throw new Error("No method defined.");
      }
      if (!request.url) {
        throw new Error("No url defined.");
      }
      const abortController = new this._abortControllerType();
      let error;
      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          abortController.abort();
          error = new AbortError();
        };
      }
      let timeoutId = null;
      if (request.timeout) {
        const msTimeout = request.timeout;
        timeoutId = setTimeout(() => {
          abortController.abort();
          this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
          error = new TimeoutError();
        }, msTimeout);
      }
      if (request.content === "") {
        request.content = void 0;
      }
      if (request.content) {
        request.headers = request.headers || {};
        if (isArrayBuffer(request.content)) {
          request.headers["Content-Type"] = "application/octet-stream";
        } else {
          request.headers["Content-Type"] = "text/plain;charset=UTF-8";
        }
      }
      let response;
      try {
        response = yield this._fetchType(request.url, {
          body: request.content,
          cache: "no-cache",
          credentials: request.withCredentials === true ? "include" : "same-origin",
          headers: __spreadValues({
            "X-Requested-With": "XMLHttpRequest"
          }, request.headers),
          method: request.method,
          mode: "cors",
          redirect: "follow",
          signal: abortController.signal
        });
      } catch (e) {
        if (error) {
          throw error;
        }
        this._logger.log(LogLevel.Warning, `Error from HTTP request. ${e}.`);
        throw e;
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
      }
      if (!response.ok) {
        const errorMessage = yield deserializeContent(response, "text");
        throw new HttpError(errorMessage || response.statusText, response.status);
      }
      const content = deserializeContent(response, request.responseType);
      const payload = yield content;
      return new HttpResponse(response.status, response.statusText, payload);
    });
  }
  getCookieString(url) {
    let cookies = "";
    if (Platform2.isNode && this._jar) {
      this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
    }
    return cookies;
  }
};
function deserializeContent(response, responseType) {
  let content;
  switch (responseType) {
    case "arraybuffer":
      content = response.arrayBuffer();
      break;
    case "text":
      content = response.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${responseType} is not supported.`);
    default:
      content = response.text();
      break;
  }
  return content;
}

// node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js
var XhrHttpClient = class extends HttpClient {
  constructor(logger) {
    super();
    this._logger = logger;
  }
  /** @inheritDoc */
  send(request) {
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(request.method, request.url, true);
      xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      if (request.content === "") {
        request.content = void 0;
      }
      if (request.content) {
        if (isArrayBuffer(request.content)) {
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
        } else {
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
      }
      const headers = request.headers;
      if (headers) {
        Object.keys(headers).forEach((header) => {
          xhr.setRequestHeader(header, headers[header]);
        });
      }
      if (request.responseType) {
        xhr.responseType = request.responseType;
      }
      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          xhr.abort();
          reject(new AbortError());
        };
      }
      if (request.timeout) {
        xhr.timeout = request.timeout;
      }
      xhr.onload = () => {
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
        } else {
          reject(new HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
        }
      };
      xhr.onerror = () => {
        this._logger.log(LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
        reject(new HttpError(xhr.statusText, xhr.status));
      };
      xhr.ontimeout = () => {
        this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
        reject(new TimeoutError());
      };
      xhr.send(request.content);
    });
  }
};

// node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js
var DefaultHttpClient = class extends HttpClient {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(logger) {
    super();
    if (typeof fetch !== "undefined" || Platform2.isNode) {
      this._httpClient = new FetchHttpClient(logger);
    } else if (typeof XMLHttpRequest !== "undefined") {
      this._httpClient = new XhrHttpClient(logger);
    } else {
      throw new Error("No usable HttpClient found.");
    }
  }
  /** @inheritDoc */
  send(request) {
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return this._httpClient.send(request);
  }
  getCookieString(url) {
    return this._httpClient.getCookieString(url);
  }
};

// node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js
var TextMessageFormat = class _TextMessageFormat {
  static write(output) {
    return `${output}${_TextMessageFormat.RecordSeparator}`;
  }
  static parse(input) {
    if (input[input.length - 1] !== _TextMessageFormat.RecordSeparator) {
      throw new Error("Message is incomplete.");
    }
    const messages = input.split(_TextMessageFormat.RecordSeparator);
    messages.pop();
    return messages;
  }
};
TextMessageFormat.RecordSeparatorCode = 30;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);

// node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var HandshakeProtocol = class {
  // Handshake request is always JSON
  writeHandshakeRequest(handshakeRequest) {
    return TextMessageFormat.write(JSON.stringify(handshakeRequest));
  }
  parseHandshakeResponse(data) {
    let messageData;
    let remainingData;
    if (isArrayBuffer(data)) {
      const binaryData = new Uint8Array(data);
      const separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      const responseLength = separatorIndex + 1;
      messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
      remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
    } else {
      const textData = data;
      const separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      const responseLength = separatorIndex + 1;
      messageData = textData.substring(0, responseLength);
      remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
    }
    const messages = TextMessageFormat.parse(messageData);
    const response = JSON.parse(messages[0]);
    if (response.type) {
      throw new Error("Expected a handshake response from the server.");
    }
    const responseMessage = response;
    return [remainingData, responseMessage];
  }
};

// node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js
var MessageType;
(function(MessageType2) {
  MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
  MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
  MessageType2[MessageType2["Completion"] = 3] = "Completion";
  MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
  MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
  MessageType2[MessageType2["Ping"] = 6] = "Ping";
  MessageType2[MessageType2["Close"] = 7] = "Close";
  MessageType2[MessageType2["Ack"] = 8] = "Ack";
  MessageType2[MessageType2["Sequence"] = 9] = "Sequence";
})(MessageType || (MessageType = {}));

// node_modules/@microsoft/signalr/dist/esm/Subject.js
var Subject2 = class {
  constructor() {
    this.observers = [];
  }
  next(item) {
    for (const observer of this.observers) {
      observer.next(item);
    }
  }
  error(err) {
    for (const observer of this.observers) {
      if (observer.error) {
        observer.error(err);
      }
    }
  }
  complete() {
    for (const observer of this.observers) {
      if (observer.complete) {
        observer.complete();
      }
    }
  }
  subscribe(observer) {
    this.observers.push(observer);
    return new SubjectSubscription(this, observer);
  }
};

// node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js
var MessageBuffer = class {
  constructor(protocol, connection, bufferSize) {
    this._bufferSize = 1e5;
    this._messages = [];
    this._totalMessageCount = 0;
    this._waitForSequenceMessage = false;
    this._nextReceivingSequenceId = 1;
    this._latestReceivedSequenceId = 0;
    this._bufferedByteCount = 0;
    this._reconnectInProgress = false;
    this._protocol = protocol;
    this._connection = connection;
    this._bufferSize = bufferSize;
  }
  _send(message) {
    return __async(this, null, function* () {
      const serializedMessage = this._protocol.writeMessage(message);
      let backpressurePromise = Promise.resolve();
      if (this._isInvocationMessage(message)) {
        this._totalMessageCount++;
        let backpressurePromiseResolver = () => {
        };
        let backpressurePromiseRejector = () => {
        };
        if (isArrayBuffer(serializedMessage)) {
          this._bufferedByteCount += serializedMessage.byteLength;
        } else {
          this._bufferedByteCount += serializedMessage.length;
        }
        if (this._bufferedByteCount >= this._bufferSize) {
          backpressurePromise = new Promise((resolve, reject) => {
            backpressurePromiseResolver = resolve;
            backpressurePromiseRejector = reject;
          });
        }
        this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
      }
      try {
        if (!this._reconnectInProgress) {
          yield this._connection.send(serializedMessage);
        }
      } catch {
        this._disconnected();
      }
      yield backpressurePromise;
    });
  }
  _ack(ackMessage) {
    let newestAckedMessage = -1;
    for (let index = 0; index < this._messages.length; index++) {
      const element = this._messages[index];
      if (element._id <= ackMessage.sequenceId) {
        newestAckedMessage = index;
        if (isArrayBuffer(element._message)) {
          this._bufferedByteCount -= element._message.byteLength;
        } else {
          this._bufferedByteCount -= element._message.length;
        }
        element._resolver();
      } else if (this._bufferedByteCount < this._bufferSize) {
        element._resolver();
      } else {
        break;
      }
    }
    if (newestAckedMessage !== -1) {
      this._messages = this._messages.slice(newestAckedMessage + 1);
    }
  }
  _shouldProcessMessage(message) {
    if (this._waitForSequenceMessage) {
      if (message.type !== MessageType.Sequence) {
        return false;
      } else {
        this._waitForSequenceMessage = false;
        return true;
      }
    }
    if (!this._isInvocationMessage(message)) {
      return true;
    }
    const currentId = this._nextReceivingSequenceId;
    this._nextReceivingSequenceId++;
    if (currentId <= this._latestReceivedSequenceId) {
      if (currentId === this._latestReceivedSequenceId) {
        this._ackTimer();
      }
      return false;
    }
    this._latestReceivedSequenceId = currentId;
    this._ackTimer();
    return true;
  }
  _resetSequence(message) {
    if (message.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = message.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = true;
    this._waitForSequenceMessage = true;
  }
  _resend() {
    return __async(this, null, function* () {
      const sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
      yield this._connection.send(this._protocol.writeMessage({ type: MessageType.Sequence, sequenceId }));
      const messages = this._messages;
      for (const element of messages) {
        yield this._connection.send(element._message);
      }
      this._reconnectInProgress = false;
    });
  }
  _dispose(error) {
    error !== null && error !== void 0 ? error : error = new Error("Unable to reconnect to server.");
    for (const element of this._messages) {
      element._rejector(error);
    }
  }
  _isInvocationMessage(message) {
    switch (message.type) {
      case MessageType.Invocation:
      case MessageType.StreamItem:
      case MessageType.Completion:
      case MessageType.StreamInvocation:
      case MessageType.CancelInvocation:
        return true;
      case MessageType.Close:
      case MessageType.Sequence:
      case MessageType.Ping:
      case MessageType.Ack:
        return false;
    }
  }
  _ackTimer() {
    if (this._ackTimerHandle === void 0) {
      this._ackTimerHandle = setTimeout(() => __async(this, null, function* () {
        try {
          if (!this._reconnectInProgress) {
            yield this._connection.send(this._protocol.writeMessage({ type: MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
          }
        } catch {
        }
        clearTimeout(this._ackTimerHandle);
        this._ackTimerHandle = void 0;
      }), 1e3);
    }
  }
};
var BufferedItem = class {
  constructor(message, id, resolver, rejector) {
    this._message = message;
    this._id = id;
    this._resolver = resolver;
    this._rejector = rejector;
  }
};

// node_modules/@microsoft/signalr/dist/esm/HubConnection.js
var DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
var DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 1e5;
var HubConnectionState;
(function(HubConnectionState2) {
  HubConnectionState2["Disconnected"] = "Disconnected";
  HubConnectionState2["Connecting"] = "Connecting";
  HubConnectionState2["Connected"] = "Connected";
  HubConnectionState2["Disconnecting"] = "Disconnecting";
  HubConnectionState2["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
var HubConnection = class _HubConnection {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    return new _HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
  }
  constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    this._nextKeepAlive = 0;
    this._freezeEventListener = () => {
      this._logger.log(LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    };
    Arg.isRequired(connection, "connection");
    Arg.isRequired(logger, "logger");
    Arg.isRequired(protocol, "protocol");
    this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
    this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
    this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
    this._logger = logger;
    this._protocol = protocol;
    this.connection = connection;
    this._reconnectPolicy = reconnectPolicy;
    this._handshakeProtocol = new HandshakeProtocol();
    this.connection.onreceive = (data) => this._processIncomingData(data);
    this.connection.onclose = (error) => this._connectionClosed(error);
    this._callbacks = {};
    this._methods = {};
    this._closedCallbacks = [];
    this._reconnectingCallbacks = [];
    this._reconnectedCallbacks = [];
    this._invocationId = 0;
    this._receivedHandshakeResponse = false;
    this._connectionState = HubConnectionState.Disconnected;
    this._connectionStarted = false;
    this._cachedPingMessage = this._protocol.writeMessage({ type: MessageType.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection ? this.connection.connectionId || null : null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(url) {
    if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    }
    if (!url) {
      throw new Error("The HubConnection url must be a valid url.");
    }
    this.connection.baseUrl = url;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    this._startPromise = this._startWithStateTransitions();
    return this._startPromise;
  }
  _startWithStateTransitions() {
    return __async(this, null, function* () {
      if (this._connectionState !== HubConnectionState.Disconnected) {
        return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
      }
      this._connectionState = HubConnectionState.Connecting;
      this._logger.log(LogLevel.Debug, "Starting HubConnection.");
      try {
        yield this._startInternal();
        if (Platform2.isBrowser) {
          window.document.addEventListener("freeze", this._freezeEventListener);
        }
        this._connectionState = HubConnectionState.Connected;
        this._connectionStarted = true;
        this._logger.log(LogLevel.Debug, "HubConnection connected successfully.");
      } catch (e) {
        this._connectionState = HubConnectionState.Disconnected;
        this._logger.log(LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
        return Promise.reject(e);
      }
    });
  }
  _startInternal() {
    return __async(this, null, function* () {
      this._stopDuringStartError = void 0;
      this._receivedHandshakeResponse = false;
      const handshakePromise = new Promise((resolve, reject) => {
        this._handshakeResolver = resolve;
        this._handshakeRejecter = reject;
      });
      yield this.connection.start(this._protocol.transferFormat);
      try {
        let version = this._protocol.version;
        if (!this.connection.features.reconnect) {
          version = 1;
        }
        const handshakeRequest = {
          protocol: this._protocol.name,
          version
        };
        this._logger.log(LogLevel.Debug, "Sending handshake request.");
        yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
        this._logger.log(LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
        this._cleanupTimeout();
        this._resetTimeoutPeriod();
        this._resetKeepAliveInterval();
        yield handshakePromise;
        if (this._stopDuringStartError) {
          throw this._stopDuringStartError;
        }
        const useStatefulReconnect = this.connection.features.reconnect || false;
        if (useStatefulReconnect) {
          this._messageBuffer = new MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
          this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
          this.connection.features.resend = () => {
            if (this._messageBuffer) {
              return this._messageBuffer._resend();
            }
          };
        }
        if (!this.connection.features.inherentKeepAlive) {
          yield this._sendMessage(this._cachedPingMessage);
        }
      } catch (e) {
        this._logger.log(LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
        this._cleanupTimeout();
        this._cleanupPingTimer();
        yield this.connection.stop(e);
        throw e;
      }
    });
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  stop() {
    return __async(this, null, function* () {
      const startPromise = this._startPromise;
      this.connection.features.reconnect = false;
      this._stopPromise = this._stopInternal();
      yield this._stopPromise;
      try {
        yield startPromise;
      } catch (e) {
      }
    });
  }
  _stopInternal(error) {
    if (this._connectionState === HubConnectionState.Disconnected) {
      this._logger.log(LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
      return Promise.resolve();
    }
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
      return this._stopPromise;
    }
    const state = this._connectionState;
    this._connectionState = HubConnectionState.Disconnecting;
    this._logger.log(LogLevel.Debug, "Stopping HubConnection.");
    if (this._reconnectDelayHandle) {
      this._logger.log(LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
      clearTimeout(this._reconnectDelayHandle);
      this._reconnectDelayHandle = void 0;
      this._completeClose();
      return Promise.resolve();
    }
    if (state === HubConnectionState.Connected) {
      this._sendCloseMessage();
    }
    this._cleanupTimeout();
    this._cleanupPingTimer();
    this._stopDuringStartError = error || new AbortError("The connection was stopped before the hub handshake could complete.");
    return this.connection.stop(error);
  }
  _sendCloseMessage() {
    return __async(this, null, function* () {
      try {
        yield this._sendWithProtocol(this._createCloseMessage());
      } catch {
      }
    });
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
    let promiseQueue;
    const subject = new Subject2();
    subject.cancelCallback = () => {
      const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
      delete this._callbacks[invocationDescriptor.invocationId];
      return promiseQueue.then(() => {
        return this._sendWithProtocol(cancelInvocation);
      });
    };
    this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
      if (error) {
        subject.error(error);
        return;
      } else if (invocationEvent) {
        if (invocationEvent.type === MessageType.Completion) {
          if (invocationEvent.error) {
            subject.error(new Error(invocationEvent.error));
          } else {
            subject.complete();
          }
        } else {
          subject.next(invocationEvent.item);
        }
      }
    };
    promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
      subject.error(e);
      delete this._callbacks[invocationDescriptor.invocationId];
    });
    this._launchStreams(streams, promiseQueue);
    return subject;
  }
  _sendMessage(message) {
    this._resetKeepAliveInterval();
    return this.connection.send(message);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(message) {
    if (this._messageBuffer) {
      return this._messageBuffer._send(message);
    } else {
      return this._sendMessage(this._protocol.writeMessage(message));
    }
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
    this._launchStreams(streams, sendPromise);
    return sendPromise;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
    const p = new Promise((resolve, reject) => {
      this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
        if (error) {
          reject(error);
          return;
        } else if (invocationEvent) {
          if (invocationEvent.type === MessageType.Completion) {
            if (invocationEvent.error) {
              reject(new Error(invocationEvent.error));
            } else {
              resolve(invocationEvent.result);
            }
          } else {
            reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
          }
        }
      };
      const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
        reject(e);
        delete this._callbacks[invocationDescriptor.invocationId];
      });
      this._launchStreams(streams, promiseQueue);
    });
    return p;
  }
  on(methodName, newMethod) {
    if (!methodName || !newMethod) {
      return;
    }
    methodName = methodName.toLowerCase();
    if (!this._methods[methodName]) {
      this._methods[methodName] = [];
    }
    if (this._methods[methodName].indexOf(newMethod) !== -1) {
      return;
    }
    this._methods[methodName].push(newMethod);
  }
  off(methodName, method) {
    if (!methodName) {
      return;
    }
    methodName = methodName.toLowerCase();
    const handlers = this._methods[methodName];
    if (!handlers) {
      return;
    }
    if (method) {
      const removeIdx = handlers.indexOf(method);
      if (removeIdx !== -1) {
        handlers.splice(removeIdx, 1);
        if (handlers.length === 0) {
          delete this._methods[methodName];
        }
      }
    } else {
      delete this._methods[methodName];
    }
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(callback) {
    if (callback) {
      this._closedCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(callback) {
    if (callback) {
      this._reconnectingCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(callback) {
    if (callback) {
      this._reconnectedCallbacks.push(callback);
    }
  }
  _processIncomingData(data) {
    this._cleanupTimeout();
    if (!this._receivedHandshakeResponse) {
      data = this._processHandshakeResponse(data);
      this._receivedHandshakeResponse = true;
    }
    if (data) {
      const messages = this._protocol.parseMessages(data, this._logger);
      for (const message of messages) {
        if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
          continue;
        }
        switch (message.type) {
          case MessageType.Invocation:
            this._invokeClientMethod(message).catch((e) => {
              this._logger.log(LogLevel.Error, `Invoke client method threw error: ${getErrorString(e)}`);
            });
            break;
          case MessageType.StreamItem:
          case MessageType.Completion: {
            const callback = this._callbacks[message.invocationId];
            if (callback) {
              if (message.type === MessageType.Completion) {
                delete this._callbacks[message.invocationId];
              }
              try {
                callback(message);
              } catch (e) {
                this._logger.log(LogLevel.Error, `Stream callback threw error: ${getErrorString(e)}`);
              }
            }
            break;
          }
          case MessageType.Ping:
            break;
          case MessageType.Close: {
            this._logger.log(LogLevel.Information, "Close message received from server.");
            const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
            if (message.allowReconnect === true) {
              this.connection.stop(error);
            } else {
              this._stopPromise = this._stopInternal(error);
            }
            break;
          }
          case MessageType.Ack:
            if (this._messageBuffer) {
              this._messageBuffer._ack(message);
            }
            break;
          case MessageType.Sequence:
            if (this._messageBuffer) {
              this._messageBuffer._resetSequence(message);
            }
            break;
          default:
            this._logger.log(LogLevel.Warning, `Invalid message type: ${message.type}.`);
            break;
        }
      }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(data) {
    let responseMessage;
    let remainingData;
    try {
      [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
    } catch (e) {
      const message = "Error parsing handshake response: " + e;
      this._logger.log(LogLevel.Error, message);
      const error = new Error(message);
      this._handshakeRejecter(error);
      throw error;
    }
    if (responseMessage.error) {
      const message = "Server returned handshake error: " + responseMessage.error;
      this._logger.log(LogLevel.Error, message);
      const error = new Error(message);
      this._handshakeRejecter(error);
      throw error;
    } else {
      this._logger.log(LogLevel.Debug, "Server handshake complete.");
    }
    this._handshakeResolver();
    return remainingData;
  }
  _resetKeepAliveInterval() {
    if (this.connection.features.inherentKeepAlive) {
      return;
    }
    this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
    this._cleanupPingTimer();
  }
  _resetTimeoutPeriod() {
    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
      let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      if (nextPing < 0) {
        if (this._connectionState === HubConnectionState.Connected) {
          this._trySendPingMessage();
        }
        return;
      }
      if (this._pingServerHandle === void 0) {
        if (nextPing < 0) {
          nextPing = 0;
        }
        this._pingServerHandle = setTimeout(() => __async(this, null, function* () {
          if (this._connectionState === HubConnectionState.Connected) {
            yield this._trySendPingMessage();
          }
        }), nextPing);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  _invokeClientMethod(invocationMessage) {
    return __async(this, null, function* () {
      const methodName = invocationMessage.target.toLowerCase();
      const methods = this._methods[methodName];
      if (!methods) {
        this._logger.log(LogLevel.Warning, `No client method with the name '${methodName}' found.`);
        if (invocationMessage.invocationId) {
          this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
          yield this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
        }
        return;
      }
      const methodsCopy = methods.slice();
      const expectsResponse = invocationMessage.invocationId ? true : false;
      let res;
      let exception;
      let completionMessage;
      for (const m of methodsCopy) {
        try {
          const prevRes = res;
          res = yield m.apply(this, invocationMessage.arguments);
          if (expectsResponse && res && prevRes) {
            this._logger.log(LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
          }
          exception = void 0;
        } catch (e) {
          exception = e;
          this._logger.log(LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
        }
      }
      if (completionMessage) {
        yield this._sendWithProtocol(completionMessage);
      } else if (expectsResponse) {
        if (exception) {
          completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
        } else if (res !== void 0) {
          completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
        } else {
          this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
          completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
        }
        yield this._sendWithProtocol(completionMessage);
      } else {
        if (res) {
          this._logger.log(LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
        }
      }
    });
  }
  _connectionClosed(error) {
    this._logger.log(LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
    this._stopDuringStartError = this._stopDuringStartError || error || new AbortError("The underlying connection was closed before the hub handshake could complete.");
    if (this._handshakeResolver) {
      this._handshakeResolver();
    }
    this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
    this._cleanupTimeout();
    this._cleanupPingTimer();
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._completeClose(error);
    } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
      this._reconnect(error);
    } else if (this._connectionState === HubConnectionState.Connected) {
      this._completeClose(error);
    }
  }
  _completeClose(error) {
    if (this._connectionStarted) {
      this._connectionState = HubConnectionState.Disconnected;
      this._connectionStarted = false;
      if (this._messageBuffer) {
        this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
        this._messageBuffer = void 0;
      }
      if (Platform2.isBrowser) {
        window.document.removeEventListener("freeze", this._freezeEventListener);
      }
      try {
        this._closedCallbacks.forEach((c) => c.apply(this, [error]));
      } catch (e) {
        this._logger.log(LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
      }
    }
  }
  _reconnect(error) {
    return __async(this, null, function* () {
      const reconnectStartTime = Date.now();
      let previousReconnectAttempts = 0;
      let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
      let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts, 0, retryError);
      if (nextRetryDelay === null) {
        this._logger.log(LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
        this._completeClose(error);
        return;
      }
      this._connectionState = HubConnectionState.Reconnecting;
      if (error) {
        this._logger.log(LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
      } else {
        this._logger.log(LogLevel.Information, "Connection reconnecting.");
      }
      if (this._reconnectingCallbacks.length !== 0) {
        try {
          this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
        } catch (e) {
          this._logger.log(LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
        }
        if (this._connectionState !== HubConnectionState.Reconnecting) {
          this._logger.log(LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
          return;
        }
      }
      while (nextRetryDelay !== null) {
        this._logger.log(LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts + 1} will start in ${nextRetryDelay} ms.`);
        yield new Promise((resolve) => {
          this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
        });
        this._reconnectDelayHandle = void 0;
        if (this._connectionState !== HubConnectionState.Reconnecting) {
          this._logger.log(LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
          return;
        }
        try {
          yield this._startInternal();
          this._connectionState = HubConnectionState.Connected;
          this._logger.log(LogLevel.Information, "HubConnection reconnected successfully.");
          if (this._reconnectedCallbacks.length !== 0) {
            try {
              this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
            } catch (e) {
              this._logger.log(LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
            }
          }
          return;
        } catch (e) {
          this._logger.log(LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
            if (this._connectionState === HubConnectionState.Disconnecting) {
              this._completeClose();
            }
            return;
          }
          previousReconnectAttempts++;
          retryError = e instanceof Error ? e : new Error(e.toString());
          nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts, Date.now() - reconnectStartTime, retryError);
        }
      }
      this._logger.log(LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
      this._completeClose();
    });
  }
  _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds,
        previousRetryCount,
        retryReason
      });
    } catch (e) {
      this._logger.log(LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
      return null;
    }
  }
  _cancelCallbacksWithError(error) {
    const callbacks = this._callbacks;
    this._callbacks = {};
    Object.keys(callbacks).forEach((key) => {
      const callback = callbacks[key];
      try {
        callback(null, error);
      } catch (e) {
        this._logger.log(LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${getErrorString(e)}`);
      }
    });
  }
  _cleanupPingTimer() {
    if (this._pingServerHandle) {
      clearTimeout(this._pingServerHandle);
      this._pingServerHandle = void 0;
    }
  }
  _cleanupTimeout() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }
  _createInvocation(methodName, args, nonblocking, streamIds) {
    if (nonblocking) {
      if (streamIds.length !== 0) {
        return {
          target: methodName,
          arguments: args,
          streamIds,
          type: MessageType.Invocation
        };
      } else {
        return {
          target: methodName,
          arguments: args,
          type: MessageType.Invocation
        };
      }
    } else {
      const invocationId = this._invocationId;
      this._invocationId++;
      if (streamIds.length !== 0) {
        return {
          target: methodName,
          arguments: args,
          invocationId: invocationId.toString(),
          streamIds,
          type: MessageType.Invocation
        };
      } else {
        return {
          target: methodName,
          arguments: args,
          invocationId: invocationId.toString(),
          type: MessageType.Invocation
        };
      }
    }
  }
  _launchStreams(streams, promiseQueue) {
    if (streams.length === 0) {
      return;
    }
    if (!promiseQueue) {
      promiseQueue = Promise.resolve();
    }
    for (const streamId in streams) {
      streams[streamId].subscribe({
        complete: () => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
        },
        error: (err) => {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else if (err && err.toString) {
            message = err.toString();
          } else {
            message = "Unknown error";
          }
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
        },
        next: (item) => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
        }
      });
    }
  }
  _replaceStreamingParams(args) {
    const streams = [];
    const streamIds = [];
    for (let i = 0; i < args.length; i++) {
      const argument = args[i];
      if (this._isObservable(argument)) {
        const streamId = this._invocationId;
        this._invocationId++;
        streams[streamId] = argument;
        streamIds.push(streamId.toString());
        args.splice(i, 1);
      }
    }
    return [streams, streamIds];
  }
  _isObservable(arg) {
    return arg && arg.subscribe && typeof arg.subscribe === "function";
  }
  _createStreamInvocation(methodName, args, streamIds) {
    const invocationId = this._invocationId;
    this._invocationId++;
    if (streamIds.length !== 0) {
      return {
        target: methodName,
        arguments: args,
        invocationId: invocationId.toString(),
        streamIds,
        type: MessageType.StreamInvocation
      };
    } else {
      return {
        target: methodName,
        arguments: args,
        invocationId: invocationId.toString(),
        type: MessageType.StreamInvocation
      };
    }
  }
  _createCancelInvocation(id) {
    return {
      invocationId: id,
      type: MessageType.CancelInvocation
    };
  }
  _createStreamItemMessage(id, item) {
    return {
      invocationId: id,
      item,
      type: MessageType.StreamItem
    };
  }
  _createCompletionMessage(id, error, result) {
    if (error) {
      return {
        error,
        invocationId: id,
        type: MessageType.Completion
      };
    }
    return {
      invocationId: id,
      result,
      type: MessageType.Completion
    };
  }
  _createCloseMessage() {
    return { type: MessageType.Close };
  }
  _trySendPingMessage() {
    return __async(this, null, function* () {
      try {
        yield this._sendMessage(this._cachedPingMessage);
      } catch {
        this._cleanupPingTimer();
      }
    });
  }
};

// node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
var DefaultReconnectPolicy = class {
  constructor(retryDelays) {
    this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
  }
  nextRetryDelayInMilliseconds(retryContext) {
    return this._retryDelays[retryContext.previousRetryCount];
  }
};

// node_modules/@microsoft/signalr/dist/esm/HeaderNames.js
var HeaderNames = class {
};
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";

// node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js
var AccessTokenHttpClient = class extends HttpClient {
  constructor(innerClient, accessTokenFactory) {
    super();
    this._innerClient = innerClient;
    this._accessTokenFactory = accessTokenFactory;
  }
  send(request) {
    return __async(this, null, function* () {
      let allowRetry = true;
      if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
        allowRetry = false;
        this._accessToken = yield this._accessTokenFactory();
      }
      this._setAuthorizationHeader(request);
      const response = yield this._innerClient.send(request);
      if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
        this._accessToken = yield this._accessTokenFactory();
        this._setAuthorizationHeader(request);
        return yield this._innerClient.send(request);
      }
      return response;
    });
  }
  _setAuthorizationHeader(request) {
    if (!request.headers) {
      request.headers = {};
    }
    if (this._accessToken) {
      request.headers[HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
    } else if (this._accessTokenFactory) {
      if (request.headers[HeaderNames.Authorization]) {
        delete request.headers[HeaderNames.Authorization];
      }
    }
  }
  getCookieString(url) {
    return this._innerClient.getCookieString(url);
  }
};

// node_modules/@microsoft/signalr/dist/esm/ITransport.js
var HttpTransportType;
(function(HttpTransportType2) {
  HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
  HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
  HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
  HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
var TransferFormat;
(function(TransferFormat2) {
  TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
  TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));

// node_modules/@microsoft/signalr/dist/esm/AbortController.js
var AbortController2 = class {
  constructor() {
    this._isAborted = false;
    this.onabort = null;
  }
  abort() {
    if (!this._isAborted) {
      this._isAborted = true;
      if (this.onabort) {
        this.onabort();
      }
    }
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};

// node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js
var LongPollingTransport = class {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(httpClient, logger, options) {
    this._httpClient = httpClient;
    this._logger = logger;
    this._pollAbort = new AbortController2();
    this._options = options;
    this._running = false;
    this.onreceive = null;
    this.onclose = null;
  }
  connect(url, transferFormat) {
    return __async(this, null, function* () {
      Arg.isRequired(url, "url");
      Arg.isRequired(transferFormat, "transferFormat");
      Arg.isIn(transferFormat, TransferFormat, "transferFormat");
      this._url = url;
      this._logger.log(LogLevel.Trace, "(LongPolling transport) Connecting.");
      if (transferFormat === TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
        throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
      }
      const [name, value] = getUserAgentHeader();
      const headers = __spreadValues({ [name]: value }, this._options.headers);
      const pollOptions = {
        abortSignal: this._pollAbort.signal,
        headers,
        timeout: 1e5,
        withCredentials: this._options.withCredentials
      };
      if (transferFormat === TransferFormat.Binary) {
        pollOptions.responseType = "arraybuffer";
      }
      const pollUrl = `${url}&_=${Date.now()}`;
      this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
      const response = yield this._httpClient.get(pollUrl, pollOptions);
      if (response.statusCode !== 200) {
        this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
        this._closeError = new HttpError(response.statusText || "", response.statusCode);
        this._running = false;
      } else {
        this._running = true;
      }
      this._receiving = this._poll(this._url, pollOptions);
    });
  }
  _poll(url, pollOptions) {
    return __async(this, null, function* () {
      try {
        while (this._running) {
          try {
            const pollUrl = `${url}&_=${Date.now()}`;
            this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
            const response = yield this._httpClient.get(pollUrl, pollOptions);
            if (response.statusCode === 204) {
              this._logger.log(LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
              this._running = false;
            } else if (response.statusCode !== 200) {
              this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
              this._closeError = new HttpError(response.statusText || "", response.statusCode);
              this._running = false;
            } else {
              if (response.content) {
                this._logger.log(LogLevel.Trace, `(LongPolling transport) data received. ${getDataDetail(response.content, this._options.logMessageContent)}.`);
                if (this.onreceive) {
                  this.onreceive(response.content);
                }
              } else {
                this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              }
            }
          } catch (e) {
            if (!this._running) {
              this._logger.log(LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
            } else {
              if (e instanceof TimeoutError) {
                this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              } else {
                this._closeError = e;
                this._running = false;
              }
            }
          }
        }
      } finally {
        this._logger.log(LogLevel.Trace, "(LongPolling transport) Polling complete.");
        if (!this.pollAborted) {
          this._raiseOnClose();
        }
      }
    });
  }
  send(data) {
    return __async(this, null, function* () {
      if (!this._running) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }
      return sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
    });
  }
  stop() {
    return __async(this, null, function* () {
      this._logger.log(LogLevel.Trace, "(LongPolling transport) Stopping polling.");
      this._running = false;
      this._pollAbort.abort();
      try {
        yield this._receiving;
        this._logger.log(LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
        const headers = {};
        const [name, value] = getUserAgentHeader();
        headers[name] = value;
        const deleteOptions = {
          headers: __spreadValues(__spreadValues({}, headers), this._options.headers),
          timeout: this._options.timeout,
          withCredentials: this._options.withCredentials
        };
        let error;
        try {
          yield this._httpClient.delete(this._url, deleteOptions);
        } catch (err) {
          error = err;
        }
        if (error) {
          if (error instanceof HttpError) {
            if (error.statusCode === 404) {
              this._logger.log(LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
            } else {
              this._logger.log(LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
            }
          }
        } else {
          this._logger.log(LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
        }
      } finally {
        this._logger.log(LogLevel.Trace, "(LongPolling transport) Stop finished.");
        this._raiseOnClose();
      }
    });
  }
  _raiseOnClose() {
    if (this.onclose) {
      let logMessage = "(LongPolling transport) Firing onclose event.";
      if (this._closeError) {
        logMessage += " Error: " + this._closeError;
      }
      this._logger.log(LogLevel.Trace, logMessage);
      this.onclose(this._closeError);
    }
  }
};

// node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js
var ServerSentEventsTransport = class {
  constructor(httpClient, accessToken, logger, options) {
    this._httpClient = httpClient;
    this._accessToken = accessToken;
    this._logger = logger;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  connect(url, transferFormat) {
    return __async(this, null, function* () {
      Arg.isRequired(url, "url");
      Arg.isRequired(transferFormat, "transferFormat");
      Arg.isIn(transferFormat, TransferFormat, "transferFormat");
      this._logger.log(LogLevel.Trace, "(SSE transport) Connecting.");
      this._url = url;
      if (this._accessToken) {
        url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
      }
      return new Promise((resolve, reject) => {
        let opened = false;
        if (transferFormat !== TransferFormat.Text) {
          reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
          return;
        }
        let eventSource;
        if (Platform2.isBrowser || Platform2.isWebWorker) {
          eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
        } else {
          const cookies = this._httpClient.getCookieString(url);
          const headers = {};
          headers.Cookie = cookies;
          const [name, value] = getUserAgentHeader();
          headers[name] = value;
          eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: __spreadValues(__spreadValues({}, headers), this._options.headers) });
        }
        try {
          eventSource.onmessage = (e) => {
            if (this.onreceive) {
              try {
                this._logger.log(LogLevel.Trace, `(SSE transport) data received. ${getDataDetail(e.data, this._options.logMessageContent)}.`);
                this.onreceive(e.data);
              } catch (error) {
                this._close(error);
                return;
              }
            }
          };
          eventSource.onerror = (e) => {
            if (opened) {
              this._close();
            } else {
              reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
            }
          };
          eventSource.onopen = () => {
            this._logger.log(LogLevel.Information, `SSE connected to ${this._url}`);
            this._eventSource = eventSource;
            opened = true;
            resolve();
          };
        } catch (e) {
          reject(e);
          return;
        }
      });
    });
  }
  send(data) {
    return __async(this, null, function* () {
      if (!this._eventSource) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }
      return sendMessage(this._logger, "SSE", this._httpClient, this._url, data, this._options);
    });
  }
  stop() {
    this._close();
    return Promise.resolve();
  }
  _close(e) {
    if (this._eventSource) {
      this._eventSource.close();
      this._eventSource = void 0;
      if (this.onclose) {
        this.onclose(e);
      }
    }
  }
};

// node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js
var WebSocketTransport = class {
  constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
    this._logger = logger;
    this._accessTokenFactory = accessTokenFactory;
    this._logMessageContent = logMessageContent;
    this._webSocketConstructor = webSocketConstructor;
    this._httpClient = httpClient;
    this.onreceive = null;
    this.onclose = null;
    this._headers = headers;
  }
  connect(url, transferFormat) {
    return __async(this, null, function* () {
      Arg.isRequired(url, "url");
      Arg.isRequired(transferFormat, "transferFormat");
      Arg.isIn(transferFormat, TransferFormat, "transferFormat");
      this._logger.log(LogLevel.Trace, "(WebSockets transport) Connecting.");
      let token;
      if (this._accessTokenFactory) {
        token = yield this._accessTokenFactory();
      }
      return new Promise((resolve, reject) => {
        url = url.replace(/^http/, "ws");
        let webSocket;
        const cookies = this._httpClient.getCookieString(url);
        let opened = false;
        if (Platform2.isNode || Platform2.isReactNative) {
          const headers = {};
          const [name, value] = getUserAgentHeader();
          headers[name] = value;
          if (token) {
            headers[HeaderNames.Authorization] = `Bearer ${token}`;
          }
          if (cookies) {
            headers[HeaderNames.Cookie] = cookies;
          }
          webSocket = new this._webSocketConstructor(url, void 0, {
            headers: __spreadValues(__spreadValues({}, headers), this._headers)
          });
        } else {
          if (token) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
          }
        }
        if (!webSocket) {
          webSocket = new this._webSocketConstructor(url);
        }
        if (transferFormat === TransferFormat.Binary) {
          webSocket.binaryType = "arraybuffer";
        }
        webSocket.onopen = (_event) => {
          this._logger.log(LogLevel.Information, `WebSocket connected to ${url}.`);
          this._webSocket = webSocket;
          opened = true;
          resolve();
        };
        webSocket.onerror = (event) => {
          let error = null;
          if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
            error = event.error;
          } else {
            error = "There was an error with the transport";
          }
          this._logger.log(LogLevel.Information, `(WebSockets transport) ${error}.`);
        };
        webSocket.onmessage = (message) => {
          this._logger.log(LogLevel.Trace, `(WebSockets transport) data received. ${getDataDetail(message.data, this._logMessageContent)}.`);
          if (this.onreceive) {
            try {
              this.onreceive(message.data);
            } catch (error) {
              this._close(error);
              return;
            }
          }
        };
        webSocket.onclose = (event) => {
          if (opened) {
            this._close(event);
          } else {
            let error = null;
            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
            }
            reject(new Error(error));
          }
        };
      });
    });
  }
  send(data) {
    if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
      this._logger.log(LogLevel.Trace, `(WebSockets transport) sending data. ${getDataDetail(data, this._logMessageContent)}.`);
      this._webSocket.send(data);
      return Promise.resolve();
    }
    return Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    if (this._webSocket) {
      this._close(void 0);
    }
    return Promise.resolve();
  }
  _close(event) {
    if (this._webSocket) {
      this._webSocket.onclose = () => {
      };
      this._webSocket.onmessage = () => {
      };
      this._webSocket.onerror = () => {
      };
      this._webSocket.close();
      this._webSocket = void 0;
    }
    this._logger.log(LogLevel.Trace, "(WebSockets transport) socket closed.");
    if (this.onclose) {
      if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
        this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
      } else if (event instanceof Error) {
        this.onclose(event);
      } else {
        this.onclose();
      }
    }
  }
  _isCloseEvent(event) {
    return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
  }
};

// node_modules/@microsoft/signalr/dist/esm/HttpConnection.js
var MAX_REDIRECTS = 100;
var HttpConnection = class {
  constructor(url, options = {}) {
    this._stopPromiseResolver = () => {
    };
    this.features = {};
    this._negotiateVersion = 1;
    Arg.isRequired(url, "url");
    this._logger = createLogger(options.logger);
    this.baseUrl = this._resolveUrl(url);
    options = options || {};
    options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
    if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
      options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
    } else {
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    }
    options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
    let webSocketModule = null;
    let eventSourceModule = null;
    if (Platform2.isNode && typeof __require !== "undefined") {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
      webSocketModule = requireFunc("ws");
      eventSourceModule = requireFunc("eventsource");
    }
    if (!Platform2.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
      options.WebSocket = WebSocket;
    } else if (Platform2.isNode && !options.WebSocket) {
      if (webSocketModule) {
        options.WebSocket = webSocketModule;
      }
    }
    if (!Platform2.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
      options.EventSource = EventSource;
    } else if (Platform2.isNode && !options.EventSource) {
      if (typeof eventSourceModule !== "undefined") {
        options.EventSource = eventSourceModule;
      }
    }
    this._httpClient = new AccessTokenHttpClient(options.httpClient || new DefaultHttpClient(this._logger), options.accessTokenFactory);
    this._connectionState = "Disconnected";
    this._connectionStarted = false;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  start(transferFormat) {
    return __async(this, null, function* () {
      transferFormat = transferFormat || TransferFormat.Binary;
      Arg.isIn(transferFormat, TransferFormat, "transferFormat");
      this._logger.log(LogLevel.Debug, `Starting connection with transfer format '${TransferFormat[transferFormat]}'.`);
      if (this._connectionState !== "Disconnected") {
        return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
      }
      this._connectionState = "Connecting";
      this._startInternalPromise = this._startInternal(transferFormat);
      yield this._startInternalPromise;
      if (this._connectionState === "Disconnecting") {
        const message = "Failed to start the HttpConnection before stop() was called.";
        this._logger.log(LogLevel.Error, message);
        yield this._stopPromise;
        return Promise.reject(new AbortError(message));
      } else if (this._connectionState !== "Connected") {
        const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
        this._logger.log(LogLevel.Error, message);
        return Promise.reject(new AbortError(message));
      }
      this._connectionStarted = true;
    });
  }
  send(data) {
    if (this._connectionState !== "Connected") {
      return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
    }
    if (!this._sendQueue) {
      this._sendQueue = new TransportSendQueue(this.transport);
    }
    return this._sendQueue.send(data);
  }
  stop(error) {
    return __async(this, null, function* () {
      if (this._connectionState === "Disconnected") {
        this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
        return Promise.resolve();
      }
      if (this._connectionState === "Disconnecting") {
        this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
        return this._stopPromise;
      }
      this._connectionState = "Disconnecting";
      this._stopPromise = new Promise((resolve) => {
        this._stopPromiseResolver = resolve;
      });
      yield this._stopInternal(error);
      yield this._stopPromise;
    });
  }
  _stopInternal(error) {
    return __async(this, null, function* () {
      this._stopError = error;
      try {
        yield this._startInternalPromise;
      } catch (e) {
      }
      if (this.transport) {
        try {
          yield this.transport.stop();
        } catch (e) {
          this._logger.log(LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
          this._stopConnection();
        }
        this.transport = void 0;
      } else {
        this._logger.log(LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
      }
    });
  }
  _startInternal(transferFormat) {
    return __async(this, null, function* () {
      let url = this.baseUrl;
      this._accessTokenFactory = this._options.accessTokenFactory;
      this._httpClient._accessTokenFactory = this._accessTokenFactory;
      try {
        if (this._options.skipNegotiation) {
          if (this._options.transport === HttpTransportType.WebSockets) {
            this.transport = this._constructTransport(HttpTransportType.WebSockets);
            yield this._startTransport(url, transferFormat);
          } else {
            throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
          }
        } else {
          let negotiateResponse = null;
          let redirects = 0;
          do {
            negotiateResponse = yield this._getNegotiationResponse(url);
            if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
              throw new AbortError("The connection was stopped during negotiation.");
            }
            if (negotiateResponse.error) {
              throw new Error(negotiateResponse.error);
            }
            if (negotiateResponse.ProtocolVersion) {
              throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
            }
            if (negotiateResponse.url) {
              url = negotiateResponse.url;
            }
            if (negotiateResponse.accessToken) {
              const accessToken = negotiateResponse.accessToken;
              this._accessTokenFactory = () => accessToken;
              this._httpClient._accessToken = accessToken;
              this._httpClient._accessTokenFactory = void 0;
            }
            redirects++;
          } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
          if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
            throw new Error("Negotiate redirection limit exceeded.");
          }
          yield this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
        }
        if (this.transport instanceof LongPollingTransport) {
          this.features.inherentKeepAlive = true;
        }
        if (this._connectionState === "Connecting") {
          this._logger.log(LogLevel.Debug, "The HttpConnection connected successfully.");
          this._connectionState = "Connected";
        }
      } catch (e) {
        this._logger.log(LogLevel.Error, "Failed to start the connection: " + e);
        this._connectionState = "Disconnected";
        this.transport = void 0;
        this._stopPromiseResolver();
        return Promise.reject(e);
      }
    });
  }
  _getNegotiationResponse(url) {
    return __async(this, null, function* () {
      const headers = {};
      const [name, value] = getUserAgentHeader();
      headers[name] = value;
      const negotiateUrl = this._resolveNegotiateUrl(url);
      this._logger.log(LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
      try {
        const response = yield this._httpClient.post(negotiateUrl, {
          content: "",
          headers: __spreadValues(__spreadValues({}, headers), this._options.headers),
          timeout: this._options.timeout,
          withCredentials: this._options.withCredentials
        });
        if (response.statusCode !== 200) {
          return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
        }
        const negotiateResponse = JSON.parse(response.content);
        if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
          negotiateResponse.connectionToken = negotiateResponse.connectionId;
        }
        if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
          return Promise.reject(new FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
        }
        return negotiateResponse;
      } catch (e) {
        let errorMessage = "Failed to complete negotiation with the server: " + e;
        if (e instanceof HttpError) {
          if (e.statusCode === 404) {
            errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
          }
        }
        this._logger.log(LogLevel.Error, errorMessage);
        return Promise.reject(new FailedToNegotiateWithServerError(errorMessage));
      }
    });
  }
  _createConnectUrl(url, connectionToken) {
    if (!connectionToken) {
      return url;
    }
    return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
  }
  _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
    return __async(this, null, function* () {
      let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
      if (this._isITransport(requestedTransport)) {
        this._logger.log(LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
        this.transport = requestedTransport;
        yield this._startTransport(connectUrl, requestedTransferFormat);
        this.connectionId = negotiateResponse.connectionId;
        return;
      }
      const transportExceptions = [];
      const transports = negotiateResponse.availableTransports || [];
      let negotiate = negotiateResponse;
      for (const endpoint of transports) {
        const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
        if (transportOrError instanceof Error) {
          transportExceptions.push(`${endpoint.transport} failed:`);
          transportExceptions.push(transportOrError);
        } else if (this._isITransport(transportOrError)) {
          this.transport = transportOrError;
          if (!negotiate) {
            try {
              negotiate = yield this._getNegotiationResponse(url);
            } catch (ex) {
              return Promise.reject(ex);
            }
            connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
          }
          try {
            yield this._startTransport(connectUrl, requestedTransferFormat);
            this.connectionId = negotiate.connectionId;
            return;
          } catch (ex) {
            this._logger.log(LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
            negotiate = void 0;
            transportExceptions.push(new FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, HttpTransportType[endpoint.transport]));
            if (this._connectionState !== "Connecting") {
              const message = "Failed to select transport before stop() was called.";
              this._logger.log(LogLevel.Debug, message);
              return Promise.reject(new AbortError(message));
            }
          }
        }
      }
      if (transportExceptions.length > 0) {
        return Promise.reject(new AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
      }
      return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    });
  }
  _constructTransport(transport) {
    switch (transport) {
      case HttpTransportType.WebSockets:
        if (!this._options.WebSocket) {
          throw new Error("'WebSocket' is not supported in your environment.");
        }
        return new WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case HttpTransportType.ServerSentEvents:
        if (!this._options.EventSource) {
          throw new Error("'EventSource' is not supported in your environment.");
        }
        return new ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case HttpTransportType.LongPolling:
        return new LongPollingTransport(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${transport}.`);
    }
  }
  _startTransport(url, transferFormat) {
    this.transport.onreceive = this.onreceive;
    if (this.features.reconnect) {
      this.transport.onclose = (e) => __async(this, null, function* () {
        let callStop = false;
        if (this.features.reconnect) {
          try {
            this.features.disconnected();
            yield this.transport.connect(url, transferFormat);
            yield this.features.resend();
          } catch {
            callStop = true;
          }
        } else {
          this._stopConnection(e);
          return;
        }
        if (callStop) {
          this._stopConnection(e);
        }
      });
    } else {
      this.transport.onclose = (e) => this._stopConnection(e);
    }
    return this.transport.connect(url, transferFormat);
  }
  _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
    const transport = HttpTransportType[endpoint.transport];
    if (transport === null || transport === void 0) {
      this._logger.log(LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
      return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
    } else {
      if (transportMatches(requestedTransport, transport)) {
        const transferFormats = endpoint.transferFormats.map((s) => TransferFormat[s]);
        if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
          if (transport === HttpTransportType.WebSockets && !this._options.WebSocket || transport === HttpTransportType.ServerSentEvents && !this._options.EventSource) {
            this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it is not supported in your environment.'`);
            return new UnsupportedTransportError(`'${HttpTransportType[transport]}' is not supported in your environment.`, transport);
          } else {
            this._logger.log(LogLevel.Debug, `Selecting transport '${HttpTransportType[transport]}'.`);
            try {
              this.features.reconnect = transport === HttpTransportType.WebSockets ? useStatefulReconnect : void 0;
              return this._constructTransport(transport);
            } catch (ex) {
              return ex;
            }
          }
        } else {
          this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it does not support the requested transfer format '${TransferFormat[requestedTransferFormat]}'.`);
          return new Error(`'${HttpTransportType[transport]}' does not support ${TransferFormat[requestedTransferFormat]}.`);
        }
      } else {
        this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it was disabled by the client.`);
        return new DisabledTransportError(`'${HttpTransportType[transport]}' is disabled by the client.`, transport);
      }
    }
  }
  _isITransport(transport) {
    return transport && typeof transport === "object" && "connect" in transport;
  }
  _stopConnection(error) {
    this._logger.log(LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
    this.transport = void 0;
    error = this._stopError || error;
    this._stopError = void 0;
    if (this._connectionState === "Disconnected") {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting") {
      this._logger.log(LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
      throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
    }
    if (this._connectionState === "Disconnecting") {
      this._stopPromiseResolver();
    }
    if (error) {
      this._logger.log(LogLevel.Error, `Connection disconnected with error '${error}'.`);
    } else {
      this._logger.log(LogLevel.Information, "Connection disconnected.");
    }
    if (this._sendQueue) {
      this._sendQueue.stop().catch((e) => {
        this._logger.log(LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
      });
      this._sendQueue = void 0;
    }
    this.connectionId = void 0;
    this._connectionState = "Disconnected";
    if (this._connectionStarted) {
      this._connectionStarted = false;
      try {
        if (this.onclose) {
          this.onclose(error);
        }
      } catch (e) {
        this._logger.log(LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
      }
    }
  }
  _resolveUrl(url) {
    if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
      return url;
    }
    if (!Platform2.isBrowser) {
      throw new Error(`Cannot resolve '${url}'.`);
    }
    const aTag = window.document.createElement("a");
    aTag.href = url;
    this._logger.log(LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
    return aTag.href;
  }
  _resolveNegotiateUrl(url) {
    const negotiateUrl = new URL(url);
    if (negotiateUrl.pathname.endsWith("/")) {
      negotiateUrl.pathname += "negotiate";
    } else {
      negotiateUrl.pathname += "/negotiate";
    }
    const searchParams = new URLSearchParams(negotiateUrl.searchParams);
    if (!searchParams.has("negotiateVersion")) {
      searchParams.append("negotiateVersion", this._negotiateVersion.toString());
    }
    if (searchParams.has("useStatefulReconnect")) {
      if (searchParams.get("useStatefulReconnect") === "true") {
        this._options._useStatefulReconnect = true;
      }
    } else if (this._options._useStatefulReconnect === true) {
      searchParams.append("useStatefulReconnect", "true");
    }
    negotiateUrl.search = searchParams.toString();
    return negotiateUrl.toString();
  }
};
function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
var TransportSendQueue = class _TransportSendQueue {
  constructor(_transport) {
    this._transport = _transport;
    this._buffer = [];
    this._executing = true;
    this._sendBufferedData = new PromiseSource();
    this._transportResult = new PromiseSource();
    this._sendLoopPromise = this._sendLoop();
  }
  send(data) {
    this._bufferData(data);
    if (!this._transportResult) {
      this._transportResult = new PromiseSource();
    }
    return this._transportResult.promise;
  }
  stop() {
    this._executing = false;
    this._sendBufferedData.resolve();
    return this._sendLoopPromise;
  }
  _bufferData(data) {
    if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
    }
    this._buffer.push(data);
    this._sendBufferedData.resolve();
  }
  _sendLoop() {
    return __async(this, null, function* () {
      while (true) {
        yield this._sendBufferedData.promise;
        if (!this._executing) {
          if (this._transportResult) {
            this._transportResult.reject("Connection stopped.");
          }
          break;
        }
        this._sendBufferedData = new PromiseSource();
        const transportResult = this._transportResult;
        this._transportResult = void 0;
        const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : _TransportSendQueue._concatBuffers(this._buffer);
        this._buffer.length = 0;
        try {
          yield this._transport.send(data);
          transportResult.resolve();
        } catch (error) {
          transportResult.reject(error);
        }
      }
    });
  }
  static _concatBuffers(arrayBuffers) {
    const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const item of arrayBuffers) {
      result.set(new Uint8Array(item), offset);
      offset += item.byteLength;
    }
    return result.buffer;
  }
};
var PromiseSource = class {
  constructor() {
    this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
  }
  resolve() {
    this._resolver();
  }
  reject(reason) {
    this._rejecter(reason);
  }
};

// node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js
var JSON_HUB_PROTOCOL_NAME = "json";
var JsonHubProtocol = class {
  constructor() {
    this.name = JSON_HUB_PROTOCOL_NAME;
    this.version = 2;
    this.transferFormat = TransferFormat.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(input, logger) {
    if (typeof input !== "string") {
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    }
    if (!input) {
      return [];
    }
    if (logger === null) {
      logger = NullLogger.instance;
    }
    const messages = TextMessageFormat.parse(input);
    const hubMessages = [];
    for (const message of messages) {
      const parsedMessage = JSON.parse(message);
      if (typeof parsedMessage.type !== "number") {
        throw new Error("Invalid payload.");
      }
      switch (parsedMessage.type) {
        case MessageType.Invocation:
          this._isInvocationMessage(parsedMessage);
          break;
        case MessageType.StreamItem:
          this._isStreamItemMessage(parsedMessage);
          break;
        case MessageType.Completion:
          this._isCompletionMessage(parsedMessage);
          break;
        case MessageType.Ping:
          break;
        case MessageType.Close:
          break;
        case MessageType.Ack:
          this._isAckMessage(parsedMessage);
          break;
        case MessageType.Sequence:
          this._isSequenceMessage(parsedMessage);
          break;
        default:
          logger.log(LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
          continue;
      }
      hubMessages.push(parsedMessage);
    }
    return hubMessages;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(message) {
    return TextMessageFormat.write(JSON.stringify(message));
  }
  _isInvocationMessage(message) {
    this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
    if (message.invocationId !== void 0) {
      this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
    }
  }
  _isStreamItemMessage(message) {
    this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
    if (message.item === void 0) {
      throw new Error("Invalid payload for StreamItem message.");
    }
  }
  _isCompletionMessage(message) {
    if (message.result && message.error) {
      throw new Error("Invalid payload for Completion message.");
    }
    if (!message.result && message.error) {
      this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
    }
    this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(message) {
    if (typeof message.sequenceId !== "number") {
      throw new Error("Invalid SequenceId for Ack message.");
    }
  }
  _isSequenceMessage(message) {
    if (typeof message.sequenceId !== "number") {
      throw new Error("Invalid SequenceId for Sequence message.");
    }
  }
  _assertNotEmptyString(value, errorMessage) {
    if (typeof value !== "string" || value === "") {
      throw new Error(errorMessage);
    }
  }
};

// node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js
var LogLevelNameMapping = {
  trace: LogLevel.Trace,
  debug: LogLevel.Debug,
  info: LogLevel.Information,
  information: LogLevel.Information,
  warn: LogLevel.Warning,
  warning: LogLevel.Warning,
  error: LogLevel.Error,
  critical: LogLevel.Critical,
  none: LogLevel.None
};
function parseLogLevel(name) {
  const mapping = LogLevelNameMapping[name.toLowerCase()];
  if (typeof mapping !== "undefined") {
    return mapping;
  } else {
    throw new Error(`Unknown log level: ${name}`);
  }
}
var HubConnectionBuilder = class {
  configureLogging(logging) {
    Arg.isRequired(logging, "logging");
    if (isLogger(logging)) {
      this.logger = logging;
    } else if (typeof logging === "string") {
      const logLevel = parseLogLevel(logging);
      this.logger = new ConsoleLogger(logLevel);
    } else {
      this.logger = new ConsoleLogger(logging);
    }
    return this;
  }
  withUrl(url, transportTypeOrOptions) {
    Arg.isRequired(url, "url");
    Arg.isNotEmpty(url, "url");
    this.url = url;
    if (typeof transportTypeOrOptions === "object") {
      this.httpConnectionOptions = __spreadValues(__spreadValues({}, this.httpConnectionOptions), transportTypeOrOptions);
    } else {
      this.httpConnectionOptions = __spreadProps(__spreadValues({}, this.httpConnectionOptions), {
        transport: transportTypeOrOptions
      });
    }
    return this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(protocol) {
    Arg.isRequired(protocol, "protocol");
    this.protocol = protocol;
    return this;
  }
  withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
    if (this.reconnectPolicy) {
      throw new Error("A reconnectPolicy has already been set.");
    }
    if (!retryDelaysOrReconnectPolicy) {
      this.reconnectPolicy = new DefaultReconnectPolicy();
    } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
      this.reconnectPolicy = new DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
    } else {
      this.reconnectPolicy = retryDelaysOrReconnectPolicy;
    }
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(milliseconds) {
    Arg.isRequired(milliseconds, "milliseconds");
    this._serverTimeoutInMilliseconds = milliseconds;
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(milliseconds) {
    Arg.isRequired(milliseconds, "milliseconds");
    this._keepAliveIntervalInMilliseconds = milliseconds;
    return this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(options) {
    if (this.httpConnectionOptions === void 0) {
      this.httpConnectionOptions = {};
    }
    this.httpConnectionOptions._useStatefulReconnect = true;
    this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
    return this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const httpConnectionOptions = this.httpConnectionOptions || {};
    if (httpConnectionOptions.logger === void 0) {
      httpConnectionOptions.logger = this.logger;
    }
    if (!this.url) {
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    }
    const connection = new HttpConnection(this.url, httpConnectionOptions);
    return HubConnection.create(connection, this.logger || NullLogger.instance, this.protocol || new JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
};
function isLogger(logger) {
  return logger.log !== void 0;
}

// src/services/chat.service.ts
var _ChatService = class _ChatService {
  get hubUrl() {
    return environment.baseUrl.replace(/\/api\/?$/, "") + "/chatHub";
  }
  constructor() {
    this.authService = inject(AuthService);
    this.tokenService = inject(TokenService);
    this.hubConnection = null;
    this._messages$ = new Subject();
    this._connectionState$ = new BehaviorSubject("disconnected");
    this._previousMessages$ = new Subject();
    this._employees$ = new Subject();
    this._userOnline$ = new Subject();
    this._userOffline$ = new Subject();
    this._authConfirmed$ = new Subject();
    this.messages$ = this._messages$.asObservable();
    this.connectionState$ = this._connectionState$.asObservable();
    this.previousMessages$ = this._previousMessages$.asObservable();
    this.employees$ = this._employees$.asObservable();
    this.userOnline$ = this._userOnline$.asObservable();
    this.userOffline$ = this._userOffline$.asObservable();
    this.authConfirmed$ = this._authConfirmed$.asObservable();
    this.authSub = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      if (loggedIn) {
        const token = this.authService.getToken();
        if (token)
          this.connect(token);
      } else {
        this.disconnect();
      }
    });
  }
  connect(token) {
    if (this.hubConnection?.state === HubConnectionState.Connected || this.hubConnection?.state === HubConnectionState.Connecting) {
      return;
    }
    this._connectionState$.next("connecting");
    this.hubConnection = new HubConnectionBuilder().withUrl(this.hubUrl, {
      accessTokenFactory: () => token,
      transport: HttpTransportType.WebSockets | HttpTransportType.LongPolling
    }).withAutomaticReconnect([0, 2e3, 5e3, 1e4, 3e4]).configureLogging(LogLevel.Warning).build();
    this.registerHandlers();
    this.hubConnection.onreconnecting(() => this._connectionState$.next("connecting"));
    this.hubConnection.onreconnected(() => {
      this._connectionState$.next("connected");
      this.invokeAuthMe();
    });
    this.hubConnection.onclose(() => this._connectionState$.next("disconnected"));
    this.hubConnection.start().then(() => {
      this._connectionState$.next("connected");
      this.invokeAuthMe();
    }).catch(() => this._connectionState$.next("error"));
  }
  registerHandlers() {
    if (!this.hubConnection)
      return;
    this.hubConnection.on("ReceiveMessage", (senderId, message, timestamp) => {
      const myId = this.tokenService.getUserId() ?? localStorage.getItem("userId") ?? "";
      this._messages$.next({ senderId, message, timestamp, isMine: senderId === myId });
    });
    this.hubConnection.on("authmeresponsesuccess", () => {
      this._authConfirmed$.next();
    });
    this.hubConnection.on("PreviousMessages", (messages) => {
      this._previousMessages$.next(messages ?? []);
    });
    this.hubConnection.on("getEmployeesResponse", (employees) => {
      this._employees$.next(employees ?? []);
    });
    this.hubConnection.on("userOn", (userId) => {
      this._userOnline$.next(userId);
    });
    this.hubConnection.on("userOff", (userId) => {
      this._userOffline$.next(userId);
    });
    this.hubConnection.on("logoutResponse", () => {
      this.hubConnection?.stop().catch(() => {
      });
      this.hubConnection = null;
      this._connectionState$.next("disconnected");
    });
  }
  invokeAuthMe() {
    const rawId = this.tokenService.getUserId() ?? localStorage.getItem("userId");
    if (!rawId)
      return;
    const asInt = parseInt(String(rawId), 10);
    const userId = !isNaN(asInt) && asInt > 0 ? asInt : String(rawId);
    this.hubConnection?.invoke("authMe", userId).catch(() => {
    });
  }
  ngOnDestroy() {
    this.disconnect();
    this.authSub?.unsubscribe();
  }
  /** Reject when the hub isn't connected so callers can surface the failure
   *  instead of silently believing a message/operation succeeded. */
  requireConnected() {
    if (!this.hubConnection || this.hubConnection.state !== HubConnectionState.Connected) {
      return Promise.reject(new Error("Hub not connected"));
    }
    return null;
  }
  getPreviousMessages(receiverId) {
    return this.requireConnected() ?? this.hubConnection.invoke("GetPreviousMessages", receiverId);
  }
  sendMessage(receiverId, message) {
    return this.requireConnected() ?? this.hubConnection.invoke("SendMessage", receiverId, message);
  }
  getCompanyEmployees() {
    return this.requireConnected() ?? this.hubConnection.invoke("GetAllCompanyEmployees");
  }
  markAsSeen(senderId) {
    return this.requireConnected() ?? this.hubConnection.invoke("MarkAsSeen", senderId);
  }
  disconnect() {
    if (this.hubConnection) {
      this.hubConnection.stop().catch(() => {
      });
      this.hubConnection = null;
    }
    this._connectionState$.next("disconnected");
  }
  logOut() {
    this.hubConnection?.invoke("LogOut").catch(() => {
    });
  }
  isConnected() {
    return this.hubConnection?.state === HubConnectionState.Connected;
  }
};
_ChatService.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatService)();
};
_ChatService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
var ChatService = _ChatService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/features/dashboard/chat/chat-widget.ts
var _c02 = ["messageList"];
var _forTrack02 = ($index, $item) => $item.timestamp + $item.senderId;
function ChatWidgetComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "chat.unreadMessages"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.unreadCount());
  }
}
function ChatWidgetComponent_Conditional_7_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "chat.empty"));
  }
}
function ChatWidgetComponent_Conditional_7_For_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r3.senderId);
  }
}
function ChatWidgetComponent_Conditional_7_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, ChatWidgetComponent_Conditional_7_For_28_Conditional_2_Template, 2, 1, "span", 24);
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "time", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mine", msg_r3.isMine);
    \u0275\u0275advance();
    \u0275\u0275classProp("mine", msg_r3.isMine);
    \u0275\u0275advance();
    \u0275\u0275conditional(!msg_r3.isMine ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r3.message);
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", msg_r3.timestamp);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(msg_r3.timestamp), " ");
  }
}
function ChatWidgetComponent_Conditional_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.sendError()), " ");
  }
}
function ChatWidgetComponent_Conditional_7_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function ChatWidgetComponent_Conditional_7_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "header", 5)(3, "div", 6)(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "mat-icon", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function ChatWidgetComponent_Conditional_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePanel());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 13);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ChatWidgetComponent_Conditional_7_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.recipientId, $event) || (ctx_r0.recipientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ChatWidgetComponent_Conditional_7_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadHistory());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14, 0);
    \u0275\u0275conditionalCreate(26, ChatWidgetComponent_Conditional_7_Conditional_26_Template, 3, 3, "p", 15);
    \u0275\u0275repeaterCreate(27, ChatWidgetComponent_Conditional_7_For_28_Template, 7, 8, "div", 16, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ChatWidgetComponent_Conditional_7_Conditional_29_Template, 3, 3, "p", 17);
    \u0275\u0275elementStart(30, "div", 18)(31, "textarea", 19);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ChatWidgetComponent_Conditional_7_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.messageText, $event) || (ctx_r0.messageText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function ChatWidgetComponent_Conditional_7_Template_textarea_keydown_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 20);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275listener("click", function ChatWidgetComponent_Conditional_7_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.send());
    });
    \u0275\u0275conditionalCreate(36, ChatWidgetComponent_Conditional_7_Conditional_36_Template, 1, 0, "mat-spinner", 21)(37, ChatWidgetComponent_Conditional_7_Conditional_37_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 20, "chat.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "chat.title"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-state", ctx_r0.connectionState())("aria-label", \u0275\u0275pipeBind1(8, 24, "chat.status." + ctx_r0.connectionState()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.statusIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 26, "chat.status." + ctx_r0.connectionState()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 28, "chat.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 30, "chat.to"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.recipientId);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 32, "chat.recipientPlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 34, "chat.to"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.messages().length === 0 ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.sendError() ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.messageText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 36, "chat.messagePlaceholder"))("disabled", !ctx_r0.isConnected() || ctx_r0.sending());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(33, 38, "chat.messagePlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.isConnected() || ctx_r0.sending() || !ctx_r0.messageText.trim() || !ctx_r0.recipientId.trim());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 40, "chat.send"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.sending() ? 36 : 37);
  }
}
var _ChatWidgetComponent = class _ChatWidgetComponent {
  constructor() {
    this.chatService = inject(ChatService);
    this.isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
    this.messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
    this.connectionState = signal("disconnected", ...ngDevMode ? [{ debugName: "connectionState" }] : []);
    this.unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : []);
    this.sending = signal(false, ...ngDevMode ? [{ debugName: "sending" }] : []);
    this.sendError = signal(null, ...ngDevMode ? [{ debugName: "sendError" }] : []);
    this.recipientId = "";
    this.messageText = "";
    this.subs = [];
    this.shouldScrollToBottom = false;
    this.isConnected = computed(() => this.connectionState() === "connected", ...ngDevMode ? [{ debugName: "isConnected" }] : []);
    this.statusIcon = computed(() => {
      switch (this.connectionState()) {
        case "connected":
          return "wifi";
        case "connecting":
          return "wifi_find";
        case "error":
          return "wifi_off";
        default:
          return "wifi_off";
      }
    }, ...ngDevMode ? [{ debugName: "statusIcon" }] : []);
  }
  // ── Lifecycle ──────────────────────────────────────────────────────
  ngOnInit() {
    this.subs.push(
      this.chatService.connectionState$.subscribe((s) => this.connectionState.set(s)),
      this.chatService.messages$.subscribe((msg) => {
        this.messages.update((list) => [...list, msg]);
        if (!this.isOpen()) {
          this.unreadCount.update((n) => n + 1);
        }
        this.shouldScrollToBottom = true;
      }),
      // Replace the visible thread whenever the hub returns history for the active recipient.
      this.chatService.previousMessages$.subscribe((history) => {
        this.messages.set(history ?? []);
        this.shouldScrollToBottom = true;
      })
    );
  }
  /** Fetch conversation history for the currently typed recipient. */
  loadHistory() {
    const id = this.recipientId.trim();
    if (!id || !this.isConnected())
      return;
    this.chatService.getPreviousMessages(id).catch(() => {
    });
  }
  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
  // ── Actions ────────────────────────────────────────────────────────
  togglePanel() {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.unreadCount.set(0);
      this.shouldScrollToBottom = true;
    }
  }
  send() {
    return __async(this, null, function* () {
      const text = this.messageText.trim();
      const recipient = this.recipientId.trim();
      if (!text || !recipient || !this.isConnected() || this.sending())
        return;
      this.sending.set(true);
      this.sendError.set(null);
      try {
        yield this.chatService.sendMessage(recipient, text);
        const now = (/* @__PURE__ */ new Date()).toISOString();
        this.messages.update((list) => [
          ...list,
          { senderId: localStorage.getItem("userId") ?? "me", message: text, timestamp: now, isMine: true }
        ]);
        this.messageText = "";
        this.shouldScrollToBottom = true;
      } catch {
        this.sendError.set("chat.sendError");
      } finally {
        this.sending.set(false);
      }
    });
  }
  onKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
  formatTime(isoString) {
    try {
      return new Date(isoString).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  }
  scrollToBottom() {
    const el = this.messageListRef?.nativeElement;
    if (el)
      el.scrollTop = el.scrollHeight;
  }
};
_ChatWidgetComponent.\u0275fac = function ChatWidgetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatWidgetComponent)();
};
_ChatWidgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatWidgetComponent, selectors: [["app-chat-widget"]], viewQuery: function ChatWidgetComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageListRef = _t.first);
  }
}, decls: 8, vars: 12, consts: [["messageList", ""], [1, "chat-root"], ["mat-fab", "", "aria-haspopup", "dialog", 1, "chat-fab", 3, "click", "matTooltip"], [1, "chat-badge"], ["role", "dialog", "aria-modal", "false", 1, "chat-panel"], [1, "chat-header"], [1, "chat-header-title"], [1, "chat-title"], [1, "chat-status"], [1, "chat-status-icon"], ["mat-icon-button", "", 1, "chat-close-btn", 3, "click"], [1, "chat-recipient-row"], ["for", "chat-recipient", 1, "chat-label"], ["id", "chat-recipient", "type", "text", "autocomplete", "off", 1, "chat-input", 3, "ngModelChange", "change", "ngModel", "placeholder"], ["role", "log", "aria-live", "polite", "aria-relevant", "additions", 1, "chat-messages"], [1, "chat-empty"], [1, "chat-bubble-wrapper", 3, "mine"], ["role", "alert", 1, "chat-send-error"], [1, "chat-input-row"], ["rows", "2", 1, "chat-textarea", 3, "ngModelChange", "keydown", "ngModel", "placeholder", "disabled"], ["mat-icon-button", "", 1, "chat-send-btn", 3, "click", "disabled"], ["diameter", "20"], [1, "chat-bubble-wrapper"], [1, "chat-bubble"], [1, "chat-sender"], [1, "chat-text"], [1, "chat-time"]], template: function ChatWidgetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function ChatWidgetComponent_Template_button_click_1_listener() {
      return ctx.togglePanel();
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ChatWidgetComponent_Conditional_6_Template, 3, 4, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ChatWidgetComponent_Conditional_7_Template, 38, 42, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("chat-open", ctx.isOpen());
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 8, "chat.toggleBtn"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 10, "chat.toggleBtn"))("aria-expanded", ctx.isOpen());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.isOpen() ? "close" : "chat");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.unreadCount() > 0 && !ctx.isOpen() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isOpen() ? 7 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatIconButton,
  MatFabButton,
  MatTooltipModule,
  MatTooltip,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  TranslocoPipe
], styles: ["\n\n.chat-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block-end: 1.5rem;\n  inset-inline-end: 1.5rem;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.75rem;\n}\n.chat-fab[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-full);\n  background-color: var(--brand-primary-500);\n  color: var(--brand-grays-500);\n  border: none;\n  cursor: pointer;\n  box-shadow: var(--elevation-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  flex-shrink: 0;\n}\n.chat-fab[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-primary-600);\n  transform: scale(1.05);\n}\n.chat-fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.chat-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: -4px;\n  inset-inline-end: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 4px;\n  border-radius: var(--radius-full);\n  background-color: var(--functional-danger-500);\n  color: var(--brand-grays-500);\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.chat-panel[_ngcontent-%COMP%] {\n  width: 340px;\n  max-height: 520px;\n  background-color: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-16);\n  box-shadow: var(--elevation-dark-light);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background-color: var(--brand-primary-500);\n  color: var(--brand-grays-500);\n  flex-shrink: 0;\n}\n.chat-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.chat-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.7rem;\n  opacity: 0.85;\n}\n.chat-status-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n  width: 0.85rem !important;\n  height: 0.85rem !important;\n}\n.chat-status[data-state=connected][_ngcontent-%COMP%] {\n  color: var(--functional-success-300);\n}\n.chat-status[data-state=connecting][_ngcontent-%COMP%] {\n  color: var(--functional-warning-300);\n}\n.chat-status[data-state=error][_ngcontent-%COMP%], \n.chat-status[data-state=disconnected][_ngcontent-%COMP%] {\n  color: var(--functional-danger-300);\n}\n.chat-close-btn[_ngcontent-%COMP%] {\n  color: var(--brand-grays-500) !important;\n  opacity: 0.8;\n}\n.chat-close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.chat-recipient-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-block-end: 1px solid var(--ui-border);\n  background-color: var(--ui-bg);\n  flex-shrink: 0;\n}\n.chat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--ui-input-bg);\n  border: 1px solid var(--ui-border-secondary);\n  border-radius: var(--radius-6);\n  color: var(--ui-text-main);\n  font-size: 0.8rem;\n  padding: 0.3rem 0.5rem;\n  outline: none;\n  min-width: 0;\n}\n.chat-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  background-color: var(--ui-bg);\n}\n.chat-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 0.85rem;\n  margin: auto;\n  padding: 2rem 1rem;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.chat-bubble-wrapper.mine[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.chat-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  background-color: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  border-end-start-radius: var(--radius-4);\n  padding: 0.4rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-bubble.mine[_ngcontent-%COMP%] {\n  background-color: var(--brand-primary-600);\n  border-color: var(--brand-primary-700);\n  border-end-start-radius: var(--radius-12);\n  border-end-end-radius: var(--radius-4);\n}\n.chat-sender[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--brand-secondary-400);\n  display: block;\n}\n.chat-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--ui-text-main);\n  word-break: break-word;\n  line-height: 1.4;\n}\n.chat-bubble.mine[_ngcontent-%COMP%]   .chat-text[_ngcontent-%COMP%] {\n  color: var(--brand-grays-500);\n}\n.chat-time[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--ui-text-muted);\n  align-self: flex-end;\n  margin-block-start: 2px;\n}\n.chat-bubble.mine[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n  color: var(--brand-primary-200);\n}\n.chat-send-error[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.3rem 0.75rem;\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  font-size: 0.75rem;\n  text-align: center;\n  flex-shrink: 0;\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-block-start: 1px solid var(--ui-border);\n  background-color: var(--ui-surface);\n  flex-shrink: 0;\n}\n.chat-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--ui-input-bg);\n  border: 1px solid var(--ui-border-secondary);\n  border-radius: var(--radius-8);\n  color: var(--ui-text-main);\n  font-size: 0.85rem;\n  padding: 0.4rem 0.6rem;\n  resize: none;\n  outline: none;\n  font-family: inherit;\n  line-height: 1.4;\n}\n.chat-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.chat-textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-send-btn[_ngcontent-%COMP%] {\n  color: var(--brand-primary-400) !important;\n  flex-shrink: 0;\n}\n.chat-send-btn[_ngcontent-%COMP%]:disabled {\n  color: var(--ui-text-muted) !important;\n}\n@media (max-width: 480px) {\n  .chat-panel[_ngcontent-%COMP%] {\n    width: calc(100vw - 3rem);\n    max-height: 70vh;\n  }\n  .chat-root[_ngcontent-%COMP%] {\n    inset-inline-end: 1rem;\n    inset-block-end: 1rem;\n  }\n}\n/*# sourceMappingURL=chat-widget.css.map */"] });
var ChatWidgetComponent = _ChatWidgetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-chat-widget", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="chat-root" [class.chat-open]="isOpen()">

  <!-- \u2500\u2500 FAB button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <button
    class="chat-fab"
    mat-fab
    [attr.aria-label]="'chat.toggleBtn' | transloco"
    [matTooltip]="'chat.toggleBtn' | transloco"
    (click)="togglePanel()"
    aria-haspopup="dialog"
    [attr.aria-expanded]="isOpen()"
  >
    <mat-icon>{{ isOpen() ? 'close' : 'chat' }}</mat-icon>
    @if (unreadCount() > 0 && !isOpen()) {
      <span class="chat-badge" [attr.aria-label]="'chat.unreadMessages' | transloco">{{ unreadCount() }}</span>
    }
  </button>

  <!-- \u2500\u2500 Chat panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (isOpen()) {
    <div
      class="chat-panel"
      role="dialog"
      aria-modal="false"
      [attr.aria-label]="'chat.title' | transloco"
    >

      <!-- Header -->
      <header class="chat-header">
        <div class="chat-header-title">
          <span class="chat-title">{{ 'chat.title' | transloco }}</span>
          <span
            class="chat-status"
            [attr.data-state]="connectionState()"
            [attr.aria-label]="'chat.status.' + connectionState() | transloco"
          >
            <mat-icon class="chat-status-icon">{{ statusIcon() }}</mat-icon>
            {{ 'chat.status.' + connectionState() | transloco }}
          </span>
        </div>
        <button
          mat-icon-button
          class="chat-close-btn"
          [attr.aria-label]="'chat.close' | transloco"
          (click)="togglePanel()"
        >
          <mat-icon>close</mat-icon>
        </button>
      </header>

      <!-- Recipient input -->
      <div class="chat-recipient-row">
        <label class="chat-label" for="chat-recipient">
          {{ 'chat.to' | transloco }}
        </label>
        <input
          id="chat-recipient"
          class="chat-input"
          type="text"
          [(ngModel)]="recipientId"
          [placeholder]="'chat.recipientPlaceholder' | transloco"
          [attr.aria-label]="'chat.to' | transloco"
          autocomplete="off"
          (change)="loadHistory()"
        />
      </div>

      <!-- Messages -->
      <div class="chat-messages" #messageList role="log" aria-live="polite" aria-relevant="additions">
        @if (messages().length === 0) {
          <p class="chat-empty">{{ 'chat.empty' | transloco }}</p>
        }
        @for (msg of messages(); track msg.timestamp + msg.senderId) {
          <div class="chat-bubble-wrapper" [class.mine]="msg.isMine">
            <div class="chat-bubble" [class.mine]="msg.isMine">
              @if (!msg.isMine) {
                <span class="chat-sender">{{ msg.senderId }}</span>
              }
              <p class="chat-text">{{ msg.message }}</p>
              <time class="chat-time" [attr.datetime]="msg.timestamp">
                {{ formatTime(msg.timestamp) }}
              </time>
            </div>
          </div>
        }
      </div>

      <!-- Send error -->
      @if (sendError()) {
        <p class="chat-send-error" role="alert">
          {{ sendError()! | transloco }}
        </p>
      }

      <!-- Input row -->
      <div class="chat-input-row">
        <textarea
          class="chat-textarea"
          [(ngModel)]="messageText"
          [placeholder]="'chat.messagePlaceholder' | transloco"
          [attr.aria-label]="'chat.messagePlaceholder' | transloco"
          rows="2"
          [disabled]="!isConnected() || sending()"
          (keydown)="onKeydown($event)"
        ></textarea>
        <button
          mat-icon-button
          class="chat-send-btn"
          [attr.aria-label]="'chat.send' | transloco"
          [disabled]="!isConnected() || sending() || !messageText.trim() || !recipientId.trim()"
          (click)="send()"
        >
          @if (sending()) {
            <mat-spinner diameter="20"></mat-spinner>
          } @else {
            <mat-icon>send</mat-icon>
          }
        </button>
      </div>

    </div>
  }

</div>
`, styles: ["/* src/features/dashboard/chat/chat-widget.css */\n.chat-root {\n  position: fixed;\n  inset-block-end: 1.5rem;\n  inset-inline-end: 1.5rem;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.75rem;\n}\n.chat-fab {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-full);\n  background-color: var(--brand-primary-500);\n  color: var(--brand-grays-500);\n  border: none;\n  cursor: pointer;\n  box-shadow: var(--elevation-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  flex-shrink: 0;\n}\n.chat-fab:hover {\n  background-color: var(--brand-primary-600);\n  transform: scale(1.05);\n}\n.chat-fab mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.chat-badge {\n  position: absolute;\n  inset-block-start: -4px;\n  inset-inline-end: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 4px;\n  border-radius: var(--radius-full);\n  background-color: var(--functional-danger-500);\n  color: var(--brand-grays-500);\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.chat-panel {\n  width: 340px;\n  max-height: 520px;\n  background-color: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-16);\n  box-shadow: var(--elevation-dark-light);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.chat-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background-color: var(--brand-primary-500);\n  color: var(--brand-grays-500);\n  flex-shrink: 0;\n}\n.chat-header-title {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-title {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.chat-status {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.7rem;\n  opacity: 0.85;\n}\n.chat-status-icon {\n  font-size: 0.85rem !important;\n  width: 0.85rem !important;\n  height: 0.85rem !important;\n}\n.chat-status[data-state=connected] {\n  color: var(--functional-success-300);\n}\n.chat-status[data-state=connecting] {\n  color: var(--functional-warning-300);\n}\n.chat-status[data-state=error],\n.chat-status[data-state=disconnected] {\n  color: var(--functional-danger-300);\n}\n.chat-close-btn {\n  color: var(--brand-grays-500) !important;\n  opacity: 0.8;\n}\n.chat-close-btn:hover {\n  opacity: 1;\n}\n.chat-recipient-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-block-end: 1px solid var(--ui-border);\n  background-color: var(--ui-bg);\n  flex-shrink: 0;\n}\n.chat-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  white-space: nowrap;\n}\n.chat-input {\n  flex: 1;\n  background: var(--ui-input-bg);\n  border: 1px solid var(--ui-border-secondary);\n  border-radius: var(--radius-6);\n  color: var(--ui-text-main);\n  font-size: 0.8rem;\n  padding: 0.3rem 0.5rem;\n  outline: none;\n  min-width: 0;\n}\n.chat-input:focus {\n  border-color: var(--brand-primary-400);\n}\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  background-color: var(--ui-bg);\n}\n.chat-empty {\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: 0.85rem;\n  margin: auto;\n  padding: 2rem 1rem;\n}\n.chat-bubble-wrapper {\n  display: flex;\n  justify-content: flex-start;\n}\n.chat-bubble-wrapper.mine {\n  justify-content: flex-end;\n}\n.chat-bubble {\n  max-width: 75%;\n  background-color: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  border-end-start-radius: var(--radius-4);\n  padding: 0.4rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.chat-bubble.mine {\n  background-color: var(--brand-primary-600);\n  border-color: var(--brand-primary-700);\n  border-end-start-radius: var(--radius-12);\n  border-end-end-radius: var(--radius-4);\n}\n.chat-sender {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--brand-secondary-400);\n  display: block;\n}\n.chat-text {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--ui-text-main);\n  word-break: break-word;\n  line-height: 1.4;\n}\n.chat-bubble.mine .chat-text {\n  color: var(--brand-grays-500);\n}\n.chat-time {\n  font-size: 0.65rem;\n  color: var(--ui-text-muted);\n  align-self: flex-end;\n  margin-block-start: 2px;\n}\n.chat-bubble.mine .chat-time {\n  color: var(--brand-primary-200);\n}\n.chat-send-error {\n  margin: 0;\n  padding: 0.3rem 0.75rem;\n  background-color: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  font-size: 0.75rem;\n  text-align: center;\n  flex-shrink: 0;\n}\n.chat-input-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-block-start: 1px solid var(--ui-border);\n  background-color: var(--ui-surface);\n  flex-shrink: 0;\n}\n.chat-textarea {\n  flex: 1;\n  background: var(--ui-input-bg);\n  border: 1px solid var(--ui-border-secondary);\n  border-radius: var(--radius-8);\n  color: var(--ui-text-main);\n  font-size: 0.85rem;\n  padding: 0.4rem 0.6rem;\n  resize: none;\n  outline: none;\n  font-family: inherit;\n  line-height: 1.4;\n}\n.chat-textarea:focus {\n  border-color: var(--brand-primary-400);\n}\n.chat-textarea:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-send-btn {\n  color: var(--brand-primary-400) !important;\n  flex-shrink: 0;\n}\n.chat-send-btn:disabled {\n  color: var(--ui-text-muted) !important;\n}\n@media (max-width: 480px) {\n  .chat-panel {\n    width: calc(100vw - 3rem);\n    max-height: 70vh;\n  }\n  .chat-root {\n    inset-inline-end: 1rem;\n    inset-block-end: 1rem;\n  }\n}\n/*# sourceMappingURL=chat-widget.css.map */\n"] }]
  }], null, { messageListRef: [{
    type: ViewChild,
    args: ["messageList"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatWidgetComponent, { className: "ChatWidgetComponent", filePath: "src/features/dashboard/chat/chat-widget.ts", lineNumber: 30 });
})();

// src/components/DashboardLayout/authenticated-layout/authenticated-layout.ts
var _AuthenticatedLayoutComponent = class _AuthenticatedLayoutComponent {
  constructor() {
    this.sessionService = inject(SessionService);
    this.sidebarService = inject(SidebarService);
    this.isSidebarOpen = true;
  }
  ngOnInit() {
    this.sessionService.startMonitoring();
  }
  ngOnDestroy() {
    this.sessionService.stopMonitoring();
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  onToggleSidebar(isOpen) {
    this.isSidebarOpen = isOpen;
  }
};
_AuthenticatedLayoutComponent.\u0275fac = function AuthenticatedLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticatedLayoutComponent)();
};
_AuthenticatedLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticatedLayoutComponent, selectors: [["app-authenticated-layout"]], decls: 7, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", 2, "background", "var(--ui-bg)", "color", "var(--ui-text-main)"], [1, "layout-container", 2, "display", "flex", "min-height", "calc(100vh - 70px)"], ["id", "main-content", 1, "main-content", 2, "overflow", "auto"]], template: function AuthenticatedLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-authenticated-header");
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "app-sidebar");
    \u0275\u0275elementStart(4, "main", 2);
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-chat-widget");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sidebar-collapsed", !ctx.sidebarService.isOpen());
  }
}, dependencies: [
  SidebarComponent,
  CommonModule,
  RouterModule,
  RouterOutlet,
  MatSidenavModule,
  MatDialogModule,
  MatSnackBarModule,
  AuthenticatedHeaderComponent,
  ChatWidgetComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.layout-container[_ngcontent-%COMP%] {\n  position: relative;\n}\nmain[_ngcontent-%COMP%] {\n  background: var(--ui-bg);\n}\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--ui-bg);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-inline-start: 277px;\n  transition: margin-inline-start 0.3s ease;\n  min-height: 100vh;\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: 100px;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  background: var(--ui-bg);\n}\n@media (max-width: 768px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=authenticated-layout.css.map */"] });
var AuthenticatedLayoutComponent = _AuthenticatedLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-authenticated-layout", standalone: true, imports: [
      SidebarComponent,
      CommonModule,
      RouterModule,
      RouterOutlet,
      MatSidenavModule,
      MatDialogModule,
      MatSnackBarModule,
      AuthenticatedHeaderComponent,
      ChatWidgetComponent
    ], template: ' <div class="min-h-screen flex flex-col" style="background: var(--ui-bg); color: var(--ui-text-main);">\n      <!-- Navbar / Header -->\n      <app-authenticated-header></app-authenticated-header>\n\n      <!-- Layout with sidebar and content -->\n      <div class="layout-container" style="display:flex; min-height:calc(100vh - 70px);">\n        <app-sidebar></app-sidebar>\n        <main\n          id="main-content"\n          class="main-content"\n          [class.sidebar-collapsed]="!sidebarService.isOpen()"\n          style="overflow:auto;"\n        >\n          <router-outlet></router-outlet>\n        </main>\n      </div>\n\n      <!-- Floating chat widget \u2014 fixed position, visible across all dashboard routes -->\n      <app-chat-widget></app-chat-widget>\n    </div>\n', styles: ["/* src/components/DashboardLayout/authenticated-layout/authenticated-layout.css */\n:host {\n  display: block;\n}\n.layout-container {\n  position: relative;\n}\nmain {\n  background: var(--ui-bg);\n}\n.app-container {\n  display: flex;\n  min-height: 100vh;\n  background: var(--ui-bg);\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-inline-start: 277px;\n  transition: margin-inline-start 0.3s ease;\n  min-height: 100vh;\n}\n.main-content.sidebar-collapsed {\n  margin-inline-start: 100px;\n}\n.content-area {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  background: var(--ui-bg);\n}\n@media (max-width: 768px) {\n  .main-content {\n    margin-inline-start: 0;\n  }\n  .main-content.sidebar-collapsed {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=authenticated-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticatedLayoutComponent, { className: "AuthenticatedLayoutComponent", filePath: "src/components/dashboardlayout/authenticated-layout/authenticated-layout.ts", lineNumber: 30 });
})();
export {
  AuthenticatedLayoutComponent
};
//# sourceMappingURL=chunk-46OPAB6F.js.map
