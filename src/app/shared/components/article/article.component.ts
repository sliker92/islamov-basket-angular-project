import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$;
  articles;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.article$ = this.postService.getArticles().subscribe(
      value => {
        this.articles = value;
      }
    );
  }
}

