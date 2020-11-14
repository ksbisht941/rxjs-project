import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.sass']
})
export class TopicListComponent implements OnInit {
  topicList: { topic: string; url: string; type: string; }[];

  constructor(private _designUtility: UtilService) { }

  ngOnInit(): void {
    this.topicList = this._designUtility.rxjsGuideRoute;
  }

}
