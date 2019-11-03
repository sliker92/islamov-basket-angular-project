import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from 'src/app/fake-back-end/endpoints';
import {checkUrl, idFromUrl} from '../fake-back-end/helpers';
import {
  getArticles, getPostByID,
  getNews, getTeams, getRating
} from '../fake-back-end/routes';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { body } = request;

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
          return getNews();
        case checkUrl(request, endpoints.league.team):
          return getTeams();
        case checkUrl(request, endpoints.league.rating):
          return getRating();
        case request.url.match(/\/news\/\d+$/) && request.method === 'GET':
          const numNews = idFromUrl(request);
          return getPostByID(numNews, 'news');
        case request.url.match(/\/articles\/\d+$/) && request.method === 'GET':
          const numArt = idFromUrl(request);
          return getPostByID(numArt, 'articles');
        default:
          return next.handle(request);
      }
    }
  }
}

