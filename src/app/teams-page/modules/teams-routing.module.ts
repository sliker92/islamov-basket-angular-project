import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsViewComponent } from '../containers/teams-view/teams-view.component';

const routes: Routes = [
  {path: '', component: TeamsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
