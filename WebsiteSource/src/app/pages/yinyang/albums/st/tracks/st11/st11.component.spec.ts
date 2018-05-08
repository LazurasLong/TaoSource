/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St11Component } from './st11.component';

describe('St11Component', () => {
  let component: St11Component;
  let fixture: ComponentFixture<St11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
