/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd18Component } from './skd18.component';

describe('Skd18Component', () => {
  let component: Skd18Component;
  let fixture: ComponentFixture<Skd18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
