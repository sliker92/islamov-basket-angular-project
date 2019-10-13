import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }

}
