import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})

export class AppComponent {
  title = 'Intv2';

  prepareRoute(outlet: RouterOutlet): void
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
