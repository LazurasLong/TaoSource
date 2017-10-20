/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot11Component } from './vot11.component';

describe('Vot11Component', () => {
  let component: Vot11Component;
  let fixture: ComponentFixture<Vot11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
