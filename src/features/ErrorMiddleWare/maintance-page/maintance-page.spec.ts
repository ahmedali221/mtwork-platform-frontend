import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintancePage } from './maintance-page';

describe('MaintancePage', () => {
  let component: MaintancePage;
  let fixture: ComponentFixture<MaintancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintancePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
