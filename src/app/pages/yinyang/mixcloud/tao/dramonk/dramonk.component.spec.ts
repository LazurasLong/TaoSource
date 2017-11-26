/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DramonkComponent } from './dramonk.component';

describe('DramonkComponent', () => {
  let component: DramonkComponent;
  let fixture: ComponentFixture<DramonkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramonkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramonkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
