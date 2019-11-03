import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { article } from './data/articles';
import { news } from './data/news';
import { rating } from './data/rating';
import { teams } from './data/teams';

import { Article } from '../articles-page/models/article.interface';
import { Rating } from '../rating-page/models/rating.interface';
import { Team } from '../teams-page/models/team.interface';
import { News } from '../news-page/models/news.interface';

export function getPosts() {
  return ok<News[]>(news);
}

export function getArticles() {
  return ok<Article[]>(article);
}

export function getTeams() {
  return ok<Team[]>(teams);
}

export function getRating() {
  return ok<Rating[]>(rating);
}

export function getPostByID(num: number, post: string) {
  if (post === 'news') {
    return ok(news.find(post => post.id === num));
  } else {
    return ok(article.find(post => post.id === num));
  }
}
