import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCyclistComponent } from './create-cyclist.component';

describe('CreateCyclistComponent', () => {
  let component: CreateCyclistComponent;
  let fixture: ComponentFixture<CreateCyclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCyclistComponent]
    });
    fixture = TestBed.createComponent(CreateCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
