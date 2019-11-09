import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {
    path: 'articles',
    loadChildren: () => import('./articles-page/modules/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news-page/modules/news.module').then(m => m.NewsModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating-page/modules/rating.module').then(m => m.RatingModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams-page/modules/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'teams/players',
    loadChildren: () => import('./teams-page/modules/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/modules/auth.module').then(m => m.AuthModule)
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
