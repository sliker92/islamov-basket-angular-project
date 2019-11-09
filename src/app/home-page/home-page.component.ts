import { Component, OnInit } from '@angular/core';

import { News } from '../news-page/models/news.interface';
import { Article } from '../articles-page/models/article.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit {

  posts: News[];
  articles: Article[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getNews().subscribe(
      value => {
        this.posts = value;
      }
    );

    this.postsService.getArticles().subscribe(
      value => {
        this.articles = value;
      }
    );
  }
}
