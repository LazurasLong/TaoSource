/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Skd5Component } from './skd5.component';

describe('Skd5Component', () => {
  let component: Skd5Component;
  let fixture: ComponentFixture<Skd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
