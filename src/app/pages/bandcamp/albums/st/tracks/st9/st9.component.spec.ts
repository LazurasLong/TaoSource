/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St9Component } from './st9.component';

describe('St9Component', () => {
  let component: St9Component;
  let fixture: ComponentFixture<St9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
