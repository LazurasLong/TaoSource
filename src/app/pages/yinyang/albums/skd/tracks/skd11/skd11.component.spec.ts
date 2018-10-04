/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd11Component } from './skd11.component';

describe('Skd11Component', () => {
  let component: Skd11Component;
  let fixture: ComponentFixture<Skd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
