/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot9Component } from './ot9.component';

describe('Ot9Component', () => {
  let component: Ot9Component;
  let fixture: ComponentFixture<Ot9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
