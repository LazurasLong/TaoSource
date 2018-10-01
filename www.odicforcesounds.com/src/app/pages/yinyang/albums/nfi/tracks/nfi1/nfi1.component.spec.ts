/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi1Component } from './nfi1.component';

describe('Nfi1Component', () => {
  let component: Nfi1Component;
  let fixture: ComponentFixture<Nfi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
