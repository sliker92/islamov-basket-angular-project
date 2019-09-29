import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsComponent} from "./main/content/components/news/news.component";
import {ArtcilesComponent} from "./main/content/components/artciles/artciles.component";
import {TeamsComponent} from "./main/content/components/teams/teams.component";
import {RatingComponent} from "./main/content/components/rating/rating.component";
import {AboutUsComponent} from "./main/content/components/about-us/about-us.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'news', component: NewsComponent, pathMatch: 'full'},
  {path: 'articles', component: ArtcilesComponent, pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent, pathMatch: 'full'},
  {path: 'rating', component: RatingComponent, pathMatch: 'full'},
  {path: 'about', component: AboutUsComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
