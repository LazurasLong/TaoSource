/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd12Component } from './skd12.component';

describe('Skd12Component', () => {
  let component: Skd12Component;
  let fixture: ComponentFixture<Skd12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
