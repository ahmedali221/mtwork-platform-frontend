import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Landingcomponent } from './landingcomponent';

describe('Landingcomponent', () => {
  let component: Landingcomponent;
  let fixture: ComponentFixture<Landingcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
