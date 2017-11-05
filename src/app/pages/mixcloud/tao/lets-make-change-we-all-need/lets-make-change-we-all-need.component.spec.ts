/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetsMakeChangeWeAllNeedComponent } from './lets-make-change-we-all-need.component';

describe('LetsMakeChangeWeAllNeedComponent', () => {
  let component: LetsMakeChangeWeAllNeedComponent;
  let fixture: ComponentFixture<LetsMakeChangeWeAllNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsMakeChangeWeAllNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsMakeChangeWeAllNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
