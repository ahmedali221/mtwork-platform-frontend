import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetailsDialogeComponent } from './meeting-details';

describe('MeetingDetailsDialogeComponent', () => {
  let component: MeetingDetailsDialogeComponent;
  let fixture: ComponentFixture<MeetingDetailsDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingDetailsDialogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingDetailsDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
