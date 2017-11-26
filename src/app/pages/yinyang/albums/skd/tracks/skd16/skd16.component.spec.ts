/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd16Component } from './skd16.component';

describe('Skd16Component', () => {
  let component: Skd16Component;
  let fixture: ComponentFixture<Skd16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
