/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DanceLikeWaterComponent } from './dance-like-water.component';

describe('DanceLikeWaterComponent', () => {
  let component: DanceLikeWaterComponent;
  let fixture: ComponentFixture<DanceLikeWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceLikeWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceLikeWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
