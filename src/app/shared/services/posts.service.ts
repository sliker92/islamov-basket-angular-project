import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { News } from '../../news-page/models/news.interface';
import { Article } from '../../articles-page/models/article.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getPosts(): Observable<News[]> {
    return this.http.get<News[]>('/api/news');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getPostByID(num: number, post: string) {
    return this.http.get<News[]>(`/api/${ post }/${ num }`);
  }
}
