/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonkingComponent } from './monking.component';

describe('MonkingComponent', () => {
  let component: MonkingComponent;
  let fixture: ComponentFixture<MonkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
