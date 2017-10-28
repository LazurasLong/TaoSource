/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterBloodComponent } from './water-blood.component';

describe('WaterBloodComponent', () => {
  let component: WaterBloodComponent;
  let fixture: ComponentFixture<WaterBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
