import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.sass'],
})
export class Comp3Component implements OnInit {
  userName: string;

  constructor(private _desingUtility: UtilService) {}

  ngOnInit(): void {
    this._desingUtility.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  onChange(userName) {
    this._desingUtility.userName.next(userName.value);
  }
}
