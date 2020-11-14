import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeLandingPageComponent } from './anime-landing-page.component';

describe('AnimeLandingPageComponent', () => {
  let component: AnimeLandingPageComponent;
  let fixture: ComponentFixture<AnimeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
