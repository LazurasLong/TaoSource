/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd7Component } from './skd7.component';

describe('Skd7Component', () => {
  let component: Skd7Component;
  let fixture: ComponentFixture<Skd7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
