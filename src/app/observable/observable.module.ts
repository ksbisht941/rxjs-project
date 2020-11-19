import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { RouterModule, Routes } from '@angular/router';
import { IntervalAndTimerComponent } from './interval-and-timer/interval-and-timer.component';
import { OfAndFromComponent } from './of-and-from/of-and-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { MergeComponent } from './merge/merge.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectAndBehavioursubjectComponent } from './subject-and-behavioursubject/subject-and-behavioursubject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ConcatComponent } from './concat/concat.component';

const routes: Routes = [
  { path: '', component: ObservableComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'interval-and-timer', component: IntervalAndTimerComponent },
  { path: 'of-and-from', component: OfAndFromComponent },
  { path: 'toArray', component: ToArrayComponent },
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take-takeLast-takeUntil', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'subject-and-behaviourSubject', component: SubjectAndBehavioursubjectComponent },
  { path: 'replaySubject', component: ReplaySubjectComponent },
  { path: 'asyncSubject', component: AsyncSubjectComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'mergeMap', component: MergemapComponent },
];

@NgModule({
  declarations: [
    ObservableComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    MergeComponent,
    MergemapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    SubjectAndBehavioursubjectComponent,
    ReplaySubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    AsyncSubjectComponent,
    ConcatComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ObservableModule {}
