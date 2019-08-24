/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoobooComponent } from './booboo.component';

describe('BoobooComponent', () => {
  let component: BoobooComponent;
  let fixture: ComponentFixture<BoobooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoobooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoobooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
