import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userData: UserService) {
  }

  ngOnInit(): void {
    // получить данные
    this.userData.getAllUsers()
      .subscribe((response: User[]) => {
        this.users = response.map(user => Object.assign(
          new User(user.id, user.name, user.fname, user.mname, user.status,
                   user.lastUpdatedAt, user.avatar, user.balance), user));
      });
  }

}
