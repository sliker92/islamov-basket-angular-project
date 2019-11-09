import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { News } from '../../news-page/models/news.interface';
import { Article } from '../../articles-page/models/article.interface';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('/api/news');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getPostByID(num: number, post: string) {
    return this.http.get<News[]>(`/api/${ post }/${ num }`);
  }

  add(post, path) {
    this.http.post<any>(`/api/${path}`, post).subscribe(value => value.unshift(post));
  }

  update(post, path) {
   return this.http.patch<any>(`/api/${path}`, post);
  }
}
