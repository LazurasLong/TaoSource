/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot3Component } from './vot3.component';

describe('Vot3Component', () => {
  let component: Vot3Component;
  let fixture: ComponentFixture<Vot3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
