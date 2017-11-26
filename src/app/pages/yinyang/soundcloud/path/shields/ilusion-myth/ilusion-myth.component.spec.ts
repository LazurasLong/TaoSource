/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlusionMythComponent } from './ilusion-myth.component';

describe('IlusionMythComponent', () => {
  let component: IlusionMythComponent;
  let fixture: ComponentFixture<IlusionMythComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlusionMythComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlusionMythComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
