import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectDialogeComponent } from './create-project-dialoge-component';

describe('CreateProjectDialogeComponent', () => {
  let component: CreateProjectDialogeComponent;
  let fixture: ComponentFixture<CreateProjectDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectDialogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
