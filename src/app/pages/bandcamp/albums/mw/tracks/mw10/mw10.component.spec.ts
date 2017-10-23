/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw10Component } from './mw10.component';

describe('Mw10Component', () => {
  let component: Mw10Component;
  let fixture: ComponentFixture<Mw10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
