/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot4Component } from './ot4.component';

describe('Ot4Component', () => {
  let component: Ot4Component;
  let fixture: ComponentFixture<Ot4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
