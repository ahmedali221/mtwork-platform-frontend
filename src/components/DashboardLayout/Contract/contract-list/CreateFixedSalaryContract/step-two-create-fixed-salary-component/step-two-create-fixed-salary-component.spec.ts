import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoCreateFixedSalaryComponent } from './step-two-create-fixed-salary-component';

describe('StepTwoCreateFixedSalaryComponent', () => {
  let component: StepTwoCreateFixedSalaryComponent;
  let fixture: ComponentFixture<StepTwoCreateFixedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTwoCreateFixedSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTwoCreateFixedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
