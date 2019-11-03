import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { NewsPageComponent } from '../news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsCreateComponent } from '../components/news-create/news-create.component';
import { NewsDetailComponent } from '../components/news-detail/news-detail.component';
import { NewsEditComponent } from '../components/news-edit/news-edit.component';
import { NewsListComponent } from '../containers/news-list/news-list.component';
import { NewsPreviewComponent } from '../components/news-preview/news-preview.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsCreateComponent,
    NewsDetailComponent,
    NewsEditComponent,
    NewsListComponent,
    NewsPreviewComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
  ],
  exports: [
    NewsPreviewComponent
  ]
})
export class NewsModule {
}
