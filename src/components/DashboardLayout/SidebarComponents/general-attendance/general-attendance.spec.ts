import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAttendanceComponent } from './general-attendance';

describe('GeneralAttendance', () => {
  let component: GeneralAttendanceComponent;
  let fixture: ComponentFixture<GeneralAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
