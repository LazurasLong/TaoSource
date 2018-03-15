/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et8Component } from './et8.component';

describe('Et8Component', () => {
  let component: Et8Component;
  let fixture: ComponentFixture<Et8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
