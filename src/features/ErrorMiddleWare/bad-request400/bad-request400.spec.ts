import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadRequest400 } from './bad-request400';

describe('BadRequest400', () => {
  let component: BadRequest400;
  let fixture: ComponentFixture<BadRequest400>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadRequest400]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadRequest400);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
