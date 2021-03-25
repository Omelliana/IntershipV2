import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllUsersComponent} from './users/all-users/all-users.component';
import {BlockedUsersComponent} from './users/blocked-users/blocked-users.component';
import {ActiveUsersComponent} from './users/active-users/active-users.component';

const routes: Routes = [
  { path: 'all', component: AllUsersComponent, data: { animation: 'isFirst' }  },
  { path: 'blocked', component: BlockedUsersComponent },
  { path: 'active', component: ActiveUsersComponent, data: { animation: 'isLast' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
