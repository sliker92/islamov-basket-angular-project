import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ArticlesModule } from './articles-page/modules/articles.module';
import { NewsModule } from './news-page/modules/news.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ArticlesModule,
    NewsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
