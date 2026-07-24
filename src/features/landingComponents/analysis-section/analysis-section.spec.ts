import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSectionComponent } from './analysis-section';

describe('AnalysisSectio', () => {
  let component: AnalysisSectionComponent;
  let fixture: ComponentFixture<AnalysisSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
