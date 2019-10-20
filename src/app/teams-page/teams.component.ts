import { Component, OnInit } from '@angular/core';
import {Team} from '../shared/interfaces/team.interface';
import {TeamsService} from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[];

  constructor( private teamsService: TeamsService ) { }

  ngOnInit() {
    const teams$ = this.teamsService.getTeams().subscribe(
      value => {
        this.teams = value;
        console.log(this.teams);
      }
    );
  }
}
