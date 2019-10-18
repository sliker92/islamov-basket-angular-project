import {Component, OnInit} from '@angular/core';

import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/interfaces/post.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  posts: Post[];
  posts$;
  w;

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts().subscribe(
      value => {
        this.posts = value;
        this.w = value[0];
      }
    );
  }
}

