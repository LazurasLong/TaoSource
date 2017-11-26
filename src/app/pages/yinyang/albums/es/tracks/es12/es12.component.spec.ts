/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es12Component } from './es12.component';

describe('Es12Component', () => {
  let component: Es12Component;
  let fixture: ComponentFixture<Es12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
