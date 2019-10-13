import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Post} from '../interfaces/post.interface';
import {Article} from '../interfaces/article.interface';

@Injectable()
export class PostService {
  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/news');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }
  //
  // getCartItems(): Observable<Item[]> {
  //   return this.http.get<Item[]>('/api/cart');
  // }


}
