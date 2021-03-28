import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Список пользователей';

  constructor() {
    moment.relativeTimeThreshold('ss', 0);
    moment.locale('ru');
  }

}
