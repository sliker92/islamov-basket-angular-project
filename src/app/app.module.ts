import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogoImageBlockComponent} from './shared/components/header/logo-image-block/logo-image-block.component';
import {MenuViewComponent} from './shared/components/menu-dashboard/components/menu-view/menu-view.component';
import {MenuDashboardComponent} from './shared/components/menu-dashboard/containers/menu-dashboard/menu-dashboard.component';
import {NewsComponent} from './news-page/news.component';
import {ArtcilesComponent} from './artciles-page/artciles.component';
import {TeamsComponent} from './teams-page/teams.component';
import {RatingComponent} from './rating-page/rating.component';
import {AboutUsComponent} from './about-page/about-us.component';
import {SurveyComponent} from './shared/components/features/survey/survey.component';
import {UsersRatingComponent} from './shared/components/features/users-rating/users-rating.component';
import {HomePageComponent} from './home-page/home-page.component';
import {StaticComponent} from './shared/components/static/static.component';
import {AppRoutingModule} from './app-routing.module';
import {FeaturesDashboardComponent} from './shared/components/features/features-dashboard/features-dashboard.component';
import {ArticleComponent} from './shared/components/article/article.component';
import {PostComponent} from './shared/components/post/post.component';
import {MainPageComponent} from './main-page/main-page.component';


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
    SurveyComponent,
    UsersRatingComponent,
    HomePageComponent,
    StaticComponent,
    FeaturesDashboardComponent,
    ArticleComponent,
    PostComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
