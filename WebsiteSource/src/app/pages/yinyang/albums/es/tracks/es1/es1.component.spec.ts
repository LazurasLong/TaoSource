/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es1Component } from './es1.component';

describe('Es1Component', () => {
  let component: Es1Component;
  let fixture: ComponentFixture<Es1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
