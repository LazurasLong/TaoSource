/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirststepsComponent } from './firststeps.component';

describe('FirststepsComponent', () => {
  let component: FirststepsComponent;
  let fixture: ComponentFixture<FirststepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirststepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirststepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
