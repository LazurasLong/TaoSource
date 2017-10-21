/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi4Component } from './nfi4.component';

describe('Nfi4Component', () => {
  let component: Nfi4Component;
  let fixture: ComponentFixture<Nfi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
