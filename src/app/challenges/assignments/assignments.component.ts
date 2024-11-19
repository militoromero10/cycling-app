import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignaments.component.html',
  styleUrls: ['./assignaments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8081/api/challenges')
      .subscribe(data => this.assignments = data);
  }
}
