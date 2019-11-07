import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ArticlesResolver } from './articles.resolver';
import { NewsResolver } from './news.resolver';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LoaderComponent
  ],
  providers: [
    PostsService,
    ArticlesResolver,
    NewsResolver
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    ButtonComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
