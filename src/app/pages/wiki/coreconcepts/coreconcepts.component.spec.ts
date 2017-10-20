/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreconceptsComponent } from './coreconcepts.component';

describe('CoreconceptsComponent', () => {
  let component: CoreconceptsComponent;
  let fixture: ComponentFixture<CoreconceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreconceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
