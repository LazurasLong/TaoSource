/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaurosComponent } from './tauros.component';

describe('TaurosComponent', () => {
  let component: TaurosComponent;
  let fixture: ComponentFixture<TaurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
