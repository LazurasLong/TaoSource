/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw4Component } from './mw4.component';

describe('Mw4Component', () => {
  let component: Mw4Component;
  let fixture: ComponentFixture<Mw4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
