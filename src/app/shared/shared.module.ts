import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
  ButtonComponent
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
    ButtonComponent,
  ]
})
export class SharedModule { }
