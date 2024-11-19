import { Component, OnInit } from '@angular/core';
import { ChallengesService, Challenge } from '../challenges.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  challenges: Challenge[] = [];

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.challengesService.getChallenges().subscribe(
      (data) => (this.challenges = data),
      (error) => console.error('Error fetching challenges:', error)
    );
  }
}
