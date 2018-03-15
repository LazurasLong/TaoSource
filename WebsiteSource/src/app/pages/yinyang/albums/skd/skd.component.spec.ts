/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkdComponent } from './skd.component';

describe('SkdComponent', () => {
  let component: SkdComponent;
  let fixture: ComponentFixture<SkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
