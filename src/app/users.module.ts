import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';
import { ViewUsersComponent } from './components/routing/view-users/view-users.component';
import { AddUsersComponent } from './components/routing/add-users/add-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddUsersComponent, ViewUsersComponent, UserDetailsComponent],
  imports: [RouterModule, CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
