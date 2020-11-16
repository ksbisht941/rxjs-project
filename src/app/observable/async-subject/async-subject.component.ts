import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.sass'],
})
export class AsyncSubjectComponent implements OnInit {
  // subscription
  subscription2: Subscription;
  subscription3: Subscription;

  // userList
  user1List = ['Angular 1', 'Angular 2'];
  user2List: any = [];
  user3List: any = [];

  // subscribeMode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  methodInterval: boolean = false;

  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    this._designUtility.videoEmit.subscribe((res) => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(video) {
    this._designUtility.videoEmit.next(video);
  }

  onComplete() {

  }
  
  toggleMthod() {
    const broadCastVideo = interval(1000);
    broadCastVideo.subscribe((res) => {
      this._designUtility.videoEmit.next('Video ' + res);
    });
    this.methodInterval = !this.methodInterval;
  }
}
