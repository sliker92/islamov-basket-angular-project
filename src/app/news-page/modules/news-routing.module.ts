import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsPageComponent } from '../news-page.component';
import { NewsCreateComponent } from '../components/news-create/news-create.component';
import { NewsEditComponent } from '../components/news-edit/news-edit.component';
import { NewsDetailComponent } from '../components/news-detail/news-detail.component';
import { NewsListComponent } from '../containers/news-list/news-list.component';


const routes: Routes = [
  {
    path: '', component: NewsPageComponent, children: [
      {path: '', component: NewsListComponent},
      {path: 'create', component: NewsCreateComponent},
      {path: ':id', component: NewsDetailComponent},
      {path: ':id/edit', component: NewsEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
