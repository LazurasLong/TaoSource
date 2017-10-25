/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeriouslyComponent } from './seriously.component';

describe('SeriouslyComponent', () => {
  let component: SeriouslyComponent;
  let fixture: ComponentFixture<SeriouslyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriouslyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriouslyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
