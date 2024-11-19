import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Challenge {
  id: number;
  name: string;
  description: string;
  challengeLevel: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private apiUrl = 'http://localhost:8081/api/challenges';

  constructor(private http: HttpClient) {}

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl);
  }
}
