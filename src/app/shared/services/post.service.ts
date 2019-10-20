import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpParams} from '@angular/common/http';

import {filter, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Post} from '../interfaces/post.interface';
import {Article} from '../interfaces/article.interface';
import {Router} from '@angular/router';

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/news');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getPostByID(num: number, post: string) {
    return this.http.get<Post[]>(`/api/${post}/${num}`);
  }

  // checkUrl(id: string) {
  //   console.log(this.router.url);
  //   if (this.router.url == '/') {
  //     console.log(`/news/${id}`);
  //     return `/news/${id}`;
  //   } else {
  //     return id;
  //   }
  // }
}
