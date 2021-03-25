import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,
    AllUsersComponent,
    BlockedUsersComponent,
    ActiveUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UserComponent
  ]
})
export class UsersModule {

  public getMoment(): any{
    return 'aaa';
  }
}
