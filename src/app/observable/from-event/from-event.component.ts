import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.sass'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUtility: UtilService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countVal = 'Video ' + count++;
      this._designUtility.print(countVal, 'elContainer1');
    });
  }
}
