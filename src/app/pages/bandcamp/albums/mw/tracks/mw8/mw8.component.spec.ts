/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw8Component } from './mw8.component';

describe('Mw8Component', () => {
  let component: Mw8Component;
  let fixture: ComponentFixture<Mw8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
