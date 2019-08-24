/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd10Component } from './skd10.component';

describe('Skd10Component', () => {
  let component: Skd10Component;
  let fixture: ComponentFixture<Skd10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
