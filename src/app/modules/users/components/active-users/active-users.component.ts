import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userData: UserService) {
  }

  ngOnInit(): void{
    this.userData.getAllUsers()
      .subscribe((response: User[]) => {
        this.users = response.map(user => Object.assign(
          new User(user.id, user.name, user.fname, user.mname, user.status,
            user.lastUpdatedAt, user.avatar, user.balance), user)
        ).filter(user => user.status === 1);
      });
  }

}
