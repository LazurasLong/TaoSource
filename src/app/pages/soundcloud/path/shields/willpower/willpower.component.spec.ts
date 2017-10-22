/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WillpowerComponent } from './willpower.component';

describe('WillpowerComponent', () => {
  let component: WillpowerComponent;
  let fixture: ComponentFixture<WillpowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillpowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
