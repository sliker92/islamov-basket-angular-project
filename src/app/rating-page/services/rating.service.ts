import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rating } from '../models/rating.interface';

@Injectable()
export class RatingService {
  constructor(private http: HttpClient) { }

  getRating() {
    return this.http.get<Rating[]>('/api/rating');
  }
}
