import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news.interface';
import { PostsService } from '../../../shared/services/posts.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: [ './news-list.component.scss' ]
})
export class NewsListComponent implements OnInit {

  posts: News[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getNews().subscribe(
      value => {
        this.posts = value;
      }
    );
  }
}
