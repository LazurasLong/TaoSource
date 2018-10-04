/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Nfi11Component } from './nfi11.component';

describe('Nfi11Component', () => {
  let component: Nfi11Component;
  let fixture: ComponentFixture<Nfi11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfi11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfi11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
