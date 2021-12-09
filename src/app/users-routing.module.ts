import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './components/routing/add-users/add-users.component';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';
import { ViewUsersComponent } from './components/routing/view-users/view-users.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'users',
    // canActivate: [AuthGuardService],
    // canActivateChild: [AuthGuardService],
    children: [
      { path: 'add-users', component: AddUsersComponent },
      {
        path: 'view-users',
        canActivate: [AuthGuardService],
        component: ViewUsersComponent,
      },
      {
        path: 'user-details/:name',
        canActivate: [AuthGuardService],
        component: UserDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
