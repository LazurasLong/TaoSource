/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThatSexyFeelingComponent } from './that-sexy-feeling.component';

describe('ThatSexyFeelingComponent', () => {
  let component: ThatSexyFeelingComponent;
  let fixture: ComponentFixture<ThatSexyFeelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThatSexyFeelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThatSexyFeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
