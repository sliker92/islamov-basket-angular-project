import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";
import {NewsComponent} from "./news-page/news.component";
import {ArtcilesComponent} from "./artciles-page/artciles.component";
import {AboutUsComponent} from "./about-page/about-us.component";
import {RatingComponent} from "./rating-page/rating.component";
import {TeamsComponent} from "./teams-page/teams.component";


const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'articles-page', component: NewsComponent, pathMatch: 'full'},
  {path: 'articles', component: ArtcilesComponent, pathMatch: 'full'},
  {path: 'about', component: AboutUsComponent, pathMatch: 'full'},
  {path: 'rating-page', component: RatingComponent, pathMatch: 'full'},
  {path: 'teams-page', component: TeamsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
