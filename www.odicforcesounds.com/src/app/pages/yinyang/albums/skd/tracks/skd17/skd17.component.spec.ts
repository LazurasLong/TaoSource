/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd17Component } from './skd17.component';

describe('Skd17Component', () => {
  let component: Skd17Component;
  let fixture: ComponentFixture<Skd17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
