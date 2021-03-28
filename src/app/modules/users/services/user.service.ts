import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getAllUsersUrl = 'https://watchlater.cloud.technokratos.com/get/array';

  constructor(private httpClient: HttpClient) { }

  // получить всех пользователей
  getAllUsers(): Observable<User[]>  {
    return this.httpClient.get<User[]>(this.getAllUsersUrl);
  }
}

