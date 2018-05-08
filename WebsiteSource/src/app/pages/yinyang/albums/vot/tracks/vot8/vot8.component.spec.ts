/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot8Component } from './vot8.component';

describe('Vot8Component', () => {
  let component: Vot8Component;
  let fixture: ComponentFixture<Vot8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
