import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.sass'],
})
export class CustomObservableComponent implements OnInit {
  techStatus: string;
  techStatus2: string;
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    // Ex - 01 (Manual)
    const Arr1 = ['Angular', 'Typescript', 'Python', 'Java', 'Html', 'CSS'];
    const cusObs1 = Observable.create((observer) => {
      let count = 0;
      setTimeout(() => {
        observer.next(Arr1[count]);
      }, 1000);
      count++;
    });

    cusObs1.subscribe(
      (res) => {
        console.log(res);
        this._designUtility.print(res, 'elContainer1');
      },
      (err) => {
        // this.techStatus = 'error';
      },
      () => {}
    );

    // Ex - 02 (Custom Interval)
    const Arr2 = ['Angular', 'Typescript', 'Python', 'Java', 'Html', 'CSS'];
    const cusObs2 = Observable.create((observer) => {
      let count = 0;
      setTimeout(() => {
        observer.next(Arr2[count]);

        if (count >= 3) {
          observer.error('Error Emit');
        }

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    cusObs2.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer2');
    });
  }
}
