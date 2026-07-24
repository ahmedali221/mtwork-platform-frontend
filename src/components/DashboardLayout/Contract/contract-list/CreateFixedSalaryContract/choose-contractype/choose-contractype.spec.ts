import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseContractype } from './choose-contractype';

describe('ChooseContractype', () => {
  let component: ChooseContractype;
  let fixture: ComponentFixture<ChooseContractype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseContractype]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseContractype);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
