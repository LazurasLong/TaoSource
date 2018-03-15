/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es8Component } from './es8.component';

describe('Es8Component', () => {
  let component: Es8Component;
  let fixture: ComponentFixture<Es8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
