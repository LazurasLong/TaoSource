/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi2Component } from './nfi2.component';

describe('Nfi2Component', () => {
  let component: Nfi2Component;
  let fixture: ComponentFixture<Nfi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
