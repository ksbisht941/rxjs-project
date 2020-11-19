import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'guide', pathMatch: "full"},
  {
    path: 'guide',
    loadChildren: () =>
      import('./observable/observable.module').then((m) => m.ObservableModule),
  },
  {
    path: 'gsap',
    loadChildren: () =>
      import('./gsap/gsap.module').then((m) => m.GsapModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
