/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St13Component } from './st13.component';

describe('St13Component', () => {
  let component: St13Component;
  let fixture: ComponentFixture<St13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
