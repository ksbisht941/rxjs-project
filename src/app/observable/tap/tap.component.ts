import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.sass'],
})
export class TapComponent implements OnInit {
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const source = interval(1000);
    const arr = this._designUtility.rxjsGuideRoute;

    let obsSubcription: Subscription;
    obsSubcription = source
      .pipe(
        tap((res) => {
          if (res === 4) {
            obsSubcription.unsubscribe();
          }
        }),
        map((res) => arr[res].topic)
      )
      .subscribe((res) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer1');
      });

    let obsSubcription2: Subscription;
    obsSubcription2 = source
      .pipe(
        tap((res) => {
          console.log(res);
          if (res === 5) {
            obsSubcription2.unsubscribe();
          }
        }),
        map((res) => arr[res].topic)
      )
      .subscribe((res) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer2');
      });
  }
}
