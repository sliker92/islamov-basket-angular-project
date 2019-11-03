import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss']
})

export class RatingDetailComponent {
  @Input() teams;
}
