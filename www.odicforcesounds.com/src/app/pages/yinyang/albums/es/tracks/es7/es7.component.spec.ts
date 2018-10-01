/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es7Component } from './es7.component';

describe('Es7Component', () => {
  let component: Es7Component;
  let fixture: ComponentFixture<Es7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
