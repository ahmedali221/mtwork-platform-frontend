import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-wizard-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './wizard-footer.html',
  styleUrls: ['./wizard-footer.css'],
})
export class WizardFooterComponent {
  @Input() isFirst!:       boolean;
  @Input() isLast!:        boolean;
  @Input() isSubmitting!:  boolean;
  @Input() isSavingDraft!: boolean;
  @Input() isEditMode!:    boolean;

  @Output() back      = new EventEmitter<void>();
  @Output() next      = new EventEmitter<void>();
  @Output() saveDraft = new EventEmitter<void>();
}
