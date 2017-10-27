/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HipnoticDanceComponent } from './hipnotic-dance.component';

describe('HipnoticDanceComponent', () => {
  let component: HipnoticDanceComponent;
  let fixture: ComponentFixture<HipnoticDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipnoticDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipnoticDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
