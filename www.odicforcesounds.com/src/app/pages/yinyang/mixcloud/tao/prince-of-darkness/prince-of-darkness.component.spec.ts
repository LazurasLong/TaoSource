/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrinceOfDarknessComponent } from './prince-of-darkness.component';

describe('PrinceOfDarknessComponent', () => {
  let component: PrinceOfDarknessComponent;
  let fixture: ComponentFixture<PrinceOfDarknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinceOfDarknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinceOfDarknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
