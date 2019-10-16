import {Component, OnInit, AfterContentChecked, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostService} from '../shared/services/post.service';
import {Observable, pipe} from 'rxjs';
import {Post} from '../shared/interfaces/post.interface';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

