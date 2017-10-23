/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd9Component } from './skd9.component';

describe('Skd9Component', () => {
  let component: Skd9Component;
  let fixture: ComponentFixture<Skd9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
