import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingPageComponent } from '../rating-page.component';
import { RatingDetailComponent } from '../components/rating-detail/rating-detail.component';
import { RatingRoutingModule } from './rating-routing.module';
import { RatingListComponent } from '../containers/rating-list/rating-list.component';
import { RatingService } from '../services/rating.service';



@NgModule({
  declarations: [
    RatingPageComponent,
    RatingDetailComponent,
    RatingListComponent
  ],
  providers: [
    RatingService
  ],
  imports: [
    CommonModule,
    RatingRoutingModule
  ]
})
export class RatingModule { }
