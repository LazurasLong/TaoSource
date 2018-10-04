import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLongRoadComponent } from './the-long-road.component';

describe('TheLongRoadComponent', () => {
  let component: TheLongRoadComponent;
  let fixture: ComponentFixture<TheLongRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLongRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLongRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
