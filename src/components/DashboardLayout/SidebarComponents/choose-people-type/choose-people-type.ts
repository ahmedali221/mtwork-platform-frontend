import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface PeopleCard {
  id: 'contractor' | 'employee';
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  route: string;
  bgClass: string;
  infoText: string;
}

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-choose-people-type',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './choose-people-type.html',
  styleUrls: ['./choose-people-type.css']
})
export class ChoosePeopleType {

  private router = inject(Router);

  showInfoId: string | null = null;

  cards: PeopleCard[] = [
    {
      id: 'contractor',
      title: 'Contractor',
      description: 'Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team',
      image: 'assets/images/chooseBg1.png',
      imageAlt: 'Contractor illustration',
      route: '/dashboard/typecontract',
      bgClass: 'bg-contractor',
      infoText: 'A contractor is an independent professional hired for specific projects or tasks. They manage their own taxes and are not on your company payroll.'
    },
    {
      id: 'employee',
      title: 'Employee',
      description: 'Hire in 150+ countries without opening an entity, stay compliant with local taxes and laws, and pay your global team',
      image: 'assets/images/chooseBg2.png',
      imageAlt: 'Employee illustration',
      route: '/dashboard/CreateEmployeeContract',
      bgClass: 'bg-employee',
      infoText: 'A full-time or part-time employee hired under a fixed salary contract. They are on your company payroll with benefits and legal protections.'
    }
  ];

  onBack(): void {
    window.history.back();
  }

  onSelect(card: PeopleCard): void {
    this.router.navigate([card.route]);
  }

  toggleInfo(card: PeopleCard, event: MouseEvent): void {
    event.stopPropagation();
    this.showInfoId = this.showInfoId === card.id ? null : card.id;
  }
}
