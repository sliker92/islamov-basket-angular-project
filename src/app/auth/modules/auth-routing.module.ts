import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../register/register.component';
import { RegisterGuard } from '../guards/register.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [ RegisterGuard ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
