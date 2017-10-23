/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot11Component } from './ot11.component';

describe('Ot11Component', () => {
  let component: Ot11Component;
  let fixture: ComponentFixture<Ot11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
