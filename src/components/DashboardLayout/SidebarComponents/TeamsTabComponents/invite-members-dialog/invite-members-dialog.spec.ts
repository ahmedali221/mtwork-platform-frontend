import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMembersDialogComponent } from './invite-members-dialog';

describe('InviteMembersDialogComponent', () => {
  let component: InviteMembersDialogComponent;
  let fixture: ComponentFixture<InviteMembersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteMembersDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteMembersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
