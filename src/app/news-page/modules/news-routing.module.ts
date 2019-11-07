import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsPageComponent } from '../news-page.component';
import { NewsCreateComponent } from '../components/news-create/news-create.component';
import { NewsEditComponent } from '../components/news-edit/news-edit.component';
import { NewsDetailComponent } from '../components/news-detail/news-detail.component';
import { NewsListComponent } from '../containers/news-list/news-list.component';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { NewsResolver } from '../../shared/news.resolver';


const routes: Routes = [
  {
    path: '', component: NewsPageComponent, children: [
      {path: '', component: NewsListComponent},
      {path: 'create', component: NewsCreateComponent, canActivate: [AuthGuard]},
      {path: ':id', component: NewsDetailComponent, resolve: {post : NewsResolver}},
      {path: ':id/edit', component: NewsEditComponent, resolve: {post : NewsResolver},canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
