/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NfiComponent } from './nfi.component';

describe('NfiComponent', () => {
  let component: NfiComponent;
  let fixture: ComponentFixture<NfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
