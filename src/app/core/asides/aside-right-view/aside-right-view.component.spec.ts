import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightViewComponent } from './aside-right-view.component';

describe('AsideRightViewComponent', () => {
  let component: AsideRightViewComponent;
  let fixture: ComponentFixture<AsideRightViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRightViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
