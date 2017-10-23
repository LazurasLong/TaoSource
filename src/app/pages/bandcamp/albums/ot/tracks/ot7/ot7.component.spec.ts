/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot7Component } from './ot7.component';

describe('Ot7Component', () => {
  let component: Ot7Component;
  let fixture: ComponentFixture<Ot7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
