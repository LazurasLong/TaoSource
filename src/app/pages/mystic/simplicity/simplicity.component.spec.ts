/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimplicityComponent } from './simplicity.component';

describe('SimplicityComponent', () => {
  let component: SimplicityComponent;
  let fixture: ComponentFixture<SimplicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
