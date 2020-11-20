import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, concat, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.sass'],
})
export class ConcatComponent implements OnInit, OnDestroy {
  subscription: Subscription;;
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const sourceTech = interval(6000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );

    const sourceComedy = interval(2000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(4)
    );

    const sourceNews = interval(4000).pipe(
      map((v) => 'News Video #' + (v + 1)),
      take(3)
    );

    // sourceTech.subscribe((res) => {
    //   console.log(res);
    //   this._designUtility.print(res, 'elContainer');
    // });

    // sourceComedy.subscribe((res) => {
    //   console.log(res);
    //   this._designUtility.print(res, 'elContainer');
    // });

    // sourceNews.subscribe((res) => {
    //   console.log(res);
    //   this._designUtility.print(res, 'elContainer');
    // });

    const finalObs = concat(sourceTech, sourceComedy, sourceNews);

    this.subscription = finalObs.subscribe(res => {
      this._designUtility.print(res, 'elContainer');
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
