/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot7Component } from './vot7.component';

describe('Vot7Component', () => {
  let component: Vot7Component;
  let fixture: ComponentFixture<Vot7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
