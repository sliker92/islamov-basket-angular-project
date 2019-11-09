import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsViewComponent } from '../containers/teams-view/teams-view.component';
import { TeamsService } from '../services/teams.service';
import { SharedModule } from '../../shared/shared.module';
import { TeamDetailComponent } from '../components/team-detail/team-detail.component';

@NgModule({
  declarations: [
    TeamsViewComponent,
    TeamDetailComponent
  ],
  providers: [
    TeamsService
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
