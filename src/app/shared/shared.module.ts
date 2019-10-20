import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { ArticleInfoComponent } from './components/article-info/article-info.component';

@NgModule({
  imports: [
    HttpClientModule,

  ],
  providers: [
    PostService
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [PostInfoComponent, ArticleInfoComponent]
})
export class SharedModule {
}
