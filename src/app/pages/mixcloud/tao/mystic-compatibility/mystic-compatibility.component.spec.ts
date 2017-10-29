/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MysticCompatibilityComponent } from './mystic-compatibility.component';

describe('MysticCompatibilityComponent', () => {
  let component: MysticCompatibilityComponent;
  let fixture: ComponentFixture<MysticCompatibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysticCompatibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
