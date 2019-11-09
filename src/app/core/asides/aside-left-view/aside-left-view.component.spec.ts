import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLeftViewComponent } from './aside-left-view.component';

describe('AsideLeftViewComponent', () => {
  let component: AsideLeftViewComponent;
  let fixture: ComponentFixture<AsideLeftViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideLeftViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideLeftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
