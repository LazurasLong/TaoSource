/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot9Component } from './vot9.component';

describe('Vot9Component', () => {
  let component: Vot9Component;
  let fixture: ComponentFixture<Vot9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
