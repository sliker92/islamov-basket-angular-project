import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRatingComponent } from './users-rating.component';

describe('UsersRatingComponent', () => {
  let component: UsersRatingComponent;
  let fixture: ComponentFixture<UsersRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
