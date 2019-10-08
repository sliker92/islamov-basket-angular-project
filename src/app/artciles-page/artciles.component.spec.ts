import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcilesComponent } from './artciles.component';

describe('ArtcilesComponent', () => {
  let component: ArtcilesComponent;
  let fixture: ComponentFixture<ArtcilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
