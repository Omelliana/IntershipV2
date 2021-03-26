import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NavigationBarComponent,
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
    NavigationBarComponent
  ]
})

export class UsersModule {
}
