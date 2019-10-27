import {Component, OnInit} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/interfaces/post.interface';
import {Article} from '../shared/interfaces/article.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  posts: Post[];
  articles: Article[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    const post$ = this.postService.getPosts().subscribe(
      value => {
        this.posts = value;
      }
    );

    const article$ = this.postService.getArticles().subscribe(
      value => {
        this.articles = value;
      }
    );
  }
}
