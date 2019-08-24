/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi3Component } from './nfi3.component';

describe('Nfi3Component', () => {
  let component: Nfi3Component;
  let fixture: ComponentFixture<Nfi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
