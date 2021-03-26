import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import * as moment from 'moment';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  @ViewChild(ModalComponent, {static: true}) modal!: ModalComponent;

  users: User[] = [];
  statuses = ['Приостановлена', 'Подписка активна', 'Заблокирован'];
  getUsersUrl = 'https://watchlater.cloud.technokratos.com/get/array';
  getImageUrl = 'https://randomuser.me/api/portraits/men/32.jpg';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // получить данные из JSON
    this.getUsers()
      .subscribe((response: User[]) => {
        this.users = response.map(x => Object.assign(
          new User(x.id, x.name, x.fname, x.mname, x.status, x.lastUpdatedAt, x.avatar, x.balance), x));
      });
  }

  // проверка если изображение не действительно и загрузка заглушки
  alertError(elem: any): void{
    elem.target.src = this.getImageUrl;
  }

  // получить JSON
  getUsers(): Observable<User[]>  {
    return this.httpClient.get<User[]>(this.getUsersUrl);
  }

  // отобразить ФИО
  getFIO(user: User): string{
    return `${user.fname} ${user.name[0]}. ${user.mname[0]}.`;
  }

  // отобразить баланс
  getBalance(fields: any): string{
    return `Баланс: ${fields.replace(',', ' ')}`;
  }

  // отобразить время
  getTime(user: User): string{
    const days = user.lastUpdatedAt;
    return moment().diff(days, 'days') > 319 ?
      moment(days).format('YYYY.MM.DD') :
      moment(days).fromNow();
  }

  // открыть модалку
  openModal(user: User): void{
    this.modal.openModal(user);
  }
}
