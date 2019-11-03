import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';
import { Team } from '../../models/team.interface';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.scss']
})
export class TeamsViewComponent implements OnInit {

  teams: Team[];

  constructor( private teamsService: TeamsService ) { }

  ngOnInit() {
    const teams$ = this.teamsService.getTeams().subscribe(
      value => {
        this.teams = value;
      }
    );
  }
}
