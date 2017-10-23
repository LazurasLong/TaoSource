/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd19Component } from './skd19.component';

describe('Skd19Component', () => {
  let component: Skd19Component;
  let fixture: ComponentFixture<Skd19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
