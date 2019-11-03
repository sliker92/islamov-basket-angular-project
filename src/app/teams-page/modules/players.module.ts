import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersViewComponent } from '../containers/players-view/players-view.component';
import { TeamsService } from '../services/teams.service';



@NgModule({
  declarations: [
    PlayersViewComponent
  ],
  providers: [
    TeamsService
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
