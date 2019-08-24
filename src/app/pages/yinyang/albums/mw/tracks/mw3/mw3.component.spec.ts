/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw3Component } from './mw3.component';

describe('Mw3Component', () => {
  let component: Mw3Component;
  let fixture: ComponentFixture<Mw3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
