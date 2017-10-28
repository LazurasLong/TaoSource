/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MysticPortalWeAreOneComponent } from './mystic-portal-we-are-one.component';

describe('MysticPortalWeAreOneComponent', () => {
  let component: MysticPortalWeAreOneComponent;
  let fixture: ComponentFixture<MysticPortalWeAreOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysticPortalWeAreOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticPortalWeAreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
