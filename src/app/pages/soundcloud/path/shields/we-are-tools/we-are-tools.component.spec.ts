/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeAreToolsComponent } from './we-are-tools.component';

describe('WeAreToolsComponent', () => {
  let component: WeAreToolsComponent;
  let fixture: ComponentFixture<WeAreToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAreToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
