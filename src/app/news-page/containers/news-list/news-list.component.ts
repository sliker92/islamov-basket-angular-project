import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.interface';
import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  posts: News[];
  posts$;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts().subscribe(
      value => {
        this.posts = value;
      }
    );
  }
}
