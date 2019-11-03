import { Component, OnInit } from '@angular/core';

import { Rating } from '../../models/rating.interface';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {

  teamsWest: Rating[] = [];
  teamsEast: Rating[] = [];
  teamsAll;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.getRating().subscribe(
      value => {
        this.teamsAll = value;
        this.teamsAll.forEach(team => {
          team.summary.conference === 'East' ? this.teamsEast.push(team) : this.teamsWest.push(team);
        });
        this.teamsEast.sort((a, b) => (a.summary.wins > b.summary.wins) ? -1 : 1);
        this.teamsWest.sort((a, b) => (a.summary.wins > b.summary.wins) ? -1 : 1);
      });
  }
}
