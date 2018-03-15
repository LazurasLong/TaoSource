/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SixtyNineComponent } from './sixty-nine.component';

describe('SixtyNineComponent', () => {
  let component: SixtyNineComponent;
  let fixture: ComponentFixture<SixtyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixtyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
