/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et11Component } from './et11.component';

describe('Et11Component', () => {
  let component: Et11Component;
  let fixture: ComponentFixture<Et11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
