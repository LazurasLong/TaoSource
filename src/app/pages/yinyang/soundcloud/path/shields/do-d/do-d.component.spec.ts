/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoDComponent } from './do-d.component';

describe('DoDComponent', () => {
  let component: DoDComponent;
  let fixture: ComponentFixture<DoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
