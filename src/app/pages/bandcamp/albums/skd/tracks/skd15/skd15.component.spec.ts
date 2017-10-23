/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd15Component } from './skd15.component';

describe('Skd15Component', () => {
  let component: Skd15Component;
  let fixture: ComponentFixture<Skd15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
