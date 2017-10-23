/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et1Component } from './et1.component';

describe('Et1Component', () => {
  let component: Et1Component;
  let fixture: ComponentFixture<Et1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
