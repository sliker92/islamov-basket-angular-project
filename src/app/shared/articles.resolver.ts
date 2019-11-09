import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsService } from './services/posts.service';
import { Article } from '../articles-page/models/article.interface';

@Injectable()
export class ArticlesResolver implements Resolve<Article[]> {
  constructor(
    private postsService: PostsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[]> {
    return this.postsService.getPostByID(+route.paramMap.get('id'), 'articles');
  }
}
