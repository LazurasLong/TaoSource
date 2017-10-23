/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St12Component } from './st12.component';

describe('St12Component', () => {
  let component: St12Component;
  let fixture: ComponentFixture<St12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
