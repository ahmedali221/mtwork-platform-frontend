import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3payByTaskComponent } from './step3pay-by-task';

describe('Step3payByTask', () => {
  let component: Step3payByTaskComponent;
  let fixture: ComponentFixture<Step3payByTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3payByTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3payByTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
