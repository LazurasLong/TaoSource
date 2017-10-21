/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BringyoufireComponent } from './bringyoufire.component';

describe('BringyoufireComponent', () => {
  let component: BringyoufireComponent;
  let fixture: ComponentFixture<BringyoufireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BringyoufireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BringyoufireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
