import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news-page/news.component';
import {ArticlesPageComponent} from './articles-page/articles.component';
import {AboutUsComponent} from './about-page/about-us.component';
import {RatingComponent} from './rating-page/rating.component';
import {TeamsComponent} from './teams-page/teams.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {ArticleComponent} from './shared/components/article/article.component';
import {PostInfoComponent} from './shared/components/post-info/post-info.component';
import {ArticleInfoComponent} from './shared/components/article-info/article-info.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'news', children: [
    {path: '', component: NewsComponent},
    {path: ':id', component: PostInfoComponent}]
  },
  {path: 'articles', children: [
    {path: '', component: ArticlesPageComponent},
    {path: ':id', component: ArticleInfoComponent}]
  },
  {path: 'about', component: AboutUsComponent, pathMatch: 'full'},
  {path: 'rating', component: RatingComponent, pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent, pathMatch: 'full'}
];

// const routes: Routes = [
//   {path: '', component: HomePageComponent, pathMatch: 'full'},
//   {path: 'news', component: NewsComponent, pathMatch: 'full'},
//   {path: 'news/:id', component: NewsComponent},
//   {path: 'articles', component: ArticlesPageComponent, pathMatch: 'full'},
//   {path: 'articles/:id', component: ArticlesPageComponent},
//   {path: 'about', component: AboutUsComponent, pathMatch: 'full'},
//   {path: 'rating', component: RatingComponent, pathMatch: 'full'},
//   {path: 'teams', component: TeamsComponent, pathMatch: 'full'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
