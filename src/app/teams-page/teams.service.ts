import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Team} from '../shared/interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor( private http: HttpClient) { }

  getTeams() {
    return this.http.get<Team[]>('/api/teams');
  }
}
