import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  rxjsGuideRoute = [
    { topic: 'fromEvent()', url: '/guide/fromEvent', type: 'operator' },
    {
      topic: 'interval() and timer()',
      url: '/guide/interval-and-timer',
      type: 'operator',
    },
    { topic: 'of() and from()', url: '/guide/of-and-from', type: 'operator' },
    { topic: 'toArray()', url: '/guide/toArray', type: 'operator' },
    {
      topic: 'Custom Observable',
      url: '/guide/custom-observable',
      type: 'operator',
    },
    { topic: 'map()', url: '/guide/map', type: 'operator' },
    { topic: 'pluck()', url: '/guide/pluck', type: 'operator' },
    { topic: 'filter()', url: '/guide/filter', type: 'operator' },
    { topic: 'tap()', url: '/guide/tap', type: 'operator' },
    { topic: 'take(), takeLast(), takeUntil()', url: '/guide/take-takeLast-takeUntil', type: 'operator' },
    { topic: 'retry()', url: '/guide/retry', type: 'operator' },
    { topic: 'merge()', url: '/guide/merge', type: 'operator' },
    { topic: 'mergeMap()', url: '/guide/mergeMap', type: 'operator' },
  ];

  gsapGuideRoute = [
    {
      topic: 'Distortion Landing Page',
      url: '/gsap/distortion-landing-page',
      type: 'gsap',
    },
    {
      topic: 'Anime Landing Page',
      url: '/gsap/anime-landing-page',
      type: 'gsap',
    },
    {
      topic: 'Animate Scrolling Page',
      url: '/gsap/animate-scrolling-page',
      type: 'gsap',
    },
    {
      topic: 'Destination Freak',
      url: '/gsap/destination-freak',
      type: 'gsap',
    },
  ];

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId).appendChild(el);
  }
}
