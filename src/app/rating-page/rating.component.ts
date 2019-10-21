import {Component, OnInit} from '@angular/core';

import {map} from 'rxjs/operators';
import {Rating} from '../shared/interfaces/rating.interface';
import {RatingService} from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  teamsWest: Rating[] = [];
  teamsEast: Rating[] = [];
  teams;

  constructor(private ratingService: RatingService) {
  }

  ngOnInit() {
    this.ratingService.getRating().subscribe(
      value => {
        this.teams = value;
        this.teams.forEach(team => {
          team.summary.conference === 'East' ? this.teamsEast.push(team) : this.teamsWest.push(team);
        });
        this.teamsEast.sort((a, b) => (a.summary.wins > b.summary.wins) ? -1 : 1);
        this.teamsWest.sort((a, b) => (a.summary.wins > b.summary.wins) ? -1 : 1);
      });

  }
}
