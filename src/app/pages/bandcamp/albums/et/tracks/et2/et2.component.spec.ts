/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et2Component } from './et2.component';

describe('Et2Component', () => {
  let component: Et2Component;
  let fixture: ComponentFixture<Et2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
