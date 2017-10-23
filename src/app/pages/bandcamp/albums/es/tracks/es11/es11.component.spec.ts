/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es11Component } from './es11.component';

describe('Es11Component', () => {
  let component: Es11Component;
  let fixture: ComponentFixture<Es11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
