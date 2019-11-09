import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingPageComponent } from '../rating-page.component';
import { RatingListComponent } from '../containers/rating-list/rating-list.component';


const routes: Routes = [
  {path: '', component: RatingPageComponent, children: [
      {path: '', component: RatingListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingRoutingModule {
}
