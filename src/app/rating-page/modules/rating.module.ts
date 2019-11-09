import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingPageComponent } from '../rating-page.component';
import { RatingDetailComponent } from '../components/rating-detail/rating-detail.component';
import { RatingRoutingModule } from './rating-routing.module';
import { RatingListComponent } from '../containers/rating-list/rating-list.component';
import { RatingService } from '../services/rating.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    RatingPageComponent,
    RatingDetailComponent,
    RatingListComponent
  ],
  providers: [
    RatingService
  ],
  exports: [
    RatingDetailComponent
  ],
  imports: [
    CommonModule,
    RatingRoutingModule,
    SharedModule
  ]
})
export class RatingModule { }
