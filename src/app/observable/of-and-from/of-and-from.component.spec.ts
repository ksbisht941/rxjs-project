import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfAndFromComponent } from './of-and-from.component';

describe('OfAndFromComponent', () => {
  let component: OfAndFromComponent;
  let fixture: ComponentFixture<OfAndFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfAndFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfAndFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
