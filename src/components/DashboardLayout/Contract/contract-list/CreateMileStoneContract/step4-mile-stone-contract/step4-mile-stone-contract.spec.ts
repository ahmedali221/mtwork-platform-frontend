import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4MileStoneContractComponent } from './step4-mile-stone-contract';

describe('Step4MileStoneContractComponent', () => {
  let component: Step4MileStoneContractComponent;
  let fixture: ComponentFixture<Step4MileStoneContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4MileStoneContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4MileStoneContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
