import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2EmployeeContractComponent } from './step2-employee-contract';

describe('Step2EmployeeContractComponent', () => {
  let component: Step2EmployeeContractComponent;
  let fixture: ComponentFixture<Step2EmployeeContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2EmployeeContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2EmployeeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
