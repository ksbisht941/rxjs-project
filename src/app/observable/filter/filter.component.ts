import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass'],
})
export class FilterComponent implements OnInit {
  dataArr: { topic: string; url: string; type: string }[];
  data1: { topic: string; url: string; type: string }[];
  data2: { topic: string; url: string; type: string }[];
  data3: { topic: string; url: string; type: string }[];

  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    this.dataArr = this._designUtility.rxjsGuideRoute;

    const source = from(this.dataArr);

    // Ex -01 by length
    source
      .pipe(
        filter((member) => member.topic.length > 5),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data1 = res;
      });

    // Ex -02 by type
    source
      .pipe(
        filter((member) => member.type == 'anything'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    // Ex -02 by nth item
    source
      .pipe(
        filter((member) => member.topic.length <= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data3 = res;
      });
  }
}
