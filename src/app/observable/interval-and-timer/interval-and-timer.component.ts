import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.sass'],
})
export class IntervalAndTimerComponent implements OnInit {
  obsMsg: string;
  videoSubscription: Subscription;
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);

    // timer(delay, interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;

      this._designUtility.print(res, 'elContainer1');
      this._designUtility.print(res, 'elContainer2');
      this._designUtility.print(res, 'elContainer3');

      this._designUtility.print(res, 'elContainer4');
      this._designUtility.print(res, 'elContainer5');
      this._designUtility.print(res, 'elContainer6');

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });


  }
}
