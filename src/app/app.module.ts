import { UserService } from './services/users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
