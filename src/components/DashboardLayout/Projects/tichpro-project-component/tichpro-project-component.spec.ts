import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TichproProjectComponent } from './tichpro-project-component';

describe('TichproProjectComponent', () => {
  let component: TichproProjectComponent;
  let fixture: ComponentFixture<TichproProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TichproProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TichproProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
