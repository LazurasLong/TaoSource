/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot5Component } from './vot5.component';

describe('Vot5Component', () => {
  let component: Vot5Component;
  let fixture: ComponentFixture<Vot5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
