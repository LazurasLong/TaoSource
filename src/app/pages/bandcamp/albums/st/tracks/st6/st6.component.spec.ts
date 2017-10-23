/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St6Component } from './st6.component';

describe('St6Component', () => {
  let component: St6Component;
  let fixture: ComponentFixture<St6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
