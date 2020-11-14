import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.sass'],
})
export class TakeComponent implements OnInit {
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const nameSource = from(this._designUtility.rxjsGuideRoute);

    // Ex - 01 | take(2)
    nameSource.pipe(take(2)).subscribe((res) => {
      console.log(res.topic);

      this._designUtility.print(res.topic, 'elContainer1');
    });

    // Ex - 02 | takeLast(3)
    nameSource.pipe(takeLast(3)).subscribe((res) => {
      console.log(res);

      this._designUtility.print(res.topic, 'elContainer2');
    });

    // Ex - 03 | takeUntil
    const source = interval(1000);

    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    source
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condition2)
      )
      .subscribe((res) => {
        this._designUtility.print(res, 'elContainer3');
      });
  }
}
