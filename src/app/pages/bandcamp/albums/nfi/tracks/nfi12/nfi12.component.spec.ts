/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi12Component } from './nfi12.component';

describe('Nfi12Component', () => {
  let component: Nfi12Component;
  let fixture: ComponentFixture<Nfi12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
