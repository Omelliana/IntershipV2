import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})

export class AppComponent {
  title = 'Список пользователей';

  constructor() {
    moment.relativeTimeThreshold('ss', 0);
  }

  prepareRoute(outlet: RouterOutlet): void
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
