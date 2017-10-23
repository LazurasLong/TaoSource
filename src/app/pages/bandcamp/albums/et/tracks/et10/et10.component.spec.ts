/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et10Component } from './et10.component';

describe('Et10Component', () => {
  let component: Et10Component;
  let fixture: ComponentFixture<Et10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
