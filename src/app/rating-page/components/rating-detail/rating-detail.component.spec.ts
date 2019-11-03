import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDetailComponent } from './rating-detail.component';

describe('RatingDetailComponent', () => {
  let component: RatingDetailComponent;
  let fixture: ComponentFixture<RatingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
