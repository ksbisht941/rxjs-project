import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-subject-and-behavioursubject',
  templateUrl: './subject-and-behavioursubject.component.html',
  styleUrls: ['./subject-and-behavioursubject.component.sass'],
})
export class SubjectAndBehavioursubjectComponent implements OnInit, OnDestroy {
  userName: string;
  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);

    this._designUtility.userName.subscribe((res) => {
      console.log(res);
      this.userName = res;
    });
  }

  ngOnDestroy() {
    this._designUtility.exclusive.next(false);
  }
}
