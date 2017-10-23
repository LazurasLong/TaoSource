/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw2Component } from './mw2.component';

describe('Mw2Component', () => {
  let component: Mw2Component;
  let fixture: ComponentFixture<Mw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
