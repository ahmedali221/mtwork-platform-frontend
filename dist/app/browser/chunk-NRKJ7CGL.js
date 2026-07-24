import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  transferArrayItem
} from "./chunk-WZL4VOEZ.js";
import {
  MatCheckboxModule
} from "./chunk-TIIUSL4T.js";
import {
  MatTableModule,
  MatTabsModule
} from "./chunk-VXEIUSAH.js";
import "./chunk-S3Q32BCL.js";
import {
  MatDividerModule
} from "./chunk-RD2EO3JA.js";
import "./chunk-DSHWJW7U.js";
import {
  MatCardModule
} from "./chunk-UKZCYTB4.js";
import {
  MatPseudoCheckboxModule,
  SelectionModel
} from "./chunk-XWKVXKPV.js";
import {
  MatTooltipModule
} from "./chunk-PVDVVREM.js";
import "./chunk-HIQBHLFY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  ProjectService
} from "./chunk-WT3XXVTX.js";
import {
  TeamsService
} from "./chunk-6LK6CDX3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DWKHQJBX.js";
import {
  MatButtonModule
} from "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRippleModule,
  RippleRenderer,
  _StructuralStylesLoader
} from "./chunk-IGWDDKWL.js";
import {
  coerceBooleanProperty
} from "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import {
  _animationsDisabled
} from "./chunk-AIQ4E4TV.js";
import {
  A,
  CdkObserveContent,
  ENTER,
  FocusKeyManager,
  MatCommonModule,
  ObserversModule,
  Platform,
  SPACE,
  _CdkPrivateStyleLoader,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  hasModifierKey
} from "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  Subscription,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  forwardRef,
  inject,
  merge,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// node_modules/@angular/material/fesm2022/list.mjs
var _c0 = ["*"];
var _c1 = '.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n';
var _c2 = ["unscopedContent"];
var _c3 = ["text"];
var _c4 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
var _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
var _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
var _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "input", 12);
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mdc-checkbox--disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "input", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275element(3, "div", 20)(4, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mdc-radio--disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const checkbox_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const radio_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const icons_r5 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", icons_r5);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const checkbox_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const radio_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const icons_r5 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", icons_r5);
  }
}
var LIST_OPTION = new InjectionToken("ListOption");
var MatListItemTitle = class _MatListItemTitle {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function MatListItemTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemTitle,
    selectors: [["", "matListItemTitle", ""]],
    hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemTitle, [{
    type: Directive,
    args: [{
      selector: "[matListItemTitle]",
      host: {
        "class": "mat-mdc-list-item-title mdc-list-item__primary-text"
      }
    }]
  }], () => [], null);
})();
var MatListItemLine = class _MatListItemLine {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function MatListItemLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemLine)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemLine,
    selectors: [["", "matListItemLine", ""]],
    hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemLine, [{
    type: Directive,
    args: [{
      selector: "[matListItemLine]",
      host: {
        "class": "mat-mdc-list-item-line mdc-list-item__secondary-text"
      }
    }]
  }], () => [], null);
})();
var MatListItemMeta = class _MatListItemMeta {
  static \u0275fac = function MatListItemMeta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemMeta)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemMeta,
    selectors: [["", "matListItemMeta", ""]],
    hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemMeta, [{
    type: Directive,
    args: [{
      selector: "[matListItemMeta]",
      host: {
        "class": "mat-mdc-list-item-meta mdc-list-item__end"
      }
    }]
  }], null, null);
})();
var _MatListItemGraphicBase = class __MatListItemGraphicBase {
  _listOption = inject(LIST_OPTION, {
    optional: true
  });
  constructor() {
  }
  _isAlignedAtStart() {
    return !this._listOption || this._listOption?._getTogglePosition() === "after";
  }
  static \u0275fac = function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatListItemGraphicBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: __MatListItemGraphicBase,
    hostVars: 4,
    hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatListItemGraphicBase, [{
    type: Directive,
    args: [{
      host: {
        // MDC uses intuitively named classes `.mdc-list-item__start` and `.mat-list-item__end` to
        // position content such as icons or checkboxes/radios that comes either before or after the
        // text content respectively. This directive detects the placement of the checkbox/radio and
        // applies the correct MDC class to position the icon/avatar on the opposite side.
        "[class.mdc-list-item__start]": "_isAlignedAtStart()",
        "[class.mdc-list-item__end]": "!_isAlignedAtStart()"
      }
    }]
  }], () => [], null);
})();
var MatListItemAvatar = class _MatListItemAvatar extends _MatListItemGraphicBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItemAvatar_BaseFactory;
    return function MatListItemAvatar_Factory(__ngFactoryType__) {
      return (\u0275MatListItemAvatar_BaseFactory || (\u0275MatListItemAvatar_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItemAvatar)))(__ngFactoryType__ || _MatListItemAvatar);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemAvatar,
    selectors: [["", "matListItemAvatar", ""]],
    hostAttrs: [1, "mat-mdc-list-item-avatar"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemAvatar, [{
    type: Directive,
    args: [{
      selector: "[matListItemAvatar]",
      host: {
        "class": "mat-mdc-list-item-avatar"
      }
    }]
  }], null, null);
})();
var MatListItemIcon = class _MatListItemIcon extends _MatListItemGraphicBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItemIcon_BaseFactory;
    return function MatListItemIcon_Factory(__ngFactoryType__) {
      return (\u0275MatListItemIcon_BaseFactory || (\u0275MatListItemIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItemIcon)))(__ngFactoryType__ || _MatListItemIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemIcon,
    selectors: [["", "matListItemIcon", ""]],
    hostAttrs: [1, "mat-mdc-list-item-icon"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemIcon, [{
    type: Directive,
    args: [{
      selector: "[matListItemIcon]",
      host: {
        "class": "mat-mdc-list-item-icon"
      }
    }]
  }], null, null);
})();
var MAT_LIST_CONFIG = new InjectionToken("MAT_LIST_CONFIG");
var MatListBase = class _MatListBase {
  _isNonInteractive = true;
  /** Whether ripples for all list items is disabled. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  /**
   * Whether the entire list is disabled. When disabled, the list itself and each of its list items
   * are disabled.
   */
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _defaultOptions = inject(MAT_LIST_CONFIG, {
    optional: true
  });
  static \u0275fac = function MatListBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListBase,
    hostVars: 1,
    hostBindings: function MatListBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabled);
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListBase, [{
    type: Directive,
    args: [{
      host: {
        "[attr.aria-disabled]": "disabled"
      }
    }]
  }], null, {
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListItemBase = class _MatListItemBase {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _listBase = inject(MatListBase, {
    optional: true
  });
  _platform = inject(Platform);
  /** Host element for the list item. */
  _hostElement;
  /** indicate whether the host element is a button or not */
  _isButtonElement;
  /** Whether animations are disabled. */
  _noopAnimations = _animationsDisabled();
  _avatars;
  _icons;
  /**
   * The number of lines this list item should reserve space for. If not specified,
   * lines are inferred based on the projected content.
   *
   * Explicitly specifying the number of lines is useful if you want to acquire additional
   * space and enable the wrapping of text. The unscoped text content of a list item will
   * always be able to take up the remaining space of the item, unless it represents the title.
   *
   * A maximum of three lines is supported as per the Material Design specification.
   */
  set lines(lines) {
    this._explicitLines = coerceNumberProperty(lines, null);
    this._updateItemLines(false);
  }
  _explicitLines = null;
  /** Whether ripples for list items are disabled. */
  get disableRipple() {
    return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  /** Whether the list-item is disabled. */
  get disabled() {
    return this._disabled() || !!this._listBase?.disabled;
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _subscriptions = new Subscription();
  _rippleRenderer = null;
  /** Whether the list item has unscoped text content. */
  _hasUnscopedTextContent = false;
  /**
   * Implemented as part of `RippleTarget`.
   * @docs-private
   */
  rippleConfig;
  /**
   * Implemented as part of `RippleTarget`.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this._hostElement = this._elementRef.nativeElement;
    this._isButtonElement = this._hostElement.nodeName.toLowerCase() === "button";
    if (this._listBase && !this._listBase._isNonInteractive) {
      this._initInteractiveListItem();
    }
    if (this._isButtonElement && !this._hostElement.hasAttribute("type")) {
      this._hostElement.setAttribute("type", "button");
    }
  }
  ngAfterViewInit() {
    this._monitorProjectedLinesAndTitle();
    this._updateItemLines(true);
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    if (this._rippleRenderer !== null) {
      this._rippleRenderer._removeTriggerEvents();
    }
  }
  /** Whether the list item has icons or avatars. */
  _hasIconOrAvatar() {
    return !!(this._avatars.length || this._icons.length);
  }
  _initInteractiveListItem() {
    this._hostElement.classList.add("mat-mdc-list-item-interactive");
    this._rippleRenderer = new RippleRenderer(this, this._ngZone, this._hostElement, this._platform, inject(Injector));
    this._rippleRenderer.setupTriggerEvents(this._hostElement);
  }
  /**
   * Subscribes to changes in the projected title and lines. Triggers a
   * item lines update whenever a change occurs.
   */
  _monitorProjectedLinesAndTitle() {
    this._ngZone.runOutsideAngular(() => {
      this._subscriptions.add(merge(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
    });
  }
  /**
   * Updates the lines of the list item. Based on the projected user content and optional
   * explicit lines setting, the visual appearance of the list item is determined.
   *
   * This method should be invoked whenever the projected user content changes, or
   * when the explicit lines have been updated.
   *
   * @param recheckUnscopedContent Whether the projected unscoped content should be re-checked.
   *   The unscoped content is not re-checked for every update as it is a rather expensive check
   *   for content that is expected to not change very often.
   */
  _updateItemLines(recheckUnscopedContent) {
    if (!this._lines || !this._titles || !this._unscopedContent) {
      return;
    }
    if (recheckUnscopedContent) {
      this._checkDomForUnscopedTextContent();
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      sanityCheckListItemContent(this);
    }
    const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
    const unscopedContentEl = this._unscopedContent.nativeElement;
    this._hostElement.classList.toggle("mat-mdc-list-item-single-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-one-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-two-lines", numberOfLines === 2);
    this._hostElement.classList.toggle("mdc-list-item--with-three-lines", numberOfLines === 3);
    if (this._hasUnscopedTextContent) {
      const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
      unscopedContentEl.classList.toggle("mdc-list-item__primary-text", treatAsTitle);
      unscopedContentEl.classList.toggle("mdc-list-item__secondary-text", !treatAsTitle);
    } else {
      unscopedContentEl.classList.remove("mdc-list-item__primary-text");
      unscopedContentEl.classList.remove("mdc-list-item__secondary-text");
    }
  }
  /**
   * Infers the number of lines based on the projected user content. This is useful
   * if no explicit number of lines has been specified on the list item.
   *
   * The number of lines is inferred based on whether there is a title, the number of
   * additional lines (secondary/tertiary). An additional line is acquired if there is
   * unscoped text content.
   */
  _inferLinesFromContent() {
    let numOfLines = this._titles.length + this._lines.length;
    if (this._hasUnscopedTextContent) {
      numOfLines += 1;
    }
    return numOfLines;
  }
  /** Checks whether the list item has unscoped text content. */
  _checkDomForUnscopedTextContent() {
    this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter((node) => node.nodeType !== node.COMMENT_NODE).some((node) => !!(node.textContent && node.textContent.trim()));
  }
  static \u0275fac = function MatListItemBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListItemBase,
    contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemAvatar, 4);
        \u0275\u0275contentQuery(dirIndex, MatListItemIcon, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._avatars = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
      }
    },
    hostVars: 4,
    hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
        \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      lines: "lines",
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemBase, [{
    type: Directive,
    args: [{
      host: {
        "[class.mdc-list-item--disabled]": "disabled",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "(_isButtonElement && disabled) || null"
      }
    }]
  }], () => [], {
    _avatars: [{
      type: ContentChildren,
      args: [MatListItemAvatar, {
        descendants: false
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatListItemIcon, {
        descendants: false
      }]
    }],
    lines: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn("A list item cannot have multiple titles.");
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn("A list item line can only be used if there is a list item title.");
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn("A list item cannot have wrapping content without a title.");
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn("A list item can have at maximum three lines.");
  }
}
var MatActionList = class _MatActionList extends MatListBase {
  // An navigation list is considered interactive, but does not extend the interactive list
  // base class. We do this because as per MDC, items of interactive lists are only reachable
  // through keyboard shortcuts. We want all items for the navigation list to be reachable
  // through tab key as we do not intend to provide any special accessibility treatment. The
  // accessibility treatment depends on how the end-user will interact with it.
  _isNonInteractive = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatActionList_BaseFactory;
    return function MatActionList_Factory(__ngFactoryType__) {
      return (\u0275MatActionList_BaseFactory || (\u0275MatActionList_BaseFactory = \u0275\u0275getInheritedFactory(_MatActionList)))(__ngFactoryType__ || _MatActionList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatActionList,
    selectors: [["mat-action-list"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matActionList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatActionList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatActionList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatActionList, [{
    type: Component,
    args: [{
      selector: "mat-action-list",
      exportAs: "matActionList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-action-list mat-mdc-list-base mdc-list",
        "role": "group"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatActionList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MAT_LIST = new InjectionToken("MatList");
var MatList = class _MatList extends MatListBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatList_BaseFactory;
    return function MatList_Factory(__ngFactoryType__) {
      return (\u0275MatList_BaseFactory || (\u0275MatList_BaseFactory = \u0275\u0275getInheritedFactory(_MatList)))(__ngFactoryType__ || _MatList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatList,
    selectors: [["mat-list"]],
    hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatList, [{
    type: Component,
    args: [{
      selector: "mat-list",
      exportAs: "matList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-list mat-mdc-list-base mdc-list"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MatListItem = class _MatListItem extends MatListItemBase {
  _lines;
  _titles;
  _meta;
  _unscopedContent;
  _itemText;
  /** Indicates whether an item in a `<mat-nav-list>` is the currently active page. */
  get activated() {
    return this._activated;
  }
  set activated(activated) {
    this._activated = coerceBooleanProperty(activated);
  }
  _activated = false;
  /**
   * Determine the value of `aria-current`. Return 'page' if this item is an activated anchor tag.
   * Otherwise, return `null`. This method is safe to use with server-side rendering.
   */
  _getAriaCurrent() {
    return this._hostElement.nodeName === "A" && this._activated ? "page" : null;
  }
  _hasBothLeadingAndTrailing() {
    return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListItem_BaseFactory;
    return function MatListItem_Factory(__ngFactoryType__) {
      return (\u0275MatListItem_BaseFactory || (\u0275MatListItem_BaseFactory = \u0275\u0275getInheritedFactory(_MatListItem)))(__ngFactoryType__ || _MatListItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatListItem,
    selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
    contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemLine, 5);
        \u0275\u0275contentQuery(dirIndex, MatListItemTitle, 5);
        \u0275\u0275contentQuery(dirIndex, MatListItemMeta, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._titles = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._meta = _t);
      }
    },
    viewQuery: function MatListItem_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._unscopedContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._itemText = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
    hostVars: 13,
    hostBindings: function MatListItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx._getAriaCurrent());
        \u0275\u0275classProp("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      activated: "activated"
    },
    exportAs: ["matListItem"],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 10,
    vars: 0,
    consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]],
    template: function MatListItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementStart(4, "span", 2, 0);
        \u0275\u0275listener("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._updateItemLines(true));
        });
        \u0275\u0275projection(6, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(7, 4);
        \u0275\u0275projection(8, 5);
        \u0275\u0275element(9, "div", 3);
      }
    },
    dependencies: [CdkObserveContent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItem, [{
    type: Component,
    args: [{
      selector: "mat-list-item, a[mat-list-item], button[mat-list-item]",
      exportAs: "matListItem",
      host: {
        "class": "mat-mdc-list-item mdc-list-item",
        "[class.mdc-list-item--activated]": "activated",
        "[class.mdc-list-item--with-leading-avatar]": "_avatars.length !== 0",
        "[class.mdc-list-item--with-leading-icon]": "_icons.length !== 0",
        "[class.mdc-list-item--with-trailing-meta]": "_meta.length !== 0",
        // Utility class that makes it easier to target the case where there's both a leading
        // and a trailing icon. Avoids having to write out all the combinations.
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-current]": "_getAriaCurrent()"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkObserveContent],
      template: '<ng-content select="[matListItemAvatar],[matListItemIcon]"></ng-content>\n\n<span class="mdc-list-item__content">\n  <ng-content select="[matListItemTitle]"></ng-content>\n  <ng-content select="[matListItemLine]"></ng-content>\n  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"\n        (cdkObserveContent)="_updateItemLines(true)">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n<ng-content select="[matListItemMeta]"></ng-content>\n\n<ng-content select="mat-divider"></ng-content>\n\n<!--\n  Strong focus indicator element. MDC uses the `::before` pseudo element for the default\n  focus/hover/selected state, so we need a separate element.\n-->\n<div class="mat-focus-indicator"></div>\n'
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _meta: [{
      type: ContentChildren,
      args: [MatListItemMeta, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    _itemText: [{
      type: ViewChild,
      args: ["text"]
    }],
    activated: [{
      type: Input
    }]
  });
})();
var SELECTION_LIST = new InjectionToken("SelectionList");
var MatListOption = class _MatListOption extends MatListItemBase {
  _selectionList = inject(SELECTION_LIST);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _lines;
  _titles;
  _unscopedContent;
  /**
   * Emits when the selected state of the option has changed.
   * Use to facilitate two-data binding to the `selected` property.
   * @docs-private
   */
  selectedChange = new EventEmitter();
  /** Whether the label should appear before or after the checkbox/radio. Defaults to 'after' */
  togglePosition = "after";
  /**
   * Whether the label should appear before or after the checkbox/radio. Defaults to 'after'
   *
   * @deprecated Use `togglePosition` instead.
   * @breaking-change 17.0.0
   */
  get checkboxPosition() {
    return this.togglePosition;
  }
  set checkboxPosition(value) {
    this.togglePosition = value;
  }
  /**
   * Theme color of the list option. This sets the color of the checkbox/radio.
   * This API is supported in M2 themes only, it has no effect in M3 themes. For color customization
   * in M3, see https://material.angular.dev/components/list/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._selectionList.color;
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  /** Value of the option */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this.selected && newValue !== this.value && this._inputsInitialized) {
      this.selected = false;
    }
    this._value = newValue;
  }
  _value;
  /** Whether the option is selected. */
  get selected() {
    return this._selectionList.selectedOptions.isSelected(this);
  }
  set selected(value) {
    const isSelected = coerceBooleanProperty(value);
    if (isSelected !== this._selected) {
      this._setSelected(isSelected);
      if (isSelected || this._selectionList.multiple) {
        this._selectionList._reportValueChange();
      }
    }
  }
  _selected = false;
  /**
   * This is set to true after the first OnChanges cycle so we don't
   * clear the value of `selected` in the first cycle.
   */
  _inputsInitialized = false;
  ngOnInit() {
    const list = this._selectionList;
    if (list._value && list._value.some((value) => list.compareWith(this._value, value))) {
      this._setSelected(true);
    }
    const wasSelected = this._selected;
    Promise.resolve().then(() => {
      if (this._selected || wasSelected) {
        this.selected = true;
        this._changeDetectorRef.markForCheck();
      }
    });
    this._inputsInitialized = true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.selected) {
      Promise.resolve().then(() => {
        this.selected = false;
      });
    }
  }
  /** Toggles the selection state of the option. */
  toggle() {
    this.selected = !this.selected;
  }
  /** Allows for programmatic focusing of the option. */
  focus() {
    this._hostElement.focus();
  }
  /** Gets the text label of the list option. Used for the typeahead functionality in the list. */
  getLabel() {
    const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
    const labelEl = titleElement || this._unscopedContent?.nativeElement;
    return labelEl?.textContent || "";
  }
  /** Whether a checkbox is shown at the given position. */
  _hasCheckboxAt(position) {
    return this._selectionList.multiple && this._getTogglePosition() === position;
  }
  /** Where a radio indicator is shown at the given position. */
  _hasRadioAt(position) {
    return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
  }
  /** Whether icons or avatars are shown at the given position. */
  _hasIconsOrAvatarsAt(position) {
    return this._hasProjected("icons", position) || this._hasProjected("avatars", position);
  }
  /** Gets whether the given type of element is projected at the specified position. */
  _hasProjected(type, position) {
    return this._getTogglePosition() !== position && (type === "avatars" ? this._avatars.length !== 0 : this._icons.length !== 0);
  }
  _handleBlur() {
    this._selectionList._onTouched();
  }
  /** Gets the current position of the checkbox/radio. */
  _getTogglePosition() {
    return this.togglePosition || "after";
  }
  /**
   * Sets the selected state of the option.
   * @returns Whether the value has changed.
   */
  _setSelected(selected) {
    if (selected === this._selected) {
      return false;
    }
    this._selected = selected;
    if (selected) {
      this._selectionList.selectedOptions.select(this);
    } else {
      this._selectionList.selectedOptions.deselect(this);
    }
    this.selectedChange.emit(selected);
    this._changeDetectorRef.markForCheck();
    return true;
  }
  /**
   * Notifies Angular that the option needs to be checked in the next change detection run.
   * Mainly used to trigger an update of the list option if the disabled state of the selection
   * list changed.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the option's value based on a user interaction. */
  _toggleOnInteraction() {
    if (!this.disabled) {
      if (this._selectionList.multiple) {
        this.selected = !this.selected;
        this._selectionList._emitChangeEvent([this]);
      } else if (!this.selected) {
        this.selected = true;
        this._selectionList._emitChangeEvent([this]);
      }
    }
  }
  /** Sets the tabindex of the list option. */
  _setTabindex(value) {
    this._hostElement.setAttribute("tabindex", value + "");
  }
  _hasBothLeadingAndTrailing() {
    const hasLeading = this._hasProjected("avatars", "before") || this._hasProjected("icons", "before") || this._hasCheckboxAt("before") || this._hasRadioAt("before");
    const hasTrailing = this._hasProjected("icons", "after") || this._hasProjected("avatars", "after") || this._hasCheckboxAt("after") || this._hasRadioAt("after");
    return hasLeading && hasTrailing;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatListOption_BaseFactory;
    return function MatListOption_Factory(__ngFactoryType__) {
      return (\u0275MatListOption_BaseFactory || (\u0275MatListOption_BaseFactory = \u0275\u0275getInheritedFactory(_MatListOption)))(__ngFactoryType__ || _MatListOption);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatListOption,
    selectors: [["mat-list-option"]],
    contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListItemLine, 5);
        \u0275\u0275contentQuery(dirIndex, MatListItemTitle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._titles = _t);
      }
    },
    viewQuery: function MatListOption_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._unscopedContent = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
    hostVars: 27,
    hostBindings: function MatListOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("blur", function MatListOption_blur_HostBindingHandler() {
          return ctx._handleBlur();
        })("click", function MatListOption_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-selected", ctx.selected);
        \u0275\u0275classProp("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      togglePosition: "togglePosition",
      checkboxPosition: "checkboxPosition",
      color: "color",
      value: "value",
      selected: "selected"
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    exportAs: ["matListOption"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListItemBase,
      useExisting: _MatListOption
    }, {
      provide: LIST_OPTION,
      useExisting: _MatListOption
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 20,
    vars: 4,
    consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
    template: function MatListOption_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c6);
        \u0275\u0275template(0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5);
        \u0275\u0275conditionalCreate(8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275projection(10);
        \u0275\u0275projection(11, 1);
        \u0275\u0275elementStart(12, "span", 8, 3);
        \u0275\u0275listener("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._updateItemLines(true));
        });
        \u0275\u0275projection(14, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9);
        \u0275\u0275conditionalCreate(17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
        \u0275\u0275projection(18, 3);
        \u0275\u0275element(19, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, CdkObserveContent],
    styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-list-option .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListOption, [{
    type: Component,
    args: [{
      selector: "mat-list-option",
      exportAs: "matListOption",
      host: {
        "class": "mat-mdc-list-item mat-mdc-list-option mdc-list-item",
        "role": "option",
        // As per MDC, only list items without checkbox or radio indicator should receive the
        // `--selected` class.
        "[class.mdc-list-item--selected]": "selected && !_selectionList.multiple && _selectionList.hideSingleSelectionIndicator",
        // Based on the checkbox/radio position and whether there are icons or avatars, we apply MDC's
        // list-item `--leading` and `--trailing` classes.
        "[class.mdc-list-item--with-leading-avatar]": '_hasProjected("avatars", "before")',
        "[class.mdc-list-item--with-leading-icon]": '_hasProjected("icons", "before")',
        "[class.mdc-list-item--with-trailing-icon]": '_hasProjected("icons", "after")',
        "[class.mat-mdc-list-option-with-trailing-avatar]": '_hasProjected("avatars", "after")',
        // Based on the checkbox/radio position, we apply the `--leading` or `--trailing` MDC classes
        // which ensure that the checkbox/radio is positioned correctly within the list item.
        "[class.mdc-list-item--with-leading-checkbox]": '_hasCheckboxAt("before")',
        "[class.mdc-list-item--with-trailing-checkbox]": '_hasCheckboxAt("after")',
        "[class.mdc-list-item--with-leading-radio]": '_hasRadioAt("before")',
        "[class.mdc-list-item--with-trailing-radio]": '_hasRadioAt("after")',
        // Utility class that makes it easier to target the case where there's both a leading
        // and a trailing icon. Avoids having to write out all the combinations.
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class.mat-accent]": 'color !== "primary" && color !== "warn"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-selected]": "selected",
        "(blur)": "_handleBlur()",
        "(click)": "_toggleOnInteraction()"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListItemBase,
        useExisting: MatListOption
      }, {
        provide: LIST_OPTION,
        useExisting: MatListOption
      }],
      imports: [NgTemplateOutlet, CdkObserveContent],
      template: `<!--
  Save icons and the pseudo checkbox/radio so that they can be re-used in the template without
  duplication. Also content can only be injected once so we need to extract icons/avatars
  into a template since we use it in multiple places.
-->
<ng-template #icons>
  <ng-content select="[matListItemAvatar],[matListItemIcon]">
  </ng-content>
</ng-template>

<ng-template #checkbox>
  <div class="mdc-checkbox" [class.mdc-checkbox--disabled]="disabled">
    <input type="checkbox" class="mdc-checkbox__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</ng-template>

<ng-template #radio>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <input type="radio" class="mdc-radio__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
</ng-template>

@if (_hasCheckboxAt('before')) {
  <!-- Container for the checkbox at start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-checkbox-before">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('before')) {
  <!-- Container for the radio at the start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-radio-before">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}
<!-- Conditionally renders icons/avatars before the list item text. -->
@if (_hasIconsOrAvatarsAt('before')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Text -->
<span class="mdc-list-item__content">
  <ng-content select="[matListItemTitle]"></ng-content>
  <ng-content select="[matListItemLine]"></ng-content>
  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"
        (cdkObserveContent)="_updateItemLines(true)">
    <ng-content></ng-content>
  </span>
</span>

@if (_hasCheckboxAt('after')) {
  <!-- Container for the checkbox at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('after')) {
  <!-- Container for the radio at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}

<!-- Conditionally renders icons/avatars after the list item text. -->
@if (_hasIconsOrAvatarsAt('after')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Divider -->
<ng-content select="mat-divider"></ng-content>

<!--
  Strong focus indicator element. MDC uses the \`::before\` pseudo element for the default
  focus/hover/selected state, so we need a separate element.
-->
<div class="mat-focus-indicator"></div>
`,
      styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-list-option .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n']
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    selectedChange: [{
      type: Output
    }],
    togglePosition: [{
      type: Input
    }],
    checkboxPosition: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var MatListSubheaderCssMatStyler = class _MatListSubheaderCssMatStyler {
  static \u0275fac = function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListSubheaderCssMatStyler)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatListSubheaderCssMatStyler,
    selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
    hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListSubheaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-subheader], [matSubheader]",
      // TODO(mmalerba): MDC's subheader font looks identical to the list item font, figure out why and
      //  make a change in one of the repos to visually distinguish.
      host: {
        "class": "mat-mdc-subheader mdc-list-group__subheader"
      }
    }]
  }], null, null);
})();
var MAT_NAV_LIST = new InjectionToken("MatNavList");
var MatNavList = class _MatNavList extends MatListBase {
  // An navigation list is considered interactive, but does not extend the interactive list
  // base class. We do this because as per MDC, items of interactive lists are only reachable
  // through keyboard shortcuts. We want all items for the navigation list to be reachable
  // through tab key as we do not intend to provide any special accessibility treatment. The
  // accessibility treatment depends on how the end-user will interact with it.
  _isNonInteractive = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatNavList_BaseFactory;
    return function MatNavList_Factory(__ngFactoryType__) {
      return (\u0275MatNavList_BaseFactory || (\u0275MatNavList_BaseFactory = \u0275\u0275getInheritedFactory(_MatNavList)))(__ngFactoryType__ || _MatNavList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatNavList,
    selectors: [["mat-nav-list"]],
    hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matNavList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatNavList
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatNavList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNavList, [{
    type: Component,
    args: [{
      selector: "mat-nav-list",
      exportAs: "matNavList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-nav-list mat-mdc-list-base mdc-list",
        "role": "navigation"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatNavList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSelectionList),
  multi: true
};
var MatSelectionListChange = class {
  source;
  options;
  constructor(source, options) {
    this.source = source;
    this.options = options;
  }
};
var MatSelectionList = class _MatSelectionList extends MatListBase {
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _initialized = false;
  _keyManager;
  _listenerCleanups;
  /** Emits when the list has been destroyed. */
  _destroyed = new Subject();
  /** Whether the list has been destroyed. */
  _isDestroyed;
  /** View to model callback that should be called whenever the selected options change. */
  _onChange = (_) => {
  };
  _items;
  /** Emits a change event whenever the selected state of an option changes. */
  selectionChange = new EventEmitter();
  /**
   * Theme color of the selection list. This sets the checkbox color for all
   * list options. This API is supported in M2 themes only, it has no effect in
   * M3 themes. For color customization in M3, see https://material.angular.dev/components/list/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color = "accent";
  /**
   * Function used for comparing an option against the selected value when determining which
   * options should appear as selected. The first argument is the value of an options. The second
   * one is a value from the selected value. A boolean must be returned.
   */
  compareWith = (a1, a2) => a1 === a2;
  /** Whether selection is limited to one or multiple items (default multiple). */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._multiple) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && this._initialized) {
        throw new Error("Cannot change `multiple` mode of mat-selection-list after initialization.");
      }
      this._multiple = newValue;
      this.selectedOptions = new SelectionModel(this._multiple, this.selectedOptions.selected);
    }
  }
  _multiple = true;
  /** Whether radio indicator for all list items is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = coerceBooleanProperty(value);
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  /** The currently selected options. */
  selectedOptions = new SelectionModel(this._multiple);
  /** Keeps track of the currently-selected value. */
  _value;
  /** View to model callback that should be called if the list or its options lost focus. */
  _onTouched = () => {
  };
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    super();
    this._isNonInteractive = false;
  }
  ngAfterViewInit() {
    this._initialized = true;
    this._setupRovingTabindex();
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, "focusin", this._handleFocusin), this._renderer.listen(this._element.nativeElement, "focusout", this._handleFocusout)];
    });
    if (this._value) {
      this._setOptionsFromValues(this._value);
    }
    this._watchForSelectionChange();
  }
  ngOnChanges(changes) {
    const disabledChanges = changes["disabled"];
    const disableRippleChanges = changes["disableRipple"];
    const hideSingleSelectionIndicatorChanges = changes["hideSingleSelectionIndicator"];
    if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
      this._markOptionsForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._listenerCleanups?.forEach((current) => current());
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
  }
  /** Focuses the selection list. */
  focus(options) {
    this._element.nativeElement.focus(options);
  }
  /** Selects all of the options. Returns the options that changed as a result. */
  selectAll() {
    return this._setAllOptionsSelected(true);
  }
  /** Deselects all of the options. Returns the options that changed as a result. */
  deselectAll() {
    return this._setAllOptionsSelected(false);
  }
  /** Reports a value change to the ControlValueAccessor */
  _reportValueChange() {
    if (this.options && !this._isDestroyed) {
      const value = this._getSelectedOptionValues();
      this._onChange(value);
      this._value = value;
    }
  }
  /** Emits a change event if the selected state of an option changed. */
  _emitChangeEvent(options) {
    this.selectionChange.emit(new MatSelectionListChange(this, options));
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(values) {
    this._value = values;
    if (this.options) {
      this._setOptionsFromValues(values || []);
    }
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this._markOptionsForCheck();
  }
  /**
   * Whether the *entire* selection list is disabled. When true, each list item is also disabled
   * and each list item is removed from the tab order (has tabindex="-1").
   */
  get disabled() {
    return this._selectionListDisabled();
  }
  set disabled(value) {
    this._selectionListDisabled.set(coerceBooleanProperty(value));
    if (this._selectionListDisabled()) {
      this._keyManager?.setActiveItem(-1);
    }
  }
  _selectionListDisabled = signal(false, ...ngDevMode ? [{
    debugName: "_selectionListDisabled"
  }] : []);
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Watches for changes in the selected state of the options and updates the list accordingly. */
  _watchForSelectionChange() {
    this.selectedOptions.changed.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      for (let item of event.added) {
        item.selected = true;
      }
      for (let item of event.removed) {
        item.selected = false;
      }
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  }
  /** Sets the selected options based on the specified values. */
  _setOptionsFromValues(values) {
    this.options.forEach((option) => option._setSelected(false));
    values.forEach((value) => {
      const correspondingOption = this.options.find((option) => {
        return option.selected ? false : this.compareWith(option.value, value);
      });
      if (correspondingOption) {
        correspondingOption._setSelected(true);
      }
    });
  }
  /** Returns the values of the selected options. */
  _getSelectedOptionValues() {
    return this.options.filter((option) => option.selected).map((option) => option.value);
  }
  /** Marks all the options to be checked in the next change detection run. */
  _markOptionsForCheck() {
    if (this.options) {
      this.options.forEach((option) => option._markForCheck());
    }
  }
  /**
   * Sets the selected state on all of the options
   * and emits an event if anything changed.
   */
  _setAllOptionsSelected(isSelected, skipDisabled) {
    const changedOptions = [];
    this.options.forEach((option) => {
      if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
        changedOptions.push(option);
      }
    });
    if (changedOptions.length) {
      this._reportValueChange();
    }
    return changedOptions;
  }
  // Note: This getter exists for backwards compatibility. The `_items` query list
  // cannot be named `options` as it will be picked up by the interactive list base.
  /** The option components contained within this selection-list. */
  get options() {
    return this._items;
  }
  /** Handles keydown events within the list. */
  _handleKeydown(event) {
    const activeItem = this._keyManager.activeItem;
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
      event.preventDefault();
      activeItem._toggleOnInteraction();
    } else if (event.keyCode === A && this.multiple && !this._keyManager.isTyping() && hasModifierKey(event, "ctrlKey", "metaKey")) {
      const shouldSelect = this.options.some((option) => !option.disabled && !option.selected);
      event.preventDefault();
      this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
    } else {
      this._keyManager.onKeydown(event);
    }
  }
  /** Handles focusout events within the list. */
  _handleFocusout = () => {
    setTimeout(() => {
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  };
  /** Handles focusin events within the list. */
  _handleFocusin = (event) => {
    if (this.disabled) {
      return;
    }
    const activeIndex = this._items.toArray().findIndex((item) => item._elementRef.nativeElement.contains(event.target));
    if (activeIndex > -1) {
      this._setActiveOption(activeIndex);
    } else {
      this._resetActiveOption();
    }
  };
  /**
   * Sets up the logic for maintaining the roving tabindex.
   *
   * `skipPredicate` determines if key manager should avoid putting a given list item in the tab
   * index. Allow disabled list items to receive focus to align with WAI ARIA recommendation.
   * Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
   * makes a few exceptions for compound widgets.
   *
   * From [Developing a Keyboard Interface](
   * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
   *   "For the following composite widget elements, keep them focusable when disabled: Options in a
   *   Listbox..."
   */
  _setupRovingTabindex() {
    this._keyManager = new FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
    this._resetActiveOption();
    this._keyManager.change.subscribe((activeItemIndex) => this._setActiveOption(activeItemIndex));
    this._items.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const activeItem = this._keyManager.activeItem;
      if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
        this._resetActiveOption();
      }
    });
  }
  /**
   * Sets an option as active.
   * @param index Index of the active option. If set to -1, no option will be active.
   */
  _setActiveOption(index) {
    this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
    this._keyManager.updateActiveItem(index);
  }
  /**
   * Resets the active option. When the list is disabled, remove all options from to the tab order.
   * Otherwise, focus the first selected option.
   */
  _resetActiveOption() {
    if (this.disabled) {
      this._setActiveOption(-1);
      return;
    }
    const activeItem = this._items.find((item) => item.selected && !item.disabled) || this._items.first;
    this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
  }
  /** Returns whether the focus is currently within the list. */
  _containsFocus() {
    const activeElement = _getFocusedElementPierceShadowDom();
    return activeElement && this._element.nativeElement.contains(activeElement);
  }
  static \u0275fac = function MatSelectionList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectionList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelectionList,
    selectors: [["mat-selection-list"]],
    contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatListOption, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
    hostVars: 1,
    hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-multiselectable", ctx.multiple);
      }
    },
    inputs: {
      color: "color",
      compareWith: "compareWith",
      multiple: "multiple",
      hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
      disabled: "disabled"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["matSelectionList"],
    features: [\u0275\u0275ProvidersFeature([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
      provide: MatListBase,
      useExisting: _MatSelectionList
    }, {
      provide: SELECTION_LIST,
      useExisting: _MatSelectionList
    }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSelectionList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectionList, [{
    type: Component,
    args: [{
      selector: "mat-selection-list",
      exportAs: "matSelectionList",
      host: {
        "class": "mat-mdc-selection-list mat-mdc-list-base mdc-list",
        "role": "listbox",
        "[attr.aria-multiselectable]": "multiple",
        "(keydown)": "_handleKeydown($event)"
      },
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR, {
        provide: MatListBase,
        useExisting: MatSelectionList
      }, {
        provide: SELECTION_LIST,
        useExisting: MatSelectionList
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], () => [], {
    _items: [{
      type: ContentChildren,
      args: [MatListOption, {
        descendants: true
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    color: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    hideSingleSelectionIndicator: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListModule = class _MatListModule {
  static \u0275fac = function MatListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatListModule,
    imports: [ObserversModule, MatCommonModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
    exports: [MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule, MatCommonModule, MatRippleModule, MatPseudoCheckboxModule, MatDividerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatCommonModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
      exports: [MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
    }]
  }], null, null);
})();

// src/components/DashboardLayout/Projects/tichpro-project-component/tichpro-project-component.ts
var _forTrack0 = ($index, $item) => $item.status;
var _forTrack1 = ($index, $item) => $item.id;
function TichproProjectComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275text(2, " Loading tasks... ");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "h3", 28);
    \u0275\u0275text(3, "No tasks yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 29);
    \u0275\u0275text(5, "Create your first task to start tracking work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function TichproProjectComponent_div_56_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = true);
    });
    \u0275\u0275elementStart(7, "span", 30);
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " New Task ");
    \u0275\u0275elementEnd()();
  }
}
function TichproProjectComponent_div_57_tr_32_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.category.title, " ");
  }
}
function TichproProjectComponent_div_57_tr_32_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_57_tr_32_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.assignee.name.substring(0, 2).toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.assignee.name, " ");
  }
}
function TichproProjectComponent_div_57_tr_32_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_57_tr_32_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.reporter.name.substring(0, 2).toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.reporter.name, " ");
  }
}
function TichproProjectComponent_div_57_tr_32_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_57_tr_32_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_57_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 50);
    \u0275\u0275listener("change", function TichproProjectComponent_div_57_tr_32_Template_input_change_4_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r5.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, TichproProjectComponent_div_57_tr_32_span_10_Template, 2, 1, "span", 53)(11, TichproProjectComponent_div_57_tr_32_span_11_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, TichproProjectComponent_div_57_tr_32_div_13_Template, 4, 2, "div", 55)(14, TichproProjectComponent_div_57_tr_32_span_14_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 57)(19, "span", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 59);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275template(27, TichproProjectComponent_div_57_tr_32_div_27_Template, 4, 2, "div", 60)(28, TichproProjectComponent_div_57_tr_32_span_28_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "span", 61);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275template(33, TichproProjectComponent_div_57_tr_32_span_33_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 62)(35, "button", 63);
    \u0275\u0275listener("click", function TichproProjectComponent_div_57_tr_32_Template_button_click_35_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTaskInline(task_r5));
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 64);
    \u0275\u0275listener("click", function TichproProjectComponent_div_57_tr_32_Template_button_click_38_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r5));
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedTasks.has(task_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "task-checkbox-" + task_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Select task ", task_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("id", "task-checkbox-" + task_r5.id)("checked", ctx_r1.selectedTasks.has(task_r5.id));
    \u0275\u0275attribute("aria-label", "Select task " + task_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r5.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !task_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r5.assignee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !task_r5.assignee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(task_r5.dueDate));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-priority", ctx_r1.getPriorityKey(task_r5.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPriorityIcon(task_r5.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityDisplay(task_r5.priority), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(task_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(task_r5.updatedAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r5.reporter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !task_r5.reporter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(task_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTaskStatusDisplay(task_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r5.projectId);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit task " + task_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete task " + task_r5.title);
  }
}
function TichproProjectComponent_div_57_div_33_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r7 = ctx.$implicit;
    \u0275\u0275property("value", emp_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emp_r7.name);
  }
}
function TichproProjectComponent_div_57_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "input", 71);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_57_div_33_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskName, $event) || (ctx_r1.newTaskName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function TichproProjectComponent_div_57_div_33_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    })("keyup.escape", function TichproProjectComponent_div_57_div_33_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 72);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_57_div_33_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskAssigneeId, $event) || (ctx_r1.newTaskAssigneeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 73);
    \u0275\u0275text(6, "\u{1F464} Assignee");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TichproProjectComponent_div_57_div_33_option_7_Template, 2, 2, "option", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 75);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_57_div_33_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskDueDate, $event) || (ctx_r1.newTaskDueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 72);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_57_div_33_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskPriority, $event) || (ctx_r1.newTaskPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 76);
    \u0275\u0275text(13, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 77);
    \u0275\u0275text(15, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 78);
    \u0275\u0275text(17, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 79);
    \u0275\u0275text(19, "Urgent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 80);
    \u0275\u0275listener("click", function TichproProjectComponent_div_57_div_33_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 81);
    \u0275\u0275listener("click", function TichproProjectComponent_div_57_div_33_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 11, "projects.details.newTaskName"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskAssigneeId);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 13, "common.assignee"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.employees);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskDueDate);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 15, "common.dueDate"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskPriority);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 17, "common.priority"));
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isSavingTask);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingTask ? "Saving\u2026" : "Create", " ");
  }
}
function TichproProjectComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr")(4, "th", 33)(5, "input", 34);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("change", function TichproProjectComponent_div_57_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAllTasks());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 35);
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 36);
    \u0275\u0275text(10, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 37);
    \u0275\u0275text(12, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14, "Assignee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 39);
    \u0275\u0275text(16, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 40);
    \u0275\u0275text(18, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 41);
    \u0275\u0275text(20, "Created time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 42);
    \u0275\u0275text(22, "Last Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 43);
    \u0275\u0275text(24, "Reporter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 44);
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 45);
    \u0275\u0275text(28, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 46);
    \u0275\u0275text(30, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, TichproProjectComponent_div_57_tr_32_Template, 41, 26, "tr", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, TichproProjectComponent_div_57_div_33_Template, 24, 19, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.selectedTasks.size === ctx_r1.filteredTasks.length && ctx_r1.filteredTasks.length > 0);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 4, "projects.details.selectAllTasks"));
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r1.filteredTasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewTaskInput);
  }
}
function TichproProjectComponent_div_58_For_2_For_13_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101)(1, "mat-icon", 102);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r10.dueDate));
  }
}
function TichproProjectComponent_div_58_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "input", 95);
    \u0275\u0275listener("change", function TichproProjectComponent_div_58_For_2_For_13_Template_input_change_1_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 97)(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TichproProjectComponent_div_58_For_2_For_13_span_7_Template, 4, 1, "span", 99);
    \u0275\u0275elementStart(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 100)(11, "button", 63);
    \u0275\u0275listener("click", function TichproProjectComponent_div_58_For_2_For_13_Template_button_click_11_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editTaskInline(task_r10));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 64);
    \u0275\u0275listener("click", function TichproProjectComponent_div_58_For_2_For_13_Template_button_click_14_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r10));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const section_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedTasks.has(task_r10.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r10.id));
    \u0275\u0275attribute("aria-label", "Select " + task_r10.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", section_r11.status === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-priority", ctx_r1.getPriorityKey(task_r10.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityIcon(task_r10.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r10.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(task_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTaskStatusDisplay(task_r10.status));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit " + task_r10.title);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + task_r10.title);
  }
}
function TichproProjectComponent_div_58_For_2_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2026 ");
  }
}
function TichproProjectComponent_div_58_For_2_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_58_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "input", 103);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_58_For_2_Conditional_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskName, $event) || (ctx_r1.newTaskName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function TichproProjectComponent_div_58_For_2_Conditional_14_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    })("keyup.escape", function TichproProjectComponent_div_58_For_2_Conditional_14_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 80);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_58_For_2_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    });
    \u0275\u0275conditionalCreate(5, TichproProjectComponent_div_58_For_2_Conditional_14_Conditional_5_Template, 1, 0)(6, TichproProjectComponent_div_58_For_2_Conditional_14_Conditional_6_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_58_For_2_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "projects.details.newTaskName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingTask);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "projects.details.saveTask"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSavingTask ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 10, "common.cancel"));
  }
}
function TichproProjectComponent_div_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275element(2, "span", 86);
    \u0275\u0275elementStart(3, "h3", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 89);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 90);
    \u0275\u0275repeaterCreate(12, TichproProjectComponent_div_58_For_2_For_13_Template, 17, 14, "div", 91, _forTrack1);
    \u0275\u0275conditionalCreate(14, TichproProjectComponent_div_58_For_2_Conditional_14_Template, 11, 12, "div", 92);
    \u0275\u0275elementStart(15, "button", 93);
    \u0275\u0275listener("click", function TichproProjectComponent_div_58_For_2_Template_button_click_15_listener() {
      const section_r11 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.quickAddToStatus(section_r11.status));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Add Task ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", section_r11.indicatorClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTasksByStatus(section_r11.status).length);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 6, "common.toggleSection"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.getTasksByStatus(section_r11.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showNewTaskInput && ctx_r1.selectedStatus === section_r11.status ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Add task to " + section_r11.title);
  }
}
function TichproProjectComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275repeaterCreate(1, TichproProjectComponent_div_58_For_2_Template, 19, 8, "div", 84, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listSections);
  }
}
function TichproProjectComponent_div_59_div_2_div_18_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 132);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, task_r16.description, 0, 60), "", task_r16.description.length > 60 ? "\u2026" : "", " ");
  }
}
function TichproProjectComponent_div_59_div_2_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "mat-icon", 134);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r16.dueDate), " ");
  }
}
function TichproProjectComponent_div_59_div_2_div_18_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("title", task_r16.assignee.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r16.assignee.name.substring(0, 2).toUpperCase(), " ");
  }
}
function TichproProjectComponent_div_59_div_2_div_18_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TichproProjectComponent_div_59_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("contextmenu", function TichproProjectComponent_div_59_div_2_div_18_Template_div_contextmenu_0_listener($event) {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openContextMenu($event, task_r16));
    });
    \u0275\u0275elementStart(1, "div", 121)(2, "h4", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 98);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TichproProjectComponent_div_59_div_2_div_18_p_6_Template, 3, 6, "p", 123)(7, TichproProjectComponent_div_59_div_2_div_18_div_7_Template, 4, 1, "div", 124);
    \u0275\u0275elementStart(8, "div", 125)(9, "div", 126);
    \u0275\u0275template(10, TichproProjectComponent_div_59_div_2_div_18_span_10_Template, 2, 2, "span", 127)(11, TichproProjectComponent_div_59_div_2_div_18_span_11_Template, 2, 0, "span", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 129)(13, "button", 130);
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_div_18_Template_button_click_13_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editTaskInline(task_r16));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 131);
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_div_18_Template_button_click_16_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r16));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const task_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r16.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-priority", ctx_r1.getPriorityKey(task_r16.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityIcon(task_r16.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r16.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", task_r16.dueDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", task_r16.assignee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !task_r16.assignee);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit " + task_r16.title);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + task_r16.title);
  }
}
function TichproProjectComponent_div_59_div_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "input", 103);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_59_div_2_Conditional_19_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newTaskName, $event) || (ctx_r1.newTaskName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function TichproProjectComponent_div_59_div_2_Conditional_19_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    })("keyup.escape", function TichproProjectComponent_div_59_div_2_Conditional_19_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 137)(4, "button", 80);
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createNewTask());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 81);
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewTaskInput = false);
    });
    \u0275\u0275text(7, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTaskName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "projects.details.newTaskName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSavingTask);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingTask ? "\u2026" : "+ Add", " ");
  }
}
function TichproProjectComponent_div_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "div", 109);
    \u0275\u0275element(3, "span", 110);
    \u0275\u0275elementStart(4, "h3", 111);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 113)(9, "button", 114);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_Template_button_click_9_listener() {
      const column_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTaskToColumn(column_r14));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 115);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "more_horiz");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 116);
    \u0275\u0275listener("cdkDropListDropped", function TichproProjectComponent_div_59_div_2_Template_div_cdkDropListDropped_17_listener($event) {
      const column_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTaskDrop($event, column_r14));
    });
    \u0275\u0275template(18, TichproProjectComponent_div_59_div_2_div_18_Template, 19, 9, "div", 117);
    \u0275\u0275conditionalCreate(19, TichproProjectComponent_div_59_div_2_Conditional_19_Template, 8, 6, "div", 118);
    \u0275\u0275elementStart(20, "button", 119);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_59_div_2_Template_button_click_20_listener() {
      const column_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTaskToColumn(column_r14));
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Add New ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", column_r14.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r14.tasks.length);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 12, "projects.details.addTask"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 14, "projects.details.columnOptions"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cdkDropListData", column_r14.tasks)("id", column_r14.id)("cdkDropListConnectedTo", ctx_r1.getConnectedDropListIds());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", column_r14.tasks);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNewTaskInput && ctx_r1.selectedStatus === column_r14.status ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 16, "projects.details.addNewTask"));
  }
}
function TichproProjectComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105);
    \u0275\u0275template(2, TichproProjectComponent_div_59_div_2_Template, 25, 18, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.boardColumns);
  }
}
function TichproProjectComponent_div_60_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r19 = ctx.$implicit;
    \u0275\u0275property("value", emp_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emp_r19.name);
  }
}
function TichproProjectComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "div", 139)(3, "div", 140)(4, "h3", 141);
    \u0275\u0275text(5, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 142);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_60_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 143)(11, "div", 144)(12, "label", 145);
    \u0275\u0275text(13, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 146);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_60_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editFormData.title, $event) || (ctx_r1.editFormData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 144)(17, "label", 145);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 147);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_60_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editFormData.status, $event) || (ctx_r1.editFormData.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 148);
    \u0275\u0275text(22, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 149);
    \u0275\u0275text(24, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 150);
    \u0275\u0275text(26, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 151);
    \u0275\u0275text(28, "Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 152);
    \u0275\u0275text(30, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 153);
    \u0275\u0275text(32, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 154);
    \u0275\u0275text(34, "On Hold");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 144)(36, "label", 145);
    \u0275\u0275text(37, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 147);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_60_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editFormData.priority, $event) || (ctx_r1.editFormData.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "option", 76);
    \u0275\u0275text(41, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 77);
    \u0275\u0275text(43, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 78);
    \u0275\u0275text(45, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 79);
    \u0275\u0275text(47, "Urgent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 144)(49, "label", 145);
    \u0275\u0275text(50, "Assignee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 147);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_60_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editFormData.assigneeId, $event) || (ctx_r1.editFormData.assigneeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "option", 73);
    \u0275\u0275text(54, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, TichproProjectComponent_div_60_option_55_Template, 2, 2, "option", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 144)(57, "label", 145);
    \u0275\u0275text(58, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 155);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_60_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editFormData.dueDate, $event) || (ctx_r1.editFormData.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 156)(62, "button", 81);
    \u0275\u0275listener("click", function TichproProjectComponent_div_60_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(63, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 80);
    \u0275\u0275listener("click", function TichproProjectComponent_div_60_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEditTask());
    });
    \u0275\u0275text(65, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 14, "projects.details.editTask"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 16, "common.close"));
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editFormData.title);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 18, "projects.details.taskTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editFormData.status);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 20, "common.status"));
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editFormData.priority);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(39, 22, "common.priority"));
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editFormData.assigneeId);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(52, 24, "common.assignee"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.employees);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editFormData.dueDate);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(60, 26, "common.dueDate"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.editFormData.title);
  }
}
function TichproProjectComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "span", 159)(3, "mat-icon");
    \u0275\u0275text(4, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 160)(7, "button", 161);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_61_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSelectedTask());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 161);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_61_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clipToClipboard());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Clip to clipboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 162);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_61_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelectedTasks());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTasks.size, " item Selected ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 4, "projects.details.editSelectedTask"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 6, "common.copyToClipboard"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 8, "projects.details.deleteSelectedTasks"));
  }
}
function TichproProjectComponent_div_62_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_div_62_div_11_button_1_Template_button_click_0_listener() {
      const color_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectColor(color_r23));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r23);
    \u0275\u0275classProp("selected", ctx_r1.selectedColor === color_r23);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "projects.details.selectColor"));
  }
}
function TichproProjectComponent_div_62_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275template(1, TichproProjectComponent_div_62_div_11_button_1_Template, 2, 7, "button", 174);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r24);
  }
}
function TichproProjectComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275listener("click", function TichproProjectComponent_div_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275elementStart(1, "div", 164);
    \u0275\u0275listener("click", function TichproProjectComponent_div_62_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 165)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 166)(6, "div", 167)(7, "label");
    \u0275\u0275text(8, "Name of Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function TichproProjectComponent_div_62_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCategoryName, $event) || (ctx_r1.newCategoryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 169);
    \u0275\u0275template(11, TichproProjectComponent_div_62_div_11_Template, 2, 1, "div", 170);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 171)(13, "button", 172);
    \u0275\u0275listener("click", function TichproProjectComponent_div_62_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function TichproProjectComponent_div_62_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275text(16, "Add");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingCategory ? "Edit Category" : "New Category");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCategoryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.colorPalette);
  }
}
var _TichproProjectComponent = class _TichproProjectComponent {
  constructor() {
    this.projectService = inject(ProjectService);
    this.teamsService = inject(TeamsService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = new Subject();
    this.projectId = "";
    this.projectTitle = "TichPro Project";
    this.tasks = [];
    this.filteredTasks = [];
    this.selectedTasks = /* @__PURE__ */ new Set();
    this.categories = [];
    this.employees = [];
    this.currentView = "table";
    this.isLoading = false;
    this.showCategoryModal = false;
    this.showColorPicker = false;
    this.showPriorityDropdown = false;
    this.showStatusMenu = false;
    this.searchQuery = "";
    this.selectedCategory = "";
    this.selectedPriority = "";
    this.selectedStatus = "";
    this.newTaskName = "";
    this.newTaskAssigneeId = "";
    this.newTaskDueDate = "";
    this.newTaskPriority = "medium";
    this.showNewTaskInput = false;
    this.isSavingTask = false;
    this.editingTask = null;
    this.editFormData = {};
    this.editingCategory = null;
    this.newCategoryName = "";
    this.selectedColor = "var(--brand-primary-500, #4F46E5)";
    this.priorityOptions = [
      { value: "urgent", label: "Highest", icon: "\u2B06\u2B06" },
      { value: "high", label: "High", icon: "\u2B06" },
      { value: "medium", label: "Medium", icon: "=" },
      { value: "low", label: "Low", icon: "\u2B07" }
    ];
    this.statusOptions = [
      { value: "done", label: "Done", color: "var(--status-done, #10B981)" },
      { value: "in-progress", label: "In Progress", color: "var(--status-in-progress, #3B82F6)" },
      { value: "pending", label: "Pending", color: "var(--status-pending, #F59E0B)" },
      { value: "todo", label: "To Do", color: "var(--status-todo, #6B7280)" }
    ];
    this.colorPalette = [
      ["#F3F4F6", "#E5E7EB", "#D1D5DB", "#9CA3AF", "#6B7280", "#4B5563"],
      ["#FEE2E2", "#FECACA", "#FCA5A5", "#F87171", "#EF4444", "#DC2626"],
      ["#DBEAFE", "#BFDBFE", "#93C5FD", "#60A5FA", "#3B82F6", "#2563EB"],
      ["#D1FAE5", "#A7F3D0", "#6EE7B7", "#34D399", "#10B981", "#059669"],
      ["#FEF3C7", "#FDE68A", "#FCD34D", "#FBBF24", "#F59E0B", "#D97706"],
      ["#FCE7F3", "#FBCFE8", "#F9A8D4", "#F472B6", "#EC4899", "#DB2777"]
    ];
    this.listSections = [
      { status: "todo", title: "Todo", indicatorClass: "todo" },
      { status: "in-progress", title: "In Progress", indicatorClass: "in-progress" },
      { status: "pending", title: "Review", indicatorClass: "review" },
      { status: "done", title: "Done", indicatorClass: "done" }
    ];
    this.boardColumns = [];
    this.showContextMenu = false;
    this.contextMenuX = 0;
    this.contextMenuY = 0;
    this.contextMenuTask = null;
    this.PRIORITY_MAP = {
      1: "low",
      2: "medium",
      3: "high",
      4: "urgent"
    };
    this.STATUS_MAP = {
      1: "todo",
      2: "in-progress",
      3: "done",
      4: "cancelled",
      5: "on-hold",
      6: "pending",
      7: "completed"
    };
  }
  // -- Lifecycle -----------------------------------------------------
  ngOnInit() {
    this.loadEmployees();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.projectId = params["id"];
      if (this.projectId) {
        this.loadProjectDetails();
        this.loadTasks();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // -- Data loading --------------------------------------------------
  loadEmployees() {
    this.teamsService.getAllTeamMembers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (members) => this.employees = members,
      error: () => this.employees = []
    });
  }
  loadProjectDetails() {
    if (!this.projectId)
      return;
    this.projectService.getProjectById(this.projectId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (project) => {
        this.projectTitle = project.title || this.projectTitle;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cdr.detectChanges();
      }
    });
  }
  loadTasks() {
    this.isLoading = true;
    this.cdr.detectChanges();
    this.projectService.getTasksByProject(this.projectId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.applyFilters();
        this.initializeBoardColumns();
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  // -- Filters -------------------------------------------------------
  applyFilters() {
    this.filteredTasks = this.tasks.filter((task) => {
      const matchesSearch = !this.searchQuery || task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || task.summary?.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = !this.selectedCategory || task.categoryId === this.selectedCategory;
      const matchesPriority = !this.selectedPriority || task.priority === this.selectedPriority;
      const matchesStatus = !this.selectedStatus || task.status === this.selectedStatus;
      return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    });
  }
  onSearchChange() {
    this.applyFilters();
  }
  // -- Task selection ------------------------------------------------
  toggleTaskSelection(taskId) {
    if (this.selectedTasks.has(taskId)) {
      this.selectedTasks.delete(taskId);
    } else {
      this.selectedTasks.add(taskId);
    }
  }
  selectAllTasks() {
    if (this.selectedTasks.size === this.filteredTasks.length) {
      this.selectedTasks.clear();
    } else {
      this.filteredTasks.forEach((task) => this.selectedTasks.add(task.id));
    }
  }
  // -- Create task ---------------------------------------------------
  createNewTask() {
    if (!this.newTaskName.trim() || this.isSavingTask)
      return;
    this.isSavingTask = true;
    const dto = {
      projectId: this.projectId,
      title: this.newTaskName.trim(),
      status: this.selectedStatus || "todo",
      priority: this.newTaskPriority || "medium",
      assigneeId: this.newTaskAssigneeId || void 0,
      dueDate: this.newTaskDueDate || void 0
    };
    this.projectService.createTask(this.projectId, dto).pipe(takeUntil(this.destroy$)).subscribe({
      next: (task) => {
        const newTask = task ?? __spreadValues({ id: Date.now().toString() }, dto);
        this.tasks.push(newTask);
        this.applyFilters();
        this.initializeBoardColumns();
        this.newTaskName = "";
        this.newTaskAssigneeId = "";
        this.newTaskDueDate = "";
        this.newTaskPriority = "medium";
        this.showNewTaskInput = false;
        this.isSavingTask = false;
        this.cdr.detectChanges();
        this.snackBar.open("Task created", "", { duration: 2e3 });
      },
      error: () => {
        this.snackBar.open("Failed to create task", "", { duration: 3e3 });
        this.isSavingTask = false;
        this.cdr.detectChanges();
      }
    });
  }
  // -- Inline edit ---------------------------------------------------
  editTaskInline(task) {
    this.editingTask = task;
    this.editFormData = {
      title: task.title,
      status: this.normaliseStatus(task.status),
      priority: this.normalisePriority(task.priority),
      assigneeId: task.assigneeId ?? "",
      dueDate: task.dueDate ?? ""
    };
  }
  saveEditTask() {
    if (!this.editingTask)
      return;
    const task = this.editingTask;
    const taskProjId = parseInt(task.projectId, 10);
    const routeProjId = parseInt(this.projectId, 10);
    const resolvedProjectId = (taskProjId > 0 ? taskProjId : routeProjId) || routeProjId;
    const payload = {
      title: (this.editFormData.title || task.title || "").trim(),
      description: (this.editFormData.description || task.description || "").trim(),
      status: this.editFormData.status ?? this.normaliseStatus(task.status),
      priority: this.editFormData.priority ?? this.normalisePriority(task.priority),
      assigneeId: this.editFormData.assigneeId ?? task.assigneeId ?? "",
      dueDate: this.editFormData.dueDate ?? task.dueDate ?? "",
      projectId: String(resolvedProjectId)
    };
    this.projectService.updateTask(task.id, payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updated) => {
        const idx = this.tasks.findIndex((t) => t.id === this.editingTask.id);
        if (idx !== -1) {
          this.tasks[idx] = __spreadValues(__spreadValues(__spreadValues({}, this.tasks[idx]), updated), this.editFormData);
        }
        this.applyFilters();
        this.initializeBoardColumns();
        this.editingTask = null;
        this.editFormData = {};
        this.cdr.detectChanges();
        this.snackBar.open("Task updated", "", { duration: 2e3 });
      },
      error: () => {
        this.snackBar.open("Failed to update task", "", { duration: 3e3 });
        this.cdr.detectChanges();
      }
    });
  }
  cancelEdit() {
    this.editingTask = null;
    this.editFormData = {};
  }
  /** Edit the first selected task from the action bar */
  editSelectedTask() {
    const firstId = Array.from(this.selectedTasks)[0];
    if (!firstId)
      return;
    const task = this.tasks.find((t) => t.id === firstId);
    if (task)
      this.editTaskInline(task);
  }
  // -- Update task (e.g. from drag-drop status change) ---------------
  updateTask(task, updates) {
    const keys = Object.keys(updates).filter((k) => k !== "projectId");
    if (keys.length === 1 && keys[0] === "status" && updates.status) {
      this.projectService.changeTaskStatus(__spreadProps(__spreadValues({}, task), { status: updates.status }), updates.status).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          const index = this.tasks.findIndex((t) => t.id === task.id);
          if (index !== -1) {
            this.tasks[index] = __spreadProps(__spreadValues({}, this.tasks[index]), { status: updates.status });
            this.applyFilters();
            this.initializeBoardColumns();
            this.cdr.detectChanges();
          }
        },
        error: () => {
          this.cdr.detectChanges();
        }
      });
      return;
    }
    this.projectService.updateTask(task.id, __spreadProps(__spreadValues({}, updates), { projectId: task.projectId || this.projectId })).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedTask) => {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = __spreadValues(__spreadValues({}, this.tasks[index]), updatedTask);
          this.applyFilters();
          this.initializeBoardColumns();
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.cdr.detectChanges();
      }
    });
  }
  // -- Delete --------------------------------------------------------
  deleteTask(task) {
    this.closeContextMenu();
    this.projectService.deleteTask(task.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
        this.selectedTasks.delete(task.id);
        this.applyFilters();
        this.initializeBoardColumns();
        this.cdr.detectChanges();
        this.snackBar.open("Task deleted", "", { duration: 2e3 });
      },
      error: () => {
        this.cdr.detectChanges();
        this.snackBar.open("Failed to delete task", "", { duration: 3e3 });
      }
    });
  }
  deleteSelectedTasks() {
    const tasksToDelete = Array.from(this.selectedTasks);
    tasksToDelete.forEach((taskId) => {
      this.projectService.deleteTask(taskId).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.tasks = this.tasks.filter((t) => t.id !== taskId);
          this.selectedTasks.delete(taskId);
          this.applyFilters();
          this.initializeBoardColumns();
          this.snackBar.open("Task deleted", "", { duration: 2e3 });
        },
        error: () => {
          this.snackBar.open("Failed to delete task", "", { duration: 3e3 });
        }
      });
    });
  }
  // -- Clipboard -----------------------------------------------------
  clipToClipboard() {
    const text = this.tasks.filter((t) => this.selectedTasks.has(t.id)).map((t) => `${t.title} - ${t.status}`).join("\n");
    navigator.clipboard.writeText(text);
  }
  // -- View switching ------------------------------------------------
  changeView(view) {
    this.currentView = view;
  }
  // -- Board ---------------------------------------------------------
  initializeBoardColumns() {
    const statusConfig = [
      { id: "todo", title: "Todo", status: "todo", color: "var(--status-todo, #F59E0B)" },
      { id: "in-progress", title: "In Progress", status: "in-progress", color: "var(--status-in-progress, #3B82F6)" },
      { id: "review", title: "Review", status: "pending", color: "var(--status-pending, #F59E0B)" },
      { id: "done", title: "Done", status: "done", color: "var(--status-done, #10B981)" }
    ];
    this.boardColumns = statusConfig.map((config) => ({
      id: config.id,
      title: config.title,
      status: config.status,
      color: config.color,
      tasks: this.tasks.filter((task) => this.normaliseStatus(task.status) === config.status)
    }));
  }
  onTaskDrop(event, targetColumn) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const task = event.container.data[event.currentIndex];
      this.updateTask(task, { status: targetColumn.status });
    }
  }
  getTasksByStatus(status) {
    return this.filteredTasks.filter((task) => this.normaliseStatus(task.status) === status);
  }
  addTaskToColumn(column) {
    this.showNewTaskInput = true;
    this.selectedStatus = column.status;
    this.cdr.detectChanges();
  }
  /** Quick-add from List view — sets status filter then opens input */
  quickAddToStatus(status) {
    this.selectedStatus = status;
    this.showNewTaskInput = true;
    this.cdr.detectChanges();
  }
  getConnectedDropListIds() {
    return this.boardColumns.map((c) => c.id);
  }
  // -- Context menu --------------------------------------------------
  openContextMenu(event, task) {
    event.preventDefault();
    this.contextMenuTask = task;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    this.showContextMenu = true;
  }
  closeContextMenu() {
    this.showContextMenu = false;
    this.contextMenuTask = null;
  }
  editTaskDetails() {
    if (this.contextMenuTask) {
      this.editTaskInline(this.contextMenuTask);
    }
    this.closeContextMenu();
  }
  moveTaskUp(task) {
    const index = this.filteredTasks.findIndex((t) => t.id === task.id);
    if (index > 0) {
      [this.filteredTasks[index], this.filteredTasks[index - 1]] = [
        this.filteredTasks[index - 1],
        this.filteredTasks[index]
      ];
    }
    this.closeContextMenu();
  }
  moveTaskDown(task) {
    const index = this.filteredTasks.findIndex((t) => t.id === task.id);
    if (index < this.filteredTasks.length - 1) {
      [this.filteredTasks[index], this.filteredTasks[index + 1]] = [
        this.filteredTasks[index + 1],
        this.filteredTasks[index]
      ];
    }
    this.closeContextMenu();
  }
  copyTaskLink(task) {
    const link = `${window.location.origin}/projects/${this.projectId}/tasks/${task.id}`;
    navigator.clipboard.writeText(link);
    this.closeContextMenu();
  }
  // Normalisation helpers
  normalisePriority(raw) {
    if (typeof raw === "number")
      return this.PRIORITY_MAP[raw] ?? "medium";
    return raw || "medium";
  }
  normaliseStatus(raw) {
    if (typeof raw === "number")
      return this.STATUS_MAP[raw] ?? "todo";
    return raw || "todo";
  }
  // Display helpers
  getPriorityIcon(priority) {
    const p = this.normalisePriority(priority);
    return this.priorityOptions.find((o) => o.value === p)?.icon ?? "=";
  }
  getPriorityDisplay(priority) {
    const p = this.normalisePriority(priority);
    const labels = {
      low: "Low",
      medium: "Medium",
      high: "High",
      urgent: "Urgent"
    };
    return labels[p] ?? String(priority);
  }
  getPriorityKey(priority) {
    return this.normalisePriority(priority);
  }
  getTaskStatusDisplay(status) {
    const s = this.normaliseStatus(status);
    const labels = {
      "todo": "Draft",
      "pending": "Pending",
      "in-progress": "Active",
      "done": "Done",
      "completed": "Completed",
      "cancelled": "Cancelled",
      "on-hold": "On Hold"
    };
    return labels[s] ?? String(status);
  }
  /** Returns a CSS class for status badge — uses CSS variables, no inline hex */
  getStatusClass(status) {
    const s = this.normaliseStatus(status);
    const map = {
      "todo": "status--todo",
      "pending": "status--pending",
      "in-progress": "status--in-progress",
      "done": "status--done",
      "completed": "status--done",
      "cancelled": "status--cancelled",
      "on-hold": "status--on-hold"
    };
    return map[s] ?? "status--todo";
  }
  /** Returns CSS variable string — used only in [style.background-color] where class is not enough */
  getStatusColor(status) {
    const s = this.normaliseStatus(status);
    const map = {
      "todo": "var(--brand-neutral-500)",
      "pending": "var(--functional-warning-500)",
      "in-progress": "var(--functional-info-500)",
      "done": "var(--functional-success-500)",
      "completed": "var(--functional-success-500)",
      "cancelled": "var(--functional-danger-500)",
      "on-hold": "var(--functional-warning-500)"
    };
    return map[s] ?? "var(--brand-neutral-500)";
  }
  formatDate(date) {
    if (!date)
      return "";
    if (date.startsWith("0001-") || date.startsWith("1/1/0001"))
      return "";
    const d = new Date(date);
    if (isNaN(d.getTime()) || d.getFullYear() < 2e3)
      return "";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  openCategoryModal() {
    this.showCategoryModal = true;
  }
  closeCategoryModal() {
    this.showCategoryModal = false;
    this.newCategoryName = "";
    this.editingCategory = null;
  }
  selectColor(color) {
    this.selectedColor = color;
  }
  saveCategory() {
    this.closeCategoryModal();
  }
  getTaskCompletionPercentage(task) {
    return task.progressPercentage ?? 0;
  }
  getTaskSubtasksCount(task) {
    const sub = task.subtasks ?? [];
    return { total: sub.length, completed: sub.filter((s) => s.status === "done").length };
  }
  getTaskCommentsCount(task) {
    return task.commentsCount ?? 0;
  }
};
_TichproProjectComponent.\u0275fac = function TichproProjectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TichproProjectComponent)();
};
_TichproProjectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TichproProjectComponent, selectors: [["app-tichpro-project-component"]], decls: 63, vars: 37, consts: [[1, "tasks-container"], [1, "breadcrumb"], ["routerLink", "/dashboard/projects", 1, "breadcrumb-link"], [1, "breadcrumb-separator"], [1, "breadcrumb-current"], [1, "page-header"], [1, "page-title"], [1, "toolbar"], [1, "toolbar-left"], [1, "view-switcher"], [1, "view-btn", 3, "click"], [1, "toolbar-btn", 3, "click"], [1, "toolbar-right"], [1, "toolbar-btn"], [1, "btn-import"], [1, "btn-primary", 3, "click"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "list-view", 4, "ngIf"], ["class", "board-view", 4, "ngIf"], ["class", "inline-edit-overlay", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "action-bar", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "empty-state"], ["src", "assets/images/NoProjects.png", "alt", "No tasks", 1, "empty-img"], [1, "empty-title"], [1, "empty-desc"], [1, "icon"], [1, "table-wrapper"], [1, "tasks-table"], [1, "col-checkbox"], ["type", "checkbox", "title", "Select all tasks", 3, "change", "checked"], [1, "col-id"], [1, "col-summary"], [1, "col-category"], [1, "col-assignee"], [1, "col-due-date"], [1, "col-priority"], [1, "col-created"], [1, "col-updated"], [1, "col-reporter"], [1, "col-status"], [1, "col-team"], [1, "col-actions"], [3, "selected", 4, "ngFor", "ngForOf"], ["class", "new-task-row", 4, "ngIf"], [1, "sr-only"], ["type", "checkbox", "title", "Select task", 3, "change", "id", "checked"], [1, "task-id"], [1, "task-summary"], ["class", "category-badge", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "assignee", 4, "ngIf"], [1, "due-date"], [1, "priority-badge"], [1, "priority-icon"], [1, "date-cell"], ["class", "reporter", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "row-actions"], ["title", "Edit", 1, "row-action-btn", 3, "click"], ["title", "Delete", 1, "row-action-btn", "danger", 3, "click"], [1, "category-badge"], [1, "text-muted"], [1, "assignee"], [1, "avatar-sm"], [1, "reporter"], [1, "new-task-row"], ["type", "text", "placeholder", "Task summary\u2026", "autofocus", "", 1, "new-task-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "new-task-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "title", "Due date", 1, "new-task-date", 3, "ngModelChange", "ngModel"], ["value", "low"], ["value", "medium"], ["value", "high"], ["value", "urgent"], [1, "btn-create", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], [3, "value"], [1, "list-view"], [1, "list-section"], [1, "section-header"], [1, "section-indicator", 3, "ngClass"], [1, "section-title"], [1, "section-count"], [1, "section-toggle"], [1, "tasks-list"], [1, "task-item", 3, "selected"], [1, "quick-add-row"], [1, "add-task-btn", 3, "click"], [1, "task-item"], ["type", "checkbox", "title", "Select task", 1, "task-checkbox", 3, "change", "checked"], [1, "task-title"], [1, "task-meta"], [1, "priority-badge-sm"], ["class", "task-date", 4, "ngIf"], [1, "task-item-actions"], [1, "task-date"], [1, "date-icon"], ["type", "text", "placeholder", "Task name\u2026", "autofocus", "", 1, "new-task-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "board-view"], [1, "board-columns"], ["class", "board-column", 4, "ngFor", "ngForOf"], [1, "board-column"], [1, "column-header"], [1, "column-title-wrapper"], [1, "column-indicator"], [1, "column-title"], [1, "column-count"], [1, "column-actions"], [1, "column-action-btn", 3, "click"], [1, "column-action-btn"], ["cdkDropList", "", 1, "tasks-container-board", 3, "cdkDropListDropped", "cdkDropListData", "id", "cdkDropListConnectedTo"], ["class", "task-card", "cdkDrag", "", "title", "Task", 3, "contextmenu", 4, "ngFor", "ngForOf"], [1, "board-quick-add"], [1, "add-card-btn", 3, "click"], ["cdkDrag", "", "title", "Task", 1, "task-card", 3, "contextmenu"], [1, "task-card-header"], [1, "task-card-title"], ["class", "task-card-desc", 4, "ngIf"], ["class", "task-card-due", 4, "ngIf"], [1, "task-card-footer"], [1, "task-assignees-group"], ["class", "assignee-avatar-sm", 4, "ngIf"], ["class", "text-muted", "style", "font-size:0.75rem", 4, "ngIf"], [1, "task-card-actions"], ["title", "Edit", 1, "card-action-btn", 3, "click"], ["title", "Delete", 1, "card-action-btn", "danger", 3, "click"], [1, "task-card-desc"], [1, "task-card-due"], [1, "due-icon"], [1, "assignee-avatar-sm"], [1, "text-muted", 2, "font-size", "0.75rem"], [1, "quick-add-btns"], ["role", "dialog", "aria-modal", "true", 1, "inline-edit-overlay"], [1, "inline-edit-form"], [1, "edit-form-header"], [1, "edit-form-title"], [1, "btn-icon-close", 3, "click"], [1, "edit-form-grid"], [1, "edit-form-field"], [1, "edit-label"], ["type", "text", "placeholder", "Task title", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "edit-select", 3, "ngModelChange", "ngModel"], ["value", "todo"], ["value", "pending"], ["value", "in-progress"], ["value", "done"], ["value", "completed"], ["value", "cancelled"], ["value", "on-hold"], ["type", "date", "title", "Due date", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "edit-form-actions"], [1, "action-bar"], [1, "action-bar-content"], [1, "selected-count"], [1, "action-buttons"], [1, "action-btn", 3, "click"], [1, "action-btn", "danger", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "Ex:Marketing", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "color-picker"], ["class", "color-row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "color-row"], ["class", "color-option", 3, "background-color", "selected", "click", 4, "ngFor", "ngForOf"], [1, "color-option", 3, "click"]], template: function TichproProjectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275text(3, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 2);
    \u0275\u0275text(7, "Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 4);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 5)(13, "h1", 6);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "button", 10);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_Template_button_click_18_listener() {
      return ctx.changeView("table");
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "table_rows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Table ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 10);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_Template_button_click_23_listener() {
      return ctx.changeView("list");
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "format_list_bulleted");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " List ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 10);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_Template_button_click_28_listener() {
      return ctx.changeView("board");
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "view_kanban");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Board ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 11);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_Template_button_click_33_listener() {
      return ctx.loadTasks();
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36, "refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 12)(38, "button", 13);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41, "filter_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 13);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementStart(44, "mat-icon");
    \u0275\u0275text(45, "sort");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 14)(47, "mat-icon");
    \u0275\u0275text(48, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Import ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 15);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275listener("click", function TichproProjectComponent_Template_button_click_50_listener() {
      return ctx.quickAddToStatus("todo");
    });
    \u0275\u0275elementStart(52, "mat-icon");
    \u0275\u0275text(53, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " New Task ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(55, TichproProjectComponent_div_55_Template, 3, 0, "div", 16)(56, TichproProjectComponent_div_56_Template, 10, 0, "div", 17)(57, TichproProjectComponent_div_57_Template, 34, 6, "div", 18)(58, TichproProjectComponent_div_58_Template, 3, 0, "div", 19)(59, TichproProjectComponent_div_59_Template, 3, 1, "div", 20)(60, TichproProjectComponent_div_60_Template, 66, 28, "div", 21)(61, TichproProjectComponent_div_61_Template, 22, 10, "div", 22)(62, TichproProjectComponent_div_62_Template, 17, 3, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.projectTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.projectTitle);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx.currentView === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 23, "common.tableView"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.currentView === "list");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 25, "common.listView"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.currentView === "board");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 27, "common.boardView"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 29, "common.refresh"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(39, 31, "common.filter"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(43, 33, "common.sort"));
    \u0275\u0275advance(8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 35, "projects.details.newTask"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredTasks.length === 0 && !ctx.showNewTaskInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentView === "table" && !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentView === "list" && !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentView === "board" && !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.editingTask);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedTasks.size > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showCategoryModal);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  RouterLink,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatIcon,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSnackBarModule,
  CdkDropList,
  CdkDrag,
  TranslocoModule,
  SlicePipe,
  TranslocoPipe
], styles: ["\n\n.tasks-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  font-family: var(--font-family-primary);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: var(--ui-surface);\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.header-center[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex: 1;\n  max-width: 600px;\n  margin: 0 2rem;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n  border-radius: 0.375rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-100);\n  border-radius: 50%;\n  font-size: 1.25rem;\n}\n.user-info[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--brand-neutral-600);\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.employee-filter[_ngcontent-%COMP%] {\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  cursor: pointer;\n}\n.employee-filter[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-600);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n  border-radius: 0.375rem;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--brand-accent-400);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-500);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n}\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb-separator[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-200);\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: var(--ui-text-main);\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 0 2rem 1.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: var(--ui-surface);\n  border-top: 1px solid var(--brand-neutral-100);\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.toolbar-left[_ngcontent-%COMP%], \n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.view-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--brand-neutral-50);\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.view-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-surface);\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  font-weight: 500;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 5%, transparent);\n}\n.view-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--brand-neutral-900);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-import[_ngcontent-%COMP%]:hover {\n  background: var(--ui-text-main);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-700);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  color: var(--brand-neutral-600);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--brand-neutral-100);\n  border-top-color: var(--brand-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  margin: 1.5rem 2rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.tasks-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tasks-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-50);\n}\n.tasks-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: start;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.tasks-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--brand-neutral-100);\n  transition: background 0.15s;\n}\n.tasks-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n}\n.tasks-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n}\n.tasks-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-700);\n}\n.col-checkbox[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.task-id[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n}\n.task-summary[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  color: var(--brand-neutral-700);\n}\n.assignee[_ngcontent-%COMP%], \n.reporter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.priority-badge[data-priority=urgent][_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-800);\n}\n.priority-badge[data-priority=high][_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.priority-badge[data-priority=medium][_ngcontent-%COMP%] {\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n}\n.priority-badge[data-priority=low][_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-bg-surface);\n}\n.team-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  background: var(--functional-info-50);\n  color: var(--functional-info-700);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-600);\n  font-size: 0.8125rem;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n}\n.new-task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-top: 2px dashed var(--brand-neutral-100);\n}\n.new-task-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.625rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n}\n.new-task-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  cursor: pointer;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n}\n.btn-create[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-create[_ngcontent-%COMP%]:hover {\n  background: var(--brand-primary-700);\n}\n.action-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 50;\n}\n.action-bar-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem 1.5rem;\n  background: var(--brand-neutral-900);\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n}\n.selected-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--ui-bg-surface);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: color-mix(in srgb, var(--ui-bg-surface) 10%, transparent);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--brand-neutral-500) 20%, transparent);\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-600);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-neutral-950) 50%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 20px 25px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--brand-neutral-700);\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.color-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.color-option[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 2px solid transparent;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.color-option[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.color-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 20%, transparent);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.25rem;\n  background: var(--ui-surface);\n  color: var(--brand-neutral-700);\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n}\n@media (max-width: 1024px) {\n  .header-center[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n  .tasks-table[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n  .tasks-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .tasks-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n  }\n}\n.list-view[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.list-section[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  background: var(--brand-neutral-50);\n  border-bottom: 1px solid var(--brand-neutral-100);\n  cursor: pointer;\n}\n.section-header[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.section-indicator[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 20px;\n  border-radius: 2px;\n}\n.section-indicator.todo[_ngcontent-%COMP%] {\n  background: var(--functional-warning-500);\n}\n.section-indicator.in-progress[_ngcontent-%COMP%] {\n  background: var(--functional-info-500);\n}\n.section-indicator.review[_ngcontent-%COMP%] {\n  background: var(--functional-warning-500);\n}\n.section-indicator.done[_ngcontent-%COMP%] {\n  background: var(--functional-success-500);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.section-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n}\n.section-toggle[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  background: none;\n  border: none;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n}\n.tasks-list[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  margin-bottom: 0.5rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n}\n.task-item[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.task-drag-handle[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-200);\n  cursor: grab;\n  font-size: 0.875rem;\n}\n.task-drag-handle[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.task-checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--brand-primary-600);\n}\n.task-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.task-title.completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--brand-neutral-400);\n}\n.task-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-inline-start: auto;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.badge-link[_ngcontent-%COMP%] {\n  background: var(--functional-info-50);\n  color: var(--functional-info-800);\n}\n.badge.badge-attachment[_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-inline-start: auto;\n}\n.task-date[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--brand-neutral-600);\n}\n.task-assignees[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.assignee-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.assignee-avatar[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: 0;\n}\n.assignee-count[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.add-task-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: 1px dashed var(--brand-neutral-200);\n  border-radius: 0.5rem;\n  color: var(--brand-neutral-600);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-task-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n  border-color: var(--brand-primary-600);\n  color: var(--brand-primary-600);\n}\n.add-task-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.board-view[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  overflow-x: auto;\n}\n.board-columns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  min-height: calc(100vh - 300px);\n}\n.board-column[_ngcontent-%COMP%] {\n  flex: 0 0 320px;\n  display: flex;\n  flex-direction: column;\n}\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem 0.75rem 0 0;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.column-title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.column-indicator[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 24px;\n  border-radius: 2px;\n}\n.column-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.column-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n}\n.column-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.column-action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: var(--brand-neutral-600);\n  font-size: 1.125rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.column-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n  color: var(--ui-text-main);\n}\n.tasks-container-board[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  background: var(--brand-neutral-50);\n  border-radius: 0 0 0.75rem 0.75rem;\n  overflow-y: auto;\n}\n.task-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  margin-bottom: 1rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  border-color: var(--brand-neutral-200);\n}\n.task-card.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  opacity: 0.9;\n}\n.task-card.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.task-card-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  line-height: 1.4;\n}\n.task-card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.tag.tag-orange[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-800);\n}\n.tag.tag-blue[_ngcontent-%COMP%] {\n  background: var(--functional-info-200);\n  color: var(--functional-info-800);\n}\n.task-card-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--functional-info-500),\n      var(--functional-info-400));\n  border-radius: 9999px;\n  transition: width 0.3s ease;\n}\n.progress-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--functional-info-500);\n}\n.task-card-status[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.status-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 1rem;\n}\n.status-icon.success[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.status-icon.warning[_ngcontent-%COMP%] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-600);\n}\n.status-icon.alert[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.task-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.task-assignees-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.assignee-avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.assignee-avatar-sm[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: 0;\n}\n.assignee-more[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-900);\n  color: var(--brand-neutral-500);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.task-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.metric[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--brand-neutral-600);\n}\n.metric-divider[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-200);\n}\n.add-card-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem;\n  background: var(--ui-surface);\n  border: 1px dashed var(--brand-neutral-200);\n  border-radius: 0.5rem;\n  color: var(--brand-neutral-600);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-card-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n  border-color: var(--brand-primary-600);\n  color: var(--brand-primary-600);\n}\n.add-card-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.context-menu-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n.context-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  min-width: 200px;\n  background: var(--ui-surface);\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  border: 1px solid var(--brand-neutral-100);\n  padding: 0.5rem 0;\n  z-index: 100;\n}\n.context-menu-section[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem 0.25rem;\n}\n.context-menu-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-400);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.context-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  background: none;\n  border: none;\n  text-align: start;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-700);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.context-menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-100);\n}\n.context-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.context-menu-item.danger[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-50);\n}\n.context-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.context-menu-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--brand-neutral-100);\n  margin: 0.5rem 0;\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.task-card.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  background: var(--brand-neutral-100);\n  border: 2px dashed var(--brand-neutral-200);\n}\n.new-task-select[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  min-width: 130px;\n}\n.new-task-date[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 0.625rem 1rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--brand-neutral-50);\n  color: var(--ui-text-main);\n}\n.btn-create[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inline-edit-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-neutral-950) 40%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n}\n.inline-edit-form[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 50px color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n  padding: 2rem;\n  width: 100%;\n  max-width: 600px;\n}\n.edit-form-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.edit-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.edit-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.edit-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.edit-input[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  width: 100%;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.edit-select[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n}\n.edit-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-block-start: 1.5rem;\n}\n.col-actions[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: center;\n}\n.row-action-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  opacity: 0.6;\n  transition: opacity 0.15s, border-color 0.15s;\n}\n.row-action-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  border-color: var(--brand-neutral-200);\n  background: var(--brand-neutral-50);\n}\n.row-action-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: var(--functional-danger-200);\n  background: var(--functional-danger-50);\n}\n@media (max-width: 768px) {\n  .tasks-container[_ngcontent-%COMP%] {\n    margin-inline-start: 0 !important;\n    padding: 16px;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tasks-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-center[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n  }\n}\n@media (max-width: 640px) {\n  .mat-dialog-container[_ngcontent-%COMP%], \n   .cdk-overlay-pane[_ngcontent-%COMP%] {\n    max-width: 95vw !important;\n    width: 95vw !important;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  h2[_ngcontent-%COMP%], \n   .section-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge.status--todo[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-700);\n}\n.status-badge.status--pending[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-700);\n}\n.status-badge.status--in-progress[_ngcontent-%COMP%] {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.status-badge.status--done[_ngcontent-%COMP%] {\n  background: var(--functional-success-100);\n  color: var(--functional-success-700);\n}\n.status-badge.status--cancelled[_ngcontent-%COMP%] {\n  background: var(--functional-danger-100);\n  color: var(--functional-danger-700);\n}\n.status-badge.status--on-hold[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-700);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  gap: 12px;\n  text-align: center;\n}\n.empty-img[_ngcontent-%COMP%] {\n  width: 120px;\n  opacity: .7;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.empty-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.task-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.task-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ui-text-muted);\n  margin: 6px 0 0;\n  line-height: 1.4;\n}\n.task-card-due[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin-block-start: 6px;\n}\n.task-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.card-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  opacity: 0.6;\n  transition: opacity .15s;\n}\n.card-action-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: var(--ui-bg-hover);\n}\n.card-action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: var(--functional-danger-50);\n}\n.priority-badge-sm[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: var(--ui-bg-hover);\n  flex-shrink: 0;\n}\n[data-priority=urgent][_ngcontent-%COMP%] {\n  color: var(--functional-danger-500);\n}\n[data-priority=high][_ngcontent-%COMP%] {\n  color: var(--functional-warning-500);\n}\n[data-priority=medium][_ngcontent-%COMP%] {\n  color: var(--functional-info-500);\n}\n[data-priority=low][_ngcontent-%COMP%] {\n  color: var(--brand-neutral-400);\n}\n/*# sourceMappingURL=tichpro-project-component.css.map */"] });
var TichproProjectComponent = _TichproProjectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TichproProjectComponent, [{
    type: Component,
    args: [{ selector: "app-tichpro-project-component", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      MatCardModule,
      MatTabsModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatListModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatSnackBarModule,
      CdkDropList,
      CdkDrag,
      TranslocoModule
    ], template: `<div class="tasks-container">


  <!-- Breadcrumb -->
  <div class="breadcrumb">
    <a routerLink="/dashboard/projects" class="breadcrumb-link">Projects</a>
    <span class="breadcrumb-separator">\u203A</span>
    <a routerLink="/dashboard/projects" class="breadcrumb-link">Tasks</a>
    <span class="breadcrumb-separator">\u203A</span>
    <span class="breadcrumb-current">{{ projectTitle }}</span>
  </div>

  <!-- Page Title -->
  <div class="page-header">
    <h1 class="page-title">{{ projectTitle }}</h1>
  </div>

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="toolbar-left">
      <div class="view-switcher">
        <button
          class="view-btn"
          [class.active]="currentView === 'table'"
          (click)="changeView('table')"
          [attr.aria-label]="'common.tableView' | transloco"
        >
          <mat-icon>table_rows</mat-icon> Table
        </button>
        <button
          class="view-btn"
          [class.active]="currentView === 'list'"
          (click)="changeView('list')"
          [attr.aria-label]="'common.listView' | transloco"
        >
          <mat-icon>format_list_bulleted</mat-icon> List
        </button>
        <button
          class="view-btn"
          [class.active]="currentView === 'board'"
          (click)="changeView('board')"
          [attr.aria-label]="'common.boardView' | transloco"
        >
          <mat-icon>view_kanban</mat-icon> Board
        </button>
      </div>

      <button class="toolbar-btn" [attr.aria-label]="'common.refresh' | transloco" (click)="loadTasks()">
        <mat-icon>refresh</mat-icon>
      </button>
    </div>

    <div class="toolbar-right">
      <button class="toolbar-btn" [attr.aria-label]="'common.filter' | transloco">
        <mat-icon>filter_alt</mat-icon>
      </button>
      <button class="toolbar-btn" [attr.aria-label]="'common.sort' | transloco">
        <mat-icon>sort</mat-icon>
      </button>
      <button class="btn-import">
        <mat-icon>upload</mat-icon> Import
      </button>
      <button class="btn-primary" (click)="quickAddToStatus('todo')" [attr.aria-label]="'projects.details.newTask' | transloco">
        <mat-icon>add</mat-icon> New Task
      </button>
    </div>
  </div>

  <!-- Loading State -->
  <div *ngIf="isLoading" class="loading">
    <div class="spinner"></div>
    Loading tasks...
  </div>

  <!-- Empty State -->
  <div *ngIf="!isLoading && filteredTasks.length === 0 && !showNewTaskInput" class="empty-state">
    <img src="assets/images/NoProjects.png" alt="No tasks" class="empty-img" />
    <h3 class="empty-title">No tasks yet</h3>
    <p class="empty-desc">Create your first task to start tracking work</p>
    <button class="btn-primary" (click)="showNewTaskInput = true">
      <span class="icon">+</span> New Task
    </button>
  </div>

  <!-- Table View -->
  <div *ngIf="currentView === 'table' && !isLoading" class="table-wrapper">
    <table class="tasks-table">
      <thead>
        <tr>
          <th class="col-checkbox">
            <input 
              type="checkbox" 
              [checked]="selectedTasks.size === filteredTasks.length && filteredTasks.length > 0"
              (change)="selectAllTasks()"
              [attr.aria-label]="'projects.details.selectAllTasks' | transloco"
              title="Select all tasks"
            />
          </th>
          <th class="col-id">ID</th>
          <th class="col-summary">Summary</th>
          <th class="col-category">Category</th>
          <th class="col-assignee">Assignee</th>
          <th class="col-due-date">Due Date</th>
          <th class="col-priority">Priority</th>
          <th class="col-created">Created time</th>
          <th class="col-updated">Last Update</th>
          <th class="col-reporter">Reporter</th>
          <th class="col-status">Status</th>
          <th class="col-team">Team</th>
          <th class="col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let task of filteredTasks" [class.selected]="selectedTasks.has(task.id)">
          <td>
            <label [attr.for]="'task-checkbox-' + task.id" class="sr-only">Select task {{ task.title }}</label>
            <input 
              type="checkbox" 
              [id]="'task-checkbox-' + task.id"
              [checked]="selectedTasks.has(task.id)"
              (change)="toggleTaskSelection(task.id)"
              [attr.aria-label]="'Select task ' + task.title"
              title="Select task"
            />
          </td>
          <td class="task-id">{{ task.id }}</td>
          <td class="task-summary">{{ task.title }}</td>
          <td>
            <span class="category-badge" *ngIf="task.category">
              {{ task.category.title }}
            </span>
            <span *ngIf="!task.category" class="text-muted">-</span>
          </td>
          <td>
            <div class="assignee" *ngIf="task.assignee">
              <span class="avatar-sm">{{ task.assignee.name.substring(0, 2).toUpperCase() }}</span>
              {{ task.assignee.name }}
            </div>
            <span *ngIf="!task.assignee" class="text-muted">-</span>
          </td>
          <td class="due-date">{{ formatDate(task.dueDate) }}</td>
          <td>
            <span class="priority-badge" [attr.data-priority]="getPriorityKey(task.priority)">
              <span class="priority-icon">{{ getPriorityIcon(task.priority) }}</span>
              {{ getPriorityDisplay(task.priority) }}
            </span>
          </td>
          <td class="date-cell">{{ formatDate(task.createdAt) }}</td>
          <td class="date-cell">{{ formatDate(task.updatedAt) }}</td>
          <td>
            <div class="reporter" *ngIf="task.reporter">
              <span class="avatar-sm">{{ task.reporter.name.substring(0, 2).toUpperCase() }}</span>
              {{ task.reporter.name }}
            </div>
            <span *ngIf="!task.reporter" class="text-muted">-</span>
          </td>
          <td>
            <span class="status-badge" [ngClass]="getStatusClass(task.status)">
              {{ getTaskStatusDisplay(task.status) }}
            </span>
          </td>
          <td>
            <span *ngIf="task.projectId" class="text-muted">\u2014</span>
          </td>
          <td class="row-actions">
            <button class="row-action-btn" (click)="editTaskInline(task)" [attr.aria-label]="'Edit task ' + task.title" title="Edit"><mat-icon>edit</mat-icon></button>
            <button class="row-action-btn danger" (click)="deleteTask(task)" [attr.aria-label]="'Delete task ' + task.title" title="Delete"><mat-icon>delete</mat-icon></button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- New Task Row -->
    <div *ngIf="showNewTaskInput" class="new-task-row">
      <input
        type="text"
        class="new-task-input"
        placeholder="Task summary\u2026"
        [(ngModel)]="newTaskName"
        (keyup.enter)="createNewTask()"
        (keyup.escape)="showNewTaskInput = false"
        [attr.aria-label]="'projects.details.newTaskName' | transloco"
        autofocus
      />

      <select class="new-task-select" [(ngModel)]="newTaskAssigneeId" [attr.aria-label]="'common.assignee' | transloco">
        <option value="">\u{1F464} Assignee</option>
        <option *ngFor="let emp of employees" [value]="emp.id">{{ emp.name }}</option>
      </select>

      <input
        type="date"
        class="new-task-date"
        [(ngModel)]="newTaskDueDate"
        [attr.aria-label]="'common.dueDate' | transloco"
        title="Due date"
      />

      <select class="new-task-select" [(ngModel)]="newTaskPriority" [attr.aria-label]="'common.priority' | transloco">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="urgent">Urgent</option>
      </select>

      <button class="btn-create" (click)="createNewTask()" [disabled]="isSavingTask">
        {{ isSavingTask ? 'Saving\u2026' : 'Create' }}
      </button>
      <button class="btn-cancel" (click)="showNewTaskInput = false">Cancel</button>
    </div>

  </div>

  <!-- List View -->
  <div *ngIf="currentView === 'list' && !isLoading" class="list-view">

    @for (section of listSections; track section.status) {
      <div class="list-section">
        <div class="section-header">
          <span class="section-indicator" [ngClass]="section.indicatorClass"></span>
          <h3 class="section-title">{{ section.title }}</h3>
          <span class="section-count">{{ getTasksByStatus(section.status).length }}</span>
          <button class="section-toggle" [attr.aria-label]="'common.toggleSection' | transloco"><mat-icon>expand_more</mat-icon></button>
        </div>

        <div class="tasks-list">
          @for (task of getTasksByStatus(section.status); track task.id) {
            <div class="task-item" [class.selected]="selectedTasks.has(task.id)">
              <input type="checkbox" class="task-checkbox"
                     [checked]="selectedTasks.has(task.id)"
                     (change)="toggleTaskSelection(task.id)"
                     [attr.aria-label]="'Select ' + task.title" title="Select task" />
              <span class="task-title" [class.completed]="section.status === 'done'">{{ task.title }}</span>
              <div class="task-meta">
                <span class="priority-badge-sm" [attr.data-priority]="getPriorityKey(task.priority)">
                  {{ getPriorityIcon(task.priority) }}
                </span>
                <span class="task-date" *ngIf="task.dueDate"><mat-icon class="date-icon">event</mat-icon> {{ formatDate(task.dueDate) }}</span>
                <span class="status-badge" [ngClass]="getStatusClass(task.status)">{{ getTaskStatusDisplay(task.status) }}</span>
              </div>
              <div class="task-item-actions">
                <button class="row-action-btn" (click)="editTaskInline(task)"
                        [attr.aria-label]="'Edit ' + task.title" title="Edit"><mat-icon>edit</mat-icon></button>
                <button class="row-action-btn danger" (click)="deleteTask(task)"
                        [attr.aria-label]="'Delete ' + task.title" title="Delete"><mat-icon>delete</mat-icon></button>
              </div>
            </div>
          }

          <!-- Quick add row for this section -->
          @if (showNewTaskInput && selectedStatus === section.status) {
            <div class="quick-add-row">
              <input type="text" class="new-task-input" placeholder="Task name\u2026"
                     [(ngModel)]="newTaskName"
                     (keyup.enter)="createNewTask()"
                     (keyup.escape)="showNewTaskInput = false"
                     [attr.aria-label]="'projects.details.newTaskName' | transloco" autofocus />
              <button class="btn-create" (click)="createNewTask()" [disabled]="isSavingTask" [attr.aria-label]="'projects.details.saveTask' | transloco">
                @if (isSavingTask) { \u2026 } @else { <mat-icon>check</mat-icon> }
              </button>
              <button class="btn-cancel" (click)="showNewTaskInput = false" [attr.aria-label]="'common.cancel' | transloco"><mat-icon>close</mat-icon></button>
            </div>
          }

          <button class="add-task-btn" (click)="quickAddToStatus(section.status)"
                  [attr.aria-label]="'Add task to ' + section.title">
            <mat-icon>add_circle</mat-icon> Add Task
          </button>
        </div>
      </div>
    }
  </div>

  <!-- Board View -->
  <div *ngIf="currentView === 'board' && !isLoading" class="board-view">
    <div class="board-columns">
      <div *ngFor="let column of boardColumns" class="board-column">
        <div class="column-header">
          <div class="column-title-wrapper">
            <span class="column-indicator" [style.background-color]="column.color"></span>
            <h3 class="column-title">{{ column.title }}</h3>
            <span class="column-count">{{ column.tasks.length }}</span>
          </div>
          <div class="column-actions">
            <button class="column-action-btn" (click)="addTaskToColumn(column)" [attr.aria-label]="'projects.details.addTask' | transloco"><mat-icon>add</mat-icon></button>
            <button class="column-action-btn" [attr.aria-label]="'projects.details.columnOptions' | transloco"><mat-icon>more_horiz</mat-icon></button>
          </div>
        </div>

        <div 
          class="tasks-container-board"
          cdkDropList
          [cdkDropListData]="column.tasks"
          (cdkDropListDropped)="onTaskDrop($event, column)"
          [id]="column.id"
          [cdkDropListConnectedTo]="getConnectedDropListIds()"
        >
          <div 
            *ngFor="let task of column.tasks" 
            class="task-card"
            cdkDrag
            (contextmenu)="openContextMenu($event, task)"
            title="Task"
          >
            <!-- card header: title + priority badge -->
            <div class="task-card-header">
              <h4 class="task-card-title">{{ task.title }}</h4>
              <span class="priority-badge-sm" [attr.data-priority]="getPriorityKey(task.priority)">
                {{ getPriorityIcon(task.priority) }}
              </span>
            </div>

            <!-- description preview -->
            <p class="task-card-desc" *ngIf="task.description">
              {{ task.description | slice:0:60 }}{{ task.description.length > 60 ? '\u2026' : '' }}
            </p>

            <!-- due date -->
            <div class="task-card-due" *ngIf="task.dueDate">
              <mat-icon class="due-icon">event</mat-icon>
              {{ formatDate(task.dueDate) }}
            </div>

            <div class="task-card-footer">
              <div class="task-assignees-group">
                <span *ngIf="task.assignee" class="assignee-avatar-sm"
                      [attr.title]="task.assignee.name">
                  {{ task.assignee.name.substring(0, 2).toUpperCase() }}
                </span>
                <span *ngIf="!task.assignee" class="text-muted" style="font-size:0.75rem">\u2014</span>
              </div>

              <div class="task-card-actions">
                <button class="card-action-btn" (click)="editTaskInline(task)"
                        [attr.aria-label]="'Edit ' + task.title" title="Edit"><mat-icon>edit</mat-icon></button>
                <button class="card-action-btn danger" (click)="deleteTask(task)"
                        [attr.aria-label]="'Delete ' + task.title" title="Delete"><mat-icon>delete</mat-icon></button>
              </div>
            </div>
          </div>

          <!-- Inline quick-add for this board column -->
          @if (showNewTaskInput && selectedStatus === column.status) {
            <div class="board-quick-add">
              <input type="text" class="new-task-input" placeholder="Task name\u2026"
                     [(ngModel)]="newTaskName"
                     (keyup.enter)="createNewTask()"
                     (keyup.escape)="showNewTaskInput = false"
                     [attr.aria-label]="'projects.details.newTaskName' | transloco" autofocus />
              <div class="quick-add-btns">
                <button class="btn-create" (click)="createNewTask()" [disabled]="isSavingTask">
                  {{ isSavingTask ? '\u2026' : '+ Add' }}
                </button>
                <button class="btn-cancel" (click)="showNewTaskInput = false">\u2715</button>
              </div>
            </div>
          }

          <button class="add-card-btn" (click)="addTaskToColumn(column)" [attr.aria-label]="'projects.details.addNewTask' | transloco">
            <mat-icon>add_circle</mat-icon> Add New
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550 Global Inline Edit Modal (works for Table, List, Board) \u2550\u2550\u2550 -->
  <div *ngIf="editingTask" class="inline-edit-overlay" role="dialog" aria-modal="true" [attr.aria-label]="'projects.details.editTask' | transloco">
    <div class="inline-edit-form">
      <div class="edit-form-header">
        <h3 class="edit-form-title">Edit Task</h3>
        <button class="btn-icon-close" (click)="cancelEdit()" [attr.aria-label]="'common.close' | transloco"><mat-icon>close</mat-icon></button>
      </div>

      <div class="edit-form-grid">
        <div class="edit-form-field">
          <label class="edit-label">Title *</label>
          <input type="text" class="edit-input"
                 [(ngModel)]="editFormData.title"
                 placeholder="Task title"
                 [attr.aria-label]="'projects.details.taskTitle' | transloco" />
        </div>

        <div class="edit-form-field">
          <label class="edit-label">Status</label>
          <select class="edit-select" [(ngModel)]="editFormData.status" [attr.aria-label]="'common.status' | transloco">
            <option value="todo">Draft</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>

        <div class="edit-form-field">
          <label class="edit-label">Priority</label>
          <select class="edit-select" [(ngModel)]="editFormData.priority" [attr.aria-label]="'common.priority' | transloco">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div class="edit-form-field">
          <label class="edit-label">Assignee</label>
          <select class="edit-select" [(ngModel)]="editFormData.assigneeId" [attr.aria-label]="'common.assignee' | transloco">
            <option value="">\u2014 None \u2014</option>
            <option *ngFor="let emp of employees" [value]="emp.id">{{ emp.name }}</option>
          </select>
        </div>

        <div class="edit-form-field">
          <label class="edit-label">Due Date</label>
          <input type="date" class="edit-input"
                 [(ngModel)]="editFormData.dueDate"
                 [attr.aria-label]="'common.dueDate' | transloco" title="Due date" />
        </div>
      </div>

      <div class="edit-form-actions">
        <button class="btn-cancel" (click)="cancelEdit()">Cancel</button>
        <button class="btn-create" (click)="saveEditTask()"
                [disabled]="!editFormData.title">Save</button>
      </div>
    </div>
  </div>

  <!-- Action Bar (when tasks are selected) -->
  <div *ngIf="selectedTasks.size > 0" class="action-bar">
    <div class="action-bar-content">
      <span class="selected-count">
        <mat-icon>check</mat-icon>
        {{ selectedTasks.size }} item Selected
      </span>
      <div class="action-buttons">
        <button class="action-btn" (click)="editSelectedTask()" [attr.aria-label]="'projects.details.editSelectedTask' | transloco">
          <mat-icon>edit</mat-icon> Edit
        </button>
        <button class="action-btn" (click)="clipToClipboard()" [attr.aria-label]="'common.copyToClipboard' | transloco">
          <mat-icon>content_copy</mat-icon> Clip to clipboard
        </button>
        <button class="action-btn danger" (click)="deleteSelectedTasks()" [attr.aria-label]="'projects.details.deleteSelectedTasks' | transloco">
          <mat-icon>delete</mat-icon> Delete
        </button>
      </div>
    </div>
  </div>

  <!-- Category Modal -->
  <div *ngIf="showCategoryModal" class="modal-overlay" (click)="closeCategoryModal()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingCategory ? 'Edit Category' : 'New Category' }}</h3>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Name of Category</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="Ex:Marketing"
            [(ngModel)]="newCategoryName"
          />
        </div>
        
        <div class="color-picker">
          <div *ngFor="let row of colorPalette" class="color-row">
            <button  [attr.aria-label]="'projects.details.selectColor' | transloco"
              *ngFor="let color of row" 
              class="color-option"
              [style.background-color]="color"
              [class.selected]="selectedColor === color"
              (click)="selectColor(color)"
            ></button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeCategoryModal()">Cancel</button>
        <button class="btn-primary" (click)="saveCategory()">Add</button>
      </div>
    </div>
  </div>
</div>`, styles: ["/* src/components/DashboardLayout/Projects/tichpro-project-component/tichpro-project-component.css */\n.tasks-container {\n  min-height: 100vh;\n  background: var(--ui-bg);\n  font-family: var(--font-family-primary);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: var(--ui-surface);\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.header-center {\n  display: flex;\n  gap: 1rem;\n  flex: 1;\n  max-width: 600px;\n  margin: 0 2rem;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.menu-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.menu-btn:hover {\n  background: var(--brand-neutral-100);\n  border-radius: 0.375rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-info .avatar {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-100);\n  border-radius: 50%;\n  font-size: 1.25rem;\n}\n.user-info .welcome-text {\n  font-size: 0.75rem;\n  color: var(--brand-neutral-600);\n}\n.user-info .user-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.search-wrapper {\n  flex: 1;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n}\n.search-input:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.employee-filter {\n  padding: 0.625rem 1rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  cursor: pointer;\n}\n.employee-filter:focus {\n  border-color: var(--brand-primary-600);\n}\n.icon-btn {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.icon-btn:hover {\n  background: var(--brand-neutral-100);\n  border-radius: 0.375rem;\n}\n.avatar-circle {\n  width: 36px;\n  height: 36px;\n  background: var(--brand-accent-400);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-500);\n}\n.breadcrumb {\n  padding: 1rem 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n}\n.breadcrumb-link {\n  color: var(--brand-primary-600);\n  text-decoration: none;\n}\n.breadcrumb-link:hover {\n  text-decoration: underline;\n}\n.breadcrumb-separator {\n  color: var(--brand-neutral-200);\n}\n.breadcrumb-current {\n  color: var(--ui-text-main);\n}\n.page-header {\n  padding: 0 2rem 1.5rem;\n}\n.page-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: var(--ui-surface);\n  border-top: 1px solid var(--brand-neutral-100);\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.toolbar-left,\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.view-switcher {\n  display: flex;\n  background: var(--brand-neutral-50);\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.view-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.view-btn:hover {\n  background: var(--ui-surface);\n}\n.view-btn.active {\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  font-weight: 500;\n  box-shadow: 0 1px 2px color-mix(in srgb, var(--brand-neutral-950) 5%, transparent);\n}\n.view-btn .icon {\n  font-size: 1rem;\n}\n.toolbar-btn {\n  padding: 0.5rem 0.75rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n}\n.toolbar-btn:hover {\n  background: var(--brand-neutral-50);\n}\n.btn-import {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--brand-neutral-900);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-import:hover {\n  background: var(--ui-text-main);\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-primary:hover {\n  background: var(--brand-primary-700);\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  color: var(--brand-neutral-600);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--brand-neutral-100);\n  border-top-color: var(--brand-primary-600);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrapper {\n  margin: 1.5rem 2rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.tasks-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tasks-table thead {\n  background: var(--brand-neutral-50);\n}\n.tasks-table thead th {\n  padding: 0.75rem 1rem;\n  text-align: start;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.tasks-table tbody tr {\n  border-bottom: 1px solid var(--brand-neutral-100);\n  transition: background 0.15s;\n}\n.tasks-table tbody tr:hover {\n  background: var(--brand-neutral-50);\n}\n.tasks-table tbody tr.selected {\n  background: var(--brand-primary-50);\n}\n.tasks-table tbody td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-700);\n}\n.col-checkbox {\n  width: 40px;\n}\n.task-id {\n  font-weight: 500;\n  color: var(--brand-neutral-600);\n}\n.task-summary {\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.category-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  color: var(--brand-neutral-700);\n}\n.assignee,\n.reporter {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.avatar-sm {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.priority-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.priority-badge[data-priority=urgent] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-800);\n}\n.priority-badge[data-priority=high] {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.priority-badge[data-priority=medium] {\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n}\n.priority-badge[data-priority=low] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-bg-surface);\n}\n.team-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  background: var(--functional-info-50);\n  color: var(--functional-info-700);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n}\n.date-cell {\n  color: var(--brand-neutral-600);\n  font-size: 0.8125rem;\n}\n.text-muted {\n  color: var(--brand-neutral-400);\n}\n.new-task-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-top: 2px dashed var(--brand-neutral-100);\n}\n.new-task-input {\n  flex: 1;\n  padding: 0.625rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n}\n.new-task-input:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.btn-icon {\n  padding: 0.5rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  cursor: pointer;\n}\n.btn-icon:hover {\n  background: var(--brand-neutral-50);\n}\n.btn-create {\n  padding: 0.625rem 1.5rem;\n  background: var(--brand-primary-600);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-create:hover {\n  background: var(--brand-primary-700);\n}\n.action-bar {\n  position: fixed;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 50;\n}\n.action-bar-content {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem 1.5rem;\n  background: var(--brand-neutral-900);\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n}\n.selected-count {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--ui-bg-surface);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: color-mix(in srgb, var(--ui-bg-surface) 10%, transparent);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.action-btn:hover {\n  background: color-mix(in srgb, var(--brand-neutral-500) 20%, transparent);\n}\n.action-btn.danger:hover {\n  background: var(--functional-danger-600);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-neutral-950) 50%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n.modal-content {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 20px 25px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.modal-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--brand-neutral-700);\n}\n.form-input {\n  width: 100%;\n  padding: 0.625rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n}\n.form-input:focus {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.color-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.color-row {\n  display: flex;\n  gap: 0.5rem;\n}\n.color-option {\n  width: 36px;\n  height: 36px;\n  border: 2px solid transparent;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.color-option:hover {\n  transform: scale(1.1);\n}\n.color-option.selected {\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 20%, transparent);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.btn-secondary {\n  padding: 0.625rem 1.25rem;\n  background: var(--ui-surface);\n  color: var(--brand-neutral-700);\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary:hover {\n  background: var(--brand-neutral-50);\n}\n@media (max-width: 1024px) {\n  .header-center {\n    max-width: 400px;\n  }\n  .tasks-table {\n    font-size: 0.8125rem;\n  }\n  .tasks-table th,\n  .tasks-table td {\n    padding: 0.625rem 0.75rem;\n  }\n}\n.list-view {\n  padding: 1.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.list-section {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  background: var(--brand-neutral-50);\n  border-bottom: 1px solid var(--brand-neutral-100);\n  cursor: pointer;\n}\n.section-header:hover {\n  background: var(--brand-neutral-100);\n}\n.section-indicator {\n  width: 4px;\n  height: 20px;\n  border-radius: 2px;\n}\n.section-indicator.todo {\n  background: var(--functional-warning-500);\n}\n.section-indicator.in-progress {\n  background: var(--functional-info-500);\n}\n.section-indicator.review {\n  background: var(--functional-warning-500);\n}\n.section-indicator.done {\n  background: var(--functional-success-500);\n}\n.section-title {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.section-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n}\n.section-toggle {\n  margin-inline-start: auto;\n  background: none;\n  border: none;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n}\n.tasks-list {\n  padding: 0.5rem;\n}\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  margin-bottom: 0.5rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n}\n.task-item:hover {\n  background: var(--brand-neutral-50);\n  box-shadow: 0 1px 3px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n}\n.task-drag-handle {\n  color: var(--brand-neutral-200);\n  cursor: grab;\n  font-size: 0.875rem;\n}\n.task-drag-handle:active {\n  cursor: grabbing;\n}\n.task-checkbox {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--brand-primary-600);\n}\n.task-title {\n  flex: 1;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.task-title.completed {\n  text-decoration: line-through;\n  color: var(--brand-neutral-400);\n}\n.task-badges {\n  display: flex;\n  gap: 0.5rem;\n  margin-inline-start: auto;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.badge-link {\n  background: var(--functional-info-50);\n  color: var(--functional-info-800);\n}\n.badge.badge-attachment {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-800);\n}\n.task-meta {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-inline-start: auto;\n}\n.task-date {\n  font-size: 0.8125rem;\n  color: var(--brand-neutral-600);\n}\n.task-assignees {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.assignee-avatar {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.assignee-avatar:first-child {\n  margin-inline-start: 0;\n}\n.assignee-count {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.add-task-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: 1px dashed var(--brand-neutral-200);\n  border-radius: 0.5rem;\n  color: var(--brand-neutral-600);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-task-btn:hover {\n  background: var(--brand-neutral-50);\n  border-color: var(--brand-primary-600);\n  color: var(--brand-primary-600);\n}\n.add-task-btn .icon {\n  font-size: 1.125rem;\n}\n.board-view {\n  padding: 1.5rem 2rem;\n  overflow-x: auto;\n}\n.board-columns {\n  display: flex;\n  gap: 1.5rem;\n  min-height: calc(100vh - 300px);\n}\n.board-column {\n  flex: 0 0 320px;\n  display: flex;\n  flex-direction: column;\n}\n.column-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem 0.75rem 0 0;\n  border-bottom: 1px solid var(--brand-neutral-100);\n}\n.column-title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.column-indicator {\n  width: 4px;\n  height: 24px;\n  border-radius: 2px;\n}\n.column-title {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.column-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 0.5rem;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-600);\n}\n.column-actions {\n  display: flex;\n  gap: 0.25rem;\n}\n.column-action-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: var(--brand-neutral-600);\n  font-size: 1.125rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.column-action-btn:hover {\n  background: var(--brand-neutral-100);\n  color: var(--ui-text-main);\n}\n.tasks-container-board {\n  flex: 1;\n  padding: 1rem;\n  background: var(--brand-neutral-50);\n  border-radius: 0 0 0.75rem 0.75rem;\n  overflow-y: auto;\n}\n.task-card {\n  padding: 1.25rem;\n  margin-bottom: 1rem;\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.task-card:hover {\n  box-shadow: 0 4px 6px color-mix(in srgb, var(--brand-neutral-950) 10%, transparent);\n  border-color: var(--brand-neutral-200);\n}\n.task-card.cdk-drag-preview {\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  opacity: 0.9;\n}\n.task-card.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.task-card-title {\n  margin: 0 0 1rem 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  line-height: 1.4;\n}\n.task-card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.tag {\n  padding: 0.375rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.tag.tag-orange {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-800);\n}\n.tag.tag-blue {\n  background: var(--functional-info-200);\n  color: var(--functional-info-800);\n}\n.task-card-progress {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.progress-bar {\n  flex: 1;\n  height: 6px;\n  background: var(--brand-neutral-100);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--functional-info-500),\n      var(--functional-info-400));\n  border-radius: 9999px;\n  transition: width 0.3s ease;\n}\n.progress-text {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--functional-info-500);\n}\n.task-card-status {\n  margin-bottom: 1rem;\n}\n.status-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 1rem;\n}\n.status-icon.success {\n  background: var(--functional-success-100);\n  color: var(--functional-success-600);\n}\n.status-icon.warning {\n  background: var(--brand-accent-100);\n  color: var(--brand-accent-600);\n}\n.status-icon.alert {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.task-card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid var(--brand-neutral-100);\n}\n.task-assignees-group {\n  display: flex;\n  align-items: center;\n}\n.assignee-avatar-sm {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--functional-info-100);\n  color: var(--functional-info-800);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.assignee-avatar-sm:first-child {\n  margin-inline-start: 0;\n}\n.assignee-more {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--brand-neutral-900);\n  color: var(--brand-neutral-500);\n  border-radius: 50%;\n  border: 2px solid var(--ui-border);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  margin-inline-start: -8px;\n}\n.task-metrics {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.metric {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--brand-neutral-600);\n}\n.metric-divider {\n  color: var(--brand-neutral-200);\n}\n.add-card-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem;\n  background: var(--ui-surface);\n  border: 1px dashed var(--brand-neutral-200);\n  border-radius: 0.5rem;\n  color: var(--brand-neutral-600);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-card-btn:hover {\n  background: var(--brand-neutral-50);\n  border-color: var(--brand-primary-600);\n  color: var(--brand-primary-600);\n}\n.add-card-btn .icon {\n  font-size: 1.125rem;\n}\n.context-menu-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n.context-menu {\n  position: fixed;\n  min-width: 200px;\n  background: var(--ui-surface);\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 25px color-mix(in srgb, var(--brand-neutral-950) 15%, transparent);\n  border: 1px solid var(--brand-neutral-100);\n  padding: 0.5rem 0;\n  z-index: 100;\n}\n.context-menu-section {\n  padding: 0.5rem 1rem 0.25rem;\n}\n.context-menu-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--brand-neutral-400);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.context-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  background: none;\n  border: none;\n  text-align: start;\n  font-size: 0.875rem;\n  color: var(--brand-neutral-700);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.context-menu-item:hover {\n  background: var(--brand-neutral-100);\n}\n.context-menu-item.danger {\n  color: var(--functional-danger-600);\n}\n.context-menu-item.danger:hover {\n  background: var(--functional-danger-50);\n}\n.context-icon {\n  font-size: 1rem;\n}\n.context-menu-divider {\n  height: 1px;\n  background: var(--brand-neutral-100);\n  margin: 0.5rem 0;\n}\n.cdk-drop-list-dragging .task-card:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.task-card.cdk-drag-placeholder {\n  opacity: 0.4;\n  background: var(--brand-neutral-100);\n  border: 2px dashed var(--brand-neutral-200);\n}\n.new-task-select {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n  min-width: 130px;\n}\n.new-task-date {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--brand-neutral-100);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n}\n.btn-cancel {\n  padding: 0.625rem 1rem;\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n}\n.btn-cancel:hover {\n  background: var(--brand-neutral-50);\n  color: var(--ui-text-main);\n}\n.btn-create:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inline-edit-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--brand-neutral-950) 40%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n}\n.inline-edit-form {\n  background: var(--ui-surface);\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 50px color-mix(in srgb, var(--brand-neutral-950) 20%, transparent);\n  padding: 2rem;\n  width: 100%;\n  max-width: 600px;\n}\n.edit-form-title {\n  margin: 0 0 1.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n}\n.edit-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.edit-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.edit-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.edit-input {\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  width: 100%;\n}\n.edit-input:focus {\n  outline: none;\n  border-color: var(--brand-primary-600);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary-600) 10%, transparent);\n}\n.edit-select {\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--brand-neutral-200);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background: var(--ui-surface);\n  color: var(--ui-text-main);\n  cursor: pointer;\n}\n.edit-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-block-start: 1.5rem;\n}\n.col-actions {\n  width: 80px;\n  text-align: center;\n}\n.row-actions {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: center;\n}\n.row-action-btn {\n  padding: 0.25rem 0.5rem;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  opacity: 0.6;\n  transition: opacity 0.15s, border-color 0.15s;\n}\n.row-action-btn:hover {\n  opacity: 1;\n  border-color: var(--brand-neutral-200);\n  background: var(--brand-neutral-50);\n}\n.row-action-btn.danger:hover {\n  border-color: var(--functional-danger-200);\n  background: var(--functional-danger-50);\n}\n@media (max-width: 768px) {\n  .tasks-container {\n    margin-inline-start: 0 !important;\n    padding: 16px;\n  }\n  .table-wrapper {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tasks-table {\n    min-width: 600px;\n  }\n  .toolbar {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .toolbar-left,\n  .toolbar-right {\n    width: 100%;\n  }\n  .header-center {\n    max-width: 100%;\n    margin: 0;\n  }\n}\n@media (max-width: 640px) {\n  .mat-dialog-container,\n  .cdk-overlay-pane {\n    max-width: 95vw !important;\n    width: 95vw !important;\n  }\n  .page-title {\n    font-size: 20px;\n  }\n  h2,\n  .section-title {\n    font-size: 18px;\n  }\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge.status--todo {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-700);\n}\n.status-badge.status--pending {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-700);\n}\n.status-badge.status--in-progress {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.status-badge.status--done {\n  background: var(--functional-success-100);\n  color: var(--functional-success-700);\n}\n.status-badge.status--cancelled {\n  background: var(--functional-danger-100);\n  color: var(--functional-danger-700);\n}\n.status-badge.status--on-hold {\n  background: var(--functional-warning-100);\n  color: var(--functional-warning-700);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  gap: 12px;\n  text-align: center;\n}\n.empty-img {\n  width: 120px;\n  opacity: .7;\n}\n.empty-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.empty-desc {\n  font-size: 0.875rem;\n  color: var(--ui-text-muted);\n  margin: 0;\n}\n.task-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.task-card-desc {\n  font-size: 0.78rem;\n  color: var(--ui-text-muted);\n  margin: 6px 0 0;\n  line-height: 1.4;\n}\n.task-card-due {\n  font-size: 0.75rem;\n  color: var(--ui-text-muted);\n  margin-block-start: 6px;\n}\n.task-card-actions {\n  display: flex;\n  gap: 4px;\n}\n.card-action-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  opacity: 0.6;\n  transition: opacity .15s;\n}\n.card-action-btn:hover {\n  opacity: 1;\n  background: var(--ui-bg-hover);\n}\n.card-action-btn.danger:hover {\n  background: var(--functional-danger-50);\n}\n.priority-badge-sm {\n  font-size: 0.7rem;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: var(--ui-bg-hover);\n  flex-shrink: 0;\n}\n[data-priority=urgent] {\n  color: var(--functional-danger-500);\n}\n[data-priority=high] {\n  color: var(--functional-warning-500);\n}\n[data-priority=medium] {\n  color: var(--functional-info-500);\n}\n[data-priority=low] {\n  color: var(--brand-neutral-400);\n}\n/*# sourceMappingURL=tichpro-project-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TichproProjectComponent, { className: "TichproProjectComponent", filePath: "src/components/dashboardlayout/projects/tichpro-project-component/tichpro-project-component.ts", lineNumber: 49 });
})();
export {
  TichproProjectComponent
};
//# sourceMappingURL=chunk-NRKJ7CGL.js.map
