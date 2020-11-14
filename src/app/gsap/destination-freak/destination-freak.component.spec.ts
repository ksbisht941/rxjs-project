import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationFreakComponent } from './destination-freak.component';

describe('DestinationFreakComponent', () => {
  let component: DestinationFreakComponent;
  let fixture: ComponentFixture<DestinationFreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationFreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationFreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
