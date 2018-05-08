/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi10Component } from './nfi10.component';

describe('Nfi10Component', () => {
  let component: Nfi10Component;
  let fixture: ComponentFixture<Nfi10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
