import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersViewComponent } from '../containers/players-view/players-view.component';
import { TeamsService } from '../services/teams.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PlayersViewComponent
  ],
  providers: [
    TeamsService
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule
  ]
})
export class PlayersModule { }
