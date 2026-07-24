import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRsectionComponent } from './hrsection';

describe('HRsectionComponent', () => {
  let component: HRsectionComponent;
  let fixture: ComponentFixture<HRsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
