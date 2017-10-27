/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EternalMastersComponent } from './eternal-masters.component';

describe('EternalMastersComponent', () => {
  let component: EternalMastersComponent;
  let fixture: ComponentFixture<EternalMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternalMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
