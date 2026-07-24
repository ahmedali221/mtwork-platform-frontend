import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

interface ContractCard {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  description: string;
}

@Component({
  selector: 'app-choose-contractype',
  standalone: true,
  imports: [CommonModule,
    TranslocoModule
  ],
  templateUrl: './choose-contractype.html',
  styleUrls: ['./choose-contractype.css']
})
export class ChooseContractype {

  private router = inject(Router);

  showInfoId: string | null = null;

  private readonly routeMap: Record<string, string> = {
    'fixed-salary': '/dashboard/CreateFixedSalaryContract',
    'pay-by-task':  '/dashboard/CreatePaytaskContact',
    'milestone':    '/dashboard/CreateMileStoneContract',
  };

  contracts: ContractCard[] = [
    {
      id: 'fixed-salary',
      title: 'Fixed Salary',
      subtitle: 'A fixed monthly payment regardless of hours or tasks.',
      icon: 'assets/icons/fixed-salary.svg',
      description: 'A fixed salary contract pays the employee a set amount per month regardless of hours worked or tasks completed. Best for full-time or part-time employees with stable workloads.'
    },
    {
      id: 'pay-by-task',
      title: 'Pay by Task',
      subtitle: 'Pay per completed task or deliverable.',
      icon: 'assets/icons/pay-by-task.svg',
      description: 'A pay-by-task contract compensates the worker for each completed task or deliverable. Ideal for freelancers or contractors with variable workloads.'
    },
    {
      id: 'milestone',
      title: 'Milestone',
      subtitle: 'Payments tied to completed project milestones.',
      icon: 'assets/icons/milestone.svg',
      description: 'A milestone contract ties payments to the completion of defined project phases. Best for long-term projects with clear deliverable checkpoints.'
    }
  ];

  onBack(): void {
    window.history.back();
  }

  onSelect(card: ContractCard): void {
    const route = this.routeMap[card.id];
    if (route) {
      this.router.navigate([route]);
    }
  }

  toggleInfo(card: ContractCard, event: MouseEvent): void {
    event.stopPropagation();
    this.showInfoId = this.showInfoId === card.id ? null : card.id;
  }
}
