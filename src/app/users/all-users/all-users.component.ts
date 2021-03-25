import {Component, OnInit, Renderer2} from '@angular/core';
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
  statuses = ['Приостановлена', 'Подписка активна', 'Заблокирован'];
  url = 'https://watchlater.cloud.technokratos.com/get/array';
  parentElement: HTMLElement[] = [];
  // childListElement: HTMLElement = document.getElementsByClassName('null')[0] as HTMLElement;

  constructor(private httpClient: HttpClient) {
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

  // проверка если изображение не действительно и загрузка заглушки
  alertError(elem: any): void{
    elem.target.src = 'https://randomuser.me/api/portraits/men/32.jpg';
  }

  // отобразить время
  getTime(user: User): string{
    const days = user.lastUpdatedAt;
    if ( moment().diff(days, 'days') > 319)
    { return moment(days).format('YYYY.MM.DD') ; }
    else
    { return moment(days).locale('ru').fromNow(); }
  }

  // вернуть строковый статус пользователя
  getStatusOfUser(user: User): string
  {
    return this.statuses[user.status];
  }

  // установить родителя для списка и проверка надо ли скрывать предыдущий
  setParent(element: HTMLElement, childFirst: HTMLElement, childSecond: HTMLElement): HTMLElement{
    this.parentElement[0] = childFirst;
    this.parentElement[1] = childSecond;
    element = element.children.length > 1 ? element.children[1] as HTMLElement : element;
    // проверка на уже другой открытый список
    this.checkIfSame(element);
    this.parentElement[2] = element;
    for (let i = 0; i < element.children.length; i++)
    { this.parentElement[3 + i] = element.children[i] as HTMLElement; }
    return element;
  }

  // отобразить плашку со списком статусов
  switchChannel(event: MouseEvent): void{
    let el = event.target as HTMLElement;
    if (el.parentElement && el.parentElement.parentElement)
    {
      el = (el.parentElement.className === 'dropdown-select') ?
      this.setParent(el.parentElement.parentElement, el, el.parentElement) :
      this.setParent(el.parentElement, el.children[0] as HTMLElement, el);
      el.classList.add('shown');
    }
  }

  // проверека двух открытых списков
  checkIfSame(element: HTMLElement): void{
    if (this.parentElement.length > 2)
    {
      if (element !== this.parentElement[2])
      { this.parentElement[2].classList.remove('shown'); }
    }
  }

  // проверка если пользователь нажал за приделами списка, т.е. не на саму плашку и на список
  checkOutside(event: MouseEvent): void{
    if (this.parentElement.length) {
      if (!this.parentElement.includes(event.target as HTMLElement)) {
        this.parentElement[2].classList.remove('shown');
      }
    }
  }
}
