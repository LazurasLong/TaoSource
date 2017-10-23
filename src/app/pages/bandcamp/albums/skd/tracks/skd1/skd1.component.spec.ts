/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd1Component } from './skd1.component';

describe('Skd1Component', () => {
  let component: Skd1Component;
  let fixture: ComponentFixture<Skd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
