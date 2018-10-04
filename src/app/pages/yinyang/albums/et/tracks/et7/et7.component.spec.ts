/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et7Component } from './et7.component';

describe('Et7Component', () => {
  let component: Et7Component;
  let fixture: ComponentFixture<Et7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
