import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetingDialogeComponent } from './create-meeting-dialoge';

describe('CreateMeetingDialogeComponent', () => {
  let component: CreateMeetingDialogeComponent;
  let fixture: ComponentFixture<CreateMeetingDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMeetingDialogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMeetingDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
