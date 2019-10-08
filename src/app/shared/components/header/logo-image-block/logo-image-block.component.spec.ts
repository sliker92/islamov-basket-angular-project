import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoImageBlockComponent } from './logo-image-block.component';

describe('LogoImageBlockComponent', () => {
  let component: LogoImageBlockComponent;
  let fixture: ComponentFixture<LogoImageBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoImageBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
