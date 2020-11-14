import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistortionLandingPageComponent } from './distortion-landing-page.component';

describe('DistortionLandingPageComponent', () => {
  let component: DistortionLandingPageComponent;
  let fixture: ComponentFixture<DistortionLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistortionLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistortionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
