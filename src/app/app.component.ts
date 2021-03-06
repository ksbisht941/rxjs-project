import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UtilService } from './UtilService/util-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';
  activeRoute: string;
  rxjsGuideRoute: { topic: string; url: string; type: string }[];
  gsapGuideRoute: { topic: string; url: string; type: string }[];
  exclusive: boolean = false;

  constructor(private _designUtility: UtilService, private router: Router) {}

  onClickMenu(e: Event) {
    e.preventDefault();
    document.querySelector('.nav-toggle').classList.toggle('active');
    document.querySelector('html').classList.toggle('openNav');
  }

  ngOnInit(): void {
    this.rxjsGuideRoute = this._designUtility.rxjsGuideRoute;
    this.gsapGuideRoute = this._designUtility.gsapGuideRoute;

    
    
    if (this.activeRoute === 'gsap') {
      document.getElementById('main').style.padding = '0';
      document.querySelector('body').style.overflow = 'hidden';
      console.log('gsap');
    } else if (this.activeRoute === 'guide' || this.activeRoute === '') {
      document.getElementById('main').style.padding = '1% 1.5em';
      document.querySelector('body').style.overflow = 'unset';
      console.log('guide');
    }
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let url: string = event.url;
        // let arr = url.split('/');
        
        // this.activeRoute = arr[1];
        
        console.log(url);

        if (url === '/guide/concatMap-notification' || url === '/gsap/distortion-landing-page') {
          document.getElementById('main').style.padding = '0';
          document.querySelector('body').style.overflow = 'hidde7n';
          console.log('gsap');
        } else if (url === 'guide' || url === '/') {
          document.getElementById('main').style.padding = '1% 1.5em';
          document.querySelector('body').style.overflow = 'unset';
          console.log('guide');
        }
      }
    });

    this._designUtility.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}
