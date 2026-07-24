import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

export interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule],
  templateUrl: './page-header.html',
  styleUrls: ['./page-header.css']
})
export class PageHeaderComponent {
  @Input() breadcrumbs: BreadcrumbItem[] = [{ label: 'Mtwork' }];
  @Input() title = '';
  @Input() actionLabel = '';
  @Input() actionIcon = 'add_circle_outline';
  @Input() onAction?: () => void;

  handleAction(): void {
    if (this.onAction) this.onAction();
  }
}
