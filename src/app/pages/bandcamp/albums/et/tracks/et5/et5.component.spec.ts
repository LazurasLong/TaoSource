/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et5Component } from './et5.component';

describe('Et5Component', () => {
  let component: Et5Component;
  let fixture: ComponentFixture<Et5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
