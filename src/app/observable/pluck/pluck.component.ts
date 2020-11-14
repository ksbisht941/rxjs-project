import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.sass'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  users = [
    { name: 'Kuldeep', skills: 'Angular' },
    { name: 'Dhruv', skills: 'Java' },
    { name: 'Janki', skills: 'Mongo' },
  ];

  ngOnInit(): void {
   from(this.users).pipe(
     map(data => data.name)
   ).subscribe(res => {
     console.log(res);
     
   });
  }
}
