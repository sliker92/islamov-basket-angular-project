import {error, ok, sendJSON} from './helpers';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {article} from './data/articles';
import {news} from './data/news';
import {rating} from './data/rating';
import {teams} from './data/teams';

import {Article} from '../shared/interfaces/article.interface';
import {Player} from '../shared/interfaces/player.interface';
import {Post} from '../shared/interfaces/post.interface';
import {Team} from '../shared/interfaces/team.interface';
import {Rating} from '../shared/interfaces/rating.interface';

export function getPosts() {
  return ok<Post[]>(news);
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

// export function getPostById(id: number) {
//   const newsID = id;
//   const existingID = news.find(news => news.id === id);
//   if (!existingID) {
//     return ok([]);
//   }
//   return ok(news);
// }

export function getPostByID(num: number, post: string) {
  if (post === 'news') {
    return ok(news.find(post => post.id === num));
  } else {
    return ok(article.find(post => post.id === num));
  }
}
