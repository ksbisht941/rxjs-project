import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.sass'],
})
export class OfAndFromComponent implements OnInit {
  Obs2Msg: { a: string; b: string; c: string };
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const Obs1 = of('Kuldeep', 'Dhruv', 'Navin');
    Obs1.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer1');
    });

    const Obs2 = of({ a: 'Kuldeep', b: 'Dhruv', c: 'Navin' });
    Obs2.subscribe((res) => {
      console.log(res);
      this.Obs2Msg = res;
    });

    const Obs3 = from(['Kuldeep', 'Dhruv', 'Navin']);
    Obs3.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3');
    });

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      console.log('promise ' + res);
      this._designUtility.print(res, 'elContainer4');
    });

    const Obs5 = from('RxJS Guide');
    Obs5.subscribe((res) => {
      console.log('promise ' + res);
      this._designUtility.print(res, 'elContainer5');
    });
  }
}
