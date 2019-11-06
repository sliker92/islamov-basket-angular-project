import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostsService } from '../../../shared/services/posts.service';
import { Article } from '../../models/article.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss']
})
export class ArticlesDetailComponent implements OnInit {

  post$: Observable<Article[]>;
  post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.post$ = this.postsService.getPostByID(+params.get('id'), 'articles'))
      ).subscribe((data) => {
      this.post = data;
    });
  }

  toPostEdit() {
    this.router.navigate([`/articles/${this.post.id}/edit`]);
  }
}
