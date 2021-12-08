import { TodosIntercepterService } from './services/todos-intercepter.service';
import { AppRoutingModule } from './app-rouning.module';
import { UserService } from './services/users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicsComponent } from './components/basics/basics.component';
import { ContainerComponent } from './components/container/container.component';
import { ManualCreatedComponent } from './components/manual-created/manual-created.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FirstAssignmentComponent } from './components/first-assignment/first-assignment.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { StructuralComponent } from './components/directives-deep-dive/structural/structural.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BackgroundDirective } from './directives/background.directive';
import { UntilDirective } from './directives/until.directive';
import { ServicesBasicsComponent } from './components/services/services-basics/services-basics.component';
import { ServicesAnotherComponent } from './components/services/services-another/services-another.component';
import { LogService } from './services/log.service';
import { ObservablesBasicsComponent } from './components/observables/observables-basics/observables-basics.component';
import { PipesBasicsComponent } from './components/pipes/pipes-basics/pipes-basics.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AddUsersComponent } from './components/routing/add-users/add-users.component';
import { ViewUsersComponent } from './components/routing/view-users/view-users.component';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UrlDataPassingComponent } from './components/routing/url-data-passing/url-data-passing.component';
import { HttpBasicsComponent } from './components/http-requests/http-basics/http-basics.component';

// const routes: Routes = [
//   { path: '', component: ContainerComponent },
//   {
//     path: 'users',
//     children: [
//       { path: 'add-users', component: AddUsersComponent },
//       { path: 'view-users', component: ViewUsersComponent },
//       { path: 'user-details/:name', component: UserDetailsComponent },
//     ],
//   },
//   { path: 'page-not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: 'page-not-found' },
// ];

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    ContainerComponent,
    ManualCreatedComponent,
    DirectivesComponent,
    FirstAssignmentComponent,
    LocalReferenceComponent,
    ContentProjectionComponent,
    StructuralComponent,
    HighlightDirective,
    BackgroundDirective,
    UntilDirective,
    ServicesBasicsComponent,
    ServicesAnotherComponent,
    ObservablesBasicsComponent,
    PipesBasicsComponent,
    PowerPipe,
    FilterPipe,
    AddUsersComponent,
    ViewUsersComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    UrlDataPassingComponent,
    HttpBasicsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    UserService,
    LogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TodosIntercepterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
