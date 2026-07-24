import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePeopleType } from './choose-people-type';

describe('ChoosePeopleType', () => {
  let component: ChoosePeopleType;
  let fixture: ComponentFixture<ChoosePeopleType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePeopleType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePeopleType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
