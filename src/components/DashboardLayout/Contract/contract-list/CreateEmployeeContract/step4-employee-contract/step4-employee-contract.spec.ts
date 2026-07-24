import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4EmployeeContractComponent } from './step4-employee-contract';

describe('Step4EmployeeContractComponent', () => {
  let component: Step4EmployeeContractComponent;
  let fixture: ComponentFixture<Step4EmployeeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4EmployeeContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4EmployeeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
