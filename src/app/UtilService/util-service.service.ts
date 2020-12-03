import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Kabir');
  videoEmit = new ReplaySubject<string>(2, 5000);
  asyncEmit = new AsyncSubject();

  rxjsGuideRoute = [
    { topic: 'FromEvent', url: '/guide/fromEvent', type: 'operator' },
    {
      topic: 'Interval And Timer',
      url: '/guide/interval-and-timer',
      type: 'operator',
    },
    { topic: 'Of And From', url: '/guide/of-and-from', type: 'operator' },
    { topic: 'ToArray', url: '/guide/toArray', type: 'operator' },
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
    { topic: 'Concat', url: '/guide/concat', type: 'operator' },
    { topic: 'Merge', url: '/guide/merge', type: 'operator' },
    { topic: 'MergeMap', url: '/guide/mergeMap', type: 'operator' },
    { topic: 'ConcatMap', url: '/guide/concatMap', type: 'operator' },
    { topic: 'ConcatMap Mobile Notification UI', url: '/guide/concatMap-notification', type: 'operator' },
    { topic: 'SwicthMap', url: '/guide/switchMap', type: 'operator' },
    { topic: 'ExhaustMap', url: '/guide/exhaustMap', type: 'operator' },
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

  printNotification(val, containerId) {
    let el = document.createElement('li');
    el.setAttribute('class', 'ios-notifications__item');
    el.innerHTML = val;

    document.getElementById(containerId).appendChild(el);
  }
}
