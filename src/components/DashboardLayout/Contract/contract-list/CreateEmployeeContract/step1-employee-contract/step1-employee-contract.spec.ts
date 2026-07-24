import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1EmployeeContractComponent } from './step1-employee-contract';

describe('Step1EmployeeContractComponent', () => {
  let component: Step1EmployeeContractComponent;
  let fixture: ComponentFixture<Step1EmployeeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1EmployeeContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1EmployeeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
