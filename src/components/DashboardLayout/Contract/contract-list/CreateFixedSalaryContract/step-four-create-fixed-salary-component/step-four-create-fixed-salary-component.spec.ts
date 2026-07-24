import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourCreateFixedSalaryComponent } from './step-four-create-fixed-salary-component';

describe('StepFourCreateFixedSalaryComponent', () => {
  let component: StepFourCreateFixedSalaryComponent;
  let fixture: ComponentFixture<StepFourCreateFixedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFourCreateFixedSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFourCreateFixedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
