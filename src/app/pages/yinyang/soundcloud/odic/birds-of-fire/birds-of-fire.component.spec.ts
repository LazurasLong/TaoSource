import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsOfFireComponent } from './birds-of-fire.component';

describe('BirdsOfFireComponent', () => {
  let component: BirdsOfFireComponent;
  let fixture: ComponentFixture<BirdsOfFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsOfFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsOfFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
