import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-file-upload-component',
  standalone: true,
  imports: [CommonModule],
  providers: [
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
  ],
  templateUrl: './file-upload-component.html',
  styleUrls: ['./file-upload-component.css']
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  @Input() label: string = 'Upload file';
  @Input() required: boolean = false;
  @Input() accept: string = 'pdf,jpg,jpeg,png';
  @Input() disabled: boolean = false;
  @Input() maxSizeMB = 10;
  @Input() errorMessages: { [key: string]: string } = {};

  file: File | null = null;
  fileName = '';
  fileSize = '';

  touched = false;
  errors: ValidationErrors | null = null;
  isDragging = false;

  /** UPLOADING STATE */
  isUploading = false;         // NEW
  uploadProgress = 0;          // NEW
  timeRemaining = 0;           // NEW
  uploadInterval: any = null;  // NEW

  private onChange = (value: File | null) => {};
  private onTouched = () => {};

  writeValue(value: File | null): void {
    this.file = value;
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // -------------------------------------------------------
  // FILE SELECT
  // -------------------------------------------------------
  onSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files?.[0];
    if (selectedFile) {
      this.handleFile(selectedFile);
    }
  }

  // -------------------------------------------------------
  // DRAG & DROP
  // -------------------------------------------------------
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const droppedFile = event.dataTransfer?.files[0];
    if (droppedFile) this.handleFile(droppedFile);
  }
  onDragOver(event: DragEvent): void { event.preventDefault(); this.isDragging = true; }
  onDragLeave(event: DragEvent): void { event.preventDefault(); this.isDragging = false; }

  // -------------------------------------------------------
  // FILE VALIDATION + START UPLOAD
  // -------------------------------------------------------
  private handleFile(file: File): void {
    const allowed = this.accept.split(',').map(a => a.trim());
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';

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

    this.startUpload();   // NEW 🚀
  }

  // -------------------------------------------------------
  // UPLOAD SIMULATION (front-end only)
  // -------------------------------------------------------
  startUpload(): void {
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

  pauseUpload(): void {
    clearInterval(this.uploadInterval);
  }

  cancelUpload(): void {
    clearInterval(this.uploadInterval);
    this.isUploading = false;
    this.uploadProgress = 0;
    this.file = null;
    this.fileName = '';
    this.onChange(null);
  }

  finishUpload(): void {
    clearInterval(this.uploadInterval);
    this.isUploading = false;
    this.uploadProgress = 100;
  }

  // -------------------------------------------------------
  // REMOVE FILE
  // -------------------------------------------------------
  removeFile(): void {
    clearInterval(this.uploadInterval);
    this.file = null;
    this.fileName = '';
    this.fileSize = '';
    this.isUploading = false;
    this.uploadProgress = 0;
    this.onChange(null);
  }

  // -------------------------------------------------------
  // UTILITIES
  // -------------------------------------------------------
  private markAsTouched(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }

  private formatFileSize(bytes: number): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && !this.file) return { required: true };
    return this.errors;
  }

  getAcceptAttribute(): string {
    return this.accept.split(',').map(e => `.${e}`).join(',');
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    if (!this.disabled) fileInput.click();
  }
}
