/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakeitRightComponent } from './makeit-right.component';

describe('MakeitRightComponent', () => {
  let component: MakeitRightComponent;
  let fixture: ComponentFixture<MakeitRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeitRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeitRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
