/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonkComponent } from './monk.component';

describe('MonkComponent', () => {
  let component: MonkComponent;
  let fixture: ComponentFixture<MonkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
