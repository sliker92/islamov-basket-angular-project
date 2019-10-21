import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rating} from '../shared/interfaces/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor( private http: HttpClient) { }

  getRating() {
    return this.http.get<Rating[]>('/api/rating');
  }
}

