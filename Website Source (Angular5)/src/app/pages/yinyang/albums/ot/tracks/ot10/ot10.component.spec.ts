/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot10Component } from './ot10.component';

describe('Ot10Component', () => {
  let component: Ot10Component;
  let fixture: ComponentFixture<Ot10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
