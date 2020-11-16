import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehavioursubjectComponent } from './subject-and-behavioursubject.component';

describe('SubjectAndBehavioursubjectComponent', () => {
  let component: SubjectAndBehavioursubjectComponent;
  let fixture: ComponentFixture<SubjectAndBehavioursubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAndBehavioursubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAndBehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
