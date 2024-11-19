import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistChallengesComponent } from './cyclist-challenges.component';

describe('CyclistChallengesComponent', () => {
  let component: CyclistChallengesComponent;
  let fixture: ComponentFixture<CyclistChallengesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyclistChallengesComponent]
    });
    fixture = TestBed.createComponent(CyclistChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
