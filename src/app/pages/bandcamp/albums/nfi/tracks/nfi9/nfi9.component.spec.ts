/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi9Component } from './nfi9.component';

describe('Nfi9Component', () => {
  let component: Nfi9Component;
  let fixture: ComponentFixture<Nfi9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
