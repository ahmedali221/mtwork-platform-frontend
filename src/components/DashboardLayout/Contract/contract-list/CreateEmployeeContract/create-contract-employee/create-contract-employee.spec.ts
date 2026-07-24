import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractEmployee } from './create-contract-employee';

describe('CreateContractEmployee', () => {
  let component: CreateContractEmployee;
  let fixture: ComponentFixture<CreateContractEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContractEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContractEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
