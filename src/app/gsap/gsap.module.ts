import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapComponent } from './gsap.component';
import { DistortionLandingPageComponent } from './distortion-landing-page/distortion-landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimeLandingPageComponent } from './anime-landing-page/anime-landing-page.component';
import { AnimateOnScrollingComponent } from './animate-on-scrolling/animate-on-scrolling.component';
import { DestinationFreakComponent } from './destination-freak/destination-freak.component';

const route: Routes = [
  { path: '', component: GsapComponent },
  {
    path: 'distortion-landing-page',
    component: DistortionLandingPageComponent,
  },
  { path: 'anime-landing-page', component: AnimeLandingPageComponent },
  {
    path: 'animate-scrolling-page',
    component: AnimateOnScrollingComponent,
  },
  { path: 'destination-freak', component: DestinationFreakComponent },
];

@NgModule({
  declarations: [
    GsapComponent,
    DistortionLandingPageComponent,
    AnimeLandingPageComponent,
    AnimateOnScrollingComponent,
    DestinationFreakComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class GsapModule {}
