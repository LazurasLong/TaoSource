/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd2Component } from './skd2.component';

describe('Skd2Component', () => {
  let component: Skd2Component;
  let fixture: ComponentFixture<Skd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
