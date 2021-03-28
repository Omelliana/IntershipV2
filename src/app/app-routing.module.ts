import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AllUsersComponent } from './modules/users/components/all-users/all-users.component';
import { BlockedUsersComponent } from './modules/users/components/blocked-users/blocked-users.component';
import { ActiveUsersComponent } from './modules/users/components/active-users/active-users.component';

const routes: Routes = [
  { path: 'all', component: AllUsersComponent, data: { animation: 'isFirst' }  },
  { path: 'blocked', component: BlockedUsersComponent, data: { animation: 'isMiddle' }  },
  { path: 'active', component: ActiveUsersComponent, data: { animation: 'isLast' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
