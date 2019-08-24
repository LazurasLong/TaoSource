/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi8Component } from './nfi8.component';

describe('Nfi8Component', () => {
  let component: Nfi8Component;
  let fixture: ComponentFixture<Nfi8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
