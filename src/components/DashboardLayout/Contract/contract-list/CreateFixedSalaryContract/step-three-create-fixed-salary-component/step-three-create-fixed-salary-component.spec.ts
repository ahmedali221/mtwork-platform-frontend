import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeCreateFixedSalaryComponent } from './step-three-create-fixed-salary-component';

describe('StepThreeCreateFixedSalaryComponent', () => {
  let component: StepThreeCreateFixedSalaryComponent;
  let fixture: ComponentFixture<StepThreeCreateFixedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepThreeCreateFixedSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepThreeCreateFixedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
