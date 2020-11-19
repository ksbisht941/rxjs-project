import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass'],
})
export class Comp1Component implements OnInit {
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
