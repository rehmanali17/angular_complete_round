import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUsersComponent } from './components/routing/add-users/add-users.component';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';
import { ViewUsersComponent } from './components/routing/view-users/view-users.component';
import { UrlDataPassingComponent } from './components/routing/url-data-passing/url-data-passing.component';
import { ResolverService } from './services/resolver.service';
import { HttpBasicsComponent } from './components/http-requests/http-basics/http-basics.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'url-passing',
    component: UrlDataPassingComponent,
    data: { static_name: 'Rehman Ali' },
    resolve: { dynamic_name: ResolverService },
  },
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
  { path: 'http', component: HttpBasicsComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
