import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdicPointsComponent } from './odic-points.component';

describe('OdicPointsComponent', () => {
  let component: OdicPointsComponent;
  let fixture: ComponentFixture<OdicPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdicPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdicPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
