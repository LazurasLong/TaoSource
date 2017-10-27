/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExpressionNatureComponent } from './expression-nature.component';

describe('ExpressionNatureComponent', () => {
  let component: ExpressionNatureComponent;
  let fixture: ComponentFixture<ExpressionNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
