import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {

  users: User[] = [];
  url = 'https://watchlater.cloud.technokratos.com/get/array';
  constructor( private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.getUsers()
      .subscribe((response: User[]) => {
        this.users = response;
      });
  }

  // получить данные из JSON
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
}
