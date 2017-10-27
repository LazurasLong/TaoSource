/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoneynopowerComponent } from './moneynopower.component';

describe('MoneynopowerComponent', () => {
  let component: MoneynopowerComponent;
  let fixture: ComponentFixture<MoneynopowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneynopowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneynopowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
