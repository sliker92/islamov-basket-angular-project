import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { news } from './data/news';

export function getNews(title) {
  return ok(news.filter(message => message.title === title));
}


export function getNewsById(newsID: number) {
  return ok(news.find(news => news.id === newsID));
}
