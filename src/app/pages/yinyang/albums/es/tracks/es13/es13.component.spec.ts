/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es13Component } from './es13.component';

describe('Es13Component', () => {
  let component: Es13Component;
  let fixture: ComponentFixture<Es13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
