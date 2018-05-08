/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RfyangComponent } from './rfyang.component';

describe('RfyangComponent', () => {
  let component: RfyangComponent;
  let fixture: ComponentFixture<RfyangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfyangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfyangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
