/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WalkingRiverComponent } from './walking-river.component';

describe('WalkingRiverComponent', () => {
  let component: WalkingRiverComponent;
  let fixture: ComponentFixture<WalkingRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingRiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
