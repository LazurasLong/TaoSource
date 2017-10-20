/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MorerulesComponent } from './morerules.component';

describe('MorerulesComponent', () => {
  let component: MorerulesComponent;
  let fixture: ComponentFixture<MorerulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorerulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
