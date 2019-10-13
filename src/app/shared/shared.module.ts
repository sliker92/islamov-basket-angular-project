import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';

@NgModule({
  imports: [
    HttpClientModule,

  ],
  providers: [
    PostService
  ],
  exports: [
    HttpClientModule
  ]
})
export class SharedModule {
}
