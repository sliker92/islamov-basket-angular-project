import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {
    path: 'articles',
    loadChildren: './articles-page/modules/articles.module#ArticlesModule'
  },
  {
    path: 'news',
    loadChildren: './news-page/modules/news.module#NewsModule'
  },
  {
    path: 'rating',
    loadChildren: './rating-page/modules/rating.module#RatingModule'
  },
  {
    path: 'teams',
    loadChildren: './teams-page/modules/teams.module#TeamsModule'
  },
  {
    path: 'teams/players',
    loadChildren: './teams-page/modules/players.module#PlayersModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/modules/auth.module#AuthModule'
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
