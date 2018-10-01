import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HermitWalkForLibertyComponent } from './hermit-walk-for-liberty.component';

describe('HermitWalkForLibertyComponent', () => {
  let component: HermitWalkForLibertyComponent;
  let fixture: ComponentFixture<HermitWalkForLibertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HermitWalkForLibertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HermitWalkForLibertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
