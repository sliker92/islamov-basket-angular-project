import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogoImageBlockComponent} from './shared/components/header/logo-image-block/logo-image-block.component';
import {MenuViewComponent} from './shared/components/menu-dashboard/components/menu-view/menu-view.component';
import {MenuDashboardComponent} from './shared/components/menu-dashboard/containers/menu-dashboard/menu-dashboard.component';
import {NewsComponent} from './news-page/news.component';
import {ArticlesPageComponent} from './articles-page/articles.component';
import {TeamsComponent} from './teams-page/teams.component';
import {RatingComponent} from './rating-page/rating.component';
import {AboutUsComponent} from './about-page/about-us.component';
import {SurveyComponent} from './shared/components/features/survey/survey.component';
import {UsersRatingComponent} from './shared/components/features/users-rating/users-rating.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {FeaturesDashboardComponent} from './shared/components/features/features-dashboard/features-dashboard.component';
import {ArticleComponent} from './shared/components/article/article.component';
import {PostComponent} from './shared/components/post/post.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {FakeBackendInterceptor} from './fake-back-end/fake-back-end.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginModule} from './login.module';
import {PostService} from './shared/services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {PostInfoComponent} from './shared/components/post-info/post-info.component';
import {ArticleInfoComponent} from './shared/components/article-info/article-info.component';
import {HeaderComponent} from './shared/components/header/container/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoImageBlockComponent,
    MenuViewComponent,
    MenuDashboardComponent,
    NewsComponent,
    ArticlesPageComponent,
    TeamsComponent,
    RatingComponent,
    AboutUsComponent,
    SurveyComponent,
    UsersRatingComponent,
    HomePageComponent,
    FeaturesDashboardComponent,
    ArticleComponent,
    PostComponent,
    MainLayoutComponent,
    PostInfoComponent,
    ArticleInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    PostService
  ],
  exports: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
