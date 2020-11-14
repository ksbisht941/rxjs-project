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
import { TopicListComponent } from './topic-list/topic-list.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';

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
    TopicListComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ObservableModule {}
