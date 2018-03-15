/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LastdaySacrificeComponent } from './lastday-sacrifice.component';

describe('LastdaySacrificeComponent', () => {
  let component: LastdaySacrificeComponent;
  let fixture: ComponentFixture<LastdaySacrificeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastdaySacrificeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastdaySacrificeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
