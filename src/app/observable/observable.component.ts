import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilService } from '../UtilService/util-service.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.sass'],
})
export class ObservableComponent implements OnInit {
  rxjsGuideRoute: { topic: string; url: string; type: string; }[];

  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {
    this.rxjsGuideRoute = this._designUtility.rxjsGuideRoute;
  }
}
