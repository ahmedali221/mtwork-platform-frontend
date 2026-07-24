import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinouscomplianceComponent } from './continouscompliance';

describe('ContinouscomplianceComponent', () => {
  let component: ContinouscomplianceComponent;
  let fixture: ComponentFixture<ContinouscomplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinouscomplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinouscomplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
