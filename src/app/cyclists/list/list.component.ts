import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CyclistsService, Cyclist } from '../cyclists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cyclists: Cyclist[] = [];
  private headers = new HttpHeaders({
    'Ocp-Apim-Subscription-Key': '909550e7c1dc4bedb7f60f6af88d0e21',
  });

  constructor(private cyclistsService: CyclistsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cyclistsService.getCyclists().subscribe(
      (data) => (this.cyclists = data),
      (error) => console.error('Error fetching cyclists:', error)
    );

    this.http.get<Cyclist[]>('https://picagateway.azure-api.net/bikers', { headers: this.headers }).subscribe(
      (data) => (this.cyclists = data),
      (error) => console.error('Error fetching cyclists:', error)
    );
  }
}
