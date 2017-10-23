/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St10Component } from './st10.component';

describe('St10Component', () => {
  let component: St10Component;
  let fixture: ComponentFixture<St10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
