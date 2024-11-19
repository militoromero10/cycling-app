import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
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
  private apiUrl = 'https://picagateway.azure-api.net/challenges';

  constructor(private http: HttpClient) {}

  getChallenges(): Observable<Challenge[]> {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '909550e7c1dc4bedb7f60f6af88d0e21'
    });

    return this.http.get<Challenge[]>(this.apiUrl, { headers });
  }
}
