/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterbloodComponent } from './waterblood.component';

describe('WaterbloodComponent', () => {
  let component: WaterbloodComponent;
  let fixture: ComponentFixture<WaterbloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterbloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
