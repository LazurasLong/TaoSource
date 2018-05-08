/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeadandWeWillFollowComponent } from './leadand-we-will-follow.component';

describe('LeadandWeWillFollowComponent', () => {
  let component: LeadandWeWillFollowComponent;
  let fixture: ComponentFixture<LeadandWeWillFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadandWeWillFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadandWeWillFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
