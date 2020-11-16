import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.sass'],
})
export class RetryComponent implements OnInit {
  person: Object;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe((res) => {
        console.log(res);

        this.person = res;
      });
  }
}
