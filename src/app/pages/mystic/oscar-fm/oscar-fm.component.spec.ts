/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscarFmComponent } from './oscar-fm.component';

describe('OscarFmComponent', () => {
  let component: OscarFmComponent;
  let fixture: ComponentFixture<OscarFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscarFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscarFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
