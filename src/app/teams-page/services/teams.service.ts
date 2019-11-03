import { Injectable } from '@angular/core';

import { Team } from '../models/team.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamsService {
  constructor( private http: HttpClient) { }

  getTeams() {
    return this.http.get<Team[]>('/api/teams');
  }
}
