/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es2Component } from './es2.component';

describe('Es2Component', () => {
  let component: Es2Component;
  let fixture: ComponentFixture<Es2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
