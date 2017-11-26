/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot4Component } from './vot4.component';

describe('Vot4Component', () => {
  let component: Vot4Component;
  let fixture: ComponentFixture<Vot4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
