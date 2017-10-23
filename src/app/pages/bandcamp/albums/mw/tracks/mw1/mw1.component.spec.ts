/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw1Component } from './mw1.component';

describe('Mw1Component', () => {
  let component: Mw1Component;
  let fixture: ComponentFixture<Mw1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
