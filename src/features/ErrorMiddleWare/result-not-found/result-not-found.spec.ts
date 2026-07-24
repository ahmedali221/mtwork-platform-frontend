import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNotFound } from './result-not-found';

describe('ResultNotFound', () => {
  let component: ResultNotFound;
  let fixture: ComponentFixture<ResultNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
