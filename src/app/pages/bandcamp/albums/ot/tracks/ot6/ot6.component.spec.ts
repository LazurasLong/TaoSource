/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot6Component } from './ot6.component';

describe('Ot6Component', () => {
  let component: Ot6Component;
  let fixture: ComponentFixture<Ot6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
