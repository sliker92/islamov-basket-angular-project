import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesPageComponent } from '../articles-page.component';
import { ArticlesDetailComponent } from '../components/articles-detail/articles-detail.component';
import { ArticlesEditComponent } from '../components/articles-edit/articles-edit.component';
import { ArticlesCreateComponent } from '../components/articles-create/articles-create.component';
import { ArticlesListComponent } from '../containers/articles-list/articles-list.component';

const routes: Routes = [
  {
    path: '', component: ArticlesPageComponent, children: [
      {path: '', component: ArticlesListComponent},
      {path: 'create', component: ArticlesCreateComponent},
      {path: ':id', component: ArticlesDetailComponent},
      {path: ':id/edit', component: ArticlesEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
