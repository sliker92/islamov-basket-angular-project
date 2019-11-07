import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesPageComponent } from '../articles-page.component';
import { ArticlesDetailComponent } from '../components/articles-detail/articles-detail.component';
import { ArticlesEditComponent } from '../components/articles-edit/articles-edit.component';
import { ArticlesCreateComponent } from '../components/articles-create/articles-create.component';
import { ArticlesListComponent } from '../containers/articles-list/articles-list.component';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ArticlesResolver } from '../../shared/articles.resolver';


const routes: Routes = [
  {
    path: '', component: ArticlesPageComponent, children: [
      {path: '', component: ArticlesListComponent},
      {path: 'create', component: ArticlesCreateComponent, canActivate: [AuthGuard]},
      {path: ':id', component: ArticlesDetailComponent, resolve: {post : ArticlesResolver}},
      {path: ':id/edit', component: ArticlesEditComponent, resolve: {post : ArticlesResolver}, canActivate: [AuthGuard]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
