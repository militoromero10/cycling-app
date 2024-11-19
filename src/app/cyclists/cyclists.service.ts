import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cyclist {
  id: number;  // Asegúrate de que el objeto Cyclist tenga un campo "id" que identifique al ciclista
  piun: number;
  name: string;
  birthdate: string;
}

export interface Challenge {
  id: number;
  bikerId: number;
  challenge: string;
  creditNumber: number;
  bikerChallengeStatus: string;
  creationDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class CyclistsService {
  private apiUrl = 'http://localhost:8082/api/bikers';

  constructor(private http: HttpClient) {}

  getCyclists(): Observable<Cyclist[]> {
    return this.http.get<Cyclist[]>(this.apiUrl);
  }

  createCyclist(cyclistData: { piun: number; name: string; birthdate: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, cyclistData);
  }

  // Método para obtener los retos asociados a un ciclista
  getCyclistChallenges(cyclistId: number): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${this.apiUrl}/${cyclistId}/challenges`);
  }
}
