/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CareUsAndWeWillCareYouComponent } from './care-us-and-we-will-care-you.component';

describe('CareUsAndWeWillCareYouComponent', () => {
  let component: CareUsAndWeWillCareYouComponent;
  let fixture: ComponentFixture<CareUsAndWeWillCareYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareUsAndWeWillCareYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareUsAndWeWillCareYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
