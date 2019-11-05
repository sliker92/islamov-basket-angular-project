import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { News } from '../../news-page/models/news.interface';
import { Article } from '../../articles-page/models/article.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('/api/news');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getPostByID(num: number, post: string) {
    return this.http.get<News[]>(`/api/${ post }/${ num }`);
  }

  add(post) {
    this.http.post<any>('/api/news', post).subscribe(value => value.unshift(post));
  }

  update(post, path) {
   return this.http.patch<any>(`/api/${path}`, post);
  }
}
