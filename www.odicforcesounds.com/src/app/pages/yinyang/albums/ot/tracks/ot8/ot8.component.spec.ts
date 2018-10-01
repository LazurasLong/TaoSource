/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ot8Component } from './ot8.component';

describe('Ot8Component', () => {
  let component: Ot8Component;
  let fixture: ComponentFixture<Ot8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ot8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ot8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
