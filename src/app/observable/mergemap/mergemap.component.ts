import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.sass'],
})
export class MergemapComponent implements OnInit {
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      res.subscribe((res2) => {
        this._designUtility.print(res2, 'elContainer1');
        console.log(res2);
      });
    });

    // EX - 02 | Map + mergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll())
    .subscribe((res) => {
      this._designUtility.print(res, 'elContainer2');
      console.log(res);
    });

    // Ex - 03 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res => {
      this._designUtility.print(res, 'elContainer3');
      console.log(res);
    })
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }
}
