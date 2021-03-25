import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import * as moment from 'moment';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  users: User[] = [];
  statuses = ['Присотановлена', 'Подписка активна', 'Заблокирован'];
  url = 'https://watchlater.cloud.technokratos.com/get/array';

  constructor( private httpClient: HttpClient ) {
  }

  ngOnInit(): void {
    // получить данные из JSON
    this.getUsers()
      .subscribe((response: User[]) => {
        this.users = response;
      });
  }

  // получить JSON
  getUsers(): Observable<User[]>  {
    return this.httpClient.get<User[]>(this.url);
  }

  // отобразить ФИО
  getFIO(user: User): string{
    return `${user.fname} ${user.name[0]}. ${user.mname[0]}.`;
  }

  // отобразить баланс
  getBalance(fields: any): string{
    return `Баланс: ${fields.replace(',', ' ')}`;
  }

  // проверка если из api опять пришло нерабочее изображение :C
  getImage(user: User): string{
    return /\/public\/\d.jpg/.test(user.avatar)
      ? 'https://randomuser.me/api/portraits/men/32.jpg' : user.avatar;
  }

  // отобразить время
  getTime(user: User): string{
    const days = user.lastUpdatedAt;
    if ( moment().diff(days, 'days') > 319)
    { return moment(days).format('YYYY.MM.DD') ; }
    else
    { return moment(days).locale('ru').fromNow(); }
  }

  getStatusOfUser(user: User): string
  { return this.statuses[user.status]; }
}
