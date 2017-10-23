/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et6Component } from './et6.component';

describe('Et6Component', () => {
  let component: Et6Component;
  let fixture: ComponentFixture<Et6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
