import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from './endpoints';
import {checkUrl, idFromUrl} from './helpers';
import {
  getArticles, getPostByID,
  getPosts, getTeams,
} from './routes';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { body } = request;

    console.log('request', request);

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case checkUrl(request, endpoints.news.article):
          return getArticles();
        case checkUrl(request, endpoints.news.post):
          return getPosts();
        case checkUrl(request, endpoints.league.team):
          return getTeams();
        case request.url.match(/\/news\/\d+$/) && request.method === 'GET':
          const num = idFromUrl(request);
          return getPostByID(num);
        default:
          return next.handle(request);
      }
    }
  }
}

