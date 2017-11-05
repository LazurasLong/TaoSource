/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeWillSoonComponent } from './we-will-soon.component';

describe('WeWillSoonComponent', () => {
  let component: WeWillSoonComponent;
  let fixture: ComponentFixture<WeWillSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeWillSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeWillSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
