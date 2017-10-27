/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnionPointComponent } from './union-point.component';

describe('UnionPointComponent', () => {
  let component: UnionPointComponent;
  let fixture: ComponentFixture<UnionPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
