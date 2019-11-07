import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../../shared/services/posts.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: [ './articles-list.component.scss' ]
})
export class ArticlesListComponent implements OnInit {

  articles: Article[];
  articles$;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.articles$ = this.postsService.getArticles().subscribe(
      value => {
        this.articles = value;
      });
  }
}
