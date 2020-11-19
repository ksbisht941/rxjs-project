import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.sass'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncEmit;
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    this._designUtility.asyncEmit.subscribe((res) => {
      this.asyncEmit = res;
    });
  }

  onVideoAdd(video) {
    this._designUtility.asyncEmit.next(video);
  }

  onComplete() {
    this._designUtility.asyncEmit.complete();
  }
}
