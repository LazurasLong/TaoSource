/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SolplexComponent } from './solplex.component';

describe('SolplexComponent', () => {
  let component: SolplexComponent;
  let fixture: ComponentFixture<SolplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
