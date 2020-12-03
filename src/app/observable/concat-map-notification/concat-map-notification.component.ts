import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { UtilService } from 'src/app/UtilService/util-service.service';

@Component({
  selector: 'app-concat-map-notification',
  templateUrl: './concat-map-notification.component.html',
  styleUrls: ['./concat-map-notification.component.sass'],
})
export class ConcatMapNotificationComponent implements OnInit {
  constructor(private _designUtility: UtilService) {}

  notifyData = [
    {
      name: 'Kuldeep',
      timing: '1h ago',
      msg: "I'm waiting for you baby.",
    },
    {
      name: 'Kuber',
      timing: '1h ago',
      msg: 'Get ready for gym',
    },
    {
      name: 'Reena',
      timing: '13m ago',
      msg: 'I got a new phone',
    },
  ];

  ngOnInit(): void {
    const notificationList = document.querySelector('.ios-notifications');
    const notificationItems = document.querySelectorAll(
      '.ios-notifications__item'
    );
    notificationItems.forEach((item) =>
      item.addEventListener('click', () => {
        notificationList.classList.toggle('unfolded');
      })
    );

    from(this.notifyData)
      .pipe(concatMap((res) => this.getHTML(res)))
      .subscribe((res) => {
        this._designUtility.printNotification(
          res,
          'elContainer'
        );
        console.log(res);
      });
  }

  getHTML(data) {
    return of(`
<div class="mb-1 d-flex justify-content-between text-xs">
 <div>
  <i class="fa fa-whatsapp text-center mr-1" aria-hidden="true"></i>
  <span>WeChat</span>
 </div>
<div>${data.timing}</div>
</div>
<div class="text-sm font-weight-bold">${data.name}</div>
<div class="text-sm">${data.msg} ✨</div>
<div class="more mt-1 text-xs">3 more messages</div>`).pipe(delay(2000));
  }
}
