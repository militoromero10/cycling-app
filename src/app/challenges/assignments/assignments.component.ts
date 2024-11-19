import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignaments.component.html',
  styleUrls: ['./assignaments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '909550e7c1dc4bedb7f60f6af88d0e21'
    });

    this.http
      .get<any[]>('https://picagateway.azure-api.net/challenges', { headers })
      .subscribe(
        (data) => (this.assignments = data),
        (error) => console.error('Error fetching challenges:', error)
      );
  }
}
