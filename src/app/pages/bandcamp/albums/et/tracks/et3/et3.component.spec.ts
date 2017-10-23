/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et3Component } from './et3.component';

describe('Et3Component', () => {
  let component: Et3Component;
  let fixture: ComponentFixture<Et3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
