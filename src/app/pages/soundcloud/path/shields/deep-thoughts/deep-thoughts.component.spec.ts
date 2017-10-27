/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepThoughtsComponent } from './deep-thoughts.component';

describe('DeepThoughtsComponent', () => {
  let component: DeepThoughtsComponent;
  let fixture: ComponentFixture<DeepThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
