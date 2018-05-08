/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St5Component } from './st5.component';

describe('St5Component', () => {
  let component: St5Component;
  let fixture: ComponentFixture<St5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
