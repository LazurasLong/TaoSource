/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St8Component } from './st8.component';

describe('St8Component', () => {
  let component: St8Component;
  let fixture: ComponentFixture<St8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
