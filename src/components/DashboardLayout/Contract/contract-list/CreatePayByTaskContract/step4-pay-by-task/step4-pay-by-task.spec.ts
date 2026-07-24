import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4PayByTaskComponent } from './step4-pay-by-task';

describe('Step4PayByTaskComponent', () => {
  let component: Step4PayByTaskComponent;
  let fixture: ComponentFixture<Step4PayByTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4PayByTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4PayByTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
