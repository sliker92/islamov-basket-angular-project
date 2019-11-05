import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticlesPageComponent } from '../articles-page.component';
import { ArticlesDetailComponent } from '../components/articles-detail/articles-detail.component';
import { ArticlesPreviewComponent } from '../components/articles-preview/articles-preview.component';
import { ArticlesEditComponent } from '../components/articles-edit/articles-edit.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesCreateComponent } from '../components/articles-create/articles-create.component';
import { ArticlesListComponent } from '../containers/articles-list/articles-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlesDetailComponent,
    ArticlesPreviewComponent,
    ArticlesEditComponent,
    ArticlesCreateComponent,
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticlesPreviewComponent
  ]
})
export class ArticlesModule { }
