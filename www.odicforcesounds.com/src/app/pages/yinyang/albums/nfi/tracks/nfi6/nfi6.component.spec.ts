/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi6Component } from './nfi6.component';

describe('Nfi6Component', () => {
  let component: Nfi6Component;
  let fixture: ComponentFixture<Nfi6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
