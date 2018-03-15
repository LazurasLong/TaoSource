/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetUsFreeComponent } from './set-us-free.component';

describe('SetUsFreeComponent', () => {
  let component: SetUsFreeComponent;
  let fixture: ComponentFixture<SetUsFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUsFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUsFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
