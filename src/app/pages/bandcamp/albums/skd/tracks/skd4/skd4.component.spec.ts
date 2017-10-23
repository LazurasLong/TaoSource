/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd4Component } from './skd4.component';

describe('Skd4Component', () => {
  let component: Skd4Component;
  let fixture: ComponentFixture<Skd4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
