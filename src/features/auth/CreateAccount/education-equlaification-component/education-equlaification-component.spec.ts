import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEqulaificationComponent } from './education-equlaification-component';

describe('EducationEqulaificationComponent', () => {
  let component: EducationEqulaificationComponent;
  let fixture: ComponentFixture<EducationEqulaificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationEqulaificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEqulaificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
