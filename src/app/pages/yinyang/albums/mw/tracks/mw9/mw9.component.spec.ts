/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw9Component } from './mw9.component';

describe('Mw9Component', () => {
  let component: Mw9Component;
  let fixture: ComponentFixture<Mw9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
