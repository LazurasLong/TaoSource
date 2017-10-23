/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd13Component } from './skd13.component';

describe('Skd13Component', () => {
  let component: Skd13Component;
  let fixture: ComponentFixture<Skd13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
