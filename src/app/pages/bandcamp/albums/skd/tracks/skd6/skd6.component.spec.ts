/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd6Component } from './skd6.component';

describe('Skd6Component', () => {
  let component: Skd6Component;
  let fixture: ComponentFixture<Skd6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
