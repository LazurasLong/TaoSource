import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesOnYouComponent } from './eyes-on-you.component';

describe('EyesOnYouComponent', () => {
  let component: EyesOnYouComponent;
  let fixture: ComponentFixture<EyesOnYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyesOnYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyesOnYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
