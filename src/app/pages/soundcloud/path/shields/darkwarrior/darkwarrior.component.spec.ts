/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DarkwarriorComponent } from './darkwarrior.component';

describe('DarkwarriorComponent', () => {
  let component: DarkwarriorComponent;
  let fixture: ComponentFixture<DarkwarriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkwarriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkwarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
