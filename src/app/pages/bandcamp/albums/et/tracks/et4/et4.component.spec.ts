/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Et4Component } from './et4.component';

describe('Et4Component', () => {
  let component: Et4Component;
  let fixture: ComponentFixture<Et4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Et4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
