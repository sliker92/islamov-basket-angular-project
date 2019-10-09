import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news-page/news.component';
import {ArtcilesComponent} from './artciles-page/artciles.component';
import {AboutUsComponent} from './about-page/about-us.component';
import {RatingComponent} from './rating-page/rating.component';
import {TeamsComponent} from './teams-page/teams.component';
import {MainPageComponent} from './main-page/main-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'news', component: NewsComponent, pathMatch: 'full'},
  {path: 'articles', component: ArtcilesComponent, pathMatch: 'full'},
  {path: 'about', component: AboutUsComponent, pathMatch: 'full'},
  {path: 'rating', component: RatingComponent, pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
