/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShivaKaliDanceImageComponent } from './shiva-kali-dance-image.component';

describe('ShivaKaliDanceImageComponent', () => {
  let component: ShivaKaliDanceImageComponent;
  let fixture: ComponentFixture<ShivaKaliDanceImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShivaKaliDanceImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivaKaliDanceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
