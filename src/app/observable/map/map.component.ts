import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit, OnDestroy {
  subscription1: Subscription;
  subscription2: Subscription;
  mapMsg1: string;
  mapMsg2: string;

  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const broadCastVideos = interval(1000);

    this.subscription1 = broadCastVideos
      .pipe(map((data) => 'videos => ' + data))
      .subscribe((res) => {
        console.log(res);
        this.mapMsg1 = res;
      });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);

    // Ex - 02
    this.subscription2 = broadCastVideos
      .pipe(map((data) => '2 * ' + data + ' = ' + data * 2))
      .subscribe((res) => {
        console.log(res);
        this.mapMsg2 = res;
      });

    setTimeout(() => {
      this.subscription2.unsubscribe();
    }, 10000);

    // Ex - 03

    const members = from([
      { id: 1, name: 'Kuldeep' },
      { id: 2, name: 'Pankaj' },
      { id: 3, name: 'Tanmay' },
      { id: 4, name: 'Dhruv' },
      { id: 5, name: 'Navin' },
      { id: 6, name: 'Vipul' },
      { id: 7, name: 'Rajshree' },
      { id: 8, name: 'Vivek' },
      { id: 9, name: 'Robin' },
    ]);

    // let memOb = from(members);

    // members.pipe(toArray()).subscribe(res => console.log(res))
    members.pipe(map((data) => data.name)).subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3')
    });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
