import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-IIF23ZQ3.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
  MatTabsModule
} from "./chunk-VXEIUSAH.js";
import "./chunk-S3Q32BCL.js";
import {
  AttendanceService
} from "./chunk-GQUEZJ2O.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-O2QTMEGD.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatOption
} from "./chunk-Y6F5OIGJ.js";
import {
  MatCardModule
} from "./chunk-UKZCYTB4.js";
import "./chunk-XWKVXKPV.js";
import {
  MatTooltipModule
} from "./chunk-PVDVVREM.js";
import {
  MatTooltip
} from "./chunk-HIQBHLFY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OUF2VBR7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  AuthService
} from "./chunk-FLGCKBXQ.js";
import "./chunk-5LLUWZOB.js";
import "./chunk-TXEUWJT3.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-5X6PCUCF.js";
import "./chunk-WZAYHTBV.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-IGWDDKWL.js";
import "./chunk-VOJQCX2P.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import "./chunk-P46WWH45.js";
import {
  _IdGenerator
} from "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-Z3ORTAM2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled);
    \u0275\u0275ariaProperty("aria-labelledby", ctx_r1._pageSizeLabelId);
    \u0275\u0275property("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14);
    \u0275\u0275conditionalCreate(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled())("tabindex", ctx_r1._previousButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled())("tabindex", ctx_r1._nextButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  changes = new Subject();
  /** A label for the page size selector. */
  itemsPerPageLabel = "Items per page:";
  /** A label for the button that increments the current page. */
  nextPageLabel = "Next page";
  /** A label for the button that decrements the current page. */
  previousPageLabel = "Previous page";
  /** A label for the button that moves to the first page. */
  firstPageLabel = "First page";
  /** A label for the button that moves to the last page. */
  lastPageLabel = "Last page";
  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
  };
  static \u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatPaginatorIntl,
    factory: _MatPaginatorIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var MatPaginator = class _MatPaginator {
  _intl = inject(MatPaginatorIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** If set, styles the "page size" form field with the designated style. */
  _formFieldAppearance;
  /** ID for the DOM node containing the paginator's items per page label. */
  _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
  _intlChanges;
  _isInitialized = false;
  _initializedStream = new ReplaySubject(1);
  /**
   * Theme color of the underlying form controls. This API is supported in M2
   * themes only,it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/paginator/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex = 0;
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  _length = 0;
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  _pageSize;
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  _pageSizeOptions = [];
  /** Whether to hide the page size selection UI from the user. */
  hidePageSize = false;
  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons = false;
  /** Used to configure the underlying `MatSelect` inside the paginator. */
  selectConfig = {};
  /** Whether the paginator is disabled. */
  disabled = false;
  /** Event emitted when the paginator changes the page size or page index. */
  page = new EventEmitter();
  /** Displayed set of page size options. Will be sorted and include current page size. */
  _displayedPageSizeOptions;
  /** Emits when the paginator is initialized. */
  initialized = this._initializedStream;
  constructor() {
    const _intl = this._intl;
    const defaults = inject(MAT_PAGINATOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (this.hasNextPage()) {
      this._navigate(this.pageIndex + 1);
    }
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (this.hasPreviousPage()) {
      this._navigate(this.pageIndex - 1);
    }
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (this.hasPreviousPage()) {
      this._navigate(0);
    }
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (this.hasNextPage()) {
      this._navigate(this.getNumberOfPages() - 1);
    }
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  /** Navigates to a specific page index. */
  _navigate(index) {
    const previousIndex = this.pageIndex;
    if (index !== previousIndex) {
      this.pageIndex = index;
      this._emitPageEvent(previousIndex);
    }
  }
  /**
   * Callback invoked when one of the navigation buttons is called.
   * @param targetIndex Index to which the paginator should navigate.
   * @param isDisabled Whether the button is disabled.
   */
  _buttonClicked(targetIndex, isDisabled) {
    if (!isDisabled) {
      this._navigate(targetIndex);
    }
  }
  static \u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
    inputs: {
      color: "color",
      pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
      length: [2, "length", "length", numberAttribute],
      pageSize: [2, "pageSize", "pageSize", numberAttribute],
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
      showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
      selectConfig: "selectConfig",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      page: "page"
    },
    exportAs: ["matPaginator"],
    decls: 14,
    vars: 14,
    consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275conditionalCreate(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
        \u0275\u0275elementStart(7, "button", 7);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled())("tabindex", ctx._previousButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled())("tabindex", ctx._nextButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
      }
    },
    dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
    styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static \u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPaginatorModule,
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
    exports: [MatPaginator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_PAGINATOR_INTL_PROVIDER],
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/components/DashboardLayout/SidebarComponents/general-attendance/general-attendance.ts
var _forTrack0 = ($index, $item) => $item.id ?? $index;
function GeneralAttendanceComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 41);
    \u0275\u0275element(3, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Reset ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "common.resetFilters"));
  }
}
function GeneralAttendanceComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 44);
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_61_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Search: ", ctx_r1.searchQuery);
  }
}
function GeneralAttendanceComponent_Conditional_61_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Date: ", \u0275\u0275pipeBind2(2, 1, ctx_r1.selectedDate, "mediumDate"));
  }
}
function GeneralAttendanceComponent_Conditional_61_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Shift: ", ctx_r1.shiftFilter);
  }
}
function GeneralAttendanceComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, GeneralAttendanceComponent_Conditional_61_Conditional_1_Template, 2, 1, "span", 45);
    \u0275\u0275conditionalCreate(2, GeneralAttendanceComponent_Conditional_61_Conditional_2_Template, 3, 4, "span", 45);
    \u0275\u0275conditionalCreate(3, GeneralAttendanceComponent_Conditional_61_Conditional_3_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchQuery ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedDate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shiftFilter ? 3 : -1);
  }
}
function GeneralAttendanceComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function GeneralAttendanceComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "p");
    \u0275\u0275text(2, "Failed to load attendance records.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Conditional_63_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAttendanceRecords());
    });
    \u0275\u0275text(5, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "common.retryLoading"));
  }
}
function GeneralAttendanceComponent_Conditional_64_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Employee");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64)(1, "div", 65)(2, "div", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 67)(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const record_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.getFullName(record_r4)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(record_r4) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r4.userName ?? "");
  }
}
function GeneralAttendanceComponent_Conditional_64_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", record_r5.weekDay);
  }
}
function GeneralAttendanceComponent_Conditional_64_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, GeneralAttendanceComponent_Conditional_64_td_7_Conditional_2_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(record_r5.attendanceDate || record_r5.checkInTime) || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r5.weekDay ? 2 : -1);
  }
}
function GeneralAttendanceComponent_Conditional_64_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(record_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(record_r6), " ");
  }
}
function GeneralAttendanceComponent_Conditional_64_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Check In");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDate(record_r7.checkInTime) || "\u2014");
  }
}
function GeneralAttendanceComponent_Conditional_64_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 63);
    \u0275\u0275text(1, "Check Out");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDate(record_r8.checkOutTime) || "\u2014");
  }
}
function GeneralAttendanceComponent_Conditional_64_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 72);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 73)(1, "button", 74);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 75);
    \u0275\u0275element(4, "circle", 76)(5, "circle", 77)(6, "circle", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "mat-menu", null, 0)(9, "button", 79);
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 79);
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rowMenu_r9 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", rowMenu_r9);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.rowActions"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
  }
}
function GeneralAttendanceComponent_Conditional_64_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 80);
  }
}
function GeneralAttendanceComponent_Conditional_64_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 81);
  }
}
function GeneralAttendanceComponent_Conditional_64_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No records match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Conditional_64_Conditional_22_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(4, "Clear filters");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 1, "common.clearFilters"));
  }
}
function GeneralAttendanceComponent_Conditional_64_Conditional_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No attendance records found.");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_64_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GeneralAttendanceComponent_Conditional_64_Conditional_22_Conditional_3_Template, 5, 3)(4, GeneralAttendanceComponent_Conditional_64_Conditional_22_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasActiveFilters ? 3 : 4);
  }
}
function GeneralAttendanceComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 49);
    \u0275\u0275elementContainerStart(2, 50);
    \u0275\u0275template(3, GeneralAttendanceComponent_Conditional_64_th_3_Template, 2, 0, "th", 51)(4, GeneralAttendanceComponent_Conditional_64_td_4_Template, 9, 3, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 53);
    \u0275\u0275template(6, GeneralAttendanceComponent_Conditional_64_th_6_Template, 2, 0, "th", 51)(7, GeneralAttendanceComponent_Conditional_64_td_7_Template, 3, 2, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 54);
    \u0275\u0275template(9, GeneralAttendanceComponent_Conditional_64_th_9_Template, 2, 0, "th", 51)(10, GeneralAttendanceComponent_Conditional_64_td_10_Template, 3, 3, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 55);
    \u0275\u0275template(12, GeneralAttendanceComponent_Conditional_64_th_12_Template, 2, 0, "th", 51)(13, GeneralAttendanceComponent_Conditional_64_td_13_Template, 2, 1, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 56);
    \u0275\u0275template(15, GeneralAttendanceComponent_Conditional_64_th_15_Template, 2, 0, "th", 51)(16, GeneralAttendanceComponent_Conditional_64_td_16_Template, 2, 1, "td", 52);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 57);
    \u0275\u0275template(18, GeneralAttendanceComponent_Conditional_64_th_18_Template, 2, 0, "th", 58)(19, GeneralAttendanceComponent_Conditional_64_td_19_Template, 13, 6, "td", 59);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, GeneralAttendanceComponent_Conditional_64_tr_20_Template, 1, 0, "tr", 60)(21, GeneralAttendanceComponent_Conditional_64_tr_21_Template, 1, 0, "tr", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, GeneralAttendanceComponent_Conditional_64_Conditional_22_Template, 5, 1, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dataSource.data.length === 0 ? 22 : -1);
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1, "No records match your current filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 89);
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Conditional_65_Conditional_0_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(3, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1, "No attendance records have been recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "path", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 87);
    \u0275\u0275text(4, "No Attendance Records");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, GeneralAttendanceComponent_Conditional_65_Conditional_0_Conditional_5_Template, 4, 0)(6, GeneralAttendanceComponent_Conditional_65_Conditional_0_Conditional_6_Template, 2, 0, "p", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.hasActiveFilters ? 5 : 6);
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFullName(record_r12) || "\u2014", " ");
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 90)(1, "header", 91)(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, GeneralAttendanceComponent_Conditional_65_Conditional_1_For_2_Conditional_4_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 93)(6, "dl", 94)(7, "div")(8, "dt");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Check In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "Check Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const record_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(record_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(record_r12), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBusiness ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(record_r12.attendanceDate || record_r12.checkInTime) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(record_r12.checkInTime) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(record_r12.checkOutTime) || "\u2014");
  }
}
function GeneralAttendanceComponent_Conditional_65_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275repeaterCreate(1, GeneralAttendanceComponent_Conditional_65_Conditional_1_For_2_Template, 22, 7, "article", 90, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredRecords);
  }
}
function GeneralAttendanceComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GeneralAttendanceComponent_Conditional_65_Conditional_0_Template, 7, 1, "div", 84)(1, GeneralAttendanceComponent_Conditional_65_Conditional_1_Template, 3, 0, "div", 85);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.filteredRecords.length === 0 ? 0 : 1);
  }
}
var _GeneralAttendanceComponent = class _GeneralAttendanceComponent {
  constructor() {
    this.attendanceService = inject(AttendanceService);
    this.authService = inject(AuthService);
    this.cdr = inject(ChangeDetectorRef);
    this.isBusiness = (this.authService.getUserTypeId() ?? 0) === 3;
    this.displayedColumns = this.isBusiness ? ["employee", "date", "leaveType", "checkIn", "checkOut", "actions"] : ["date", "leaveType", "checkIn", "checkOut", "actions"];
    this.dataSource = new MatTableDataSource([]);
    this.allRecords = [];
    this.searchQuery = "";
    this.selectedDate = null;
    this.shiftFilter = "";
    this.dateInputValue = "";
    this.isLoading = false;
    this.loadError = false;
    this.viewMode = "table";
    this.isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
    this.onFsChange = () => {
      this.isFullscreen.set(!!document.fullscreenElement);
      this.cdr.markForCheck();
    };
  }
  setView(mode) {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  toggleFullscreen() {
    const el = document.querySelector(".attendance-page");
    if (!document.fullscreenElement)
      el?.requestFullscreen().catch(() => {
      });
    else
      document.exitFullscreen().catch(() => {
      });
  }
  get hasActiveFilters() {
    return !!(this.searchQuery || this.selectedDate || this.shiftFilter);
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedDate = null;
    this.shiftFilter = "";
    this.dateInputValue = "";
    this.applyFilters();
  }
  ngOnInit() {
    this.loadAttendanceRecords();
    document.addEventListener("fullscreenchange", this.onFsChange);
  }
  ngOnDestroy() {
    document.removeEventListener("fullscreenchange", this.onFsChange);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  get filteredRecords() {
    return this.dataSource.data;
  }
  loadAttendanceRecords() {
    this.isLoading = true;
    this.loadError = false;
    this.cdr.markForCheck();
    this.attendanceService.getAllEmployeesAttendance().subscribe({
      next: (records) => {
        this.allRecords = records ?? [];
        this.dataSource.data = this.allRecords;
        this.isLoading = false;
        this.applyFilters();
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.loadError = true;
        this.cdr.markForCheck();
      }
    });
  }
  applyFilters() {
    const query = this.searchQuery.trim().toLowerCase();
    this.dataSource.data = this.allRecords.filter((record) => {
      const fullName = this.getFullName(record).toLowerCase();
      const statusTxt = this.getStatusLabel(record).toLowerCase();
      const matchesSearch = !query || fullName.includes(query) || statusTxt.includes(query) || (record.weekDay ?? "").toLowerCase().includes(query) || (record.userName ?? "").toLowerCase().includes(query);
      let matchesDate = true;
      if (this.selectedDate) {
        if (!record.checkInTime) {
          matchesDate = false;
        } else {
          const checkIn = new Date(record.checkInTime);
          matchesDate = this.normalizeDate(checkIn).getTime() === this.normalizeDate(this.selectedDate).getTime();
        }
      }
      const matchesShift = !this.shiftFilter || String(Number(record.leaveType ?? 0)) === this.shiftFilter || statusTxt === this.shiftFilter.toLowerCase();
      return matchesSearch && matchesDate && matchesShift;
    });
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  onSearchChange() {
    this.applyFilters();
  }
  onDateInputChange(value) {
    this.dateInputValue = value;
    this.selectedDate = value ? new Date(value) : null;
    this.applyFilters();
  }
  onShiftChange(value) {
    this.shiftFilter = value;
    this.applyFilters();
  }
  importAttendance() {
  }
  // Backend `leaveType` is the daily attendance STATUS, not a leave subtype.
  //   0 → Working, 1 → Leave, 2 → Meeting, 3 → Other
  getStatusLabel(record) {
    switch (Number(record?.leaveType ?? 0)) {
      case 0:
        return "Working";
      case 1:
        return "Leave";
      case 2:
        return "Meeting";
      case 3:
        return "Other";
      default:
        return "\u2014";
    }
  }
  /** Modifier class for the status badge — paired with .ui-status-badge. */
  getStatusClass(record) {
    switch (Number(record?.leaveType ?? 0)) {
      case 0:
        return "ui-status-badge--working";
      case 1:
        return "ui-status-badge--leave";
      case 2:
        return "ui-status-badge--meeting";
      case 3:
        return "ui-status-badge--other";
      default:
        return "";
    }
  }
  /** Back-compat aliases — keep callers using the old names from breaking. */
  getLeaveTypeLabel(record) {
    return this.getStatusLabel(record);
  }
  getShiftType(record) {
    return this.getStatusLabel(record);
  }
  getFullName(record) {
    const first = record.employee?.firstName ?? "";
    const last = record.employee?.lastName ?? "";
    return `${first} ${last}`.trim();
  }
  formatDateWithOrdinal(value) {
    if (!value)
      return "";
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return "";
    const day = d.getDate();
    const ordinal = this.getOrdinal(day);
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    return `${month} ${day}${ordinal} ${d.getFullYear()}`;
  }
  getOrdinal(day) {
    if (day > 3 && day < 21)
      return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  getInitials(name) {
    if (!name)
      return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  normalizeDate(d) {
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
  }
  formatDate(date) {
    return this.formatDateWithOrdinal(date);
  }
};
_GeneralAttendanceComponent.\u0275fac = function GeneralAttendanceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeneralAttendanceComponent)();
};
_GeneralAttendanceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneralAttendanceComponent, selectors: [["app-general-attendance"]], viewQuery: function GeneralAttendanceComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 66, vars: 51, consts: [["rowMenu", "matMenu"], [1, "attendance-container", "attendance-page"], [1, "page-header"], [1, "page-header__top"], [1, "breadcrumb"], [1, "breadcrumb__item"], ["aria-hidden", "true", 1, "breadcrumb__sep"], [1, "breadcrumb__item", "breadcrumb__item--active"], [1, "page-header__row"], [1, "page-title"], [1, "btn-import", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z", "fill", "currentColor"], [1, "table-toolbar"], ["title", "Refresh", 1, "toolbar-btn", 3, "click"], ["d", "M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z", "fill", "currentColor"], [1, "toolbar-search"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "toolbar-search__icon"], ["d", "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z", "fill", "currentColor"], ["type", "text", "placeholder", "Search", 1, "toolbar-search__input", 3, "ngModelChange", "ngModel"], ["title", "Filters", 1, "toolbar-btn"], ["d", "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z", "fill", "currentColor"], ["type", "date", 1, "toolbar-date-input", 3, "ngModelChange", "ngModel"], [1, "toolbar-shift-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["title", "Reset filters", 1, "toolbar-btn", "toolbar-btn--reset"], ["role", "group", 1, "ui-view-toggle"], ["type", "button", "title", "Table view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z", "fill", "currentColor"], ["type", "button", "title", "Card view", 1, "ui-view-toggle__btn", 3, "click"], ["d", "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z", "fill", "currentColor"], [1, "toolbar-btn", "toolbar-btn--expand", 3, "click"], ["role", "status", "aria-live", "polite", 1, "active-filters"], ["role", "status", "aria-live", "polite", 1, "loading-state"], ["role", "alert", 1, "error-state"], [1, "attendance-table-container"], ["title", "Reset filters", 1, "toolbar-btn", "toolbar-btn--reset", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", "fill", "currentColor"], ["d", "M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z", "fill", "currentColor"], ["d", "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z", "fill", "currentColor"], [1, "filter-chip"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "loading-spinner-icon"], ["d", "M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z", "fill", "currentColor"], [1, "retry-btn", 3, "click"], ["mat-table", "", 1, "attendance-table", 3, "dataSource"], ["matColumnDef", "employee"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "leaveType"], ["matColumnDef", "checkIn"], ["matColumnDef", "checkOut"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "employee-cell"], [1, "employee-initials"], [1, "employee-text"], [1, "employee-name"], [1, "employee-role"], [1, "muted", 2, "margin-inline-start", "6px"], [1, "ui-status-badge"], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], [1, "actions-menu-btn", 3, "matMenuTriggerFor"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["cx", "12", "cy", "5", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], ["cx", "12", "cy", "19", "r", "2", "fill", "currentColor"], ["mat-menu-item", "", 3, "disabled"], ["mat-header-row", ""], ["mat-row", ""], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z", "fill", "currentColor", "opacity", ".3"], [1, "ui-empty", "ui-empty--compact"], [1, "ui-cards-grid"], ["d", "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z", "fill", "currentColor"], [1, "ui-empty__title"], [1, "ui-empty__sub"], [1, "ui-empty__cta", 3, "click"], [1, "ui-card"], [1, "ui-card__head"], [1, "employee-name", 2, "font-size", "13px", "font-weight", "600"], [1, "ui-card__body"], [1, "ui-card__meta"]], template: function GeneralAttendanceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "nav", 4);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "Mtwork");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275text(10, "Attendance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "h1", 9);
    \u0275\u0275text(13, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Template_button_click_14_listener() {
      return ctx.importAttendance();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 11);
    \u0275\u0275element(17, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Import ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Template_button_click_20_listener() {
      return ctx.loadAttendanceRecords();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 11);
    \u0275\u0275element(23, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 17);
    \u0275\u0275element(26, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "input", 19);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function GeneralAttendanceComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GeneralAttendanceComponent_Template_input_ngModelChange_27_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 11);
    \u0275\u0275element(32, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "input", 22);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function GeneralAttendanceComponent_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.dateInputValue, $event) || (ctx.dateInputValue = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GeneralAttendanceComponent_Template_input_ngModelChange_33_listener($event) {
      return ctx.onDateInputChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 23);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function GeneralAttendanceComponent_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.shiftFilter, $event) || (ctx.shiftFilter = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GeneralAttendanceComponent_Template_select_ngModelChange_35_listener($event) {
      return ctx.onShiftChange($event);
    });
    \u0275\u0275elementStart(37, "option", 24);
    \u0275\u0275text(38, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 25);
    \u0275\u0275text(40, "Working");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 26);
    \u0275\u0275text(42, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 27);
    \u0275\u0275text(44, "Meeting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 28);
    \u0275\u0275text(46, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, GeneralAttendanceComponent_Conditional_47_Template, 5, 3, "button", 29);
    \u0275\u0275elementStart(48, "div", 30);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementStart(50, "button", 31);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Template_button_click_50_listener() {
      return ctx.setView("table");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 11);
    \u0275\u0275element(53, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "button", 33);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Template_button_click_54_listener() {
      return ctx.setView("cards");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 11);
    \u0275\u0275element(57, "path", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "button", 35);
    \u0275\u0275listener("click", function GeneralAttendanceComponent_Template_button_click_58_listener() {
      return ctx.toggleFullscreen();
    });
    \u0275\u0275conditionalCreate(59, GeneralAttendanceComponent_Conditional_59_Template, 2, 0, ":svg:svg", 11)(60, GeneralAttendanceComponent_Conditional_60_Template, 2, 0, ":svg:svg", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(61, GeneralAttendanceComponent_Conditional_61_Template, 4, 3, "div", 36);
    \u0275\u0275conditionalCreate(62, GeneralAttendanceComponent_Conditional_62_Template, 5, 0, "div", 37);
    \u0275\u0275conditionalCreate(63, GeneralAttendanceComponent_Conditional_63_Template, 6, 3, "div", 38);
    \u0275\u0275conditionalCreate(64, GeneralAttendanceComponent_Conditional_64_Template, 23, 4, "div", 39);
    \u0275\u0275conditionalCreate(65, GeneralAttendanceComponent_Conditional_65_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classProp("ui-page--fullscreen", ctx.isFullscreen());
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 31, "common.breadcrumb"));
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 33, "attendance.importAttendance"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 35, "common.refresh"));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 37, "attendance.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 39, "common.filters"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.dateInputValue);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(34, 41, "attendance.filterByDate"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.shiftFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 43, "attendance.filterByShift"));
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx.hasActiveFilters ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 45, "common.switchView"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 47, "common.tableView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.viewMode === "cards");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(55, 49, "common.cardView"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ui-view-toggle__btn--active", ctx.isFullscreen());
    \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Expand to fullscreen")("title", ctx.isFullscreen() ? "Exit fullscreen" : "Expand");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isFullscreen() ? 59 : 60);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.hasActiveFilters ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading && ctx.loadError ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading && !ctx.loadError && ctx.viewMode === "table" ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoading && !ctx.loadError && ctx.viewMode === "cards" ? 65 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  MatPaginatorModule,
  TranslocoModule,
  DatePipe,
  TranslocoPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n  background: var(--ui-bg);\n  min-height: 100vh;\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header__top[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.breadcrumb__item[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-weight: 400;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.breadcrumb__item--active[_ngcontent-%COMP%] {\n  color: var(--brand-accent-500);\n  font-weight: 500;\n}\n.page-header__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  white-space: nowrap;\n}\n.btn-import[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px 12px 0 0;\n  border-bottom: none;\n  flex-wrap: wrap;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  transition: background 0.12s ease;\n  flex-shrink: 0;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.toolbar-btn--expand[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n.toolbar-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 200px;\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 10px;\n}\n.toolbar-search__icon[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.toolbar-search__input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  min-width: 0;\n}\n.toolbar-search__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.toolbar-dropdown-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s ease;\n}\n.toolbar-dropdown-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.attendance-table-container[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 12px 12px;\n  overflow-x: auto;\n}\n.attendance-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-header-row[_ngcontent-%COMP%] {\n  background: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n}\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.mat-mdc-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ui-border);\n  transition: background 0.12s ease;\n}\n.mat-mdc-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ui-text-main);\n  padding: 14px 16px;\n  border-bottom: none;\n}\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.employee-initials[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--brand-accent-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.employee-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.shift-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-primary-700);\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 60px;\n}\n.actions-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  margin-inline-start: auto;\n  transition: background 0.12s ease;\n}\n.actions-menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  gap: 12px;\n  color: var(--ui-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n  .table-toolbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .toolbar-search[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .toolbar-btn--expand[_ngcontent-%COMP%] {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=general-attendance.css.map */"] });
var GeneralAttendanceComponent = _GeneralAttendanceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneralAttendanceComponent, [{
    type: Component,
    args: [{ selector: "app-general-attendance", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatMenuModule,
      MatCardModule,
      MatTabsModule,
      MatTableModule,
      MatPaginatorModule,
      TranslocoModule
    ], template: `<div class="attendance-container attendance-page" [class.ui-page--fullscreen]="isFullscreen()">

  <!-- Breadcrumb + Title + Import button -->
  <div class="page-header">
    <div class="page-header__top">
      <nav class="breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
        <span class="breadcrumb__item">Mtwork</span>
        <span class="breadcrumb__sep" aria-hidden="true">\u203A</span>
        <span class="breadcrumb__item breadcrumb__item--active">Attendance</span>
      </nav>
    </div>
    <div class="page-header__row">
      <h1 class="page-title">Attendance</h1>
      <button class="btn-import" (click)="importAttendance()" [attr.aria-label]="'attendance.importAttendance' | transloco" [disabled]="true">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 20h14v-2H5v2zm7-18L5.33 9h4.17v4h4V9h4.17L12 2z" fill="currentColor"/>
        </svg>
        Import
      </button>
    </div>
  </div>

  <!-- Toolbar: refresh + search + filter + By Date + Shift type + expand -->
  <div class="table-toolbar">
    <button class="toolbar-btn" [attr.aria-label]="'common.refresh' | transloco" title="Refresh" (click)="loadAttendanceRecords()">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
      </svg>
    </button>

    <div class="toolbar-search">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="toolbar-search__icon">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
      </svg>
      <input
        type="text"
        class="toolbar-search__input"
        placeholder="Search"
        [(ngModel)]="searchQuery"
        (ngModelChange)="onSearchChange()"
        [attr.aria-label]="'attendance.searchRecords' | transloco"
      />
    </div>

    <button class="toolbar-btn" [attr.aria-label]="'common.filters' | transloco" title="Filters">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" fill="currentColor"/>
      </svg>
    </button>

    <input
      type="date"
      class="toolbar-date-input"
      [attr.aria-label]="'attendance.filterByDate' | transloco"
      [(ngModel)]="dateInputValue"
      (ngModelChange)="onDateInputChange($event)"
    />

    <select
      class="toolbar-shift-select"
      [attr.aria-label]="'attendance.filterByShift' | transloco"
      [(ngModel)]="shiftFilter"
      (ngModelChange)="onShiftChange($event)"
    >
      <option value="">All Statuses</option>
      <option value="0">Working</option>
      <option value="1">Leave</option>
      <option value="2">Meeting</option>
      <option value="3">Other</option>
    </select>

    @if (hasActiveFilters) {
      <button class="toolbar-btn toolbar-btn--reset" (click)="resetFilters()" [attr.aria-label]="'common.resetFilters' | transloco" title="Reset filters">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
        </svg>
        Reset
      </button>
    }

    <!-- View toggle: table | cards (shared .ui-view-toggle) -->
    <div class="ui-view-toggle" role="group" [attr.aria-label]="'common.switchView' | transloco">
      <button type="button" class="ui-view-toggle__btn"
              [class.ui-view-toggle__btn--active]="viewMode === 'table'"
              (click)="setView('table')" title="Table view" [attr.aria-label]="'common.tableView' | transloco">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v4H3V4zm0 6h18v4H3v-4zm0 6h18v4H3v-4z" fill="currentColor"/></svg>
      </button>
      <button type="button" class="ui-view-toggle__btn"
              [class.ui-view-toggle__btn--active]="viewMode === 'cards'"
              (click)="setView('cards')" title="Card view" [attr.aria-label]="'common.cardView' | transloco">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="currentColor"/></svg>
      </button>
    </div>

    <!-- Fullscreen \u2014 was decorative, now wired -->
    <button class="toolbar-btn toolbar-btn--expand"
            [class.ui-view-toggle__btn--active]="isFullscreen()"
            (click)="toggleFullscreen()"
            [attr.aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Expand to fullscreen'"
            [attr.title]="isFullscreen() ? 'Exit fullscreen' : 'Expand'">
      @if (!isFullscreen()) {
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
        </svg>
      } @else {
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="currentColor"/>
        </svg>
      }
    </button>
  </div>

  <!-- Active filter chips -->
  @if (hasActiveFilters) {
    <div class="active-filters" role="status" aria-live="polite">
      @if (searchQuery) {
        <span class="filter-chip">Search: {{ searchQuery }}</span>
      }
      @if (selectedDate) {
        <span class="filter-chip">Date: {{ selectedDate | date: 'mediumDate' }}</span>
      }
      @if (shiftFilter) {
        <span class="filter-chip">Shift: {{ shiftFilter }}</span>
      }
    </div>
  }

  <!-- Loading state -->
  @if (isLoading) {
    <div class="loading-state" role="status" aria-live="polite">
      <svg class="loading-spinner-icon" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor"/>
      </svg>
      <p>Loading\u2026</p>
    </div>
  }

  <!-- Error state -->
  @if (!isLoading && loadError) {
    <div class="error-state" role="alert">
      <p>Failed to load attendance records.</p>
      <button class="retry-btn" (click)="loadAttendanceRecords()" [attr.aria-label]="'common.retryLoading' | transloco">Retry</button>
    </div>
  }

  <!-- Data region -->
  @if (!isLoading && !loadError && viewMode === 'table') {
  <div class="attendance-table-container">
    <table mat-table [dataSource]="dataSource" class="attendance-table">

      <!-- Employee column -->
      <ng-container matColumnDef="employee">
        <th mat-header-cell *matHeaderCellDef>Employee</th>
        <td mat-cell *matCellDef="let record">
          <div class="employee-cell">
            <div class="employee-initials">{{ getInitials(getFullName(record)) }}</div>
            <div class="employee-text">
              <span class="employee-name">{{ getFullName(record) || '\u2014' }}</span>
              <span class="employee-role">{{ record.userName ?? '' }}</span>
            </div>
          </div>
        </td>
      </ng-container>

      <!-- Date column (real backend AttendanceDto.attendanceDate) -->
      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef>Date</th>
        <td mat-cell *matCellDef="let record">
          {{ formatDate(record.attendanceDate || record.checkInTime) || '\u2014' }}
          @if (record.weekDay) {
            <span class="muted" style="margin-inline-start:6px;">\xB7 {{ record.weekDay }}</span>
          }
        </td>
      </ng-container>

      <!-- Status \u2014 backend \`leaveType\` is the daily attendance status -->
      <ng-container matColumnDef="leaveType">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let record">
          <span class="ui-status-badge" [class]="getStatusClass(record)">
            {{ getStatusLabel(record) }}
          </span>
        </td>
      </ng-container>

      <!-- Check In column -->
      <ng-container matColumnDef="checkIn">
        <th mat-header-cell *matHeaderCellDef>Check In</th>
        <td mat-cell *matCellDef="let record">{{ formatDate(record.checkInTime) || '\u2014' }}</td>
      </ng-container>

      <!-- Check Out column -->
      <ng-container matColumnDef="checkOut">
        <th mat-header-cell *matHeaderCellDef>Check Out</th>
        <td mat-cell *matCellDef="let record">{{ formatDate(record.checkOutTime) || '\u2014' }}</td>
      </ng-container>

      <!-- Actions column -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>
        <td mat-cell *matCellDef="let record" class="col-actions">
          <button class="actions-menu-btn" [matMenuTriggerFor]="rowMenu" [attr.aria-label]="'common.rowActions' | transloco">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="5"  r="2" fill="currentColor"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <circle cx="12" cy="19" r="2" fill="currentColor"/>
            </svg>
          </button>
          <mat-menu #rowMenu="matMenu">
            <button mat-menu-item [disabled]="true">Edit</button>
            <button mat-menu-item [disabled]="true">Delete</button>
          </mat-menu>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

    <!-- Empty state -->
    @if (dataSource.data.length === 0) {
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor" opacity=".3"/>
        </svg>
        @if (hasActiveFilters) {
          <p>No records match your filters.</p>
          <button class="retry-btn" (click)="resetFilters()" [attr.aria-label]="'common.clearFilters' | transloco">Clear filters</button>
        } @else {
          <p>No attendance records found.</p>
        }
      </div>
    }
  </div>
  }

  <!-- Card view (alternate to the table \u2014 same data, same filters) -->
  @if (!isLoading && !loadError && viewMode === 'cards') {
    @if (filteredRecords.length === 0) {
      <div class="ui-empty ui-empty--compact">
        <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor"/>
        </svg>
        <p class="ui-empty__title">No Attendance Records</p>
        @if (hasActiveFilters) {
          <p class="ui-empty__sub">No records match your current filters.</p>
          <button class="ui-empty__cta" (click)="resetFilters()">Clear filters</button>
        } @else {
          <p class="ui-empty__sub">No attendance records have been recorded yet.</p>
        }
      </div>
    } @else {
      <div class="ui-cards-grid">
        @for (record of filteredRecords; track record.id ?? $index) {
          <article class="ui-card">
            <header class="ui-card__head">
              <span class="ui-status-badge" [class]="getStatusClass(record)">
                {{ getStatusLabel(record) }}
              </span>
              @if (isBusiness) {
                <span class="employee-name" style="font-size:13px; font-weight:600;">
                  {{ getFullName(record) || '\u2014' }}
                </span>
              }
            </header>
            <div class="ui-card__body">
              <dl class="ui-card__meta">
                <div>
                  <dt>Date</dt>
                  <dd>{{ formatDate(record.attendanceDate || record.checkInTime) || '\u2014' }}</dd>
                </div>
                <div>
                  <dt>Check In</dt>
                  <dd>{{ formatDate(record.checkInTime) || '\u2014' }}</dd>
                </div>
                <div>
                  <dt>Check Out</dt>
                  <dd>{{ formatDate(record.checkOutTime) || '\u2014' }}</dd>
                </div>
              </dl>
            </div>
          </article>
        }
      </div>
    }
  }

</div>
`, styles: ["/* src/components/DashboardLayout/SidebarComponents/general-attendance/general-attendance.css */\n:host {\n  display: block;\n  padding: 24px;\n  background: var(--ui-bg);\n  min-height: 100vh;\n  font-family: var(--font-family-primary);\n  color: var(--ui-text-main);\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-header__top {\n  margin-bottom: 8px;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.breadcrumb__item {\n  color: var(--ui-text-muted);\n  font-weight: 400;\n}\n.breadcrumb__sep {\n  color: var(--ui-text-muted);\n  font-size: 14px;\n}\n.breadcrumb__item--active {\n  color: var(--brand-accent-500);\n  font-weight: 500;\n}\n.page-header__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.page-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  margin: 0;\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--brand-neutral-950);\n  color: var(--ui-bg-surface);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  white-space: nowrap;\n}\n.btn-import:hover {\n  opacity: 0.88;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 12px 12px 0 0;\n  border-bottom: none;\n  flex-wrap: wrap;\n}\n.toolbar-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: none;\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  transition: background 0.12s ease;\n  flex-shrink: 0;\n}\n.toolbar-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.toolbar-btn--expand {\n  margin-inline-start: auto;\n}\n.toolbar-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 200px;\n  background: var(--ui-bg-subtle);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 10px;\n}\n.toolbar-search__icon {\n  color: var(--ui-text-muted);\n  flex-shrink: 0;\n}\n.toolbar-search__input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ui-text-main);\n  min-width: 0;\n}\n.toolbar-search__input::placeholder {\n  color: var(--ui-text-muted);\n}\n.toolbar-dropdown-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--ui-text-sub);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s ease;\n}\n.toolbar-dropdown-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.attendance-table-container {\n  background: var(--ui-bg-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: 0 0 12px 12px;\n  overflow-x: auto;\n}\n.attendance-table {\n  width: 100%;\n}\n.mat-mdc-header-row {\n  background: var(--ui-bg-surface);\n  border-bottom: 1px solid var(--ui-border);\n}\n.mat-mdc-header-cell {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.mat-mdc-row {\n  border-bottom: 1px solid var(--ui-border);\n  transition: background 0.12s ease;\n}\n.mat-mdc-row:last-child {\n  border-bottom: none;\n}\n.mat-mdc-row:hover {\n  background: var(--ui-bg-subtle);\n}\n.mat-mdc-cell {\n  font-size: 14px;\n  color: var(--ui-text-main);\n  padding: 14px 16px;\n  border-bottom: none;\n}\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.employee-initials {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--brand-accent-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ui-text-main);\n  flex-shrink: 0;\n}\n.employee-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.employee-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ui-text-main);\n}\n.employee-role {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.shift-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--brand-primary-200);\n  background: var(--brand-primary-50);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--brand-primary-700);\n  white-space: nowrap;\n}\n.col-actions {\n  text-align: end;\n  width: 60px;\n}\n.actions-menu-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--ui-text-sub);\n  margin-inline-start: auto;\n  transition: background 0.12s ease;\n}\n.actions-menu-btn:hover {\n  background: var(--ui-bg-subtle);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  gap: 12px;\n  color: var(--ui-text-muted);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  :host {\n    padding: 16px;\n  }\n  .table-toolbar {\n    flex-wrap: wrap;\n  }\n  .toolbar-search {\n    min-width: 100%;\n  }\n  .toolbar-btn--expand {\n    margin-inline-start: 0;\n  }\n}\n/*# sourceMappingURL=general-attendance.css.map */\n"] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneralAttendanceComponent, { className: "GeneralAttendanceComponent", filePath: "src/components/dashboardlayout/sidebarcomponents/general-attendance/general-attendance.ts", lineNumber: 42 });
})();
export {
  GeneralAttendanceComponent
};
//# sourceMappingURL=chunk-JH3AYFZ7.js.map
