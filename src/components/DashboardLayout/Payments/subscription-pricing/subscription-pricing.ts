import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { forkJoin } from 'rxjs';

import {
  SubscriptionService,
  SubscriptionAmountDto,
  ActiveSubscriptionDto,
} from '../../../../services/subscription.service';
import { TokenService } from '../../../../services/token.service';

@Component({
  selector: 'app-subscription-pricing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './subscription-pricing.html',
  styleUrl: './subscription-pricing.css',
})
export class SubscriptionPricingComponent implements OnInit {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly tokenService        = inject(TokenService);

  companyId          = signal<number | null>(null);
  amounts            = signal<SubscriptionAmountDto[]>([]);
  activeSubscription = signal<ActiveSubscriptionDto | null>(null);

  isLoading      = signal(true);
  errorMessage   = signal<string | null>(null);
  submittingType = signal<'monthly' | 'yearly' | null>(null);
  successMessage = signal<string | null>(null);

  // i18n keys for plan features — resolved in template via transloco pipe
  readonly planFeatureKeys: string[] = [
    'payments.subscription.features.contracts',
    'payments.subscription.features.hr',
    'payments.subscription.features.salary',
    'payments.subscription.features.teamProject',
    'payments.subscription.features.attendance',
    'payments.subscription.features.support',
  ];

  readonly monthlyPlan = computed(() =>
    this.amounts().find(a => a.type === 'monthly') ?? null
  );

  readonly yearlyPlan = computed(() =>
    this.amounts().find(a => a.type === 'yearly') ?? null
  );

  readonly activeType = computed(() => this.activeSubscription()?.type ?? null);

  readonly isActive = computed(
    () => this.activeSubscription()?.status === 'active'
  );

  ngOnInit(): void {
    const id = Number(this.tokenService.getCompanyId() ?? 0) || null;
    this.companyId.set(id);

    if (!id) {
      this.errorMessage.set('payments.errors.companyNotFound');
      this.isLoading.set(false);
      return;
    }

    forkJoin({
      amounts: this.subscriptionService.getAmounts(),
      active:  this.subscriptionService.getActive(id),
    }).subscribe({
      next: ({ amounts, active }) => {
        this.amounts.set(amounts);
        this.activeSubscription.set(active);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(
          err?.error?.message ?? 'payments.errors.subscriptionLoad'
        );
        this.isLoading.set(false);
      },
    });
  }

  subscribe(type: 'monthly' | 'yearly'): void {
    const companyId = this.companyId();
    if (!companyId) return;

    this.submittingType.set(type);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.subscriptionService.create({ companyId, type }).subscribe({
      next: (dto) => {
        this.activeSubscription.set(dto);
        this.successMessage.set('payments.subscription.success');
        this.submittingType.set(null);
      },
      error: (err) => {
        this.errorMessage.set(
          err?.error?.message ?? 'payments.errors.subscribe'
        );
        this.submittingType.set(null);
      },
    });
  }

  isCurrentPlan(type: 'monthly' | 'yearly'): boolean {
    return this.isActive() && this.activeType() === type;
  }

  yearlyDiscount(monthly: number, yearly: number): number {
    return Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100);
  }
}
