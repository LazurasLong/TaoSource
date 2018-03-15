/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot2Component } from './vot2.component';

describe('Vot2Component', () => {
  let component: Vot2Component;
  let fixture: ComponentFixture<Vot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
