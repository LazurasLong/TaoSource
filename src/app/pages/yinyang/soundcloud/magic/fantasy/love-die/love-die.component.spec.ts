/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoveDieComponent } from './love-die.component';

describe('LoveDieComponent', () => {
  let component: LoveDieComponent;
  let fixture: ComponentFixture<LoveDieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveDieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
