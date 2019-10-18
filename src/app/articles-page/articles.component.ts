import {Component, OnInit} from '@angular/core';

import {PostService} from '../shared/services/post.service';
import {Article} from '../shared/interfaces/article.interface';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesPageComponent implements OnInit {

  articles: Article[];

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    const article$ = this.postService.getArticles().subscribe(
      value => {
        this.articles = value;
      }
    );
  }
}
