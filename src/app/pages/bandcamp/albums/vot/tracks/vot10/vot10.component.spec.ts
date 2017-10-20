/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot10Component } from './vot10.component';

describe('Vot10Component', () => {
  let component: Vot10Component;
  let fixture: ComponentFixture<Vot10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
