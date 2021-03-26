import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    AllUsersComponent,
    BlockedUsersComponent,
    ActiveUsersComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UserComponent
  ]
})

export class UsersModule {
}
