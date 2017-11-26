/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St7Component } from './st7.component';

describe('St7Component', () => {
  let component: St7Component;
  let fixture: ComponentFixture<St7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
