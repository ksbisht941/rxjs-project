import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.sass'],
})
export class ToArrayComponent implements OnInit {
  sourceSub: Subscription;
  users = [
    { name: 'Kuldeep', skill: 'Angular' },
    { name: 'Dhruv', skill: 'Java' },
    { name: 'Janki', skill: 'Java' },
  ];

  constructor() {}

  ngOnInit(): void {
    const source1 = interval(10000);

    this.sourceSub = source1.pipe(toArray(), take(5)).subscribe(res => console.log(res));

    // Ex - 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res => console.log(res));

    // Ex - 03
    const source3 = of('Kuldeep', 'Dhruv', 'Janki');
    source3.pipe(toArray()).subscribe(res => console.log(res))
  }
}
