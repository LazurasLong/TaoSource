/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd3Component } from './skd3.component';

describe('Skd3Component', () => {
  let component: Skd3Component;
  let fixture: ComponentFixture<Skd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
