/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd14Component } from './skd14.component';

describe('Skd14Component', () => {
  let component: Skd14Component;
  let fixture: ComponentFixture<Skd14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
