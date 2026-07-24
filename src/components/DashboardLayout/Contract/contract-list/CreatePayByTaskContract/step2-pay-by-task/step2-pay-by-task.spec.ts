import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PayByTaskComponent } from './step2-pay-by-task';

describe('Step2PayByTaskComponent', () => {
  let component: Step2PayByTaskComponent;
  let fixture: ComponentFixture<Step2PayByTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2PayByTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2PayByTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
