import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaytaskContactComponent } from './create-paytask-contact';

describe('CreatePaytaskContactComponent', () => {
  let component: CreatePaytaskContactComponent;
  let fixture: ComponentFixture<CreatePaytaskContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePaytaskContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePaytaskContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
