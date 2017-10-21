/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RfyinComponent } from './rfyin.component';

describe('RfyinComponent', () => {
  let component: RfyinComponent;
  let fixture: ComponentFixture<RfyinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfyinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
