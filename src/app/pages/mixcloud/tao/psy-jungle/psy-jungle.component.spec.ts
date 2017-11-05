/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PsyJungleComponent } from './psy-jungle.component';

describe('PsyJungleComponent', () => {
  let component: PsyJungleComponent;
  let fixture: ComponentFixture<PsyJungleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsyJungleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyJungleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
