/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi5Component } from './nfi5.component';

describe('Nfi5Component', () => {
  let component: Nfi5Component;
  let fixture: ComponentFixture<Nfi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
