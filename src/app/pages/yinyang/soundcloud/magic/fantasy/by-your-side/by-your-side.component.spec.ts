/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ByYourSideComponent } from './by-your-side.component';

describe('ByYourSideComponent', () => {
  let component: ByYourSideComponent;
  let fixture: ComponentFixture<ByYourSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByYourSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByYourSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
