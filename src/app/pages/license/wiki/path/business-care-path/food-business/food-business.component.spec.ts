import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBusinessComponent } from './food-business.component';

describe('FoodBusinessComponent', () => {
  let component: FoodBusinessComponent;
  let fixture: ComponentFixture<FoodBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
