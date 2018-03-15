/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd8Component } from './skd8.component';

describe('Skd8Component', () => {
  let component: Skd8Component;
  let fixture: ComponentFixture<Skd8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
