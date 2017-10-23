/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi7Component } from './nfi7.component';

describe('Nfi7Component', () => {
  let component: Nfi7Component;
  let fixture: ComponentFixture<Nfi7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
