/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rules2playComponent } from './rules2play.component';

describe('Rules2playComponent', () => {
  let component: Rules2playComponent;
  let fixture: ComponentFixture<Rules2playComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rules2playComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rules2playComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
