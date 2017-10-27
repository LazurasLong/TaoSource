/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PathshieldsComponent } from './pathshields.component';

describe('PathshieldsComponent', () => {
  let component: PathshieldsComponent;
  let fixture: ComponentFixture<PathshieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathshieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathshieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
