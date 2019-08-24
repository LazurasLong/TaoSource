/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MagicTouchInTheShadowsComponent } from './magic-touch-in-the-shadows.component';

describe('MagicTouchInTheShadowsComponent', () => {
  let component: MagicTouchInTheShadowsComponent;
  let fixture: ComponentFixture<MagicTouchInTheShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicTouchInTheShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicTouchInTheShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
