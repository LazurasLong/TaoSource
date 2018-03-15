/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es3Component } from './es3.component';

describe('Es3Component', () => {
  let component: Es3Component;
  let fixture: ComponentFixture<Es3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
