import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMileStoneContractComponent } from './create-mile-stone-contract';

describe('CreateMileStoneContract', () => {
  let component: CreateMileStoneContractComponent;
  let fixture: ComponentFixture<CreateMileStoneContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMileStoneContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMileStoneContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
