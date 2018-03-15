/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw6Component } from './mw6.component';

describe('Mw6Component', () => {
  let component: Mw6Component;
  let fixture: ComponentFixture<Mw6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
