import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsService } from './services/posts.service';
import { News } from '../news-page/models/news.interface';

@Injectable({ providedIn: 'root' })
export class NewsResolver implements Resolve<News[]> {
  constructor(
    private postsService: PostsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
    return this.postsService.getPostByID(+route.paramMap.get('id'), 'news');
  }
}
