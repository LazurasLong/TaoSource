/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mw5Component } from './mw5.component';

describe('Mw5Component', () => {
  let component: Mw5Component;
  let fixture: ComponentFixture<Mw5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mw5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
