import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CyclistsService, Challenge } from '../cyclists/cyclists.service';

@Component({
  selector: 'app-cyclist-challenges',
  templateUrl: './cyclist-challenges.component.html',
  styleUrls: ['./cyclist-challenges.component.css']
})
export class CyclistChallengesComponent implements OnInit {
  cyclistId: number =0;
  challenges: Challenge[] = [];

  constructor(
    private route: ActivatedRoute,
    private cyclistsService: CyclistsService
  ) {}

  ngOnInit(): void {
    this.cyclistId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.cyclistsService.getCyclistChallenges(this.cyclistId).subscribe(
      (data) => (this.challenges = data),
      (error) => console.error('Error fetching cyclist challenges:', error)
    );
  }
}
