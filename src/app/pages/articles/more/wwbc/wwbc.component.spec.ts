/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WwbcComponent } from './wwbc.component';

describe('WwbcComponent', () => {
  let component: WwbcComponent;
  let fixture: ComponentFixture<WwbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
