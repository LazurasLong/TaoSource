/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetalsoulComponent } from './metalsoul.component';

describe('MetalsoulComponent', () => {
  let component: MetalsoulComponent;
  let fixture: ComponentFixture<MetalsoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalsoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
