/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VotComponent } from './vot.component';

describe('VotComponent', () => {
  let component: VotComponent;
  let fixture: ComponentFixture<VotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
