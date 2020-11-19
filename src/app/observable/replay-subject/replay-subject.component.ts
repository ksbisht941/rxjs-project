import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.sass'],
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {
  // subscription
  subscription1: Subscription;
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

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } 
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription1 = this._designUtility.videoEmit.subscribe((res) => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(video) {
    this._designUtility.videoEmit.next(video);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._designUtility.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._designUtility.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMthod() {
    const broadCastVideo = interval(1000);
    broadCastVideo.subscribe(res => {
      this._designUtility.videoEmit.next('Video ' + res);
    })
    this.methodInterval = !this.methodInterval;
  }
}
