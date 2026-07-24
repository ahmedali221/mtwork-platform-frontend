import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneCreateFixedSalaryComponent } from './step-one-create-fixed-salary-component';

describe('StepOneCreateFixedSalaryComponent', () => {
  let component: StepOneCreateFixedSalaryComponent;
  let fixture: ComponentFixture<StepOneCreateFixedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepOneCreateFixedSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneCreateFixedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
