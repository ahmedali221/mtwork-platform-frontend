import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

export interface ToolbarFilter {
  label: string;
  value: string;
  options: string[];
}

@Component({
  selector: 'app-table-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TranslocoModule],
  templateUrl: './table-toolbar.html',
  styleUrls: ['./table-toolbar.css']
})
export class TableToolbarComponent {
  @Input() searchValue = '';
  @Input() filters: ToolbarFilter[] = [];
  @Input() showViewAsReport = false;

  @Output() searchChange  = new EventEmitter<string>();
  @Output() filterChange  = new EventEmitter<{ filter: ToolbarFilter; value: string }>();
  @Output() refresh       = new EventEmitter<void>();
  @Output() viewAsReport  = new EventEmitter<void>();
  @Output() expand        = new EventEmitter<void>();

  onFilterChange(filter: ToolbarFilter, value: string): void {
    filter.value = value;
    this.filterChange.emit({ filter, value });
  }
}
