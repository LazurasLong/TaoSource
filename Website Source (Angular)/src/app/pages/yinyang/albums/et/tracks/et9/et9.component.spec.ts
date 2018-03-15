/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et9Component } from './et9.component';

describe('Et9Component', () => {
  let component: Et9Component;
  let fixture: ComponentFixture<Et9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
