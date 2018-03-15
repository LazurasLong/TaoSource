/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es4Component } from './es4.component';

describe('Es4Component', () => {
  let component: Es4Component;
  let fixture: ComponentFixture<Es4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
