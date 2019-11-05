import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostsService } from '../../../shared/services/posts.service';
import { News } from '../../models/news.interface';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent implements OnInit {

  post$: Observable<News[]>;
  post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.post$ = this.postsService.getPostByID(+params.get('id'), 'news'))
      ).subscribe((data) => {
      this.post = data;
    });
  }

  toPostEdit() {
    this.router.navigate([`/news/${this.post.id}/edit`]);
  }
}
