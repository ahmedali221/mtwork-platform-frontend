import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-RILOBYFO.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  Input,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/auth/CreateAccount/file-upload-component/file-upload-component.ts
function FileUploadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1, "Required");
    \u0275\u0275domElementEnd();
  }
}
function FileUploadComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1, " Drag or upload PDF,Png,Jpg ");
    \u0275\u0275domElementEnd();
  }
}
function FileUploadComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275text(2, "Uploading...");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 11)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 12);
    \u0275\u0275domElement(9, "div", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 14)(11, "button", 15);
    \u0275\u0275domListener("click", function FileUploadComponent_Conditional_10_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.pauseUpload();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(12, "\u23F8");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "button", 16);
    \u0275\u0275domListener("click", function FileUploadComponent_Conditional_10_Template_button_click_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.cancelUpload();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(14, "\u274C");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.uploadProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.timeRemaining, " sec remaining");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.uploadProgress, "%");
  }
}
function FileUploadComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 17);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 21);
    \u0275\u0275domListener("click", function FileUploadComponent_Conditional_11_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.removeFile();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, "\u274C");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.fileSize);
  }
}
var _FileUploadComponent = class _FileUploadComponent {
  constructor() {
    this.label = "Upload file";
    this.required = false;
    this.accept = "pdf,jpg,jpeg,png";
    this.disabled = false;
    this.maxSizeMB = 10;
    this.errorMessages = {};
    this.file = null;
    this.fileName = "";
    this.fileSize = "";
    this.touched = false;
    this.errors = null;
    this.isDragging = false;
    this.isUploading = false;
    this.uploadProgress = 0;
    this.timeRemaining = 0;
    this.uploadInterval = null;
    this.onChange = (value) => {
    };
    this.onTouched = () => {
    };
  }
  writeValue(value) {
    this.file = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // -------------------------------------------------------
  // FILE SELECT
  // -------------------------------------------------------
  onSelect(event) {
    const target = event.target;
    const selectedFile = target.files?.[0];
    if (selectedFile) {
      this.handleFile(selectedFile);
    }
  }
  // -------------------------------------------------------
  // DRAG & DROP
  // -------------------------------------------------------
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    const droppedFile = event.dataTransfer?.files[0];
    if (droppedFile)
      this.handleFile(droppedFile);
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  // -------------------------------------------------------
  // FILE VALIDATION + START UPLOAD
  // -------------------------------------------------------
  handleFile(file) {
    const allowed = this.accept.split(",").map((a) => a.trim());
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowed.includes(ext)) {
      this.errors = { fileType: true };
      return;
    }
    const max = this.maxSizeMB * 1024 * 1024;
    if (file.size > max) {
      this.errors = { fileSize: true };
      return;
    }
    this.errors = null;
    this.file = file;
    this.fileName = file.name;
    this.fileSize = this.formatFileSize(file.size);
    this.onChange(file);
    this.markAsTouched();
    this.startUpload();
  }
  // -------------------------------------------------------
  // UPLOAD SIMULATION (front-end only)
  // -------------------------------------------------------
  startUpload() {
    this.isUploading = true;
    this.uploadProgress = 0;
    this.timeRemaining = 30;
    this.uploadInterval = setInterval(() => {
      this.uploadProgress += 3;
      this.timeRemaining--;
      if (this.uploadProgress >= 100) {
        this.finishUpload();
      }
    }, 300);
  }
  pauseUpload() {
    clearInterval(this.uploadInterval);
  }
  cancelUpload() {
    clearInterval(this.uploadInterval);
    this.isUploading = false;
    this.uploadProgress = 0;
    this.file = null;
    this.fileName = "";
    this.onChange(null);
  }
  finishUpload() {
    clearInterval(this.uploadInterval);
    this.isUploading = false;
    this.uploadProgress = 100;
  }
  // -------------------------------------------------------
  // REMOVE FILE
  // -------------------------------------------------------
  removeFile() {
    clearInterval(this.uploadInterval);
    this.file = null;
    this.fileName = "";
    this.fileSize = "";
    this.isUploading = false;
    this.uploadProgress = 0;
    this.onChange(null);
  }
  // -------------------------------------------------------
  // UTILITIES
  // -------------------------------------------------------
  markAsTouched() {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
  formatFileSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
  }
  validate(control) {
    if (this.required && !this.file)
      return { required: true };
    return this.errors;
  }
  getAcceptAttribute() {
    return this.accept.split(",").map((e) => `.${e}`).join(",");
  }
  triggerFileInput(fileInput) {
    if (!this.disabled)
      fileInput.click();
  }
};
_FileUploadComponent.\u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileUploadComponent)();
};
_FileUploadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload-component"]], inputs: { label: "label", required: "required", accept: "accept", disabled: "disabled", maxSizeMB: "maxSizeMB", errorMessages: "errorMessages" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _FileUploadComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => _FileUploadComponent),
    multi: true
  }
])], decls: 12, vars: 8, consts: [["fileInput", ""], [1, "upload-label"], [1, "required-label"], [1, "upload-wrapper"], ["type", "button", 1, "upload-btn", 3, "click"], [1, "upload-area", 3, "click", "drop", "dragover", "dragleave"], ["type", "file", 1, "file-input", 3, "change", "accept"], [1, "upload-placeholder-text"], [1, "upload-progress-box"], [1, "file-box"], [1, "progress-title"], [1, "progress-info"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-actions"], [1, "pause-btn", 3, "click"], [1, "cancel-btn", 3, "click"], [1, "file-icon"], [1, "file-details"], [1, "file-name"], [1, "file-size"], [1, "delete-btn", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "label", 1);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, FileUploadComponent_Conditional_2_Template, 2, 0, "span", 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275domListener("click", function FileUploadComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx.triggerFileInput(fileInput_r2));
    });
    \u0275\u0275text(5, " Upload ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 5);
    \u0275\u0275domListener("click", function FileUploadComponent_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx.triggerFileInput(fileInput_r2));
    })("drop", function FileUploadComponent_Template_div_drop_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDrop($event));
    })("dragover", function FileUploadComponent_Template_div_dragover_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDragOver($event));
    })("dragleave", function FileUploadComponent_Template_div_dragleave_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDragLeave($event));
    });
    \u0275\u0275domElementStart(7, "input", 6, 0);
    \u0275\u0275domListener("change", function FileUploadComponent_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelect($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, FileUploadComponent_Conditional_9_Template, 2, 0, "span", 7);
    \u0275\u0275conditionalCreate(10, FileUploadComponent_Conditional_10_Template, 15, 4, "div", 8);
    \u0275\u0275conditionalCreate(11, FileUploadComponent_Conditional_11_Template, 10, 2, "div", 9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.required ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("dragging", ctx.isDragging);
    \u0275\u0275advance();
    \u0275\u0275domProperty("accept", ctx.getAcceptAttribute());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.file && !ctx.isUploading ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isUploading ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.file && !ctx.isUploading ? 11 : -1);
  }
}, dependencies: [CommonModule], styles: ["\n\n.upload-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: var(--brand-neutral-950);\n}\n.required-label[_ngcontent-%COMP%] {\n  background: var(--functional-warning-300);\n  padding: 2px 6px;\n  font-size: 10px;\n  border-radius: 4px;\n  margin-inline-start: 6px;\n}\n.upload-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-500);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.upload-area[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--brand-primary-50);\n  border-radius: 10px;\n  padding: 14px 20px;\n  min-height: 55px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n.dragging[_ngcontent-%COMP%] {\n  border: 2px dashed var(--brand-neutral-600);\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-placeholder-text[_ngcontent-%COMP%] {\n  color: var(--brand-neutral-700);\n}\n.upload-progress-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.progress-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: var(--brand-primary-100);\n  border-radius: 4px;\n  margin: 8px 0;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--brand-primary-700);\n  border-radius: 4px;\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ui-surface);\n  padding: 12px;\n  border-radius: 8px;\n  width: 100%;\n  border: 1px solid var(--brand-neutral-200);\n}\n.file-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.file-details[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.file-details[_ngcontent-%COMP%]   .file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  font-size: 18px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.pause-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-inline-end: 10px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.resume-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-inline-end: 10px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=file-upload-component.css.map */"] });
var FileUploadComponent = _FileUploadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadComponent, [{
    type: Component,
    args: [{ selector: "app-file-upload-component", standalone: true, imports: [CommonModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
      }
    ], template: '<label class="upload-label">\n  {{ label }}\n  @if (required) {\n    <span class="required-label">Required</span>\n  }\n</label>\n\n<div class="upload-wrapper">\n\n  <!-- Upload button -->\n  <button type="button" class="upload-btn" (click)="triggerFileInput(fileInput)">\n    Upload\n  </button>\n\n  <!-- Upload area -->\n  <div class="upload-area"\n       (click)="triggerFileInput(fileInput)"\n       (drop)="onDrop($event)"\n       (dragover)="onDragOver($event)"\n       (dragleave)="onDragLeave($event)"\n       [class.dragging]="isDragging">\n\n    <input\n      type="file"\n      class="file-input"\n      #fileInput\n      [accept]="getAcceptAttribute()"\n      (change)="onSelect($event)"\n    />\n\n    <!-- BEFORE UPLOAD -->\n    @if (!file && !isUploading) {\n      <span class="upload-placeholder-text">\n        Drag or upload PDF,Png,Jpg\n      </span>\n    }\n\n    <!-- DURING UPLOAD -->\n    @if (isUploading) {\n      <div class="upload-progress-box">\n        <div class="progress-title">Uploading...</div>\n\n        <div class="progress-info">\n          <span>{{ uploadProgress }}%</span>\n          <span>{{ timeRemaining }} sec remaining</span>\n        </div>\n\n        <div class="progress-bar">\n          <div class="progress-fill" [style.width.%]="uploadProgress"></div>\n        </div>\n\n        <div class="progress-actions">\n          <button class="pause-btn" (click)="pauseUpload(); $event.stopPropagation()">\u23F8</button>\n          <button class="cancel-btn" (click)="cancelUpload(); $event.stopPropagation()">\u274C</button>\n        </div>\n      </div>\n    }\n\n    <!-- AFTER UPLOAD SUCCESS -->\n    @if (file && !isUploading) {\n      <div class="file-box">\n        <div class="file-icon">\u{1F4C4}</div>\n\n        <div class="file-details">\n          <div class="file-name">{{ fileName }}</div>\n          <div class="file-size">{{ fileSize }}</div>\n        </div>\n\n        <button class="delete-btn" (click)="removeFile(); $event.stopPropagation()">\u274C</button>\n      </div>\n    }\n  </div>\n</div>\n', styles: ["/* src/features/auth/CreateAccount/file-upload-component/file-upload-component.css */\n.upload-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: var(--brand-neutral-950);\n}\n.required-label {\n  background: var(--functional-warning-300);\n  padding: 2px 6px;\n  font-size: 10px;\n  border-radius: 4px;\n  margin-inline-start: 6px;\n}\n.upload-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.upload-btn {\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-500);\n  border: none;\n  border-radius: 8px;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.upload-area {\n  flex: 1;\n  background: var(--brand-primary-50);\n  border-radius: 10px;\n  padding: 14px 20px;\n  min-height: 55px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n.dragging {\n  border: 2px dashed var(--brand-neutral-600);\n}\n.file-input {\n  display: none;\n}\n.upload-placeholder-text {\n  color: var(--brand-neutral-700);\n}\n.upload-progress-box {\n  width: 100%;\n}\n.progress-title {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.progress-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--ui-text-sub);\n}\n.progress-bar {\n  width: 100%;\n  height: 6px;\n  background: var(--brand-primary-100);\n  border-radius: 4px;\n  margin: 8px 0;\n}\n.progress-fill {\n  height: 100%;\n  background: var(--brand-primary-700);\n  border-radius: 4px;\n}\n.file-box {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ui-surface);\n  padding: 12px;\n  border-radius: 8px;\n  width: 100%;\n  border: 1px solid var(--brand-neutral-200);\n}\n.file-icon {\n  font-size: 24px;\n}\n.file-details .file-name {\n  font-size: 14px;\n  font-weight: 600;\n}\n.file-details .file-size {\n  font-size: 12px;\n  color: var(--ui-text-muted);\n}\n.delete-btn {\n  margin-inline-start: auto;\n  font-size: 18px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.pause-btn,\n.cancel-btn {\n  font-size: 16px;\n  margin-inline-end: 10px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.resume-btn {\n  font-size: 16px;\n  margin-inline-end: 10px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=file-upload-component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], required: [{
    type: Input
  }], accept: [{
    type: Input
  }], disabled: [{
    type: Input
  }], maxSizeMB: [{
    type: Input
  }], errorMessages: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "src/features/auth/createaccount/file-upload-component/file-upload-component.ts", lineNumber: 31 });
})();

export {
  FileUploadComponent
};
//# sourceMappingURL=chunk-JNGFMO5J.js.map
