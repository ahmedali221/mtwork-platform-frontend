import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCompaniesChoosemtComponent } from './why-companies-choosemt';

describe('WhyCompaniesChoosemtComponent', () => {
  let component: WhyCompaniesChoosemtComponent;
  let fixture: ComponentFixture<WhyCompaniesChoosemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyCompaniesChoosemtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCompaniesChoosemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
