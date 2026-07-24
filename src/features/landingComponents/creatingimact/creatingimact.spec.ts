import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingimactComponent } from './creatingimact';

describe('CreatingimactComponent', () => {
  let component: CreatingimactComponent;
  let fixture: ComponentFixture<CreatingimactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingimactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingimactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
