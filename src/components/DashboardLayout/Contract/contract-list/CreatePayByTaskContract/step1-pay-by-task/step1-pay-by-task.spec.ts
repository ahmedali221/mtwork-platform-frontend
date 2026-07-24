import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PayByTaskComponent } from './step1-pay-by-task';

describe('Step1PayByTaskComponent', () => {
  let component: Step1PayByTaskComponent;
  let fixture: ComponentFixture<Step1PayByTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1PayByTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1PayByTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
