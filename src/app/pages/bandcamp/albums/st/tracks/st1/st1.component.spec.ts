/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St1Component } from './st1.component';

describe('St1Component', () => {
  let component: St1Component;
  let fixture: ComponentFixture<St1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
