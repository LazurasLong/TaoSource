/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UtellmeComponent } from './utellme.component';

describe('UtellmeComponent', () => {
  let component: UtellmeComponent;
  let fixture: ComponentFixture<UtellmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtellmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtellmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
