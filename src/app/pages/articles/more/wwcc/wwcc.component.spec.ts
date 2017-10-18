/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WwccComponent } from './wwcc.component';

describe('WwccComponent', () => {
  let component: WwccComponent;
  let fixture: ComponentFixture<WwccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
