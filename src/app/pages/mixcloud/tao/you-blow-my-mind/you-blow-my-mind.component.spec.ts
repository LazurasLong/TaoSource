/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YouBlowMyMindComponent } from './you-blow-my-mind.component';

describe('YouBlowMyMindComponent', () => {
  let component: YouBlowMyMindComponent;
  let fixture: ComponentFixture<YouBlowMyMindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouBlowMyMindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouBlowMyMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
