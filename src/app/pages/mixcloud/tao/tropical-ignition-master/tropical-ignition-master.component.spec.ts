/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TropicalIgnitionMasterComponent } from './tropical-ignition-master.component';

describe('TropicalIgnitionMasterComponent', () => {
  let component: TropicalIgnitionMasterComponent;
  let fixture: ComponentFixture<TropicalIgnitionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropicalIgnitionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropicalIgnitionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
