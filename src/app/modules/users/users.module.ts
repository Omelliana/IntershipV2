import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { BlockedUsersComponent } from './components/blocked-users/blocked-users.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    AllUsersComponent,
    BlockedUsersComponent,
    ActiveUsersComponent,
    ModalComponent,
    UserInfoComponent,
    DropdownListComponent
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
