import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateOnScrollingComponent } from './animate-on-scrolling.component';

describe('AnimateOnScrollingComponent', () => {
  let component: AnimateOnScrollingComponent;
  let fixture: ComponentFixture<AnimateOnScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateOnScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateOnScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
