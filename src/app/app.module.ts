import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoImageBlockComponent } from './header/logo-image-block/logo-image-block.component';
import { MenuViewComponent } from './main/aside-left/menu-dashboard/components/menu-view/menu-view.component';
import { MenuDashboardComponent } from './main/aside-left/menu-dashboard/containers/menu-dashboard/menu-dashboard.component';
import { NewsComponent } from './main/content/components/news/news.component';
import { ArtcilesComponent } from './main/content/components/artciles/artciles.component';
import { TeamsComponent } from './main/content/components/teams/teams.component';
import { RatingComponent } from './main/content/components/rating/rating.component';
import { AboutUsComponent } from './main/content/components/about-us/about-us.component';
import { NotFoundComponent } from "./not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { SurveyComponent } from './main/aside-right/components/survey/survey.component';
import { UsersRatingComponent } from './main/aside-right/components/users-rating/users-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoImageBlockComponent,
    MenuViewComponent,
    MenuDashboardComponent,
    NewsComponent,
    ArtcilesComponent,
    TeamsComponent,
    RatingComponent,
    AboutUsComponent,
    NotFoundComponent,
    SurveyComponent,
    UsersRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
