import {
  ThemeService
} from "./chunk-OFYZ7ONQ.js";
import {
  AuthService,
  AuthorizationService,
  FeatureKey,
  isAppFeature
} from "./chunk-FLGCKBXQ.js";
import {
  Chart,
  registerables
} from "./chunk-5RFBFEXW.js";
import "./chunk-5LLUWZOB.js";
import {
  UserRole
} from "./chunk-TXEUWJT3.js";
import {
  MatSnackBar
} from "./chunk-DWKHQJBX.js";
import "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  BlogComponent
} from "./chunk-TPWSD3WE.js";
import {
  ChoosingComponent
} from "./chunk-2IRVRXBE.js";
import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import {
  TranslocoService,
  provideTransloco
} from "./chunk-D5YQFVLR.js";
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-LSMZM5UZ.js";
import {
  DomRendererFactory2,
  bootstrapApplication
} from "./chunk-BHGUJP3X.js";
import {
  HttpClient,
  HttpErrorResponse,
  provideHttpClient,
  withInterceptors
} from "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  NgIf
} from "./chunk-Z3ORTAM2.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  RendererFactory2,
  RuntimeError,
  __spreadProps,
  __spreadValues,
  catchError,
  effect,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  of,
  performanceMarkFeature,
  retry,
  setClassMetadata,
  signal,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-MQLQGMUZ.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-GXVFFPQU.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.themeService = inject(ThemeService);
    this.title = "mtwork-platform";
    effect(() => {
      const lang = this.languageService.currentLang();
      const dir = this.languageService.direction();
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostVars: 1, hostBindings: function AppComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275attribute("dir", ctx.languageService.direction());
  }
}, decls: 3, vars: 0, consts: [["href", "#main-content", 1, "skip-link"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0);
    \u0275\u0275text(1, "\u062A\u062E\u0637\u064A \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "router-outlet");
  }
}, dependencies: [RouterOutlet, CommonModule], encapsulation: 2, changeDetection: 0 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [RouterOutlet, CommonModule], host: {
      "[attr.dir]": "languageService.direction()"
    }, template: '<a class="skip-link" href="#main-content">\u062A\u062E\u0637\u064A \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0626\u064A\u0633\u064A</a>\n\n<router-outlet></router-outlet>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 18 });
})();

// src/features/landingComponents/steps-component/steps-component.ts
var _forTrack0 = ($index, $item) => $item.titleKey;
function StepsComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElement(2, "span", 27);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const filter_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = ctx_r1.languageService.translations()) == null ? null : tmp_10_0.steps == null ? null : tmp_10_0.steps[filter_r1], " ");
  }
}
function StepsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span");
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275styleProp("--bar-height", bar_r3 + "%");
  }
}
function StepsComponent_For_52_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 29);
  }
}
function StepsComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(2, StepsComponent_For_52_Conditional_2_Template, 1, 0, "div", 29);
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_96_r5 = ctx.$index;
    const \u0275$count_96_r6 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_96_r5 === \u0275$count_96_r6 - 1) ? 2 : -1);
  }
}
function StepsComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 26)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const step_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r1.languageService.translations()) == null ? null : tmp_10_0.steps == null ? null : tmp_10_0.steps[step_r7.titleKey]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r1.languageService.translations()) == null ? null : tmp_11_0.steps == null ? null : tmp_11_0.steps[step_r7.descKey]);
  }
}
var _StepsComponent = class _StepsComponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.filterKeys = ["country", "workerType", "jobTitle"];
    this.payrollBars = [73, 62, 36, 62, 55, 36, 31];
    this.stepNumbers = [1, 2, 3];
    this.metricValue = "823K";
    this.metricGrowth = "+9.1%";
    this.stepItems = [
      { titleKey: "step1Title", descKey: "step1Desc" },
      { titleKey: "step2Title", descKey: "step2Desc" },
      { titleKey: "step3Title", descKey: "step3Desc" }
    ];
  }
};
_StepsComponent.\u0275fac = function StepsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepsComponent)();
};
_StepsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsComponent, selectors: [["app-steps-component"]], decls: 56, vars: 9, consts: [[1, "steps"], [1, "steps__container"], ["aria-hidden", "true", 1, "steps__visual"], [1, "steps__people-card"], [1, "steps__filters"], ["type", "button", "tabindex", "-1", 1, "steps__filter"], ["type", "button", "tabindex", "-1", 1, "steps__filter-action"], [1, "steps__divider"], [1, "steps__avatars"], ["src", "assets/images/steps/avatars-row.png", "alt", ""], [1, "steps__profit-card"], [1, "steps__mini-heading"], [1, "steps__line-chart"], ["viewBox", "0 0 107 80", "preserveAspectRatio", "none", "aria-hidden", "true"], ["d", "M10 56 L22.05 66.74 L43.21 33.88 L69.5 61.22 L97 5"], [1, "steps__dot", "steps__dot--one"], [1, "steps__dot", "steps__dot--two"], [1, "steps__dot", "steps__dot--three"], [1, "steps__dot", "steps__dot--end"], [1, "steps__metric"], [1, "steps__payroll-card"], [1, "steps__bar-chart"], [3, "--bar-height"], [1, "steps__content"], ["aria-hidden", "true", 1, "steps__timeline"], [1, "steps__copy"], [1, "steps__item"], [1, "steps__chevron"], [1, "steps__number"], [1, "steps__line"]], template: function StepsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275repeaterCreate(5, StepsComponent_For_6_Template, 3, 1, "button", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElement(7, "button", 6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(8, "div", 7);
    \u0275\u0275domElementStart(9, "div", 8);
    \u0275\u0275domElement(10, "img", 9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 10)(12, "div", 11)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 12);
    \u0275\u0275domElement(18, "span")(19, "span")(20, "span")(21, "span")(22, "span")(23, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(24, "svg", 13);
    \u0275\u0275domElement(25, "path", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElement(26, "i", 15)(27, "i", 16)(28, "i", 17)(29, "i", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 19)(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(35, "div", 20)(36, "div", 11)(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "div", 21);
    \u0275\u0275repeaterCreate(42, StepsComponent_For_43_Template, 1, 2, "span", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "div", 19)(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(49, "div", 23)(50, "div", 24);
    \u0275\u0275repeaterCreate(51, StepsComponent_For_52_Template, 3, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "div", 25);
    \u0275\u0275repeaterCreate(54, StepsComponent_For_55_Template, 5, 2, "article", 26, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275attribute("aria-label", (tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.steps == null ? null : tmp_0_0.steps.sectionLabel);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.filterKeys);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx.languageService.translations()) == null ? null : tmp_2_0.steps == null ? null : tmp_2_0.steps.profit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx.languageService.translations()) == null ? null : tmp_3_0.steps == null ? null : tmp_3_0.steps.lastMonth);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx.metricValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.metricGrowth);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx.languageService.translations()) == null ? null : tmp_6_0.steps == null ? null : tmp_6_0.steps.payroll);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx.languageService.translations()) == null ? null : tmp_7_0.steps == null ? null : tmp_7_0.steps.lastMonth);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.payrollBars);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.metricValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.metricGrowth);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.stepNumbers);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.stepItems);
  }
}, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--brand-grays-500);\n}\n.steps[_ngcontent-%COMP%] {\n  inline-size: min(100%, 1435px);\n  margin-inline: auto;\n  padding-block: 32px;\n  padding-inline: 40px;\n  box-sizing: border-box;\n  font-family: var(--font-family-dm-sans);\n}\n.steps__container[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.steps__visual[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: 668.609px;\n  block-size: 487.774px;\n}\n.steps__people-card[_ngcontent-%COMP%], \n.steps__profit-card[_ngcontent-%COMP%], \n.steps__payroll-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: var(--landing-impact-bg);\n  border-radius: var(--radius-12);\n  box-shadow: 0 8px 28px 0 rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n}\n.steps__people-card[_ngcontent-%COMP%] {\n  inset-block-start: 128.774px;\n  inset-inline-start: 85.17px;\n  inline-size: 495px;\n  block-size: 223px;\n  padding: 16px;\n}\n.steps__filters[_ngcontent-%COMP%] {\n  inline-size: 463px;\n  block-size: 35.278px;\n  display: flex;\n  align-items: center;\n  gap: 13.229px;\n}\n.steps__filter[_ngcontent-%COMP%] {\n  block-size: 35.278px;\n  border: 0.551px solid var(--landing-impact-tab-border);\n  border-radius: 8.819px;\n  background: var(--landing-impact-bg);\n  color: var(--brand-neutral-400);\n  font-size: 13.229px;\n  line-height: 1.5;\n  padding-inline: 8.819px 26px;\n  position: relative;\n  white-space: nowrap;\n}\n.steps__filter[_ngcontent-%COMP%]:nth-child(1), \n.steps__filter[_ngcontent-%COMP%]:nth-child(3) {\n  inline-size: 88.486px;\n}\n.steps__filter[_ngcontent-%COMP%]:nth-child(2) {\n  inline-size: 113.486px;\n}\n.steps__chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 8.819px;\n  inset-block-start: 50%;\n  inline-size: 7px;\n  block-size: 7px;\n  border-inline-end: 1.5px solid var(--brand-neutral-400);\n  border-block-end: 1.5px solid var(--brand-neutral-400);\n  transform: translateY(-65%) rotate(45deg);\n}\n.steps__filter-action[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  inline-size: 30px;\n  block-size: 32px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-steps-filter-add);\n  position: relative;\n}\n.steps__filter-action[_ngcontent-%COMP%]::before, \n.steps__filter-action[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  background: var(--landing-impact-bg);\n  transform: translate(-50%, -50%);\n}\n.steps__filter-action[_ngcontent-%COMP%]::before {\n  inline-size: 11px;\n  block-size: 1.5px;\n}\n.steps__filter-action[_ngcontent-%COMP%]::after {\n  inline-size: 1.5px;\n  block-size: 11px;\n}\n.steps__divider[_ngcontent-%COMP%] {\n  inline-size: 463px;\n  block-size: 0.551px;\n  margin-block-start: 16px;\n  background: var(--landing-impact-tab-border);\n}\n.steps__avatars[_ngcontent-%COMP%] {\n  inline-size: 455px;\n  block-size: 98.755px;\n  margin-block-start: 16px;\n}\n.steps__avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: contain;\n}\n.steps__profit-card[_ngcontent-%COMP%] {\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 139px;\n  block-size: 196.052px;\n  padding: 16px;\n}\n.steps__payroll-card[_ngcontent-%COMP%] {\n  inset-block-start: 281.774px;\n  inset-inline-start: 496.609px;\n  inline-size: 172px;\n  block-size: 206px;\n  padding: 11.5px 16px;\n}\n.steps__mini-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.steps__mini-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-950);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.steps__mini-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n}\n.steps__line-chart[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 107px;\n  block-size: 79.903px;\n  margin-block-start: 12px;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block: 0;\n  inline-size: 0.551px;\n  background: var(--landing-impact-tab-border);\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(1) {\n  inset-inline-start: 0;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  inset-inline-start: 21.4px;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(3) {\n  inset-inline-start: 42.8px;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(4) {\n  inset-inline-start: 64.2px;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(5) {\n  inset-inline-start: 85.6px;\n}\n.steps__line-chart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(6) {\n  inset-inline-start: 107px;\n}\n.steps__line-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.steps__line-chart[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--brand-secondary-500);\n  stroke-width: 3;\n  stroke-linecap: round;\n}\n.steps__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  inline-size: 8.576px;\n  block-size: 8.576px;\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-500);\n}\n.steps__dot--one[_ngcontent-%COMP%] {\n  inset-inline-start: 22.055px;\n  inset-block-start: 66.742px;\n}\n.steps__dot--two[_ngcontent-%COMP%] {\n  inset-inline-start: 43.211px;\n  inset-block-start: 33.876px;\n}\n.steps__dot--three[_ngcontent-%COMP%] {\n  inset-inline-start: 69.5px;\n  inset-block-start: 61.224px;\n}\n.steps__dot--end[_ngcontent-%COMP%] {\n  inline-size: 10.236px;\n  block-size: 10.236px;\n  inset-inline-start: 92px;\n  inset-block-start: 0;\n  background: var(--landing-impact-bg);\n  border: 2px solid var(--brand-secondary-500);\n}\n.steps__bar-chart[_ngcontent-%COMP%] {\n  inline-size: 135px;\n  block-size: 89.898px;\n  margin-block-start: 0;\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.steps__bar-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1 0 0;\n  block-size: var(--bar-height);\n  border-radius: var(--radius-4) var(--radius-4) 0 0;\n  background: var(--landing-navbar-primary);\n}\n.steps__metric[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.steps__profit-card[_ngcontent-%COMP%]   .steps__metric[_ngcontent-%COMP%] {\n  margin-block-start: 12px;\n}\n.steps__payroll-card[_ngcontent-%COMP%]   .steps__metric[_ngcontent-%COMP%] {\n  margin-block-start: 24px;\n}\n.steps__metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-950);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.steps__metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--landing-steps-growth);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  line-height: 1.5;\n}\n.steps__content[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 25px;\n  align-items: flex-start;\n  padding-block: 12px;\n}\n.steps__timeline[_ngcontent-%COMP%] {\n  inline-size: 56px;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7px;\n}\n.steps__number[_ngcontent-%COMP%] {\n  inline-size: 56px;\n  block-size: 59px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-8);\n  background: var(--brand-secondary-100);\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--h4-size);\n  font-weight: var(--h4-font-weight-bold);\n  line-height: 1.3;\n}\n.steps__line[_ngcontent-%COMP%] {\n  flex: 1 0 0;\n  inline-size: 3px;\n  background: var(--brand-secondary-500);\n}\n.steps__copy[_ngcontent-%COMP%] {\n  inline-size: 523px;\n  display: flex;\n  flex-direction: column;\n  gap: 88px;\n}\n.steps__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.steps__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h5-font-family);\n  font-size: var(--h5-size);\n  font-weight: var(--h5-font-weight-bold, 700);\n  line-height: 1.4;\n}\n.steps__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n@media (max-width: 1100px) {\n  .steps[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    padding: 32px 24px;\n  }\n  .steps__container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 24px;\n  }\n}\n@media (max-width: 700px) {\n  .steps__visual[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    max-inline-size: 337px;\n    block-size: 246px;\n    margin-inline: auto;\n  }\n  .steps__people-card[_ngcontent-%COMP%] {\n    inset-block-start: 64.9px;\n    inset-inline-start: 42.92px;\n    inline-size: 249.46px;\n    block-size: 112.38px;\n    padding: 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__filters[_ngcontent-%COMP%] {\n    inline-size: 233.33px;\n    block-size: 17.778px;\n    gap: 6.664px;\n  }\n  .steps__filter[_ngcontent-%COMP%] {\n    block-size: 17.778px;\n    border-radius: 4.44px;\n    font-size: 6.66px;\n    line-height: 1.5;\n    padding-inline: 4.44px 13px;\n  }\n  .steps__filter[_ngcontent-%COMP%]:nth-child(1), \n   .steps__filter[_ngcontent-%COMP%]:nth-child(3) {\n    inline-size: 44.89px;\n  }\n  .steps__filter[_ngcontent-%COMP%]:nth-child(2) {\n    inline-size: 57.89px;\n  }\n  .steps__chevron[_ngcontent-%COMP%] {\n    inline-size: 3.5px;\n    block-size: 3.5px;\n    inset-inline-end: 4.44px;\n    border-width: 1px;\n  }\n  .steps__filter-action[_ngcontent-%COMP%] {\n    inline-size: 15.12px;\n    block-size: 16.13px;\n    border-radius: 4px;\n  }\n  .steps__filter-action[_ngcontent-%COMP%]::before {\n    inline-size: 6px;\n    block-size: 1px;\n  }\n  .steps__filter-action[_ngcontent-%COMP%]::after {\n    inline-size: 1px;\n    block-size: 6px;\n  }\n  .steps__divider[_ngcontent-%COMP%] {\n    inline-size: 233.33px;\n    margin-block-start: 8.063px;\n  }\n  .steps__avatars[_ngcontent-%COMP%] {\n    inline-size: 229.3px;\n    block-size: 49.768px;\n    margin-block-start: 8.063px;\n  }\n  .steps__profit-card[_ngcontent-%COMP%] {\n    inline-size: 70px;\n    block-size: 98px;\n    padding: 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__payroll-card[_ngcontent-%COMP%] {\n    inset-block-start: 142px;\n    inset-inline-start: 250.27px;\n    inline-size: 86.68px;\n    block-size: 103.81px;\n    padding: 5.84px 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__mini-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .steps__mini-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .steps__metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 6px;\n    line-height: 1.5;\n  }\n  .steps__line-chart[_ngcontent-%COMP%] {\n    inline-size: 53.92px;\n    block-size: 40.27px;\n    margin-block-start: 6px;\n  }\n  .steps__bar-chart[_ngcontent-%COMP%] {\n    inline-size: 70.55px;\n    block-size: 45.3px;\n    gap: 6px;\n  }\n  .steps__metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 8px;\n    line-height: 1.5;\n  }\n  .steps__content[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    gap: 25px;\n  }\n  .steps__copy[_ngcontent-%COMP%] {\n    inline-size: auto;\n    flex: 1 1 0;\n    gap: 88px;\n  }\n  .steps__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: var(--h5-size);\n    line-height: 1.4;\n  }\n  .steps__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: var(--body-size);\n    line-height: 1.5;\n  }\n}\n/*# sourceMappingURL=steps-component.css.map */'] });
var StepsComponent = _StepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsComponent, [{
    type: Component,
    args: [{ selector: "app-steps-component", imports: [CommonModule], standalone: true, template: `<section class="steps" [attr.aria-label]="languageService.translations()?.steps?.sectionLabel">
  <div class="steps__container">
    <div class="steps__visual" aria-hidden="true">
      <div class="steps__people-card">
        <div class="steps__filters">
          @for (filter of filterKeys; track filter) {
            <button class="steps__filter" type="button" tabindex="-1">
              {{ languageService.translations()?.steps?.[filter] }}
              <span class="steps__chevron"></span>
            </button>
          }
          <button class="steps__filter-action" type="button" tabindex="-1"></button>
        </div>

        <div class="steps__divider"></div>

        <div class="steps__avatars">
          <img src="assets/images/steps/avatars-row.png" alt="" />
        </div>
      </div>

      <div class="steps__profit-card">
        <div class="steps__mini-heading">
          <strong>{{ languageService.translations()?.steps?.profit }}</strong>
          <span>{{ languageService.translations()?.steps?.lastMonth }}</span>
        </div>
        <div class="steps__line-chart">
          <span></span><span></span><span></span><span></span><span></span><span></span>
          <svg viewBox="0 0 107 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M10 56 L22.05 66.74 L43.21 33.88 L69.5 61.22 L97 5" />
          </svg>
          <i class="steps__dot steps__dot--one"></i>
          <i class="steps__dot steps__dot--two"></i>
          <i class="steps__dot steps__dot--three"></i>
          <i class="steps__dot steps__dot--end"></i>
        </div>
        <div class="steps__metric">
          <strong>{{ metricValue }}</strong>
          <span>{{ metricGrowth }}</span>
        </div>
      </div>

      <div class="steps__payroll-card">
        <div class="steps__mini-heading">
          <strong>{{ languageService.translations()?.steps?.payroll }}</strong>
          <span>{{ languageService.translations()?.steps?.lastMonth }}</span>
        </div>
        <div class="steps__bar-chart">
          @for (bar of payrollBars; track $index) {
            <span [style.--bar-height]="bar + '%'"></span>
          }
        </div>
        <div class="steps__metric">
          <strong>{{ metricValue }}</strong>
          <span>{{ metricGrowth }}</span>
        </div>
      </div>
    </div>

    <div class="steps__content">
      <div class="steps__timeline" aria-hidden="true">
        @for (step of stepNumbers; track step) {
          <div class="steps__number">{{ step }}</div>
          @if (!$last) {
            <div class="steps__line"></div>
          }
        }
      </div>

      <div class="steps__copy">
        @for (step of stepItems; track step.titleKey) {
          <article class="steps__item">
            <h3>{{ languageService.translations()?.steps?.[step.titleKey] }}</h3>
            <p>{{ languageService.translations()?.steps?.[step.descKey] }}</p>
          </article>
        }
      </div>
    </div>
  </div>
</section>
`, styles: ['/* src/features/landingComponents/steps-component/steps-component.css */\n:host {\n  display: block;\n  background: var(--brand-grays-500);\n}\n.steps {\n  inline-size: min(100%, 1435px);\n  margin-inline: auto;\n  padding-block: 32px;\n  padding-inline: 40px;\n  box-sizing: border-box;\n  font-family: var(--font-family-dm-sans);\n}\n.steps__container {\n  inline-size: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.steps__visual {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: 668.609px;\n  block-size: 487.774px;\n}\n.steps__people-card,\n.steps__profit-card,\n.steps__payroll-card {\n  position: absolute;\n  background: var(--landing-impact-bg);\n  border-radius: var(--radius-12);\n  box-shadow: 0 8px 28px 0 rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n}\n.steps__people-card {\n  inset-block-start: 128.774px;\n  inset-inline-start: 85.17px;\n  inline-size: 495px;\n  block-size: 223px;\n  padding: 16px;\n}\n.steps__filters {\n  inline-size: 463px;\n  block-size: 35.278px;\n  display: flex;\n  align-items: center;\n  gap: 13.229px;\n}\n.steps__filter {\n  block-size: 35.278px;\n  border: 0.551px solid var(--landing-impact-tab-border);\n  border-radius: 8.819px;\n  background: var(--landing-impact-bg);\n  color: var(--brand-neutral-400);\n  font-size: 13.229px;\n  line-height: 1.5;\n  padding-inline: 8.819px 26px;\n  position: relative;\n  white-space: nowrap;\n}\n.steps__filter:nth-child(1),\n.steps__filter:nth-child(3) {\n  inline-size: 88.486px;\n}\n.steps__filter:nth-child(2) {\n  inline-size: 113.486px;\n}\n.steps__chevron {\n  position: absolute;\n  inset-inline-end: 8.819px;\n  inset-block-start: 50%;\n  inline-size: 7px;\n  block-size: 7px;\n  border-inline-end: 1.5px solid var(--brand-neutral-400);\n  border-block-end: 1.5px solid var(--brand-neutral-400);\n  transform: translateY(-65%) rotate(45deg);\n}\n.steps__filter-action {\n  margin-inline-start: auto;\n  inline-size: 30px;\n  block-size: 32px;\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-steps-filter-add);\n  position: relative;\n}\n.steps__filter-action::before,\n.steps__filter-action::after {\n  content: "";\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  background: var(--landing-impact-bg);\n  transform: translate(-50%, -50%);\n}\n.steps__filter-action::before {\n  inline-size: 11px;\n  block-size: 1.5px;\n}\n.steps__filter-action::after {\n  inline-size: 1.5px;\n  block-size: 11px;\n}\n.steps__divider {\n  inline-size: 463px;\n  block-size: 0.551px;\n  margin-block-start: 16px;\n  background: var(--landing-impact-tab-border);\n}\n.steps__avatars {\n  inline-size: 455px;\n  block-size: 98.755px;\n  margin-block-start: 16px;\n}\n.steps__avatars img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: contain;\n}\n.steps__profit-card {\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 139px;\n  block-size: 196.052px;\n  padding: 16px;\n}\n.steps__payroll-card {\n  inset-block-start: 281.774px;\n  inset-inline-start: 496.609px;\n  inline-size: 172px;\n  block-size: 206px;\n  padding: 11.5px 16px;\n}\n.steps__mini-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.steps__mini-heading strong {\n  color: var(--brand-neutral-950);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.steps__mini-heading span {\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n}\n.steps__line-chart {\n  position: relative;\n  inline-size: 107px;\n  block-size: 79.903px;\n  margin-block-start: 12px;\n}\n.steps__line-chart > span {\n  position: absolute;\n  inset-block: 0;\n  inline-size: 0.551px;\n  background: var(--landing-impact-tab-border);\n}\n.steps__line-chart > span:nth-child(1) {\n  inset-inline-start: 0;\n}\n.steps__line-chart > span:nth-child(2) {\n  inset-inline-start: 21.4px;\n}\n.steps__line-chart > span:nth-child(3) {\n  inset-inline-start: 42.8px;\n}\n.steps__line-chart > span:nth-child(4) {\n  inset-inline-start: 64.2px;\n}\n.steps__line-chart > span:nth-child(5) {\n  inset-inline-start: 85.6px;\n}\n.steps__line-chart > span:nth-child(6) {\n  inset-inline-start: 107px;\n}\n.steps__line-chart svg {\n  position: absolute;\n  inset: 0;\n}\n.steps__line-chart path {\n  fill: none;\n  stroke: var(--brand-secondary-500);\n  stroke-width: 3;\n  stroke-linecap: round;\n}\n.steps__dot {\n  position: absolute;\n  inline-size: 8.576px;\n  block-size: 8.576px;\n  border-radius: var(--radius-full);\n  background: var(--brand-secondary-500);\n}\n.steps__dot--one {\n  inset-inline-start: 22.055px;\n  inset-block-start: 66.742px;\n}\n.steps__dot--two {\n  inset-inline-start: 43.211px;\n  inset-block-start: 33.876px;\n}\n.steps__dot--three {\n  inset-inline-start: 69.5px;\n  inset-block-start: 61.224px;\n}\n.steps__dot--end {\n  inline-size: 10.236px;\n  block-size: 10.236px;\n  inset-inline-start: 92px;\n  inset-block-start: 0;\n  background: var(--landing-impact-bg);\n  border: 2px solid var(--brand-secondary-500);\n}\n.steps__bar-chart {\n  inline-size: 135px;\n  block-size: 89.898px;\n  margin-block-start: 0;\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.steps__bar-chart span {\n  display: block;\n  flex: 1 0 0;\n  block-size: var(--bar-height);\n  border-radius: var(--radius-4) var(--radius-4) 0 0;\n  background: var(--landing-navbar-primary);\n}\n.steps__metric {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.steps__profit-card .steps__metric {\n  margin-block-start: 12px;\n}\n.steps__payroll-card .steps__metric {\n  margin-block-start: 24px;\n}\n.steps__metric strong {\n  color: var(--brand-neutral-950);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.steps__metric span {\n  color: var(--landing-steps-growth);\n  font-size: var(--caption-size);\n  font-weight: 700;\n  line-height: 1.5;\n}\n.steps__content {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 25px;\n  align-items: flex-start;\n  padding-block: 12px;\n}\n.steps__timeline {\n  inline-size: 56px;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7px;\n}\n.steps__number {\n  inline-size: 56px;\n  block-size: 59px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-8);\n  background: var(--brand-secondary-100);\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--h4-size);\n  font-weight: var(--h4-font-weight-bold);\n  line-height: 1.3;\n}\n.steps__line {\n  flex: 1 0 0;\n  inline-size: 3px;\n  background: var(--brand-secondary-500);\n}\n.steps__copy {\n  inline-size: 523px;\n  display: flex;\n  flex-direction: column;\n  gap: 88px;\n}\n.steps__item {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.steps__item h3 {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h5-font-family);\n  font-size: var(--h5-size);\n  font-weight: var(--h5-font-weight-bold, 700);\n  line-height: 1.4;\n}\n.steps__item p {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n@media (max-width: 1100px) {\n  .steps {\n    inline-size: 100%;\n    padding: 32px 24px;\n  }\n  .steps__container {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 24px;\n  }\n}\n@media (max-width: 700px) {\n  .steps__visual {\n    inline-size: 100%;\n    max-inline-size: 337px;\n    block-size: 246px;\n    margin-inline: auto;\n  }\n  .steps__people-card {\n    inset-block-start: 64.9px;\n    inset-inline-start: 42.92px;\n    inline-size: 249.46px;\n    block-size: 112.38px;\n    padding: 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__filters {\n    inline-size: 233.33px;\n    block-size: 17.778px;\n    gap: 6.664px;\n  }\n  .steps__filter {\n    block-size: 17.778px;\n    border-radius: 4.44px;\n    font-size: 6.66px;\n    line-height: 1.5;\n    padding-inline: 4.44px 13px;\n  }\n  .steps__filter:nth-child(1),\n  .steps__filter:nth-child(3) {\n    inline-size: 44.89px;\n  }\n  .steps__filter:nth-child(2) {\n    inline-size: 57.89px;\n  }\n  .steps__chevron {\n    inline-size: 3.5px;\n    block-size: 3.5px;\n    inset-inline-end: 4.44px;\n    border-width: 1px;\n  }\n  .steps__filter-action {\n    inline-size: 15.12px;\n    block-size: 16.13px;\n    border-radius: 4px;\n  }\n  .steps__filter-action::before {\n    inline-size: 6px;\n    block-size: 1px;\n  }\n  .steps__filter-action::after {\n    inline-size: 1px;\n    block-size: 6px;\n  }\n  .steps__divider {\n    inline-size: 233.33px;\n    margin-block-start: 8.063px;\n  }\n  .steps__avatars {\n    inline-size: 229.3px;\n    block-size: 49.768px;\n    margin-block-start: 8.063px;\n  }\n  .steps__profit-card {\n    inline-size: 70px;\n    block-size: 98px;\n    padding: 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__payroll-card {\n    inset-block-start: 142px;\n    inset-inline-start: 250.27px;\n    inline-size: 86.68px;\n    block-size: 103.81px;\n    padding: 5.84px 8.063px;\n    border-radius: var(--radius-8);\n  }\n  .steps__mini-heading strong,\n  .steps__mini-heading span,\n  .steps__metric span {\n    font-size: 6px;\n    line-height: 1.5;\n  }\n  .steps__line-chart {\n    inline-size: 53.92px;\n    block-size: 40.27px;\n    margin-block-start: 6px;\n  }\n  .steps__bar-chart {\n    inline-size: 70.55px;\n    block-size: 45.3px;\n    gap: 6px;\n  }\n  .steps__metric strong {\n    font-size: 8px;\n    line-height: 1.5;\n  }\n  .steps__content {\n    inline-size: 100%;\n    gap: 25px;\n  }\n  .steps__copy {\n    inline-size: auto;\n    flex: 1 1 0;\n    gap: 88px;\n  }\n  .steps__item h3 {\n    font-size: var(--h5-size);\n    line-height: 1.4;\n  }\n  .steps__item p {\n    font-size: var(--body-size);\n    line-height: 1.5;\n  }\n}\n/*# sourceMappingURL=steps-component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsComponent, { className: "StepsComponent", filePath: "src/features/landingcomponents/steps-component/steps-component.ts", lineNumber: 12 });
})();

// src/services/data-analysis.ts
var _DataAnalysisService = class _DataAnalysisService {
  /**
   * Returns static demo data for the public landing page dashboard preview.
   *
   * Previously this called Team/GetAll, Project/GetAll and Meeting/GetAll —
   * all protected endpoints. Unauthenticated visitors received a 401, which
   * the auth interceptor turned into an immediate redirect to /login,
   * making the public landing page inaccessible without a login.
   *
   * The landing page shows a visual demo, not live company data, so static
   * values are correct here. Authenticated dashboard widgets should use their
   * own dedicated services.
   */
  getDashboardData() {
    const metricCards = [
      {
        title: "Total Employees",
        value: "1,240",
        change: "+12% this month",
        chartData: [45, 55, 35, 65, 50, 70, 60, 75, 55, 65, 50, 60],
        chartColor: "red"
      },
      {
        title: "Total Projects",
        value: "340",
        change: "+8% this month",
        chartData: [30, 45, 60, 75, 65, 80, 70, 85, 75, 80, 70, 75],
        chartColor: "blue"
      },
      {
        title: "Total Meetings",
        value: "87",
        change: "+5% this month",
        chartData: [40, 50, 45, 60, 55, 70, 65, 75, 70, 80, 75, 85],
        chartColor: "green"
      }
    ];
    const monthlyRevenue = [
      { month: "Jan", revenue: 15e3 },
      { month: "Feb", revenue: 2e4 },
      { month: "Mar", revenue: 18e3 },
      { month: "April", revenue: 3e4 },
      { month: "May", revenue: 62e3 },
      { month: "June", revenue: 45e3 },
      { month: "July", revenue: 5e4 },
      { month: "Aug", revenue: 7e4 },
      { month: "Sep", revenue: 25e3 },
      { month: "Oct", revenue: 2e4 },
      { month: "Nov", revenue: 35e3 },
      { month: "Dec", revenue: 75e3 }
    ];
    const invoiceStatistics = {
      value: "4.123",
      label: "Invoice",
      percentage: 65
    };
    return of({
      metricCards,
      monthlyRevenue,
      invoiceStatistics
    });
  }
};
_DataAnalysisService.\u0275fac = function DataAnalysisService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataAnalysisService)();
};
_DataAnalysisService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataAnalysisService, factory: _DataAnalysisService.\u0275fac, providedIn: "root" });
var DataAnalysisService = _DataAnalysisService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataAnalysisService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/features/landingComponents/analysis-section/analysis-section.ts
var _AnalysisSectionComponent = class _AnalysisSectionComponent {
  constructor() {
    this.dataAnalysisService = inject(DataAnalysisService);
    this.languageService = inject(LanguageService);
    this.metricCards = [];
    this.invoiceStatistics = null;
    this.revenueChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Revenue",
          backgroundColor: "",
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 18,
          maxBarThickness: 18
        }
      ]
    };
    this.revenueChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: "",
            font: { family: "DM Sans", size: 12 }
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: "" },
          border: { display: false },
          ticks: {
            color: "",
            font: { family: "DM Sans", size: 12 },
            callback: (value) => `${Number(value) / 1e3}k`
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      }
    };
    this.invoiceChartData = {
      labels: ["Completed", "Remaining"],
      datasets: [
        {
          data: [0, 100],
          backgroundColor: ["", ""],
          borderWidth: 0,
          hoverOffset: 0
        }
      ]
    };
    this.invoiceChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      cutout: "76%"
    };
  }
  getCSSVar(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  ngOnInit() {
    this.initChartColors();
    this.dataAnalysisService.getDashboardData().subscribe((dashboardData) => {
      this.metricCards = dashboardData.metricCards.map((card) => this.createMetricCardViewModel(card));
      this.revenueChartData = this.createRevenueChartData(dashboardData.monthlyRevenue);
      this.invoiceStatistics = dashboardData.invoiceStatistics;
      this.invoiceChartData = this.createInvoiceChartData(dashboardData.invoiceStatistics);
    });
  }
  initChartColors() {
    const primary = this.getCSSVar("--brand-primary-600");
    const neutral400 = this.getCSSVar("--brand-neutral-400");
    const neutral600 = this.getCSSVar("--brand-neutral-600");
    const neutral50 = this.getCSSVar("--brand-neutral-50");
    const tertiary = this.getCSSVar("--brand-tertiary-500");
    this.revenueChartData = __spreadProps(__spreadValues({}, this.revenueChartData), {
      datasets: [__spreadProps(__spreadValues({}, this.revenueChartData.datasets[0]), { backgroundColor: primary })]
    });
    this.revenueChartOptions = __spreadProps(__spreadValues({}, this.revenueChartOptions), {
      scales: {
        x: __spreadProps(__spreadValues({}, this.revenueChartOptions.scales?.["x"] ?? {}), {
          ticks: { color: neutral600, font: { family: "DM Sans", size: 12 } }
        }),
        y: __spreadProps(__spreadValues({}, this.revenueChartOptions.scales?.["y"] ?? {}), {
          grid: { color: neutral50 },
          ticks: {
            color: neutral400,
            font: { family: "DM Sans", size: 12 },
            callback: (value) => `${Number(value) / 1e3}k`
          }
        })
      }
    });
    this.invoiceChartData = __spreadProps(__spreadValues({}, this.invoiceChartData), {
      datasets: [__spreadProps(__spreadValues({}, this.invoiceChartData.datasets[0]), {
        backgroundColor: [tertiary, neutral50]
      })]
    });
  }
  createMetricCardViewModel(card) {
    return __spreadProps(__spreadValues({}, card), {
      chart: {
        labels: card.chartData.map((_, index) => index + 1),
        datasets: [
          {
            data: card.chartData,
            borderColor: this.getMetricColor(card.chartColor),
            backgroundColor: this.getMetricFill(card.chartColor),
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.4,
            borderWidth: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      trendClass: `analysis-section__metric-trend--${card.chartColor}`
    });
  }
  createRevenueChartData(monthlyRevenue) {
    return {
      labels: monthlyRevenue.map((item) => item.month),
      datasets: [
        __spreadProps(__spreadValues({}, this.revenueChartData.datasets[0]), {
          data: monthlyRevenue.map((item) => item.revenue)
        })
      ]
    };
  }
  createInvoiceChartData(invoiceStatistics) {
    return __spreadProps(__spreadValues({}, this.invoiceChartData), {
      datasets: [
        __spreadProps(__spreadValues({}, this.invoiceChartData.datasets[0]), {
          data: [invoiceStatistics.percentage, 100 - invoiceStatistics.percentage]
        })
      ]
    });
  }
  getMetricColor(color) {
    switch (color) {
      case "red":
        return this.getCSSVar("--brand-tertiary-500");
      case "green":
        return this.getCSSVar("--functional-success-500");
      case "blue":
      default:
        return this.getCSSVar("--brand-primary-600");
    }
  }
  getMetricFill(color) {
    const hex = this.getMetricColor(color);
    return this.hexToRgba(hex, 0.12);
  }
};
_AnalysisSectionComponent.\u0275fac = function AnalysisSectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnalysisSectionComponent)();
};
_AnalysisSectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalysisSectionComponent, selectors: [["app-analysis-section"]], decls: 121, vars: 1, consts: [[1, "analysis-section"], [1, "analysis-section__stage"], ["src", "assets/images/analysis/float-revenue-card.png", "alt", "", "aria-hidden", "true", 1, "analysis-section__float", "analysis-section__float--left"], ["aria-hidden", "true", 1, "analysis-section__panel"], [1, "analysis-section__kpis"], [1, "analysis-section__kpi"], [1, "analysis-section__kpi-inner"], [1, "analysis-section__kpi-text"], [1, "analysis-section__kpi-label"], [1, "analysis-section__kpi-figures"], [1, "analysis-section__kpi-value"], [1, "analysis-section__kpi-caption"], [1, "analysis-section__kpi-visual"], ["src", "assets/images/analysis/icon-menu-horizontal.svg", "alt", "", 1, "analysis-section__kpi-menu"], ["src", "assets/images/analysis/kpi-line-chart-1.svg", "alt", "", 1, "analysis-section__kpi-chart"], [1, "analysis-section__kpi", "analysis-section__kpi--primary"], ["src", "assets/images/analysis/icon-menu-horizontal.svg", "alt", "", 1, "analysis-section__kpi-menu", "analysis-section__kpi-menu--light"], [1, "analysis-section__kpi-bars"], [2, "--kpi-bar-h", "3.519em"], [2, "--kpi-bar-h", "2.5011em"], [2, "--kpi-bar-h", "4.944em"], [1, "analysis-section__kpi-bar--accent", 2, "--kpi-bar-h", "5.8747em"], [1, "analysis-section__kpi-caption", "analysis-section__kpi-caption--gray"], ["src", "assets/images/analysis/kpi-line-chart-2.svg", "alt", "", 1, "analysis-section__kpi-chart", "analysis-section__kpi-chart--wide"], [1, "analysis-section__chart-card"], [1, "analysis-section__chart-header"], [1, "analysis-section__chart-title"], [1, "analysis-section__chart-date"], ["src", "assets/images/analysis/icon-chevron-down.svg", "alt", ""], [1, "analysis-section__chart-legend"], [1, "analysis-section__legend-item"], [1, "analysis-section__legend-pill", "analysis-section__legend-pill--primary"], [1, "analysis-section__legend-pill", "analysis-section__legend-pill--secondary"], [1, "analysis-section__chart-body"], [1, "analysis-section__chart-y-axis"], ["src", "assets/images/analysis/chart-grid-lines.svg", "alt", "", 1, "analysis-section__chart-grid"], [1, "analysis-section__chart-plot"], [1, "analysis-section__chart-bars"], [2, "--bar-h", "16.1964em"], [1, "analysis-section__chart-bar--primary", 2, "--bar-h", "11.5115em"], [2, "--bar-h", "13.8775em"], [1, "analysis-section__chart-bar--primary", 2, "--bar-h", "23.4699em"], [2, "--bar-h", "12.2787em"], [1, "analysis-section__chart-bar--primary", 2, "--bar-h", "16.1965em"], [1, "analysis-section__chart-bar--primary", 2, "--bar-h", "22.7553em"], [2, "--bar-h", "11.5115em"], [2, "--bar-h", "22.7553em"], [1, "analysis-section__chart-bar--primary", 2, "--bar-h", "27.0386em"], [1, "analysis-section__chart-x-axis"], ["src", "assets/images/analysis/float-invoice-card.png", "alt", "", "aria-hidden", "true", 1, "analysis-section__float", "analysis-section__float--right"]], template: function AnalysisSectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Total Empolees");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 9)(11, "strong", 10);
    \u0275\u0275text(12, "$1.89K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 11);
    \u0275\u0275text(14, "20% Increase Last 7 Days");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "div", 12);
    \u0275\u0275domElement(16, "img", 13)(17, "img", 14);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 15)(19, "div", 6)(20, "div", 7)(21, "span", 8);
    \u0275\u0275text(22, "Total Revenue");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 9)(24, "strong", 10);
    \u0275\u0275text(25, "$1.89K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "span", 11);
    \u0275\u0275text(27, "20% Increase Last 7 Days");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(28, "div", 12);
    \u0275\u0275domElement(29, "img", 16);
    \u0275\u0275domElementStart(30, "div", 17);
    \u0275\u0275domElement(31, "span", 18)(32, "span", 19)(33, "span", 20)(34, "span", 21);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(35, "div", 5)(36, "div", 6)(37, "div", 7)(38, "span", 8);
    \u0275\u0275text(39, "New Compains");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "div", 9)(41, "strong", 10);
    \u0275\u0275text(42, "$1.89K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "span", 22);
    \u0275\u0275text(44, "20% Increase Last 7 Days");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(45, "div", 12);
    \u0275\u0275domElement(46, "img", 13)(47, "img", 23);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(48, "div", 24)(49, "div", 25)(50, "span", 26);
    \u0275\u0275text(51, "Total Revenue");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "span", 27);
    \u0275\u0275text(53, " Select Date ");
    \u0275\u0275domElement(54, "img", 28);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "div", 29)(56, "span", 30);
    \u0275\u0275domElement(57, "span", 31);
    \u0275\u0275text(58, " This Week ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(59, "span", 30);
    \u0275\u0275domElement(60, "span", 32);
    \u0275\u0275text(61, " Last Week ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(62, "div", 33)(63, "div", 34)(64, "span");
    \u0275\u0275text(65, "$80K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "span");
    \u0275\u0275text(67, "$70K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "span");
    \u0275\u0275text(69, "$60K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "span");
    \u0275\u0275text(71, "$50K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(72, "span");
    \u0275\u0275text(73, "$40K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "span");
    \u0275\u0275text(75, "$30K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(76, "span");
    \u0275\u0275text(77, "$20K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "span");
    \u0275\u0275text(79, "$10K");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "span");
    \u0275\u0275text(81, "$0K");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(82, "img", 35);
    \u0275\u0275domElementStart(83, "div", 36)(84, "div", 37);
    \u0275\u0275domElement(85, "span", 38)(86, "span", 39)(87, "span", 40)(88, "span", 41)(89, "span", 42)(90, "span", 43)(91, "span", 44)(92, "span", 45)(93, "span", 46)(94, "span", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "div", 48)(96, "span");
    \u0275\u0275text(97, "Jan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(98, "span");
    \u0275\u0275text(99, "Feb");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(100, "span");
    \u0275\u0275text(101, "Mar");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(102, "span");
    \u0275\u0275text(103, "April");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(104, "span");
    \u0275\u0275text(105, "May");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(106, "span");
    \u0275\u0275text(107, "June");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(108, "span");
    \u0275\u0275text(109, "July");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(110, "span");
    \u0275\u0275text(111, "Aug");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(112, "span");
    \u0275\u0275text(113, "Sep");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(114, "span");
    \u0275\u0275text(115, "Oct");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(116, "span");
    \u0275\u0275text(117, "Nov");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(118, "span");
    \u0275\u0275text(119, "Dec");
    \u0275\u0275domElementEnd()()()()()();
    \u0275\u0275domElement(120, "img", 49);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275attribute("aria-label", (tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.analysis == null ? null : tmp_0_0.analysis.dashboardPreview);
  }
}, dependencies: [CommonModule], styles: ['\n\n.analysis-section[_ngcontent-%COMP%] {\n  font-size: min(10px, calc((100vw - 71.92px) / 76.3));\n  font-family: var(--font-family-dm-sans);\n}\n.dark-theme[_nghost-%COMP%]   .analysis-section[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .analysis-section[_ngcontent-%COMP%] {\n  --ui-bg-surface: #ffffff;\n  --text-dark-gray: var(--brand-grays-900);\n}\n@media (prefers-color-scheme: dark) {\n  .dark-theme[_nghost-%COMP%]   .analysis-section[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .analysis-section[_ngcontent-%COMP%] {\n    --ui-bg-surface: #ffffff;\n    --text-dark-gray: var(--brand-grays-900);\n  }\n}\n.analysis-section__stage[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 76.3em;\n  margin-inline: auto;\n}\n.analysis-section__panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2em;\n  inline-size: 100%;\n  padding: 1.2em;\n  border-radius: 1.2em;\n  background: var(--landing-navbar-frame-bg);\n  box-shadow: 0 0 0 0.9em var(--landing-analysis-ring);\n  overflow: hidden;\n}\n.analysis-section__kpis[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.0514em;\n  inline-size: 100%;\n}\n.analysis-section__kpi[_ngcontent-%COMP%] {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  padding: 0.7885em;\n  border-radius: 0.8em;\n  background: var(--ui-bg-surface);\n  overflow: hidden;\n}\n.analysis-section__kpi--primary[_ngcontent-%COMP%] {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__kpi-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.analysis-section__kpi-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  block-size: 7.9902em;\n  white-space: nowrap;\n}\n.analysis-section__kpi-label[_ngcontent-%COMP%] {\n  font-family: var(--font-family-work-sans);\n  font-size: 1.4456em;\n  font-weight: 500;\n  line-height: normal;\n  color: var(--text-dark-gray);\n}\n.analysis-section__kpi--primary[_ngcontent-%COMP%]   .analysis-section__kpi-label[_ngcontent-%COMP%] {\n  color: var(--ui-bg-surface);\n}\n.analysis-section__kpi-figures[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5257em;\n}\n.analysis-section__kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--text-dark-gray);\n}\n.analysis-section__kpi--primary[_ngcontent-%COMP%]   .analysis-section__kpi-value[_ngcontent-%COMP%] {\n  color: var(--ui-bg-surface);\n}\n.analysis-section__kpi-caption[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  line-height: 1.5;\n  color: var(--landing-analysis-muted);\n}\n.analysis-section__kpi-caption--gray[_ngcontent-%COMP%] {\n  color: var(--text-gray);\n}\n.analysis-section__kpi-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  block-size: 7.9902em;\n}\n.analysis-section__kpi-menu[_ngcontent-%COMP%] {\n  inline-size: 1.6344em;\n  block-size: 1.6344em;\n}\n.analysis-section__kpi-chart[_ngcontent-%COMP%] {\n  inline-size: 9.4548em;\n  block-size: 4.8123em;\n}\n.analysis-section__kpi-chart--wide[_ngcontent-%COMP%] {\n  inline-size: 8.989em;\n}\n.analysis-section__kpi-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.6571em;\n  inline-size: 7.0967em;\n}\n.analysis-section__kpi-bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  block-size: var(--kpi-bar-h);\n  background: var(--landing-analysis-bar-light);\n}\n.analysis-section__kpi-bars[_ngcontent-%COMP%]   .analysis-section__kpi-bar--accent[_ngcontent-%COMP%] {\n  background: var(--landing-hr-highlight-bg);\n}\n.analysis-section__chart-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6em;\n  inline-size: 100%;\n  padding: 1.6em;\n  border-radius: 0.8em;\n  background: var(--ui-bg-surface);\n  overflow: hidden;\n}\n.analysis-section__chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  inline-size: 100%;\n}\n.analysis-section__chart-title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--landing-analysis-ink);\n  white-space: nowrap;\n}\n.analysis-section__chart-date[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3333em;\n  block-size: 3em;\n  padding: 0.5em 0.6667em;\n  border-radius: 0.616em;\n  background: var(--landing-navbar-frame-bg);\n  font-family: "Inter", var(--font-family-dm-sans);\n  font-size: 0.9741em;\n  line-height: normal;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__chart-date[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 1.0716em;\n  block-size: 1.0716em;\n}\n.analysis-section__chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.9741em;\n}\n.analysis-section__legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4059em;\n  font-size: 0.8em;\n  line-height: 1.5;\n  color: var(--landing-analysis-ink);\n  white-space: nowrap;\n}\n.analysis-section__legend-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  inline-size: 1.4206em;\n  block-size: 0.5684em;\n  border-radius: 0.8118em;\n}\n.analysis-section__legend-pill--primary[_ngcontent-%COMP%] {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__legend-pill--secondary[_ngcontent-%COMP%] {\n  background: var(--landing-navbar-frame-bg);\n  border: 0.0313em solid var(--landing-analysis-muted);\n}\n.analysis-section__chart-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 1.2988em;\n  inline-size: 100%;\n  padding: 0.4871em;\n}\n.analysis-section__chart-y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  block-size: 29.6em;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__chart-y-axis[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1.5;\n}\n.analysis-section__chart-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 4.797em;\n  inset-block-start: 3.01em;\n  inline-size: 65.9em;\n  block-size: 26.1em;\n}\n.analysis-section__chart-plot[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0;\n  min-inline-size: 0;\n  flex-direction: column;\n  gap: 0.8em;\n  block-size: 29.6em;\n  overflow: hidden;\n}\n.analysis-section__chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: flex-end;\n  gap: 3.0244em;\n  block-size: 27.4em;\n  inline-size: 100%;\n}\n.analysis-section__chart-bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  block-size: var(--bar-h);\n  background: var(--landing-navbar-frame-bg);\n}\n.analysis-section__chart-bars[_ngcontent-%COMP%]   .analysis-section__chart-bar--primary[_ngcontent-%COMP%] {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__chart-x-axis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  inline-size: 100%;\n  font-size: 1.2em;\n  line-height: 1.5;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__float[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n}\n.analysis-section__float--left[_ngcontent-%COMP%] {\n  inset-inline-start: -21.769em;\n  inset-block-start: 27.182em;\n  inline-size: 31.9em;\n}\n.analysis-section__float--right[_ngcontent-%COMP%] {\n  inset-inline-start: 71.18em;\n  inset-block-start: 19.39em;\n  inline-size: 25.2em;\n}\n@media (max-width: 767px) {\n  .analysis-section__float--left[_ngcontent-%COMP%] {\n    inset-inline-start: -38.96px;\n    inset-block-start: 213.95px;\n    inline-size: 121.16px;\n  }\n  .analysis-section__float--right[_ngcontent-%COMP%] {\n    inset-inline-start: 266.51px;\n    inset-block-start: 184.81px;\n    inline-size: 108.9px;\n  }\n}\n/*# sourceMappingURL=analysis-section.css.map */'] });
var AnalysisSectionComponent = _AnalysisSectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalysisSectionComponent, [{
    type: Component,
    args: [{ selector: "app-analysis-section", standalone: true, imports: [CommonModule], template: '<!-- Figma node 3:37684 \u2014 dashboard panel + floating chart cards. Decorative mock data (aria-hidden), values from Dev Mode. -->\n<section class="analysis-section" [attr.aria-label]="languageService.translations()?.analysis?.dashboardPreview">\n  <div class="analysis-section__stage">\n\n    <img\n      class="analysis-section__float analysis-section__float--left"\n      src="assets/images/analysis/float-revenue-card.png"\n      alt=""\n      aria-hidden="true"\n    />\n\n    <div class="analysis-section__panel" aria-hidden="true">\n\n      <!-- KPI cards row (node 3:37686) -->\n      <div class="analysis-section__kpis">\n        <div class="analysis-section__kpi">\n          <div class="analysis-section__kpi-inner">\n            <div class="analysis-section__kpi-text">\n              <span class="analysis-section__kpi-label">Total Empolees</span>\n              <div class="analysis-section__kpi-figures">\n                <strong class="analysis-section__kpi-value">$1.89K</strong>\n                <span class="analysis-section__kpi-caption">20% Increase Last 7 Days</span>\n              </div>\n            </div>\n            <div class="analysis-section__kpi-visual">\n              <img class="analysis-section__kpi-menu" src="assets/images/analysis/icon-menu-horizontal.svg" alt="" />\n              <img class="analysis-section__kpi-chart" src="assets/images/analysis/kpi-line-chart-1.svg" alt="" />\n            </div>\n          </div>\n        </div>\n\n        <div class="analysis-section__kpi analysis-section__kpi--primary">\n          <div class="analysis-section__kpi-inner">\n            <div class="analysis-section__kpi-text">\n              <span class="analysis-section__kpi-label">Total Revenue</span>\n              <div class="analysis-section__kpi-figures">\n                <strong class="analysis-section__kpi-value">$1.89K</strong>\n                <span class="analysis-section__kpi-caption">20% Increase Last 7 Days</span>\n              </div>\n            </div>\n            <div class="analysis-section__kpi-visual">\n              <img class="analysis-section__kpi-menu analysis-section__kpi-menu--light" src="assets/images/analysis/icon-menu-horizontal.svg" alt="" />\n              <div class="analysis-section__kpi-bars">\n                <span style="--kpi-bar-h: 3.519em"></span>\n                <span style="--kpi-bar-h: 2.5011em"></span>\n                <span style="--kpi-bar-h: 4.944em"></span>\n                <span class="analysis-section__kpi-bar--accent" style="--kpi-bar-h: 5.8747em"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="analysis-section__kpi">\n          <div class="analysis-section__kpi-inner">\n            <div class="analysis-section__kpi-text">\n              <span class="analysis-section__kpi-label">New Compains</span>\n              <div class="analysis-section__kpi-figures">\n                <strong class="analysis-section__kpi-value">$1.89K</strong>\n                <span class="analysis-section__kpi-caption analysis-section__kpi-caption--gray">20% Increase Last 7 Days</span>\n              </div>\n            </div>\n            <div class="analysis-section__kpi-visual">\n              <img class="analysis-section__kpi-menu" src="assets/images/analysis/icon-menu-horizontal.svg" alt="" />\n              <img class="analysis-section__kpi-chart analysis-section__kpi-chart--wide" src="assets/images/analysis/kpi-line-chart-2.svg" alt="" />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Revenue chart card (node 3:37731) -->\n      <div class="analysis-section__chart-card">\n        <div class="analysis-section__chart-header">\n          <span class="analysis-section__chart-title">Total Revenue</span>\n          <span class="analysis-section__chart-date">\n            Select Date\n            <img src="assets/images/analysis/icon-chevron-down.svg" alt="" />\n          </span>\n        </div>\n\n        <div class="analysis-section__chart-legend">\n          <span class="analysis-section__legend-item">\n            <span class="analysis-section__legend-pill analysis-section__legend-pill--primary"></span>\n            This Week\n          </span>\n          <span class="analysis-section__legend-item">\n            <span class="analysis-section__legend-pill analysis-section__legend-pill--secondary"></span>\n            Last Week\n          </span>\n        </div>\n\n        <div class="analysis-section__chart-body">\n          <div class="analysis-section__chart-y-axis">\n            <span>$80K</span><span>$70K</span><span>$60K</span><span>$50K</span><span>$40K</span>\n            <span>$30K</span><span>$20K</span><span>$10K</span><span>$0K</span>\n          </div>\n\n          <img class="analysis-section__chart-grid" src="assets/images/analysis/chart-grid-lines.svg" alt="" />\n\n          <div class="analysis-section__chart-plot">\n            <div class="analysis-section__chart-bars">\n              <span style="--bar-h: 16.1964em"></span>\n              <span class="analysis-section__chart-bar--primary" style="--bar-h: 11.5115em"></span>\n              <span style="--bar-h: 13.8775em"></span>\n              <span class="analysis-section__chart-bar--primary" style="--bar-h: 23.4699em"></span>\n              <span style="--bar-h: 12.2787em"></span>\n              <span class="analysis-section__chart-bar--primary" style="--bar-h: 16.1965em"></span>\n              <span class="analysis-section__chart-bar--primary" style="--bar-h: 22.7553em"></span>\n              <span style="--bar-h: 11.5115em"></span>\n              <span style="--bar-h: 22.7553em"></span>\n              <span class="analysis-section__chart-bar--primary" style="--bar-h: 27.0386em"></span>\n            </div>\n            <div class="analysis-section__chart-x-axis">\n              <span>Jan</span><span>Feb</span><span>Mar</span><span>April</span><span>May</span><span>June</span>\n              <span>July</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <img\n      class="analysis-section__float analysis-section__float--right"\n      src="assets/images/analysis/float-invoice-card.png"\n      alt=""\n      aria-hidden="true"\n    />\n  </div>\n</section>\n', styles: ['/* src/features/landingComponents/analysis-section/analysis-section.css */\n.analysis-section {\n  font-size: min(10px, calc((100vw - 71.92px) / 76.3));\n  font-family: var(--font-family-dm-sans);\n}\n:host-context(.dark-theme) .analysis-section {\n  --ui-bg-surface: #ffffff;\n  --text-dark-gray: var(--brand-grays-900);\n}\n@media (prefers-color-scheme: dark) {\n  :host-context(.dark-theme) .analysis-section {\n    --ui-bg-surface: #ffffff;\n    --text-dark-gray: var(--brand-grays-900);\n  }\n}\n.analysis-section__stage {\n  position: relative;\n  inline-size: 76.3em;\n  margin-inline: auto;\n}\n.analysis-section__panel {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2em;\n  inline-size: 100%;\n  padding: 1.2em;\n  border-radius: 1.2em;\n  background: var(--landing-navbar-frame-bg);\n  box-shadow: 0 0 0 0.9em var(--landing-analysis-ring);\n  overflow: hidden;\n}\n.analysis-section__kpis {\n  display: flex;\n  gap: 1.0514em;\n  inline-size: 100%;\n}\n.analysis-section__kpi {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  padding: 0.7885em;\n  border-radius: 0.8em;\n  background: var(--ui-bg-surface);\n  overflow: hidden;\n}\n.analysis-section__kpi--primary {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__kpi-inner {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.analysis-section__kpi-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  block-size: 7.9902em;\n  white-space: nowrap;\n}\n.analysis-section__kpi-label {\n  font-family: var(--font-family-work-sans);\n  font-size: 1.4456em;\n  font-weight: 500;\n  line-height: normal;\n  color: var(--text-dark-gray);\n}\n.analysis-section__kpi--primary .analysis-section__kpi-label {\n  color: var(--ui-bg-surface);\n}\n.analysis-section__kpi-figures {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5257em;\n}\n.analysis-section__kpi-value {\n  font-size: 1.8em;\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--text-dark-gray);\n}\n.analysis-section__kpi--primary .analysis-section__kpi-value {\n  color: var(--ui-bg-surface);\n}\n.analysis-section__kpi-caption {\n  font-size: 0.8em;\n  line-height: 1.5;\n  color: var(--landing-analysis-muted);\n}\n.analysis-section__kpi-caption--gray {\n  color: var(--text-gray);\n}\n.analysis-section__kpi-visual {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  block-size: 7.9902em;\n}\n.analysis-section__kpi-menu {\n  inline-size: 1.6344em;\n  block-size: 1.6344em;\n}\n.analysis-section__kpi-chart {\n  inline-size: 9.4548em;\n  block-size: 4.8123em;\n}\n.analysis-section__kpi-chart--wide {\n  inline-size: 8.989em;\n}\n.analysis-section__kpi-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.6571em;\n  inline-size: 7.0967em;\n}\n.analysis-section__kpi-bars span {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  block-size: var(--kpi-bar-h);\n  background: var(--landing-analysis-bar-light);\n}\n.analysis-section__kpi-bars .analysis-section__kpi-bar--accent {\n  background: var(--landing-hr-highlight-bg);\n}\n.analysis-section__chart-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6em;\n  inline-size: 100%;\n  padding: 1.6em;\n  border-radius: 0.8em;\n  background: var(--ui-bg-surface);\n  overflow: hidden;\n}\n.analysis-section__chart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  inline-size: 100%;\n}\n.analysis-section__chart-title {\n  font-size: 1.6em;\n  font-weight: 700;\n  line-height: 1.5;\n  color: var(--landing-analysis-ink);\n  white-space: nowrap;\n}\n.analysis-section__chart-date {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3333em;\n  block-size: 3em;\n  padding: 0.5em 0.6667em;\n  border-radius: 0.616em;\n  background: var(--landing-navbar-frame-bg);\n  font-family: "Inter", var(--font-family-dm-sans);\n  font-size: 0.9741em;\n  line-height: normal;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__chart-date img {\n  inline-size: 1.0716em;\n  block-size: 1.0716em;\n}\n.analysis-section__chart-legend {\n  display: flex;\n  gap: 0.9741em;\n}\n.analysis-section__legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4059em;\n  font-size: 0.8em;\n  line-height: 1.5;\n  color: var(--landing-analysis-ink);\n  white-space: nowrap;\n}\n.analysis-section__legend-pill {\n  display: inline-block;\n  inline-size: 1.4206em;\n  block-size: 0.5684em;\n  border-radius: 0.8118em;\n}\n.analysis-section__legend-pill--primary {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__legend-pill--secondary {\n  background: var(--landing-navbar-frame-bg);\n  border: 0.0313em solid var(--landing-analysis-muted);\n}\n.analysis-section__chart-body {\n  position: relative;\n  display: flex;\n  gap: 1.2988em;\n  inline-size: 100%;\n  padding: 0.4871em;\n}\n.analysis-section__chart-y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  block-size: 29.6em;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__chart-y-axis span {\n  font-size: 1.2em;\n  line-height: 1.5;\n}\n.analysis-section__chart-grid {\n  position: absolute;\n  inset-inline-start: 4.797em;\n  inset-block-start: 3.01em;\n  inline-size: 65.9em;\n  block-size: 26.1em;\n}\n.analysis-section__chart-plot {\n  display: flex;\n  flex: 1 0 0;\n  min-inline-size: 0;\n  flex-direction: column;\n  gap: 0.8em;\n  block-size: 29.6em;\n  overflow: hidden;\n}\n.analysis-section__chart-bars {\n  display: flex;\n  flex-shrink: 0;\n  align-items: flex-end;\n  gap: 3.0244em;\n  block-size: 27.4em;\n  inline-size: 100%;\n}\n.analysis-section__chart-bars span {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  block-size: var(--bar-h);\n  background: var(--landing-navbar-frame-bg);\n}\n.analysis-section__chart-bars .analysis-section__chart-bar--primary {\n  background: var(--landing-navbar-primary);\n}\n.analysis-section__chart-x-axis {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  inline-size: 100%;\n  font-size: 1.2em;\n  line-height: 1.5;\n  color: var(--landing-analysis-muted);\n  white-space: nowrap;\n}\n.analysis-section__float {\n  position: absolute;\n  z-index: 2;\n  display: block;\n}\n.analysis-section__float--left {\n  inset-inline-start: -21.769em;\n  inset-block-start: 27.182em;\n  inline-size: 31.9em;\n}\n.analysis-section__float--right {\n  inset-inline-start: 71.18em;\n  inset-block-start: 19.39em;\n  inline-size: 25.2em;\n}\n@media (max-width: 767px) {\n  .analysis-section__float--left {\n    inset-inline-start: -38.96px;\n    inset-block-start: 213.95px;\n    inline-size: 121.16px;\n  }\n  .analysis-section__float--right {\n    inset-inline-start: 266.51px;\n    inset-block-start: 184.81px;\n    inline-size: 108.9px;\n  }\n}\n/*# sourceMappingURL=analysis-section.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalysisSectionComponent, { className: "AnalysisSectionComponent", filePath: "src/features/landingcomponents/analysis-section/analysis-section.ts", lineNumber: 26 });
})();

// src/features/landingComponents/hrsection/hrsection.ts
function HRsectionComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 5);
    \u0275\u0275domElement(1, "img", 6);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const tab_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("impact__tab--active", tab_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r1.lang.translations()) == null ? null : tmp_11_0.impact == null ? null : tmp_11_0.impact.tab) || "MTWork HR");
  }
}
function HRsectionComponent_For_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 8)(1, "div", 9)(2, "h3", 10);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 13);
    \u0275\u0275domElement(9, "img", 14);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    const card_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("impact__card--wide", card_r3.wide);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_21_0 = ctx_r1.lang.translations()) == null ? null : tmp_21_0.trustedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_22_0 = ctx_r1.lang.translations()) == null ? null : tmp_22_0.hero == null ? null : tmp_22_0.hero.paragraph);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_23_0 = ctx_r1.lang.translations()) == null ? null : tmp_23_0.nav == null ? null : tmp_23_0.nav.getStarted) || "Learn More", " ");
  }
}
function HRsectionComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, HRsectionComponent_For_6_For_2_Template, 10, 5, "article", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
var _HRsectionComponent = class _HRsectionComponent {
  constructor() {
    this.lang = inject(LanguageService);
    this.tabs = [
      { active: true },
      { active: false },
      { active: false },
      { active: false }
    ];
    this.rows = [
      [{ wide: true }, { wide: false }],
      [{ wide: false }, { wide: true }]
    ];
  }
};
_HRsectionComponent.\u0275fac = function HRsectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HRsectionComponent)();
};
_HRsectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HRsectionComponent, selectors: [["app-hrsection"]], decls: 7, vars: 0, consts: [[1, "impact"], [1, "impact__tabs"], ["type", "button", 1, "impact__tab", 3, "impact__tab--active"], [1, "impact__grid"], [1, "impact__row"], ["type", "button", 1, "impact__tab"], ["src", "assets/images/impact/icon-comment.svg", "alt", "", 1, "impact__tab-icon"], [1, "impact__card", 3, "impact__card--wide"], [1, "impact__card"], [1, "impact__card-content"], [1, "impact__card-title"], [1, "impact__card-text"], ["type", "button", 1, "impact__card-cta"], ["aria-hidden", "true", 1, "impact__card-stars"], ["src", "assets/images/impact/impact-stars.svg", "alt", ""]], template: function HRsectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, HRsectionComponent_For_3_Template, 4, 3, "button", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 3);
    \u0275\u0275repeaterCreate(5, HRsectionComponent_For_6_Template, 3, 0, "div", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.rows);
  }
}, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n}\n.impact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block: var(--landing-impact-top-gap) var(--spacing-medium-lg);\n}\n.impact__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-medium-xl);\n  justify-content: center;\n}\n.impact__tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  inline-size: 161px;\n  block-size: 56px;\n  padding: var(--spacing-medium-md);\n  border: var(--border-width-hairline) solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-12);\n  background: var(--landing-navbar-frame-bg);\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.impact__tab--active[_ngcontent-%COMP%] {\n  background: var(--landing-impact-card-bg);\n}\n.impact__tab-icon[_ngcontent-%COMP%] {\n  inline-size: 32px;\n  block-size: 32px;\n}\n.impact__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-lg);\n  inline-size: var(--landing-features-row-max-width);\n  max-inline-size: 100%;\n  margin-block-start: var(--spacing-medium-xl);\n}\n.impact__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-medium-lg);\n}\n.impact__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  inline-size: 358.735px;\n  block-size: 380px;\n  padding: 30px 19px;\n  border-radius: var(--radius-8);\n  background: var(--landing-impact-card-bg);\n  overflow: hidden;\n}\n.impact__card--wide[_ngcontent-%COMP%] {\n  inline-size: 553px;\n}\n.impact__card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n}\n.impact__card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold, 700);\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.impact__card-text[_ngcontent-%COMP%] {\n  margin: 0;\n  max-inline-size: 320.735px;\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.impact__card--wide[_ngcontent-%COMP%]   .impact__card-text[_ngcontent-%COMP%] {\n  max-inline-size: 396.159px;\n}\n.impact__card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 121px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.impact__card-stars[_ngcontent-%COMP%] {\n  position: relative;\n  inline-size: 144.462px;\n  block-size: 104.752px;\n}\n.impact__card-stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block: 0;\n  inset-inline-start: -1.88%;\n  inline-size: 101.88%;\n  block-size: 100%;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    overflow: hidden;\n  }\n  .impact__tabs[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    inline-size: 361px;\n    margin-inline: auto;\n  }\n  .impact__grid[_ngcontent-%COMP%] {\n    inline-size: 361px;\n    margin-inline: auto;\n  }\n  .impact__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .impact__card[_ngcontent-%COMP%] {\n    inline-size: 361px;\n  }\n  .impact__card--wide[_ngcontent-%COMP%] {\n    inline-size: 553px;\n  }\n}\n/*# sourceMappingURL=hrsection.css.map */"] });
var HRsectionComponent = _HRsectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HRsectionComponent, [{
    type: Component,
    args: [{ selector: "app-hrsection", standalone: true, imports: [CommonModule], template: `<!-- Figma node 3:37872 \u2014 Impact section (tabs + 2\xD72 cards). All values from Dev Mode. -->
<section class="impact">

  <!-- Tabs row (3:37873): 4 \xD7 161\xD756, gap 24 -->
  <div class="impact__tabs">
    @for (tab of tabs; track $index) {
      <button type="button" class="impact__tab" [class.impact__tab--active]="tab.active">
        <img class="impact__tab-icon" src="assets/images/impact/icon-comment.svg" alt="" />
        <span>{{ lang.translations()?.impact?.tab || 'MTWork HR' }}</span>
      </button>
    }
  </div>

  <!-- Cards grid (3:37878): 927.74 wide, rows of [wide, narrow] / [narrow, wide], gap 16 -->
  <div class="impact__grid">
    @for (row of rows; track $index) {
      <div class="impact__row">
        @for (card of row; track $index) {
          <article class="impact__card" [class.impact__card--wide]="card.wide">
            <div class="impact__card-content">
              <h3 class="impact__card-title">{{ lang.translations()?.trustedBy }}</h3>
              <p class="impact__card-text">{{ lang.translations()?.hero?.paragraph }}</p>
              <button type="button" class="impact__card-cta">
                {{ lang.translations()?.nav?.getStarted || 'Learn More' }}
              </button>
            </div>
            <div class="impact__card-stars" aria-hidden="true">
              <img src="assets/images/impact/impact-stars.svg" alt="" />
            </div>
          </article>
        }
      </div>
    }
  </div>

</section>
`, styles: ["/* src/features/landingComponents/hrsection/hrsection.css */\n:host {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n}\n.impact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block: var(--landing-impact-top-gap) var(--spacing-medium-lg);\n}\n.impact__tabs {\n  display: flex;\n  gap: var(--spacing-medium-xl);\n  justify-content: center;\n}\n.impact__tab {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  inline-size: 161px;\n  block-size: 56px;\n  padding: var(--spacing-medium-md);\n  border: var(--border-width-hairline) solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-12);\n  background: var(--landing-navbar-frame-bg);\n  color: var(--brand-grays-900);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.impact__tab--active {\n  background: var(--landing-impact-card-bg);\n}\n.impact__tab-icon {\n  inline-size: 32px;\n  block-size: 32px;\n}\n.impact__grid {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-lg);\n  inline-size: var(--landing-features-row-max-width);\n  max-inline-size: 100%;\n  margin-block-start: var(--spacing-medium-xl);\n}\n.impact__row {\n  display: flex;\n  gap: var(--spacing-medium-lg);\n}\n.impact__card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  inline-size: 358.735px;\n  block-size: 380px;\n  padding: 30px 19px;\n  border-radius: var(--radius-8);\n  background: var(--landing-impact-card-bg);\n  overflow: hidden;\n}\n.impact__card--wide {\n  inline-size: 553px;\n}\n.impact__card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n}\n.impact__card-title {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold, 700);\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.impact__card-text {\n  margin: 0;\n  max-inline-size: 320.735px;\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.impact__card--wide .impact__card-text {\n  max-inline-size: 396.159px;\n}\n.impact__card-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 121px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.impact__card-stars {\n  position: relative;\n  inline-size: 144.462px;\n  block-size: 104.752px;\n}\n.impact__card-stars img {\n  position: absolute;\n  inset-block: 0;\n  inset-inline-start: -1.88%;\n  inline-size: 101.88%;\n  block-size: 100%;\n}\n@media (max-width: 767px) {\n  :host {\n    overflow: hidden;\n  }\n  .impact__tabs {\n    justify-content: flex-start;\n    inline-size: 361px;\n    margin-inline: auto;\n  }\n  .impact__grid {\n    inline-size: 361px;\n    margin-inline: auto;\n  }\n  .impact__row {\n    flex-direction: column;\n  }\n  .impact__card {\n    inline-size: 361px;\n  }\n  .impact__card--wide {\n    inline-size: 553px;\n  }\n}\n/*# sourceMappingURL=hrsection.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HRsectionComponent, { className: "HRsectionComponent", filePath: "src/features/landingcomponents/hrsection/hrsection.ts", lineNumber: 13 });
})();

// src/features/landingComponents/creatingimact/creatingimact.ts
function CreatingimactComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "img", 8);
    \u0275\u0275domElementStart(2, "div", 9)(3, "strong", 10);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const val_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(val_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r1.lang.translations()) == null ? null : tmp_11_0.creatingImpact == null ? null : tmp_11_0.creatingImpact.statLabel);
  }
}
var _CreatingimactComponent = class _CreatingimactComponent {
  constructor() {
    this.lang = inject(LanguageService);
    this.statValues = ["500K", "500K", "500K"];
  }
};
_CreatingimactComponent.\u0275fac = function CreatingimactComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatingimactComponent)();
};
_CreatingimactComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatingimactComponent, selectors: [["app-creatingimact"]], decls: 12, vars: 3, consts: [[1, "impact-band"], [1, "impact-band__header"], ["src", "assets/images/compliance/wavey-impact.png", "alt", "", "aria-hidden", "true", 1, "impact-band__wavey"], [1, "impact-band__title"], [1, "impact-band__title-highlight"], [1, "impact-band__desc"], [1, "impact-band__stats"], [1, "impact-band__stat"], ["src", "assets/images/compliance/stat-icon.png", "alt", "", "aria-hidden", "true", 1, "impact-band__stat-icon"], [1, "impact-band__stat-text"], [1, "impact-band__stat-value"], [1, "impact-band__stat-label"]], template: function CreatingimactComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 6);
    \u0275\u0275repeaterCreate(10, CreatingimactComponent_For_11_Template, 7, 2, "div", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.lang.translations()) == null ? null : tmp_0_0.creatingImpact == null ? null : tmp_0_0.creatingImpact.titlePrefix, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx.lang.translations()) == null ? null : tmp_1_0.creatingImpact == null ? null : tmp_1_0.creatingImpact.titleHighlight);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx.lang.translations()) == null ? null : tmp_2_0.creatingImpact == null ? null : tmp_2_0.creatingImpact.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.statValues);
  }
}, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n}\n.impact-band[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding-block: var(--spacing-large-massive);\n  overflow: hidden;\n}\n.impact-band__header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, var(--landing-hero-title-max-width));\n  text-align: center;\n}\n.impact-band__wavey[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 385.51px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.impact-band__title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.impact-band__title-highlight[_ngcontent-%COMP%] {\n  color: var(--landing-navbar-surface);\n}\n.impact-band__desc[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.impact-band__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.impact-band__stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n}\n.impact-band__stat-icon[_ngcontent-%COMP%] {\n  inline-size: 79.561px;\n  block-size: 76.534px;\n}\n.impact-band__stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-small-xs);\n  white-space: nowrap;\n}\n.impact-band__stat-value[_ngcontent-%COMP%] {\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.impact-band__stat-label[_ngcontent-%COMP%] {\n  max-inline-size: 235px;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: normal;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .impact-band[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .impact-band__wavey[_ngcontent-%COMP%] {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 756px);\n    max-inline-size: 90%;\n  }\n}\n@media (max-width: 767px) {\n  .impact-band__header[_ngcontent-%COMP%] {\n    inline-size: 100%;\n  }\n  .impact-band__wavey[_ngcontent-%COMP%] {\n    inset-inline-start: 166px;\n    inset-block-start: -7.36px;\n    inline-size: 575.14px;\n    block-size: 43.36px;\n  }\n  .impact-band__title[_ngcontent-%COMP%] {\n    max-inline-size: 336px;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n    white-space: nowrap;\n  }\n  .impact-band__desc[_ngcontent-%COMP%] {\n    max-inline-size: 100%;\n    font-size: var(--subtitle-size);\n  }\n  .impact-band__stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-medium-xl);\n  }\n  .impact-band__stat[_ngcontent-%COMP%] {\n    inline-size: 295.12px;\n    justify-content: flex-start;\n  }\n  .impact-band__stat-icon[_ngcontent-%COMP%] {\n    inline-size: 82.124px;\n    block-size: 79px;\n  }\n  .impact-band__stat-value[_ngcontent-%COMP%] {\n    font-size: var(--h5-size);\n    line-height: var(--line-height-4);\n  }\n  .impact-band__stat-label[_ngcontent-%COMP%] {\n    max-inline-size: 209px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=creatingimact.css.map */"], changeDetection: 0 });
var CreatingimactComponent = _CreatingimactComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatingimactComponent, [{
    type: Component,
    args: [{ selector: "app-creatingimact", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- Figma node 3:37913 (light) / 3:51511 (dark) / 3:65109 (mobile) \u2014 Impact stats band -->\n<section class="impact-band">\n  <div class="impact-band__header">\n    <img class="impact-band__wavey" src="assets/images/compliance/wavey-impact.png" alt="" aria-hidden="true" />\n    <h2 class="impact-band__title">\n      {{ lang.translations()?.creatingImpact?.titlePrefix }}\n      <span class="impact-band__title-highlight">{{ lang.translations()?.creatingImpact?.titleHighlight }}</span>\n    </h2>\n    <p class="impact-band__desc">{{ lang.translations()?.creatingImpact?.description }}</p>\n  </div>\n\n  <div class="impact-band__stats">\n    @for (val of statValues; track $index) {\n      <div class="impact-band__stat">\n        <img class="impact-band__stat-icon" src="assets/images/compliance/stat-icon.png" alt="" aria-hidden="true" />\n        <div class="impact-band__stat-text">\n          <strong class="impact-band__stat-value">{{ val }}</strong>\n          <span class="impact-band__stat-label">{{ lang.translations()?.creatingImpact?.statLabel }}</span>\n        </div>\n      </div>\n    }\n  </div>\n</section>\n', styles: ["/* src/features/landingComponents/creatingimact/creatingimact.css */\n:host {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n}\n.impact-band {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding-block: var(--spacing-large-massive);\n  overflow: hidden;\n}\n.impact-band__header {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, var(--landing-hero-title-max-width));\n  text-align: center;\n}\n.impact-band__wavey {\n  position: absolute;\n  inset-inline-start: 385.51px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.impact-band__title {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.impact-band__title-highlight {\n  color: var(--landing-navbar-surface);\n}\n.impact-band__desc {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.impact-band__stats {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.impact-band__stat {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n}\n.impact-band__stat-icon {\n  inline-size: 79.561px;\n  block-size: 76.534px;\n}\n.impact-band__stat-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-small-xs);\n  white-space: nowrap;\n}\n.impact-band__stat-value {\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.impact-band__stat-label {\n  max-inline-size: 235px;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: normal;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .impact-band {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .impact-band__wavey {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 756px);\n    max-inline-size: 90%;\n  }\n}\n@media (max-width: 767px) {\n  .impact-band__header {\n    inline-size: 100%;\n  }\n  .impact-band__wavey {\n    inset-inline-start: 166px;\n    inset-block-start: -7.36px;\n    inline-size: 575.14px;\n    block-size: 43.36px;\n  }\n  .impact-band__title {\n    max-inline-size: 336px;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n    white-space: nowrap;\n  }\n  .impact-band__desc {\n    max-inline-size: 100%;\n    font-size: var(--subtitle-size);\n  }\n  .impact-band__stats {\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-medium-xl);\n  }\n  .impact-band__stat {\n    inline-size: 295.12px;\n    justify-content: flex-start;\n  }\n  .impact-band__stat-icon {\n    inline-size: 82.124px;\n    block-size: 79px;\n  }\n  .impact-band__stat-value {\n    font-size: var(--h5-size);\n    line-height: var(--line-height-4);\n  }\n  .impact-band__stat-label {\n    max-inline-size: 209px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=creatingimact.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatingimactComponent, { className: "CreatingimactComponent", filePath: "src/features/landingcomponents/creatingimact/creatingimact.ts", lineNumber: 13 });
})();

// src/features/landingComponents/continouscompliance/continouscompliance.ts
var _c0 = () => [1, 2, 3];
function ContinouscomplianceComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 10);
    \u0275\u0275domElement(1, "img", 19);
    \u0275\u0275domElementStart(2, "div", 20)(3, "h3", 21);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const n_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", "assets/images/compliance/card-illustration-" + n_r1 + ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", (tmp_11_0 = ctx_r1.lang.translations()) == null ? null : tmp_11_0.compliance == null ? null : tmp_11_0.compliance.trustedByPrefix, " ", ctx_r1.totalTrustedCompanies, " ", (tmp_11_0 = ctx_r1.lang.translations()) == null ? null : tmp_11_0.compliance == null ? null : tmp_11_0.compliance.trustedBySuffix, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r1.lang.translations()) == null ? null : tmp_12_0.compliance == null ? null : tmp_12_0.compliance.cardDescription);
  }
}
function ContinouscomplianceComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 18);
    \u0275\u0275domElement(1, "span", 23);
    \u0275\u0275domElementStart(2, "h3", 24);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r1.lang.translations()) == null ? null : tmp_10_0.compliance == null ? null : tmp_10_0.compliance.portalTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r1.lang.translations()) == null ? null : tmp_11_0.compliance == null ? null : tmp_11_0.compliance.portalDescription);
  }
}
var _ContinouscomplianceComponent = class _ContinouscomplianceComponent {
  constructor() {
    this.lang = inject(LanguageService);
    this.totalTrustedCompanies = 20;
    this.portalCount = Array(6).fill(null);
  }
};
_ContinouscomplianceComponent.\u0275fac = function ContinouscomplianceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContinouscomplianceComponent)();
};
_ContinouscomplianceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContinouscomplianceComponent, selectors: [["app-continouscompliance"]], decls: 31, vars: 10, consts: [[1, "compliance"], [1, "compliance__intro"], ["src", "assets/images/compliance/wavey-intro.png", "alt", "", "aria-hidden", "true", 1, "compliance__intro-wavey"], ["src", "assets/images/compliance/wavey-intro-mobile.png", "alt", "", "aria-hidden", "true", 1, "compliance__intro-wavey--mobile"], [1, "compliance__title"], [1, "compliance__tm"], [1, "compliance__title-highlight"], [1, "compliance__desc"], ["type", "button", 1, "compliance__cta", "compliance__cta--tertiary"], [1, "compliance__cards"], [1, "compliance__card"], [1, "compliance__why"], ["src", "assets/images/compliance/wavey-why.png", "alt", "", "aria-hidden", "true", 1, "compliance__why-wavey"], [1, "compliance__title", "compliance__title--why"], [1, "compliance__title-highlight", "compliance__title-highlight--why"], [1, "compliance__desc", "compliance__desc--why"], ["type", "button", 1, "compliance__cta", "compliance__cta--primary"], [1, "compliance__services"], [1, "compliance__service"], ["alt", "", "aria-hidden", "true", 1, "compliance__card-art", 3, "src"], [1, "compliance__card-text"], [1, "compliance__card-title"], [1, "compliance__card-desc"], ["aria-hidden", "true", 1, "compliance__service-icon"], [1, "compliance__service-title"], [1, "compliance__service-desc"]], template: function ContinouscomplianceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2)(3, "img", 3);
    \u0275\u0275domElementStart(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementStart(6, "sup", 5);
    \u0275\u0275text(7, "\u2122");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 7);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "button", 8);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 9);
    \u0275\u0275repeaterCreate(16, ContinouscomplianceComponent_For_17_Template, 7, 5, "article", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "div", 11);
    \u0275\u0275domElement(19, "img", 12);
    \u0275\u0275domElementStart(20, "h2", 13)(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "p", 15);
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "button", 16);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "div", 17);
    \u0275\u0275repeaterCreate(29, ContinouscomplianceComponent_For_30_Template, 6, 2, "article", 18, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.lang.translations()) == null ? null : tmp_0_0.compliance == null ? null : tmp_0_0.compliance.titlePart1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx.lang.translations()) == null ? null : tmp_1_0.compliance == null ? null : tmp_1_0.compliance.titlePart2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.lang.translations()) == null ? null : tmp_2_0.compliance == null ? null : tmp_2_0.compliance.titlePart3, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx.lang.translations()) == null ? null : tmp_3_0.compliance == null ? null : tmp_3_0.compliance.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx.lang.translations()) == null ? null : tmp_4_0.compliance == null ? null : tmp_4_0.compliance.getStarted, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx.lang.translations()) == null ? null : tmp_6_0.whyChoose == null ? null : tmp_6_0.whyChoose.titleHighlight);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx.lang.translations()) == null ? null : tmp_7_0.whyChoose == null ? null : tmp_7_0.whyChoose.titleRest, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx.lang.translations()) == null ? null : tmp_8_0.whyChoose == null ? null : tmp_8_0.whyChoose.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_9_0 = ctx.lang.translations()) == null ? null : tmp_9_0.whyChoose == null ? null : tmp_9_0.whyChoose.learnMore, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.portalCount);
  }
}, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--landing-compliance-bg);\n  font-family: var(--font-family-dm-sans);\n  overflow: hidden;\n}\n.compliance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-very-large-giant);\n  padding-block: var(--spacing-large-massive) var(--spacing-medium-lg);\n}\n.compliance__intro[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, 1408px);\n  text-align: center;\n}\n.compliance__intro-wavey[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 467px;\n  inset-block-start: -10px;\n  inline-size: 775px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.compliance__intro-wavey--mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.compliance__title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: 841.648px;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.compliance__tm[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n  vertical-align: super;\n}\n.compliance__title-highlight[_ngcontent-%COMP%] {\n  color: var(--landing-navbar-surface);\n}\n.compliance__desc[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: 744.818px;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.compliance__cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.compliance__cta--tertiary[_ngcontent-%COMP%] {\n  min-inline-size: 111px;\n  background: var(--landing-hr-highlight-bg);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-compliance-cta-ink);\n}\n.compliance__cta--primary[_ngcontent-%COMP%] {\n  min-inline-size: 107px;\n  border: 1px solid var(--landing-navbar-primary);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n  color: var(--landing-compliance-cta-ink);\n}\n.compliance__cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  inline-size: min(100%, 1254px);\n}\n.compliance__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  inline-size: 402px;\n  block-size: 412px;\n  padding: var(--spacing-small-xxs);\n}\n.compliance__card-art[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 286px;\n  border-radius: var(--radius-8);\n}\n.compliance__card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.compliance__card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold);\n  line-height: 1.4;\n}\n.compliance__card-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--landing-compliance-card-desc);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.compliance__why[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, 1408px);\n  text-align: center;\n}\n.compliance__why-wavey[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 325px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.compliance__title--why[_ngcontent-%COMP%] {\n  max-inline-size: 100%;\n}\n.compliance__desc--why[_ngcontent-%COMP%] {\n  max-inline-size: 580.527px;\n}\n.compliance__services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  inline-size: min(100%, 1440px);\n  padding-inline: 34.5px;\n}\n.compliance__service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n  inline-size: 441px;\n  block-size: 244px;\n  padding: var(--spacing-medium-xl);\n  border-radius: var(--radius-4);\n  overflow: hidden;\n}\n.compliance__service-icon[_ngcontent-%COMP%] {\n  display: block;\n  inline-size: 33.333px;\n  block-size: 32px;\n  margin: 16px 15px;\n  background-color: var(--landing-compliance-ink);\n  -webkit-mask: url(/assets/images/compliance/icon-analytics.svg) center / contain no-repeat;\n  mask: url(/assets/images/compliance/icon-analytics.svg) center / contain no-repeat;\n  transform: scaleY(-1);\n}\n.compliance__service-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-h6-font-family);\n  font-size: var(--typography-h6-font-size);\n  font-weight: var(--h6-font-weight-bold, 700);\n  line-height: var(--typography-h6-line-height);\n}\n.compliance__service-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .compliance[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .compliance__intro-wavey[_ngcontent-%COMP%], \n   .compliance__why-wavey[_ngcontent-%COMP%] {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 775px);\n    max-inline-size: 90%;\n  }\n  .compliance__cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    inline-size: 100%;\n    max-inline-size: 828px;\n    margin-inline: auto;\n  }\n  .compliance__services[_ngcontent-%COMP%] {\n    padding-inline: 0;\n    max-inline-size: 906px;\n  }\n}\n@media (max-width: 767px) {\n  .compliance[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-medium-lg);\n  }\n  .compliance__intro-wavey[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .compliance__intro-wavey--mobile[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    inset-inline-start: -2.5px;\n    inset-block-start: 55.12px;\n    inline-size: 380.5px;\n    block-size: 58px;\n    max-inline-size: none;\n  }\n  .compliance__title[_ngcontent-%COMP%] {\n    max-inline-size: 358px;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .compliance__desc[_ngcontent-%COMP%] {\n    max-inline-size: 303.95px;\n    font-size: var(--subtitle-size);\n  }\n  .compliance__desc--why[_ngcontent-%COMP%] {\n    max-inline-size: 320px;\n    font-size: var(--body-size);\n  }\n  .compliance__cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    inline-size: 100%;\n  }\n  .compliance__card[_ngcontent-%COMP%] {\n    inline-size: 377px;\n    margin-inline-start: -8px;\n  }\n  .compliance__card-art[_ngcontent-%COMP%] {\n    block-size: 286px;\n    object-fit: cover;\n  }\n  .compliance__why-wavey[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .compliance__title-highlight--why[_ngcontent-%COMP%] {\n    color: inherit;\n  }\n  .compliance__services[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 29px;\n    padding-inline: 0;\n  }\n  .compliance__service[_ngcontent-%COMP%] {\n    inline-size: 358px;\n  }\n  .compliance__service[_ngcontent-%COMP%]:nth-child(n+4) {\n    inline-size: 441px;\n  }\n}\n/*# sourceMappingURL=continouscompliance.css.map */"], changeDetection: 0 });
var ContinouscomplianceComponent = _ContinouscomplianceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContinouscomplianceComponent, [{
    type: Component,
    args: [{ selector: "app-continouscompliance", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Figma node 3:37939 (light) / 3:51537 (dark) / 3:65135 (mobile) \u2014 Compliance section.
     Bg flips #f7f5f2 \u2192 #282828 in dark (project uses .dark-theme, no Tailwind dark: variants). -->
<section class="compliance">

  <!-- Intro (3:37946) -->
  <div class="compliance__intro">
    <img class="compliance__intro-wavey" src="assets/images/compliance/wavey-intro.png" alt="" aria-hidden="true" />
    <img class="compliance__intro-wavey--mobile" src="assets/images/compliance/wavey-intro-mobile.png" alt="" aria-hidden="true" />
    <h2 class="compliance__title">
      {{ lang.translations()?.compliance?.titlePart1 }}<sup class="compliance__tm">\u2122</sup>
      <span class="compliance__title-highlight">{{ lang.translations()?.compliance?.titlePart2 }}</span>
      {{ lang.translations()?.compliance?.titlePart3 }}
    </h2>
    <p class="compliance__desc">{{ lang.translations()?.compliance?.description }}</p>
    <button type="button" class="compliance__cta compliance__cta--tertiary">
      {{ lang.translations()?.compliance?.getStarted }}
    </button>
  </div>

  <!-- 3 compliance cards (3:37956): 402\xD7412, gap 24 -->
  <div class="compliance__cards">
    @for (n of [1, 2, 3]; track n) {
      <article class="compliance__card">
        <img class="compliance__card-art" [src]="'assets/images/compliance/card-illustration-' + n + '.png'" alt="" aria-hidden="true" />
        <div class="compliance__card-text">
          <h3 class="compliance__card-title">
            {{ lang.translations()?.compliance?.trustedByPrefix }}
            {{ totalTrustedCompanies }}
            {{ lang.translations()?.compliance?.trustedBySuffix }}
          </h3>
          <p class="compliance__card-desc">{{ lang.translations()?.compliance?.cardDescription }}</p>
        </div>
      </article>
    }
  </div>

  <!-- Why band (3:38060) -->
  <div class="compliance__why">
    <img class="compliance__why-wavey" src="assets/images/compliance/wavey-why.png" alt="" aria-hidden="true" />
    <h2 class="compliance__title compliance__title--why">
      <span class="compliance__title-highlight compliance__title-highlight--why">{{ lang.translations()?.whyChoose?.titleHighlight }}</span>
      {{ lang.translations()?.whyChoose?.titleRest }}
    </h2>
    <p class="compliance__desc compliance__desc--why">{{ lang.translations()?.whyChoose?.description }}</p>
    <button type="button" class="compliance__cta compliance__cta--primary">
      {{ lang.translations()?.whyChoose?.learnMore }}
    </button>
  </div>

  <!-- 6 service cards (3:38064): 441\xD7244, gap 24 -->
  <div class="compliance__services">
    @for (_ of portalCount; track $index) {
      <article class="compliance__service">
        <span class="compliance__service-icon" aria-hidden="true"></span>
        <h3 class="compliance__service-title">{{ lang.translations()?.compliance?.portalTitle }}</h3>
        <p class="compliance__service-desc">{{ lang.translations()?.compliance?.portalDescription }}</p>
      </article>
    }
  </div>

</section>
`, styles: ["/* src/features/landingComponents/continouscompliance/continouscompliance.css */\n:host {\n  display: block;\n  background: var(--landing-compliance-bg);\n  font-family: var(--font-family-dm-sans);\n  overflow: hidden;\n}\n.compliance {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-very-large-giant);\n  padding-block: var(--spacing-large-massive) var(--spacing-medium-lg);\n}\n.compliance__intro {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, 1408px);\n  text-align: center;\n}\n.compliance__intro-wavey {\n  position: absolute;\n  inset-inline-start: 467px;\n  inset-block-start: -10px;\n  inline-size: 775px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.compliance__intro-wavey--mobile {\n  display: none;\n}\n.compliance__title {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: 841.648px;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.compliance__tm {\n  font-size: 0.4em;\n  vertical-align: super;\n}\n.compliance__title-highlight {\n  color: var(--landing-navbar-surface);\n}\n.compliance__desc {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: 744.818px;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.compliance__cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.compliance__cta--tertiary {\n  min-inline-size: 111px;\n  background: var(--landing-hr-highlight-bg);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-compliance-cta-ink);\n}\n.compliance__cta--primary {\n  min-inline-size: 107px;\n  border: 1px solid var(--landing-navbar-primary);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n  color: var(--landing-compliance-cta-ink);\n}\n.compliance__cards {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  inline-size: min(100%, 1254px);\n}\n.compliance__card {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  inline-size: 402px;\n  block-size: 412px;\n  padding: var(--spacing-small-xxs);\n}\n.compliance__card-art {\n  inline-size: 100%;\n  block-size: 286px;\n  border-radius: var(--radius-8);\n}\n.compliance__card-text {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.compliance__card-title {\n  margin: 0;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold);\n  line-height: 1.4;\n}\n.compliance__card-desc {\n  margin: 0;\n  color: var(--landing-compliance-card-desc);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.compliance__why {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: min(100%, 1408px);\n  text-align: center;\n}\n.compliance__why-wavey {\n  position: absolute;\n  inset-inline-start: 325px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.compliance__title--why {\n  max-inline-size: 100%;\n}\n.compliance__desc--why {\n  max-inline-size: 580.527px;\n}\n.compliance__services {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  inline-size: min(100%, 1440px);\n  padding-inline: 34.5px;\n}\n.compliance__service {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--spacing-medium-lg);\n  inline-size: 441px;\n  block-size: 244px;\n  padding: var(--spacing-medium-xl);\n  border-radius: var(--radius-4);\n  overflow: hidden;\n}\n.compliance__service-icon {\n  display: block;\n  inline-size: 33.333px;\n  block-size: 32px;\n  margin: 16px 15px;\n  background-color: var(--landing-compliance-ink);\n  -webkit-mask: url(/assets/images/compliance/icon-analytics.svg) center / contain no-repeat;\n  mask: url(/assets/images/compliance/icon-analytics.svg) center / contain no-repeat;\n  transform: scaleY(-1);\n}\n.compliance__service-title {\n  margin: 0;\n  color: var(--landing-compliance-ink);\n  font-family: var(--typography-h6-font-family);\n  font-size: var(--typography-h6-font-size);\n  font-weight: var(--h6-font-weight-bold, 700);\n  line-height: var(--typography-h6-line-height);\n}\n.compliance__service-desc {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .compliance {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .compliance__intro-wavey,\n  .compliance__why-wavey {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 775px);\n    max-inline-size: 90%;\n  }\n  .compliance__cards {\n    flex-wrap: wrap;\n    inline-size: 100%;\n    max-inline-size: 828px;\n    margin-inline: auto;\n  }\n  .compliance__services {\n    padding-inline: 0;\n    max-inline-size: 906px;\n  }\n}\n@media (max-width: 767px) {\n  .compliance {\n    padding-inline: var(--spacing-medium-lg);\n  }\n  .compliance__intro-wavey {\n    display: none;\n  }\n  .compliance__intro-wavey--mobile {\n    display: block;\n    position: absolute;\n    inset-inline-start: -2.5px;\n    inset-block-start: 55.12px;\n    inline-size: 380.5px;\n    block-size: 58px;\n    max-inline-size: none;\n  }\n  .compliance__title {\n    max-inline-size: 358px;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .compliance__desc {\n    max-inline-size: 303.95px;\n    font-size: var(--subtitle-size);\n  }\n  .compliance__desc--why {\n    max-inline-size: 320px;\n    font-size: var(--body-size);\n  }\n  .compliance__cards {\n    flex-direction: column;\n    align-items: flex-start;\n    inline-size: 100%;\n  }\n  .compliance__card {\n    inline-size: 377px;\n    margin-inline-start: -8px;\n  }\n  .compliance__card-art {\n    block-size: 286px;\n    object-fit: cover;\n  }\n  .compliance__why-wavey {\n    display: none;\n  }\n  .compliance__title-highlight--why {\n    color: inherit;\n  }\n  .compliance__services {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 29px;\n    padding-inline: 0;\n  }\n  .compliance__service {\n    inline-size: 358px;\n  }\n  .compliance__service:nth-child(n+4) {\n    inline-size: 441px;\n  }\n}\n/*# sourceMappingURL=continouscompliance.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContinouscomplianceComponent, { className: "ContinouscomplianceComponent", filePath: "src/features/landingcomponents/continouscompliance/continouscompliance.ts", lineNumber: 14 });
})();

// src/features/landingComponents/landingcomponent/landingcomponent.ts
var _c02 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function Landingcomponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 32)(2, "img", 33);
    \u0275\u0275elementEnd();
  }
}
function Landingcomponent_For_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 35)(1, "div", 36);
    \u0275\u0275element(2, "img", 37);
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 39)(6, "span", 40);
    \u0275\u0275element(7, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "p", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_20_0 = ctx_r0.languageService.translations()) == null ? null : tmp_20_0.testimonials == null ? null : tmp_20_0.testimonials.quote) || ctx_r0.testimonialQuote);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_21_0 = ctx_r0.languageService.translations()) == null ? null : tmp_21_0.testimonials == null ? null : tmp_21_0.testimonials.name) || ctx_r0.testimonialName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_22_0 = ctx_r0.languageService.translations()) == null ? null : tmp_22_0.testimonials == null ? null : tmp_22_0.testimonials.role) || ctx_r0.testimonialRole);
  }
}
function Landingcomponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, Landingcomponent_For_45_For_2_Template, 13, 3, "article", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    \u0275\u0275classProp("landing-testimonials__column--blue", column_r2.blue);
    \u0275\u0275advance();
    \u0275\u0275repeater(column_r2.cards);
  }
}
var _Landingcomponent = class _Landingcomponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.document = inject(DOCUMENT);
    this.testimonialColumns = [
      { blue: false, cards: Array(5).fill(null) },
      { blue: true, cards: Array(5).fill(null) },
      { blue: false, cards: Array(5).fill(null) }
    ];
    this.testimonialQuote = "Working with Mtwokr is very impressive and high looking experiance for payroll, insurance, HRs managment system ever with good Saas soultions";
    this.testimonialName = "Abdelrahman Farid";
    this.testimonialRole = "Ceo Rawbit";
  }
  scrollToFeatures() {
    this.document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  }
};
_Landingcomponent.\u0275fac = function Landingcomponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Landingcomponent)();
};
_Landingcomponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landingcomponent, selectors: [["app-landingcomponent"]], decls: 52, vars: 15, consts: [[1, "landing-page"], [1, "landing-hero"], [1, "landing-hero__content"], [1, "landing-hero__badge"], [1, "landing-hero__title-frame"], [1, "landing-hero__title"], [1, "landing-hero__title-highlighted"], [1, "landing-hero__title-highlight-text"], [1, "landing-hero__title-rest"], [1, "landing-hero__description"], [1, "landing-hero__actions"], [1, "landing-hero__button", "landing-hero__button--primary", 3, "click"], ["routerLink", "/register", 1, "landing-hero__button", "landing-hero__button--secondary"], ["id", "features", 1, "landing-section", "landing-section--dashboard"], [1, "landing-trusted"], [1, "landing-trusted__title"], [1, "landing-trusted__subtitle"], ["aria-hidden", "true", 1, "landing-trusted__slider"], [1, "landing-trusted__logo"], [1, "landing-section", "landing-section--hr"], [1, "landing-section", "landing-section--impact"], [1, "landing-section", "landing-section--compliance"], [1, "landing-why"], ["src", "assets/images/testimonials/wavey-header.png", "alt", "", "aria-hidden", "true", 1, "landing-why__wavey"], [1, "landing-why__title"], [1, "landing-why__highlight"], [1, "landing-why__description"], [1, "landing-testimonials"], [1, "landing-testimonials__column", 3, "landing-testimonials__column--blue"], [1, "landing-section", "landing-section--choosing"], [1, "landing-section", "landing-section--blog"], [1, "landing-section", "landing-section--steps"], ["src", "assets/images/analysis/trusted-logo-wordmark.svg", "alt", "", 1, "landing-trusted__logo-wordmark"], ["src", "assets/images/analysis/trusted-logo-mark.svg", "alt", "", 1, "landing-trusted__logo-mark"], [1, "landing-testimonials__column"], [1, "landing-testimonials__card"], [1, "landing-testimonials__card-body"], ["src", "assets/images/impact/icon-comment.svg", "alt", "", "aria-hidden", "true", 1, "landing-testimonials__card-icon"], [1, "landing-testimonials__quote"], [1, "landing-testimonials__person"], ["aria-hidden", "true", 1, "landing-testimonials__avatar"], ["src", "assets/images/testimonials/avatar-person.png", "alt", ""], [1, "landing-testimonials__person-text"], [1, "landing-testimonials__name"], [1, "landing-testimonials__role"]], template: function Landingcomponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5)(7, "span", 6)(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
    \u0275\u0275listener("click", function Landingcomponent_Template_button_click_15_listener() {
      return ctx.scrollToFeatures();
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "section", 13);
    \u0275\u0275element(20, "app-analysis-section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "section", 14)(22, "h2", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 16);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17);
    \u0275\u0275repeaterCreate(27, Landingcomponent_For_28_Template, 3, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "section", 19);
    \u0275\u0275element(30, "app-hrsection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "section", 20);
    \u0275\u0275element(32, "app-creatingimact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "section", 21);
    \u0275\u0275element(34, "app-continouscompliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "section", 22);
    \u0275\u0275element(36, "img", 23);
    \u0275\u0275elementStart(37, "h2", 24);
    \u0275\u0275text(38);
    \u0275\u0275elementStart(39, "span", 25);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "p", 26);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "section", 27);
    \u0275\u0275repeaterCreate(44, Landingcomponent_For_45_Template, 3, 2, "div", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "section", 29);
    \u0275\u0275element(47, "app-choosing-component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "section", 30);
    \u0275\u0275element(49, "app-blog-component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "section", 31);
    \u0275\u0275element(51, "app-steps-component");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.hero == null ? null : tmp_0_0.hero.badge) || "Payroll Managment", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx.languageService.translations()) == null ? null : tmp_1_0.hero == null ? null : tmp_1_0.hero.title1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx.languageService.translations()) == null ? null : tmp_2_0.hero == null ? null : tmp_2_0.hero.title2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx.languageService.translations()) == null ? null : tmp_3_0.hero == null ? null : tmp_3_0.hero.paragraph, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", (tmp_4_0 = ctx.languageService.translations()) == null ? null : tmp_4_0.hero == null ? null : tmp_4_0.hero.learnMoreAria);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx.languageService.translations()) == null ? null : tmp_5_0.nav == null ? null : tmp_5_0.nav.getStarted) || "Learn More", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_6_0 = ctx.languageService.translations()) == null ? null : tmp_6_0.nav == null ? null : tmp_6_0.nav.bookADemo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx.languageService.translations()) == null ? null : tmp_7_0.nav == null ? null : tmp_7_0.nav.bookADemo) || "Book a demo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", (tmp_8_0 = ctx.languageService.translations()) == null ? null : tmp_8_0.trustedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx.languageService.translations()) == null ? null : tmp_9_0.trustedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.languageService.translations()) == null ? null : tmp_10_0.hero == null ? null : tmp_10_0.hero.paragraph);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(14, _c02));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = ctx.languageService.translations()) == null ? null : tmp_12_0.whyChoose == null ? null : tmp_12_0.whyChoose.titleHighlight, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx.languageService.translations()) == null ? null : tmp_13_0.whyChoose == null ? null : tmp_13_0.whyChoose.titleRest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_14_0 = ctx.languageService.translations()) == null ? null : tmp_14_0.whyChoose == null ? null : tmp_14_0.whyChoose.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.testimonialColumns);
  }
}, dependencies: [
  CommonModule,
  RouterLink,
  StepsComponent,
  BlogComponent,
  ChoosingComponent,
  AnalysisSectionComponent,
  CreatingimactComponent,
  HRsectionComponent,
  ContinouscomplianceComponent
], styles: ['\n\n.landing-page[_ngcontent-%COMP%] {\n  --background-bg-white: var(--landing-hero-section-bg);\n  --background-bg-white-2: var(--landing-hero-section-bg);\n  --background-bg-light-gray: var(--brand-grays-500);\n  --background-bg-light-neutral: var(--brand-neutral-50);\n  --text-dark-gray: var(--brand-grays-900);\n  --text-black: var(--brand-neutral-950);\n  --text-gray: var(--brand-neutral-400);\n  --border-gray: var(--brand-neutral-200);\n  --ui-bg: var(--landing-hero-section-bg);\n  --ui-surface: var(--landing-hero-section-bg);\n  --ui-bg-surface: var(--landing-hero-section-bg);\n  --ui-text-main: var(--brand-neutral-950);\n  --ui-text-sub: var(--brand-neutral-600);\n  --ui-text-muted: var(--brand-neutral-400);\n  overflow-x: hidden;\n  background: var(--background-bg-white);\n}\n.landing-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: auto;\n  padding: var(--landing-hero-top-gap) var(--spacing-medium-lg) var(--landing-hero-bottom-gap);\n  overflow: hidden;\n  background: var(--landing-hero-section-bg);\n}\n.landing-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  background: var(--landing-hero-glow);\n  pointer-events: none;\n}\n.landing-hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  max-inline-size: var(--landing-hero-content-max-width);\n  margin: 0 auto;\n  text-align: center;\n}\n.landing-hero__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: var(--border-width-thin) solid var(--landing-hero-badge-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-hero-badge-bg);\n  box-shadow: var(--landing-hero-badge-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--landing-hero-badge-font-weight);\n  line-height: var(--typography-subtitle-line-height);\n  white-space: nowrap;\n}\n.landing-hero__title-frame[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  inline-size: min(100%, var(--landing-hero-title-max-width));\n}\n.landing-hero__title[_ngcontent-%COMP%] {\n  max-inline-size: var(--landing-hero-title-max-width);\n  margin: 0;\n  color: var(--landing-hero-title-color);\n  font-family: var(--typography-h3-font-family);\n  font-size: var(--typography-h3-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--landing-hero-title-line-height);\n  letter-spacing: var(--landing-hero-title-letter-spacing);\n  overflow-wrap: anywhere;\n}\n.landing-hero__title-highlighted[_ngcontent-%COMP%], \n.landing-hero__title-rest[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: var(--landing-hero-title-text-z-index);\n}\n.landing-hero__title-highlight-text[_ngcontent-%COMP%] {\n  display: inline;\n  padding-block: var(--spacing-small-xxxxs);\n  padding-inline: var(--spacing-medium-lg) var(--spacing-small-xxxs);\n  background-image: url(/assets/images/hero-title-highlight.svg);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  color: var(--landing-hero-title-color);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.landing-hero__description[_ngcontent-%COMP%] {\n  max-inline-size: var(--landing-hero-body-max-width);\n  margin: 0;\n  color: var(--landing-hero-description-color);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--landing-hero-body-font-weight);\n  line-height: var(--typography-body-line-height);\n}\n.landing-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--landing-hero-button-gap);\n  flex-wrap: wrap;\n}\n.landing-hero__button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--landing-hero-button-font-weight);\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n.landing-hero__button--primary[_ngcontent-%COMP%] {\n  min-inline-size: var(--landing-hero-primary-cta-min-width);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n}\n.landing-hero__button--secondary[_ngcontent-%COMP%] {\n  min-inline-size: var(--landing-hero-secondary-cta-min-width);\n  background: var(--landing-hr-highlight-bg);\n}\n.landing-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.landing-section--dashboard[_ngcontent-%COMP%] {\n  padding-block: var(--landing-dashboard-top-gap) var(--landing-dashboard-bottom-gap);\n  background: var(--landing-impact-bg);\n  overflow: visible;\n}\n.landing-section--blog[_ngcontent-%COMP%] {\n  background: var(--landing-impact-bg);\n}\n.landing-section--choosing[_ngcontent-%COMP%] {\n  background: var(--landing-impact-bg);\n}\n.landing-section--hr[_ngcontent-%COMP%], \n.landing-section--impact[_ngcontent-%COMP%] {\n  background: var(--landing-impact-bg);\n}\n.landing-section--compliance[_ngcontent-%COMP%] {\n  background: var(--landing-compliance-bg);\n}\n.landing-section--steps[_ngcontent-%COMP%] {\n  background: var(--brand-grays-500);\n}\n.dark-theme[_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%] {\n  background: var(--brand-grays-500);\n}\n.dark-theme[_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%] {\n  max-inline-size: none;\n  margin-block-start: 0;\n  padding-block-start: calc(var(--spacing-large-massive) + var(--spacing-large-xxl));\n}\n.dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::before, .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-grays-500),\n      transparent);\n}\n.dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::after, .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--brand-grays-500));\n}\n@media (prefers-color-scheme: dark) {\n  .dark-theme[_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], \n   .dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%] {\n    background: var(--brand-grays-500);\n  }\n  .dark-theme[_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .landing-why[_ngcontent-%COMP%] {\n    max-inline-size: none;\n    margin-block-start: 0;\n    padding-block-start: calc(var(--spacing-large-massive) + var(--spacing-large-xxl));\n  }\n  .dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::before, .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::before {\n    background:\n      linear-gradient(\n        180deg,\n        var(--brand-grays-500),\n        transparent);\n  }\n  .dark-theme[_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::after, .dark-theme   [_nghost-%COMP%]   .landing-testimonials[_ngcontent-%COMP%]::after {\n    background:\n      linear-gradient(\n        180deg,\n        transparent,\n        var(--brand-grays-500));\n  }\n}\n.landing-trusted[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: 0 0 var(--landing-trusted-bottom-gap);\n  background: var(--landing-impact-bg);\n  text-align: center;\n}\n.landing-trusted__title[_ngcontent-%COMP%] {\n  margin: 0;\n  max-inline-size: var(--landing-hero-title-max-width);\n  padding-inline: var(--spacing-medium-lg);\n  color: var(--text-dark-gray);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.landing-trusted__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  padding-inline: var(--spacing-medium-lg);\n  color: var(--text-gray);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--landing-hero-body-font-weight);\n  line-height: var(--typography-body-line-height);\n}\n.landing-trusted__slider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-large-huge);\n  inline-size: 100%;\n  padding: var(--spacing-medium-lg);\n  overflow: hidden;\n}\n.landing-trusted__logo[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: 176px;\n  block-size: 40px;\n}\n.landing-trusted__logo-wordmark[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block: 0;\n  inset-inline-start: 0;\n  inline-size: 97.73%;\n  block-size: 100%;\n}\n.landing-trusted__logo-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: 0;\n  inline-size: 2.84%;\n  block-size: 12.5%;\n}\n.landing-why[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  max-inline-size: 1388px;\n  margin-inline: auto;\n  margin-block-start: var(--spacing-large-massive);\n  padding-block-start: var(--spacing-large-xxl);\n  background: var(--landing-impact-bg);\n  text-align: center;\n}\n.landing-why__wavey[_ngcontent-%COMP%] {\n  display: none;\n}\n.landing-why__title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n  white-space: nowrap;\n}\n.landing-why__highlight[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--landing-navbar-surface);\n  display: inline-block;\n  white-space: nowrap;\n  padding-inline: 12px;\n}\n.landing-why__highlight[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset-block: -8px -6px;\n  inset-inline: -10px -26px;\n  background: url(/assets/images/testimonials/wavey-highlight.png) left center / 100% 100% no-repeat;\n}\n.landing-why__description[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  line-height: var(--typography-body-line-height);\n}\n.landing-testimonials[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  margin-block-start: var(--spacing-very-large-giant);\n  background: var(--landing-impact-bg);\n}\n.landing-testimonials[_ngcontent-%COMP%]::before, \n.landing-testimonials[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset-inline: 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.landing-testimonials[_ngcontent-%COMP%]::before {\n  inset-block-start: -70px;\n  block-size: 346px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--landing-impact-bg),\n      transparent);\n}\n.landing-testimonials[_ngcontent-%COMP%]::after {\n  inset-block-start: 454px;\n  block-size: 245px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--landing-impact-bg));\n}\n.landing-testimonials__column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n  inline-size: 336px;\n  block-size: 684px;\n  overflow: hidden;\n}\n.landing-testimonials__column[_ngcontent-%COMP%]   .landing-testimonials__card[_ngcontent-%COMP%]:first-child {\n  margin-block-start: -436px;\n}\n.landing-testimonials__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 39px;\n  inline-size: 336px;\n  block-size: 292px;\n  padding: var(--spacing-medium-lg);\n  border: var(--border-width-hairline) solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-30, 30px);\n  background: var(--landing-analysis-bar-light);\n  overflow: hidden;\n}\n.landing-testimonials__column--blue[_ngcontent-%COMP%]   .landing-testimonials__card[_ngcontent-%COMP%] {\n  background: var(--landing-impact-card-bg);\n}\n.landing-testimonials__card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-md);\n  inline-size: 100%;\n}\n.landing-testimonials__card-icon[_ngcontent-%COMP%] {\n  inline-size: 32px;\n  block-size: 32px;\n}\n.landing-testimonials__quote[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--body-size);\n  line-height: 1.5;\n}\n.landing-testimonials__person[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  inline-size: 100%;\n}\n.landing-testimonials__avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  flex: 0 0 auto;\n  inline-size: 42px;\n  block-size: 42px;\n  border-radius: var(--radius-full);\n  background: var(--landing-navbar-primary);\n  overflow: hidden;\n}\n.landing-testimonials__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-block-start: 3.4px;\n  inset-inline-start: 4.19px;\n  inline-size: 32.398px;\n  block-size: 37.635px;\n}\n.landing-testimonials__person-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.landing-testimonials__name[_ngcontent-%COMP%] {\n  color: var(--brand-grays-900);\n  font-size: var(--subtitle-size);\n  line-height: 1.5;\n}\n.landing-testimonials__role[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .landing-why[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .landing-testimonials__column[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .landing-hero[_ngcontent-%COMP%] {\n    padding: var(--landing-hero-top-gap) var(--landing-hero-inline-padding-mobile) var(--landing-hero-bottom-gap-mobile);\n  }\n  .landing-hero__content[_ngcontent-%COMP%] {\n    max-inline-size: 100%;\n  }\n  .landing-hero__title[_ngcontent-%COMP%] {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .landing-hero[_ngcontent-%COMP%]::after {\n    background-position: calc(50% + 37.19px) 39.39px;\n  }\n  .landing-testimonials__column[_ngcontent-%COMP%]:not(:first-child) {\n    display: none;\n  }\n  .landing-why__description[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    inline-size: var(--landing-hero-body-max-width);\n    max-inline-size: none;\n  }\n  .landing-section--dashboard[_ngcontent-%COMP%] {\n    padding-block-start: var(--landing-dashboard-top-gap-mobile);\n  }\n  .landing-trusted[_ngcontent-%COMP%] {\n    padding-inline: 0;\n  }\n  .landing-trusted__title[_ngcontent-%COMP%] {\n    max-inline-size: 347.24px;\n    padding-inline: 0;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .landing-trusted__subtitle[_ngcontent-%COMP%] {\n    max-inline-size: 321.08px;\n    padding-inline: 0;\n  }\n}\n/*# sourceMappingURL=landingcomponent.css.map */'], changeDetection: 0 });
var Landingcomponent = _Landingcomponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landingcomponent, [{
    type: Component,
    args: [{ selector: "app-landingcomponent", standalone: true, imports: [
      CommonModule,
      RouterLink,
      StepsComponent,
      BlogComponent,
      ChoosingComponent,
      AnalysisSectionComponent,
      CreatingimactComponent,
      HRsectionComponent,
      ContinouscomplianceComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="landing-page">
  <section class="landing-hero">
    <div class="landing-hero__content">
      <span class="landing-hero__badge">
        {{ languageService.translations()?.hero?.badge || 'Payroll Managment' }}
      </span>

      <div class="landing-hero__title-frame">
        <h1 class="landing-hero__title">
          <span class="landing-hero__title-highlighted">
            <span class="landing-hero__title-highlight-text">
              {{ languageService.translations()?.hero?.title1 }}
            </span>
          </span>
          <span class="landing-hero__title-rest">{{ languageService.translations()?.hero?.title2 }}</span>
        </h1>
      </div>

      <p class="landing-hero__description">
        {{ languageService.translations()?.hero?.paragraph }}
      </p>

      <div class="landing-hero__actions">
        <button
          class="landing-hero__button landing-hero__button--primary"
          (click)="scrollToFeatures()"
          [attr.aria-label]="languageService.translations()?.hero?.learnMoreAria"
        >
          {{ languageService.translations()?.nav?.getStarted || 'Learn More' }}
        </button>

        <a
          class="landing-hero__button landing-hero__button--secondary"
          routerLink="/register"
          [attr.aria-label]="languageService.translations()?.nav?.bookADemo"
        >
          {{ languageService.translations()?.nav?.bookADemo || 'Book a demo' }}
        </a>
      </div>
    </div>
  </section>

  <section id="features" class="landing-section landing-section--dashboard">
    <app-analysis-section></app-analysis-section>
  </section>

  <!-- Figma node 3:37788 \u2014 Trusted Companies -->
  <section class="landing-trusted" [attr.aria-label]="languageService.translations()?.trustedBy">
    <h2 class="landing-trusted__title">{{ languageService.translations()?.trustedBy }}</h2>
    <p class="landing-trusted__subtitle">{{ languageService.translations()?.hero?.paragraph }}</p>
    <div class="landing-trusted__slider" aria-hidden="true">
      @for(i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; track i) {
        <div class="landing-trusted__logo">
          <img class="landing-trusted__logo-wordmark" src="assets/images/analysis/trusted-logo-wordmark.svg" alt="" />
          <img class="landing-trusted__logo-mark" src="assets/images/analysis/trusted-logo-mark.svg" alt="" />
        </div>
      }
    </div>
  </section>

  <section class="landing-section landing-section--hr">
    <app-hrsection></app-hrsection>
  </section>

  <section class="landing-section landing-section--impact">
    <app-creatingimact></app-creatingimact>
  </section>

  <section class="landing-section landing-section--compliance">
    <app-continouscompliance></app-continouscompliance>
  </section>

  <!-- Figma node 3:38071 \u2014 testimonials header + 3-column card stacks -->
  <section class="landing-why">
    <img class="landing-why__wavey" src="assets/images/testimonials/wavey-header.png" alt="" aria-hidden="true" />
    <h2 class="landing-why__title">
      {{ languageService.translations()?.whyChoose?.titleHighlight }}
      <span class="landing-why__highlight">{{ languageService.translations()?.whyChoose?.titleRest }}</span>
    </h2>
    <p class="landing-why__description">
      {{ languageService.translations()?.whyChoose?.description }}
    </p>
  </section>

  <section class="landing-testimonials">
    @for (column of testimonialColumns; track $index) {
      <div class="landing-testimonials__column" [class.landing-testimonials__column--blue]="column.blue">
        @for (card of column.cards; track $index) {
          <article class="landing-testimonials__card">
            <div class="landing-testimonials__card-body">
              <img class="landing-testimonials__card-icon" src="assets/images/impact/icon-comment.svg" alt="" aria-hidden="true" />
              <p class="landing-testimonials__quote">{{ languageService.translations()?.testimonials?.quote || testimonialQuote }}</p>
            </div>
            <div class="landing-testimonials__person">
              <span class="landing-testimonials__avatar" aria-hidden="true">
                <img src="assets/images/testimonials/avatar-person.png" alt="" />
              </span>
              <div class="landing-testimonials__person-text">
                <p class="landing-testimonials__name">{{ languageService.translations()?.testimonials?.name || testimonialName }}</p>
                <p class="landing-testimonials__role">{{ languageService.translations()?.testimonials?.role || testimonialRole }}</p>
              </div>
            </div>
          </article>
        }
      </div>
    }
  </section>

  <section class="landing-section landing-section--choosing">
    <app-choosing-component></app-choosing-component>
  </section>

  <section class="landing-section landing-section--blog">
    <app-blog-component></app-blog-component>
  </section>

  <section class="landing-section landing-section--steps">
    <app-steps-component></app-steps-component>
  </section>
</div>
`, styles: ['/* src/features/landingComponents/landingcomponent/landingcomponent.css */\n.landing-page {\n  --background-bg-white: var(--landing-hero-section-bg);\n  --background-bg-white-2: var(--landing-hero-section-bg);\n  --background-bg-light-gray: var(--brand-grays-500);\n  --background-bg-light-neutral: var(--brand-neutral-50);\n  --text-dark-gray: var(--brand-grays-900);\n  --text-black: var(--brand-neutral-950);\n  --text-gray: var(--brand-neutral-400);\n  --border-gray: var(--brand-neutral-200);\n  --ui-bg: var(--landing-hero-section-bg);\n  --ui-surface: var(--landing-hero-section-bg);\n  --ui-bg-surface: var(--landing-hero-section-bg);\n  --ui-text-main: var(--brand-neutral-950);\n  --ui-text-sub: var(--brand-neutral-600);\n  --ui-text-muted: var(--brand-neutral-400);\n  overflow-x: hidden;\n  background: var(--background-bg-white);\n}\n.landing-hero {\n  position: relative;\n  min-height: auto;\n  padding: var(--landing-hero-top-gap) var(--spacing-medium-lg) var(--landing-hero-bottom-gap);\n  overflow: hidden;\n  background: var(--landing-hero-section-bg);\n}\n.landing-hero::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  background: var(--landing-hero-glow);\n  pointer-events: none;\n}\n.landing-hero__content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  max-inline-size: var(--landing-hero-content-max-width);\n  margin: 0 auto;\n  text-align: center;\n}\n.landing-hero__badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: var(--border-width-thin) solid var(--landing-hero-badge-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-hero-badge-bg);\n  box-shadow: var(--landing-hero-badge-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--landing-hero-badge-font-weight);\n  line-height: var(--typography-subtitle-line-height);\n  white-space: nowrap;\n}\n.landing-hero__title-frame {\n  display: flex;\n  justify-content: center;\n  inline-size: min(100%, var(--landing-hero-title-max-width));\n}\n.landing-hero__title {\n  max-inline-size: var(--landing-hero-title-max-width);\n  margin: 0;\n  color: var(--landing-hero-title-color);\n  font-family: var(--typography-h3-font-family);\n  font-size: var(--typography-h3-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--landing-hero-title-line-height);\n  letter-spacing: var(--landing-hero-title-letter-spacing);\n  overflow-wrap: anywhere;\n}\n.landing-hero__title-highlighted,\n.landing-hero__title-rest {\n  position: relative;\n  z-index: var(--landing-hero-title-text-z-index);\n}\n.landing-hero__title-highlight-text {\n  display: inline;\n  padding-block: var(--spacing-small-xxxxs);\n  padding-inline: var(--spacing-medium-lg) var(--spacing-small-xxxs);\n  background-image: url(/assets/images/hero-title-highlight.svg);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  color: var(--landing-hero-title-color);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.landing-hero__description {\n  max-inline-size: var(--landing-hero-body-max-width);\n  margin: 0;\n  color: var(--landing-hero-description-color);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--landing-hero-body-font-weight);\n  line-height: var(--typography-body-line-height);\n}\n.landing-hero__actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--landing-hero-button-gap);\n  flex-wrap: wrap;\n}\n.landing-hero__button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--landing-hero-button-font-weight);\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n.landing-hero__button--primary {\n  min-inline-size: var(--landing-hero-primary-cta-min-width);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n}\n.landing-hero__button--secondary {\n  min-inline-size: var(--landing-hero-secondary-cta-min-width);\n  background: var(--landing-hr-highlight-bg);\n}\n.landing-section {\n  overflow: hidden;\n}\n.landing-section--dashboard {\n  padding-block: var(--landing-dashboard-top-gap) var(--landing-dashboard-bottom-gap);\n  background: var(--landing-impact-bg);\n  overflow: visible;\n}\n.landing-section--blog {\n  background: var(--landing-impact-bg);\n}\n.landing-section--choosing {\n  background: var(--landing-impact-bg);\n}\n.landing-section--hr,\n.landing-section--impact {\n  background: var(--landing-impact-bg);\n}\n.landing-section--compliance {\n  background: var(--landing-compliance-bg);\n}\n.landing-section--steps {\n  background: var(--brand-grays-500);\n}\n:host-context(.dark-theme) .landing-why,\n:host-context(.dark-theme) .landing-testimonials {\n  background: var(--brand-grays-500);\n}\n:host-context(.dark-theme) .landing-why {\n  max-inline-size: none;\n  margin-block-start: 0;\n  padding-block-start: calc(var(--spacing-large-massive) + var(--spacing-large-xxl));\n}\n:host-context(.dark-theme) .landing-testimonials::before {\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-grays-500),\n      transparent);\n}\n:host-context(.dark-theme) .landing-testimonials::after {\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--brand-grays-500));\n}\n@media (prefers-color-scheme: dark) {\n  :host-context(.dark-theme) .landing-why,\n  :host-context(.dark-theme) .landing-testimonials {\n    background: var(--brand-grays-500);\n  }\n  :host-context(.dark-theme) .landing-why {\n    max-inline-size: none;\n    margin-block-start: 0;\n    padding-block-start: calc(var(--spacing-large-massive) + var(--spacing-large-xxl));\n  }\n  :host-context(.dark-theme) .landing-testimonials::before {\n    background:\n      linear-gradient(\n        180deg,\n        var(--brand-grays-500),\n        transparent);\n  }\n  :host-context(.dark-theme) .landing-testimonials::after {\n    background:\n      linear-gradient(\n        180deg,\n        transparent,\n        var(--brand-grays-500));\n  }\n}\n.landing-trusted {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding: 0 0 var(--landing-trusted-bottom-gap);\n  background: var(--landing-impact-bg);\n  text-align: center;\n}\n.landing-trusted__title {\n  margin: 0;\n  max-inline-size: var(--landing-hero-title-max-width);\n  padding-inline: var(--spacing-medium-lg);\n  color: var(--text-dark-gray);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.landing-trusted__subtitle {\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  padding-inline: var(--spacing-medium-lg);\n  color: var(--text-gray);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--landing-hero-body-font-weight);\n  line-height: var(--typography-body-line-height);\n}\n.landing-trusted__slider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-large-huge);\n  inline-size: 100%;\n  padding: var(--spacing-medium-lg);\n  overflow: hidden;\n}\n.landing-trusted__logo {\n  position: relative;\n  flex: 0 0 auto;\n  inline-size: 176px;\n  block-size: 40px;\n}\n.landing-trusted__logo-wordmark {\n  position: absolute;\n  inset-block: 0;\n  inset-inline-start: 0;\n  inline-size: 97.73%;\n  block-size: 100%;\n}\n.landing-trusted__logo-mark {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: 0;\n  inline-size: 2.84%;\n  block-size: 12.5%;\n}\n.landing-why {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  max-inline-size: 1388px;\n  margin-inline: auto;\n  margin-block-start: var(--spacing-large-massive);\n  padding-block-start: var(--spacing-large-xxl);\n  background: var(--landing-impact-bg);\n  text-align: center;\n}\n.landing-why__wavey {\n  display: none;\n}\n.landing-why__title {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n  white-space: nowrap;\n}\n.landing-why__highlight {\n  position: relative;\n  color: var(--landing-navbar-surface);\n  display: inline-block;\n  white-space: nowrap;\n  padding-inline: 12px;\n}\n.landing-why__highlight::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset-block: -8px -6px;\n  inset-inline: -10px -26px;\n  background: url(/assets/images/testimonials/wavey-highlight.png) left center / 100% 100% no-repeat;\n}\n.landing-why__description {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--typography-body-font-size);\n  line-height: var(--typography-body-line-height);\n}\n.landing-testimonials {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-xl);\n  margin-block-start: var(--spacing-very-large-giant);\n  background: var(--landing-impact-bg);\n}\n.landing-testimonials::before,\n.landing-testimonials::after {\n  content: "";\n  position: absolute;\n  inset-inline: 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.landing-testimonials::before {\n  inset-block-start: -70px;\n  block-size: 346px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--landing-impact-bg),\n      transparent);\n}\n.landing-testimonials::after {\n  inset-block-start: 454px;\n  block-size: 245px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--landing-impact-bg));\n}\n.landing-testimonials__column {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-xl);\n  inline-size: 336px;\n  block-size: 684px;\n  overflow: hidden;\n}\n.landing-testimonials__column .landing-testimonials__card:first-child {\n  margin-block-start: -436px;\n}\n.landing-testimonials__card {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 39px;\n  inline-size: 336px;\n  block-size: 292px;\n  padding: var(--spacing-medium-lg);\n  border: var(--border-width-hairline) solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-30, 30px);\n  background: var(--landing-analysis-bar-light);\n  overflow: hidden;\n}\n.landing-testimonials__column--blue .landing-testimonials__card {\n  background: var(--landing-impact-card-bg);\n}\n.landing-testimonials__card-body {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-medium-md);\n  inline-size: 100%;\n}\n.landing-testimonials__card-icon {\n  inline-size: 32px;\n  block-size: 32px;\n}\n.landing-testimonials__quote {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-family: var(--typography-body-font-family);\n  font-size: var(--body-size);\n  line-height: 1.5;\n}\n.landing-testimonials__person {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  inline-size: 100%;\n}\n.landing-testimonials__avatar {\n  position: relative;\n  display: block;\n  flex: 0 0 auto;\n  inline-size: 42px;\n  block-size: 42px;\n  border-radius: var(--radius-full);\n  background: var(--landing-navbar-primary);\n  overflow: hidden;\n}\n.landing-testimonials__avatar img {\n  position: absolute;\n  inset-block-start: 3.4px;\n  inset-inline-start: 4.19px;\n  inline-size: 32.398px;\n  block-size: 37.635px;\n}\n.landing-testimonials__person-text p {\n  margin: 0;\n}\n.landing-testimonials__name {\n  color: var(--brand-grays-900);\n  font-size: var(--subtitle-size);\n  line-height: 1.5;\n}\n.landing-testimonials__role {\n  color: var(--brand-neutral-400);\n  font-size: var(--caption-size);\n  line-height: 1.5;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .landing-why {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n  }\n  .landing-testimonials__column:nth-child(3) {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .landing-hero {\n    padding: var(--landing-hero-top-gap) var(--landing-hero-inline-padding-mobile) var(--landing-hero-bottom-gap-mobile);\n  }\n  .landing-hero__content {\n    max-inline-size: 100%;\n  }\n  .landing-hero__title {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .landing-hero::after {\n    background-position: calc(50% + 37.19px) 39.39px;\n  }\n  .landing-testimonials__column:not(:first-child) {\n    display: none;\n  }\n  .landing-why__description {\n    flex: 0 0 auto;\n    inline-size: var(--landing-hero-body-max-width);\n    max-inline-size: none;\n  }\n  .landing-section--dashboard {\n    padding-block-start: var(--landing-dashboard-top-gap-mobile);\n  }\n  .landing-trusted {\n    padding-inline: 0;\n  }\n  .landing-trusted__title {\n    max-inline-size: 347.24px;\n    padding-inline: 0;\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .landing-trusted__subtitle {\n    max-inline-size: 321.08px;\n    padding-inline: 0;\n  }\n}\n/*# sourceMappingURL=landingcomponent.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landingcomponent, { className: "Landingcomponent", filePath: "src/features/landingcomponents/landingcomponent/landingcomponent.ts", lineNumber: 23 });
})();

// src/features/ErrorMiddleWare/error.routes.ts
var ERROR_ROUTES = [
  {
    path: "400",
    loadComponent: () => import("./chunk-6G3OJOQG.js").then((m) => m.BadRequest400),
    title: "Bad Request (400)"
  },
  {
    path: "403",
    loadComponent: () => import("./chunk-S2NP2H3G.js").then((m) => m.Forbidden403),
    title: "Forbidden (403)"
  },
  {
    path: "404-page",
    loadComponent: () => import("./chunk-D3GIYW7N.js").then((m) => m.Error404),
    title: "Page Not Found (404)"
  },
  {
    path: "404-result",
    loadComponent: () => import("./chunk-Q5ZMBAHA.js").then((m) => m.ResultNotFound),
    title: "Result Not Found (404)"
  },
  {
    path: "500",
    loadComponent: () => import("./chunk-UD3YCCHG.js").then((m) => m.InternalServerError),
    title: "Internal Server Error (500)"
  },
  {
    path: "maintenance",
    loadComponent: () => import("./chunk-WR2BHEIR.js").then((m) => m.MaintancePage),
    title: "Maintenance Page"
  },
  {
    path: "106",
    loadComponent: () => import("./chunk-RI3MJPIZ.js").then((m) => m.NoInternetConnectionComponent),
    title: "Maintenance Page"
  }
];

// src/components/HomeLayout/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.src;
var _forTrack1 = ($index, $item) => $item.key;
function FooterComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 17);
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", segment_r1.width, "px")("height", segment_r1.height, "px");
    \u0275\u0275domProperty("src", segment_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 8);
    \u0275\u0275domElement(1, "i");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const social_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", (tmp_10_0 = ctx_r2.languageService.translations()) == null ? null : tmp_10_0.footer == null ? null : tmp_10_0.footer.social == null ? null : tmp_10_0.footer.social[social_r2.key]);
    \u0275\u0275advance();
    \u0275\u0275classMap(social_r2.icon);
  }
}
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.logoSegments = [
      { src: "assets/images/navbar/logo-1.svg", width: 23.211, height: 15.464 },
      { src: "assets/images/navbar/logo-2.svg", width: 11.6, height: 14.951 },
      { src: "assets/images/navbar/logo-3.svg", width: 23.22, height: 15.464 },
      { src: "assets/images/navbar/logo-4.svg", width: 15.503, height: 14.961 },
      { src: "assets/images/navbar/logo-5.svg", width: 13.7, height: 14.961 },
      { src: "assets/images/navbar/logo-6.svg", width: 13.838, height: 14.951 }
    ];
    this.socials = [
      { icon: "fab fa-instagram", key: "instagram" },
      { icon: "fab fa-linkedin-in", key: "linkedin" },
      { icon: "fab fa-youtube", key: "youtube" },
      { icon: "fab fa-facebook-f", key: "facebook" },
      { icon: "fab fa-x-twitter", key: "twitter" }
    ];
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 71, vars: 20, consts: [[1, "lp-footer"], [1, "lp-footer__inner"], [1, "lp-footer__grid"], [1, "lp-footer__brand"], ["aria-label", "MTWork", 1, "lp-footer__logo"], ["alt", "", 1, "lp-footer__logo-segment", 3, "src", "width", "height"], [1, "lp-footer__description"], [1, "lp-footer__social"], ["href", "#", 1, "lp-footer__social-link"], [1, "lp-footer__column"], [1, "lp-footer__heading"], [1, "lp-footer__links"], ["href", "#"], [1, "lp-footer__divider"], [1, "lp-footer__bottom"], [1, "lp-footer__copyright"], [1, "lp-footer__policies"], ["alt", "", 1, "lp-footer__logo-segment", 3, "src"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
    \u0275\u0275repeaterCreate(5, FooterComponent_For_6_Template, 1, 5, "img", 5, _forTrack02);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 7);
    \u0275\u0275repeaterCreate(10, FooterComponent_For_11_Template, 2, 3, "a", 8, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 9)(13, "h4", 10);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "ul", 11)(16, "li")(17, "a", 12);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "li")(20, "a", 12);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "li")(23, "a", 12);
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "li")(26, "a", 12);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(28, "div", 9)(29, "h4", 10);
    \u0275\u0275text(30);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "ul", 11)(32, "li")(33, "a", 12);
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(35, "li")(36, "a", 12);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "li")(39, "a", 12);
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "li")(42, "a", 12);
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(44, "div", 9)(45, "h4", 10);
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "ul", 11)(48, "li")(49, "a", 12);
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(51, "li")(52, "a", 12);
    \u0275\u0275text(53);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(54, "li")(55, "a", 12);
    \u0275\u0275text(56);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "li")(58, "a", 12);
    \u0275\u0275text(59);
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElement(60, "div", 13);
    \u0275\u0275domElementStart(61, "div", 14)(62, "p", 15);
    \u0275\u0275text(63);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "div", 16)(65, "a", 12);
    \u0275\u0275text(66);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "a", 12);
    \u0275\u0275text(68);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(69, "a", 12);
    \u0275\u0275text(70);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.logoSegments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx.languageService.translations()) == null ? null : tmp_1_0.footer == null ? null : tmp_1_0.footer.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.socials);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx.languageService.translations()) == null ? null : tmp_3_0.footer == null ? null : tmp_3_0.footer.howItWorks, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx.languageService.translations()) == null ? null : tmp_4_0.footer == null ? null : tmp_4_0.footer.hireEmployee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx.languageService.translations()) == null ? null : tmp_5_0.footer == null ? null : tmp_5_0.footer.hireContractor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx.languageService.translations()) == null ? null : tmp_6_0.footer == null ? null : tmp_6_0.footer.runPayroll);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx.languageService.translations()) == null ? null : tmp_7_0.footer == null ? null : tmp_7_0.footer.integrations);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = ctx.languageService.translations()) == null ? null : tmp_8_0.footer == null ? null : tmp_8_0.footer.solutions, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx.languageService.translations()) == null ? null : tmp_9_0.footer == null ? null : tmp_9_0.footer.hireEmployee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.languageService.translations()) == null ? null : tmp_10_0.footer == null ? null : tmp_10_0.footer.hireContractor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx.languageService.translations()) == null ? null : tmp_11_0.footer == null ? null : tmp_11_0.footer.runPayroll);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx.languageService.translations()) == null ? null : tmp_12_0.footer == null ? null : tmp_12_0.footer.integrations);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx.languageService.translations()) == null ? null : tmp_13_0.footer == null ? null : tmp_13_0.footer.resources, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_14_0 = ctx.languageService.translations()) == null ? null : tmp_14_0.footer == null ? null : tmp_14_0.footer.hireEmployee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_15_0 = ctx.languageService.translations()) == null ? null : tmp_15_0.footer == null ? null : tmp_15_0.footer.hireContractor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_16_0 = ctx.languageService.translations()) == null ? null : tmp_16_0.footer == null ? null : tmp_16_0.footer.runPayroll);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_17_0 = ctx.languageService.translations()) == null ? null : tmp_17_0.footer == null ? null : tmp_17_0.footer.integrations);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_18_0 = ctx.languageService.translations()) == null ? null : tmp_18_0.footer == null ? null : tmp_18_0.footer.allRightsReserved, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_19_0 = ctx.languageService.translations()) == null ? null : tmp_19_0.footer == null ? null : tmp_19_0.footer.privacyPolicy, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_20_0 = ctx.languageService.translations()) == null ? null : tmp_20_0.footer == null ? null : tmp_20_0.footer.cookiesPolicy, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_21_0 = ctx.languageService.translations()) == null ? null : tmp_21_0.footer == null ? null : tmp_21_0.footer.termsOfUse, " ");
  }
}, dependencies: [CommonModule], styles: ["\n\n.lp-footer[_ngcontent-%COMP%] {\n  background-color: var(--landing-footer-bg);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n}\n.lp-footer__inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  padding: var(--spacing-large-xxl) var(--spacing-medium-xl);\n  box-sizing: border-box;\n}\n.lp-footer__grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 68px;\n  align-items: flex-start;\n  inline-size: 100%;\n}\n.lp-footer__brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  flex: 0 0 auto;\n  inline-size: 310px;\n}\n.lp-footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n}\n.lp-footer__logo-segment[_ngcontent-%COMP%] {\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.lp-footer__description[_ngcontent-%COMP%] {\n  inline-size: 299px;\n  max-inline-size: 100%;\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.lp-footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 25px;\n  inline-size: 310px;\n  max-inline-size: 100%;\n}\n.lp-footer__social-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 42px;\n  block-size: 40px;\n  padding: 10px;\n  border-radius: 50px;\n  background: var(--landing-footer-social-bg);\n  color: var(--landing-navbar-surface);\n  font-size: 20px;\n  line-height: 1;\n  text-decoration: none;\n  box-sizing: border-box;\n  transition: background 0.2s;\n}\n.lp-footer__social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.lp-footer__social-link[_ngcontent-%COMP%]:hover {\n  background: rgba(153, 153, 153, 0.25);\n}\n.lp-footer__column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n  inline-size: 176px;\n  flex: 0 0 176px;\n}\n.lp-footer__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--landing-navbar-surface);\n  font-size: var(--body-size);\n  font-weight: var(--body-font-weight-bold, 700);\n  line-height: 1.5;\n}\n.lp-footer__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.lp-footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n}\n.lp-footer__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-block-size: 24px;\n  padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.lp-footer__divider[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 0.5px;\n  background: var(--landing-footer-social-bg);\n}\n.lp-footer__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  inline-size: 100%;\n}\n.lp-footer__copyright[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  line-height: 1.5;\n}\n.lp-footer__policies[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n.lp-footer__policies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  line-height: 1.5;\n  text-decoration: none;\n  white-space: nowrap;\n}\n@media (max-width: 1100px) {\n  .lp-footer__inner[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-medium-xl);\n  }\n  .lp-footer__grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 32px;\n  }\n  .lp-footer__brand[_ngcontent-%COMP%], \n   .lp-footer__column[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    flex: 1 1 auto;\n  }\n  .lp-footer__social[_ngcontent-%COMP%] {\n    inline-size: 310px;\n  }\n  .lp-footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .lp-footer__policies[_ngcontent-%COMP%] {\n    gap: 13px;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<footer class="lp-footer">\n  <div class="lp-footer__inner">\n    <div class="lp-footer__grid">\n      <div class="lp-footer__brand">\n        <span class="lp-footer__logo" aria-label="MTWork">\n          @for (segment of logoSegments; track segment.src) {\n            <img\n              class="lp-footer__logo-segment"\n              [src]="segment.src"\n              alt=""\n              [style.width.px]="segment.width"\n              [style.height.px]="segment.height"\n            />\n          }\n        </span>\n        <p class="lp-footer__description">\n          {{ languageService.translations()?.footer?.description }}\n        </p>\n        <div class="lp-footer__social">\n          @for (social of socials; track social.key) {\n            <a\n              class="lp-footer__social-link"\n              href="#"\n              [attr.aria-label]="languageService.translations()?.footer?.social?.[social.key]"\n            >\n              <i [class]="social.icon"></i>\n            </a>\n          }\n        </div>\n      </div>\n\n      <div class="lp-footer__column">\n        <h4 class="lp-footer__heading">\n          {{ languageService.translations()?.footer?.howItWorks }}\n        </h4>\n        <ul class="lp-footer__links">\n          <li><a href="#">{{ languageService.translations()?.footer?.hireEmployee }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.hireContractor }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.runPayroll }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.integrations }}</a></li>\n        </ul>\n      </div>\n\n      <div class="lp-footer__column">\n        <h4 class="lp-footer__heading">\n          {{ languageService.translations()?.footer?.solutions }}\n        </h4>\n        <ul class="lp-footer__links">\n          <li><a href="#">{{ languageService.translations()?.footer?.hireEmployee }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.hireContractor }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.runPayroll }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.integrations }}</a></li>\n        </ul>\n      </div>\n\n      <div class="lp-footer__column">\n        <h4 class="lp-footer__heading">\n          {{ languageService.translations()?.footer?.resources }}\n        </h4>\n        <ul class="lp-footer__links">\n          <li><a href="#">{{ languageService.translations()?.footer?.hireEmployee }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.hireContractor }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.runPayroll }}</a></li>\n          <li><a href="#">{{ languageService.translations()?.footer?.integrations }}</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="lp-footer__divider"></div>\n\n    <div class="lp-footer__bottom">\n      <p class="lp-footer__copyright">\n        {{ languageService.translations()?.footer?.allRightsReserved }}\n      </p>\n      <div class="lp-footer__policies">\n        <a href="#">\n          {{ languageService.translations()?.footer?.privacyPolicy }}\n        </a>\n        <a href="#">\n          {{ languageService.translations()?.footer?.cookiesPolicy }}\n        </a>\n        <a href="#">\n          {{ languageService.translations()?.footer?.termsOfUse }}\n        </a>\n      </div>\n    </div>\n  </div>\n</footer>\n', styles: ["/* src/components/HomeLayout/footer/footer.component.css */\n.lp-footer {\n  background-color: var(--landing-footer-bg);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n}\n.lp-footer__inner {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  padding: var(--spacing-large-xxl) var(--spacing-medium-xl);\n  box-sizing: border-box;\n}\n.lp-footer__grid {\n  display: flex;\n  gap: 68px;\n  align-items: flex-start;\n  inline-size: 100%;\n}\n.lp-footer__brand {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  flex: 0 0 auto;\n  inline-size: 310px;\n}\n.lp-footer__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.971px;\n  padding: 3.942px;\n}\n.lp-footer__logo-segment {\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.lp-footer__description {\n  inline-size: 299px;\n  max-inline-size: 100%;\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.lp-footer__social {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 25px;\n  inline-size: 310px;\n  max-inline-size: 100%;\n}\n.lp-footer__social-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 42px;\n  block-size: 40px;\n  padding: 10px;\n  border-radius: 50px;\n  background: var(--landing-footer-social-bg);\n  color: var(--landing-navbar-surface);\n  font-size: 20px;\n  line-height: 1;\n  text-decoration: none;\n  box-sizing: border-box;\n  transition: background 0.2s;\n}\n.lp-footer__social-link i {\n  font-size: 18px;\n  line-height: 1;\n}\n.lp-footer__social-link:hover {\n  background: rgba(153, 153, 153, 0.25);\n}\n.lp-footer__column {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-small-xs);\n  inline-size: 176px;\n  flex: 0 0 176px;\n}\n.lp-footer__heading {\n  margin: 0;\n  color: var(--landing-navbar-surface);\n  font-size: var(--body-size);\n  font-weight: var(--body-font-weight-bold, 700);\n  line-height: 1.5;\n}\n.lp-footer__links {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.lp-footer__links li {\n  display: flex;\n}\n.lp-footer__links a {\n  display: flex;\n  align-items: center;\n  min-block-size: 24px;\n  padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n  color: var(--brand-neutral-400);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.lp-footer__divider {\n  inline-size: 100%;\n  block-size: 0.5px;\n  background: var(--landing-footer-social-bg);\n}\n.lp-footer__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  inline-size: 100%;\n}\n.lp-footer__copyright {\n  margin: 0;\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  line-height: 1.5;\n}\n.lp-footer__policies {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n.lp-footer__policies a {\n  color: var(--brand-neutral-400);\n  font-size: var(--body-size);\n  line-height: 1.5;\n  text-decoration: none;\n  white-space: nowrap;\n}\n@media (max-width: 1100px) {\n  .lp-footer__inner {\n    padding-inline: var(--spacing-medium-xl);\n  }\n  .lp-footer__grid {\n    flex-direction: column;\n    gap: 32px;\n  }\n  .lp-footer__brand,\n  .lp-footer__column {\n    inline-size: 100%;\n    flex: 1 1 auto;\n  }\n  .lp-footer__social {\n    inline-size: 310px;\n  }\n  .lp-footer__bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .lp-footer__policies {\n    gap: 13px;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/components/homelayout/footer/footer.component.ts", lineNumber: 14 });
})();

// src/components/HomeLayout/navbar/navbar.component.ts
var _forTrack03 = ($index, $item) => $item.src;
var _forTrack12 = ($index, $item) => $item.route;
function NavbarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", segment_r1.width, "px")("height", segment_r1.height, "px");
    \u0275\u0275property("src", segment_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function NavbarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const link_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", link_r2.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx_r2.languageService.translations()) == null ? null : tmp_11_0.nav == null ? null : tmp_11_0.nav[link_r2.key]) || link_r2.fallback, " ");
  }
}
function NavbarComponent__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent__svg_svg_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275listener("click", function NavbarComponent_div_30_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const link_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", link_r6.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx_r2.languageService.translations()) == null ? null : tmp_12_0.nav == null ? null : tmp_12_0.nav[link_r6.key]) || link_r6.fallback, " ");
  }
}
function NavbarComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, NavbarComponent_div_30_For_2_Template, 2, 2, "a", 28, _forTrack12);
    \u0275\u0275elementStart(3, "div", 29)(4, "button", 30);
    \u0275\u0275listener("click", function NavbarComponent_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleLanguage());
    });
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275element(6, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function NavbarComponent_div_30_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTheme());
    });
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275element(11, "img", 15)(12, "img", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 32);
    \u0275\u0275listener("click", function NavbarComponent_div_30_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 33);
    \u0275\u0275listener("click", function NavbarComponent_div_30_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.navLinks);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.languageService.currentLang() === "en" ? "Arabic" : "EN");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_3_0 = ctx_r2.languageService.translations()) == null ? null : tmp_3_0.common == null ? null : tmp_3_0.common.toggleTheme);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.languageService.translations()) == null ? null : tmp_4_0.nav == null ? null : tmp_4_0.nav.login) || "Login", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r2.languageService.translations()) == null ? null : tmp_5_0.nav == null ? null : tmp_5_0.nav.bookADemo) || "Book a demo", " ");
  }
}
var _NavbarComponent = class _NavbarComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.languageService = inject(LanguageService);
    this.logoSegments = [
      { src: "assets/images/navbar/logo-1.svg", width: 23.211, height: 15.464 },
      { src: "assets/images/navbar/logo-2.svg", width: 11.6, height: 14.951 },
      { src: "assets/images/navbar/logo-3.svg", width: 23.22, height: 15.464 },
      { src: "assets/images/navbar/logo-4.svg", width: 15.503, height: 14.961 },
      { src: "assets/images/navbar/logo-5.svg", width: 13.7, height: 14.961 },
      { src: "assets/images/navbar/logo-6.svg", width: 13.838, height: 14.951 }
    ];
    this.navLinks = [
      { key: "home", fallback: "Home", route: "/Home" },
      { key: "about", fallback: "About", route: "/About" },
      { key: "services", fallback: "Service", route: "/Services" },
      { key: "blog", fallback: "Blog", route: "/Blog" },
      { key: "contact", fallback: "Contact", route: "/Contact" }
    ];
    this.isMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "isMenuOpen" }] : []);
  }
  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
};
_NavbarComponent.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarComponent)();
};
_NavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 31, vars: 11, consts: [[1, "navbar"], [1, "navbar__frame"], ["routerLink", "/", 1, "navbar__brand"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "navbar__brand-lockup"], ["alt", "", 1, "navbar__brand-segment", 3, "src", "width", "height"], [1, "navbar__desktop"], [1, "navbar__links"], [1, "navbar__link", 3, "routerLink"], [1, "navbar__actions"], ["type", "button", 1, "navbar__utility-button", "navbar__utility-button--language", 3, "click"], ["aria-hidden", "true", 1, "navbar__icon", "navbar__icon--language"], ["src", "assets/images/navbar/icon-language.svg", "alt", "", 1, "navbar__icon-layer", "navbar__icon-layer--language"], ["type", "button", 1, "navbar__utility-button", "navbar__utility-button--theme", 3, "click"], ["aria-hidden", "true", 1, "navbar__icon", "navbar__icon--theme"], ["src", "assets/images/navbar/icon-theme-inner.svg", "alt", "", 1, "navbar__icon-layer", "navbar__icon-layer--theme-inner"], ["src", "assets/images/navbar/icon-theme-outer.svg", "alt", "", 1, "navbar__icon-layer", "navbar__icon-layer--theme-outer"], [1, "navbar__cta-group"], ["routerLink", "/login", 1, "navbar__cta", "navbar__cta--login"], ["routerLink", "/register", 1, "navbar__cta", "navbar__cta--demo"], ["type", "button", "aria-controls", "navbar-mobile-panel", 1, "navbar__menu-toggle", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 4, "ngIf"], ["id", "navbar-mobile-panel", "class", "navbar__mobile-panel", 4, "ngIf"], ["alt", "", 1, "navbar__brand-segment", 3, "src"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M4 6H20M4 12H20M4 18H20"], ["d", "M6 6L18 18M18 6L6 18"], ["id", "navbar-mobile-panel", 1, "navbar__mobile-panel"], [1, "navbar__mobile-link", 3, "routerLink"], [1, "navbar__mobile-actions"], ["type", "button", 1, "navbar__mobile-utility", 3, "click"], ["type", "button", 1, "navbar__mobile-utility", "navbar__mobile-utility--theme", 3, "click"], ["routerLink", "/login", 1, "navbar__mobile-cta", "navbar__mobile-cta--login", 3, "click"], ["routerLink", "/register", 1, "navbar__mobile-cta", "navbar__mobile-cta--demo", 3, "click"], [1, "navbar__mobile-link", 3, "click", "routerLink"]], template: function NavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
    \u0275\u0275text(4, "MTWORK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275repeaterCreate(6, NavbarComponent_For_7_Template, 1, 5, "img", 5, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
    \u0275\u0275repeaterCreate(10, NavbarComponent_For_11_Template, 2, 2, "a", 8, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function NavbarComponent_Template_button_click_13_listener() {
      return ctx.toggleLanguage();
    });
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275element(15, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function NavbarComponent_Template_button_click_18_listener() {
      return ctx.toggleTheme();
    });
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275element(20, "img", 15)(21, "img", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "a", 18);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 19);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function NavbarComponent_Template_button_click_27_listener() {
      return ctx.toggleMenu();
    });
    \u0275\u0275template(28, NavbarComponent__svg_svg_28_Template, 2, 0, "svg", 21)(29, NavbarComponent__svg_svg_29_Template, 2, 0, "svg", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, NavbarComponent_div_30_Template, 17, 4, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    \u0275\u0275attribute("aria-label", (tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.common == null ? null : tmp_0_0.common.mainNavigation);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", (tmp_1_0 = ctx.languageService.translations()) == null ? null : tmp_1_0.common == null ? null : tmp_1_0.common.mtworkHome);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.logoSegments);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.navLinks);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.languageService.currentLang() === "en" ? "Arabic" : "EN");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_5_0 = ctx.languageService.translations()) == null ? null : tmp_5_0.common == null ? null : tmp_5_0.common.toggleTheme);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx.languageService.translations()) == null ? null : tmp_6_0.nav == null ? null : tmp_6_0.nav.login) || "Login", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx.languageService.translations()) == null ? null : tmp_7_0.nav == null ? null : tmp_7_0.nav.bookADemo) || "Book a demo", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx.isMenuOpen())("aria-label", (tmp_9_0 = ctx.languageService.translations()) == null ? null : tmp_9_0.common == null ? null : tmp_9_0.common.toggleNavMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isMenuOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isMenuOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isMenuOpen());
  }
}, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  background: var(--landing-hero-section-bg);\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%], \n[_nghost-%COMP%]   *[_ngcontent-%COMP%]::before, \n[_nghost-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n.navbar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: var(--landing-max-width);\n  padding: clamp(var(--spacing-medium-lg), 3.47vw, var(--landing-page-top-offset)) clamp(var(--spacing-medium-lg), 3.72vw, var(--landing-page-inline-padding)) 0;\n  font-family: var(--font-family-dm-sans);\n}\n.navbar__frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-large-xxl);\n  min-height: var(--landing-navbar-min-height);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  background: var(--landing-navbar-frame-bg);\n  border-radius: var(--radius-50);\n}\n.navbar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  text-decoration: none;\n}\n.navbar__brand-lockup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--landing-navbar-logo-gap);\n  padding: var(--landing-navbar-logo-padding);\n}\n.navbar__brand-segment[_ngcontent-%COMP%] {\n  display: block;\n  flex: 0 0 auto;\n}\n.navbar__desktop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  gap: var(--spacing-large-xxl);\n  min-width: 0;\n}\n.navbar__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-large-xxl);\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.navbar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 1 auto;\n  min-height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n  color: var(--text-gray);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: 400;\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 0 auto;\n  gap: var(--spacing-medium-md);\n}\n.navbar__utility-button[_ngcontent-%COMP%], \n.navbar__menu-toggle[_ngcontent-%COMP%], \n.navbar__mobile-utility[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  cursor: pointer;\n  font-family: inherit;\n}\n.navbar__utility-button--language[_ngcontent-%COMP%] {\n  gap: var(--spacing-small-xs);\n  height: var(--landing-navbar-control-size);\n  min-inline-size: var(--landing-navbar-language-min-width);\n  padding: var(--spacing-small-xs);\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-surface);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-ink);\n  font-family: var(--typography-caption-font-family);\n  font-size: var(--typography-caption-font-size);\n  font-weight: 400;\n  line-height: var(--typography-caption-line-height);\n  white-space: nowrap;\n}\n.navbar__utility-button--theme[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--landing-navbar-control-size);\n  flex: 0 0 var(--landing-navbar-control-size);\n  height: var(--landing-navbar-control-size);\n  padding: var(--spacing-small-xxs);\n  border-radius: var(--radius-6);\n  background: var(--landing-navbar-suger);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  overflow: hidden;\n}\n.navbar__cta-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  gap: var(--landing-navbar-button-gap);\n}\n.navbar__cta[_ngcontent-%COMP%], \n.navbar__mobile-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: 400;\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar__cta--login[_ngcontent-%COMP%] {\n  min-inline-size: var(--landing-navbar-login-min-width);\n  border: 1px solid var(--landing-navbar-primary);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n}\n.navbar__cta--demo[_ngcontent-%COMP%] {\n  min-inline-size: var(--landing-navbar-demo-min-width);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n}\n.navbar__icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: var(--landing-navbar-menu-icon-size);\n  height: var(--landing-navbar-menu-icon-size);\n}\n.navbar__icon-layer[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar__icon--language[_ngcontent-%COMP%] {\n  width: var(--landing-navbar-language-icon-size);\n  height: var(--landing-navbar-language-icon-size);\n}\n.navbar__icon--theme[_ngcontent-%COMP%] {\n  width: var(--landing-navbar-theme-icon-size);\n  height: var(--landing-navbar-theme-icon-size);\n  flex-shrink: 0;\n}\n.navbar__icon-layer--language[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.navbar__icon-layer--theme-outer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10.65%;\n  left: 10.65%;\n  width: 78.7%;\n  height: 78.7%;\n  object-fit: contain;\n}\n.navbar__icon-layer--theme-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33.33%;\n  left: 33.33%;\n  width: 33.34%;\n  height: 33.34%;\n  object-fit: contain;\n}\n.navbar__menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex: 0 0 auto;\n  width: var(--landing-navbar-menu-toggle-size);\n  height: var(--landing-navbar-menu-toggle-size);\n  padding: var(--spacing-small-xs);\n  border-radius: var(--radius-12);\n  background: var(--landing-navbar-primary);\n  color: var(--landing-navbar-surface);\n}\n.navbar__menu-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: var(--landing-navbar-menu-icon-size);\n  height: var(--landing-navbar-menu-icon-size);\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.navbar__mobile-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: var(--landing-page-top-offset) var(--landing-navbar-mobile-inline-padding) 0;\n  }\n  .navbar__desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar__frame[_ngcontent-%COMP%] {\n    padding-block: var(--spacing-medium-md);\n  }\n  .navbar__menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .navbar__mobile-panel[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-medium-md);\n    margin-top: var(--spacing-medium-md);\n    padding: var(--spacing-medium-lg) var(--landing-navbar-mobile-panel-padding) var(--landing-navbar-mobile-panel-padding);\n    background: var(--landing-navbar-mobile-panel-bg);\n    border-radius: var(--landing-navbar-mobile-radius);\n    font-family: var(--font-family-dm-sans);\n  }\n  .navbar__mobile-link[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    min-height: var(--landing-navbar-button-height);\n    padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n    color: var(--text-gray);\n    font-family: var(--typography-subtitle-font-family);\n    font-size: var(--typography-subtitle-font-size);\n    font-weight: 400;\n    line-height: var(--typography-subtitle-line-height);\n    text-decoration: none;\n  }\n  .navbar__mobile-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: var(--landing-navbar-button-gap);\n    padding-top: var(--spacing-small-xxxs);\n  }\n  .navbar__mobile-utility[_ngcontent-%COMP%] {\n    gap: var(--spacing-small-xs);\n    height: var(--landing-navbar-control-size);\n    padding: var(--spacing-small-xs) var(--spacing-medium-md);\n    border-radius: var(--radius-8);\n    background: var(--landing-navbar-surface);\n    box-shadow: var(--landing-navbar-neutral-shadow);\n    color: var(--landing-navbar-ink);\n    font-family: var(--typography-caption-font-family);\n    font-size: var(--typography-caption-font-size);\n    font-weight: 400;\n    line-height: var(--typography-caption-line-height);\n    white-space: nowrap;\n  }\n  .navbar__mobile-utility--theme[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--landing-navbar-button-height);\n    flex: 0 0 var(--landing-navbar-button-height);\n    height: var(--landing-navbar-button-height);\n    padding: 0;\n    border-radius: var(--radius-6);\n    background: var(--landing-navbar-suger);\n    color: var(--landing-navbar-surface);\n    overflow: hidden;\n  }\n  .navbar__mobile-cta--login[_ngcontent-%COMP%] {\n    border: 1px solid var(--landing-navbar-primary);\n    background: var(--landing-navbar-primary);\n    box-shadow: var(--landing-navbar-primary-shadow);\n  }\n  .navbar__mobile-cta--demo[_ngcontent-%COMP%] {\n    background: var(--landing-navbar-ink);\n    box-shadow: var(--landing-navbar-neutral-shadow);\n  }\n}\n@media (max-width: 767px) {\n  .navbar__frame[_ngcontent-%COMP%] {\n    gap: var(--spacing-medium-md);\n    padding: var(--spacing-medium-md) var(--spacing-large-xxl);\n  }\n  .navbar__mobile-panel[_ngcontent-%COMP%] {\n    padding: var(--spacing-medium-lg);\n  }\n  .navbar__mobile-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .navbar__mobile-utility--theme[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .navbar__mobile-cta[_ngcontent-%COMP%], \n   .navbar__mobile-utility[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"], changeDetection: 0 });
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<nav class="navbar" [attr.aria-label]="languageService.translations()?.common?.mainNavigation">
  <div class="navbar__frame">
    <a class="navbar__brand" routerLink="/" [attr.aria-label]="languageService.translations()?.common?.mtworkHome">
      <span class="visually-hidden">MTWORK</span>
      <span class="navbar__brand-lockup" aria-hidden="true">
        @for (segment of logoSegments; track segment.src) {
          <img
            class="navbar__brand-segment"
            [src]="segment.src"
            alt=""
            [style.width.px]="segment.width"
            [style.height.px]="segment.height"
          />
        }
      </span>
    </a>

    <div class="navbar__desktop">
      <div class="navbar__links">
        @for (link of navLinks; track link.route) {
          <a class="navbar__link" [routerLink]="link.route">
            {{ languageService.translations()?.nav?.[link.key] || link.fallback }}
          </a>
        }
      </div>

      <div class="navbar__actions">
        <button
          (click)="toggleLanguage()"
          type="button"
          class="navbar__utility-button navbar__utility-button--language"
        >
          <span class="navbar__icon navbar__icon--language" aria-hidden="true">
            <img class="navbar__icon-layer navbar__icon-layer--language" src="assets/images/navbar/icon-language.svg" alt="" />
          </span>
          <span>{{ languageService.currentLang() === 'en' ? 'Arabic' : 'EN' }}</span>
        </button>

        <button
          (click)="toggleTheme()"
          type="button"
          class="navbar__utility-button navbar__utility-button--theme"
          [attr.aria-label]="languageService.translations()?.common?.toggleTheme"
        >
          <span class="navbar__icon navbar__icon--theme" aria-hidden="true">
            <img class="navbar__icon-layer navbar__icon-layer--theme-inner" src="assets/images/navbar/icon-theme-inner.svg" alt="" />
            <img class="navbar__icon-layer navbar__icon-layer--theme-outer" src="assets/images/navbar/icon-theme-outer.svg" alt="" />
          </span>
        </button>

        <div class="navbar__cta-group">
          <a class="navbar__cta navbar__cta--login" routerLink="/login">
            {{ languageService.translations()?.nav?.login || 'Login' }}
          </a>
          <a class="navbar__cta navbar__cta--demo" routerLink="/register">
            {{ languageService.translations()?.nav?.bookADemo || 'Book a demo' }}
          </a>
        </div>
      </div>
    </div>

    <button
      (click)="toggleMenu()"
      type="button"
      class="navbar__menu-toggle"
      [attr.aria-expanded]="isMenuOpen()"
      aria-controls="navbar-mobile-panel"
      [attr.aria-label]="languageService.translations()?.common?.toggleNavMenu"
    >
      <svg *ngIf="!isMenuOpen()" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6H20M4 12H20M4 18H20" />
      </svg>
      <svg *ngIf="isMenuOpen()" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6L18 18M18 6L6 18" />
      </svg>
    </button>
  </div>

  <div *ngIf="isMenuOpen()" id="navbar-mobile-panel" class="navbar__mobile-panel">
    @for (link of navLinks; track link.route) {
      <a class="navbar__mobile-link" [routerLink]="link.route" (click)="toggleMenu()">
        {{ languageService.translations()?.nav?.[link.key] || link.fallback }}
      </a>
    }

    <div class="navbar__mobile-actions">
      <button (click)="toggleLanguage()" type="button" class="navbar__mobile-utility">
        <span class="navbar__icon navbar__icon--language" aria-hidden="true">
          <img class="navbar__icon-layer navbar__icon-layer--language" src="assets/images/navbar/icon-language.svg" alt="" />
        </span>
        <span>{{ languageService.currentLang() === 'en' ? 'Arabic' : 'EN' }}</span>
      </button>

      <button
        (click)="toggleTheme()"
        type="button"
        class="navbar__mobile-utility navbar__mobile-utility--theme"
        [attr.aria-label]="languageService.translations()?.common?.toggleTheme"
      >
        <span class="navbar__icon navbar__icon--theme" aria-hidden="true">
          <img class="navbar__icon-layer navbar__icon-layer--theme-inner" src="assets/images/navbar/icon-theme-inner.svg" alt="" />
          <img class="navbar__icon-layer navbar__icon-layer--theme-outer" src="assets/images/navbar/icon-theme-outer.svg" alt="" />
        </span>
      </button>

      <a class="navbar__mobile-cta navbar__mobile-cta--login" routerLink="/login" (click)="toggleMenu()">
        {{ languageService.translations()?.nav?.login || 'Login' }}
      </a>

      <a class="navbar__mobile-cta navbar__mobile-cta--demo" routerLink="/register" (click)="toggleMenu()">
        {{ languageService.translations()?.nav?.bookADemo || 'Book a demo' }}
      </a>
    </div>
  </div>
</nav>
`, styles: ["/* src/components/HomeLayout/navbar/navbar.component.css */\n:host {\n  display: block;\n  width: 100%;\n  background: var(--landing-hero-section-bg);\n}\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n.navbar {\n  margin: 0 auto;\n  max-width: var(--landing-max-width);\n  padding: clamp(var(--spacing-medium-lg), 3.47vw, var(--landing-page-top-offset)) clamp(var(--spacing-medium-lg), 3.72vw, var(--landing-page-inline-padding)) 0;\n  font-family: var(--font-family-dm-sans);\n}\n.navbar__frame {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-large-xxl);\n  min-height: var(--landing-navbar-min-height);\n  width: 100%;\n  padding: var(--spacing-medium-lg) var(--spacing-large-xxl);\n  background: var(--landing-navbar-frame-bg);\n  border-radius: var(--radius-50);\n}\n.navbar__brand {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  text-decoration: none;\n}\n.navbar__brand-lockup {\n  display: flex;\n  align-items: center;\n  gap: var(--landing-navbar-logo-gap);\n  padding: var(--landing-navbar-logo-padding);\n}\n.navbar__brand-segment {\n  display: block;\n  flex: 0 0 auto;\n}\n.navbar__desktop {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  gap: var(--spacing-large-xxl);\n  min-width: 0;\n}\n.navbar__links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-large-xxl);\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.navbar__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 1 auto;\n  min-height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n  color: var(--text-gray);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: 400;\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar__actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 0 auto;\n  gap: var(--spacing-medium-md);\n}\n.navbar__utility-button,\n.navbar__menu-toggle,\n.navbar__mobile-utility {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  cursor: pointer;\n  font-family: inherit;\n}\n.navbar__utility-button--language {\n  gap: var(--spacing-small-xs);\n  height: var(--landing-navbar-control-size);\n  min-inline-size: var(--landing-navbar-language-min-width);\n  padding: var(--spacing-small-xs);\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-surface);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-ink);\n  font-family: var(--typography-caption-font-family);\n  font-size: var(--typography-caption-font-size);\n  font-weight: 400;\n  line-height: var(--typography-caption-line-height);\n  white-space: nowrap;\n}\n.navbar__utility-button--theme {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--landing-navbar-control-size);\n  flex: 0 0 var(--landing-navbar-control-size);\n  height: var(--landing-navbar-control-size);\n  padding: var(--spacing-small-xxs);\n  border-radius: var(--radius-6);\n  background: var(--landing-navbar-suger);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  overflow: hidden;\n}\n.navbar__cta-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  gap: var(--landing-navbar-button-gap);\n}\n.navbar__cta,\n.navbar__mobile-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--landing-navbar-button-height);\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border-radius: var(--radius-8);\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-subtitle-font-family);\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: 400;\n  line-height: var(--typography-subtitle-line-height);\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar__cta--login {\n  min-inline-size: var(--landing-navbar-login-min-width);\n  border: 1px solid var(--landing-navbar-primary);\n  background: var(--landing-navbar-primary);\n  box-shadow: var(--landing-navbar-primary-shadow);\n}\n.navbar__cta--demo {\n  min-inline-size: var(--landing-navbar-demo-min-width);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n}\n.navbar__icon {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: var(--landing-navbar-menu-icon-size);\n  height: var(--landing-navbar-menu-icon-size);\n}\n.navbar__icon-layer {\n  display: block;\n}\n.navbar__icon--language {\n  width: var(--landing-navbar-language-icon-size);\n  height: var(--landing-navbar-language-icon-size);\n}\n.navbar__icon--theme {\n  width: var(--landing-navbar-theme-icon-size);\n  height: var(--landing-navbar-theme-icon-size);\n  flex-shrink: 0;\n}\n.navbar__icon-layer--language {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.navbar__icon-layer--theme-outer {\n  position: absolute;\n  top: 10.65%;\n  left: 10.65%;\n  width: 78.7%;\n  height: 78.7%;\n  object-fit: contain;\n}\n.navbar__icon-layer--theme-inner {\n  position: absolute;\n  top: 33.33%;\n  left: 33.33%;\n  width: 33.34%;\n  height: 33.34%;\n  object-fit: contain;\n}\n.navbar__menu-toggle {\n  display: none;\n  flex: 0 0 auto;\n  width: var(--landing-navbar-menu-toggle-size);\n  height: var(--landing-navbar-menu-toggle-size);\n  padding: var(--spacing-small-xs);\n  border-radius: var(--radius-12);\n  background: var(--landing-navbar-primary);\n  color: var(--landing-navbar-surface);\n}\n.navbar__menu-toggle svg {\n  width: var(--landing-navbar-menu-icon-size);\n  height: var(--landing-navbar-menu-icon-size);\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.navbar__mobile-panel {\n  display: none;\n}\n@media (max-width: 900px) {\n  .navbar {\n    padding: var(--landing-page-top-offset) var(--landing-navbar-mobile-inline-padding) 0;\n  }\n  .navbar__desktop {\n    display: none;\n  }\n  .navbar__frame {\n    padding-block: var(--spacing-medium-md);\n  }\n  .navbar__menu-toggle {\n    display: inline-flex;\n  }\n  .navbar__mobile-panel {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-medium-md);\n    margin-top: var(--spacing-medium-md);\n    padding: var(--spacing-medium-lg) var(--landing-navbar-mobile-panel-padding) var(--landing-navbar-mobile-panel-padding);\n    background: var(--landing-navbar-mobile-panel-bg);\n    border-radius: var(--landing-navbar-mobile-radius);\n    font-family: var(--font-family-dm-sans);\n  }\n  .navbar__mobile-link {\n    display: flex;\n    align-items: center;\n    min-height: var(--landing-navbar-button-height);\n    padding: var(--spacing-small-xs) var(--spacing-small-xxs);\n    color: var(--text-gray);\n    font-family: var(--typography-subtitle-font-family);\n    font-size: var(--typography-subtitle-font-size);\n    font-weight: 400;\n    line-height: var(--typography-subtitle-line-height);\n    text-decoration: none;\n  }\n  .navbar__mobile-actions {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: var(--landing-navbar-button-gap);\n    padding-top: var(--spacing-small-xxxs);\n  }\n  .navbar__mobile-utility {\n    gap: var(--spacing-small-xs);\n    height: var(--landing-navbar-control-size);\n    padding: var(--spacing-small-xs) var(--spacing-medium-md);\n    border-radius: var(--radius-8);\n    background: var(--landing-navbar-surface);\n    box-shadow: var(--landing-navbar-neutral-shadow);\n    color: var(--landing-navbar-ink);\n    font-family: var(--typography-caption-font-family);\n    font-size: var(--typography-caption-font-size);\n    font-weight: 400;\n    line-height: var(--typography-caption-line-height);\n    white-space: nowrap;\n  }\n  .navbar__mobile-utility--theme {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--landing-navbar-button-height);\n    flex: 0 0 var(--landing-navbar-button-height);\n    height: var(--landing-navbar-button-height);\n    padding: 0;\n    border-radius: var(--radius-6);\n    background: var(--landing-navbar-suger);\n    color: var(--landing-navbar-surface);\n    overflow: hidden;\n  }\n  .navbar__mobile-cta--login {\n    border: 1px solid var(--landing-navbar-primary);\n    background: var(--landing-navbar-primary);\n    box-shadow: var(--landing-navbar-primary-shadow);\n  }\n  .navbar__mobile-cta--demo {\n    background: var(--landing-navbar-ink);\n    box-shadow: var(--landing-navbar-neutral-shadow);\n  }\n}\n@media (max-width: 767px) {\n  .navbar__frame {\n    gap: var(--spacing-medium-md);\n    padding: var(--spacing-medium-md) var(--spacing-large-xxl);\n  }\n  .navbar__mobile-panel {\n    padding: var(--spacing-medium-lg);\n  }\n  .navbar__mobile-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .navbar__mobile-utility--theme {\n    align-self: flex-start;\n  }\n  .navbar__mobile-cta,\n  .navbar__mobile-utility {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/components/homelayout/navbar/navbar.component.ts", lineNumber: 16 });
})();

// src/components/HomeLayout/floating-actions/floating-actions.component.ts
var _FloatingActionsComponent = class _FloatingActionsComponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.whatsappLink = "#";
    this.phoneLink = "#";
    this.assistantLink = "#";
  }
};
_FloatingActionsComponent.\u0275fac = function FloatingActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatingActionsComponent)();
};
_FloatingActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloatingActionsComponent, selectors: [["app-floating-actions"]], decls: 9, vars: 6, consts: [["aria-label", "Quick contact", 1, "fab-left"], [1, "fab-btn", "fab-btn--whatsapp", 3, "href"], ["src", "assets/images/floating/whatsapp.svg", "alt", "", 1, "fab-btn__icon", "fab-btn__icon--whatsapp"], [1, "fab-btn", "fab-btn--phone", 3, "href"], ["src", "assets/images/floating/phone.svg", "alt", "", 1, "fab-btn__icon", "fab-btn__icon--phone"], ["data-node-id", "3:51872", 1, "fab-right"], ["aria-hidden", "true", 1, "fab-right__widget"], [1, "fab-right__button", 3, "href"], ["src", "assets/images/floating/chat.svg", "alt", "", 1, "fab-right__icon"]], template: function FloatingActionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "a", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "a", 3);
    \u0275\u0275domElement(4, "img", 4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 5);
    \u0275\u0275domElement(6, "span", 6);
    \u0275\u0275domElementStart(7, "a", 7);
    \u0275\u0275domElement(8, "img", 8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx.whatsappLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", ((tmp_1_0 = ctx.languageService.translations()) == null ? null : tmp_1_0.footer == null ? null : tmp_1_0.footer.social == null ? null : tmp_1_0.footer.social.whatsapp) || "WhatsApp");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", ctx.phoneLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Call");
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("href", ctx.assistantLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Open assistant");
  }
}, styles: ["\n\n.fab-left[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 900;\n  inset-block-end: 24px;\n  inset-inline-start: 38px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 48px;\n  block-size: 48px;\n  border-radius: var(--radius-30);\n  text-decoration: none;\n  cursor: pointer;\n}\n.fab-btn--whatsapp[_ngcontent-%COMP%] {\n  background: var(--landing-fab-whatsapp);\n}\n.fab-btn--phone[_ngcontent-%COMP%] {\n  background: var(--landing-navbar-suger);\n}\n.fab-btn__icon--whatsapp[_ngcontent-%COMP%] {\n  inline-size: 28px;\n  block-size: 28px;\n}\n.fab-btn__icon--phone[_ngcontent-%COMP%] {\n  inline-size: 22.854px;\n  block-size: 24.781px;\n}\n.fab-right[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 900;\n  inset-block-end: 24px;\n  inset-inline-end: 14.5px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.fab-right__widget[_ngcontent-%COMP%] {\n  inline-size: 24px;\n  block-size: 24px;\n  flex: 0 0 auto;\n  background: var(--landing-fab-whatsapp);\n  -webkit-mask: url(/assets/images/floating/chat.svg) center / contain no-repeat;\n  mask: url(/assets/images/floating/chat.svg) center / contain no-repeat;\n  display: none;\n}\n.fab-right__button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 81px;\n  block-size: 81px;\n  padding: 16px;\n  border-radius: var(--radius-full);\n  background: var(--landing-navbar-ink);\n  box-sizing: border-box;\n  text-decoration: none;\n  cursor: pointer;\n}\n.fab-right__icon[_ngcontent-%COMP%] {\n  inline-size: 47.573px;\n  block-size: 37.473px;\n}\n@media (max-width: 767px) {\n  .fab-left[_ngcontent-%COMP%] {\n    inset-inline-start: 15px;\n  }\n  .fab-right[_ngcontent-%COMP%] {\n    inset-inline-end: 0;\n  }\n}\n/*# sourceMappingURL=floating-actions.component.css.map */"], changeDetection: 0 });
var FloatingActionsComponent = _FloatingActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionsComponent, [{
    type: Component,
    args: [{ selector: "app-floating-actions", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Floating action buttons \u2014 Figma 3:65493 (calls, left) + 3:51872 (Chatbot Widget, right) -->

<!-- Left group: WhatsApp + Phone (Figma "calls" instances) -->
<div class="fab-left" aria-label="Quick contact">
  <a
    class="fab-btn fab-btn--whatsapp"
    [href]="whatsappLink"
    [attr.aria-label]="languageService.translations()?.footer?.social?.whatsapp || 'WhatsApp'"
  >
    <img class="fab-btn__icon fab-btn__icon--whatsapp" src="assets/images/floating/whatsapp.svg" alt="" />
  </a>

  <a
    class="fab-btn fab-btn--phone"
    [href]="phoneLink"
    [attr.aria-label]="'Call'"
  >
    <img class="fab-btn__icon fab-btn__icon--phone" src="assets/images/floating/phone.svg" alt="" />
  </a>
</div>

<!-- Right: Chatbot / assistant (Figma "Chatbot Widget") -->
<div class="fab-right" data-node-id="3:51872">
  <span class="fab-right__widget" aria-hidden="true"></span>
  <a
    class="fab-right__button"
    [href]="assistantLink"
    [attr.aria-label]="'Open assistant'"
  >
    <img class="fab-right__icon" src="assets/images/floating/chat.svg" alt="" />
  </a>
</div>
`, styles: ["/* src/components/HomeLayout/floating-actions/floating-actions.component.css */\n.fab-left {\n  position: fixed;\n  z-index: 900;\n  inset-block-end: 24px;\n  inset-inline-start: 38px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fab-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 48px;\n  block-size: 48px;\n  border-radius: var(--radius-30);\n  text-decoration: none;\n  cursor: pointer;\n}\n.fab-btn--whatsapp {\n  background: var(--landing-fab-whatsapp);\n}\n.fab-btn--phone {\n  background: var(--landing-navbar-suger);\n}\n.fab-btn__icon--whatsapp {\n  inline-size: 28px;\n  block-size: 28px;\n}\n.fab-btn__icon--phone {\n  inline-size: 22.854px;\n  block-size: 24.781px;\n}\n.fab-right {\n  position: fixed;\n  z-index: 900;\n  inset-block-end: 24px;\n  inset-inline-end: 14.5px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.fab-right__widget {\n  inline-size: 24px;\n  block-size: 24px;\n  flex: 0 0 auto;\n  background: var(--landing-fab-whatsapp);\n  -webkit-mask: url(/assets/images/floating/chat.svg) center / contain no-repeat;\n  mask: url(/assets/images/floating/chat.svg) center / contain no-repeat;\n  display: none;\n}\n.fab-right__button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 81px;\n  block-size: 81px;\n  padding: 16px;\n  border-radius: var(--radius-full);\n  background: var(--landing-navbar-ink);\n  box-sizing: border-box;\n  text-decoration: none;\n  cursor: pointer;\n}\n.fab-right__icon {\n  inline-size: 47.573px;\n  block-size: 37.473px;\n}\n@media (max-width: 767px) {\n  .fab-left {\n    inset-inline-start: 15px;\n  }\n  .fab-right {\n    inset-inline-end: 0;\n  }\n}\n/*# sourceMappingURL=floating-actions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatingActionsComponent, { className: "FloatingActionsComponent", filePath: "src/components/homelayout/floating-actions/floating-actions.component.ts", lineNumber: 12 });
})();

// src/components/HomeLayout/home-page/home-page.ts
var _HomePageComponent = class _HomePageComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.themeEffectCleanup = effect(() => {
      const dark = this.themeService.isDarkMode();
      document.documentElement.classList.toggle("dark-theme", dark);
    }, ...ngDevMode ? [{ debugName: "themeEffectCleanup" }] : []);
  }
  ngOnDestroy() {
    this.themeEffectCleanup.destroy?.();
  }
};
_HomePageComponent.\u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageComponent)();
};
_HomePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 0, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-white", "dark:bg-brand-neutral-950", "text-brand-neutral-900", "dark:text-brand-neutral-50"], [1, "flex-1"]], template: function HomePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-navbar");
    \u0275\u0275elementStart(2, "main", 1);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-footer")(5, "app-floating-actions");
    \u0275\u0275elementEnd();
  }
}, dependencies: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, FloatingActionsComponent, RouterModule], encapsulation: 2 });
var HomePageComponent = _HomePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, FloatingActionsComponent, RouterModule], template: '<div class="min-h-screen flex flex-col bg-white dark:bg-brand-neutral-950 text-brand-neutral-900 dark:text-brand-neutral-50">\n\n  <!-- Navbar -->\n  <app-navbar></app-navbar>\n\n  <!-- Main Content -->\n  <main class="flex-1">\n    <router-outlet></router-outlet>\n  </main>\n\n  <!-- Footer -->\n  <app-footer></app-footer>\n\n  <!-- Floating action buttons (Figma 3:65493 + 3:51872) -->\n  <app-floating-actions></app-floating-actions>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/components/homelayout/home-page/home-page.ts", lineNumber: 16 });
})();

// src/guards/role.guard.ts
var USER_TYPE_ROLE_MAP = {
  1: UserRole.Employee,
  2: UserRole.Contractor,
  3: UserRole.Business
};
var roleGuard = (route) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const authorization = inject(AuthorizationService);
  if (tokenService.isTokenExpired()) {
    authService.logout();
    return router.createUrlTree(["/login"]);
  }
  const feature = route.data?.["feature"];
  if (typeof feature === "string" && isAppFeature(feature)) {
    return authorization.hasAccess(feature) ? true : router.createUrlTree(["/dashboard"]);
  }
  const allowedRoles = route.data?.["roles"] ?? [];
  if (allowedRoles.length === 0)
    return true;
  let userRole = tokenService.getUserRole();
  if (!userRole) {
    const typeId = authService.getUserTypeId();
    if (typeId != null)
      userRole = USER_TYPE_ROLE_MAP[typeId] ?? null;
  }
  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }
  return router.createUrlTree(["/dashboard"]);
};

// src/guards/dashboard-redirect.guard.ts
var dashboardRedirectGuard = () => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  const role = tokenService.getUserRole();
  if (role === "Admin") {
    return router.createUrlTree(["/dashboard/admin"]);
  }
  if (role === "Business") {
    return router.createUrlTree(["/dashboard/business"]);
  }
  if (role === "Employee") {
    return router.createUrlTree(["/dashboard/employee"]);
  }
  if (role === "Contractor") {
    return router.createUrlTree(["/dashboard/contractor"]);
  }
  const userTypeId = authService.getUserTypeId();
  switch (userTypeId) {
    case 1:
      return router.createUrlTree(["/dashboard/employee"]);
    case 2:
      return router.createUrlTree(["/dashboard/contractor"]);
    case 3:
      return router.createUrlTree(["/dashboard/business"]);
    default:
      return router.createUrlTree(["/login"]);
  }
};

// src/guards/permission.guard.ts
var permissionGuard = (route) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const auth = inject(AuthorizationService);
  if (tokenService.isTokenExpired()) {
    authService.logout();
    return router.createUrlTree(["/login"]);
  }
  const feature = route.data?.["feature"];
  if (!feature)
    return true;
  if (auth.canAccessFeature(feature))
    return true;
  return router.createUrlTree(["/dashboard/403"]);
};

// src/components/DashboardLayout/DashboardRoutes.ts
var DashboardRoutes = [
  {
    path: "",
    canActivate: [dashboardRedirectGuard],
    loadComponent: () => import("./chunk-4WGQGORA.js").then((m) => m.BusinessDashboardComponent)
  },
  {
    path: "admin",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-EDQPPBJ5.js").then((m) => m.AdminDashboardComponent),
    title: "Admin Dashboard"
  },
  {
    path: "business",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Business, UserRole.Admin] },
    loadComponent: () => import("./chunk-4WGQGORA.js").then((m) => m.BusinessDashboardComponent),
    title: "Business Dashboard"
  },
  {
    path: "employee",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Employee] },
    loadComponent: () => import("./chunk-XFQMOY72.js").then((m) => m.EmployeeDashboardComponent),
    title: "Employee Dashboard"
  },
  {
    path: "contractor",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Contractor] },
    loadComponent: () => import("./chunk-CBONMTPV.js").then((m) => m.ContractorDashboardComponent),
    title: "Contractor Dashboard"
  },
  {
    path: "projects",
    loadComponent: () => import("./chunk-CUNS5CCF.js").then((m) => m.AllProjectsComponent),
    title: "Projects"
  },
  {
    path: "projects/:id",
    loadComponent: () => import("./chunk-NRKJ7CGL.js").then((m) => m.TichproProjectComponent),
    title: "Project Tasks"
  },
  {
    path: "teams",
    loadComponent: () => import("./chunk-FSTPI4HH.js").then((m) => m.TeamsListComponent),
    title: "Teams"
  },
  {
    // FeatureAccess.attendance → [Admin, Business, Employee]
    path: "genralattendance",
    canActivate: [roleGuard],
    data: { feature: "attendance" },
    loadComponent: () => import("./chunk-JH3AYFZ7.js").then((m) => m.GeneralAttendanceComponent),
    title: "General Attendance"
  },
  {
    // Centralised role policy lives in src/config/authorization.policy.ts
    //   FeatureAccess.contracts → [Admin, Business]
    path: "contracts",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-P3FOQZTV.js").then((m) => m.ContractListComponent),
    title: "Contracts"
  },
  {
    path: "CreateFixedSalaryContract",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-CEHYBQVG.js").then((m) => m.CreateFixedSalaryComponent),
    title: "Create Fixed Salary Contract"
  },
  {
    path: "CreatePaytaskContact",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-7X2RCCGN.js").then((m) => m.CreatePayByTaskComponent),
    title: "Create Pay By Task Contract"
  },
  {
    path: "CreateEmployeeContract",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-G7C5HPIY.js").then((m) => m.CreateEmployeeComponent),
    title: "Create Employee Contract"
  },
  {
    path: "CreateMileStoneContract",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-FY66ZCHK.js").then((m) => m.CreateMilestoneComponent),
    title: "Create Milestone Contract"
  },
  {
    path: "typecontract",
    canActivate: [roleGuard],
    data: { feature: "contracts" },
    loadComponent: () => import("./chunk-IKSEPV7S.js").then((m) => m.ChooseContractype),
    title: "Choose Contract Type"
  },
  {
    path: "typepeople",
    loadComponent: () => import("./chunk-LSYYDQKU.js").then((m) => m.ChoosePeopleType),
    title: "Choose People Type"
  },
  {
    // FeatureAccess.salary → [Employee, Business]
    path: "salary",
    canActivate: [roleGuard],
    data: { feature: "salary" },
    loadComponent: () => import("./chunk-TMFBLQ2Z.js").then((m) => m.SalaryPageComponent),
    title: "Salary"
  },
  {
    path: "payments",
    loadComponent: () => import("./chunk-T5V7TOY2.js").then((m) => m.BalanceRechargeComponent),
    title: "Payments"
  },
  {
    path: "payments/return",
    loadComponent: () => import("./chunk-VXSF2GB3.js").then((m) => m.PaymentReturnComponent),
    title: "Payment Return"
  },
  {
    path: "subscription",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Business] },
    loadComponent: () => import("./chunk-SDYNHHDY.js").then((m) => m.SubscriptionPricingComponent),
    title: "Subscription"
  },
  {
    // FeatureAccess.companyProfile → [Admin, Business]
    path: "company-profile",
    canActivate: [roleGuard],
    data: { feature: "companyProfile" },
    loadComponent: () => import("./chunk-7YU7ZWEG.js").then((m) => m.CompanyProfileComponent),
    title: "Company Profile"
  },
  {
    path: "profile",
    loadComponent: () => import("./chunk-DSUYYUTU.js").then((m) => m.UserProfileComponent),
    title: "My Profile"
  },
  {
    // FeatureAccess.withdrawals → [Employee, Business]
    path: "withdrawals",
    canActivate: [roleGuard],
    data: { feature: "withdrawals" },
    loadComponent: () => import("./chunk-5BCZD4E4.js").then((m) => m.WithdrawalsPageComponent),
    title: "Withdrawals"
  },
  {
    path: "task-management",
    loadComponent: () => import("./chunk-UZM3XFRM.js").then((m) => m.TaskManagementComponent),
    title: "Task Management"
  },
  {
    // FeatureAccess.hr → [Admin, Business]
    path: "hr",
    canActivate: [roleGuard],
    data: { feature: "hr" },
    loadComponent: () => import("./chunk-LWPEHA5W.js").then((m) => m.HrListComponent),
    title: "HR"
  },
  {
    // FeatureAccess.employees → [Business] (own-company directory, see authorization.policy.ts)
    path: "employees",
    canActivate: [roleGuard],
    data: { feature: "employees" },
    loadComponent: () => import("./chunk-KQKWFQPC.js").then((m) => m.EmployeesListComponent),
    title: "Employees"
  },
  {
    path: "meetings",
    loadComponent: () => import("./chunk-K7CBWX27.js").then((m) => m.MeetingsListComponent),
    title: "Meetings"
  },
  {
    // FeatureAccess.attendance → [Admin, Business, Employee]
    path: "attendance",
    canActivate: [roleGuard],
    data: { feature: "attendance" },
    loadComponent: () => import("./chunk-NWBT7PTM.js").then((m) => m.AttendanceDetailsComponent),
    title: "Attendance"
  },
  {
    path: "reports",
    canActivate: [permissionGuard],
    data: { feature: FeatureKey.ViewReports },
    loadComponent: () => import("./chunk-ONLTD34W.js").then((m) => m.ReportListComponent),
    title: "Reports"
  },
  {
    // FeatureAccess.requests → [Employee, Contractor, Business]
    path: "requests",
    canActivate: [roleGuard],
    data: { feature: "requests" },
    loadComponent: () => import("./chunk-2HNXRFAN.js").then((m) => m.RequestsListComponent),
    title: "Requests"
  },
  {
    path: "drafts",
    redirectTo: "/dashboard/contracts",
    pathMatch: "full"
  },
  // ── Admin-only routes ──────────────────────────────────────────
  {
    path: "users",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-VACEKYAE.js").then((m) => m.UserManagementComponent),
    title: "User Management"
  },
  {
    path: "companies",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-LBOIT62M.js").then((m) => m.CompanyManagementComponent),
    title: "Company Management"
  },
  {
    path: "settings",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-65UDSUFE.js").then((m) => m.AdminSettingsComponent),
    title: "Settings"
  },
  {
    path: "permissions",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-REGPALGJ.js").then((m) => m.PermissionsComponent),
    title: "Permissions"
  },
  {
    path: "withdraw-admin",
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () => import("./chunk-IG3VXHV2.js").then((m) => m.AdminWithdrawalsComponent),
    title: "Admin Withdrawals"
  },
  // User-facing modules (mock-only where backend is missing).
  {
    path: "messages",
    loadComponent: () => import("./chunk-KOW2CE5X.js").then((m) => m.MessagesPageComponent),
    title: "Messages"
  },
  {
    path: "notifications",
    loadComponent: () => import("./chunk-NP4LCTPN.js").then((m) => m.NotificationsPageComponent),
    title: "Notifications"
  },
  {
    // User-facing settings - distinct from admin-only `/settings` route above.
    path: "account-settings",
    loadComponent: () => import("./chunk-KVW4ZU7H.js").then((m) => m.AccountSettingsComponent),
    title: "Account Settings"
  }
];

// src/features/auth/CreateAccount/BusinessAccountRoutes.ts
var BusinessAccountRoutes = [
  {
    path: "CreateBusinessAccount",
    loadComponent: () => import("./chunk-LP2UYE7Y.js").then((m) => m.CreateAccountLayout),
    title: "CreateAccount",
    children: [
      { path: "", redirectTo: "basic-info", pathMatch: "full" },
      {
        path: "basic-info",
        loadComponent: () => import("./chunk-QHALJNMT.js").then((m) => m.BusinessBasicInfoComponent)
      },
      {
        path: "authorized",
        loadComponent: () => import("./chunk-HCIFO3KG.js").then((m) => m.BusinessAuthorizedComponent)
      },
      {
        path: "attachments",
        loadComponent: () => import("./chunk-4CBISSL4.js").then((m) => m.BusinessAttachmentComponent)
      }
    ]
  }
];

// src/features/auth/CreateAccount/CreateAccountsRoutes.ts
var CreateAccountsRoutes = [
  {
    path: "CreateContractorAccount",
    loadComponent: () => import("./chunk-LP2UYE7Y.js").then((m) => m.CreateAccountLayout),
    title: "CreateAccount",
    children: [
      { path: "", redirectTo: "basic-info", pathMatch: "full" },
      {
        path: "basic-info",
        loadComponent: () => import("./chunk-P3Q7UM36.js").then((m) => m.BasicInfoComponent)
      },
      {
        path: "edu-qual",
        loadComponent: () => import("./chunk-F7BE5GHH.js").then((m) => m.EducationEqulaificationComponent)
      },
      {
        path: "address",
        loadComponent: () => import("./chunk-6N5LMOAT.js").then((m) => m.AddressComponent)
      },
      {
        path: "attachments",
        loadComponent: () => import("./chunk-CA4N4KX6.js").then((m) => m.AttachmentComponent)
      }
    ]
  },
  // Business flow lives in its own isolated route group.
  ...BusinessAccountRoutes
];

// src/guards/auth.guard.ts
var authGuard = () => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token && !tokenService.isTokenExpired())
    return true;
  if (token)
    authService.logout();
  return router.createUrlTree(["/login"]);
};

// src/app.routes.ts
var APP_ROUTES = [
  // ── Public landing routes (with navbar + footer) ──────────────────
  {
    path: "",
    component: HomePageComponent,
    children: [
      { path: "", component: Landingcomponent, title: "MTWork Platform - Home" },
      { path: "Home", component: Landingcomponent },
      { path: "Blog", loadComponent: () => import("./chunk-BTHLI4UG.js").then((m) => m.BlogComponent) },
      { path: "Services", loadComponent: () => import("./chunk-XEBVFZ6H.js").then((m) => m.ChoosingComponent) }
    ]
  },
  // ── Auth routes (no navbar/footer) ────────────────────────────────
  { path: "login", loadComponent: () => import("./chunk-YHKEHUQO.js").then((m) => m.LoginComponent), title: "MTWork Platform" },
  { path: "admin-login", loadComponent: () => import("./chunk-CMFEFZOR.js").then((m) => m.AdminLoginComponent), title: "Admin Login" },
  { path: "forgot-password", loadComponent: () => import("./chunk-O6LQSHKT.js").then((m) => m.ForgotPasswordComponent), title: "Forgot Password" },
  { path: "otp", loadComponent: () => import("./chunk-DHUEBAYQ.js").then((m) => m.OtpComponent), title: "Verify OTP" },
  { path: "register", loadComponent: () => import("./chunk-7FLKSLAD.js").then((m) => m.RegisterComponent), title: "Create Account" },
  // ── Protected dashboard (all authenticated users) ─────────────────
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-46OPAB6F.js").then((m) => m.AuthenticatedLayoutComponent),
    title: "MTWork Platform - Dashboard",
    children: [
      ...ERROR_ROUTES,
      ...DashboardRoutes
    ]
  },
  ...CreateAccountsRoutes,
  { path: "**", redirectTo: "404-page", pathMatch: "full" }
];

// src/services/authentication-interceptor.ts
var authenticationInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  const transloco = inject(TranslocoService);
  const t = (key) => transloco.translate(key);
  const token = authService.getToken();
  if (token && tokenService.isTokenExpired()) {
    authService.logout();
    return throwError(() => new HttpErrorResponse({ status: 401, statusText: "Token Expired" }));
  }
  const language = localStorage.getItem("lang") || "en";
  const headersConfig = { lang: language };
  if (token)
    headersConfig["Authorization"] = `Bearer ${token}`;
  const authReq = req.clone({ setHeaders: headersConfig });
  return next(authReq).pipe(
    // Retry network errors (status 0) once after 2 seconds
    retry({
      count: 1,
      delay: (error) => error.status === 0 ? timer(2e3) : throwError(() => error)
    }),
    catchError((error) => {
      switch (error.status) {
        case 401:
          if (authService.getToken()) {
            if (tokenService.isTokenExpired()) {
              authService.logout();
              router.navigate(["/login"]);
            } else {
              router.navigate(["/dashboard/403"]);
            }
          }
          break;
        case 403:
          router.navigate(["/dashboard/403"]);
          break;
        case 0:
          snackBar.open(t("errors.noConnection"), t("errors.ok"), {
            duration: 6e3,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ["snack-warn"]
          });
          router.navigate(["/dashboard/106"]);
          break;
        case 429:
          snackBar.open(t("errors.tooManyReqs"), t("errors.ok"), {
            duration: 6e3,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ["snack-warn"]
          });
          break;
        case 500:
          snackBar.open(t("errors.serverError"), t("errors.ok"), {
            duration: 6e3,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ["snack-error"]
          });
          break;
      }
      return throwError(() => error);
    })
  );
};

// src/transloco-loader.ts
var _TranslocoHttpLoader = class _TranslocoHttpLoader {
  constructor() {
    this.http = inject(HttpClient);
  }
  getTranslation(lang) {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
};
_TranslocoHttpLoader.\u0275fac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslocoHttpLoader)();
};
_TranslocoHttpLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslocoHttpLoader, factory: _TranslocoHttpLoader.\u0275fac, providedIn: "root" });
var TranslocoHttpLoader = _TranslocoHttpLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoHttpLoader, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/main.ts
Chart.register(...registerables);
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES || []),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authenticationInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ["en", "ar"],
        defaultLang: "en",
        fallbackLang: "en",
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    })
  ]
}).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.18
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
