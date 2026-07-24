import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepFiveCreateFixedSalaryComponent } from './step-five-create-fixed-salary-component';

describe('StepFiveCreateFixedSalaryComponent', () => {
  let component: StepFiveCreateFixedSalaryComponent;
  let fixture: ComponentFixture<StepFiveCreateFixedSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFiveCreateFixedSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFiveCreateFixedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
