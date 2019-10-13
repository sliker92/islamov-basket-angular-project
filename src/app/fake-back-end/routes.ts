import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { article } from './data/articles';
import { news } from './data/news';
import { rating } from './data/rating';
import { teams } from './data/teams';

import { Article } from '../shared/interfaces/article.interface';
import { Player } from '../shared/interfaces/player.interface';
import { Post } from '../shared/interfaces/post.interface';
import { Team } from '../shared/interfaces/team.interface';

export function getPosts() {
  return ok<Post[]>(news);
}

export function getArticles() {
  return ok<Article[]>(article);
}

// export function getPostById(id: string) {
//   const branchId = id;
//   const existingBranch = posts.find(branch => branch.id === branchId);
//   if (!existingBranch) {
//     return ok([]);
//   }
//   return ok(branches);
// }
