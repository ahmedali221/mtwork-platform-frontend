import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiexdSalaryContractComponent } from './create-fiexd-salary-contract';

describe('CreateFiexdSalaryContract', () => {
  let component: CreateFiexdSalaryContractComponent;
  let fixture: ComponentFixture<CreateFiexdSalaryContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFiexdSalaryContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFiexdSalaryContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
