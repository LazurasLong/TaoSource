/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MysonComponent } from './myson.component';

describe('MysonComponent', () => {
  let component: MysonComponent;
  let fixture: ComponentFixture<MysonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
