import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountLayout } from './create-account-layout';

describe('CreateAccountLayout', () => {
  let component: CreateAccountLayout;
  let fixture: ComponentFixture<CreateAccountLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
