/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BecauseweloveComponent } from './becausewelove.component';

describe('BecauseweloveComponent', () => {
  let component: BecauseweloveComponent;
  let fixture: ComponentFixture<BecauseweloveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecauseweloveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecauseweloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
