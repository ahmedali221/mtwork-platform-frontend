import {
  Component, inject, signal,
  ChangeDetectionStrategy, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { forkJoin } from 'rxjs';
import {
  SettingsService,
  RegistrationFeeDto,
  ContractFeesDto,
  EmployeePercentageDto,
} from '../../../../services/settings.service';

interface SettingCard {
  labelKey:  string;
  iconName:  string;
  value:     string | null;
}

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MatIconModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSettingsComponent implements OnInit {
  private readonly settingsService = inject(SettingsService);

  isLoading = signal(true);
  errorKey  = signal('');
  cards     = signal<SettingCard[]>([]);

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.errorKey.set('');

    forkJoin({
      regFee:     this.settingsService.getFirstRegistrationFee(),
      contractFee: this.settingsService.getContractFees(),
      empPct:     this.settingsService.getOrdinaryEmployeePercentage(),
    }).subscribe({
      next: ({ regFee, contractFee, empPct }) => {
        this.cards.set([
          {
            labelKey: 'admin.settings.registrationFee',
            iconName: 'how_to_reg',
            value:    this.formatAmount(regFee?.fee ?? regFee?.amount),
          },
          {
            labelKey: 'admin.settings.contractFees',
            iconName: 'description',
            value:    this.formatFees(contractFee),
          },
          {
            labelKey: 'admin.settings.employeePercentage',
            iconName: 'percent',
            value:    empPct?.percentage != null ? `${empPct.percentage}%` : '—',
          },
        ]);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set('admin.settings.errors.load');
        this.isLoading.set(false);
      },
    });
  }

  private formatAmount(val: number | undefined): string {
    if (val == null) return '—';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  }

  private formatFees(dto: ContractFeesDto): string {
    const parts: string[] = [];
    if (dto?.feePercentage != null) parts.push(`${dto.feePercentage}%`);
    if (dto?.fixedFee != null)      parts.push(this.formatAmount(dto.fixedFee));
    return parts.length ? parts.join(' + ') : '—';
  }
}
