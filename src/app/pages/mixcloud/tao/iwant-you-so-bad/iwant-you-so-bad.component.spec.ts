/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IWantYouSoBadComponent } from './iwant-you-so-bad.component';

describe('IWantYouSoBadComponent', () => {
  let component: IWantYouSoBadComponent;
  let fixture: ComponentFixture<IWantYouSoBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWantYouSoBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantYouSoBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
