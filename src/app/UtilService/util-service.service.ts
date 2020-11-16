import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  videoEmit = new ReplaySubject<string>(2, 5000);
  userName = new BehaviorSubject<string>('Kabir');
  exclusive = new Subject<boolean>();

  rxjsGuideRoute = [
    { topic: 'FromEvent', url: '/guide/fromEvent', type: 'operator' },
    {
      topic: 'Interval And Timer',
      url: '/guide/interval-and-timer',
      type: 'operator',
    },
    { topic: 'Of And From', url: '/guide/of-and-from', type: 'operator' },
    { topic: 'toArray', url: '/guide/toArray', type: 'operator' },
    {
      topic: 'Custom Observable',
      url: '/guide/custom-observable',
      type: 'operator',
    },
    { topic: 'Map', url: '/guide/map', type: 'operator' },
    { topic: 'Pluck', url: '/guide/pluck', type: 'operator' },
    { topic: 'Filter', url: '/guide/filter', type: 'operator' },
    { topic: 'Tap', url: '/guide/tap', type: 'operator' },
    {
      topic: 'Take, TakeLast, TakeUntil',
      url: '/guide/take-takeLast-takeUntil',
      type: 'operator',
    },
    {
      topic: 'Retry, RetryWhen, Scan, Delay',
      url: '/guide/retry',
      type: 'operator',
    },
    {
      topic: 'Subject And BehaviourSubject',
      url: '/guide/subject-and-behaviourSubject',
      type: 'operator',
    },
    { topic: 'ReplaySubject', url: '/guide/replaySubject', type: 'operator' },
    { topic: 'AsyncSubject ', url: '/guide/asyncSubject', type: 'operator' },
    { topic: 'merge', url: '/guide/merge', type: 'operator' },
    { topic: 'mergeMap', url: '/guide/mergeMap', type: 'operator' },
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
