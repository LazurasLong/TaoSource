/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd20Component } from './skd20.component';

describe('Skd20Component', () => {
  let component: Skd20Component;
  let fixture: ComponentFixture<Skd20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
