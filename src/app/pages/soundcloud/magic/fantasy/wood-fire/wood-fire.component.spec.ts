/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WoodFireComponent } from './wood-fire.component';

describe('WoodFireComponent', () => {
  let component: WoodFireComponent;
  let fixture: ComponentFixture<WoodFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
