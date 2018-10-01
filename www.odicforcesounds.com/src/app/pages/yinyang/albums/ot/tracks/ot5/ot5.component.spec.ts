/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot5Component } from './ot5.component';

describe('Ot5Component', () => {
  let component: Ot5Component;
  let fixture: ComponentFixture<Ot5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
