/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot6Component } from './vot6.component';

describe('Vot6Component', () => {
  let component: Vot6Component;
  let fixture: ComponentFixture<Vot6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
