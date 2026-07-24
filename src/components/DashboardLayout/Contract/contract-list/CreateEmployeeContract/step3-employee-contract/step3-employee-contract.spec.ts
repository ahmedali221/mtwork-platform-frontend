import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3EmployeeContractComponent } from './step3-employee-contract';

describe('Step4EmployeeContract', () => {
  let component: Step3EmployeeContractComponent;
  let fixture: ComponentFixture<Step3EmployeeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3EmployeeContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3EmployeeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
