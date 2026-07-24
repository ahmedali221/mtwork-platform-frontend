import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailsDialogeComponent } from './contract-details-dialoge';

describe('ContractDetailsDialogeComponent', () => {
  let component: ContractDetailsDialogeComponent;
  let fixture: ComponentFixture<ContractDetailsDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractDetailsDialogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractDetailsDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
