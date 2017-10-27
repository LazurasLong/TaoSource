/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstMinutesComponent } from './first-minutes.component';

describe('FirstMinutesComponent', () => {
  let component: FirstMinutesComponent;
  let fixture: ComponentFixture<FirstMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
