/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw7Component } from './mw7.component';

describe('Mw7Component', () => {
  let component: Mw7Component;
  let fixture: ComponentFixture<Mw7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
