import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsViewComponent } from '../containers/teams-view/teams-view.component';
import { TeamsService } from '../services/teams.service';

@NgModule({
  declarations: [
    TeamsViewComponent
  ],
  providers: [
    TeamsService
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
