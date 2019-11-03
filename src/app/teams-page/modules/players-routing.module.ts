import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersViewComponent } from '../containers/players-view/players-view.component';

const routes: Routes = [
  {path: '/players', component: PlayersViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
