import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  providers: [
    PostsService
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class SharedModule { }
