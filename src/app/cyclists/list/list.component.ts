import { Component, OnInit } from '@angular/core';
import { CyclistsService, Cyclist } from '../cyclists.service';

@Component({
  selector: 'app-list',
 templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cyclists: Cyclist[] = [];

  constructor(private cyclistsService: CyclistsService) {}

  ngOnInit(): void {
    this.cyclistsService.getCyclists().subscribe(
      (data) => (this.cyclists = data),
      (error) => console.error('Error fetching cyclists:', error)
    );
  }
}
