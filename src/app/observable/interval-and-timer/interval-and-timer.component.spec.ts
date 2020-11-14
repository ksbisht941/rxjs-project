import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalAndTimerComponent } from './interval-and-timer.component';

describe('IntervalAndTimerComponent', () => {
  let component: IntervalAndTimerComponent;
  let fixture: ComponentFixture<IntervalAndTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalAndTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalAndTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
